import {
  d as v,
  o as s,
  c,
  r as h,
  n as H,
  a as G,
  t as C,
  b as Z,
  w as y,
  e as u,
  T as R,
  _ as f,
  u as F1,
  i as U1,
  f as J1,
  g as x1,
  h as b,
  j as p,
  k as d,
  l as W,
  m as v1,
  p as V,
  q as I,
  s as s1,
  v as N,
  x as w1,
  y as Z1,
  z as G1,
  A as R1,
  B as K,
  F as _,
  C as z,
  D as a1,
  E as n1,
  G as w,
  H as O,
  I as q1,
  J as r1,
  K as J,
  L as e1,
  M as W1,
  N as D,
  O as K1,
  P as f1,
  Q as z1,
  R as c1,
  S as Q1,
  U as P1,
  V as B1,
  W as X1,
  X as Y1,
  Y as e2,
  Z as d1,
  $ as o2,
  a0 as l2,
  a1 as t2,
  a2,
  a3 as Y,
  a4 as o1,
  a5 as i2,
} from './framework.3-QL-XRe.js'
const s2 = v({
    __name: 'VPBadge',
    props: { text: {}, type: { default: 'tip' } },
    setup(a) {
      return (o, e) => (
        s(),
        c(
          'span',
          { class: H(['VPBadge', o.type]) },
          [h(o.$slots, 'default', {}, () => [G(C(o.text), 1)])],
          2,
        )
      )
    },
  }),
  n2 = { key: 0, class: 'VPBackdrop' },
  r2 = v({
    __name: 'VPBackdrop',
    props: { show: { type: Boolean } },
    setup(a) {
      return (o, e) => (
        s(),
        Z(
          R,
          { name: 'fade' },
          {
            default: y(() => [o.show ? (s(), c('div', n2)) : u('', !0)]),
            _: 1,
          },
        )
      )
    },
  }),
  c2 = f(r2, [['__scopeId', 'data-v-4987c248']]),
  A = F1
function d2(a, o) {
  let e,
    l = !1
  return () => {
    e && clearTimeout(e),
      l
        ? (e = setTimeout(a, o))
        : (a(), (l = !0) && setTimeout(() => (l = !1), o))
  }
}
function k1(a) {
  return /^\//.test(a) ? a : `/${a}`
}
function V1(a) {
  const {
    pathname: o,
    search: e,
    hash: l,
    protocol: t,
  } = new URL(a, 'http://a.com')
  if (U1(a) || a.startsWith('#') || !t.startsWith('http') || !J1(o)) return a
  const { site: i } = A(),
    n =
      o.endsWith('/') || o.endsWith('.html')
        ? a
        : a.replace(
            /(?:(^\.+)\/)?.*$/,
            `$1${o.replace(/(\.md)?$/, i.value.cleanUrls ? '' : '.html')}${e}${l}`,
          )
  return x1(n)
}
function l1({ correspondingLink: a = !1 } = {}) {
  const { site: o, localeIndex: e, page: l, theme: t, hash: i } = A(),
    n = b(() => {
      var m, k
      return {
        label: (m = o.value.locales[e.value]) == null ? void 0 : m.label,
        link:
          ((k = o.value.locales[e.value]) == null ? void 0 : k.link) ||
          (e.value === 'root' ? '/' : `/${e.value}/`),
      }
    })
  return {
    localeLinks: b(() =>
      Object.entries(o.value.locales).flatMap(([m, k]) =>
        n.value.label === k.label
          ? []
          : {
              text: k.label,
              link:
                h2(
                  k.link || (m === 'root' ? '/' : `/${m}/`),
                  t.value.i18nRouting !== !1 && a,
                  l.value.relativePath.slice(n.value.link.length - 1),
                  !o.value.cleanUrls,
                ) + i.value,
            },
      ),
    ),
    currentLang: n,
  }
}
function h2(a, o, e, l) {
  return o
    ? a.replace(/\/$/, '') +
        k1(
          e
            .replace(/(^|\/)index\.md$/, '$1')
            .replace(/\.md$/, l ? '.html' : ''),
        )
    : a
}
const p2 = { class: 'NotFound' },
  m2 = { class: 'code' },
  y2 = { class: 'title' },
  v2 = { class: 'quote' },
  k2 = { class: 'action' },
  u2 = ['href', 'aria-label'],
  b2 = v({
    __name: 'NotFound',
    setup(a) {
      const { theme: o } = A(),
        { currentLang: e } = l1()
      return (l, t) => {
        var i, n, r, m, k
        return (
          s(),
          c('div', p2, [
            p(
              'p',
              m2,
              C(((i = d(o).notFound) == null ? void 0 : i.code) ?? '404'),
              1,
            ),
            p(
              'h1',
              y2,
              C(
                ((n = d(o).notFound) == null ? void 0 : n.title) ??
                  'PAGE NOT FOUND',
              ),
              1,
            ),
            t[0] || (t[0] = p('div', { class: 'divider' }, null, -1)),
            p(
              'blockquote',
              v2,
              C(
                ((r = d(o).notFound) == null ? void 0 : r.quote) ??
                  "But if you don't change your direction, and if you keep looking, you may end up where you are heading.",
              ),
              1,
            ),
            p('div', k2, [
              p(
                'a',
                {
                  class: 'link',
                  href: d(x1)(d(e).link),
                  'aria-label':
                    ((m = d(o).notFound) == null ? void 0 : m.linkLabel) ??
                    'go to home',
                },
                C(
                  ((k = d(o).notFound) == null ? void 0 : k.linkText) ??
                    'Take me home',
                ),
                9,
                u2,
              ),
            ]),
          ])
        )
      }
    },
  }),
  M2 = f(b2, [['__scopeId', 'data-v-6cef9d24']])
function T1(a, o) {
  if (Array.isArray(a)) return t1(a)
  if (a == null) return []
  o = k1(o)
  const e = Object.keys(a)
      .sort((t, i) => i.split('/').length - t.split('/').length)
      .find((t) => o.startsWith(k1(t))),
    l = e ? a[e] : []
  return Array.isArray(l) ? t1(l) : t1(l.items, l.base)
}
function x2(a) {
  const o = []
  let e = 0
  for (const l in a) {
    const t = a[l]
    if (t.items) {
      e = o.push(t)
      continue
    }
    o[e] || o.push({ items: [] }), o[e].items.push(t)
  }
  return o
}
function w2(a) {
  const o = []
  function e(l) {
    for (const t of l)
      t.text &&
        t.link &&
        o.push({ text: t.text, link: t.link, docFooterText: t.docFooterText }),
        t.items && e(t.items)
  }
  return e(a), o
}
function u1(a, o) {
  return Array.isArray(o)
    ? o.some((e) => u1(a, e))
    : W(a, o.link)
      ? !0
      : o.items
        ? u1(a, o.items)
        : !1
}
function t1(a, o) {
  return [...a].map((e) => {
    const l = { ...e },
      t = l.base || o
    return (
      t && l.link && (l.link = t + l.link),
      l.items && (l.items = t1(l.items, t)),
      l
    )
  })
}
function F() {
  const { frontmatter: a, page: o, theme: e } = A(),
    l = v1('(min-width: 960px)'),
    t = V(!1),
    i = b(() => {
      const $ = e.value.sidebar,
        g = o.value.relativePath
      return $ ? T1($, g) : []
    }),
    n = V(i.value)
  I(i, ($, g) => {
    JSON.stringify($) !== JSON.stringify(g) && (n.value = i.value)
  })
  const r = b(
      () =>
        a.value.sidebar !== !1 &&
        n.value.length > 0 &&
        a.value.layout !== 'home',
    ),
    m = b(() =>
      k
        ? a.value.aside == null
          ? e.value.aside === 'left'
          : a.value.aside === 'left'
        : !1,
    ),
    k = b(() =>
      a.value.layout === 'home'
        ? !1
        : a.value.aside != null
          ? !!a.value.aside
          : e.value.aside !== !1,
    ),
    M = b(() => r.value && l.value),
    x = b(() => (r.value ? x2(n.value) : []))
  function B() {
    t.value = !0
  }
  function L() {
    t.value = !1
  }
  function S() {
    t.value ? L() : B()
  }
  return {
    isOpen: t,
    sidebar: n,
    sidebarGroups: x,
    hasSidebar: r,
    hasAside: k,
    leftAside: m,
    isSidebarEnabled: M,
    open: B,
    close: L,
    toggle: S,
  }
}
function Z2(a, o) {
  let e
  s1(() => {
    e = a.value ? document.activeElement : void 0
  }),
    N(() => {
      window.addEventListener('keyup', l)
    }),
    w1(() => {
      window.removeEventListener('keyup', l)
    })
  function l(t) {
    t.key === 'Escape' && a.value && (o(), e == null || e.focus())
  }
}
function f2(a) {
  const { page: o, hash: e } = A(),
    l = V(!1),
    t = b(() => a.value.collapsed != null),
    i = b(() => !!a.value.link),
    n = V(!1),
    r = () => {
      n.value = W(o.value.relativePath, a.value.link)
    }
  I([o, a, e], r), N(r)
  const m = b(() =>
      n.value
        ? !0
        : a.value.items
          ? u1(o.value.relativePath, a.value.items)
          : !1,
    ),
    k = b(() => !!(a.value.items && a.value.items.length))
  s1(() => {
    l.value = !!(t.value && a.value.collapsed)
  }),
    Z1(() => {
      ;(n.value || m.value) && (l.value = !1)
    })
  function M() {
    t.value && (l.value = !l.value)
  }
  return {
    collapsed: l,
    collapsible: t,
    isLink: i,
    isActiveLink: n,
    hasActiveLink: m,
    hasChildren: k,
    toggle: M,
  }
}
function B2() {
  const { hasSidebar: a } = F(),
    o = v1('(min-width: 960px)'),
    e = v1('(min-width: 1280px)')
  return {
    isAsideEnabled: b(() =>
      !e.value && !o.value ? !1 : a.value ? e.value : o.value,
    ),
  }
}
const b1 = []
function I1(a) {
  return (
    (typeof a.outline == 'object' &&
      !Array.isArray(a.outline) &&
      a.outline.label) ||
    a.outlineTitle ||
    'On this page'
  )
}
function H1(a) {
  const o = [...document.querySelectorAll('.VPDoc :where(h1,h2,h3,h4,h5,h6)')]
    .filter((e) => e.id && e.hasChildNodes())
    .map((e) => {
      const l = Number(e.tagName[1])
      return { element: e, title: V2(e), link: '#' + e.id, level: l }
    })
  return H2(o, a)
}
function V2(a) {
  let o = ''
  for (const e of a.childNodes)
    if (e.nodeType === 1) {
      if (
        e.classList.contains('VPBadge') ||
        e.classList.contains('header-anchor') ||
        e.classList.contains('ignore-header')
      )
        continue
      o += e.textContent
    } else e.nodeType === 3 && (o += e.textContent)
  return o.trim()
}
function H2(a, o) {
  if (o === !1) return []
  const e = (typeof o == 'object' && !Array.isArray(o) ? o.level : o) || 2,
    [l, t] = typeof e == 'number' ? [e, e] : e === 'deep' ? [2, 6] : e
  return C2(a, l, t)
}
function L2(a, o) {
  const { isAsideEnabled: e } = B2(),
    l = d2(i, 100)
  let t = null
  N(() => {
    requestAnimationFrame(i), window.addEventListener('scroll', l)
  }),
    G1(() => {
      n(location.hash)
    }),
    w1(() => {
      window.removeEventListener('scroll', l)
    })
  function i() {
    if (!e.value) return
    const r = window.scrollY,
      m = window.innerHeight,
      k = document.body.offsetHeight,
      M = Math.abs(r + m - k) < 1,
      x = b1
        .map(({ element: L, link: S }) => ({ link: S, top: A2(L) }))
        .filter(({ top: L }) => !Number.isNaN(L))
        .sort((L, S) => L.top - S.top)
    if (!x.length) {
      n(null)
      return
    }
    if (r < 1) {
      n(null)
      return
    }
    if (M) {
      n(x[x.length - 1].link)
      return
    }
    let B = null
    for (const { link: L, top: S } of x) {
      if (S > r + R1() + 4) break
      B = L
    }
    n(B)
  }
  function n(r) {
    t && t.classList.remove('active'),
      r == null
        ? (t = null)
        : (t = a.value.querySelector(`a[href="${decodeURIComponent(r)}"]`))
    const m = t
    m
      ? (m.classList.add('active'),
        (o.value.style.top = m.offsetTop + 39 + 'px'),
        (o.value.style.opacity = '1'))
      : ((o.value.style.top = '33px'), (o.value.style.opacity = '0'))
  }
}
function A2(a) {
  let o = 0
  for (; a !== document.body; ) {
    if (a === null) return NaN
    ;(o += a.offsetTop), (a = a.offsetParent)
  }
  return o
}
function C2(a, o, e) {
  b1.length = 0
  const l = [],
    t = []
  return (
    a.forEach((i) => {
      const n = { ...i, children: [] }
      let r = t[t.length - 1]
      for (; r && r.level >= n.level; ) t.pop(), (r = t[t.length - 1])
      if (
        n.element.classList.contains('ignore-header') ||
        (r && 'shouldIgnore' in r)
      ) {
        t.push({ level: n.level, shouldIgnore: !0 })
        return
      }
      n.level > e ||
        n.level < o ||
        (b1.push({ element: n.element, link: n.link }),
        r ? r.children.push(n) : l.push(n),
        t.push(n))
    }),
    l
  )
}
const g2 = ['href', 'title'],
  _2 = v({
    __name: 'VPDocOutlineItem',
    props: { headers: {}, root: { type: Boolean } },
    setup(a) {
      function o({ target: e }) {
        const l = e.href.split('#')[1],
          t = document.getElementById(decodeURIComponent(l))
        t == null || t.focus({ preventScroll: !0 })
      }
      return (e, l) => {
        const t = K('VPDocOutlineItem', !0)
        return (
          s(),
          c(
            'ul',
            { class: H(['VPDocOutlineItem', e.root ? 'root' : 'nested']) },
            [
              (s(!0),
              c(
                _,
                null,
                z(
                  e.headers,
                  ({ children: i, link: n, title: r }) => (
                    s(),
                    c('li', null, [
                      p(
                        'a',
                        {
                          class: 'outline-link',
                          href: n,
                          onClick: o,
                          title: r,
                        },
                        C(r),
                        9,
                        g2,
                      ),
                      i != null && i.length
                        ? (s(),
                          Z(t, { key: 0, headers: i }, null, 8, ['headers']))
                        : u('', !0),
                    ])
                  ),
                ),
                256,
              )),
            ],
            2,
          )
        )
      }
    },
  }),
  N1 = f(_2, [['__scopeId', 'data-v-889749e4']]),
  j2 = { class: 'content' },
  S2 = {
    'aria-level': '2',
    class: 'outline-title',
    id: 'doc-outline-aria-label',
    role: 'heading',
  },
  $2 = v({
    __name: 'VPDocAsideOutline',
    setup(a) {
      const { frontmatter: o, theme: e } = A(),
        l = a1([])
      n1(() => {
        l.value = H1(o.value.outline ?? e.value.outline)
      })
      const t = V(),
        i = V()
      return (
        L2(t, i),
        (n, r) => (
          s(),
          c(
            'nav',
            {
              'aria-labelledby': 'doc-outline-aria-label',
              class: H([
                'VPDocAsideOutline',
                { 'has-outline': l.value.length > 0 },
              ]),
              ref_key: 'container',
              ref: t,
            },
            [
              p('div', j2, [
                p(
                  'div',
                  { class: 'outline-marker', ref_key: 'marker', ref: i },
                  null,
                  512,
                ),
                p('div', S2, C(d(I1)(d(e))), 1),
                w(N1, { headers: l.value, root: !0 }, null, 8, ['headers']),
              ]),
            ],
            2,
          )
        )
      )
    },
  }),
  q2 = f($2, [['__scopeId', 'data-v-0f6180bf']]),
  z2 = { class: 'VPDocAsideCarbonAds' },
  P2 = v({
    __name: 'VPDocAsideCarbonAds',
    props: { carbonAds: {} },
    setup(a) {
      const o = () => null
      return (e, l) => (
        s(),
        c('div', z2, [
          w(d(o), { 'carbon-ads': e.carbonAds }, null, 8, ['carbon-ads']),
        ])
      )
    },
  }),
  T2 = { class: 'VPDocAside' },
  I2 = v({
    __name: 'VPDocAside',
    setup(a) {
      const { theme: o } = A()
      return (e, l) => (
        s(),
        c('div', T2, [
          h(e.$slots, 'aside-top', {}, void 0, !0),
          h(e.$slots, 'aside-outline-before', {}, void 0, !0),
          w(q2),
          h(e.$slots, 'aside-outline-after', {}, void 0, !0),
          l[0] || (l[0] = p('div', { class: 'spacer' }, null, -1)),
          h(e.$slots, 'aside-ads-before', {}, void 0, !0),
          d(o).carbonAds
            ? (s(),
              Z(P2, { key: 0, 'carbon-ads': d(o).carbonAds }, null, 8, [
                'carbon-ads',
              ]))
            : u('', !0),
          h(e.$slots, 'aside-ads-after', {}, void 0, !0),
          h(e.$slots, 'aside-bottom', {}, void 0, !0),
        ])
      )
    },
  }),
  N2 = f(I2, [['__scopeId', 'data-v-7e3d2936']])
function D2() {
  const { theme: a, page: o } = A()
  return b(() => {
    const { text: e = 'Edit this page', pattern: l = '' } =
      a.value.editLink || {}
    let t
    return (
      typeof l == 'function'
        ? (t = l(o.value))
        : (t = l.replace(/:path/g, o.value.filePath)),
      { url: t, text: e }
    )
  })
}
function O2() {
  const { page: a, theme: o, frontmatter: e } = A()
  return b(() => {
    var k, M, x, B, L, S, $, g
    const l = T1(o.value.sidebar, a.value.relativePath),
      t = w2(l),
      i = E2(t, (P) => P.link.replace(/[?#].*$/, '')),
      n = i.findIndex((P) => W(a.value.relativePath, P.link)),
      r =
        (((k = o.value.docFooter) == null ? void 0 : k.prev) === !1 &&
          !e.value.prev) ||
        e.value.prev === !1,
      m =
        (((M = o.value.docFooter) == null ? void 0 : M.next) === !1 &&
          !e.value.next) ||
        e.value.next === !1
    return {
      prev: r
        ? void 0
        : {
            text:
              (typeof e.value.prev == 'string'
                ? e.value.prev
                : typeof e.value.prev == 'object'
                  ? e.value.prev.text
                  : void 0) ??
              ((x = i[n - 1]) == null ? void 0 : x.docFooterText) ??
              ((B = i[n - 1]) == null ? void 0 : B.text),
            link:
              (typeof e.value.prev == 'object' ? e.value.prev.link : void 0) ??
              ((L = i[n - 1]) == null ? void 0 : L.link),
          },
      next: m
        ? void 0
        : {
            text:
              (typeof e.value.next == 'string'
                ? e.value.next
                : typeof e.value.next == 'object'
                  ? e.value.next.text
                  : void 0) ??
              ((S = i[n + 1]) == null ? void 0 : S.docFooterText) ??
              (($ = i[n + 1]) == null ? void 0 : $.text),
            link:
              (typeof e.value.next == 'object' ? e.value.next.link : void 0) ??
              ((g = i[n + 1]) == null ? void 0 : g.link),
          },
    }
  })
}
function E2(a, o) {
  const e = new Set()
  return a.filter((l) => {
    const t = o(l)
    return e.has(t) ? !1 : e.add(t)
  })
}
const E = v({
    __name: 'VPLink',
    props: {
      tag: {},
      href: {},
      noIcon: { type: Boolean },
      target: {},
      rel: {},
    },
    setup(a) {
      const o = a,
        e = b(() => o.tag ?? (o.href ? 'a' : 'span')),
        l = b(() => (o.href && q1.test(o.href)) || o.target === '_blank')
      return (t, i) => (
        s(),
        Z(
          O(e.value),
          {
            class: H([
              'VPLink',
              {
                link: t.href,
                'vp-external-link-icon': l.value,
                'no-icon': t.noIcon,
              },
            ]),
            href: t.href ? d(V1)(t.href) : void 0,
            target: t.target ?? (l.value ? '_blank' : void 0),
            rel: t.rel ?? (l.value ? 'noreferrer' : void 0),
          },
          { default: y(() => [h(t.$slots, 'default')]), _: 3 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  F2 = { class: 'VPLastUpdated' },
  U2 = ['datetime'],
  J2 = v({
    __name: 'VPDocFooterLastUpdated',
    setup(a) {
      const { theme: o, page: e, lang: l } = A(),
        t = b(() => new Date(e.value.lastUpdated)),
        i = b(() => t.value.toISOString()),
        n = V('')
      return (
        N(() => {
          s1(() => {
            var r, m, k
            n.value = new Intl.DateTimeFormat(
              (m =
                (r = o.value.lastUpdated) == null ? void 0 : r.formatOptions) !=
                null && m.forceLocale
                ? l.value
                : void 0,
              ((k = o.value.lastUpdated) == null
                ? void 0
                : k.formatOptions) ?? {
                dateStyle: 'short',
                timeStyle: 'short',
              },
            ).format(t.value)
          })
        }),
        (r, m) => {
          var k
          return (
            s(),
            c('p', F2, [
              G(
                C(
                  ((k = d(o).lastUpdated) == null ? void 0 : k.text) ||
                    d(o).lastUpdatedText ||
                    'Last updated',
                ) + ': ',
                1,
              ),
              p('time', { datetime: i.value }, C(n.value), 9, U2),
            ])
          )
        }
      )
    },
  }),
  G2 = f(J2, [['__scopeId', 'data-v-907c4bc6']]),
  R2 = { key: 0, class: 'VPDocFooter' },
  W2 = { key: 0, class: 'edit-info' },
  K2 = { key: 0, class: 'edit-link' },
  Q2 = { key: 1, class: 'last-updated' },
  X2 = {
    key: 1,
    class: 'prev-next',
    'aria-labelledby': 'doc-footer-aria-label',
  },
  Y2 = { class: 'pager' },
  e0 = ['innerHTML'],
  o0 = ['innerHTML'],
  l0 = { class: 'pager' },
  t0 = ['innerHTML'],
  a0 = ['innerHTML'],
  i0 = v({
    __name: 'VPDocFooter',
    setup(a) {
      const { theme: o, page: e, frontmatter: l } = A(),
        t = D2(),
        i = O2(),
        n = b(() => o.value.editLink && l.value.editLink !== !1),
        r = b(() => e.value.lastUpdated),
        m = b(() => n.value || r.value || i.value.prev || i.value.next)
      return (k, M) => {
        var x, B, L, S
        return m.value
          ? (s(),
            c('footer', R2, [
              h(k.$slots, 'doc-footer-before', {}, void 0, !0),
              n.value || r.value
                ? (s(),
                  c('div', W2, [
                    n.value
                      ? (s(),
                        c('div', K2, [
                          w(
                            E,
                            {
                              class: 'edit-link-button',
                              href: d(t).url,
                              'no-icon': !0,
                            },
                            {
                              default: y(() => [
                                M[0] ||
                                  (M[0] = p(
                                    'span',
                                    { class: 'vpi-square-pen edit-link-icon' },
                                    null,
                                    -1,
                                  )),
                                G(' ' + C(d(t).text), 1),
                              ]),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ),
                        ]))
                      : u('', !0),
                    r.value ? (s(), c('div', Q2, [w(G2)])) : u('', !0),
                  ]))
                : u('', !0),
              ((x = d(i).prev) != null && x.link) ||
              ((B = d(i).next) != null && B.link)
                ? (s(),
                  c('nav', X2, [
                    M[1] ||
                      (M[1] = p(
                        'span',
                        {
                          class: 'visually-hidden',
                          id: 'doc-footer-aria-label',
                        },
                        'Pager',
                        -1,
                      )),
                    p('div', Y2, [
                      (L = d(i).prev) != null && L.link
                        ? (s(),
                          Z(
                            E,
                            {
                              key: 0,
                              class: 'pager-link prev',
                              href: d(i).prev.link,
                            },
                            {
                              default: y(() => {
                                var $
                                return [
                                  p(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        (($ = d(o).docFooter) == null
                                          ? void 0
                                          : $.prev) || 'Previous page',
                                    },
                                    null,
                                    8,
                                    e0,
                                  ),
                                  p(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: d(i).prev.text,
                                    },
                                    null,
                                    8,
                                    o0,
                                  ),
                                ]
                              }),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ))
                        : u('', !0),
                    ]),
                    p('div', l0, [
                      (S = d(i).next) != null && S.link
                        ? (s(),
                          Z(
                            E,
                            {
                              key: 0,
                              class: 'pager-link next',
                              href: d(i).next.link,
                            },
                            {
                              default: y(() => {
                                var $
                                return [
                                  p(
                                    'span',
                                    {
                                      class: 'desc',
                                      innerHTML:
                                        (($ = d(o).docFooter) == null
                                          ? void 0
                                          : $.next) || 'Next page',
                                    },
                                    null,
                                    8,
                                    t0,
                                  ),
                                  p(
                                    'span',
                                    {
                                      class: 'title',
                                      innerHTML: d(i).next.text,
                                    },
                                    null,
                                    8,
                                    a0,
                                  ),
                                ]
                              }),
                              _: 1,
                            },
                            8,
                            ['href'],
                          ))
                        : u('', !0),
                    ]),
                  ]))
                : u('', !0),
            ]))
          : u('', !0)
      }
    },
  }),
  s0 = f(i0, [['__scopeId', 'data-v-884f3168']]),
  n0 = { class: 'container' },
  r0 = { class: 'aside-container' },
  c0 = { class: 'aside-content' },
  d0 = { class: 'content' },
  h0 = { class: 'content-container' },
  p0 = { class: 'main' },
  m0 = v({
    __name: 'VPDoc',
    setup(a) {
      const { theme: o } = A(),
        e = r1(),
        { hasSidebar: l, hasAside: t, leftAside: i } = F(),
        n = b(() => e.path.replace(/[./]+/g, '_').replace(/_html$/, ''))
      return (r, m) => {
        const k = K('Content')
        return (
          s(),
          c(
            'div',
            { class: H(['VPDoc', { 'has-sidebar': d(l), 'has-aside': d(t) }]) },
            [
              h(r.$slots, 'doc-top', {}, void 0, !0),
              p('div', n0, [
                d(t)
                  ? (s(),
                    c(
                      'div',
                      { key: 0, class: H(['aside', { 'left-aside': d(i) }]) },
                      [
                        m[0] ||
                          (m[0] = p(
                            'div',
                            { class: 'aside-curtain' },
                            null,
                            -1,
                          )),
                        p('div', r0, [
                          p('div', c0, [
                            w(N2, null, {
                              'aside-top': y(() => [
                                h(r.$slots, 'aside-top', {}, void 0, !0),
                              ]),
                              'aside-bottom': y(() => [
                                h(r.$slots, 'aside-bottom', {}, void 0, !0),
                              ]),
                              'aside-outline-before': y(() => [
                                h(
                                  r.$slots,
                                  'aside-outline-before',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-outline-after': y(() => [
                                h(
                                  r.$slots,
                                  'aside-outline-after',
                                  {},
                                  void 0,
                                  !0,
                                ),
                              ]),
                              'aside-ads-before': y(() => [
                                h(r.$slots, 'aside-ads-before', {}, void 0, !0),
                              ]),
                              'aside-ads-after': y(() => [
                                h(r.$slots, 'aside-ads-after', {}, void 0, !0),
                              ]),
                              _: 3,
                            }),
                          ]),
                        ]),
                      ],
                      2,
                    ))
                  : u('', !0),
                p('div', d0, [
                  p('div', h0, [
                    h(r.$slots, 'doc-before', {}, void 0, !0),
                    p('main', p0, [
                      w(
                        k,
                        {
                          class: H([
                            'vp-doc',
                            [
                              n.value,
                              d(o).externalLinkIcon &&
                                'external-link-icon-enabled',
                            ],
                          ]),
                        },
                        null,
                        8,
                        ['class'],
                      ),
                    ]),
                    w(s0, null, {
                      'doc-footer-before': y(() => [
                        h(r.$slots, 'doc-footer-before', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                    h(r.$slots, 'doc-after', {}, void 0, !0),
                  ]),
                ]),
              ]),
              h(r.$slots, 'doc-bottom', {}, void 0, !0),
            ],
            2,
          )
        )
      }
    },
  }),
  y0 = f(m0, [['__scopeId', 'data-v-dff61d0c']]),
  v0 = v({
    __name: 'VPButton',
    props: {
      tag: {},
      size: { default: 'medium' },
      theme: { default: 'brand' },
      text: {},
      href: {},
      target: {},
      rel: {},
    },
    setup(a) {
      const o = a,
        e = b(() => o.href && q1.test(o.href)),
        l = b(() => o.tag || (o.href ? 'a' : 'button'))
      return (t, i) => (
        s(),
        Z(
          O(l.value),
          {
            class: H(['VPButton', [t.size, t.theme]]),
            href: t.href ? d(V1)(t.href) : void 0,
            target: o.target ?? (e.value ? '_blank' : void 0),
            rel: o.rel ?? (e.value ? 'noreferrer' : void 0),
          },
          { default: y(() => [G(C(t.text), 1)]), _: 1 },
          8,
          ['class', 'href', 'target', 'rel'],
        )
      )
    },
  }),
  k0 = f(v0, [['__scopeId', 'data-v-474388d6']]),
  u0 = ['src', 'alt'],
  b0 = v({
    inheritAttrs: !1,
    __name: 'VPImage',
    props: { image: {}, alt: {} },
    setup(a) {
      return (o, e) => {
        const l = K('VPImage', !0)
        return o.image
          ? (s(),
            c(
              _,
              { key: 0 },
              [
                typeof o.image == 'string' || 'src' in o.image
                  ? (s(),
                    c(
                      'img',
                      J(
                        { key: 0, class: 'VPImage' },
                        typeof o.image == 'string'
                          ? o.$attrs
                          : { ...o.image, ...o.$attrs },
                        {
                          src: d(x1)(
                            typeof o.image == 'string' ? o.image : o.image.src,
                          ),
                          alt:
                            o.alt ??
                            (typeof o.image == 'string'
                              ? ''
                              : o.image.alt || ''),
                        },
                      ),
                      null,
                      16,
                      u0,
                    ))
                  : (s(),
                    c(
                      _,
                      { key: 1 },
                      [
                        w(
                          l,
                          J(
                            {
                              class: 'dark',
                              image: o.image.dark,
                              alt: o.image.alt,
                            },
                            o.$attrs,
                          ),
                          null,
                          16,
                          ['image', 'alt'],
                        ),
                        w(
                          l,
                          J(
                            {
                              class: 'light',
                              image: o.image.light,
                              alt: o.image.alt,
                            },
                            o.$attrs,
                          ),
                          null,
                          16,
                          ['image', 'alt'],
                        ),
                      ],
                      64,
                    )),
              ],
              64,
            ))
          : u('', !0)
      }
    },
  }),
  i1 = f(b0, [['__scopeId', 'data-v-d7785860']]),
  M0 = { class: 'container' },
  x0 = { class: 'main' },
  w0 = { key: 0, class: 'name' },
  Z0 = ['innerHTML'],
  f0 = ['innerHTML'],
  B0 = ['innerHTML'],
  V0 = { key: 0, class: 'actions' },
  H0 = { key: 0, class: 'image' },
  L0 = { class: 'image-container' },
  A0 = v({
    __name: 'VPHero',
    props: { name: {}, text: {}, tagline: {}, image: {}, actions: {} },
    setup(a) {
      const o = e1('hero-image-slot-exists')
      return (e, l) => (
        s(),
        c(
          'div',
          { class: H(['VPHero', { 'has-image': e.image || d(o) }]) },
          [
            p('div', M0, [
              p('div', x0, [
                h(e.$slots, 'home-hero-info-before', {}, void 0, !0),
                h(
                  e.$slots,
                  'home-hero-info',
                  {},
                  () => [
                    e.name
                      ? (s(),
                        c('h1', w0, [
                          p(
                            'span',
                            { innerHTML: e.name, class: 'clip' },
                            null,
                            8,
                            Z0,
                          ),
                        ]))
                      : u('', !0),
                    e.text
                      ? (s(),
                        c(
                          'p',
                          { key: 1, innerHTML: e.text, class: 'text' },
                          null,
                          8,
                          f0,
                        ))
                      : u('', !0),
                    e.tagline
                      ? (s(),
                        c(
                          'p',
                          { key: 2, innerHTML: e.tagline, class: 'tagline' },
                          null,
                          8,
                          B0,
                        ))
                      : u('', !0),
                  ],
                  !0,
                ),
                h(e.$slots, 'home-hero-info-after', {}, void 0, !0),
                e.actions
                  ? (s(),
                    c('div', V0, [
                      (s(!0),
                      c(
                        _,
                        null,
                        z(
                          e.actions,
                          (t) => (
                            s(),
                            c('div', { key: t.link, class: 'action' }, [
                              w(
                                k0,
                                {
                                  tag: 'a',
                                  size: 'medium',
                                  theme: t.theme,
                                  text: t.text,
                                  href: t.link,
                                  target: t.target,
                                  rel: t.rel,
                                },
                                null,
                                8,
                                ['theme', 'text', 'href', 'target', 'rel'],
                              ),
                            ])
                          ),
                        ),
                        128,
                      )),
                    ]))
                  : u('', !0),
                h(e.$slots, 'home-hero-actions-after', {}, void 0, !0),
              ]),
              e.image || d(o)
                ? (s(),
                  c('div', H0, [
                    p('div', L0, [
                      l[0] ||
                        (l[0] = p('div', { class: 'image-bg' }, null, -1)),
                      h(
                        e.$slots,
                        'home-hero-image',
                        {},
                        () => [
                          e.image
                            ? (s(),
                              Z(
                                i1,
                                { key: 0, class: 'image-src', image: e.image },
                                null,
                                8,
                                ['image'],
                              ))
                            : u('', !0),
                        ],
                        !0,
                      ),
                    ]),
                  ]))
                : u('', !0),
            ]),
          ],
          2,
        )
      )
    },
  }),
  C0 = f(A0, [['__scopeId', 'data-v-4314de97']]),
  g0 = v({
    __name: 'VPHomeHero',
    setup(a) {
      const { frontmatter: o } = A()
      return (e, l) =>
        d(o).hero
          ? (s(),
            Z(
              C0,
              {
                key: 0,
                class: 'VPHomeHero',
                name: d(o).hero.name,
                text: d(o).hero.text,
                tagline: d(o).hero.tagline,
                image: d(o).hero.image,
                actions: d(o).hero.actions,
              },
              {
                'home-hero-info-before': y(() => [
                  h(e.$slots, 'home-hero-info-before'),
                ]),
                'home-hero-info': y(() => [h(e.$slots, 'home-hero-info')]),
                'home-hero-info-after': y(() => [
                  h(e.$slots, 'home-hero-info-after'),
                ]),
                'home-hero-actions-after': y(() => [
                  h(e.$slots, 'home-hero-actions-after'),
                ]),
                'home-hero-image': y(() => [h(e.$slots, 'home-hero-image')]),
                _: 3,
              },
              8,
              ['name', 'text', 'tagline', 'image', 'actions'],
            ))
          : u('', !0)
    },
  }),
  _0 = { class: 'box' },
  j0 = { key: 0, class: 'icon' },
  S0 = ['innerHTML'],
  $0 = ['innerHTML'],
  q0 = ['innerHTML'],
  z0 = { key: 4, class: 'link-text' },
  P0 = { class: 'link-text-value' },
  T0 = v({
    __name: 'VPFeature',
    props: {
      icon: {},
      title: {},
      details: {},
      link: {},
      linkText: {},
      rel: {},
      target: {},
    },
    setup(a) {
      return (o, e) => (
        s(),
        Z(
          E,
          {
            class: 'VPFeature',
            href: o.link,
            rel: o.rel,
            target: o.target,
            'no-icon': !0,
            tag: o.link ? 'a' : 'div',
          },
          {
            default: y(() => [
              p('article', _0, [
                typeof o.icon == 'object' && o.icon.wrap
                  ? (s(),
                    c('div', j0, [
                      w(
                        i1,
                        {
                          image: o.icon,
                          alt: o.icon.alt,
                          height: o.icon.height || 48,
                          width: o.icon.width || 48,
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width'],
                      ),
                    ]))
                  : typeof o.icon == 'object'
                    ? (s(),
                      Z(
                        i1,
                        {
                          key: 1,
                          image: o.icon,
                          alt: o.icon.alt,
                          height: o.icon.height || 48,
                          width: o.icon.width || 48,
                        },
                        null,
                        8,
                        ['image', 'alt', 'height', 'width'],
                      ))
                    : o.icon
                      ? (s(),
                        c(
                          'div',
                          { key: 2, class: 'icon', innerHTML: o.icon },
                          null,
                          8,
                          S0,
                        ))
                      : u('', !0),
                p('h2', { class: 'title', innerHTML: o.title }, null, 8, $0),
                o.details
                  ? (s(),
                    c(
                      'p',
                      { key: 3, class: 'details', innerHTML: o.details },
                      null,
                      8,
                      q0,
                    ))
                  : u('', !0),
                o.linkText
                  ? (s(),
                    c('div', z0, [
                      p('p', P0, [
                        G(C(o.linkText) + ' ', 1),
                        e[0] ||
                          (e[0] = p(
                            'span',
                            { class: 'vpi-arrow-right link-text-icon' },
                            null,
                            -1,
                          )),
                      ]),
                    ]))
                  : u('', !0),
              ]),
            ]),
            _: 1,
          },
          8,
          ['href', 'rel', 'target', 'tag'],
        )
      )
    },
  }),
  I0 = f(T0, [['__scopeId', 'data-v-9e8259c4']]),
  N0 = { key: 0, class: 'VPFeatures' },
  D0 = { class: 'container' },
  O0 = { class: 'items' },
  E0 = v({
    __name: 'VPFeatures',
    props: { features: {} },
    setup(a) {
      const o = a,
        e = b(() => {
          const l = o.features.length
          if (l) {
            if (l === 2) return 'grid-2'
            if (l === 3) return 'grid-3'
            if (l % 3 === 0) return 'grid-6'
            if (l > 3) return 'grid-4'
          } else return
        })
      return (l, t) =>
        l.features
          ? (s(),
            c('div', N0, [
              p('div', D0, [
                p('div', O0, [
                  (s(!0),
                  c(
                    _,
                    null,
                    z(
                      l.features,
                      (i) => (
                        s(),
                        c(
                          'div',
                          { key: i.title, class: H(['item', [e.value]]) },
                          [
                            w(
                              I0,
                              {
                                icon: i.icon,
                                title: i.title,
                                details: i.details,
                                link: i.link,
                                'link-text': i.linkText,
                                rel: i.rel,
                                target: i.target,
                              },
                              null,
                              8,
                              [
                                'icon',
                                'title',
                                'details',
                                'link',
                                'link-text',
                                'rel',
                                'target',
                              ],
                            ),
                          ],
                          2,
                        )
                      ),
                    ),
                    128,
                  )),
                ]),
              ]),
            ]))
          : u('', !0)
    },
  }),
  F0 = f(E0, [['__scopeId', 'data-v-26a8fd99']]),
  U0 = v({
    __name: 'VPHomeFeatures',
    setup(a) {
      const { frontmatter: o } = A()
      return (e, l) =>
        d(o).features
          ? (s(),
            Z(
              F0,
              { key: 0, class: 'VPHomeFeatures', features: d(o).features },
              null,
              8,
              ['features'],
            ))
          : u('', !0)
    },
  }),
  J0 = v({
    __name: 'VPHomeContent',
    setup(a) {
      const { width: o } = W1({ initialWidth: 0, includeScrollbar: !1 })
      return (e, l) => (
        s(),
        c(
          'div',
          {
            class: 'vp-doc container',
            style: D(
              d(o) ? { '--vp-offset': `calc(50% - ${d(o) / 2}px)` } : {},
            ),
          },
          [h(e.$slots, 'default', {}, void 0, !0)],
          4,
        )
      )
    },
  }),
  G0 = f(J0, [['__scopeId', 'data-v-804de7c5']]),
  R0 = { class: 'VPHome' },
  W0 = v({
    __name: 'VPHome',
    setup(a) {
      const { frontmatter: o } = A()
      return (e, l) => {
        const t = K('Content')
        return (
          s(),
          c('div', R0, [
            h(e.$slots, 'home-hero-before', {}, void 0, !0),
            w(g0, null, {
              'home-hero-info-before': y(() => [
                h(e.$slots, 'home-hero-info-before', {}, void 0, !0),
              ]),
              'home-hero-info': y(() => [
                h(e.$slots, 'home-hero-info', {}, void 0, !0),
              ]),
              'home-hero-info-after': y(() => [
                h(e.$slots, 'home-hero-info-after', {}, void 0, !0),
              ]),
              'home-hero-actions-after': y(() => [
                h(e.$slots, 'home-hero-actions-after', {}, void 0, !0),
              ]),
              'home-hero-image': y(() => [
                h(e.$slots, 'home-hero-image', {}, void 0, !0),
              ]),
              _: 3,
            }),
            h(e.$slots, 'home-hero-after', {}, void 0, !0),
            h(e.$slots, 'home-features-before', {}, void 0, !0),
            w(U0),
            h(e.$slots, 'home-features-after', {}, void 0, !0),
            d(o).markdownStyles !== !1
              ? (s(), Z(G0, { key: 0 }, { default: y(() => [w(t)]), _: 1 }))
              : (s(), Z(t, { key: 1 })),
          ])
        )
      }
    },
  }),
  K0 = f(W0, [['__scopeId', 'data-v-9ea0b076']]),
  Q0 = {},
  X0 = { class: 'VPPage' }
function Y0(a, o) {
  const e = K('Content')
  return (
    s(),
    c('div', X0, [h(a.$slots, 'page-top'), w(e), h(a.$slots, 'page-bottom')])
  )
}
const e4 = f(Q0, [['render', Y0]]),
  o4 = v({
    __name: 'VPContent',
    setup(a) {
      const { page: o, frontmatter: e } = A(),
        { hasSidebar: l } = F()
      return (t, i) => (
        s(),
        c(
          'div',
          {
            class: H([
              'VPContent',
              { 'has-sidebar': d(l), 'is-home': d(e).layout === 'home' },
            ]),
            id: 'VPContent',
          },
          [
            d(o).isNotFound
              ? h(t.$slots, 'not-found', { key: 0 }, () => [w(M2)], !0)
              : d(e).layout === 'page'
                ? (s(),
                  Z(
                    e4,
                    { key: 1 },
                    {
                      'page-top': y(() => [
                        h(t.$slots, 'page-top', {}, void 0, !0),
                      ]),
                      'page-bottom': y(() => [
                        h(t.$slots, 'page-bottom', {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                  ))
                : d(e).layout === 'home'
                  ? (s(),
                    Z(
                      K0,
                      { key: 2 },
                      {
                        'home-hero-before': y(() => [
                          h(t.$slots, 'home-hero-before', {}, void 0, !0),
                        ]),
                        'home-hero-info-before': y(() => [
                          h(t.$slots, 'home-hero-info-before', {}, void 0, !0),
                        ]),
                        'home-hero-info': y(() => [
                          h(t.$slots, 'home-hero-info', {}, void 0, !0),
                        ]),
                        'home-hero-info-after': y(() => [
                          h(t.$slots, 'home-hero-info-after', {}, void 0, !0),
                        ]),
                        'home-hero-actions-after': y(() => [
                          h(
                            t.$slots,
                            'home-hero-actions-after',
                            {},
                            void 0,
                            !0,
                          ),
                        ]),
                        'home-hero-image': y(() => [
                          h(t.$slots, 'home-hero-image', {}, void 0, !0),
                        ]),
                        'home-hero-after': y(() => [
                          h(t.$slots, 'home-hero-after', {}, void 0, !0),
                        ]),
                        'home-features-before': y(() => [
                          h(t.$slots, 'home-features-before', {}, void 0, !0),
                        ]),
                        'home-features-after': y(() => [
                          h(t.$slots, 'home-features-after', {}, void 0, !0),
                        ]),
                        _: 3,
                      },
                    ))
                  : d(e).layout && d(e).layout !== 'doc'
                    ? (s(), Z(O(d(e).layout), { key: 3 }))
                    : (s(),
                      Z(
                        y0,
                        { key: 4 },
                        {
                          'doc-top': y(() => [
                            h(t.$slots, 'doc-top', {}, void 0, !0),
                          ]),
                          'doc-bottom': y(() => [
                            h(t.$slots, 'doc-bottom', {}, void 0, !0),
                          ]),
                          'doc-footer-before': y(() => [
                            h(t.$slots, 'doc-footer-before', {}, void 0, !0),
                          ]),
                          'doc-before': y(() => [
                            h(t.$slots, 'doc-before', {}, void 0, !0),
                          ]),
                          'doc-after': y(() => [
                            h(t.$slots, 'doc-after', {}, void 0, !0),
                          ]),
                          'aside-top': y(() => [
                            h(t.$slots, 'aside-top', {}, void 0, !0),
                          ]),
                          'aside-outline-before': y(() => [
                            h(t.$slots, 'aside-outline-before', {}, void 0, !0),
                          ]),
                          'aside-outline-after': y(() => [
                            h(t.$slots, 'aside-outline-after', {}, void 0, !0),
                          ]),
                          'aside-ads-before': y(() => [
                            h(t.$slots, 'aside-ads-before', {}, void 0, !0),
                          ]),
                          'aside-ads-after': y(() => [
                            h(t.$slots, 'aside-ads-after', {}, void 0, !0),
                          ]),
                          'aside-bottom': y(() => [
                            h(t.$slots, 'aside-bottom', {}, void 0, !0),
                          ]),
                          _: 3,
                        },
                      )),
          ],
          2,
        )
      )
    },
  }),
  l4 = f(o4, [['__scopeId', 'data-v-755d77f4']]),
  t4 = { class: 'container' },
  a4 = ['innerHTML'],
  i4 = ['innerHTML'],
  s4 = v({
    __name: 'VPFooter',
    setup(a) {
      const { theme: o, frontmatter: e } = A(),
        { hasSidebar: l } = F()
      return (t, i) =>
        d(o).footer && d(e).footer !== !1
          ? (s(),
            c(
              'footer',
              { key: 0, class: H(['VPFooter', { 'has-sidebar': d(l) }]) },
              [
                p('div', t4, [
                  d(o).footer.message
                    ? (s(),
                      c(
                        'p',
                        {
                          key: 0,
                          class: 'message',
                          innerHTML: d(o).footer.message,
                        },
                        null,
                        8,
                        a4,
                      ))
                    : u('', !0),
                  d(o).footer.copyright
                    ? (s(),
                      c(
                        'p',
                        {
                          key: 1,
                          class: 'copyright',
                          innerHTML: d(o).footer.copyright,
                        },
                        null,
                        8,
                        i4,
                      ))
                    : u('', !0),
                ]),
              ],
              2,
            ))
          : u('', !0)
    },
  }),
  n4 = f(s4, [['__scopeId', 'data-v-4c73e7f1']])
function r4() {
  const { theme: a, frontmatter: o } = A(),
    e = a1([]),
    l = b(() => e.value.length > 0)
  return (
    n1(() => {
      e.value = H1(o.value.outline ?? a.value.outline)
    }),
    { headers: e, hasLocalNav: l }
  )
}
const c4 = { class: 'menu-text' },
  d4 = { class: 'header' },
  h4 = { class: 'outline' },
  p4 = v({
    __name: 'VPLocalNavOutlineDropdown',
    props: { headers: {}, navHeight: {} },
    setup(a) {
      const o = a,
        { theme: e } = A(),
        l = V(!1),
        t = V(0),
        i = V(),
        n = V()
      function r(x) {
        var B
        ;((B = i.value) != null && B.contains(x.target)) || (l.value = !1)
      }
      I(l, (x) => {
        if (x) {
          document.addEventListener('click', r)
          return
        }
        document.removeEventListener('click', r)
      }),
        K1('Escape', () => {
          l.value = !1
        }),
        n1(() => {
          l.value = !1
        })
      function m() {
        ;(l.value = !l.value),
          (t.value =
            window.innerHeight + Math.min(window.scrollY - o.navHeight, 0))
      }
      function k(x) {
        x.target.classList.contains('outline-link') &&
          (n.value && (n.value.style.transition = 'none'),
          f1(() => {
            l.value = !1
          }))
      }
      function M() {
        ;(l.value = !1),
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      }
      return (x, B) => (
        s(),
        c(
          'div',
          {
            class: 'VPLocalNavOutlineDropdown',
            style: D({ '--vp-vh': t.value + 'px' }),
            ref_key: 'main',
            ref: i,
          },
          [
            x.headers.length > 0
              ? (s(),
                c(
                  'button',
                  { key: 0, onClick: m, class: H({ open: l.value }) },
                  [
                    p('span', c4, C(d(I1)(d(e))), 1),
                    B[0] ||
                      (B[0] = p(
                        'span',
                        { class: 'vpi-chevron-right icon' },
                        null,
                        -1,
                      )),
                  ],
                  2,
                ))
              : (s(),
                c(
                  'button',
                  { key: 1, onClick: M },
                  C(d(e).returnToTopLabel || 'Return to top'),
                  1,
                )),
            w(
              R,
              { name: 'flyout' },
              {
                default: y(() => [
                  l.value
                    ? (s(),
                      c(
                        'div',
                        {
                          key: 0,
                          ref_key: 'items',
                          ref: n,
                          class: 'items',
                          onClick: k,
                        },
                        [
                          p('div', d4, [
                            p(
                              'a',
                              { class: 'top-link', href: '#', onClick: M },
                              C(d(e).returnToTopLabel || 'Return to top'),
                              1,
                            ),
                          ]),
                          p('div', h4, [
                            w(N1, { headers: x.headers }, null, 8, ['headers']),
                          ]),
                        ],
                        512,
                      ))
                    : u('', !0),
                ]),
                _: 1,
              },
            ),
          ],
          4,
        )
      )
    },
  }),
  m4 = f(p4, [['__scopeId', 'data-v-41d42b23']]),
  y4 = { class: 'container' },
  v4 = ['aria-expanded'],
  k4 = { class: 'menu-text' },
  u4 = v({
    __name: 'VPLocalNav',
    props: { open: { type: Boolean } },
    emits: ['open-menu'],
    setup(a) {
      const { theme: o, frontmatter: e } = A(),
        { hasSidebar: l } = F(),
        { headers: t } = r4(),
        { y: i } = z1(),
        n = V(0)
      N(() => {
        n.value = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue(
            '--vp-nav-height',
          ),
        )
      }),
        n1(() => {
          t.value = H1(e.value.outline ?? o.value.outline)
        })
      const r = b(() => t.value.length === 0),
        m = b(() => r.value && !l.value),
        k = b(() => ({
          VPLocalNav: !0,
          'has-sidebar': l.value,
          empty: r.value,
          fixed: m.value,
        }))
      return (M, x) =>
        d(e).layout !== 'home' && (!m.value || d(i) >= n.value)
          ? (s(),
            c(
              'div',
              { key: 0, class: H(k.value) },
              [
                p('div', y4, [
                  d(l)
                    ? (s(),
                      c(
                        'button',
                        {
                          key: 0,
                          class: 'menu',
                          'aria-expanded': M.open,
                          'aria-controls': 'VPSidebarNav',
                          onClick: x[0] || (x[0] = (B) => M.$emit('open-menu')),
                        },
                        [
                          x[1] ||
                            (x[1] = p(
                              'span',
                              { class: 'vpi-align-left menu-icon' },
                              null,
                              -1,
                            )),
                          p('span', k4, C(d(o).sidebarMenuLabel || 'Menu'), 1),
                        ],
                        8,
                        v4,
                      ))
                    : u('', !0),
                  w(m4, { headers: d(t), navHeight: n.value }, null, 8, [
                    'headers',
                    'navHeight',
                  ]),
                ]),
              ],
              2,
            ))
          : u('', !0)
    },
  }),
  b4 = f(u4, [['__scopeId', 'data-v-34a9c4ed']])
function M4() {
  const a = V(!1)
  function o() {
    ;(a.value = !0), window.addEventListener('resize', t)
  }
  function e() {
    ;(a.value = !1), window.removeEventListener('resize', t)
  }
  function l() {
    a.value ? e() : o()
  }
  function t() {
    window.outerWidth >= 768 && e()
  }
  const i = r1()
  return (
    I(() => i.path, e),
    { isScreenOpen: a, openScreen: o, closeScreen: e, toggleScreen: l }
  )
}
const x4 = {},
  w4 = { class: 'VPSwitch', type: 'button', role: 'switch' },
  Z4 = { class: 'check' },
  f4 = { key: 0, class: 'icon' }
function B4(a, o) {
  return (
    s(),
    c('button', w4, [
      p('span', Z4, [
        a.$slots.default
          ? (s(), c('span', f4, [h(a.$slots, 'default', {}, void 0, !0)]))
          : u('', !0),
      ]),
    ])
  )
}
const V4 = f(x4, [
    ['render', B4],
    ['__scopeId', 'data-v-44814275'],
  ]),
  H4 = v({
    __name: 'VPSwitchAppearance',
    setup(a) {
      const { isDark: o, theme: e } = A(),
        l = e1('toggle-appearance', () => {
          o.value = !o.value
        }),
        t = V('')
      return (
        Z1(() => {
          t.value = o.value
            ? e.value.lightModeSwitchTitle || 'Switch to light theme'
            : e.value.darkModeSwitchTitle || 'Switch to dark theme'
        }),
        (i, n) => (
          s(),
          Z(
            V4,
            {
              title: t.value,
              class: 'VPSwitchAppearance',
              'aria-checked': d(o),
              onClick: d(l),
            },
            {
              default: y(
                () =>
                  n[0] ||
                  (n[0] = [
                    p('span', { class: 'vpi-sun sun' }, null, -1),
                    p('span', { class: 'vpi-moon moon' }, null, -1),
                  ]),
              ),
              _: 1,
            },
            8,
            ['title', 'aria-checked', 'onClick'],
          )
        )
      )
    },
  }),
  L1 = f(H4, [['__scopeId', 'data-v-e5a468fb']]),
  L4 = { key: 0, class: 'VPNavBarAppearance' },
  A4 = v({
    __name: 'VPNavBarAppearance',
    setup(a) {
      const { site: o } = A()
      return (e, l) =>
        d(o).appearance &&
        d(o).appearance !== 'force-dark' &&
        d(o).appearance !== 'force-auto'
          ? (s(), c('div', L4, [w(L1)]))
          : u('', !0)
    },
  }),
  C4 = f(A4, [['__scopeId', 'data-v-ce999ad3']]),
  A1 = V()
let D1 = !1,
  y1 = 0
function g4(a) {
  const o = V(!1)
  if (c1) {
    !D1 && _4(), y1++
    const e = I(A1, (l) => {
      var t, i, n
      l === a.el.value || ((t = a.el.value) != null && t.contains(l))
        ? ((o.value = !0), (i = a.onFocus) == null || i.call(a))
        : ((o.value = !1), (n = a.onBlur) == null || n.call(a))
    })
    w1(() => {
      e(), y1--, y1 || j4()
    })
  }
  return Q1(o)
}
function _4() {
  document.addEventListener('focusin', O1),
    (D1 = !0),
    (A1.value = document.activeElement)
}
function j4() {
  document.removeEventListener('focusin', O1)
}
function O1() {
  A1.value = document.activeElement
}
const S4 = { class: 'VPMenuLink' },
  $4 = ['innerHTML'],
  q4 = v({
    __name: 'VPMenuLink',
    props: { item: {} },
    setup(a) {
      const { page: o } = A()
      return (e, l) => (
        s(),
        c('div', S4, [
          w(
            E,
            {
              class: H({
                active: d(W)(
                  d(o).relativePath,
                  e.item.activeMatch || e.item.link,
                  !!e.item.activeMatch,
                ),
              }),
              href: e.item.link,
              target: e.item.target,
              rel: e.item.rel,
              'no-icon': e.item.noIcon,
            },
            {
              default: y(() => [
                p('span', { innerHTML: e.item.text }, null, 8, $4),
              ]),
              _: 1,
            },
            8,
            ['class', 'href', 'target', 'rel', 'no-icon'],
          ),
        ])
      )
    },
  }),
  h1 = f(q4, [['__scopeId', 'data-v-9f4cf547']]),
  z4 = { class: 'VPMenuGroup' },
  P4 = { key: 0, class: 'title' },
  T4 = v({
    __name: 'VPMenuGroup',
    props: { text: {}, items: {} },
    setup(a) {
      return (o, e) => (
        s(),
        c('div', z4, [
          o.text ? (s(), c('p', P4, C(o.text), 1)) : u('', !0),
          (s(!0),
          c(
            _,
            null,
            z(
              o.items,
              (l) => (
                s(),
                c(
                  _,
                  null,
                  [
                    'link' in l
                      ? (s(), Z(h1, { key: 0, item: l }, null, 8, ['item']))
                      : u('', !0),
                  ],
                  64,
                )
              ),
            ),
            256,
          )),
        ])
      )
    },
  }),
  I4 = f(T4, [['__scopeId', 'data-v-60c83279']]),
  N4 = { class: 'VPMenu' },
  D4 = { key: 0, class: 'items' },
  O4 = v({
    __name: 'VPMenu',
    props: { items: {} },
    setup(a) {
      return (o, e) => (
        s(),
        c('div', N4, [
          o.items
            ? (s(),
              c('div', D4, [
                (s(!0),
                c(
                  _,
                  null,
                  z(
                    o.items,
                    (l) => (
                      s(),
                      c(
                        _,
                        { key: JSON.stringify(l) },
                        [
                          'link' in l
                            ? (s(),
                              Z(h1, { key: 0, item: l }, null, 8, ['item']))
                            : 'component' in l
                              ? (s(),
                                Z(
                                  O(l.component),
                                  J({ key: 1, ref_for: !0 }, l.props),
                                  null,
                                  16,
                                ))
                              : (s(),
                                Z(
                                  I4,
                                  { key: 2, text: l.text, items: l.items },
                                  null,
                                  8,
                                  ['text', 'items'],
                                )),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ]))
            : u('', !0),
          h(o.$slots, 'default', {}, void 0, !0),
        ])
      )
    },
  }),
  E4 = f(O4, [['__scopeId', 'data-v-2bf0570b']]),
  F4 = ['aria-expanded', 'aria-label'],
  U4 = { key: 0, class: 'text' },
  J4 = ['innerHTML'],
  G4 = { key: 1, class: 'vpi-more-horizontal icon' },
  R4 = { class: 'menu' },
  W4 = v({
    __name: 'VPFlyout',
    props: { icon: {}, button: {}, label: {}, items: {} },
    setup(a) {
      const o = V(!1),
        e = V()
      g4({ el: e, onBlur: l })
      function l() {
        o.value = !1
      }
      return (t, i) => (
        s(),
        c(
          'div',
          {
            class: 'VPFlyout',
            ref_key: 'el',
            ref: e,
            onMouseenter: i[1] || (i[1] = (n) => (o.value = !0)),
            onMouseleave: i[2] || (i[2] = (n) => (o.value = !1)),
          },
          [
            p(
              'button',
              {
                type: 'button',
                class: 'button',
                'aria-haspopup': 'true',
                'aria-expanded': o.value,
                'aria-label': t.label,
                onClick: i[0] || (i[0] = (n) => (o.value = !o.value)),
              },
              [
                t.button || t.icon
                  ? (s(),
                    c('span', U4, [
                      t.icon
                        ? (s(),
                          c(
                            'span',
                            { key: 0, class: H([t.icon, 'option-icon']) },
                            null,
                            2,
                          ))
                        : u('', !0),
                      t.button
                        ? (s(),
                          c(
                            'span',
                            { key: 1, innerHTML: t.button },
                            null,
                            8,
                            J4,
                          ))
                        : u('', !0),
                      i[3] ||
                        (i[3] = p(
                          'span',
                          { class: 'vpi-chevron-down text-icon' },
                          null,
                          -1,
                        )),
                    ]))
                  : (s(), c('span', G4)),
              ],
              8,
              F4,
            ),
            p('div', R4, [
              w(
                E4,
                { items: t.items },
                {
                  default: y(() => [h(t.$slots, 'default', {}, void 0, !0)]),
                  _: 3,
                },
                8,
                ['items'],
              ),
            ]),
          ],
          544,
        )
      )
    },
  }),
  C1 = f(W4, [['__scopeId', 'data-v-d5fe560e']]),
  K4 = ['href', 'aria-label', 'innerHTML'],
  Q4 = v({
    __name: 'VPSocialLink',
    props: { icon: {}, link: {}, ariaLabel: {} },
    setup(a) {
      const o = a,
        e = V()
      N(async () => {
        var i
        await f1()
        const t = (i = e.value) == null ? void 0 : i.children[0]
        t instanceof HTMLElement &&
          t.className.startsWith('vpi-social-') &&
          (getComputedStyle(t).maskImage ||
            getComputedStyle(t).webkitMaskImage) === 'none' &&
          t.style.setProperty(
            '--icon',
            `url('https://api.iconify.design/simple-icons/${o.icon}.svg')`,
          )
      })
      const l = b(() =>
        typeof o.icon == 'object'
          ? o.icon.svg
          : `<span class="vpi-social-${o.icon}"></span>`,
      )
      return (t, i) => (
        s(),
        c(
          'a',
          {
            ref_key: 'el',
            ref: e,
            class: 'VPSocialLink no-icon',
            href: t.link,
            'aria-label':
              t.ariaLabel ?? (typeof t.icon == 'string' ? t.icon : ''),
            target: '_blank',
            rel: 'noopener',
            innerHTML: l.value,
          },
          null,
          8,
          K4,
        )
      )
    },
  }),
  X4 = f(Q4, [['__scopeId', 'data-v-890095c8']]),
  Y4 = { class: 'VPSocialLinks' },
  e6 = v({
    __name: 'VPSocialLinks',
    props: { links: {} },
    setup(a) {
      return (o, e) => (
        s(),
        c('div', Y4, [
          (s(!0),
          c(
            _,
            null,
            z(
              o.links,
              ({ link: l, icon: t, ariaLabel: i }) => (
                s(),
                Z(X4, { key: l, icon: t, link: l, ariaLabel: i }, null, 8, [
                  'icon',
                  'link',
                  'ariaLabel',
                ])
              ),
            ),
            128,
          )),
        ])
      )
    },
  }),
  g1 = f(e6, [['__scopeId', 'data-v-1c676cda']]),
  o6 = { key: 0, class: 'group translations' },
  l6 = { class: 'trans-title' },
  t6 = { key: 1, class: 'group' },
  a6 = { class: 'item appearance' },
  i6 = { class: 'label' },
  s6 = { class: 'appearance-action' },
  n6 = { key: 2, class: 'group' },
  r6 = { class: 'item social-links' },
  c6 = v({
    __name: 'VPNavBarExtra',
    setup(a) {
      const { site: o, theme: e } = A(),
        { localeLinks: l, currentLang: t } = l1({ correspondingLink: !0 }),
        i = b(
          () =>
            (l.value.length && t.value.label) ||
            o.value.appearance ||
            e.value.socialLinks,
        )
      return (n, r) =>
        i.value
          ? (s(),
            Z(
              C1,
              { key: 0, class: 'VPNavBarExtra', label: 'extra navigation' },
              {
                default: y(() => [
                  d(l).length && d(t).label
                    ? (s(),
                      c('div', o6, [
                        p('p', l6, C(d(t).label), 1),
                        (s(!0),
                        c(
                          _,
                          null,
                          z(
                            d(l),
                            (m) => (
                              s(),
                              Z(h1, { key: m.link, item: m }, null, 8, ['item'])
                            ),
                          ),
                          128,
                        )),
                      ]))
                    : u('', !0),
                  d(o).appearance &&
                  d(o).appearance !== 'force-dark' &&
                  d(o).appearance !== 'force-auto'
                    ? (s(),
                      c('div', t6, [
                        p('div', a6, [
                          p(
                            'p',
                            i6,
                            C(d(e).darkModeSwitchLabel || 'Appearance'),
                            1,
                          ),
                          p('div', s6, [w(L1)]),
                        ]),
                      ]))
                    : u('', !0),
                  d(e).socialLinks
                    ? (s(),
                      c('div', n6, [
                        p('div', r6, [
                          w(
                            g1,
                            {
                              class: 'social-links-list',
                              links: d(e).socialLinks,
                            },
                            null,
                            8,
                            ['links'],
                          ),
                        ]),
                      ]))
                    : u('', !0),
                ]),
                _: 1,
              },
            ))
          : u('', !0)
    },
  }),
  d6 = f(c6, [['__scopeId', 'data-v-81ddc1f7']]),
  h6 = ['aria-expanded'],
  p6 = v({
    __name: 'VPNavBarHamburger',
    props: { active: { type: Boolean } },
    emits: ['click'],
    setup(a) {
      return (o, e) => (
        s(),
        c(
          'button',
          {
            type: 'button',
            class: H(['VPNavBarHamburger', { active: o.active }]),
            'aria-label': 'mobile navigation',
            'aria-expanded': o.active,
            'aria-controls': 'VPNavScreen',
            onClick: e[0] || (e[0] = (l) => o.$emit('click')),
          },
          e[1] ||
            (e[1] = [
              p(
                'span',
                { class: 'container' },
                [
                  p('span', { class: 'top' }),
                  p('span', { class: 'middle' }),
                  p('span', { class: 'bottom' }),
                ],
                -1,
              ),
            ]),
          10,
          h6,
        )
      )
    },
  }),
  m6 = f(p6, [['__scopeId', 'data-v-03d7d9f2']]),
  y6 = ['innerHTML'],
  v6 = v({
    __name: 'VPNavBarMenuLink',
    props: { item: {} },
    setup(a) {
      const { page: o } = A()
      return (e, l) => (
        s(),
        Z(
          E,
          {
            class: H({
              VPNavBarMenuLink: !0,
              active: d(W)(
                d(o).relativePath,
                e.item.activeMatch || e.item.link,
                !!e.item.activeMatch,
              ),
            }),
            href: e.item.link,
            target: e.item.target,
            rel: e.item.rel,
            'no-icon': e.item.noIcon,
            tabindex: '0',
          },
          {
            default: y(() => [
              p('span', { innerHTML: e.item.text }, null, 8, y6),
            ]),
            _: 1,
          },
          8,
          ['class', 'href', 'target', 'rel', 'no-icon'],
        )
      )
    },
  }),
  k6 = f(v6, [['__scopeId', 'data-v-63d5821d']]),
  u6 = v({
    __name: 'VPNavBarMenuGroup',
    props: { item: {} },
    setup(a) {
      const o = a,
        { page: e } = A(),
        l = (i) =>
          'component' in i
            ? !1
            : 'link' in i
              ? W(e.value.relativePath, i.link, !!o.item.activeMatch)
              : i.items.some(l),
        t = b(() => l(o.item))
      return (i, n) => (
        s(),
        Z(
          C1,
          {
            class: H({
              VPNavBarMenuGroup: !0,
              active:
                d(W)(
                  d(e).relativePath,
                  i.item.activeMatch,
                  !!i.item.activeMatch,
                ) || t.value,
            }),
            button: i.item.text,
            items: i.item.items,
          },
          null,
          8,
          ['class', 'button', 'items'],
        )
      )
    },
  }),
  b6 = {
    key: 0,
    'aria-labelledby': 'main-nav-aria-label',
    class: 'VPNavBarMenu',
  },
  M6 = v({
    __name: 'VPNavBarMenu',
    setup(a) {
      const { theme: o } = A()
      return (e, l) =>
        d(o).nav
          ? (s(),
            c('nav', b6, [
              l[0] ||
                (l[0] = p(
                  'span',
                  { id: 'main-nav-aria-label', class: 'visually-hidden' },
                  ' Main Navigation ',
                  -1,
                )),
              (s(!0),
              c(
                _,
                null,
                z(
                  d(o).nav,
                  (t) => (
                    s(),
                    c(
                      _,
                      { key: JSON.stringify(t) },
                      [
                        'link' in t
                          ? (s(), Z(k6, { key: 0, item: t }, null, 8, ['item']))
                          : 'component' in t
                            ? (s(),
                              Z(
                                O(t.component),
                                J({ key: 1, ref_for: !0 }, t.props),
                                null,
                                16,
                              ))
                            : (s(),
                              Z(u6, { key: 2, item: t }, null, 8, ['item'])),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : u('', !0)
    },
  }),
  x6 = f(M6, [['__scopeId', 'data-v-76f224fe']])
function w6(a) {
  const { localeIndex: o, theme: e } = A()
  function l(t) {
    var S, $, g
    const i = t.split('.'),
      n = (S = e.value.search) == null ? void 0 : S.options,
      r = n && typeof n == 'object',
      m =
        (r &&
          ((g = ($ = n.locales) == null ? void 0 : $[o.value]) == null
            ? void 0
            : g.translations)) ||
        null,
      k = (r && n.translations) || null
    let M = m,
      x = k,
      B = a
    const L = i.pop()
    for (const P of i) {
      let U = null
      const X = B == null ? void 0 : B[P]
      X && (U = B = X)
      const p1 = x == null ? void 0 : x[P]
      p1 && (U = x = p1)
      const m1 = M == null ? void 0 : M[P]
      m1 && (U = M = m1), X || (B = U), p1 || (x = U), m1 || (M = U)
    }
    return (
      (M == null ? void 0 : M[L]) ??
      (x == null ? void 0 : x[L]) ??
      (B == null ? void 0 : B[L]) ??
      ''
    )
  }
  return l
}
const Z6 = ['aria-label'],
  f6 = { class: 'DocSearch-Button-Container' },
  B6 = { class: 'DocSearch-Button-Placeholder' },
  j1 = v({
    __name: 'VPNavBarSearchButton',
    setup(a) {
      const e = w6({
        button: { buttonText: 'Search', buttonAriaLabel: 'Search' },
      })
      return (l, t) => (
        s(),
        c(
          'button',
          {
            type: 'button',
            class: 'DocSearch DocSearch-Button',
            'aria-label': d(e)('button.buttonAriaLabel'),
          },
          [
            p('span', f6, [
              t[0] ||
                (t[0] = p(
                  'span',
                  { class: 'vp-icon DocSearch-Search-Icon' },
                  null,
                  -1,
                )),
              p('span', B6, C(d(e)('button.buttonText')), 1),
            ]),
            t[1] ||
              (t[1] = p(
                'span',
                { class: 'DocSearch-Button-Keys' },
                [
                  p('kbd', { class: 'DocSearch-Button-Key' }),
                  p('kbd', { class: 'DocSearch-Button-Key' }, 'K'),
                ],
                -1,
              )),
          ],
          8,
          Z6,
        )
      )
    },
  }),
  V6 = { class: 'VPNavBarSearch' },
  H6 = { id: 'local-search' },
  L6 = { key: 1, id: 'docsearch' },
  A6 = v({
    __name: 'VPNavBarSearch',
    setup(a) {
      const o = () => null,
        e = () => null,
        { theme: l } = A(),
        t = V(!1),
        i = V(!1)
      N(() => {})
      function n() {
        t.value || ((t.value = !0), setTimeout(r, 16))
      }
      function r() {
        const M = new Event('keydown')
        ;(M.key = 'k'),
          (M.metaKey = !0),
          window.dispatchEvent(M),
          setTimeout(() => {
            document.querySelector('.DocSearch-Modal') || r()
          }, 16)
      }
      const m = V(!1),
        k = ''
      return (M, x) => {
        var B
        return (
          s(),
          c('div', V6, [
            d(k) === 'local'
              ? (s(),
                c(
                  _,
                  { key: 0 },
                  [
                    m.value
                      ? (s(),
                        Z(d(o), {
                          key: 0,
                          onClose: x[0] || (x[0] = (L) => (m.value = !1)),
                        }))
                      : u('', !0),
                    p('div', H6, [
                      w(j1, {
                        onClick: x[1] || (x[1] = (L) => (m.value = !0)),
                      }),
                    ]),
                  ],
                  64,
                ))
              : d(k) === 'algolia'
                ? (s(),
                  c(
                    _,
                    { key: 1 },
                    [
                      t.value
                        ? (s(),
                          Z(
                            d(e),
                            {
                              key: 0,
                              algolia:
                                ((B = d(l).search) == null
                                  ? void 0
                                  : B.options) ?? d(l).algolia,
                              onVnodeBeforeMount:
                                x[2] || (x[2] = (L) => (i.value = !0)),
                            },
                            null,
                            8,
                            ['algolia'],
                          ))
                        : u('', !0),
                      i.value
                        ? u('', !0)
                        : (s(), c('div', L6, [w(j1, { onClick: n })])),
                    ],
                    64,
                  ))
                : u('', !0),
          ])
        )
      }
    },
  }),
  C6 = v({
    __name: 'VPNavBarSocialLinks',
    setup(a) {
      const { theme: o } = A()
      return (e, l) =>
        d(o).socialLinks
          ? (s(),
            Z(
              g1,
              { key: 0, class: 'VPNavBarSocialLinks', links: d(o).socialLinks },
              null,
              8,
              ['links'],
            ))
          : u('', !0)
    },
  }),
  g6 = f(C6, [['__scopeId', 'data-v-41cc3502']]),
  _6 = ['href', 'rel', 'target'],
  j6 = ['innerHTML'],
  S6 = { key: 2 },
  $6 = v({
    __name: 'VPNavBarTitle',
    setup(a) {
      const { site: o, theme: e } = A(),
        { hasSidebar: l } = F(),
        { currentLang: t } = l1(),
        i = b(() => {
          var m
          return typeof e.value.logoLink == 'string'
            ? e.value.logoLink
            : (m = e.value.logoLink) == null
              ? void 0
              : m.link
        }),
        n = b(() => {
          var m
          return typeof e.value.logoLink == 'string' ||
            (m = e.value.logoLink) == null
            ? void 0
            : m.rel
        }),
        r = b(() => {
          var m
          return typeof e.value.logoLink == 'string' ||
            (m = e.value.logoLink) == null
            ? void 0
            : m.target
        })
      return (m, k) => (
        s(),
        c(
          'div',
          { class: H(['VPNavBarTitle', { 'has-sidebar': d(l) }]) },
          [
            p(
              'a',
              {
                class: 'title',
                href: i.value ?? d(V1)(d(t).link),
                rel: n.value,
                target: r.value,
              },
              [
                h(m.$slots, 'nav-bar-title-before', {}, void 0, !0),
                d(e).logo
                  ? (s(),
                    Z(
                      i1,
                      { key: 0, class: 'logo', image: d(e).logo },
                      null,
                      8,
                      ['image'],
                    ))
                  : u('', !0),
                d(e).siteTitle
                  ? (s(),
                    c(
                      'span',
                      { key: 1, innerHTML: d(e).siteTitle },
                      null,
                      8,
                      j6,
                    ))
                  : d(e).siteTitle === void 0
                    ? (s(), c('span', S6, C(d(o).title), 1))
                    : u('', !0),
                h(m.$slots, 'nav-bar-title-after', {}, void 0, !0),
              ],
              8,
              _6,
            ),
          ],
          2,
        )
      )
    },
  }),
  q6 = f($6, [['__scopeId', 'data-v-d0e33f6c']]),
  z6 = { class: 'items' },
  P6 = { class: 'title' },
  T6 = v({
    __name: 'VPNavBarTranslations',
    setup(a) {
      const { theme: o } = A(),
        { localeLinks: e, currentLang: l } = l1({ correspondingLink: !0 })
      return (t, i) =>
        d(e).length && d(l).label
          ? (s(),
            Z(
              C1,
              {
                key: 0,
                class: 'VPNavBarTranslations',
                icon: 'vpi-languages',
                label: d(o).langMenuLabel || 'Change language',
              },
              {
                default: y(() => [
                  p('div', z6, [
                    p('p', P6, C(d(l).label), 1),
                    (s(!0),
                    c(
                      _,
                      null,
                      z(
                        d(e),
                        (n) => (
                          s(),
                          Z(h1, { key: n.link, item: n }, null, 8, ['item'])
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
                _: 1,
              },
              8,
              ['label'],
            ))
          : u('', !0)
    },
  }),
  I6 = f(T6, [['__scopeId', 'data-v-e04db4ed']]),
  N6 = { class: 'wrapper' },
  D6 = { class: 'container' },
  O6 = { class: 'title' },
  E6 = { class: 'content' },
  F6 = { class: 'content-body' },
  U6 = v({
    __name: 'VPNavBar',
    props: { isScreenOpen: { type: Boolean } },
    emits: ['toggle-screen'],
    setup(a) {
      const o = a,
        { y: e } = z1(),
        { hasSidebar: l } = F(),
        { frontmatter: t } = A(),
        i = V({})
      return (
        Z1(() => {
          i.value = {
            'has-sidebar': l.value,
            home: t.value.layout === 'home',
            top: e.value === 0,
            'screen-open': o.isScreenOpen,
          }
        }),
        (n, r) => (
          s(),
          c(
            'div',
            { class: H(['VPNavBar', i.value]) },
            [
              p('div', N6, [
                p('div', D6, [
                  p('div', O6, [
                    w(q6, null, {
                      'nav-bar-title-before': y(() => [
                        h(n.$slots, 'nav-bar-title-before', {}, void 0, !0),
                      ]),
                      'nav-bar-title-after': y(() => [
                        h(n.$slots, 'nav-bar-title-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    }),
                  ]),
                  p('div', E6, [
                    p('div', F6, [
                      h(n.$slots, 'nav-bar-content-before', {}, void 0, !0),
                      w(A6, { class: 'search' }),
                      w(x6, { class: 'menu' }),
                      w(I6, { class: 'translations' }),
                      w(C4, { class: 'appearance' }),
                      w(g6, { class: 'social-links' }),
                      w(d6, { class: 'extra' }),
                      h(n.$slots, 'nav-bar-content-after', {}, void 0, !0),
                      w(
                        m6,
                        {
                          class: 'hamburger',
                          active: n.isScreenOpen,
                          onClick:
                            r[0] || (r[0] = (m) => n.$emit('toggle-screen')),
                        },
                        null,
                        8,
                        ['active'],
                      ),
                    ]),
                  ]),
                ]),
              ]),
              r[1] ||
                (r[1] = p(
                  'div',
                  { class: 'divider' },
                  [p('div', { class: 'divider-line' })],
                  -1,
                )),
            ],
            2,
          )
        )
      )
    },
  }),
  J6 = f(U6, [['__scopeId', 'data-v-c906471b']]),
  G6 = { key: 0, class: 'VPNavScreenAppearance' },
  R6 = { class: 'text' },
  W6 = v({
    __name: 'VPNavScreenAppearance',
    setup(a) {
      const { site: o, theme: e } = A()
      return (l, t) =>
        d(o).appearance &&
        d(o).appearance !== 'force-dark' &&
        d(o).appearance !== 'force-auto'
          ? (s(),
            c('div', G6, [
              p('p', R6, C(d(e).darkModeSwitchLabel || 'Appearance'), 1),
              w(L1),
            ]))
          : u('', !0)
    },
  }),
  K6 = f(W6, [['__scopeId', 'data-v-dce3f9e5']]),
  Q6 = ['innerHTML'],
  X6 = v({
    __name: 'VPNavScreenMenuLink',
    props: { item: {} },
    setup(a) {
      const o = e1('close-screen')
      return (e, l) => (
        s(),
        Z(
          E,
          {
            class: 'VPNavScreenMenuLink',
            href: e.item.link,
            target: e.item.target,
            rel: e.item.rel,
            'no-icon': e.item.noIcon,
            onClick: d(o),
          },
          {
            default: y(() => [
              p('span', { innerHTML: e.item.text }, null, 8, Q6),
            ]),
            _: 1,
          },
          8,
          ['href', 'target', 'rel', 'no-icon', 'onClick'],
        )
      )
    },
  }),
  Y6 = f(X6, [['__scopeId', 'data-v-16a37153']]),
  e3 = ['innerHTML'],
  o3 = v({
    __name: 'VPNavScreenMenuGroupLink',
    props: { item: {} },
    setup(a) {
      const o = e1('close-screen')
      return (e, l) => (
        s(),
        Z(
          E,
          {
            class: 'VPNavScreenMenuGroupLink',
            href: e.item.link,
            target: e.item.target,
            rel: e.item.rel,
            'no-icon': e.item.noIcon,
            onClick: d(o),
          },
          {
            default: y(() => [
              p('span', { innerHTML: e.item.text }, null, 8, e3),
            ]),
            _: 1,
          },
          8,
          ['href', 'target', 'rel', 'no-icon', 'onClick'],
        )
      )
    },
  }),
  E1 = f(o3, [['__scopeId', 'data-v-45dbce24']]),
  l3 = { class: 'VPNavScreenMenuGroupSection' },
  t3 = { key: 0, class: 'title' },
  a3 = v({
    __name: 'VPNavScreenMenuGroupSection',
    props: { text: {}, items: {} },
    setup(a) {
      return (o, e) => (
        s(),
        c('div', l3, [
          o.text ? (s(), c('p', t3, C(o.text), 1)) : u('', !0),
          (s(!0),
          c(
            _,
            null,
            z(
              o.items,
              (l) => (s(), Z(E1, { key: l.text, item: l }, null, 8, ['item'])),
            ),
            128,
          )),
        ])
      )
    },
  }),
  i3 = f(a3, [['__scopeId', 'data-v-b56711b6']]),
  s3 = ['aria-controls', 'aria-expanded'],
  n3 = ['innerHTML'],
  r3 = ['id'],
  c3 = { key: 0, class: 'item' },
  d3 = { key: 1, class: 'item' },
  h3 = { key: 2, class: 'group' },
  p3 = v({
    __name: 'VPNavScreenMenuGroup',
    props: { text: {}, items: {} },
    setup(a) {
      const o = a,
        e = V(!1),
        l = b(() => `NavScreenGroup-${o.text.replace(' ', '-').toLowerCase()}`)
      function t() {
        e.value = !e.value
      }
      return (i, n) => (
        s(),
        c(
          'div',
          { class: H(['VPNavScreenMenuGroup', { open: e.value }]) },
          [
            p(
              'button',
              {
                class: 'button',
                'aria-controls': l.value,
                'aria-expanded': e.value,
                onClick: t,
              },
              [
                p(
                  'span',
                  { class: 'button-text', innerHTML: i.text },
                  null,
                  8,
                  n3,
                ),
                n[0] ||
                  (n[0] = p(
                    'span',
                    { class: 'vpi-plus button-icon' },
                    null,
                    -1,
                  )),
              ],
              8,
              s3,
            ),
            p(
              'div',
              { id: l.value, class: 'items' },
              [
                (s(!0),
                c(
                  _,
                  null,
                  z(
                    i.items,
                    (r) => (
                      s(),
                      c(
                        _,
                        { key: JSON.stringify(r) },
                        [
                          'link' in r
                            ? (s(),
                              c('div', c3, [
                                w(E1, { item: r }, null, 8, ['item']),
                              ]))
                            : 'component' in r
                              ? (s(),
                                c('div', d3, [
                                  (s(),
                                  Z(
                                    O(r.component),
                                    J({ ref_for: !0 }, r.props, {
                                      'screen-menu': '',
                                    }),
                                    null,
                                    16,
                                  )),
                                ]))
                              : (s(),
                                c('div', h3, [
                                  w(
                                    i3,
                                    { text: r.text, items: r.items },
                                    null,
                                    8,
                                    ['text', 'items'],
                                  ),
                                ])),
                        ],
                        64,
                      )
                    ),
                  ),
                  128,
                )),
              ],
              8,
              r3,
            ),
          ],
          2,
        )
      )
    },
  }),
  m3 = f(p3, [['__scopeId', 'data-v-f5266dfd']]),
  y3 = { key: 0, class: 'VPNavScreenMenu' },
  v3 = v({
    __name: 'VPNavScreenMenu',
    setup(a) {
      const { theme: o } = A()
      return (e, l) =>
        d(o).nav
          ? (s(),
            c('nav', y3, [
              (s(!0),
              c(
                _,
                null,
                z(
                  d(o).nav,
                  (t) => (
                    s(),
                    c(
                      _,
                      { key: JSON.stringify(t) },
                      [
                        'link' in t
                          ? (s(), Z(Y6, { key: 0, item: t }, null, 8, ['item']))
                          : 'component' in t
                            ? (s(),
                              Z(
                                O(t.component),
                                J({ key: 1, ref_for: !0 }, t.props, {
                                  'screen-menu': '',
                                }),
                                null,
                                16,
                              ))
                            : (s(),
                              Z(
                                m3,
                                { key: 2, text: t.text || '', items: t.items },
                                null,
                                8,
                                ['text', 'items'],
                              )),
                      ],
                      64,
                    )
                  ),
                ),
                128,
              )),
            ]))
          : u('', !0)
    },
  }),
  k3 = v({
    __name: 'VPNavScreenSocialLinks',
    setup(a) {
      const { theme: o } = A()
      return (e, l) =>
        d(o).socialLinks
          ? (s(),
            Z(
              g1,
              {
                key: 0,
                class: 'VPNavScreenSocialLinks',
                links: d(o).socialLinks,
              },
              null,
              8,
              ['links'],
            ))
          : u('', !0)
    },
  }),
  u3 = { class: 'list' },
  b3 = v({
    __name: 'VPNavScreenTranslations',
    setup(a) {
      const { localeLinks: o, currentLang: e } = l1({ correspondingLink: !0 }),
        l = V(!1)
      function t() {
        l.value = !l.value
      }
      return (i, n) =>
        d(o).length && d(e).label
          ? (s(),
            c(
              'div',
              {
                key: 0,
                class: H(['VPNavScreenTranslations', { open: l.value }]),
              },
              [
                p('button', { class: 'title', onClick: t }, [
                  n[0] ||
                    (n[0] = p(
                      'span',
                      { class: 'vpi-languages icon lang' },
                      null,
                      -1,
                    )),
                  G(' ' + C(d(e).label) + ' ', 1),
                  n[1] ||
                    (n[1] = p(
                      'span',
                      { class: 'vpi-chevron-down icon chevron' },
                      null,
                      -1,
                    )),
                ]),
                p('ul', u3, [
                  (s(!0),
                  c(
                    _,
                    null,
                    z(
                      d(o),
                      (r) => (
                        s(),
                        c('li', { key: r.link, class: 'item' }, [
                          w(
                            E,
                            { class: 'link', href: r.link },
                            { default: y(() => [G(C(r.text), 1)]), _: 2 },
                            1032,
                            ['href'],
                          ),
                        ])
                      ),
                    ),
                    128,
                  )),
                ]),
              ],
              2,
            ))
          : u('', !0)
    },
  }),
  M3 = f(b3, [['__scopeId', 'data-v-f82d9220']]),
  x3 = { class: 'container' },
  w3 = v({
    __name: 'VPNavScreen',
    props: { open: { type: Boolean } },
    setup(a) {
      const o = V(null),
        e = P1(c1 ? document.body : null)
      return (l, t) => (
        s(),
        Z(
          R,
          {
            name: 'fade',
            onEnter: t[0] || (t[0] = (i) => (e.value = !0)),
            onAfterLeave: t[1] || (t[1] = (i) => (e.value = !1)),
          },
          {
            default: y(() => [
              l.open
                ? (s(),
                  c(
                    'div',
                    {
                      key: 0,
                      class: 'VPNavScreen',
                      ref_key: 'screen',
                      ref: o,
                      id: 'VPNavScreen',
                    },
                    [
                      p('div', x3, [
                        h(
                          l.$slots,
                          'nav-screen-content-before',
                          {},
                          void 0,
                          !0,
                        ),
                        w(v3, { class: 'menu' }),
                        w(M3, { class: 'translations' }),
                        w(K6, { class: 'appearance' }),
                        w(k3, { class: 'social-links' }),
                        h(l.$slots, 'nav-screen-content-after', {}, void 0, !0),
                      ]),
                    ],
                    512,
                  ))
                : u('', !0),
            ]),
            _: 3,
          },
        )
      )
    },
  }),
  Z3 = f(w3, [['__scopeId', 'data-v-64ef2a46']]),
  f3 = { key: 0, class: 'VPNav' },
  B3 = v({
    __name: 'VPNav',
    setup(a) {
      const { isScreenOpen: o, closeScreen: e, toggleScreen: l } = M4(),
        { frontmatter: t } = A(),
        i = b(() => t.value.navbar !== !1)
      return (
        B1('close-screen', e),
        s1(() => {
          c1 && document.documentElement.classList.toggle('hide-nav', !i.value)
        }),
        (n, r) =>
          i.value
            ? (s(),
              c('header', f3, [
                w(
                  J6,
                  { 'is-screen-open': d(o), onToggleScreen: d(l) },
                  {
                    'nav-bar-title-before': y(() => [
                      h(n.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': y(() => [
                      h(n.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': y(() => [
                      h(n.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': y(() => [
                      h(n.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['is-screen-open', 'onToggleScreen'],
                ),
                w(
                  Z3,
                  { open: d(o) },
                  {
                    'nav-screen-content-before': y(() => [
                      h(n.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': y(() => [
                      h(n.$slots, 'nav-screen-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  },
                  8,
                  ['open'],
                ),
              ]))
            : u('', !0)
      )
    },
  }),
  V3 = f(B3, [['__scopeId', 'data-v-4367dde3']]),
  H3 = ['role', 'tabindex'],
  L3 = { key: 1, class: 'items' },
  A3 = v({
    __name: 'VPSidebarItem',
    props: { item: {}, depth: {} },
    setup(a) {
      const o = a,
        {
          collapsed: e,
          collapsible: l,
          isLink: t,
          isActiveLink: i,
          hasActiveLink: n,
          hasChildren: r,
          toggle: m,
        } = f2(b(() => o.item)),
        k = b(() => (r.value ? 'section' : 'div')),
        M = b(() => (t.value ? 'a' : 'div')),
        x = b(() =>
          r.value ? (o.depth + 2 === 7 ? 'p' : `h${o.depth + 2}`) : 'p',
        ),
        B = b(() => (t.value ? void 0 : 'button')),
        L = b(() => [
          [`level-${o.depth}`],
          { collapsible: l.value },
          { collapsed: e.value },
          { 'is-link': t.value },
          { 'is-active': i.value },
          { 'has-active': n.value },
        ])
      function S(g) {
        ;('key' in g && g.key !== 'Enter') || (!o.item.link && m())
      }
      function $() {
        o.item.link && m()
      }
      return (g, P) => {
        const U = K('VPSidebarItem', !0)
        return (
          s(),
          Z(
            O(k.value),
            { class: H(['VPSidebarItem', L.value]) },
            {
              default: y(() => [
                g.item.text
                  ? (s(),
                    c(
                      'div',
                      J(
                        { key: 0, class: 'item', role: B.value },
                        Y1(g.item.items ? { click: S, keydown: S } : {}, !0),
                        { tabindex: g.item.items && 0 },
                      ),
                      [
                        P[1] ||
                          (P[1] = p('div', { class: 'indicator' }, null, -1)),
                        g.item.link
                          ? (s(),
                            Z(
                              E,
                              {
                                key: 0,
                                tag: M.value,
                                class: 'link',
                                href: g.item.link,
                                rel: g.item.rel,
                                target: g.item.target,
                              },
                              {
                                default: y(() => [
                                  (s(),
                                  Z(
                                    O(x.value),
                                    { class: 'text', innerHTML: g.item.text },
                                    null,
                                    8,
                                    ['innerHTML'],
                                  )),
                                ]),
                                _: 1,
                              },
                              8,
                              ['tag', 'href', 'rel', 'target'],
                            ))
                          : (s(),
                            Z(
                              O(x.value),
                              { key: 1, class: 'text', innerHTML: g.item.text },
                              null,
                              8,
                              ['innerHTML'],
                            )),
                        g.item.collapsed != null &&
                        g.item.items &&
                        g.item.items.length
                          ? (s(),
                            c(
                              'div',
                              {
                                key: 2,
                                class: 'caret',
                                role: 'button',
                                'aria-label': 'toggle section',
                                onClick: $,
                                onKeydown: X1($, ['enter']),
                                tabindex: '0',
                              },
                              P[0] ||
                                (P[0] = [
                                  p(
                                    'span',
                                    { class: 'vpi-chevron-right caret-icon' },
                                    null,
                                    -1,
                                  ),
                                ]),
                              32,
                            ))
                          : u('', !0),
                      ],
                      16,
                      H3,
                    ))
                  : u('', !0),
                g.item.items && g.item.items.length
                  ? (s(),
                    c('div', L3, [
                      g.depth < 5
                        ? (s(!0),
                          c(
                            _,
                            { key: 0 },
                            z(
                              g.item.items,
                              (X) => (
                                s(),
                                Z(
                                  U,
                                  { key: X.text, item: X, depth: g.depth + 1 },
                                  null,
                                  8,
                                  ['item', 'depth'],
                                )
                              ),
                            ),
                            128,
                          ))
                        : u('', !0),
                    ]))
                  : u('', !0),
              ]),
              _: 1,
            },
            8,
            ['class'],
          )
        )
      }
    },
  }),
  C3 = f(A3, [['__scopeId', 'data-v-6a69a78d']]),
  g3 = v({
    __name: 'VPSidebarGroup',
    props: { items: {} },
    setup(a) {
      const o = V(!0)
      let e = null
      return (
        N(() => {
          e = setTimeout(() => {
            ;(e = null), (o.value = !1)
          }, 300)
        }),
        e2(() => {
          e != null && (clearTimeout(e), (e = null))
        }),
        (l, t) => (
          s(!0),
          c(
            _,
            null,
            z(
              l.items,
              (i) => (
                s(),
                c(
                  'div',
                  {
                    key: i.text,
                    class: H(['group', { 'no-transition': o.value }]),
                  },
                  [w(C3, { item: i, depth: 0 }, null, 8, ['item'])],
                  2,
                )
              ),
            ),
            128,
          )
        )
      )
    },
  }),
  _3 = f(g3, [['__scopeId', 'data-v-ebf58262']]),
  j3 = {
    class: 'nav',
    id: 'VPSidebarNav',
    'aria-labelledby': 'sidebar-aria-label',
    tabindex: '-1',
  },
  S3 = v({
    __name: 'VPSidebar',
    props: { open: { type: Boolean } },
    setup(a) {
      const { sidebarGroups: o, hasSidebar: e } = F(),
        l = a,
        t = V(null),
        i = P1(c1 ? document.body : null)
      I(
        [l, t],
        () => {
          var r
          l.open
            ? ((i.value = !0), (r = t.value) == null || r.focus())
            : (i.value = !1)
        },
        { immediate: !0, flush: 'post' },
      )
      const n = V(0)
      return (
        I(
          o,
          () => {
            n.value += 1
          },
          { deep: !0 },
        ),
        (r, m) =>
          d(e)
            ? (s(),
              c(
                'aside',
                {
                  key: 0,
                  class: H(['VPSidebar', { open: r.open }]),
                  ref_key: 'navEl',
                  ref: t,
                  onClick: m[0] || (m[0] = d1(() => {}, ['stop'])),
                },
                [
                  m[2] || (m[2] = p('div', { class: 'curtain' }, null, -1)),
                  p('nav', j3, [
                    m[1] ||
                      (m[1] = p(
                        'span',
                        { class: 'visually-hidden', id: 'sidebar-aria-label' },
                        ' Sidebar Navigation ',
                        -1,
                      )),
                    h(r.$slots, 'sidebar-nav-before', {}, void 0, !0),
                    (s(),
                    Z(_3, { items: d(o), key: n.value }, null, 8, ['items'])),
                    h(r.$slots, 'sidebar-nav-after', {}, void 0, !0),
                  ]),
                ],
                2,
              ))
            : u('', !0)
      )
    },
  }),
  $3 = f(S3, [['__scopeId', 'data-v-a9219850']]),
  q3 = v({
    __name: 'VPSkipLink',
    setup(a) {
      const o = r1(),
        e = V()
      I(
        () => o.path,
        () => e.value.focus(),
      )
      function l({ target: t }) {
        const i = document.getElementById(decodeURIComponent(t.hash).slice(1))
        if (i) {
          const n = () => {
            i.removeAttribute('tabindex'), i.removeEventListener('blur', n)
          }
          i.setAttribute('tabindex', '-1'),
            i.addEventListener('blur', n),
            i.focus(),
            window.scrollTo(0, 0)
        }
      }
      return (t, i) => (
        s(),
        c(
          _,
          null,
          [
            p(
              'span',
              { ref_key: 'backToTop', ref: e, tabindex: '-1' },
              null,
              512,
            ),
            p(
              'a',
              {
                href: '#VPContent',
                class: 'VPSkipLink visually-hidden',
                onClick: l,
              },
              ' Skip to content ',
            ),
          ],
          64,
        )
      )
    },
  }),
  z3 = f(q3, [['__scopeId', 'data-v-e5e6b270']]),
  P3 = v({
    __name: 'Layout',
    setup(a) {
      const { isOpen: o, open: e, close: l } = F(),
        t = r1()
      I(() => t.path, l), Z2(o, l)
      const { frontmatter: i } = A(),
        n = o2(),
        r = b(() => !!n['home-hero-image'])
      return (
        B1('hero-image-slot-exists', r),
        (m, k) => {
          const M = K('Content')
          return d(i).layout !== !1
            ? (s(),
              c(
                'div',
                { key: 0, class: H(['Layout', d(i).pageClass]) },
                [
                  h(m.$slots, 'layout-top', {}, void 0, !0),
                  w(z3),
                  w(
                    c2,
                    { class: 'backdrop', show: d(o), onClick: d(l) },
                    null,
                    8,
                    ['show', 'onClick'],
                  ),
                  w(V3, null, {
                    'nav-bar-title-before': y(() => [
                      h(m.$slots, 'nav-bar-title-before', {}, void 0, !0),
                    ]),
                    'nav-bar-title-after': y(() => [
                      h(m.$slots, 'nav-bar-title-after', {}, void 0, !0),
                    ]),
                    'nav-bar-content-before': y(() => [
                      h(m.$slots, 'nav-bar-content-before', {}, void 0, !0),
                    ]),
                    'nav-bar-content-after': y(() => [
                      h(m.$slots, 'nav-bar-content-after', {}, void 0, !0),
                    ]),
                    'nav-screen-content-before': y(() => [
                      h(m.$slots, 'nav-screen-content-before', {}, void 0, !0),
                    ]),
                    'nav-screen-content-after': y(() => [
                      h(m.$slots, 'nav-screen-content-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  w(b4, { open: d(o), onOpenMenu: d(e) }, null, 8, [
                    'open',
                    'onOpenMenu',
                  ]),
                  w(
                    $3,
                    { open: d(o) },
                    {
                      'sidebar-nav-before': y(() => [
                        h(m.$slots, 'sidebar-nav-before', {}, void 0, !0),
                      ]),
                      'sidebar-nav-after': y(() => [
                        h(m.$slots, 'sidebar-nav-after', {}, void 0, !0),
                      ]),
                      _: 3,
                    },
                    8,
                    ['open'],
                  ),
                  w(l4, null, {
                    'page-top': y(() => [
                      h(m.$slots, 'page-top', {}, void 0, !0),
                    ]),
                    'page-bottom': y(() => [
                      h(m.$slots, 'page-bottom', {}, void 0, !0),
                    ]),
                    'not-found': y(() => [
                      h(m.$slots, 'not-found', {}, void 0, !0),
                    ]),
                    'home-hero-before': y(() => [
                      h(m.$slots, 'home-hero-before', {}, void 0, !0),
                    ]),
                    'home-hero-info-before': y(() => [
                      h(m.$slots, 'home-hero-info-before', {}, void 0, !0),
                    ]),
                    'home-hero-info': y(() => [
                      h(m.$slots, 'home-hero-info', {}, void 0, !0),
                    ]),
                    'home-hero-info-after': y(() => [
                      h(m.$slots, 'home-hero-info-after', {}, void 0, !0),
                    ]),
                    'home-hero-actions-after': y(() => [
                      h(m.$slots, 'home-hero-actions-after', {}, void 0, !0),
                    ]),
                    'home-hero-image': y(() => [
                      h(m.$slots, 'home-hero-image', {}, void 0, !0),
                    ]),
                    'home-hero-after': y(() => [
                      h(m.$slots, 'home-hero-after', {}, void 0, !0),
                    ]),
                    'home-features-before': y(() => [
                      h(m.$slots, 'home-features-before', {}, void 0, !0),
                    ]),
                    'home-features-after': y(() => [
                      h(m.$slots, 'home-features-after', {}, void 0, !0),
                    ]),
                    'doc-footer-before': y(() => [
                      h(m.$slots, 'doc-footer-before', {}, void 0, !0),
                    ]),
                    'doc-before': y(() => [
                      h(m.$slots, 'doc-before', {}, void 0, !0),
                    ]),
                    'doc-after': y(() => [
                      h(m.$slots, 'doc-after', {}, void 0, !0),
                    ]),
                    'doc-top': y(() => [
                      h(m.$slots, 'doc-top', {}, void 0, !0),
                    ]),
                    'doc-bottom': y(() => [
                      h(m.$slots, 'doc-bottom', {}, void 0, !0),
                    ]),
                    'aside-top': y(() => [
                      h(m.$slots, 'aside-top', {}, void 0, !0),
                    ]),
                    'aside-bottom': y(() => [
                      h(m.$slots, 'aside-bottom', {}, void 0, !0),
                    ]),
                    'aside-outline-before': y(() => [
                      h(m.$slots, 'aside-outline-before', {}, void 0, !0),
                    ]),
                    'aside-outline-after': y(() => [
                      h(m.$slots, 'aside-outline-after', {}, void 0, !0),
                    ]),
                    'aside-ads-before': y(() => [
                      h(m.$slots, 'aside-ads-before', {}, void 0, !0),
                    ]),
                    'aside-ads-after': y(() => [
                      h(m.$slots, 'aside-ads-after', {}, void 0, !0),
                    ]),
                    _: 3,
                  }),
                  w(n4),
                  h(m.$slots, 'layout-bottom', {}, void 0, !0),
                ],
                2,
              ))
            : (s(), Z(M, { key: 1 }))
        }
      )
    },
  }),
  T3 = f(P3, [['__scopeId', 'data-v-ef9698f6']]),
  I3 = {
    Layout: T3,
    enhanceApp: ({ app: a }) => {
      a.component('Badge', s2)
    },
  }
function N3(a) {
  return t2() ? (a2(a), !0) : !1
}
function _1(a) {
  return typeof a == 'function' ? a() : d(a)
}
const D3 = typeof window < 'u' && typeof document < 'u'
typeof WorkerGlobalScope < 'u' && globalThis instanceof WorkerGlobalScope
const O3 = Object.prototype.toString,
  E3 = (a) => O3.call(a) === '[object Object]',
  M1 = () => {}
function F3(a, o) {
  function e(...l) {
    return new Promise((t, i) => {
      Promise.resolve(
        a(() => o.apply(this, l), { fn: o, thisArg: this, args: l }),
      )
        .then(t)
        .catch(i)
    })
  }
  return e
}
function U3(...a) {
  let o = 0,
    e,
    l = !0,
    t = M1,
    i,
    n,
    r,
    m,
    k
  !l2(a[0]) && typeof a[0] == 'object'
    ? ({
        delay: n,
        trailing: r = !0,
        leading: m = !0,
        rejectOnCancel: k = !1,
      } = a[0])
    : ([n, r = !0, m = !0, k = !1] = a)
  const M = () => {
    e && (clearTimeout(e), (e = void 0), t(), (t = M1))
  }
  return (B) => {
    const L = _1(n),
      S = Date.now() - o,
      $ = () => (i = B())
    return (
      M(),
      L <= 0
        ? ((o = Date.now()), $())
        : (S > L && (m || !l)
            ? ((o = Date.now()), $())
            : r &&
              (i = new Promise((g, P) => {
                ;(t = k ? P : g),
                  (e = setTimeout(
                    () => {
                      ;(o = Date.now()), (l = !0), g($()), M()
                    },
                    Math.max(0, L - S),
                  ))
              })),
          !m && !e && (e = setTimeout(() => (l = !0), L)),
          (l = !1),
          i)
    )
  }
}
function J3(a, o = 200, e = !1, l = !0, t = !1) {
  return F3(U3(o, e, l, t), a)
}
const G3 = D3 ? window : void 0
function R3(a) {
  var o
  const e = _1(a)
  return (o = e == null ? void 0 : e.$el) != null ? o : e
}
function W3(...a) {
  let o, e, l, t
  if (
    (typeof a[0] == 'string' || Array.isArray(a[0])
      ? (([e, l, t] = a), (o = G3))
      : ([o, e, l, t] = a),
    !o)
  )
    return M1
  Array.isArray(e) || (e = [e]), Array.isArray(l) || (l = [l])
  const i = [],
    n = () => {
      i.forEach((M) => M()), (i.length = 0)
    },
    r = (M, x, B, L) => (
      M.addEventListener(x, B, L), () => M.removeEventListener(x, B, L)
    ),
    m = I(
      () => [R3(o), _1(t)],
      ([M, x]) => {
        if ((n(), !M)) return
        const B = E3(x) ? { ...x } : x
        i.push(...e.flatMap((L) => l.map((S) => r(M, L, S, B))))
      },
      { immediate: !0, flush: 'post' },
    ),
    k = () => {
      m(), n()
    }
  return N3(k), k
}
if (typeof window < 'u') {
  let a = function () {
    var o = document.body,
      e = document.getElementById('__svg__icons__dom__')
    e ||
      ((e = document.createElementNS('http://www.w3.org/2000/svg', 'svg')),
      (e.style.position = 'absolute'),
      (e.style.width = '0'),
      (e.style.height = '0'),
      (e.id = '__svg__icons__dom__'),
      e.setAttribute('xmlns', 'http://www.w3.org/2000/svg'),
      e.setAttribute('xmlns:link', 'http://www.w3.org/1999/xlink')),
      (e.innerHTML =
        '<symbol  viewBox="0 0 512 512" id="icon-accessibility-outline"><circle fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" cx="256" cy="56" r="40" /><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" d="M204.23 274.44c2.9-18.06 4.2-35.52-.5-47.59-4-10.38-12.7-16.19-23.2-20.15L88 176.76c-12-4-23.21-10.7-24-23.94-1-17 14-28 29-24 0 0 88 31.14 163 31.14s162-31 162-31c18-5 30 9 30 23.79 0 14.21-11 19.21-24 23.94l-88 31.91c-8 3-21 9-26 18.18-6 10.75-5 29.53-2.1 47.59l5.9 29.63 37.41 163.9c2.8 13.15-6.3 25.44-19.4 27.74S308 489 304.12 476.28l-37.56-115.93q-2.71-8.34-4.8-16.87L256 320l-5.3 21.65q-2.52 10.35-5.8 20.48L208 476.18c-4 12.85-14.5 21.75-27.6 19.46s-22.4-15.59-19.46-27.74l37.39-163.83Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-accessibility-sharp"><path d="M448 112c-66.82 17.92-119.55 32-192 32s-125.18-14.08-192-32l-16 51c48 20.53 96.71 35.16 147.2 53.2L144 496l56.4 16L246 336h20l45.6 176 56.4-16-51.2-279.8C367.26 199.93 416 183.53 464 164ZM256 112a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-accessibility"><path d="M256 112a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56Z" /><path d="m432 112.8-.45.12-.42.13c-1 .28-2 .58-3 .89-18.61 5.46-108.93 30.92-172.56 30.92-59.13 0-141.28-22-167.56-29.47a73.79 73.79 0 0 0-8-2.58c-19-5-32 14.3-32 31.94 0 17.47 15.7 25.79 31.55 31.76v.28l95.22 29.74c9.73 3.73 12.33 7.54 13.6 10.84 4.13 10.59.83 31.56-.34 38.88l-5.8 45-32.19 176.19q-.15.72-.27 1.47l-.23 1.27c-2.32 16.15 9.54 31.82 32 31.82 19.6 0 28.25-13.53 32-31.94s28-157.57 42-157.57 42.84 157.57 42.84 157.57c3.75 18.41 12.4 31.94 32 31.94 22.52 0 34.38-15.74 32-31.94a57.17 57.17 0 0 0-.76-4.06L329 301.27l-5.79-45c-4.19-26.21-.82-34.87.32-36.9a1.09 1.09 0 0 0 .08-.15c1.08-2 6-6.48 17.48-10.79l89.28-31.21a16.9 16.9 0 0 0 1.62-.52c16-6 32-14.3 32-31.93S451 107.81 432 112.8Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-add-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M256 176v160M336 256H176" /></symbol><symbol  viewBox="0 0 512 512" id="icon-add-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm96 224h-80v80h-32v-80h-80v-32h80v-80h32v80h80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-add-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm80 224h-64v64a16 16 0 0 1-32 0v-64h-64a16 16 0 0 1 0-32h64v-64a16 16 0 0 1 32 0v64h64a16 16 0 0 1 0 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-add-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M256 112v288M400 256H112" /></symbol><symbol  viewBox="0 0 512 512" id="icon-add-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" d="M256 112v288M400 256H112" /></symbol><symbol  viewBox="0 0 512 512" id="icon-add"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M256 112v288M400 256H112" /></symbol><symbol  viewBox="0 0 512 512" id="icon-airplane-outline"><path d="M407.72 224c-3.4 0-14.79.1-18 .3l-64.9 1.7a1.83 1.83 0 0 1-1.69-.9L193.55 67.56a9 9 0 0 0-6.66-3.56H160l73 161a2.35 2.35 0 0 1-2.26 3.35l-121.69 1.8a8.06 8.06 0 0 1-6.6-3.1l-37-45c-3-3.9-8.62-6-13.51-6H33.08c-1.29 0-1.1 1.21-.75 2.43l19.84 71.42a16.3 16.3 0 0 1 0 11.9L32.31 333c-.59 1.95-.52 3 1.77 3H52c8.14 0 9.25-1.06 13.41-6.3l37.7-45.7a8.19 8.19 0 0 1 6.6-3.1l120.68 2.7a2.7 2.7 0 0 1 2.43 3.74L160 448h26.64a9 9 0 0 0 6.65-3.55L323.14 287c.39-.6 2-.9 2.69-.9l63.9 1.7c3.3.2 14.59.3 18 .3C452 288.1 480 275.93 480 256s-27.88-32-72.28-32Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-airplane-sharp"><path d="M407.72 208c-2.72 0-14.44.08-18.67.31l-57.77 1.52L198.06 48h-62.81l74.59 164.61-97.31 1.44L68.25 160H16.14l20.61 94.18c.15.54.33 1.07.53 1.59a.26.26 0 0 1 0 .15 15.42 15.42 0 0 0-.53 1.58L15.86 352h51.78l45.45-55 96.77 2.17L135.24 464h63l133-161.75 57.77 1.54c4.29.23 16 .31 18.66.31 24.35 0 44.27-3.34 59.21-9.94C492.22 283 496 265.46 496 256c0-30.06-33-48-88.28-48Zm-71.29 87.9Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-airplane"><path d="M186.62 464H160a16 16 0 0 1-14.57-22.6l64.46-142.25L113.1 297l-35.3 42.77C71.07 348.23 65.7 352 52 352H34.08a17.66 17.66 0 0 1-14.7-7.06c-2.38-3.21-4.72-8.65-2.44-16.41l19.82-71c.15-.53.33-1.06.53-1.58a.38.38 0 0 0 0-.15 14.82 14.82 0 0 1-.53-1.59l-19.84-71.45c-2.15-7.61.2-12.93 2.56-16.06a16.83 16.83 0 0 1 13.6-6.7H52c10.23 0 20.16 4.59 26 12l34.57 42.05 97.32-1.44-64.44-142A16 16 0 0 1 160 48h26.91a25 25 0 0 1 19.35 9.8l125.05 152 57.77-1.52c4.23-.23 15.95-.31 18.66-.31C463 208 496 225.94 496 256c0 9.46-3.78 27-29.07 38.16-14.93 6.6-34.85 9.94-59.21 9.94-2.68 0-14.37-.08-18.66-.31l-57.76-1.54-125.36 152a25 25 0 0 1-19.32 9.75Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-alarm-outline"><path d="M416.07 272a160 160 0 1 0-160 160 160 160 0 0 0 160-160ZM142.12 91.21A46.67 46.67 0 0 0 112 80l-2.79.08C83.66 81.62 64 104 64.07 131c0 13.21 4.66 19.37 10.88 27.23a4.55 4.55 0 0 0 3.24 1.77h.88a3.23 3.23 0 0 0 2.54-1.31L142.38 99a5.38 5.38 0 0 0 1.55-4 5.26 5.26 0 0 0-1.81-3.79ZM369.88 91.21A46.67 46.67 0 0 1 400 80l2.79.08C428.34 81.62 448 104 447.93 131c0 13.21-4.66 19.37-10.88 27.23a4.55 4.55 0 0 1-3.24 1.76h-.88a3.23 3.23 0 0 1-2.54-1.31L369.62 99a5.38 5.38 0 0 1-1.55-4 5.26 5.26 0 0 1 1.81-3.79Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M256.07 160v112h-80M416.07 432l-40-40M96.07 432l40-40" /></symbol><symbol  viewBox="0 0 512 512" id="icon-alarm-sharp"><path d="m403.79 64.11-3.27-.1H400c-14.73 0-28.55 5.91-40.52 15S344 96 344 96l88 86s11.25-5.71 17.61-13.85 14.28-18.08 14.32-37.11c.07-35.49-26.33-64.89-60.14-66.93ZM108.21 64.11l3.27-.1h.52c14.73 0 28.55 5.91 40.52 15S168 96 168 96l-88 86s-11.25-5.71-17.61-13.85S48.11 150.07 48.07 131C48 95.55 74.4 66.15 108.21 64.11Z" /><path d="M391.3 384.6a.06.06 0 0 1 0-.08C425 344 441 288.24 427 229.23c-13.64-57.52-72.67-115.69-130.34-128.66C182 74.79 80.07 161.71 80.07 272a175.15 175.15 0 0 0 40.78 112.52.06.06 0 0 1 0 .08L73 432a.06.06 0 0 0 0 .08l23 22.51a.06.06 0 0 0 .08 0l47.43-47.37a.06.06 0 0 1 .08 0 175.64 175.64 0 0 0 225.05 0h.07L416 454.59a.06.06 0 0 0 .08 0L440 432ZM272.07 288H160v-31.9l.05-.05h80V144h32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-alarm"><path d="M153.59 110.46A21.41 21.41 0 0 0 152.48 79 62.67 62.67 0 0 0 112 64l-3.27.09h-.48C74.4 66.15 48 95.55 48.07 131c0 19 8 29.06 14.32 37.11a20.61 20.61 0 0 0 14.7 7.8c.26 0 .7.05 2 .05a19.06 19.06 0 0 0 13.75-5.89ZM403.79 64.11l-3.27-.1H400a62.67 62.67 0 0 0-40.52 15 21.41 21.41 0 0 0-1.11 31.44l60.77 59.65a19.06 19.06 0 0 0 13.79 5.9c1.28 0 1.72 0 2-.05a20.61 20.61 0 0 0 14.69-7.8c6.36-8.05 14.28-18.08 14.32-37.11.06-35.49-26.34-64.89-60.15-66.93Z" /><path d="M256.07 96c-97 0-176 78.95-176 176a175.23 175.23 0 0 0 40.81 112.56l-36.12 36.13a16 16 0 1 0 22.63 22.62l36.12-36.12a175.63 175.63 0 0 0 225.12 0l36.13 36.12a16 16 0 1 0 22.63-22.62l-36.13-36.13A175.17 175.17 0 0 0 432.07 272c0-97-78.95-176-176-176Zm16 176a16 16 0 0 1-16 16h-80a16 16 0 0 1 0-32h64v-96a16 16 0 0 1 32 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-albums-outline"><rect x="64" y="176" width="384" height="256" rx="28.87" ry="28.87" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M144 80h224M112 128h288" /></symbol><symbol  viewBox="0 0 512 512" id="icon-albums-sharp"><path d="M128 64h256v32H128zM96 112h320v32H96zM464 448H48V160h416Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-albums"><path d="M368 96H144a16 16 0 0 1 0-32h224a16 16 0 0 1 0 32ZM400 144H112a16 16 0 0 1 0-32h288a16 16 0 0 1 0 32ZM419.13 448H92.87A44.92 44.92 0 0 1 48 403.13V204.87A44.92 44.92 0 0 1 92.87 160h326.26A44.92 44.92 0 0 1 464 204.87v198.26A44.92 44.92 0 0 1 419.13 448Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-alert-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M250.26 166.05 256 288l5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 6Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M256 367.91a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-alert-circle-sharp"><path style="fill:none" d="M240 304h32l6-160h-44l6 160z" /><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm20 319.91h-40v-40h40ZM272 304h-32l-6-160h44Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-alert-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm0 319.91a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm21.72-201.15-5.74 122a16 16 0 0 1-32 0l-5.74-121.94v-.05a21.74 21.74 0 1 1 43.44 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-alert-outline"><path d="M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8l8-216c.58-8.64-7.34-16-16-16Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="256" cy="416" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-alert-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="m240 80 8 240h16l8-240h-32zM240 400h32v32h-32z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-alert"><path d="M256 80c-8.66 0-16.58 7.36-16 16l8 216a8 8 0 0 0 8 8h0a8 8 0 0 0 8-8l8-216c.58-8.64-7.34-16-16-16Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="256" cy="416" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-american-football-outline"><ellipse cx="256" cy="256" rx="267.57" ry="173.44" transform="rotate(-45 256 256.002)" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M334.04 177.96 177.96 334.04M278.3 278.3l-44.6-44.6M322.89 233.7l-44.59-44.59M456.68 211.4 300.6 55.32M211.4 456.68 55.32 300.6M233.7 322.89l-44.59-44.59" /></symbol><symbol  viewBox="0 0 512 512" id="icon-american-football-sharp"><path d="M120.9 120.51c-44.75 44.56-67.29 101.05-78.64 145.9l202.31 201.44c45.05-11.3 101.78-33.74 146.53-78.3s67.29-101.05 78.64-145.91L267.43 42.21C222.38 53.51 165.65 76 120.9 120.51Zm259 257.83Zm-45-224.2 22.52 22.42-33.78 33.63 22.52 22.42L323.55 255 301 232.61 278.52 255 301 277.45l-22.51 22.42L256 277.45l-22.52 22.42L256 322.29l-22.52 22.42L211 322.29l-33.78 33.63-22.55-22.42 33.78-33.63-22.52-22.42L188.45 255 211 277.45 233.48 255 211 232.61l22.51-22.42L256 232.61l22.52-22.42L256 187.77l22.52-22.42L301 187.77ZM478.48 198.41C485.85 143.65 464 48.05 464 48.05s-96.14-21.88-151.14-14.54c-2.54.33-5.21.72-8 1.14l172.47 171.71c.43-2.76.81-5.42 1.15-7.95ZM33.52 311.65C26.15 366.41 48.05 464 48.05 464s60 16 99.86 16a391.92 391.92 0 0 0 51.23-3.45c2.54-.33 5.21-.72 8-1.15L34.67 303.7c-.43 2.76-.81 5.42-1.15 7.95Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-american-football"><path d="M122.06 122.06c-44.37 44.37-66.71 100.61-78 145.28l200.6 200.56c44.67-11.25 100.91-33.59 145.28-78s66.71-100.61 78-145.28L267.34 44.1c-44.67 11.25-100.91 33.59-145.28 77.96Zm256.73 256.72ZM300.65 189 323 166.71A15.78 15.78 0 0 1 345.29 189L323 211.35l11.16 11.17a15.78 15.78 0 0 1-22.32 22.32l-11.16-11.16L278.32 256l11.16 11.16a15.78 15.78 0 1 1-22.32 22.32L256 278.32l-22.32 22.33 11.16 11.16a15.78 15.78 0 1 1-22.32 22.32L211.35 323 189 345.29A15.78 15.78 0 0 1 166.71 323L189 300.65l-11.16-11.17a15.78 15.78 0 0 1 22.32-22.32l11.16 11.16L233.68 256l-11.16-11.16a15.78 15.78 0 1 1 22.32-22.32L256 233.68l22.32-22.33-11.16-11.16a15.78 15.78 0 0 1 22.32-22.32ZM476.57 199.63c7.31-54.53 4-120.26-20-144.21s-89.68-27.3-144.21-20c-2.51.34-5.16.72-7.91 1.15l171 171c.4-2.78.78-5.43 1.12-7.94ZM35.43 312.37c-7.31 54.53-4 120.26 20 144.21C72.17 473.33 109.34 480 148.84 480a387 387 0 0 0 50.79-3.43c2.51-.34 5.16-.72 7.91-1.15l-171-171c-.39 2.79-.77 5.44-1.11 7.95Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-analytics-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m344 280 88-88M232 216l64 64M80 320l104-104" /><circle cx="456" cy="168" r="24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="320" cy="304" r="24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="208" cy="192" r="24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="56" cy="344" r="24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-analytics-sharp"><path d="M450 128a46 46 0 0 0-44.11 59l-71.37 71.36a45.88 45.88 0 0 0-29 0l-52.91-52.91a46 46 0 1 0-89.12 0L75 293.88A46.08 46.08 0 1 0 106.11 325l87.37-87.36a45.85 45.85 0 0 0 29 0l52.92 52.92a46 46 0 1 0 89.12 0L437 218.12A46 46 0 1 0 450 128Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-analytics"><path d="M456 128a40 40 0 0 0-37.23 54.6l-84.17 84.17a39.86 39.86 0 0 0-29.2 0l-60.17-60.17a40 40 0 1 0-74.46 0L70.6 306.77a40 40 0 1 0 22.63 22.63L193.4 229.23a39.86 39.86 0 0 0 29.2 0l60.17 60.17a40 40 0 1 0 74.46 0l84.17-84.17A40 40 0 1 0 456 128Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-aperture-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M360 94.59V296M443.13 212.87 296 360M417.41 360H216M299.13 443.13l-144-144M152 416V216M68.87 299.13l144-144M94.59 152H288M212.87 68.87 360 216" /></symbol><symbol  viewBox="0 0 512 512" id="icon-aperture-sharp"><path d="m216 48 129.49 128.18V48H216zM181.47 58.38 80 134h176l-74.53-75.62zM336 344h128V216L336 344zM454 182 378 80v176l76-74zM48 166v128l128-128H48zM330 454l102-76H256l74 76zM58 330l76 102V256l-76 74zM345.49 222.12l-55.55-55.46h-67.88l-55.55 55.46v67.76l55.62 55.52c.44 0 .88-.06 1.33-.06h66.48l55.55-55.46ZM165.98 336.09 166 464h128L165.98 336.09z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-aperture"><path d="m250.54 129.17-67.8-67.8A209.65 209.65 0 0 0 86.32 136h161.4a4 4 0 0 0 2.82-6.83ZM167.72 168H67.63a207.34 207.34 0 0 0-16.15 125.9l119.06-119.07a4 4 0 0 0-2.82-6.83ZM344 167.72V67.56a207.82 207.82 0 0 0-125.89-16.08l119.06 119.06a4 4 0 0 0 6.83-2.82ZM460.52 218.1 341.46 337.17a4 4 0 0 0 2.82 6.83h100.09a207.34 207.34 0 0 0 16.15-125.9ZM382.83 250.54l67.83-67.82A209.08 209.08 0 0 0 376 86.2v161.52a4 4 0 0 0 6.83 2.82ZM221.68 341.77a8 8 0 0 0 5.54 2.23h59.66a8 8 0 0 0 5.7-2.39l49.18-50a8 8 0 0 0 2.3-5.62l-.06-60.81a8 8 0 0 0-2.38-5.69l-50-49.25a8 8 0 0 0-5.63-2.3l-60.84.06a8 8 0 0 0-5.69 2.38l-49.25 50a8 8 0 0 0-2.3 5.63l.06 60.78a8 8 0 0 0 2.45 5.76ZM261.46 382.83l67.8 67.8A209.65 209.65 0 0 0 425.68 376h-161.4a4 4 0 0 0-2.82 6.83ZM168 344.28v100.16a207.82 207.82 0 0 0 125.89 16.08L174.83 341.46a4 4 0 0 0-6.83 2.82ZM129.17 261.46l-67.83 67.83A209.1 209.1 0 0 0 136 425.8V264.28a4 4 0 0 0-6.83-2.82Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-apps-outline"><rect x="64" y="64" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><rect x="216" y="64" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><rect x="368" y="64" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><rect x="64" y="216" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><rect x="216" y="216" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><rect x="368" y="216" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><rect x="64" y="368" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><rect x="216" y="368" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><rect x="368" y="368" width="80" height="80" rx="40" ry="40" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-apps-sharp"><rect x="48" y="48" width="112" height="112" rx="8" ry="8" /><rect x="200" y="48" width="112" height="112" rx="8" ry="8" /><rect x="352" y="48" width="112" height="112" rx="8" ry="8" /><rect x="48" y="200" width="112" height="112" rx="8" ry="8" /><rect x="200" y="200" width="112" height="112" rx="8" ry="8" /><rect x="352" y="200" width="112" height="112" rx="8" ry="8" /><rect x="48" y="352" width="112" height="112" rx="8" ry="8" /><rect x="200" y="352" width="112" height="112" rx="8" ry="8" /><rect x="352" y="352" width="112" height="112" rx="8" ry="8" /></symbol><symbol  viewBox="0 0 512 512" id="icon-apps"><path d="M104 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56ZM256 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56ZM408 160a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56ZM104 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56ZM256 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56ZM408 312a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56ZM104 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56ZM256 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56ZM408 464a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-archive-outline"><path d="M80 152v256a40.12 40.12 0 0 0 40 40h272a40.12 40.12 0 0 0 40-40V152" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="48" y="64" width="416" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m320 304-64 64-64-64M256 345.89V224" /></symbol><symbol  viewBox="0 0 512 512" id="icon-archive-sharp"><rect x="32" y="48" width="448" height="80" rx="12" ry="12" /><path d="M64 160v280a24 24 0 0 0 24 24h336a24 24 0 0 0 24-24V160Zm192 230.63L169.32 304 192 281.32l48 48.05V208h32v121.37l48.07-48.07 22.61 22.64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-archive"><path d="M64 164v244a56 56 0 0 0 56 56h272a56 56 0 0 0 56-56V164a4 4 0 0 0-4-4H68a4 4 0 0 0-4 4Zm267 151.63-63.69 63.68a16 16 0 0 1-22.62 0L181 315.63c-6.09-6.09-6.65-16-.85-22.38a16 16 0 0 1 23.16-.56L240 329.37V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 224v105.37l36.69-36.68a16 16 0 0 1 23.16.56c5.8 6.37 5.24 16.29-.85 22.38Z" /><rect x="32" y="48" width="448" height="80" rx="32" ry="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-back-circle-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M249.38 336 170 256l79.38-80M181.03 256H342" /><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-back-circle-sharp"><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256Zm224-80.09L208.42 240H358v32H208.42L272 336.09l-22.7 22.54L147.46 256 249.3 153.37Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-back-circle"><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256Zm212.65-91.36a16 16 0 0 1 .09 22.63L208.42 240H342a16 16 0 0 1 0 32H208.42l52.32 52.73A16 16 0 1 1 238 347.27l-79.39-80a16 16 0 0 1 0-22.54l79.39-80a16 16 0 0 1 22.65-.09Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-back-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="M244 400 100 256l144-144M120 256h292" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-back-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" d="M244 400 100 256l144-144M120 256h292" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-back"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="M244 400 100 256l144-144M120 256h292" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-down-circle-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M176 262.62 256 342l80-79.38M256 330.97V170" /><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-down-circle-sharp"><path d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208Zm-80.09-224L240 303.58V154h32v149.58L336.09 240l22.54 22.71L256 364.54 153.37 262.7Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-down-circle"><path d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208Zm-91.36-212.65a16 16 0 0 1 22.63-.09L240 303.58V170a16 16 0 0 1 32 0v133.58l52.73-52.32A16 16 0 1 1 347.27 274l-80 79.39a16 16 0 0 1-22.54 0l-80-79.39a16 16 0 0 1-.09-22.65Z" /></symbol><symbol fill="none"  viewBox="0 0 512 512" id="icon-arrow-down-left-box-outline"><path d="M123.636 269.236V90.546A42.545 42.545 0 0 1 166.182 48h255.273A42.546 42.546 0 0 1 464 90.545v255.273a42.542 42.542 0 0 1-42.545 42.546H242.764M48 331.636V464h132.364M296 216 48 464" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-down-left-box-sharp"><path fill-rule="evenodd" clip-rule="evenodd" d="M32 480V315.636h32v109.737l43.636-43.637v22.628h22.628L86.627 448h109.737v32H32Zm286.628-264L130.264 404.364H480V32H107.636v349.736L296 193.373 318.628 216Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-down-left-box"><path fill-rule="evenodd" clip-rule="evenodd" d="M180.364 480H48a16.002 16.002 0 0 1-16-16V331.636c0-8.836 7.163-16 16-16s16 7.164 16 16v93.737l51.128-51.128a58.521 58.521 0 0 0 22.591 22.663L86.627 448h93.737c8.836 0 16 7.163 16 16s-7.164 16-16 16Zm-42.645-83.092a58.543 58.543 0 0 0 28.59 7.456h255.146A58.545 58.545 0 0 0 480 345.818V90.545A58.543 58.543 0 0 0 421.455 32H166.182a58.545 58.545 0 0 0-58.546 58.545v255.273c0 .808.06 1.602.176 2.378a58.544 58.544 0 0 0 7.316 26.049l169.558-169.559c6.249-6.248 16.379-6.248 22.628 0 6.248 6.249 6.248 16.379 0 22.628L137.719 396.908Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-down-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="m112 268 144 144 144-144M256 392V100" /></symbol><symbol fill="none"  viewBox="0 0 512 512" id="icon-arrow-down-right-box-outline"><path d="M269.236 388.364H90.546A42.546 42.546 0 0 1 48 345.818V90.545A42.545 42.545 0 0 1 90.545 48h255.273a42.543 42.543 0 0 1 42.546 42.546v178.69M331.636 464H464V331.636M216 216l248 248" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-down-right-box-sharp"><path fill-rule="evenodd" clip-rule="evenodd" d="M480 480H315.636v-32h109.737l-43.637-43.636h22.628v-22.628L448 425.372V315.636h32V480ZM216 193.372l188.364 188.364V32H32v372.364h349.736L193.373 216 216 193.372Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-down-right-box"><path fill-rule="evenodd" clip-rule="evenodd" d="M480 331.636V464c0 4.243-1.686 8.313-4.686 11.314A16.004 16.004 0 0 1 464 480H331.636c-8.836 0-16-7.163-16-16s7.164-16 16-16h93.737l-51.128-51.128a58.521 58.521 0 0 0 22.663-22.591L448 425.373v-93.737c0-8.836 7.163-16 16-16s16 7.164 16 16Zm-83.092 42.645a58.543 58.543 0 0 0 7.456-28.59V90.546A58.547 58.547 0 0 0 345.818 32H90.545A58.546 58.546 0 0 0 32 90.546v255.272a58.545 58.545 0 0 0 58.545 58.546h255.273c.808 0 1.602-.06 2.378-.176a58.544 58.544 0 0 0 26.049-7.316L204.686 227.314c-6.248-6.249-6.248-16.379 0-22.628 6.249-6.248 16.379-6.248 22.628 0l169.594 169.595Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-down-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" d="m112 268 144 144 144-144M256 392V100" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-down"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="m112 268 144 144 144-144M256 392V100" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-forward-circle-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M262.62 336 342 256l-79.38-80M330.97 256H170" /><path d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-forward-circle-sharp"><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208Zm-224 80.09L303.58 272H154v-32h149.58L240 175.91l22.71-22.54L364.54 256 262.7 358.63Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-forward-circle"><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208Zm-212.65 91.36a16 16 0 0 1-.09-22.63L303.58 272H170a16 16 0 0 1 0-32h133.58l-52.32-52.73A16 16 0 1 1 274 164.73l79.39 80a16 16 0 0 1 0 22.54l-79.39 80a16 16 0 0 1-22.65.09Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-forward-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="m268 112 144 144-144 144M392 256H100" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-forward-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" d="m268 112 144 144-144 144M392 256H100" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-forward"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="m268 112 144 144-144 144M392 256H100" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-redo-circle-outline"><path d="M266.91 327.74v-37.32c-57.07 0-84.51 13.47-108.58 38.68-5.4 5.65-15 1.32-14.29-6.43 5.45-61.45 34.14-117.09 122.87-117.09v-37.32a8.32 8.32 0 0 1 14-6L365.42 242a8.2 8.2 0 0 1 0 11.94L281 333.71a8.32 8.32 0 0 1-14.09-5.97Z" /><path d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-redo-circle-sharp"><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256Zm98 88c0-68.13 22.67-137.14 119.17-137.14V152L366 248l-100.83 96v-54.86c-66.69 0-91.32 19.29-119.17 54.86Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-redo-circle"><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256Zm96 66.67c5.45-61.45 34.14-117.09 122.87-117.09v-37.32a8.32 8.32 0 0 1 14-6L365.42 242a8.2 8.2 0 0 1 0 11.94L281 333.71a8.32 8.32 0 0 1-14-6v-37.29c-57.07 0-84.51 13.47-108.58 38.68-5.49 5.65-15.07 1.32-14.42-6.43Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-redo-outline"><path d="M448 256 272 88v96C103.57 184 64 304.77 64 424c48.61-62.24 91.6-96 208-96v96Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-redo-sharp"><path d="M48 399.26C48 335.19 62.44 284 90.91 247c34.38-44.67 88.68-68.77 161.56-71.75V72L464 252 252.47 432V329.35c-44.25 1.19-77.66 7.58-104.27 19.84-28.75 13.25-49.6 33.05-72.08 58.7L48 440Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-redo"><path d="M58.79 439.13A16 16 0 0 1 48 424c0-73.1 14.68-131.56 43.65-173.77 35-51 90.21-78.46 164.35-81.87V88a16 16 0 0 1 27.05-11.57l176 168a16 16 0 0 1 0 23.14l-176 168A16 16 0 0 1 256 424v-79.77c-45 1.36-79 8.65-106.07 22.64-29.25 15.12-50.46 37.71-73.32 67a16 16 0 0 1-17.82 5.28Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-undo-circle-outline"><path d="M245.09 327.74v-37.32c57.07 0 84.51 13.47 108.58 38.68 5.4 5.65 15 1.32 14.29-6.43-5.45-61.45-34.14-117.09-122.87-117.09v-37.32a8.32 8.32 0 0 0-14.05-6L146.58 242a8.2 8.2 0 0 0 0 11.94L231 333.71a8.32 8.32 0 0 0 14.09-5.97Z" /><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-undo-circle-sharp"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm-9.17 241.14V344L146 248l100.83-96v54.86c96.5 0 119.17 69 119.17 137.14-27.85-35.57-52.48-54.86-119.17-54.86Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-undo-circle"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm97.67 281.1c-24.07-25.21-51.51-38.68-108.58-38.68v37.32a8.32 8.32 0 0 1-14.05 6L146.58 254a8.2 8.2 0 0 1 0-11.94L231 162.29a8.32 8.32 0 0 1 14.05 6v37.32c88.73 0 117.42 55.64 122.87 117.09.73 7.72-8.85 12.05-14.25 6.4Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-undo-outline"><path d="M240 424v-96c116.4 0 159.39 33.76 208 96 0-119.23-39.57-240-208-240V88L64 256Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-undo-sharp"><path d="m464 440-28.12-32.11c-22.48-25.65-43.33-45.45-72.08-58.7-26.61-12.26-60-18.65-104.27-19.84V432L48 252 259.53 72v103.21c72.88 3 127.18 27.08 161.56 71.75C449.56 284 464 335.19 464 399.26Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-undo"><path d="M448 440a16 16 0 0 1-12.61-6.15c-22.86-29.27-44.07-51.86-73.32-67C335 352.88 301 345.59 256 344.23V424a16 16 0 0 1-27 11.57l-176-168a16 16 0 0 1 0-23.14l176-168A16 16 0 0 1 256 88v80.36c74.14 3.41 129.38 30.91 164.35 81.87C449.32 292.44 464 350.9 464 424a16 16 0 0 1-16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-up-circle-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M176 249.38 256 170l80 79.38M256 181.03V342" /><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-up-circle-sharp"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm80.09 224L272 208.42V358h-32V208.42L175.91 272l-22.54-22.7L256 147.46 358.63 249.3Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-up-circle"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm91.36 212.65a16 16 0 0 1-22.63.09L272 208.42V342a16 16 0 0 1-32 0V208.42l-52.73 52.32A16 16 0 1 1 164.73 238l80-79.39a16 16 0 0 1 22.54 0l80 79.39a16 16 0 0 1 .09 22.65Z" /></symbol><symbol fill="none"  viewBox="0 0 512 512" id="icon-arrow-up-left-box-outline"><path d="M242.764 123.636h178.691A42.547 42.547 0 0 1 464 166.182v255.273A42.546 42.546 0 0 1 421.455 464H166.182a42.542 42.542 0 0 1-42.546-42.545V242.764M180.364 48H48v132.364M296 296 48 48" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-up-left-box-sharp"><path fill-rule="evenodd" clip-rule="evenodd" d="M32 32h164.364v32H86.627l43.637 43.636h-22.628v22.628L64 86.627v109.737H32V32Zm264 286.627L107.636 130.264V480H480V107.636H130.264L318.628 296 296 318.627Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-up-left-box"><path fill-rule="evenodd" clip-rule="evenodd" d="M32 180.364V48a16 16 0 0 1 16-16h132.364c8.836 0 16 7.163 16 16s-7.164 16-16 16H86.627l51.128 51.128a58.521 58.521 0 0 0-22.663 22.591L64 86.627v93.737c0 8.836-7.163 16-16 16s-16-7.164-16-16Zm83.092-42.645a58.543 58.543 0 0 0-7.456 28.59v255.146A58.545 58.545 0 0 0 166.182 480h255.273a58.541 58.541 0 0 0 41.397-17.148A58.541 58.541 0 0 0 480 421.455V166.182a58.543 58.543 0 0 0-58.545-58.546H166.182c-.808 0-1.602.06-2.378.176a58.544 58.544 0 0 0-26.049 7.316l169.559 169.558c6.248 6.249 6.248 16.379 0 22.628-6.249 6.248-16.379 6.248-22.628 0L115.092 137.719Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-up-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="m112 244 144-144 144 144M256 120v292" /></symbol><symbol fill="none"  viewBox="0 0 512 512" id="icon-arrow-up-right-box-outline"><path d="M388.364 242.764v178.691A42.547 42.547 0 0 1 345.818 464H90.546A42.544 42.544 0 0 1 48 421.455V166.182a42.543 42.543 0 0 1 42.546-42.546h178.69M464 180.364V48H331.636M216 296 464 48" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-up-right-box-sharp"><path fill-rule="evenodd" clip-rule="evenodd" d="M480 32v164.364h-32V86.627l-43.636 43.637v-22.628h-22.628L425.373 64H315.636V32H480ZM193.373 296l188.363-188.364H32V480h372.364V130.264L216 318.627 193.373 296Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-up-right-box"><path fill-rule="evenodd" clip-rule="evenodd" d="M331.636 32H464a16.002 16.002 0 0 1 16 16v132.364c0 8.836-7.163 16-16 16s-16-7.164-16-16V86.627l-51.128 51.128a58.521 58.521 0 0 0-22.591-22.663L425.373 64h-93.737c-8.836 0-16-7.163-16-16s7.164-16 16-16Zm42.645 83.092a58.543 58.543 0 0 0-28.59-7.456H90.546A58.547 58.547 0 0 0 32 166.182v255.273A58.543 58.543 0 0 0 90.546 480h255.272a58.543 58.543 0 0 0 58.546-58.545V166.182c0-.808-.06-1.602-.176-2.378a58.544 58.544 0 0 0-7.316-26.049L227.314 307.314c-6.249 6.248-16.379 6.248-22.628 0-6.248-6.249-6.248-16.379 0-22.628l169.595-169.594Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-up-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" d="m112 244 144-144 144 144M256 120v292" /></symbol><symbol  viewBox="0 0 512 512" id="icon-arrow-up"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="m112 244 144-144 144 144M256 120v292" /></symbol><symbol  viewBox="0 0 512 512" id="icon-at-circle-outline"><path d="M448.08 256.08c0-106-86-192-192-192s-192 86-192 192 86 192 192 192 192-85.97 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M300.81 358.29c-20.83 7.42-34.05 9.59-54.19 9.59-61.17 0-106.39-50.07-101-111.84S205 144.21 266.14 144.21c68.92 0 106.79 45.55 101.47 106.55-4 45.54-32.8 58.66-47.89 56-14.2-2.55-25.92-15.52-23.75-40.35l5.62-44.66c-7.58-9.17-28.11-18-49.93-14.54C231.77 210.3 209 228 206.56 256s14.49 50.84 39.93 50.84 47.86-18.39 50.69-50.84" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:28px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-at-circle-sharp"><path d="M256.41 48.74c-114.85 0-208 93.11-208 208s93.12 208 208 208 208-93.12 208-208-93.16-208-208-208ZM381.22 252c-2.85 32.63-16.78 49.7-28 58.26s-24.69 12.34-36.33 10.26a41.63 41.63 0 0 1-27-17.52 60.84 60.84 0 0 1-43.72 17.9 51.65 51.65 0 0 1-38.55-16.83c-11.39-12.42-17-30.36-15.33-49.23 3.05-35 30.92-57.39 56.87-61.48 27.21-4.29 52.24 6.54 62.91 19.46l3.84 4.66-6.34 50.38c-1.19 14.34 3.29 23.48 12.29 25.1 2.39.42 8.11-.13 14.38-4.93 6.72-5.15 15.14-16 17.1-38.47 2.32-26.55-4.35-49.19-19.28-65.49-15.5-16.9-39.1-25.84-68.24-25.84-54 0-101.81 44.43-106.57 99-2.29 26.2 5.66 50.68 22.39 68.93C198 344 221 353.88 246.29 353.88c19 0 30.61-2.05 49.49-8.78l13.22-4.69 9.39 26.37-13.19 4.7c-21.82 7.77-36.68 10.4-58.88 10.4-33.28 0-63.57-13.06-85.3-36.77-22.09-24.11-32.62-56.17-29.65-90.29 2.91-33.33 18.46-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.94 12.08 88.88 34.93 20.05 21.91 29.48 52.75 26.5 86.86Z" /><path d="M253.51 221c-14.83 2.33-31.55 15.84-33.34 36.26-1 11.06 2 21.22 8.08 27.87a23.63 23.63 0 0 0 17.91 7.75c19.7 0 33.8-14.79 36.8-38.59l1.75-13.89h.09l1.65-13.11a49.63 49.63 0 0 0-32.94-6.3Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-at-circle"><path d="M255.46 48.74c-114.84 0-208 93.11-208 208s93.12 208 208 208 208-93.12 208-208-93.15-208-208-208ZM380.28 252c-2.85 32.63-16.79 49.7-28 58.26S327.61 322.58 316 320.5a41.61 41.61 0 0 1-26.82-17.19 62.06 62.06 0 0 1-44 17.57 51.66 51.66 0 0 1-38.55-16.83c-11.38-12.42-17-30.36-15.32-49.23 3-35 30.91-57.39 56.87-61.48 27.2-4.29 52.23 6.54 62.9 19.46l3.85 4.66-6.34 50.38c-1.19 14.34 3.28 23.48 12.29 25.1 2.39.42 8.1-.13 14.37-4.93 6.72-5.15 15.14-16 17.1-38.47 2.35-26.54-4.35-49.19-19.25-65.49-15.49-16.9-39.09-25.84-68.23-25.84-54 0-101.81 44.43-106.58 99-2.28 26.2 5.67 50.68 22.4 68.93 16.36 17.86 39.31 27.74 64.66 27.74 19 0 30.61-2.05 49.48-8.78a14 14 0 0 1 9.4 26.38c-21.82 7.77-36.68 10.4-58.88 10.4-33.28 0-63.57-13.06-85.3-36.77C138 321 127.42 288.94 130.4 254.82c2.91-33.33 18.45-64.63 43.77-88.12s57.57-36.49 90.7-36.49c37.2 0 67.93 12.08 88.87 34.93 20.09 21.91 29.51 52.75 26.54 86.86Z" /><path d="M252.57 221c-14.83 2.33-31.56 15.84-33.34 36.26-1 11.06 2 21.22 8.07 27.87a23.65 23.65 0 0 0 17.91 7.75c20.31 0 34.73-14.94 36.75-38.06a14 14 0 0 1 .34-2.07l3.2-25.45a49.61 49.61 0 0 0-32.93-6.3Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-at-outline"><path d="M320 254.27c-4.5 51-40.12 80-80.55 80s-67.34-35.82-63.45-80 37.12-80 77.55-80 70.33 36 66.45 80Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M319.77 415.77c-28.56 12-47.28 14.5-79.28 14.5-97.2 0-169-78.8-160.49-176s94.31-176 191.51-176C381 78.27 441.19 150 432.73 246c-6.31 71.67-52.11 92.32-76.09 88.07-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-at-sharp"><path d="M407.6 115.78c-32.07-35-79.47-53.51-137.09-53.51-51 0-100.69 19.8-139.82 55.76s-63.13 83.84-67.63 134.83c-4.55 51.67 11.41 100.29 44.94 136.9 33.37 36.44 80.07 56.51 131.49 56.51 32.52 0 53.61-2.36 85.48-15.75l14.75-6.2-12.4-29.5-14.75 6.18c-27.15 11.4-43.78 13.25-73.08 13.25-42.34 0-80.65-16.38-107.89-46.12-27.4-29.92-40.42-69.86-36.66-112.48 7.84-89 86.6-161.4 175.57-161.4 48.4 0 87.65 14.91 113.49 43.13 24.61 26.87 35.6 63.92 31.79 107.15-3.29 37.35-17.76 55.74-29.32 64.6-11 8.44-22 10.18-28 9.11-17.68-3.13-26.87-20.46-24.59-46.29l9.93-109.12L311.9 160l-2 22.29a79.69 79.69 0 0 0-57.32-24c-23.8 0-46.54 10.07-64 28.37-16.77 17.53-27.23 41.05-29.45 66.22-2.45 27.87 5.75 54.34 22.51 72.64a76.14 76.14 0 0 0 56.88 24.77A93 93 0 0 0 310 318a60 60 0 0 0 42.88 31.81c16.89 3 36.73-2.69 53.08-15.21 30.19-23.13 39.36-60.19 41.74-87.2 4.52-51.7-9.7-98.4-40.1-131.62Zm-126.34 186a62.19 62.19 0 0 1-42.81 16.53 43.94 43.94 0 0 1-33.28-14.38c-10.71-11.7-15.9-29.27-14.23-48.22 3.23-36.68 30.29-65.4 61.61-65.4a48.16 48.16 0 0 1 35.88 15.82c10.87 11.87 16.2 28.87 14.63 46.73-1.78 20.28-9.33 37.14-21.8 48.88Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-at"><path d="M320 254.27c-4.5 51-40.12 80-80.55 80s-67.34-35.82-63.45-80 37.12-80 77.55-80 70.33 36 66.45 80Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M319.77 415.77c-28.56 12-47.28 14.5-79.28 14.5-97.2 0-169-78.8-160.49-176s94.31-176 191.51-176C381 78.27 441.19 150 432.73 246c-6.31 71.67-52.11 92.32-76.09 88.07-22.56-4-41.18-24.42-37.74-63.5l8.48-96.25" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-attach-outline"><path d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-attach-sharp"><path d="M216.08 192v143.55a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 0 0 191 0V159.44" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-attach"><path d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-backspace-outline"><path d="M135.19 390.14a28.79 28.79 0 0 0 21.68 9.86h246.26A29 29 0 0 0 432 371.13V140.87A29 29 0 0 0 403.13 112H156.87a28.84 28.84 0 0 0-21.67 9.84L46.33 256l88.86 134.11Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M336.67 192.33 206.66 322.34M336.67 322.34 206.66 192.33M336.67 192.33 206.66 322.34M336.67 322.34 206.66 192.33" /></symbol><symbol  viewBox="0 0 512 512" id="icon-backspace-sharp"><path d="M144 96 32 256l112 160h304V96Zm215.3 226.34L336.67 345l-65-65-65 65L184 322.34l65-65-65-65 22.63-22.63 65 65 65-65 22.63 22.63-65 65Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-backspace"><path d="M403.13 96H156.87a44.9 44.9 0 0 0-33.68 15.27 15.88 15.88 0 0 0-1.91 2.7L32 247.75a16 16 0 0 0 0 16.5l89.15 133.57a16.24 16.24 0 0 0 2 2.88 44.89 44.89 0 0 0 33.7 15.3h246.28A44.92 44.92 0 0 0 448 371.13V140.87A44.92 44.92 0 0 0 403.13 96ZM348 311a16 16 0 1 1-22.63 22.62L271.67 280 218 333.65A16 16 0 0 1 195.35 311L249 257.33l-53.69-53.69A16 16 0 0 1 218 181l53.69 53.7 53.67-53.7A16 16 0 0 1 348 203.64l-53.7 53.69Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag-add-outline"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 256v128M320 320H192M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16ZM160 176v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag-add-sharp"><path d="M460 160h-88v-12A116.13 116.13 0 0 0 258.89 32h-5.78A116.13 116.13 0 0 0 140 148v12H52a4 4 0 0 0-4 4v300a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V164a4 4 0 0 0-4-4Zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 0 1 332 148v12H180Zm156 187h-64v64h-32v-64h-64v-32h64v-64h32v64h64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag-add"><path d="M454.66 169.4A31.86 31.86 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55 69.48 69.48 0 0 0 21.52-50.2V192a31.78 31.78 0 0 0-9.34-22.6ZM320 336h-48v48a16 16 0 0 1-32 0v-48h-48a16 16 0 0 1 0-32h48v-48a16 16 0 0 1 32 0v48h48a16 16 0 0 1 0 32Zm16-176H176v-16a80 80 0 0 1 160 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag-check-outline"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m320 264-89.6 112-38.4-44.88" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16ZM160 176v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag-check-sharp"><path d="M460 160h-88v-12A116.13 116.13 0 0 0 258.89 32h-5.78A116.13 116.13 0 0 0 140 148v12H52a4 4 0 0 0-4 4v300a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V164a4 4 0 0 0-4-4Zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 0 1 332 148v12H180Zm50.81 252.12-61.37-71.72 24.31-20.81L230 350.91l87.51-109.4 25 20Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag-check"><path d="M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55 69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6ZM332.49 274l-89.6 112a16 16 0 0 1-12.23 6h-.26a16 16 0 0 1-12.16-5.6l-38.4-44.88a16 16 0 1 1 24.32-20.8L230 350.91 307.51 254a16 16 0 0 1 25 20ZM336 160H176v-16a80 80 0 0 1 160 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag-handle-outline"><path d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16ZM160 176v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path d="M160 224v16a96 96 0 0 0 96 96h0a96 96 0 0 0 96-96v-16" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag-handle-sharp"><path d="M460 160h-88v-12A116.13 116.13 0 0 0 258.89 32h-5.78A116.13 116.13 0 0 0 140 148v12H52a4 4 0 0 0-4 4v300a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V164a4 4 0 0 0-4-4Zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 0 1 332 148v12H180Zm188 91a112 112 0 0 1-224 0v-32h32v32a80 80 0 0 0 160 0v-32h32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag-handle"><path d="M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55 69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6ZM176 144a80 80 0 0 1 160 0v16H176Zm192 96a112 112 0 0 1-224 0v-16a16 16 0 0 1 32 0v16a80 80 0 0 0 160 0v-16a16 16 0 0 1 32 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag-outline"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16ZM160 176v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag-remove-outline"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M320 320H192M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16ZM160 176v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag-remove-sharp"><path d="M460 160h-88v-12A116.13 116.13 0 0 0 258.89 32h-5.78A116.13 116.13 0 0 0 140 148v12H52a4 4 0 0 0-4 4v300a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V164a4 4 0 0 0-4-4Zm-280-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 0 1 332 148v12H180Zm156 187H176v-32h160Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag-remove"><path d="M454.66 169.4A31.86 31.86 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55 69.48 69.48 0 0 0 21.52-50.2V192a31.78 31.78 0 0 0-9.34-22.6ZM320 336H192a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32Zm16-176H176v-16a80 80 0 0 1 160 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag-sharp"><path d="M372 160v-12A116.13 116.13 0 0 0 258.89 32h-5.78A116.13 116.13 0 0 0 140 148v12H52a4 4 0 0 0-4 4v300a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V164a4 4 0 0 0-4-4Zm-40 0H180v-11c0-41.84 33.41-76.56 75.25-77A76.08 76.08 0 0 1 332 148Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bag"><path d="M454.65 169.4A31.82 31.82 0 0 0 432 160h-64v-16a112 112 0 0 0-224 0v16H80a32 32 0 0 0-32 32v216c0 39 33 72 72 72h272a72.22 72.22 0 0 0 50.48-20.55 69.48 69.48 0 0 0 21.52-50.2V192a31.75 31.75 0 0 0-9.35-22.6ZM176 144a80 80 0 0 1 160 0v16H176Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-balloon-outline"><path d="M414.11 153.82C429.66 264.4 345.85 357.09 282.54 366s-169.48-57.5-185-167.68a159.82 159.82 0 1 1 316.53-44.49Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path d="M236.06 308.05c-32.83-13-67.08-43.1-82.27-85.46M367.7 495.78c-32.83-13-63.31-40.06-78.5-82.41" fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m266.71 368.21-9.17 49.61 63.31-8.9-22.49-45.16-31.65 4.45z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-balloon-sharp"><path d="M391 307.27c32.75-46.35 46.59-101.63 39-155.68C416.47 55.59 327.38-11.54 231.38 2S68.24 104.53 81.73 200.53c7.57 53.89 36.12 103.16 80.37 138.74 26.91 21.64 57.59 36.1 86.05 41.33l-8.36 45.23a8 8 0 0 0 9 9.38L279 431c15.9 35.87 41.65 60.48 78.41 75l14.88 5.88 11.77-29.75-14.88-5.89c-26.35-10.42-44.48-26.16-57-49.92l21.84-3.07a8 8 0 0 0 6.05-11.49l-20.49-41.16c25.98-12.87 51.49-35.18 71.42-63.33Zm-160.82 15.66c-41.26-16.32-76.3-52.7-91.45-94.94l-5.4-15.06 30.12-10.8 5.4 15.06c14.5 40.44 47.27 65.77 73.1 76l14.88 5.88-11.77 29.76Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-balloon"><path d="M391 307.27c32.75-46.35 46.59-101.63 39-155.68A175.82 175.82 0 0 0 231.38 2c-96 13.49-163.14 102.58-149.65 198.58 7.57 53.89 36.12 103.16 80.37 138.74 24.58 19.68 52.31 33.5 78.62 39.68a8 8 0 0 1 6 9.22l-4.87 26.38a16.29 16.29 0 0 0 1.48 10.57 16 16 0 0 0 14.2 8.61 15.21 15.21 0 0 0 2.23-.16l17.81-2.5a2 2 0 0 1 2.09 1.14c16.72 36.31 45.46 63.85 82.15 78.36a16 16 0 0 0 21-9.65c2.83-8.18-1.64-17.07-9.68-20.28a118.57 118.57 0 0 1-59.3-51.88 2 2 0 0 1 1.45-3l7.4-1a16.54 16.54 0 0 0 10.08-5.23 16 16 0 0 0 2.39-17.8l-12.06-24.23a8 8 0 0 1 3.26-10.55c23.59-13.17 46.45-34 64.65-59.73Zm-154.9 16.78a16 16 0 0 1-5.88-1.12c-41.26-16.32-76.3-52.7-91.45-94.94a16 16 0 1 1 30.12-10.8c14.5 40.44 47.27 65.77 73.1 76a16 16 0 0 1-5.89 30.88Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ban-outline"><circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" d="m108.92 108.92 294.16 294.16" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ban-sharp"><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61ZM432 256a175.09 175.09 0 0 1-35.8 106.26L149.74 115.8A175.09 175.09 0 0 1 256 80c97.05 0 176 79 176 176Zm-352 0a175.09 175.09 0 0 1 35.8-106.26L362.26 396.2A175.09 175.09 0 0 1 256 432c-97 0-176-78.95-176-176Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ban"><circle fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="48" cx="256" cy="256" r="200" /><path stroke="#000" stroke-miterlimit="10" stroke-width="48" d="m114.58 114.58 282.84 282.84" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bandage-outline"><rect x="-24.43" y="167.88" width="560.87" height="176.25" rx="88.12" ry="88.12" transform="rotate(-45 256 256.002)" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="169.41" y="156.59" width="176" height="196" rx="32" ry="32" transform="rotate(45 257.409 254.582)" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="256" cy="208" r="16" /><circle cx="304" cy="256" r="16" /><circle cx="208" cy="256" r="16" /><circle cx="256" cy="304" r="16" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bandage-sharp"><path d="M27.71 337.1a40 40 0 0 0 0 56.54l90.65 90.65a40 40 0 0 0 56.54 0l75.1-75.1L102.81 262ZM496 147.1a39.87 39.87 0 0 0-11.75-28.38l-91-91a40.14 40.14 0 0 0-56.75 0L264 100.28 411.72 248l72.53-72.53A39.85 39.85 0 0 0 496 147.1ZM273.06 386.19l116-116L241.77 123l-116 116Zm19.63-141.5a16 16 0 1 1 0 22.62 16 16 0 0 1 0-22.62Zm-48-48a16 16 0 1 1 0 22.62 16 16 0 0 1 0-22.62Zm0 96a16 16 0 1 1 0 22.62 16 16 0 0 1 0-22.62Zm-25.38-48a16 16 0 1 1-22.62 0 16 16 0 0 1 22.62 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bandage"><path d="M275.8 157a16 16 0 0 0-22.63 0l-93.34 93.34a16 16 0 0 0 0 22.63l79.2 79.2a16 16 0 0 0 22.63 0L355 258.83a16 16 0 0 0 0-22.63ZM137.21 295.6a47.81 47.81 0 0 1-9.43-13.38L69 341a72.2 72.2 0 0 0 0 102 72.37 72.37 0 0 0 102 0l58.77-58.76a47.81 47.81 0 0 1-13.38-9.43ZM392 48a71.55 71.55 0 0 0-51 21l-55.92 55.91a48.05 48.05 0 0 1 13.36 9.45l79.19 79.19a48.05 48.05 0 0 1 9.45 13.36L443 171a72 72 0 0 0-51-123Z" style="fill:none" /><path d="M275.8 157a16 16 0 0 0-22.63 0l-93.34 93.34a16 16 0 0 0 0 22.63l79.2 79.2a16 16 0 0 0 22.63 0L355 258.83a16 16 0 0 0 0-22.63Zm-56.49 110.31a16 16 0 1 1 0-22.62 16 16 0 0 1 0 22.62Zm48 48a16 16 0 1 1 0-22.62 16 16 0 0 1 0 22.62Zm0-96a16 16 0 1 1 0-22.62 16 16 0 0 1 0 22.62Zm48 48a16 16 0 1 1 0-22.62 16 16 0 0 1 0 22.62ZM465.61 46.39a104.38 104.38 0 0 0-147.25 0l-69.76 69.89a4 4 0 0 0 4.2 6.58 35.74 35.74 0 0 1 11.69-2.54 47.7 47.7 0 0 1 33.94 14.06l79.19 79.19a47.7 47.7 0 0 1 14.06 33.94 35.68 35.68 0 0 1-2.54 11.69 4 4 0 0 0 6.58 4.2l69.89-69.76a104.38 104.38 0 0 0 0-147.25Z" /><path d="M254.34 386.83a47.91 47.91 0 0 1-33.94-14l-79.19-79.23a47.81 47.81 0 0 1-9.43-13.38c-4.59-9.7-1.39-25 2.48-36.9a4 4 0 0 0-6.64-4l-77.23 77.04a104.12 104.12 0 0 0 147.25 147.25l72.75-72.88a4 4 0 0 0-4.21-6.58c-4.18 1.58-8.4 2.68-11.84 2.68Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bar-chart-outline"><path d="M32 32v432a16 16 0 0 0 16 16h432" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="96" y="224" width="80" height="192" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="240" y="176" width="80" height="240" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="383.64" y="112" width="80" height="304" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bar-chart-sharp"><path d="M496 496H16V16h32v448h448v32z" /><path d="M192 432H80V208h112ZM336 432H224V160h112ZM479.64 432h-112V96h112Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bar-chart"><path d="M480 496H48a32 32 0 0 1-32-32V32a16 16 0 0 1 32 0v432h432a16 16 0 0 1 0 32Z" /><path d="M156 432h-40a36 36 0 0 1-36-36V244a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v152a36 36 0 0 1-36 36ZM300 432h-40a36 36 0 0 1-36-36V196a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v200a36 36 0 0 1-36 36ZM443.64 432h-40a36 36 0 0 1-36-36V132a36 36 0 0 1 36-36h40a36 36 0 0 1 36 36v264a36 36 0 0 1-36 36Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-barbell-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M48 256h416" /><rect x="384" y="128" width="32" height="256" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="96" y="128" width="32" height="256" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="32" y="192" width="16" height="128" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="464" y="192" width="16" height="128" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-barbell-sharp"><path d="M496 176h-58v-64h-76v122H150V112H74v64H16v160h58v64h76V278h212v122h76v-64h58V176z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-barbell"><path d="M467 176a29.94 29.94 0 0 0-25.32 12.5 2 2 0 0 1-3.64-1.14v-36.65c0-20.75-16.34-38.21-37.08-38.7A38 38 0 0 0 362 150v82a2 2 0 0 1-2 2H152a2 2 0 0 1-2-2v-81.29c0-20.75-16.34-38.21-37.08-38.7A38 38 0 0 0 74 150v37.38a2 2 0 0 1-3.64 1.14A29.94 29.94 0 0 0 45 176c-16.3.51-29 14.31-29 30.62v98.72c0 16.31 12.74 30.11 29 30.62a29.94 29.94 0 0 0 25.32-12.5 2 2 0 0 1 3.68 1.16v36.67C74 382 90.34 399.5 111.08 400A38 38 0 0 0 150 362v-82a2 2 0 0 1 2-2h208a2 2 0 0 1 2 2v81.29c0 20.75 16.34 38.21 37.08 38.7A38 38 0 0 0 438 362v-37.38a2 2 0 0 1 3.64-1.14A29.94 29.94 0 0 0 467 336c16.3-.51 29-14.31 29-30.62v-98.74c0-16.31-12.74-30.11-29-30.64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-barcode-outline"><path d="m384 400.33 35.13-.33A29 29 0 0 0 448 371.13V140.87A29 29 0 0 0 419.13 112l-35.13.33M128 112l-36.8.33c-15.88 0-27.2 13-27.2 28.87v230.27c0 15.87 11.32 28.86 27.2 28.86L128 400M384 192v128M320 160v192M256 176v160M192 160v192M128 192v128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-barcode-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" d="m400 400.33 48-.33V112l-48 .33M112 112l-48 .33v288l48-.33M384 192v128M320 160v192M256 176v160M192 160v192M128 192v128" /></symbol><symbol  viewBox="0 0 512 512" id="icon-barcode"><path d="M419.13 96H419l-35.05.33L128 96h-.16l-36.74.33C66.93 96.38 48 116.07 48 141.2v230.27c0 25.15 19 44.86 43.2 44.86h.15l36.71-.33 255.92.33h.17l35.07-.33A44.91 44.91 0 0 0 464 371.13V140.87A44.92 44.92 0 0 0 419.13 96ZM144 320a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0Zm64 32a16 16 0 0 1-32 0V160a16 16 0 0 1 32 0Zm64-16a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0Zm64 16a16 16 0 0 1-32 0V160a16 16 0 0 1 32 0Zm64-32a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-baseball-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m294.25 108.6-60.57 17.59M317.13 156.11l-51.5 36.4M355.89 194.87l-36.4 51.5M403.4 217.75l-17.59 60.57" /><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M432.94 255.05a192 192 0 0 1-176.31-180.7M108.54 294.31l17.59-60.57M156.05 317.19l36.4-51.5M194.81 355.95l51.5-36.4M217.69 403.46l60.57-17.59M255 433.61A192 192 0 0 0 74.29 256.69" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-baseball-sharp"><path d="M302.16 56.2a13.88 13.88 0 0 1-3.42 8.91l-.11 5.13-27.71-.57c0 1.3.09 2.61.16 3.91a177.33 177.33 0 0 0 3.45 26.31l24.72-7.18 7.81 26.88-24.71 7.18a177.21 177.21 0 0 0 13.34 27.69l21.27-15 16.16 22.86-21.29 15.05q5.25 6.33 11.11 12.19c3.91 3.91 8 7.6 12.2 11.1l15.71-22.22 22.86 16.16L358 216.75a178.78 178.78 0 0 0 27.68 13.32l7.49-25.8 26.89 7.81-7.5 25.83a177.8 177.8 0 0 0 31 3.67l-.41-24.67 17.41-.29A208 208 0 0 0 301.82 52.93a13.65 13.65 0 0 1 .34 3.27ZM214 441.64l27.91.49a177.46 177.46 0 0 0-3.62-29.95l-24.14 7-7.81-26.88 24.11-7a177.92 177.92 0 0 0-13.33-27.68L196.79 372l-16.16-22.86L201 334.73c-3.49-4.22-7.19-8.3-11.09-12.2s-8-7.62-12.19-11.12l-13.91 19.68L141 314.93l13.9-19.66a177.26 177.26 0 0 0-27.7-13.33l-6.37 21.94-26.89-7.81 6.38-22a177.32 177.32 0 0 0-26.32-3.4c-1.59-.09-3.18-.16-4.78-.2l.4 22.34-17.71.32a207.88 207.88 0 0 0 161.81 166.48Z" /><path d="m444.65 302.67-.55-33.06a206 206 0 0 1-39.33-4.74L397 291.8l-26.94-7.8 7.83-27a206.91 206.91 0 0 1-36.06-17.35l-16.36 23.15-22.86-16.16 16.33-23.11a204.21 204.21 0 0 1-30-30l-22.19 15.67-16.16-22.87 22.17-15.67a206 206 0 0 1-17.38-36.06l-25.75 7.48-7.81-26.89 25.73-7.47q-2-9.21-3.18-18.64h-.47l-.78-14-.33-6-17.94-.32a13.38 13.38 0 0 1-1.79-.16l-6.35-.13.06-2.47a14 14 0 0 1-5.66-11.49 13.27 13.27 0 0 1 .13-1.67A208 208 0 0 0 52.16 217.43l16.1-.28.45 25.18 6.83.38 14 .77v.48q9.42 1.17 18.64 3.18l6.68-23L141.7 232l-6.7 23a205.3 205.3 0 0 1 36.06 17.38l14.53-20.56L208.47 268 194 288.5a203.5 203.5 0 0 1 30 30l21.3-15 16.16 22.86-21.36 15.05a206.86 206.86 0 0 1 17.34 36.06l25.27-7.33 7.81 26.86-25.24 7.33a205.9 205.9 0 0 1 4.72 38.3l29.42.53-.29 16.48a207.94 207.94 0 0 0 160-157.21Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-baseball"><path d="m444 295.67-.47-26.07a205.42 205.42 0 0 1-39.27-4.73l-5 17.35a14 14 0 1 1-26.88-7.81l5-17.38a206.47 206.47 0 0 1-36.05-17.35l-10.44 14.77a14 14 0 0 1-22.87-16.16l10.41-14.73a204.8 204.8 0 0 1-30-30L273.71 204a14 14 0 0 1-16.16-22.87l14.74-10.42a205.3 205.3 0 0 1-17.38-36.06l-17.32 5a14 14 0 1 1-7.81-26.89l17.3-5a205.88 205.88 0 0 1-4.43-32.59q-.17-3-.24-6l-18.22-.33a14 14 0 0 1-13.74-14A208 208 0 0 0 55 202.42a16 16 0 0 1 15 15.66l.44 24.43c1.58.05 3.16.11 4.73.2a205.88 205.88 0 0 1 32.59 4.43l5-17.3a14 14 0 0 1 26.89 7.81l-5 17.32a205.21 205.21 0 0 1 36 17.38L181 257.61a14 14 0 0 1 22.87 16.16l-10.39 14.73a205.65 205.65 0 0 1 15.79 14.23 203.79 203.79 0 0 1 14.23 15.79l14.73-10.41A14 14 0 0 1 254.39 331l-14.76 10.43A206.86 206.86 0 0 1 257 377.47l17.38-5.05a14 14 0 0 1 7.81 26.89l-17.35 5a205.89 205.89 0 0 1 4.7 38.28l18.27.33a16 16 0 0 1 15.71 16.28 11.69 11.69 0 0 1-.08 1.19 208 208 0 0 0 153.39-151.03A14 14 0 0 1 444 295.67Z" /><path d="M301.49 56.2A14 14 0 0 1 287.5 70h-.25l-16.81-.3c.05 1.31.1 2.62.17 3.93a178.83 178.83 0 0 0 3.44 26.31l16.29-4.74a14 14 0 0 1 7.81 26.8l-16.27 4.73a178.06 178.06 0 0 0 13.33 27.69l13.84-9.78a14 14 0 1 1 16.16 22.87l-13.86 9.79q5.25 6.33 11.12 12.19c3.9 3.91 8 7.6 12.2 11.1l9.78-13.84A14 14 0 1 1 367.32 203l-9.76 13.8a178.83 178.83 0 0 0 27.68 13.33l4.76-16.28a14 14 0 0 1 26.89 7.81l-4.73 16.26a177.72 177.72 0 0 0 30.95 3.65l-.16-9a14 14 0 0 1 13.75-14.24h.25a14.67 14.67 0 0 1 2.59.25 208 208 0 0 0-158-163.51c-.06.4-.04.76-.05 1.13ZM208.44 457.55a16 16 0 0 1 16.28-15.71l16.76.29a178.49 178.49 0 0 0-3.62-29.95l-16.26 4.72a14 14 0 1 1-7.81-26.9l16.21-4.7a177.92 177.92 0 0 0-13.33-27.68l-13.8 9.76a14 14 0 1 1-16.16-22.87l13.84-9.78c-3.5-4.22-7.19-8.3-11.1-12.2s-8-7.62-12.19-11.12l-9.79 13.86a14 14 0 1 1-22.87-16.16l9.78-13.84a177.16 177.16 0 0 0-27.69-13.33L122 298.21a14 14 0 1 1-26.9-7.81l4.73-16.29a177.32 177.32 0 0 0-26.31-3.44c-.89-.05-1.79-.08-2.68-.12l.16 10.59a16 16 0 0 1-15.71 16.28H55a16 16 0 0 1-3.94-.51 208 208 0 0 0 157.65 163.87 15.72 15.72 0 0 1-.27-3.23Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-basket-outline"><path d="M68.4 192A20.38 20.38 0 0 0 48 212.2a17.87 17.87 0 0 0 .8 5.5L100.5 400a40.46 40.46 0 0 0 39.1 29.5h232.8a40.88 40.88 0 0 0 39.3-29.5l51.7-182.3.6-5.5a20.38 20.38 0 0 0-20.4-20.2H68.4Zm193.32 160.07A42.07 42.07 0 1 1 304 310a42.27 42.27 0 0 1-42.28 42.07Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" d="m160 192 96-128 96 128" /></symbol><symbol  viewBox="0 0 512 512" id="icon-basket-sharp"><path d="M339.2 217.6 256 106.67 172.8 217.6l-25.6-19.2 96-128a16 16 0 0 1 25.6 0l96 128Z" /><path d="M441.59 192H70.41a12 12 0 0 0-11.68 14.77L112.59 434h286.82l53.86-227.23A12 12 0 0 0 441.59 192ZM256 351.66A37.71 37.71 0 1 1 293.89 314 37.88 37.88 0 0 1 256 351.66Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-basket"><path d="M424.11 192H360L268.8 70.4a16 16 0 0 0-25.6 0L152 192H87.89a32.57 32.57 0 0 0-32.62 32.44 30.3 30.3 0 0 0 1.31 9l46.27 163.14a50.72 50.72 0 0 0 48.84 36.91h208.62a51.21 51.21 0 0 0 49-36.86l46.33-163.36a15.62 15.62 0 0 0 .46-2.36l.53-4.93a13.3 13.3 0 0 0 .09-1.55A32.57 32.57 0 0 0 424.11 192ZM256 106.67 320 192H192Zm0 245a37.7 37.7 0 1 1 37.88-37.7A37.87 37.87 0 0 1 256 351.63Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-basketball-outline"><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M432.94 255.05a192 192 0 0 1-176.31-180.7M255 433.61A192 192 0 0 0 74.29 256.69M120.24 120.24l271.52 271.52M120.24 391.76l271.52-271.52" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-basketball-sharp"><path d="m256 233.37 34.45-34.45a207.08 207.08 0 0 1-50.12-135.25c0-5 .19-10.05.54-15A207.09 207.09 0 0 0 120.67 98ZM313.14 176.23 391.33 98A207.07 207.07 0 0 0 273 48.8c-.41 4.9-.64 9.86-.64 14.87a175.25 175.25 0 0 0 40.78 112.56ZM335.77 198.86a175.25 175.25 0 0 0 112.56 40.81c5 0 10-.23 14.87-.64A207.07 207.07 0 0 0 414 120.67ZM176.23 313.14a175.23 175.23 0 0 0-112.56-40.81q-7.52 0-14.87.64A207.07 207.07 0 0 0 98 391.33ZM256 278.63l-34.45 34.45a207.08 207.08 0 0 1 50.12 135.25c0 5-.19 10.05-.54 15A207.06 207.06 0 0 0 391.33 414ZM448.33 271.67a207.08 207.08 0 0 1-135.25-50.12L278.63 256 414 391.33a207.09 207.09 0 0 0 49.39-120.2c-5.01.35-10.02.54-15.06.54ZM233.37 256 98 120.67a207.06 207.06 0 0 0-49.39 120.2c5-.35 10-.54 15-.54a207.08 207.08 0 0 1 135.25 50.12ZM120.67 414A207.07 207.07 0 0 0 239 463.2q.63-7.35.64-14.87a175.23 175.23 0 0 0-40.81-112.56Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-basketball"><path d="m256 233.37 34.45-34.45a207.08 207.08 0 0 1-50.12-135.25c0-5 .19-10.05.54-15A207.09 207.09 0 0 0 120.67 98ZM313.14 176.23 391.33 98A207.07 207.07 0 0 0 273 48.8c-.41 4.9-.64 9.86-.64 14.87a175.25 175.25 0 0 0 40.78 112.56ZM335.77 198.86a175.25 175.25 0 0 0 112.56 40.81c5 0 10-.23 14.87-.64A207.07 207.07 0 0 0 414 120.67ZM176.23 313.14a175.23 175.23 0 0 0-112.56-40.81q-7.52 0-14.87.64A207.07 207.07 0 0 0 98 391.33ZM256 278.63l-34.45 34.45a207.08 207.08 0 0 1 50.12 135.25c0 5-.19 10.05-.54 15A207.06 207.06 0 0 0 391.33 414ZM448.33 271.67a207.08 207.08 0 0 1-135.25-50.12L278.63 256 414 391.33a207.09 207.09 0 0 0 49.39-120.2c-5.01.35-10.02.54-15.06.54ZM233.37 256 98 120.67a207.06 207.06 0 0 0-49.39 120.2c5-.35 10-.54 15-.54a207.08 207.08 0 0 1 135.25 50.12ZM120.67 414A207.07 207.07 0 0 0 239 463.2q.63-7.35.64-14.87a175.23 175.23 0 0 0-40.81-112.56Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-battery-charging-outline"><path d="M48 322.3V189.7A29.74 29.74 0 0 1 77.7 160h137.44l24.4-32H77.7A61.77 61.77 0 0 0 16 189.7v132.6A61.77 61.77 0 0 0 77.7 384h96.85a22.57 22.57 0 0 1 .26-7.32l.15-.75.21-.73 6.5-23.2H77.7A29.74 29.74 0 0 1 48 322.3ZM386.3 128h-98.64a22.69 22.69 0 0 1-.27 7.2l-.15.74-.21.73-6.54 23.33H386.3a29.74 29.74 0 0 1 29.7 29.7v132.6a29.74 29.74 0 0 1-29.7 29.7H247l-24.42 32H386.3a61.77 61.77 0 0 0 61.7-61.7V189.7a61.77 61.77 0 0 0-61.7-61.7Z" /><path d="M162.65 294.16a24.37 24.37 0 0 1-21.56-13 25 25 0 0 1 1.42-25.83l.31-.46.33-.44L197.62 183H89.69a20 20 0 0 0-20 20v106a20 20 0 0 0 20 20h98.42l9.78-34.86Z" /><path d="m276.07 280.89 27.07-35.49a5.2 5.2 0 0 0 .77-1.91 5 5 0 0 0 .08-.66 5 5 0 0 0-.08-1.29 5.11 5.11 0 0 0-.68-1.75 4.76 4.76 0 0 0-.78-.95 3.48 3.48 0 0 0-.48-.38 4 4 0 0 0-1.11-.55 4.28 4.28 0 0 0-1.31-.2h-61.62l12.12-43.21 3.23-11.5 6.21-22.16.51-1.84 7.79-27.76a3.51 3.51 0 0 0 .05-.55v-.16c0-.05 0-.26-.05-.38s0-.09 0-.14a2.2 2.2 0 0 0-.17-.45 3.77 3.77 0 0 0-.26-.39l-.09-.1a2.73 2.73 0 0 0-.25-.23l-.1-.08a3.14 3.14 0 0 0-.39-.24 2 2 0 0 0-.41-.14H265.53a2.3 2.3 0 0 0-.45 0 1.9 1.9 0 0 0-.42.15l-.13.07-.3.21-.11.1a2.4 2.4 0 0 0-.36.41l-18 23.63-13.14 17.22-9.85 12.83-63.71 83.55a5.72 5.72 0 0 0-.44.8 4.78 4.78 0 0 0-.35 1.09 4.7 4.7 0 0 0-.08 1.29 4.86 4.86 0 0 0 2 3.71 4.74 4.74 0 0 0 .54.31 4.31 4.31 0 0 0 1.89.43h61.62L194.42 380.6a3.64 3.64 0 0 0 0 .56v.15a2.32 2.32 0 0 0 .06.38.58.58 0 0 0 0 .14 2.2 2.2 0 0 0 .17.45 3.62 3.62 0 0 0 .26.38l.09.1.25.24a.39.39 0 0 1 .1.08 2.22 2.22 0 0 0 .39.23 2.83 2.83 0 0 0 .41.14h.13a1.86 1.86 0 0 0 .33 0h.13a2.32 2.32 0 0 0 .45-.06 2.05 2.05 0 0 0 .41-.16l.13-.07.3-.21.11-.09a2.4 2.4 0 0 0 .36-.41L221.82 352l17.53-23Z" /><path d="m319.5 256.93-.46.6L264.51 329h109.8a20 20 0 0 0 20-20V203a20 20 0 0 0-20-20H274.05l-9.74 34.73h35.24A24.35 24.35 0 0 1 321 230.5a25.21 25.21 0 0 1-1 25.79ZM480 202.67a16 16 0 0 0-16 16v74.66a16 16 0 0 0 32 0v-74.66a16 16 0 0 0-16-16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-battery-charging-sharp"><path d="M306.68 237.62h-66.5l15.33-54.7 6.43-22.92 3.94-14 4.29-15.33a3.56 3.56 0 0 0 .06-.44v-.19a1.85 1.85 0 0 0 0-.23 2 2 0 0 0 0-.24v-.14c0-.1-.07-.19-.11-.29v-.05a2.33 2.33 0 0 0-2-1.35h-.1a2.25 2.25 0 0 0-1.8 1l-12.5 17.15-18.82 25.55-8.36 11.48-35.41 48.6L160 274.26h66.44l-30 107a3.93 3.93 0 0 0-.06.48s0 .06 0 .1a1.94 1.94 0 0 0 0 .34.29.29 0 0 0 0 .09 3 3 0 0 0 .07.32v.06a1.83 1.83 0 0 0 .14.32 2.38 2.38 0 0 0 1.52 1.16H198.68a2.1 2.1 0 0 0 1.31-.5l.06-.05a2.6 2.6 0 0 0 .42-.45L223.3 352l13-17.82Z" /><path d="m289.78 134.55-.14.74-.21.73-6.72 24H417V352H248.05l-23.33 32H449V128H290.13a22.62 22.62 0 0 1-.35 6.55ZM49 160h169.49l23.31-32H17v256h159.49a22.73 22.73 0 0 1 .34-6.67l.15-.75.2-.73 6.69-23.85H49Z" /><path d="M264.76 329.08h130.55V182.92H276.28l-9.73 34.7H346l-23.16 31.78-58.08 79.68zM160 294.26h-39.31l23.15-31.78 57.95-79.56H70.69v146.16h119.6l9.77-34.82H160zM465 202.67h32v106.67h-32z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-battery-charging"><path d="M48 322.3V189.7A29.74 29.74 0 0 1 77.7 160h137.44l24.4-32H77.7A61.77 61.77 0 0 0 16 189.7v132.6A61.77 61.77 0 0 0 77.7 384h96.85a22.57 22.57 0 0 1 .26-7.32l.15-.75.21-.73 6.5-23.2H77.7A29.74 29.74 0 0 1 48 322.3ZM386.3 128h-98.64a22.69 22.69 0 0 1-.27 7.2l-.15.74-.21.73-6.54 23.33H386.3a29.74 29.74 0 0 1 29.7 29.7v132.6a29.74 29.74 0 0 1-29.7 29.7H247l-24.42 32H386.3a61.77 61.77 0 0 0 61.7-61.7V189.7a61.77 61.77 0 0 0-61.7-61.7Z" /><path d="M162.65 294.16a24.37 24.37 0 0 1-21.56-13 25 25 0 0 1 1.42-25.83l.31-.46.33-.44L197.62 183H89.69a20 20 0 0 0-20 20v106a20 20 0 0 0 20 20h98.42l9.78-34.86Z" /><path d="m276.07 280.89 27.07-35.49a5.2 5.2 0 0 0 .77-1.91 5 5 0 0 0 .08-.66 5 5 0 0 0-.08-1.29 5.11 5.11 0 0 0-.68-1.75 4.76 4.76 0 0 0-.78-.95 3.48 3.48 0 0 0-.48-.38 4 4 0 0 0-1.11-.55 4.28 4.28 0 0 0-1.31-.2h-61.62l12.12-43.21 3.23-11.5 6.21-22.16.51-1.84 7.79-27.76a3.51 3.51 0 0 0 .05-.55v-.16c0-.05 0-.26-.05-.38s0-.09 0-.14a2.2 2.2 0 0 0-.17-.45 3.77 3.77 0 0 0-.26-.39l-.09-.1a2.73 2.73 0 0 0-.25-.23l-.1-.08a3.14 3.14 0 0 0-.39-.24 2 2 0 0 0-.41-.14H265.53a2.3 2.3 0 0 0-.45 0 1.9 1.9 0 0 0-.42.15l-.13.07-.3.21-.11.1a2.4 2.4 0 0 0-.36.41l-18 23.63-13.14 17.22-9.85 12.83-63.71 83.55a5.72 5.72 0 0 0-.44.8 4.78 4.78 0 0 0-.35 1.09 4.7 4.7 0 0 0-.08 1.29 4.86 4.86 0 0 0 2 3.71 4.74 4.74 0 0 0 .54.31 4.31 4.31 0 0 0 1.89.43h61.62L194.42 380.6a3.64 3.64 0 0 0 0 .56v.15a2.32 2.32 0 0 0 .06.38.58.58 0 0 0 0 .14 2.2 2.2 0 0 0 .17.45 3.62 3.62 0 0 0 .26.38l.09.1.25.24a.39.39 0 0 1 .1.08 2.22 2.22 0 0 0 .39.23 2.83 2.83 0 0 0 .41.14h.13a1.86 1.86 0 0 0 .33 0h.13a2.32 2.32 0 0 0 .45-.06 2.05 2.05 0 0 0 .41-.16l.13-.07.3-.21.11-.09a2.4 2.4 0 0 0 .36-.41L221.82 352l17.53-23Z" /><path d="m319.5 256.93-.46.6L264.51 329h109.8a20 20 0 0 0 20-20V203a20 20 0 0 0-20-20H274.05l-9.74 34.73h35.24A24.35 24.35 0 0 1 321 230.5a25.21 25.21 0 0 1-1 25.79ZM480 202.67a16 16 0 0 0-16 16v74.66a16 16 0 0 0 32 0v-74.66a16 16 0 0 0-16-16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-battery-dead-outline"><rect x="31" y="144" width="400" height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M479 218.67v74.66" /></symbol><symbol  viewBox="0 0 512 512" id="icon-battery-dead-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M32 144h400v224H32zM480 218.67v74.66" /></symbol><symbol  viewBox="0 0 512 512" id="icon-battery-dead"><rect x="31" y="144" width="400" height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M479 218.67v74.66" /></symbol><symbol  viewBox="0 0 512 512" id="icon-battery-full-outline"><rect x="32" y="144" width="400" height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><rect x="85.69" y="198.93" width="292.63" height="114.14" rx="4" ry="4" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M480 218.67v74.66" /></symbol><symbol  viewBox="0 0 512 512" id="icon-battery-full-sharp"><path d="M17 384h432V128H17Zm32-224h368v192H49Z" /><path d="M70.69 182.94h324.63v146.13H70.69zM465 202.67h32v106.67h-32z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-battery-full"><rect x="32" y="144" width="400" height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><rect x="85.69" y="198.93" width="292.63" height="114.14" rx="4" ry="4" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M480 218.67v74.66" /></symbol><symbol  viewBox="0 0 512 512" id="icon-battery-half-outline"><rect x="32" y="144" width="400" height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><rect x="85.69" y="198.93" width="154.31" height="114.13" rx="4" ry="4" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M480 218.67v74.66" /></symbol><symbol  viewBox="0 0 512 512" id="icon-battery-half-sharp"><path d="M17 384h432V128H17Zm32-224h368v192H49Z" /><path d="M70.69 182.92H256v146.16H70.69zM465 202.67h32v106.67h-32z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-battery-half"><rect x="32" y="144" width="400" height="224" rx="45.7" ry="45.7" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><rect x="85.69" y="198.93" width="154.31" height="114.13" rx="4" ry="4" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M480 218.67v74.66" /></symbol><symbol  viewBox="0 0 512 512" id="icon-beaker-outline"><path d="M445.2 48.05 398 48H128c-54.3 0-64 35.7-64 48 30.3 4.2 48 8 48 40v264a64 64 0 0 0 64 64h192a64 64 0 0 0 64-64V96c0-19 11.5-38.35 12.6-40 1.2-1.9 3.4-4.4 3.4-5.5s-.3-2.45-2.8-2.45ZM112 176h320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-beaker-sharp"><path d="M453.55 54.7 464 32H128.4c-27.74 0-49 6.57-63.31 19.51C54.39 61.27 48 74.89 48 88v24h16c31 0 32 16.79 32 35v313a20 20 0 0 0 20 20h312a20 20 0 0 0 20-20V96c0-17.16 2.28-34.14 5.55-41.3ZM416 96v64H128v-22c0-36.15-21-51-41.77-53.46C89 70 105.7 64.05 128.4 64.05h289.92A221.83 221.83 0 0 0 416 96Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-beaker"><path d="M444 32H128c-19.38 0-45.9 4.34-64.11 24.77C52.17 69.92 48 85.66 48 96a16 16 0 0 0 13.8 15.85C91.7 116 96 117.79 96 136v264a80.07 80.07 0 0 0 80 80h192a80.11 80.11 0 0 0 80-80V96c0-12.55 7.46-27.25 10-31.36l.1-.14c.22-.35.5-.72.78-1.1 2-2.79 5.09-7 5.09-12.95C464 39.79 454.89 32 444 32ZM84.11 83.08c5.24-8.87 17.17-19 44.29-19h294.43C419.3 72.87 416 84.27 416 96v64H128v-24c0-37.32-21.35-48.14-43.89-52.92Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bed-outline"><path d="M384 240H96V136a40.12 40.12 0 0 1 40-40h240a40.12 40.12 0 0 1 40 40v104ZM48 416V304a64.19 64.19 0 0 1 64-64h288a64.19 64.19 0 0 1 64 64v112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M48 416v-8a24.07 24.07 0 0 1 24-24h368a24.07 24.07 0 0 1 24 24v8M112 240v-16a32.09 32.09 0 0 1 32-32h80a32.09 32.09 0 0 1 32 32v16M256 240v-16a32.09 32.09 0 0 1 32-32h80a32.09 32.09 0 0 1 32 32v16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bed-sharp"><path d="M432 224V96a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v128a48 48 0 0 0-48 48v160h36v-32h376v32h36V272a48 48 0 0 0-48-48Zm-192 0H120v-32a16 16 0 0 1 16-16h88a16 16 0 0 1 16 16Zm32-32a16 16 0 0 1 16-16h88a16 16 0 0 1 16 16v32H272Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bed"><path d="M432 230.7a79.44 79.44 0 0 0-32-6.7H112a79.51 79.51 0 0 0-32 6.69A80.09 80.09 0 0 0 32 304v112a16 16 0 0 0 32 0v-8a8.1 8.1 0 0 1 8-8h368a8.1 8.1 0 0 1 8 8v8a16 16 0 0 0 32 0V304a80.09 80.09 0 0 0-48-73.3ZM376 80H136a56 56 0 0 0-56 56v72a4 4 0 0 0 5.11 3.84A95.5 95.5 0 0 1 112 208h4.23a4 4 0 0 0 4-3.55A32 32 0 0 1 152 176h56a32 32 0 0 1 31.8 28.45 4 4 0 0 0 4 3.55h24.46a4 4 0 0 0 4-3.55A32 32 0 0 1 304 176h56a32 32 0 0 1 31.8 28.45 4 4 0 0 0 4 3.55h4.2a95.51 95.51 0 0 1 26.89 3.85A4 4 0 0 0 432 208v-72a56 56 0 0 0-56-56Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-beer-outline"><path d="M352 200v240a40.12 40.12 0 0 1-40 40H136a40.12 40.12 0 0 1-40-40V224" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M352 224h40a56.16 56.16 0 0 1 56 56v80a56.16 56.16 0 0 1-56 56h-40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M224 256v160M288 256v160M160 256v160M320 112a48 48 0 0 1 0 96c-13.25 0-29.31-7.31-38-16H160c-8 22-27 32-48 32a48 48 0 0 1 0-96 47.91 47.91 0 0 1 26 9" /><path d="M91.86 132.43a40 40 0 1 1 60.46-52S160 91 160 96M145.83 64.71C163.22 44.89 187.57 32 216 32c52.38 0 94 42.84 94 95.21a95 95 0 0 1-1.67 17.79" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-beer-sharp"><path d="M448 208h-80v-5.74A63.93 63.93 0 0 0 321.65 96a111 111 0 0 0-27.59-47.29A108.62 108.62 0 0 0 216 16c-29.91 0-57.78 12.28-79 34.67a56 56 0 0 0-67.51 77.51c-1 .86-1.91 1.74-2.83 2.66A63.56 63.56 0 0 0 48 176.26a62.65 62.65 0 0 0 20.77 46.54A65 65 0 0 0 80 231v249a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-48h80a16 16 0 0 0 16-16V224a16 16 0 0 0-16-16ZM176 432h-32V240h32Zm64 0h-32V240h32Zm64 0h-32V240h32Zm16-240c-8.33 0-20.55-5.18-26.69-11.31l-4.68-4.69H148.79L145 186.53c-5.81 16-18.83 20.41-28.73 21.29a34.08 34.08 0 0 1-25.91-8.67 31 31 0 0 1-10.32-23 31.8 31.8 0 0 1 9.33-22.71c.16-.17.33-.32.5-.49A31.78 31.78 0 0 1 112 144c.09 0 9.12.34 16.4 5.8l12.8 9.6 19.2-25.6-12.8-9.6A63.69 63.69 0 0 0 112 112a64.79 64.79 0 0 0-14 1.55 24 24 0 0 1 41.4-23.68l.23.35.4.46a35.78 35.78 0 0 1 5 8.94l5.62 15 30-11.24-5.62-15a68.2 68.2 0 0 0-10-17.74c-.38-.52-.79-1-1.19-1.51C178.38 55.45 196.64 48 216 48a76.86 76.86 0 0 1 55.23 23.18A80.2 80.2 0 0 1 292.61 142l-3 15.72 31.43 6 3-15.72a111.78 111.78 0 0 0 1.96-19.43 32 32 0 0 1-6 63.43Zm112 208h-64V240h64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-beer"><path d="M392 208h-24v-5.74A63.93 63.93 0 0 0 321.65 96a111 111 0 0 0-27.59-47.29A108.62 108.62 0 0 0 216 16c-29.91 0-57.78 12.28-79 34.68a56 56 0 0 0-67.51 77.54A63.91 63.91 0 0 0 80 231.39V440a56.06 56.06 0 0 0 56 56h176a56.06 56.06 0 0 0 56-56v-8h24a72.08 72.08 0 0 0 72-72v-80a72.08 72.08 0 0 0-72-72ZM176 416a16 16 0 0 1-32 0V256a16 16 0 0 1 32 0Zm64 0a16 16 0 0 1-32 0V256a16 16 0 0 1 32 0Zm64 0a16 16 0 0 1-32 0V256a16 16 0 0 1 32 0Zm16-224c-8.33 0-20.55-5.18-26.69-11.31A16 16 0 0 0 282 176H160a16 16 0 0 0-15 10.53c-6.83 18.68-23.6 21.47-33 21.47a32 32 0 0 1 0-64c.09 0 9.12.34 16.4 5.8a16 16 0 1 0 19.2-25.6A63.69 63.69 0 0 0 112 112a63.55 63.55 0 0 0-14 1.57A24 24 0 0 1 120 80a23.78 23.78 0 0 1 19.38 9.84 51.35 51.35 0 0 1 4.71 7.9A16 16 0 0 0 176 96c0-6.77-3.61-15.17-10.76-25-.46-.63-1-1.25-1.45-1.86C178.39 55.44 196.64 48 216 48a76.86 76.86 0 0 1 55.23 23.18A80.2 80.2 0 0 1 292.61 142a16 16 0 0 0 12.73 18.71 16.29 16.29 0 0 0 3 .28 16 16 0 0 0 15.7-13 111.78 111.78 0 0 0 1.96-19.42 32 32 0 0 1-6 63.43Zm112 168a40 40 0 0 1-40 40h-24V240h24a40 40 0 0 1 40 40Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bicycle-outline"><path d="M388 288a76 76 0 1 0 76 76 76.24 76.24 0 0 0-76-76ZM124 288a76 76 0 1 0 76 76 76.24 76.24 0 0 0-76-76Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M256 360v-86l-64-42 80-88 40 72h56" /><path d="M320 136a31.89 31.89 0 0 0 32-32.1A31.55 31.55 0 0 0 320.2 72a32 32 0 1 0-.2 64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bicycle-sharp"><path d="m320 192-29.5-60.1C284.32 118 284.32 118 264 118c-13.26 0-14.76 0-23 7.3l-71.7 69.1c-8.3 8.45-9.3 9.45-9.3 26.6 0 12.67 3.78 14.61 18.51 22.9L240 278v90h32V254s-29-17-48.3-30l48.9-51.5c18.7 28.5 27.3 51.5 38 51.5H384v-32Z" /><path d="M388 448a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm0-152a60 60 0 1 0 60 60 60.07 60.07 0 0 0-60-60ZM124 448a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm0-152a60 60 0 1 0 60 60 60.07 60.07 0 0 0-60-60ZM320 128a31.89 31.89 0 0 0 32-32.1A31.55 31.55 0 0 0 320.2 64a32 32 0 1 0-.2 64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bicycle"><path d="M388 448a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm0-152a60 60 0 1 0 60 60 60.07 60.07 0 0 0-60-60ZM124 448a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92Zm0-152a60 60 0 1 0 60 60 60.07 60.07 0 0 0-60-60ZM320 128a31.89 31.89 0 0 0 32-32.1A31.55 31.55 0 0 0 320.2 64a32 32 0 1 0-.2 64Z" /><path d="M367.55 192h-43.76a4 4 0 0 1-3.51-2.08l-31.74-58.17a31 31 0 0 0-49.38-7.75l-69.86 70.4a32.56 32.56 0 0 0-9.3 22.4c0 17.4 12.6 23.6 18.5 27.1 28.5 16.42 48.57 28.43 59.58 35.1a4 4 0 0 1 1.92 3.41v69.12c0 8.61 6.62 16 15.23 16.43A16 16 0 0 0 272 352v-86a16 16 0 0 0-6.66-13l-37-26.61a4 4 0 0 1-.58-6l42-44.79a4 4 0 0 1 6.42.79L298 215.77a16 16 0 0 0 14 8.23h56a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23Z" /></symbol><symbol fill="none"  viewBox="0 0 512 512" id="icon-binoculars-outline"><circle cx="392" cy="344" r="88" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" /><circle cx="120" cy="344" r="88" stroke="#000" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" /><path d="M208 344V128c0-26.5-16-48-44-48-35 0-46.5 21.5-57 48 0 0-48.5 127.833-71 189.5M208 184s16.5-8 48-8 48 8 48 8M208 272s16.5-8 48-8 48 8 48 8M304 344V128c0-26.5 16-48 44-48 35 0 46.5 21.5 57 48 0 0 48.5 127.833 71 189.5" stroke="#000" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol  viewBox="0 0 512 512" id="icon-binoculars-sharp"><path fill-rule="evenodd" clip-rule="evenodd" d="M164 64c-21.289 0-37.183 6.758-49.083 18.831-11.071 11.233-17.546 26.036-22.792 39.275L23.283 305.692a155.028 155.028 0 0 0-2.314 6.324c-.25.685-.45 1.376-.602 2.068A104.014 104.014 0 0 0 16 344c0 57.438 46.562 104 104 104s104-46.562 104-104v-60.461l.04-.01 63.96.01V344c0 57.438 46.562 104 104 104s104-46.562 104-104c0-10.399-1.526-20.441-4.367-29.915-.325-1.085-2.915-8.392-2.915-8.392l-68.207-181.915-.636-1.672c-5.246-13.239-11.72-28.042-22.792-39.275C385.183 70.758 369.289 64 348 64c-18.436 0-33.934 7.239-44.611 19.607C292.943 95.707 288 111.638 288 128v34.809h-64V128c0-16.362-4.943-32.293-15.389-44.393C197.934 71.239 182.436 64 164 64ZM56 344c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64-35.346 0-64-28.654-64-64Zm272 0c0-35.346 28.654-64 64-64 35.346 0 64 28.654 64 64 0 35.346-28.654 64-64 64-35.346 0-64-28.654-64-64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-binoculars"><path fill-rule="evenodd" clip-rule="evenodd" d="M114.917 82.831C126.817 70.758 142.711 64 164 64c18.436 0 33.934 7.239 44.611 19.607C219.057 95.707 224 111.638 224 128v34.809c8.45-1.583 19.147-2.809 32-2.809 12.853 0 23.55 1.226 32 2.809V128c0-16.362 4.943-32.293 15.389-44.393C314.066 71.239 329.564 64 348 64c21.289 0 37.183 6.758 49.083 18.831 11.072 11.233 17.546 26.036 22.792 39.275l.636 1.672 68.207 181.915s2.59 7.307 2.915 8.392A103.992 103.992 0 0 1 496 344c0 57.438-46.562 104-104 104s-104-46.562-104-104v-60.461l-.04-.01C281.089 281.825 270.382 280 256 280c-14.382 0-25.089 1.825-31.96 3.529l-.04.01V344c0 57.438-46.562 104-104 104S16 401.438 16 344c0-10.399 1.526-20.441 4.367-29.916.152-.692.352-1.383.602-2.068.585-1.739 1.641-4.628 2.314-6.324l68.842-183.586c5.246-13.239 11.721-28.042 22.792-39.275ZM320 343.905c.051-39.721 32.267-71.905 72-71.905 30.372 0 56.352 18.806 66.93 45.408l1.358 3.71A71.916 71.916 0 0 1 464 344c0 39.764-32.236 72-72 72-39.751 0-71.978-32.214-72-71.96V344m-200-72c-30.371 0-56.35 18.805-66.93 45.406l-1.358 3.714A71.923 71.923 0 0 0 48 344c0 39.764 32.236 72 72 72s72-32.236 72-72-32.236-72-72-72Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bluetooth-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m144 352 224-192L256 48v416l112-112-224-192" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bluetooth-sharp"><path d="M397.41 161.13 236-.28v212.8l-94.17-80.72-26 30.37L225.27 256 115.8 349.83l26 30.37 94.2-80.72v212.8l161.41-161.41L286.73 256ZM276 96.28l62.59 62.59L276 212.52Zm62.58 256.85L276 415.72V299.48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bluetooth"><path d="M388 160.77a20 20 0 0 0-5.85-14.91l-112-112A20 20 0 0 0 236 48v164.52l-79-67.71a20 20 0 0 0-26 30.38L225.27 256 131 336.81a20 20 0 1 0 26 30.38l79-67.71V464a20 20 0 0 0 34.14 14.14l112-112a20 20 0 0 0-1.14-29.33L286.73 256 381 175.19a20 20 0 0 0 7-14.42Zm-49.42 192.36L276 415.72V299.49ZM276 212.52V96.28l62.59 62.59Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-boat-outline"><path d="M461.93 261.05c-2-4.76-6.71-7.83-11.67-9.49l-187.18-74.48a23.78 23.78 0 0 0-14.17 0l-187 74.52c-5 1.56-9.83 4.77-11.81 9.53s-2.94 9.37-1 15.08l46.53 119.15a7.46 7.46 0 0 0 7.47 4.64c26.69-1.68 50.31-15.23 68.38-32.5a7.66 7.66 0 0 1 10.49 0C201.29 386 227 400 256 400s54.56-14 73.88-32.54a7.67 7.67 0 0 1 10.5 0c18.07 17.28 41.69 30.86 68.38 32.54a7.45 7.45 0 0 0 7.46-4.61l46.7-119.16c1.98-4.78.99-10.41-.99-15.18Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M416 473.14a6.84 6.84 0 0 0-3.56-6c-27.08-14.55-51.77-36.82-62.63-48a10.05 10.05 0 0 0-12.72-1.51c-50.33 32.42-111.61 32.44-161.95.05a10.09 10.09 0 0 0-12.82 1.56c-10.77 11.28-35.19 33.3-62.43 47.75a7.15 7.15 0 0 0-3.89 5.73 6.73 6.73 0 0 0 7.92 7.15c20.85-4.18 41-13.68 60.2-23.83a8.71 8.71 0 0 1 8-.06A185.14 185.14 0 0 0 340 456a8.82 8.82 0 0 1 8.09.06c19.1 10 39.22 19.59 60 23.8a6.72 6.72 0 0 0 7.95-6.71Z" /><path d="M320 96V72a24.07 24.07 0 0 0-24-24h-80a24.07 24.07 0 0 0-24 24v24M416 233v-89a48.14 48.14 0 0 0-48-48H144a48.14 48.14 0 0 0-48 48v92M256 183.6v212.85" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-boat-sharp"><path d="M477.77 246.42c-2.13-6-7.23-9.55-12.56-11.95L432 221.38V92a20 20 0 0 0-20-20h-76V40a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v32h-76a20 20 0 0 0-20 20v129.46l-33.08 13.06c-5.33 2.4-10.58 6-12.72 12s-3.16 11.81-1 19L84.25 415.7h1.06c34.12 0 64-17.41 85.31-43.82 21.32 26.41 51.18 42.12 85.3 42.12s64-15.76 85.31-42.17c21.32 26.41 51.18 43.87 85.3 43.87h1.06l51.25-150.17c2.16-6 1.07-13.1-1.07-19.11ZM256 152l-144 56.83V108a4 4 0 0 1 4-4h280a4 4 0 0 1 4 4v100.76Z" /><path d="M345.22 407c-52.25 36.26-126.35 36.25-178.6 0 0 0-45.64 63-94.64 63l13.33 1c29.86 0 58.65-11.73 85.31-25.59a185.33 185.33 0 0 0 170.6 0c26.66 13.87 55.45 25.6 85.31 25.6l13.33-1C392.21 470 345.22 407 345.22 407Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-boat"><path d="M416 473.14a6.83 6.83 0 0 0-3.57-6c-27.07-14.55-51.76-36.82-62.62-48a10.05 10.05 0 0 0-12.72-1.51c-50.33 32.42-111.61 32.44-161.95.05a10.09 10.09 0 0 0-12.82 1.56c-10.77 11.28-35.19 33.3-62.43 47.75a7.11 7.11 0 0 0-3.89 5.73 6.73 6.73 0 0 0 7.92 7.15c20.85-4.18 41-13.68 60.2-23.83a8.71 8.71 0 0 1 8-.06 185.14 185.14 0 0 0 167.81 0 8.82 8.82 0 0 1 8.09.06c19.1 10 39.22 19.59 60 23.8a6.73 6.73 0 0 0 8-6.71ZM476.71 246.91c-3.49-8.39-10.9-14.89-20.9-18.35L432 219.08V136a64 64 0 0 0-64-64h-32v-8a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v8h-32a64 64 0 0 0-64 64v83.15l-23.58 9.39c-9.94 3.3-17.63 10-21.15 18.44-2.45 5.89-5.25 15-1.3 26.46l.1.3 46.66 119.44A23.33 23.33 0 0 0 102.58 408c.5 0 1 0 1.53-.05 31.32-2 56-17.27 72.6-31.61C200.42 396.81 228.31 408 256 408s55.43-11.2 79.14-31.7c16.59 14.36 41.3 29.67 72.61 31.65a23.36 23.36 0 0 0 23.37-14.74l46.65-119c3.28-8.09 2.9-17.76-1.06-27.3ZM269 154.21l-1.14-.4a39.53 39.53 0 0 0-23.73 0l-.58.18-126.07 50.23a4 4 0 0 1-5.48-3.72V136a32 32 0 0 1 32-32h224a32 32 0 0 1 32 32v64.44a4 4 0 0 1-5.48 3.72Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-body-outline"><circle fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" cx="256" cy="56" r="40" /><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" d="m199.3 295.62-30.4 172.2a24 24 0 0 0 19.5 27.8 23.76 23.76 0 0 0 27.6-19.5l21-119.9v.2s5.2-32.5 17.5-32.5h3.1c12.5 0 17.5 32.5 17.5 32.5v-.1l21 119.9a23.92 23.92 0 1 0 47.1-8.4l-30.4-172.2-4.9-29.7c-2.9-18.1-4.2-47.6.5-59.7 4-10.4 14.13-14.2 23.2-14.2H424a24 24 0 0 0 0-48H88a24 24 0 0 0 0 48h92.5c9.23 0 19.2 3.8 23.2 14.2 4.7 12.1 3.4 41.6.5 59.7Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-body-sharp"><circle cx="256" cy="56" r="56" /><path d="M464 128H48v52h144l-32 325.13 51 6.87 21.65-192h47.02L301 512l51-6.98L320 180h144v-52z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-body"><circle cx="256" cy="56" r="56" /><path d="M437 128H75a27 27 0 0 0 0 54h101.88c6.91 0 15 3.09 19.58 15 5.35 13.83 2.73 40.54-.57 61.23l-4.32 24.45a.42.42 0 0 1-.12.35l-34.6 196.81A27.43 27.43 0 0 0 179 511.58a27.06 27.06 0 0 0 31.42-22.29l23.91-136.8S242 320 256 320c14.23 0 21.74 32.49 21.74 32.49l23.91 136.92a27.24 27.24 0 1 0 53.62-9.6L320.66 283a.45.45 0 0 0-.11-.35l-4.33-24.45c-3.3-20.69-5.92-47.4-.57-61.23 4.56-11.88 12.91-15 19.28-15H437a27 27 0 0 0 0-54Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bonfire-outline"><path d="M273.38 368.33c-.81-9.23-8.86-16.44-18.55-16.44a18.63 18.63 0 0 0-18.2 14.11l-18.2 88.38a35.75 35.75 0 0 0-.93 7.88c0 19.93 16.68 33.78 37.33 33.78s37.34-13.85 37.34-33.78a36.16 36.16 0 0 0-1.29-9.45ZM411.05 407.86a41.78 41.78 0 0 0-5.95-4.35l-69.53-48.59c-6.77-4.25-14-4.13-19.25 1a13.53 13.53 0 0 0-2 17.2l52.5 69a36.57 36.57 0 0 0 4 4.69c9.1 10.17 29.28 10.73 40.37 0 10.94-10.91 10.81-30.35-.14-38.95ZM463.3 335.88h-70.42c-4.55 0-8.88 3.35-8.88 8.16s2.95 7.85 6.92 9.16l66.43 20.55C467 376 480 367.4 480 356.66c0-13.66-7.6-20.78-16.7-20.78ZM128.22 344c0-5-4.55-8.16-9.45-8.16H48.35c-8.87 0-16.35 9.58-16.35 20.32S44.62 376 54.3 373.75l67.43-20.55c4.39-1.31 6.49-4.2 6.49-9.2ZM176.55 355 107 403.38a32.34 32.34 0 0 0-6 4.35 26.33 26.33 0 0 0 0 38.56 29.39 29.39 0 0 0 40.36 0 30.75 30.75 0 0 0 4-4.68L197.9 373c3.5-5.58 2.92-12.49-2-17.06a15 15 0 0 0-19.35-.94Z" /><path d="M368 125.09c0-55.7-49.22-89.16-94.2-93.06a8 8 0 0 0-8.69 7.71c-3.12 76-109.38 110.69-119.87 178.68-7 45.4 16.65 72.37 34.31 85.78a15.94 15.94 0 0 0 23.93-5.62c22.5-45.86 74.33-63.49 109.72-85.94 42.88-27.2 54.8-56.44 54.8-87.55Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path d="M240 95.7c-12.82-23-30.51-31-59.16-31.63a3.86 3.86 0 0 0-4.06 3.51c-.95 34.22-32.78 44.85-32.78 73.15 0 19.37 5.39 29 17.16 39.28M352.45 178.76c8.6 14.31 15.55 30.08 15.55 48 0 52.52-42.47 93.1-94.86 93.1a94.42 94.42 0 0 1-65.14-26" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bonfire-sharp"><path d="m199.89 336-15.25-5.62a100.35 100.35 0 0 1-32-23.08c-13.93-14.9-29.29-40.71-23.38-79.11 5.2-33.73 44.2-74.21 69.34-97.87 27.24-25.62 66-65.85 64.15-99.15L262 16h15.18C328.53 16 384 53.62 384 114.41c0 45.57-22 77.61-68.91 106.9-8 5-16.44 9.66-25.42 14.53-30.63 16.62-75.29 49.83-85.73 85.32ZM181.19 113.59C201 95 218.91 78.15 227.62 59.79q-2.76-1.68-5.7-3.09c-11.87-5.69-26.1-8.34-44.76-8.34h-16.94l.56 16.49c.47 14.06-6.06 22.51-14.33 33.21C137.8 109.26 128 121.94 128 141c0 10.23 1.29 18.76 4.2 26.36q3.5-5.31 7.61-10.63c12.19-15.73 27.05-29.68 41.38-43.14Z" /><path d="M330.34 239.85c-9.31 5.9-19 11.14-29.25 16.71-32.65 17.69-63.48 34.44-73.23 67.44l-.6 2a110.5 110.5 0 0 0 45.87 10c29.66 0 57.45-11.13 78.24-31.36A107.38 107.38 0 0 0 384 227a92.39 92.39 0 0 0-5.59-31c-11.35 16.18-27.14 30.58-48.07 43.85ZM268.72 360h-25.44a4 4 0 0 0-3.92 3.22l-25.36 128a4 4 0 0 0 3.92 4.78h76.26a4 4 0 0 0 3.92-4.78l-25.41-128a4 4 0 0 0-3.97-3.22ZM325.68 354.32l-11.36 11.36a4 4 0 0 0-.5 5.05l59.47 89.21a4 4 0 0 0 6.16.61l41.1-41.1a4 4 0 0 0-.61-6.16l-89.21-59.47a4 4 0 0 0-5.05.5ZM388 336a4 4 0 0 0-4 4v8.61a4 4 0 0 0 3.34 3.95l88 14.66a4 4 0 0 0 4.66-3.94V340a4 4 0 0 0-4-4ZM186.32 354.32l11.36 11.36a4 4 0 0 1 .5 5.05l-59.47 89.21a4 4 0 0 1-6.16.61l-41.1-41.1a4 4 0 0 1 .61-6.16l89.21-59.47a4 4 0 0 1 5.05.5ZM124 336H36a4 4 0 0 0-4 4v23.28a4 4 0 0 0 4.66 3.94l88-14.66a4 4 0 0 0 3.34-3.95V340a4 4 0 0 0-4-4Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bonfire"><path d="M273.38 368.37c-.81-9.23-8.86-16.44-18.55-16.44a18.63 18.63 0 0 0-18.2 14.07l-18.2 88.36a35.59 35.59 0 0 0-.93 7.87c0 19.93 16.68 33.77 37.33 33.77s37.34-13.84 37.34-33.77a36.16 36.16 0 0 0-1.29-9.45ZM411.05 407.89a42.66 42.66 0 0 0-5.95-4.36L335.57 355c-6.77-4.24-14-4.13-19.25 1a13.52 13.52 0 0 0-2 17.19l52.5 69a38 38 0 0 0 4 4.69c9.1 10.16 29.28 10.72 40.37 0 10.94-10.96 10.81-30.39-.14-38.99ZM463.3 335.93h-70.42c-4.55 0-8.88 3.35-8.88 8.15s2.95 7.85 6.92 9.16l66.43 20.55C467 376 480 367.44 480 356.71c0-13.63-7.6-20.78-16.7-20.78ZM128.22 344.08c0-4.95-4.55-8.15-9.45-8.15H48.35c-8.87 0-16.35 9.58-16.35 20.31S44.62 376 54.3 373.79l67.43-20.55c4.39-1.31 6.49-4.24 6.49-9.16ZM176.55 355.05 107 403.41a32.29 32.29 0 0 0-6 4.34 26.33 26.33 0 0 0 0 38.56 29.41 29.41 0 0 0 40.36 0 30.75 30.75 0 0 0 4-4.68L197.9 373c3.5-5.57 2.92-12.48-2-17a15 15 0 0 0-19.35-.95ZM293.46 242.39c10-5.42 19.45-10.54 28.31-16.16 42.46-26.92 62.23-59 62.23-101 0-64.66-56.07-104.4-108.82-109-6.49-.57-15-.42-19.91 3.88s-5.88 12.56-6.15 19.1c-1.38 33.61-28.38 59-57 85.86-28 26.3-56.93 53.49-62.71 91-8.41 54.68 21.74 86.71 40.46 100.93a31.88 31.88 0 0 0 19.3 6.51 32.32 32.32 0 0 0 7.41-.87 31.75 31.75 0 0 0 21.27-16.95c14.91-30.39 45.77-47.12 75.61-63.3Z" /><path d="M139.82 156.57c12.22-15.76 27-29.68 41.37-43.15 19.92-18.72 37.81-35.58 46.5-53.86-12.24-7.37-27.36-11.36-46.51-11.36-17.79 0-20.39 5.18-20.39 19.06 0 12.56-6.53 20.54-14.34 30.65C137.8 109.1 128 121.77 128 140.84c0 10.23 1.29 18.77 4.2 26.37q3.5-5.32 7.62-10.64ZM330.34 239.74c-9.33 5.92-19 11.16-29.25 16.71-28.91 15.68-56.21 30.48-68.88 56.28a62.6 62.6 0 0 1-1.88 3.61 8 8 0 0 0 3.89 11.3c12.31 5.1 25.13 8.27 38.91 8.27a111.42 111.42 0 0 0 78.24-31.37A107.45 107.45 0 0 0 384 226.85a86.56 86.56 0 0 0-1.33-15 8 8 0 0 0-13.8-4c-10.18 11.47-22.93 22-38.53 31.89Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-book-outline"><path d="M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0 1 16 16v288a16 16 0 0 1-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0 1 16-16c131.57.59 192 32.84 208 96ZM256 160v288" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-book-sharp"><path d="M464 48c-67.61.29-117.87 9.6-154.24 25.69-27.14 12-37.76 21.08-37.76 51.84V448c41.57-37.5 78.46-48 224-48V48ZM48 48c67.61.29 117.87 9.6 154.24 25.69 27.14 12 37.76 21.08 37.76 51.84V448c-41.57-37.5-78.46-48-224-48V48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-book"><path d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 0 0-17.92 5.33A32 32 0 0 0 16 79.9V366c0 19.34 13.76 33.93 32 33.93 71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 0 0 6.94-3V106.82a15.89 15.89 0 0 0-5.46-12A143 143 0 0 0 202.24 74ZM481.92 53.3A31.33 31.33 0 0 0 464 48c-67.61.3-118.11 8.71-154.24 26a143.31 143.31 0 0 0-32.31 20.78 15.93 15.93 0 0 0-5.45 12v337.13a3.93 3.93 0 0 0 6.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0 0 32-32v-288a32 32 0 0 0-14.12-26.61Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bookmark-outline"><path d="M352 48H160a48 48 0 0 0-48 48v368l144-128 144 128V96a48 48 0 0 0-48-48Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bookmark-sharp"><path d="M416 480 256 357.41 96 480V32h320Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bookmark"><path d="M400 480a16 16 0 0 1-10.63-4L256 357.41 122.63 476A16 16 0 0 1 96 464V96a64.07 64.07 0 0 1 64-64h192a64.07 64.07 0 0 1 64 64v368a16 16 0 0 1-16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bookmarks-outline"><path d="M128 80V64a48.14 48.14 0 0 1 48-48h224a48.14 48.14 0 0 1 48 48v368l-80-64" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M320 96H112a48.14 48.14 0 0 0-48 48v352l152-128 152 128V144a48.14 48.14 0 0 0-48-48Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bookmarks-sharp"><path d="M112 0v48h304v368l48 32V0H112z" /><path d="M48 80v432l168-124 168 124V80H48z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bookmarks"><path d="M400 0H176a64.11 64.11 0 0 0-62 48h228a74 74 0 0 1 74 74v304.89l22 17.6a16 16 0 0 0 19.34.5 16.41 16.41 0 0 0 6.66-13.42V64a64 64 0 0 0-64-64Z" /><path d="M320 80H112a64 64 0 0 0-64 64v351.62A16.36 16.36 0 0 0 54.6 509a16 16 0 0 0 19.71-.71L216 388.92l141.69 119.32a16 16 0 0 0 19.6.79 16.4 16.4 0 0 0 6.71-13.44V144a64 64 0 0 0-64-64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bowling-ball-outline"><circle cx="256" cy="256" r="208" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /><circle cx="288" cy="200" r="24" /><circle cx="296" cy="128" r="24" /><circle cx="360" cy="168" r="24" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bowling-ball-sharp"><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61ZM286 230a28 28 0 1 1 28-28 28 28 0 0 1-28 28Zm8-76a28 28 0 1 1 28-28 28 28 0 0 1-28 28Zm68 44a28 28 0 1 1 28-28 28 28 0 0 1-28 28Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bowling-ball"><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61ZM288 224a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm8-72a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm64 40a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-briefcase-outline"><rect x="32" y="128" width="448" height="320" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M144 128V96a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32M480 240H32M320 240v24a8 8 0 0 1-8 8H200a8 8 0 0 1-8-8v-24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-briefcase-sharp"><path d="M336 288H176v-32H16v196a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V256H336ZM496 124a12 12 0 0 0-12-12H384V56a8 8 0 0 0-8-8H136a8 8 0 0 0-8 8v56H28a12 12 0 0 0-12 12v100h480Zm-152-12H168V88h176Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-briefcase"><path d="M336 80H176a16 16 0 0 0-16 16v16h192V96a16 16 0 0 0-16-16Z" style="fill:none" /><path d="M496 176a64.07 64.07 0 0 0-64-64h-48V96a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v48h480Zm-144-64H160V96a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16ZM336 264a24 24 0 0 1-24 24H200a24 24 0 0 1-24-24v-4a4 4 0 0 0-4-4H16v144a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V256H340a4 4 0 0 0-4 4Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-browsers-outline"><rect x="48" y="64" width="416" height="384" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M397.82 64H114.18C77.69 64 48 94.15 48 131.2V176h16c0-16 16-32 32-32h320c16 0 32 16 32 32h16v-44.8c0-37.05-29.69-67.2-66.18-67.2Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-browsers-sharp"><path d="M32 64v384a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16Zm408 364H72a4 4 0 0 1-4-4V152a4 4 0 0 1 4-4h368a4 4 0 0 1 4 4v272a4 4 0 0 1-4 4Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-browsers"><path d="M416 48H96a64 64 0 0 0-64 64v288a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V112a64 64 0 0 0-64-64Zm24 96H72a8 8 0 0 1-8-8v-24a32.09 32.09 0 0 1 32-32h320a32.09 32.09 0 0 1 32 32v24a8 8 0 0 1-8 8Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-brush-outline"><path d="M452.37 59.63h0a40.49 40.49 0 0 0-57.26 0L184 294.74c23.08 4.7 46.12 27.29 49.26 49.26l219.11-227.11a40.49 40.49 0 0 0 0-57.26ZM138 336c-29.88 0-54 24.5-54 54.86 0 23.95-20.88 36.57-36 36.57C64.56 449.74 92.82 464 120 464c39.78 0 72-32.73 72-73.14 0-30.36-24.12-54.86-54-54.86Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-brush-sharp"><path d="m480 96-64-64-244 260 64 64ZM142 320c-36.52 0-66 30.63-66 68.57 0 25.43-31 45.72-44 45.72C52.24 462.17 86.78 480 120 480c48.62 0 88-40.91 88-91.43 0-37.94-29.48-68.57-66-68.57Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-brush"><path d="M233.15 360.11a15.7 15.7 0 0 1-4.92-.77 16 16 0 0 1-10.92-13c-2.15-15-19.95-32.46-36.62-35.85a16 16 0 0 1-8.69-26.33l211.09-235.1c.19-.22.39-.43.59-.63a56.57 56.57 0 0 1 79.89 0 56.51 56.51 0 0 1 .11 79.78l-219 227a16 16 0 0 1-11.53 4.9ZM119.89 480.11c-32.14 0-65.45-16.89-84.85-43a16 16 0 0 1 12.85-25.54c5.34 0 20-4.87 20-20.57 0-39.07 31.4-70.86 70-70.86s70 31.79 70 70.86c0 49.12-39.48 89.11-88 89.11Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bug-outline"><path d="M370 378c28.89 23.52 46 46.07 46 86M142 378c-28.89 23.52-46 46.06-46 86M384 208c28.89-23.52 32-56.07 32-96M128 206c-28.89-23.52-32-54.06-32-94M464 288.13h-80M128 288.13H48M256 192v256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M256 448h0c-70.4 0-128-57.6-128-128v-96.07c0-65.07 57.6-96 128-96h0c70.4 0 128 25.6 128 96V320c0 70.4-57.6 128-128 128Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M179.43 143.52a49.08 49.08 0 0 1-3.43-15.73A80 80 0 0 1 255.79 48h.42A80 80 0 0 1 336 127.79a41.91 41.91 0 0 1-3.12 14.3" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bug-sharp"><path d="M480 304.13v-32h-80V215.2c29.42-27.95 32-64.76 32-103.2V96h-32v16c0 28-1.86 48.15-9.9 63.84C368 128 324.32 112 256 112c-39.8 0-75.19 7.06-100.43 24.32-14.9 10.19-25.2 24.91-32.7 39.72C114 160.57 112 140.82 112 112V96H80v16c0 37.44 2.59 73.36 32 101.2v58.93H32v32l80-.13c0 19 3.7 53.09 10.39 69.69C96.6 396.76 80 422.31 80 464v16h32v-16c0-27.66 9.1-44.71 26.17-61.32C160 448 177 464 240 464V176h32v288c65 0 80-16 101.83-61.32C390.9 419.29 400 436.35 400 464v16h32v-16c0-41.68-16.6-67.23-42.39-90.31C396.3 357.09 400 323 400 304Z" /><path d="M256 32c-48.06 0-96 0-96 84 26.12-14 59.35-20 96-20 24.09 0 46.09 2.65 65.39 8 10.75 3 24.66 8.71 30.61 12 0-84-47.94-84-96-84Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bug"><path d="M463.55 272.13H400v-48.2q0-4.32-.27-8.47c29.57-27.88 32.25-64.63 32.27-103 0-8.61-6.64-16-15.25-16.41A16 16 0 0 0 400 112c0 28-1.86 48.15-9.9 63.84-19.22-41.15-65.78-63.91-134.1-63.91-39.8 0-74.19 9.13-99.43 26.39-14.9 10.19-26.2 22.91-33.7 37.72C114 160.65 112 141 112 112.46c0-8.61-6.6-16-15.2-16.44A16 16 0 0 0 80 112c0 37.63 2.61 73.73 32.44 101.63q-.43 5.06-.44 10.3v48.2H48.45c-8.61 0-16 6.62-16.43 15.23a16 16 0 0 0 16 16.77h64V320a143.32 143.32 0 0 0 10.39 53.69C96.74 396.64 80.18 422 80 463.34c0 8.74 6.62 16.3 15.36 16.65A16 16 0 0 0 112 464c0-27.66 9.1-44.71 26.17-61.32A144.37 144.37 0 0 0 220 459.42a16 16 0 0 0 20-15.49V192.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 192v251.93a16 16 0 0 0 20 15.49 144.4 144.4 0 0 0 81.82-56.74c17 16.54 26.09 33.52 26.17 60.95a16.27 16.27 0 0 0 15.1 16.37A16 16 0 0 0 432 464c0-41.68-16.6-67.23-42.39-90.31A143.32 143.32 0 0 0 400 320v-15.87h64a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23Z" /><path d="m321.39 104 .32.09c13.57 3.8 25.07-10.55 18.2-22.85A95.86 95.86 0 0 0 256.21 32h-.42a95.87 95.87 0 0 0-84.19 50.13c-6.84 12.58 5.14 27 18.84 22.86 19.71-6 41.79-9.06 65.56-9.06 24.09 0 46.09 2.72 65.39 8.07Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-build-outline"><path d="M393.87 190a32.1 32.1 0 0 1-45.25 0l-26.57-26.57a32.09 32.09 0 0 1 0-45.26L382.19 58a1 1 0 0 0-.3-1.64c-38.82-16.64-89.15-8.16-121.11 23.57-30.58 30.35-32.32 76-21.12 115.84a31.93 31.93 0 0 1-9.06 32.08L64 380a48.17 48.17 0 1 0 68 68l153.86-167a31.93 31.93 0 0 1 31.6-9.13c39.54 10.59 84.54 8.6 114.72-21.19 32.49-32 39.5-88.56 23.75-120.93a1 1 0 0 0-1.6-.26Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><circle cx="96" cy="416" r="16" /></symbol><symbol  viewBox="0 0 512 512" id="icon-build-sharp"><path d="M230 209.2 32 405.58 106.65 480l197.59-198.17c46.47 17.46 105.52 12.54 143-24.78 40.44-40.32 40.35-108 16.81-156.79l-87.33 87.06-52.32-52.13 87.33-87.06C363 24.46 294.67 24.34 254.23 64.66c-38.03 37.91-42.78 97.6-24.23 144.54Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-build"><path d="M469.54 120.52a16 16 0 0 0-25.54-4L382.56 178a16.12 16.12 0 0 1-22.63 0l-26.56-26.6a16 16 0 0 1 0-22.63l61.18-61.19a16 16 0 0 0-4.78-25.92C343.56 21 285.88 31.78 249.51 67.88c-30.9 30.68-40.11 78.62-25.25 131.53a15.89 15.89 0 0 1-4.49 16L53.29 367.46a64.17 64.17 0 1 0 90.6 90.64l153.68-166.85a15.9 15.9 0 0 1 15.77-4.57 179.3 179.3 0 0 0 46.22 6.37c33.4 0 62.71-10.81 83.85-31.64 39.15-38.57 45.12-103.99 26.13-140.89ZM99.48 447.15a32 32 0 1 1 28.34-28.35 32 32 0 0 1-28.34 28.35Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bulb-outline"><path d="M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 0 0-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24M224 480h64M208 432h96M256 384V256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M294 240s-21.51 16-38 16-38-16-38-16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bulb-sharp"><path d="M208 464h96v32h-96zM192 416h128v32H192zM369.42 62.69C339.35 32.58 299.07 16 256 16A159.62 159.62 0 0 0 96 176c0 46.62 17.87 90.23 49 119.64l4.36 4.09C167.37 316.57 192 339.64 192 360v40h48V269.11L195.72 244 214 217.72 256 240l41.29-22.39 19.1 25.68-44.39 26V400h48v-40c0-19.88 24.36-42.93 42.15-59.77l4.91-4.66C399.08 265 416 223.61 416 176a159.16 159.16 0 0 0-46.58-113.31Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bulb"><path d="M288 464h-64a16 16 0 0 0 0 32h64a16 16 0 0 0 0-32ZM304 416h-96a16 16 0 0 0 0 32h96a16 16 0 0 0 0-32ZM369.42 62.69C339.35 32.58 299.07 16 256 16A159.62 159.62 0 0 0 96 176c0 46.62 17.87 90.23 49 119.64l4.36 4.09C167.37 316.57 192 339.64 192 360v24a16 16 0 0 0 16 16h24a8 8 0 0 0 8-8V274.82a8 8 0 0 0-5.13-7.47A130.73 130.73 0 0 1 208.71 253a16 16 0 1 1 18.58-26c7.4 5.24 21.65 13 28.71 13s21.31-7.78 28.73-13a16 16 0 0 1 18.56 26 130.73 130.73 0 0 1-26.16 14.32 8 8 0 0 0-5.13 7.47V392a8 8 0 0 0 8 8h24a16 16 0 0 0 16-16v-24c0-19.88 24.36-42.93 42.15-59.77l4.91-4.66C399.08 265 416 223.61 416 176a159.16 159.16 0 0 0-46.58-113.31Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bus-outline"><rect x="80" y="112" width="352" height="192" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="80" y="304" width="352" height="128" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M400 112H112a32.09 32.09 0 0 1-32-32h0a32.09 32.09 0 0 1 32-32h288a32.09 32.09 0 0 1 32 32h0a32.09 32.09 0 0 1-32 32ZM144 432v22a10 10 0 0 1-10 10h-28a10 10 0 0 1-10-10v-22ZM416 432v22a10 10 0 0 1-10 10h-28a10 10 0 0 1-10-10v-22Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="368" cy="368" r="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><circle cx="144" cy="368" r="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M256 112v192M80 80v288M432 80v288" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bus-sharp"><path d="M400 64H112a16 16 0 0 0 0 32h288a16 16 0 0 0 0-32Z" style="fill:none" /><path d="M424 32H88a24 24 0 0 0-24 24v360a32 32 0 0 0 16 27.71V480h72v-32h208v32h72v-36.29A32 32 0 0 0 448 416V56a24 24 0 0 0-24-24ZM175.82 371.47a32 32 0 1 1-35.3-35.29 32.09 32.09 0 0 1 35.3 35.29ZM240 288H96V128h144Zm16-192H96.46L96 64h320l-.46 32H256Zm16 32h144v160H272Zm64.18 236.53a32 32 0 1 1 35.3 35.29 32.09 32.09 0 0 1-35.3-35.29Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-bus"><path d="M400 32H112a48 48 0 0 0-48 48v320a47.91 47.91 0 0 0 16 35.74V454a26 26 0 0 0 26 26h28a26 26 0 0 0 26-26v-6h192v6a26 26 0 0 0 26 26h28a26 26 0 0 0 26-26v-18.26A47.91 47.91 0 0 0 448 400V80a48 48 0 0 0-48-48ZM147.47 399.82a32 32 0 1 1 28.35-28.35 32 32 0 0 1-28.35 28.35ZM236 288H112a16 16 0 0 1-16-16V144a16 16 0 0 1 16-16h124a4 4 0 0 1 4 4v152a4 4 0 0 1-4 4Zm20-192H112.46c-8.6 0-16-6.6-16.44-15.19A16 16 0 0 1 112 64h287.54c8.6 0 16 6.6 16.44 15.19A16 16 0 0 1 400 96H256Zm20 32h124a16 16 0 0 1 16 16v128a16 16 0 0 1-16 16H276a4 4 0 0 1-4-4V132a4 4 0 0 1 4-4Zm60.18 243.47a32 32 0 1 1 28.35 28.35 32 32 0 0 1-28.35-28.35Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-business-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M176 416v64M80 32h192a32 32 0 0 1 32 32v412a4 4 0 0 1-4 4H48h0V64a32 32 0 0 1 32-32ZM320 192h112a32 32 0 0 1 32 32v256h0-160 0V208a16 16 0 0 1 16-16Z" /><path d="M98.08 431.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79ZM98.08 351.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79ZM98.08 271.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79ZM98.08 191.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79ZM98.08 111.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79ZM178.08 351.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79ZM178.08 271.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79ZM178.08 191.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79ZM178.08 111.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79ZM258.08 431.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79ZM258.08 351.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79ZM258.08 271.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Z" /><ellipse cx="256" cy="176" rx="15.95" ry="16.03" transform="rotate(-45 255.99 175.996)" /><path d="M258.08 111.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79ZM400 400a16 16 0 1 0 16 16 16 16 0 0 0-16-16ZM400 320a16 16 0 1 0 16 16 16 16 0 0 0-16-16ZM400 240a16 16 0 1 0 16 16 16 16 0 0 0-16-16ZM336 400a16 16 0 1 0 16 16 16 16 0 0 0-16-16ZM336 320a16 16 0 1 0 16 16 16 16 0 0 0-16-16ZM336 240a16 16 0 1 0 16 16 16 16 0 0 0-16-16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-business-sharp"><path d="M320 176V16H32v480h128v-96h32v96h288V176ZM112 432H80v-32h32Zm0-80H80v-32h32Zm0-80H80v-32h32Zm0-80H80v-32h32Zm0-80H80V80h32Zm128-32h32v32h-32Zm-48 272h-32v-32h32Zm0-80h-32v-32h32Zm0-80h-32v-32h32Zm0-80h-32V80h32Zm80 320h-32v-32h32Zm0-80h-32v-32h32Zm0-80h-32v-32h32Zm0-80h-32v-32h32v32Zm176 272H320v-32h32v-32h-32v-48h32v-32h-32v-48h32v-32h-32v-32h128Z" /><path d="M384 400h32v32h-32zM384 320h32v32h-32zM384 240h32v32h-32z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-business"><path d="M432 176H320V64a48 48 0 0 0-48-48H80a48 48 0 0 0-48 48v416a16 16 0 0 0 16 16h104a8 8 0 0 0 8-8v-71.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 192 416v72a8 8 0 0 0 8 8h264a16 16 0 0 0 16-16V224a48 48 0 0 0-48-48ZM98.08 431.87a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Zm80 240a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Zm80 320a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Zm0-80a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79ZM444 464H320V208h112a16 16 0 0 1 16 16v236a4 4 0 0 1-4 4Z" /><path d="M400 400a16 16 0 1 0 16 16 16 16 0 0 0-16-16ZM400 320a16 16 0 1 0 16 16 16 16 0 0 0-16-16ZM400 240a16 16 0 1 0 16 16 16 16 0 0 0-16-16ZM336 400a16 16 0 1 0 16 16 16 16 0 0 0-16-16ZM336 320a16 16 0 1 0 16 16 16 16 0 0 0-16-16ZM336 240a16 16 0 1 0 16 16 16 16 0 0 0-16-16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cafe-outline"><path d="M368 80h64a16 16 0 0 1 16 16v34a46 46 0 0 1-46 46h-34M96 80h272v192a80 80 0 0 1-80 80H176a80 80 0 0 1-80-80V80h0ZM64 416h336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cafe-sharp"><path d="M448 64H80v254.34a19.83 19.83 0 0 0 5.86 14.14l29.65 29.66a19.87 19.87 0 0 0 14.15 5.86h204.68a19.87 19.87 0 0 0 14.15-5.86l29.65-29.66a19.83 19.83 0 0 0 5.86-14.14V192h32a16 16 0 0 0 11.31-4.69l32-32A16 16 0 0 0 464 144V80a16 16 0 0 0-16-16Zm-16 73.37L409.37 160H384V96h48ZM48 400h368v32H48z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cafe"><path d="M432 64H96a16 16 0 0 0-16 16v192a96.11 96.11 0 0 0 96 96h112a96.11 96.11 0 0 0 96-96v-80h18a62.07 62.07 0 0 0 62-62V96a32 32 0 0 0-32-32Zm0 66a30 30 0 0 1-30 30h-18V96h48ZM400 400H64a16 16 0 0 0 0 32h336a16 16 0 0 0 0-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-calculator-outline"><rect x="112" y="48" width="288" height="416" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M160.01 112H352v64H160.01z" /><circle cx="168" cy="248" r="24" /><circle cx="256" cy="248" r="24" /><circle cx="344" cy="248" r="24" /><circle cx="168" cy="328" r="24" /><circle cx="256" cy="328" r="24" /><circle cx="168" cy="408" r="24" /><circle cx="256" cy="408" r="24" /><rect x="320" y="304" width="48" height="128" rx="24" ry="24" /></symbol><symbol  viewBox="0 0 512 512" id="icon-calculator-sharp"><path d="M416 48a16 16 0 0 0-16-16H112a16 16 0 0 0-16 16v416a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16ZM192 432h-48v-48h48Zm0-80h-48v-48h48Zm0-80h-48v-48h48Zm88 160h-48v-48h48Zm0-80h-48v-48h48Zm0-80h-48v-48h48Zm88 160h-48V304h48Zm0-160h-48v-48h48Zm0-96H144V80h224Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-calculator"><path d="M416 80a48.05 48.05 0 0 0-48-48H144a48.05 48.05 0 0 0-48 48v352a48.05 48.05 0 0 0 48 48h224a48.05 48.05 0 0 0 48-48ZM168 432a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm0-80a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm0-80a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm88 160a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm0-80a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm0-80a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm112 136a24 24 0 0 1-48 0v-80a24 24 0 0 1 48 0Zm-24-136a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm19.31-100.69A16 16 0 0 1 352 176H160a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16v64a16 16 0 0 1-4.69 11.31Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-calendar-clear-outline"><rect fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" x="48" y="80" width="416" height="384" rx="48" /><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" d="M128 48v32M384 48v32M464 160H48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-calendar-clear-sharp"><path d="M32 456a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V192H32ZM480 87.77A23.8 23.8 0 0 0 456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 0 0-24 23.77V144h448Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-calendar-clear"><path d="M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4ZM32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V180a4 4 0 0 0-4-4H36a4 4 0 0 0-4 4Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-calendar-number-outline"><rect x="48" y="80" width="416" height="384" rx="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M128 48v32M384 48v32M464 160H48M304 260l43.42-32H352v168M191.87 306.63c9.11 0 25.79-4.28 36.72-15.47a37.9 37.9 0 0 0 11.13-27.26c0-26.12-22.59-39.9-47.89-39.9-21.4 0-33.52 11.61-37.85 18.93M149 374.16c4.88 8.27 19.71 25.84 43.88 25.84 28.59 0 52.12-15.94 52.12-43.82 0-12.62-3.66-24-11.58-32.07-12.36-12.64-31.25-17.48-41.55-17.48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-calendar-number-sharp"><path d="M32 456a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V176H32Zm310.17-244H368v200h-32V256.29l-35.39 26.08-19-25.76ZM222 335.3c-8.54-8.74-22.75-12.67-30.11-12.67h-16v-32h16c4.85 0 17.41-2.6 25.28-10.65a22 22 0 0 0 6.57-16.08c0-23.23-28.63-23.9-31.89-23.9-17.34 0-23.8 10.61-24.07 11.06l-8.13 13.78-27.56-16.27 8.14-13.77c7.64-13 25.22-26.8 51.62-26.8 16.44 0 31.76 4.77 43.13 13.42 13.39 10.2 20.76 25.28 20.76 42.48A54 54 0 0 1 240 302.35c-1.15 1.18-2.36 2.28-3.59 3.35a66.18 66.18 0 0 1 8.42 7.23c10.56 10.8 16.14 25.75 16.14 43.25 0 18.06-7.61 34-21.42 44.92-12.17 9.61-28.75 14.9-46.7 14.9-27.87 0-48.48-18.16-57.66-33.7l-8.13-13.78 27.56-16.27 8.16 13.75c1.08 1.84 11.15 18 30.1 18 16.66 0 36.12-7.29 36.12-27.82 0-6.25-1.22-14.95-7-20.88ZM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 0 0-24 23.77V144h448V87.77A23.8 23.8 0 0 0 456 64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-calendar-number"><path d="M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4v-12a64 64 0 0 0-64-64ZM476 176H36a4 4 0 0 0-4 4v236a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V180a4 4 0 0 0-4-4ZM239.58 401.1c-12.17 9.61-28.75 14.9-46.7 14.9-27.87 0-48.48-18.16-57.66-33.7a16 16 0 0 1 27.56-16.3c1.08 1.84 11.15 18 30.1 18 16.66 0 36.12-7.29 36.12-27.82 0-6.25-1.22-14.95-7-20.88-8.54-8.74-22.75-12.67-30.11-12.67a16 16 0 0 1 0-32c4.85 0 17.41-2.6 25.28-10.65a22 22 0 0 0 6.57-16.08c0-23.23-28.63-23.9-31.89-23.9-17.34 0-23.8 10.61-24.07 11.06a16 16 0 1 1-27.55-16.26c7.64-13 25.22-26.8 51.62-26.8 16.44 0 31.76 4.77 43.13 13.42 13.39 10.2 20.76 25.28 20.76 42.48A54 54 0 0 1 240 302.35c-1.15 1.18-2.36 2.28-3.59 3.35a66.18 66.18 0 0 1 8.42 7.23c10.56 10.8 16.14 25.75 16.14 43.25.03 18.06-7.58 34.01-21.39 44.92ZM368 396a16 16 0 0 1-32 0V256.29l-22.51 16.59a16 16 0 1 1-19-25.76l43.42-32a16 16 0 0 1 9.49-3.12h4.6a16 16 0 0 1 16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-calendar-outline"><rect fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" x="48" y="80" width="416" height="384" rx="48" /><circle cx="296" cy="232" r="24" /><circle cx="376" cy="232" r="24" /><circle cx="296" cy="312" r="24" /><circle cx="376" cy="312" r="24" /><circle cx="136" cy="312" r="24" /><circle cx="216" cy="312" r="24" /><circle cx="136" cy="392" r="24" /><circle cx="216" cy="392" r="24" /><circle cx="296" cy="392" r="24" /><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" d="M128 48v32M384 48v32" /><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" d="M464 160H48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-calendar-sharp"><path d="M32 456a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V176H32Zm320-244a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm-80-80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm-80-80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm-80-80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4Zm0 80a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v40a4 4 0 0 1-4 4h-40a4 4 0 0 1-4-4ZM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 0 0-24 23.77V144h448V87.77A23.8 23.8 0 0 0 456 64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-calendar"><path d="M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4ZM32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3H35a3 3 0 0 0-3 3Zm344-208a24 24 0 1 1-24 24 24 24 0 0 1 24-24Zm0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24Zm-80-80a24 24 0 1 1-24 24 24 24 0 0 1 24-24Zm0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24Zm0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24Zm-80-80a24 24 0 1 1-24 24 24 24 0 0 1 24-24Zm0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24Zm-80-80a24 24 0 1 1-24 24 24 24 0 0 1 24-24Zm0 80a24 24 0 1 1-24 24 24 24 0 0 1 24-24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-call-outline"><path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0 0 83 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0 0 13.8-25.8C465 391.17 468 391.17 451 374Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-call-sharp"><path d="M478.94 370.14c-5.22-5.56-23.65-22-57.53-43.75-34.13-21.94-59.3-35.62-66.52-38.81a3.83 3.83 0 0 0-3.92.49c-11.63 9.07-31.21 25.73-32.26 26.63-6.78 5.81-6.78 5.81-12.33 4-9.76-3.2-40.08-19.3-66.5-45.78s-43.35-57.55-46.55-67.3c-1.83-5.56-1.83-5.56 4-12.34.9-1.05 17.57-20.63 26.64-32.25a3.83 3.83 0 0 0 .49-3.92c-3.19-7.23-16.87-32.39-38.81-66.52-21.78-33.87-38.2-52.3-43.76-57.52a3.9 3.9 0 0 0-3.89-.87 322.35 322.35 0 0 0-56 25.45A338 338 0 0 0 33.35 92a3.83 3.83 0 0 0-1.26 3.74c2.09 9.74 12.08 50.4 43.08 106.72 31.63 57.48 53.55 86.93 100 133.22S252 405.21 309.54 436.84c56.32 31 97 41 106.72 43.07a3.86 3.86 0 0 0 3.75-1.26A337.73 337.73 0 0 0 454.35 430a322.7 322.7 0 0 0 25.45-56 3.9 3.9 0 0 0-.86-3.86Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-call"><path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0 1 28.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 0 1-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 0 1 391 480Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-camera-outline"><path d="m350.54 148.68-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h352a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="256" cy="272" r="80" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M124 158v-22h-24v22" /></symbol><symbol  viewBox="0 0 512 512" id="icon-camera-reverse-outline"><path d="m350.54 148.68-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h352a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M124 158v-22h-24v22M335.76 285.22v-13.31a80 80 0 0 0-131-61.6M176 258.78v13.31a80 80 0 0 0 130.73 61.8" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m196 272-20-20-20 20M356 272l-20 20-20-20" /></symbol><symbol  viewBox="0 0 512 512" id="icon-camera-reverse-sharp"><path d="M456 144h-83c-3 0-6.72-1.94-9.62-5l-27.31-42.79C326 80 320 80 302 80h-92c-18 0-23 0-34.07 16.21L148.62 139c-2.22 2.42-5.34 5-8.62 5v-16a8 8 0 0 0-8-8H92a8 8 0 0 0-8 8v16H56a24 24 0 0 0-24 24v240a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V168a24 24 0 0 0-24-24ZM256 368c-47.82 0-87.76-34.23-95-80h-43.63L176 229.37 234.63 288H194a64.07 64.07 0 0 0 102.63 33.49L320 343l-3.68 3.72A96.64 96.64 0 0 1 256 368Zm80-53.84L277.11 256H318a64.26 64.26 0 0 0-103-33.36L192 200l3.14-2.45A96.19 96.19 0 0 1 255.76 176c47.85 0 87 34.19 94.24 80h44.92Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-camera-reverse"><path d="M432 144h-59c-3 0-6.72-1.94-9.62-5l-25.94-40.94a15.52 15.52 0 0 0-1.37-1.85C327.11 85.76 315 80 302 80h-92c-13 0-25.11 5.76-34.07 16.21a15.52 15.52 0 0 0-1.37 1.85l-25.94 41c-2.22 2.42-5.34 5-8.62 5v-8a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v8h-4a48.05 48.05 0 0 0-48 48V384a48.05 48.05 0 0 0 48 48h352a48.05 48.05 0 0 0 48-48V192a48.05 48.05 0 0 0-48-48ZM316.84 346.3a96.06 96.06 0 0 1-155.66-59.18 16 16 0 0 1-16.49-26.43l20-20a16 16 0 0 1 22.62 0l20 20A16 16 0 0 1 196 288a17.31 17.31 0 0 1-2-.14 64.07 64.07 0 0 0 102.66 33.63 16 16 0 1 1 20.21 24.81Zm50.47-63-20 20a16 16 0 0 1-22.62 0l-20-20a16 16 0 0 1 13.09-27.2A64 64 0 0 0 215 222.64 16 16 0 1 1 194.61 198a96 96 0 0 1 156 59 16 16 0 0 1 16.72 26.35Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-camera-sharp"><circle cx="256" cy="272" r="64" /><path d="M456 144h-83c-3 0-6.72-1.94-9.62-5L336.1 96.2C325 80 320 80 302 80h-92c-18 0-24 0-34.07 16.21L148.62 139c-2.22 2.42-5.34 5-8.62 5v-16a8 8 0 0 0-8-8H92a8 8 0 0 0-8 8v16H56a24 24 0 0 0-24 24v240a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V168a24 24 0 0 0-24-24ZM260.51 367.9a96 96 0 1 1 91.39-91.39 96.11 96.11 0 0 1-91.39 91.39Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-camera"><circle cx="256" cy="272" r="64" /><path d="M432 144h-59c-3 0-6.72-1.94-9.62-5l-25.94-40.94a15.52 15.52 0 0 0-1.37-1.85C327.11 85.76 315 80 302 80h-92c-13 0-25.11 5.76-34.07 16.21a15.52 15.52 0 0 0-1.37 1.85l-25.94 41c-2.22 2.42-5.34 5-8.62 5v-8a16 16 0 0 0-16-16h-24a16 16 0 0 0-16 16v8h-4a48.05 48.05 0 0 0-48 48V384a48.05 48.05 0 0 0 48 48h352a48.05 48.05 0 0 0 48-48V192a48.05 48.05 0 0 0-48-48ZM256 368a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-car-outline"><path d="m80 224 37.78-88.15C123.93 121.5 139.6 112 157.11 112h197.78c17.51 0 33.18 9.5 39.33 23.85L432 224M80 224h352v144H80zM112 368v32H80v-32M432 368v32h-32v-32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="144" cy="288" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="368" cy="288" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-car-sharp"><path d="M447.68 220.78a16.44 16.44 0 0 0-1-3.1l-48-112A16 16 0 0 0 384 96H128a16 16 0 0 0-14.71 9.7l-48 112a16.44 16.44 0 0 0-1 3.1A16.15 16.15 0 0 0 64 224v184a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-24h288v24a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8V224a16.15 16.15 0 0 0-.32-3.22ZM144 320a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm224 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32ZM104.26 208l34.29-80h234.9l34.29 80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-car-sport-outline"><path d="M469.71 234.6c-7.33-9.73-34.56-16.43-46.08-33.94s-20.95-55.43-50.27-70S288 112 256 112s-88 4-117.36 18.63-38.75 52.52-50.27 70-38.75 24.24-46.08 33.97S29.8 305.84 32.94 336s9 48 9 48h86c14.08 0 18.66-5.29 47.46-8 31.6-3 62.6-4 80.6-4s50 1 81.58 4c28.8 2.73 33.53 8 47.46 8h85s5.86-17.84 9-48-2.04-91.67-9.33-101.4ZM400 384h56v16h-56zM56 384h56v16H56z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M364.47 309.16c-5.91-6.83-25.17-12.53-50.67-16.35S279 288 256.2 288s-33.17 1.64-57.61 4.81-42.79 8.81-50.66 16.35C136.12 320.6 153.42 333.44 167 335c13.16 1.5 39.47.95 89.31.95s76.15.55 89.31-.95c13.56-1.65 29.62-13.6 18.85-25.84ZM431.57 243.05a3.23 3.23 0 0 0-3.1-3c-11.81-.42-23.8.42-45.07 6.69a93.88 93.88 0 0 0-30.08 15.06c-2.28 1.78-1.47 6.59 1.39 7.1a455.32 455.32 0 0 0 52.82 3.1c10.59 0 21.52-3 23.55-12.44a52.41 52.41 0 0 0 .49-16.51ZM80.43 243.05a3.23 3.23 0 0 1 3.1-3c11.81-.42 23.8.42 45.07 6.69a93.88 93.88 0 0 1 30.08 15.06c2.28 1.78 1.47 6.59-1.39 7.1a455.32 455.32 0 0 1-52.82 3.1c-10.59 0-21.52-3-23.55-12.44a52.41 52.41 0 0 1-.49-16.51Z" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M432 192h16M64 192h16M78 211s46.35-12 178-12 178 12 178 12" /></symbol><symbol  viewBox="0 0 512 512" id="icon-car-sport-sharp"><path d="M488 224c-3-5-32.61-17.79-32.61-17.79 5.15-2.66 8.67-3.21 8.67-14.21 0-12-.06-16-8.06-16h-27.14c-.11-.24-.23-.49-.34-.74-17.52-38.26-19.87-47.93-46-60.95C347.47 96.88 281.76 96 256 96s-91.47.88-126.49 18.31c-26.16 13-25.51 19.69-46 60.95 0 .11-.21.4-.4.74H55.94c-7.94 0-8 4-8 16 0 11 3.52 11.55 8.67 14.21C56.61 206.21 28 220 24 224s-8 32-8 80 4 96 4 96h11.94c0 14 2.06 16 8.06 16h80c6 0 8-2 8-16h256c0 14 2 16 8 16h82c4 0 6-3 6-16h12s4-49 4-96-5-75-8-80Zm-362.74 44.94A516.94 516.94 0 0 1 70.42 272c-20.42 0-21.12 1.31-22.56-11.44a72.16 72.16 0 0 1 .51-17.51L49 240h3c12 0 23.27.51 44.55 6.78a98 98 0 0 1 30.09 15.06C131 265 132 268 132 268Zm247.16 72L368 352H144s.39-.61-5-11.18c-4-7.82 1-12.82 8.91-15.66C163.23 319.64 208 304 256 304s93.66 13.48 108.5 21.16C370 328 376.83 330 372.42 341Zm-257-136.53a96.23 96.23 0 0 1-9.7.07c2.61-4.64 4.06-9.81 6.61-15.21 8-17 17.15-36.24 33.44-44.35 23.54-11.72 72.33-17 110.23-17s86.69 5.24 110.23 17c16.29 8.11 25.4 27.36 33.44 44.35 2.57 5.45 4 10.66 6.68 15.33-2 .11-4.3 0-9.79-.19Zm347.72 56.11C461 273 463 272 441.58 272a516.94 516.94 0 0 1-54.84-3.06c-2.85-.51-3.66-5.32-1.38-7.1a93.84 93.84 0 0 1 30.09-15.06c21.28-6.27 33.26-7.11 45.09-6.69a3.22 3.22 0 0 1 3.09 3 70.18 70.18 0 0 1-.49 17.47Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-car-sport"><path d="M494.26 276.22c-3.6-40.41-9.53-48.28-11.77-51.24-5.15-6.84-13.39-11.31-22.11-16a3.6 3.6 0 0 1-.91-5.68 15.93 15.93 0 0 0 4.53-12.53A16.27 16.27 0 0 0 447.65 176h-15.6a17 17 0 0 0-2 .13 8.5 8.5 0 0 0-1.41-.47c-9.24-19.53-21.89-46.27-48.11-59.32C341.64 97 270 96 256 96s-85.64 1-124.48 20.31c-26.22 13.05-38.87 39.79-48.11 59.32l-.08.16a6.52 6.52 0 0 0-1.35.34 17 17 0 0 0-2-.13H64.35A16.27 16.27 0 0 0 48 190.77a15.93 15.93 0 0 0 4.59 12.47 3.6 3.6 0 0 1-.91 5.68c-8.72 4.72-17 9.19-22.11 16-2.24 3-8.16 10.83-11.77 51.24-2 22.74-2.3 46.28-.73 61.44 3.29 31.5 9.46 50.54 9.72 51.33a16 16 0 0 0 13.2 10.87v.2a16 16 0 0 0 16 16h56a16 16 0 0 0 16-16c8.61 0 14.6-1.54 20.95-3.18a158.83 158.83 0 0 1 28-4.91C207.45 389 237.79 388 256 388c17.84 0 49.52 1 80.08 3.91a159.16 159.16 0 0 1 28.11 4.93c6.08 1.56 11.85 3 19.84 3.15a16 16 0 0 0 16 16h56a16 16 0 0 0 16-16v-.12A16 16 0 0 0 485.27 389c.26-.79 6.43-19.83 9.72-51.33 1.57-15.17 1.29-38.67-.73-61.45Zm-381.93-86.91c8-17 17.15-36.24 33.44-44.35 23.54-11.72 72.33-17 110.23-17s86.69 5.24 110.23 17c16.29 8.11 25.4 27.36 33.44 44.35l1 2.17a8 8 0 0 1-7.44 11.42C360 202 290 199.12 256 199.12s-104 2.95-137.28 3.85a8 8 0 0 1-7.44-11.42c.35-.74.72-1.49 1.05-2.24Zm11.93 79.63A427.17 427.17 0 0 1 72.42 272c-10.6 0-21.53-3-23.56-12.44-1.39-6.35-1.24-9.92-.49-13.51C49 243 50 240.78 55 240c13-2 20.27.51 41.55 6.78 14.11 4.15 24.29 9.68 30.09 14.06 2.91 2.16 1.36 7.8-2.38 8.1Zm221.38 82c-13.16 1.5-39.48.95-89.34.95s-76.17.55-89.33-.95c-13.58-1.51-30.89-14.35-19.07-25.79 7.87-7.54 26.23-13.18 50.68-16.35s34.8-4.8 57.62-4.8 32.12 1 57.62 4.81 44.77 9.52 50.68 16.35c10.78 12.24-5.29 24.19-18.86 25.84Zm117.5-91.39c-2 9.48-13 12.44-23.56 12.44a455.91 455.91 0 0 1-52.84-3.06c-3.06-.29-4.48-5.66-1.38-8.1 5.71-4.49 16-9.91 30.09-14.06 21.28-6.27 33.55-8.78 44.09-6.69 2.57.51 3.93 3.27 4.09 5a40.64 40.64 0 0 1-.49 14.48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-car"><path d="M447.68 220.78a16 16 0 0 0-1-3.08l-37.78-88.16C400.19 109.17 379 96 354.89 96H157.11c-24.09 0-45.3 13.17-54 33.54L65.29 217.7A15.72 15.72 0 0 0 64 224v176a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-16h256v16a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V224a16.15 16.15 0 0 0-.32-3.22ZM144 320a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm224 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32ZM104.26 208l28.23-65.85C136.11 133.69 146 128 157.11 128h197.78c11.1 0 21 5.69 24.62 14.15L407.74 208Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-card-outline"><rect x="48" y="96" width="416" height="320" rx="56" ry="56" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:60px" d="M48 192h416M128 300h48v20h-48z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-card-sharp"><path d="M32 416a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V222H32Zm66-138a8 8 0 0 1 8-8h92a8 8 0 0 1 8 8v64a8 8 0 0 1-8 8h-92a8 8 0 0 1-8-8ZM464 80H48a16 16 0 0 0-16 16v66h448V96a16 16 0 0 0-16-16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-card"><path d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32Zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30ZM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-back-circle-outline"><path d="m273.77 169.57-89.09 74.13a16 16 0 0 0 0 24.6l89.09 74.13A16 16 0 0 0 300 330.14V181.86a16 16 0 0 0-26.23-12.29Z" /><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-back-circle-sharp"><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256Zm252 108.27L169.91 256 300 147.73Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-back-circle"><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256Zm252-74.14v148.28a16 16 0 0 1-26.23 12.29l-89.09-74.13a16 16 0 0 1 0-24.6l89.09-74.13A16 16 0 0 1 300 181.86Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-back-outline"><path d="M321.94 98 158.82 237.78a24 24 0 0 0 0 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-back-sharp"><path d="M368 64 144 256l224 192V64z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-back"><path d="M321.94 98 158.82 237.78a24 24 0 0 0 0 36.44L321.94 414c15.57 13.34 39.62 2.28 39.62-18.22v-279.6c0-20.5-24.05-31.56-39.62-18.18Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-down-circle-outline"><path d="m342.43 238.23-74.13 89.09a16 16 0 0 1-24.6 0l-74.13-89.09A16 16 0 0 1 181.86 212h148.28a16 16 0 0 1 12.29 26.23Z" /><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-down-circle-sharp"><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208Zm-99.73-44L256 342.09 147.73 212Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-down-circle"><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208Zm-121.57-17.77-74.13 89.09a16 16 0 0 1-24.6 0l-74.13-89.09A16 16 0 0 1 181.86 212h148.28a16 16 0 0 1 12.29 26.23Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-down-outline"><path d="m98 190.06 139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-down-sharp"><path d="m64 144 192 224 192-224H64z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-down"><path d="m98 190.06 139.78 163.12a24 24 0 0 0 36.44 0L414 190.06c13.34-15.57 2.28-39.62-18.22-39.62h-279.6c-20.5 0-31.56 24.05-18.18 39.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-forward-circle-outline"><path d="m238.23 342.43 89.09-74.13a16 16 0 0 0 0-24.6l-89.09-74.13A16 16 0 0 0 212 181.86v148.28a16 16 0 0 0 26.23 12.29Z" /><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-forward-circle-sharp"><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208ZM212 147.73 342.09 256 212 364.27Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-forward-circle"><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208Zm-252 74.14V181.86a16 16 0 0 1 26.23-12.29l89.09 74.13a16 16 0 0 1 0 24.6l-89.09 74.13A16 16 0 0 1 212 330.14Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-forward-outline"><path d="m190.06 414 163.12-139.78a24 24 0 0 0 0-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-forward-sharp"><path d="m144 448 224-192L144 64v384z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-forward"><path d="m190.06 414 163.12-139.78a24 24 0 0 0 0-36.44L190.06 98c-15.57-13.34-39.62-2.28-39.62 18.22v279.6c0 20.5 24.05 31.56 39.62 18.18Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-up-circle-outline"><path d="m342.43 273.77-74.13-89.09a16 16 0 0 0-24.6 0l-74.13 89.09A16 16 0 0 0 181.86 300h148.28a16 16 0 0 0 12.29-26.23Z" /><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-up-circle-sharp"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48ZM147.73 300 256 169.91 364.27 300Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-up-circle"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm74.14 252H181.86a16 16 0 0 1-12.29-26.23l74.13-89.09a16 16 0 0 1 24.6 0l74.13 89.09A16 16 0 0 1 330.14 300Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-up-outline"><path d="M414 321.94 274.22 158.82a24 24 0 0 0-36.44 0L98 321.94c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-up-sharp"><path d="M448 368 256 144 64 368h384z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-caret-up"><path d="M414 321.94 274.22 158.82a24 24 0 0 0-36.44 0L98 321.94c-13.34 15.57-2.28 39.62 18.22 39.62h279.6c20.5 0 31.56-24.05 18.18-39.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cart-outline"><circle cx="176" cy="416" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="400" cy="416" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M48 80h64l48 272h256" /><path d="M160 288h249.44a8 8 0 0 0 7.85-6.43l28.8-144a8 8 0 0 0-7.85-9.57H128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cart-sharp"><circle cx="176" cy="416" r="32" /><circle cx="400" cy="416" r="32" /><path d="M167.78 304h261.34l38.4-192H133.89l-8.47-48H32v32h66.58l48 272H432v-32H173.42l-5.64-32z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cart"><circle cx="176" cy="416" r="32" /><circle cx="400" cy="416" r="32" /><path d="M456.8 120.78a23.92 23.92 0 0 0-18.56-8.78H133.89l-6.13-34.78A16 16 0 0 0 112 64H48a16 16 0 0 0 0 32h50.58l45.66 258.78A16 16 0 0 0 160 368h256a16 16 0 0 0 0-32H173.42l-5.64-32h241.66A24.07 24.07 0 0 0 433 284.71l28.8-144a24 24 0 0 0-5-19.93Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cash-outline"><rect x="32" y="80" width="448" height="256" rx="16" ry="16" transform="rotate(180 256 208)" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M64 384h384M96 432h320" /><circle cx="256" cy="208" r="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M480 160a80 80 0 0 1-80-80M32 160a80 80 0 0 0 80-80M480 256a80 80 0 0 0-80 80M32 256a80 80 0 0 1 80 80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cash-sharp"><path d="M48 368h416v32H48zM80 416h352v32H80zM480 176a96.11 96.11 0 0 1-96-96V64H128v16a96.11 96.11 0 0 1-96 96H16v64h16a96.11 96.11 0 0 1 96 96v16h256v-16a96.11 96.11 0 0 1 96-96h16v-64ZM256 304a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96Z" /><path d="M96 80V64H16v80h16a64.07 64.07 0 0 0 64-64ZM32 272H16v80h80v-16a64.07 64.07 0 0 0-64-64ZM480 144h16V64h-80v16a64.07 64.07 0 0 0 64 64ZM416 336v16h80v-80h-16a64.07 64.07 0 0 0-64 64Z" /><circle cx="256" cy="208" r="64" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cash"><path d="M448 400H64a16 16 0 0 1 0-32h384a16 16 0 0 1 0 32ZM416 448H96a16 16 0 0 1 0-32h320a16 16 0 0 1 0 32ZM32 272H16v48a32 32 0 0 0 32 32h48v-16a64.07 64.07 0 0 0-64-64Z" /><path d="M480 240h16v-64h-16a96.11 96.11 0 0 1-96-96V64H128v16a96.11 96.11 0 0 1-96 96H16v64h16a96.11 96.11 0 0 1 96 96v16h256v-16a96.11 96.11 0 0 1 96-96Zm-224 64a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96Z" /><circle cx="256" cy="208" r="64" /><path d="M416 336v16h48a32 32 0 0 0 32-32v-48h-16a64.07 64.07 0 0 0-64 64ZM480 144h16V96a32 32 0 0 0-32-32h-48v16a64.07 64.07 0 0 0 64 64ZM96 80V64H48a32 32 0 0 0-32 32v48h16a64.07 64.07 0 0 0 64-64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cellular-outline"><rect x="416" y="96" width="64" height="320" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="288" y="176" width="64" height="240" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="160" y="240" width="64" height="176" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="32" y="304" width="64" height="112" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cellular-sharp"><path d="M496 432h-96V80h96ZM368 432h-96V160h96ZM240 432h-96V224h96ZM112 432H16V288h96Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cellular"><path d="M472 432h-48a24 24 0 0 1-24-24V104a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v304a24 24 0 0 1-24 24ZM344 432h-48a24 24 0 0 1-24-24V184a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v224a24 24 0 0 1-24 24ZM216 432h-48a24 24 0 0 1-24-24V248a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v160a24 24 0 0 1-24 24ZM88 432H40a24 24 0 0 1-24-24v-96a24 24 0 0 1 24-24h48a24 24 0 0 1 24 24v96a24 24 0 0 1-24 24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbox-ellipses-outline"><path d="M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><circle cx="160" cy="216" r="32" /><circle cx="256" cy="216" r="32" /><circle cx="352" cy="216" r="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbox-ellipses-sharp"><path d="M456 48H56a24 24 0 0 0-24 24v288a24 24 0 0 0 24 24h72v80l117.74-80H456a24 24 0 0 0 24-24V72a24 24 0 0 0-24-24ZM160 248a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32ZM456 80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbox-ellipses"><path d="M408 48H104a72.08 72.08 0 0 0-72 72v192a72.08 72.08 0 0 0 72 72h24v64a16 16 0 0 0 26.25 12.29L245.74 384H408a72.08 72.08 0 0 0 72-72V120a72.08 72.08 0 0 0-72-72ZM160 248a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbox-outline"><path d="M408 64H104a56.16 56.16 0 0 0-56 56v192a56.16 56.16 0 0 0 56 56h40v80l93.72-78.14a8 8 0 0 1 5.13-1.86H408a56.16 56.16 0 0 0 56-56V120a56.16 56.16 0 0 0-56-56Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbox-sharp"><path d="M128 464v-80H56a24 24 0 0 1-24-24V72a24 24 0 0 1 24-24h400a24 24 0 0 1 24 24v288a24 24 0 0 1-24 24H245.74ZM456 80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbox"><path d="M144 464a16 16 0 0 1-16-16v-64h-24a72.08 72.08 0 0 1-72-72V120a72.08 72.08 0 0 1 72-72h304a72.08 72.08 0 0 1 72 72v192a72.08 72.08 0 0 1-72 72H245.74l-91.49 76.29A16.05 16.05 0 0 1 144 464Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbubble-ellipses-outline"><path d="M87.48 380c1.2-4.38-1.43-10.47-3.94-14.86a42.63 42.63 0 0 0-2.54-3.8 199.81 199.81 0 0 1-33-110C47.64 139.09 140.72 48 255.82 48 356.2 48 440 117.54 459.57 209.85a199 199 0 0 1 4.43 41.64c0 112.41-89.49 204.93-204.59 204.93-18.31 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.14 31.14 0 0 0-11.13-2.07 30.7 30.7 0 0 0-12.08 2.43L81.5 462.78a15.92 15.92 0 0 1-4.66 1.22 9.61 9.61 0 0 1-9.58-9.74 15.85 15.85 0 0 1 .6-3.29Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><circle cx="160" cy="256" r="32" /><circle cx="256" cy="256" r="32" /><circle cx="352" cy="256" r="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbubble-ellipses-sharp"><path d="M475.22 206.52c-10.34-48.65-37.76-92.93-77.22-124.68A227.4 227.4 0 0 0 255.82 32C194.9 32 138 55.47 95.46 98.09 54.35 139.33 31.82 193.78 32 251.37a215.66 215.66 0 0 0 35.65 118.76l4.35 6.05L48 480l114.8-28.56s2.3.77 4 1.42 16.33 6.26 31.85 10.6c12.9 3.6 39.74 9 60.77 9 59.65 0 115.35-23.1 156.83-65.06C457.36 365.77 480 310.42 480 251.49a213.5 213.5 0 0 0-4.78-44.97ZM160 288a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbubble-ellipses"><path d="M398 81.84A227.4 227.4 0 0 0 255.82 32C194.9 32 138 55.47 95.46 98.09 54.35 139.33 31.82 193.78 32 251.37a215.66 215.66 0 0 0 35.65 118.76l.19.27c.28.41.57.82.86 1.22s.65.92.73 1.05l.22.4c1.13 2 2 4.44 1.23 6.9l-18.42 66.66a29.13 29.13 0 0 0-1.2 7.63A25.69 25.69 0 0 0 76.83 480a29.44 29.44 0 0 0 10.45-2.29l67.49-24.36.85-.33a14.75 14.75 0 0 1 5.8-1.15 15.12 15.12 0 0 1 5.37 1c1.62.63 16.33 6.26 31.85 10.6 12.9 3.6 39.74 9 60.77 9 59.65 0 115.35-23.1 156.83-65.06C457.36 365.77 480 310.42 480 251.49a213.5 213.5 0 0 0-4.78-45c-10.34-48.62-37.76-92.9-77.22-124.65ZM87.48 380ZM160 288a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm96 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbubble-outline"><path d="M87.49 380c1.19-4.38-1.44-10.47-3.95-14.86a44.86 44.86 0 0 0-2.54-3.8 199.81 199.81 0 0 1-33-110C47.65 139.09 140.73 48 255.83 48 356.21 48 440 117.54 459.58 209.85a199 199 0 0 1 4.42 41.64c0 112.41-89.49 204.93-204.59 204.93-18.3 0-43-4.6-56.47-8.37s-26.92-8.77-30.39-10.11a31.09 31.09 0 0 0-11.12-2.07 30.71 30.71 0 0 0-12.09 2.43l-67.83 24.48a16 16 0 0 1-4.67 1.22 9.6 9.6 0 0 1-9.57-9.74 15.85 15.85 0 0 1 .6-3.29Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbubble-sharp"><path d="M475.22 206.52c-10.34-48.65-37.76-92.93-77.22-124.68A227.4 227.4 0 0 0 255.82 32C194.9 32 138 55.47 95.46 98.09 54.35 139.33 31.82 193.78 32 251.37a215.66 215.66 0 0 0 35.65 118.76l4.35 6.05L48 480l114.8-28.56s2.3.77 4 1.42 16.33 6.26 31.85 10.6c12.9 3.6 39.74 9 60.77 9 59.65 0 115.35-23.1 156.83-65.06C457.36 365.77 480 310.42 480 251.49a213.5 213.5 0 0 0-4.78-44.97Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbubble"><path d="M76.83 480a25.69 25.69 0 0 1-25.57-25.74 29.13 29.13 0 0 1 1.2-7.63L70.88 380c.77-2.46-.1-4.94-1.23-6.9l-.22-.4c-.08-.13-.46-.66-.73-1.05s-.58-.81-.86-1.22l-.19-.27A215.66 215.66 0 0 1 32 251.37c-.18-57.59 22.35-112 63.46-153.28C138 55.47 194.9 32 255.82 32A227.4 227.4 0 0 1 398 81.84c39.45 31.75 66.87 76 77.21 124.68a213.5 213.5 0 0 1 4.78 45c0 58.93-22.64 114.28-63.76 155.87-41.48 42-97.18 65.06-156.83 65.06-21 0-47.87-5.36-60.77-9-15.52-4.34-30.23-10-31.85-10.6a15.12 15.12 0 0 0-5.37-1 14.75 14.75 0 0 0-5.8 1.15l-.85.33-67.48 24.38A29.44 29.44 0 0 1 76.83 480Zm-2-31.8ZM87.48 380Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbubbles-outline"><path d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 0 1 2.1-3.1A162 162 0 0 0 464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 0 0-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 0 1 9.3-1.7 26 26 0 0 1 10.1 2l56.7 20.1a13.52 13.52 0 0 0 3.9 1 8 8 0 0 0 8-8 12.85 12.85 0 0 0-.5-2.7Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path d="M66.46 232a146.23 146.23 0 0 0 6.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 0 0 2.71 7.68A8.17 8.17 0 0 0 72 464a7.26 7.26 0 0 0 2.91-.6l56.21-22a15.7 15.7 0 0 1 12 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 0 0 284 432.11" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbubbles-sharp"><path d="M448 312.43c.77-1.11 1.51-2.26 2.27-3.34A174.55 174.55 0 0 0 480 211.85C480.32 112.55 396.54 32 292.94 32c-90.36 0-165.74 61.49-183.4 143.12a172.81 172.81 0 0 0-4 36.83c0 99.4 80.56 182.11 184.16 182.11 16.47 0 38.66-4.95 50.83-8.29s24.23-7.75 27.35-8.94 8-2.41 11.89-1.29l77.42 22.38a4 4 0 0 0 5-4.86l-17.72-67.49c-1.23-5-1.39-5.94 3.53-13.14Z" /><path d="M312.54 415.38a165.32 165.32 0 0 1-23.26 2.05c-42.43 0-82.5-11.2-115-32.2a184.09 184.09 0 0 1-53.09-49.32c-26.08-34.57-40.3-78.51-40.3-124.49 0-3.13.11-6.14.22-9.16a4.34 4.34 0 0 0-7.54-3.12 158.76 158.76 0 0 0-14.86 195.24c2.47 3.77 3.87 6.68 3.44 8.62l-14.09 72.26a4 4 0 0 0 5.22 4.53l68-24.24a16.85 16.85 0 0 1 12.92.22c20.35 8 42.86 12.92 65.37 12.92a169.45 169.45 0 0 0 116.63-46 4.29 4.29 0 0 0-3.66-7.31Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chatbubbles"><path d="M60.44 389.17c0 .07 0 .2-.08.38.03-.12.05-.25.08-.38ZM439.9 405.6a26.77 26.77 0 0 1-9.59-2l-56.78-20.13-.42-.17a9.88 9.88 0 0 0-3.91-.76 10.32 10.32 0 0 0-3.62.66c-1.38.52-13.81 5.19-26.85 8.77-7.07 1.94-31.68 8.27-51.43 8.27-50.48 0-97.68-19.4-132.89-54.63A183.38 183.38 0 0 1 100.3 215.1a175.9 175.9 0 0 1 4.06-37.58c8.79-40.62 32.07-77.57 65.55-104A194.76 194.76 0 0 1 290.3 32c52.21 0 100.86 20 137 56.18 34.16 34.27 52.88 79.33 52.73 126.87a177.86 177.86 0 0 1-30.3 99.15l-.19.28-.74 1c-.17.23-.34.45-.5.68l-.15.27a21.63 21.63 0 0 0-1.08 2.09l15.74 55.94a26.42 26.42 0 0 1 1.12 7.11 24 24 0 0 1-24.03 24.03Z" /><path d="M299.87 425.39a15.74 15.74 0 0 0-10.29-8.1c-5.78-1.53-12.52-1.27-17.67-1.65a201.78 201.78 0 0 1-128.82-58.75A199.21 199.21 0 0 1 86.4 244.16C85 234.42 85 232 85 232a16 16 0 0 0-28-10.58s-7.88 8.58-11.6 17.19a162.09 162.09 0 0 0 11 150.06C59 393 59 395 58.42 399.5c-2.73 14.11-7.51 39-10 51.91a24 24 0 0 0 8 22.92l.46.39A24.34 24.34 0 0 0 72 480a23.42 23.42 0 0 0 9-1.79l53.51-20.65a8.05 8.05 0 0 1 5.72 0c21.07 7.84 43 12 63.78 12a176 176 0 0 0 74.91-16.66c5.46-2.56 14-5.34 19-11.12a15 15 0 0 0 1.95-16.39Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkbox-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M352 176 217.6 336 160 272" /><rect x="64" y="64" width="384" height="384" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkbox-sharp"><path d="M48 48v416h416V48Zm170 312.38-80.6-89.57 23.79-21.41 56 62.22L350 153.46 374.54 174Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkbox"><path d="M400 48H112a64.07 64.07 0 0 0-64 64v288a64.07 64.07 0 0 0 64 64h288a64.07 64.07 0 0 0 64-64V112a64.07 64.07 0 0 0-64-64Zm-35.75 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkmark-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M352 176 217.6 336 160 272" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkmark-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm-38 312.38-80.6-89.57 23.79-21.41 56 62.22L350 153.46 374.54 174Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkmark-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm108.25 138.29-134.4 160a16 16 0 0 1-12 5.71h-.27a16 16 0 0 1-11.89-5.3l-57.6-64a16 16 0 1 1 23.78-21.4l45.29 50.32 122.59-145.91a16 16 0 0 1 24.5 20.58Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkmark-done-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M368 192 256.13 320l-47.95-48M191.95 320 144 272M305.71 192l-51.55 59" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkmark-done-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm48.19 121.42 24.1 21.06-73.61 84.1-24.1-23.06ZM191.93 342.63 121.37 272 144 249.37 214.57 320Zm65 .79L185.55 272l22.64-22.62 47.16 47.21 111.13-127.17 24.1 21.06Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkmark-done-circle"><path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48Zm-16.79 192.47 51.55-59a16 16 0 0 1 24.1 21.06l-51.55 59a16 16 0 1 1-24.1-21.06Zm-38.86 90.85a16 16 0 0 1-22.62 0l-47.95-48a16 16 0 1 1 22.64-22.62l48 48a16 16 0 0 1-.07 22.62Zm176.8-128.79-111.88 128a16 16 0 0 1-11.51 5.47h-.54a16 16 0 0 1-11.32-4.69l-47.94-48a16 16 0 1 1 22.64-22.62l29.8 29.83a8 8 0 0 0 11.68-.39l95-108.66a16 16 0 0 1 24.1 21.06Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkmark-done-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M464 128 240 384l-96-96M144 384l-96-96M368 128 232 284" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkmark-done-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px" d="M465 127 241 384l-92-92M140 385l-93-93M363 127 236 273" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkmark-done"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M464 128 240 384l-96-96M144 384l-96-96M368 128 232 284" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkmark-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M416 128 192 384l-96-96" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkmark-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:44px" d="M416 128 192 384l-96-96" /></symbol><symbol  viewBox="0 0 512 512" id="icon-checkmark"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M416 128 192 384l-96-96" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-back-circle-outline"><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m296 352-96-96 96-96" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-back-circle-sharp"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm62.63 304L296 374.63 177.37 256 296 137.37 318.63 160l-96 96Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-back-circle"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm35.31 292.69a16 16 0 1 1-22.62 22.62l-96-96a16 16 0 0 1 0-22.62l96-96a16 16 0 0 1 22.62 22.62L206.63 256Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-back-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="M328 112 184 256l144 144" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-back-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" d="M328 112 184 256l144 144" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-back"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="M328 112 184 256l144 144" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-collapse-outline"><path d="m136 104 120 104 120-104M136 408l120-104 120 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></symbol><symbol  viewBox="0 0 512 512" fill="currentColor" id="icon-chevron-collapse-sharp"><path d="M102.145 108.514 256 241.855l153.855-133.341-31.437-36.273L256 178.337 133.582 72.241l-31.437 36.273zm0 294.972L256 270.145l153.855 133.341-31.437 36.273L256 333.663 133.582 439.759l-31.437-36.273z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-collapse"><path d="M117.863 88.282c-8.681 10.017-7.598 25.174 2.419 33.855l120 104c9.02 7.818 22.416 7.818 31.436 0l120-104c10.017-8.681 11.1-23.838 2.419-33.855s-23.839-11.099-33.855-2.418L256 176.241 151.718 85.864c-10.016-8.681-25.174-7.598-33.855 2.418zm0 335.436c-8.681-10.017-7.598-25.174 2.419-33.855l120-104c9.02-7.818 22.416-7.818 31.436 0l120 104c10.017 8.681 11.1 23.838 2.419 33.855s-23.839 11.099-33.855 2.418L256 335.759l-104.282 90.377c-10.016 8.681-25.174 7.598-33.855-2.418z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-down-circle-outline"><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m352 216-96 96-96-96" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-down-circle-sharp"><path d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48 48 141.13 48 256s93.13 208 208 208Zm-96-270.63 96 96 96-96L374.63 216 256 334.63 137.37 216Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-down-circle"><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208Zm-100.69-28.69-96 96a16 16 0 0 1-22.62 0l-96-96a16 16 0 0 1 22.62-22.62L256 289.37l84.69-84.68a16 16 0 0 1 22.62 22.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-down-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="m112 184 144 144 144-144" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-down-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" d="m112 184 144 144 144-144" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-down"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="m112 184 144 144 144-144" /></symbol><symbol viewBox="0 0 512 512"  id="icon-chevron-expand-outline"><path d="m136 208 120-104 120 104M136 304l120 104 120-104" stroke="currentColor" fill="none" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol viewBox="0 0 512 512"  id="icon-chevron-expand-sharp"><path d="m136 208 120-104 120 104M136 304l120 104 120-104" fill="none" stroke="currentColor" stroke-width="48" stroke-linecap="square" /></symbol><symbol viewBox="0 0 512 512"  id="icon-chevron-expand"><path d="m136 208 120-104 120 104M136 304l120 104 120-104" fill="none" stroke="currentColor" stroke-width="48" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-forward-circle-outline"><path d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m216 352 96-96-96-96" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-forward-circle-sharp"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm-40 326.63L193.37 352l96-96-96-96L216 137.37 334.63 256Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-forward-circle"><path d="M48 256c0 114.87 93.13 208 208 208s208-93.13 208-208S370.87 48 256 48 48 141.13 48 256Zm257.37 0-84.68-84.69a16 16 0 0 1 22.62-22.62l96 96a16 16 0 0 1 0 22.62l-96 96a16 16 0 0 1-22.62-22.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-forward-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="m184 112 144 144-144 144" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-forward-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" d="m184 112 144 144-144 144" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-forward"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="m184 112 144 144-144 144" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-up-circle-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m352 296-96-96-96 96" /><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-up-circle-sharp"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm96 270.63-96-96-96 96L137.37 296 256 177.37 374.63 296Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-up-circle"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm107.31 259.31a16 16 0 0 1-22.62 0L256 222.63l-84.69 84.68a16 16 0 0 1-22.62-22.62l96-96a16 16 0 0 1 22.62 0l96 96a16 16 0 0 1 0 22.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-up-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="m112 328 144-144 144 144" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-up-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:48px" d="m112 328 144-144 144 144" /></symbol><symbol  viewBox="0 0 512 512" id="icon-chevron-up"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="m112 328 144-144 144 144" /></symbol><symbol  viewBox="0 0 512 512" id="icon-clipboard-outline"><path d="M336 64h32a48 48 0 0 1 48 48v320a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V112a48 48 0 0 1 48-48h32" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="176" y="32" width="160" height="64" rx="26.13" ry="26.13" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-clipboard-sharp"><path d="M420 48h-68V28a12 12 0 0 0-12-12H172a12 12 0 0 0-12 12v20H92a12 12 0 0 0-12 12v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V60a12 12 0 0 0-12-12Zm-84.13 64H176.13V80h159.74Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-clipboard"><path d="M368 48h-11.41a8 8 0 0 1-7.44-5.08A42.18 42.18 0 0 0 309.87 16H202.13a42.18 42.18 0 0 0-39.28 26.92 8 8 0 0 1-7.44 5.08H144a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V112a64 64 0 0 0-64-64Zm-48.13 64H192.13a16 16 0 0 1 0-32h127.74a16 16 0 0 1 0 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-close-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M320 320 192 192M192 320l128-128" /></symbol><symbol  viewBox="0 0 512 512" id="icon-close-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm86.63 272L320 342.63l-64-64-64 64L169.37 320l64-64-64-64L192 169.37l64 64 64-64L342.63 192l-64 64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-close-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm75.31 260.69a16 16 0 1 1-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 0 1-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0 1 22.62-22.62L256 233.37l52.69-52.68a16 16 0 0 1 22.62 22.62L278.63 256Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-close-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M368 368 144 144M368 144 144 368" /></symbol><symbol  viewBox="0 0 512 512" id="icon-close-sharp"><path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-close"><path d="m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-circle-outline"><path d="M333.88 240.59a8 8 0 0 1-6.66-6.66C320.68 192.78 290.82 168 256 168c-32.37 0-53.93 21.22-62.48 43.58a7.92 7.92 0 0 1-6.16 5c-27.67 4.35-50.82 22.56-51.35 54.3-.52 31.53 25.51 57.11 57 57.11H326c27.5 0 50-13.72 50-44 0-27.22-22-40.41-42.12-43.4Z" /><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-circle-sharp"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm70 280H196c-33 0-60-23-60-56 0-34.21 26-53 56-56 7.28-23.9 29.5-48 64-48 36.5 0 67.55 27.23 72 72 21.49 1.12 48 14.09 48 44 0 30.28-22.5 44-50 44Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-circle"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm70 280H193.05c-31.53 0-57.56-25.58-57-57.11.53-31.74 23.68-49.95 51.35-54.3a7.92 7.92 0 0 0 6.16-5C202.07 189.22 223.63 168 256 168c33.17 0 61.85 22.49 70.14 60.21a17.75 17.75 0 0 0 13.18 13.43C357.79 246.05 376 259.21 376 284c0 30.28-22.5 44-50 44Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-done-outline"><path d="M400 240c-8.89-89.54-71-144-144-144-69 0-113.44 48.2-128 96-60 6-112 43.59-112 112 0 66 54 112 120 112h260c55 0 100-27.44 100-88 0-59.82-53-85.76-96-88Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M317 208 209.2 336 163 284.8" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-done-sharp"><path d="M414.25 225.36c-6.52-41.18-24.05-76.4-51.11-102.46A153.57 153.57 0 0 0 256 80c-35.5 0-68.24 11.69-94.68 33.8a156.42 156.42 0 0 0-45.22 63.61c-30.26 4.81-57.45 17.18-77.38 35.37C13.39 235.88 0 267.42 0 304c0 36 14.38 68.88 40.49 92.59C65.64 419.43 99.56 432 136 432h260c32.37 0 60.23-8.57 80.59-24.77C499.76 388.78 512 361.39 512 328c0-61.85-48.44-95.34-97.75-102.64Zm-204.63 135-69.22-76.7 23.76-21.44 44.62 49.46 106.29-126.2 24.47 20.61Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-done"><path d="M424.44 227.25a16 16 0 0 1-12.12-12.39c-7.68-36.68-24.45-68.15-49.18-92A153.57 153.57 0 0 0 256 80c-35.5 0-68.24 11.69-94.68 33.8a156.24 156.24 0 0 0-42 56 16 16 0 0 1-11.37 9.15c-27 5.62-51.07 17.34-69.18 33.87C13.39 235.88 0 267.42 0 304c0 36 14.38 68.88 40.49 92.59C65.64 419.43 99.56 432 136 432h260c32.37 0 60.23-8.57 80.59-24.77C499.76 388.78 512 361.39 512 328c0-57.57-42-90.58-87.56-100.75Zm-95.2-8.94-107.8 128a16 16 0 0 1-12 5.69h-.27a16 16 0 0 1-11.88-5.28l-45.9-50.87c-5.77-6.39-5.82-16.33.3-22.4a16 16 0 0 1 23.16.63l33.9 37.58 96-114a16 16 0 1 1 24.48 20.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-download-outline"><path d="M320 336h76c55 0 100-21.21 100-75.6s-53-73.47-96-75.6C391.11 99.74 329 48 256 48c-69 0-113.44 45.79-128 91.2-60 5.7-112 35.88-112 98.4S70 336 136 336h56M192 400.1l64 63.9 64-63.9M256 224v224.03" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-download-sharp"><path d="M472.7 189.5c-15.76-10-36.21-16.79-58.59-19.54-6.65-39.1-24.22-72.52-51.27-97.26C334.15 46.45 296.21 32 256 32c-35.35 0-68 11.08-94.37 32a149.7 149.7 0 0 0-45.29 60.42c-30.67 4.32-57 14.61-76.71 30C13.7 174.83 0 203.56 0 237.6 0 305 55.92 352 136 352h104V208h32v144h124c72.64 0 116-34.24 116-91.6 0-30.05-13.59-54.57-39.3-70.9ZM240 419.42 191.98 371l-22.61 23L256 480l86.63-86-22.61-23L272 419.42V352h-32v67.42z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-download"><path d="M472.7 189.5c-13.26-8.43-29.83-14.56-48.08-17.93A16 16 0 0 1 412 159.28c-7.86-34.51-24.6-64.13-49.15-86.58C334.15 46.45 296.21 32 256 32c-35.35 0-68 11.08-94.37 32a150.13 150.13 0 0 0-41.95 52.83A16.05 16.05 0 0 1 108 125.8c-27.13 4.9-50.53 14.68-68.41 28.7C13.7 174.83 0 203.56 0 237.6 0 305 55.93 352 136 352h104V224.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 224v128h124c72.64 0 116-34.24 116-91.6 0-30.05-13.59-54.57-39.3-70.9ZM240 425.42l-36.7-36.64a16 16 0 0 0-22.6 22.65l64 63.89a16 16 0 0 0 22.6 0l64-63.89a16 16 0 0 0-22.6-22.65L272 425.42V352h-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-offline-outline"><path d="M93.72 183.25C49.49 198.05 16 233.1 16 288c0 66 54 112 120 112h184.37M467.82 377.74C485.24 363.3 496 341.61 496 312c0-59.82-53-85.76-96-88-8.89-89.54-71-144-144-144-26.16 0-48.79 6.93-67.6 18.14" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M448 448 64 64" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-offline-sharp"><path d="m41.37 64 22.628-22.628L470.627 448l-22.628 22.627zM38.72 212.78C13.39 235.88 0 267.42 0 304c0 36 14.38 68.88 40.49 92.59C65.64 419.43 99.56 432 136 432h228.12L110.51 178.39c-28.01 5.39-53.09 17.33-71.79 34.39ZM476.59 407.23C499.76 388.78 512 361.39 512 328c0-61.85-48.44-95.34-97.75-102.64-6.52-41.18-24.05-76.4-51.11-102.46A153.57 153.57 0 0 0 256 80c-30.47 0-58.9 8.62-83.07 25l302.82 302.86c.25-.21.57-.41.84-.63Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-offline"><path d="M448 464a15.92 15.92 0 0 1-11.31-4.69l-384-384a16 16 0 0 1 22.62-22.62l384 384A16 16 0 0 1 448 464ZM38.72 196.78C13.39 219.88 0 251.42 0 288c0 36 14.38 68.88 40.49 92.59C65.64 403.43 99.56 416 136 416h192.8a8 8 0 0 0 5.66-13.66L100.88 168.76a8 8 0 0 0-8-2C72 173.15 53.4 183.38 38.72 196.78ZM476.59 391.23C499.76 372.78 512 345.39 512 312c0-57.57-42-90.58-87.56-100.75a16 16 0 0 1-12.12-12.39c-7.68-36.68-24.45-68.15-49.18-92A153.57 153.57 0 0 0 256 64c-31.12 0-60.12 9-84.62 26.1a8 8 0 0 0-1.14 12.26L461.68 393.8a8 8 0 0 0 10.2.93q2.43-1.68 4.71-3.5Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-outline"><path d="M400 240c-8.89-89.54-71-144-144-144-69 0-113.44 48.2-128 96-60 6-112 43.59-112 112 0 66 54 112 120 112h260c55 0 100-27.44 100-88 0-59.82-53-85.76-96-88Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-sharp"><path d="M396 432H136c-36.44 0-70.36-12.57-95.51-35.41C14.38 372.88 0 340 0 304c0-36.58 13.39-68.12 38.72-91.22 19.93-18.19 47.12-30.56 77.38-35.37a156.42 156.42 0 0 1 45.22-63.61C187.76 91.69 220.5 80 256 80a153.57 153.57 0 0 1 107.14 42.9c27.06 26.06 44.59 61.28 51.11 102.46C463.56 232.66 512 266.15 512 328c0 33.39-12.24 60.78-35.41 79.23C456.23 423.43 428.37 432 396 432Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-upload-outline"><path d="M320 367.79h76c55 0 100-29.21 100-83.6s-53-81.47-96-83.6c-8.89-85.06-71-136.8-144-136.8-69 0-113.44 45.79-128 91.2-60 5.7-112 43.88-112 106.4s54 106.4 120 106.4h56" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m320 255.79-64-64-64 64M256 448.21V207.79" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-upload-sharp"><path d="M473.66 210c-16.56-12.3-37.7-20.75-59.52-24-6.62-39.18-24.21-72.67-51.3-97.45-28.69-26.3-66.63-40.76-106.84-40.76-35.35 0-68 11.08-94.37 32.05a149.61 149.61 0 0 0-45.32 60.49c-29.94 4.6-57.12 16.68-77.39 34.55C13.46 197.33 0 227.24 0 261.39c0 34.52 14.49 66 40.79 88.76 25.12 21.69 58.94 33.64 95.21 33.64h104V230.42l-48 48-22.63-22.63L256 169.17l86.63 86.62L320 278.42l-48-48v153.37h124c31.34 0 59.91-8.8 80.45-24.77 23.26-18.1 35.55-44 35.55-74.83 0-29.94-13.26-55.61-38.34-74.19ZM240 383.79h32v80.41h-32z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud-upload"><path d="M473.66 210c-14-10.38-31.2-18-49.36-22.11a16.11 16.11 0 0 1-12.19-12.22c-7.8-34.75-24.59-64.55-49.27-87.13C334.15 62.25 296.21 47.79 256 47.79c-35.35 0-68 11.08-94.37 32.05a150.07 150.07 0 0 0-42.06 53 16 16 0 0 1-11.31 8.87c-26.75 5.4-50.9 16.87-69.34 33.12C13.46 197.33 0 227.24 0 261.39c0 34.52 14.49 66 40.79 88.76 25.12 21.69 58.94 33.64 95.21 33.64h104V230.42l-36.69 36.69a16 16 0 0 1-23.16-.56c-5.8-6.37-5.24-16.3.85-22.39l63.69-63.68a16 16 0 0 1 22.62 0L331 244.14c6.28 6.29 6.64 16.6.39 22.91a16 16 0 0 1-22.68.06L272 230.42v153.37h124c31.34 0 59.91-8.8 80.45-24.77 23.26-18.1 35.55-44 35.55-74.83 0-29.94-13.26-55.61-38.34-74.19ZM240 448.21a16 16 0 1 0 32 0v-64.42h-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloud"><path d="M396 432H136c-36.44 0-70.36-12.57-95.51-35.41C14.38 372.88 0 340 0 304c0-36.58 13.39-68.12 38.72-91.22 18.11-16.53 42.22-28.25 69.18-33.87a16 16 0 0 0 11.37-9.15 156.24 156.24 0 0 1 42.05-56C187.76 91.69 220.5 80 256 80a153.57 153.57 0 0 1 107.14 42.9c24.73 23.81 41.5 55.28 49.18 92a16 16 0 0 0 12.12 12.39C470 237.42 512 270.43 512 328c0 33.39-12.24 60.78-35.41 79.23C456.23 423.43 428.37 432 396 432Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloudy-night-outline"><path d="M388.31 272c47.75 0 89.77-27.77 107.69-68.92-14.21 6.18-30.9 8.61-47.38 8.61A116.31 116.31 0 0 1 332.31 95.38c0-16.48 2.43-33.17 8.61-47.38C299.77 65.92 272 107.94 272 155.69a116.31 116.31 0 0 0 3.44 28.18" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M90.61 306.85A16.07 16.07 0 0 0 104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0 0 12.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloudy-night-sharp"><path d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-29.44 12.09-54.25 35-71.74 14.55-11.13 33.41-18.87 53.2-22 6.06-36.92 21.92-68.53 46.29-92A139.82 139.82 0 0 1 232 160c32.33 0 62.15 10.65 86.24 30.79a142.41 142.41 0 0 1 40.83 57.05c27.18 4.48 51.59 15.68 69.56 32.08C451.77 301 464 329.82 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28ZM381.55 219.93c26.5 6.93 50 19.32 68.65 36.34q3.89 3.56 7.47 7.34c25.41-18.4 45.47-44.92 54.33-71.38-16.24 7.07-35.31 9.85-54.15 9.85-73.42 0-115.93-42.51-115.93-115.93 0-18.84 2.78-37.91 9.85-54.15-40.41 13.53-81 53.19-92.52 98.13a162.61 162.61 0 0 1 79.52 36.12 173 173 0 0 1 42.78 53.68Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloudy-night"><path d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-29.44 12.09-54.25 35-71.74 12.1-9.26 27.2-16.17 43.33-20.05a16 16 0 0 0 11.81-12.21c7.15-32.54 22.25-60.49 44.33-81.75A139.82 139.82 0 0 1 232 160c32.33 0 62.15 10.65 86.24 30.79a142.22 142.22 0 0 1 37.65 49.54 16.06 16.06 0 0 0 11.12 9c24 5.22 45.42 15.78 61.62 30.56C451.77 301 464 329.82 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28ZM510.53 209.79a16.34 16.34 0 0 0-1.35-15.8 16 16 0 0 0-19.57-5.58c-10.7 4.65-24.48 7.17-39.92 7.28-55.3.4-101.38-45-101.38-100.31 0-15.75 2.48-29.84 7.18-40.76a16.3 16.3 0 0 0-1.85-16.33 16 16 0 0 0-19.1-5c-38.63 16.82-66.18 51.51-75.27 92.54a4 4 0 0 0 3.19 4.79 162.54 162.54 0 0 1 76.31 35.59 172.58 172.58 0 0 1 39.64 47.84 16.35 16.35 0 0 0 9.54 7.64c23.89 7.17 45.1 18.9 62.25 34.54q4.44 4.07 8.48 8.42a4 4 0 0 0 5.16.57 129.12 129.12 0 0 0 46.69-55.43Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloudy-outline"><path d="M100.18 241.19a15.93 15.93 0 0 0 13.37-13.25C126.6 145.59 186.34 96 256 96c64.69 0 107.79 42.36 124.92 87a16.11 16.11 0 0 0 12.53 10.18C449.36 202.06 496 239.21 496 304c0 66-54 112-120 112H116c-55 0-100-27.44-100-88 0-54.43 43.89-80.81 84.18-86.81Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloudy-sharp"><path d="M376 432H116c-32.37 0-60.23-8.57-80.59-24.77C12.24 388.78 0 361.39 0 328c0-61.85 48.44-95.34 97.75-102.64 6.52-41.18 24-76.4 51.11-102.46A153.57 153.57 0 0 1 256 80c35.5 0 68.24 11.69 94.68 33.8a156.42 156.42 0 0 1 45.22 63.61c30.26 4.81 57.45 17.18 77.38 35.36C498.61 235.88 512 267.42 512 304c0 36-14.38 68.88-40.49 92.59C446.36 419.43 412.44 432 376 432Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cloudy"><path d="M376 432H116c-32.37 0-60.23-8.57-80.59-24.77C12.24 388.78 0 361.39 0 328c0-57.57 42-90.58 87.56-100.75a16 16 0 0 0 12.12-12.39c7.68-36.68 24.45-68.15 49.18-92A153.57 153.57 0 0 1 256 80c35.5 0 68.24 11.69 94.68 33.8a156.24 156.24 0 0 1 42.05 56 16 16 0 0 0 11.37 9.16c27 5.61 51.07 17.33 69.18 33.85C498.61 235.88 512 267.42 512 304c0 36-14.38 68.88-40.49 92.59C446.36 419.43 412.44 432 376 432Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-code-download-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M160 368 32 256l128-112M352 368l128-112-128-112M192 288.1l64 63.9 64-63.9M256 160v176.03" /></symbol><symbol  viewBox="0 0 512 512" id="icon-code-download-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px" d="M160 368 32 256l128-112M352 368l128-112-128-112M192 288.1l64 63.9 64-63.9M256 160v176.03" /></symbol><symbol  viewBox="0 0 512 512" id="icon-code-download"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px" d="M160 368 32 256l128-112M352 368l128-112-128-112M192 288.1l64 63.9 64-63.9M256 160v176.03" /></symbol><symbol  viewBox="0 0 512 512" id="icon-code-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M160 368 32 256l128-112M352 368l128-112-128-112" /></symbol><symbol  viewBox="0 0 512 512" id="icon-code-sharp"><path d="M161.98 397.63 0 256l161.98-141.63 27.65 31.61L64 256l125.63 110.02-27.65 31.61zM350.02 397.63l-27.65-31.61L448 256 322.37 145.98l27.65-31.61L512 256 350.02 397.63z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-code-slash-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M160 368 32 256l128-112M352 368l128-112-128-112M304 96l-96 320" /></symbol><symbol  viewBox="0 0 512 512" id="icon-code-slash-sharp"><path d="M161.98 397.63 0 256l161.98-141.63 27.65 31.61L64 256l125.63 110.02-27.65 31.61zM350.02 397.63l-27.65-31.61L448 256 322.37 145.98l27.65-31.61L512 256 350.02 397.63zM222.15 442 182 430.08 289.85 70 330 81.92 222.15 442z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-code-slash"><path d="M160 389a20.91 20.91 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389ZM352 389a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.89 20.89 0 0 1 352 389ZM208 437a21 21 0 0 1-20.12-27l96-320a21 21 0 1 1 40.23 12l-96 320A21 21 0 0 1 208 437Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-code-working-outline"><circle cx="256" cy="256" r="26" /><circle cx="346" cy="256" r="26" /><circle cx="166" cy="256" r="26" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M160 368 32 256l128-112M352 368l128-112-128-112" /></symbol><symbol  viewBox="0 0 512 512" id="icon-code-working-sharp"><circle cx="256" cy="256" r="26" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:10px" /><circle cx="346" cy="256" r="26" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:10px" /><circle cx="166" cy="256" r="26" style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:10px" /><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:42px" d="M160 368 32 256l128-112M352 368l128-112-128-112" /></symbol><symbol  viewBox="0 0 512 512" id="icon-code-working"><circle cx="256" cy="256" r="26" style="stroke:#000;stroke-miterlimit:10;stroke-width:10px" /><circle cx="346" cy="256" r="26" style="stroke:#000;stroke-miterlimit:10;stroke-width:10px" /><circle cx="166" cy="256" r="26" style="stroke:#000;stroke-miterlimit:10;stroke-width:10px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:42px" d="M160 368 32 256l128-112M352 368l128-112-128-112" /></symbol><symbol  viewBox="0 0 512 512" id="icon-code"><path d="M160 389a20.91 20.91 0 0 1-13.82-5.2l-128-112a21 21 0 0 1 0-31.6l128-112a21 21 0 0 1 27.66 31.61L63.89 256l109.94 96.19A21 21 0 0 1 160 389ZM352 389a21 21 0 0 1-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0 1 27.66-31.61l128 112a21 21 0 0 1 0 31.6l-128 112A20.89 20.89 0 0 1 352 389Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cog-outline"><path d="m456.7 242.27-26.08-4.2a8 8 0 0 1-6.6-6.82c-.5-3.2-1-6.41-1.7-9.51a8.08 8.08 0 0 1 3.9-8.62l23.09-12.82a8.05 8.05 0 0 0 3.9-9.92l-4-11a7.94 7.94 0 0 0-9.4-5l-25.89 5a8 8 0 0 1-8.59-4.11q-2.25-4.2-4.8-8.41a8.16 8.16 0 0 1 .7-9.52l17.29-19.94a8 8 0 0 0 .3-10.62l-7.49-9a7.88 7.88 0 0 0-10.5-1.51l-22.69 13.63a8 8 0 0 1-9.39-.9c-2.4-2.11-4.9-4.21-7.4-6.22a8 8 0 0 1-2.5-9.11l9.4-24.75A8 8 0 0 0 365 78.77l-10.2-5.91a8 8 0 0 0-10.39 2.21l-16.64 20.84a7.15 7.15 0 0 1-8.5 2.5s-5.6-2.3-9.8-3.71A8 8 0 0 1 304 87l.4-26.45a8.07 8.07 0 0 0-6.6-8.42l-11.59-2a8.07 8.07 0 0 0-9.1 5.61l-8.6 25.05a8 8 0 0 1-7.79 5.41h-9.8a8.07 8.07 0 0 1-7.79-5.41l-8.6-25.05a8.07 8.07 0 0 0-9.1-5.61l-11.59 2a8.07 8.07 0 0 0-6.6 8.42l.4 26.45a8 8 0 0 1-5.49 7.71c-2.3.9-7.3 2.81-9.7 3.71-2.8 1-6.1.2-8.8-2.91l-16.51-20.34A8 8 0 0 0 156.75 73l-10.2 5.91a7.94 7.94 0 0 0-3.3 10.09l9.4 24.75a8.06 8.06 0 0 1-2.5 9.11c-2.5 2-5 4.11-7.4 6.22a8 8 0 0 1-9.39.9L111 116.14a8 8 0 0 0-10.5 1.51l-7.49 9a8 8 0 0 0 .3 10.62l17.29 19.94a8 8 0 0 1 .7 9.52q-2.55 4-4.8 8.41a8.11 8.11 0 0 1-8.59 4.11l-25.89-5a8 8 0 0 0-9.4 5l-4 11a8.05 8.05 0 0 0 3.9 9.92L85.58 213a7.94 7.94 0 0 1 3.9 8.62c-.6 3.2-1.2 6.31-1.7 9.51a8.08 8.08 0 0 1-6.6 6.82l-26.08 4.2a8.09 8.09 0 0 0-7.1 7.92v11.72a7.86 7.86 0 0 0 7.1 7.92l26.08 4.2a8 8 0 0 1 6.6 6.82c.5 3.2 1 6.41 1.7 9.51a8.08 8.08 0 0 1-3.9 8.62L62.49 311.7a8.05 8.05 0 0 0-3.9 9.92l4 11a7.94 7.94 0 0 0 9.4 5l25.89-5a8 8 0 0 1 8.59 4.11q2.25 4.2 4.8 8.41a8.16 8.16 0 0 1-.7 9.52l-17.29 19.96a8 8 0 0 0-.3 10.62l7.49 9a7.88 7.88 0 0 0 10.5 1.51l22.69-13.63a8 8 0 0 1 9.39.9c2.4 2.11 4.9 4.21 7.4 6.22a8 8 0 0 1 2.5 9.11l-9.4 24.75a8 8 0 0 0 3.3 10.12l10.2 5.91a8 8 0 0 0 10.39-2.21l16.79-20.64c2.1-2.6 5.5-3.7 8.2-2.6 3.4 1.4 5.7 2.2 9.9 3.61a8 8 0 0 1 5.49 7.71l-.4 26.45a8.07 8.07 0 0 0 6.6 8.42l11.59 2a8.07 8.07 0 0 0 9.1-5.61l8.6-25a8 8 0 0 1 7.79-5.41h9.8a8.07 8.07 0 0 1 7.79 5.41l8.6 25a8.07 8.07 0 0 0 9.1 5.61l11.59-2a8.07 8.07 0 0 0 6.6-8.42l-.4-26.45a8 8 0 0 1 5.49-7.71c4.2-1.41 7-2.51 9.6-3.51s5.8-1 8.3 2.1l17 20.94A8 8 0 0 0 355 439l10.2-5.91a7.93 7.93 0 0 0 3.3-10.12l-9.4-24.75a8.08 8.08 0 0 1 2.5-9.12c2.5-2 5-4.1 7.4-6.21a8 8 0 0 1 9.39-.9L401 395.66a8 8 0 0 0 10.5-1.51l7.49-9a8 8 0 0 0-.3-10.62l-17.29-19.94a8 8 0 0 1-.7-9.52q2.55-4.05 4.8-8.41a8.11 8.11 0 0 1 8.59-4.11l25.89 5a8 8 0 0 0 9.4-5l4-11a8.05 8.05 0 0 0-3.9-9.92l-23.09-12.82a7.94 7.94 0 0 1-3.9-8.62c.6-3.2 1.2-6.31 1.7-9.51a8.08 8.08 0 0 1 6.6-6.82l26.08-4.2a8.09 8.09 0 0 0 7.1-7.92V250a8.25 8.25 0 0 0-7.27-7.73ZM256 112a143.82 143.82 0 0 1 139.38 108.12A16 16 0 0 1 379.85 240H274.61a16 16 0 0 1-13.91-8.09l-52.1-91.71a16 16 0 0 1 9.85-23.39A146.94 146.94 0 0 1 256 112ZM112 256a144 144 0 0 1 43.65-103.41 16 16 0 0 1 25.17 3.47L233.06 248a16 16 0 0 1 0 15.87l-52.67 91.7a16 16 0 0 1-25.18 3.36A143.94 143.94 0 0 1 112 256Zm144 144a146.9 146.9 0 0 1-38.19-4.95 16 16 0 0 1-9.76-23.44l52.58-91.55a16 16 0 0 1 13.88-8H379.9a16 16 0 0 1 15.52 19.88A143.84 143.84 0 0 1 256 400Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cog-sharp"><path d="M464 249.93a10.58 10.58 0 0 0-9.36-9.94L429 235.84a5.42 5.42 0 0 1-4.5-4.67c-.49-3.15-1-6.42-1.7-9.52a5.52 5.52 0 0 1 2.63-5.85l22.78-12.65a10.35 10.35 0 0 0 5-12.83l-3.95-10.9a10.32 10.32 0 0 0-12.13-6.51l-25.55 5a5.5 5.5 0 0 1-5.82-2.81c-1.49-2.79-3.11-5.63-4.8-8.42a5.6 5.6 0 0 1 .44-6.5l17-19.63a10.44 10.44 0 0 0 .39-13.77l-7.42-8.91a10.24 10.24 0 0 0-13.58-2l-22.37 13.43a5.39 5.39 0 0 1-6.39-.63c-2.47-2.17-4.95-4.26-7.37-6.19a5.45 5.45 0 0 1-1.72-6.21l9.26-24.4a10.35 10.35 0 0 0-4.31-13.07l-10.08-5.85a10.31 10.31 0 0 0-13.46 2.83L325 96.28a4.58 4.58 0 0 1-5.6 1.72c-.62-.25-5.77-2.36-9.78-3.7a5.42 5.42 0 0 1-3.74-5.23l.39-26.07a10.48 10.48 0 0 0-8.57-10.88l-11.45-2a10.45 10.45 0 0 0-11.75 7.17L266 82.1a5.42 5.42 0 0 1-5.36 3.65h-9.75a5.53 5.53 0 0 1-5.3-3.67l-8.46-24.67a10.46 10.46 0 0 0-11.77-7.25l-11.46 2a10.46 10.46 0 0 0-8.57 10.79l.4 26.16a5.45 5.45 0 0 1-3.86 5.25c-2.28.89-7.26 2.78-9.51 3.63-2 .72-4.19-.07-6-2.1l-16.26-20A10.3 10.3 0 0 0 156.69 73l-10.06 5.83A10.36 10.36 0 0 0 142.31 92l9.25 24.34a5.54 5.54 0 0 1-1.7 6.23c-2.43 2-4.92 4-7.4 6.22a5.38 5.38 0 0 1-6.35.64L114 115.74a10.39 10.39 0 0 0-13.61 2l-7.4 8.9a10.32 10.32 0 0 0 .37 13.76l17.09 19.6a5.42 5.42 0 0 1 .45 6.45c-1.71 2.72-3.34 5.58-4.82 8.44a5.53 5.53 0 0 1-5.86 2.82l-25.51-4.93a10.34 10.34 0 0 0-12.14 6.51l-4 10.88a10.37 10.37 0 0 0 5 12.85l22.78 12.65a5.39 5.39 0 0 1 2.65 5.92l-.23 1.24c-.53 2.8-1 5.45-1.47 8.27a5.48 5.48 0 0 1-4.46 4.64l-25.7 4.15A10.42 10.42 0 0 0 48 250.16v11.58A10.26 10.26 0 0 0 57.16 272l25.68 4.14a5.41 5.41 0 0 1 4.5 4.67c.49 3.16 1 6.42 1.7 9.52a5.52 5.52 0 0 1-2.63 5.85l-22.77 12.67a10.35 10.35 0 0 0-5 12.83l4 10.9a10.33 10.33 0 0 0 12.13 6.51l25.55-4.95a5.5 5.5 0 0 1 5.82 2.81c1.5 2.8 3.12 5.64 4.8 8.42a5.58 5.58 0 0 1-.44 6.5l-17 19.64a10.41 10.41 0 0 0-.5 13.76l7.41 8.91a10.24 10.24 0 0 0 13.58 2l22.37-13.43a5.39 5.39 0 0 1 6.39.63c2.48 2.17 5 4.26 7.37 6.19a5.45 5.45 0 0 1 1.72 6.21l-9.26 24.4a10.35 10.35 0 0 0 4.31 13.07l10.11 5.84a10.3 10.3 0 0 0 13.45-2.82L187 415.92c1.39-1.73 3.6-2.5 5.24-1.84 3.47 1.44 5.8 2.25 9.93 3.63a5.44 5.44 0 0 1 3.75 5.23l-.4 26.05a10.5 10.5 0 0 0 8.57 10.88l11.45 2a10.44 10.44 0 0 0 11.75-7.17l8.5-24.77a5.48 5.48 0 0 1 5.36-3.65h9.75a5.52 5.52 0 0 1 5.3 3.67l8.47 24.67a10.48 10.48 0 0 0 10 7.41 9.74 9.74 0 0 0 1.78-.16l11.47-2a10.46 10.46 0 0 0 8.56-10.79l-.4-26.16a5.43 5.43 0 0 1 3.75-5.2c3.84-1.29 6.53-2.33 8.91-3.24l.6-.24c3.06-1.06 4.53.14 5.47 1.31l16.75 20.63A10.3 10.3 0 0 0 355 439l10.07-5.83a10.35 10.35 0 0 0 4.31-13.1l-9.24-24.34a5.52 5.52 0 0 1 1.69-6.23c2.43-2 4.92-4 7.4-6.22a5.39 5.39 0 0 1 6.38-.62l22.39 13.4a10.39 10.39 0 0 0 13.61-2l7.4-8.9a10.31 10.31 0 0 0-.37-13.75l-17.06-19.67a5.42 5.42 0 0 1-.45-6.45c1.71-2.71 3.34-5.57 4.82-8.44a5.56 5.56 0 0 1 5.86-2.82l25.48 4.97a10.34 10.34 0 0 0 12.14-6.51l3.95-10.88a10.36 10.36 0 0 0-5-12.84l-22.8-12.67a5.4 5.4 0 0 1-2.61-5.89l.23-1.25c.53-2.8 1-5.44 1.47-8.26a5.48 5.48 0 0 1 4.46-4.64l25.7-4.14a10.43 10.43 0 0 0 9.17-10.28v-11.71ZM171.59 361.27a135.12 135.12 0 0 1 .5-210.94l60 105.61ZM256 391.11a133.75 133.75 0 0 1-48.49-9.05L268 276.79h121.22C379.21 341.45 323.29 391.11 256 391.11Zm12.06-155.9-59.95-105.5a133.87 133.87 0 0 1 47.89-8.82c67.29 0 123.21 49.66 133.22 114.32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cog"><path d="M464 249.93a10.58 10.58 0 0 0-9.36-9.94L429 235.84a5.42 5.42 0 0 1-4.5-4.67c-.49-3.15-1-6.42-1.7-9.52a5.52 5.52 0 0 1 2.63-5.85l22.78-12.65a10.35 10.35 0 0 0 5-12.83l-3.95-10.9a10.32 10.32 0 0 0-12.13-6.51l-25.55 5a5.51 5.51 0 0 1-5.82-2.81c-1.49-2.79-3.11-5.63-4.8-8.42a5.6 5.6 0 0 1 .44-6.5l17-19.64a10.42 10.42 0 0 0 .39-13.76l-7.42-8.91a10.24 10.24 0 0 0-13.58-2l-22.37 13.43a5.39 5.39 0 0 1-6.39-.63c-2.47-2.17-5-4.26-7.37-6.19a5.45 5.45 0 0 1-1.72-6.21l9.26-24.4a10.35 10.35 0 0 0-4.31-13.07l-10.09-5.89a10.3 10.3 0 0 0-13.45 2.83L325 96.28a4.6 4.6 0 0 1-5.6 1.72c-.61-.25-5.77-2.36-9.78-3.7a5.42 5.42 0 0 1-3.74-5.23l.39-26.07a10.48 10.48 0 0 0-8.57-10.88l-11.45-2a10.45 10.45 0 0 0-11.75 7.17L266 82.1a5.46 5.46 0 0 1-5.36 3.65h-9.75a5.5 5.5 0 0 1-5.3-3.67l-8.46-24.67a10.46 10.46 0 0 0-11.77-7.25l-11.47 2a10.46 10.46 0 0 0-8.56 10.79l.4 26.16a5.45 5.45 0 0 1-3.86 5.25c-2.29.89-7.26 2.79-9.52 3.63-2 .72-4.18-.07-5.94-2.1l-16.26-20A10.3 10.3 0 0 0 156.69 73l-10.06 5.83A10.36 10.36 0 0 0 142.31 92l9.25 24.34a5.54 5.54 0 0 1-1.7 6.23c-2.43 2-4.92 4-7.4 6.22a5.38 5.38 0 0 1-6.35.64L114 115.74a10.4 10.4 0 0 0-13.61 2L93 126.63a10.31 10.31 0 0 0 .37 13.75L110.45 160a5.42 5.42 0 0 1 .45 6.45c-1.71 2.72-3.34 5.58-4.82 8.44a5.53 5.53 0 0 1-5.86 2.82l-25.51-4.93a10.34 10.34 0 0 0-12.14 6.51l-4 10.88a10.38 10.38 0 0 0 5 12.85l22.78 12.65a5.39 5.39 0 0 1 2.65 5.92l-.24 1.27c-.52 2.79-1 5.43-1.46 8.24a5.48 5.48 0 0 1-4.46 4.64l-25.69 4.15A10.42 10.42 0 0 0 48 250.16v11.58A10.26 10.26 0 0 0 57.16 272l25.68 4.14a5.41 5.41 0 0 1 4.5 4.67c.49 3.16 1 6.42 1.7 9.52a5.52 5.52 0 0 1-2.63 5.85l-22.77 12.67a10.35 10.35 0 0 0-5 12.83l4 10.9a10.33 10.33 0 0 0 12.13 6.51l25.55-4.95a5.49 5.49 0 0 1 5.82 2.81c1.5 2.8 3.11 5.63 4.8 8.42a5.58 5.58 0 0 1-.44 6.5l-17 19.63a10.41 10.41 0 0 0-.5 13.77l7.41 8.91a10.23 10.23 0 0 0 13.58 2l22.37-13.43a5.39 5.39 0 0 1 6.39.63c2.48 2.17 5 4.26 7.37 6.19a5.47 5.47 0 0 1 1.73 6.21l-9.27 24.4a10.35 10.35 0 0 0 4.31 13.07l10.11 5.84a10.3 10.3 0 0 0 13.45-2.82L187 415.92c1.4-1.73 3.6-2.5 5.23-1.84 3.48 1.44 5.81 2.25 9.94 3.63a5.44 5.44 0 0 1 3.75 5.23l-.4 26.05a10.5 10.5 0 0 0 8.57 10.88l11.45 2a10.43 10.43 0 0 0 11.75-7.17l8.5-24.77a5.45 5.45 0 0 1 5.36-3.65h9.75a5.49 5.49 0 0 1 5.3 3.67l8.47 24.67a10.48 10.48 0 0 0 10 7.41 9.74 9.74 0 0 0 1.78-.16l11.47-2a10.46 10.46 0 0 0 8.56-10.79l-.4-26.16a5.43 5.43 0 0 1 3.75-5.2c3.84-1.29 6.54-2.33 8.91-3.25l.6-.23c3.1-1.07 4.6.23 5.47 1.31l16.75 20.63A10.3 10.3 0 0 0 355 439l10.07-5.83a10.35 10.35 0 0 0 4.31-13.1l-9.24-24.34a5.52 5.52 0 0 1 1.69-6.23c2.43-2 4.92-4 7.4-6.22a5.39 5.39 0 0 1 6.38-.62l22.39 13.4a10.39 10.39 0 0 0 13.61-2l7.4-8.9a10.31 10.31 0 0 0-.37-13.75l-17.06-19.67a5.42 5.42 0 0 1-.45-6.45c1.71-2.71 3.34-5.57 4.82-8.44a5.55 5.55 0 0 1 5.86-2.82l25.48 4.97a10.34 10.34 0 0 0 12.14-6.51l3.95-10.88a10.37 10.37 0 0 0-5-12.84l-22.8-12.67a5.4 5.4 0 0 1-2.61-5.89l.24-1.27c.52-2.79 1-5.43 1.46-8.24a5.48 5.48 0 0 1 4.46-4.64l25.69-4.14a10.43 10.43 0 0 0 9.18-10.28v-11.71Zm-282.45 94a15.8 15.8 0 0 1-25.47 2.66 135.06 135.06 0 0 1 .42-181.65 15.81 15.81 0 0 1 25.5 2.77l45.65 80.35a15.85 15.85 0 0 1 0 15.74ZM256 391.11a134.75 134.75 0 0 1-28.31-3 15.81 15.81 0 0 1-10.23-23.36l46-80a15.79 15.79 0 0 1 13.7-7.93h92.14a15.8 15.8 0 0 1 15.1 20.53c-17.49 54.32-68.4 93.76-128.4 93.76Zm7.51-163.9L218 147.07a15.81 15.81 0 0 1 10.31-23.3 134 134 0 0 1 27.69-2.88c60 0 110.91 39.44 128.37 93.79a15.8 15.8 0 0 1-15.1 20.53h-92a15.78 15.78 0 0 1-13.76-8Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-color-fill-outline"><path d="M419.1 337.45a3.94 3.94 0 0 0-6.1 0c-10.5 12.4-45 46.55-45 77.66 0 27 21.5 48.89 48 48.89s48-22 48-48.89c0-31.11-34.3-65.26-44.9-77.66ZM387 287.9 155.61 58.36a36 36 0 0 0-51 0l-5.15 5.15a36 36 0 0 0 0 51l52.89 52.89 57-57L56.33 263.2a28 28 0 0 0 .3 40l131.2 126a28.05 28.05 0 0 0 38.9-.1c37.8-36.6 118.3-114.5 126.7-122.9 5.8-5.8 18.2-7.1 28.7-7.1h.3a6.53 6.53 0 0 0 4.57-11.2Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-color-fill-sharp"><path d="M416 320s-64 48-64 99.84c0 33.28 28.67 60.16 64 60.16s64-27 64-60.16C480 368 416 320 416 320ZM144 32l-76 76 70 70L32 280l176 184 152.8-148.3L416 304Zm24 116-39.6-41 15.88-15.89L184 132Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-color-fill"><path d="M416 480c-35.29 0-64-29.11-64-64.88 0-33.29 28.67-65.4 44.08-82.64 1.87-2.1 3.49-3.91 4.68-5.31a19.94 19.94 0 0 1 30.55 0c1.13 1.31 2.63 3 4.36 4.93 15.5 17.3 44.33 49.51 44.33 83.05 0 35.74-28.71 64.85-64 64.85ZM398.23 276.64 166.89 47.22a52.1 52.1 0 0 0-73.6 0l-4.51 4.51a53.2 53.2 0 0 0-15.89 37.33A51.66 51.66 0 0 0 88.14 126l41.51 41.5L45 252a44.52 44.52 0 0 0-13 32 42.81 42.81 0 0 0 13.5 30.84l131.24 126a44 44 0 0 0 61.08-.18l124.11-120.28a15.6 15.6 0 0 1 8.23-4.29 69.21 69.21 0 0 1 11.93-.86h.3a22.53 22.53 0 0 0 15.84-38.59ZM152.29 144.85l-41.53-41.52a20 20 0 0 1 0-28.34l5.16-5.15a20.07 20.07 0 0 1 28.39 0L186 111.21Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-color-filter-outline"><circle cx="256" cy="184" r="120" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><circle cx="344" cy="328" r="120" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><circle cx="168" cy="328" r="120" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-color-filter-sharp"><path d="M256 185a167.85 167.85 0 0 1 134.9-18.28C382.36 99.83 325.12 48 256 48S129.64 99.83 121.1 166.67A167.85 167.85 0 0 1 256 185ZM336 331.73a167.51 167.51 0 0 1-52.37 118.08A135 135 0 0 0 344 464c75 0 136-61 136-136a136 136 0 0 0-59.06-112.08A168.53 168.53 0 0 1 336 331.73ZM283.58 206.19a167.87 167.87 0 0 1 49.36 89.89 136.14 136.14 0 0 0 58.06-95.7 135.87 135.87 0 0 0-107.43 5.81ZM176.05 331.73a168.53 168.53 0 0 1-85-115.81A136 136 0 0 0 32 328c0 75 61 136 136 136a135 135 0 0 0 60.42-14.19 167.51 167.51 0 0 1-52.37-118.08ZM179.06 296.08a167.87 167.87 0 0 1 49.36-89.89A135.87 135.87 0 0 0 121 200.38a136.14 136.14 0 0 0 58.06 95.7ZM302.9 345.33a168.22 168.22 0 0 1-93.8 0A135.9 135.9 0 0 0 256 431.6a135.9 135.9 0 0 0 46.9-86.27ZM209 311.62a136 136 0 0 0 94 0 135.93 135.93 0 0 0-47-87.22 135.93 135.93 0 0 0-47 87.22Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-color-filter"><path d="M253.72 202.53a4 4 0 0 0 4.56 0 151.88 151.88 0 0 1 128.44-20.41 4 4 0 0 0 5.15-4C388.8 105.86 329 48 256 48s-132.8 57.86-135.87 130.15a4 4 0 0 0 5.15 4 151.88 151.88 0 0 1 128.44 20.41ZM405.31 212.56a152.53 152.53 0 0 1-83.08 108.23 4 4 0 0 0-2.28 3.69c0 1.17.05 2.34.05 3.52a151.58 151.58 0 0 1-47.15 109.94 4 4 0 0 0 .64 6.31A135.24 135.24 0 0 0 344 464c72.07 0 134.1-60.28 136-132.34a136.07 136.07 0 0 0-68.76-121.87 4 4 0 0 0-5.93 2.77Z" /><path d="M390.57 203.67a4 4 0 0 0-2.69-4.4 135.84 135.84 0 0 0-114.4 12.49 4 4 0 0 0-.64 6.29 151.92 151.92 0 0 1 44.47 81.4 4 4 0 0 0 5.94 2.72 136.29 136.29 0 0 0 67.32-98.5ZM192 328c0-1.18 0-2.35.05-3.52a4 4 0 0 0-2.28-3.69 152.53 152.53 0 0 1-83.08-108.23 4 4 0 0 0-5.88-2.77 136.07 136.07 0 0 0-68.76 121.87C34 403.72 96 464 168.05 464a135.24 135.24 0 0 0 70.46-19.75 4 4 0 0 0 .64-6.31A151.58 151.58 0 0 1 192 328Z" /><path d="M168 192a135.34 135.34 0 0 0-43.88 7.27 4 4 0 0 0-2.69 4.4 136.29 136.29 0 0 0 67.32 98.5 4 4 0 0 0 5.94-2.72 151.92 151.92 0 0 1 44.47-81.4 4 4 0 0 0-.64-6.29A135.18 135.18 0 0 0 168 192ZM256 336a151.44 151.44 0 0 1-42.72-6.12 4 4 0 0 0-5.15 4 135.69 135.69 0 0 0 45.18 95.4 4 4 0 0 0 5.38 0 135.69 135.69 0 0 0 45.18-95.4 4 4 0 0 0-5.15-4A151.44 151.44 0 0 1 256 336ZM302.57 308.33a135.94 135.94 0 0 0-43.87-81.58 4.06 4.06 0 0 0-5.4 0 135.94 135.94 0 0 0-43.87 81.58 4 4 0 0 0 2.69 4.4 136.06 136.06 0 0 0 87.76 0 4 4 0 0 0 2.69-4.4Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-color-palette-outline"><path d="M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="144" cy="208" r="32" /><circle cx="152" cy="311" r="32" /><circle cx="224" cy="144" r="32" /><circle cx="256" cy="367" r="48" /><circle cx="328" cy="144" r="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-color-palette-sharp"><path d="M416 352c-12.6-.84-21-4-28-12-14-16-14-36 5.49-52.48l32.82-29.14c50.27-44.41 50.27-117.21 0-161.63C389.26 64.14 339.54 48 287.86 48c-60.34 0-123.39 22-172 65.11-90.46 80-90.46 210.92 0 290.87 45 39.76 105.63 59.59 165.64 60h1.84c60 0 119.07-19.5 161.2-56.77C464 390 464 385 444.62 355.56 440 348 431 353 416 352ZM112 208a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm40 135a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm40-199a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm64 271a48 48 0 1 1 48-48 48 48 0 0 1-48 48Zm72-239a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-color-palette"><path d="m441 336.2-.06-.05c-9.93-9.18-22.78-11.34-32.16-12.92l-.69-.12c-9.05-1.49-10.48-2.5-14.58-6.17-2.44-2.17-5.35-5.65-5.35-9.94s2.91-7.77 5.34-9.94l30.28-26.87c25.92-22.91 40.2-53.66 40.2-86.59s-14.25-63.68-40.2-86.6c-35.89-31.59-85-49-138.37-49C223.72 48 162 71.37 116 112.11c-43.87 38.77-68 90.71-68 146.24s24.16 107.47 68 146.23c21.75 19.24 47.49 34.18 76.52 44.42a266.17 266.17 0 0 0 86.87 15h1.81c61 0 119.09-20.57 159.39-56.4 9.7-8.56 15.15-20.83 15.34-34.56.21-14.17-5.37-27.95-14.93-36.84ZM112 208a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm40 135a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm40-199a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm64 271a48 48 0 1 1 48-48 48 48 0 0 1-48 48Zm72-239a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-color-wand-outline"><rect fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" x="280.48" y="122.9" width="63.03" height="378.2" rx="31.52" transform="rotate(-45 312.002 311.994)" /><path d="M178.38 178.38a31.64 31.64 0 0 0 0 44.75L223.25 268 268 223.25l-44.87-44.87a31.64 31.64 0 0 0-44.75 0Z" /><path stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" d="M48 192h48M90.18 90.18l33.94 33.94M192 48v48M293.82 90.18l-33.94 33.94M124.12 259.88l-33.94 33.94" /></symbol><symbol  viewBox="0 0 512 512" id="icon-color-wand-sharp"><path d="m133.441 200.647 67.197-67.196 78.142 78.142-67.196 67.196zM301.41 234.21l-67.19 67.2L412 480l68-68-178.59-177.79zM32 176h80v32H32zM67.624 90.25l22.627-22.628 56.569 56.569-22.627 22.627zM176 32h32v80h-32zM237.32 124.195l56.569-56.569 22.627 22.627-56.569 56.569zM67.62 293.887l56.569-56.569 22.627 22.627-56.569 56.569z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-color-wand"><path d="M96 208H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h48c8.8 0 16 7.2 16 16s-7.2 16-16 16zM124.1 140.1c-4.2 0-8.3-1.7-11.3-4.7l-33.9-33.9c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l33.9 33.9c6.3 6.2 6.3 16.4 0 22.6-3 3-7 4.7-11.3 4.7zM192 112c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16s16 7.2 16 16v48c0 8.8-7.2 16-16 16zM259.9 140.1c-8.8 0-16-7.2-16-16 0-4.2 1.7-8.3 4.7-11.3l33.9-33.9c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6l-33.9 33.9c-3 3-7.1 4.7-11.3 4.7zM90.2 309.8c-8.8 0-16-7.2-16-16 0-4.2 1.7-8.3 4.7-11.3l33.9-33.9c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-33.9 33.9c-3 3-7.1 4.7-11.3 4.7zM234.2 167c-18.4-18.7-48.5-19-67.2-.7s-19 48.5-.7 67.2l.7.7 39.5 39.5c3.1 3.1 8.2 3.1 11.3 0l55.9-55.9c3.1-3.1 3.1-8.2 0-11.3L234.2 167zM457 389.8 307.6 240.4c-3.1-3.1-8.2-3.1-11.3 0l-55.9 55.9c-3.1 3.1-3.1 8.2 0 11.3L389.8 457c18.4 18.7 48.5 19 67.2.7 18.7-18.4 19-48.5.7-67.2-.2-.2-.4-.5-.7-.7z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-compass-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="m350.67 150.93-117.2 46.88a64 64 0 0 0-35.66 35.66l-46.88 117.2a8 8 0 0 0 10.4 10.4l117.2-46.88a64 64 0 0 0 35.66-35.66l46.88-117.2a8 8 0 0 0-10.4-10.4ZM256 280a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-compass-sharp"><circle cx="256" cy="256" r="24" /><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm48 256-160 64 64-160 160-64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-compass"><circle cx="256" cy="256" r="24" /><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm105.07 113.33-46.88 117.2a64 64 0 0 1-35.66 35.66l-117.2 46.88a8 8 0 0 1-10.4-10.4l46.88-117.2a64 64 0 0 1 35.66-35.66l117.2-46.88a8 8 0 0 1 10.4 10.4Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-construct-outline"><path d="M436.67 184.11a27.17 27.17 0 0 1-38.3 0l-22.48-22.49a27.15 27.15 0 0 1 0-38.29l50.89-50.89a.85.85 0 0 0-.26-1.38C393.68 57 351.09 64.15 324.05 91c-25.88 25.69-27.35 64.27-17.87 98a27 27 0 0 1-7.67 27.14l-173 160.76a40.76 40.76 0 1 0 57.57 57.54l162.15-173.3a27 27 0 0 1 26.77-7.7c33.46 8.94 71.49 7.26 97.07-17.94 27.49-27.08 33.42-74.94 20.1-102.33a.85.85 0 0 0-1.36-.22Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path d="M224 284c-17.48-17-25.49-24.91-31-30.29a18.24 18.24 0 0 1-3.33-21.35 20.76 20.76 0 0 1 3.5-4.62l15.68-15.29a18.66 18.66 0 0 1 5.63-3.87 18.11 18.11 0 0 1 20 3.62c5.45 5.29 15.43 15 33.41 32.52M317.07 291.3c40.95 38.1 90.62 83.27 110 99.41a13.46 13.46 0 0 1 .94 19.92L394.63 444a14 14 0 0 1-20.29-.76c-16.53-19.18-61.09-67.11-99.27-107" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="m17.34 193.5 29.41-28.74a4.71 4.71 0 0 1 3.41-1.35 4.85 4.85 0 0 1 3.41 1.35h0a9.86 9.86 0 0 0 8.19 2.77c3.83-.42 7.92-1.6 10.57-4.12 6-5.8-.94-17.23 4.34-24.54a207 207 0 0 1 19.78-22.6c6-5.88 29.84-28.32 69.9-44.45A107.31 107.31 0 0 1 206.67 64c22.59 0 40 10 46.26 15.67a89.54 89.54 0 0 1 10.28 11.64 78.92 78.92 0 0 0-9.21-2.77 68.82 68.82 0 0 0-20-1.26c-13.33 1.09-29.41 7.26-38 14-13.9 11-19.87 25.72-20.81 44.71-.68 14.12 2.72 22.1 36.1 55.49a6.6 6.6 0 0 1-.34 9.16l-18.22 18a6.88 6.88 0 0 1-9.54.09c-21.94-21.94-36.65-33.09-45-38.16s-15.07-6.5-18.3-6.85a30.85 30.85 0 0 0-18.27 3.87 11.39 11.39 0 0 0-2.64 2 14.14 14.14 0 0 0 .42 20.08l1.71 1.6a4.63 4.63 0 0 1 0 6.64L71.73 246.6a4.71 4.71 0 0 1-3.41 1.4 4.86 4.86 0 0 1-3.41-1.35l-47.57-46.43a4.88 4.88 0 0 1 0-6.72Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-construct-sharp"><path d="m497.14 111.38-81.09 80.84-48.58-48.41L448.56 63c-45.22-22-108.65-22.09-146.2 15.35-35.32 35.2-39.73 90.61-22.54 134.2L99.57 391.37a12 12 0 0 0 0 17l52.27 52.11a12 12 0 0 0 17 0l180-180.5c43.16 16.21 98 11.64 132.74-23 37.5-37.45 37.42-100.34 15.56-145.6Z" /><path d="m365.45 308.62-71.83 72 75.53 79.92a10.88 10.88 0 0 0 15.65.21l60-60.46a11 11 0 0 0-.24-15.69ZM119 212c0-4.87-4-9.33-7.45-12.78l-.25-.24-1.54-1.47a1.06 1.06 0 0 1-.26-.8 16.16 16.16 0 0 1 9.52-2c1.27.13 5.91.9 12.4 4.91 3.38 2.09 32.63 30.23 43.93 40.7a11 11 0 0 0 .14 15.35l7.43 7.86 65.66-65.17-8.25-7.84a10.87 10.87 0 0 0-15.31-.06c-23-24.68-29-35.45-31-42.45-4.42-15.47 4.14-28 14-36 5.84-4.62 17.88-8.08 29-9a52.72 52.72 0 0 1 11.61.6c3.47.5 6.3 1.14 7.39 1.4a68.51 68.51 0 0 1 11 4l12-19a88.38 88.38 0 0 0-13.4-17.7 115.05 115.05 0 0 0-5.19-5.1c-7.78-7.15-28-19.2-54.59-19.2a117.38 117.38 0 0 0-44.77 8.82c-37.44 15.34-61.88 36.25-73.11 47.35l-.07.07A219.55 219.55 0 0 0 67 128.56c-5.35 7.53-4.77 15.84-4.38 21.34 0 .32 0 .67.07 1a18.41 18.41 0 0 0-10.78-3.5A18 18 0 0 0 39 152.73L2 189.62a6.79 6.79 0 0 0 0 9.6L65 262a6.72 6.72 0 0 0 9.5 0l37.06-37c3.44-3.44 7.44-8.14 7.44-13Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-construct"><path d="M503.58 126.2a16.85 16.85 0 0 0-27.07-4.55l-51.15 51.15a11.15 11.15 0 0 1-15.66 0l-22.48-22.48a11.17 11.17 0 0 1 0-15.67l50.88-50.89a16.85 16.85 0 0 0-5.27-27.4c-39.71-17-89.08-7.45-120 23.29-26.81 26.61-34.83 68-22 113.7a11 11 0 0 1-3.16 11.1L114.77 365.1a56.76 56.76 0 1 0 80.14 80.18L357 272.08a11 11 0 0 1 10.9-3.17c45 12 86 4 112.43-22 15.2-15 25.81-36.17 29.89-59.71 3.83-22.2 1.41-44.44-6.64-61Z" /><path d="M437.33 378.41c-13.94-11.59-43.72-38.4-74.07-66.22l-66.07 70.61c28.24 30 53.8 57.85 65 70.88l.07.08A30 30 0 0 0 383.72 464h1.1a30.11 30.11 0 0 0 21-8.62l.07-.07 33.43-33.37a29.46 29.46 0 0 0-2-43.53ZM118.54 214.55a20.48 20.48 0 0 0-3-10.76 2.76 2.76 0 0 1 2.62-4.22h.06c.84.09 5.33.74 11.7 4.61 4.73 2.87 18.23 12.08 41.73 35.54a34.23 34.23 0 0 0 7.22 22.12l66.23-61.55a33.73 33.73 0 0 0-21.6-9.2 2.65 2.65 0 0 1-.21-.26l-.65-.69-24.54-33.84a28.45 28.45 0 0 1-4-26.11 35.23 35.23 0 0 1 11.78-16.35c5.69-4.41 18.53-9.72 29.44-10.62a52.92 52.92 0 0 1 15.19.94 65.57 65.57 0 0 1 7.06 2.13 15.46 15.46 0 0 0 2.15.63 16 16 0 0 0 16.38-25.06c-.26-.35-1.32-1.79-2.89-3.73a91.85 91.85 0 0 0-9.6-10.36c-8.15-7.36-29.27-19.77-57-19.77a123.13 123.13 0 0 0-46.3 9c-38.37 15.45-63.47 36.58-75.01 47.79l-.09.09A222.14 222.14 0 0 0 63.7 129.5a27 27 0 0 0-4.7 11.77 7.33 7.33 0 0 1-7.71 6.17H50.2a20.65 20.65 0 0 0-14.59 5.9L6.16 182.05l-.32.32a20.89 20.89 0 0 0-.24 28.72c.19.2.37.39.57.58L53.67 258a21 21 0 0 0 14.65 6 20.65 20.65 0 0 0 14.59-5.9l29.46-28.79a20.51 20.51 0 0 0 6.17-14.76Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-contract-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M304 416V304h112M314.2 314.23 432 432M208 96v112H96M197.8 197.77 80 80M416 208H304V96M314.23 197.8 432 80M96 304h112v112M197.77 314.2 80 432" /></symbol><symbol  viewBox="0 0 512 512" id="icon-contract-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M304 416V304h112M314.2 314.23 432 432M208 96v112H96M197.8 197.77 80 80M416 208H304V96M314.23 197.8 432 80M96 304h112v112M197.77 314.2 80 432" /></symbol><symbol  viewBox="0 0 512 512" id="icon-contract"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M304 416V304h112M314.2 314.23 432 432M208 96v112H96M197.8 197.77 80 80M416 208H304V96M314.23 197.8 432 80M96 304h112v112M197.77 314.2 80 432" /></symbol><symbol  viewBox="0 0 512 512" id="icon-contrast-outline"><circle cx="256" cy="256" r="208" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M256 464c-114.88 0-208-93.12-208-208S141.12 48 256 48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-contrast-sharp"><path d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32ZM128.72 383.28A180 180 0 0 1 256 76v360a178.82 178.82 0 0 1-127.28-52.72Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-contrast"><path d="M256 32A224 224 0 0 0 97.61 414.39 224 224 0 1 0 414.39 97.61 222.53 222.53 0 0 0 256 32ZM64 256c0-105.87 86.13-192 192-192v384c-105.87 0-192-86.13-192-192Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-copy-outline"><rect x="128" y="128" width="336" height="336" rx="57" ry="57" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-copy-sharp"><path d="M456 480H136a24 24 0 0 1-24-24V128a16 16 0 0 1 16-16h328a24 24 0 0 1 24 24v320a24 24 0 0 1-24 24Z" /><path d="M112 80h288V56a24 24 0 0 0-24-24H60a28 28 0 0 0-28 28v316a24 24 0 0 0 24 24h24V112a32 32 0 0 1 32-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-copy"><path d="M408 480H184a72 72 0 0 1-72-72V184a72 72 0 0 1 72-72h224a72 72 0 0 1 72 72v224a72 72 0 0 1-72 72Z" /><path d="M160 80h235.88A72.12 72.12 0 0 0 328 32H104a72 72 0 0 0-72 72v224a72.12 72.12 0 0 0 48 67.88V160a80 80 0 0 1 80-80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-create-outline"><path d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38ZM399.34 90 218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-create-sharp"><path d="M464.37 49.2a22.07 22.07 0 0 0-31.88-.76l-18.31 18.25 31.18 31.1 18-17.91a22.16 22.16 0 0 0 1.01-30.68ZM252.76 336H176V259.24l9.4-9.38L323.54 112H48v352h352V188.46L262.14 326.6l-9.38 9.4zM400 143.16l32.79-32.86-31.09-31.09L368.85 112H400v31.16z" /><path d="M208 304h31.49L400 143.16V112h-31.15L208 272.51V304z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-create"><path d="M459.94 53.25a16.06 16.06 0 0 0-23.22-.56L424.35 65a8 8 0 0 0 0 11.31l11.34 11.32a8 8 0 0 0 11.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38ZM399.34 90 218.82 270.2a9 9 0 0 0-2.31 3.93L208.16 299a3.91 3.91 0 0 0 4.86 4.86l24.85-8.35a9 9 0 0 0 3.93-2.31L422 112.66a9 9 0 0 0 0-12.66l-9.95-10a9 9 0 0 0-12.71 0Z" /><path d="M386.34 193.66 264.45 315.79A41.08 41.08 0 0 1 247.58 326l-25.9 8.67a35.92 35.92 0 0 1-44.33-44.33l8.67-25.9a41.08 41.08 0 0 1 10.19-16.87l122.13-121.91a8 8 0 0 0-5.65-13.66H104a56 56 0 0 0-56 56v240a56 56 0 0 0 56 56h240a56 56 0 0 0 56-56V199.31a8 8 0 0 0-13.66-5.65Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-crop-outline"><path d="M144 48v272a48 48 0 0 0 48 48h272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M368 304V192a48 48 0 0 0-48-48H208M368 368v96M144 144H48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-crop-sharp"><path d="M166 346V32h-44v90H32v44h90v224h224v90h44v-90h90v-44H166z" /><path d="M346 320h44V122H192v44h154v154z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-crop"><path d="M458 346H192a26 26 0 0 1-26-26V54a22 22 0 0 0-44 0v68H54a22 22 0 0 0 0 44h68v154a70.08 70.08 0 0 0 70 70h154v68a22 22 0 0 0 44 0v-68h68a22 22 0 0 0 0-44Z" /><path d="M214 166h106a26 26 0 0 1 26 26v106a22 22 0 0 0 44 0V192a70.08 70.08 0 0 0-70-70H214a22 22 0 0 0 0 44Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cube-outline"><path d="M448 341.37V170.61A32 32 0 0 0 432.11 143l-152-88.46a47.94 47.94 0 0 0-48.24 0L79.89 143A32 32 0 0 0 64 170.61v170.76A32 32 0 0 0 79.89 369l152 88.46a48 48 0 0 0 48.24 0l152-88.46A32 32 0 0 0 448 341.37Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m69 153.99 187 110 187-110M256 463.99v-200" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cube-sharp"><path d="M48 170v196.92L240 480V284L48 170zM272 480l192-113.08V170L272 284Zm176-122.36ZM448 144 256 32 64 144l192 112 192-112z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cube"><path d="M440.9 136.3a4 4 0 0 0 0-6.91L288.16 40.65a64.14 64.14 0 0 0-64.33 0L71.12 129.39a4 4 0 0 0 0 6.91L254 243.88a4 4 0 0 0 4.06 0ZM54 163.51a4 4 0 0 0-6 3.49v173.89a48 48 0 0 0 23.84 41.39L234 479.51a4 4 0 0 0 6-3.46V274.3a4 4 0 0 0-2-3.46ZM272 275v201a4 4 0 0 0 6 3.46l162.15-97.23A48 48 0 0 0 464 340.89V167a4 4 0 0 0-6-3.45l-184 108a4 4 0 0 0-2 3.45Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cut-outline"><circle cx="104" cy="152" r="56" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="104" cy="360" r="56" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="m157 175-11 15 37 15s3.46-6.42 7-10Z" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><path d="M154.17 334.43 460 162c-2.5-6.7-28-12-64-4-29.12 6.47-121.16 29.05-159.16 56.05C205.85 236.06 227 272 192 298c-25.61 19-44.43 22.82-44.43 22.82ZM344.47 278.24 295 306.67c14.23 6.74 65.54 33.27 117 36.33 14.92.89 30 .39 39-6Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="240" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cut-sharp"><path d="M480 128h-48l-198.94 70.46-59.13-31.59a72.16 72.16 0 1 0-25.69 41.47l52.2 31.72L192 277l-43.64 26.76a71.74 71.74 0 1 0 24.79 38L480 160Zm-376.52 64a40 40 0 1 1 40-40 40 40 0 0 1-40 40Zm0 208a40 40 0 1 1 40-40 40 40 0 0 1-40 40Zm152-144a16 16 0 1 1 16-16 16 16 0 0 1-16 16Z" /><path d="m343.79 259.87-83.74 48.18L432 368h47.99l.01-32-136.21-76.13z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-cut"><path d="M103.48 224a71.64 71.64 0 0 0 44.76-15.66l41.5 16.89 6.82-12.63a39.15 39.15 0 0 1 4.32-6.37l14.22-14.42-41.17-24.94A72 72 0 1 0 103.48 224Zm0-112a40 40 0 1 1-40 40 40 40 0 0 1 40-40Z" /><path d="m480 169-5.52-12.58c-4.48-10.42-14.74-16-32.78-17.85-10.12-1-26.95-1.24-49.69 3.81-20 4.45-122.14 28.2-164.95 58.62-20.25 14.39-24.06 33.67-27.06 49.16-2.78 14.14-5 25.31-18 35-15 11.14-27.27 16.38-33.58 18.6a71.74 71.74 0 1 0 24.79 38Zm-224.52 87a16 16 0 1 1 16-16 16 16 0 0 1-16 16Zm-152 144a40 40 0 1 1 40-40 40 40 0 0 1-40 40Z" /><path d="m343.79 259.87-83.74 48.18 27.63 13.08 3.62 1.74C310 331.92 359.74 356 410.53 359c3.89.23 7.47.34 10.78.34C442 359.31 453 354 459.75 350L480 336Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-desktop-outline"><rect x="32" y="64" width="448" height="320" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m304 448-8-64h-80l-8 64h96z" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M368 448H144" /><path d="M32 304v48a32.09 32.09 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32v-48Zm224 64a16 16 0 1 1 16-16 16 16 0 0 1-16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-desktop-sharp"><path d="M480 48H32a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h168v32h-72v32h256v-32h-72v-32h168a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Zm-20 36v216H52V84ZM240.13 354.08a16 16 0 1 1 13.79 13.79 16 16 0 0 1-13.79-13.79Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-desktop"><path d="M16 352a48.05 48.05 0 0 0 48 48h133.88l-4 32H144a16 16 0 0 0 0 32h224a16 16 0 0 0 0-32h-49.88l-4-32H448a48.05 48.05 0 0 0 48-48v-48H16Zm240-16a16 16 0 1 1-16 16 16 16 0 0 1 16-16ZM496 96a48.05 48.05 0 0 0-48-48H64a48.05 48.05 0 0 0-48 48v192h480Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-diamond-outline"><path d="m35.42 188.21 207.75 269.46a16.17 16.17 0 0 0 25.66 0l207.75-269.46a16.52 16.52 0 0 0 .95-18.75L407.06 55.71A16.22 16.22 0 0 0 393.27 48H118.73a16.22 16.22 0 0 0-13.79 7.71L34.47 169.46a16.52 16.52 0 0 0 .95 18.75ZM48 176h416" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m400 64-48 112-96-128M112 64l48 112 96-128M256 448l-96-272M256 448l96-272" /></symbol><symbol  viewBox="0 0 512 512" id="icon-diamond-sharp"><path d="M396.31 32H264l84.19 112.26L396.31 32zM115.69 32l48.12 112.26L248 32H115.69zM256 74.67 192 160h128l-64-85.33zM422.95 51.06 376.26 160H488L422.95 51.06zM89.05 51.06 23 160h112.74L89.05 51.06zM146.68 192H24l222.8 288h.53L146.68 192zM365.32 192 264.67 480h.53L488 192H365.32zM329.39 192H182.61L256 400l73.39-208z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-diamond"><path d="M121.72 32a4 4 0 0 0-3.72 5.56l2.3 5.43 40.7 94.9a4 4 0 0 0 6.88.82L243 38.4a4 4 0 0 0-3.2-6.4ZM419.93 58.06l-41.28 96.37a4 4 0 0 0 3.68 5.57h101a4 4 0 0 0 3.4-6.11L427 57.53a4 4 0 0 0-7.07.53ZM85 57.57l-59.71 96.32a4 4 0 0 0 3.4 6.11h101a4 4 0 0 0 3.67-5.58L92 58.1a4 4 0 0 0-7-.53ZM393.27 32H267.82a1.94 1.94 0 0 0-1.56 3.11l79.92 106.46a1.94 1.94 0 0 0 3.34-.4L391.6 43l3.4-8.34a1.92 1.92 0 0 0-1.7-2.66ZM239 448l-89.43-253.49A3.78 3.78 0 0 0 146 192H25.7a3.72 3.72 0 0 0-2.95 6l216 279.81a5.06 5.06 0 0 0 6.39 1.37 5 5 0 0 0 2.39-6.08ZM486.3 192H366a3.75 3.75 0 0 0-3.54 2.51l-98.2 278.16a5.21 5.21 0 0 0 2.42 6.31 5.22 5.22 0 0 0 6.61-1.39L489.25 198a3.72 3.72 0 0 0-2.95-6ZM259.2 78.93l56 74.67a4 4 0 0 1-3.2 6.4H200a4 4 0 0 1-3.2-6.4l56-74.67a4 4 0 0 1 6.4 0Zm-7 310.31-67.7-191.91a4 4 0 0 1 3.77-5.33h135.46a4 4 0 0 1 3.77 5.33l-67.73 191.91a4 4 0 0 1-7.54 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-dice-outline"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 341.37V170.61A32 32 0 0 0 432.11 143l-152-88.46a47.94 47.94 0 0 0-48.24 0L79.89 143A32 32 0 0 0 64 170.61v170.76A32 32 0 0 0 79.89 369l152 88.46a48 48 0 0 0 48.24 0l152-88.46A32 32 0 0 0 448 341.37Z" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m69 153.99 187 110 187-110M256 463.99v-200" /><ellipse cx="256" cy="152" rx="24" ry="16" /><ellipse cx="208" cy="296" rx="16" ry="24" /><ellipse cx="112" cy="328" rx="16" ry="24" /><ellipse cx="304" cy="296" rx="16" ry="24" /><ellipse cx="400" cy="240" rx="16" ry="24" /><ellipse cx="304" cy="384" rx="16" ry="24" /><ellipse cx="400" cy="328" rx="16" ry="24" /></symbol><symbol  viewBox="0 0 512 512" id="icon-dice-sharp"><path d="M48 366.92 240 480V284L48 170ZM192 288c8.84 0 16 10.75 16 24s-7.16 24-16 24-16-10.75-16-24 7.16-24 16-24Zm-96 32c8.84 0 16 10.75 16 24s-7.16 24-16 24-16-10.75-16-24 7.16-24 16-24ZM272 284v196l192-113.08V170Zm48 140c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Zm96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Zm32 77.64ZM256 32 64 144l192 112 192-112Zm0 120c-13.25 0-24-7.16-24-16s10.75-16 24-16 24 7.16 24 16-10.75 16-24 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-dice"><path d="M440.88 129.37 288.16 40.62a64.14 64.14 0 0 0-64.33 0L71.12 129.37a4 4 0 0 0 0 6.9L254 243.85a4 4 0 0 0 4.06 0L440.9 136.27a4 4 0 0 0-.02-6.9ZM256 152c-13.25 0-24-7.16-24-16s10.75-16 24-16 24 7.16 24 16-10.75 16-24 16ZM238 270.81 54 163.48a4 4 0 0 0-6 3.46v173.92a48 48 0 0 0 23.84 41.39L234 479.48a4 4 0 0 0 6-3.46V274.27a4 4 0 0 0-2-3.46ZM96 368c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Zm96-32c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24ZM458 163.51 274 271.56a4 4 0 0 0-2 3.45V476a4 4 0 0 0 6 3.46l162.15-97.23A48 48 0 0 0 464 340.86V167a4 4 0 0 0-6-3.49ZM320 424c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Zm96 32c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Zm0-88c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-disc-outline"><circle cx="256" cy="256" r="208" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="256" r="96" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="256" r="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-disc-sharp"><circle cx="256" cy="256" r="32" /><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61ZM256 336a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-disc"><path d="M256 176a80 80 0 1 0 80 80 80.09 80.09 0 0 0-80-80Zm0 112a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61ZM256 368a112 112 0 1 1 112-112 112.12 112.12 0 0 1-112 112Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-document-attach-outline"><path d="M208 64h66.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62V432a48 48 0 0 1-48 48H192a48 48 0 0 1-48-48V304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M288 72v120a32 32 0 0 0 32 32h120" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M160 80v152a23.69 23.69 0 0 1-24 24c-12 0-24-9.1-24-24V88c0-30.59 16.57-56 48-56s48 24.8 48 55.38v138.75c0 43-27.82 77.87-72 77.87s-72-34.86-72-77.87V144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-document-attach-sharp"><path d="M280 240a8 8 0 0 1-8-8V48h-57.25a65.42 65.42 0 0 0-6.5-9.81C196.72 23.88 179.59 16 160 16c-37.68 0-64 29.61-64 72v144c0 25 20.34 40 40 40a39.57 39.57 0 0 0 40-40V80h-32v152a7.75 7.75 0 0 1-8 8c-2.23 0-8-1.44-8-8V88c0-19.34 8.41-40 32-40 29.69 0 32 30.15 32 39.38v138.75c0 17.45-5.47 33.23-15.41 44.46C166.5 282 152.47 288 136 288s-30.5-6-40.59-17.41C85.47 259.36 80 243.58 80 226.13V144H48v82.13c0 51.51 33.19 89.63 80 93.53V468a12 12 0 0 0 12 12h312a12 12 0 0 0 12-12V240Z" /><path d="M308 208h146.31a2 2 0 0 0 1.42-3.41L307.41 56.27a2 2 0 0 0-3.41 1.42V204a4 4 0 0 0 4 4Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-document-attach"><path d="M460 240H320a48 48 0 0 1-48-48V52a4 4 0 0 0-4-4h-53.25a65.42 65.42 0 0 0-6.5-9.81C196.72 23.88 179.59 16 160 16c-37.68 0-64 29.61-64 72v144c0 25 20.34 40 40 40a39.57 39.57 0 0 0 40-40V80a16 16 0 0 0-32 0v152a7.75 7.75 0 0 1-8 8c-2.23 0-8-1.44-8-8V88c0-19.34 8.41-40 32-40 29.69 0 32 30.15 32 39.38v138.75c0 17.45-5.47 33.23-15.41 44.46C166.5 282 152.47 288 136 288s-30.5-6-40.59-17.41C85.47 259.36 80 243.58 80 226.13V144a16 16 0 0 0-32 0v82.13c0 51.51 33.19 89.63 80 93.53V432a64 64 0 0 0 64 64h208a64 64 0 0 0 64-64V244a4 4 0 0 0-4-4Z" /><path d="M320 208h129.81a2 2 0 0 0 1.41-3.41L307.41 60.78a2 2 0 0 0-3.41 1.41V192a16 16 0 0 0 16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-document-lock-outline"><path d="M288 304v-18c0-16.63-14.26-30-32-30s-32 13.37-32 30v18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path d="M304 416h-96a32 32 0 0 1-32-32v-48a32 32 0 0 1 32-32h96a32 32 0 0 1 32 32v48a32 32 0 0 1-32 32Z" /><path d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62Z" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" /><path d="M256 50.88V176a32 32 0 0 0 32 32h125.12" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-document-lock-sharp"><path d="M276 192h146.31a2 2 0 0 0 1.42-3.41L275.41 40.27a2 2 0 0 0-3.41 1.42V188a4 4 0 0 0 4 4ZM256 272c-8.82 0-16 6.28-16 14v18h32v-18c0-7.72-7.18-14-16-14Z" /><path d="M248 224a8 8 0 0 1-8-8V32H92a12 12 0 0 0-12 12v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V224Zm88 175.91A16.1 16.1 0 0 1 319.91 416H192.09A16.1 16.1 0 0 1 176 399.91V320c0-10 7-16 16-16h16v-18c0-25.36 21.53-46 48-46s48 20.64 48 46v18h16a15.8 15.8 0 0 1 16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-document-lock"><path d="M288 192h129.81a2 2 0 0 0 1.41-3.41L275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16ZM256 272c-8.82 0-16 6.28-16 14v18h32v-18c0-7.72-7.18-14-16-14Z" /><path d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4Zm-92 160a32 32 0 0 1-32 32h-96a32 32 0 0 1-32-32v-48a32 32 0 0 1 32-32v-18c0-25.36 21.53-46 48-46s48 20.64 48 46v18a32 32 0 0 1 32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-document-outline"><path d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M256 56v120a32 32 0 0 0 32 32h120" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-document-sharp"><path d="M240 216V32H92a12 12 0 0 0-12 12v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V224H248a8 8 0 0 1-8-8Z" /><path d="M272 41.69V188a4 4 0 0 0 4 4h146.31a2 2 0 0 0 1.42-3.41L275.41 40.27a2 2 0 0 0-3.41 1.42Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-document-text-outline"><path d="M416 221.25V416a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V96a48 48 0 0 1 48-48h98.75a32 32 0 0 1 22.62 9.37l141.26 141.26a32 32 0 0 1 9.37 22.62Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M256 56v120a32 32 0 0 0 32 32h120M176 288h160M176 368h160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-document-text-sharp"><path d="M272 41.69V188a4 4 0 0 0 4 4h146.31a2 2 0 0 0 1.42-3.41L275.41 40.27a2 2 0 0 0-3.41 1.42Z" /><path d="M248 224a8 8 0 0 1-8-8V32H92a12 12 0 0 0-12 12v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V224Zm104 160H160v-32h192Zm0-80H160v-32h192Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-document-text"><path d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4Zm-92 160H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32Zm0-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32Z" /><path d="M419.22 188.59 275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-document"><path d="M428 224H288a48 48 0 0 1-48-48V36a4 4 0 0 0-4-4h-92a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h224a64 64 0 0 0 64-64V228a4 4 0 0 0-4-4Z" /><path d="M419.22 188.59 275.41 44.78a2 2 0 0 0-3.41 1.41V176a16 16 0 0 0 16 16h129.81a2 2 0 0 0 1.41-3.41Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-documents-outline"><path d="M336 264.13V436c0 24.3-19.05 44-42.95 44H107c-23.95 0-43-19.7-43-44V172a44.26 44.26 0 0 1 44-44h94.12a24.55 24.55 0 0 1 17.49 7.36l109.15 111a25.4 25.4 0 0 1 7.24 17.77Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M200 128v108a28.34 28.34 0 0 0 28 28h108" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M176 128V76a44.26 44.26 0 0 1 44-44h94a24.83 24.83 0 0 1 17.61 7.36l109.15 111A25.09 25.09 0 0 1 448 168v172c0 24.3-19.05 44-42.95 44H344" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M312 32v108a28.34 28.34 0 0 0 28 28h108" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-documents-sharp"><path d="M307.94 248 216 154.52V242a6 6 0 0 0 6 6Z" /><path d="M184 268V144H60a12 12 0 0 0-12 12v328a12 12 0 0 0 12 12h248a12 12 0 0 0 12-12V280H196a12 12 0 0 1-12-12ZM366 120h85.94L360 26.52V114a6 6 0 0 0 6 6Z" /><path d="M340 152a12 12 0 0 1-12-12V16H172a12 12 0 0 0-12 12v84h42.12A40.81 40.81 0 0 1 231 124.14l109.16 111a41.11 41.11 0 0 1 11.83 29V400H452a12 12 0 0 0 12-12V152Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-documents"><path d="M298.39 248a4 4 0 0 0 2.86-6.8l-78.4-79.72a4 4 0 0 0-6.85 2.81V236a12 12 0 0 0 12 12Z" /><path d="M197 267a43.67 43.67 0 0 1-13-31v-92h-72a64.19 64.19 0 0 0-64 64v224a64 64 0 0 0 64 64h144a64 64 0 0 0 64-64V280h-92a43.61 43.61 0 0 1-31-13ZM372 120h70.39a4 4 0 0 0 2.86-6.8l-78.4-79.72a4 4 0 0 0-6.85 2.81V108a12 12 0 0 0 12 12Z" /><path d="M372 152a44.34 44.34 0 0 1-44-44V16H220a60.07 60.07 0 0 0-60 60v36h42.12A40.81 40.81 0 0 1 231 124.14l109.16 111a41.11 41.11 0 0 1 11.83 29V400h53.05c32.51 0 58.95-26.92 58.95-60V152Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-download-outline"><path d="M336 176h40a40 40 0 0 1 40 40v208a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V216a40 40 0 0 1 40-40h40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m176 272 80 80 80-80M256 48v288" /></symbol><symbol  viewBox="0 0 512 512" id="icon-download-sharp"><path d="M272 160v147.37l64-64L358.63 266 256 368.63 153.37 266 176 243.37l64 64V160H92a12 12 0 0 0-12 12v296a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V172a12 12 0 0 0-12-12ZM240 32h32v128h-32z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-download"><path d="M376 160H272v153.37l52.69-52.68a16 16 0 0 1 22.62 22.62l-80 80a16 16 0 0 1-22.62 0l-80-80a16 16 0 0 1 22.62-22.62L240 313.37V160H136a56.06 56.06 0 0 0-56 56v208a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V216a56.06 56.06 0 0 0-56-56ZM272 48a16 16 0 0 0-32 0v112h32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-duplicate-outline"><rect x="128" y="128" width="336" height="336" rx="57" ry="57" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="m383.5 128 .5-24a56.16 56.16 0 0 0-56-56H112a64.19 64.19 0 0 0-64 64v216a56.16 56.16 0 0 0 56 56h24M296 216v160M376 296H216" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-duplicate-sharp"><path d="M112 80h288V56a24 24 0 0 0-24-24H66a34 34 0 0 0-34 34v310a24 24 0 0 0 24 24h24V112a32 32 0 0 1 32-32Z" /><path d="M456 112H136a24 24 0 0 0-24 24v320a24 24 0 0 0 24 24h320a24 24 0 0 0 24-24V136a24 24 0 0 0-24-24Zm-64 200h-80v80h-32v-80h-80v-32h80v-80h32v80h80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-duplicate"><path d="M408 112H184a72 72 0 0 0-72 72v224a72 72 0 0 0 72 72h224a72 72 0 0 0 72-72V184a72 72 0 0 0-72-72Zm-32.45 200H312v63.55c0 8.61-6.62 16-15.23 16.43A16 16 0 0 1 280 376v-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 216 280h64v-63.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 312 216v64h64a16 16 0 0 1 16 16.77c-.42 8.61-7.84 15.23-16.45 15.23Z" /><path d="M395.88 80A72.12 72.12 0 0 0 328 32H104a72 72 0 0 0-72 72v224a72.12 72.12 0 0 0 48 67.88V160a80 80 0 0 1 80-80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ear-outline"><path d="M335.72 330.76C381.73 299.5 416 251.34 416 192a160 160 0 0 0-320 0v206.57c0 44.26 35.74 81.43 80 81.43h0c44.26 0 66.83-25.94 77.29-40 14.77-19.81 41.71-81.56 82.43-109.24Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M160 304V184c0-48.4 43.2-88 96-88h0c52.8 0 96 39.6 96 88" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M160 239c25-18 79.82-15 79.82-15 26 0 41.17 29.42 26 50.6 0 0-36.86 42.4-41.86 61.4" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ear-sharp"><path d="M380.48 68.09C347.09 34.5 302.88 16 256 16 159 16 80 95 80 192v206.57a97.59 97.59 0 0 0 28 68.49A94.49 94.49 0 0 0 176 496c19.93 0 41.06-7.69 62.8-22.87a181.46 181.46 0 0 0 25.88-21.86C327.37 390.16 432 288.06 432 192c0-46.49-18.29-90.49-51.52-123.91ZM368 200h-32v-16c0-39.7-35.89-72-80-72s-80 32.3-80 72v30.41c27.5-7.84 59.89-6.62 64.26-6.41a48 48 0 0 1 38.62 75.9c-.3.41-.61.81-.95 1.2-16.55 19-36 45.49-38.46 55l-4.07 15.47-30.94-8.14 4.07-15.47c5.51-20.94 36.93-58.2 44.66-67.15A16 16 0 0 0 239.82 240h-.88c-10.67-.58-42.66-.25-62.12 8l-.82.35V320h-32V184c0-57.35 50.24-104 112-104s112 46.65 112 104Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ear"><path d="M256 16C159 16 80 95 80 192v206.57a97.59 97.59 0 0 0 28 68.49A94.51 94.51 0 0 0 176 496c36.86 0 67.18-15.62 90.12-46.42 4.48-6 9.55-14.74 15.42-24.85 15.32-26.37 36.29-62.47 63.17-80.74 25.77-17.51 47.23-39.54 62-63.72C423.51 252.94 432 223.24 432 192c0-97-78.95-176-176-176Zm96 184a16 16 0 0 1-16-16c0-39.7-35.89-72-80-72s-80 32.3-80 72v30.42c27.19-7.84 58.4-6.72 64.28-6.42a48 48 0 0 1 38.6 75.9c-.3.41-.61.81-.95 1.2-16.55 19-36 45.48-38.46 55a16 16 0 0 1-30.94-8.14c5.51-20.94 36.93-58.2 44.66-67.15A16 16 0 0 0 239.82 240h-.88c-16.6-.89-45.89.8-62.94 8.31V304a16 16 0 0 1-32 0V184c0-57.35 50.24-104 112-104s112 46.65 112 104a16 16 0 0 1-16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-earth-outline"><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M445.57 172.14c-16.06.1-14.48 29.73-34.49 15.75-7.43-5.18-12-12.71-21.33-15-8.15-2-16.5.08-24.55 1.47-9.15 1.58-20 2.29-26.94 9.22-6.71 6.67-10.26 15.62-17.4 22.33-13.81 13-19.64 27.19-10.7 45.57 8.6 17.67 26.59 27.26 46 26 19.07-1.27 38.88-12.33 38.33 15.38-.2 9.8 1.85 16.6 4.86 25.71 2.79 8.4 2.6 16.54 3.24 25.21 1.18 16.2 4.16 34.36 12.2 48.67l15-21.16c1.85-2.62 5.72-6.29 6.64-9.38 1.63-5.47-1.58-14.87-1.95-21s-.19-12.34-1.13-18.47c-1.32-8.59-6.4-16.64-7.1-25.13-1.29-15.81 1.6-28.43-10.58-41.65-11.76-12.75-29-15.81-45.47-13.22-8.3 1.3-41.71 6.64-28.3-12.33 2.65-3.73 7.28-6.79 10.26-10.34 2.59-3.09 4.84-8.77 7.88-11.18s17-5.18 21-3.95 8.17 7 11.64 9.56a49.89 49.89 0 0 0 21.81 9.36c13.66 2 42.22-5.94 42-23.46-.04-8.4-7.84-20.1-10.92-27.96ZM287.45 316.3c-5.33-22.44-35.82-29.94-52.26-42.11-9.45-7-17.86-17.81-30.27-18.69-5.72-.41-10.51.83-16.18-.64-5.2-1.34-9.28-4.14-14.82-3.41-10.35 1.36-16.88 12.42-28 10.92-10.55-1.42-21.42-13.76-23.82-23.81-3.08-12.92 7.14-17.11 18.09-18.26 4.57-.48 9.7-1 14.09.67 5.78 2.15 8.51 7.81 13.7 10.67 9.73 5.33 11.7-3.19 10.21-11.83-2.23-12.94-4.83-18.22 6.71-27.12 8-6.14 14.84-10.58 13.56-21.61-.76-6.48-4.31-9.41-1-15.86 2.51-4.91 9.4-9.34 13.89-12.27 11.59-7.56 49.65-7 34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44 9.27-21.41 14.19-7.2 5.09-21.22 10.87-28.43 3-9.7-10.59 6.43-14.07 10-21.46s-8.27-21.36-14.61-24.9l-29.81 33.43a41.52 41.52 0 0 0 8.34 31.86c5.93 7.63 15.37 10.08 15.8 20.5.42 10-1.14 15.12-7.68 22.15-2.83 3-4.83 7.26-7.71 10.07-3.53 3.43-2.22 2.38-7.73 3.32-10.36 1.75-19.18 4.45-29.19 7.21C95.34 199.94 93.8 172.69 86.2 162l-25 20.19c-.27 3.31 4.1 9.4 5.29 13 6.83 20.57 20.61 36.48 29.51 56.16 9.37 20.84 34.53 15.06 45.64 33.32 9.86 16.2-.67 36.71 6.71 53.67 5.36 12.31 18 15 26.72 24 8.91 9.09 8.72 21.53 10.08 33.36a305.22 305.22 0 0 0 7.45 41.28c1.21 4.69 2.32 10.89 5.53 14.76 2.2 2.66 9.75 4.95 6.7 5.83 4.26.7 11.85 4.68 15.4 1.76 4.68-3.84 3.43-15.66 4.24-21 2.43-15.9 10.39-31.45 21.13-43.35 10.61-11.74 25.15-19.69 34.11-33 8.73-12.98 11.36-30.49 7.74-45.68Zm-33.39 26.32c-6 10.71-19.36 17.88-27.95 26.39-2.33 2.31-7.29 10.31-10.21 8.58-2.09-1.24-2.8-11.62-3.57-14a61.17 61.17 0 0 0-21.71-29.95c-3.13-2.37-10.89-5.45-12.68-8.7-2-3.53-.2-11.86-.13-15.7.11-5.6-2.44-14.91-1.06-20 1.6-5.87-1.48-2.33 3.77-3.49 2.77-.62 14.21 1.39 17.66 2.11 5.48 1.14 8.5 4.55 12.82 8 11.36 9.11 23.87 16.16 36.6 23.14 9.86 5.46 12.76 12.37 6.46 23.62ZM184.46 67.09c4.74 4.63 9.2 10.11 16.27 10.57 6.69.45 13-3.17 18.84 1.38 6.48 5 11.15 11.33 19.75 12.89 8.32 1.51 17.13-3.35 19.19-11.86 2-8.11-2.31-16.93-2.57-25.07 0-1.13.61-6.15-.17-7-.58-.64-5.42.08-6.16.1q-8.13.24-16.22 1.12a207.1 207.1 0 0 0-57.18 14.65c2.43 1.68 5.48 2.35 8.25 3.22ZM356.4 123.27c8.49 0 17.11-3.8 14.37-13.62-2.3-8.23-6.22-17.16-15.76-12.72-6.07 2.82-14.67 10-15.38 17.12-.81 8.08 11.11 9.22 16.77 9.22ZM349.62 166.24c8.67 5.19 21.53 2.75 28.07-4.66 5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0 1 10.82 4.41c3.8 3.93 3.05 7.62 3.86 12.54 1.81 11.05 13.66.63 16.75-3.65 2-2.79 4.71-6.93 3.8-10.56-.84-3.39-4.8-7-6.56-10.11-5.14-9-9.37-19.47-17.07-26.74-7.41-7-16.52-6.19-23.55 1.08-5.76 6-12.45 10.75-16.39 18.05-2.78 5.13-5.91 7.58-11.54 8.91-3.1.73-6.64 1-9.24 3.08-7.24 5.7-3.12 19.39 3.74 23.51Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-earth-sharp"><path d="m267 474-.8-.13a.85.85 0 0 0 .8.13ZM448.9 187.78a5.51 5.51 0 0 0-10.67-.63A5.52 5.52 0 0 1 433 191h-15.47a5.48 5.48 0 0 1-2.84-.79l-22.38-13.42a5.48 5.48 0 0 0-2.84-.79h-35.8a5.48 5.48 0 0 0-3.06.93l-44.15 29.43A5.52 5.52 0 0 0 304 211v41.74a5.51 5.51 0 0 0 2.92 4.87l57.89 30.9a5.55 5.55 0 0 1 2.92 4.8l.27 23.49a5.53 5.53 0 0 0 2.85 4.75l23.26 12.87a5.54 5.54 0 0 1 2.85 4.83v48.6a5.52 5.52 0 0 0 9.17 4.14c9.38-8.26 22.83-20.32 24.62-23.08q4.44-6.87 8.33-14.07a207.39 207.39 0 0 0 13.6-31c12.68-36.71 2.66-102.7-3.78-136.06ZM286.4 302.8l-61.33-46a4 4 0 0 0-2.4-.8h-29.1a3.78 3.78 0 0 1-2.68-1.11l-13.72-13.72a4 4 0 0 0-2.83-1.17h-53.19a3.79 3.79 0 0 1-2.68-6.47l8.42-8.42a3.78 3.78 0 0 1 2.68-1.11h32.37a8 8 0 0 0 7.7-5.83l6.89-24.5a4 4 0 0 1 2-2.47L206 177.06a3.79 3.79 0 0 0 2.05-3.37v-12.5a3.82 3.82 0 0 1 .68-2.17l14.6-21.02a3.75 3.75 0 0 1 1.78-1.38l20.43-7.67a3.79 3.79 0 0 0 2.46-3.55V114a3.8 3.8 0 0 0-1.69-3.16l-20.48-13.62A3.83 3.83 0 0 0 222 97l-27.88 13.94a3.78 3.78 0 0 1-4-.41l-13.22-10.45a3.8 3.8 0 0 1 .1-6l10.74-7.91a3.78 3.78 0 0 0-.09-6.16l-16.73-11.67a3.78 3.78 0 0 0-4-.22c-6.05 3.31-23.8 13.11-30.1 17.52a209.48 209.48 0 0 0-68.16 80c-1.82 3.76-4.07 7.59-4.29 11.72s-3.46 13.35-4.81 17.08a3.78 3.78 0 0 0 .24 3.1l35.69 65.58a3.74 3.74 0 0 0 1.38 1.44l37.55 22.54a3.78 3.78 0 0 1 1.81 2.73l7.52 54.54a3.82 3.82 0 0 0 1.61 2.61l29.3 20.14a4 4 0 0 1 1.65 2.48l15.54 73.8a3.6 3.6 0 0 0 .49 1.22c1.46 2.36 7.28 11 14.3 12.28-.65.18-1.23.59-1.88.78a47.63 47.63 0 0 1 5 1.16c2 .54 4 1 6 1.43 3.13.62 3.44 1.1 4.94-1.68 2-3.72 4.29-5 6-5.46a3.85 3.85 0 0 0 2.89-2.9l10.07-46.68a4 4 0 0 1 1.6-2.42l45-31.9a4 4 0 0 0 1.69-3.27V306a4 4 0 0 0-1.55-3.2Z" /><path d="M262 48s-3.65.21-4.39.23q-8.13.24-16.22 1.12A207.45 207.45 0 0 0 184.21 64c2.43 1.68-1.75 3.22-1.75 3.22L189 80h35l24 12 21-12ZM354.23 120.06l16.11-14a4 4 0 0 0-.94-6.65l-18.81-8.73a4 4 0 0 0-5.3 1.9l-7.75 16.21a4 4 0 0 0 1.49 5.11l10.46 6.54a4 4 0 0 0 4.74-.38ZM429.64 140.67l-5.83-9c-.09-.14-.17-.28-.25-.43-1.05-2.15-9.74-19.7-17-26.51-5.45-5.15-7-3.67-7.43-2.53a3.77 3.77 0 0 1-1.19 1.6l-28.84 23.31a4 4 0 0 1-2.51.89h-14.93a4 4 0 0 0-2.83 1.17l-12 12a4 4 0 0 0 0 5.66l12 12a4 4 0 0 0 2.83 1.17h75.17a4 4 0 0 0 4-4.17l-.55-13.15a4 4 0 0 0-.64-2.01Z" /><path d="M256 72a184 184 0 1 1-130.1 53.9A182.77 182.77 0 0 1 256 72m0-40C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-earth"><path d="M414.39 97.74A224 224 0 1 0 97.61 414.52 224 224 0 1 0 414.39 97.74ZM64 256.13a191.63 191.63 0 0 1 6.7-50.31c7.34 15.8 18 29.45 25.25 45.66 9.37 20.84 34.53 15.06 45.64 33.32 9.86 16.21-.67 36.71 6.71 53.67 5.36 12.31 18 15 26.72 24 8.91 9.08 8.72 21.52 10.08 33.36a305.36 305.36 0 0 0 7.45 41.27c0 .1 0 .21.08.31C117.8 411.13 64 339.8 64 256.13Zm192 192a193.12 193.12 0 0 1-32-2.68c.11-2.71.16-5.24.43-7 2.43-15.9 10.39-31.45 21.13-43.35 10.61-11.74 25.15-19.68 34.11-33 8.78-13 11.41-30.5 7.79-45.69-5.33-22.44-35.82-29.93-52.26-42.1-9.45-7-17.86-17.82-30.27-18.7-5.72-.4-10.51.83-16.18-.63-5.2-1.35-9.28-4.15-14.82-3.42-10.35 1.36-16.88 12.42-28 10.92-10.55-1.41-21.42-13.76-23.82-23.81-3.08-12.92 7.14-17.11 18.09-18.26 4.57-.48 9.7-1 14.09.68 5.78 2.14 8.51 7.8 13.7 10.66 9.73 5.34 11.7-3.19 10.21-11.83-2.23-12.94-4.83-18.21 6.71-27.12 8-6.14 14.84-10.58 13.56-21.61-.76-6.48-4.31-9.41-1-15.86 2.51-4.91 9.4-9.34 13.89-12.27 11.59-7.56 49.65-7 34.1-28.16-4.57-6.21-13-17.31-21-18.83-10-1.89-14.44 9.27-21.41 14.19-7.2 5.09-21.22 10.87-28.43 3-9.7-10.59 6.43-14.06 10-21.46 1.65-3.45 0-8.24-2.78-12.75q5.41-2.28 11-4.23a15.6 15.6 0 0 0 8 3c6.69.44 13-3.18 18.84 1.38 6.48 5 11.15 11.32 19.75 12.88 8.32 1.51 17.13-3.34 19.19-11.86 1.25-5.18 0-10.65-1.2-16a190.83 190.83 0 0 1 105 32.21c-2-.76-4.39-.67-7.34.7-6.07 2.82-14.67 10-15.38 17.12-.81 8.08 11.11 9.22 16.77 9.22 8.5 0 17.11-3.8 14.37-13.62-1.19-4.26-2.81-8.69-5.42-11.37a193.27 193.27 0 0 1 18 14.14c-.09.09-.18.17-.27.27-5.76 6-12.45 10.75-16.39 18.05-2.78 5.14-5.91 7.58-11.54 8.91-3.1.73-6.64 1-9.24 3.08-7.24 5.7-3.12 19.4 3.74 23.51 8.67 5.19 21.53 2.75 28.07-4.66 5.11-5.8 8.12-15.87 17.31-15.86a15.4 15.4 0 0 1 10.82 4.41c3.8 3.94 3.05 7.62 3.86 12.54 1.43 8.74 9.14 4 13.83-.41a192.12 192.12 0 0 1 9.24 18.77c-5.16 7.43-9.26 15.53-21.67 6.87-7.43-5.19-12-12.72-21.33-15.06-8.15-2-16.5.08-24.55 1.47-9.15 1.59-20 2.29-26.94 9.22-6.71 6.68-10.26 15.62-17.4 22.33-13.81 13-19.64 27.19-10.7 45.57 8.6 17.67 26.59 27.26 46 26 19.07-1.27 38.88-12.33 38.33 15.38-.2 9.81 1.85 16.6 4.86 25.71 2.79 8.4 2.6 16.54 3.24 25.21a158 158 0 0 0 4.74 30.07A191.75 191.75 0 0 1 256 448.13Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-easel-outline"><rect x="48" y="80" width="416" height="272" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M256 416v-64M256 80V48M400 464l-32-112M112 464l32-112" /></symbol><symbol  viewBox="0 0 512 512" id="icon-easel-sharp"><path d="M468 64H278V32h-44v32H44a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h78.19L89.93 470.46l36.53 9.61L161.74 368H234v64h44v-64h71.84l31 111.7 36.83-8.57L389.05 368H468a12 12 0 0 0 12-12V76a12 12 0 0 0-12-12Zm-26 266H70V102h372Z" /><path d="M88 120h336v192H88z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-easel"><rect x="80" y="112" width="352" height="208" rx="12" ry="12" /><path d="M432 64H272V48a16 16 0 0 0-32 0v16H80a48.05 48.05 0 0 0-48 48v208a48.05 48.05 0 0 0 48 48h42.79l-26.17 91.6a16 16 0 1 0 30.76 8.8L156.07 368H240v48a16 16 0 0 0 32 0v-48h83.93l28.69 100.4a16 16 0 1 0 30.76-8.8L389.21 368H432a48.05 48.05 0 0 0 48-48V112a48.05 48.05 0 0 0-48-48Zm16 256a16 16 0 0 1-16 16H80a16 16 0 0 1-16-16V112a16 16 0 0 1 16-16h352a16 16 0 0 1 16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-egg-outline"><path d="M256 48C192 48 96 171.69 96 286.55S160 464 256 464s160-62.59 160-177.45S320 48 256 48Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-egg-sharp"><path d="M418.39 381.05c-8.08 21.68-19.76 40.1-34.72 54.75-14.38 14.07-32.1 24.95-52.67 32.34C309.08 476 283.85 480 256 480s-53.08-4-75-11.86c-20.57-7.39-38.29-18.27-52.67-32.34-15-14.65-26.64-33.07-34.72-54.75C84.58 356.82 80 328.53 80 296.94c0-30.28 6.68-62.57 19.86-96A371 371 0 0 1 151 111.42C195.78 53.56 241 32 256 32s62.67 22.4 105 79.42c18.33 24.71 38.87 58.34 51.17 89.54 13.18 33.41 19.86 65.7 19.86 96-.03 31.57-4.61 59.86-13.64 84.09Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-egg"><path d="M256 480c-52.57 0-96.72-17.54-127.7-50.73C96.7 395.4 80 346.05 80 286.55 80 230.5 101.48 168 138.93 115 175.65 63 219.41 32 256 32s80.35 31 117.07 83C410.52 168 432 230.5 432 286.55c0 59.5-16.7 108.85-48.3 142.72C352.72 462.46 308.57 480 256 480Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipse-outline"><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipse-sharp"><path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipse"><path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipsis-horizontal-circle-outline"><circle cx="256" cy="256" r="26" /><circle cx="346" cy="256" r="26" /><circle cx="166" cy="256" r="26" /><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipsis-horizontal-circle-sharp"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm-90 234a26 26 0 1 1 26-26 26 26 0 0 1-26 26Zm90 0a26 26 0 1 1 26-26 26 26 0 0 1-26 26Zm90 0a26 26 0 1 1 26-26 26 26 0 0 1-26 26Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipsis-horizontal-circle"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm-90 234a26 26 0 1 1 26-26 26 26 0 0 1-26 26Zm90 0a26 26 0 1 1 26-26 26 26 0 0 1-26 26Zm90 0a26 26 0 1 1 26-26 26 26 0 0 1-26 26Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipsis-horizontal-outline"><circle cx="256" cy="256" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="416" cy="256" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="96" cy="256" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipsis-horizontal-sharp"><circle cx="256" cy="256" r="48" /><circle cx="416" cy="256" r="48" /><circle cx="96" cy="256" r="48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipsis-horizontal"><circle cx="256" cy="256" r="48" /><circle cx="416" cy="256" r="48" /><circle cx="96" cy="256" r="48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipsis-vertical-circle-outline"><circle cx="256" cy="256" r="26" /><circle cx="256" cy="346" r="26" /><circle cx="256" cy="166" r="26" /><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipsis-vertical-circle-sharp"><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208Zm-234-90a26 26 0 1 1 26 26 26 26 0 0 1-26-26Zm0 90a26 26 0 1 1 26 26 26 26 0 0 1-26-26Zm0 90a26 26 0 1 1 26 26 26 26 0 0 1-26-26Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipsis-vertical-circle"><path d="M464 256c0-114.87-93.13-208-208-208S48 141.13 48 256s93.13 208 208 208 208-93.13 208-208Zm-234-90a26 26 0 1 1 26 26 26 26 0 0 1-26-26Zm0 90a26 26 0 1 1 26 26 26 26 0 0 1-26-26Zm0 90a26 26 0 1 1 26 26 26 26 0 0 1-26-26Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipsis-vertical-outline"><circle cx="256" cy="256" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="416" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="96" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipsis-vertical-sharp"><circle cx="256" cy="256" r="48" /><circle cx="256" cy="416" r="48" /><circle cx="256" cy="96" r="48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ellipsis-vertical"><circle cx="256" cy="256" r="48" /><circle cx="256" cy="416" r="48" /><circle cx="256" cy="96" r="48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-enter-outline"><path d="M176 176v-40a40 40 0 0 1 40-40h208a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H216a40 40 0 0 1-40-40v-40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m272 336 80-80-80-80M48 256h288" /></symbol><symbol  viewBox="0 0 512 512" id="icon-enter-sharp"><path d="M160 240h147.37l-64-64L266 153.37 368.63 256 266 358.63 243.37 336l64-64H160v148a12 12 0 0 0 12 12h296a12 12 0 0 0 12-12V92a12 12 0 0 0-12-12H172a12 12 0 0 0-12 12ZM32 240h128v32H32z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-enter"><path d="M160 136v104h153.37l-52.68-52.69a16 16 0 0 1 22.62-22.62l80 80a16 16 0 0 1 0 22.62l-80 80a16 16 0 0 1-22.62-22.62L313.37 272H160v104a56.06 56.06 0 0 0 56 56h208a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56H216a56.06 56.06 0 0 0-56 56ZM48 240a16 16 0 0 0 0 32h112v-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-exit-outline"><path d="M320 176v-40a40 40 0 0 0-40-40H88a40 40 0 0 0-40 40v240a40 40 0 0 0 40 40h192a40 40 0 0 0 40-40v-40M384 176l80 80-80 80M191 256h273" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-exit-sharp"><path d="M335.69 272h-161v-32h161V92a12 12 0 0 0-12-12h-280a12 12 0 0 0-12 12v328a12 12 0 0 0 12 12h280a12 12 0 0 0 12-12ZM419.06 272l-64 64 22.63 22.63L480.31 256 377.69 153.37 355.06 176l64 64h-83.37v32h83.37z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-exit"><path d="M336 376V272H191a16 16 0 0 1 0-32h145V136a56.06 56.06 0 0 0-56-56H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h192a56.06 56.06 0 0 0 56-56ZM425.37 272l-52.68 52.69a16 16 0 0 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62l-80-80a16 16 0 0 0-22.62 22.62L425.37 240H336v32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-expand-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M432 320v112H320M421.8 421.77 304 304M80 192V80h112M90.2 90.23 208 208M320 80h112v112M421.77 90.2 304 208M192 432H80V320M90.23 421.8 208 304" /></symbol><symbol  viewBox="0 0 512 512" id="icon-expand-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M432 320v112H320M421.8 421.77 304 304M80 192V80h112M90.2 90.23 208 208M320 80h112v112M421.77 90.2 304 208M192 432H80V320M90.23 421.8 208 304" /></symbol><symbol  viewBox="0 0 512 512" id="icon-expand"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M432 320v112H320M421.8 421.77 304 304M80 192V80h112M90.2 90.23 208 208M320 80h112v112M421.77 90.2 304 208M192 432H80V320M90.23 421.8 208 304" /></symbol><symbol  viewBox="0 0 512 512" id="icon-extension-puzzle-outline"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M413.66 246.1H386a2 2 0 0 1-2-2v-77.24A38.86 38.86 0 0 0 345.14 128H267.9a2 2 0 0 1-2-2V98.34c0-27.14-21.5-49.86-48.64-50.33a49.53 49.53 0 0 0-50.4 49.51V126a2 2 0 0 1-2 2H87.62A39.74 39.74 0 0 0 48 167.62V238a2 2 0 0 0 2 2h26.91c29.37 0 53.68 25.48 54.09 54.85.42 29.87-23.51 57.15-53.29 57.15H50a2 2 0 0 0-2 2v70.38A39.74 39.74 0 0 0 87.62 464H158a2 2 0 0 0 2-2v-20.93c0-30.28 24.75-56.35 55-57.06 30.1-.7 57 20.31 57 50.28V462a2 2 0 0 0 2 2h71.14A38.86 38.86 0 0 0 384 425.14v-78a2 2 0 0 1 2-2h28.48c27.63 0 49.52-22.67 49.52-50.4s-23.2-48.64-50.34-48.64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-extension-puzzle-sharp"><path d="M345.14 480H256v-45.71a31.3 31.3 0 0 0-9.59-22.65c-7.67-7.56-18.83-11.81-30.57-11.64a44.38 44.38 0 0 0-28.45 10.67c-5.2 4.6-11.39 12.56-11.39 24.42V480H87.62A55.68 55.68 0 0 1 32 424.38V336h45.71c9.16 0 18.07-3.92 25.09-11a42.06 42.06 0 0 0 12.2-29.92C114.7 273.89 97.26 256 76.91 256H32v-89.34a53.77 53.77 0 0 1 16.53-39A55.88 55.88 0 0 1 87.62 112h63.24V97.52A65.53 65.53 0 0 1 217.54 32c35.49.62 64.36 30.38 64.36 66.33V112h63.24A54.28 54.28 0 0 1 400 166.86v63.24h13.66c36.58 0 66.34 29 66.34 64.64 0 36.61-29.39 66.4-65.52 66.4H400v63.24c0 30.67-24.61 55.62-54.86 55.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-extension-puzzle"><path d="M345.14 480H274a18 18 0 0 1-18-18v-27.71a31.32 31.32 0 0 0-9.71-22.77c-7.78-7.59-19.08-11.8-30.89-11.51-21.36.5-39.4 19.3-39.4 41.06V462a18 18 0 0 1-18 18H87.62A55.62 55.62 0 0 1 32 424.38V354a18 18 0 0 1 18-18h27.71c9.16 0 18.07-3.92 25.09-11a42.06 42.06 0 0 0 12.2-29.92C114.7 273.89 97.26 256 76.91 256H50a18 18 0 0 1-18-18v-70.38A55.62 55.62 0 0 1 87.62 112h55.24a8 8 0 0 0 8-8v-6.48A65.53 65.53 0 0 1 217.54 32c35.49.62 64.36 30.38 64.36 66.33V104a8 8 0 0 0 8 8h55.24A54.86 54.86 0 0 1 400 166.86v55.24a8 8 0 0 0 8 8h5.66c36.58 0 66.34 29 66.34 64.64 0 36.61-29.39 66.4-65.52 66.4H408a8 8 0 0 0-8 8v56A54.86 54.86 0 0 1 345.14 480Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-eye-off-outline"><path d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448ZM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58 2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1 204.8 204.8 0 0 1-51.16 6.47ZM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83 2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1 192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16 310.72 310.72 0 0 1-64.12 72.73 2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13 343.49 343.49 0 0 0 68.64-78.48 32.2 32.2 0 0 0-.1-34.78Z" /><path d="M256 160a95.88 95.88 0 0 0-21.37 2.4 2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160ZM165.78 233.66a2 2 0 0 0-3.38 1 96 96 0 0 0 115 115 2 2 0 0 0 1-3.38Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-eye-off-sharp"><path d="m63.998 86.004 21.998-21.998L448 426.01l-21.998 21.998zM259.34 192.09l60.57 60.57a64.07 64.07 0 0 0-60.57-60.57ZM252.66 319.91l-60.57-60.57a64.07 64.07 0 0 0 60.57 60.57Z" /><path d="M256 352a96 96 0 0 1-92.6-121.34l-69.07-69.08C66.12 187.42 39.24 221.14 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416A233.47 233.47 0 0 0 335 402.2l-53.61-53.6A95.84 95.84 0 0 1 256 352ZM256 160a96 96 0 0 1 92.6 121.34L419.26 352c29.15-26.25 56.07-61.56 76.74-96-26.38-43.43-62.9-88.56-101.18-114.82C351.1 111.2 304.31 96 255.76 96a222.92 222.92 0 0 0-78.21 14.29l53.11 53.11A95.84 95.84 0 0 1 256 160Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-eye-off"><path d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448ZM248 315.85l-51.79-51.79a2 2 0 0 0-3.39 1.69 64.11 64.11 0 0 0 53.49 53.49 2 2 0 0 0 1.69-3.39ZM264 196.15 315.87 248a2 2 0 0 0 3.4-1.69 64.13 64.13 0 0 0-53.55-53.55 2 2 0 0 0-1.72 3.39Z" /><path d="M491 273.36a32.2 32.2 0 0 0-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 0 0-71.82 11.79 4 4 0 0 0-1.56 6.63l47.24 47.24a4 4 0 0 0 3.82 1.05 96 96 0 0 1 116 116 4 4 0 0 0 1.05 3.81l67.95 68a4 4 0 0 0 5.4.24 343.81 343.81 0 0 0 67.24-77.4ZM256 352a96 96 0 0 1-93.3-118.63 4 4 0 0 0-1.05-3.81l-66.84-66.87a4 4 0 0 0-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0 0 72.64-11.55 4 4 0 0 0 1.61-6.64l-47.47-47.46a4 4 0 0 0-3.81-1.05A96 96 0 0 1 256 352Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-eye-outline"><path d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="256" cy="256" r="80" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-eye-sharp"><circle cx="256" cy="256" r="64" /><path d="M394.82 141.18C351.1 111.2 304.31 96 255.76 96c-43.69 0-86.28 13-126.59 38.48C88.52 160.23 48.67 207 16 256c26.42 44 62.56 89.24 100.2 115.18C159.38 400.92 206.33 416 255.76 416c49 0 95.85-15.07 139.3-44.79C433.31 345 469.71 299.82 496 256c-26.38-43.43-62.9-88.56-101.18-114.82ZM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-eye"><circle cx="256" cy="256" r="64" /><path d="M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 0 0-.1-34.76ZM256 352a96 96 0 1 1 96-96 96.11 96.11 0 0 1-96 96Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-eyedrop-outline"><path d="M262.51 204.22 70 396.69C57.56 409.15 48 464 48 464s54.38-9.09 67.31-22L307.8 249.51" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="211.72" y="172.19" width="192.15" height="64.05" rx="32.03" ry="32.03" transform="rotate(45 307.788 204.2)" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M289.91 141s20.57 8.57 37.22-8.08l54.67-70.63c18.5-19.41 49.26-18.69 67.94 0h0c18.68 18.68 19.34 48.81 0 67.93l-70.68 54.67c-15.65 15.65-8.08 37.22-8.08 37.22M115.31 442s-26.48 17.34-44.56-.73-.75-44.58-.75-44.58" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-eyedrop-sharp"><path d="M480 96.22a63.84 63.84 0 0 0-18.95-45.61 65 65 0 0 0-45.71-19h-.76a61.78 61.78 0 0 0-44.22 19.09l-74.88 74.88-33.88-33.86-34.07 33.91-33.85 34 44 44L32 409.37V480h70.63l205.7-205.71L352 317.94l11.31-11.19c.11-.1 10.42-10.31 22.79-22.68l33.85-34-33.89-33.89L461 141.23a63.18 63.18 0 0 0 19-45.01ZM245 292.35 219.65 267l40.68-40.69 25.38 25.38Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-eyedrop"><path d="M461.05 51a65 65 0 0 0-45.71-19h-.76a61.81 61.81 0 0 0-44.36 19.25 12.81 12.81 0 0 0-1.07 1.25l-54 69.76c-5.62 7.1-12.74 8.68-16.78 4.64l-1.9-1.9a48 48 0 0 0-67.92 67.92l9.91 9.91a2 2 0 0 1 0 2.83L58.7 385.38C54 390.05 46.9 399.85 38.85 431c-4.06 15.71-6.51 29.66-6.61 30.24A16 16 0 0 0 48 480a15.68 15.68 0 0 0 2.64-.22c.58-.1 14.44-2.43 30.13-6.44 31.07-7.94 41.05-15.24 45.85-20l179.77-179.79a2 2 0 0 1 2.82 0l9.92 9.92a48 48 0 0 0 67.92-67.93l-1.59-1.54c-5-5-2.52-12.11 4.32-17.14l69.75-53.94a17.82 17.82 0 0 0 1.47-1.32 63.2 63.2 0 0 0 19-45A63.88 63.88 0 0 0 461.05 51ZM250.78 283.9c-2.92 2.92-16.18 7.92-23.39.71s-2.24-20.42.69-23.35l33-33a2 2 0 0 1 2.83 0l19.84 19.83a2 2 0 0 1 0 2.83Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-fast-food-outline"><path d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64M336 336c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path d="M344 336H179.31a8 8 0 0 0-5.65 2.34l-26.83 26.83a4 4 0 0 1-5.66 0l-26.83-26.83a8 8 0 0 0-5.65-2.34H56a24 24 0 0 1-24-24h0a24 24 0 0 1 24-24h288a24 24 0 0 1 24 24h0a24 24 0 0 1-24 24ZM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path d="M256 480h139.31a32 32 0 0 0 31.91-29.61L463 112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m368 112 16-64 47-16" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M224 112h256" /></symbol><symbol  viewBox="0 0 512 512" id="icon-fast-food-sharp"><path d="M384 352H184.36l-41 35-41-35H16v24c0 30.59 21.13 55.51 47.26 56 2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55 8.85-10.69 14.73-24.35 17.16-39.47 13.88-.25 26.35-7.4 35-18.63A61.26 61.26 0 0 0 384 376ZM105 320l38.33 28.19L182 320h202v-8a40.07 40.07 0 0 0-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0 0 16 312v8h89Z" /><path d="M463.08 96h-74.59l8.92-35.66L442 45l-10-29-62 20-14.49 60H208v32h18.75l1.86 16H236c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 0 1 371 218.07a124.16 124.16 0 0 1 10.73 32.65 72 72 0 0 1 27.89 90.9A96 96 0 0 1 416 376c0 22.34-7.6 43.63-21.4 59.95a80 80 0 0 1-31.83 22.95 109.21 109.21 0 0 1-18.53 33c-1.18 1.42-2.39 2.81-3.63 4.15H416c16 0 23-8 25-23l36.4-345H496V96Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-fast-food"><path d="M368 128h.09M479.55 96h-91.06l8.92-35.66 38.32-13.05c8.15-2.77 13-11.43 10.65-19.71a16 16 0 0 0-20.54-10.73l-47 16a16 16 0 0 0-10.36 11.27L355.51 96H224.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 224 128h2.75l1 8.66A8.3 8.3 0 0 0 236 144c39 0 73.66 10.9 100.12 31.52A121.9 121.9 0 0 1 371 218.07a123.4 123.4 0 0 1 10.12 29.51 7.83 7.83 0 0 0 3.29 4.88 72 72 0 0 1 26.38 86.43 7.92 7.92 0 0 0-.15 5.53A96 96 0 0 1 416 376c0 22.34-7.6 43.63-21.4 59.95a80.12 80.12 0 0 1-28.78 21.67 8 8 0 0 0-4.21 4.37 108.19 108.19 0 0 1-17.37 29.86 2.5 2.5 0 0 0 1.9 4.11h49.21a48.22 48.22 0 0 0 47.85-44.14L477.4 128h2.6a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23Z" /><path d="M108.69 320a23.87 23.87 0 0 1 17 7l15.51 15.51a4 4 0 0 0 5.66 0L162.34 327a23.87 23.87 0 0 1 17-7h196.58a8 8 0 0 0 8.08-7.92V312a40.07 40.07 0 0 0-32-39.2c-.82-29.69-13-54.54-35.51-72C295.67 184.56 267.85 176 236 176h-72c-68.22 0-114.43 38.77-116 96.8A40.07 40.07 0 0 0 16 312a8 8 0 0 0 8 8ZM185.94 352a8 8 0 0 0-5.66 2.34l-22.14 22.15a20 20 0 0 1-28.28 0l-22.14-22.15a8 8 0 0 0-5.66-2.34h-69.4a15.93 15.93 0 0 0-15.76 13.17A65.22 65.22 0 0 0 16 376c0 30.59 21.13 55.51 47.26 56 2.43 15.12 8.31 28.78 17.16 39.47C93.51 487.28 112.54 496 134 496h132c21.46 0 40.49-8.72 53.58-24.55 8.85-10.69 14.73-24.35 17.16-39.47 26.13-.47 47.26-25.39 47.26-56a65.22 65.22 0 0 0-.9-10.83A15.93 15.93 0 0 0 367.34 352Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-female-outline"><circle cx="256" cy="184" r="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 336v144M314 416H198" /></symbol><symbol  viewBox="0 0 512 512" id="icon-female-sharp"><path d="M430 190c0-95.94-78.06-174-174-174S82 94.06 82 190c0 88.49 66.4 161.77 152 172.61V394h-58v44h58v58h44v-58h58v-44h-58v-31.39c85.6-10.84 152-84.12 152-172.61Zm-304 0c0-71.68 58.32-130 130-130s130 58.32 130 130-58.32 130-130 130-130-58.32-130-130Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-female"><path d="M430 190c0-95.94-78.06-174-174-174S82 94.06 82 190c0 88.49 66.4 161.77 152 172.61V394h-36a22 22 0 0 0 0 44h36v36a22 22 0 0 0 44 0v-36h36a22 22 0 0 0 0-44h-36v-31.39c85.6-10.84 152-84.12 152-172.61Zm-304 0c0-71.68 58.32-130 130-130s130 58.32 130 130-58.32 130-130 130-130-58.32-130-130Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-file-tray-full-outline"><path d="M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48V272l-32-152c-5-27-23-40-48-40Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M48 272h144M320 272h144M192 272a64 64 0 0 0 128 0M144 144h224M128 208h256" /></symbol><symbol  viewBox="0 0 512 512" id="icon-file-tray-full-sharp"><path d="M128 128h256v38H128zM112 192h288v38H112z" /><path d="M448 64H64L32 256v192h448V256Zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-file-tray-full"><path d="m479.66 268.7-32-151.81C441.48 83.77 417.68 64 384 64H128c-16.8 0-31 4.69-42.1 13.94s-18.37 22.31-21.58 38.89l-32 151.87A16.65 16.65 0 0 0 32 272v112a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V272a16.65 16.65 0 0 0-.34-3.3Zm-384-145.4v-.28c3.55-18.43 13.81-27 32.29-27H384c18.61 0 28.87 8.55 32.27 26.91 0 .13.05.26.07.39l26.93 127.88a4 4 0 0 1-3.92 4.82H320a15.92 15.92 0 0 0-16 15.82 48 48 0 1 1-96 0A15.92 15.92 0 0 0 192 256H72.65a4 4 0 0 1-3.92-4.82Z" /><path d="M368 160H144a16 16 0 0 1 0-32h224a16 16 0 0 1 0 32ZM384 224H128a16 16 0 0 1 0-32h256a16 16 0 0 1 0 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-file-tray-outline"><path d="M384 80H128c-26 0-43 14-48 40L48 272v112a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48V272l-32-152c-5-27-23-40-48-40Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M48 272h144M320 272h144M192 272a64 64 0 0 0 128 0" /></symbol><symbol  viewBox="0 0 512 512" id="icon-file-tray-sharp"><path d="M448 64H64L32 256v192h448V256Zm-12 192H320a64 64 0 0 1-128 0H76l22-150h316Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-file-tray-stacked-outline"><path d="M48 336v96a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48v-96" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M48 336h144M320 336h144M192 336a64 64 0 0 0 128 0" /><path d="M384 32H128c-26 0-43 14-48 40L48 192v96a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48v-96L432 72c-5-27-23-40-48-40Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M48 192h144M320 192h144M192 192a64 64 0 0 0 128 0" /></symbol><symbol  viewBox="0 0 512 512" id="icon-file-tray-stacked-sharp"><path d="M448 16H64L32 176v144h448V176Zm-12 160H320a64 64 0 0 1-128 0H76L98 58h316ZM320 352a64 64 0 0 1-128 0H32v144h448V352Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-file-tray-stacked"><path d="M464 352H320a16 16 0 0 0-16 16 48 48 0 0 1-96 0 16 16 0 0 0-16-16H48a16 16 0 0 0-16 16v64a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64v-64a16 16 0 0 0-16-16ZM479.46 187.88 447.61 68.45C441.27 35.59 417.54 16 384 16H128c-16.8 0-31 4.69-42.1 13.94S67.66 52 64.4 68.4L32.54 187.88A15.9 15.9 0 0 0 32 192v48c0 35.29 28.71 80 64 80h320c35.29 0 64-44.71 64-80v-48a15.9 15.9 0 0 0-.54-4.12ZM440.57 176H320a15.92 15.92 0 0 0-16 15.82 48 48 0 1 1-96 0A15.92 15.92 0 0 0 192 176H71.43a2 2 0 0 1-1.93-2.52L95.71 75c3.55-18.41 13.81-27 32.29-27h256c18.59 0 28.84 8.53 32.25 26.85l26.25 98.63a2 2 0 0 1-1.93 2.52Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-file-tray"><path d="m479.66 268.7-32-151.81C441.48 83.77 417.68 64 384 64H128c-16.8 0-31 4.69-42.1 13.94s-18.37 22.31-21.58 38.89l-32 151.87A16.65 16.65 0 0 0 32 272v112a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V272a16.65 16.65 0 0 0-.34-3.3Zm-384-145.4v-.28c3.55-18.43 13.81-27 32.29-27H384c18.61 0 28.87 8.55 32.27 26.91 0 .13.05.26.07.39l26.93 127.88a4 4 0 0 1-3.92 4.82H320a15.92 15.92 0 0 0-16 15.82 48 48 0 1 1-96 0A15.92 15.92 0 0 0 192 256H72.65a4 4 0 0 1-3.92-4.82Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-film-outline"><rect x="48" y="96" width="416" height="320" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="384" y="336" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="384" y="256" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="384" y="176" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="384" y="96" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="48" y="336" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="48" y="256" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="48" y="176" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="48" y="96" width="80" height="80" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="128" y="96" width="256" height="160" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="128" y="256" width="256" height="160" rx="28" ry="28" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-film-sharp"><path d="M480 80H32v352h448ZM112 352v48H64v-48Zm0-80v48H64v-48Zm0-80v48H64v-48Zm0-80v48H64v-48Zm256 160H144v-32h224Zm80 80v48h-48v-48Zm0-80v48h-48v-48Zm0-80v48h-48v-48Zm0-80v48h-48v-48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-film"><path d="M436 80H76a44.05 44.05 0 0 0-44 44v264a44.05 44.05 0 0 0 44 44h360a44.05 44.05 0 0 0 44-44V124a44.05 44.05 0 0 0-44-44ZM112 388a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12H76a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm241.68 124H158.32a16 16 0 0 1 0-32h195.36a16 16 0 1 1 0 32ZM448 388a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Zm0-80a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-filter-circle-outline"><path fill="none" stroke="currentColor" stroke-width="32" stroke-miterlimit="10" d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" /><path fill="none" stroke="#000" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" d="M144 208h224M176 272h160M224 336h64" /></symbol><symbol  viewBox="0 0 512 512" id="icon-filter-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm48 304h-96v-32h96Zm48-64H160v-32h192Zm32-64H128v-32h256Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-filter-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm32 304h-64a16 16 0 0 1 0-32h64a16 16 0 0 1 0 32Zm48-64H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32Zm32-64H144a16 16 0 0 1 0-32h224a16 16 0 0 1 0 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-filter-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M32 144h448M112 256h288M208 368h96" /></symbol><symbol  viewBox="0 0 512 512" id="icon-filter-sharp"><path d="M16 120h480v48H16zM96 232h320v48H96zM192 344h128v48H192z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-filter"><path d="M472 168H40a24 24 0 0 1 0-48h432a24 24 0 0 1 0 48ZM392 280H120a24 24 0 0 1 0-48h272a24 24 0 0 1 0 48ZM296 392h-80a24 24 0 0 1 0-48h80a24 24 0 0 1 0 48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-finger-print-outline"><path d="M390.42 75.28a10.45 10.45 0 0 1-5.32-1.44C340.72 50.08 302.35 40 256.35 40c-45.77 0-89.23 11.28-128.76 33.84C122 77 115.11 74.8 111.87 69a12.4 12.4 0 0 1 4.63-16.32A281.81 281.81 0 0 1 256.35 16c49.23 0 92.23 11.28 139.39 36.48a12 12 0 0 1 4.85 16.08 11.3 11.3 0 0 1-10.17 6.72Zm-330.79 126a11.73 11.73 0 0 1-6.7-2.16 12.26 12.26 0 0 1-2.78-16.8c22.89-33.6 52-60 86.69-78.48 72.58-38.84 165.51-39.12 238.32-.24 34.68 18.48 63.8 44.64 86.69 78a12.29 12.29 0 0 1-2.78 16.8 11.26 11.26 0 0 1-16.18-2.88c-20.8-30.24-47.15-54-78.36-70.56-66.34-35.28-151.18-35.28-217.29.24-31.44 16.8-57.79 40.8-78.59 71a10 10 0 0 1-9.02 5.08ZM204.1 491a10.66 10.66 0 0 1-8.09-3.6C175.9 466.48 165 453 149.55 424c-16-29.52-24.27-65.52-24.27-104.16 0-71.28 58.71-129.36 130.84-129.36S387 248.56 387 319.84a11.56 11.56 0 1 1-23.11 0c0-58.08-48.32-105.36-107.72-105.36S148.4 261.76 148.4 319.84c0 34.56 7.39 66.48 21.49 92.4 14.8 27.6 25 39.36 42.77 58.08a12.67 12.67 0 0 1 0 17 12.44 12.44 0 0 1-8.56 3.68Zm165.75-44.4c-27.51 0-51.78-7.2-71.66-21.36a129.1 129.1 0 0 1-55-105.36 11.57 11.57 0 1 1 23.12 0 104.28 104.28 0 0 0 44.84 85.44c16.41 11.52 35.6 17 58.72 17a147.41 147.41 0 0 0 24-2.4c6.24-1.2 12.25 3.12 13.4 9.84a11.92 11.92 0 0 1-9.47 13.92 152.28 152.28 0 0 1-27.95 2.88ZM323.38 496a13 13 0 0 1-3-.48c-36.76-10.56-60.8-24.72-86-50.4-32.37-33.36-50.16-77.76-50.16-125.28 0-38.88 31.9-70.56 71.19-70.56s71.2 31.68 71.2 70.56c0 25.68 21.5 46.56 48.08 46.56s48.08-20.88 48.08-46.56c0-90.48-75.13-163.92-167.59-163.92-65.65 0-125.75 37.92-152.79 96.72-9 19.44-13.64 42.24-13.64 67.2 0 18.72 1.61 48.24 15.48 86.64 2.32 6.24-.69 13.2-6.7 15.36a11.34 11.34 0 0 1-14.79-7 276.39 276.39 0 0 1-16.88-95c0-28.8 5.32-55 15.72-77.76 30.75-67 98.94-110.4 173.6-110.4 105.18 0 190.71 84.24 190.71 187.92 0 38.88-31.9 70.56-71.2 70.56s-71.2-31.68-71.2-70.56c.01-25.68-21.49-46.6-48.07-46.6s-48.08 20.88-48.08 46.56c0 41 15.26 79.44 43.23 108.24 22 22.56 43 35 75.59 44.4 6.24 1.68 9.71 8.4 8.09 14.64a11.39 11.39 0 0 1-10.87 9.16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-finger-print-sharp"><path d="m56.79 200.58 12.36 7.5 7.35-13.58C93.07 166.75 143.78 102 256 102c115 0 164 70.32 180.1 93.46l8.16 12.7L469.88 192l-8.54-13.36c-8.88-12.85-27.52-39.53-60.78-63.1C360.15 86.82 311.5 72.25 256 72.25c-128.07 0-186.69 75.11-206 107.25L42.63 192 54 198.86a14.09 14.09 0 0 0 1.63 1.1 12.57 12.57 0 0 0 1.16.62Z" /><path d="M379.22 172.32c-35.54-28.93-78.12-44.25-123.22-44.25-97.52 0-162.31 66-183.33 131.47C53.42 320 76.82 407.61 77.8 411.36l4.38 13.81 29.93-6.43-4.74-15c-.21-.75-22.1-82.93-5.41-135.21 9-28.08 27.73-55.4 51.35-74.79C181.81 170.39 217.35 158 256 158c90.58 0 141.93 70.61 156.45 108.11 11.27 28.93 8.67 61.82-6.28 82-5.53 7.39-15.28 16.07-30.12 15.32-33.81-1.72-39.66-18.43-47.79-50.25-3.9-15.32-7.9-31.18-17.87-44-12.14-15.75-29.8-23.36-54.28-23.36-26.33 0-46.27 8.68-59.38 25.72-28.6 37.28-10 100.93-9.21 103.61l.22.85c1.41 3.86 36.08 96.65 128.93 119.68l14.77 3.21 8.09-28.71-15.27-3.43c-74.22-18.43-105.21-94.39-107.59-100.39a152.44 152.44 0 0 1-5.1-29.79c-1.08-14.46-.32-34.39 9.43-47.14 7.15-9.32 18.64-13.82 35-13.82 29.79 0 34.78 14.57 42.58 44.79 7.58 29.46 18 69.85 75.84 72.75 22.21 1.07 42.26-8.79 56.34-27.65 21.13-28.28 25.14-71.57 10.19-110.14-11.68-30.36-34.21-60.54-61.73-83.04Z" /><path d="M154.18 343.21c-3.47-28.28 1.41-71 26.55-98.78 17.44-19.29 42.79-29 75.19-29 37.49 0 65.87 16.72 84.51 49.61a154 154 0 0 1 17.88 53.25l1.43 14.69 30-2.2a112.63 112.63 0 0 0-1-15.6c-.11-1.28-3.57-32.46-21-63.75-24.06-43.11-62.63-65.93-111.74-65.93-41.5 0-74.55 13.18-98.06 39.11-31.85 35.14-38.35 86.25-33.91 122.35v.33c7.97 54.53 28.97 98.14 66.12 137.14l11.6 11.22 20.95-21.79-10.34-9.79c-32.72-34.28-51.25-72.64-58.18-120.86ZM132.47 72.66c11.08-6.72 50.27-26.77 123.53-26.77 87.54 0 126.44 28.72 126.87 28.93l13.9 8.86L413 58.47l-13.22-8.56c-.52-.38-1.06-.76-1.6-1.12C385.5 40.54 340.54 16 256 16c-87.71 0-132.75 26.48-143.41 33.71L99 58.52l16.2 25.21Z" /><path d="M390.59 415.21c-33.37 3.75-60.45-2.67-80.71-18.85-34.24-27.43-38.68-75.11-38.79-76l-1.23-14.88-30.53 2.23 1.31 15c.22 2.46 5.2 60.75 49.62 96.54 22.11 17.89 49.74 26.89 82.24 26.89a187 187 0 0 0 21.56-1.29l16.59-2.09-6.1-29.71Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-finger-print"><path d="M63.28 202a15.29 15.29 0 0 1-7.7-2 14.84 14.84 0 0 1-5.52-20.46C69.34 147.36 128 72.25 256 72.25c55.47 0 104.12 14.57 144.53 43.29 33.26 23.57 51.9 50.25 60.78 63.1a14.79 14.79 0 0 1-4 20.79 15.52 15.52 0 0 1-21.24-4C420 172.32 371 102 256 102c-112.25 0-163 64.71-179.53 92.46A15 15 0 0 1 63.28 202Z" /><path d="M320.49 496a15.31 15.31 0 0 1-3.79-.43c-92.85-23-127.52-115.82-128.93-119.68l-.22-.85c-.76-2.68-19.39-66.33 9.21-103.61 13.11-17 33.05-25.72 59.38-25.72 24.48 0 42.14 7.61 54.28 23.36 10 12.86 14 28.72 17.87 44 8.13 31.82 14 48.53 47.79 50.25 14.84.75 24.59-7.93 30.12-15.32 14.95-20.15 17.55-53 6.28-82C398 228.57 346.61 158 256 158c-38.68 0-74.22 12.43-102.72 35.79-23.59 19.35-42.28 46.67-51.28 74.75-16.69 52.28 5.2 134.46 5.41 135.21A14.83 14.83 0 0 1 96.54 422a15.39 15.39 0 0 1-18.74-10.6c-1-3.75-24.38-91.4-5.1-151.82 21-65.47 85.81-131.47 183.33-131.47 45.07 0 87.65 15.32 123.19 44.25 27.52 22.5 50 52.72 61.76 82.93 14.95 38.57 10.94 81.86-10.19 110.14-14.08 18.86-34.13 28.72-56.34 27.65-57.86-2.9-68.26-43.29-75.84-72.75-7.8-30.22-12.79-44.79-42.58-44.79-16.36 0-27.85 4.5-35 13.82-9.75 12.75-10.51 32.68-9.43 47.14a152.44 152.44 0 0 0 5.1 29.79c2.38 6 33.37 82 107.59 100.39a14.88 14.88 0 0 1 11 18.11 15.36 15.36 0 0 1-14.8 11.21Z" /><path d="M201.31 489.14a15.5 15.5 0 0 1-11.16-4.71c-37.16-39-58.18-82.61-66.09-137.14V347c-4.44-36.1 2.06-87.21 33.91-122.35 23.51-25.93 56.56-39.11 98.06-39.11 49.08 0 87.65 22.82 111.7 65.89 17.45 31.29 20.91 62.47 21 63.75a15.07 15.07 0 0 1-13.65 16.4 15.26 15.26 0 0 1-16.79-13.29A154 154 0 0 0 340.43 265c-18.64-32.89-47-49.61-84.51-49.61-32.4 0-57.75 9.75-75.19 29-25.14 27.75-30 70.5-26.55 98.78 6.93 48.22 25.46 86.58 58.18 120.86a14.7 14.7 0 0 1-.76 21.11 15.44 15.44 0 0 1-10.29 4Z" /><path d="M372.5 446.18c-32.5 0-60.13-9-82.24-26.89-44.42-35.79-49.4-94.08-49.62-96.54a15.27 15.27 0 0 1 30.45-2.36c.11.86 4.55 48.54 38.79 76 20.26 16.18 47.34 22.6 80.71 18.85a15.2 15.2 0 0 1 16.91 13.18 14.92 14.92 0 0 1-13.44 16.5 187 187 0 0 1-21.56 1.26ZM398.18 48.79C385.5 40.54 340.54 16 256 16c-88.74 0-133.81 27.11-143.78 34a11.59 11.59 0 0 0-1.84 1.4.36.36 0 0 1-.22.1 14.87 14.87 0 0 0-5.09 11.15 15.06 15.06 0 0 0 15.31 14.85 15.56 15.56 0 0 0 8.88-2.79c.43-.32 39.22-28.82 126.77-28.82S382.58 74.29 383 74.5a15.25 15.25 0 0 0 9.21 3 15.06 15.06 0 0 0 15.29-14.89 14.9 14.9 0 0 0-9.32-13.82Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-fish-outline"><path fill="none" stroke="currentColor" stroke-width="32" stroke-linejoin="round" d="M240 152c-50.71 12.21-94.15 52.31-120.3 73.43a261.14 261.14 0 0 0-23.81-19.58C59.53 179.29 16 176 16 176s11.37 51.53 41.36 79.83C27.37 284.14 16 335.67 16 335.67s43.53-3.29 79.89-29.85a259.18 259.18 0 0 0 23.61-19.41c26.1 21.14 69.74 61.34 120.5 73.59l-16 56c39.43-6.67 78.86-35.51 94.72-48.25C448 362 496 279 496 256c0-22-48-106-176.89-111.73C303.52 131.78 263.76 102.72 224 96Z" /><circle cx="416" cy="239.99" r="16" /><path fill="none" stroke="#000" stroke-width="32" stroke-linecap="round" stroke-miterlimit="20" d="M378.37 356a199.22 199.22 0 0 1 0-200" /></symbol><symbol  viewBox="0 0 512 512" id="icon-fish-sharp"><path d="M335.45 256a214.83 214.83 0 0 1 29.08-108l7.62-13.26a280.69 280.69 0 0 0-48.64-7.15c-21.94-16.9-54.64-36.95-92.34-43.33L208 80l13.37 61.86c-41.67 14.14-78.43 42.86-102.76 62.62q-7.06-5.91-14.78-11.55c-39.71-29-82.6-31.8-84.4-31.9L0 160l2.67 19.31c.29 2 6.79 44.73 31.65 76.52C9.46 287.63 3 330.33 2.67 332.36L0 352l19.43-1.36c1.8-.1 44.69-2.89 84.4-31.9q7.58-5.53 14.56-11.37c24.37 19.83 61.14 48.6 102.86 62.74L208 432l23.17-4.22c37.49-6.34 70.08-26.4 92-43.32a284.27 284.27 0 0 0 49.32-7.23l-7.91-13.18A214.92 214.92 0 0 1 335.45 256Z" /><path d="M499.59 221.75c-5.85-9.88-16.54-24.9-34.19-40.28a209.82 209.82 0 0 0-62-37L392.23 164a183.22 183.22 0 0 0-.09 183.87l11.75 19.57a209.26 209.26 0 0 0 61.42-36.49C497.05 303.47 512 269 512 256c0-12.31-8-26.74-12.41-34.25ZM416 256a16 16 0 1 1 16-16 16 16 0 0 1-16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-fish"><path d="M512 256c0-16.54-14.27-46.76-45.61-74a207.06 207.06 0 0 0-60.28-36.12 3.15 3.15 0 0 0-3.93 1.56c-.15.29-.3.57-.47.86l-9.59 15.9a183.24 183.24 0 0 0 .07 183.78l.23.39 8.74 16a4 4 0 0 0 4.94 1.82C479.63 337.42 512 281.49 512 256Zm-93.92-.14a16 16 0 1 1 13.79-13.79 16 16 0 0 1-13.79 13.79Z" /><path d="M335.45 256a214.8 214.8 0 0 1 29.08-108l.12-.21 4.62-7.67a4 4 0 0 0-2.59-6 284.29 284.29 0 0 0-39.26-5.39 7.94 7.94 0 0 1-4.29-1.6c-19.28-14.66-57.5-40.3-96.46-46.89a16 16 0 0 0-18 20.18l10.62 37.17a4 4 0 0 1-2.42 4.84c-36.85 13.69-68.59 38.75-91.74 57.85a8 8 0 0 1-10.06.06q-4.72-3.75-9.69-7.39c-39.64-28.95-86.21-32.76-88.17-32.9a16 16 0 0 0-16.83 19.4c.42 1.93 9.19 40.69 31.7 71.61a8.09 8.09 0 0 1 0 9.55C9.57 291.52.8 330.29.38 332.22a16 16 0 0 0 16.83 19.4c2-.14 48.53-4 88.12-32.88q4.85-3.56 9.47-7.22a8 8 0 0 1 10.06.07c23.25 19.19 55.05 44.28 92 58a4 4 0 0 1 2.42 4.83l-10.66 37.18a16 16 0 0 0 18 20.18c17.16-2.9 51.88-12.86 96.05-46.83a8.15 8.15 0 0 1 4.36-1.65 287.36 287.36 0 0 0 39.22-5.3 4 4 0 0 0 2.69-5.83l-4.51-8.29A214.81 214.81 0 0 1 335.45 256Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-fitness-outline"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M48 256h112l48-96 48 160 48-96 32 64h128" /></symbol><symbol  viewBox="0 0 512 512" id="icon-fitness-sharp"><path d="M480 272h-37.34a261.41 261.41 0 0 1-18.25 32H480ZM32 240v32h37.34a225.1 225.1 0 0 1-12.4-32Z" /><path d="m304 259.78-51.73 103.46-48-160L169.89 272H69.34c10 20.92 23.5 41.41 40.63 61.68 40.12 47.46 94.25 79.75 137 108.32l9 6 9-6c42.78-28.57 96.91-60.86 137-108.32A322.78 322.78 0 0 0 424.41 304h-98.3Z" /><path d="m211.73 116.76 48 160L304 188.22 345.89 272h96.77A213.13 213.13 0 0 0 464 176.65C463.37 114.54 413.54 64 352.92 64c-48.11 0-80.1 28-96.92 48.21C239.18 92 207.19 64 159.08 64 98.46 64 48.63 114.54 48 176.65A211.23 211.23 0 0 0 56.94 240h93.17Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-fitness"><path d="M193.69 152.84a16 16 0 0 1 29.64 2.56l36.4 121.36 30-59.92a16 16 0 0 1 28.62 0L345.89 272h96.76A213.08 213.08 0 0 0 464 176.65C463.37 114.54 413.54 64 352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65A211.13 211.13 0 0 0 56.93 240h93.18Z" /><path d="M321.69 295.16 304 259.78l-33.69 67.38A16 16 0 0 1 256 336q-.67 0-1.38-.06a16 16 0 0 1-14-11.34l-36.4-121.36-30 59.92A16 16 0 0 1 160 272H69.35q14 29.29 37.27 57.66c18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0 0 36 0c78.59-53.35 112.62-89.93 131.39-112.81a316.79 316.79 0 0 0 19-25.66H336a16 16 0 0 1-14.31-8.84ZM464 272h-21.35a260.11 260.11 0 0 1-18.25 32H464a16 16 0 0 0 0-32ZM48 240a16 16 0 0 0 0 32h21.35a225.22 225.22 0 0 1-12.42-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flag-outline"><path d="M80 464V68.14a8 8 0 0 1 4-6.9C91.81 56.66 112.92 48 160 48c64 0 145 48 192 48a199.53 199.53 0 0 0 77.23-15.77 2 2 0 0 1 2.77 1.85v219.36a4 4 0 0 1-2.39 3.65C421.37 308.7 392.33 320 352 320c-48 0-128-32-192-32s-80 16-80 16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flag-sharp"><path d="M102 480H64V57.37l4.69-4.68C72.14 49.23 92.78 32 160 32c37.21 0 78.83 14.71 115.55 27.68C305.12 70.13 333.05 80 352 80c42.83 0 72.72-14.25 73-14.4l23-11.14v259.43l-8.84 4.42C437.71 319 403.19 336 352 336c-24.14 0-54.38-7.14-86.39-14.71C229.63 312.79 192.43 304 160 304c-36.87 0-49.74 5.58-58 9.11Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flag"><path d="M80 480a16 16 0 0 1-16-16V68.13a24 24 0 0 1 11.9-20.72C88 40.38 112.38 32 160 32c37.21 0 78.83 14.71 115.55 27.68C305.12 70.13 333.05 80 352 80a183.84 183.84 0 0 0 71-14.5 18 18 0 0 1 25 16.58v219.36a20 20 0 0 1-12 18.31c-8.71 3.81-40.51 16.25-84 16.25-24.14 0-54.38-7.14-86.39-14.71C229.63 312.79 192.43 304 160 304c-36.87 0-55.74 5.58-64 9.11V464a16 16 0 0 1-16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flame-outline"><path d="M112 320c0-93 124-165 96-272 66 0 192 96 192 272a144 144 0 0 1-288 0Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M320 368c0 57.71-32 80-64 80s-64-22.29-64-80 40-86 32-128c42 0 96 70.29 96 128Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flame-sharp"><path d="M394.24 197.56a300.67 300.67 0 0 0-53.38-90C301.2 61.65 240 32 192 32c19 70-14.36 117.12-44.79 163.77C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.76-122.44ZM288.33 418.69C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 6.48-14.07 14.66-27.22 15.11-44.49 11.3 5.88 23.67 16.91 34.54 31.28 18.17 24 29 52.42 29 76 .01 22.23-5.41 39.76-15.66 50.68Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flame"><path d="M394.23 197.56a300.43 300.43 0 0 0-53.37-90C301.2 61.65 249.05 32 208 32a16 16 0 0 0-15.48 20c13.87 53-14.88 97.07-45.31 143.72C122 234.36 96 274.27 96 320c0 88.22 71.78 160 160 160s160-71.78 160-160c0-43.3-7.32-84.49-21.77-122.44Zm-105.9 221.13C278 429.69 265.05 432 256 432s-22-2.31-32.33-13.31S208 390.24 208 368c0-25.14 8.82-44.28 17.34-62.78 4.95-10.74 10-21.67 13-33.37a8 8 0 0 1 12.49-4.51A126.48 126.48 0 0 1 275 292c18.17 24 29 52.42 29 76 0 22.24-5.42 39.77-15.67 50.69Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flash-off-outline"><path d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448ZM294.34 84.28l-22.08 120.84a16 16 0 0 0 6.17 15.71 16.49 16.49 0 0 0 9.93 3.17h94.12l-38.37 47.42a4 4 0 0 0 .28 5.34l17.07 17.07a4 4 0 0 0 5.94-.31l60.8-75.16a16.37 16.37 0 0 0 3.3-14.36 16 16 0 0 0-15.5-12H307.19L335.4 37.63c.05-.3.1-.59.13-.89A18.45 18.45 0 0 0 302.73 23l-92.58 114.46a4 4 0 0 0 .28 5.35l17.07 17.06a4 4 0 0 0 5.94-.31ZM217.78 427.57l22-120.71a16 16 0 0 0-6.19-15.7 16.54 16.54 0 0 0-9.92-3.16h-94.1l38.36-47.42a4 4 0 0 0-.28-5.34l-17.07-17.07a4 4 0 0 0-5.93.31L83.8 293.64A16.37 16.37 0 0 0 80.5 308 16 16 0 0 0 96 320h108.83l-28.09 154.36v.11a18.37 18.37 0 0 0 32.5 14.53l92.61-114.46a4 4 0 0 0-.28-5.35l-17.07-17.06a4 4 0 0 0-5.94.31Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flash-off-sharp"><path d="m63.998 86.004 21.998-21.998L448 426.01l-21.998 21.998zM80 304h144l-32 192 108.18-129.82-148.36-148.36L80 304zM432 208H288l32-192-108.18 129.82 148.36 148.36L432 208z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flash-off"><path d="M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448ZM431.5 204a16 16 0 0 0-15.5-12H307.19L335.4 37.63c.05-.3.1-.59.13-.89A18.45 18.45 0 0 0 302.73 23l-92.58 114.46a4 4 0 0 0 .29 5.35l151 151a4 4 0 0 0 5.94-.31l60.8-75.16A16.37 16.37 0 0 0 431.5 204ZM301.57 369.19l-151-151a4 4 0 0 0-5.93.31L83.8 293.64A16.37 16.37 0 0 0 80.5 308 16 16 0 0 0 96 320h108.83l-28.09 154.36v.11a18.37 18.37 0 0 0 32.5 14.53l92.61-114.46a4 4 0 0 0-.28-5.35Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flash-outline"><path d="M315.27 33 96 304h128l-31.51 173.23a2.36 2.36 0 0 0 2.33 2.77h0a2.36 2.36 0 0 0 1.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 0 0-2.44-2.75h0a2.42 2.42 0 0 0-1.95 1Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flash-sharp"><path d="M432 208H288l32-192L80 304h144l-32 192Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flash"><path d="M194.82 496a18.36 18.36 0 0 1-18.1-21.53v-.11L204.83 320H96a16 16 0 0 1-12.44-26.06L302.73 23a18.45 18.45 0 0 1 32.8 13.71c0 .3-.08.59-.13.89L307.19 192H416a16 16 0 0 1 12.44 26.06L209.24 489a18.45 18.45 0 0 1-14.42 7Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flashlight-outline"><path d="M456.64 162.86 349.12 55.36c-13.15-13.14-28.68-7.17-41.82 6l-11.95 12c-26.13 26.13-27.62 58.38-29.42 83.31-.89 12.24-9.78 27.55-18.51 36.28L58.58 381.67c-16.35 16.33-12.69 39.42 3.73 55.84l12.17 12.17c16.36 16.35 39.43 20.16 55.86 3.74l188.83-188.8c8.74-8.74 24-17.55 36.29-18.52 24.87-1.86 58.62-4.85 83.26-29.49l11.94-11.94c13.15-13.14 19.12-28.67 5.98-41.81Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="224.68" cy="287.28" r="20" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="m289 81 142 142" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flashlight-sharp"><path d="m330 16-42.68 42.7L453.3 224.68 496 182 330 16z" /><ellipse cx="224.68" cy="287.3" rx="20.03" ry="19.96" style="fill:none" /><path d="M429.21 243.85 268 82.59 249.65 168 16 402l94 94 234.23-233.8Zm-189 56.07a20 20 0 1 1 0-25.25 20 20 0 0 1-.02 25.25Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flashlight"><path d="M462 216c9.35-9.35 15.14-19.09 17.19-28.95 2.7-12.95-1.29-25.55-11.22-35.48L360.43 44.05C346.29 29.92 322 24.07 296 50l-2 2a8 8 0 0 0 0 11.32L448.64 218a8 8 0 0 0 11.36 0ZM250.14 153.08l-.16 2.34c-.53 7.18-6.88 19.15-13.88 26.14L47.27 370.36c-11.12 11.11-16.46 25.57-15.05 40.7C33.49 424.58 40.16 438 51 448.83L63.17 461c12.61 12.6 27.78 19 42.49 19a50.4 50.4 0 0 0 36-15.24l188.84-188.8c7.07-7.07 18.84-13.3 26.17-13.87 17.48-1.32 43.57-3.28 67.79-15.65a4 4 0 0 0 1-6.37L271.69 86.31a4 4 0 0 0-6.39 1c-12.12 22.99-13.82 46.91-15.16 65.77Zm-9.95 146.83a20 20 0 1 1 0-25.25 20 20 0 0 1 0 25.25Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flask-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M176 48h160M118 304h276M208 48v93.48a64.09 64.09 0 0 1-9.88 34.18L73.21 373.49C48.4 412.78 76.63 464 123.08 464h265.84c46.45 0 74.68-51.22 49.87-90.51L313.87 175.66a64.09 64.09 0 0 1-9.87-34.18V48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flask-sharp"><path d="M469.11 382.76 325 153.92V74h32V32H155v42h32v79.92L42.89 382.76c-13 20.64-14.78 43.73-3 65.1S71.59 480 96 480h320c24.41 0 44.32-10.76 56.1-32.14s10.04-44.46-2.99-65.1ZM224.39 173.39a29.76 29.76 0 0 0 4.62-16V74h54v84.59a25.85 25.85 0 0 0 4 13.82L356.82 283H155.18Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flask"><path d="M452.32 365 327.4 167.12a48.07 48.07 0 0 1-7.4-25.64V64h15.56c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 336 32H176.45c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 176 64h16v77.48a47.92 47.92 0 0 1-7.41 25.63L59.68 365a74 74 0 0 0-2.5 75.84C70.44 465.19 96.36 480 124.13 480h263.74c27.77 0 53.69-14.81 66.95-39.21a74 74 0 0 0-2.5-75.79ZM211.66 184.2A79.94 79.94 0 0 0 224 141.48V68a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4v73.48a79.94 79.94 0 0 0 12.35 42.72l57.8 91.53a8 8 0 0 1-6.78 12.27H160.63a8 8 0 0 1-6.77-12.27Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flower-outline"><path d="M215.08 156.92c-4.89-24-10.77-56.27-10.77-73.23A51.36 51.36 0 0 1 256 32h0c28.55 0 51.69 23.69 51.69 51.69 0 16.5-5.85 48.95-10.77 73.23M215.08 355.08c-4.91 24.06-10.77 56.16-10.77 73.23A51.36 51.36 0 0 0 256 480h0c28.55 0 51.69-23.69 51.69-51.69 0-16.54-5.85-48.93-10.77-73.23M355.08 215.08c24.06-4.91 56.16-10.77 73.23-10.77A51.36 51.36 0 0 1 480 256h0c0 28.55-23.69 51.69-51.69 51.69-16.5 0-48.95-5.85-73.23-10.77M156.92 215.07c-24-4.89-56.25-10.76-73.23-10.76A51.36 51.36 0 0 0 32 256h0c0 28.55 23.69 51.69 51.69 51.69 16.5 0 48.95-5.85 73.23-10.77" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path d="M296.92 156.92c13.55-20.48 32.3-47.25 44.37-59.31a51.35 51.35 0 0 1 73.1 0h0c20.19 20.19 19.8 53.3 0 73.1-11.66 11.67-38.67 30.67-59.31 44.37M156.92 296.92c-20.48 13.55-47.25 32.3-59.31 44.37a51.35 51.35 0 0 0 0 73.1h0c20.19 20.19 53.3 19.8 73.1 0 11.67-11.66 30.67-38.67 44.37-59.31M355.08 296.92c20.48 13.55 47.25 32.3 59.31 44.37a51.35 51.35 0 0 1 0 73.1h0c-20.19 20.19-53.3 19.8-73.1 0-11.69-11.69-30.66-38.65-44.37-59.31M215.08 156.92c-13.53-20.43-32.38-47.32-44.37-59.31a51.35 51.35 0 0 0-73.1 0h0c-20.19 20.19-19.8 53.3 0 73.1 11.61 11.61 38.7 30.68 59.31 44.37" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="256" r="64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flower-sharp"><circle cx="256" cy="256" r="43" /><path d="M475.93 303.91a67.49 67.49 0 0 0-47.62-115.6c-2.88 0-6.2.14-9.93.43 2.75-2.36 5.23-4.62 7.33-6.71A67.83 67.83 0 0 0 378 66.33h-.25a67.27 67.27 0 0 0-47.82 20c-2.11 2.11-4.37 4.59-6.72 7.33.29-3.75.44-7.07.44-9.93a67.69 67.69 0 1 0-135.38 0c0 2.87.15 6.19.44 9.93-2.36-2.74-4.62-5.22-6.72-7.33a67.27 67.27 0 0 0-47.82-20H134A67.9 67.9 0 0 0 86.29 182c2.1 2.09 4.58 4.35 7.34 6.72-3.74-.29-7.06-.44-9.94-.44a67.69 67.69 0 0 0 0 135.38c2.86 0 6.18-.15 9.93-.44-2.74 2.35-5.22 4.61-7.33 6.72a67.55 67.55 0 0 0 47.82 115.42h.25A67.32 67.32 0 0 0 182 425.71c2.09-2.1 4.35-4.58 6.71-7.33-.28 3.73-.43 7.05-.43 9.93a67.69 67.69 0 0 0 135.38 0c0-2.87-.15-6.19-.44-9.94 2.36 2.75 4.62 5.24 6.72 7.34a67.32 67.32 0 0 0 47.67 19.68h.25A67.5 67.5 0 0 0 425.71 330c-2.11-2.11-4.59-4.37-7.33-6.72 3.75.29 7.07.44 9.93.44a67.27 67.27 0 0 0 47.62-19.81ZM256 341a85 85 0 1 1 85-85 85.1 85.1 0 0 1-85 85Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-flower"><circle cx="256" cy="256" r="48" /><path d="M475.93 303.91a67.49 67.49 0 0 0-44.34-115.53 5.2 5.2 0 0 1-4.58-3.21 5.21 5.21 0 0 1 1-5.51A67.83 67.83 0 0 0 378 66.33h-.25A67.13 67.13 0 0 0 332.35 84a5.21 5.21 0 0 1-5.52 1 5.23 5.23 0 0 1-3.22-4.58 67.68 67.68 0 0 0-135.23 0 5.2 5.2 0 0 1-3.21 4.58 5.21 5.21 0 0 1-5.52-1 67.11 67.11 0 0 0-45.44-17.69H134a67.91 67.91 0 0 0-50 113.34 5.21 5.21 0 0 1 1 5.51 5.2 5.2 0 0 1-4.58 3.21 67.71 67.71 0 0 0 0 135.23 5.23 5.23 0 0 1 4.58 3.23 5.22 5.22 0 0 1-1 5.52 67.54 67.54 0 0 0 50.08 113h.25A67.38 67.38 0 0 0 179.65 428a5.21 5.21 0 0 1 5.51-1 5.2 5.2 0 0 1 3.21 4.58 67.71 67.71 0 0 0 135.23 0 5.23 5.23 0 0 1 3.22-4.58 5.21 5.21 0 0 1 5.51 1 67.38 67.38 0 0 0 45.29 17.42h.25a67.48 67.48 0 0 0 50.08-113 5.22 5.22 0 0 1-1-5.52 5.23 5.23 0 0 1 4.58-3.22 67.31 67.31 0 0 0 44.4-19.77ZM256 336a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-folder-open-outline"><path d="M64 192v-72a40 40 0 0 1 40-40h75.89a40 40 0 0 1 22.19 6.72l27.84 18.56a40 40 0 0 0 22.19 6.72H408a40 40 0 0 1 40 40v40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M479.9 226.55 463.68 392a40 40 0 0 1-39.93 40H88.25a40 40 0 0 1-39.93-40L32.1 226.55A32 32 0 0 1 64 192h384.1a32 32 0 0 1 31.8 34.55Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-folder-open-sharp"><path d="m16.08 189.4 28.58 233.87A28 28 0 0 0 72.52 448h367a28 28 0 0 0 27.86-24.73l28.54-233.87A12 12 0 0 0 484 176H28a12 12 0 0 0-11.92 13.4ZM464 124a28 28 0 0 0-28-28H244.84l-48-32H76a28 28 0 0 0-28 28v52h416Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-folder-open"><path d="M408 96H252.11a23.89 23.89 0 0 1-13.31-4L211 73.41A55.77 55.77 0 0 0 179.89 64H104a56.06 56.06 0 0 0-56 56v24h416c0-30.88-25.12-48-56-48ZM423.75 448H88.25a56 56 0 0 1-55.93-55.15L16.18 228.11v-.28A48 48 0 0 1 64 176h384.1a48 48 0 0 1 47.8 51.83v.28l-16.22 164.74A56 56 0 0 1 423.75 448Zm56.15-221.45Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-folder-outline"><path d="M440 432H72a40 40 0 0 1-40-40V120a40 40 0 0 1 40-40h75.89a40 40 0 0 1 22.19 6.72l27.84 18.56a40 40 0 0 0 22.19 6.72H440a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40ZM32 192h448" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-folder-sharp"><path d="M16 420a28 28 0 0 0 28 28h424a28 28 0 0 0 28-28V208H16ZM496 124a28 28 0 0 0-28-28H212.84l-48-32H44a28 28 0 0 0-28 28v84h480Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-folder"><path d="M496 152a56 56 0 0 0-56-56H220.11a23.89 23.89 0 0 1-13.31-4L179 73.41A55.77 55.77 0 0 0 147.89 64H72a56 56 0 0 0-56 56v48a8 8 0 0 0 8 8h464a8 8 0 0 0 8-8ZM16 392a56 56 0 0 0 56 56h368a56 56 0 0 0 56-56V216a8 8 0 0 0-8-8H24a8 8 0 0 0-8 8Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-football-outline"><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m256 175.15-76.09 63.83L200 320h112l20.09-81.02L256 175.15zM332.09 238.98l52.87-22.4 25.78-73.26M447 269.97l-62.04-53.39M179.91 238.98l-52.87-22.4-25.78-73.26M65 269.97l62.04-53.39M256 175.15v-57.57l64-42.64M192 74.93l64 42.65M312 320l28 48-28 71M410.74 368H342M200 320l-28 48 28.37 71.5M101.63 368H172" /></symbol><symbol  viewBox="0 0 512 512" id="icon-football-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm140.64 296.08h-46.77l-16.89-29 15-60.44L377.79 242l42.65 36.71a164.87 164.87 0 0 1-23.8 65.37ZM134.21 242 164 254.67l15 60.44-16.89 29h-46.75a164.87 164.87 0 0 1-23.8-65.34Zm249.07-92.47-18.41 52.33-31.12 13.18L277 167.46v-35l43.86-29.22a166.87 166.87 0 0 1 62.42 46.32ZM191.14 103.2 235 132.42v35l-56.75 47.61-31.12-13.18-18.41-52.33a166.87 166.87 0 0 1 62.42-46.32Zm26.44 314.3-20.1-50.66 16-27.51h85l16.06 27.53-20 50.6a166.23 166.23 0 0 1-77 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-football"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm143 304h-45.22a8 8 0 0 1-6.91-4l-16.14-27.68a8 8 0 0 1-.86-6l14.86-59.92a8 8 0 0 1 4.65-5.45l28.1-11.9a8 8 0 0 1 8.34 1.3l41.63 35.82a8 8 0 0 1 2.69 7.26 174.75 174.75 0 0 1-24.28 66.68A8 8 0 0 1 399 352ZM134.52 237.13l28.1 11.9a8 8 0 0 1 4.65 5.45l14.86 59.92a8 8 0 0 1-.86 6L165.13 348a8 8 0 0 1-6.91 4H113a8 8 0 0 1-6.82-3.81 174.75 174.75 0 0 1-24.28-66.68 8 8 0 0 1 2.69-7.26l41.63-35.82a8 8 0 0 1 8.3-1.3Zm256.94-87.24-18.07 51.38A8 8 0 0 1 369 206l-29.58 12.53a8 8 0 0 1-8.26-1.24L274.9 170.1a8 8 0 0 1-2.9-6.1v-33.58a8 8 0 0 1 3.56-6.65l42.83-28.54a8 8 0 0 1 7.66-.67A176.92 176.92 0 0 1 390 142a8 8 0 0 1 1.46 7.89ZM193.6 95.23l42.84 28.54a8 8 0 0 1 3.56 6.65V164a8 8 0 0 1-2.86 6.13l-56.26 47.19a8 8 0 0 1-8.26 1.24L143 206a8 8 0 0 1-4.43-4.72L120.5 149.9a8 8 0 0 1 1.5-7.9 176.92 176.92 0 0 1 64-47.48 8 8 0 0 1 7.6.71Zm17.31 327.46L191.18 373a8 8 0 0 1 .52-7l15.17-26a8 8 0 0 1 6.91-4h84.44a8 8 0 0 1 6.91 4l15.18 26a8 8 0 0 1 .53 7l-19.59 49.67a8 8 0 0 1-5.69 4.87 176.58 176.58 0 0 1-79 0 8 8 0 0 1-5.65-4.85Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-footsteps-outline"><path d="M200 246.84c8.81 58.62-7.33 90.67-52.91 97.41-50.65 7.49-71.52-26.44-80.33-85.06-11.85-78.88 16-127.94 55.71-131.1 36.14-2.87 68.71 60.14 77.53 118.75ZM223.65 409.53c3.13 33.28-14.86 64.34-42 69.66-27.4 5.36-58.71-16.37-65.09-49.19s17.75-34.56 47.32-40.21 55.99-20.4 59.77 19.74ZM312 150.83c-8.81 58.62 7.33 90.67 52.9 97.41 50.66 7.49 71.52-26.44 80.33-85.06 11.86-78.89-16-128.22-55.7-131.1-36.4-2.64-68.71 60.13-77.53 118.75ZM288.35 313.53c-3.13 33.27 14.86 64.34 42 69.66 27.4 5.36 58.71-16.37 65.09-49.19s-17.75-34.56-47.32-40.22-55.99-20.4-59.77 19.75Z" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-footsteps-sharp"><path d="M130.54 358.31c-12.83 1.88-33.95 5.38-48-10.56S56.34 293.32 51 258.92c-7.88-50.7-.06-93.43 22-120.31 13-15.83 30.06-25 49.34-26.46 16.51-1.27 41.18 5.19 65 43.19 14.92 23.81 26.27 55.44 31.14 86.77 5.88 37.82 11.61 78.18-8.44 92.65-11.31 8.17-19.43 11-38.62 15.57-15.78 3.75-28.04 6.09-40.88 7.98ZM107.72 390.84l108.89-22.46c9.2-1.9 16.58 3.16 20 18.32 11.22 49.76-4.86 109.3-55.22 109.3-47.69 0-79.47-54.36-84.66-83.58-2.37-13.25 1.01-19.53 10.99-21.58ZM340.59 254.34c-19.19-4.55-27.31-7.4-38.62-15.57-20.05-14.47-14.32-54.83-8.44-92.65 4.87-31.33 16.22-63 31.14-86.77 23.8-38 48.47-44.46 65-43.19C408.93 17.63 426 26.78 439 42.61c22.08 26.88 29.9 69.61 22 120.31-5.35 34.4-17.46 72.76-31.59 88.83s-35.13 12.44-48 10.56-25.05-4.23-40.82-7.97ZM404.28 294.84l-108.89-22.46c-9.2-1.9-16.58 3.16-20 18.32-11.21 49.76 4.87 109.3 55.23 109.3 47.69 0 79.47-54.36 84.66-83.58 2.36-13.25-1.02-19.53-11-21.58Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-footsteps"><path d="M133.83 361.27c-22.61 0-41-8.17-54.79-24.39s-22.84-40.29-28.11-75.31c-7.76-51.61-.06-95.11 21.68-122.48 12.8-16.12 29.6-25.44 48.58-26.94 16.25-1.3 40.54 5.29 64 44 14.69 24.24 25.86 56.44 30.65 88.34 5.79 38.51 1.48 66.86-13.18 86.65-11.64 15.72-29.54 25.46-53.21 29a106.46 106.46 0 0 1-15.62 1.13ZM173 496c-13.21 0-26.6-4.23-38.66-12.36a79.79 79.79 0 0 1-33.52-50.6c-2.85-14.66-1.14-26.31 5.22-35.64 10.33-15.15 28.87-18.56 48.49-22.18 2.07-.38 4.17-.76 6.3-1.17 4.52-.86 9.14-2 13.62-3.11 16.78-4.14 34.14-8.43 48.47 1.75 9.59 6.8 15 18.36 16.62 35.32 1.84 19.57-2.36 39.1-11.83 55-10.19 17.11-25.47 28.42-43 31.86A61 61 0 0 1 173 496ZM378.17 265.27a106.69 106.69 0 0 1-15.6-1.2c-23.66-3.5-41.56-13.25-53.2-29-14.66-19.79-19-48.13-13.18-86.65 4.79-31.93 15.93-64.1 30.55-88.25 23.34-38.57 47.66-45.26 64-44.08 18.92 1.38 35.69 10.57 48.51 26.6 21.89 27.37 29.65 71 21.86 122.84-5.27 35-14.2 58.95-28.11 75.31s-32.22 24.43-54.83 24.43ZM339 400a61 61 0 0 1-11.68-1.13c-17.56-3.44-32.84-14.75-43-31.86-9.47-15.9-13.67-35.43-11.83-55 1.6-17 7-28.52 16.62-35.33 14.33-10.17 31.69-5.89 48.47-1.74 4.48 1.1 9.1 2.24 13.62 3.11l6.29 1.17c19.63 3.61 38.17 7 48.5 22.17 6.36 9.33 8.07 21 5.22 35.64a79.78 79.78 0 0 1-33.52 50.61C365.56 395.78 352.17 400 339 400Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-funnel-outline"><path d="m35.4 87.12 168.65 196.44A16.07 16.07 0 0 1 208 294v119.32a7.93 7.93 0 0 0 5.39 7.59l80.15 26.67A7.94 7.94 0 0 0 304 440V294a16.07 16.07 0 0 1 4-10.44L476.6 87.12A14 14 0 0 0 466 64H46.05A14 14 0 0 0 35.4 87.12Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-funnel-sharp"><path d="m0 48 192 240v128l128 48V288L512 48H0z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-funnel"><path d="M296 464a23.88 23.88 0 0 1-7.55-1.23L208.3 436.1a23.92 23.92 0 0 1-16.3-22.78V294.11a.44.44 0 0 0-.09-.13L23.26 97.54A30 30 0 0 1 46.05 48H466a30 30 0 0 1 22.79 49.54L320.09 294a.77.77 0 0 0-.09.13V440a23.93 23.93 0 0 1-24 24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-game-controller-outline"><path d="M467.51 248.83c-18.4-83.18-45.69-136.24-89.43-149.17A91.5 91.5 0 0 0 352 96c-26.89 0-48.11 16-96 16s-69.15-16-96-16a99.09 99.09 0 0 0-27.2 3.66C89 112.59 61.94 165.7 43.33 248.83c-19 84.91-15.56 152 21.58 164.88 26 9 49.25-9.61 71.27-37 25-31.2 55.79-40.8 119.82-40.8s93.62 9.6 118.66 40.8c22 27.41 46.11 45.79 71.42 37.16 41.02-14.01 40.44-79.13 21.43-165.04Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="292" cy="224" r="20" /><path d="M336 288a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288Z" /><circle cx="336" cy="180" r="20" /><circle cx="380" cy="224" r="20" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M160 176v96M208 224h-96" /></symbol><symbol  viewBox="0 0 512 512" id="icon-game-controller-sharp"><path d="M478.07 356.88 439 151c-8.86-40.35-23-71-88-71H145c-66 0-79.14 30.65-88 71L18 356.88c-7 34.12 4.43 61.25 33.37 71.81S103 423 119.18 391.3l15.42-30.52a16 16 0 0 1 14.28-8.78h198.28a16 16 0 0 1 14.28 8.78l15.42 30.52c16.14 31.7 38.88 48 67.81 37.39S485 391 478.07 356.88ZM224 240h-48v48h-32v-48H96v-32h48v-48h32v48h48Zm68 4a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm44 44a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm0-88a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm44 44a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-game-controller"><path d="M483.13 245.38C461.92 149.49 430 98.31 382.65 84.33A107.13 107.13 0 0 0 352 80c-13.71 0-25.65 3.34-38.28 6.88C298.5 91.15 281.21 96 256 96s-42.51-4.84-57.76-9.11C185.6 83.34 173.67 80 160 80a115.74 115.74 0 0 0-31.73 4.32c-47.1 13.92-79 65.08-100.52 161C4.61 348.54 16 413.71 59.69 428.83a56.62 56.62 0 0 0 18.64 3.22c29.93 0 53.93-24.93 70.33-45.34 18.53-23.1 40.22-34.82 107.34-34.82 59.95 0 84.76 8.13 106.19 34.82 13.47 16.78 26.2 28.52 38.9 35.91 16.89 9.82 33.77 12 50.16 6.37 25.82-8.81 40.62-32.1 44-69.24 2.57-28.48-1.39-65.89-12.12-114.37ZM208 240h-32v32a16 16 0 0 1-32 0v-32h-32a16 16 0 0 1 0-32h32v-32a16 16 0 0 1 32 0v32h32a16 16 0 0 1 0 32Zm84 4a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm44 44a20 20 0 1 1 20-19.95A20 20 0 0 1 336 288Zm0-88a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm44 44a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-gift-outline"><path d="M256 104v56h56a56 56 0 1 0-56-56ZM256 104v56h-56a56 56 0 1 1 56-56Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><rect x="64" y="160" width="384" height="112" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M416 272v144a48 48 0 0 1-48 48H144a48 48 0 0 1-48-48V272M256 160v304" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-gift-sharp"><path d="M346 110a34 34 0 0 0-68 0v34h34a34 34 0 0 0 34-34ZM234 110a34 34 0 1 0-34 34h34Z" style="fill:none" /><path d="M234 144h44v112h164a22 22 0 0 0 22-22v-68a22 22 0 0 0-22-22h-59.82A77.95 77.95 0 0 0 256 55.79 78 78 0 0 0 129.81 144H70a22 22 0 0 0-22 22v68a22 22 0 0 0 22 22h164Zm44-34a34 34 0 1 1 34 34h-34Zm-112 0a34 34 0 1 1 68 0v34h-34a34 34 0 0 1-34-34ZM278 480h132a22 22 0 0 0 22-22V288H278ZM80 458a22 22 0 0 0 22 22h132V288H80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-gift"><path d="M200 144h40v-40a40 40 0 1 0-40 40ZM352 104a40 40 0 0 0-80 0v40h40a40 40 0 0 0 40-40Z" style="fill:none" /><path d="M80 416a64 64 0 0 0 64 64h92a4 4 0 0 0 4-4V292a4 4 0 0 0-4-4H88a8 8 0 0 0-8 8ZM240 252V144h32v108a4 4 0 0 0 4 4h140a47.93 47.93 0 0 0 16-2.75A48.09 48.09 0 0 0 464 208v-16a48 48 0 0 0-48-48h-40.54a2 2 0 0 1-1.7-3A72 72 0 0 0 256 58.82 72 72 0 0 0 138.24 141a2 2 0 0 1-1.7 3H96a48 48 0 0 0-48 48v16a48.09 48.09 0 0 0 32 45.25A47.93 47.93 0 0 0 96 256h140a4 4 0 0 0 4-4Zm32-148a40 40 0 1 1 40 40h-40Zm-74.86-39.9A40 40 0 0 1 240 104v40h-40a40 40 0 0 1-2.86-79.89ZM276 480h92a64 64 0 0 0 64-64V296a8 8 0 0 0-8-8H276a4 4 0 0 0-4 4v184a4 4 0 0 0 4 4Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-branch-outline"><circle cx="160" cy="96" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="160" cy="416" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M160 368V144" /><circle cx="352" cy="160" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M352 208c0 128-192 48-192 160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-branch-sharp"><path d="M352 96a64 64 0 0 0-58.86 89.11l-101.14 88V151.39a64 64 0 1 0-64 0v209.22a64 64 0 1 0 64 0V358l154.25-134.27c1.9.17 3.81.27 5.75.27a64 64 0 0 0 0-128ZM160 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32Zm0 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm192-256a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-branch"><path d="M416 160a64 64 0 1 0-96.27 55.24c-2.29 29.08-20.08 37-75 48.42-17.76 3.68-35.93 7.45-52.71 13.93v-126.2a64 64 0 1 0-64 0v209.22a64 64 0 1 0 64.42.24c2.39-18 16-24.33 65.26-34.52 27.43-5.67 55.78-11.54 79.78-26.95 29-18.58 44.53-46.78 46.36-83.89A64 64 0 0 0 416 160ZM160 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32Zm0 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm192-256a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-commit-outline"><circle cx="256" cy="256" r="96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M160 256H48M464 256H352" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-commit-sharp"><path d="M480 224H380a128 128 0 0 0-247.9 0H32v64h100.05A128 128 0 0 0 380 288h100Zm-224 96a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-commit"><path d="M448 224h-68a128 128 0 0 0-247.9 0H64a32 32 0 0 0 0 64h68.05A128 128 0 0 0 380 288h68a32 32 0 0 0 0-64Zm-192 96a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-compare-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m304 160-64-64 64-64M207 352l64 64-64 64" /><circle cx="112" cy="96" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="400" cy="416" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M256 96h84a60 60 0 0 1 60 60v212M255 416h-84a60 60 0 0 1-60-60V144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-compare-sharp"><path d="M209 384h-37a28 28 0 0 1-28-28V152a64 64 0 1 0-64-1.16V356a92.1 92.1 0 0 0 92 92h37v55.21L294.39 416 209 328.79ZM113 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32ZM432 360.61V156a92.1 92.1 0 0 0-92-92h-35V9.93L217.14 96 305 182.07V128h35a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0ZM400 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-compare"><path d="M218.31 340.69A16 16 0 0 0 191 352v32h-20a28 28 0 0 1-28-28V152a64 64 0 1 0-64-1.16V356a92.1 92.1 0 0 0 92 92h20v32a16 16 0 0 0 27.31 11.31l64-64a16 16 0 0 0 0-22.62ZM112 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32ZM432 360.61V156a92.1 92.1 0 0 0-92-92h-20V32a16 16 0 0 0-27.31-11.31l-64 64a16 16 0 0 0 0 22.62l64 64A16 16 0 0 0 320 160v-32h20a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0ZM400 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-merge-outline"><circle cx="129" cy="96" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="129" cy="416" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M129 144v224" /><circle cx="385" cy="288" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M129 144c0 96 112 144 208 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-merge-sharp"><path d="M384 224a63.66 63.66 0 0 0-37.95 12.5L160 153.36v-2a64 64 0 1 0-64 0v209.25a64 64 0 1 0 64 0V223.46l160.41 71.69A64 64 0 1 0 384 224ZM128 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32Zm0 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm256-128a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-merge"><path d="M385 224a64 64 0 0 0-55.33 31.89c-42.23-1.21-85.19-12.72-116.21-31.33-32.2-19.32-49.71-44-52.15-73.35a64 64 0 1 0-64.31.18v209.22a64 64 0 1 0 64 0v-94.46c44.76 34 107.28 52.38 168.56 53.76A64 64 0 1 0 385 224ZM129 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32Zm0 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm256-128a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-network-outline"><circle cx="128" cy="96" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="256" cy="416" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M256 256v112" /><circle cx="384" cy="96" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M128 144c0 74.67 68.92 112 128 112M384 144c0 74.67-68.92 112-128 112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-network-sharp"><path d="M384 32a64 64 0 0 0-57.67 91.73l-70.83 80.82-70.19-80.1A64 64 0 1 0 128 160c1.1 0 2.2 0 3.29-.08L224 265.7v94.91a64 64 0 1 0 64 0v-96.05l91.78-104.71c1.39.09 2.8.15 4.22.15a64 64 0 0 0 0-128ZM96 96a32 32 0 1 1 32 32 32 32 0 0 1-32-32Zm160 352a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm128-320a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-network"><path d="M448 96a64 64 0 1 0-96.31 55.21c-1.79 20.87-11.47 38.1-28.87 51.29C305.07 216 280.09 224 256 224s-49.07-8-66.82-21.5c-17.4-13.19-27.08-30.42-28.87-51.29a64 64 0 1 0-64.11.29c2.08 40.87 21.17 76.87 54.31 102C171.3 269.26 197 280.19 224 285.09v75.52a64 64 0 1 0 64 0v-75.52c27-4.9 52.7-15.83 73.49-31.59 33.14-25.13 52.23-61.13 54.31-102A64 64 0 0 0 448 96ZM128 64a32 32 0 1 1-32 32 32 32 0 0 1 32-32Zm128 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm128-320a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-pull-request-outline"><circle cx="128" cy="416" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M128 144v224M288 160l-64-64 64-64" /><circle cx="128" cy="96" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="384" cy="416" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M240 96h84a60 60 0 0 1 60 60v212" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-pull-request-sharp"><path d="M192 96a64 64 0 1 0-97 54.81v209.8a64 64 0 1 0 64 0V152a64.06 64.06 0 0 0 33-56Zm-64-32a32 32 0 1 1-32 32 32 32 0 0 1 32-32Zm-1 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32ZM416 360.61V156a92.1 92.1 0 0 0-92-92h-35V9.93L201.14 96 289 182.07V128h35a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0ZM384 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-git-pull-request"><path d="M192 96a64 64 0 1 0-96 55.39v209.22a64 64 0 1 0 64 0V151.39A64 64 0 0 0 192 96Zm-64-32a32 32 0 1 1-32 32 32 32 0 0 1 32-32Zm0 384a32 32 0 1 1 32-32 32 32 0 0 1-32 32ZM416 360.61V156a92.1 92.1 0 0 0-92-92h-20V32a16 16 0 0 0-27.31-11.31l-64 64a16 16 0 0 0 0 22.62l64 64A16 16 0 0 0 304 160v-32h20a28 28 0 0 1 28 28v204.61a64 64 0 1 0 64 0ZM384 448a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-glasses-outline"><path d="M224 232a32 32 0 0 1 64 0M448 200h16M64 200H48M64 200c0 96 16 128 80 128s80-32 80-128c0 0-16-16-80-16s-80 16-80 16ZM448 200c0 96-16 128-80 128s-80-32-80-128c0 0 16-16 80-16s80 16 80 16Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-glasses-sharp"><path d="M496 176H16v64h21.24l12.44 112h171.87L240 241.32V240a16 16 0 0 1 32 0v1.32L290.45 352h171.87l12.44-112H496Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-glasses"><path d="M464 184h-10.9a78.72 78.72 0 0 0-16-7.18C419.5 171 396.26 168 368 168s-51.5 3-69.06 8.82c-14.06 4.69-20.25 9.86-22.25 11.87a47.94 47.94 0 0 0-41.36 0c-2-2-8.19-7.18-22.25-11.87C195.5 171 172.26 168 144 168s-51.5 3-69.06 8.82a78.72 78.72 0 0 0-16 7.18H48a16 16 0 0 0 0 32h.17c1 45.46 6.44 72.78 18.11 92.23a66.78 66.78 0 0 0 31.92 28c12.23 5.24 27.22 7.79 45.8 7.79 24.15 0 58.48-3.71 77.72-35.77 9.68-16.14 15.09-37.69 17.21-70.52A16 16 0 0 0 240 232a16 16 0 0 1 32 0 16 16 0 0 0 1.07 5.71c2.12 32.83 7.53 54.38 17.21 70.52a66.78 66.78 0 0 0 31.92 28c12.23 5.24 27.22 7.79 45.8 7.79 24.15 0 58.48-3.71 77.72-35.77 11.67-19.45 17.13-46.77 18.11-92.23h.17a16 16 0 0 0 0-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-globe-outline"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 394.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" d="M256 48v416M464 256H48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-globe-sharp"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:44px" /><path d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:44px" /><path d="M117.33 121.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 390.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" /><path style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:44px" d="M256 48v416M464 256H48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-globe"><path d="M340.75 344.49c5.91-20.7 9.82-44.75 11.31-67.84a4.41 4.41 0 0 0-4.46-4.65h-71.06a4.43 4.43 0 0 0-4.47 4.39v55.3a4.44 4.44 0 0 0 4.14 4.38 273.51 273.51 0 0 1 59 11.39 4.45 4.45 0 0 0 5.54-2.97ZM323.58 377.31a260.05 260.05 0 0 0-46.6-9.09 4.42 4.42 0 0 0-4.91 4.29v65.24a4.47 4.47 0 0 0 6.76 3.7c15.9-9.27 29-24.84 40.84-45.43 1.94-3.36 4.89-9.15 6.67-12.69a4.29 4.29 0 0 0-2.76-6.02ZM235.29 368.4a256.85 256.85 0 0 0-46.56 8.82c-2.64.76-3.75 4.4-2.55 6.79 1.79 3.56 4 8.11 5.89 11.51 13 23 26.84 37.5 41.24 45.93a4.47 4.47 0 0 0 6.76-3.7v-65.27a4.16 4.16 0 0 0-4.78-4.08ZM235.6 272h-71.06a4.41 4.41 0 0 0-4.46 4.64c1.48 23.06 5.37 47.16 11.26 67.84a4.46 4.46 0 0 0 5.59 3 272.2 272.2 0 0 1 59-11.36 4.44 4.44 0 0 0 4.15-4.38V276.4a4.43 4.43 0 0 0-4.48-4.4ZM277 143.78a235.8 235.8 0 0 0 46.5-9.14 4.3 4.3 0 0 0 2.76-6c-1.79-3.57-4.27-8.68-6.17-12.09-12.29-22-26.14-37.35-41.24-46a4.48 4.48 0 0 0-6.76 3.7v65.23a4.43 4.43 0 0 0 4.91 4.3ZM276.54 240h71.06a4.39 4.39 0 0 0 4.46-4.58c-1.48-22.77-5.27-47.8-11.16-68.22a4.46 4.46 0 0 0-5.59-2.95c-19 5.74-38.79 10.43-59.09 12a4.4 4.4 0 0 0-4.15 4.32v55.11a4.4 4.4 0 0 0 4.47 4.32ZM233.31 70.56c-15.42 8.57-29.17 24.43-41.47 46.37-1.91 3.41-4.19 8.11-6 11.67a4.31 4.31 0 0 0 2.76 6 225.42 225.42 0 0 0 46.54 9.17 4.43 4.43 0 0 0 4.91-4.29V74.26a4.49 4.49 0 0 0-6.74-3.7ZM235.92 176.26c-20.3-1.55-40.11-6.24-59.09-12a4.46 4.46 0 0 0-5.59 2.95c-5.89 20.42-9.68 45.45-11.16 68.22a4.39 4.39 0 0 0 4.46 4.58h71.06a4.4 4.4 0 0 0 4.47-4.34v-55.09a4.4 4.4 0 0 0-4.15-4.32Z" /><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61ZM176.6 430.85a219.08 219.08 0 0 1-12.48-19.66c-2-3.69-4.84-9.26-6.73-13.13a7.29 7.29 0 0 0-10.31-3.16c-4.3 2.41-10 5.72-14.13 8.43a147.29 147.29 0 0 1-23.57-22.43 248.83 248.83 0 0 1 30.41-18.36c1.86-1 2.77-2.14 2.18-4.18a374.8 374.8 0 0 1-14.09-82.17 4.36 4.36 0 0 0-4.3-4.17H66.84a2 2 0 0 1-2-1.7A98.28 98.28 0 0 1 64 256a96.27 96.27 0 0 1 .86-14.29 2 2 0 0 1 2-1.7h56.74c2.29 0 4.17-1.32 4.29-3.63a372.71 372.71 0 0 1 14-81.83 4.36 4.36 0 0 0-2.19-5.11 260.63 260.63 0 0 1-29.84-17.9 169.82 169.82 0 0 1 23.14-22.8c4.08 2.68 9.4 5.71 13.66 8.11a7.89 7.89 0 0 0 11-3.42c1.88-3.87 4-8.18 6.06-11.88a221.93 221.93 0 0 1 12.54-19.91A185 185 0 0 1 256 64c28.94 0 55.9 7 80.53 18.46a202.23 202.23 0 0 1 12 19c2.59 4.66 5.34 10.37 7.66 15.32a4.29 4.29 0 0 0 5.92 1.94c5.38-2.91 11.21-6.26 16.34-9.63a171.36 171.36 0 0 1 23.2 23 244.89 244.89 0 0 1-29.06 17.31 4.35 4.35 0 0 0-2.18 5.12 348.68 348.68 0 0 1 13.85 81.4 4.33 4.33 0 0 0 4.3 4.12l56.62-.07a2 2 0 0 1 2 1.7 117.46 117.46 0 0 1 0 28.62 2 2 0 0 1-2 1.72h-56.67a4.35 4.35 0 0 0-4.3 4.17 367.4 367.4 0 0 1-13.87 81.3 4.45 4.45 0 0 0 2.19 5.19c5 2.59 10.57 5.48 15.37 8.42s9.55 6.08 14.13 9.34a172.73 172.73 0 0 1-23 22.93c-2.44-1.61-5.34-3.44-7.84-4.94-1.72-1-4.89-2.77-6.65-3.76-3.82-2.14-7.88-.54-9.79 3.4s-4.83 9.59-6.87 13.25a212.42 212.42 0 0 1-12.35 19.53C310.91 442.37 284.94 448 256 448s-54.77-5.63-79.4-17.15Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-golf-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M256 400V32l176 80-176 80" /><path d="M256 336c-87 0-175.3 43.2-191.64 124.74C62.39 470.57 68.57 480 80 480h352c11.44 0 17.62-9.43 15.65-19.26C431.3 379.2 343 336 256 336Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-golf-sharp"><path d="M240 16v304.47q8-.47 16-.47t16 .47V202.3L448 112Z" /><path d="M462.91 457.5c-8.54-42.85-35-78.74-76.62-103.8-32.43-19.55-72.53-31.3-114.29-33.7v95.79h-32V320c-41.79 2.4-81.89 14.15-114.32 33.7-41.59 25.06-68.08 60.95-76.62 103.8-2 9.81-.68 38.5-.68 38.5h415.21s1.28-28.69-.68-38.5Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-golf"><path d="M272 320.46V202.3l166.62-75.73a16 16 0 0 0 0-29.14l-176-80A16 16 0 0 0 240 32v288.46q8-.45 16-.46t16 .46Z" /><path d="M463.33 457.5c-8.56-42.85-35.11-78.74-76.78-103.8-32.5-19.55-72.67-31.3-114.55-33.7v79.75a16 16 0 1 1-32 0V320c-41.88 2.4-82.05 14.15-114.55 33.7-41.67 25.06-68.22 60.95-76.78 103.8a32.49 32.49 0 0 0 6.44 27.08C61.13 492 70 496 80 496h352c10 0 18.88-4.05 24.9-11.42a32.49 32.49 0 0 0 6.43-27.08Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-grid-outline"><rect x="48" y="48" width="176" height="176" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="288" y="48" width="176" height="176" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="48" y="288" width="176" height="176" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="288" y="288" width="176" height="176" rx="20" ry="20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-grid-sharp"><path d="M240 240H32V32h208ZM480 240H272V32h208ZM240 480H32V272h208ZM480 480H272V272h208Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-grid"><path d="M204 240H68a36 36 0 0 1-36-36V68a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36ZM444 240H308a36 36 0 0 1-36-36V68a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36ZM204 480H68a36 36 0 0 1-36-36V308a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36ZM444 480H308a36 36 0 0 1-36-36V308a36 36 0 0 1 36-36h136a36 36 0 0 1 36 36v136a36 36 0 0 1-36 36Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hammer-outline"><path d="M277.42 247a24.68 24.68 0 0 0-4.08-5.47L255 223.44a21.63 21.63 0 0 0-6.56-4.57 20.93 20.93 0 0 0-23.28 4.27c-6.36 6.26-18 17.68-39 38.43C146 301.3 71.43 367.89 37.71 396.29a16 16 0 0 0-1.09 23.54l39 39.43a16.13 16.13 0 0 0 23.67-.89c29.24-34.37 96.3-109 136-148.23 20.39-20.06 31.82-31.58 38.29-37.94a21.76 21.76 0 0 0 3.84-25.2ZM478.43 201l-34.31-34a5.44 5.44 0 0 0-4-1.59 5.59 5.59 0 0 0-4 1.59h0a11.41 11.41 0 0 1-9.55 3.27c-4.48-.49-9.25-1.88-12.33-4.86-7-6.86 1.09-20.36-5.07-29a242.88 242.88 0 0 0-23.08-26.72c-7.06-7-34.81-33.47-81.55-52.53a123.79 123.79 0 0 0-47-9.24c-26.35 0-46.61 11.76-54 18.51-5.88 5.32-12 13.77-12 13.77a91.29 91.29 0 0 1 10.81-3.2 79.53 79.53 0 0 1 23.28-1.49C241.19 76.8 259.94 84.1 270 92c16.21 13 23.18 30.39 24.27 52.83.8 16.69-15.23 37.76-30.44 54.94a7.85 7.85 0 0 0 .4 10.83l21.24 21.23a8 8 0 0 0 11.14.1c13.93-13.51 31.09-28.47 40.82-34.46s17.58-7.68 21.35-8.09a35.71 35.71 0 0 1 21.3 4.62 13.65 13.65 0 0 1 3.08 2.38c6.46 6.56 6.07 17.28-.5 23.74l-2 1.89a5.5 5.5 0 0 0 0 7.84l34.31 34a5.5 5.5 0 0 0 4 1.58 5.65 5.65 0 0 0 4-1.58L478.43 209a5.82 5.82 0 0 0 0-8Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hammer-sharp"><path d="m294.28 256.9-54.42-54.41a12 12 0 0 0-17 0L12.45 401a12 12 0 0 0-.27 17.2l66.05 66.28a12 12 0 0 0 17.22-.23l198.81-210.36a12 12 0 0 0 .02-16.99ZM499.33 199.33l-43.89-43.58a21.46 21.46 0 0 0-15.28-6.26 21.89 21.89 0 0 0-12.79 4.14c0-.43.06-.85.09-1.22.45-6.5 1.15-16.32-5.2-25.22a258 258 0 0 0-24.8-28.74.6.6 0 0 0-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55 139.55 0 0 0 257.56 32C226 32 202 46.24 192.81 54.68A53.4 53.4 0 0 0 176 86.17L192 96s8.06-2 13.86-3.39a62.73 62.73 0 0 1 18.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09 11.7 9.41 17.33 22.09 18.26 41.09.2 4.23-9.52 21.35-24.16 39.84a8 8 0 0 0 .61 10.62l45.37 45.37a8 8 0 0 0 11 .25c12.07-11 30.49-28 34.67-30.59 7.69-4.73 13.19-5.64 14.7-5.8a19.18 19.18 0 0 1 11.29 2.38 1.24 1.24 0 0 1-.31.95l-1.82 1.73-.3.28a21.52 21.52 0 0 0 .05 30.54l43.95 43.68a8 8 0 0 0 11.28 0l74.68-74.2a8 8 0 0 0 .06-11.36Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hammer"><path d="m280.16 242.79-26.11-26.12a32 32 0 0 0-45.14-.12L27.38 384.08c-6.61 6.23-10.95 14.17-11.35 23.06a32.11 32.11 0 0 0 9.21 23.94l39 39.43a.46.46 0 0 0 .07.07A32.29 32.29 0 0 0 87 480h1.18c8.89-.33 16.85-4.5 23.17-11.17l168.7-180.7a32 32 0 0 0 .11-45.34ZM490 190l-.31-.31-34.27-33.92a21.46 21.46 0 0 0-15.28-6.26 21.89 21.89 0 0 0-12.79 4.14c0-.43.06-.85.09-1.22.45-6.5 1.15-16.32-5.2-25.22a258 258 0 0 0-24.8-28.74.6.6 0 0 0-.08-.08c-13.32-13.12-42.31-37.83-86.72-55.94A139.55 139.55 0 0 0 257.56 32C226 32 202 46.24 192.81 54.68a119.92 119.92 0 0 0-14.18 16.22 16 16 0 0 0 18.65 24.34 74.45 74.45 0 0 1 8.58-2.63 63.46 63.46 0 0 1 18.45-1.15c13.19 1.09 28.79 7.64 35.69 13.09 11.7 9.41 17.33 22.09 18.26 41.09.18 3.82-7.72 18.14-20 34.48a16 16 0 0 0 1.45 21l34.41 34.41a16 16 0 0 0 22 .62c9.73-8.69 24.55-21.79 29.73-25 7.69-4.73 13.19-5.64 14.7-5.8a19.18 19.18 0 0 1 11.29 2.38 1.24 1.24 0 0 1-.31.95l-1.82 1.73-.3.28a21.52 21.52 0 0 0 .05 30.54l34.26 33.91a21.45 21.45 0 0 0 15.28 6.25 21.7 21.7 0 0 0 15.22-6.2l55.5-54.82c.19-.19.38-.39.56-.59A21.87 21.87 0 0 0 490 190Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hand-left-outline"><path d="M80 320V144a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v112M144 256V80a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v160M272 241V96a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v224M208 240V48a32 32 0 0 1 32-32h0a32 32 0 0 1 32 32v192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M80 320c0 117.4 64 176 152 176s123.71-39.6 144-88l52.71-144c6.66-18.05 3.64-34.79-11.87-43.6h0c-15.52-8.82-35.91-4.28-44.31 11.68L336 320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hand-left-sharp"><path d="M429.58 209.08c-15.06-6.62-32.38 1.31-38.5 17.62L356 312h-11.27V80c0-17.6-13.3-32-29.55-32-16.26 0-29.55 14.4-29.55 32v151.75l-14.78.25V32c0-17.6-13.3-32-29.55-32s-29.55 14.4-29.55 32v199.75L197 232V64c0-17.6-13.3-32-29.55-32-16.26 0-29.55 14.4-29.55 32v183.75l-14.8.25V128c0-17.6-13.3-32-29.55-32S64 110.4 64 128v216c0 75.8 37.13 168 169 168 40.8 0 79.42-7 100.66-21a121.41 121.41 0 0 0 33.72-33.31 138 138 0 0 0 16-31.78l62.45-175.14c6.17-16.31-1.19-35.06-16.25-41.69Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hand-left"><path d="M432.8 211.44c-15.52-8.82-34.91-2.28-43.31 13.68l-41.38 84.41a7 7 0 0 1-8.93 3.43 7 7 0 0 1-4.41-6.52V72c0-13.91-12.85-24-26.77-24s-26 10.09-26 24v156.64A11.24 11.24 0 0 1 271.21 240 11 11 0 0 1 260 229V24c0-13.91-10.94-24-24.86-24S210 10.09 210 24v204.64A11.24 11.24 0 0 1 199.21 240 11 11 0 0 1 188 229V56c0-13.91-12.08-24-26-24s-26 11.09-26 25v187.64A11.24 11.24 0 0 1 125.21 256 11 11 0 0 1 114 245V120c0-13.91-11.08-24-25-24s-25.12 10.22-25 24v216c0 117.41 72 176 160 176h16c88 0 115.71-39.6 136-88l68.71-169c6.62-18 3.6-34.75-11.91-43.56Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hand-right-outline"><path d="M432 320V144a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v112M368 256V80a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v160M240 241V96a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v224M304 240V48a32 32 0 0 0-32-32h0a32 32 0 0 0-32 32v192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M432 320c0 117.4-64 176-152 176s-123.71-39.6-144-88L83.33 264c-6.66-18.05-3.64-34.79 11.87-43.6h0c15.52-8.82 35.91-4.28 44.31 11.68L176 320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hand-right-sharp"><path d="M82.42 209.08c15.06-6.62 32.38 1.31 38.5 17.62L156 312h11.27V80c0-17.6 13.3-32 29.55-32 16.26 0 29.55 14.4 29.55 32v151.75l14.78.25V32c0-17.6 13.3-32 29.55-32 16.3 0 29.55 14.4 29.55 32v199.75L315 232V64c0-17.6 13.3-32 29.55-32 16.26 0 29.55 14.4 29.55 32v183.75l14.78.25V128c0-17.6 13.3-32 29.55-32C434.7 96 448 110.4 448 128v216c0 75.8-37.13 168-169 168-40.8 0-79.42-7-100.66-21a121.41 121.41 0 0 1-33.72-33.31 138 138 0 0 1-16-31.78L66.16 250.77c-6.11-16.31 1.2-35.06 16.26-41.69Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hand-right"><path d="M79.2 211.44c15.52-8.82 34.91-2.28 43.31 13.68l41.38 84.41a7 7 0 0 0 8.93 3.43 7 7 0 0 0 4.41-6.52V72c0-13.91 12.85-24 26.77-24s26 10.09 26 24v156.64A11.24 11.24 0 0 0 240.79 240 11 11 0 0 0 252 229V24c0-13.91 10.94-24 24.86-24S302 10.09 302 24v204.64A11.24 11.24 0 0 0 312.79 240 11 11 0 0 0 324 229V56c0-13.91 12.08-24 26-24s26 11.09 26 25v187.64A11.24 11.24 0 0 0 386.79 256 11 11 0 0 0 398 245V120c0-13.91 11.08-24 25-24s25.12 10.22 25 24v216c0 117.41-72 176-160 176h-16c-88 0-115.71-39.6-136-88L67.33 255c-6.66-18-3.64-34.75 11.87-43.56Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-happy-outline"><circle cx="184" cy="232" r="24" /><path d="M256.05 384c-45.42 0-83.62-29.53-95.71-69.83a8 8 0 0 1 7.82-10.17h175.69a8 8 0 0 1 7.82 10.17c-11.99 40.3-50.2 69.83-95.62 69.83Z" /><circle cx="328" cy="232" r="24" /><circle cx="256" cy="256" r="208" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-happy-sharp"><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61ZM328 208a24 24 0 1 1-24 24 23.94 23.94 0 0 1 24-24Zm-144 0a24 24 0 1 1-24 24 23.94 23.94 0 0 1 24-24Zm72.05 176c-45.42 0-83.75-29.49-95.72-69.83C159.29 310.65 158 304 158 304h196s-1.31 6.69-2.33 10.17c-11.78 40.36-50.2 69.83-95.62 69.83Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-happy"><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61ZM184 208a24 24 0 1 1-24 24 23.94 23.94 0 0 1 24-24Zm167.67 106.17c-12 40.3-50.2 69.83-95.62 69.83s-83.62-29.53-95.72-69.83a8 8 0 0 1 7.83-10.17h175.69a8 8 0 0 1 7.82 10.17ZM328 256a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hardware-chip-outline"><rect x="80" y="80" width="352" height="352" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="144" y="144" width="224" height="224" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M256 80V48M336 80V48M176 80V48M256 464v-32M336 464v-32M176 464v-32M432 256h32M432 336h32M432 176h32M48 256h32M48 336h32M48 176h32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hardware-chip-sharp"><path d="M160 160h192v192H160z" /><path d="M480 198v-44h-32V88a24 24 0 0 0-24-24h-66V32h-44v32h-36V32h-44v32h-36V32h-44v32H88a24 24 0 0 0-24 24v66H32v44h32v36H32v44h32v36H32v44h32v66a24 24 0 0 0 24 24h66v32h44v-32h36v32h44v-32h36v32h44v-32h66a24 24 0 0 0 24-24v-66h32v-44h-32v-36h32v-44h-32v-36Zm-352-70h256v256H128Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hardware-chip"><path d="M352 128H160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V160a32 32 0 0 0-32-32Zm0 216a8 8 0 0 1-8 8H168a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Z" style="fill:none" /><rect x="160" y="160" width="192" height="192" rx="8" ry="8" /><path d="M464 192a16 16 0 0 0 0-32h-16v-32a64.07 64.07 0 0 0-64-64h-32V48a16 16 0 0 0-32 0v16h-48V48a16 16 0 0 0-32 0v16h-48V48a16 16 0 0 0-32 0v16h-32a64.07 64.07 0 0 0-64 64v32H48a16 16 0 0 0 0 32h16v48H48a16 16 0 0 0 0 32h16v48H48a16 16 0 0 0 0 32h16v32a64.07 64.07 0 0 0 64 64h32v16a16 16 0 0 0 32 0v-16h48v16a16 16 0 0 0 32 0v-16h48v16a16 16 0 0 0 32 0v-16h32a64.07 64.07 0 0 0 64-64v-32h16a16 16 0 0 0 0-32h-16v-48h16a16 16 0 0 0 0-32h-16v-48Zm-80 160a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-headset-outline"><path d="M83 384c-13-33-35-93.37-35-128C48 141.12 149.33 48 256 48s208 93.12 208 208c0 34.63-23 97-35 128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="m108.39 270.13-13.69 8c-30.23 17.7-31.7 72.41-3.38 122.2s75.87 75.81 106.1 58.12l13.69-8a16.16 16.16 0 0 0 5.78-21.87L130 276a15.74 15.74 0 0 0-21.61-5.87ZM403.61 270.13l13.69 8c30.23 17.69 31.74 72.4 3.38 122.19s-75.87 75.81-106.1 58.12l-13.69-8a16.16 16.16 0 0 1-5.78-21.87L382 276a15.74 15.74 0 0 1 21.61-5.87Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-headset-sharp"><path d="M411.16 97.45C368.43 55.85 311.88 32 256 32S143.57 55.85 100.84 97.45C56.45 140.67 32 196 32 256s26.84 118.49 45.42 152.25S121 480 144 480c32 0 96-32 96-32L128 240l-54.42 31.73a176.07 176.07 0 0 1-1-18.84c0-48.57 19.32-94.1 56.15-130C164.24 88.34 210 70 256 70s91.73 18.34 127.27 52.93c36.83 35.86 56.14 81.39 56.14 130a175.56 175.56 0 0 1-1 18.82L384 240 272 448s64 32 96 32c23 0 48-38 66.58-71.75S480 316 480 256s-24.45-115.33-68.84-158.55Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-headset"><path d="M411.16 97.46C368.43 55.86 311.88 32 256 32S143.57 55.86 100.84 97.46C56.45 140.67 32 197 32 256c0 26.67 8.75 61.09 32.88 125.55S137 473 157.27 477.41c5.81 1.27 12.62 2.59 18.73 2.59a60.06 60.06 0 0 0 30-8l14-8c15.07-8.82 19.47-28.13 10.8-43.35l-86.92-152.57a31.73 31.73 0 0 0-43.57-11.76l-13.69 8a56.49 56.49 0 0 0-14 11.59 4 4 0 0 1-7-2A114.68 114.68 0 0 1 64 256c0-50.31 21-98.48 59.16-135.61C160 84.55 208.39 64 256 64s96 20.55 132.84 56.39C427 157.52 448 205.69 448 256a114.68 114.68 0 0 1-1.68 17.91 4 4 0 0 1-7 2 56.49 56.49 0 0 0-14-11.59l-13.69-8a31.73 31.73 0 0 0-43.57 11.76L281.2 420.65c-8.67 15.22-4.27 34.53 10.8 43.35l14 8a60.06 60.06 0 0 0 30 8c6.11 0 12.92-1.32 18.73-2.59C375 473 423 446 447.12 381.55S480 282.67 480 256c0-59-24.45-115.33-68.84-158.54Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M256 360a16 16 0 0 1-9-2.78c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06 25.22-56.33 55.53-56.33 20.4 0 35 10.63 44.1 20.41a6 6 0 0 0 8.72 0c9.11-9.78 23.7-20.41 44.1-20.41 30.31 0 55.22 25.27 55.53 56.33.28 27.1-9.31 52.13-29.3 76.5-9.38 11.44-26.4 29.73-65.7 56.41A16 16 0 0 1 256 360Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm74.69 252.82c-8.5 10.36-39.69 38.48-74.69 63.51-35-25-66.19-53.15-74.69-63.51-20-24.37-29.58-49.4-29.3-76.5.31-31.06 25.22-56.33 55.53-56.33 22 0 37.3 12.41 46.19 22.76l2.27 2.75 2.27-2.75C267 180.29 282.42 168 304.46 168c30.31 0 55.22 25.27 55.53 56.33.28 27.09-9.31 52.12-29.3 76.49Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm74.69 252.82c-9.38 11.44-26.4 29.73-65.7 56.41a15.93 15.93 0 0 1-18 0c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5.31-31.06 25.22-56.33 55.53-56.33 20.4 0 35 10.63 44.1 20.41a6 6 0 0 0 8.72 0c9.11-9.78 23.7-20.41 44.1-20.41 30.31 0 55.22 25.27 55.53 56.33.3 27.1-9.29 52.13-29.28 76.5Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart-dislike-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M333.2 297.69c18.28-23.39 27.06-47.43 26.79-73.37-.31-31.06-25.22-56.33-55.53-56.33-20.4 0-35 10.64-44.11 20.42a5.93 5.93 0 0 1-8.7 0c-9.11-9.78-23.71-20.42-44.11-20.42L206 168a4 4 0 0 0-2.75 6.84l124 123.21a3.92 3.92 0 0 0 5.95-.36ZM158.84 221a4 4 0 0 0-6.82 2.72v.64c-.28 27.1 9.31 52.13 29.3 76.5 9.38 11.44 26.4 29.73 65.7 56.41a15.93 15.93 0 0 0 18 0c5.15-3.49 9.9-6.84 14.31-10a4 4 0 0 0 .46-6.07ZM336 368a15.92 15.92 0 0 1-11.31-4.69l-176-176a16 16 0 0 1 22.62-22.62l176 176A16 16 0 0 1 336 368Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart-dislike-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm63.73 310.36-183.14-182.3 22.74-22.51 183.19 182.36Zm-63.51 4.86c-35.36-25-66.31-51.92-74.91-62.4-20-24.37-29.58-49.4-29.3-76.5a58.27 58.27 0 0 1 .85-9.31l130.21 129.4c-3.43 2.59-16.21 11.45-26.85 18.81Zm74.47-62.4-.31.38L197.33 169a53.8 53.8 0 0 1 10.21-1 59.34 59.34 0 0 1 44.1 19.41L256 192l4.36-4.6a59.34 59.34 0 0 1 44.1-19.4c30.31 0 55.22 25.27 55.53 56.33.28 27.09-9.31 52.12-29.3 76.49Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart-dislike-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm23.3 299.19c-4.41 3.2-9.16 6.55-14.31 10a15.93 15.93 0 0 1-18 0c-39.3-26.68-56.32-45-65.7-56.41-20-24.37-29.58-49.4-29.3-76.5v-.64a4 4 0 0 1 6.82-2.72l120.95 120.2a4 4 0 0 1-.46 6.07Zm68 16.12a16 16 0 0 1-22.62 0l-176-176a16 16 0 0 1 22.62-22.62l176 176a16 16 0 0 1 .01 22.62Zm-14.1-65.62a3.92 3.92 0 0 1-6 .37l-124-123.21A4 4 0 0 1 206 168h1.55c20.4 0 35 10.64 44.11 20.42a5.93 5.93 0 0 0 8.7 0c9.11-9.78 23.71-20.42 44.11-20.42 30.31 0 55.22 25.27 55.53 56.33.26 25.93-8.52 49.97-26.8 73.36Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart-dislike-outline"><path d="M417.84 448a15.94 15.94 0 0 1-11.35-4.72L40.65 75.26a16 16 0 0 1 22.7-22.56l365.83 368a16 16 0 0 1-11.34 27.3ZM364.92 80c-48.09 0-80 29.55-96.92 51-16.88-21.48-48.83-51-96.92-51a107.37 107.37 0 0 0-31 4.55L168 112c22.26 0 45.81 9 63.94 26.67a123 123 0 0 1 21.75 28.47 16 16 0 0 0 28.6 0 123 123 0 0 1 21.77-28.51C322.19 121 342.66 112 364.92 112c43.15 0 78.62 36.33 79.07 81 .54 53.69-22.75 99.55-57.38 139.52l22.63 22.77c3-3.44 5.7-6.64 8.14-9.6 40-48.75 59.15-98.8 58.61-153C475.37 130.52 425.54 80 364.92 80ZM268 432C180.38 372.51 91 297.6 92 193a83.69 83.69 0 0 1 2.24-18.39L69 149.14a115.1 115.1 0 0 0-9 43.49c-.54 54.22 18.63 104.27 58.61 153 18.77 22.87 52.8 59.45 131.39 112.8a31.84 31.84 0 0 0 36 0c20.35-13.81 37.7-26.5 52.58-38.11l-22.66-22.81C300.25 409.6 284.09 421.05 268 432Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart-dislike-sharp"><path d="m32 64.45 389.47 389.94 22.84-22.47L54.85 42 32 64.45zM62.67 192.91c-.56 55.63 19.77 106.94 62.16 156.88 40.25 47.42 94.56 79.67 137.47 108.21l9 6 9-6c18.49-12.3 39.1-25.3 59.79-39.89L71.74 149.28a114.62 114.62 0 0 0-9.07 43.63ZM417.83 349.79c42.39-49.94 62.72-101.25 62.16-156.88-.63-62-50.61-112.54-111.43-112.54-48.26 0-80.35 28-97.23 48.17-16.88-20.2-49-48.17-97.23-48.17A108.24 108.24 0 0 0 142.84 85l270 270.48c1.71-1.89 3.37-3.78 4.99-5.69Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart-dislike"><path d="M417.84 448a16 16 0 0 1-11.35-4.72l-365.84-368a16 16 0 1 1 22.7-22.56l365.83 368A16 16 0 0 1 417.84 448ZM364.92 80c-44.09 0-74.61 24.82-92.39 45.5a6 6 0 0 1-9.06 0C245.69 104.82 215.16 80 171.08 80a107.71 107.71 0 0 0-31 4.54l269.13 270.7c3-3.44 5.7-6.64 8.14-9.6 40-48.75 59.15-98.79 58.61-153C475.37 130.53 425.54 80 364.92 80ZM69 149.15a115.06 115.06 0 0 0-9 43.49c-.54 54.21 18.63 104.25 58.61 153 18.77 22.87 52.8 59.45 131.39 112.8a31.88 31.88 0 0 0 36 0c20.35-13.82 37.7-26.5 52.58-38.12Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart-half-outline"><path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0 0 36 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64ZM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 0 1 .08-.16 123 123 0 0 1 21.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart-half-sharp"><path d="M352.92 64c-48.11 0-80.1 28-96.92 48.21C239.18 92 207.19 64 159.08 64 98.46 64 48.63 114.54 48 176.65c-.56 55.68 19.71 107 62 157 40.12 47.46 94.25 79.75 137 108.32l9 6 9-6c42.78-28.57 96.91-60.86 137-108.32 42.25-50 62.52-101.35 62-157C463.37 114.54 413.54 64 352.92 64Zm24.67 249c-31.78 37.6-74.68 65.75-112.52 90.59l-9.07 6V162.23l24.59-29.54C294.53 116 318.38 96 352.92 96c43.15 0 78.62 36.32 79.07 81a178.63 178.63 0 0 1-12.69 68.59c-9.03 22.84-22.67 44.91-41.71 67.41Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart-half"><path d="M352.92 64c-48.09 0-80 29.54-96.92 51-16.88-21.49-48.83-51-96.92-51C98.46 64 48.63 114.54 48 176.65c-.54 54.21 18.63 104.27 58.61 153 18.77 22.88 52.8 59.46 131.39 112.81a31.84 31.84 0 0 0 36 0c78.59-53.35 112.62-89.93 131.39-112.81 40-48.74 59.15-98.8 58.61-153C463.37 114.54 413.54 64 352.92 64ZM256 416V207.58c0-19.63 5.23-38.76 14.21-56.22a1.19 1.19 0 0 1 .08-.16 123 123 0 0 1 21.77-28.51C310.19 105 330.66 96 352.92 96c43.15 0 78.62 36.32 79.07 81C433 281.61 343.63 356.51 256 416Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart-outline"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0 0 18 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart-sharp"><path d="m256 448-9-6c-42.78-28.57-96.91-60.86-137-108.32-42.25-50-62.52-101.35-62-157C48.63 114.54 98.46 64 159.08 64c48.11 0 80.1 28 96.92 48.21C272.82 92 304.81 64 352.92 64c60.62 0 110.45 50.54 111.08 112.65.56 55.68-19.71 107-62 157-40.09 47.49-94.22 79.78-137 108.35Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-heart"><path d="M256 448a32 32 0 0 1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 0 0 9.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 0 1-18 5.56Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-help-buoy-outline"><circle cx="256" cy="256" r="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="256" cy="256" r="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m208 54 8 132M296 186l8-132M208 458l8-132M296 326l8 132M458 208l-132 8M326 296l132 8M54 208l132 8M186 296l-132 8" /></symbol><symbol  viewBox="0 0 512 512" id="icon-help-buoy-sharp"><path d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32Zm-64 224a64 64 0 1 1 64 64 64 64 0 0 1-64-64Zm237.24-62.29L342.91 199a104.86 104.86 0 0 0-29.86-29.86l5.24-86.33a185 185 0 0 1 111 111Zm-303.35-67.82a183.44 183.44 0 0 1 67.82-43.13l5.29 86.33A104.86 104.86 0 0 0 169.09 199l-86.33-5.24a183.44 183.44 0 0 1 43.13-67.87Zm-43.13 192.4 86.33-5.24A104.86 104.86 0 0 0 199 342.91l-5.24 86.33a185 185 0 0 1-111-110.95Zm303.35 67.82a183.44 183.44 0 0 1-67.82 43.13l-5.24-86.33a104.86 104.86 0 0 0 29.86-29.86l86.33 5.24a183.44 183.44 0 0 1-43.13 67.82Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-help-buoy"><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61ZM192.13 260.18a64 64 0 1 1 59.69 59.69 64.07 64.07 0 0 1-59.69-59.69Zm240-66.64-96.37 5.84a4.06 4.06 0 0 1-3.44-1.59 96 96 0 0 0-18.07-18.07 4.06 4.06 0 0 1-1.59-3.44l5.84-96.37a4 4 0 0 1 5.42-3.51A193 193 0 0 1 435.6 188.12a4 4 0 0 1-3.51 5.42ZM193.54 79.91l5.84 96.37a4.06 4.06 0 0 1-1.59 3.44 96 96 0 0 0-18.07 18.07 4.06 4.06 0 0 1-3.44 1.59l-96.37-5.84a4 4 0 0 1-3.51-5.42A193 193 0 0 1 188.12 76.4a4 4 0 0 1 5.42 3.51ZM79.91 318.46l96.37-5.84a4.06 4.06 0 0 1 3.44 1.59 96 96 0 0 0 18.07 18.07 4.06 4.06 0 0 1 1.59 3.44l-5.84 96.37a4 4 0 0 1-5.42 3.51A193 193 0 0 1 76.4 323.88a4 4 0 0 1 3.51-5.42Zm238.55 113.63-5.84-96.37a4.06 4.06 0 0 1 1.59-3.44 96 96 0 0 0 18.07-18.07 4.06 4.06 0 0 1 3.44-1.59l96.37 5.84a4 4 0 0 1 3.51 5.42A193 193 0 0 1 323.88 435.6a4 4 0 0 1-5.42-3.51Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-help-circle-outline"><path d="M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M200 202.29s.84-17.5 19.57-32.57C230.68 160.77 244 158.18 256 158c10.93-.14 20.69 1.67 26.53 4.45 10 4.76 29.47 16.38 29.47 41.09 0 26-17 37.81-36.37 50.8S251 281.43 251 296" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:28px" /><circle cx="250" cy="348" r="20" /></symbol><symbol  viewBox="0 0 512 512" id="icon-help-circle-sharp"><path d="M288.55 150.84c-8.09-3.86-20-6-32.72-5.82-18 .22-33.13 5.2-45 14.78-23 18.48-24.55 40.37-24.77 42.8a61.69 61.69 0 0 0-.09 12 3 3 0 0 0 3 2.69h21.23a3 3 0 0 0 3-3A65.7 65.7 0 0 1 214 204c0-.11 1.14-11.7 14.36-22.34 7-5.64 16.11-8.44 27.83-8.59 9.32-.11 16.93 1.47 20.34 3.09C291 183 298 192.31 298 204.57c0 18-10.9 26.23-30.18 39.18C247.08 257.68 237 275.1 237 297v11a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3v-11c0-9.16 2.23-19.13 18.44-30 19.95-13.41 42.56-28.6 42.56-62.43 0-23.14-13.3-42.23-37.45-53.73Z" style="fill:none" /><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Zm10.44 302h-30.21a2.57 2.57 0 0 1-2.56-2.57v-30.2a2.57 2.57 0 0 1 2.56-2.57h30.21a2.57 2.57 0 0 1 2.56 2.57v30.2a2.57 2.57 0 0 1-2.56 2.57Zm17-99C267.23 277.88 265 287.85 265 297v11a3 3 0 0 1-3 3h-22a3 3 0 0 1-3-3v-11c0-21.91 10.08-39.33 30.82-53.26C287.1 230.8 298 222.6 298 204.57c0-12.26-7-21.57-21.49-28.46-3.41-1.62-11-3.2-20.34-3.09-11.72.15-20.82 2.95-27.83 8.59C215.12 192.25 214 203.84 214 204a65.7 65.7 0 0 0-.84 10.28 3 3 0 0 1-3 3h-21.25a3 3 0 0 1-3-2.69 61.69 61.69 0 0 1 .09-12c.22-2.43 1.8-24.32 24.77-42.8 11.91-9.58 27.06-14.56 45-14.78 12.7-.15 24.63 2 32.72 5.82 24.21 11.51 37.51 30.6 37.51 53.74 0 33.83-22.61 49.02-42.56 62.43Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-help-circle"><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Zm-6 304a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm33.44-102C267.23 276.88 265 286.85 265 296a14 14 0 0 1-28 0c0-21.91 10.08-39.33 30.82-53.26C287.1 229.8 298 221.6 298 203.57c0-12.26-7-21.57-21.49-28.46-3.41-1.62-11-3.2-20.34-3.09-11.72.15-20.82 2.95-27.83 8.59C215.12 191.25 214 202.83 214 203a14 14 0 1 1-28-1.35c.11-2.43 1.8-24.32 24.77-42.8 11.91-9.58 27.06-14.56 45-14.78 12.7-.15 24.63 2 32.72 5.82C312.7 161.34 326 180.43 326 203.57c0 33.83-22.61 49.02-42.56 62.43Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-help-outline"><path d="M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:40px" /><circle cx="248" cy="399.99" r="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-help-sharp"><path d="M160 164c0-10 1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 290.36 248 316" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:40px" /><rect x="220" y="368" width="56" height="56" rx="3.5" ry="3.5" /></symbol><symbol  viewBox="0 0 512 512" id="icon-help"><path d="M160 164s1.44-33 33.54-59.46C212.6 88.83 235.49 84.28 256 84c18.73-.23 35.47 2.94 45.48 7.82C318.59 100.2 352 120.6 352 164c0 45.67-29.18 66.37-62.35 89.18S248 298.36 248 324" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:40px" /><circle cx="248" cy="399.99" r="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-home-outline"><path d="M80 212v236a16 16 0 0 0 16 16h96V328a24 24 0 0 1 24-24h80a24 24 0 0 1 24 24v136h96a16 16 0 0 0 16-16V212" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M480 256 266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-home-sharp"><path d="M416 174.74V48h-80v58.45L256 32 0 272h64v208h144V320h96v160h144V272h64l-96-97.26z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-home"><path d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z" /><path d="m490.91 244.15-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hourglass-outline"><path d="M145.61 464h220.78c19.8 0 35.55-16.29 33.42-35.06C386.06 308 304 310 304 256s83.11-51 95.8-172.94c2-18.78-13.61-35.06-33.41-35.06H145.61c-19.8 0-35.37 16.28-33.41 35.06C124.89 205 208 201 208 256s-82.06 52-95.8 172.94c-2.14 18.77 13.61 35.06 33.41 35.06Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.23 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87 9.95 12.04 6.47 29.13-9.1 29.13Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hourglass-sharp"><path d="M416 32H96v112l108 112L96 368v112h320V368L308 256l108-112ZM272 224v112l91 96H148l92-96V224l-80-80h192Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-hourglass"><path d="M415.7 427.13c-8.74-76.89-43.83-108.76-69.46-132C328.52 279 320 270.61 320 256c0-14.41 8.49-22.64 26.16-38.44 25.93-23.17 61.44-54.91 69.56-132.84a47 47 0 0 0-12-36.26A50.3 50.3 0 0 0 366.39 32H145.61a50.34 50.34 0 0 0-37.39 16.46 47.05 47.05 0 0 0-11.94 36.26c8.09 77.68 43.47 109.19 69.3 132.19C183.42 232.8 192 241.09 192 256c0 15.1-8.6 23.56-26.5 39.75-25.5 23.1-60.5 54.73-69.2 131.38a46.59 46.59 0 0 0 11.7 36.2A50.44 50.44 0 0 0 145.61 480h220.78A50.44 50.44 0 0 0 404 463.33a46.59 46.59 0 0 0 11.7-36.2ZM343.3 432H169.13c-15.6 0-20-18-9.06-29.16C186.55 376 240 356.78 240 326V224c0-19.85-38-35-61.51-67.2-3.88-5.31-3.49-12.8 6.37-12.8h142.73c8.41 0 10.22 7.43 6.4 12.75C310.82 189 272 204.05 272 224v102c0 30.53 55.71 47 80.4 76.87 9.95 12.04 6.47 29.13-9.1 29.13Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ice-cream-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m352 256-96 224-62-145" /><path d="M299.42 223.48C291.74 239.75 275.18 252 256 252c-13.1 0-27-5-33.63-9.76C216.27 237.87 208 240 208 250v62a24.07 24.07 0 0 1-24 24h0a24.07 24.07 0 0 1-24-24v-56h-2c-35.35 0-62-28.65-62-64a64 64 0 0 1 64-64h8v-8a88 88 0 0 1 176 0v8h8a64 64 0 0 1 0 128c-21.78 0-42-13-52.59-32.51Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ice-cream-sharp"><path d="M359.72 112.37a104 104 0 0 0-207.44 0A80.12 80.12 0 0 0 80 192c0 39.36 26.37 71.23 62.38 78.46a2 2 0 0 1 1.62 2v38.83c0 21.84 17.2 40.22 39 40.74a40 40 0 0 0 41-40v-47.84a2 2 0 0 1 2.72-1.86A83.47 83.47 0 0 0 256 268a63.18 63.18 0 0 0 42.24-16.59 2 2 0 0 1 2.74 0A74.63 74.63 0 0 0 352 272a80 80 0 0 0 7.72-159.63Z" /><path d="M256 300v12a72.1 72.1 0 0 1-58.21 70.64L256 496l92.06-192.08a105.29 105.29 0 0 1-49.18-14.36A93.75 93.75 0 0 1 256 300Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ice-cream"><path d="M183 352c-21.84-.52-39-18.9-39-40.74v-34.07a8 8 0 0 0-6-7.74c-33.75-8.85-58-39.71-58-77.45a80.14 80.14 0 0 1 66.27-78.82 8 8 0 0 0 6.62-6.83 104 104 0 0 1 206.22 0 8 8 0 0 0 6.62 6.83A80 80 0 0 1 352 272a74.33 74.33 0 0 1-47.45-17.41 7.93 7.93 0 0 0-9.92-.14A62.89 62.89 0 0 1 256 268a80.47 80.47 0 0 1-21.8-3.18 8 8 0 0 0-10.2 7.69V312a40 40 0 0 1-41 40Z" /><path d="M263.39 299.7a8 8 0 0 0-7.39 7.91V312a72.11 72.11 0 0 1-50.69 68.76 8 8 0 0 0-4.91 10.78l40.91 94.8A16 16 0 0 0 256 496a16 16 0 0 0 14.69-9.7l73.78-172.15a8 8 0 0 0-6.2-11.07 106.31 106.31 0 0 1-35.9-11.59 8 8 0 0 0-7.13-.2 95 95 0 0 1-31.85 8.41Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-id-card-outline"><rect x="96" y="32" width="320" height="448" rx="48" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M208 80h96" /><path d="M333.48 284.51A39.65 39.65 0 0 0 304 272c-11.6 0-22.09 4.41-29.54 12.43s-11.2 19.12-10.34 31C265.83 338.91 283.72 358 304 358s38.14-19.09 39.87-42.55c.88-11.78-2.82-22.77-10.39-30.94ZM371.69 448H236.31a12.05 12.05 0 0 1-9.31-4.17 13 13 0 0 1-2.76-10.92c3.25-17.56 13.38-32.31 29.3-42.66C267.68 381.06 285.6 376 304 376s36.32 5.06 50.46 14.25c15.92 10.35 26.05 25.1 29.3 42.66a13 13 0 0 1-2.76 10.92 12.05 12.05 0 0 1-9.31 4.17Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-id-card-sharp"><path d="M408 16H104a24 24 0 0 0-24 24v432a24 24 0 0 0 24 24h304a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24Zm-61.1 296.77a43 43 0 1 1-40.71-40.71 43 43 0 0 1 40.71 40.71ZM192 64h128v32H192Zm192 384H224v-24.6c0-32.72 53.27-49.21 80-49.21s80 16.49 80 49.21Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-id-card"><path d="M368 16H144a64.07 64.07 0 0 0-64 64v352a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64Zm-34.52 268.51c7.57 8.17 11.27 19.16 10.39 30.94C342.14 338.91 324.25 358 304 358s-38.17-19.09-39.88-42.55c-.86-11.9 2.81-22.91 10.34-31S292.4 272 304 272a39.65 39.65 0 0 1 29.48 12.51ZM192 80a16 16 0 0 1 16-16h96a16 16 0 0 1 0 32h-96a16 16 0 0 1-16-16Zm189 363.83a12.05 12.05 0 0 1-9.31 4.17H236.31a12.05 12.05 0 0 1-9.31-4.17 13 13 0 0 1-2.76-10.92c3.25-17.56 13.38-32.31 29.3-42.66C267.68 381.06 285.6 376 304 376s36.32 5.06 50.46 14.25c15.92 10.35 26.05 25.1 29.3 42.66a13 13 0 0 1-2.76 10.92Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-image-outline"><rect x="48" y="80" width="416" height="352" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><circle cx="336" cy="176" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="m304 335.79-90.66-90.49a32 32 0 0 0-43.87-1.3L48 352M224 432l123.34-123.34a32 32 0 0 1 43.11-2L464 368" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-image-sharp"><path d="M456 64H56a24 24 0 0 0-24 24v336a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V88a24 24 0 0 0-24-24Zm-124.38 64.2a48 48 0 1 1-43.42 43.42 48 48 0 0 1 43.42-43.42ZM76 416a12 12 0 0 1-12-12v-87.63L192.64 202l96.95 96.75L172.37 416Zm372-12a12 12 0 0 1-12 12H217.63l149.53-149.53L448 333.84Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-image"><path d="M416 64H96a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V128a64.07 64.07 0 0 0-64-64Zm-80 64a48 48 0 1 1-48 48 48.05 48.05 0 0 1 48-48ZM96 416a32 32 0 0 1-32-32v-67.63l94.84-84.3a48.06 48.06 0 0 1 65.8 1.9l64.95 64.81L172.37 416Zm352-32a32 32 0 0 1-32 32H217.63l121.42-121.42a47.72 47.72 0 0 1 61.64-.16L448 333.84Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-images-outline"><path d="M432 112V96a48.14 48.14 0 0 0-48-48H64a48.14 48.14 0 0 0-48 48v256a48.14 48.14 0 0 0 48 48h16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="96" y="128" width="400" height="336" rx="45.99" ry="45.99" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><ellipse cx="372.92" cy="219.64" rx="30.77" ry="30.55" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M342.15 372.17 255 285.78a30.93 30.93 0 0 0-42.18-1.21L96 387.64M265.23 464l118.59-117.73a31 31 0 0 1 41.46-1.87L496 402.91" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-images-sharp"><ellipse cx="373.14" cy="219.33" rx="46.29" ry="46" style="fill:none" /><path d="M80 132v328a20 20 0 0 0 20 20h392a20 20 0 0 0 20-20V132a20 20 0 0 0-20-20H100a20 20 0 0 0-20 20Zm293.14 41.33a46 46 0 1 1-46.28 46 46.19 46.19 0 0 1 46.28-46Zm-261.41 276v-95.48l122.76-110.2L328.27 337l-113 112.33Zm368.27 0H259l144.58-144L480 370.59Z" /><path d="M20 32A20 20 0 0 0 0 52v344a20 20 0 0 0 20 20h28V100a20 20 0 0 1 20-20h380V52a20 20 0 0 0-20-20Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-images"><path d="M450.29 112H142c-34 0-62 27.51-62 61.33v245.34c0 33.82 28 61.33 62 61.33h308c34 0 62-26.18 62-60V173.33c0-33.82-27.68-61.33-61.71-61.33Zm-77.15 61.34a46 46 0 1 1-46.28 46 46.19 46.19 0 0 1 46.28-46.01Zm-231.55 276c-17 0-29.86-13.75-29.86-30.66v-64.83l90.46-80.79a46.54 46.54 0 0 1 63.44 1.83L328.27 337l-113 112.33ZM480 418.67a30.67 30.67 0 0 1-30.71 30.66H259L376.08 333a46.24 46.24 0 0 1 59.44-.16L480 370.59Z" /><path d="M384 32H64A64 64 0 0 0 0 96v256a64.11 64.11 0 0 0 48 62V152a72 72 0 0 1 72-72h326a64.11 64.11 0 0 0-62-48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-infinite-outline"><path d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c37.51 0 71-22.41 94-48M256 256s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-37.51 0-71 22.41-94 48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-infinite-sharp"><path d="M382 136c-40.87 0-73.46 20.53-93.6 37.76l-.71.61-11.47 12.47 25.32 41.61 18.74-18.79C339.89 193.1 361.78 184 382 184c40.8 0 74 32.3 74 72s-33.2 72-74 72c-62 0-104.14-81.95-104.56-82.78C275 240.29 221.56 136 130 136 62.73 136 8 189.83 8 256s54.73 120 122 120c32.95 0 65.38-13.11 93.79-37.92l.61-.54 11.38-12.38-25.33-41.61-18.83 18.88C172 319.4 151.26 328 130 328c-40.8 0-74-32.3-74-72s33.2-72 74-72c62 0 104.14 81.95 104.56 82.78C237 271.71 290.44 376 382 376c67.27 0 122-53.83 122-120s-54.73-120-122-120Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-infinite"><path d="M256 256s-48-96-126-96c-54.12 0-98 43-98 96s43.88 96 98 96c30 0 56.45-13.18 78-32M256 256s48 96 126 96c54.12 0 98-43 98-96s-43.88-96-98-96c-29.37 0-56.66 13.75-78 32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-information-circle-outline"><path d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M220 220h32v116" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M208 340h88" /><path d="M248 130a26 26 0 1 0 26 26 26 26 0 0 0-26-26Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-information-circle-sharp"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56Zm0 82a26 26 0 1 1-26 26 26 26 0 0 1 26-26Zm64 226H200v-32h44v-88h-32v-32h64v120h44Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-information-circle"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56Zm0 82a26 26 0 1 1-26 26 26 26 0 0 1 26-26Zm48 226h-88a16 16 0 0 1 0-32h28v-88h-16a16 16 0 0 1 0-32h32a16 16 0 0 1 16 16v104h28a16 16 0 0 1 0 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-information-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:40px" d="M196 220h64v172" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:40px" d="M187 396h138" /><path d="M256 160a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-information-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:40px" d="M196 220h64v172M187 396h138" /><path d="M256 160a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-information"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:40px" d="M196 220h64v172" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:40px" d="M187 396h138" /><path d="M256 160a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-invert-mode-outline"><circle fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" cx="256" cy="256" r="208" /><path d="M256 176v160a80 80 0 0 1 0-160ZM256 48v128a80 80 0 0 1 0 160v128c114.88 0 208-93.12 208-208S370.88 48 256 48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-invert-mode-sharp"><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61ZM256 432v-96a80 80 0 0 1 0-160V80c97.05 0 176 79 176 176s-78.95 176-176 176Z" /><path d="M336 256a80 80 0 0 0-80-80v160a80 80 0 0 0 80-80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-invert-mode"><circle fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" cx="256" cy="256" r="208" /><path d="M256 176v160a80 80 0 0 0 0-160ZM256 48v128a80 80 0 0 0 0 160v128c-114.88 0-208-93.12-208-208S141.12 48 256 48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-journal-outline"><rect x="96" y="48" width="320" height="416" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:60px" d="M320 48v416" /></symbol><symbol  viewBox="0 0 512 512" id="icon-journal-sharp"><path d="M290 32H104a24 24 0 0 0-24 24v400a24 24 0 0 0 24 24h186ZM408 32h-58v448h58a24 24 0 0 0 24-24V56a24 24 0 0 0-24-24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-journal"><path d="M290 32H144a64.07 64.07 0 0 0-64 64v320a64.07 64.07 0 0 0 64 64h146ZM368 32h-18v448h18a64.07 64.07 0 0 0 64-64V96a64.07 64.07 0 0 0-64-64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-key-outline"><path d="M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 0 0-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17ZM400 144a32 32 0 1 1-32-32 32 32 0 0 1 32 32Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-key-sharp"><path d="M218.1 167.2c0 13 0 25.6 4.1 37.4-43.1 50.6-167.5 194.5-167.5 194.5l2.9 36.3s34.8 33 40 28c15.4-15 24.8-25.2 24.8-25.2l7.24-43.35 47.11-3.47 3.78-46.8 49.63-.95.49-50.09 52.69 2.1 9-18.84c15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.4-121.9 119.2ZM406.85 144A38.85 38.85 0 1 1 368 105.15 38.81 38.81 0 0 1 406.85 144Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-key"><path d="M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 0 0-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17ZM400 144a32 32 0 1 1-32-32 32 32 0 0 1 32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-keypad-outline"><circle cx="256" cy="448" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="320" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M288 192a32 32 0 1 1-32-32 32 32 0 0 1 32 32Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="64" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="384" cy="320" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="384" cy="192" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="384" cy="64" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="128" cy="320" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="128" cy="192" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="128" cy="64" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-keypad-sharp"><rect x="80" y="16" width="96" height="96" rx="8" ry="8" /><rect x="208" y="16" width="96" height="96" rx="8" ry="8" /><rect x="336" y="16" width="96" height="96" rx="8" ry="8" /><rect x="80" y="144" width="96" height="96" rx="8" ry="8" /><rect x="208" y="144" width="96" height="96" rx="8" ry="8" /><rect x="336" y="144" width="96" height="96" rx="8" ry="8" /><rect x="80" y="272" width="96" height="96" rx="8" ry="8" /><rect x="208" y="272" width="96" height="96" rx="8" ry="8" /><rect x="208" y="400" width="96" height="96" rx="8" ry="8" /><rect x="336" y="272" width="96" height="96" rx="8" ry="8" /></symbol><symbol  viewBox="0 0 512 512" id="icon-keypad"><path d="M256 400a48 48 0 1 0 48 48 48 48 0 0 0-48-48ZM256 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48ZM256 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48ZM256 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48ZM384 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48ZM384 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48ZM384 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48ZM128 272a48 48 0 1 0 48 48 48 48 0 0 0-48-48ZM128 144a48 48 0 1 0 48 48 48 48 0 0 0-48-48ZM128 16a48 48 0 1 0 48 48 48 48 0 0 0-48-48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-language-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M48 112h288M192 64v48M272 448l96-224 96 224M301.5 384h133M281.3 112S257 206 199 277 80 384 80 384" /><path d="M256 336s-35-27-72-75-56-85-56-85" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-language-sharp"><path d="M363 176 246 464h47.24l24.49-58h90.54l24.49 58H480Zm-26.69 186L363 279.85 389.69 362ZM272 320c-.25-.19-20.59-15.77-45.42-42.67 39.58-53.64 62-114.61 71.15-143.33H352V90H214V48h-44v42H32v44h219.25c-9.52 26.95-27.05 69.5-53.79 108.36-32.68-43.44-47.14-75.88-47.33-76.22L143 152l-38 22 6.87 13.86c.89 1.56 17.19 37.9 54.71 86.57.92 1.21 1.85 2.39 2.78 3.57-49.72 56.86-89.15 79.09-89.66 79.47L64 368l23 36 19.3-11.47c2.2-1.67 41.33-24 92-80.78 24.52 26.28 43.22 40.83 44.3 41.67L255 362Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-language"><path d="m478.33 433.6-90-218a22 22 0 0 0-40.67 0l-90 218a22 22 0 1 0 40.67 16.79L316.66 406h102.67l18.33 44.39A22 22 0 0 0 458 464a22 22 0 0 0 20.32-30.4ZM334.83 362 368 281.65 401.17 362ZM267.84 342.92a22 22 0 0 0-4.89-30.7c-.2-.15-15-11.13-36.49-34.73 39.65-53.68 62.11-114.75 71.27-143.49H330a22 22 0 0 0 0-44H214V70a22 22 0 0 0-44 0v20H54a22 22 0 0 0 0 44h197.25c-9.52 26.95-27.05 69.5-53.79 108.36-31.41-41.68-43.08-68.65-43.17-68.87a22 22 0 0 0-40.58 17c.58 1.38 14.55 34.23 52.86 83.93.92 1.19 1.83 2.35 2.74 3.51-39.24 44.35-77.74 71.86-93.85 80.74a22 22 0 1 0 21.07 38.63c2.16-1.18 48.6-26.89 101.63-85.59 22.52 24.08 38 35.44 38.93 36.1a22 22 0 0 0 30.75-4.9Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-laptop-outline"><rect x="48" y="96" width="416" height="304" rx="32.14" ry="32.14" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M16 416h480" /></symbol><symbol  viewBox="0 0 512 512" id="icon-laptop-sharp"><path d="M477.29 400a27.75 27.75 0 0 0 2.71-12V108a28 28 0 0 0-28-28H60a28 28 0 0 0-28 28v280a27.75 27.75 0 0 0 2.71 12H0v32h512v-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-laptop"><path d="M496 400h-28.34A47.92 47.92 0 0 0 480 367.86V128.14A48.2 48.2 0 0 0 431.86 80H80.14A48.2 48.2 0 0 0 32 128.14v239.72A47.92 47.92 0 0 0 44.34 400H16a16 16 0 0 0 0 32h480a16 16 0 0 0 0-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-layers-outline"><path d="m434.8 137.65-149.36-68.1c-16.19-7.4-42.69-7.4-58.88 0L77.3 137.65c-17.6 8-17.6 21.09 0 29.09l148 67.5c16.89 7.7 44.69 7.7 61.58 0l148-67.5c17.52-8 17.52-21.1-.08-29.09ZM160 308.52l-82.7 37.11c-17.6 8-17.6 21.1 0 29.1l148 67.5c16.89 7.69 44.69 7.69 61.58 0l148-67.5c17.6-8 17.6-21.1 0-29.1l-79.94-38.47" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="m160 204.48-82.8 37.16c-17.6 8-17.6 21.1 0 29.1l148 67.49c16.89 7.7 44.69 7.7 61.58 0l148-67.49c17.7-8 17.7-21.1.1-29.1L352 204.48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-layers-sharp"><path d="M480 150 256 48 32 150l224 104 224-104zM255.71 392.95l-144.81-66.2L32 362l224 102 224-102-78.69-35.3-145.6 66.25z" /><path d="m480 256-75.53-33.53L256.1 290.6l-148.77-68.17L32 256l224 102 224-102Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-layers"><path d="M256 256c-13.47 0-26.94-2.39-37.44-7.17l-148-67.49C63.79 178.26 48 169.25 48 152.24s15.79-26 22.58-29.12l149.28-68.07c20.57-9.4 51.61-9.4 72.19 0l149.37 68.07c6.79 3.09 22.58 12.1 22.58 29.12s-15.79 26-22.58 29.11l-148 67.48C282.94 253.61 269.47 256 256 256Zm176.76-100.86Z" /><path d="M441.36 226.81 426.27 220l-38.77 17.74-94 43c-10.5 4.8-24 7.19-37.44 7.19s-26.93-2.39-37.42-7.19l-94.07-43L85.79 220l-15.22 6.84C63.79 229.93 48 239 48 256s15.79 26.08 22.56 29.17l148 67.63C229 357.6 242.49 360 256 360s26.94-2.4 37.44-7.19l147.87-67.61c6.81-3.09 22.69-12.11 22.69-29.2s-15.77-26.07-22.64-29.19Z" /><path d="m441.36 330.8-15.09-6.8-38.77 17.73-94 42.95c-10.5 4.78-24 7.18-37.44 7.18s-26.93-2.39-37.42-7.18l-94.07-43L85.79 324l-15.22 6.84C63.79 333.93 48 343 48 360s15.79 26.07 22.56 29.15l148 67.59C229 461.52 242.54 464 256 464s26.88-2.48 37.38-7.27l147.92-67.57c6.82-3.08 22.7-12.1 22.7-29.16s-15.77-26.07-22.64-29.2Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-leaf-outline"><path d="M321.89 171.42C233 114 141 155.22 56 65.22c-19.8-21-8.3 235.5 98.1 332.7 77.79 71 197.9 63.08 238.4-5.92s18.28-163.17-70.61-220.58Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M173 253c86 81 175 129 292 147" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-leaf-sharp"><path d="m150.38 253.68 21.94-23.3 11.65 11c73.63 69.36 147.51 111.56 234.45 133.07 11.73-32 12.77-67.22 2.64-101.58-13.44-45.59-44.74-85.31-90.49-114.86-40.25-26-76.6-32.09-115.09-38.54-21.12-3.54-43-7.2-66.85-14.43-43.78-13.28-89.69-52.74-90.15-53.13L33.4 30.15 32 63.33c-.1 2.56-2.42 63.57 14.22 147.77 17.58 89 50.24 155.85 97.07 198.63 38 34.69 87.62 53.9 136.93 53.9a185.88 185.88 0 0 0 27.78-2.07c41.72-6.32 76.43-27.27 96-57.75-89.5-23.28-165.95-67.55-242-139.16Z" /><path d="M467.43 384.19c-16.83-2.59-33.13-5.84-49-9.77a158.49 158.49 0 0 1-12.13 25.68c-.74 1.25-1.51 2.49-2.29 3.71a583.43 583.43 0 0 0 58.55 12l15.82 2.44 4.86-31.63Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-leaf"><path d="M161.35 242a16 16 0 0 1 22.62-.68c73.63 69.36 147.51 111.56 234.45 133.07 11.73-32 12.77-67.22 2.64-101.58-13.44-45.59-44.74-85.31-90.49-114.86-40.84-26.38-81.66-33.25-121.15-39.89-49.82-8.38-96.88-16.3-141.79-63.85-5-5.26-11.81-7.37-18.32-5.66-7.44 2-12.43 7.88-14.82 17.6-5.6 22.75-2 86.51 13.75 153.82 25.29 108.14 65.65 162.86 95.06 189.73 38 34.69 87.62 53.9 136.93 53.9a186 186 0 0 0 27.77-2.04c41.71-6.32 76.43-27.27 96-57.75-89.49-23.28-165.94-67.55-242-139.16a16 16 0 0 1-.65-22.65ZM467.43 384.19c-16.83-2.59-33.13-5.84-49-9.77a157.71 157.71 0 0 1-12.13 25.68c-.73 1.25-1.5 2.49-2.29 3.71a584.21 584.21 0 0 0 58.56 12 16 16 0 1 0 4.87-31.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-library-outline"><rect x="32" y="96" width="64" height="368" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M112 224h128M112 400h128" /><rect x="112" y="160" width="128" height="304" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="256" y="48" width="96" height="416" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="m422.46 96.11-40.4 4.25c-11.12 1.17-19.18 11.57-17.93 23.1l34.92 321.59c1.26 11.53 11.37 20 22.49 18.84l40.4-4.25c11.12-1.17 19.18-11.57 17.93-23.1L445 115c-1.31-11.58-11.42-20.06-22.54-18.89Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-library-sharp"><path d="M84 480H28a12 12 0 0 1-12-12V92a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v376a12 12 0 0 1-12 12ZM240 208v-52a12 12 0 0 0-12-12H124a12 12 0 0 0-12 12v52ZM112 416v52a12 12 0 0 0 12 12h104a12 12 0 0 0 12-12v-52ZM112 240h128v144H112zM340 480h-72a12 12 0 0 1-12-12V44a12 12 0 0 1 12-12h72a12 12 0 0 1 12 12v424a12 12 0 0 1-12 12ZM369 100.7l30 367.83a12 12 0 0 0 13.45 10.92l72.16-9a12 12 0 0 0 10.47-12.9L465 91.21a12 12 0 0 0-13.2-10.94l-72.13 7.51A12 12 0 0 0 369 100.7Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-library"><path d="M64 480H48a32 32 0 0 1-32-32V112a32 32 0 0 1 32-32h16a32 32 0 0 1 32 32v336a32 32 0 0 1-32 32ZM240 176a32 32 0 0 0-32-32h-64a32 32 0 0 0-32 32v28a4 4 0 0 0 4 4h120a4 4 0 0 0 4-4ZM112 448a32 32 0 0 0 32 32h64a32 32 0 0 0 32-32v-30a2 2 0 0 0-2-2H114a2 2 0 0 0-2 2Z" /><rect x="112" y="240" width="128" height="144" rx="2" ry="2" /><path d="M320 480h-32a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h32a32 32 0 0 1 32 32v384a32 32 0 0 1-32 32ZM495.89 445.45l-32.23-340c-1.48-15.65-16.94-27-34.53-25.31l-31.85 3c-17.59 1.67-30.65 15.71-29.17 31.36l32.23 340c1.48 15.65 16.94 27 34.53 25.31l31.85-3c17.59-1.67 30.65-15.71 29.17-31.36Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-link-outline"><path d="M208 352h-64a96 96 0 0 1 0-192h64M304 160h64a96 96 0 0 1 0 192h-64M163.29 256h187.42" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:36px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-link-sharp"><path d="M200.66 352H144a96 96 0 0 1 0-192h55.41M312.59 160H368a96 96 0 0 1 0 192h-56.66M169.07 256h175.86" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-link"><path d="M200.66 352H144a96 96 0 0 1 0-192h55.41M312.59 160H368a96 96 0 0 1 0 192h-56.66M169.07 256h175.86" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-list-circle-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M224 184h128M224 256h128M224 327h128" /><path d="M448 258c0-106-86-192-192-192S64 152 64 258s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="168" cy="184" r="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="168" cy="257" r="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="168" cy="328" r="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-list-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm-64 287.5a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16Zm0-71a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16Zm0-72a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-16a16 16 0 0 1 16-16h16a16 16 0 0 1 16 16Zm176 151H212.67v-32H368Zm0-71H212.67v-32H368Zm0-72H212.67v-32H368Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-list-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm-88 302a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm0-71a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm0-73a24 24 0 1 1 24-24 24 24 0 0 1-24 24Zm184 135H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32Zm0-71H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32Zm0-72H224a16 16 0 0 1 0-32h128a16 16 0 0 1 0 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-list-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M160 144h288M160 256h288M160 368h288" /><circle cx="80" cy="144" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="80" cy="256" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="80" cy="368" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-list-sharp"><path style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:48px" d="M144 144h320M144 256h320M144 368h320" /><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" d="M64 128h32v32H64zM64 240h32v32H64zM64 352h32v32H64z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-list"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="M160 144h288M160 256h288M160 368h288" /><circle cx="80" cy="144" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="80" cy="256" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="80" cy="368" r="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-locate-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="M256 96V56M256 456v-40" /><path d="M256 112a144 144 0 1 0 144 144 144 144 0 0 0-144-144Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="M416 256h40M56 256h40" /></symbol><symbol  viewBox="0 0 512 512" id="icon-locate-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:48px" d="M256 96V56M256 456v-40M256 112a144 144 0 1 0 144 144 144 144 0 0 0-144-144ZM416 256h40M56 256h40" /></symbol><symbol  viewBox="0 0 512 512" id="icon-locate"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="M256 96V56M256 456v-40M256 112a144 144 0 1 0 144 144 144 144 0 0 0-144-144ZM416 256h40M56 256h40" /></symbol><symbol  viewBox="0 0 512 512" id="icon-location-outline"><path d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="256" cy="192" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-location-sharp"><path d="M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144Zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-location"><circle cx="256" cy="192" r="32" /><path d="M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153Zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-lock-closed-outline"><path d="M336 208v-95a80 80 0 0 0-160 0v95" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="96" y="208" width="320" height="272" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-lock-closed-sharp"><path d="M420 192h-68v-80a96 96 0 1 0-192 0v80H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V204a12 12 0 0 0-12-12Zm-106 0H198v-80.75a58 58 0 1 1 116 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-lock-closed"><path d="M368 192h-16v-80a96 96 0 1 0-192 0v80h-16a64.07 64.07 0 0 0-64 64v176a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V256a64.07 64.07 0 0 0-64-64Zm-48 0H192v-80a64 64 0 1 1 128 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-lock-open-outline"><path d="M336 112a80 80 0 0 0-160 0v96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="96" y="208" width="320" height="272" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-lock-open-sharp"><path d="M420 192H198v-80.75a58.08 58.08 0 0 1 99.07-41.07A59.4 59.4 0 0 1 314 112h38a96 96 0 1 0-192 0v80H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V204a12 12 0 0 0-12-12Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-lock-open"><path d="M368 192H192v-80a64 64 0 1 1 128 0 16 16 0 0 0 32 0 96 96 0 1 0-192 0v80h-16a64.07 64.07 0 0 0-64 64v176a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V256a64.07 64.07 0 0 0-64-64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-log-in-outline"><path d="M192 176v-40a40 40 0 0 1 40-40h160a40 40 0 0 1 40 40v240a40 40 0 0 1-40 40H240c-22.09 0-48-17.91-48-40v-40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m288 336 80-80-80-80M80 256h272" /></symbol><symbol  viewBox="0 0 512 512" id="icon-log-in-sharp"><path d="M432 80H192a16 16 0 0 0-16 16v144h153.37l-64-64L288 153.37l91.31 91.32a16 16 0 0 1 0 22.62L288 358.63 265.37 336l64-64H176v144a16 16 0 0 0 16 16h240a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16ZM64 240h112v32H64z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-log-in"><path d="M392 80H232a56.06 56.06 0 0 0-56 56v104h153.37l-52.68-52.69a16 16 0 0 1 22.62-22.62l80 80a16 16 0 0 1 0 22.62l-80 80a16 16 0 0 1-22.62-22.62L329.37 272H176v104c0 32.05 33.79 56 64 56h152a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56ZM80 240a16 16 0 0 0 0 32h96v-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-log-out-outline"><path d="M304 336v40a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V136a40 40 0 0 1 40-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-log-out-sharp"><path d="M160 240h160V96a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h240a16 16 0 0 0 16-16V272H160ZM459.31 244.69 368 153.37 345.37 176l64 64H320v32h89.37l-64 64L368 358.63l91.31-91.32a16 16 0 0 0 0-22.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-log-out"><path d="M160 256a16 16 0 0 1 16-16h144V136c0-32-33.79-56-64-56H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h160a56.06 56.06 0 0 0 56-56V272H176a16 16 0 0 1-16-16ZM459.31 244.69l-80-80a16 16 0 0 0-22.62 22.62L409.37 240H320v32h89.37l-52.68 52.69a16 16 0 1 0 22.62 22.62l80-80a16 16 0 0 0 0-22.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-alipay"><path d="M102.41 32C62.38 32 32 64.12 32 103.78v304.45C32 447.86 64.38 480 104.41 480h303.2c40 0 72.39-32.14 72.39-71.77v-3.11c-1.35-.56-115.47-48.57-174.5-76.7-39.82 48.57-91.18 78-144.5 78-90.18 0-120.8-78.22-78.1-129.72 9.31-11.22 25.15-21.94 49.73-28 38.45-9.36 99.64 5.85 157 24.61a309.41 309.41 0 0 0 25.46-61.67H138.34V194h91.13v-31.83H119.09v-17.75h110.38V99s0-7.65 7.82-7.65h44.55v53H391v17.75H281.84V194h89.08a359.41 359.41 0 0 1-37.72 94.43c27 9.69 49.31 18.88 67.39 24.89 60.32 20 77.23 22.45 79.41 22.7V103.78C480 64.12 447.6 32 407.61 32h-305.2ZM152 274.73q-5.81.06-11.67.63c-11.3 1.13-32.5 6.07-44.09 16.23-34.74 30-13.94 84.93 56.37 84.93 40.87 0 81.71-25.9 113.79-67.37-41.36-20-77-34.85-114.4-34.42Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-amazon"><path d="M48.48 378.73a300.52 300.52 0 0 0 152.89 95.92 262.57 262.57 0 0 0 159.3-17.25 225.52 225.52 0 0 0 66.79-47 6.36 6.36 0 0 0-2-8.53 11.76 11.76 0 0 0-8-.05 401.92 401.92 0 0 1-116.55 39.34 358.13 358.13 0 0 1-127.29-8.83 446.73 446.73 0 0 1-119.1-60.49 5 5 0 0 0-6.06 6.9Z" /><path d="M387.15 388.44a168.11 168.11 0 0 1 48.94-2.23l.67.13a10 10 0 0 1 7.37 12.05A204.71 204.71 0 0 1 429 444.47a2.55 2.55 0 0 0 1.66 3.18 2.51 2.51 0 0 0 2.23-.37A83.31 83.31 0 0 0 464 382.86a12.44 12.44 0 0 0-10.22-13.22A95.75 95.75 0 0 0 384.91 384a2.55 2.55 0 0 0-.57 3.55 2.52 2.52 0 0 0 2.81.89ZM304.24 324.92a164 164 0 0 1-28.92 25.3A135.16 135.16 0 0 1 208.63 369a99.49 99.49 0 0 1-57.49-19.85 97.25 97.25 0 0 1-27.36-100.28 112.35 112.35 0 0 1 65.3-69.06 367.67 367.67 0 0 1 104.7-15.55V127A37.82 37.82 0 0 0 261 94.72a59.9 59.9 0 0 0-31.17 4.08 48.89 48.89 0 0 0-27.13 34.67 12 12 0 0 1-12.58 6.72l-50.9-4.5a11.38 11.38 0 0 1-8.38-10.16 103.66 103.66 0 0 1 36.61-63.45A143.86 143.86 0 0 1 257.85 32a146.24 146.24 0 0 1 84.27 27.67 86.82 86.82 0 0 1 30.7 70.22V258.8a84.46 84.46 0 0 0 8 31.28l15.87 23.23a13 13 0 0 1 0 11.23l-46.99 39.71a12.5 12.5 0 0 1-12.68-.44 244.84 244.84 0 0 1-32.78-38.89Zm-10.6-116.83a257.68 257.68 0 0 0-44 2.89A63 63 0 0 0 208 242.54a63 63 0 0 0 3.07 54 40.6 40.6 0 0 0 47.11 12.19 78.61 78.61 0 0 0 35.46-55.58v-45.06" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-amplify"><path d="m112.31 268 40.36-68.69 34.65 59-67.54 115h135L289.31 432H16Zm58.57-99.76 33.27-56.67L392.44 432h-66.68ZM222.67 80h66.59L496 432h-66.68Z" style="fill-rule:evenodd" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-android"><path d="m380.91 199 42.47-73.57a8.63 8.63 0 0 0-3.12-11.76 8.52 8.52 0 0 0-11.71 3.12l-43 74.52c-32.83-15-69.78-23.35-109.52-23.35s-76.69 8.36-109.52 23.35l-43-74.52a8.6 8.6 0 1 0-14.88 8.64L131 199C57.8 238.64 8.19 312.77 0 399.55h512c-8.19-86.78-57.8-160.91-131.09-200.55ZM138.45 327.65a21.46 21.46 0 1 1 21.46-21.46 21.47 21.47 0 0 1-21.46 21.46Zm235 0A21.46 21.46 0 1 1 395 306.19a21.47 21.47 0 0 1-21.51 21.46Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-angular"><path d="M213.57 256h84.85l-42.43-89.36L213.57 256z" /><path d="M256 32 32 112l46.12 272L256 480l177.75-96L480 112Zm88 320-26.59-56H194.58L168 352h-40L256 72l128 280Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-appflow"><path d="M198.626 28.424 8 484.423h114.376L256 164.779l133.624 319.645H504l-190.626-456H198.626Z" /><path d="M312 346.039c0 30.928-25.072 56-56 56s-56-25.072-56-56 25.072-56 56-56 56 25.072 56 56Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-apple-appstore"><path d="M256 32C132.26 32 32 132.26 32 256s100.26 224 224 224 224-100.26 224-224S379.74 32 256 32Zm-85 321.89a15.48 15.48 0 0 1-13.46 7.65 14.91 14.91 0 0 1-7.86-2.16 15.48 15.48 0 0 1-5.6-21.21l15.29-25.42a8.73 8.73 0 0 1 7.54-4.3h2.26c11.09 0 18.85 6.67 21.11 13.13Zm129.45-50-100.13.11h-66.55a15.46 15.46 0 0 1-15.51-16.15c.32-8.4 7.65-14.76 16-14.76h48.24l57.19-97.35-18.52-31.55C217 137 218.85 127.52 226 123a15.57 15.57 0 0 1 21.87 5.17l9.9 16.91h.11l9.91-16.91A15.58 15.58 0 0 1 289.6 123c7.11 4.52 8.94 14 4.74 21.22l-18.52 31.55-18 30.69-39.09 66.66v.11h57.61c7.22 0 16.27 3.88 19.93 10.12l.32.65c3.23 5.49 5.06 9.26 5.06 14.75a13.82 13.82 0 0 1-1.17 5.17Zm77.75.11h-27.11v.11l19.82 33.71a15.8 15.8 0 0 1-5.17 21.53 15.53 15.53 0 0 1-8.08 2.27A15.71 15.71 0 0 1 344.2 354l-29.29-49.86-18.2-31L273.23 233a38.35 38.35 0 0 1-.65-38c4.64-8.19 8.19-10.34 8.19-10.34L333 273h44.91c8.4 0 15.61 6.46 16 14.75A15.65 15.65 0 0 1 378.23 304Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-apple-ar"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M201.14 64 256 32l54.86 32" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 32v80" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M310.86 448 256 480l-54.86-32" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M256 480v-80" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 207.51V144l53.15-31.51" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m64 144 67.29 40" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 304.49V368l-53.15 31.51" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m448 368-67.29-40" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M117.15 400 64 368v-63.51" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m64 368 66.64-40" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M394.85 112.49 448 144v63.51" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="m448 144-67.29 40M256 320v-64l54.86-32M256 256l-54.86-32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-apple"><path d="M349.13 136.86c-40.32 0-57.36 19.24-85.44 19.24-28.79 0-50.75-19.1-85.69-19.1-34.2 0-70.67 20.88-93.83 56.45-32.52 50.16-27 144.63 25.67 225.11 18.84 28.81 44 61.12 77 61.47h.6c28.68 0 37.2-18.78 76.67-19h.6c38.88 0 46.68 18.89 75.24 18.89h.6c33-.35 59.51-36.15 78.35-64.85 13.56-20.64 18.6-31 29-54.35-76.19-28.92-88.43-136.93-13.08-178.34-23-28.8-55.32-45.48-85.79-45.48Z" /><path d="M340.25 32c-24 1.63-52 16.91-68.4 36.86-14.88 18.08-27.12 44.9-22.32 70.91h1.92c25.56 0 51.72-15.39 67-35.11 14.72-18.77 25.88-45.37 21.8-72.66Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-behance"><path d="M344.1 233.6c-28.9 0-32.9 28.8-32.9 28.8h61.4s.4-28.8-28.5-28.8ZM204.8 262.4h-54.4v50h51.7c7.8-.2 22.4-2.4 22.4-24.3 0-26-19.7-25.7-19.7-25.7Z" /><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32Zm47.2 137.6h77.1v23h-77.1v-23Zm-39 120.8c0 57-59.4 55.2-59.4 55.2h-97.2v-187h97.2c29.6 0 52.9 16.3 52.9 49.8S229.2 244 229.2 244c37.6 0 35 46.4 35 46.4Zm144.2-3.1h-96.9c0 34.7 32.9 32.5 32.9 32.5 31.1 0 30-20.1 30-20.1h32.9c0 53.4-64 49.7-64 49.7-76.7 0-71.8-71.5-71.8-71.5s-.1-71.8 71.8-71.8c75.7.1 65.1 81.2 65.1 81.2Z" /><path d="M218 211.3c0-19.4-13.2-19.4-13.2-19.4h-54.4v41.7h51c8.8 0 16.6-2.9 16.6-22.3Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-bitbucket"><path d="M483.13 32.23a19.65 19.65 0 0 0-2.54-.23h-449C23 31.88 16.12 38.88 16 47.75a11.44 11.44 0 0 0 .23 2.8l65.3 411.25a22.52 22.52 0 0 0 7 12.95A20 20 0 0 0 102 480h313.18a15.45 15.45 0 0 0 15.34-13.42l38.88-247.91H325.19l-18.46 112H205.21l-25.73-148h295.58l20.76-132c1.27-8.75-4.38-17.04-12.69-18.44Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-bitcoin"><path d="M410.47 279.2c-5-11.5-12.7-21.6-28.1-30.1a98.15 98.15 0 0 0-25.4-10 62.22 62.22 0 0 0 16.3-11 56.37 56.37 0 0 0 15.6-23.3 77.11 77.11 0 0 0 3.5-28.2c-1.1-16.8-4.4-33.1-13.2-44.8s-21.2-20.7-37.6-27c-12.6-4.8-25.5-7.8-45.5-8.9V32h-40v64h-32V32h-41v64H96v48h27.87c8.7 0 14.6.8 17.6 2.3a13.22 13.22 0 0 1 6.5 6c1.3 2.5 1.9 8.4 1.9 17.5V343c0 9-.6 14.8-1.9 17.4s-2 4.9-5.1 6.3-3.2 1.3-11.8 1.3h-26.4L96 416h87v64h41v-64h32v64h40v-64.4c26-1.3 44.5-4.7 59.4-10.3 19.3-7.2 34.1-17.7 44.7-31.5s14-34.9 14.93-51.2c.67-14.5-.03-33.2-4.56-43.4ZM224 150h32v74h-32Zm0 212v-90h32v90Zm72-208.1c6 2.5 9.9 7.5 13.8 12.7 4.3 5.7 6.5 13.3 6.5 21.4 0 7.8-2.9 14.5-7.5 20.5-3.8 4.9-6.8 8.3-12.8 11.1Zm28.8 186.7c-7.8 6.9-12.3 10.1-22.1 13.8a56.06 56.06 0 0 1-6.7 1.9v-82.8a40.74 40.74 0 0 1 11.3 3.4c7.8 3.3 15.2 6.9 19.8 13.2a43.82 43.82 0 0 1 8 24.7c-.03 10.9-2.83 19.2-10.33 25.8Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-buffer"><path d="m39.93 149.25 197.4 95.32c5.14 2.45 12 3.73 18.79 3.73s13.65-1.28 18.78-3.73l197.4-95.32c10.38-5 10.38-13.18 0-18.2L274.9 35.73c-5.13-2.45-12-3.73-18.78-3.73s-13.65 1.28-18.79 3.73l-197.4 95.32c-10.38 5.02-10.38 13.18 0 18.2Z" /><path d="M472.3 246.9s-36.05-17.38-40.83-19.72-6.07-2.21-11.09.12-145.6 70.23-145.6 70.23a45.71 45.71 0 0 1-18.78 3.74c-6.77 0-13.65-1.29-18.78-3.74 0 0-136.85-66-143.27-69.18C87 225 85 225 78.67 228l-39 18.78c-10.38 5-10.38 13.19 0 18.2L237.1 360.3c5.13 2.45 12 3.73 18.78 3.73s13.65-1.28 18.79-3.73l197.4-95.3c10.61-4.92 10.61-13.08.23-18.1Z" /><path d="M472.3 362.75s-36.05-17.38-40.83-19.75-6.07-2.21-11.09.12S274.9 413.5 274.9 413.5a45.74 45.74 0 0 1-18.78 3.73c-6.77 0-13.65-1.28-18.79-3.73 0 0-136.85-66-143.26-69.18-7-3.39-9-3.39-15.29-.35l-39 18.78c-10.39 5-10.39 13.18 0 18.2l197.4 95.32c5.13 2.56 12 3.73 18.78 3.73s13.65-1.28 18.78-3.73L472.18 381c10.5-5.07 10.5-13.23.12-18.25Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-capacitor"><path d="M480 101.09 372.37 208.72l106.86 107.06-69.3 69.3-283.22-283.23L196 32.54l107.07 106.88L410.67 32ZM32.55 196l69.3-69.31 283.22 283.24-69.3 69.3-107-106.87L101.08 480 32 410.67l107.42-107.61Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-chrome"><path d="M188.8 255.93a67.2 67.2 0 1 0 67.2-67.18 67.38 67.38 0 0 0-67.2 67.18Z" /><path d="M476.75 217.79v.05a206.63 206.63 0 0 0-7-28.84h-.11a202.16 202.16 0 0 1 7.07 29 203.5 203.5 0 0 0-7.07-29h-155.4c19.05 17 31.36 40.17 31.36 67.05a86.55 86.55 0 0 1-12.31 44.73L231 478.45a2.44 2.44 0 0 1 0 .27v.28-.26a224 224 0 0 0 25 1.26c6.84 0 13.61-.39 20.3-1a222.91 222.91 0 0 0 29.78-4.74C405.68 451.52 480 362.4 480 255.94a225.25 225.25 0 0 0-3.25-38.15Z" /><path d="M256 345.5c-33.6 0-61.6-17.91-77.29-44.79L76 123.05l-.14-.24A224 224 0 0 0 207.4 474.55v-.05l77.69-134.6a84.13 84.13 0 0 1-29.09 5.6Z" /><path d="m91.29 104.57 77.35 133.25A89.19 89.19 0 0 1 256 166h205.17a246.51 246.51 0 0 0-25.78-43.94l.12.08A245.26 245.26 0 0 1 461.17 166h.17a245.91 245.91 0 0 0-25.66-44 2.63 2.63 0 0 1-.35-.26 223.93 223.93 0 0 0-344.19-17.4l.14.24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-closed-captioning"><path d="M0 80v352h512V80Zm464 175.78c0 25.74-1.6 45.32-3.77 77.22s-19.2 54.34-59.09 57.86-95.77 3.85-145.14 3.74c-49 .11-105.14-.11-145.14-3.74s-56.8-26-59.09-57.86S48 281.52 48 255.78s.11-42.46 3.77-77.22 23-54.12 59.09-57.64 98.28-3.52 145.14-3.52 109 0 145.14 3.52 55.43 23 59.09 57.64 3.77 51.59 3.77 77.22Z" /><path d="M367.57 282.84v.77c0 17.93-11.11 28.49-25.95 28.49s-24.84-11.88-26.27-28.49c0 0-1.31-8.69-1.31-26.29a229.5 229.5 0 0 1 1.53-28.6c2.64-18.7 11.77-28.49 26.6-28.49s26.49 12.76 26.49 32.12v.55h49.58c0-24.09-6.05-45.76-18.25-59.4S369.76 153 345.8 153a108.06 108.06 0 0 0-33 4.73 58.82 58.82 0 0 0-25.94 16.61c-7.23 7.96-12.86 18.52-16.86 31.83s-6 30-6 50.27c0 19.8 1.65 36.3 4.84 49.61s8 23.87 14.4 31.79a49.76 49.76 0 0 0 24 16.5q14.5 4.62 34 4.62c27.47 0 47.26-7 59.13-20.57S418 305.06 418 279.1h-50.65c.22 0 .22 2.75.22 3.74ZM197.3 282.84v.77c0 17.93-11.1 28.49-25.94 28.49s-24.84-11.88-26.27-28.49c0 0-1.31-8.69-1.31-26.29a229.5 229.5 0 0 1 1.53-28.6c2.64-18.7 11.77-28.49 26.6-28.49S198.4 213 198.4 232.35v.55H248c0-24.09-6-45.76-18.25-59.4S199.5 153 175.54 153a108.06 108.06 0 0 0-33 4.73 58.82 58.82 0 0 0-25.94 16.61c-7.26 7.92-12.86 18.48-16.93 31.79s-6 30-6 50.27c0 19.8 1.65 36.3 4.84 49.61s8 23.87 14.4 31.79a49.76 49.76 0 0 0 24 16.5q14.51 4.62 34 4.62c27.48 0 47.27-7 59.14-20.57s17.81-33.33 17.81-59.29h-50.78c.22.04.22 2.79.22 3.78Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-codepen"><path d="M241.24 303.94c-15.32-10.36-30.74-20.57-46.06-30.93-2-1.38-3.43-1.48-5.5 0l-38.88 26.12C182 319.9 244 361.32 244 361.32v-53.79c0-1.22-1.55-2.78-2.76-3.59ZM195.09 240.67q23.19-15.24 46.11-30.86a7.54 7.54 0 0 0 2.8-5.34v-51.7s-62 41.12-93.26 61.94c13.7 9.16 26.67 17.91 39.78 26.44 1.02.66 3.4.28 4.57-.48ZM269.84 209.35q23.71 16.07 47.63 31.82a4.3 4.3 0 0 0 3.83 0l39.76-26.47L268 152.48v53.35a4.79 4.79 0 0 0 1.84 3.52ZM258.11 230.37a5.27 5.27 0 0 0-4.74.17c-4.82 3-9.47 6.2-14.17 9.35-8.25 5.53-25.35 17-25.35 17l38.84 25.86a6.18 6.18 0 0 0 6.26.11l39-26s-34.07-22.66-39.84-26.49ZM141 237.12v39.61l29.62-19.84L141 237.12z" /><path d="M256 32C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32Zm139 265c0 5.78-2.65 9.86-7.51 13.09q-61.71 41-123.29 82.19c-5.85 3.92-11.17 3.75-17-.14q-61.17-41-122.63-81.67c-5.11-3.39-7.59-7.56-7.59-13.73V217c0-6.14 2.52-10.34 7.62-13.72 40.91-27.13 81.94-54.36 122.73-81.68 5.82-3.89 11.09-4 16.94-.09q61.54 41.21 123.26 82.19c4.68 3.11 7.45 6.95 7.45 12.66Z" /><path d="M316.25 273.23q-22.59 15.34-45.39 30.34c-2.41 1.58-2.89 3.31-2.86 6.19v51.34l93-62-38.53-25.88c-2.3-1.61-3.89-1.57-6.22.01ZM370 276.68v-39.62l-29.59 19.87L370 276.68z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-css3"><path d="m64 32 35 403.22L255.77 480 413 435.15 448 32Zm290.68 334.9L256.07 395l-98.46-28.24-6.75-77.76h48.26l3.43 39.56 53.59 15.16.13.28 53.47-14.85 5.64-64.15H203l-4-50h120.65l4.35-51H140l-4-49h240.58Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-designernews"><path d="M295.31 122.8 222.86 64l72.68 122.64-.23-63.84z" /><path d="M339.43 64v195.6h-41.6L225.6 141.28l1.94 118.32h-45.83V131.2L139.09 96c1.14 1.44 2.28 2.88 3.31 4.44 11.43 16.68 17.14 36.6 17.14 60.6 0 59-35 98.52-87.88 98.52H0v.48L228.11 448H512V205.72Z" /><path d="M111.89 162.52c0-34.8-16.23-54.12-45.38-54.12H44.57v106.8h21.72c29.71 0 45.6-18.48 45.6-52.68Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-deviantart"><path d="M408 103.28V16h-89.31l-8.9 8.78-42.15 78.48-13.25 8.74H104v119.85h82.68l7.36 8.71L104 408.72V496h89.3l8.91-8.79 42.14-78.48 13.26-8.73H408V280.13h-82.68l-7.36-8.75L408 103.28z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-discord"><path d="M464 66.52A50 50 0 0 0 414.12 17L97.64 16A49.65 49.65 0 0 0 48 65.52V392c0 27.3 22.28 48 49.64 48H368l-13-44 109 100ZM324.65 329.81s-8.72-10.39-16-19.32C340.39 301.55 352.5 282 352.5 282a139 139 0 0 1-27.85 14.25 173.31 173.31 0 0 1-35.11 10.39 170.05 170.05 0 0 1-62.72-.24 184.45 184.45 0 0 1-35.59-10.4 141.46 141.46 0 0 1-17.68-8.21c-.73-.48-1.45-.72-2.18-1.21-.49-.24-.73-.48-1-.48-4.36-2.42-6.78-4.11-6.78-4.11s11.62 19.09 42.38 28.26c-7.27 9.18-16.23 19.81-16.23 19.81-53.51-1.69-73.85-36.47-73.85-36.47 0-77.06 34.87-139.62 34.87-139.62 34.87-25.85 67.8-25.12 67.8-25.12l2.42 2.9c-43.59 12.32-63.44 31.4-63.44 31.4s5.32-2.9 14.28-6.77c25.91-11.35 46.5-14.25 55-15.21a24 24 0 0 1 4.12-.49 205.62 205.62 0 0 1 48.91-.48 201.62 201.62 0 0 1 72.89 22.95s-19.13-18.15-60.3-30.45l3.39-3.86s33.17-.73 67.81 25.16c0 0 34.87 62.56 34.87 139.62 0-.28-20.35 34.5-73.86 36.19Z" /><path d="M212.05 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.8 0 24.7-11.83 24.7-26.57.25-14.76-10.9-26.57-24.7-26.57ZM300.43 218c-13.8 0-24.7 11.84-24.7 26.57s11.14 26.57 24.7 26.57c13.81 0 24.7-11.83 24.7-26.57S314 218 300.43 218Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-docker"><path d="M507 211.16c-1.42-1.19-14.25-10.94-41.79-10.94a132.55 132.55 0 0 0-21.61 1.9c-5.22-36.4-35.38-54-36.57-55l-7.36-4.28-4.75 6.9a101.65 101.65 0 0 0-13.06 30.45c-5 20.7-1.9 40.2 8.55 56.85-12.59 7.14-33 8.8-37.28 9H15.94A15.93 15.93 0 0 0 0 262.07a241.25 241.25 0 0 0 14.75 86.83C26.39 379.35 43.72 402 66 415.74 91.22 431.2 132.3 440 178.6 440a344.23 344.23 0 0 0 62.45-5.71 257.44 257.44 0 0 0 81.69-29.73 223.55 223.55 0 0 0 55.57-45.67c26.83-30.21 42.74-64 54.38-94h4.75c29.21 0 47.26-11.66 57.23-21.65a63.31 63.31 0 0 0 15.2-22.36l2.14-6.18Z" /><path d="M47.29 236.37H92.4a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4H47.29a4 4 0 0 0-4 4v40.44a4.16 4.16 0 0 0 4 4M109.5 236.37h45.12a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4H109.5a4 4 0 0 0-4 4v40.44a4.16 4.16 0 0 0 4 4M172.9 236.37H218a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4h-45.1a4 4 0 0 0-4 4v40.44a3.87 3.87 0 0 0 4 4M235.36 236.37h45.12a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4h-45.12a4 4 0 0 0-4 4v40.44a4 4 0 0 0 4 4M109.5 178.57h45.12a4.16 4.16 0 0 0 4-4v-40.48a4 4 0 0 0-4-4H109.5a4 4 0 0 0-4 4v40.44a4.34 4.34 0 0 0 4 4M172.9 178.57H218a4.16 4.16 0 0 0 4-4v-40.48a4 4 0 0 0-4-4h-45.1a4 4 0 0 0-4 4v40.44a4 4 0 0 0 4 4M235.36 178.57h45.12a4.16 4.16 0 0 0 4-4v-40.48a4.16 4.16 0 0 0-4-4h-45.12a4 4 0 0 0-4 4v40.44a4.16 4.16 0 0 0 4 4M235.36 120.53h45.12a4 4 0 0 0 4-4V76a4.16 4.16 0 0 0-4-4h-45.12a4 4 0 0 0-4 4v40.44a4.17 4.17 0 0 0 4 4M298.28 236.37h45.12a4 4 0 0 0 4-4v-40.48a4 4 0 0 0-4-4h-45.12a4 4 0 0 0-4 4v40.44a4.16 4.16 0 0 0 4 4" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-dribbble"><path d="M256 32C132.33 32 32 132.33 32 256s100.33 224 224 224 224-100.22 224-224S379.67 32 256 32Zm142.22 103.25a186.36 186.36 0 0 1 44 108.38c-40.37-2.1-88.67-2.1-127.4 1.52-4.9-12.37-9.92-24.5-15.4-36.17 44.66-19.36 79.08-44.8 98.8-73.73ZM256 69.33a185.81 185.81 0 0 1 119.12 42.94c-20.3 25.66-52.15 48-91.82 64.86C261.6 137 236.63 102.47 210 75.28a187.51 187.51 0 0 1 46-5.95Zm-84.47 20.42c26.95 26.83 52.27 61 74.44 101C203.85 203.62 155.55 211 104 211c-9.8 0-19.36-.35-28.81-.94a186.78 186.78 0 0 1 96.34-120.31ZM69.68 247.13c10.62.47 21.35.7 32.2.59 58.8-.7 113.52-9.92 160.54-25q6.65 13.83 12.6 28.35a115.43 115.43 0 0 0-16.69 5c-64.28 27-114.91 70.51-142.33 123.13A186 186 0 0 1 69.33 256c0-3 .12-5.95.35-8.87ZM256 442.67a185.57 185.57 0 0 1-114.45-39.32c24.85-49.23 69.18-90 125.07-115.27 5.25-2.45 12.25-4.43 20.3-6.18q10 27.64 17.85 57.4A678 678 0 0 1 322 430.42a185.06 185.06 0 0 1-66 12.25Zm100.92-29.75a672.61 672.61 0 0 0-17.39-92.05c-4-15.17-8.51-29.87-13.41-44.22 36.63-3 80.5-2.57 115.38 0a186.5 186.5 0 0 1-84.58 136.27Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-dropbox"><path d="m256.32 126.24-120.16 78.25 120.16 78.24L136.16 361 16 282.08l120.16-78.24L16 126.24 136.16 48Zm-120.8 259.52 120.16-78.25 120.16 78.25L255.68 464Zm120.8-103.68 120.16-78.24-120.16-77.6L375.84 48 496 126.24l-120.16 78.25L496 282.73 375.84 361Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-edge"><path d="M255.5 15c-132 0-240 108-240 240s108 240 240 240c85.4 0 160.8-45.2 203.3-112.9a6.87 6.87 0 0 0-9.1-9.7 108.64 108.64 0 0 1-18.4 8.6c-36.8 12.6-57.1 13.1-82.1 12-27.9-1.2-61.9-10.8-85.8-25s-43.5-34.6-54.1-52.3-17-39.9-14.1-68.3c2.9-29 29.4-52.6 60.4-52.6 33.5 0 60.8 26.6 60.8 60.1 0 17-8.1 31.7-18.5 43.5-2.3 2.1-7.6 9.7 5.8 20 15.9 12.2 51.6 18 79.9 16.6s59.1-12.6 80.2-34.8c16.8-17.7 31.8-46.1 31.8-77.4C495.5 97.7 379.5 15 255.5 15Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-electron"><path d="M86.76 255a9.89 9.89 0 0 0 4.87-1.29 9.82 9.82 0 0 0 3.65-13.43c-16.46-28.56-17.81-52.12-7.45-70 14.26-24.57 53.61-33.65 105.27-24.29a9.86 9.86 0 0 0 11.45-7.9 9.84 9.84 0 0 0-7.93-11.44c-29.19-5.28-56-5.18-77.39.3-22.3 5.71-39 17.28-48.45 33.48-14 24.19-12.7 54.73 7.42 89.62a9.85 9.85 0 0 0 8.56 4.95ZM361.61 143.73c32.24.42 52.61 9.31 62.79 26.86 14.21 24.48 2.52 62.81-31.27 102.52a9.82 9.82 0 0 0 7.51 16.18 9.88 9.88 0 0 0 7.52-3.46c19.12-22.47 32.35-45.54 38.25-66.71 6.14-22 4.43-42.21-5-58.38-13.8-23.78-40.13-36.15-79.59-36.67h-.14a9.83 9.83 0 0 0-.12 19.66ZM326.47 414.89a9.88 9.88 0 0 0-13.5 3.35c-16.41 27.15-36.57 42.1-56.77 42.1-28.49 0-56-29.31-73.73-78.42a9.87 9.87 0 0 0-12.59-5.92 9.83 9.83 0 0 0-6 12.58c10 27.77 23.47 50.75 39 66.46 16.11 16.34 34.55 25 53.32 25 27.38 0 53.54-18.33 73.65-51.61a9.81 9.81 0 0 0-3.38-13.5ZM431.7 338.54a32.14 32.14 0 0 0-29.9 44.33c-41.8 19.5-119.8 4.79-191.87-36.62-32.91-18.9-62.16-41.86-84.6-66.39a9.9 9.9 0 0 0-13.91-.65 9.8 9.8 0 0 0-.65 13.9c23.79 26 54.68 50.28 89.33 70.18 40.28 23.13 82.27 38.63 121.43 44.81a225.54 225.54 0 0 0 35 2.91c23.12 0 43-4.3 58.51-12.79a32.2 32.2 0 1 0 16.7-59.68Zm0 44.66a12.6 12.6 0 0 1-7.82-2.72 10 10 0 0 0-2.2-2.21 12.61 12.61 0 1 1 10 4.93Z" /><path d="M82.09 338.59c.57-21.26 12.41-47 33.68-73.16 23.19-28.45 56.69-56 94.34-77.65 33.25-19.1 65.2-31.9 98.07-38.91a9.83 9.83 0 1 0-4.12-19.22c-34.85 7.43-68.78 21-103.79 41.09C116.09 219.09 59.9 289.88 62.46 343.9a32.32 32.32 0 1 0 19.63-5.31ZM80.3 383.2a12.5 12.5 0 1 1 12.59-12.5 12.56 12.56 0 0 1-12.59 12.5Z" /><path d="M256.2 96.32a32.23 32.23 0 0 0 26.53-13.81c17.89 11.69 34 35 45.81 66.12 13 34.39 19.84 75.38 19.84 118.54 0 37.18-5.19 72.35-15 103.6a9.72 9.72 0 0 0 .66 7.49 9.82 9.82 0 0 0 5.8 4.84 9.89 9.89 0 0 0 12.34-6.44c10.42-33.14 15.93-70.34 15.93-109.49 0-47.17-7.77-91.77-22.47-129-14.41-36.48-34.13-62.4-57.14-75.16a32.3 32.3 0 1 0-32.3 33.31Zm0-44.66a12.5 12.5 0 1 1-12.59 12.5 12.56 12.56 0 0 1 12.59-12.5ZM251 243.36a24.35 24.35 0 0 0 5.16 48.16 24.68 24.68 0 0 0 5.16-.55A24.36 24.36 0 1 0 251 243.36Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-euro"><path d="M231.8 272v-48H376l8-48H231.8v-8.12c0-38.69 16.47-62.56 87.18-62.56 28.89 0 61.45 2.69 102.5 9.42l10.52-70A508.54 508.54 0 0 0 315.46 32C189.26 32 135 76.4 135 158.46V176H80v48h55v48H80v48h55v33.54C135 435.6 189.23 480 315.43 480a507.76 507.76 0 0 0 116.44-12.78l-10.58-70c-41.05 6.73-73.46 9.42-102.35 9.42-70.7 0-87.14-20.18-87.14-67.94V320h128.47l7.87-48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-facebook"><path d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31Z" fill-rule="evenodd" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-figma"><path d="M336 176a80 80 0 0 0 0-160H176a80 80 0 0 0 0 160 80 80 0 0 0 0 160 80 80 0 1 0 80 80V176Z" /><circle cx="336" cy="256" r="80" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-firebase"><path d="m93.19 329.38 47.45-304.07c1.64-10.37 15.55-12.82 20.46-3.55l51 95.45ZM432 400l-46.74-276.79a11 11 0 0 0-18.54-6L80 400l159.36 91.91a33.18 33.18 0 0 0 31.91 0ZM302.36 158.93l-36.54-69.54a10.86 10.86 0 0 0-19.36 0L85.83 375.74Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-firefox"><path d="M471.46 194.62v-.07c-.22-.76-.45-1.52-.68-2.28-.05-.19-.11-.38-.17-.56-.43-1.44-.87-2.88-1.33-4.31l-.06-.2a223.24 223.24 0 0 0-10-25.56 191.77 191.77 0 0 0-12.9-23.8 225.15 225.15 0 0 0-74.74-73.74A222.9 222.9 0 0 0 256 32c-7 0-14 .34-20.82 1-24.12 2.54-64.78 11.21-97.77 40.18C257.5 11.86 417.94 85.7 404.29 223c-4.86 49-46.46 82.67-85.19 88.35a73.73 73.73 0 0 1-20.8.21c-94.59-13.15-88.8-90.68-60.06-123.83-38-.24-67.47 46.79-53.15 93-32.95-61.18.35-157 70.93-186-82.95-12-160.71 28.2-185.7 98.07A330.23 330.23 0 0 1 88.07 118s-45.22 35.74-54.44 110.9c-.14 1.16-.27 2.32-.39 3.49-.05.4-.09.8-.13 1.21q-.53 5.25-.8 10.57v.81c-.07 1.48-.13 3-.17 4.46v1.25c0 1.76-.07 3.52-.07 5.29 0 123.71 100.29 224 224 224S480 379.71 480 256a224 224 0 0 0-8.54-61.38Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-flickr"><path d="M256 32C132.8 32 32 132.8 32 256s100.8 224 224 224 224-100.8 224-224S379.2 32 256 32Zm-82.16 280A56 56 0 1 1 228 257.84 56 56 0 0 1 173.84 312Zm168 0A56 56 0 1 1 396 257.84 56 56 0 0 1 341.84 312Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-foursquare"><path d="M376.76 32H138.54C105.67 32 96 56.8 96 72.41v379.64c0 17.59 9.42 24.12 14.72 26.27s19.91 4 28.67-6.17c0 0 112.47-130.89 114.4-132.83 2.92-2.93 2.92-2.93 5.84-2.93h72.77c30.58 0 35.49-21.87 38.69-34.75 2.65-10.79 32.48-164 42.45-212.56C421.14 52 411.74 32 376.76 32Zm-5.67 269.64c2.65-10.79 32.48-164 42.45-212.56m-50.85 7.59-10 51.73c-1.19 5.65-8.28 11.6-14.86 11.6h-95.92c-10.44 0-17.91 6.14-17.91 16.6v13.45c0 10.47 7.52 17.89 18 17.89h81.85c7.38 0 14.61 8.11 13 16s-9.09 46.57-10 50.89-5.84 11.72-14.61 11.72H248c-11.7 0-15.24 1.54-23.07 11.3s-78.26 94.59-78.26 94.59c-.71.82-1.41.58-1.41-.31V95.9c0-6.69 5.8-14.53 14.48-14.53h191.14a12.42 12.42 0 0 1 11.81 15.3Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-github"><path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-gitlab"><path d="m488.028 207.68-.674-1.731-65.335-171.154a17.07 17.07 0 0 0-6.723-8.129 17.445 17.445 0 0 0-19.995 1.08 17.568 17.568 0 0 0-5.799 8.83l-44.114 135.478H166.756L122.641 36.576a17.215 17.215 0 0 0-5.798-8.856 17.444 17.444 0 0 0-19.996-1.079 17.22 17.22 0 0 0-6.723 8.129l-65.46 171.078-.649 1.731a122.213 122.213 0 0 0-3.308 77.122c7.259 25.388 22.543 47.718 43.548 63.625l.225.175.6.427 99.526 74.814 49.238 37.407 29.993 22.73A20.118 20.118 0 0 0 256.034 488c4.405 0 8.689-1.447 12.197-4.121l29.993-22.73 49.238-37.407 100.126-75.266.25-.2c20.958-15.91 36.207-38.217 43.454-63.57a122.26 122.26 0 0 0-3.264-77.026Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-google-playstore"><path d="M48 59.49v393a4.33 4.33 0 0 0 7.37 3.07L260 256 55.37 56.42A4.33 4.33 0 0 0 48 59.49ZM345.8 174 89.22 32.64l-.16-.09c-4.42-2.4-8.62 3.58-5 7.06l201.13 192.32ZM84.08 472.39c-3.64 3.48.56 9.46 5 7.06l.16-.09L345.8 338l-60.61-57.95ZM449.38 231l-71.65-39.46L310.36 256l67.37 64.43L449.38 281c19.49-10.77 19.49-39.23 0-50Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-google"><path d="m473.16 221.48-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 0 1-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-hackernews"><path d="M32 32v448h448V32Zm249.67 250.83v84H235v-84l-77-140h55l46.32 97.54 44.33-97.54h52.73Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-html5"><path d="m64 32 34.94 403.21L255.77 480 413 435.15 448 32Zm308 132H188l4 51h176l-13.51 151.39L256 394.48l-98.68-28-6.78-77.48h48.26l3.42 39.29L256 343.07l53.42-14.92L315 264H148l-12.59-149.59H376.2Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-instagram"><path d="M349.33 69.33a93.62 93.62 0 0 1 93.34 93.34v186.66a93.62 93.62 0 0 1-93.34 93.34H162.67a93.62 93.62 0 0 1-93.34-93.34V162.67a93.62 93.62 0 0 1 93.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32Z" /><path d="M377.33 162.67a28 28 0 1 1 28-28 27.94 27.94 0 0 1-28 28ZM256 181.33A74.67 74.67 0 1 1 181.33 256 74.75 74.75 0 0 1 256 181.33m0-37.33a112 112 0 1 0 112 112 112 112 0 0 0-112-112Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-ionic"><path d="M73.6 256c0-100.737 81.663-182.4 182.4-182.4 40.552 0 77.992 13.212 108.286 35.603 7.946-18.702 23.958-33.15 43.67-38.976C366.589 36.357 313.656 16 256 16 123.451 16 16 123.452 16 256s107.451 240 240 240c132.548 0 239.999-107.452 239.999-240 0-27.741-4.718-54.427-13.407-79.269-11.824 15.985-30.428 26.649-51.564 27.742 4.795 16.319 7.371 33.605 7.371 51.527 0 100.737-81.663 182.4-182.399 182.4-100.737 0-182.4-81.663-182.4-182.4Z" /><path d="M491.065 207.374a238.383 238.383 0 0 0-8.473-30.643c-11.823 15.984-30.428 26.649-51.564 27.742a181.577 181.577 0 0 1 6.719 35.964c22.259-2.737 41.5-15.226 53.318-33.063ZM256 361.001c57.853 0 105-47.057 105-105 0-57.854-47.057-105-105-105s-105 47.146-105 105c0 57.853 47.147 105 105 105ZM413.5 166c28.995 0 52.5-23.505 52.5-52.5S442.495 61 413.5 61 361 84.505 361 113.5s23.505 52.5 52.5 52.5Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-ionitron"><path d="M468.41 269.19c-2.64-33.39-11.76-58-31.44-57.39a1 1 0 0 0-.92 1.37c5.11 12.59 9.68 36.9 9.17 58.07a1 1 0 0 1-2 .08c-2.19-21.21-7.1-41.19-16.22-59.43a186.69 186.69 0 0 0-348.91 41 4 4 0 0 1-3.33 3.11l-8.65 1.22c-17.2 2.4-26.9 34.9-21.7 72.5s23.5 66.2 40.7 63.8l13.24-1.85a4 4 0 0 1 3.93 1.84 186.71 186.71 0 0 0 339-56.07 4 4 0 0 1 3.68-3.08l4.4-.24c15.15-2.53 21.75-31.23 19.05-64.93ZM94.5 270.42a1 1 0 0 1 1.59-1.19c9.63 10 20.25 27.65 23.32 49.86 3.24 23.05-2.24 45.2-9.13 57.87a1 1 0 0 1-1.84-.73c4.07-14.44 5.16-33.83 2.27-54.74-2.8-20.32-8.71-38.27-16.21-51.07Zm178.77 109.79a15.53 15.53 0 0 1-15.41-13.83 15.48 15.48 0 1 1 15.41 13.83Zm81.84-4.72a15.37 15.37 0 1 1 14.6-16.2 15.43 15.43 0 0 1-14.6 16.2Z" /><path d="M165.51 70a.31.31 0 0 1 .1.2c.1.2.2.3.3.5v.1a5.78 5.78 0 0 0 2.3 2.7c2 1.5 5 2.4 8.6 3a63.69 63.69 0 0 0 11.9.5 28.25 28.25 0 0 0 2.9-.2c-.4-.4-.8-.9-1.2-1.3h-1.3a52 52 0 0 1-11.6-.9 19.71 19.71 0 0 1-8.4-3.4 9.24 9.24 0 0 1-1.4-1.4 4.48 4.48 0 0 1 0-2.3c.5-2.3 2.4-4.8 5.5-7.4a57.25 57.25 0 0 1 10.9-7c.9-.4 1.7-.9 2.6-1.3.1-.1.3-.1.5-.2a24.69 24.69 0 0 0-.2 10.5c2.3 11.9 11.6 20.3 23.2 20.6l4 24.3 12.7-3-4-23.3c10.8-4.6 16.3-16.1 14-28a25.8 25.8 0 0 0-3.9-9.5c-5.3-.8-15.6-.8-29.2 2.1 1.1-.3 2.1-.7 3.2-1a135.27 135.27 0 0 1 21.5-4.2c.6-.1 1.2-.1 1.8-.2l3.5-.3h.6a61.83 61.83 0 0 1 10.8.3 29 29 0 0 1 6.1 1.4 5.71 5.71 0 0 0-.9 3.2 6.12 6.12 0 0 0 4.3 5.8 25.53 25.53 0 0 1-2.1 2.8 26 26 0 0 1-2.9 2.8c-1.1.9-2.3 1.8-3.5 2.7l-6.5 3.8-.3 1.5a.35.35 0 0 0 .2-.1l8.4-4.7c1.2-.8 2.4-1.6 3.4-2.4a29.15 29.15 0 0 0 3.2-2.8 29.86 29.86 0 0 0 2.4-2.8l.3-.6a6.14 6.14 0 0 0 5.4-6 6.06 6.06 0 0 0-6.1-6.1 6.81 6.81 0 0 0-2.8.7 24.6 24.6 0 0 0-8.2-2.7 63.48 63.48 0 0 0-15.5-.6 14.92 14.92 0 0 0-2.1.2 13.55 13.55 0 0 1-2 .2 25.15 25.15 0 0 0-18.7-3.7 25.86 25.86 0 0 0-17.8 13c-1.3.5-2.6 1.1-3.8 1.7-.7.3-1.3.6-2 .9a60.75 60.75 0 0 0-13.9 9.1c-3.1 2.9-4.9 5.7-5.3 8.3a6.14 6.14 0 0 0 .7 4 2.19 2.19 0 0 1 .3.5Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-javascript"><path d="M32 32v448h448V32Zm240 348c0 43.61-25.76 64.87-63.05 64.87-33.68 0-53.23-17.44-63.15-38.49l34.28-20.75c6.61 11.73 11.63 21.65 26.06 21.65 12 0 21.86-5.41 21.86-26.46V240h44Zm99.35 63.87c-39.09 0-64.35-17.64-76.68-42L329 382c9 14.74 20.75 24.56 41.5 24.56 17.44 0 27.57-7.72 27.57-19.75 0-14.43-10.43-19.54-29.68-28l-10.52-4.52c-30.38-12.92-50.52-29.16-50.52-63.45 0-31.57 24.05-54.63 61.64-54.63 26.77 0 46 8.32 59.85 32.68L396 290c-7.22-12.93-15-18-27.06-18-12.33 0-20.15 7.82-20.15 18 0 12.63 7.82 17.74 25.86 25.56l10.52 4.51c35.79 15.34 55.94 31 55.94 66.16.01 37.9-29.76 57.64-69.76 57.64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-laravel"><path d="M505.57 234.62c-3.28-3.53-26.82-32.29-39.51-47.79-6.75-8.24-12.08-14.75-14.32-17.45l-.18-.22-.2-.21c-5.22-5.83-12.64-12.51-23.78-12.51a39.78 39.78 0 0 0-5.41.44c-.37.05-.75.11-1.15.15-2.45.27-10.06 1.5-28.14 4.48-14 2.29-35.11 5.77-38.31 6.07l-.71.06-.69.13c-10 1.78-16.62 6.22-19.56 13.19-1.55 3.68-3.22 11.15 2.94 19.86 1.53 2.22 6.83 9.56 15.94 22.17 6.06 8.4 12.87 17.82 18.75 26L259.9 275 150.66 96.05l-.2-.34-.23-.33-.44-.65C145.32 88.17 139.76 80 123.7 80c-1.13 0-2.31 0-3.63.11-4.6.25-21.42 1.57-40.89 3.11-21.49 1.69-50.9 4-54.72 4.1h-.73l-.79.08c-9.14.89-15.77 4.6-19.7 11-6.55 10.69-1.42 22.69.26 26.63C6.87 133 37.56 197.7 64.63 254.81c18 37.94 36.58 77.17 38.1 80.65a34.85 34.85 0 0 0 32.94 21.59 46.62 46.62 0 0 0 9.86-1.1h.21l.2-.05c13.86-3.38 57.83-14.54 89.2-22.59 1.9 3.32 3.9 6.83 6 10.44 21.93 38.5 37.9 66.35 43.16 73.46C287 421 295 432 310.06 432c5.46 0 10.46-1.4 15.74-2.89l1.53-.43h.12c10.53-3 150.69-52.16 157.87-55.35l.22-.1c5.44-2.41 13.66-6.05 16.18-15.4 1.65-6.12.18-12.33-4.38-18.46l-.07-.09-.07-.09c-.85-1.1-4-5.21-8.27-10.9-9.13-12.07-23.88-31.57-36.84-48.54 17.37-4.5 38.8-10.11 43.38-11.55 11.47-3.43 14.94-10.69 16-14.73.79-3.15 1.82-11.2-5.9-18.85Zm-320 58.19c-17.81 4.17-30.22 7.08-37.89 8.9-6.67-13.34-19.74-39.65-32.5-65.33-29.74-59.92-45.1-90.77-53.18-106.9l8.15-.7c13.34-1.15 31.61-2.72 41.78-3.57 16.76 28.26 74.32 125.3 96.3 162.3ZM427.58 172ZM310.06 416.4Zm53.67-56.95c-24.21 8-37.33 12.37-44.42 14.74-6.3-10.34-20.16-33.52-32.47-54.19l115.7-29.48c5 6.81 14.57 19.72 33.46 44.93-18.07 6.04-48.2 16.02-72.27 24Zm55.87-121.63-23.76-31.53c13.67-2.39 21.54-3.77 26.15-4.6l12 14.88 11.94 14.82c-8.2 1.99-17.74 4.32-26.33 6.43Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-linkedin"><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32Zm-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43Zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-markdown"><path d="M475 64H37C16.58 64 0 81.38 0 102.77v306.42C0 430.59 16.58 448 37 448h438c20.38 0 37-17.41 37-38.81V102.77C512 81.38 495.42 64 475 64ZM288 368h-64V256l-48 64-48-64v112H64V144h64l48 80 48-80h64Zm96 0-80-112h48.05L352 144h64v112h48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-mastodon"><path d="M480 173.59c0-104.13-68.26-134.65-68.26-134.65C377.3 23.15 318.2 16.5 256.8 16h-1.51c-61.4.5-120.46 7.15-154.88 22.94 0 0-68.27 30.52-68.27 134.65 0 23.85-.46 52.35.29 82.59C34.91 358 51.11 458.37 145.32 483.29c43.43 11.49 80.73 13.89 110.76 12.24 54.47-3 85-19.42 85-19.42l-1.79-39.5s-38.93 12.27-82.64 10.77c-43.31-1.48-89-4.67-96-57.81a108.44 108.44 0 0 1-1-14.9 558.91 558.91 0 0 0 96.39 12.85c32.95 1.51 63.84-1.93 95.22-5.67 60.18-7.18 112.58-44.24 119.16-78.09 10.42-53.34 9.58-130.17 9.58-130.17Zm-80.54 134.16h-50V185.38c0-25.8-10.86-38.89-32.58-38.89-24 0-36.06 15.53-36.06 46.24v67h-49.66v-67c0-30.71-12-46.24-36.06-46.24-21.72 0-32.58 13.09-32.58 38.89v122.37h-50V181.67q0-38.65 19.75-61.39c13.6-15.15 31.4-22.92 53.51-22.92 25.58 0 44.95 9.82 57.75 29.48L256 147.69l12.45-20.85c12.81-19.66 32.17-29.48 57.75-29.48 22.11 0 39.91 7.77 53.51 22.92q19.79 22.72 19.75 61.39Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-medium"><path d="M28 28v456h456V28H28zm378.83 108.04-24.46 23.45a7.162 7.162 0 0 0-2.72 6.86v172.28c-.44 2.61.61 5.26 2.72 6.86l23.88 23.45v5.15H286.13v-5.15l24.74-24.02c2.43-2.43 2.43-3.15 2.43-6.86V198.81l-68.79 174.71h-9.3l-80.09-174.71v117.1c-.67 4.92.97 9.88 4.43 13.44l32.18 39.03v5.15h-91.24v-5.15l32.18-39.03c3.44-3.57 4.98-8.56 4.15-13.44V180.5c.38-3.76-1.05-7.48-3.86-10.01l-28.6-34.46v-5.15h88.81l68.65 150.55 60.35-150.55h84.66v5.16z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-microsoft"><path d="M31.87 30.58H244.7v212.81H31.87ZM266.89 30.58H479.7v212.81H266.89ZM31.87 265.61H244.7v212.8H31.87ZM266.89 265.61H479.7v212.8H266.89Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-no-smoking"><path d="M360 256h16v48h-16zM112 304h129.6l-48-48H112v48z" /><path d="M364.5 60.1a8.79 8.79 0 0 1-1-.6 218.79 218.79 0 0 0-34.4-14.8l-5.4-1.8A223.2 223.2 0 0 0 256 32C132.3 32 32 132.3 32 256a223.71 223.71 0 0 0 115.4 195.8c.4.2.7.5 1.1.7a218.79 218.79 0 0 0 34.4 14.8l5.4 1.8A222.7 222.7 0 0 0 256 480c123.7 0 224-100.3 224-224A223.76 223.76 0 0 0 364.5 60.1ZM256 426.4a161.85 161.85 0 0 1-27.2-2.4 170.14 170.14 0 0 1-28.5-7.3c-1.9-.6-3.8-1.2-5.6-1.9a162.39 162.39 0 0 1-19-8.6 170.33 170.33 0 0 1-90.1-150.3c0-37.2 12.4-71.4 32.7-99.4l237.2 237.2c-28.1 20.3-62.3 32.7-99.5 32.7Zm137.8-71L156.6 118.2c28-20.2 62.1-32.6 99.4-32.6a162.79 162.79 0 0 1 27.2 2.4 170.14 170.14 0 0 1 28.5 7.3c1.8.6 3.7 1.2 5.6 1.9a162 162 0 0 1 18 8.1 170.25 170.25 0 0 1 91.2 150.8c-.1 37.2-12.5 71.3-32.7 99.3Z" /><path d="M352 256h-34l34 34v-34zM384 256h16v48h-16zM360.1 212.7c-8.8-4.1-22-5.7-45.6-5.7h-3.6c-12.7.1-15.9-.1-20-6.1-2.8-4.2-1-14.8 3.7-21.9a8 8 0 0 0 .4-8.2 8.26 8.26 0 0 0-7-4.3 53.67 53.67 0 0 1-18.3-3.9c-10.6-4.5-15.6-12.1-15.6-23.1 0-25.8 21.8-27.7 22.8-27.7v-16c-12 0-38.8 11-38.8 43.7 0 17.5 9 31 25.7 38a66.58 66.58 0 0 0 12 3.6c-3.3 9.8-3.6 20.9 1.7 28.7 9 13.3 20.3 13.2 33.3 13.1h3.5c26.3 0 34.6 2.3 38.9 4.3 5.7 2.6 6.8 7.5 6.6 15.7v1h16v-1c0-7.1.3-22.8-15.7-30.2Z" /><path d="M400 244c0-25.7-3-39.2-9.1-49.6C382.3 180 368.5 172 352 172h-17.4c2.9-8.3 5.4-19.8 3.5-30.9-3.2-18.8-19.1-30-43.1-30v16c21 0 26.1 9.1 27.4 16.7 2.5 14.5-6.8 32.1-6.9 32.3a8 8 0 0 0 .1 7.9 8.06 8.06 0 0 0 6.9 3.9H352c10.9 0 19.4 4.9 25.1 14.6 3.1 5.3 6.9 13.5 6.9 41.4h16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-nodejs"><path d="M429.76 130.07 274.33 36.85a37 37 0 0 0-36.65 0L82.24 130.06A38.2 38.2 0 0 0 64 162.83V349a38.26 38.26 0 0 0 18.24 32.8L123 406.14l.23.13c20.58 10.53 28.46 10.53 37.59 10.53 32.14 0 52.11-20.8 52.11-54.29V182a8.51 8.51 0 0 0-8.42-8.58h-22.38a8.51 8.51 0 0 0-8.42 8.58v180.51a15 15 0 0 1-6.85 13.07c-5.9 3.6-14.47 2.84-24.14-2.15l-39.06-23.51a1.1 1.1 0 0 1-.48-.92V165.46a1.32 1.32 0 0 1 .59-1.06l151.84-93a.82.82 0 0 1 .73 0l151.93 93a1.34 1.34 0 0 1 .55 1.1V349a1.28 1.28 0 0 1-.45 1l-152.06 90.65a1.22 1.22 0 0 1-.8 0l-38.83-23.06a7.8 7.8 0 0 0-7.83-.41l-.34.2c-10.72 6.35-13.6 8-23.54 11.62-1.62.59-5.43 2-5.76 5.77s3.29 6.45 6.51 8.32l51.9 31.87a35.67 35.67 0 0 0 18.3 5.07h.58a35.87 35.87 0 0 0 17.83-5.07l155.43-93.13A38.37 38.37 0 0 0 448 349V162.83a38.21 38.21 0 0 0-18.24-32.76Z" /><path d="M307.88 318.05c-37.29 0-45.24-10.42-47.6-27.24a8.43 8.43 0 0 0-8.22-7.32h-19.8a8.44 8.44 0 0 0-8.26 8.58c0 14.58 5.12 62.17 83.92 62.17 24.38 0 44.66-5.7 58.63-16.49S388 311.26 388 292.55c0-37.55-24.5-47.83-72.75-54.55-49.05-6.82-49.05-10.29-49.05-17.89 0-5.47 0-18.28 35.46-18.28 25.23 0 38.74 3.19 43.06 20a8.35 8.35 0 0 0 8.06 6.67h19.87a8.24 8.24 0 0 0 6.16-2.86 8.91 8.91 0 0 0 2.12-6.44c-2.57-35.55-28.56-53.58-79.24-53.58-46.06 0-73.55 20.75-73.55 55.5 0 38.1 28.49 48.87 71.29 53.33 50 5.17 50 12.71 50 19.37.03 10.38-4.28 24.23-41.55 24.23Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-npm"><path d="M227.6 213.1H256v57.1h-28.4z" /><path d="M0 156v171.4h142.2V356H256v-28.6h256V156Zm142.2 142.9h-28.4v-85.7H85.3v85.7H28.4V184.6h113.8Zm142.2 0h-56.9v28.6h-56.9V184.6h113.8Zm199.2 0h-28.4v-85.7h-28.4v85.7h-28.4v-85.7H370v85.7h-56.9V184.6h170.7v114.3Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-octocat"><path d="M172.86 290.12c-9.75 0-18.11 4.56-24.86 13.87s-10.07 20.58-10.07 34 3.43 24.91 10.07 34.12S163 386 172.86 386c9.1 0 17-4.66 23.68-13.87s10.07-20.58 10.07-34.12-3.43-24.81-10.07-34-14.54-13.89-23.68-13.89ZM340.32 290.12c-9.64 0-18.11 4.56-24.86 13.87s-10.07 20.58-10.07 34 3.43 24.91 10.07 34.12S330.57 386 340.32 386c9.11 0 17-4.66 23.79-13.87s10.07-20.58 10.07-34.12-3.43-24.81-10.07-34-14.57-13.89-23.79-13.89Z" /><path d="M459.36 165c-.11 0 2.89-15.49.32-42.47-2.36-27-8-51.78-17.25-74.53 0 0-4.72.87-13.72 3.14S405 58 384.89 67.18c-19.82 9.2-40.71 21.44-62.46 36.29-14.79-4.23-36.86-6.39-66.43-6.39-28.18 0-50.25 2.16-66.43 6.39Q117.9 53.25 69.46 48q-13.81 34.13-17.14 74.75c-2.57 27 .43 42.58.43 42.58C26.71 193.82 16 234.88 16 268.78c0 26.22.75 49.94 6.54 71 6 20.91 13.6 38 22.6 51.14A147.49 147.49 0 0 0 79 425.43c13.39 10.08 25.71 17.34 36.86 21.89 11.25 4.76 24 8.23 38.57 10.72a279.19 279.19 0 0 0 32.68 4.34s30 1.62 69 1.62 68.89-1.62 68.89-1.62a285.25 285.25 0 0 0 32.68-4.38 178.91 178.91 0 0 0 38.46-10.72c11.15-4.66 23.47-11.81 37-21.89a145 145 0 0 0 33.75-34.55c9-13.11 16.6-30.23 22.6-51.14s6.51-44.81 6.51-71.03c0-32.82-10.71-74.42-36.64-103.67Zm-70.07 253.07C359.39 432.26 315.46 438 257.18 438h-2.25c-58.29 0-102.22-5.63-131.57-19.93s-44.25-43.45-44.25-87.43c0-26.32 9.21-47.66 27.32-64 7.93-7 17.57-11.92 29.57-14.84s22.93-3 33.21-2.71c10.08.43 24.22 2.38 42.11 3.79s31.39 3.25 44.79 3.25c12.53 0 29.14-2.17 55.82-4.33s46.61-3.25 59.46-1.09c13.18 2.17 24.65 6.72 34.4 15.93q28.44 25.67 28.5 64c-.11 43.98-15.22 73.24-45 87.43Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-paypal"><path d="M424.81 148.79c-.43 2.76-.93 5.58-1.49 8.48-19.17 98-84.76 131.8-168.54 131.8h-42.65a20.67 20.67 0 0 0-20.47 17.46l-21.84 137.84-6.18 39.07a10.86 10.86 0 0 0 9.07 12.42 10.72 10.72 0 0 0 1.7.13h75.65a18.18 18.18 0 0 0 18-15.27l.74-3.83 14.24-90 .91-4.94a18.16 18.16 0 0 1 18-15.3h11.31c73.3 0 130.67-29.62 147.44-115.32 7-35.8 3.38-65.69-15.16-86.72a72.27 72.27 0 0 0-20.73-15.82Z" /><path d="M385.52 51.09C363.84 26.52 324.71 16 274.63 16H129.25a20.75 20.75 0 0 0-20.54 17.48l-60.55 382a12.43 12.43 0 0 0 10.39 14.22 12.58 12.58 0 0 0 1.94.15h89.76l22.54-142.29-.7 4.46a20.67 20.67 0 0 1 20.47-17.46h42.65c83.77 0 149.36-33.86 168.54-131.8.57-2.9 1.05-5.72 1.49-8.48 5.7-36.22-.05-60.87-19.72-83.19Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-pinterest"><path d="M256.05 32c-123.7 0-224 100.3-224 224 0 91.7 55.2 170.5 134.1 205.2-.6-15.6-.1-34.4 3.9-51.4 4.3-18.2 28.8-122.1 28.8-122.1s-7.2-14.3-7.2-35.4c0-33.2 19.2-58 43.2-58 20.4 0 30.2 15.3 30.2 33.6 0 20.5-13.1 51.1-19.8 79.5-5.6 23.8 11.9 43.1 35.4 43.1 42.4 0 71-54.5 71-119.1 0-49.1-33.1-85.8-93.2-85.8-67.9 0-110.3 50.7-110.3 107.3 0 19.5 5.8 33.3 14.8 43.9 4.1 4.9 4.7 6.9 3.2 12.5-1.1 4.1-3.5 14-4.6 18-1.5 5.7-6.1 7.7-11.2 5.6-31.3-12.8-45.9-47-45.9-85.6 0-63.6 53.7-139.9 160.1-139.9 85.5 0 141.8 61.9 141.8 128.3 0 87.9-48.9 153.5-120.9 153.5-24.2 0-46.9-13.1-54.7-27.9 0 0-13 51.6-15.8 61.6-4.7 17.3-14 34.5-22.5 48a225.13 225.13 0 0 0 63.5 9.2c123.7 0 224-100.3 224-224S379.75 32 256.05 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-playstation"><path d="M399.77 203c-.8-17.1-3.3-34.5-10.8-50.1a82.45 82.45 0 0 0-16.5-23.2 105.59 105.59 0 0 0-21.3-16.3c-17.1-10.2-37.5-17-84.4-31S192 64 192 64v358.3l79.9 25.7s.1-198.8.1-299.5v-3.8c0-9.3 7.5-16.8 16.1-16.8h.5c8.5 0 15.5 7.5 15.5 16.8V278c11 5.3 29.2 9.3 41.8 9.1a47.79 47.79 0 0 0 24-5.7 49.11 49.11 0 0 0 18.4-17.8 78.64 78.64 0 0 0 9.9-27.3c1.87-10.8 1.97-22.1 1.57-33.3ZM86.67 357.8c27.4-9.8 89.3-29.5 89.3-29.5v-47.2s-76.5 24.8-111.3 37.1c-8.6 3.1-17.3 5.9-25.7 9.5-9.8 4.1-19.4 8.7-28.1 14.8a26.29 26.29 0 0 0-9.2 10.1 17.36 17.36 0 0 0-.5 13.6c2 5.1 5.8 9.3 10.1 12.6 7.8 5.9 17.1 9.5 26.4 12.2a262.42 262.42 0 0 0 88.4 13.3c14.5-.2 36-1.9 50-4.4v-42s-11 2.5-41.3 12.5c-4.6 1.5-9.2 3.3-14 4.3a104.87 104.87 0 0 1-21.6 2.2c-6.5-.3-13.2-.7-19.3-3.1-2.2-1-4.6-2.2-5.5-4.6-.8-2 .3-4 1.7-5.4 2.8-2.9 6.8-4.5 10.6-6Z" /><path d="M512 345.9c-.1-6-3.7-11.2-7.9-15-7.1-6.3-15.9-10.3-24.7-13.5-5.5-1.9-9.3-3.3-14.7-5-25.2-8.2-51.9-11.2-78.3-11.3-8 .3-23.1.5-31 1.4-21.9 2.5-67.3 15.4-67.3 15.4v48.8s67.5-21.6 96.5-31.8a94.43 94.43 0 0 1 30.3-4.6c6.5.2 13.2.7 19.4 3.1 2.2.9 4.5 2.2 5.5 4.5.9 2.6-.9 5-2.9 6.5-4.7 3.8-10.7 5.3-16.2 7.4-41 14.5-132.7 44.7-132.7 44.7v47s117.2-39.6 170.8-58.8c8.9-3.3 17.9-6.1 26.4-10.4 7.9-4 15.8-8.6 21.8-15.3a19.74 19.74 0 0 0 5-13.1Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-pwa"><path d="m330.7 352 77.72-192H356.9l-53.16 124.07L265.93 160h-39.61l-40.58 124.07-28.63-56.53-25.9 79.46 26.3 45h50.7l36.68-111.27 35 111.27ZM48.79 286.09h31.65a93.39 93.39 0 0 0 25.62-3.21l8.18-25.19 22.88-70.39a55.75 55.75 0 0 0-6-7.82Q113.54 160 79.59 160H0v192h48.79Zm41.9-81.92q6.89 6.92 6.88 18.52t-6 18.53q-6.64 7.62-24.44 7.61H48.79v-51.58h18.42q16.59 0 23.48 6.92Zm286.16 113.44 14.79-37.25h42.69l-20.26-56.51L439.41 160 512 352h-53.53l-12.4-34.39Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-python"><path d="M314 36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09 311.09 0 0 0-51.66 4.38c-45.74 8-54.07 24.7-54.07 55.54V128h112v16H107.62C66.06 144 32.33 193.67 32 255.12v.88a162.91 162.91 0 0 0 3.13 32c9.29 46.28 38.23 80 72.49 80H128v-54c0-31.3 20.84-59.95 55-66.1l9.87-1.23H314a56.05 56.05 0 0 0 15.06-2A52.48 52.48 0 0 0 368 193.68V91.92c0-28.92-24.68-50.73-54-55.54ZM194.93 105.5a20.37 20.37 0 1 1 20.3-20.3 20.29 20.29 0 0 1-20.3 20.3Z" /><path d="M475.28 217c-10.7-42.61-38.41-73-70.9-73h-17.71v47.45c0 39.57-26 68.22-57.74 73.13a63.54 63.54 0 0 1-9.69.75H198.08a60 60 0 0 0-15.23 1.95C160.54 273.14 144 291.7 144 315.77v101.77c0 29 29.14 46 57.73 54.31 34.21 9.95 71.48 11.75 112.42 0 27.19-7.77 53.85-23.48 53.85-54.31V384H256v-16h148.38c29.44 0 54.95-24.93 67.45-61.31A156.83 156.83 0 0 0 480 256a160.64 160.64 0 0 0-4.72-39ZM316.51 404a20.37 20.37 0 1 1-20.3 20.3 20.29 20.29 0 0 1 20.3-20.3Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-react"><path d="M410.66 180.72q-7.67-2.62-15.45-4.88 1.29-5.25 2.38-10.56c11.7-56.9 4.05-102.74-22.06-117.83-25-14.48-66 .61-107.36 36.69q-6.1 5.34-11.95 11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25 14.51-32.43 57.6-21.9 111.53q1.58 8 3.55 15.93a320.85 320.85 0 0 0-17.77 5.6C48.46 198.9 16 226.73 16 255.59c0 29.82 34.84 59.72 87.77 77.85q6.44 2.19 13 4.07-2.13 8.49-3.77 17.17c-10 53-2.2 95.07 22.75 109.49 25.77 14.89 69-.41 111.14-37.31q5-4.38 10-9.25 6.32 6.11 13 11.86c40.8 35.18 81.09 49.39 106 34.93 25.75-14.94 34.12-60.14 23.25-115.13q-1.25-6.3-2.88-12.86 4.56-1.35 8.93-2.79c55-18.27 90.83-47.81 90.83-78-.02-29-33.52-57.01-85.36-74.9Zm-129-81.08c35.43-30.91 68.55-43.11 83.65-34.39 16.07 9.29 22.32 46.75 12.22 95.88q-1 4.8-2.16 9.57a487.83 487.83 0 0 0-64.18-10.16 481.27 481.27 0 0 0-40.57-50.75q5.38-5.22 11.02-10.15ZM157.73 280.25q6.51 12.6 13.61 24.89 7.23 12.54 15.07 24.71a435.28 435.28 0 0 1-44.24-7.13c4.24-13.72 9.46-27.97 15.56-42.47Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63 13.7-3.07 28.3-5.58 43.52-7.48q-7.65 11.94-14.72 24.23t-13.58 24.88Zm10.9 24.17q9.48-19.77 20.42-38.78 10.93-19 23.27-37.13c14.28-1.08 28.92-1.65 43.71-1.65s29.52.57 43.79 1.66q12.21 18.09 23.13 37t20.69 38.6Q334 275.63 323 294.73q-10.91 19-23 37.24c-14.25 1-29 1.55-44 1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29t-20.48-38.76ZM340.75 305q7.25-12.58 13.92-25.49a440.41 440.41 0 0 1 16.12 42.32 434.44 434.44 0 0 1-44.79 7.65q7.62-12.09 14.75-24.48Zm13.72-73.07q-6.64-12.65-13.81-25-7-12.18-14.59-24.06c15.31 1.94 30 4.52 43.77 7.67a439.89 439.89 0 0 1-15.37 41.39Zm-98.24-107.45a439.75 439.75 0 0 1 28.25 34.18q-28.35-1.35-56.74 0c9.33-12.34 18.88-23.79 28.49-34.18ZM145.66 65.86c16.06-9.32 51.57 4 89 37.27 2.39 2.13 4.8 4.36 7.2 6.67A491.37 491.37 0 0 0 201 160.51a499.12 499.12 0 0 0-64.06 10q-1.83-7.36-3.3-14.82c-9.05-46.23-3.06-81.08 12.02-89.83Zm-23.41 251.85q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81-11.88-10.19-17.9-20.36-17.9-28.6 0-17.51 26.06-39.85 69.52-55q8.19-2.85 16.52-5.21a493.54 493.54 0 0 0 23.4 60.75 502.46 502.46 0 0 0-23.69 61.58Zm111.13 93.67c-18.63 16.32-37.29 27.89-53.74 33.72-14.78 5.23-26.55 5.38-33.66 1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8 3.5-16a480.85 480.85 0 0 0 64.69 9.39 501.2 501.2 0 0 0 41.2 51c-2.98 2.93-6.03 5.75-9.14 8.48Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54 28.08.54c9.78 0 19.46-.21 29-.64a439.33 439.33 0 0 1-28.2 34.74Zm124.52 28.59c-2.86 15.44-8.61 25.74-15.72 29.86-15.13 8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54 484.54 0 0 0 40.23-51.2 477.84 477.84 0 0 0 65-10.05q1.47 5.94 2.6 11.64c4.81 24.3 5.5 46.28 2.32 63.47Zm17.4-102.64c-2.62.87-5.32 1.71-8.06 2.53a483.26 483.26 0 0 0-24.31-60.94 481.52 481.52 0 0 0 23.36-60.06c4.91 1.43 9.68 2.93 14.27 4.52 44.42 15.32 71.52 38 71.52 55.43 0 18.6-29.27 42.74-76.78 58.52Z" /><path d="M256 298.55a43 43 0 1 0-42.86-43 42.91 42.91 0 0 0 42.86 43Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-reddit"><path d="M324 256a36 36 0 1 0 36 36 36 36 0 0 0-36-36Z" /><circle cx="188" cy="292" r="36" transform="rotate(-22.5 187.997 291.992)" /><path d="M496 253.77c0-31.19-25.14-56.56-56-56.56a55.72 55.72 0 0 0-35.61 12.86c-35-23.77-80.78-38.32-129.65-41.27l22-79 66.41 13.2c1.9 26.48 24 47.49 50.65 47.49 28 0 50.78-23 50.78-51.21S441 48 413 48c-19.53 0-36.31 11.19-44.85 28.77l-90-17.89-31.1 109.52-4.63.13c-50.63 2.21-98.34 16.93-134.77 41.53A55.38 55.38 0 0 0 72 197.21c-30.89 0-56 25.37-56 56.56a56.43 56.43 0 0 0 28.11 49.06 98.65 98.65 0 0 0-.89 13.34c.11 39.74 22.49 77 63 105C146.36 448.77 199.51 464 256 464s109.76-15.23 149.83-42.89c40.53-28 62.85-65.27 62.85-105.06a109.32 109.32 0 0 0-.84-13.3A56.32 56.32 0 0 0 496 253.77ZM414 75a24 24 0 1 1-24 24 24 24 0 0 1 24-24ZM42.72 253.77a29.6 29.6 0 0 1 29.42-29.71 29 29 0 0 1 13.62 3.43c-15.5 14.41-26.93 30.41-34.07 47.68a30.23 30.23 0 0 1-8.97-21.4ZM390.82 399c-35.74 24.59-83.6 38.14-134.77 38.14S157 423.61 121.29 399c-33-22.79-51.24-52.26-51.24-83A78.5 78.5 0 0 1 75 288.72c5.68-15.74 16.16-30.48 31.15-43.79a155.17 155.17 0 0 1 14.76-11.53l.3-.21.24-.17c35.72-24.52 83.52-38 134.61-38s98.9 13.51 134.62 38l.23.17.34.25A156.57 156.57 0 0 1 406 244.92c15 13.32 25.48 28.05 31.16 43.81a85.44 85.44 0 0 1 4.31 17.67 77.29 77.29 0 0 1 .6 9.65c-.01 30.72-18.21 60.19-51.25 82.95Zm69.6-123.92c-7.13-17.28-18.56-33.29-34.07-47.72A29.09 29.09 0 0 1 440 224a29.59 29.59 0 0 1 29.41 29.71 30.07 30.07 0 0 1-8.99 21.39Z" /><path d="M323.23 362.22c-.25.25-25.56 26.07-67.15 26.27-42-.2-66.28-25.23-67.31-26.27a4.14 4.14 0 0 0-5.83 0l-13.7 13.47a4.15 4.15 0 0 0 0 5.89c3.4 3.4 34.7 34.23 86.78 34.45 51.94-.22 83.38-31.05 86.78-34.45a4.16 4.16 0 0 0 0-5.9l-13.71-13.47a4.13 4.13 0 0 0-5.81 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-rss"><path d="M108.56 342.78a60.34 60.34 0 1 0 60.56 60.44 60.63 60.63 0 0 0-60.56-60.44Z" /><path d="M48 186.67v86.55c52 0 101.94 15.39 138.67 52.11s52 86.56 52 138.67h86.66c0-151.56-125.66-277.33-277.33-277.33Z" /><path d="M48 48v86.56c185.25 0 329.22 144.08 329.22 329.44H464C464 234.66 277.67 48 48 48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-sass"><path d="M511.78 328.07c-1.47-11.92-7.51-22.26-18-30.77a3.58 3.58 0 0 0-.43-.44l-.53-.38-.17-.12-5.57-4-.19-.14-.71-.5a3.5 3.5 0 0 0-.83-.35c-17.62-10.49-46.79-17.84-91.42-2.09-10.65-17.92-11.86-32.28-4.73-54.28 1.27-3.83.09-6.36-3.71-8-7.64-3.25-18.1-1.59-25.52.37-3.46.9-5.54 2.86-6.2 5.83-4.7 22-18.36 42.1-31.57 61.5l-.78 1.14c-8.14-17.26-6.45-30.63-.78-47.38 1.13-3.34.24-5.56-2.89-7.22-8.74-4.51-21.85-1.41-27.07.13-6.62 1.93-13.72 19.82-21.65 41.24-2 5.39-3.72 10-4.75 12.15-2.45 5-4.79 10.7-7.27 16.75-5.6 13.69-11.91 29.1-20.93 38.78-3.28-7.25 1.88-18.68 6.89-29.77 5.93-13.11 11.53-25.5 5.08-33.41a11.82 11.82 0 0 0-8.33-4.32 13.26 13.26 0 0 0-6.15 1c.67-5.65.7-10.11-.95-15.5-2.36-7.69-8.49-12-16.93-11.77-19.22.56-35.48 14.88-45.75 26.8-6.84 8-22 14.1-35.31 19.45-5.26 2.23-10.26 4.23-14.43 6.23-6.65-5.62-15.1-11.29-24-17.28-25-16.78-53.33-35.81-54.31-61.61-1.4-38.11 42-65.14 79.88-84.43 28.71-14.6 53.67-24.28 76.31-29.57 31.8-7.43 58.66-5.93 79.82 4.44 11.58 5.67 17 18 13.56 30.68-9 32.95-46.29 55.53-78.18 65.69-19.21 6.12-35.56 8.68-50 7.84-18.1-1.05-32.88-10.13-39.2-14a21.18 21.18 0 0 0-3.2-1.8l-.29-.07a3.21 3.21 0 0 0-3.19 1c-1.3 1.55-.84 4-.37 5.24 6.15 16.07 18.85 26.22 37.74 30.17a92.09 92.09 0 0 0 18.78 1.79c44.21 0 100.62-25.49 121.34-46.48 14.13-14.3 24.42-29 28.68-54.35 4.45-26.55-13.55-45-31.89-53.5-44.57-20.57-95.19-12.44-129.81-2-40.5 12.21-82.4 34.41-114.94 60.93-40.12 32.67-54.62 63-43.12 90.25 11.81 27.93 40.61 45.4 68.46 62.3 9 5.45 17.56 10.64 25.27 16-2.32 1.13-4.69 2.28-7.1 3.43-23.38 11.33-49.9 24.08-64.61 45.15-10.68 15.35-12.68 30.63-5.94 45.42 3.6 7.87 10 13.21 18.89 15.87A50 50 0 0 0 53 432c17.31 0 36.36-7 46.73-13.47 18.32-11.5 30.19-26.94 35.29-45.89 4.54-16.86 3.45-33.61-3.15-48.56l22.45-11.32c-10.83 36-2.53 57.5 6.59 69.36 3.36 4.37 9.42 7 16.19 7.12s13-2.43 16.52-6.77c6.66-8.25 11.58-17.9 16.11-27.55-.24 6.3.06 12.68 2.21 18.09 1.93 4.87 5.11 8.1 9.21 9.34 4.36 1.33 9.47.21 14.39-3.15 22.17-15.17 37.33-51.58 49.51-80.85 1.73-4.16 3.39-8.16 5-11.9a152.5 152.5 0 0 0 12.5 31.07c1.18 2.14 1.08 3.08-.52 4.84-2.41 2.64-5.77 5.83-9.33 9.21-10.78 10.23-24.2 23-26 34.23-.7 4.5 2.4 8.6 7.21 9.53 14.47 2.88 31.9-1.33 46.64-11.25 13.4-9 18.44-21.55 15-37.19-3.33-15.06 4.27-33.76 22.59-55.62 3 12.53 7 22.66 12.52 31.53l-.15.12c-13.34 11.65-31.62 27.6-28.78 46.95a13.35 13.35 0 0 0 5.58 9.22 14.22 14.22 0 0 0 11.2 2.06c17.47-3.67 30.62-11.06 40.18-22.57s6.07-24.27 2.85-34.17c25-6.78 47.26-6.61 68.1.5 11.7 4 20.09 10.57 24.93 19.64 6.09 11.41 2.8 21.94-9.29 29.65-3.71 2.37-5.5 3.82-5.61 5.65a2.65 2.65 0 0 0 1 2.23c1.4 1.15 5.72 3.15 15.49-3 9-5.65 14.28-13.34 15.63-23a39 39 0 0 0-.01-8.01Zm-399.73 25.06-.1 1.28c-1.56 14.64-9 27.4-22.15 38-8.26 6.66-17.23 10.75-25.25 11.53-5.6.54-9.67-.22-12.09-2.27-1.81-1.53-2.78-3.82-3-7-1.64-25.48 38.32-50.8 60.81-59.13a51.39 51.39 0 0 1 1.78 17.59Zm102.35-71.86c-3.7 21.09-14.49 60.9-31.45 76.35-.81.74-1.49 1-1.8.93s-.55-.44-.8-1c-5.66-13.12-3.57-35.28 5-52.69 6.59-13.42 16-22.31 26.52-25a5.29 5.29 0 0 1 1.34-.19 1.58 1.58 0 0 1 1 .27 1.64 1.64 0 0 1 .19 1.33Zm83.49 76.88c-3.19 3.33-7.56 2.88-6.53 1.66l16.24-17.24c-1.31 5.93-5.18 10.84-9.71 15.58Zm67.37-14.91a14.07 14.07 0 0 1-4.93 1.39c-.46-9.07 8.33-19.28 17-26.09 2.33 9.46-2.44 19.46-12.07 24.7Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-skype"><path d="M467.16 303.6a205.69 205.69 0 0 0 4.9-45.15c0-116.32-95.69-210.7-213.79-210.7a221.83 221.83 0 0 0-36.52 3A123.58 123.58 0 0 0 155.93 32C87.55 32 32 86.72 32 154.15A119.56 119.56 0 0 0 49 216a211.16 211.16 0 0 0-4.32 42.35c0 116.44 95.69 210.7 213.67 210.7a214 214 0 0 0 39.09-3.5A125.45 125.45 0 0 0 356.07 480C424.57 480 480 425.28 480 357.85a118 118 0 0 0-12.84-54.25ZM368 359c-9.92 13.76-24.51 24.73-43.41 32.43S283.36 403 257.69 403c-30.69 0-56.36-5.37-76.55-15.87a101 101 0 0 1-35.24-30.8c-9.11-12.83-13.66-25.66-13.66-38 0-7.7 3-14.35 8.87-19.95 5.84-5.37 13.42-8.17 22.29-8.17 7.35 0 13.65 2.1 18.79 6.42 4.9 4.08 9.1 10.15 12.48 18.08A108.09 108.09 0 0 0 207 336.15q6.32 8.22 17.86 13.65c7.82 3.62 18.2 5.48 31 5.48 17.62 0 32.09-3.73 42.94-11.08 10.74-7.12 15.88-15.75 15.88-26.25 0-8.28-2.69-14.82-8.29-19.95-5.83-5.37-13.42-9.57-22.87-12.37-9.69-3-22.87-6.18-39.21-9.56-22.17-4.67-41-10.27-56-16.57-15.28-6.42-27.65-15.4-36.76-26.48-9.22-11.32-13.77-25.55-13.77-42.24a67.86 67.86 0 0 1 14.47-42.58c9.57-12.25 23.46-21.82 41.55-28.35 17.74-6.53 38.86-9.8 62.66-9.8 19.14 0 35.83 2.22 49.83 6.42s25.91 10.15 35.36 17.38 16.34 14.93 20.77 23 6.66 16.22 6.66 24c0 7.46-2.92 14.35-8.76 20.3a29.65 29.65 0 0 1-21.94 9.1c-7.93 0-14.12-1.87-18.43-5.6-4-3.5-8.17-8.87-12.72-16.69-5.37-9.91-11.79-17.85-19.14-23.45-7.24-5.36-19.14-8.16-35.71-8.16-15.29 0-27.77 3-37 9-8.87 5.72-13.19 12.37-13.19 20.18a18.26 18.26 0 0 0 4.32 12.25 38.13 38.13 0 0 0 12.72 9.57 90.14 90.14 0 0 0 17.15 6.53c6 1.64 15.87 4.09 29.53 7.12 17.38 3.62 33.25 7.82 47.26 12.13 14.24 4.55 26.49 10 36.52 16.45a72.93 72.93 0 0 1 24.16 25.09c5.72 10 8.64 22.63 8.64 37.1A75.09 75.09 0 0 1 368 359Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-slack"><path d="M126.12 315.1A47.06 47.06 0 1 1 79.06 268h47.06ZM149.84 315.1a47.06 47.06 0 0 1 94.12 0v117.84a47.06 47.06 0 1 1-94.12 0ZM196.9 126.12A47.06 47.06 0 1 1 244 79.06v47.06ZM196.9 149.84a47.06 47.06 0 0 1 0 94.12H79.06a47.06 47.06 0 0 1 0-94.12ZM385.88 196.9a47.06 47.06 0 1 1 47.06 47.1h-47.06ZM362.16 196.9a47.06 47.06 0 0 1-94.12 0V79.06a47.06 47.06 0 1 1 94.12 0ZM315.1 385.88a47.06 47.06 0 1 1-47.1 47.06v-47.06ZM315.1 362.16a47.06 47.06 0 0 1 0-94.12h117.84a47.06 47.06 0 1 1 0 94.12Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-snapchat"><path d="M496 347.21a190.31 190.31 0 0 1-32.79-5.31c-27.28-6.63-54.84-24.26-68.12-52.43-6.9-14.63-2.64-18.59 11.86-24 14.18-5.27 29.8-7.72 36.86-23 5.89-12.76 1.13-27.76-10.41-35.49-15.71-10.53-30.35-.21-46.62 2.07 3.73-46.66 8.66-88.57-22.67-127.73C338.14 48.86 297.34 32 256.29 32s-81.86 16.86-107.81 49.33c-31.38 39.26-26.4 81.18-22.67 127.92-16.32-2.25-30.81-12.79-46.63-2.18-14.72 9.85-17 29.76-5.44 43s31.64 9.5 43.45 20.6c6.49 6.09 3.49 12.61-.35 20.14-14.48 28.4-39.26 45.74-69.84 51.56-4 .76-22.31 2.87-31 3.65 0 9.28.52 16.78 1.63 21.73 2.94 13.06 12.32 23.58 23.69 30.1 11.18 6.4 35.48 6.43 41.68 15.51 3 4.48 1.76 12.28 5.33 17.38a23.8 23.8 0 0 0 15.37 9.75c18.61 3.61 37.32-7.2 56.42-2.1 14.85 3.95 26.52 15.87 39.26 24 15.51 9.85 32.34 16.42 50.83 17.49 38.1 2.21 59.93-18.91 90.58-36.42 19.5-11.14 38.15-3.86 58.88-2.68 20.1 1.15 23.53-9.25 29.62-24.88a27.37 27.37 0 0 0 1.54-4.85 10.52 10.52 0 0 0 2.28-1.47c2-1.57 10.55-2.34 12.76-2.86 10.28-2.44 20.34-5.15 29.17-11.2 11.31-7.76 17.65-18.5 19.58-32.64a93.73 93.73 0 0 0 1.38-15.67ZM208 128c8.84 0 16 10.74 16 24s-7.16 24-16 24-16-10.74-16-24 7.16-24 16-24Zm103.62 77.7c-15.25 15-35 23.3-55.62 23.3a78.37 78.37 0 0 1-55.66-23.34 8 8 0 0 1 11.32-11.32A62.46 62.46 0 0 0 256 213c16.39 0 32.15-6.64 44.39-18.7a8 8 0 0 1 11.23 11.4ZM304 176c-8.84 0-16-10.75-16-24s7.16-24 16-24 16 10.75 16 24-7.16 24-16 24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-soundcloud"><path d="M5.8 278a2.11 2.11 0 0 0-2 2L0 308.64l3.74 28.16a2.12 2.12 0 0 0 2.05 2 2.14 2.14 0 0 0 2-2l4.44-28.17L7.83 280a2.14 2.14 0 0 0-2-2ZM26.85 262.32a2.13 2.13 0 0 0-4.26 0l-5 46.32 5 45.3a2.13 2.13 0 0 0 4.26 0l5.73-45.31-5.73-46.32ZM106.17 219.59a4 4 0 0 0-3.87 3.87l-4 85.22 4 55.08a3.88 3.88 0 0 0 7.75 0l4.53-55.08-4.53-85.22a4 4 0 0 0-3.88-3.87ZM65.12 249.21a3.09 3.09 0 0 0-3 3l-4.52 56.45 4.51 54.63a3 3 0 0 0 6 0l5.13-54.63-5.13-56.48a3.1 3.1 0 0 0-2.99-2.97ZM147.88 367.6a4.83 4.83 0 0 0 4.75-4.74l3.93-54.15-3.93-113.46a4.75 4.75 0 0 0-9.5 0l-3.49 113.45 3.49 54.17a4.81 4.81 0 0 0 4.75 4.73ZM233.28 367.85a6.6 6.6 0 0 0 6.5-6.52l2.74-52.6-2.74-131a6.5 6.5 0 1 0-13 0l-2.45 131c0 .08 2.45 52.67 2.45 52.67a6.59 6.59 0 0 0 6.5 6.45ZM190.26 367.65a5.67 5.67 0 0 0 5.62-5.64l3.34-53.33-3.34-114.28a5.63 5.63 0 1 0-11.25 0l-3 114.29 3 53.32a5.66 5.66 0 0 0 5.63 5.6ZM85.56 367.15a3.53 3.53 0 0 0 3.44-3.41l4.83-55.09-4.83-52.4a3.44 3.44 0 0 0-6.88 0l-4.26 52.38 4.26 55.08a3.5 3.5 0 0 0 3.44 3.44ZM44.84 364.13a2.67 2.67 0 0 0 2.57-2.52l5.43-53-5.42-55a2.57 2.57 0 0 0-5.14 0l-4.78 55 4.78 53a2.62 2.62 0 0 0 2.56 2.53ZM211.69 192.53a6.1 6.1 0 0 0-6.07 6.09l-2.71 110.11 2.71 53a6.07 6.07 0 0 0 12.13 0l3-53-3-110.13a6.1 6.1 0 0 0-6.06-6.07ZM127 367.71a4.41 4.41 0 0 0 4.31-4.3l4.23-54.71-4.28-104.7a4.32 4.32 0 0 0-8.63 0l-3.74 104.7 3.75 54.73a4.38 4.38 0 0 0 4.36 4.28ZM174.17 362.54l3.63-53.8-3.63-117.28a5.19 5.19 0 1 0-10.37 0l-3.23 117.28 3.23 53.83a5.18 5.18 0 0 0 10.36 0ZM449 241.1a62.42 62.42 0 0 0-24.33 4.9c-5-57.18-52.61-102-110.66-102a111.92 111.92 0 0 0-40.28 7.58c-4.75 1.85-6 3.76-6.06 7.46V360.4a7.66 7.66 0 0 0 6.8 7.5l174.56.11c34.78 0 63-28.41 63-63.45s-28.2-63.46-63-63.46ZM254.79 158.87a7 7 0 0 0-6.94 7L245 308.75l2.85 51.87a6.94 6.94 0 1 0 13.87-.06v.06l3.09-51.87-3.09-142.93a7 7 0 0 0-6.93-6.95Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-stackoverflow"><path d="M392 440V320h40v160H64V320h40v120Z" /><path d="m149.1 308.77 198.57 40.87 8.4-39.32-198.57-40.87Zm26.27-93.12L359.22 300 376 263.76l-183.82-84.84Zm50.95-89 156 127.78 25.74-30.52-156-127.78ZM328 32l-33.39 23.8 120.82 160.37L448 192ZM144 400h204v-40H144Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-steam"><path d="M478.8 208.2a36 36 0 1 1-36-36 36 36 0 0 1 36 36ZM442.6 139a69.42 69.42 0 0 0-69.4 68.7l-43.2 62a48.86 48.86 0 0 0-5.4-.3 51.27 51.27 0 0 0-26.4 7.3L102.4 198a51.8 51.8 0 1 0-50.6 62.9 51.27 51.27 0 0 0 26.4-7.3L274 332.2a51.76 51.76 0 0 0 102.1-5.9l66.5-48.6a69.35 69.35 0 1 0 0-138.7Zm0 22.9a46.45 46.45 0 1 1-46.5 46.5 46.54 46.54 0 0 1 46.5-46.5Zm-390.8 9a38.18 38.18 0 0 1 33.7 20.2l-18.9-7.6v.1a30.21 30.21 0 0 0-22.6 56v.1l16.1 6.4a36.8 36.8 0 0 1-8.2.9 38.05 38.05 0 0 1-.1-76.1Zm272.8 112.2a38.1 38.1 0 1 1-33.7 55.9c6.3 2.5 12.5 5 18.8 7.6a30.27 30.27 0 1 0 22.5-56.2l-15.9-6.4a46.83 46.83 0 0 1 8.3-.9Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-stencil"><path d="M188.8 334.07h197.33L279.47 448H83.2ZM512 199H106.61L0 313h405.39ZM232.2 64h196.6L322.62 177.93H125.87Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-tableau"><path d="M242.69 340.3h26.62v-72.6h67v-25.82h-67v-72.6h-26.62v72.6h-66.15v25.82h66.15ZM119.26 445.18h22.59v-64.54h59.7v-20.17h-59.7v-65.34h-22.59v65.34h-59.7v20.17h59.7ZM370.15 212h22.59v-64.5h60.5v-19.37h-60.5V62.79h-22.59v65.34h-59.7v19.37h59.7ZM246.72 496h19.36v-46h41.15v-16.92h-41.15v-46h-19.36v46h-40.33V450h40.33ZM120.07 212h21v-65.31h60.51v-18.56H141V62.79h-21v65.34H59.56v18.56h60.51ZM435.72 308.84h19.36v-45.18H496v-17.74h-40.92v-45.18h-19.36v45.18h-40.33v17.74h40.33Z" /><path fill-rule="evenodd" d="M370.15 445.18h22.59v-64.54h60.5v-20.17h-60.5v-65.34h-22.59v65.34h-59.7v20.17h59.7Z" /><path d="M307 74.08V60.37h-40.34V16h-14.52v44.37h-40.33v13.71h40.33v44.37h14.52V74.08ZM56.11 305.61h14.52v-44.37H111v-13.71H70.63V204H56.11v43.56H16v14.52l40.11-.08Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-tiktok"><path d="M412.19 118.66a109.27 109.27 0 0 1-9.45-5.5 132.87 132.87 0 0 1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14 23.9 350 16 350.13 16h-82.44v318.78c0 4.28 0 8.51-.18 12.69 0 .52-.05 1-.08 1.56 0 .23 0 .47-.05.71v.18a70 70 0 0 1-35.22 55.56 68.8 68.8 0 0 1-34.11 9c-38.41 0-69.54-31.32-69.54-70s31.13-70 69.54-70a68.9 68.9 0 0 1 21.41 3.39l.1-83.94a153.14 153.14 0 0 0-118 34.52 161.79 161.79 0 0 0-35.3 43.53c-3.48 6-16.61 30.11-18.2 69.24-1 22.21 5.67 45.22 8.85 54.73v.2c2 5.6 9.75 24.71 22.38 40.82A167.53 167.53 0 0 0 115 470.66v-.2l.2.2c39.91 27.12 84.16 25.34 84.16 25.34 7.66-.31 33.32 0 62.46-13.81 32.32-15.31 50.72-38.12 50.72-38.12a158.46 158.46 0 0 0 27.64-45.93c7.46-19.61 9.95-43.13 9.95-52.53V176.49c1 .6 14.32 9.41 14.32 9.41s19.19 12.3 49.13 20.31c21.48 5.7 50.42 6.9 50.42 6.9v-81.84c-10.14 1.1-30.73-2.1-51.81-12.61Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-trapeze"><path d="m311.05 189.26.055-.093 64.98-110.618L257.923 8l-64.98 110.617-.096.164L8 433.451 126.162 504l85.948-146.312c14.612 17.618 32.393 33.074 53.108 45.442l168.804 100.785L504 384.789 335.197 284.004c-32.599-19.463-43.396-61.862-24.147-94.744Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-tumblr"><path d="M390 32H120c-49.19 0-88 38.81-88 88v270c0 49.19 38.81 90 88 90h270c49.19 0 90-40.81 90-90V120c0-49.19-40.81-88-90-88Zm-54 364h-52c-42.51 0-72-23.68-72-76v-80h-36v-48c42.51-11 57.95-48.32 60-80h44v72h52v56h-52l-.39 70.51c0 21.87 11 29.43 28.62 29.43L336 340Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-tux"><path d="M443.66 405.05c-1.46-.79-2.85-1.54-4-2.2-6.47-3.83-13-10.52-11.85-17.83 2.42-15.94 2.89-23.47-.49-28.79a15.61 15.61 0 0 0-7.67-6.2v-.06c1.41-2.56 2.26-5.66 2.83-10.12 1.44-11-5-44-13.7-70.7-8.08-24.68-29.24-50-44.7-68.56l-3.61-4.34c-23.88-28.93-24.34-38.19-26.55-82.67-.32-6.47-.69-13.8-1.17-22C329.87 41.43 304 16 256 16c-25.2 0-44.62 7.15-57.72 21.26C187.79 48.55 182 64 182 80.78c0 29.52 2 53 2.15 54.29 1.4 35.7 1 41.22-8.31 57.55-2.23 3.93-8.38 10.87-14.89 18.21-8.48 9.57-18.09 20.41-23.36 29.22-3.77 6.31-5.88 12.63-8.11 19.33-3.4 10.21-7.26 21.78-18.15 36.57-12.57 17.07-15.52 29.61-11 47.45-4.94 6.45-4.83 14.37-4.75 20.23a25.84 25.84 0 0 1-.3 6.09c-2.29 7.59-12.42 9.4-22 10.18-1.58.12-3.1.21-4.55.29-7.26.39-13.53.74-17.13 6.3-3.47 5.36-1.12 13.8 2.14 25.48.72 2.58 1.46 5.25 2.19 8.06 1.83 7-.16 10.48-2.68 14.84-2.44 4.21-5.21 9-5.21 17.55 0 14.67 20 18 43.05 21.94 7.36 1.24 15 2.53 22.63 4.24a225.58 225.58 0 0 1 34.08 10.68c9.72 3.73 17.4 6.68 26.43 6.68 16.18 0 28.25-9.77 39.92-19.21l2.15-1.75c5.53-4.49 21.5-4 34.34-3.64 3.46.1 6.73.2 9.65.2h6.22c13.48-.08 31.94-.18 42.23 2.5 3.75 1 6.2 3.72 9.29 7.19 5.87 6.56 13.17 14.75 33.39 14.75 19.39 0 29.55-8.71 41.32-18.8 7.16-6.13 14.56-12.48 25.07-17.86 3.92-2 7.62-3.87 11.08-5.61 22.64-11.38 35.11-17.65 35.11-27.82 0-9.91-12.24-16.5-20.34-20.86ZM211.11 88.38a13.91 13.91 0 0 1 12.47 9c1.95 5.55 1.81 10.42.21 12.94 0 0-.22-1-.36-1.44a14.85 14.85 0 0 0-6.44-8.59 11.35 11.35 0 0 0-8.94-1.47c-4.26 1.13-8.41 5-8.91 18.79-5.16-10.47-2.31-18 .92-23 2.31-3.73 7.47-6.33 11.05-6.23Zm-17.5 375C192 479.24 175.2 479 170.09 478.59c-9.81-.82-21.66-4.69-33.13-8.43-4.52-1.47-9.19-3-13.73-4.34-13.2-3.89-30.12-6.74-43.72-9-3.22-.55-6.27-1.06-9.05-1.55s-4.61-1.27-5.2-2.3c-1-1.65.38-5.25 1.93-9.41C69.27 438 72.11 430.34 72 421c0-3.91-1.47-8.3-2.84-12.56-1.62-5-3.28-10.17-1.93-12.62 1.23-2.23 6.75-2.49 11.6-2.49h2.26c3.55 0 6.62.06 8.75-.53 6.51-1.81 14.86-6.92 17.81-13.88.9-2.17 1.37-6.94 2-14 .37-4.12.74-8.37 1.22-10.58a3.55 3.55 0 0 1 2.11-2.55c1.65-.77 6.78-1.91 18.63 4.08 11.18 5.65 22.88 25.84 34.2 45.37 3.56 6.14 6.92 11.94 10.3 17.36 14.04 22.54 18.83 31.6 17.5 44.8Zm128.84-31.56a68.74 68.74 0 0 1-4.55 10.9.58.58 0 0 1-1.08-.42 56.61 56.61 0 0 0 2.11-18.43c-.25-4.73-.4-7.59-2.66-8.51s-4.26.83-9.45 5.54c-1.1 1-2.36 2.14-3.78 3.4-10.8 9.47-26.88 20.68-55.61 23.37-16.84 1.59-27.59-4.63-30.92-8.14a2.16 2.16 0 0 0-3.07-.08 2.23 2.23 0 0 0-.51 2.29c2.12 6.84 1.2 12.26-.49 16.19-.95 2.2-1.85 2.05-2-.34-.25-4.64-1-9.88-3-14.19-3.11-6.94-7-14.34-8.89-17.88v-.05c3.24-1.49 8.86-4.83 11.37-10.88s4.48-18-9.82-31.74c-6.28-6.05-22.1-17.16-36.06-27-10.9-7.65-22.17-15.56-23.65-17.51-4.49-5.89-6.37-9.3-6.94-19.65.07-2.3.13-4.59.19-6.89l.27-2.49a.58.58 0 0 1 1.15 0 63.07 63.07 0 0 0 2 9.72c1.08 3.73 2.4 7.58 3.62 9.18 3.19 4.22 7.56 7.39 11.67 8.49a5.48 5.48 0 0 0 5-.72c2.93-2.33 2.65-7.6 2.19-16.34-.47-9-1.11-21.34 1.85-34.55 5.62-25 10.91-32.51 17.61-42 .86-1.22 1.75-2.47 2.65-3.79 1.44-2.08 3-4.1 4.67-6.23 7.47-9.61 15.93-20.49 13.92-40.95-.51-5.19-.76-8.83-.86-11.39a1 1 0 0 1 1.88-.59l.49.77 1.21 2c4.86 8 13.64 22.57 25.1 22.57a13.62 13.62 0 0 0 2.36-.21c23.39-3.93 51.9-30.25 52.17-30.51 3.12-3 2.84-6.14 1.64-7.91a5.18 5.18 0 0 0-6.45-1.72c-3.29 1.4-7.14 3.15-11.22 5-13.82 6.27-37 16.75-42.25 14.34a23.11 23.11 0 0 1-6.32-5.13 1 1 0 0 1 1.14-1.65c5.59 2.29 9.55 1.45 14.2-.08l1-.34c9.37-3.09 14.2-4.77 30.76-12.08a97.55 97.55 0 0 1 16.26-5.93c4-1 6.42-1.63 7.71-4.34a6.65 6.65 0 0 0-.5-7.13c-1.53-1.87-4.07-2.57-7-1.9-3.22.75-4.7 3-6.41 4.49-2.4 2.05-5 4.16-17.19 8.65-27 10-34.58 10.61-45.21 3.43-9.84-6.69-15.15-13.23-15.15-16 0-2.13 5.45-5.7 8.71-7.84 1.33-.87 2.59-1.69 3.62-2.46 4.34-3.22 13-11.39 13.38-11.73 5.4-5.41 17.91-2.18 25 2.58a2.23 2.23 0 0 0 1.72.41 2.14 2.14 0 0 0 1.68-2.58c-4.2-17.46-.13-27.34 4-32.55a22.58 22.58 0 0 1 17.48-8.48c12.81 0 21.76 10 21.76 24.42 0 11-2.82 16.79-5.48 20.3a1.73 1.73 0 0 1-2.58.18 1.78 1.78 0 0 1-.24-2.2A24.61 24.61 0 0 0 290 114a16.58 16.58 0 0 0-16.84-16.67c-3.94 0-13.48 1.5-16.77 15.44a29.81 29.81 0 0 0-.34 11.07l.08.71c.9 7.38 15.3 12.51 27.23 15.51 11.36 2.85 13 6.22 8.84 19.63s3.11 26.23 5.7 29.57a78.3 78.3 0 0 1 8.31 12.47 93.8 93.8 0 0 1 6.62 16.48c2.17 6.79 4.05 12.65 10.63 21.22 11.07 14.4 17.66 48.64 15 78-.21 2.41-.53 4.29-.77 5.67-.43 2.53-.72 4.2.66 5.38s3.16.7 7.26-.63l3.43-1.09a109.33 109.33 0 0 1 12.58-2.8 2.15 2.15 0 0 0 1.59-1.16c3.43-6.91 3.85-15.22 4-22.47q0-1.31.06-2.79c.19-7.77.45-18.93-2.95-32a1 1 0 0 1 1.93-.64 93 93 0 0 1 6.66 25.55c2.55 22.58-1.9 32.09-1.94 32.17a1.61 1.61 0 0 0 .95 2.25 17.12 17.12 0 0 1 6.95 4.67c1.46 1.66.93 2.4-1.14 1.62a36.26 36.26 0 0 0-12.77-2.29c-10.4 0-18.09 4.95-21.51 9.19-3.19 3.94-3.7 7.67-3.83 11.27l-.06.05c-7.48-.75-12.94 1.21-17.47 6.21l-.08.09c-6.26 7.75-4 24.63-1.29 38.48 1.28 6.45 5.59 25.52 1.73 37.68Zm96.1 10.07c-15.71 6.71-25.43 14.51-34 21.39-5.65 4.53-11 8.81-17.28 12.14-10.12 5.34-24.91 6.53-33.27-7.7-2.37-4-.71-9.86 1.58-17.95 3.05-10.75 7.23-25.46 3.71-44.65-.94-5.12-1.77-9.51-2.49-13.31C334 377 332.9 371.43 334 367c.63-2.45 3.43-3 5.87-3a20.83 20.83 0 0 1 2.63.19 29.51 29.51 0 0 0 7 12.1c5.7 5.86 13.63 8.83 23.56 8.85 2.1.17 25.94 1.55 36.54-22.4 1.46.18 3.65.7 4.3 2.3 1.28 3.19-.27 8.91-1.52 13.5-.9 3.31-1.68 6.16-1.63 8.37.31 16 11 22.78 25.83 32.16 1.79 1.13 3.66 2.31 5.55 3.54S445 425 445 426c-.52 4.79-20 13.16-26.45 15.91Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-twitch"><path d="m80 32-32 80v304h96v64h64l64-64h80l112-112V32Zm336 256-64 64h-96l-64 64v-64h-80V80h304Z" /><path d="M320 143h48v129h-48zM208 143h48v129h-48z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-twitter"><path d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3 97.51 97.51 0 0 0 43.33-53.6 197.74 197.74 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 0 0 2.54 22.1 280.7 280.7 0 0 1-203-101.3A95.69 95.69 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 0 1-25.94 3.4 94.38 94.38 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.68 278.68 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 0 0 496 109.5Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-usd"><path d="M240 480v-36.42C160.53 439 112.25 398.06 112 336h72c1.77 26.34 23.86 46.45 56 50v-98l-26.77-7c-61-14.18-93.64-49.39-93.64-102.08C119.59 116.81 164.08 76.08 240 70V32h32v38c77.39 6.3 119 47.74 120 106h-72c-.76-24.06-15.83-43.39-48-46v92l30.82 7.28C367.61 243.46 400 277 400 332c0 64.34-43.74 105.88-128 111.32V480Zm0-264v-86c-27.59 1.52-47.27 18.47-47.27 42.53 0 22.3 16.39 36.88 47.27 43.47Zm32 78v92c38.15-1.54 56.38-18.92 56.38-45.77 0-24.58-18.23-41.13-56.38-46.23Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-venmo"><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89V441.6c0 20.31 17.85 38.4 38.28 38.4h373.78c20.54 0 35.94-18.2 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32ZM278 387H174.32l-41.57-248.56 90.75-8.62 22 176.87c20.53-33.45 45.88-86 45.88-121.87 0-19.62-3.36-33-8.61-44l82.63-16.72c9.56 15.78 13.86 32 13.86 52.57-.01 65.5-55.92 150.59-101.26 210.33Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-vercel"><path fill-rule="evenodd" d="m256 48 240 416H16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-vimeo"><path d="M476.9 114c-5-23.39-17.51-38.78-40.61-46.27s-64.92-4.5-94.12 16.79c-26.79 19.51-46.26 54.42-54 78.28a4 4 0 0 0 5.13 5c10.77-3.8 21.72-7.1 34-6.45 15 .8 24.51 12 24.91 25.29.3 9.79-.2 18.69-3.6 27.68-10.74 28.68-27.61 56.46-47.55 80.75a72.49 72.49 0 0 1-10 9.89c-10.21 8.29-18.81 6.1-25.41-5.2-5.4-9.29-9-18.88-12.2-29.08-12.4-39.67-16.81-80.84-23.81-121.52-3.3-19.48-7-39.77-18-56.86-11.6-17.79-28.61-24.58-50-22-14.7 1.8-36.91 17.49-47.81 26.39 0 0-56 46.87-81.82 71.35l21.2 27s17.91-12.49 27.51-18.29c5.7-3.39 12.4-4.09 17.2.2 4.51 3.9 9.61 9 12.31 14.1 5.7 10.69 11.2 21.88 14.7 33.37 13.2 44.27 25.51 88.64 37.81 133.22 6.3 22.78 13.9 44.17 28 63.55 19.31 26.59 39.61 32.68 70.92 21.49 25.41-9.09 46.61-26.18 66-43.87 33.11-30.18 59.12-65.36 85.52-101.14 20.41-27.67 37.31-55.67 51.41-86.95C478.5 179.74 484 147.26 476.9 114Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-vk"><path d="M484.7 132c3.56-11.28 0-19.48-15.75-19.48h-52.37c-13.21 0-19.31 7.18-22.87 14.86 0 0-26.94 65.6-64.56 108.13-12.2 12.3-17.79 16.4-24.4 16.4-3.56 0-8.14-4.1-8.14-15.37V131.47c0-13.32-4.06-19.47-15.25-19.47H199c-8.14 0-13.22 6.15-13.22 12.3 0 12.81 18.81 15.89 20.84 51.76V254c0 16.91-3 20-9.66 20-17.79 0-61-66.11-86.92-141.44C105 117.64 99.88 112 86.66 112H33.79C18.54 112 16 119.17 16 126.86c0 13.84 17.79 83.53 82.86 175.77 43.21 63 104.72 96.86 160.13 96.86 33.56 0 37.62-7.69 37.62-20.5v-47.66c0-15.37 3.05-17.93 13.73-17.93 7.62 0 21.35 4.09 52.36 34.33C398.28 383.6 404.38 400 424.21 400h52.36c15.25 0 22.37-7.69 18.3-22.55-4.57-14.86-21.86-36.38-44.23-62-12.2-14.34-30.5-30.23-36.09-37.92-7.62-10.25-5.59-14.35 0-23.57-.51 0 63.55-91.22 70.15-122" style="fill-rule:evenodd" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-vue"><path d="m256 144.03-55.49-96.11h-79.43L256 281.61 390.92 47.92h-79.43L256 144.03z" /><path d="M409.4 47.92 256 313.61 102.6 47.92H15.74L256 464.08 496.26 47.92H409.4z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-web-component"><path style="fill:none" d="m179.9 388-76.16-132 76.16 132zM179.9 388h152.21l76.15-132-76.15-132H179.9l-76.16 132 76.16 132zM103.74 256l76.16-132-76.16 132z" /><path d="M496 256 376 48H239.74l-43.84 76h136.21l76.15 132-76.15 132H195.9l43.84 76H376l120-208z" /><path d="m179.9 388-76.16-132 76.16-132 43.84-76H136L16 256l120 208h87.74l-43.84-76z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-wechat"><path data-name="XMLID 501 -1" d="M408.67 298.53a21 21 0 1 1 20.9-21 20.85 20.85 0 0 1-20.9 21m-102.17 0a21 21 0 1 1 20.9-21 20.84 20.84 0 0 1-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35 68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7 2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 0 1 8.13 2.34L454 462.83a11.62 11.62 0 0 0 3.48 1.17 5 5 0 0 0 4.65-4.66 14.27 14.27 0 0 0-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94 18.94 0 0 1-.33-3.47 11.4 11.4 0 0 1 5-9.35" /><path data-name="XMLID 505 -7" d="M246.13 178.51a24.47 24.47 0 0 1 0-48.94c12.77 0 24.38 11.65 24.38 24.47 1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 1 1 147.45 154a24.57 24.57 0 0 1-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.38 11.38 0 0 1-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 0 0 5.8 5.83 7.15 7.15 0 0 0 3.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.33 16.33 0 0 1 5.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.24 133.24 0 0 1-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-whatsapp"><path d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0 0 29.78 111L32 480l118.25-30.87a223.63 223.63 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1ZM256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52Zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48Z" style="fill-rule:evenodd" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-windows"><path d="M480 265H232v179l248 36V265ZM216 265H32v150l184 26.7V265ZM480 32 232 67.4V249h248V32ZM216 69.7 32 96v153h184V69.7Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-wordpress"><path d="M259 271.3 226.2 367h-.1l-25.4 73.1c1.8.5 3.5.9 5.3 1.4h.3a192.51 192.51 0 0 0 49.5 6.5 157 157 0 0 0 24.9-1.8 184.3 184.3 0 0 0 32.5-7.1c2.6-.8 5.2-1.7 7.8-2.6-2.8-6-8.8-19.3-9.1-19.9ZM80.8 180.5C70.8 203.1 64 230.9 64 256c0 6.3.3 12.6.9 18.8 6.9 71.2 52.9 131 116.1 157.9 2.6 1.1 5.3 2.2 8 3.2L96 180.6c-8-.3-9.5.2-15.2-.1Z" /><path d="M430.2 175.4a188 188 0 0 0-15.1-26.6c-1.6-2.4-3.4-4.8-5.1-7.2A193 193 0 0 0 325.1 77a189.2 189.2 0 0 0-69.2-13 191.51 191.51 0 0 0-149.4 71.7A196 196 0 0 0 89 161.3c14.2.1 31.8.1 33.8.1 18.1 0 46-2.2 46-2.2 9.4-.6 10.4 13.1 1.1 14.2 0 0-9.4 1.1-19.8 1.6L213 362l37.8-113.3-26.8-73.6c-9.4-.5-18.1-1.6-18.1-1.6-9.4-.5-8.2-14.8 1-14.2 0 0 28.5 2.2 45.5 2.2 18.1 0 46-2.2 46-2.2 9.3-.6 10.5 13.1 1.1 14.2 0 0-9.3 1.1-19.7 1.6l62.3 185.6 17.3-57.6c8.7-22.4 13.1-40.9 13.1-55.7 0-21.3-7.7-36.1-14.3-47.6-8.7-14.3-16.9-26.3-16.9-40.4 0-15.9 12-30.7 29-30.7h2.2c26.2-.7 34.8 25.3 35.9 43v.6c.4 7.2.1 12.5.1 18.8 0 17.4-3.3 37.1-13.1 61.8l-39 112.8-22.3 65.7c1.8-.8 3.5-1.6 5.3-2.5 56.7-27.4 98-82 106.7-146.7a172.07 172.07 0 0 0 1.9-26 191.11 191.11 0 0 0-17.8-80.8Z" /><path d="M256 48a208.06 208.06 0 0 1 81 399.66A208.06 208.06 0 0 1 175 64.34 206.7 206.7 0 0 1 256 48m0-16C132.29 32 32 132.29 32 256s100.29 224 224 224 224-100.29 224-224S379.71 32 256 32Z" /></symbol><symbol fill="none"  viewBox="0 0 16 16" id="icon-logo-x"><path d="M9.333 6.929 14.546 1H13.31L8.783 6.147 5.169 1H1l5.466 7.783L1 15h1.235l4.779-5.436L10.83 15H15L9.333 6.929ZM7.641 8.852l-.554-.776L2.68 1.911h1.898l3.557 4.977.552.776 4.623 6.47h-1.897L7.641 8.851Z" fill="#000" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-xbox"><path d="M126.8 248.3c39.7-58.6 77.9-92.8 77.9-92.8s-42.1-48.9-92.8-67.4l-3.3-.8A224.13 224.13 0 0 0 77.2 391c0-4.4.6-70.3 49.6-142.7ZM480 256a223.71 223.71 0 0 0-76.6-168.7l-3.2.9c-50.7 18.5-92.9 67.4-92.9 67.4s38.2 34.2 77.9 92.8c49 72.4 49.6 138.3 49.5 142.7A222.8 222.8 0 0 0 480 256ZM201.2 80.9c29.3 13.1 54.6 34.6 54.6 34.6s25.5-21.4 54.8-34.6c36.8-16.5 64.9-11.3 72.3-9.5a224.06 224.06 0 0 0-253.8 0c7.2-1.8 35.2-7.1 72.1 9.5ZM358.7 292.9C312.4 236 255.8 199 255.8 199s-56.3 37-102.7 93.9c-39.8 48.9-54.6 84.8-62.6 107.8l-1.3 4.8a224 224 0 0 0 333.6 0l-1.4-4.8c-8-23-22.9-58.9-62.7-107.8Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-xing"><path d="M313.8 303.9 469 32H365L209.4 303.8a1.35 1.35 0 0 0 0 1.7l98.9 173.8c.4.7.8.7 1.6.7H413l-99.3-174.7a1.74 1.74 0 0 1 .1-1.4ZM221.9 216.2 163 113a2 2 0 0 0-2-1H65l58.9 104.4a1.13 1.13 0 0 1 .1.8L43 352h96.8a1.54 1.54 0 0 0 1.6-.9l80.5-133.7a2.44 2.44 0 0 0 0-1.2Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-yahoo"><path d="M0 139.009h97.648l56.86 145.729 57.6-145.729h95.066L164.022 484H68.337l39.189-91.417L.003 139.009H0ZM417.5 256H311l94.907-228L512 28.005 417.5 256Zm-78.208 21.221c32.672 0 59.156 26.533 59.156 59.258 0 32.727-26.484 59.26-59.156 59.26-32.667 0-59.146-26.533-59.146-59.26 0-32.725 26.483-59.258 59.146-59.258Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-yen"><path d="M448 32h-80L256 253.13 144 32H64l112.37 208H128v48h73.56L216 319v17h-88v48h88v96h80v-96h88v-48h-88v-17l14.89-31H384v-48h-48.29Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-logo-youtube"><path d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149 1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5 58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5 2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9ZM207 353.89v-196.5l145 98.2Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-magnet-outline"><path d="M421.83 293.82A144 144 0 0 0 218.18 90.17" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M353.94 225.94a48 48 0 0 0-67.88-67.88" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M192 464v-48M90.18 421.82l33.94-33.94M48 320h48" /><path d="M286.06 158.06 172.92 271.19a32 32 0 0 1-45.25 0L105 248.57a32 32 0 0 1 0-45.26L218.18 90.17M421.83 293.82 308.69 407a32 32 0 0 1-45.26 0l-22.62-22.63a32 32 0 0 1 0-45.26l113.13-113.17M139.6 169.98l67.88 67.89M275.36 305.75l67.89 67.88" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-magnet-sharp"><path style="stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M191.98 463.58v-48M90.16 421.4l33.94-33.94M47.98 319.58h48" /><path d="M422.2 89.82a144 144 0 0 0-203.71-.07l-67.88 67.88 67.88 67.89 67.88-67.89a48 48 0 0 1 68.46.59c18.3 18.92 17.48 49.24-1.14 67.86l-67.32 67.32 67.88 67.88 66.91-66.91c56.37-56.37 57.37-148.15 1.04-204.55ZM82.718 225.517l45.255-45.254 67.883 67.882L150.6 293.4zM218.49 361.27l45.254-45.254 67.882 67.882-45.255 45.255z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-magnet"><path style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M191.98 463.79v-48M90.16 421.61l33.94-33.94M47.98 319.79h48" /><path d="m267.56 312.32-31.11 31.11a16 16 0 0 0 0 22.63l45.26 45.25a16 16 0 0 0 22.62 0l31.12-31.11a4 4 0 0 0 0-5.66l-62.23-62.22a4 4 0 0 0-5.66 0ZM131.8 176.55l-31.11 31.12a16 16 0 0 0 0 22.62l45.25 45.26a16 16 0 0 0 22.63 0l31.11-31.11a4 4 0 0 0 0-5.66l-62.22-62.23a4 4 0 0 0-5.66 0ZM428.85 83.28a144 144 0 0 0-203.71-.06l-65.06 65.05a4 4 0 0 0 0 5.66l62.23 62.22a4 4 0 0 0 5.66 0l65-65.05a48 48 0 0 1 68.46.59c18.3 18.92 17.47 49.24-1.14 67.85L295.85 284a4 4 0 0 0 0 5.66l62.22 62.23a4 4 0 0 0 5.66 0l64.08-64.08c56.37-56.34 57.37-148.13 1.04-204.53Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mail-open-outline"><path d="M441.6 171.61 266.87 85.37a24.57 24.57 0 0 0-21.74 0L70.4 171.61A40 40 0 0 0 48 207.39V392c0 22.09 18.14 40 40.52 40h335c22.38 0 40.52-17.91 40.52-40V207.39a40 40 0 0 0-22.44-35.78Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M397.33 368 268.07 267.46a24 24 0 0 0-29.47 0L109.33 368M309.33 295l136-103M61.33 192l139 105" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mail-open-sharp"><path d="M471.05 168.36 263.24 65.69a16.37 16.37 0 0 0-14.48 0L41 168.36a16 16 0 0 0-9 14.31V432a16.09 16.09 0 0 0 16.19 16h415.62A16.09 16.09 0 0 0 480 432V182.67a16 16 0 0 0-8.95-14.31ZM256 97.89l173 85.44-175.7 86.78-173-85.44Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mail-open"><path d="M448.67 154.45 274.1 68.2a41.1 41.1 0 0 0-36.2 0L63.33 154.45A55.6 55.6 0 0 0 32 204.53v184.61c0 30.88 25.42 56 56.67 56h334.66c31.25 0 56.67-25.12 56.67-56V204.53a55.6 55.6 0 0 0-31.33-50.08ZM252.38 96.82a8.22 8.22 0 0 1 7.24 0L429 180.48l-172 85a8.22 8.22 0 0 1-7.24 0L80.35 181.81Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mail-outline"><rect x="48" y="96" width="416" height="320" rx="40" ry="40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m112 160 144 112 144-112" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mail-sharp"><path d="M464 80H48a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16ZM265.82 284.63a16 16 0 0 1-19.64 0L89.55 162.81l19.64-25.26L256 251.73l146.81-114.18 19.64 25.26Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mail-unread-outline"><path d="M320 96H88a40 40 0 0 0-40 40v240a40 40 0 0 0 40 40h334.73a40 40 0 0 0 40-40V239" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m112 160 144 112 87-65.67" /><circle cx="431.95" cy="128.05" r="47.95" /><path d="M432 192a63.95 63.95 0 1 1 63.95-63.95A64 64 0 0 1 432 192Zm0-95.9a32 32 0 1 0 31.95 32 32 32 0 0 0-31.95-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mail-unread-sharp"><path d="M374.09 101c-.11.23-.21.46-.31.7-.34.75-.67 1.5-1 2.26l-.36.9c-.27.71-.54 1.42-.79 2.14-.12.35-.24.7-.35 1-.23.68-.44 1.37-.64 2.07l-.33 1.15q-.27 1-.51 2c-.1.41-.2.82-.28 1.23-.15.67-.28 1.36-.4 2-.08.42-.16.84-.23 1.27-.11.69-.2 1.4-.29 2.1-.05.42-.11.83-.16 1.25-.08.77-.13 1.54-.19 2.31 0 .36-.06.72-.08 1.09-.06 1.13-.09 2.27-.09 3.41 0 1 0 2 .07 2.94v.62c.05.95.12 1.89.21 2.83l.06.46c.09.87.2 1.72.32 2.57 0 .15 0 .31.07.46.14.92.31 1.84.49 2.75l.12.59c.2.92.4 1.84.64 2.75.23.92.5 1.82.77 2.71.06.19.12.38.17.57.28.88.57 1.74.88 2.59.05.15.11.29.16.43.29.78.6 1.55.92 2.32.05.14.11.28.17.42.35.83.73 1.65 1.11 2.47l.27.53c.4.82.81 1.64 1.24 2.44a64.21 64.21 0 0 0 29.56 27.63l.37.17c1.78.8 3.59 1.53 5.45 2.17l.95.32 1.5.47c.45.14.9.26 1.36.39l1.92.5c.57.14 1.14.27 1.72.39l1.15.24 1.83.32.93.16c.9.13 1.81.24 2.72.34l.77.07c.73.07 1.47.13 2.22.17l.85.05c1 0 1.94.07 2.93.07 1.15 0 2.29 0 3.43-.09l1.09-.09c.77 0 1.54-.11 2.3-.19.42 0 .83-.1 1.25-.16.7-.08 1.41-.17 2.1-.28l1.27-.23c.68-.12 1.36-.25 2-.39l1.24-.29c.67-.16 1.35-.32 2-.51.39-.1.78-.21 1.16-.33.69-.2 1.37-.41 2.05-.63l1.07-.36c.7-.24 1.4-.5 2.1-.77l.94-.37c.74-.3 1.47-.62 2.19-.95l.77-.34c.8-.37 1.58-.77 2.36-1.17.17-.09.35-.17.52-.27.91-.48 1.8-1 2.68-1.5l.12-.07a63.95 63.95 0 1 0-89.21-84.88l-.21.39c-.3 1.03-.72 1.86-1.11 2.69Z" /><path d="m371.51 202.43-105.69 82.2a16 16 0 0 1-19.64 0L89.55 162.81l19.64-25.26L256 251.73l94.36-73.39A95.81 95.81 0 0 1 349 80H48a16 16 0 0 0-16 16v320a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V211.13a95.75 95.75 0 0 1-108.49-8.7Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mail-unread"><path d="M496 128.05A64 64 0 0 0 389.62 80a64.52 64.52 0 0 0-12.71 15.3v.06c-.54.9-1.05 1.82-1.55 2.74l-.24.49c-.42.79-.81 1.59-1.19 2.4-.12.25-.23.5-.34.75-.33.73-.65 1.47-.95 2.22-.13.31-.25.62-.37.93-.27.7-.53 1.4-.78 2.11l-.36 1.06c-.22.68-.43 1.37-.63 2.06-.12.39-.23.77-.33 1.16-.19.67-.35 1.35-.51 2-.1.41-.2.82-.29 1.23-.14.68-.27 1.37-.39 2-.08.42-.16.84-.23 1.26-.11.7-.2 1.41-.29 2.12-.05.41-.11.82-.16 1.24-.08.77-.13 1.54-.19 2.32 0 .36-.06.72-.08 1.08-.06 1.14-.1 2.28-.1 3.44 0 1 0 2 .08 2.94v.64q.08 1.41.21 2.82l.06.48c.09.85.19 1.69.32 2.52 0 .17 0 .35.07.52.14.91.31 1.81.49 2.71 0 .22.09.43.13.65.18.86.38 1.72.6 2.57v.19c.23.89.48 1.76.75 2.63l.21.68c.27.85.55 1.68.85 2.51.06.18.13.36.2.54.27.71.55 1.42.84 2.12.08.21.16.41.25.61.34.79.69 1.58 1.06 2.36l.33.67c.35.7.7 1.4 1.07 2.09a64.34 64.34 0 0 0 22.14 23.81 62.22 62.22 0 0 0 7.62 4.15l.39.18q2.66 1.2 5.43 2.16l.95.32 1.5.47c.45.14.9.26 1.36.39l1.92.5 1.73.4 1.15.23 1.83.33.94.15c.9.13 1.81.25 2.72.35l.77.07c.73.06 1.47.12 2.21.16l.86.05c1 0 1.94.08 2.92.08 1.16 0 2.3 0 3.44-.1l1.08-.08c.78-.06 1.55-.11 2.32-.19l1.25-.16c.7-.09 1.41-.18 2.11-.29l1.26-.23c.68-.12 1.37-.25 2-.39l1.23-.29c.68-.16 1.36-.32 2-.51.39-.1.77-.21 1.16-.33.69-.2 1.38-.41 2.06-.63l1.06-.36c.71-.25 1.41-.51 2.11-.78l.93-.37c.75-.3 1.49-.62 2.22-.95l.75-.34c.81-.38 1.61-.77 2.4-1.19l.49-.24c.92-.5 1.84-1 2.74-1.55h.06A64.52 64.52 0 0 0 480 170.38a63.81 63.81 0 0 0 16-42.33Z" /><path d="m371.38 202.53-105.56 82.1a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l94.22-73.28A95.86 95.86 0 0 1 348.81 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V211.19a95.85 95.85 0 0 1-108.62-8.66Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mail"><path d="M424 80H88a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h336a56.06 56.06 0 0 0 56-56V136a56.06 56.06 0 0 0-56-56Zm-14.18 92.63-144 112a16 16 0 0 1-19.64 0l-144-112a16 16 0 1 1 19.64-25.26L256 251.73l134.18-104.36a16 16 0 0 1 19.64 25.26Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-male-female-outline"><circle cx="216" cy="200" r="136" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M216 352v128M272 416H160M432 112V32h-80M335.28 128.72 432 32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-male-female-sharp"><path d="M330 16v44h42.89l-37.1 37.09A157.67 157.67 0 0 0 216 42c-87.12 0-158 70.88-158 158 0 79.66 59.26 145.72 136 156.46V394h-50v44h50v58h44v-58h50v-44h-50v-37.54c76.74-10.74 136-76.8 136-156.46a157.23 157.23 0 0 0-14-64.93l44-44V134h44V16ZM216 314a114 114 0 1 1 114-114 114.13 114.13 0 0 1-114 114Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-male-female"><path d="M426 16h-74a22 22 0 0 0 0 44h20.89l-37.1 37.09A157.68 157.68 0 0 0 216 42c-87.12 0-158 70.88-158 158 0 79.66 59.26 145.72 136 156.46V394h-28a22 22 0 0 0 0 44h28v36a22 22 0 0 0 44 0v-36h28a22 22 0 0 0 0-44h-28v-37.54c76.74-10.74 136-76.8 136-156.46a157.15 157.15 0 0 0-14-64.92l44-44V112a22 22 0 0 0 44 0V38a22 22 0 0 0-22-22ZM216 314a114 114 0 1 1 114-114 114.13 114.13 0 0 1-114 114Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-male-outline"><circle cx="216" cy="296" r="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 160V64h-96M324 188 448 64" /></symbol><symbol  viewBox="0 0 512 512" id="icon-male-sharp"><path d="M330 48v44h58.89l-60.39 60.39c-68.2-52.86-167-48-229.54 14.57C31.12 234.81 31.12 345.19 99 413a174.21 174.21 0 0 0 246 0c62.57-62.58 67.43-161.34 14.57-229.54L420 123.11V182h44V48Zm-16.08 333.92a130.13 130.13 0 0 1-183.84 0c-50.69-50.68-50.69-133.16 0-183.84s133.16-50.69 183.84 0 50.69 133.16 0 183.84Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-male"><path d="M442 48h-90a22 22 0 0 0 0 44h36.89l-60.39 60.39c-68.19-52.86-167-48-229.54 14.57C31.12 234.81 31.12 345.19 99 413a174.21 174.21 0 0 0 246 0c62.57-62.58 67.43-161.35 14.57-229.54L420 123.11V160a22 22 0 0 0 44 0V70a22 22 0 0 0-22-22ZM313.92 381.92a130.13 130.13 0 0 1-183.84 0c-50.69-50.68-50.69-133.16 0-183.84s133.16-50.69 183.84 0 50.69 133.16 0 183.84Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-man-outline"><path d="M208 208v264a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path d="M256 336v136a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24V208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path d="M208 192v88a23.72 23.72 0 0 1-24 24h0a23.72 23.72 0 0 1-24-24v-88a48 48 0 0 1 48-48h96a48 48 0 0 1 48 48v88a23.72 23.72 0 0 1-24 24h0a23.72 23.72 0 0 1-24-24v-88" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="56" r="40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-man-sharp"><circle cx="256" cy="56" r="56" /><path d="M336 128H176a32 32 0 0 0-32 32v160h48V192h8v320h52V328h8v184h52V192h8v128h48V160a32 32 0 0 0-32-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-man"><circle cx="256" cy="56" r="56" /><path d="M304 128h-96a64.19 64.19 0 0 0-64 64v107.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 0 0 184 300v-99.73a8.18 8.18 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8V489a23 23 0 0 0 23 23 23 23 0 0 0 23-23V346.34a10.24 10.24 0 0 1 9.33-10.34A10 10 0 0 1 266 346v143a23 23 0 0 0 23 23 23 23 0 0 0 23-23V200.27a8.18 8.18 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v99.52c0 10.85 8.43 20.08 19.27 20.47A20 20 0 0 0 368 300V192a64.19 64.19 0 0 0-64-64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-map-outline"><path d="M313.27 124.64 198.73 51.36a32 32 0 0 0-29.28.35L56.51 127.49A16 16 0 0 0 48 141.63v295.8a16 16 0 0 0 23.49 14.14l97.82-63.79a32 32 0 0 1 29.5-.24l111.86 73a32 32 0 0 0 29.27-.11l115.43-75.94a16 16 0 0 0 8.63-14.2V74.57a16 16 0 0 0-23.49-14.14l-98 63.86a32 32 0 0 1-29.24.35ZM328 128v336M184 48v336" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-map-sharp"><path d="M327.71 130.93 184 39 32 144v336l152.29-98.93L328 473l152-105V32ZM312 421l-112-72V91l112 72Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-map"><path d="M48.17 113.34A32 32 0 0 0 32 141.24V438a32 32 0 0 0 47 28.37c.43-.23.85-.47 1.26-.74l84.14-55.05a8 8 0 0 0 3.63-6.72V46.45a8 8 0 0 0-12.51-6.63ZM212.36 39.31A8 8 0 0 0 200 46v357.56a8 8 0 0 0 3.63 6.72l96 62.42A8 8 0 0 0 312 466V108.67a8 8 0 0 0-3.64-6.73ZM464.53 46.47a31.64 31.64 0 0 0-31.5-.88 12.07 12.07 0 0 0-1.25.74l-84.15 55a8 8 0 0 0-3.63 6.72v357.46a8 8 0 0 0 12.52 6.63l107.07-73.46a32 32 0 0 0 16.41-28v-296a32.76 32.76 0 0 0-15.47-28.21Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-medal-outline"><circle cx="256" cy="352" r="112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="256" cy="352" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M147 323 41.84 159.32a32 32 0 0 1-1.7-31.61l31-62A32 32 0 0 1 99.78 48h312.44a32 32 0 0 1 28.62 17.69l31 62a32 32 0 0 1-1.7 31.61L365 323M371 144H37M428.74 52.6 305 250M140.55 144 207 250" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-medal-sharp"><path d="M80 32 16 160h289.11l80.22-128H80z" /><path d="M496 144 424 32 298 231.08a128 128 0 0 0-84 0L189.53 192H43.82l86.66 134.89a128 128 0 1 0 251 0ZM256 422a70 70 0 1 1 70-70 70.08 70.08 0 0 1-70 70Z" /><circle cx="256" cy="352" r="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-medal"><circle cx="256" cy="352" r="32" /><path d="M99.78 32a48 48 0 0 0-42.94 26.53l-31 62A48.26 48.26 0 0 0 24.28 160h278.2a4 4 0 0 0 3.39-1.87l75.5-120A4 4 0 0 0 378 32Z" /><path d="m486.17 120.56-31-62a47.7 47.7 0 0 0-32.79-25.46L342.5 160 298 231.08a128 128 0 0 0-84 0l-23.32-37.2a4 4 0 0 0-3.39-1.88H51.14a4 4 0 0 0-3.36 6.16l82.7 128.73a128 128 0 1 0 251 0L483.62 168a48.22 48.22 0 0 0 2.55-47.44Zm-226 295.31a64 64 0 1 1 59.69-59.69 64.08 64.08 0 0 1-59.68 59.69Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-medical-outline"><path d="m429.93 174.27-16.47-28.59a15.49 15.49 0 0 0-21.15-5.7l-98.39 57a4 4 0 0 1-6-3.5L288 80a16 16 0 0 0-16-16h-32a16 16 0 0 0-16 16l.07 113.57a4 4 0 0 1-6 3.5l-98.39-57a15.49 15.49 0 0 0-21.15 5.7l-16.46 28.6a15.42 15.42 0 0 0 5.69 21.1l98.49 57.08a4 4 0 0 1 0 6.9l-98.49 57.08a15.54 15.54 0 0 0-5.69 21.1l16.47 28.59a15.49 15.49 0 0 0 21.15 5.7l98.39-57a4 4 0 0 1 6 3.5L224 432a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16l-.07-113.67a4 4 0 0 1 6-3.5l98.39 57a15.49 15.49 0 0 0 21.15-5.7l16.47-28.59a15.42 15.42 0 0 0-5.69-21.1l-98.49-57.08a4 4 0 0 1 0-6.9l98.49-57.08a15.51 15.51 0 0 0 5.68-21.11Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-medical-sharp"><path d="M351.9 256 460 193.6l-48-83.2-108 62.4V48h-96v124.8l-108-62.4-48 83.2L160.1 256 52 318.4l48 83.2 108-62.4V464h96V339.2l108 62.4 48-83.2L351.9 256z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-medical"><path d="M272 464h-32a32 32 0 0 1-32-32l.05-85.82a4 4 0 0 0-6-3.47l-74.34 43.06a31.48 31.48 0 0 1-43-11.52l-16.5-28.64-.06-.1a31.65 31.65 0 0 1 11.56-42.8l74.61-43.25a4 4 0 0 0 0-6.92l-74.54-43.21a31.41 31.41 0 0 1-11.55-43l16.44-28.55a31.48 31.48 0 0 1 19.27-14.74 31.14 31.14 0 0 1 23.8 3.2l74.31 43a4 4 0 0 0 6-3.47L208 80a32 32 0 0 1 32-32h32a32 32 0 0 1 32 32v85.72a4 4 0 0 0 6 3.47l74.34-43.06a31.51 31.51 0 0 1 43 11.52l16.49 28.64.06.09a31.52 31.52 0 0 1-11.64 42.86l-74.53 43.2a4 4 0 0 0 0 6.92l74.53 43.2a31.42 31.42 0 0 1 11.56 43l-16.44 28.55a31.48 31.48 0 0 1-19.27 14.74 31.14 31.14 0 0 1-23.8-3.2l-74.31-43a4 4 0 0 0-6 3.46L304 432a32 32 0 0 1-32 32Zm-93.56-197.48Zm0-21Zm155.1-.08Zm0 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-medkit-outline"><rect x="32" y="112" width="448" height="352" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M144 112V80a32 32 0 0 1 32-32h160a32 32 0 0 1 32 32v32M256 208v160M336 288H176" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-medkit-sharp"><path style="fill:none" d="M168 72h176v24H168z" /><path d="M484 96H384V40a8 8 0 0 0-8-8H136a8 8 0 0 0-8 8v56H28a12 12 0 0 0-12 12v360a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V108a12 12 0 0 0-12-12ZM168 72h176v24H168Zm184 238h-74v74h-44v-74h-74v-44h74v-74h44v74h74Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-medkit"><path d="M336 64H176a16 16 0 0 0-16 16v16h192V80a16 16 0 0 0-16-16Z" style="fill:none" /><path d="M432 96h-48V80a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v256a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V160a64.07 64.07 0 0 0-64-64Zm-96 208h-64v64a16 16 0 0 1-32 0v-64h-64a16 16 0 0 1 0-32h64v-64a16 16 0 0 1 32 0v64h64a16 16 0 0 1 0 32Zm16-208H160V80a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-megaphone-outline"><path d="M407.94 52.22S321.3 160 240 160H80a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16h160c81.3 0 167.94 108.23 167.94 108.23 6.06 8 24.06 2.52 24.06-9.83V62c0-12.31-17-18.82-24.06-9.78ZM64 256s-16-6-16-32 16-32 16-32M448 246s16-4.33 16-22-16-22-16-22M256 160v128M112 160v128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M144 288v168a8 8 0 0 0 8 8h53a16 16 0 0 0 15.29-20.73C211.91 416.39 192 386.08 192 336h16a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16h-16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-megaphone-sharp"><path d="M128 144v332a4 4 0 0 0 4 4h100.07a8 8 0 0 0 7.82-9.7L208.71 352H232a8 8 0 0 0 8-8V144ZM452.18 186.55 448 185.5V36a4 4 0 0 0-4-4h-42.5a4 4 0 0 0-2.63 1L272 144v160l126.87 111a4 4 0 0 0 2.63 1H444a4 4 0 0 0 4-4V262.5l4.18-1.05C461.8 258.84 480 247.67 480 224s-18.2-34.84-27.82-37.45ZM96 144H52a4 4 0 0 0-4 4v35.59a43 43 0 0 0-4.24 4.35C38.4 194.32 32 205.74 32 224c0 20.19 7.89 33.13 16 40.42V300a4 4 0 0 0 4 4h44Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-megaphone"><path d="M48 176v.66a17.38 17.38 0 0 1-4.2 11.23v.05C38.4 194.32 32 205.74 32 224c0 16.55 5.3 28.23 11.68 35.91A19 19 0 0 1 48 272a32 32 0 0 0 32 32h8a8 8 0 0 0 8-8V152a8 8 0 0 0-8-8h-8a32 32 0 0 0-32 32ZM452.18 186.55l-.93-.17a4 4 0 0 1-3.25-3.93V62c0-12.64-8.39-24-20.89-28.32-11.92-4.11-24.34-.76-31.68 8.53a431.18 431.18 0 0 1-51.31 51.69c-23.63 20-46.24 34.25-67 42.31a8 8 0 0 0-5.15 7.47V299a16 16 0 0 0 9.69 14.69c19.34 8.29 40.24 21.83 62 40.28a433.74 433.74 0 0 1 51.68 52.16 26.22 26.22 0 0 0 21.1 9.87 33.07 33.07 0 0 0 10.44-1.74C439.71 410 448 399.05 448 386.4V265.53a4 4 0 0 1 3.33-3.94l.85-.14C461.8 258.84 480 247.67 480 224s-18.2-34.84-27.82-37.45ZM240 320V152a8 8 0 0 0-8-8h-96a8 8 0 0 0-8 8v304a24 24 0 0 0 24 24h52.45a32.66 32.66 0 0 0 25.93-12.45 31.65 31.65 0 0 0 5.21-29.05c-1.62-5.18-3.63-11-5.77-17.19-7.91-22.9-18.34-37.07-21.12-69.32A32 32 0 0 0 240 320Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-menu-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M80 160h352M80 256h352M80 352h352" /></symbol><symbol  viewBox="0 0 512 512" id="icon-menu-sharp"><path d="M64 384h384v-42.67H64Zm0-106.67h384v-42.66H64ZM64 128v42.67h384V128Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-menu"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:48px" d="M88 152h336M88 256h336M88 360h336" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mic-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M224 368h64M336 224.3v23.92c0 39.42-40.58 71.48-80 71.48h0c-39.42 0-80-32.06-80-71.48V224.3M256 320v48" /><rect x="208" y="128" width="96" height="160" rx="48" ry="48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mic-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm-48 128a48.14 48.14 0 0 1 48-48 48.14 48.14 0 0 1 48 48v64a48.14 48.14 0 0 1-48 48 48.14 48.14 0 0 1-48-48Zm144 72.22c0 23.36-10.94 45.61-30.79 62.66A103.71 103.71 0 0 1 272 334.26V352h32v32h-96v-32h32v-17.74a103.71 103.71 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V208.3h32v39.92c0 25.66 28 55.48 64 55.48 29.6 0 64-24.23 64-55.48V208.3h32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mic-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm-48 128a48.14 48.14 0 0 1 48-48 48.14 48.14 0 0 1 48 48v64a48.14 48.14 0 0 1-48 48 48.14 48.14 0 0 1-48-48Zm144 72.22c0 23.36-10.94 45.61-30.79 62.66A103.71 103.71 0 0 1 272 334.26V352h16a16 16 0 0 1 0 32h-64a16 16 0 0 1 0-32h16v-17.74a103.71 103.71 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V224.3a16 16 0 0 1 32 0v23.92c0 25.66 28 55.48 64 55.48 29.6 0 64-24.23 64-55.48V224.3a16 16 0 1 1 32 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mic-off-circle-outline"><path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208Zm0-384c-97 0-176 79-176 176s79 176 176 176 176-78.95 176-176S353.05 80 256 80Z" /><path d="M352 369a15.93 15.93 0 0 1-11.84-5.24l-192-210a16 16 0 0 1 23.68-21.52l192 210A16 16 0 0 1 352 369ZM352 248.22v-23.8a16.3 16.3 0 0 0-13.64-16.24c-9.88-1.48-18.36 6.51-18.36 16.12v23.92a43.35 43.35 0 0 1-3.07 15.91 4 4 0 0 0 .76 4.16l19.19 21.1a2 2 0 0 0 3.19-.3A77.12 77.12 0 0 0 352 248.22ZM304 240v-64a48.14 48.14 0 0 0-48-48 48.08 48.08 0 0 0-41 23.1 4 4 0 0 0 .47 4.77l84.42 92.86a2 2 0 0 0 3.46-1A47.84 47.84 0 0 0 304 240ZM246.57 285.2l-36.46-40.11a1 1 0 0 0-1.74.8 48.26 48.26 0 0 0 37.25 41 1 1 0 0 0 .95-1.69Z" /><path d="M287.55 352H272v-17.74a100.33 100.33 0 0 0 12.53-3.06 2 2 0 0 0 .89-3.26l-21.07-23.19a3.94 3.94 0 0 0-3.29-1.29c-1.69.15-3.39.24-5.06.24-36 0-64-29.82-64-55.48V224.4a16.26 16.26 0 0 0-15.61-16.4A15.91 15.91 0 0 0 160 224v24.22c0 23.36 10.94 45.61 30.79 62.66A103.71 103.71 0 0 0 240 334.26V352h-15.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 224 384h64a16 16 0 0 0 16-16.77c-.42-8.61-7.84-15.23-16.45-15.23Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mic-off-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm64 200.22V208h32v40.22a77.53 77.53 0 0 1-13.37 43.11L316 266.4a44.11 44.11 0 0 0 4-18.18ZM256 128a48.14 48.14 0 0 1 48 48v64a48.07 48.07 0 0 1-1.44 11.64l-89-97.92A48.13 48.13 0 0 1 256 128Zm48 256h-96v-32h32v-17.74a103.71 103.71 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V208h32v40.22c0 25.66 28 55.48 64 55.48a56.91 56.91 0 0 0 7-.45l24.52 27a99.57 99.57 0 0 1-15.5 4V352h32Zm-95.91-141.13 40.5 44.55a48.2 48.2 0 0 1-40.5-44.55Zm136.07 124.89-200.5-218.5 23.68-21.52 200.5 218.5Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mic-off-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm0 80a48.14 48.14 0 0 1 48 48v64a47.84 47.84 0 0 1-.63 7.71 2 2 0 0 1-3.46 1l-84.42-92.86a4 4 0 0 1-.47-4.77A48.08 48.08 0 0 1 256 128Zm32 256h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 224 352h16v-17.74a103.71 103.71 0 0 1-49.21-23.38c-19.85-17.05-30.79-39.3-30.79-62.66V224a15.91 15.91 0 0 1 16.39-16A16.26 16.26 0 0 1 192 224.4v23.82c0 25.66 28 55.48 64 55.48 1.67 0 3.37-.09 5.06-.24a3.94 3.94 0 0 1 3.29 1.29l21.07 23.19a2 2 0 0 1-.89 3.26 100.33 100.33 0 0 1-12.53 3.06V352h15.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 288 384Zm-77.89-138.91 36.46 40.11a1 1 0 0 1-.95 1.66 48.26 48.26 0 0 1-37.25-41 1 1 0 0 1 1.74-.77Zm152.65 119.75a16 16 0 0 1-22.6-1.08l-192-210a16 16 0 0 1 23.68-21.52l192 210a16 16 0 0 1-1.08 22.6ZM352 248.22a77.12 77.12 0 0 1-11.93 40.87 2 2 0 0 1-3.19.3l-19.19-21.1a4 4 0 0 1-.76-4.16 43.35 43.35 0 0 0 3.07-15.91v-23.8a16.3 16.3 0 0 1 13.64-16.24c9.88-1.48 18.36 6.51 18.36 16.12Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mic-off-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M432 400 96 64" /><path d="M400 240v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 208v32a111.58 111.58 0 0 1-2.45 23.31 4.05 4.05 0 0 0 1.07 3.69l21.82 21.81a2 2 0 0 0 3.29-.72A143.27 143.27 0 0 0 400 240ZM256 352a112.36 112.36 0 0 1-112-112v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 208v32c0 74 56.1 135.12 128 143.11V432h-47.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 192 464h127.55c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 320 432h-48v-48.89a143.08 143.08 0 0 0 52-16.22 4 4 0 0 0 .91-6.35L307 342.63a4 4 0 0 0-4.51-.78A110.78 110.78 0 0 1 256 352ZM256 80a47.18 47.18 0 0 1 48 48v74.72a4 4 0 0 0 1.17 2.82L332.59 233a2 2 0 0 0 3.41-1.42V128.91C336 85 301 48.6 257.14 48a79.66 79.66 0 0 0-68.47 36.57 4 4 0 0 0 .54 5l19.54 19.54a2 2 0 0 0 3.25-.63A47.44 47.44 0 0 1 256 80Z" /><path d="M207.27 242.9 179.41 215a2 2 0 0 0-3.41 1.42V239a80.89 80.89 0 0 0 23.45 56.9 78.55 78.55 0 0 0 77.8 21.19 2 2 0 0 0 .86-3.35l-24.91-24.91a4.08 4.08 0 0 0-2.42-1.15c-21.65-2.52-39.48-20.44-42.37-42.43a4 4 0 0 0-1.14-2.35Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mic-off-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M432 400 96 64" /><path d="M368 192v48a111.74 111.74 0 0 1-2.93 25.45L390.65 291a143.07 143.07 0 0 0 9.35-51v-48ZM272 432v-48.89a143.11 143.11 0 0 0 56.65-18.83L305 340.65A112.13 112.13 0 0 1 144 240v-48h-32v48c0 74 56.1 135.12 128 143.11V432h-64v32h160v-32ZM336 236.37V128c0-44.86-35.14-80-80-80a79.68 79.68 0 0 0-69 39.34" /><path d="M176 211.63V239a80.89 80.89 0 0 0 23.45 56.9 78.55 78.55 0 0 0 81 20.21Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mic-off"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M432 400 96 64" /><path d="M400 240v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 208v32a111.68 111.68 0 0 1-2.68 24.38 2 2 0 0 0 .53 1.84l22.59 22.59a2 2 0 0 0 3.29-.72A143.27 143.27 0 0 0 400 240ZM256 352a112.36 112.36 0 0 1-112-112v-31.55c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 208v32c0 74 56.1 135.12 128 143.11V432h-47.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 192 464h127.55c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 320 432h-48v-48.89a143.08 143.08 0 0 0 52-16.22 4 4 0 0 0 .91-6.35l-18.4-18.39a3 3 0 0 0-3.41-.58A111 111 0 0 1 256 352ZM257.14 48a79.66 79.66 0 0 0-68.47 36.57 4 4 0 0 0 .54 5L332.59 233a2 2 0 0 0 3.41-1.42V128.91C336 85 301 48.6 257.14 48Z" /><path d="M179.41 215a2 2 0 0 0-3.41 1.42V239a80.89 80.89 0 0 0 23.45 56.9 78.55 78.55 0 0 0 77.8 21.19 2 2 0 0 0 .86-3.35Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mic-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M192 448h128M384 208v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32M256 368v80" /><path d="M256 64a63.68 63.68 0 0 0-64 64v111c0 35.2 29 65 64 65s64-29 64-65V128c0-36-28-64-64-64Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mic-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M192 448h128M384 208v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32M256 368v80" /><path d="M256 320a78.83 78.83 0 0 1-56.55-24.1A80.89 80.89 0 0 1 176 239V128a79.69 79.69 0 0 1 80-80c44.86 0 80 35.14 80 80v111c0 44.66-35.89 81-80 81Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-mic"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M192 448h128M384 208v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32M256 368v80" /><path d="M256 320a78.83 78.83 0 0 1-56.55-24.1A80.89 80.89 0 0 1 176 239V128a79.69 79.69 0 0 1 80-80c44.86 0 80 35.14 80 80v111c0 44.66-35.89 81-80 81Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-moon-outline"><path d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-moon-sharp"><path d="M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-moon"><path d="M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-move-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m176 112 80-80 80 80M255.98 32l.02 448M176 400l80 80 80-80M400 176l80 80-80 80M112 176l-80 80 80 80M32 256h448" /></symbol><symbol  viewBox="0 0 512 512" id="icon-move-sharp"><path style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" d="m176 112 80-80 80 80M255.98 32l.02 448M176 400l80 80 80-80M400 176l80 80-80 80M112 176l-80 80 80 80M32 256h448" /></symbol><symbol  viewBox="0 0 512 512" id="icon-move"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m176 112 80-80 80 80M255.98 32l.02 448M176 400l80 80 80-80M400 176l80 80-80 80M112 176l-80 80 80 80M32 256h448" /></symbol><symbol  viewBox="0 0 512 512" id="icon-musical-note-outline"><path d="M240 343.31V424a32.28 32.28 0 0 1-21.88 30.65l-21.47 7.23c-25.9 8.71-52.65-10.75-52.65-38.32h0A34.29 34.29 0 0 1 167.25 391l50.87-17.12A32.29 32.29 0 0 0 240 343.24V92a16.13 16.13 0 0 1 12.06-15.66L360.49 48.2A6 6 0 0 1 368 54v57.76a16.13 16.13 0 0 1-12.12 15.67l-91.64 23.13A32.25 32.25 0 0 0 240 181.91v39.39" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-musical-note-sharp"><path d="M381.55 32.05c-18.13 4.28-126.57 31.07-156 38.19a2 2 0 0 0-1.55 1.94V353.3a2 2 0 0 1-1.32 1.88L182 369.88c-29.82 10.66-54 18.94-54 59.06 0 32.47 23.53 47.18 37.95 50a81.77 81.77 0 0 0 15 1.08c8.89 0 31-3.59 47.52-14.24C256 448 256 448 256 415.93V169.16a2 2 0 0 1 1.49-1.94l125-33a2 2 0 0 0 1.49-1.94V34a2 2 0 0 0-2.43-1.95Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-musical-note"><path d="M183.83 480a55.2 55.2 0 0 1-32.36-10.55A56.64 56.64 0 0 1 128 423.58a50.26 50.26 0 0 1 34.14-47.73L213 358.73a16.25 16.25 0 0 0 11-15.49V92a32.1 32.1 0 0 1 24.09-31.15l108.39-28.14A22 22 0 0 1 384 54v57.75a32.09 32.09 0 0 1-24.2 31.19l-91.65 23.13A16.24 16.24 0 0 0 256 181.91V424a48.22 48.22 0 0 1-32.78 45.81l-21.47 7.23a56 56 0 0 1-17.92 2.96Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-musical-notes-outline"><path d="M192 218v-6c0-14.84 10-27 24.24-30.59l174.59-46.68A20 20 0 0 1 416 154v22" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M416 295.94v80c0 13.91-8.93 25.59-22 30l-22 8c-25.9 8.72-52-10.42-52-38h0a33.37 33.37 0 0 1 23-32l51-18.15c13.07-4.4 22-15.94 22-29.85V58a10 10 0 0 0-12.6-9.61L204 102a16.48 16.48 0 0 0-12 16v226c0 13.91-8.93 25.6-22 30l-52 18c-13.88 4.68-22 17.22-22 32h0c0 27.58 26.52 46.55 52 38l22-8c13.07-4.4 22-16.08 22-30v-80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-musical-notes-sharp"><path d="M429.46 32.07c-23.6 6.53-205.55 58.81-250.54 71.43a4 4 0 0 0-2.92 3.83v247a2 2 0 0 1-1.33 1.89l-27.85 9.55c-19 7.44-66.82 16.68-66.82 59.19 0 35.54 24.63 51.54 45.86 54.28a52.06 52.06 0 0 0 7.81.8c7.37 0 36.38-7.08 53.3-18.08C208 448.25 208 448 208 412V202c0-.9.62-.84 1.48-1.07l188-51.92a2 2 0 0 1 2.53 2v155.54a2 2 0 0 1-1.36 1.89c-8.9 3-19.23 6.5-26.48 9.12C341.39 328.68 304 335.65 304 376c0 38.51 28.26 54.58 46.3 55.83a87.37 87.37 0 0 0 21.33-1c9-1.38 24.09-5.9 38.14-14.86C432 401.79 432 401.51 432 360V34a2 2 0 0 0-2.54-1.93Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-musical-notes"><path d="M421.84 37.37a25.86 25.86 0 0 0-22.6-4.46L199.92 86.49A32.3 32.3 0 0 0 176 118v226c0 6.74-4.36 12.56-11.11 14.83l-.12.05-52 18C92.88 383.53 80 402 80 423.91a55.54 55.54 0 0 0 23.23 45.63A54.78 54.78 0 0 0 135.34 480a55.82 55.82 0 0 0 17.75-2.93l.38-.13 21.84-7.94A47.84 47.84 0 0 0 208 423.91v-212c0-7.29 4.77-13.21 12.16-15.07l.21-.06L395 150.14a4 4 0 0 1 5 3.86v141.93c0 6.75-4.25 12.38-11.11 14.68l-.25.09-50.89 18.11A49.09 49.09 0 0 0 304 375.92a55.67 55.67 0 0 0 23.23 45.8 54.63 54.63 0 0 0 49.88 7.35l.36-.12 21.84-7.95A47.83 47.83 0 0 0 432 375.92V58a25.74 25.74 0 0 0-10.16-20.63Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-navigate-circle-outline"><path d="m336.76 161-186.53 82.35c-10.47 4.8-6.95 20.67 4.57 20.67H244a4 4 0 0 1 4 4v89.18c0 11.52 16 15 20.78 4.56L351 175.24A10.73 10.73 0 0 0 336.76 161Z" /><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-navigate-circle-sharp"><path d="M256 48A208.23 208.23 0 0 0 48 256c0 114.68 93.31 208 208 208a208.23 208.23 0 0 0 208-208c0-114.69-93.31-208-208-208Zm-8 361V264H103l259-114.11Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-navigate-circle"><path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48ZM351 175.24l-82.24 186.52c-4.79 10.47-20.78 7-20.78-4.56V268a4 4 0 0 0-4-4H154.8c-11.52 0-15-15.87-4.57-20.67L336.76 161A10.73 10.73 0 0 1 351 175.24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-navigate-outline"><path d="M448 64 64 240.14h200a8 8 0 0 1 8 8V448Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-navigate-sharp"><path d="M480 32 32 240h240v240L480 32z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-navigate"><path d="M272 464a16 16 0 0 1-16-16.42V264.13a8 8 0 0 0-8-8H64.41a16.31 16.31 0 0 1-15.49-10.65 16 16 0 0 1 8.41-19.87l384-176.15a16 16 0 0 1 21.22 21.19l-176 384A16 16 0 0 1 272 464Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-newspaper-outline"><path d="M368 415.86V72a24.07 24.07 0 0 0-24-24H72a24.07 24.07 0 0 0-24 24v352a40.12 40.12 0 0 0 40 40h328" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M416 464a48 48 0 0 1-48-48V128h72a24 24 0 0 1 24 24v264a48 48 0 0 1-48 48Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M240 128h64M240 192h64M112 256h192M112 320h192M112 384h192" /><path d="M176 208h-64a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-newspaper-sharp"><rect x="96" y="112" width="96" height="96" rx="16" ry="16" style="fill:none" /><path d="M468 112h-52v304a32 32 0 0 0 32 32 32 32 0 0 0 32-32V124a12 12 0 0 0-12-12Z" /><path d="M431.15 477.75A64.11 64.11 0 0 1 384 416V44a12 12 0 0 0-12-12H44a12 12 0 0 0-12 12v380a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 .3-2.25ZM96 208v-96h96v96Zm224 192H96v-32h224Zm0-64H96v-32h224Zm0-64H96v-32h224Zm0-64h-96v-32h96Zm0-64h-96v-32h96Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-newspaper"><path d="M439.91 112h-23.82a.09.09 0 0 0-.09.09V416a32 32 0 0 0 32 32 32 32 0 0 0 32-32V152.09A40.09 40.09 0 0 0 439.91 112Z" /><path d="M384 416V72a40 40 0 0 0-40-40H72a40 40 0 0 0-40 40v352a56 56 0 0 0 56 56h342.85a1.14 1.14 0 0 0 1.15-1.15 1.14 1.14 0 0 0-.85-1.1A64.11 64.11 0 0 1 384 416ZM96 128a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16h-64a16 16 0 0 1-16-16Zm208 272H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 368h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 400Zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 304h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 336Zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 112 240h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 272Zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 240 176h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 208Zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 240 112h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 144Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-notifications-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8 0-48.86-25.78-66.23-47-74.67a11.39 11.39 0 0 1-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 0 1-6.33 6.68c-21.24 8.46-47 25.8-47 74.67 0 53.33-11.54 61.46-27.87 80.8-6.77 8-.65 23 11.19 23H354C365.77 336 371.94 321 365.2 313ZM220.24 352a4 4 0 0 0-4 4.42C218.49 375.14 235.11 384 256 384c20.67 0 37.14-9.15 39.66-27.52a4 4 0 0 0-4-4.48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-notifications-circle-sharp"><path d="M295.68 351.43v.57h.32Z" /><path d="M256 384c22.28 0 39.36-10.63 39.66-32H216c0 21.75 17.53 32 40 32ZM295.67 352h.33l-.32-.57c0 .19-.01.38-.01.57Z" style="fill:none" /><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm0 336c-22.48 0-40-10.25-40-32h80c-.3 21.37-17.71 32-40 32Zm112-48H144v-28l28-36v-32.3c0-40.41 15.82-75.35 56-84.27l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-notifications-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm0 336c-20.9 0-37.52-8.86-39.75-27.58a4 4 0 0 1 4-4.42h71.45a4 4 0 0 1 4 4.48C293.15 374.85 276.68 384 256 384Zm98-48H158c-11.84 0-18-15-11.19-23 16.33-19.34 27.87-27.47 27.87-80.8 0-48.87 25.74-66.21 47-74.67a11.35 11.35 0 0 0 6.33-6.68C231.7 138.6 242.14 128 256 128s24.28 10.6 28 22.86a11.39 11.39 0 0 0 6.34 6.68c21.21 8.44 47 25.81 47 74.67 0 53.33 11.53 61.46 27.86 80.8 6.74 7.99.57 22.99-11.2 22.99Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-notifications-off-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M220.24 352a4 4 0 0 0-4 4.42C218.49 375.14 235.11 384 256 384s37.5-8.86 39.73-27.58a4 4 0 0 0-4-4.42ZM352 378a15.93 15.93 0 0 1-11.84-5.24l-192-212a16 16 0 0 1 23.68-21.52l192 212A16 16 0 0 1 352 378ZM174.68 232.21c0 53.33-11.54 61.46-27.87 80.8-6.77 8-.65 23 11.19 23h118.83a4 4 0 0 0 2.95-6.7l-98-106.87a4 4 0 0 0-6.94 2.52c-.1 2.33-.16 4.75-.16 7.25ZM365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8 0-48.86-25.78-66.23-47-74.67a11.39 11.39 0 0 1-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 0 1-6.33 6.68c-1.28.51-2.57 1.05-3.88 1.63a4 4 0 0 0-1.3 6.36L361 323.21a4 4 0 0 0 6.94-2.95 12 12 0 0 0-2.74-7.26Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-notifications-off-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48ZM144 308l28-36v-32.3a131.83 131.83 0 0 1 2.34-25.42L285.92 336H144Zm112.18 76C233.6 384 216 373.75 216 352h80c-.3 21.37-17.45 32-39.82 32Zm93.48-3.74-211-227 23.68-21.52 211 227ZM368 330.85l-.32-.38-155.5-169.63a73.4 73.4 0 0 1 15.82-5.41l4-27.43h48l4 27.43c40 8.92 56 44 56 84.27V272l28 36Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-notifications-off-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48ZM146.83 313c16.33-19.34 27.86-27.47 27.86-80.8q0-3.75.2-7.26a4 4 0 0 1 7-2.52l98 106.87a4 4 0 0 1-2.94 6.7H158C146.18 336 140.06 321 146.83 313Zm148.93 43.41C293.53 375.14 276.92 384 256 384s-37.51-8.86-39.75-27.58a4 4 0 0 1 4-4.42h71.53a4 4 0 0 1 3.98 4.42Zm67 17.42a16 16 0 0 1-22.6-1.08l-192-212a16 16 0 0 1 23.68-21.52l192 212a16 16 0 0 1-1.08 22.61ZM361 323.21 216.49 165.53a4 4 0 0 1 1.3-6.36c1.31-.58 2.61-1.12 3.89-1.63a11.33 11.33 0 0 0 6.32-6.68c3.72-12.26 14.15-22.86 28-22.86s24.29 10.6 28 22.86a11.34 11.34 0 0 0 6.34 6.68c21.21 8.44 47 25.81 47 74.67 0 53.33 11.54 61.46 27.87 80.8a12.09 12.09 0 0 1 2.76 7.25 4 4 0 0 1-6.97 2.95Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-notifications-off-outline"><path d="M128.51 204.59q-.37 6.15-.37 12.76C128.14 304 110 320 84.33 351.43 73.69 364.45 83 384 101.62 384H320M414.5 335.3c-18.48-23.45-30.62-47.05-30.62-118 0-79.3-40.52-107.57-73.88-121.3-4.43-1.82-8.6-6-9.95-10.55C294.21 65.54 277.82 48 256 48s-38.2 17.55-44 37.47c-1.35 4.6-5.52 8.71-10 10.53a149.57 149.57 0 0 0-18 8.79M320 384v16a64 64 0 0 1-128 0v-16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M448 448 64 64" /></symbol><symbol  viewBox="0 0 512 512" id="icon-notifications-off-sharp"><path d="m41.37 64 22.628-22.628L470.627 448l-22.628 22.627zM256 480a80.09 80.09 0 0 0 73.3-48H182.7a80.09 80.09 0 0 0 73.3 48ZM112 227.47V288l-48 64v48h268.12L115.87 183.75a236.75 236.75 0 0 0-3.87 43.72ZM448 352l-48-64v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48a117.45 117.45 0 0 0-41.95 18.17l282 282Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-notifications-off"><path d="M448 464a15.92 15.92 0 0 1-11.31-4.69l-384-384a16 16 0 0 1 22.62-22.62l384 384A16 16 0 0 1 448 464ZM440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 0 1-.81.65 157.88 157.88 0 0 0-21.88 11 8 8 0 0 0-1.49 12.49l261.78 261.74a8 8 0 0 0 13.6-6.63 35.39 35.39 0 0 0-7.84-18.5ZM112.14 217.35c0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H312.8a8 8 0 0 0 5.66-13.66l-192-192a8 8 0 0 0-13.62 5q-.7 8.69-.7 18.04ZM256 480a80.06 80.06 0 0 0 70.44-42.13 4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-notifications-outline"><path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57ZM320 384v16a64 64 0 0 1-128 0v-16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-notifications-sharp"><path d="M256 480a80.09 80.09 0 0 0 73.3-48H182.7a80.09 80.09 0 0 0 73.3 48ZM400 288v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48c-68.88 15.61-96 76.76-96 147.47V288l-48 64v48h384v-48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-notifications"><path d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 0 1-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 0 1-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 0 0-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 0 0-4.61-37.66ZM256 480a80.06 80.06 0 0 0 70.44-42.13 4 4 0 0 0-3.54-5.87H189.12a4 4 0 0 0-3.55 5.87A80.06 80.06 0 0 0 256 480Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-nuclear-outline"><circle cx="256" cy="256" r="192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="256" r="64" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M224 192 171 85M288 192l53-107M327.55 255.81l119.41.13M299.09 313.13l72.25 95.06M184.45 255.81l-119.41.13M212.91 313.13l-72.25 95.06" /></symbol><symbol  viewBox="0 0 512 512" id="icon-nuclear-sharp"><circle cx="256" cy="256" r="48" /><path d="m223.47 335.59-51.71 68a169.73 169.73 0 0 0 168.48 0l-51.71-68" style="fill:none" /><path d="M403.08 108.92a208 208 0 0 0-294.16 294.16 208 208 0 0 0 294.16-294.16ZM342 256a86.13 86.13 0 0 1-53.47 79.59l51.71 68a169.73 169.73 0 0 1-168.48 0l51.71-68a86 86 0 0 1-50.56-101.77l-85.48.09a170.21 170.21 0 0 1 73.83-119l37.94 76.59a85.78 85.78 0 0 1 113.6 0l37.94-76.59a170.21 170.21 0 0 1 73.83 119l-85.48-.09A85.87 85.87 0 0 1 342 256Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-nuclear"><path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48ZM429 239.92l-93.08-.1a2 2 0 0 1-1.95-1.57 80.08 80.08 0 0 0-27.44-44.17 2 2 0 0 1-.54-2.43l41.32-83.43a2 2 0 0 1 2.87-.81A176.2 176.2 0 0 1 431 237.71a2 2 0 0 1-2 2.21Zm-220.8 20.46a48 48 0 1 1 43.42 43.42 48 48 0 0 1-43.42-43.42Zm-43.55-152.16L206 191.65a2 2 0 0 1-.54 2.43A80.08 80.08 0 0 0 178 238.25a2 2 0 0 1-2 1.57l-93.08.1a2 2 0 0 1-2-2.21 176.2 176.2 0 0 1 80.82-130.3 2 2 0 0 1 2.91.81Zm-.37 295.34 56.31-74.09a2 2 0 0 1 2.43-.6 79.84 79.84 0 0 0 66 0 2 2 0 0 1 2.43.6l56.31 74.09a2 2 0 0 1-.54 2.92 175.65 175.65 0 0 1-182.36 0 2 2 0 0 1-.58-2.92Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-nutrition-outline"><path d="M352 128c-32.26-2.89-64 16-96 16s-63.75-19-96-16c-64 6-96 64-96 160 0 80 64 192 111.2 192s51.94-24 80.8-24 33.59 24 80.8 24S448 368 448 288c0-96-29-154-96-160Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M323.92 83.14c-21 21-45.66 27-58.82 28.79a8 8 0 0 1-9.1-8.73 97.6 97.6 0 0 1 28.61-59.33c22-22 46-26.9 58.72-27.85a8 8 0 0 1 8.67 8.92 98 98 0 0 1-28.08 58.2Z" /><ellipse cx="216" cy="304" rx="24" ry="48" /><ellipse cx="296" cy="304" rx="24" ry="48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-nutrition-sharp"><path d="M438.71 159.43c-17.6-28.31-45.5-43.8-85.28-47.37-22.82-2-50.23 4.94-72.25 10.55C271.26 125.14 260 128 256 128s-15.18-2.86-25-5.39c-22.08-5.65-49.56-12.69-72.45-10.54-38.53 3.61-66 19.19-84 47.62S48 229 48 288c0 61.28 29.53 114.58 47.13 140.89C116.82 461.34 149.25 496 175.2 496c18.57 0 34.12-7.23 47.82-13.64C243 473 256 472 256 472s11 0 31.94 10.11C301.65 488.73 317.3 496 336.8 496c26.58 0 59.08-34.69 80.63-67.15C434.82 402.65 464 349.52 464 288c0-60-8-100.83-25.29-128.57ZM216 352c-13.25 0-24-21.49-24-48s10.75-48 24-48 24 21.49 24 48-10.75 48-24 48Zm80 0c-13.25 0-24-21.49-24-48s10.75-48 24-48 24 21.49 24 48-10.75 48-24 48Z" /><path d="M323.72 82.76C353.68 52.82 352 16.18 352 16.14s-35.77-3.76-67.23 27.67S256.06 112 256.06 112s37.68.71 67.66-29.24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-nutrition"><path d="M439 166.29c-18.67-32.57-47.46-50.81-85.57-54.23-20.18-1.8-39 3.37-57.23 8.38-14.15 3.89-27.52 7.56-40.2 7.56s-26-3.68-40.06-7.57c-18.28-5-37.18-10.26-57.43-8.36-36.39 3.41-65.51 22.11-84.31 54.08C56.82 195.76 48 236.76 48 288c0 40.4 15 90.49 40 134 12.82 22.25 47 74 87.16 74 30.77 0 47.15-9.44 59.11-16.33 8.3-4.78 13.31-7.67 21.69-7.67s13.39 2.89 21.69 7.67c12 6.89 28.35 16.33 59.15 16.33 40.17 0 74.34-51.76 87.16-74 25.07-43.5 40-93.59 40-134 .04-52.57-8.14-92.38-24.96-121.71ZM216 352c-13.25 0-24-21.49-24-48s10.75-48 24-48 24 21.49 24 48-10.75 48-24 48Zm80 0c-13.25 0-24-21.49-24-48s10.75-48 24-48 24 21.49 24 48-10.75 48-24 48Z" /><path d="M265.1 111.93c13.16-1.75 37.86-7.83 58.83-28.79a98 98 0 0 0 28-58.2 8 8 0 0 0-8.55-8.94c-12.71.95-36.76 5.87-58.73 27.85A97.6 97.6 0 0 0 256 103.2a8 8 0 0 0 9.1 8.73Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-open-outline"><path d="M384 224v184a40 40 0 0 1-40 40H104a40 40 0 0 1-40-40V168a40 40 0 0 1 40-40h167.48M336 64h112v112M224 288 440 72" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-open-sharp"><path d="m201.37 288 176-176H48v352h352V134.63l-176 176L201.37 288z" /><path d="M320 48v32h89.37l-32 32L400 134.63l32-32V192h32V48H320z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-open"><path d="M224 304a16 16 0 0 1-11.31-27.31l157.94-157.94A55.7 55.7 0 0 0 344 112H104a56.06 56.06 0 0 0-56 56v240a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V168a55.7 55.7 0 0 0-6.75-26.63L235.31 299.31A15.92 15.92 0 0 1 224 304Z" /><path d="M448 48H336a16 16 0 0 0 0 32h73.37l-38.74 38.75a56.35 56.35 0 0 1 22.62 22.62L432 102.63V176a16 16 0 0 0 32 0V64a16 16 0 0 0-16-16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-options-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M368 128h80M64 128h240M368 384h80M64 384h240M208 256h240M64 256h80" /><circle cx="336" cy="128" r="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="176" cy="256" r="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="336" cy="384" r="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-options-sharp"><path d="M381.25 112a48 48 0 0 0-90.5 0H48v32h242.75a48 48 0 0 0 90.5 0H464v-32ZM176 208a48.09 48.09 0 0 0-45.25 32H48v32h82.75a48 48 0 0 0 90.5 0H464v-32H221.25A48.09 48.09 0 0 0 176 208ZM336 336a48.09 48.09 0 0 0-45.25 32H48v32h242.75a48 48 0 0 0 90.5 0H464v-32h-82.75A48.09 48.09 0 0 0 336 336Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-options"><path d="M64 144h226.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32h-66.75a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32ZM448 368h-66.75a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32h226.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32ZM448 240H221.25a48 48 0 0 0-90.5 0H64a16 16 0 0 0 0 32h66.75a48 48 0 0 0 90.5 0H448a16 16 0 0 0 0-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-paper-plane-outline"><path d="m53.12 199.94 400-151.39a8 8 0 0 1 10.33 10.33l-151.39 400a8 8 0 0 1-15-.34l-67.4-166.09a16 16 0 0 0-10.11-10.11L53.46 215a8 8 0 0 1-.34-15.06ZM460 52 227 285" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-paper-plane-sharp"><path d="M496 16 15.88 208 195 289 448 64 223 317l81 179L496 16z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-paper-plane"><path d="M473 39.05a24 24 0 0 0-25.5-5.46L47.47 185h-.08a24 24 0 0 0 1 45.16l.41.13 137.3 58.63a16 16 0 0 0 15.54-3.59L422 80a7.07 7.07 0 0 1 10 10L226.66 310.26a16 16 0 0 0-3.59 15.54l58.65 137.38c.06.2.12.38.19.57 3.2 9.27 11.3 15.81 21.09 16.25h1a24.63 24.63 0 0 0 23-15.46L478.39 64.62A24 24 0 0 0 473 39.05Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-partly-sunny-outline"><path d="M90.61 306.85A16.07 16.07 0 0 0 104 293.6C116.09 220.17 169.63 176 232 176c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0 0 12.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H106c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M384.8 271.4a80 80 0 1 0-123.55-92M464 208h32M336 48v32M222.86 94.86l22.63 22.63M449.14 94.86l-22.63 22.63" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-partly-sunny-sharp"><path d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91 15.24-13.68 36.17-23.21 59-26.84.06 0 .08 0 .09-.05 6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 0 1 232 160c30.23 0 58.48 9.39 81.71 27.17a142.69 142.69 0 0 1 45.36 60.66c29.41 4.82 54.72 17.11 73.19 35.54C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28Zm19-232.18ZM381.5 219.89a169.23 169.23 0 0 1 45.44 19A96 96 0 0 0 281 129.33q-2.85 2-5.54 4.2a162.47 162.47 0 0 1 57.73 28.23 174.53 174.53 0 0 1 48.31 58.13ZM448 192h64v32h-64zM320 32h32v64h-32zM255.35 129.63l12.45-12.45-44.62-44.63-22.63 22.63 33.17 33.17h.6a172 172 0 0 1 21.03 1.28ZM404.203 117.17l44.626-44.625 22.627 22.628-44.625 44.625z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-partly-sunny"><path d="M340 480H106c-29.5 0-54.92-7.83-73.53-22.64C11.23 440.44 0 415.35 0 384.8c0-26.66 10.08-49.8 29.14-66.91 15.24-13.68 36.17-23.21 59-26.84.06 0 .08 0 .09-.05 6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 0 1 232 160c30.23 0 58.48 9.39 81.71 27.17a142.24 142.24 0 0 1 42.19 53.21 16 16 0 0 0 11.19 9c26 5.61 48.4 17.29 65.17 34C453 304.11 464 331.71 464 363.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28Zm19-232.18ZM387.89 221.68a168.8 168.8 0 0 1 34.76 14.71 4 4 0 0 0 5.82-2.44 97 97 0 0 0 3.53-26.68c-.39-52.43-43.48-95.22-95.91-95.27A95.46 95.46 0 0 0 281 129.33h-.06a3.38 3.38 0 0 0 1 6 162.45 162.45 0 0 1 51.28 26.4 173.92 173.92 0 0 1 45.32 52.51 16 16 0 0 0 9.35 7.44ZM496 224h-32a16 16 0 0 1 0-32h32a16 16 0 0 1 0 32ZM336 96a16 16 0 0 1-16-16V48a16 16 0 0 1 32 0v32a16 16 0 0 1-16 16ZM245.49 133.49a15.92 15.92 0 0 1-11.31-4.69l-22.63-22.62a16 16 0 0 1 22.63-22.63l22.62 22.63a16 16 0 0 1-11.31 27.31ZM426.51 133.49a16 16 0 0 1-11.31-27.31l22.62-22.63a16 16 0 0 1 22.63 22.63l-22.63 22.62a15.92 15.92 0 0 1-11.31 4.69Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pause-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M208 192v128M304 192v128" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pause-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm-32 288h-32V176h32Zm96 0h-32V176h32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pause-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm-32 272a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0Zm96 0a16 16 0 0 1-32 0V192a16 16 0 0 1 32 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pause-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M176 96h16v320h-16zM320 96h16v320h-16z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pause-sharp"><path d="M224 432h-80V80h80ZM368 432h-80V80h80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pause"><path d="M208 432h-48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16ZM352 432h-48a16 16 0 0 1-16-16V96a16 16 0 0 1 16-16h48a16 16 0 0 1 16 16v320a16 16 0 0 1-16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-paw-outline"><path d="M457.74 170.1a30.26 30.26 0 0 0-11.16-2.1h-.4c-20.17.3-42.79 19.19-54.66 47.76-14.23 34.18-7.68 69.15 14.74 78.14a30.21 30.21 0 0 0 11.15 2.1c20.27 0 43.2-19 55.17-47.76 14.13-34.18 7.48-69.15-14.84-78.14ZM327.6 303.48C299.8 257.35 287.8 240 256 240s-43.9 17.46-71.7 63.48c-23.8 39.36-71.9 42.64-83.9 76.07a50.91 50.91 0 0 0-3.6 19.25c0 27.19 20.8 49.2 46.4 49.2 31.8 0 75.1-25.39 112.9-25.39S337 448 368.8 448c25.6 0 46.3-22 46.3-49.2a51 51 0 0 0-3.7-19.25c-12-33.55-60-36.71-83.8-76.07ZM192.51 196a26.53 26.53 0 0 0 4-.3c23.21-3.37 37.7-35.53 32.44-71.85C224 89.61 203.22 64 181.49 64a26.53 26.53 0 0 0-4 .3c-23.21 3.37-37.7 35.53-32.44 71.85C150 170.29 170.78 196 192.51 196ZM366.92 136.15c5.26-36.32-9.23-68.48-32.44-71.85a26.53 26.53 0 0 0-4-.3c-21.73 0-42.47 25.61-47.43 59.85-5.26 36.32 9.23 68.48 32.44 71.85a26.53 26.53 0 0 0 4 .3c21.73 0 42.51-25.71 47.43-59.85ZM105.77 293.9c22.39-9 28.93-44 14.72-78.14C108.53 187 85.62 168 65.38 168a30.21 30.21 0 0 0-11.15 2.1c-22.39 9-28.93 44-14.72 78.14C51.47 277 74.38 296 94.62 296a30.21 30.21 0 0 0 11.15-2.1Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-paw-sharp"><path d="M442.8 361.82c-8.8-25.1-29.31-37.82-49.11-50.12-17.23-10.71-33.5-20.83-44.14-39-29.33-50.33-45.44-80.7-93.49-80.7s-64.21 30.38-93.61 80.69c-10.65 18.21-27 28.35-44.25 39.08-19.8 12.31-40.27 25-49.1 50.05a78.06 78.06 0 0 0-5.1 28.29C64 430.85 96.45 464 132.4 464s83.31-18.13 123.76-18.13S343.31 464 379.71 464 448 430.85 448 390.11a78.3 78.3 0 0 0-5.2-28.29Z" /><ellipse cx="72" cy="216" rx="56" ry="72" /><ellipse cx="184" cy="120" rx="56" ry="72" /><ellipse cx="328" cy="120" rx="56" ry="72" /><ellipse cx="440" cy="216" rx="56" ry="72" /></symbol><symbol  viewBox="0 0 512 512" id="icon-paw"><path d="M490.39 182.75c-5.55-13.19-14.77-22.7-26.67-27.49l-.16-.06a46.46 46.46 0 0 0-17-3.2h-.64c-27.24.41-55.05 23.56-69.19 57.61-10.37 24.9-11.56 51.68-3.18 71.64 5.54 13.2 14.78 22.71 26.73 27.5l.13.05a46.53 46.53 0 0 0 17 3.2c27.5 0 55.6-23.15 70-57.65 10.24-24.87 11.37-51.63 2.98-71.6ZM381.55 329.61c-15.71-9.44-30.56-18.37-40.26-34.41C314.53 250.8 298.37 224 256 224s-58.57 26.8-85.39 71.2c-9.72 16.06-24.6 25-40.36 34.48-18.07 10.86-36.74 22.08-44.8 44.16a66.93 66.93 0 0 0-4.65 25c0 35.95 28 65.2 62.4 65.2 17.75 0 36.64-6.15 56.63-12.66 19.22-6.26 39.09-12.73 56.27-12.73s37 6.47 56.15 12.73C332.2 457.85 351 464 368.8 464c34.35 0 62.3-29.25 62.3-65.2a67 67 0 0 0-4.75-25c-8.06-22.1-26.74-33.33-44.8-44.19ZM150 188.85c11.9 14.93 27 23.15 42.52 23.15a42.88 42.88 0 0 0 6.33-.47c32.37-4.76 52.54-44.26 45.92-90C242 102.3 234.6 84.39 224 71.11 212.12 56.21 197 48 181.49 48a42.88 42.88 0 0 0-6.33.47c-32.37 4.76-52.54 44.26-45.92 90 2.76 19.2 10.16 37.09 20.76 50.38ZM313.16 211.53a42.88 42.88 0 0 0 6.33.47c15.53 0 30.62-8.22 42.52-23.15 10.59-13.29 17.95-31.18 20.75-50.4 6.62-45.72-13.55-85.22-45.92-90a42.88 42.88 0 0 0-6.33-.47C315 48 299.88 56.21 288 71.11c-10.6 13.28-18 31.19-20.76 50.44-6.62 45.72 13.55 85.22 45.92 89.98ZM111.59 308.8l.14-.05c11.93-4.79 21.16-14.29 26.69-27.48 8.38-20 7.2-46.75-3.15-71.65C120.94 175.16 92.85 152 65.38 152a46.4 46.4 0 0 0-17 3.2l-.14.05c-11.9 4.75-21.13 14.29-26.66 27.48-8.38 20-7.2 46.75 3.15 71.65C39.06 288.84 67.15 312 94.62 312a46.4 46.4 0 0 0 16.97-3.2Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pencil-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M364.13 125.25 87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 0 0 0-22.62h0a16 16 0 0 0-22.62 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pencil-sharp"><path d="M103 464H48v-55L358.14 98.09l55.77 55.78L103 464zM425.72 142 370 86.28l31.66-30.66C406.55 50.7 414.05 48 421 48a25.91 25.91 0 0 1 18.42 7.62l17 17A25.87 25.87 0 0 1 464 91c0 7-2.71 14.45-7.62 19.36Zm-7.52-70.83Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pencil"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" d="M358.62 129.28 86.49 402.08 70 442l39.92-16.49 272.8-272.13-24.1-24.1zM413.07 74.84l-11.79 11.78 24.1 24.1 11.79-11.79a16.51 16.51 0 0 0 0-23.34l-.75-.75a16.51 16.51 0 0 0-23.35 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-people-circle-outline"><path d="M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208Zm0-384c-97 0-176 79-176 176s79 176 176 176 176-78.95 176-176S353.05 80 256 80Z" /><path d="M323.67 292c-17.4 0-34.21-7.72-47.34-21.73a83.76 83.76 0 0 1-22-51.32c-1.47-20.7 4.88-39.75 17.88-53.62S303.38 144 323.67 144c20.14 0 38.37 7.62 51.33 21.46s19.47 33 18 53.51a84 84 0 0 1-22 51.3C357.86 284.28 341.06 292 323.67 292Zm55.81-74ZM163.82 295.36c-29.76 0-55.93-27.51-58.33-61.33-1.23-17.32 4.15-33.33 15.17-45.08s26.22-18 43.15-18 32.12 6.44 43.07 18.14 16.5 27.82 15.25 45c-2.44 33.77-28.6 61.27-58.31 61.27ZM420.37 355.28c-1.59-4.7-5.46-9.71-13.22-14.46-23.46-14.33-52.32-21.91-83.48-21.91-30.57 0-60.23 7.9-83.53 22.25-26.25 16.17-43.89 39.75-51 68.18-1.68 6.69-4.13 19.14-1.51 26.11a192.18 192.18 0 0 0 232.75-80.17ZM163.63 401.37c7.07-28.21 22.12-51.73 45.47-70.75a8 8 0 0 0-2.59-13.77c-12-3.83-25.7-5.88-42.69-5.88-23.82 0-49.11 6.45-68.14 18.17-5.4 3.33-10.7 4.61-14.78 5.75a192.84 192.84 0 0 0 77.78 86.64l1.79-.14a102.82 102.82 0 0 1 3.16-20.02Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-people-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm69.3 96.17a72.5 72.5 0 1 1-72.6 72.5 72.55 72.55 0 0 1 72.6-72.5Zm-155.1 26.36a59.32 59.32 0 1 1-59.4 59.32 59.35 59.35 0 0 1 59.4-59.32Zm-75.85 155c24.5-13.29 55.87-19.94 75.85-19.94 15 0 34.32 3 53.33 10.2a133.05 133.05 0 0 0-34 27.11c-13.19 15-20.76 32.92-20.76 50.83v15a177.06 177.06 0 0 1-74.42-83.15ZM256 432a175.12 175.12 0 0 1-59.4-10.33v-27.05c0-52.59 85.75-79.09 128.7-79.09 23 0 58.38 7.63 86.21 22.81A176.14 176.14 0 0 1 256 432Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-people-circle"><path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48Zm-3.68 152.11c.21-1.2.44-2.4.71-3.59a66.46 66.46 0 0 1 16.29-31.21c12.89-13.73 31.16-21.31 51.45-21.31a74.05 74.05 0 0 1 25.06 4.26 66.69 66.69 0 0 1 26.27 17.2 68.15 68.15 0 0 1 18 42.14 78.46 78.46 0 0 1 0 11.4 86.19 86.19 0 0 1-8.2 31q-.76 1.59-1.59 3.15c-1.11 2.07-2.3 4.1-3.58 6.06a79.47 79.47 0 0 1-8.63 11c-13.12 14-29.92 21.73-47.31 21.73a59.61 59.61 0 0 1-19.17-3.18 63.47 63.47 0 0 1-6.1-2.43 70.76 70.76 0 0 1-22.07-16.12 83.76 83.76 0 0 1-22-51.32q-.27-3.88-.18-7.68a75.62 75.62 0 0 1 1.05-11.08Zm-149.73 24.34a59.87 59.87 0 0 1 5.2-20.64 56.76 56.76 0 0 1 2.78-5.3 54.49 54.49 0 0 1 7.19-9.56 55.62 55.62 0 0 1 14-10.82 56.84 56.84 0 0 1 8.11-3.64 63.85 63.85 0 0 1 33.35-2.39 57 57 0 0 1 30.78 17 57.86 57.86 0 0 1 15.41 38.62c.05 2.11 0 4.23-.15 6.38a71.58 71.58 0 0 1-6 23.84 69.49 69.49 0 0 1-5.73 10.42 65.39 65.39 0 0 1-15.76 16.57c-1.5 1.07-3.06 2.07-4.67 3.07a54.21 54.21 0 0 1-10 4.65 49.31 49.31 0 0 1-16.2 2.76c-.93 0-1.86 0-2.78-.08a47.6 47.6 0 0 1-5.48-.62 51.19 51.19 0 0 1-5.35-1.23 53.54 53.54 0 0 1-7.72-2.89c-.84-.39-1.66-.8-2.48-1.23-18-9.49-31.57-29.16-34.23-52.12-.12-1.05-.22-2.1-.29-3.16a66.59 66.59 0 0 1 .02-9.63Zm53.92 178.6a177.27 177.27 0 0 1-61.94-70.65 4 4 0 0 1 1.62-5.26C117.67 316.69 141.4 311 163.82 311c17 0 30.7 2 42.69 5.88a8 8 0 0 1 2.59 13.77c-23.35 19-38.4 42.54-45.47 70.75a2.77 2.77 0 0 1-4.22 1.65ZM256 432a175.12 175.12 0 0 1-65.7-12.72 4 4 0 0 1-2.4-4.46c.4-2.05.84-3.92 1.23-5.48 7.12-28.43 24.76-52 51-68.18 23.29-14.35 53-22.25 83.52-22.25 31.16 0 60 7.58 83.48 21.91a2.72 2.72 0 0 1 .91 3.67A176.1 176.1 0 0 1 256 432Z" /><path d="M161 295.28a47.6 47.6 0 0 1-5.48-.62 47.6 47.6 0 0 0 5.48.62ZM134.64 178.13a55.62 55.62 0 0 0-14 10.82 54.49 54.49 0 0 0-7.19 9.56 54.49 54.49 0 0 1 7.19-9.56 55.62 55.62 0 0 1 14-10.82ZM216.17 257.89a71.58 71.58 0 0 0 6-23.84c.15-2.15.2-4.27.15-6.38q.08 3.15-.15 6.38a71.58 71.58 0 0 1-6 23.84ZM134.64 178.13a56.84 56.84 0 0 1 8.11-3.64 56.84 56.84 0 0 0-8.11 3.64ZM150.21 293.43a53.54 53.54 0 0 1-7.72-2.89 53.54 53.54 0 0 0 7.72 2.89ZM105.78 237.19c2.66 23 16.26 42.63 34.23 52.12-18.01-9.49-31.57-29.16-34.23-52.12ZM254.34 219a83.76 83.76 0 0 0 22 51.32 70.76 70.76 0 0 0 22.07 16.12 70.76 70.76 0 0 1-22.07-16.12 83.76 83.76 0 0 1-22-51.32q-.27-3.88-.18-7.68-.09 3.75.18 7.68ZM304.5 288.82a63.47 63.47 0 0 1-6.1-2.43 63.47 63.47 0 0 0 6.1 2.43ZM255.93 196.54a66.46 66.46 0 0 1 16.29-31.21 66.46 66.46 0 0 0-16.29 31.21ZM375 165.46a68.15 68.15 0 0 1 18 42.14 68.15 68.15 0 0 0-18-42.14 66.69 66.69 0 0 0-26.27-17.2 66.69 66.69 0 0 1 26.27 17.2ZM393 219a86.19 86.19 0 0 1-8.2 31 86.19 86.19 0 0 0 8.2-31ZM254.16 211.27a75.62 75.62 0 0 1 1.06-11.14 75.62 75.62 0 0 0-1.06 11.14ZM383.19 253.16ZM206.88 189.05a57.86 57.86 0 0 1 15.41 38.62 57.86 57.86 0 0 0-15.41-38.62 57 57 0 0 0-30.78-17 57 57 0 0 1 30.78 17ZM190 288a54.21 54.21 0 0 1-10 4.65 54.21 54.21 0 0 0 10-4.65ZM105.49 224.45a59.87 59.87 0 0 1 5.2-20.64 59.87 59.87 0 0 0-5.2 20.64ZM194.68 284.88C193.17 286 191.61 287 190 288c1.61-1 3.17-2 4.68-3.12ZM216.17 257.89a69.49 69.49 0 0 1-5.73 10.42 69.49 69.49 0 0 0 5.73-10.42ZM110.69 203.81a56.76 56.76 0 0 1 2.78-5.3 56.76 56.76 0 0 0-2.78 5.3ZM194.68 284.88a65.39 65.39 0 0 0 15.76-16.57 65.39 65.39 0 0 1-15.76 16.57Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-people-outline"><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-people-sharp"><circle cx="152" cy="184" r="72" /><path d="M234 296c-28.16-14.3-59.24-20-82-20-44.58 0-136 27.34-136 82v42h150v-16.07c0-19 8-38.05 22-53.93 11.17-12.68 26.81-24.45 46-34Z" /><path d="M340 288c-52.07 0-156 32.16-156 96v48h312v-48c0-63.84-103.93-96-156-96Z" /><circle cx="340" cy="168" r="88" /></symbol><symbol  viewBox="0 0 512 512" id="icon-people"><path d="M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256Zm66-88ZM467.83 432H204.18a27.71 27.71 0 0 1-22-10.67 30.22 30.22 0 0 1-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 0 1-5.32 25.78A27.68 27.68 0 0 1 467.83 432ZM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91ZM212.66 291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 0 0 4.79 23.36A25.32 25.32 0 0 0 41.72 400h111a8 8 0 0 0 7.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 0 0-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-person-add-outline"><path d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M288 304c-87 0-175.3 48-191.64 138.6-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M88 176v112M144 232H32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-person-add-sharp"><path d="M106 304v-54h54v-36h-54v-54H70v54H16v36h54v54h36z" /><circle cx="288" cy="144" r="112" /><path d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-person-add"><path d="M288 256c52.79 0 99.43-49.71 104-110.82 2.27-30.7-7.36-59.33-27.12-80.6C345.33 43.57 318 32 288 32c-30.24 0-57.59 11.5-77 32.38-19.63 21.11-29.2 49.8-27 80.78C188.49 206.28 235.12 256 288 256ZM495.38 439.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42 301.5 335.83 288 288 288s-94.42 13.5-131.19 38c-41.4 27.6-67.75 66.93-76.19 113.75-1.93 10.73.69 21.34 7.19 29.11A30.94 30.94 0 0 0 112 480h352a30.94 30.94 0 0 0 24.21-11.13c6.48-7.77 9.1-18.38 7.17-29.11ZM104 288v-40h40a16 16 0 0 0 0-32h-40v-40a16 16 0 0 0-32 0v40H32a16 16 0 0 0 0 32h40v40a16 16 0 0 0 32 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-person-circle-outline"><path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48Zm126.42 327.25a4 4 0 0 1-6.14-.32 124.27 124.27 0 0 0-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 0 0-32.35 29.58 4 4 0 0 1-6.14.32A175.32 175.32 0 0 1 80 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 0 1-46.68 119.25Z" /><path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-person-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm2 96a72 72 0 1 1-72 72 72 72 0 0 1 72-72Zm-2 288a175.55 175.55 0 0 1-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 0 1 256 432Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-person-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93ZM256 432a175.49 175.49 0 0 1-126-53.22 122.91 122.91 0 0 1 35.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.87 122.87 0 0 1 382 378.78 175.45 175.45 0 0 1 256 432Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-person-outline"><path d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-person-remove-outline"><path d="M376 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M288 304c-87 0-175.3 48-191.64 138.6-2 10.92 4.21 21.4 15.65 21.4H464c11.44 0 17.62-10.48 15.65-21.4C463.3 352 375 304 288 304Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M144 232H32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-person-remove-sharp"><path d="M16 214h144v36H16z" /><circle cx="288" cy="144" r="112" /><path d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-person-remove"><path d="M288 256c52.79 0 99.43-49.71 104-110.82 2.27-30.7-7.36-59.33-27.12-80.6C345.33 43.57 318 32 288 32c-30.24 0-57.59 11.5-77 32.38-19.63 21.11-29.2 49.8-27 80.78C188.49 206.28 235.12 256 288 256ZM495.38 439.76c-8.44-46.82-34.79-86.15-76.19-113.75C382.42 301.5 335.83 288 288 288s-94.42 13.5-131.19 38c-41.4 27.6-67.75 66.93-76.19 113.75-1.93 10.73.69 21.34 7.19 29.11A30.94 30.94 0 0 0 112 480h352a30.94 30.94 0 0 0 24.21-11.13c6.48-7.77 9.1-18.38 7.17-29.11ZM144 216H32a16 16 0 0 0 0 32h112a16 16 0 0 0 0-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-person-sharp"><path d="M256 256a112 112 0 1 0-112-112 112 112 0 0 0 112 112Zm0 32c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-person"><path d="M332.64 64.58C313.18 43.57 286 32 256 32c-30.16 0-57.43 11.5-76.8 32.38-19.58 21.11-29.12 49.8-26.88 80.78C156.76 206.28 203.27 256 256 256s99.16-49.71 103.67-110.82c2.27-30.7-7.33-59.33-27.03-80.6ZM432 480H80a31 31 0 0 1-24.2-11.13c-6.5-7.77-9.12-18.38-7.18-29.11C57.06 392.94 83.4 353.61 124.8 326c36.78-24.51 83.37-38 131.2-38s94.42 13.5 131.2 38c41.4 27.6 67.74 66.93 76.18 113.75 1.94 10.73-.68 21.34-7.18 29.11A31 31 0 0 1 432 480Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-phone-landscape-outline"><rect x="128" y="16" width="256" height="480" rx="48" ry="48" transform="rotate(-90 256 256)" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M16 336v-24a8 8 0 0 1 8-8h0a16 16 0 0 0 16-16v-64a16 16 0 0 0-16-16h0a8 8 0 0 1-8-8v-24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-phone-landscape-sharp"><path d="M0 130v252a18 18 0 0 0 18 18h476a18 18 0 0 0 18-18V130a18 18 0 0 0-18-18H18a18 18 0 0 0-18 18Zm448 234H64V148h384Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-phone-landscape"><path d="M0 176v160a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V176a64 64 0 0 0-64-64H64a64 64 0 0 0-64 64Zm448-32a32 32 0 0 1 32 32v160a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32v-11.35a7.94 7.94 0 0 1 4.75-7.3A32 32 0 0 0 56 288v-64a32 32 0 0 0-19.25-29.35 7.94 7.94 0 0 1-4.75-7.3V176a32 32 0 0 1 32-32Z" /><path d="M48 176a11.88 11.88 0 0 0 4.69 9.53A48 48 0 0 1 72 224v64a48 48 0 0 1-19.31 38.47A11.88 11.88 0 0 0 48 336a16 16 0 0 0 16 16h384a16 16 0 0 0 16-16V176a16 16 0 0 0-16-16H64a16 16 0 0 0-16 16Z" /><path d="M0 176v160a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V176a64 64 0 0 0-64-64H64a64 64 0 0 0-64 64Zm448-32a32 32 0 0 1 32 32v160a32 32 0 0 1-32 32H64a32 32 0 0 1-32-32v-11.35a7.94 7.94 0 0 1 4.75-7.3A32 32 0 0 0 56 288v-64a32 32 0 0 0-19.25-29.35 7.94 7.94 0 0 1-4.75-7.3V176a32 32 0 0 1 32-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-phone-portrait-outline"><rect x="128" y="16" width="256" height="480" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M176 16h24a8 8 0 0 1 8 8h0a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16h0a8 8 0 0 1 8-8h24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-phone-portrait-sharp"><path d="M382 0H130a18 18 0 0 0-18 18v476a18 18 0 0 0 18 18h252a18 18 0 0 0 18-18V18a18 18 0 0 0-18-18ZM148 448V64h216v384Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-phone-portrait"><path d="M336 0H176a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h160a64 64 0 0 0 64-64V64a64 64 0 0 0-64-64Zm32 448a32 32 0 0 1-32 32H176a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h11.35a7.94 7.94 0 0 1 7.3 4.75A32 32 0 0 0 224 56h64a32 32 0 0 0 29.35-19.25 7.94 7.94 0 0 1 7.3-4.75H336a32 32 0 0 1 32 32Z" /><path d="M336 48a11.88 11.88 0 0 0-9.53 4.69A48 48 0 0 1 288 72h-64a48 48 0 0 1-38.47-19.31A11.88 11.88 0 0 0 176 48a16 16 0 0 0-16 16v384a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16Z" /><path d="M336 0H176a64 64 0 0 0-64 64v384a64 64 0 0 0 64 64h160a64 64 0 0 0 64-64V64a64 64 0 0 0-64-64Zm32 448a32 32 0 0 1-32 32H176a32 32 0 0 1-32-32V64a32 32 0 0 1 32-32h11.35a7.94 7.94 0 0 1 7.3 4.75A32 32 0 0 0 224 56h64a32 32 0 0 0 29.35-19.25 7.94 7.94 0 0 1 7.3-4.75H336a32 32 0 0 1 32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pie-chart-outline"><path d="M256.05 80.65Q263.94 80 272 80c106 0 192 86 192 192s-86 192-192 192A192.09 192.09 0 0 1 89.12 330.65" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path d="M256 48C141.12 48 48 141.12 48 256a207.29 207.29 0 0 0 18.09 85L256 256Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pie-chart-sharp"><path d="m58 362.09-6.51-14.59A224 224 0 0 1 256 32h16v234.37Z" /><path d="M304 66.46v220.65L94.62 380.78A208.31 208.31 0 0 0 272 480c114.69 0 208-93.31 208-208 0-103.81-76.45-190.1-176-205.54Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pie-chart"><path d="M66.1 357a16 16 0 0 1-14.61-9.46A224 224 0 0 1 256 32a16 16 0 0 1 16 16v208a16 16 0 0 1-9.47 14.61l-189.9 84.95A15.93 15.93 0 0 1 66.1 357Z" /><path d="M313.59 68.18A8 8 0 0 0 304 76v180a48.07 48.07 0 0 1-28.4 43.82L103.13 377a8 8 0 0 0-3.35 11.81 208.42 208.42 0 0 0 48.46 50.41A206.32 206.32 0 0 0 272 480c114.69 0 208-93.31 208-208 0-100.45-71.58-184.5-166.41-203.82Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pin-outline"><circle cx="256" cy="96" r="64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M272 164a9 9 0 0 0-9-9h-14a9 9 0 0 0-9 9v293.56a32.09 32.09 0 0 0 2.49 12.38l10.07 24a3.92 3.92 0 0 0 6.88 0l10.07-24a32.09 32.09 0 0 0 2.49-12.38Z" /><circle cx="280" cy="72" r="24" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pin-sharp"><path d="M339 99a83 83 0 1 0-102 80.8V464l19 32 19-32V179.8A83.28 83.28 0 0 0 339 99Zm-59-6a21 21 0 1 1 21-21 21 21 0 0 1-21 21Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pin"><path d="M336 96a80 80 0 1 0-96 78.39v283.17a32.09 32.09 0 0 0 2.49 12.38l10.07 24a3.92 3.92 0 0 0 6.88 0l10.07-24a32.09 32.09 0 0 0 2.49-12.38V174.39A80.13 80.13 0 0 0 336 96Zm-56 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pint-outline"><path d="M132.43 162c-6.24-34-4.49-45.55-3.07-68.39L132.27 47a16 16 0 0 1 15.94-15h215.57a16 16 0 0 1 15.94 15l2.91 46.61c1.43 22.86 3.19 34.39-3.06 68.45-5.93 32.29-43.71 133.27-43.71 238.32V472a8 8 0 0 1-8 8H184.12a8 8 0 0 1-8-8v-71.63c.01-92.47-37.46-204.3-43.69-238.37ZM135.21 96h241.58" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pint-sharp"><path d="M399 99.29 394 16H118.45L113 99.26c-1.29 19.24-2.23 33.14 3.73 65.66 1.67 9.11 5.22 22.66 9.73 39.82 12.61 48 33.71 128.36 33.71 195.63V496h191.68v-95.62c0-77.09 21.31-153.29 34-198.81 4.38-15.63 7.83-28 9.41-36.62 6.01-32.51 5.07-46.42 3.74-65.66ZM146.23 80l2-32h215.52l2 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pint"><path d="M399 99.29c-.15-2.13-.3-4.35-.44-6.68L395.69 46a32 32 0 0 0-31.91-30H148.21a32 32 0 0 0-31.91 30l-2.91 46.63c-.14 2.31-.29 4.51-.43 6.62-1.29 19.24-2.23 33.14 3.73 65.66 1.67 9.11 5.22 22.66 9.73 39.82 12.61 48 33.71 128.36 33.71 195.63V472a24 24 0 0 0 24 24h143.74a24 24 0 0 0 24-24v-71.62c0-77.09 21.31-153.29 34-198.81 4.38-15.63 7.83-28 9.41-36.62 5.99-32.51 5.05-46.42 3.72-65.66Zm-35-47.54 1.5 24a4 4 0 0 1-4 4.25h-211a4 4 0 0 1-4-4.25l1.48-24A4 4 0 0 1 152 48h208a4 4 0 0 1 4 3.75Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pizza-outline"><path d="M404.76 123.08C358.37 104.18 309.69 96 256 96s-106.1 9-148.9 26.68c-8.08 3.3-15.26 9-10.07 19.5C101.24 150.71 203 375 241.66 455a15.94 15.94 0 0 0 28.72 0l144.05-312.22c3.19-6.9.9-15.4-9.67-19.7Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M436.38 82.68C384.31 62.08 320.17 48 256 48S128.65 60.78 75.48 82.08C70.79 84 62 88.43 64.41 95.88L74.09 120c4 8.2 8.67 8.2 15.06 8.2 1.79 0 4.29-1 7.28-2.18A442.46 442.46 0 0 1 256 96c56.76 0 114.91 12 159.6 30 3.59 1.4 5.59 2.18 7.28 2.18 6.58 0 10.38 2.19 15-8.1L447.65 96c2.01-6-4.99-10.82-11.27-13.32Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="192" cy="192" r="32" /><circle cx="320" cy="208" r="32" /><circle cx="256" cy="320" r="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pizza-sharp"><path d="M442.3 67.82C383.92 44.72 317.78 32 256 32c-63.57 0-129.8 12.51-186.56 35.25C49.18 75.48 42 80 42 80l22 44 37.53-16.14C147.58 89.53 199.19 80 256.51 80c57.49 0 108.09 9.23 154.75 28.25L448 124l22-44s-7-4-27.7-12.18Z" /><ellipse cx="320.48" cy="207.99" rx="31.97" ry="32.03" transform="rotate(-44.98 320.503 207.996)" style="fill:none" /><ellipse cx="192.48" cy="191.99" rx="31.97" ry="32.03" transform="rotate(-44.98 192.49 191.992)" style="fill:none" /><ellipse cx="256.48" cy="319.99" rx="31.97" ry="32.03" transform="rotate(-44.98 256.505 320)" style="fill:none" /><path d="M409.66 140.85C364.15 122.52 308.16 112 256 112a425 425 0 0 0-153.7 28.9c-.25.1-9.24 4.23-19 8.71 7.46 16.22 18 39.16 22.2 48.33L256 480l173.74-330.84-19.92-8.24Zm-185.25 53.22a32 32 0 1 1-34-34 32.12 32.12 0 0 1 34 34Zm64 128a32 32 0 1 1-34-34 32.12 32.12 0 0 1 34 34Zm64-112a32 32 0 1 1-34-34 32.12 32.12 0 0 1 34 34Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pizza"><path d="M441.82 67.83C383.44 44.73 317.3 32 255.56 32 192 32 125.76 44.53 69 67.26 48.7 75.49 45.21 90 48.71 100.82L52.78 111a16 16 0 0 0 21.31 8.69c10.8-4.76 23.93-10.54 27-11.78C145.1 89.64 198.71 80 256 80c57.47 0 108.09 9.24 154.76 28.25 4.42 1.8 14.88 6.42 26.17 11.46a16 16 0 0 0 21.35-8.59L462 102l.34-.9c3.45-10.21.14-25.05-20.52-33.27Z" /><path d="M409.18 140.86C363.67 122.53 307.68 112 255.56 112a425 425 0 0 0-153.74 28.89c-.53.21-2.06.88-4.29 1.88a16 16 0 0 0-8 21.27c4 8.71 9.42 20.58 15.5 33.89C137.94 270 199.21 404 227.26 462A31.74 31.74 0 0 0 256 480a31.73 31.73 0 0 0 28.76-18.06l.06-.13 137.3-297.57a15.94 15.94 0 0 0-8.31-21.45c-2.26-.95-3.85-1.61-4.5-1.87Zm-215.1 83.07a32 32 0 1 1 29.85-29.85 32 32 0 0 1-29.85 29.85Zm64 128a32 32 0 1 1 29.85-29.85 32 32 0 0 1-29.85 29.85Zm64-112a32 32 0 1 1 29.85-29.85 32 32 0 0 1-29.85 29.85Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-planet-outline"><path d="M413.48 284.46c58.87 47.24 91.61 89 80.31 108.55-17.85 30.85-138.78-5.48-270.1-81.15S.37 149.84 18.21 119c11.16-19.28 62.58-12.32 131.64 14.09" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="256" r="160" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-planet-sharp"><path d="M81 274.71C90.36 363 165.26 432 256 432a174.91 174.91 0 0 0 71.49-15.19c-40.3-16.53-84.05-38.17-127.77-63.36C157 328.86 115.84 301.5 81 274.71ZM492.72 339.51c-8.5-11.31-20-23.8-34-37a205.25 205.25 0 0 1-11 34c28.72 29.5 33.2 45.34 32.17 48.45-2 2.23-17.05 6.89-58.15-3.53q-8.83-2.24-19.32-5.46-6.76-2.08-13.79-4.49a176.76 176.76 0 0 0 19.54-27.25c.17-.29.35-.58.52-.88A175.39 175.39 0 0 0 432 256a178.87 178.87 0 0 0-1-19c-9.57-88.17-84.4-157-175-157a175.37 175.37 0 0 0-106.4 35.89 177.4 177.4 0 0 0-45.83 51.84c-.16.29-.34.58-.51.87a175.48 175.48 0 0 0-13.83 30.52q-5.59-4.87-10.79-9.67c-5.39-5-10.17-9.63-14.42-14-29.57-30.26-33.09-45.61-32.16-48.45 2.16-2.43 18.1-6.54 58.13 3.55a209.88 209.88 0 0 1 24-26.56c-18.86-5.61-35.79-9.35-50.05-11C33.41 89.47 13.3 95.52 4.35 111c-3.24 5.58-6.35 15.09-2.72 28.6C7 159.66 26.14 184 53.23 209.5c8.63 8.13 18.06 16.37 28.12 24.64 7.32 6 15 12.06 22.9 18.08q7.91 6 16.15 12T137.1 276c25.41 17.61 52.26 34.52 78.59 49.69q14.34 8.26 28.64 16t28.37 14.81c21.9 11 43.35 20.92 63.86 29.43q13.19 5.48 25.81 10.16c11.89 4.42 23.37 8.31 34.31 11.59l1.1.33c25.73 7.66 47.42 11.69 64.48 12H464c21.64 0 36.3-6.38 43.58-19 9.09-15.62 4.08-36.32-14.86-61.5Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-planet"><path d="M96.85 286.62a8 8 0 0 0-12.53 8.25C102.07 373.28 172.3 432 256 432a175.31 175.31 0 0 0 52.41-8 8 8 0 0 0 .79-15 1120 1120 0 0 1-109.48-55.61 1126.24 1126.24 0 0 1-102.87-66.77ZM492.72 339.51c-4.19-5.58-9.11-11.44-14.7-17.53a15.83 15.83 0 0 0-26.56 5.13c0 .16-.11.31-.17.47a15.75 15.75 0 0 0 3.15 16.06c22.74 25 26.42 38.51 25.48 41.36-2 2.23-17.05 6.89-58.15-3.53q-8.83-2.24-19.32-5.46-6.76-2.08-13.79-4.49a176.76 176.76 0 0 0 19.54-27.25c.17-.29.35-.58.52-.88A175.39 175.39 0 0 0 432 256a178.87 178.87 0 0 0-1-19c-9.57-88.17-84.4-157-175-157a175.37 175.37 0 0 0-106.4 35.89 177.4 177.4 0 0 0-45.83 51.84c-.16.29-.34.58-.51.87a175.48 175.48 0 0 0-13.83 30.52q-5.59-4.87-10.79-9.67c-5.39-5-10.17-9.63-14.42-14-29.57-30.26-33.09-45.61-32.16-48.45 2-2.23 15.54-5.87 48.62 1.31A15.82 15.82 0 0 0 96.22 123l.36-.44a15.74 15.74 0 0 0-8.67-25.43A237.38 237.38 0 0 0 64.13 93c-30.72-3.53-50.83 2.52-59.78 18-3.24 5.58-6.35 15.09-2.72 28.6C7 159.66 26.14 184 53.23 209.5c8.63 8.13 18.06 16.37 28.12 24.64 7.32 6 15 12.06 22.9 18.08q7.91 6 16.15 12T137.1 276c25.41 17.61 52.26 34.52 78.59 49.69q14.34 8.26 28.64 16t28.37 14.81c21.9 11 43.35 20.92 63.86 29.43q13.19 5.48 25.81 10.16c11.89 4.42 23.37 8.31 34.31 11.59l1.1.33c25.73 7.66 47.42 11.69 64.48 12H464c21.64 0 36.3-6.38 43.58-19 9.09-15.62 4.08-36.32-14.86-61.5Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-back-circle-outline"><path d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="m117.23 246.7 114.45-69.14a10.78 10.78 0 0 1 16.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0 1 16.32 9.31v138.26a10.78 10.78 0 0 1-16.32 9.31L248 271.81v53.32a10.78 10.78 0 0 1-16.32 9.31L117.23 265.3a10.89 10.89 0 0 1 0-18.6Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-back-circle-sharp"><path d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256Zm63.47 0L248 168v72.16l120-72.48v176.45l-120-72.32v71.44Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-back-circle"><path d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256Zm69.23-9.3 114.45-69.14a10.78 10.78 0 0 1 16.32 9.31v53.32l103.68-62.63a10.78 10.78 0 0 1 16.32 9.31v138.26a10.78 10.78 0 0 1-16.32 9.31L248 271.81v53.32a10.78 10.78 0 0 1-16.32 9.31L117.23 265.3a10.89 10.89 0 0 1 0-18.6Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-back-outline"><path d="M480 145.52v221c0 13.28-13 21.72-23.63 15.35L267.5 268.8c-9.24-5.53-9.24-20.07 0-25.6l188.87-113C467 123.8 480 132.24 480 145.52ZM251.43 145.52v221c0 13.28-13 21.72-23.63 15.35L38.93 268.8c-9.24-5.53-9.24-20.07 0-25.6l188.87-113c10.64-6.4 23.63 2.04 23.63 15.32Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-back-sharp"><path d="M496 400 256 256l240-144v288zM256 400 16 256l240-144v288z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-back"><path d="m30.71 229.47 188.87-113a30.54 30.54 0 0 1 31.09-.39 33.74 33.74 0 0 1 16.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0 1 31.09-.39A33.74 33.74 0 0 1 496 145.52v221A33.73 33.73 0 0 1 479.24 396a30.54 30.54 0 0 1-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 0 1 250.67 396a30.54 30.54 0 0 1-31.09-.39l-188.87-113a31.27 31.27 0 0 1 0-53Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="m216.32 334.44 114.45-69.14a10.89 10.89 0 0 0 0-18.6l-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm-56 296V168l144 88Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm74.77 217.3-114.45 69.14a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31l114.45 69.14a10.89 10.89 0 0 1 0 18.6Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-forward-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="m394.77 246.7-114.45-69.14a10.78 10.78 0 0 0-16.32 9.31v53.32l-103.68-62.63a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31L264 271.81v53.32a10.78 10.78 0 0 0 16.32 9.31l114.45-69.14a10.89 10.89 0 0 0 0-18.6Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-forward-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm8 295.25v-71.44l-120 72.32V167.71l120 72.48V168l136.53 88Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-forward-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm138.77 217.3-114.45 69.14a10.78 10.78 0 0 1-16.32-9.31v-53.32l-103.68 62.63a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31L264 240.19v-53.32a10.78 10.78 0 0 1 16.32-9.31l114.45 69.14a10.89 10.89 0 0 1 0 18.6Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-forward-outline"><path d="M32 145.52v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113C45 123.8 32 132.24 32 145.52ZM260.57 145.52v221c0 13.28 13 21.72 23.63 15.35l188.87-113c9.24-5.53 9.24-20.07 0-25.6l-188.87-113c-10.64-6.47-23.63 1.97-23.63 15.25Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-forward-sharp"><path d="m16 400 240-144L16 112v288zM256 400l240-144-240-144v288z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-forward"><path d="m481.29 229.47-188.87-113a30.54 30.54 0 0 0-31.09-.39 33.74 33.74 0 0 0-16.76 29.47v79.05L63.85 116.44a30.54 30.54 0 0 0-31.09-.39A33.74 33.74 0 0 0 16 145.52v221A33.74 33.74 0 0 0 32.76 396a30.54 30.54 0 0 0 31.09-.39L244.57 287.4v79.08A33.74 33.74 0 0 0 261.33 396a30.54 30.54 0 0 0 31.09-.39l188.87-113a31.27 31.27 0 0 0 0-53Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-outline"><path d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-sharp"><path d="m96 448 320-192L96 64v384z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-skip-back-circle-outline"><path d="M256 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M192 176a16 16 0 0 1 16 16v53l111.68-67.46a10.78 10.78 0 0 1 16.32 9.33v138.26a10.78 10.78 0 0 1-16.32 9.31L208 267v53a16 16 0 0 1-32 0V192a16 16 0 0 1 16-16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-skip-back-circle-sharp"><path d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256Zm128-80h32v69l128-77.53v176.9L208 267v69h-32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-skip-back-circle"><path d="M48 256c0 114.69 93.31 208 208 208s208-93.31 208-208S370.69 48 256 48 48 141.31 48 256Zm128-64a16 16 0 0 1 32 0v53l111.68-67.46a10.78 10.78 0 0 1 16.32 9.33v138.26a10.78 10.78 0 0 1-16.32 9.31L208 267v53a16 16 0 0 1-32 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-skip-back-outline"><path d="M400 111v290c0 17.44-17 28.52-31 20.16L121.09 272.79c-12.12-7.25-12.12-26.33 0-33.58L369 90.84c14-8.36 31 2.72 31 20.16Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M112 80v352" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-skip-back-sharp"><path d="M143.47 64v163.52L416 64v384L143.47 284.48V448H96V64h47.47z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-skip-back"><path d="M112 64a16 16 0 0 1 16 16v136.43L360.77 77.11a35.13 35.13 0 0 1 35.77-.44c12 6.8 19.46 20 19.46 34.33v290c0 14.37-7.46 27.53-19.46 34.33a35.14 35.14 0 0 1-35.77-.45L128 295.57V432a16 16 0 0 1-32 0V80a16 16 0 0 1 16-16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-skip-forward-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M320 176a16 16 0 0 0-16 16v53l-111.68-67.44a10.78 10.78 0 0 0-16.32 9.31v138.26a10.78 10.78 0 0 0 16.32 9.31L304 267v53a16 16 0 0 0 32 0V192a16 16 0 0 0-16-16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-skip-forward-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm80 288h-32v-69l-128 77.37V167.49L304 245v-69h32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-skip-forward-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm80 272a16 16 0 0 1-32 0v-53l-111.68 67.44a10.78 10.78 0 0 1-16.32-9.31V186.87a10.78 10.78 0 0 1 16.32-9.31L304 245v-53a16 16 0 0 1 32 0Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-skip-forward-outline"><path d="M112 111v290c0 17.44 17 28.52 31 20.16l247.9-148.37c12.12-7.25 12.12-26.33 0-33.58L143 90.84c-14-8.36-31 2.72-31 20.16Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M400 80v352" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-skip-forward-sharp"><path d="M368.53 64v163.52L96 64v384l272.53-163.52V448H416V64h-47.47z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play-skip-forward"><path d="M400 64a16 16 0 0 0-16 16v136.43L151.23 77.11a35.13 35.13 0 0 0-35.77-.44C103.46 83.47 96 96.63 96 111v290c0 14.37 7.46 27.53 19.46 34.33a35.14 35.14 0 0 0 35.77-.45L384 295.57V432a16 16 0 0 0 32 0V80a16 16 0 0 0-16-16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-play"><path d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-podium-outline"><path d="M32 160v296a8 8 0 0 0 8 8h136V160a16 16 0 0 0-16-16H48a16 16 0 0 0-16 16ZM320 48H192a16 16 0 0 0-16 16v400h160V64a16 16 0 0 0-16-16ZM464 208H352a16 16 0 0 0-16 16v240h136a8 8 0 0 0 8-8V224a16 16 0 0 0-16-16Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-podium-sharp"><path d="M160 32h192v448H160zM384 192h112v288H384zM16 128h112v352H16z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-podium"><path d="M320 32H192a32 32 0 0 0-32 32v412a4 4 0 0 0 4 4h184a4 4 0 0 0 4-4V64a32 32 0 0 0-32-32ZM464 192h-72a8 8 0 0 0-8 8v272a8 8 0 0 0 8 8h80a24 24 0 0 0 24-24V224a32 32 0 0 0-32-32ZM48 128a32 32 0 0 0-32 32v296a24 24 0 0 0 24 24h80a8 8 0 0 0 8-8V136a8 8 0 0 0-8-8Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-power-outline"><path d="M378 108a191.41 191.41 0 0 1 70 148c0 106-86 192-192 192S64 362 64 256a192 192 0 0 1 69-148M256 64v192" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-power-sharp"><path d="M256 464c-114.69 0-208-93.23-208-207.82a207.44 207.44 0 0 1 74.76-160.13l16.9-14 28.17 33.72-16.9 14A163.72 163.72 0 0 0 92 256.18c0 90.39 73.57 163.93 164 163.93s164-73.54 164-163.93a163.38 163.38 0 0 0-59.83-126.36l-17-14 28-33.82 17 14A207.13 207.13 0 0 1 464 256.18C464 370.77 370.69 464 256 464Z" /><path d="M234 48h44v224h-44z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-power"><path d="M256 464c-114.69 0-208-93.47-208-208.35 0-62.45 27.25-121 74.76-160.55a22 22 0 1 1 28.17 33.8C113.48 160.1 92 206.3 92 255.65 92 346.27 165.57 420 256 420s164-73.73 164-164.35A164 164 0 0 0 360.17 129a22 22 0 1 1 28-33.92A207.88 207.88 0 0 1 464 255.65C464 370.53 370.69 464 256 464Z" /><path d="M256 272a22 22 0 0 1-22-22V70a22 22 0 0 1 44 0v180a22 22 0 0 1-22 22Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pricetag-outline"><path d="M435.25 48h-122.9a14.46 14.46 0 0 0-10.2 4.2L56.45 297.9a28.85 28.85 0 0 0 0 40.7l117 117a28.85 28.85 0 0 0 40.7 0L459.75 210a14.46 14.46 0 0 0 4.2-10.2v-123a28.66 28.66 0 0 0-28.7-28.8Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M384 160a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pricetag-sharp"><path d="M304 32 16 320l176 176 288-288V32Zm80 128a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pricetag"><path d="M467 45.2A44.45 44.45 0 0 0 435.29 32H312.36a30.63 30.63 0 0 0-21.52 8.89L45.09 286.59a44.82 44.82 0 0 0 0 63.32l117 117a44.83 44.83 0 0 0 63.34 0l245.65-245.6A30.6 30.6 0 0 0 480 199.8v-123a44.24 44.24 0 0 0-13-31.6ZM384 160a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pricetags-outline"><path d="M403.29 32H280.36a14.46 14.46 0 0 0-10.2 4.2L24.4 281.9a28.85 28.85 0 0 0 0 40.7l117 117a28.86 28.86 0 0 0 40.71 0L427.8 194a14.46 14.46 0 0 0 4.2-10.2v-123A28.66 28.66 0 0 0 403.29 32Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M352 144a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /><path d="m230 480 262-262a13.81 13.81 0 0 0 4-10V80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pricetags-sharp"><path d="M288 16 0 304l176 176 288-288V16Zm80 128a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /><path d="M480 64v144L216.9 471.1 242 496l270-272V64h-32z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pricetags"><path d="M448 183.8v-123A44.66 44.66 0 0 0 403.29 16H280.36a30.62 30.62 0 0 0-21.51 8.89L13.09 270.58a44.86 44.86 0 0 0 0 63.34l117 117a44.84 44.84 0 0 0 63.33 0l245.69-245.61A30.6 30.6 0 0 0 448 183.8ZM352 144a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /><path d="M496 64a16 16 0 0 0-16 16v127.37L218.69 468.69a16 16 0 1 0 22.62 22.62l262-262A29.84 29.84 0 0 0 512 208V80a16 16 0 0 0-16-16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-print-outline"><path d="M384 368h24a40.12 40.12 0 0 0 40-40V168a40.12 40.12 0 0 0-40-40H104a40.12 40.12 0 0 0-40 40v160a40.12 40.12 0 0 0 40 40h24" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="128" y="240" width="256" height="208" rx="24.32" ry="24.32" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M384 128v-24a40.12 40.12 0 0 0-40-40H168a40.12 40.12 0 0 0-40 40v24" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><circle cx="392" cy="184" r="24" /></symbol><symbol  viewBox="0 0 512 512" id="icon-print-sharp"><path d="M400 96V56a8 8 0 0 0-8-8H120a8 8 0 0 0-8 8v40" /><rect x="152" y="264" width="208" height="160" rx="4" ry="4" style="fill:none" /><rect x="152" y="264" width="208" height="160" rx="4" ry="4" style="fill:none" /><path d="M408 112H104a56 56 0 0 0-56 56v208a8 8 0 0 0 8 8h56v72a8 8 0 0 0 8 8h272a8 8 0 0 0 8-8v-72h56a8 8 0 0 0 8-8V168a56 56 0 0 0-56-56Zm-48 308a4 4 0 0 1-4 4H156a4 4 0 0 1-4-4V268a4 4 0 0 1 4-4h200a4 4 0 0 1 4 4Zm34-212.08a24 24 0 1 1 22-22 24 24 0 0 1-22 22Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-print"><path d="M408 112H106a58 58 0 0 0-58 58v158a56 56 0 0 0 56 56h8v39.68A40.32 40.32 0 0 0 152.32 464h207.36A40.32 40.32 0 0 0 400 423.68V384h8a56 56 0 0 0 56-56V168a56 56 0 0 0-56-56Zm-40 311.68a8.35 8.35 0 0 1-8.32 8.32H152.32a8.35 8.35 0 0 1-8.32-8.32V264.32a8.35 8.35 0 0 1 8.32-8.32h207.36a8.35 8.35 0 0 1 8.32 8.32Zm26-215.76a24 24 0 1 1 22-22 24 24 0 0 1-22 22ZM344 48H168a56.09 56.09 0 0 0-55.42 48h286.84A56.09 56.09 0 0 0 344 48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-prism-outline"><path d="M229.73 45.88 37.53 327.79a31.79 31.79 0 0 0 11.31 46L241 476.26a31.77 31.77 0 0 0 29.92 0l192.2-102.51a31.79 31.79 0 0 0 11.31-46L282.27 45.88a31.8 31.8 0 0 0-52.54 0ZM256 32v448" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-prism-sharp"><path d="M256 16 16 352l240 144 240-144Zm-20 96.82v324.53L73.73 340Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-prism"><path d="M487.83 319.44 295.63 36.88a48 48 0 0 0-79.26 0L24.17 319.44a47.1 47.1 0 0 0 16.93 68.13l192.2 102.75a48.05 48.05 0 0 0 45.4 0l192.2-102.75a47.1 47.1 0 0 0 16.93-68.13Zm-431.26 41a16.12 16.12 0 0 1-8-10.38 16.8 16.8 0 0 1 2.37-13.62L232.66 69.26c2.18-3.21 7.34-1.72 7.34 2.13v374c0 5.9-6.54 9.63-11.87 6.78Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pulse-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M48 320h64l64-256 64 384 64-224 32 96h64" /><circle cx="432" cy="320" r="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pulse-sharp"><path d="M426 266a54.07 54.07 0 0 0-49.3 32h-24.84l-27-81a22 22 0 0 0-42 .92l-37.2 130.2-48-281.74a22 22 0 0 0-43-1.72L94.82 298H32v44h80a22 22 0 0 0 21.34-16.66L171.69 172l46.61 273.62A22 22 0 0 0 238.76 464H240a22 22 0 0 0 21.15-16l44.47-149.62 9.51 28.62A22 22 0 0 0 336 342h40.7a54 54 0 1 0 49.3-76Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-pulse"><path d="M432 272a48.09 48.09 0 0 0-45.25 32h-39.22l-28.35-85.06a16 16 0 0 0-30.56.66l-44.51 155.76-52.33-314a16 16 0 0 0-31.3-1.25L99.51 304H48a16 16 0 0 0 0 32h64a16 16 0 0 0 15.52-12.12l45.34-181.37 51.36 308.12A16 16 0 0 0 239.1 464h.91a16 16 0 0 0 15.37-11.6l49.8-174.28 15.64 46.94A16 16 0 0 0 336 336h50.75A48 48 0 1 0 432 272Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-push-outline"><path d="M336 336h40a40 40 0 0 0 40-40V88a40 40 0 0 0-40-40H136a40 40 0 0 0-40 40v208a40 40 0 0 0 40 40h40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m176 240 80-80 80 80M256 464V176" /></symbol><symbol  viewBox="0 0 512 512" id="icon-push-sharp"><path d="M272 352V204.63l64 64L358.63 246 256 143.37 153.37 246 176 268.63l64-64V352H92a12 12 0 0 1-12-12V44a12 12 0 0 1 12-12h328a12 12 0 0 1 12 12v296a12 12 0 0 1-12 12ZM240 352h32v128h-32z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-push"><path d="M376 352H272V198.63l52.69 52.68a16 16 0 0 0 22.62-22.62l-80-80a16 16 0 0 0-22.62 0l-80 80a16 16 0 0 0 22.62 22.62L240 198.63V352H136a56.06 56.06 0 0 1-56-56V88a56.06 56.06 0 0 1 56-56h240a56.06 56.06 0 0 1 56 56v208a56.06 56.06 0 0 1-56 56ZM272 464a16 16 0 0 1-32 0V352h32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-qr-code-outline"><rect x="336" y="336" width="80" height="80" rx="8" ry="8" /><rect x="272" y="272" width="64" height="64" rx="8" ry="8" /><rect x="416" y="416" width="64" height="64" rx="8" ry="8" /><rect x="432" y="272" width="48" height="48" rx="8" ry="8" /><rect x="272" y="432" width="48" height="48" rx="8" ry="8" /><rect x="336" y="96" width="80" height="80" rx="8" ry="8" /><rect x="288" y="48" width="176" height="176" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="96" y="96" width="80" height="80" rx="8" ry="8" /><rect x="48" y="48" width="176" height="176" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="96" y="336" width="80" height="80" rx="8" ry="8" /><rect x="48" y="288" width="176" height="176" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-qr-code-sharp"><path d="M336 336h80v80h-80zM272 272h64v64h-64zM416 416h64v64h-64zM432 272h48v48h-48zM272 432h48v48h-48zM336 96h80v80h-80z" /><path d="M480 240H272V32h208Zm-164-44h120V76H316ZM96 96h80v80H96z" /><path d="M240 240H32V32h208ZM76 196h120V76H76ZM96 336h80v80H96z" /><path d="M240 480H32V272h208ZM76 436h120V316H76Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-qr-code"><rect x="336" y="336" width="80" height="80" rx="8" ry="8" /><rect x="272" y="272" width="64" height="64" rx="8" ry="8" /><rect x="416" y="416" width="64" height="64" rx="8" ry="8" /><rect x="432" y="272" width="48" height="48" rx="8" ry="8" /><rect x="272" y="432" width="48" height="48" rx="8" ry="8" /><path d="M448 32H304a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32Zm-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8ZM208 32H64a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32Zm-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8ZM208 272H64a32 32 0 0 0-32 32v144a32 32 0 0 0 32 32h144a32 32 0 0 0 32-32V304a32 32 0 0 0-32-32Zm-32 136a8 8 0 0 1-8 8h-64a8 8 0 0 1-8-8v-64a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-radio-button-off-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-radio-button-off-sharp"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-radio-button-off"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-radio-button-on-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="256" r="144" /></symbol><symbol  viewBox="0 0 512 512" id="icon-radio-button-on-sharp"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="256" r="144" /></symbol><symbol  viewBox="0 0 512 512" id="icon-radio-button-on"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="256" r="144" /></symbol><symbol  viewBox="0 0 512 512" id="icon-radio-outline"><circle cx="256" cy="256.02" r="32" /><path d="M184.25 192.25a96 96 0 0 0 0 127.52M327.77 319.77a96 96 0 0 0 0-127.52M133.28 141.28a168 168 0 0 0 0 229.44M378.72 370.72a168 168 0 0 0 0-229.44" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M435 416a240.34 240.34 0 0 0 0-320M77 96a240.34 240.34 0 0 0 0 320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-radio-sharp"><ellipse cx="256" cy="256" rx="36" ry="35.99" /><path d="m188.4 350.8-14.62-16.44a117.91 117.91 0 0 1 0-156.71l14.62-16.43 32.87 29.24-14.62 16.43a73.93 73.93 0 0 0 0 98.25l14.62 16.44ZM323.6 350.8l-32.89-29.22 14.62-16.44a73.93 73.93 0 0 0 0-98.25l-14.62-16.43 32.87-29.24 14.62 16.43a117.91 117.91 0 0 1 0 156.71Z" /><path d="m138.24 401.76-15-16.06a189.85 189.85 0 0 1 0-259.4l15-16.07 32.14 30.05-15 16.06a145.88 145.88 0 0 0 0 199.32l15 16.06ZM373.76 401.76l-32.14-30 15-16.06a145.88 145.88 0 0 0 0-199.32l-15-16.06 32.14-30 15 16.07a189.85 189.85 0 0 1 0 259.4Z" /><path d="m430.73 447-32.79-29.33 14.66-16.39a218.2 218.2 0 0 0 0-290.56l-14.67-16.38L430.72 65l14.67 16.39a262.18 262.18 0 0 1 0 349.22ZM81.27 447 66.6 430.61a262.18 262.18 0 0 1 0-349.22L81.28 65l32.79 29.34-14.68 16.38a218.2 218.2 0 0 0 0 290.56l14.66 16.39Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-radio"><circle cx="256" cy="256" r="36" /><path d="M190.24 341.77a22 22 0 0 1-16.46-7.38 118 118 0 0 1 0-156.76 22 22 0 1 1 32.87 29.24 74 74 0 0 0 0 98.29 22 22 0 0 1-16.43 36.61ZM321.76 341.77a22 22 0 0 1-16.43-36.61 74 74 0 0 0 0-98.29 22 22 0 1 1 32.87-29.24 118 118 0 0 1 0 156.76 22 22 0 0 1-16.44 7.38Z" /><path d="M139.29 392.72a21.92 21.92 0 0 1-16.08-7 190 190 0 0 1 0-259.49 22 22 0 1 1 32.13 30.06 146 146 0 0 0 0 199.38 22 22 0 0 1-16.06 37ZM372.71 392.72a22 22 0 0 1-16.06-37 146 146 0 0 0 0-199.38 22 22 0 1 1 32.13-30.06 190 190 0 0 1 0 259.49 21.92 21.92 0 0 1-16.07 6.95Z" /><path d="M429 438a22 22 0 0 1-16.39-36.67 218.34 218.34 0 0 0 0-290.66 22 22 0 0 1 32.78-29.34 262.34 262.34 0 0 1 0 349.34A22 22 0 0 1 429 438ZM83 438a21.94 21.94 0 0 1-16.41-7.33 262.34 262.34 0 0 1 0-349.34 22 22 0 0 1 32.78 29.34 218.34 218.34 0 0 0 0 290.66A22 22 0 0 1 83 438Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-rainy-outline"><path d="M114.61 162.85A16.07 16.07 0 0 0 128 149.6C140.09 76.17 193.63 32 256 32c57.93 0 96.62 37.75 112.2 77.74a15.84 15.84 0 0 0 12.2 9.87c50 8.15 91.6 41.54 91.6 99.59 0 59.4-48.6 100.8-108 100.8H130c-49.5 0-90-24.7-90-79.2 0-48.47 38.67-72.22 74.61-77.95Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m144 384-32 48M224 384l-64 96M304 384l-32 48M384 384l-64 96" /></symbol><symbol  viewBox="0 0 512 512" id="icon-rainy-sharp"><path d="M364 336H130c-29.5 0-54.92-7.83-73.53-22.64C35.23 296.44 24 271.35 24 240.8c0-26.66 10.08-49.8 29.14-66.91 15.24-13.68 36.17-23.21 59-26.84.06 0 .08 0 .09-.05 6.44-39 23.83-72.09 50.31-95.68A140.24 140.24 0 0 1 256 16c30.23 0 58.48 9.39 81.71 27.17a142.69 142.69 0 0 1 45.36 60.66c29.41 4.82 54.72 17.11 73.19 35.54C477 160.11 488 187.71 488 219.2c0 32.85-13.13 62.87-37 84.52-22.89 20.82-53.8 32.28-87 32.28Zm19-232.18ZM93.82 430.422l49.75-74.626 26.626 17.75-49.751 74.627zM141.816 478.429 223.568 355.8l26.625 17.75-81.751 122.628zM253.811 430.424l49.751-74.626 26.626 17.75-49.751 74.627zM301.808 478.43l81.752-122.627 26.625 17.75-81.751 122.628z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-rainy"><path d="M456.26 139.37c-16.77-16.73-39.17-28.41-65.17-34a16 16 0 0 1-11.19-9 142.24 142.24 0 0 0-42.19-53.21C314.48 25.39 286.23 16 256 16a140.24 140.24 0 0 0-93.5 35.32c-24.2 21.56-40.91 51.34-48.43 85.83a16.05 16.05 0 0 1-11.72 12.18c-25 6.3-35.71 12.54-49.21 24.56C34 190.93 24 214.14 24 240.8c0 30.55 11.23 55.64 32.47 72.56C75.08 328.17 100.5 336 130 336h234c33.2 0 64.11-11.46 87-32.28 23.84-21.65 37-51.67 37-84.52 0-31.49-11-59.09-31.74-79.83ZM112 448a16 16 0 0 1-13.3-24.88l32-48a16 16 0 0 1 26.62 17.76l-32 48A16 16 0 0 1 112 448ZM160 496a16 16 0 0 1-13.29-24.88l64-96a16 16 0 0 1 26.62 17.76l-64 96A16 16 0 0 1 160 496ZM272 448a16 16 0 0 1-13.3-24.88l32-48a16 16 0 0 1 26.62 17.76l-32 48A16 16 0 0 1 272 448ZM320 496a16 16 0 0 1-13.3-24.88l64-96a16 16 0 0 1 26.62 17.76l-64 96A16 16 0 0 1 320 496Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reader-outline"><rect x="96" y="48" width="320" height="416" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M176 128h160M176 208h160M176 288h80" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reader-sharp"><path d="M80 44v424a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H92a12 12 0 0 0-12 12Zm192 260H160v-32h112Zm80-80H160v-32h192Zm0-80H160v-32h192Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reader"><path d="M368 32H144a64.07 64.07 0 0 0-64 64v320a64.07 64.07 0 0 0 64 64h224a64.07 64.07 0 0 0 64-64V96a64.07 64.07 0 0 0-64-64ZM256 304h-80a16 16 0 0 1 0-32h80a16 16 0 0 1 0 32Zm80-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32Zm0-80H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-receipt-outline"><path style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" d="M160 336V48l32 16 32-16 31.94 16 32.37-16L320 64l31.79-16 31.93 16L416 48l32.01 16L480 48v224" /><path d="M480 272v112a80 80 0 0 1-80 80 80 80 0 0 1-80-80v-48H48a15.86 15.86 0 0 0-16 16c0 64 6.74 112 80 112h288" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M224 144h192M288 224h128" /></symbol><symbol  viewBox="0 0 512 512" id="icon-receipt-sharp"><path d="m448 48-32-16-32 16-32-16-32 16-32-16-32 16-32-16-32 16-48-16v256.05h224V424c0 30.93 33.07 56 64 56h12c30.93 0 52-25.07 52-56V32ZM272.5 240l-.5-32h159.5l.5 32Zm-64-80-.5-32h223.5l.5 32Z" /><path d="M336 424V320H16v32c0 50.55 5.78 71.62 14.46 87.63C45.19 466.8 71.86 480 112 480h256s-32-20-32-56Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-receipt"><path d="M483.82 32.45a16.28 16.28 0 0 0-11.23 1.37L448 46.1l-24.8-12.4a16 16 0 0 0-14.31 0l-25.11 12.41L359 33.7a16 16 0 0 0-14.36 0L320 46.07l-24.45-12.34a16 16 0 0 0-14.35-.06L256 46.12l-24.8-12.43a16.05 16.05 0 0 0-14.33 0L192 46.1l-24.84-12.41a16 16 0 0 0-19.36 3.94 16.25 16.25 0 0 0-3.8 10.65V288l.05.05H336a32 32 0 0 1 32 32V424c0 30.93 33.07 56 64 56h12a52 52 0 0 0 52-52V48a16 16 0 0 0-12.18-15.55ZM416 240H288.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 0 1 288 208h127.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 0 1 416 240Zm0-80H224.5c-8.64 0-16.1-6.64-16.48-15.28A16 16 0 0 1 224 128h191.5c8.64 0 16.1 6.64 16.48 15.28A16 16 0 0 1 416 160Z" /><path d="M336 424v-88a16 16 0 0 0-16-16H48a32.1 32.1 0 0 0-32 32.05c0 50.55 5.78 71.57 14.46 87.57C45.19 466.79 71.86 480 112 480h245.68a4 4 0 0 0 2.85-6.81C351.07 463.7 336 451 336 424Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-recording-outline"><circle cx="128" cy="256" r="96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="384" cy="256" r="96" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M128 352h256" /></symbol><symbol  viewBox="0 0 512 512" id="icon-recording-sharp"><path d="M384 138a117.93 117.93 0 0 0-91.84 192h-72.32A118 118 0 1 0 128 374h256a118 118 0 0 0 0-236ZM54 256a74 74 0 1 1 74 74 74.09 74.09 0 0 1-74-74Zm330 74a74 74 0 1 1 74-74 74.09 74.09 0 0 1-74 74Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-recording"><path d="M380.79 144.05c-59.1 1.65-107.12 49.71-108.79 108.81a111.64 111.64 0 0 0 30.36 79.77A2 2 0 0 1 301 336h-90a2 2 0 0 1-1.44-3.37A111.64 111.64 0 0 0 240 252.86c-1.63-59.1-49.65-107.16-108.75-108.81A112.12 112.12 0 0 0 16 255.53C15.75 317.77 67 368 129.24 368h253.52C445 368 496.25 317.77 496 255.53a112.12 112.12 0 0 0-115.21-111.48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-refresh-circle-outline"><path d="M288 193s12.18-6-32-6a80 80 0 1 0 80 80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:28px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:28px" d="m256 149 40 40-40 40" /><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-refresh-circle-sharp"><path d="M256 48C141.31 48 48 141.32 48 256c0 114.86 93.14 208 208 208 114.69 0 208-93.31 208-208 0-114.87-93.13-208-208-208Zm94 219a94 94 0 1 1-94-94h4.21l-24-24L256 129.2l59.8 59.8-59.8 59.8-19.8-19.8 27.92-27.92c-2.4-.08-5.12-.08-8.12-.08a66 66 0 1 0 66 66v-14h28Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-refresh-circle"><path d="M256 48C141.31 48 48 141.32 48 256c0 114.86 93.14 208 208 208 114.69 0 208-93.31 208-208 0-114.87-93.13-208-208-208Zm0 313a94 94 0 0 1 0-188h4.21l-14.11-14.1a14 14 0 0 1 19.8-19.8l40 40a14 14 0 0 1 0 19.8l-40 40a14 14 0 0 1-19.8-19.8l18-18c-2.38-.1-5.1-.1-8.1-.1a66 66 0 1 0 66 66 14 14 0 0 1 28 0 94.11 94.11 0 0 1-94 94Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-refresh-outline"><path d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m256 58 80 80-80 80" /></symbol><symbol  viewBox="0 0 512 512" id="icon-refresh-sharp"><path d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="m256 58 80 80-80 80" /></symbol><symbol  viewBox="0 0 512 512" id="icon-refresh"><path d="M320 146s24.36-12-64-12a160 160 0 1 0 160 160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m256 58 80 80-80 80" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reload-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="m341.54 197.85-11.37-13.23a103.37 103.37 0 1 0 22.71 105.84" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path d="M367.32 162a8.44 8.44 0 0 0-6 2.54l-59.54 59.54a8.61 8.61 0 0 0 6.09 14.71h59.54a8.62 8.62 0 0 0 8.62-8.62v-59.56a8.61 8.61 0 0 0-8.68-8.63Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reload-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm120 190.77h-89l36.88-36.88-5.6-6.51a87.38 87.38 0 1 0-62.94 148 87.55 87.55 0 0 0 82.42-58.25l5.37-15.13 30.17 10.67-5.3 15.13a119.4 119.4 0 1 1-112.62-159.18 118.34 118.34 0 0 1 86.36 36.95l.56.62 4.31 5L376 149.81Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reload-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm120 182.15a8.62 8.62 0 0 1-8.62 8.62h-59.54a8.61 8.61 0 0 1-6.09-14.71l22.17-22.17-5.6-6.51a87.38 87.38 0 1 0-62.94 148 87.55 87.55 0 0 0 82.42-58.25A16 16 0 1 1 368 295.8a119.4 119.4 0 1 1-112.62-159.18 118.34 118.34 0 0 1 86.36 36.95l.56.62 4.31 5 14.68-14.68a8.44 8.44 0 0 1 6-2.54 8.61 8.61 0 0 1 8.68 8.63Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reload-outline"><path d="m400 148-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path d="M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reload-sharp"><path d="m400 148-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><path d="M464 68.45V220a4 4 0 0 1-4 4H308.45a4 4 0 0 1-2.83-6.83L457.17 65.62a4 4 0 0 1 6.83 2.83Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reload"><path d="m400 148-21.12-24.57A191.43 191.43 0 0 0 240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 0 0 181.07-128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path d="M464 97.42V208a16 16 0 0 1-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-remove-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M336 256H176" /></symbol><symbol  viewBox="0 0 512 512" id="icon-remove-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm96 224H160v-32h192Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-remove-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm80 224H176a16 16 0 0 1 0-32h160a16 16 0 0 1 0 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-remove-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M400 256H112" /></symbol><symbol  viewBox="0 0 512 512" id="icon-remove-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" d="M400 256H112" /></symbol><symbol  viewBox="0 0 512 512" id="icon-remove"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M400 256H112" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reorder-four-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M96 304h320M96 208h320M96 112h320M96 400h320" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reorder-four-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px" d="M102 304h308M102 208h308M102 112h308M102 400h308" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reorder-four"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" d="M102 304h308M102 208h308M102 112h308M102 400h308" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reorder-three-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M96 256h320M96 176h320M96 336h320" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reorder-three-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px" d="M102 256h308M102 176h308M102 336h308" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reorder-three"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" d="M102 256h308M102 176h308M102 336h308" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reorder-two-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M112 304h288M112 208h288" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reorder-two-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:44px" d="M118 304h276M118 208h276" /></symbol><symbol  viewBox="0 0 512 512" id="icon-reorder-two"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" d="M118 304h276M118 208h276" /></symbol><symbol  viewBox="0 0 512 512" id="icon-repeat-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m320 120 48 48-48 48" /><path d="M352 168H144a80.24 80.24 0 0 0-80 80v16M192 392l-48-48 48-48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M160 344h208a80.24 80.24 0 0 0 80-80v-16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-repeat-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="m320 120 48 48-48 48" /><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M352 168H64v96M192 392l-48-48 48-48" /><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M160 344h288v-96" /></symbol><symbol  viewBox="0 0 512 512" id="icon-repeat"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m320 120 48 48-48 48" /><path d="M352 168H144a80.24 80.24 0 0 0-80 80v16M192 392l-48-48 48-48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M160 344h208a80.24 80.24 0 0 0 80-80v-16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-resize-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M304 96h112v112M405.77 106.2 111.98 400.02M208 416H96V304" /></symbol><symbol  viewBox="0 0 512 512" id="icon-resize-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M304 96h112v112M405.77 106.2 111.98 400.02M208 416H96V304" /></symbol><symbol  viewBox="0 0 512 512" id="icon-resize"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M304 96h112v112M405.77 106.2 111.98 400.02M208 416H96V304" /></symbol><symbol  viewBox="0 0 512 512" id="icon-restaurant-outline"><path d="m57.49 47.74 368.43 368.43a37.28 37.28 0 0 1 0 52.72 37.29 37.29 0 0 1-52.72 0l-90-91.55a32 32 0 0 1-9.2-22.43v-5.53a32 32 0 0 0-9.52-22.78l-11.62-10.73a32 32 0 0 0-29.8-7.44 48.53 48.53 0 0 1-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="m400 32-77.25 77.25A64 64 0 0 0 304 154.51v14.86a16 16 0 0 1-4.69 11.32L288 192M320 224l11.31-11.31a16 16 0 0 1 11.32-4.69h14.86a64 64 0 0 0 45.26-18.75L480 112M440 72l-80 80M200 368l-99.72 100.28a40 40 0 0 1-56.56 0h0a40 40 0 0 1 0-56.56L128 328" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-restaurant-sharp"><path d="M342.7 223.94h14.87a79.48 79.48 0 0 0 56.58-23.44L496 118l-22.22-22.4-83.58 83.58-17.37-17.37 83.58-83.59-23-22.31-83.27 83.26-17.32-17.37 83.58-83.59L394 16l-82.5 81.85a79.49 79.49 0 0 0-23.44 56.59v14.86l-43.13 43.13L48 16C3.72 70.87 29.87 171.71 79.72 221.57l85.5 85.5c26.55 26.55 31.82 28.92 61.94 16.8 6.49-2.61 8.85-2.32 14.9 3.72l13 12.13c2.93 3 3 3.88 3 9.62v5.54c0 21.08 13.48 33.2 22.36 42.24L384 496l72-72-156.43-156.93Z" /><path d="M227.37 354.59c-29.82 6.11-48.11 11.74-83.08-23.23-.56-.56-1.14-1.1-1.7-1.66l-19.5-19.5L16 416l80 80 144-144Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-restaurant"><path d="M357.57 223.94a79.48 79.48 0 0 0 56.58-23.44l77-76.95c6.09-6.09 6.65-16 .85-22.39a16 16 0 0 0-23.17-.56l-68.63 68.58a12.29 12.29 0 0 1-17.37 0c-4.79-4.78-4.53-12.86.25-17.64l68.33-68.33a16 16 0 0 0-.56-23.16A15.62 15.62 0 0 0 440.27 56a16.71 16.71 0 0 0-11.81 4.9l-68.27 68.26a12.29 12.29 0 0 1-17.37 0c-4.78-4.78-4.53-12.86.25-17.64l68.33-68.31a16 16 0 0 0-.56-23.16A15.62 15.62 0 0 0 400.26 16a16.73 16.73 0 0 0-11.81 4.9L311.5 97.85a79.49 79.49 0 0 0-23.44 56.59v8.23a16 16 0 0 1-4.69 11.33l-35.61 35.62a4 4 0 0 1-5.66 0L68.82 36.33a16 16 0 0 0-22.58-.06C31.09 51.28 23 72.47 23 97.54c-.1 41.4 21.66 89 56.79 124.08l85.45 85.45A64.79 64.79 0 0 0 211 326a64 64 0 0 0 16.21-2.08 16.24 16.24 0 0 1 4.07-.53 15.93 15.93 0 0 1 10.83 4.25l11.39 10.52a16.12 16.12 0 0 1 4.6 11.23v5.54a47.73 47.73 0 0 0 13.77 33.65l90.05 91.57.09.1a53.29 53.29 0 0 0 75.36-75.37L302.39 269.9a4 4 0 0 1 0-5.66L338 228.63a16 16 0 0 1 11.32-4.69Z" /><path d="M211 358a97.32 97.32 0 0 1-68.36-28.25l-13.86-13.86a8 8 0 0 0-11.3 0l-85 84.56c-15.15 15.15-20.56 37.45-13.06 59.29a30.63 30.63 0 0 0 1.49 3.6C31 484 50.58 496 72 496a55.68 55.68 0 0 0 39.64-16.44L225 365.66a4.69 4.69 0 0 0 1.32-3.72v-.26a4.63 4.63 0 0 0-5.15-4.27A97.09 97.09 0 0 1 211 358Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-return-down-back-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m112 352-64-64 64-64" /><path d="M64 288h294c58.76 0 106-49.33 106-108v-20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-return-down-back-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="m112 352-64-64 64-64" /><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M64 288h400V160" /></symbol><symbol  viewBox="0 0 512 512" id="icon-return-down-back"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m112 352-64-64 64-64" /><path d="M64 288h294c58.76 0 106-49.33 106-108v-20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-return-down-forward-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m400 352 64-64-64-64" /><path d="M448 288H154c-58.76 0-106-49.33-106-108v-20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-return-down-forward-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="m400 352 64-64-64-64" /><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M448 288H48V160" /></symbol><symbol  viewBox="0 0 512 512" id="icon-return-down-forward"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m400 352 64-64-64-64" /><path d="M448 288H154c-58.76 0-106-49.33-106-108v-20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-return-up-back-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m112 160-64 64 64 64" /><path d="M64 224h294c58.76 0 106 49.33 106 108v20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-return-up-back-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="m112 160-64 64 64 64" /><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M64 224h400v128" /></symbol><symbol  viewBox="0 0 512 512" id="icon-return-up-back"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m112 160-64 64 64 64" /><path d="M64 224h294c58.76 0 106 49.33 106 108v20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-return-up-forward-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m400 160 64 64-64 64" /><path d="M448 224H154c-58.76 0-106 49.33-106 108v20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-return-up-forward-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="m400 160 64 64-64 64" /><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M448 224H48v128" /></symbol><symbol  viewBox="0 0 512 512" id="icon-return-up-forward"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m400 160 64 64-64 64" /><path d="M448 224H154c-58.76 0-106 49.33-106 108v20" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ribbon-outline"><circle cx="256" cy="160" r="128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M143.65 227.82 48 400l86.86-.42a16 16 0 0 1 13.82 7.8L192 480l88.33-194.32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M366.54 224 464 400l-86.86-.42a16 16 0 0 0-13.82 7.8L320 480l-64-140.8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="256" cy="160" r="64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ribbon-sharp"><path d="M256 336c-5.22 0-10.4-.24-15.51-.69a176.12 176.12 0 0 1-131.29-78.37L20 416h115l58 96 82.53-177.09A177.53 177.53 0 0 1 256 336ZM403 256.74a176.9 176.9 0 0 1-88.18 69.14L273.7 415.5 319 512l58-96h115Z" /><circle cx="256.02" cy="160" r="48" /><path d="M256 16c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144S335.4 16 256 16Zm0 224a80 80 0 1 1 80-80 80.09 80.09 0 0 1-80 80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ribbon"><path d="M269 335.61q-6.33.47-12.78.47c-5.23 0-10.4-.24-15.51-.69a176.11 176.11 0 0 1-127.67-72.94 4 4 0 0 0-6.77.35l-72 129.4c-2.74 5-3.17 11-.28 15.88A16.78 16.78 0 0 0 48.22 416h78a15.28 15.28 0 0 1 13.62 7.33L178.5 488a16.26 16.26 0 0 0 13.75 8c5.94-.33 12.09-4.19 14.56-9.6l66.11-145.15a4 4 0 0 0-3.92-5.64ZM477.64 391.88l-71.53-129.17a4 4 0 0 0-6.74-.36 176.5 176.5 0 0 1-78.31 61.42 16.09 16.09 0 0 0-8.72 8.25l-36.86 81.1a7.92 7.92 0 0 0 0 6.6l30.27 66.59c2.45 5.41 8.59 9.36 14.52 9.69a16.3 16.3 0 0 0 13.7-8.12l38.53-64.58c2.89-4.85 8.13-7.33 13.78-7.3h78.77c6.67 0 11.72-3.48 14-10a16.92 16.92 0 0 0-1.41-14.12Z" /><ellipse cx="256.26" cy="160" rx="48.01" ry="48" /><path d="M256.26 16c-79.42 0-144 64.59-144 144s64.61 144 144 144 144-64.6 144-144-64.59-144-144-144Zm0 224a80 80 0 1 1 80-80 80.1 80.1 0 0 1-80 80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-rocket-outline"><path d="M461.81 53.81a4.4 4.4 0 0 0-3.3-3.39c-54.38-13.3-180 34.09-248.13 102.17a294.9 294.9 0 0 0-33.09 39.08c-21-1.9-42-.3-59.88 7.5-50.49 22.2-65.18 80.18-69.28 105.07a9 9 0 0 0 9.8 10.4l81.07-8.9a180.29 180.29 0 0 0 1.1 18.3 18.15 18.15 0 0 0 5.3 11.09l31.39 31.39a18.15 18.15 0 0 0 11.1 5.3 179.91 179.91 0 0 0 18.19 1.1l-8.89 81a9 9 0 0 0 10.39 9.79c24.9-4 83-18.69 105.07-69.17 7.8-17.9 9.4-38.79 7.6-59.69a293.91 293.91 0 0 0 39.19-33.09c68.38-68 115.47-190.86 102.37-247.95ZM298.66 213.67a42.7 42.7 0 1 1 60.38 0 42.65 42.65 0 0 1-60.38 0Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M109.64 352a45.06 45.06 0 0 0-26.35 12.84C65.67 382.52 64 448 64 448s65.52-1.67 83.15-19.31A44.73 44.73 0 0 0 160 402.32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-rocket-sharp"><path d="M477.64 38.26a4.75 4.75 0 0 0-3.55-3.66c-58.57-14.32-193.9 36.71-267.22 110a317 317 0 0 0-35.63 42.1c-22.61-2-45.22-.33-64.49 8.07C52.38 218.7 36.55 281.14 32.14 308a9.64 9.64 0 0 0 10.55 11.2l87.31-9.63a194.1 194.1 0 0 0 1.19 19.7 19.53 19.53 0 0 0 5.7 12L170.7 375a19.59 19.59 0 0 0 12 5.7 193.53 193.53 0 0 0 19.59 1.19l-9.58 87.2a9.65 9.65 0 0 0 11.2 10.55c26.81-4.3 89.36-20.13 113.15-74.5 8.4-19.27 10.12-41.77 8.18-64.27a317.66 317.66 0 0 0 42.21-35.64C441 232.05 491.74 99.74 477.64 38.26ZM294.07 217.93a48 48 0 1 1 67.86 0 47.95 47.95 0 0 1-67.86 0Z" /><path d="M168.4 399.43c-5.48 5.49-14.27 7.63-24.85 9.46-23.77 4.05-44.76-16.49-40.49-40.52 1.63-9.11 6.45-21.88 9.45-24.88a4.37 4.37 0 0 0-3.65-7.45 60 60 0 0 0-35.13 17.12C50.22 376.69 48 464 48 464s87.36-2.22 110.87-25.75A59.69 59.69 0 0 0 176 403.09c.37-4.18-4.72-6.67-7.6-3.66Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-rocket"><path d="M328.85 156.79a26.69 26.69 0 1 0 18.88 7.81 26.6 26.6 0 0 0-18.88-7.81Z" /><path d="M477.44 50.06a.29.29 0 0 1 0-.09 20.4 20.4 0 0 0-15.13-15.3c-29.8-7.27-76.68.48-128.63 21.28-52.36 21-101.42 52-134.58 85.22A320.7 320.7 0 0 0 169.55 175c-22.33-1-42 2.18-58.57 9.41-57.74 25.41-74.23 90.44-78.62 117.14a25 25 0 0 0 27.19 29h.13l64.32-7.02c.08.82.17 1.57.24 2.26a34.36 34.36 0 0 0 9.9 20.72l31.39 31.41a34.27 34.27 0 0 0 20.71 9.91l2.15.23-7 64.24v.13A25 25 0 0 0 206 480a25.25 25.25 0 0 0 4.15-.34C237 475.34 302 459.05 327.34 401c7.17-16.46 10.34-36.05 9.45-58.34a314.78 314.78 0 0 0 33.95-29.55c33.43-33.26 64.53-81.92 85.31-133.52 20.69-51.36 28.48-98.59 21.39-129.53ZM370.38 224.94a58.77 58.77 0 1 1 0-83.07 58.3 58.3 0 0 1 0 83.07Z" /><path d="M161.93 386.44a16 16 0 0 0-11 2.67c-6.39 4.37-12.81 8.69-19.29 12.9-13.11 8.52-28.79-6.44-21-20l12.15-21a16 16 0 0 0-15.16-24.91A61.25 61.25 0 0 0 72 353.56c-3.66 3.67-14.79 14.81-20.78 57.26A357.94 357.94 0 0 0 48 447.59 16 16 0 0 0 64 464h.4a359.87 359.87 0 0 0 36.8-3.2c42.47-6 53.61-17.14 57.27-20.8a60.49 60.49 0 0 0 17.39-35.74 16 16 0 0 0-13.93-17.82Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-rose-outline"><path d="M416 128c-18.9 4.25-36.8 8.94-53.7 13.95-40.5 12-75.5 27.15-105.4 41.65-19.3 9.37-26.2 13.51-51.5 28.23-58.4 33.69-93.4 77.4-93.4 142.81C112 428.55 167.6 480 256 480s144-55.81 144-129.72S339 225.24 416 128Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M264 180.19c-19.69-27-38.2-38.69-52.7-46.59C162.6 107.1 96 96 96 96c41.5 43.7 37.2 90.1 32 128 0 0-3.87 32.88 1.91 58.41" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M372 139.15C356.55 102.6 336 64 336 64s-63.32 0-135.69 64M253.48 87.57C221.25 45.81 176 32 176 32c-15.3 20.8-28.79 51.58-34.87 74.17" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-rose-sharp"><path d="M448 112s-17.62 0-30.51 1.39c-19 2-42.06 8-59.73 13.22-35.06 10.39-69.33 23.92-107.85 42.59-18.62 9.05-26 13.35-48 26.13l-4.5 2.67c-32.95 19-57.09 40-73.79 64.3C105.29 288.89 96 320 96 354.64c0 40.74 15.71 77.1 44.24 102.37C169 482.52 209.06 496 256 496c46.76 0 86.89-14.32 116-41.43 28.35-26.35 44-63.39 44-104.29 0-25-6.19-47-12.17-68.22-12.59-44.69-23.46-83.29 24.71-144.13C432.75 132.62 448 112 448 112ZM219 119.55C168.47 92.08 104.72 80 80 80c0 0 23.23 28.19 29.15 55.4s6.54 48.61 2.91 88.6c17.94-20.48 40.59-37.15 69.32-53.73l4.48-2.6C208 154.8 216.23 150 236 140.41c2.88-1.4 5.74-2.76 8.58-4.11A170.77 170.77 0 0 0 219 119.55ZM345.25 48s-42.53.36-86.12 21.3a280.36 280.36 0 0 0-32.27 18.27q3.73 1.89 7.4 3.88c3.44 1.87 7.09 4 10.9 6.29a189.7 189.7 0 0 1 31.46 24.16c24.57-10.41 73-26.1 90.77-31.28-8-19.15-22.14-42.62-22.14-42.62ZM176 16c-16 10.83-33.24 41.1-33.24 41.1a494.22 494.22 0 0 1 48.92 15.25l17.65-11.56c8.18-5.35 16.55-10.29 25-14.77C234.31 46 202.59 24.17 176 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-rose"><path d="M429.55 119.49a16 16 0 0 0-17.06-7.1c-18.64 4.19-37.06 9-54.73 14.22-35.06 10.39-69.33 23.92-107.85 42.59-18.62 9.05-26 13.35-48 26.13l-4.5 2.67c-32.95 19-57.09 40-73.79 64.29C105.29 288.89 96 320 96 354.64c0 40.74 15.71 77.1 44.24 102.37C169 482.52 209.06 496 256 496c46.76 0 86.89-14.33 116-41.43 28.35-26.35 44-63.39 44-104.29 0-25-6.19-47-12.17-68.22-12.59-44.69-23.46-83.29 24.71-144.13a16 16 0 0 0 1.01-18.44ZM219 119.55C168.46 92.08 101.46 80.69 98.63 80.22A16 16 0 0 0 81 90.55a16.47 16.47 0 0 0 3.79 16.84c31.84 33.78 32.86 68.79 28.65 104.63a4.45 4.45 0 0 0 2.5 4.54 4.44 4.44 0 0 0 5.08-.9c16.39-16.51 36.37-31.52 60.4-45.39l4.48-2.6C208 154.8 216.23 150 236 140.41l2.69-1.3a4 4 0 0 0 .64-6.83A178.59 178.59 0 0 0 219 119.55ZM234.26 91.45c3.44 1.87 7.09 4 10.9 6.29a189.31 189.31 0 0 1 29.57 22.39 4 4 0 0 0 4.28.76 672 672 0 0 1 69.65-25q7-2.07 14.08-4a4 4 0 0 0 2.53-5.62c-8.27-16.83-14.67-28.9-15.15-29.79A16 16 0 0 0 336 48c-1.91 0-33.28.36-76.87 21.3a279 279 0 0 0-26.39 14.51 4 4 0 0 0 .22 6.94ZM209.33 60.79c7.3-4.77 14.74-9.22 22.25-13.31a2 2 0 0 0 .24-3.36c-26-19.57-49.73-27-51.15-27.42a16 16 0 0 0-17.56 5.82 217.63 217.63 0 0 0-19.28 32.38 2 2 0 0 0 1.29 2.81c13.61 3.57 29.4 8.29 45.61 14.29a2 2 0 0 0 1.79-.2Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sad-outline"><circle cx="184" cy="232" r="24" /><path d="M256 288c45.42 0 83.62 29.53 95.71 69.83a8 8 0 0 1-7.87 10.17H168.15a8 8 0 0 1-7.82-10.17C172.32 317.53 210.53 288 256 288Z" /><circle cx="328" cy="232" r="24" /><circle cx="256" cy="256" r="208" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sad-sharp"><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61ZM328 208a24 24 0 1 1-24 24 23.94 23.94 0 0 1 24-24Zm-144 0a24 24 0 1 1-24 24 23.94 23.94 0 0 1 24-24Zm72 80c45.42 0 83.75 29.49 95.72 69.83 1 3.52 2.33 10.17 2.33 10.17H158s1.31-6.69 2.33-10.17C172.11 317.47 210.53 288 256 288Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sad"><path d="M414.39 97.61A224 224 0 1 0 97.61 414.39 224 224 0 1 0 414.39 97.61ZM184 208a24 24 0 1 1-24 24 23.94 23.94 0 0 1 24-24Zm-23.67 149.83c12-40.3 50.2-69.83 95.62-69.83s83.62 29.53 95.71 69.83a8 8 0 0 1-7.82 10.17H168.15a8 8 0 0 1-7.82-10.17ZM328 256a24 24 0 1 1 24-24 23.94 23.94 0 0 1-24 24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-save-outline"><path d="M380.93 57.37A32 32 0 0 0 358.3 48H94.22A46.21 46.21 0 0 0 48 94.22v323.56A46.21 46.21 0 0 0 94.22 464h323.56A46.36 46.36 0 0 0 464 417.78V153.7a32 32 0 0 0-9.37-22.63ZM256 416a64 64 0 1 1 64-64 63.92 63.92 0 0 1-64 64Zm48-224H112a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-save-sharp"><path d="M380.44 32H64a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h384a32.09 32.09 0 0 0 32-32V131.56ZM112 176v-64h192v64Zm223.91 179.76a80 80 0 1 1-83.66-83.67 80.21 80.21 0 0 1 83.66 83.67Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-save"><path d="m465.94 119.76-73.7-73.7A47.68 47.68 0 0 0 358.3 32H96a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V153.7a47.68 47.68 0 0 0-14.06-33.94ZM120 112h176a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H120a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8Zm139.75 319.91a80 80 0 1 1 76.16-76.16 80.06 80.06 0 0 1-76.16 76.16Z" /><circle cx="256" cy="352" r="48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-scale-outline"><rect x="48" y="48" width="416" height="416" rx="96" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" /><path d="M388.94 151.56c-24.46-22.28-68.72-51.4-132.94-51.4s-108.48 29.12-132.94 51.4a34.66 34.66 0 0 0-3.06 48.08l33.32 39.21a26.07 26.07 0 0 0 33.6 5.21c15.92-9.83 40.91-21.64 69.1-21.64s53.18 11.81 69.1 21.64a26.07 26.07 0 0 0 33.6-5.21L392 199.64a34.66 34.66 0 0 0-3.06-48.08Z" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-scale-sharp"><path d="M432 32H80a48.05 48.05 0 0 0-48 48v352a48.05 48.05 0 0 0 48 48h352a48.05 48.05 0 0 0 48-48V80a48.05 48.05 0 0 0-48-48Zm-16.71 165-52.46 61.73a27.83 27.83 0 0 1-37.65 4.62c-13-9.29-39.27-24.89-69.18-24.89s-56.18 15.6-69.18 24.89a27.84 27.84 0 0 1-37.65-4.62L96.71 197a32.12 32.12 0 0 1 .42-42c18.93-21.31 72.3-70.87 158.87-70.87S395.94 133.72 414.87 155a32.12 32.12 0 0 1 .42 42Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-scale"><path d="M368 32H144A112.12 112.12 0 0 0 32 144v224a112.12 112.12 0 0 0 112 112h224a112.12 112.12 0 0 0 112-112V144A112.12 112.12 0 0 0 368 32Zm36.21 178-33.32 39.21A41.76 41.76 0 0 1 339 264.05a42.32 42.32 0 0 1-22.29-6.38c-14.22-8.78-36.3-19.25-60.69-19.25s-46.47 10.47-60.69 19.25a41.86 41.86 0 0 1-54.2-8.46L107.79 210a50.48 50.48 0 0 1 4.49-70.27c27.84-25.35 75.37-55.57 143.72-55.57s115.88 30.22 143.72 55.57a50.48 50.48 0 0 1 4.49 70.27Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-scan-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M296 352h28a28 28 0 0 0 28-28v-28M352 216v-28a28 28 0 0 0-28-28h-28M216 352h-28a28 28 0 0 1-28-28v-28M160 216v-28a28 28 0 0 1 28-28h28" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-scan-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm-24 320h-44a44.05 44.05 0 0 1-44-44v-44h32v44a12 12 0 0 0 12 12h44Zm0-192h-44a12 12 0 0 0-12 12v44h-32v-44a44.05 44.05 0 0 1 44-44h44Zm136 148a44.05 44.05 0 0 1-44 44h-44v-32h44a12 12 0 0 0 12-12v-44h32Zm0-92h-32v-44a12 12 0 0 0-12-12h-44v-32h44a44.05 44.05 0 0 1 44 44Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-scan-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm-40 320h-28a44.05 44.05 0 0 1-44-44v-28a16 16 0 0 1 32 0v28a12 12 0 0 0 12 12h28a16 16 0 0 1 0 32Zm0-192h-28a12 12 0 0 0-12 12v28a16 16 0 0 1-32 0v-28a44.05 44.05 0 0 1 44-44h28a16 16 0 0 1 0 32Zm152 148a44.05 44.05 0 0 1-44 44h-28a16 16 0 0 1 0-32h28a12 12 0 0 0 12-12v-28a16 16 0 0 1 32 0Zm0-108a16 16 0 0 1-32 0v-28a12 12 0 0 0-12-12h-28a16 16 0 0 1 0-32h28a44.05 44.05 0 0 1 44 44Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-scan-outline"><path d="M336 448h56a56 56 0 0 0 56-56v-56M448 176v-56a56 56 0 0 0-56-56h-56M176 448h-56a56 56 0 0 1-56-56v-56M64 176v-56a56 56 0 0 1 56-56h56" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-scan-sharp"><path d="M388 466h-68v-44h68a34 34 0 0 0 34-34v-68h44v68a78.09 78.09 0 0 1-78 78ZM466 192h-44v-68a34 34 0 0 0-34-34h-68V46h68a78.09 78.09 0 0 1 78 78ZM192 466h-68a78.09 78.09 0 0 1-78-78v-68h44v68a34 34 0 0 0 34 34h68ZM90 192H46v-68a78.09 78.09 0 0 1 78-78h68v44h-68a34 34 0 0 0-34 34Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-scan"><path d="M342 444h46a56 56 0 0 0 56-56v-46M444 170v-46a56 56 0 0 0-56-56h-46M170 444h-46a56 56 0 0 1-56-56v-46M68 170v-46a56 56 0 0 1 56-56h46" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:44px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-school-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M32 192 256 64l224 128-224 128L32 192z" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M112 240v128l144 80 144-80V240M480 368V192M256 320v128" /></symbol><symbol  viewBox="0 0 512 512" id="icon-school-sharp"><path d="M256 370.43 96 279v98.42l160 88.88 160-88.88V279l-160 91.43z" /><path d="M512.25 192 256 45.57-.25 192 256 338.43l208-118.86V384h48V192.14l.25-.14z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-school"><path d="M256 368a16 16 0 0 1-7.94-2.11L108 285.84a8 8 0 0 0-12 6.94V368a16 16 0 0 0 8.23 14l144 80a16 16 0 0 0 15.54 0l144-80a16 16 0 0 0 8.23-14v-75.22a8 8 0 0 0-12-6.94l-140.06 80.05A16 16 0 0 1 256 368Z" /><path d="M495.92 190.5v-.11a16 16 0 0 0-8-12.28l-224-128a16 16 0 0 0-15.88 0l-224 128a16 16 0 0 0 0 27.78l224 128a16 16 0 0 0 15.88 0L461 221.28a2 2 0 0 1 3 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 0 0 496 368V192a14.76 14.76 0 0 0-.08-1.5Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-search-circle-outline"><path d="M256 80a176 176 0 1 0 176 176A176 176 0 0 0 256 80Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M232 160a72 72 0 1 0 72 72 72 72 0 0 0-72-72Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M283.64 283.64 336 336" /></symbol><symbol  viewBox="0 0 512 512" id="icon-search-circle-sharp"><path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64Zm80 294.63-54.15-54.15a88.08 88.08 0 1 1 22.63-22.63L358.63 336Z" /><circle cx="232" cy="232" r="56" /></symbol><symbol  viewBox="0 0 512 512" id="icon-search-circle"><path d="M256 64C150.13 64 64 150.13 64 256s86.13 192 192 192 192-86.13 192-192S361.87 64 256 64Zm91.31 283.31a16 16 0 0 1-22.62 0l-42.84-42.83a88.08 88.08 0 1 1 22.63-22.63l42.83 42.84a16 16 0 0 1 0 22.62Z" /><circle cx="232" cy="232" r="56" /></symbol><symbol  viewBox="0 0 512 512" id="icon-search-outline"><path d="M221.09 64a157.09 157.09 0 1 0 157.09 157.09A157.1 157.1 0 0 0 221.09 64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M338.29 338.29 448 448" /></symbol><symbol  viewBox="0 0 512 512" id="icon-search-sharp"><path d="M464 428 339.92 303.9a160.48 160.48 0 0 0 30.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0 0 94.58-30.72L428 464ZM209.32 319.69a110.38 110.38 0 1 1 110.37-110.37 110.5 110.5 0 0 1-110.37 110.37Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-search"><path d="M456.69 421.39 362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3ZM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8 124.95 124.95 0 0 1-124.8-124.8Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-send-outline"><path d="M470.3 271.15 43.16 447.31a7.83 7.83 0 0 1-11.16-7V327a8 8 0 0 1 6.51-7.86l247.62-47c17.36-3.29 17.36-28.15 0-31.44l-247.63-47a8 8 0 0 1-6.5-7.85V72.59c0-5.74 5.88-10.26 11.16-8L470.3 241.76a16 16 0 0 1 0 29.39Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-send-sharp"><path d="m16 464 480-208L16 48v160l320 48-320 48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-send"><path d="m476.59 227.05-.16-.07L49.35 49.84A23.56 23.56 0 0 0 27.14 52 24.65 24.65 0 0 0 16 72.59v113.29a24 24 0 0 0 19.52 23.57l232.93 43.07a4 4 0 0 1 0 7.86L35.53 303.45A24 24 0 0 0 16 327v113.31A23.57 23.57 0 0 0 26.59 460a23.94 23.94 0 0 0 13.22 4 24.55 24.55 0 0 0 9.52-1.93L476.4 285.94l.19-.09a32 32 0 0 0 0-58.8Z" /></symbol><symbol fill="none"  viewBox="0 0 512 512" id="icon-server-outline"><ellipse cx="256" cy="112" rx="176" ry="80" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" /><path d="M432 112v288c0 44.183-78.798 80-176 80S80 444.183 80 400V112" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" /><path d="M432 256c0 44.183-78.798 80-176 80S80 300.183 80 256" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol  viewBox="0 0 512 512" id="icon-server-sharp"><path d="M125.295 40.728C159.804 25.158 206.27 16 256.5 16c50.23 0 96.466 9.159 130.748 24.748C420.143 55.706 448 80 448 112v.03c-.011 5.533-3.098 13.89-12.295 24.22-8.995 10.102-22.617 20.658-40.273 30.264C360.162 185.702 310.794 200 256 200c-54.794 0-104.162-14.298-139.432-33.486-17.656-9.606-31.278-20.162-40.273-30.264C67.081 125.901 64 117.532 64 112c0-32.428 28.246-56.36 61.295-71.272Z" /><path d="M410.724 194.623c14.213-7.731 26.834-18.379 37.276-29.599V258c0 5.532-3.081 11.901-12.295 22.25-8.995 10.102-22.617 20.658-40.273 30.264C360.162 329.702 310.794 344 256 344c-54.794 0-104.162-14.298-139.432-33.486-17.656-9.606-31.278-20.162-40.273-30.264C67.081 269.901 64 263.532 64 258v-92.976c10.442 11.22 23.063 21.868 37.276 29.599C141.286 216.39 195.918 232 256 232c60.082 0 114.714-15.61 154.724-37.377Z" /><path d="M64 309.024V400c0 32.224 28.004 56.169 60.928 71.134C159.297 486.756 205.653 496 256 496c50.347 0 96.703-9.244 131.072-24.866C419.996 456.169 448 432.224 448 400v-90.976c-10.442 11.22-23.063 21.868-37.276 29.599C370.714 360.39 316.082 376 256 376c-60.082 0-114.714-15.61-154.724-37.377-14.213-7.731-26.834-18.379-37.276-29.599Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-server"><path d="M125.295 40.728C159.804 25.158 206.27 16 256.5 16c50.23 0 96.466 9.159 130.748 24.748C420.143 55.706 448 80 448 112v.03c-.011 5.533-3.098 13.89-12.295 24.22-8.995 10.102-22.617 20.658-40.273 30.264C360.162 185.702 310.794 200 256 200c-54.794 0-104.162-14.298-139.432-33.486-17.656-9.606-31.278-20.162-40.273-30.264C67.081 125.901 64 117.532 64 112c0-32.428 28.246-56.36 61.295-71.272Z" /><path d="M410.724 194.623c9.586-5.214 18.448-11.755 26.406-18.904 4.054-3.642 10.87-.89 10.87 4.56V258c0 5.532-3.081 11.901-12.295 22.25-8.995 10.102-22.617 20.658-40.273 30.264C360.162 329.702 310.794 344 256 344c-54.794 0-104.162-14.298-139.432-33.486-17.656-9.606-31.278-20.162-40.273-30.264C67.081 269.901 64 263.532 64 258v-77.721c0-5.45 6.816-8.202 10.87-4.56 7.958 7.148 16.82 13.69 26.406 18.904C141.286 216.39 195.918 232 256 232c60.082 0 114.714-15.61 154.724-37.377Z" /><path d="M74.87 319.719c-4.054-3.642-10.87-.89-10.87 4.56V400c0 32.224 28.004 56.169 60.928 71.134C159.297 486.756 205.653 496 256 496c50.347 0 96.703-9.244 131.072-24.866C419.996 456.169 448 432.224 448 400v-75.721c0-5.45-6.816-8.202-10.87-4.56-7.958 7.148-16.82 13.69-26.406 18.904C370.714 360.39 316.082 376 256 376c-60.082 0-114.714-15.61-154.724-37.377-9.586-5.214-18.448-11.756-26.406-18.904Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-settings-outline"><path d="M262.29 192.31a64 64 0 1 0 57.4 57.4 64.13 64.13 0 0 0-57.4-57.4ZM416.39 256a154.34 154.34 0 0 1-1.53 20.79l45.21 35.46a10.81 10.81 0 0 1 2.45 13.75l-42.77 74a10.81 10.81 0 0 1-13.14 4.59l-44.9-18.08a16.11 16.11 0 0 0-15.17 1.75A164.48 164.48 0 0 1 325 400.8a15.94 15.94 0 0 0-8.82 12.14l-6.73 47.89a11.08 11.08 0 0 1-10.68 9.17h-85.54a11.11 11.11 0 0 1-10.69-8.87l-6.72-47.82a16.07 16.07 0 0 0-9-12.22 155.3 155.3 0 0 1-21.46-12.57 16 16 0 0 0-15.11-1.71l-44.89 18.07a10.81 10.81 0 0 1-13.14-4.58l-42.77-74a10.8 10.8 0 0 1 2.45-13.75l38.21-30a16.05 16.05 0 0 0 6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16 16 0 0 0-6.07-13.94l-38.19-30A10.81 10.81 0 0 1 49.48 186l42.77-74a10.81 10.81 0 0 1 13.14-4.59l44.9 18.08a16.11 16.11 0 0 0 15.17-1.75A164.48 164.48 0 0 1 187 111.2a15.94 15.94 0 0 0 8.82-12.14l6.73-47.89A11.08 11.08 0 0 1 213.23 42h85.54a11.11 11.11 0 0 1 10.69 8.87l6.72 47.82a16.07 16.07 0 0 0 9 12.22 155.3 155.3 0 0 1 21.46 12.57 16 16 0 0 0 15.11 1.71l44.89-18.07a10.81 10.81 0 0 1 13.14 4.58l42.77 74a10.8 10.8 0 0 1-2.45 13.75l-38.21 30a16.05 16.05 0 0 0-6.05 14.08c.33 4.14.55 8.3.55 12.47Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-settings-sharp"><path d="M256 176a80 80 0 1 0 80 80 80.24 80.24 0 0 0-80-80Zm172.72 80a165.53 165.53 0 0 1-1.64 22.34l48.69 38.12a11.59 11.59 0 0 1 2.63 14.78l-46.06 79.52a11.64 11.64 0 0 1-14.14 4.93l-57.25-23a176.56 176.56 0 0 1-38.82 22.67l-8.56 60.78a11.93 11.93 0 0 1-11.51 9.86h-92.12a12 12 0 0 1-11.51-9.53l-8.56-60.78A169.3 169.3 0 0 1 151.05 393L93.8 416a11.64 11.64 0 0 1-14.14-4.92L33.6 331.57a11.59 11.59 0 0 1 2.63-14.78l48.69-38.12A174.58 174.58 0 0 1 83.28 256a165.53 165.53 0 0 1 1.64-22.34l-48.69-38.12a11.59 11.59 0 0 1-2.63-14.78l46.06-79.52a11.64 11.64 0 0 1 14.14-4.93l57.25 23a176.56 176.56 0 0 1 38.82-22.67l8.56-60.78A11.93 11.93 0 0 1 209.94 26h92.12a12 12 0 0 1 11.51 9.53l8.56 60.78A169.3 169.3 0 0 1 361 119l57.2-23a11.64 11.64 0 0 1 14.14 4.92l46.06 79.52a11.59 11.59 0 0 1-2.63 14.78l-48.69 38.12a174.58 174.58 0 0 1 1.64 22.66Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-settings"><circle cx="256" cy="256" r="48" /><path d="m470.39 300-.47-.38-31.56-24.75a16.11 16.11 0 0 1-6.1-13.33v-11.56a16 16 0 0 1 6.11-13.22L469.92 212l.47-.38a26.68 26.68 0 0 0 5.9-34.06l-42.71-73.9a1.59 1.59 0 0 1-.13-.22A26.86 26.86 0 0 0 401 92.14l-.35.13-37.1 14.93a15.94 15.94 0 0 1-14.47-1.29q-4.92-3.1-10-5.86a15.94 15.94 0 0 1-8.19-11.82l-5.59-39.59-.12-.72A27.22 27.22 0 0 0 298.76 26h-85.52a26.92 26.92 0 0 0-26.45 22.39l-.09.56-5.57 39.67a16 16 0 0 1-8.13 11.82 175.21 175.21 0 0 0-10 5.82 15.92 15.92 0 0 1-14.43 1.27l-37.13-15-.35-.14a26.87 26.87 0 0 0-32.48 11.34l-.13.22-42.77 73.95a26.71 26.71 0 0 0 5.9 34.1l.47.38 31.56 24.75a16.11 16.11 0 0 1 6.1 13.33v11.56a16 16 0 0 1-6.11 13.22L42.08 300l-.47.38a26.68 26.68 0 0 0-5.9 34.06l42.71 73.9a1.59 1.59 0 0 1 .13.22 26.86 26.86 0 0 0 32.45 11.3l.35-.13 37.07-14.93a15.94 15.94 0 0 1 14.47 1.29q4.92 3.11 10 5.86a15.94 15.94 0 0 1 8.19 11.82l5.56 39.59.12.72A27.22 27.22 0 0 0 213.24 486h85.52a26.92 26.92 0 0 0 26.45-22.39l.09-.56 5.57-39.67a16 16 0 0 1 8.18-11.82c3.42-1.84 6.76-3.79 10-5.82a15.92 15.92 0 0 1 14.43-1.27l37.13 14.95.35.14a26.85 26.85 0 0 0 32.48-11.34 2.53 2.53 0 0 1 .13-.22l42.71-73.89a26.7 26.7 0 0 0-5.89-34.11Zm-134.48-40.24a80 80 0 1 1-83.66-83.67 80.21 80.21 0 0 1 83.66 83.67Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shapes-outline"><path style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" d="M336 320H32L184 48l152 272z" /><path d="M265.32 194.51A144 144 0 1 1 192 320" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shapes-sharp"><path d="M363.27 336H4.73L184 16Z" /><path d="M336 160a160.54 160.54 0 0 0-32.55 3.36l87.75 157L417.81 368H183.36C203.8 432.85 264.49 480 336 480c88.22 0 160-71.78 160-160s-71.78-160-160-160Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shapes"><path d="M336 336H32a16 16 0 0 1-14-23.81l152-272a16 16 0 0 1 27.94 0l152 272A16 16 0 0 1 336 336Z" /><path d="M336 160a161.07 161.07 0 0 0-32.57 3.32l74.47 133.27A48 48 0 0 1 336 368H183.33A160 160 0 1 0 336 160Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-share-outline"><path d="M336 192h40a40 40 0 0 1 40 40v192a40 40 0 0 1-40 40H136a40 40 0 0 1-40-40V232a40 40 0 0 1 40-40h40M336 128l-80-80-80 80M256 321V48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-share-sharp"><path d="M272 176v161h-32V176H92a12 12 0 0 0-12 12v280a12 12 0 0 0 12 12h328a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12ZM272 92.63l64 64L358.63 134 256 31.37 153.37 134 176 156.63l64-64V176h32V92.63z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-share-social-outline"><circle cx="128" cy="256" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="384" cy="112" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="384" cy="400" r="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m169.83 279.53 172.34 96.94M342.17 135.53l-172.34 96.94" /></symbol><symbol  viewBox="0 0 512 512" id="icon-share-social-sharp"><path d="M378 324a69.78 69.78 0 0 0-48.83 19.91L202 272.41a69.68 69.68 0 0 0 0-32.82l127.13-71.5A69.76 69.76 0 1 0 308.87 129l-130.13 73.2a70 70 0 1 0 0 107.56L308.87 383A70 70 0 1 0 378 324Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-share-social"><path d="M384 336a63.78 63.78 0 0 0-46.12 19.7l-148-83.27a63.85 63.85 0 0 0 0-32.86l148-83.27a63.8 63.8 0 1 0-15.73-27.87l-148 83.27a64 64 0 1 0 0 88.6l148 83.27A64 64 0 1 0 384 336Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-share"><path d="M376 176H272v145a16 16 0 0 1-32 0V176H136a56.06 56.06 0 0 0-56 56v192a56.06 56.06 0 0 0 56 56h240a56.06 56.06 0 0 0 56-56V232a56.06 56.06 0 0 0-56-56ZM272 86.63l52.69 52.68a16 16 0 0 0 22.62-22.62l-80-80a16 16 0 0 0-22.62 0l-80 80a16 16 0 0 0 22.62 22.62L240 86.63V176h32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shield-checkmark-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M336 176 225.2 304 176 255.8" /><path d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shield-checkmark-sharp"><path d="m479.07 111.36-.79-12.53-12.36-2.21c-86.5-15.52-122.61-26.74-203.33-63.2l-6.59-3-6.59 3C168.69 69.88 132.58 81.1 46.08 96.62l-12.36 2.21-.79 12.53c-3.85 61.11 4.36 118.05 24.43 169.24A349.47 349.47 0 0 0 129 393.11c53.47 56.73 110.24 81.37 121.07 85.73l6 2.41 6-2.41c10.83-4.36 67.6-29 121.07-85.73a349.47 349.47 0 0 0 71.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24Zm-252.91 216L153.37 256l22.4-22.86 48.47 47.49 110.13-127.2 24.2 20.94Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shield-checkmark"><path d="M479.07 111.36a16 16 0 0 0-13.15-14.74c-86.5-15.52-122.61-26.74-203.33-63.2a16 16 0 0 0-13.18 0C168.69 69.88 132.58 81.1 46.08 96.62a16 16 0 0 0-13.15 14.74c-3.85 61.11 4.36 118.05 24.43 169.24A349.47 349.47 0 0 0 129 393.11c53.47 56.73 110.24 81.37 121.07 85.73a16 16 0 0 0 12 0c10.83-4.36 67.6-29 121.07-85.73a349.47 349.47 0 0 0 71.5-112.51c20.07-51.19 28.28-108.13 24.43-169.24Zm-131 75.11-110.8 128a16 16 0 0 1-11.41 5.53h-.66a16 16 0 0 1-11.2-4.57l-49.2-48.2a16 16 0 1 1 22.4-22.86l37 36.29 99.7-115.13a16 16 0 0 1 24.2 20.94Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shield-half-outline"><path d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path d="M256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shield-half-sharp"><path d="M256 32C174 69.06 121.38 86.46 32 96c0 77.59 5.27 133.36 25.29 184.51a348.86 348.86 0 0 0 71.43 112.41c49.6 52.66 104.17 80.4 127.28 87.08 23.11-6.68 77.68-34.42 127.28-87.08a348.86 348.86 0 0 0 71.43-112.41C474.73 229.36 480 173.59 480 96c-89.38-9.54-142-26.94-224-64Zm161.47 233.93a309.18 309.18 0 0 1-63.31 99.56C316 406 276.65 428.31 256 437.36V75.8c38.75 17 68.73 28.3 97.93 36.89a613.12 613.12 0 0 0 85.6 18.52c-1.72 60.22-8.36 99.69-22.06 134.72Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shield-half"><path d="M48.9 112.37C138.32 96.33 175.29 84.45 256 48c80.71 36.45 117.68 48.33 207.1 64.37C479.3 369.13 271.42 457.79 256 464c-15.42-6.21-223.3-94.87-207.1-351.63Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /><path d="M256 48c80.71 36.45 117.68 48.33 207.1 64.37C479.3 369.13 271.42 457.79 256 464Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shield-outline"><path d="M463.1 112.37C373.68 96.33 336.71 84.45 256 48c-80.71 36.45-117.68 48.33-207.1 64.37C32.7 369.13 240.58 457.79 256 464c15.42-6.21 223.3-94.87 207.1-351.63Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shield-sharp"><path d="M256 32C174 69.06 121.38 86.46 32 96c0 77.59 5.27 133.36 25.29 184.51a348.86 348.86 0 0 0 71.43 112.41c49.6 52.66 104.17 80.4 127.28 87.08 23.11-6.68 77.68-34.42 127.28-87.08a348.86 348.86 0 0 0 71.43-112.41C474.73 229.36 480 173.59 480 96c-89.38-9.54-142-26.94-224-64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shield"><path d="M479.07 111.35a16 16 0 0 0-13.15-14.75C379.89 81.18 343.69 69.12 266 34.16c-7.76-2.89-12.57-2.84-20 0-77.69 35-113.89 47-199.92 62.44a16 16 0 0 0-13.15 14.75c-3.85 61.1 4.34 118 24.36 169.15a348.86 348.86 0 0 0 71.43 112.41c44.67 47.43 94.2 75.12 119.74 85.6a20 20 0 0 0 15.11 0c27-10.92 74.69-37.82 119.71-85.62a348.86 348.86 0 0 0 71.43-112.39c20.02-51.14 28.21-108.05 24.36-169.15Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shirt-outline"><path d="M314.56 48s-22.78 8-58.56 8-58.56-8-58.56-8a31.94 31.94 0 0 0-10.57 1.8L32 104l16.63 88 48.88 5.52a24 24 0 0 1 21.29 24.58L112 464h288l-6.8-241.9a24 24 0 0 1 21.29-24.58l48.88-5.52L480 104 325.13 49.8a31.94 31.94 0 0 0-10.57-1.8Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M333.31 52.66a80 80 0 0 1-154.62 0" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shirt-sharp"><path d="M256 42c-33.88 0-64-10-64-10v2a64 64 0 0 0 128 0v-2s-30.12 10-64 10Z" /><path d="M352 44c-5.49 47.76-46.79 85-96 85s-90.51-37.24-96-85L16 94l18 114 61.71 7.42c7.08.9 7.1.9 7.1 8.19L96 480h320l-6.81-256.39c-.21-7-.21-7 7.1-8.19L478 208l18-114Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shirt"><path d="M256 96c33.08 0 60.71-25.78 64-58 .3-3-3-6-6-6a13 13 0 0 0-4.74.9c-.2.08-21.1 8.1-53.26 8.1s-53.1-8-53.26-8.1a16.21 16.21 0 0 0-5.3-.9h-.06a5.69 5.69 0 0 0-5.38 6c3.35 32.16 31 58 64 58Z" /><path d="M485.29 89.9 356 44.64a4 4 0 0 0-5.27 3.16 96 96 0 0 1-189.38 0 4 4 0 0 0-5.35-3.16L26.71 89.9A16 16 0 0 0 16.28 108l16.63 88a16 16 0 0 0 13.92 12.9l48.88 5.52a8 8 0 0 1 7.1 8.19l-7.33 240.9a16 16 0 0 0 9.1 14.94A17.49 17.49 0 0 0 112 480h288a17.49 17.49 0 0 0 7.42-1.55 16 16 0 0 0 9.1-14.94l-7.33-240.9a8 8 0 0 1 7.1-8.19l48.88-5.52a16 16 0 0 0 13.92-12.9l16.63-88a16 16 0 0 0-10.43-18.1Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shuffle-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m400 304 48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0 0 66.56-35.62L256 256" /><path d="M64 160h85.19a80 80 0 0 1 66.56 35.62l80.5 120.76A80 80 0 0 0 362.81 352H416M416 160h-53.19a80 80 0 0 0-66.56 35.62L288 208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shuffle-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="m400 304 48 48-48 48M400 112l48 48-48 48M64 352h128l60-92" /><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M64 160h128l128 192h96M416 160h-96l-32 48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-shuffle"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m400 304 48 48-48 48M400 112l48 48-48 48M64 352h85.19a80 80 0 0 0 66.56-35.62L256 256" /><path d="M64 160h85.19a80 80 0 0 1 66.56 35.62l80.5 120.76A80 80 0 0 0 362.81 352H416M416 160h-53.19a80 80 0 0 0-66.56 35.62L288 208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-skull-outline"><path d="M448 225.64v99a64 64 0 0 1-40.23 59.42l-23.68 9.47A32 32 0 0 0 364.6 417l-10 50.14A16 16 0 0 1 338.88 480H173.12a16 16 0 0 1-15.69-12.86L147.4 417a32 32 0 0 0-19.49-23.44l-23.68-9.47A64 64 0 0 1 64 324.67V224c0-105.92 85.77-191.81 191.65-192S448 119.85 448 225.64Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><circle cx="168" cy="280" r="40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><circle cx="344" cy="280" r="40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m256 336-16 48h32l-16-48zM256 448v32M208 448v32M304 448v32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-skull-sharp"><path d="M256 16C141.31 16 48 109.31 48 224v154.83l82 32.81L146.88 496H192v-64h32v64h16v-64h32v64h16v-64h32v64h45.12L382 411.64l82-32.81V224c0-114.69-93.31-208-208-208Zm-88 320a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56Zm51.51 64L244 320h24l24.49 80ZM344 336a56 56 0 1 1 56-56 56.06 56.06 0 0 1-56 56Zm104 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-skull"><path d="M402 76.94C362.61 37.63 310.78 16 256 16h-.37A208 208 0 0 0 48 224v100.67A79.62 79.62 0 0 0 98.29 399l23.71 9.42a15.92 15.92 0 0 1 9.75 11.72l10 50.13A32.09 32.09 0 0 0 173.12 496H184a8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 224 448v40a8 8 0 0 0 8 8 8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 448v40a8 8 0 0 0 8 8 8 8 0 0 0 8-8v-39.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 320 448v40a8 8 0 0 0 8 8h10.88a32.09 32.09 0 0 0 31.38-25.72l10-50.14a16 16 0 0 1 9.74-11.72l23.71-9.42A79.62 79.62 0 0 0 464 324.67v-99c0-56-22-108.81-62-148.73ZM171.66 335.88a56 56 0 1 1 52.22-52.22 56 56 0 0 1-52.22 52.22ZM281 397.25a16.37 16.37 0 0 1-9.3 2.75h-31.4a16.37 16.37 0 0 1-9.28-2.75 16 16 0 0 1-6.6-16.9l15.91-47.6C243 326 247.25 321 254 320.13c8.26-1 14 2.87 17.61 12.22l16 48a16 16 0 0 1-6.61 16.9Zm66.68-61.37a56 56 0 1 1 52.22-52.22 56 56 0 0 1-52.24 52.22Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-snow-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M256 32v448M313.72 80A111.47 111.47 0 0 1 256 96a111.47 111.47 0 0 1-57.72-16M198.28 432a112.11 112.11 0 0 1 115.44 0M449.99 144 62.01 368M437.27 218a112.09 112.09 0 0 1-57.71-100M74.73 294a112.09 112.09 0 0 1 57.71 100M62.01 144l387.98 224M74.73 218a112.09 112.09 0 0 0 57.71-100M437.27 294a112.09 112.09 0 0 0-57.71 100" /></symbol><symbol  viewBox="0 0 512 512" id="icon-snow-sharp"><path d="m447.88 313.27 19.25-10.64-21.28-38.51-19.25 10.64a133.42 133.42 0 0 0-38.54 32.1L300 256l88.07-50.86a133.42 133.42 0 0 0 38.54 32.1l19.25 10.64 21.28-38.51-19.25-10.64a89.27 89.27 0 0 1-20.93-16L480 152.05 458 114l-53 30.58a89.07 89.07 0 0 1-3.42-26.15l.41-22-44-.82-.41 22a133.62 133.62 0 0 0 8.49 49.39L278 217.89V116.18a133.52 133.52 0 0 0 47.06-17.33L343.9 87.5l-22.71-37.69-18.84 11.35A89.5 89.5 0 0 1 278 71.27V16h-44v55.27a89.5 89.5 0 0 1-24.35-10.11l-18.84-11.35L168.1 87.5l18.84 11.35A133.52 133.52 0 0 0 234 116.18v101.71L145.93 167a133.62 133.62 0 0 0 8.53-49.43l-.41-22-44 .82.41 22a89.07 89.07 0 0 1-3.42 26.15L54 114l-22 38.1 53.05 30.64a89.27 89.27 0 0 1-20.93 16l-19.25 10.63 21.28 38.51 19.25-10.64a133.42 133.42 0 0 0 38.54-32.1L212 256l-88.07 50.86a133.42 133.42 0 0 0-38.54-32.1l-19.24-10.64-21.28 38.51 19.25 10.64a89.27 89.27 0 0 1 20.93 16L32 360l22 38.1 53.05-30.63a89.07 89.07 0 0 1 3.42 26.15l-.41 22 44 .82.41-22a133.62 133.62 0 0 0-8.54-49.44L234 294.11v101.71a133.52 133.52 0 0 0-47.06 17.33L168.1 424.5l22.71 37.69 18.84-11.35A89.5 89.5 0 0 1 234 440.73V496h44v-55.27a89.5 89.5 0 0 1 24.35 10.11l18.84 11.35 22.71-37.69-18.84-11.35A133.52 133.52 0 0 0 278 395.82V294.11L366.07 345a133.62 133.62 0 0 0-8.53 49.43l.41 22 44-.82-.41-22a89.07 89.07 0 0 1 3.46-26.19l53 30.63L480 360l-53-30.69a89.27 89.27 0 0 1 20.88-16.04Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-snow"><path d="m461 349-34-19.64a89.53 89.53 0 0 1 20.94-16 22 22 0 0 0-21.28-38.51 133.62 133.62 0 0 0-38.55 32.1L300 256l88.09-50.86a133.46 133.46 0 0 0 38.55 32.1 22 22 0 1 0 21.28-38.51 89.74 89.74 0 0 1-20.94-16l34-19.64A22 22 0 1 0 439 125l-34 19.63a89.74 89.74 0 0 1-3.42-26.15A22 22 0 0 0 380 96h-.41a22 22 0 0 0-22 21.59 133.61 133.61 0 0 0 8.5 49.41L278 217.89V116.18a133.5 133.5 0 0 0 47.07-17.33 22 22 0 0 0-22.71-37.69A89.56 89.56 0 0 1 278 71.27V38a22 22 0 0 0-44 0v33.27a89.56 89.56 0 0 1-24.36-10.11 22 22 0 1 0-22.71 37.69A133.5 133.5 0 0 0 234 116.18v101.71L145.91 167a133.61 133.61 0 0 0 8.52-49.43 22 22 0 0 0-22-21.59H132a22 22 0 0 0-21.59 22.41 89.74 89.74 0 0 1-3.41 26.19L73 125a22 22 0 1 0-22 38.1l34 19.64a89.74 89.74 0 0 1-20.94 16 22 22 0 1 0 21.28 38.51 133.62 133.62 0 0 0 38.55-32.1L212 256l-88.09 50.86a133.62 133.62 0 0 0-38.55-32.1 22 22 0 1 0-21.28 38.51 89.74 89.74 0 0 1 20.94 16L51 349a22 22 0 1 0 22 38.1l34-19.63a89.74 89.74 0 0 1 3.42 26.15A22 22 0 0 0 132 416h.41a22 22 0 0 0 22-21.59 133.61 133.61 0 0 0-8.5-49.41L234 294.11v101.71a133.5 133.5 0 0 0-47.07 17.33 22 22 0 1 0 22.71 37.69A89.56 89.56 0 0 1 234 440.73V474a22 22 0 0 0 44 0v-33.27a89.56 89.56 0 0 1 24.36 10.11 22 22 0 0 0 22.71-37.69A133.5 133.5 0 0 0 278 395.82V294.11L366.09 345a133.61 133.61 0 0 0-8.52 49.43 22 22 0 0 0 22 21.59h.43a22 22 0 0 0 21.59-22.41 89.74 89.74 0 0 1 3.41-26.19l34 19.63A22 22 0 1 0 461 349Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sparkles-outline"><path d="M259.92 262.91 216.4 149.77a9 9 0 0 0-16.8 0l-43.52 113.14a9 9 0 0 1-5.17 5.17L37.77 311.6a9 9 0 0 0 0 16.8l113.14 43.52a9 9 0 0 1 5.17 5.17l43.52 113.14a9 9 0 0 0 16.8 0l43.52-113.14a9 9 0 0 1 5.17-5.17l113.14-43.52a9 9 0 0 0 0-16.8l-113.14-43.52a9 9 0 0 1-5.17-5.17ZM108 68 88 16 68 68 16 88l52 20 20 52 20-52 52-20-52-20zM426.67 117.33 400 48l-26.67 69.33L304 144l69.33 26.67L400 240l26.67-69.33L496 144l-69.33-26.67z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sparkles-sharp"><path d="m208 512-52.38-139.62L16 320l139.62-52.38L208 128l52.38 139.62L400 320l-139.62 52.38ZM88 176l-23.57-64.43L0 88l64.43-23.57L88 0l23.57 64.43L176 88l-64.43 23.57ZM400 256l-31.11-80.89L288 144l80.89-31.11L400 32l31.11 80.89L512 144l-80.89 31.11Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sparkles"><path d="M208 512a24.84 24.84 0 0 1-23.34-16l-39.84-103.6a16.06 16.06 0 0 0-9.19-9.19L32 343.34a25 25 0 0 1 0-46.68l103.6-39.84a16.06 16.06 0 0 0 9.19-9.19L184.66 144a25 25 0 0 1 46.68 0l39.84 103.6a16.06 16.06 0 0 0 9.19 9.19l103 39.63a25.49 25.49 0 0 1 16.63 24.1 24.82 24.82 0 0 1-16 22.82l-103.6 39.84a16.06 16.06 0 0 0-9.19 9.19L231.34 496A24.84 24.84 0 0 1 208 512Zm66.85-254.84ZM88 176a14.67 14.67 0 0 1-13.69-9.4l-16.86-43.84a7.28 7.28 0 0 0-4.21-4.21L9.4 101.69a14.67 14.67 0 0 1 0-27.38l43.84-16.86a7.31 7.31 0 0 0 4.21-4.21L74.16 9.79A15 15 0 0 1 86.23.11a14.67 14.67 0 0 1 15.46 9.29l16.86 43.84a7.31 7.31 0 0 0 4.21 4.21l43.84 16.86a14.67 14.67 0 0 1 0 27.38l-43.84 16.86a7.28 7.28 0 0 0-4.21 4.21l-16.86 43.84A14.67 14.67 0 0 1 88 176ZM400 256a16 16 0 0 1-14.93-10.26l-22.84-59.37a8 8 0 0 0-4.6-4.6l-59.37-22.84a16 16 0 0 1 0-29.86l59.37-22.84a8 8 0 0 0 4.6-4.6l22.67-58.95a16.45 16.45 0 0 1 13.17-10.57 16 16 0 0 1 16.86 10.15l22.84 59.37a8 8 0 0 0 4.6 4.6l59.37 22.84a16 16 0 0 1 0 29.86l-59.37 22.84a8 8 0 0 0-4.6 4.6l-22.84 59.37A16 16 0 0 1 400 256Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-speedometer-outline"><path d="m326.1 231.9-47.5 75.5a31 31 0 0 1-7 7 30.11 30.11 0 0 1-35-49l75.5-47.5a10.23 10.23 0 0 1 11.7 0 10.06 10.06 0 0 1 2.3 14Z" /><path d="M256 64C132.3 64 32 164.2 32 287.9a223.18 223.18 0 0 0 56.3 148.5c1.1 1.2 2.1 2.4 3.2 3.5a25.19 25.19 0 0 0 37.1-.1 173.13 173.13 0 0 1 254.8 0 25.19 25.19 0 0 0 37.1.1l3.2-3.5A223.18 223.18 0 0 0 480 287.9C480 164.2 379.7 64 256 64Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M256 128v32M416 288h-32M128 288H96M165.49 197.49l-22.63-22.63M346.51 197.49l22.63-22.63" /></symbol><symbol  viewBox="0 0 512 512" id="icon-speedometer-sharp"><path d="M256 48C123.46 48 16 156.55 16 290.56a243.3 243.3 0 0 0 60.32 160.87c1.18 1.3 2.25 2.6 3.43 3.79C89.2 464 92.07 464 99.57 464s12.43 0 19.93-8.88C152 416.64 202 400 256 400s104.07 16.71 136.5 55.12C400 464 404.82 464 412.43 464s11.3 0 19.82-8.78c1.22-1.25 2.25-2.49 3.43-3.79A243.3 243.3 0 0 0 496 290.56C496 156.55 388.54 48 256 48Zm-16 64h32v64h-32Zm-96 192H80v-32h64Zm21.49-83.88-45.25-45.26 22.62-22.62 45.26 45.25ZM278.6 307.4a31 31 0 0 1-7 7 30.11 30.11 0 0 1-35-49L320 224Zm45.28-109.91 45.26-45.25 22.62 22.62-45.25 45.26ZM432 304h-64v-32h64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-speedometer"><path d="M425.7 118.25A240 240 0 0 0 76.32 447l.18.2c.33.35.64.71 1 1.05.74.84 1.58 1.79 2.57 2.78a41.17 41.17 0 0 0 60.36-.42 157.13 157.13 0 0 1 231.26 0 41.18 41.18 0 0 0 60.65.06l3.21-3.5.18-.2a239.93 239.93 0 0 0-10-328.76ZM240 128a16 16 0 0 1 32 0v32a16 16 0 0 1-32 0ZM128 304H96a16 16 0 0 1 0-32h32a16 16 0 0 1 0 32Zm48.8-95.2a16 16 0 0 1-22.62 0l-22.63-22.62a16 16 0 0 1 22.63-22.63l22.62 22.63a16 16 0 0 1 0 22.62Zm149.3 23.1-47.5 75.5a31 31 0 0 1-7 7 30.11 30.11 0 0 1-35-49l75.5-47.5a10.23 10.23 0 0 1 11.7 0 10.06 10.06 0 0 1 2.3 14Zm31.72-23.1a16 16 0 0 1-22.62-22.62l22.62-22.63a16 16 0 0 1 22.63 22.63Zm65.88 227.6ZM416 304h-32a16 16 0 0 1 0-32h32a16 16 0 0 1 0 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-square-outline"><path d="M416 448H96a32.09 32.09 0 0 1-32-32V96a32.09 32.09 0 0 1 32-32h320a32.09 32.09 0 0 1 32 32v320a32.09 32.09 0 0 1-32 32Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-square-sharp"><path d="M48 48h416v416H48z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-square"><path d="M416 464H96a48.05 48.05 0 0 1-48-48V96a48.05 48.05 0 0 1 48-48h320a48.05 48.05 0 0 1 48 48v320a48.05 48.05 0 0 1-48 48Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-star-half-outline"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M256 48v316L118 464l54-160-140-96h172l52-160z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-star-half-sharp"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3ZM274.63 347.82 256 334.49v-200.1l26 78.91 7.24 22h105.39l-67.32 47.2-19.69 13.81 7.78 22.75 26.26 76.75Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-star-half"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M256 48v316L118 464l54-160-140-96h172l52-160z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-star-outline"><path d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160Z" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-star-sharp"><path d="M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-star"><path d="M394 480a16 16 0 0 1-9.39-3L256 383.76 127.39 477a16 16 0 0 1-24.55-18.08L153 310.35 23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-stats-chart-outline"><rect x="64" y="320" width="48" height="160" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="288" y="224" width="48" height="256" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="400" y="112" width="48" height="368" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="176" y="32" width="48" height="448" rx="8" ry="8" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-stats-chart-sharp"><path d="M128 496H48V304h80ZM352 496h-80V208h80ZM464 496h-80V96h80ZM240 496h-80V16h80Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-stats-chart"><path d="M104 496H72a24 24 0 0 1-24-24V328a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v144a24 24 0 0 1-24 24ZM328 496h-32a24 24 0 0 1-24-24V232a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v240a24 24 0 0 1-24 24ZM440 496h-32a24 24 0 0 1-24-24V120a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v352a24 24 0 0 1-24 24ZM216 496h-32a24 24 0 0 1-24-24V40a24 24 0 0 1 24-24h32a24 24 0 0 1 24 24v432a24 24 0 0 1-24 24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-stop-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M310.4 336H201.6a25.62 25.62 0 0 1-25.6-25.6V201.6a25.62 25.62 0 0 1 25.6-25.6h108.8a25.62 25.62 0 0 1 25.6 25.6v108.8a25.62 25.62 0 0 1-25.6 25.6Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-stop-circle-sharp"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm80 288H176V176h160Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-stop-circle"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48Zm80 262.4a25.62 25.62 0 0 1-25.6 25.6H201.6a25.62 25.62 0 0 1-25.6-25.6V201.6a25.62 25.62 0 0 1 25.6-25.6h108.8a25.62 25.62 0 0 1 25.6 25.6Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-stop-outline"><rect x="96" y="96" width="320" height="320" rx="24" ry="24" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-stop-sharp"><path d="M80 80h352v352H80z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-stop"><path d="M392 432H120a40 40 0 0 1-40-40V120a40 40 0 0 1 40-40h272a40 40 0 0 1 40 40v272a40 40 0 0 1-40 40Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-stopwatch-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M256 232v-80" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:48px" d="M256 88V72M132 132l-12-12" /><circle cx="256" cy="272" r="32" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M256 96a176 176 0 1 0 176 176A176 176 0 0 0 256 96Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-stopwatch-sharp"><path d="M280 81.5V48h-48v33.5a191 191 0 0 0-84.43 32.13L120 86l-34 34 25.59 25.59A191.17 191.17 0 0 0 64 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5ZM256 320a48 48 0 0 1-16-93.25V136h32v90.75A48 48 0 0 1 256 320Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-stopwatch"><circle cx="256" cy="272" r="16" /><path d="M280 81.5V72a24 24 0 0 0-48 0v9.5a191 191 0 0 0-84.43 32.13L137 103a24 24 0 0 0-34 34l8.6 8.6A191.17 191.17 0 0 0 64 272c0 105.87 86.13 192 192 192s192-86.13 192-192c0-97.74-73.42-178.66-168-190.5ZM256 320a48 48 0 0 1-16-93.25V152a16 16 0 0 1 32 0v74.75A48 48 0 0 1 256 320Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-storefront-outline"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M448 448V240M64 240v208M382.47 48H129.53c-21.79 0-41.47 12-49.93 30.46L36.3 173c-14.58 31.81 9.63 67.85 47.19 69h2c31.4 0 56.85-25.18 56.85-52.23 0 27 25.46 52.23 56.86 52.23s56.8-23.38 56.8-52.23c0 27 25.45 52.23 56.85 52.23s56.86-23.38 56.86-52.23c0 28.85 25.45 52.23 56.85 52.23h1.95c37.56-1.17 61.77-37.21 47.19-69l-43.3-94.54C423.94 60 404.26 48 382.47 48ZM32 464h448M136 288h80a24 24 0 0 1 24 24v88h0-128 0v-88a24 24 0 0 1 24-24ZM288 464V312a24 24 0 0 1 24-24h64a24 24 0 0 1 24 24v152" /></symbol><symbol  viewBox="0 0 512 512" id="icon-storefront-sharp"><path d="M464 448V267.85a104.76 104.76 0 0 1-33.56 6.58c-1.18 0-2.3.05-3.4.05a108 108 0 0 1-56.86-16 108 108 0 0 1-56.85 16 106.16 106.16 0 0 1-56.51-16.2 107.84 107.84 0 0 1-57.2 16.2 106.14 106.14 0 0 1-56.85-16.42 106.14 106.14 0 0 1-56.85 16.42c-1.09 0-2.19 0-3.37-.05h-.06A104.66 104.66 0 0 1 48 267.49V448H16v32h480v-32Zm-240-64h-96v-76a4 4 0 0 1 4-4h88a4 4 0 0 1 4 4Zm160 64h-80V308a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4ZM492.57 170.28 445.89 64C432 32 432 32 400 32H112c-32 0-32 0-45.94 32L19.38 170.28c-9 19.41 2.89 39.34 2.9 39.35l.41.66c.42.66 1.13 1.75 1.62 2.37.1.13.19.27.28.4l5.24 6.39 5.31 5.14.42.36a69.65 69.65 0 0 0 9.44 6.78v.05a74 74 0 0 0 36 10.67h2.47a76.08 76.08 0 0 0 51.89-20.31 72.38 72.38 0 0 0 5.77-6 74.18 74.18 0 0 0 5.78 6 76.08 76.08 0 0 0 51.89 20.31c23.28 0 44.07-10 57.63-25.56a.11.11 0 0 1 .15 0l5.66 5.26a76.09 76.09 0 0 0 51.9 20.31c23.29 0 44.11-10 57.66-25.61 13.56 15.61 34.37 25.61 57.67 25.61h2.49a71.35 71.35 0 0 0 35-10.7c.95-.57 1.86-1.17 2.78-1.77A71.33 71.33 0 0 0 488 212.17l2-3c.9-2.04 11.21-20.3 2.57-38.89Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-storefront"><path d="M480 448h-12a4 4 0 0 1-4-4V273.51a4 4 0 0 0-5.24-3.86 104.92 104.92 0 0 1-28.32 4.78c-1.18 0-2.3.05-3.4.05a108.22 108.22 0 0 1-52.85-13.64 8.23 8.23 0 0 0-8 0 108.18 108.18 0 0 1-52.84 13.64 106.11 106.11 0 0 1-52.46-13.79 8.21 8.21 0 0 0-8.09 0 108.14 108.14 0 0 1-53.16 13.8 106.19 106.19 0 0 1-52.77-14 8.25 8.25 0 0 0-8.16 0 106.19 106.19 0 0 1-52.77 14c-1.09 0-2.19 0-3.37-.05h-.06a104.91 104.91 0 0 1-29.28-5.09 4 4 0 0 0-5.23 3.8V444a4 4 0 0 1-4 4H32.5c-8.64 0-16.1 6.64-16.48 15.28A16 16 0 0 0 32 480h447.5c8.64 0 16.1-6.64 16.48-15.28A16 16 0 0 0 480 448Zm-256-68a4 4 0 0 1-4 4h-88a4 4 0 0 1-4-4v-64a12 12 0 0 1 12-12h72a12 12 0 0 1 12 12Zm156 68h-72a4 4 0 0 1-4-4V316a12 12 0 0 1 12-12h56a12 12 0 0 1 12 12v128a4 4 0 0 1-4 4ZM492.57 170.28l-42.92-98.49C438.41 47.62 412.74 32 384.25 32H127.7c-28.49 0-54.16 15.62-65.4 39.79l-42.92 98.49c-9 19.41 2.89 39.34 2.9 39.35l.28.45c.49.78 1.36 2 1.89 2.78.05.06.09.13.14.2l5 6.05a7.45 7.45 0 0 0 .6.65l5 4.83.42.36a69.65 69.65 0 0 0 9.39 6.78v.05a74 74 0 0 0 36 10.67h2.47a76.08 76.08 0 0 0 51.89-20.31l.33-.31a7.94 7.94 0 0 1 10.89 0l.33.31a77.3 77.3 0 0 0 104.46 0 8 8 0 0 1 10.87 0 77.31 77.31 0 0 0 104.21.23 7.88 7.88 0 0 1 10.71 0 76.81 76.81 0 0 0 52.31 20.08h2.49a71.35 71.35 0 0 0 35-10.7c.95-.57 1.86-1.17 2.78-1.77A71.33 71.33 0 0 0 488 212.17l1.74-2.63q.26-.4.48-.84c1.66-3.38 10.56-20.76 2.35-38.42Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-subway-outline"><rect x="112" y="32" width="288" height="352" rx="48" ry="48" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M208 80h96" /><rect x="112" y="128" width="288" height="96" rx="32" ry="32" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="176" cy="320" r="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><circle cx="336" cy="320" r="16" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M144 464h224M336 432l48 48M176 432l-48 48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-subway-sharp"><path d="M392 16H120a24 24 0 0 0-24 24v336a24 24 0 0 0 24 24h272a24 24 0 0 0 24-24V40a24 24 0 0 0-24-24ZM208 64h95.55c8.61 0 16 6.62 16.43 15.23A16 16 0 0 1 304 96h-95.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 208 64Zm-28.53 287.82a32 32 0 1 1 28.35-28.35 32 32 0 0 1-28.35 28.35Zm160 0a32 32 0 1 1 28.35-28.35 32 32 0 0 1-28.35 28.35ZM384 144v64H128v-64ZM298 416l31.37 32H182.63L214 416h-44l-80.57 80h45.2l16-16h210.74l16 16h45.3L343 416h-45z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-subway"><path d="M352 16H160a64.07 64.07 0 0 0-64 64v256a64.07 64.07 0 0 0 64 64h192a64.07 64.07 0 0 0 64-64V80a64.07 64.07 0 0 0-64-64ZM208 64h96a16 16 0 0 1 0 32h-96a16 16 0 0 1 0-32Zm-32 288a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm160 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32Zm48-160a16 16 0 0 1-16 16H144a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h224a16 16 0 0 1 16 16ZM347.31 420.69a16 16 0 0 0-22.62 22.62l4.68 4.69H182.63l4.68-4.69a16 16 0 0 0-22.62-22.62l-48 48a16 16 0 1 0 22.62 22.62L150.63 480h210.74l11.32 11.31a16 16 0 0 0 22.62-22.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sunny-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94" /><circle cx="256" cy="256" r="80" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sunny-sharp"><path d="M234 26h44v92h-44zM234 394h44v92h-44zM338.025 142.857l65.054-65.054 31.113 31.113-65.054 65.054zM77.815 403.074l65.054-65.054 31.113 31.113-65.054 65.054zM394 234h92v44h-92zM26 234h92v44H26zM338.029 369.14l31.112-31.113 65.054 65.054-31.112 31.112zM77.802 108.92l31.113-31.113 65.054 65.054-31.113 31.112zM256 358a102 102 0 1 1 102-102 102.12 102.12 0 0 1-102 102Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sunny"><path d="M256 118a22 22 0 0 1-22-22V48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22ZM256 486a22 22 0 0 1-22-22v-48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22ZM369.14 164.86a22 22 0 0 1-15.56-37.55l33.94-33.94a22 22 0 0 1 31.11 31.11l-33.94 33.94a21.93 21.93 0 0 1-15.55 6.44ZM108.92 425.08a22 22 0 0 1-15.55-37.56l33.94-33.94a22 22 0 1 1 31.11 31.11l-33.94 33.94a21.94 21.94 0 0 1-15.56 6.45ZM464 278h-48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44ZM96 278H48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44ZM403.08 425.08a21.94 21.94 0 0 1-15.56-6.45l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.55 37.56ZM142.86 164.86a21.89 21.89 0 0 1-15.55-6.44l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.56 37.55ZM256 358a102 102 0 1 1 102-102 102.12 102.12 0 0 1-102 102Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-swap-horizontal-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m304 48 112 112-112 112M398.87 160H96M208 464 96 352l112-112M114 352h302" /></symbol><symbol  viewBox="0 0 512 512" id="icon-swap-horizontal-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="m304 48 112 112-112 112M398.87 160H96M208 464 96 352l112-112M114 352h302" /></symbol><symbol  viewBox="0 0 512 512" id="icon-swap-horizontal"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m304 48 112 112-112 112M398.87 160H96M208 464 96 352l112-112M114 352h302" /></symbol><symbol  viewBox="0 0 512 512" id="icon-swap-vertical-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M464 208 352 96 240 208M352 113.13V416M48 304l112 112 112-112M160 398V96" /></symbol><symbol  viewBox="0 0 512 512" id="icon-swap-vertical-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M464 208 352 96 240 208M352 113.13V416M48 304l112 112 112-112M160 398V96" /></symbol><symbol  viewBox="0 0 512 512" id="icon-swap-vertical"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M464 208 352 96 240 208M352 113.13V416M48 304l112 112 112-112M160 398V96" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sync-circle-outline"><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M351.82 271.87v-16A96.15 96.15 0 0 0 184.09 192m-24.2 48.17v16A96.22 96.22 0 0 0 327.81 320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m135.87 256 23.59-23.6 24.67 23.6M376.13 256l-23.59 23.6-24.67-23.6" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sync-circle-sharp"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm0 320a112.19 112.19 0 0 1-111.27-98.23l-8.86 8.86L113.24 256l46-46 47.55 45.48-22.12 23.12-7.2-6.88a80.26 80.26 0 0 0 138.48 37.5l23.77 21.41A112.82 112.82 0 0 1 256 368Zm96.79-66-47.55-45.5 22.12-23.12 6.86 6.55A80.2 80.2 0 0 0 196 202.64l-23.82-21.37A112.18 112.18 0 0 1 367 242.49l9.11-9.12L398.76 256Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sync-circle"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm83.69 282.65a112.24 112.24 0 0 1-195-61.29 16 16 0 0 1-20.13-24.67l23.6-23.6a16 16 0 0 1 22.37-.25l24.67 23.6a16 16 0 0 1-18 26 80.25 80.25 0 0 0 138.72 38.83 16 16 0 0 1 23.77 21.41Zm47.76-63.34-23.6 23.6a16 16 0 0 1-22.37.25l-24.67-23.6a16 16 0 0 1 17.68-26.11A80.17 80.17 0 0 0 196 202.64a16 16 0 1 1-23.82-21.37 112.17 112.17 0 0 1 194.88 61.57 16 16 0 0 1 20.39 24.47Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sync-outline"><path d="M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m32 256 44-44 46 44M480 256l-44 44-46-44" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sync-sharp"><path d="M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="m32 256 44-44 46 44M480 256l-44 44-46-44" /></symbol><symbol  viewBox="0 0 512 512" id="icon-sync"><path d="M434.67 285.59v-29.8c0-98.73-80.24-178.79-179.2-178.79a179 179 0 0 0-140.14 67.36m-38.53 82v29.8C76.8 355 157 435 256 435a180.45 180.45 0 0 0 140-66.92" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m32 256 44-44 46 44M480 256l-44 44-46-44" /></symbol><symbol  viewBox="0 0 512 512" id="icon-tablet-landscape-outline"><rect x="80" y="16" width="352" height="480" rx="48" ry="48" transform="rotate(-90 256 256)" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-tablet-landscape-sharp"><path d="M0 82v348a18 18 0 0 0 18 18h476a18 18 0 0 0 18-18V82a18 18 0 0 0-18-18H18A18 18 0 0 0 0 82Zm448 330H64V100h384Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-tablet-landscape"><path d="M512 128v256a64.07 64.07 0 0 1-64 64H64a64.07 64.07 0 0 1-64-64V128a64.07 64.07 0 0 1 64-64h384a64.07 64.07 0 0 1 64 64ZM32 384a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V128a32 32 0 0 0-32-32H64a32 32 0 0 0-32 32Z" /><path d="M0 128a64.07 64.07 0 0 1 64-64h384a64.07 64.07 0 0 1 64 64v256a64.07 64.07 0 0 1-64 64H64a64.07 64.07 0 0 1-64-64V128m480 256V128a32 32 0 0 0-32-32H64a32 32 0 0 0-32 32v256a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32m-16 0a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V128a16 16 0 0 1 16-16h384a16 16 0 0 1 16 16v256Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-tablet-portrait-outline"><rect x="80" y="16" width="352" height="480" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-tablet-portrait-sharp"><path d="M430 0H82a18 18 0 0 0-18 18v476a18 18 0 0 0 18 18h348a18 18 0 0 0 18-18V18a18 18 0 0 0-18-18ZM100 448V64h312v384Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-tablet-portrait"><path d="M384 512H128a64.07 64.07 0 0 1-64-64V64a64.07 64.07 0 0 1 64-64h256a64.07 64.07 0 0 1 64 64v384a64.07 64.07 0 0 1-64 64ZM128 32a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32h256a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32Z" /><path d="M384 0a64.07 64.07 0 0 1 64 64v384a64.07 64.07 0 0 1-64 64H128a64.07 64.07 0 0 1-64-64V64a64.07 64.07 0 0 1 64-64h256M128 480h256a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32H128a32 32 0 0 0-32 32v384a32 32 0 0 0 32 32m0-16a16 16 0 0 1-16-16V64a16 16 0 0 1 16-16h256a16 16 0 0 1 16 16v384a16 16 0 0 1-16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-telescope-outline"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m39.93 327.56-4.71-8.13A24 24 0 0 1 44 286.64l86.87-50.07a16 16 0 0 1 21.89 5.86l12.71 22a16 16 0 0 1-5.86 21.85l-86.85 50.07a24.06 24.06 0 0 1-32.83-8.79Z" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M170.68 273.72 147.12 233a24 24 0 0 1 8.8-32.78l124.46-71.75a16 16 0 0 1 21.89 5.86l31.57 54.59a16 16 0 0 1-5.84 21.84L203.51 282.5a24 24 0 0 1-32.83-8.78ZM341.85 202.21l-46.51-80.43a24 24 0 0 1 8.8-32.78l93.29-53.78A24.07 24.07 0 0 1 430.27 44l46.51 80.43a24 24 0 0 1-8.8 32.79L374.69 211a24.06 24.06 0 0 1-32.84-8.79ZM127.59 480l96.14-207.99M271.8 256.02 368.55 448" /></symbol><symbol  viewBox="0 0 512 512" id="icon-telescope-sharp"><path d="m1.41 292.9 44.82 76.97 98.14-56.38-44.73-77.37L1.41 292.9z" /><path d="m287.87 252.34 23.67-13.81-63.42-110-132.92 77C133.75 237.51 176 310 176 310l15.53-8.32c.24-.13.55 0 .83 0L102.65 496h35.16l99.05-214.25 23.24-13.4L358 464h36ZM262.08 96c24.81 42.23 60.25 104.25 86.4 148.76L510.79 151 424.07 1.41Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-telescope"><path d="M107.56 250a16 16 0 0 0-21.85-5.86L36 272.81a39.71 39.71 0 0 0-18.8 24.91 40.9 40.9 0 0 0 4.55 30.35l4.36 7.54a40 40 0 0 0 54.62 14.62l49.67-28.63a16 16 0 0 0 5.87-21.86Z" /><path d="M382.84 440.8 288.72 254a2 2 0 0 1 .79-2.63l8.3-4.79a16 16 0 0 0 5.86-21.86l-47.53-82.33a16 16 0 0 0-21.86-5.87l-86.38 49.8a39.73 39.73 0 0 0-18.65 24.28 34.82 34.82 0 0 0-1.37 9.76c.06 7.6 9.2 22.7 18.12 38.28 9.59 16.75 19.24 33.88 26.34 38.15 4.52 2.72 12.5 4.9 19.21 4.9h.84l-79.32 171.6a16 16 0 1 0 29.05 13.42l93.68-202.65a7.94 7.94 0 0 1 3.26-3.57l19.21-11.08a2 2 0 0 1 2.78.84l93.21 185a16 16 0 0 0 28.58-14.4ZM490.21 115.74 444.09 36a40.08 40.08 0 0 0-54.63-14.62l-93.34 53.78a39.69 39.69 0 0 0-18.65 24.28 32.76 32.76 0 0 0-1.27 13.25c1.74 12.62 13 30.4 26.41 53.89 13.58 23.73 28.91 50.48 36.93 56.27a40.18 40.18 0 0 0 23.18 7.37 39.77 39.77 0 0 0 19.92-5.34L476 171.07a39.72 39.72 0 0 0 18.79-24.84 41 41 0 0 0-4.58-30.49Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-tennisball-outline"><circle cx="256" cy="256" r="208" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M461.43 271.44c-5.09.37-8.24.56-13.43.56-114.88 0-208-93.12-208-208 0-5.37.2-8.69.6-14M49.65 240.56S58.84 240 64 240c114.88 0 208 93.12 208 208 0 5.38-.61 14-.61 14" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-tennisball-sharp"><path d="M246.4 480a181 181 0 0 0 3.22-22.86c.35-4.61.53-9.31.53-14 0-100-81.34-181.32-181.32-181.32A181.72 181.72 0 0 0 32 265.61 224.2 224.2 0 0 0 246.4 480Z" /><path d="M284.63 227.37A222.73 222.73 0 0 1 219 68.83a227.09 227.09 0 0 1 2.62-34.42A224.41 224.41 0 0 0 34.41 221.58 227.09 227.09 0 0 1 68.83 219a222.73 222.73 0 0 1 158.54 65.67A222.73 222.73 0 0 1 293 443.17c0 5.74-.22 11.54-.65 17.23s-1.11 11.51-2 17.2a224.42 224.42 0 0 0 187.24-187.18 227.09 227.09 0 0 1-34.42 2.58 222.73 222.73 0 0 1-158.54-65.63Z" /><path d="M443.17 250.15a181.72 181.72 0 0 0 36.83-3.76A224.2 224.2 0 0 0 265.61 32a181.72 181.72 0 0 0-3.76 36.83c0 99.98 81.34 181.32 181.32 181.32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-tennisball"><path d="M448 256a192.55 192.55 0 0 0 32-2.68A224 224 0 0 0 258.68 32 192.55 192.55 0 0 0 256 64c0 105.87 86.13 192 192 192ZM253.35 480c.94-5.67 1.65-11.4 2.09-17.18.37-4.88.56-9.86.56-14.79 0-105.87-86.13-192-192-192a192.55 192.55 0 0 0-32 2.68A224 224 0 0 0 253.35 480Z" /><path d="M289.61 222.39A222.53 222.53 0 0 1 224 64a226.07 226.07 0 0 1 2-30A224.1 224.1 0 0 0 34 226a226.07 226.07 0 0 1 30-2 222.53 222.53 0 0 1 158.39 65.61A222.53 222.53 0 0 1 288 448c0 5.74-.22 11.53-.65 17.22q-.5 6.42-1.36 12.79A224.12 224.12 0 0 0 478 286a226.07 226.07 0 0 1-30 2 222.53 222.53 0 0 1-158.39-65.61Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-terminal-outline"><rect x="32" y="48" width="448" height="416" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m96 112 80 64-80 64M192 240h64" /></symbol><symbol  viewBox="0 0 512 512" id="icon-terminal-sharp"><path d="M16 44v424a12 12 0 0 0 12 12h456a12 12 0 0 0 12-12V44a12 12 0 0 0-12-12H28a12 12 0 0 0-12 12Zm57.51 193.5 76.88-61.5-76.88-61.5 20-25 108.1 86.5L93.5 262.49ZM272 256h-96v-32h96Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-terminal"><path d="M432 32H80a64.07 64.07 0 0 0-64 64v320a64.07 64.07 0 0 0 64 64h352a64.07 64.07 0 0 0 64-64V96a64.07 64.07 0 0 0-64-64ZM96 256a16 16 0 0 1-10-28.49L150.39 176 86 124.49a16 16 0 1 1 20-25l80 64a16 16 0 0 1 0 25l-80 64A16 16 0 0 1 96 256Zm160 0h-64a16 16 0 0 1 0-32h64a16 16 0 0 1 0 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-text-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m32 415.5 120-320 120 320M230 303.5H74M326 239.5c12.19-28.69 41-48 74-48h0c46 0 80 32 80 80v144" /><path d="M320 358.5c0 36 26.86 58 60 58 54 0 100-27 100-106v-15c-20 0-58 1-92 5-32.77 3.86-68 19-68 58Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-text-sharp"><path d="M404.42 170c-41.23 0-78.07 24.06-93.85 61.3L304 246.52l40.33 17.18 6.56-15.22c8.9-21 29.91-34.55 53.53-34.55 34.55 0 57.76 23.27 57.76 57.91v2.3c-22.12.59-48.65 2.05-72.27 4.84-54.52 6.43-87.06 36.23-87.06 79.72 0 23.16 8.72 44 24.56 58.59C342.28 431 362.55 438 384.51 438c30.86 0 57.5-7.33 77.67-22.64V438H506V271.84C506 212.83 463.28 170 404.42 170Zm-19.91 225.07c-17.46 0-37.85-9.84-37.85-36.37 0-10.65 3.82-18.11 12.38-24.19 8.34-5.92 21.12-10.15 36-11.9 21.78-2.57 46.31-3.95 67-4.52-2.16 51.49-27.57 76.98-77.53 76.98ZM93.25 325.87h125.5L260.94 438H308L155 48 4 438h47.06ZM156 160.71 202.25 282h-92.5Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-text"><path d="m292.6 407.78-120-320a22 22 0 0 0-41.2 0l-120 320a22 22 0 0 0 41.2 15.44l36.16-96.42a2 2 0 0 1 1.87-1.3h122.74a2 2 0 0 1 1.87 1.3l36.16 96.42a22 22 0 0 0 41.2-15.44Zm-185.84-129 43.37-115.65a2 2 0 0 1 3.74 0l43.37 115.67a2 2 0 0 1-1.87 2.7h-86.74a2 2 0 0 1-1.87-2.7ZM400.77 169.5c-41.72-.3-79.08 23.87-95 61.4a22 22 0 0 0 40.5 17.2c8.88-20.89 29.77-34.44 53.32-34.6 32.32-.22 58.41 26.5 58.41 58.85a1.5 1.5 0 0 1-1.45 1.5c-21.92.61-47.92 2.07-71.12 4.8-54.75 6.44-87.43 36.29-87.43 79.85 0 23.19 8.76 44 24.67 58.68C337.6 430.93 358 438.5 380 438.5c31 0 57.69-8 77.94-23.22h.06a22 22 0 1 0 44 .19v-143c0-56.18-45-102.56-101.23-102.97ZM380 394.5c-17.53 0-38-9.43-38-36 0-10.67 3.83-18.14 12.43-24.23 8.37-5.93 21.2-10.16 36.14-11.92 21.12-2.49 44.82-3.86 65.14-4.47a2 2 0 0 1 2 2.1C455 370.1 429.46 394.5 380 394.5Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-thermometer-outline"><path d="M307.72 302.27a8 8 0 0 1-3.72-6.75V80a48 48 0 0 0-48-48h0a48 48 0 0 0-48 48v215.52a8 8 0 0 1-3.71 6.74 97.51 97.51 0 0 0-44.19 86.07A96 96 0 0 0 352 384a97.49 97.49 0 0 0-44.28-81.73ZM256 112v272" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="384" r="48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-thermometer-sharp"><path d="M320 291.24V80a64 64 0 1 0-128 0v211.24A113.39 113.39 0 0 0 144 384a112 112 0 0 0 224 0 113.39 113.39 0 0 0-48-92.76ZM256 432a48 48 0 0 1-16-93.26V96h32v242.74A48 48 0 0 1 256 432Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-thermometer"><path d="M320 287.18V81c0-35.12-27.89-64.42-63-64.95a64.08 64.08 0 0 0-65 64v207.13a8 8 0 0 1-3.18 6.37A113.48 113.48 0 0 0 144 384a112 112 0 0 0 224 0 113.48 113.48 0 0 0-44.82-90.45 8 8 0 0 1-3.18-6.37ZM254.07 432a48 48 0 0 1-22-89.54 16 16 0 0 0 8-13.84V112.45c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 272 112v216.58a16.18 16.18 0 0 0 8.15 13.94A48 48 0 0 1 254.07 432Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-thumbs-down-outline"><path d="M192 53.84S208 48 256 48s74 16 96 32h64a64 64 0 0 1 64 64v48a64 64 0 0 1-64 64h-30a32.34 32.34 0 0 0-27.37 15.4S350 290.19 324 335.22 248 448 240 464c-29 0-43-22-34-47.71 10.28-29.39 23.71-54.38 27.46-87.09.54-4.78-3.14-12-8-12L96 307" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="m96 241 80 2c20 1.84 32 12.4 32 30s-14 28.84-32 30l-80 4c-17.6 0-32-16.4-32-34v-.17A32 32 0 0 1 96 241ZM64 176l112 2c18 .84 32 12.41 32 30 0 17.61-14 28.86-32 30l-112 2a32.1 32.1 0 0 1-32-32 32.1 32.1 0 0 1 32-32ZM112 48l64 3c21 1.84 32 11.4 32 29s-14.4 30-32 30l-64 2a32.09 32.09 0 0 1-32-32 32.09 32.09 0 0 1 32-32ZM80 112l96 2c19 .84 32 12.4 32 30s-13 28.84-32 30l-96 2a32.09 32.09 0 0 1-32-32 32.09 32.09 0 0 1 32-32Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-thumbs-down-sharp"><path d="m56 320 156.05 12-23 89.4c-6.08 26.6.7 41.87 22.39 48.62l34.69 9.85a4 4 0 0 0 4.4-1.72l129-202.34a8 8 0 0 1 6.81-3.81H496V64H378.39a48 48 0 0 1-15.18-2.46l-76.3-25.43a80 80 0 0 0-25.3-4.11H83.68c-19 0-31.5 13.52-35.23 32.16L16 206.42V280c0 22.06 18 38 40 40Z" /><path d="M378.45 273.93A15.84 15.84 0 0 1 386 272a15.93 15.93 0 0 0-7.51 1.91ZM337.86 343.22l-.13.22a2.53 2.53 0 0 1 .13-.22c20.5-35.51 30.36-55 33.82-62-3.47 7.06-13.34 26.51-33.82 62Z" style="fill:none" /><path d="m372.66 279.16-1 2a16.29 16.29 0 0 1 6.77-7.26 16.48 16.48 0 0 0-5.77 5.26Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-thumbs-down"><path d="m39.94 178 144.16 6.12c4.61.36 23.9 1.22 23.9 25.88 0 23.8-19.16 25.33-24.14 25.88L39.94 242C27.27 241.87 16 227.56 16 210s11.27-31.87 23.94-32Zm141.45 131.66L74.65 318C62 318 48 301.31 48 284.12v-.33c0-16.33 11.14-29.63 24.88-29.79l108.45 1.72C208 259 208 275.16 208 282.12c0 22.88-21.8 27.14-26.61 27.54ZM90.15 32l89.37 8.93C204 41.86 208 58.18 208 68.4c0 18.39-13.41 24.6-26.67 24.6l-91 3C75.78 95.78 64 81.51 64 64s11.68-31.66 26.15-32Zm-34.36 71.5 126.4 6.22c9.39.63 25.81 3 25.81 26.36 0 12-4.35 25.62-25 27.53L55.79 167.5C42.65 167.35 32 154 32 136.08s10.65-32.43 23.79-32.58Z" /><path d="M378.45 273.93A15.84 15.84 0 0 1 386 272a15.93 15.93 0 0 0-7.51 1.91ZM337.86 343.22l-.13.22a2.53 2.53 0 0 1 .13-.22c20.5-35.51 30.36-55 33.82-62-3.47 7.06-13.34 26.51-33.82 62Z" style="fill:none" /><path d="m372.66 279.16-1 2a16.29 16.29 0 0 1 6.77-7.26 16.48 16.48 0 0 0-5.77 5.26Z" /><path d="M195.94 459.38C205.37 472.67 221 480 240 480a16 16 0 0 0 14.31-8.85c3-6.06 15.25-24 28.19-42.9 18-26.33 40.35-59.08 55.23-84.81l.13-.22c20.48-35.49 30.35-54.94 33.82-62l1-2a16.48 16.48 0 0 1 5.79-5.23A15.93 15.93 0 0 1 386 272h25.32A84.7 84.7 0 0 0 496 187.3v-38.6A84.7 84.7 0 0 0 411.31 64h-48.79a17.46 17.46 0 0 1-9.58-2.89C330 46.13 286.66 32 240 32c-7.45 0-14.19.14-20.27.38a8 8 0 0 0-6.2 12.68l.1.14C222.2 57.59 224 71 224 80a61.16 61.16 0 0 1-5.19 24.77 17.38 17.38 0 0 0 0 14.06 63.81 63.81 0 0 1 0 50.39 17.32 17.32 0 0 0 0 14 62.13 62.13 0 0 1 0 49.58 18.13 18.13 0 0 0 0 14.68A60.41 60.41 0 0 1 224 273c0 8.2-2 21.3-8 31.18a15.66 15.66 0 0 0-1.14 13.65c.38 1 .76 2.06 1.13 3.17a24.8 24.8 0 0 1 .86 11.57c-3 19.35-9.67 36.3-16.74 54.16-3.08 7.78-6.27 15.82-9.22 24.27-6.14 17.56-4.3 35.2 5.05 48.38Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-thumbs-up-outline"><path d="M320 458.16S304 464 256 464s-74-16-96-32H96a64 64 0 0 1-64-64v-48a64 64 0 0 1 64-64h30a32.34 32.34 0 0 0 27.37-15.4S162 221.81 188 176.78 264 64 272 48c29 0 43 22 34 47.71-10.28 29.39-23.71 54.38-27.46 87.09-.54 4.78 3.14 12 7.95 12L416 205" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="m416 271-80-2c-20-1.84-32-12.4-32-30s14-28.84 32-30l80-4c17.6 0 32 16.4 32 34v.17A32 32 0 0 1 416 271ZM448 336l-112-2c-18-.84-32-12.41-32-30 0-17.61 14-28.86 32-30l112-2a32.1 32.1 0 0 1 32 32 32.1 32.1 0 0 1-32 32ZM400 464l-64-3c-21-1.84-32-11.4-32-29s14.4-30 32-30l64-2a32.09 32.09 0 0 1 32 32 32.09 32.09 0 0 1-32 32ZM432 400l-96-2c-19-.84-32-12.4-32-30s13-28.84 32-30l96-2a32.09 32.09 0 0 1 32 32 32.09 32.09 0 0 1-32 32Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-thumbs-up-sharp"><path d="m456 192-156-12 23-89.4c6-26.6-.78-41.87-22.47-48.6l-34.69-9.85a4 4 0 0 0-4.4 1.72l-129 202.34a8 8 0 0 1-6.81 3.81H16V448h117.61a48 48 0 0 1 15.18 2.46l76.3 25.43a80 80 0 0 0 25.3 4.11h177.93c19 0 31.5-13.52 35.23-32.16L496 305.58V232c0-22.06-18-38-40-40Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-thumbs-up"><path d="m472.06 334-144.16-6.13c-4.61-.36-23.9-1.21-23.9-25.87 0-23.81 19.16-25.33 24.14-25.88L472.06 270c12.67.13 23.94 14.43 23.94 32s-11.27 31.87-23.94 32ZM330.61 202.33 437.35 194C450 194 464 210.68 464 227.88v.33c0 16.32-11.14 29.62-24.88 29.79l-108.45-1.73C304 253 304 236.83 304 229.88c0-22.88 21.8-27.15 26.61-27.55ZM421.85 480l-89.37-8.93C308 470.14 304 453.82 304 443.59c0-18.38 13.41-24.6 26.67-24.6l91-3c14.54.23 26.32 14.5 26.32 32s-11.67 31.67-26.14 32.01Zm34.36-71.5-126.4-6.21c-9.39-.63-25.81-3-25.81-26.37 0-12 4.35-25.61 25-27.53l127.19-3.88c13.16.14 23.81 13.49 23.81 31.4s-10.65 32.43-23.79 32.58Z" /><path d="M133.55 238.06A15.85 15.85 0 0 1 126 240a15.82 15.82 0 0 0 7.51-1.92ZM174.14 168.78l.13-.23-.13.23c-20.5 35.51-30.36 54.95-33.82 62 3.47-7.07 13.34-26.51 33.82-62Z" style="fill:none" /><path d="m139.34 232.84 1-2a16.27 16.27 0 0 1-6.77 7.25 16.35 16.35 0 0 0 5.77-5.25Z" /><path d="M316.06 52.62C306.63 39.32 291 32 272 32a16 16 0 0 0-14.31 8.84c-3 6.07-15.25 24-28.19 42.91-18 26.33-40.35 59.07-55.23 84.8l-.13.23c-20.48 35.49-30.35 54.93-33.82 62l-1 2a16.35 16.35 0 0 1-5.79 5.22 15.82 15.82 0 0 1-7.53 2h-25.31A84.69 84.69 0 0 0 16 324.69v38.61a84.69 84.69 0 0 0 84.69 84.7h48.79a17.55 17.55 0 0 1 9.58 2.89C182 465.87 225.34 480 272 480c7.45 0 14.19-.14 20.27-.38a8 8 0 0 0 6.2-12.68l-.1-.14C289.8 454.41 288 441 288 432a61.2 61.2 0 0 1 5.19-24.77 17.36 17.36 0 0 0 0-14.05 63.81 63.81 0 0 1 0-50.39 17.32 17.32 0 0 0 0-14 62.15 62.15 0 0 1 0-49.59 18.13 18.13 0 0 0 0-14.68A60.33 60.33 0 0 1 288 239c0-8.2 2-21.3 8-31.19a15.63 15.63 0 0 0 1.14-13.64c-.38-1-.76-2.07-1.13-3.17a24.84 24.84 0 0 1-.86-11.58c3-19.34 9.67-36.29 16.74-54.16 3.08-7.78 6.27-15.82 9.22-24.26 6.14-17.57 4.3-35.2-5.05-48.38Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-thunderstorm-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m120 352-24 48M136 432l-16 32M400 352l-24 48M416 432l-16 32M208 304l-16 96h48v80l80-112h-48l16-64M404.33 152.89H392.2C384.71 84.85 326.14 32 256 32a136.39 136.39 0 0 0-128.63 90.67h-4.57c-49.94 0-90.8 40.8-90.8 90.66h0C32 263.2 72.86 304 122.8 304h281.53C446 304 480 270 480 228.44h0c0-41.55-34-75.55-75.67-75.55Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-thunderstorm-sharp"><path d="M405.84 136.9a151.25 151.25 0 0 0-47.6-81.9 153 153 0 0 0-241.81 51.86C60.5 110.16 16 156.65 16 213.33 16 272.15 63.91 320 122.8 320h72.31L176 416h48v80l112-144h-43.51l8-32h103.84a91.56 91.56 0 0 0 1.51-183.1Z" /><path d="m74.53 407.177 38.32-76.622 28.62 14.313-38.32 76.623zM98.52 471.189l30.318-60.622 28.62 14.313-30.317 60.622zM354.541 407.189l38.32-76.623 28.62 14.314-38.32 76.622zM378.542 471.2l30.317-60.622 28.62 14.314-30.317 60.621z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-thunderstorm"><path d="M96 416a16 16 0 0 1-14.3-23.16l24-48a16 16 0 0 1 28.62 14.32l-24 48A16 16 0 0 1 96 416ZM120 480a16 16 0 0 1-14.3-23.16l16-32a16 16 0 0 1 28.62 14.32l-16 32A16 16 0 0 1 120 480ZM376 416a16 16 0 0 1-14.3-23.16l24-48a16 16 0 0 1 28.62 14.32l-24 48A16 16 0 0 1 376 416ZM400 480a16 16 0 0 1-14.3-23.16l16-32a16 16 0 0 1 28.62 14.32l-16 32A16 16 0 0 1 400 480Z" /><path d="M405.84 136.9a151.25 151.25 0 0 0-47.6-81.9 153 153 0 0 0-241.81 51.86C60.5 110.16 16 156.65 16 213.33 16 272.15 63.91 320 122.8 320h66.31l-12.89 77.37A16 16 0 0 0 192 416h32v64a16 16 0 0 0 29 9.3l80-112a16 16 0 0 0-13-25.3h-27.51l8-32h103.84a91.56 91.56 0 0 0 1.51-183.1Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ticket-outline"><path fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" d="M366.05 146a46.7 46.7 0 0 1-2.42-63.42 3.87 3.87 0 0 0-.22-5.26l-44.13-44.18a3.89 3.89 0 0 0-5.5 0l-70.34 70.34a23.62 23.62 0 0 0-5.71 9.24 23.66 23.66 0 0 1-14.95 15 23.7 23.7 0 0 0-9.25 5.71L33.14 313.78a3.89 3.89 0 0 0 0 5.5l44.13 44.13a3.87 3.87 0 0 0 5.26.22 46.69 46.69 0 0 1 65.84 65.84 3.87 3.87 0 0 0 .22 5.26l44.13 44.13a3.89 3.89 0 0 0 5.5 0l180.4-180.39a23.7 23.7 0 0 0 5.71-9.25 23.66 23.66 0 0 1 14.95-15 23.62 23.62 0 0 0 9.24-5.71l70.34-70.34a3.89 3.89 0 0 0 0-5.5l-44.13-44.13a3.87 3.87 0 0 0-5.26-.22 46.7 46.7 0 0 1-63.42-2.32Z" /><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="32" stroke-linecap="round" d="m250.5 140.44-16.51-16.51M294.52 184.46l-11.01-11M338.54 228.49l-11-11.01M388.07 278.01l-16.51-16.51" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ticket-sharp"><path d="m426.24 127.72-10.94 10.94a29.67 29.67 0 0 1-42-42l10.94-10.94L314.52 16l-88 88-4 12.09-12.09 4L16 314.52l69.76 69.76 10.94-10.94a29.67 29.67 0 0 1 42 42l-10.94 10.94L197.48 496l194.4-194.4 4-12.09 12.09-4 88-88Zm-208.56 5.43 21.87-21.87 33 33-21.88 21.87Zm43 43 21.88-21.88 32.52 32.52-21.88 21.88Zm42.56 42.56 21.88-21.88 32.52 32.52-21.84 21.93Zm75.57 75.56-33-33 21.87-21.88 33 33Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-ticket"><path d="m490.18 181.4-44.13-44.13a20 20 0 0 0-27-1 30.81 30.81 0 0 1-41.68-1.6 30.81 30.81 0 0 1-1.6-41.67 20 20 0 0 0-1-27L330.6 21.82a19.91 19.91 0 0 0-28.13 0l-70.35 70.34a39.87 39.87 0 0 0-9.57 15.5 7.71 7.71 0 0 1-4.83 4.83 39.78 39.78 0 0 0-15.5 9.58l-180.4 180.4a19.91 19.91 0 0 0 0 28.13L66 374.73a20 20 0 0 0 27 1 30.69 30.69 0 0 1 43.28 43.28 20 20 0 0 0 1 27l44.13 44.13a19.91 19.91 0 0 0 28.13 0l180.4-180.4a39.82 39.82 0 0 0 9.58-15.49 7.69 7.69 0 0 1 4.84-4.84 39.84 39.84 0 0 0 15.49-9.57l70.34-70.35a19.91 19.91 0 0 0-.01-28.09Zm-228.37-29.65a16 16 0 0 1-22.63 0l-11.51-11.51a16 16 0 0 1 22.63-22.62l11.51 11.5a16 16 0 0 1 0 22.63Zm44 44a16 16 0 0 1-22.62 0l-11-11a16 16 0 1 1 22.63-22.63l11 11a16 16 0 0 1 .01 22.66Zm44 44a16 16 0 0 1-22.63 0l-11-11a16 16 0 0 1 22.63-22.62l11 11a16 16 0 0 1 .05 22.67Zm44.43 44.54a16 16 0 0 1-22.63 0l-11.44-11.5a16 16 0 1 1 22.68-22.57l11.45 11.49a16 16 0 0 1-.01 22.63Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-time-outline"><path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M256 128v144h96" /></symbol><symbol  viewBox="0 0 512 512" id="icon-time-sharp"><path d="M256 48C141.13 48 48 141.13 48 256c0 114.69 93.32 208 208 208 114.86 0 208-93.14 208-208 0-114.69-93.31-208-208-208Zm108 240H244a4 4 0 0 1-4-4V116a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v140h92a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-time"><path d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48Zm96 240h-96a16 16 0 0 1-16-16V128a16 16 0 0 1 32 0v128h80a16 16 0 0 1 0 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-timer-outline"><path d="M112.91 128A191.85 191.85 0 0 0 64 254c-1.18 106.35 85.65 193.8 192 194 106.2.2 192-85.83 192-192 0-104.54-83.55-189.61-187.5-192a4.36 4.36 0 0 0-4.5 4.37V152" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="m233.38 278.63-79-113a8.13 8.13 0 0 1 11.32-11.32l113 79a32.5 32.5 0 0 1-37.25 53.26 33.21 33.21 0 0 1-8.07-7.94Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-timer-sharp"><path d="M256 48C141.12 48 48 141.12 48 256s93.12 208 208 208 208-93.12 208-208S370.88 48 256 48Zm0 384c-97 0-176-78.95-176-176a174.55 174.55 0 0 1 53.87-126.72L279 233l-19 30-125-91c-13 23-26.7 46-26.7 84 0 81.44 66.26 147.7 147.7 147.7S403.7 337.44 403.7 256c0-76.67-58.72-139.88-133.55-147v55h-28.3V79.89c4.24.07 8.94.11 14.15.11 97.05 0 176 79 176 176s-78.95 176-176 176Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-timer"><path d="M256 48C141.12 48 48 141.12 48 256s93.12 208 208 208 208-93.12 208-208S370.88 48 256 48Zm-82.33 114.34 105 71a32.5 32.5 0 0 1-37.25 53.26 33.21 33.21 0 0 1-8-8l-71-105a8.13 8.13 0 0 1 11.32-11.32ZM256 432c-97 0-176-78.95-176-176a174.55 174.55 0 0 1 53.87-126.72 14.15 14.15 0 1 1 19.64 20.37A146.53 146.53 0 0 0 108.3 256c0 81.44 66.26 147.7 147.7 147.7S403.7 337.44 403.7 256c0-76.67-58.72-139.88-133.55-147v55a14.15 14.15 0 1 1-28.3 0V94.15A14.15 14.15 0 0 1 256 80c97.05 0 176 79 176 176s-78.95 176-176 176Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-today-outline"><rect fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="32" x="48" y="80" width="416" height="384" rx="48" /><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" d="M128 48v32M384 48v32" /><rect fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" x="112" y="224" width="96" height="96" rx="13" /><path fill="none" stroke="#000" stroke-linejoin="round" stroke-width="32" stroke-linecap="round" d="M464 160H48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-today-sharp"><path d="M32 456a24 24 0 0 0 24 24h400a24 24 0 0 0 24-24V176H32Zm80-238.86a9.14 9.14 0 0 1 9.14-9.14h109.72a9.14 9.14 0 0 1 9.14 9.14v109.72a9.14 9.14 0 0 1-9.14 9.14H121.14a9.14 9.14 0 0 1-9.14-9.14ZM456 64h-55.92V32h-48v32H159.92V32h-48v32H56a23.8 23.8 0 0 0-24 23.77V144h448V87.77A23.8 23.8 0 0 0 456 64Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-today"><path d="M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4v-12a64 64 0 0 0-64-64ZM477 176H35a3 3 0 0 0-3 3v237a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3ZM224 307.43A28.57 28.57 0 0 1 195.43 336h-70.86A28.57 28.57 0 0 1 96 307.43v-70.86A28.57 28.57 0 0 1 124.57 208h70.86A28.57 28.57 0 0 1 224 236.57Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-toggle-outline"><circle cx="368" cy="256" r="128" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><rect x="16" y="128" width="480" height="256" rx="128" ry="128" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-toggle-sharp"><path d="M368 112H144a144 144 0 0 0 0 288h224a144 144 0 0 0 0-288Zm0 230a86 86 0 1 1 86-86 85.88 85.88 0 0 1-86 86Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-toggle"><path d="M368 112H144C64.6 112 0 176.6 0 256s64.6 144 144 144h224c79.4 0 144-64.6 144-144s-64.6-144-144-144Zm0 256a112 112 0 1 1 112-112 112.12 112.12 0 0 1-112 112Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trail-sign-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M256 400v64M256 208v64M256 48v32M416 208H102.63a16 16 0 0 1-11.32-4.69L32 144l59.31-59.31A16 16 0 0 1 102.63 80H416a16 16 0 0 1 16 16v96a16 16 0 0 1-16 16ZM96 400h313.37a16 16 0 0 0 11.32-4.69L480 336l-59.31-59.31a16 16 0 0 0-11.32-4.69H96a16 16 0 0 0-16 16v96a16 16 0 0 0 16 16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trail-sign-sharp"><path d="m502.63 336-80-80H278v-32h170V64H278V32h-44v32H89.37l-80 80 80 80H234v32H64v160h170v64h44v-64h144.63Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trail-sign"><path d="M491.31 324.69 432 265.37a31.8 31.8 0 0 0-22.63-9.37H272v-32h144a32 32 0 0 0 32-32V96a32 32 0 0 0-32-32H272V48a16 16 0 0 0-32 0v16H102.63A31.8 31.8 0 0 0 80 73.37l-59.31 59.32a16 16 0 0 0 0 22.62L80 214.63a31.8 31.8 0 0 0 22.63 9.37H240v32H96a32 32 0 0 0-32 32v96a32 32 0 0 0 32 32h144v48a16 16 0 0 0 32 0v-48h137.37a31.8 31.8 0 0 0 22.63-9.37l59.31-59.32a16 16 0 0 0 0-22.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-train-outline"><path d="M344 48h-24a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16h-24a56.16 56.16 0 0 0-56 56v247c0 35.3 144 65 144 65s144-29.7 144-65V104a56 56 0 0 0-56-56Zm-88 304a48 48 0 1 1 48-48 48 48 0 0 1-48 48Zm96-160a16 16 0 0 1-16 16H176a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16ZM144 464h224M336 432l48 48M176 432l-48 48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-train-sharp"><path d="M384 32h-64a16 16 0 0 0-16-16h-96a16 16 0 0 0-16 16h-64c-16 0-32 16-32 32v288c0 23.92 160 80 160 80s160-56.74 160-80V64c0-16-16-32-32-32ZM256 352a48 48 0 1 1 48-48 48 48 0 0 1-48 48Zm112-152a8 8 0 0 1-8 8H152a8 8 0 0 1-8-8v-80a8 8 0 0 1 8-8h208a8 8 0 0 1 8 8Z" /><path d="m314 432 15.32 16H182.58L198 432l-32-13-76.62 77h45.2l16-16h210.74l16 16h45.3l-76.36-77.75L314 432z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-train"><ellipse cx="256" cy="304" rx="32.05" ry="31.94" transform="rotate(-45 256.001 304)" /><path d="M352 32h-15a10 10 0 0 1-7.87-3.78A31.94 31.94 0 0 0 304 16h-96a32 32 0 0 0-26.11 13.52A6 6 0 0 1 177 32h-17c-36.81 0-64 28.84-64 64v255c0 23.27 25.6 42.06 83 60.94a753 753 0 0 0 73.77 19.73 16 16 0 0 0 6.46 0A753 753 0 0 0 333 411.94c57.4-18.88 83-37.67 83-60.94V96a64 64 0 0 0-64-64Zm-168 96h144a8 8 0 0 1 8 8v48a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8Zm76.18 239.87a64 64 0 1 1 59.69-59.69 64.07 64.07 0 0 1-59.69 59.69Z" /><path d="M395.31 468.69 347.63 421c-6.09-6.1-16-6.66-22.38-.86a16 16 0 0 0-.56 23.16l4.68 4.69H182.63l4.36-4.37c6.1-6.09 6.66-16 .86-22.38a16 16 0 0 0-23.16-.56l-48 48a16 16 0 1 0 22.62 22.62l11.32-11.3h210.74l11.32 11.31a16 16 0 0 0 22.62-22.62Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-transgender-outline"><circle cx="256" cy="256" r="128" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m448 352-96 96M176 80l-95.98 95.98M464 128V48h-80M48 128V48h80M464 48 346.5 165.5M48 48l117.49 117.49M464 464 346.65 346.37" /></symbol><symbol  viewBox="0 0 512 512" id="icon-transgender-sharp"><path d="m480 448.94-48.94-49.08L464 366.92l-31.1-31.11-32.9 32.9-23.55-23.61a149.64 149.64 0 0 0-.1-178.45l59.55-59.56V144h44V32h-112v44h36.87l-59.55 59.55a149.65 149.65 0 0 0-178.59 0l-7.55-7.55 33-33L161 63.88l-33 33L107.09 76H144V32H32v112h44v-36.91L96.87 128l-33 33L95 192.05l33-33 7.56 7.57A149.18 149.18 0 0 0 106 255.94c0 82.69 67.27 150 150 150a149.12 149.12 0 0 0 89.44-29.67l23.51 23.58-33.14 33.05 31.11 31.1 33-33 48.9 49Zm-330-193a106 106 0 1 1 106 106 106.09 106.09 0 0 1-106-106Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-transgender"><path d="M458 32h-68a22 22 0 0 0 0 44h14.89l-59.57 59.57a149.69 149.69 0 0 0-178.64 0l-7.57-7.57 26.45-26.44a22 22 0 0 0-31.12-31.12L128 96.89 107.11 76H122a22 22 0 0 0 0-44H54a22 22 0 0 0-22 22v68a22 22 0 0 0 44 0v-14.89L96.89 128l-26.42 26.42a22 22 0 1 0 31.11 31.11L128 159.11l7.57 7.57A149.19 149.19 0 0 0 106 256c0 82.71 67.29 150 150 150a149.2 149.2 0 0 0 89.46-29.67L369 399.9l-26.54 26.54a22 22 0 0 0 31.12 31.12l26.49-26.5 42.37 42.48a22 22 0 0 0 31.16-31.08L431.17 400l26.39-26.39a22 22 0 0 0-31.12-31.12l-26.35 26.35-23.55-23.62a149.68 149.68 0 0 0-.11-178.49L436 107.11V122a22 22 0 0 0 44 0V54a22 22 0 0 0-22-22ZM150 256a106 106 0 1 1 106 106 106.12 106.12 0 0 1-106-106Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trash-bin-outline"><path d="m432 144-28.67 275.74A32 32 0 0 1 371.55 448H140.46a32 32 0 0 1-31.78-28.26L80 144" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><rect x="32" y="64" width="448" height="80" rx="16" ry="16" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M312 240 200 352M312 352 200 240" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trash-bin-sharp"><path style="fill:none" d="M337.46 240 312 214.54l-56 56-56-56L174.54 240l56 56-56 56L200 377.46l56-56 56 56L337.46 352l-56-56 56-56z" /><path style="fill:none" d="M337.46 240 312 214.54l-56 56-56-56L174.54 240l56 56-56 56L200 377.46l56-56 56 56L337.46 352l-56-56 56-56z" /><path d="m64 160 29.74 282.51A24 24 0 0 0 117.61 464h276.78a24 24 0 0 0 23.87-21.49L448 160Zm248 217.46-56-56-56 56L174.54 352l56-56-56-56L200 214.54l56 56 56-56L337.46 240l-56 56 56 56Z" /><rect x="32" y="48" width="448" height="80" rx="12" ry="12" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trash-bin"><rect x="32" y="48" width="448" height="80" rx="32" ry="32" /><path d="M74.45 160a8 8 0 0 0-8 8.83l26.31 252.56a1.5 1.5 0 0 0 0 .22A48 48 0 0 0 140.45 464h231.09a48 48 0 0 0 47.67-42.39v-.21l26.27-252.57a8 8 0 0 0-8-8.83Zm248.86 180.69a16 16 0 1 1-22.63 22.62L256 318.63l-44.69 44.68a16 16 0 0 1-22.63-22.62L233.37 296l-44.69-44.69a16 16 0 0 1 22.63-22.62L256 273.37l44.68-44.68a16 16 0 0 1 22.63 22.62L278.62 296Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trash-outline"><path d="m112 112 20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M80 112h352" /><path d="M192 112V72h0a23.93 23.93 0 0 1 24-24h80a23.93 23.93 0 0 1 24 24h0v40M256 176v224M184 176l8 224M328 176l-8 224" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trash-sharp"><path d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8Z" style="fill:none" /><path d="M292 64h-72a4 4 0 0 0-4 4v28h80V68a4 4 0 0 0-4-4Z" style="fill:none" /><path d="M447.55 96H336V48a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v48H64.45L64 136h33l20.09 314A32 32 0 0 0 149 480h214a32 32 0 0 0 31.93-29.95L415 136h33ZM176 416l-9-256h33l9 256Zm96 0h-32V160h32Zm24-320h-80V68a4 4 0 0 1 4-4h72a4 4 0 0 1 4 4Zm40 320h-33l9-256h33Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trash"><path d="M296 64h-80a7.91 7.91 0 0 0-8 8v24h96V72a7.91 7.91 0 0 0-8-8Z" style="fill:none" /><path d="M432 96h-96V72a40 40 0 0 0-40-40h-80a40 40 0 0 0-40 40v24H80a16 16 0 0 0 0 32h17l19 304.92c1.42 26.85 22 47.08 48 47.08h184c26.13 0 46.3-19.78 48-47l19-305h17a16 16 0 0 0 0-32ZM192.57 416H192a16 16 0 0 1-16-15.43l-8-224a16 16 0 1 1 32-1.14l8 224A16 16 0 0 1 192.57 416ZM272 400a16 16 0 0 1-32 0V176a16 16 0 0 1 32 0Zm32-304h-96V72a7.91 7.91 0 0 1 8-8h80a7.91 7.91 0 0 1 8 8Zm32 304.57A16 16 0 0 1 320 416h-.58A16 16 0 0 1 304 399.43l8-224a16 16 0 1 1 32 1.14Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trending-down-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M352 368h112V256" /><path d="m48 144 121.37 121.37a32 32 0 0 0 45.26 0l50.74-50.74a32 32 0 0 1 45.26 0L448 352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trending-down-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M352 368h112V256" /><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="m48 144 144 144 96-96 160 160" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trending-down"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M352 368h112V256" /><path d="m48 144 121.37 121.37a32 32 0 0 0 45.26 0l50.74-50.74a32 32 0 0 1 45.26 0L448 352" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trending-up-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M352 144h112v112" /><path d="m48 368 121.37-121.37a32 32 0 0 1 45.26 0l50.74 50.74a32 32 0 0 0 45.26 0L448 160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trending-up-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M352 144h112v112" /><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="m48 368 144-144 96 96 160-160" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trending-up"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M352 144h112v112" /><path d="m48 368 121.37-121.37a32 32 0 0 1 45.26 0l50.74 50.74a32 32 0 0 0 45.26 0L448 160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-triangle-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M48 448 256 64l208 384H48z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-triangle-sharp"><path d="M256 32 20 464h472L256 32z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-triangle"><path d="M464 464H48a16 16 0 0 1-14.07-23.62l208-384a16 16 0 0 1 28.14 0l208 384A16 16 0 0 1 464 464Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trophy-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M176 464h160M256 464V336M384 224c0-50.64-.08-134.63-.12-160a16 16 0 0 0-16-16l-223.79.26a16 16 0 0 0-16 15.95c0 30.58-.13 129.17-.13 159.79 0 64.28 83 112 128 112S384 288.28 384 224Z" /><path d="M128 96H48v16c0 55.22 33.55 112 80 112M384 96h80v16c0 55.22-33.55 112-80 112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trophy-sharp"><path d="M399.9 80V32H112v48H32v38c0 32 9.5 62.79 26.76 86.61 13.33 18.4 34.17 31.1 52.91 37.21 5.44 29.29 20.2 57.13 50.19 79.83 22 16.66 48.45 28.87 72.14 33.86V436h-74v44h192v-44h-74v-80.49c23.69-5 50.13-17.2 72.14-33.86 30-22.7 44.75-50.54 50.19-79.83 18.74-6.11 39.58-18.81 52.91-37.21C470.5 180.79 480 150 480 118V80ZM94.4 178.8c-10.68-14.68-17.17-34.4-18.24-54.8H112v67.37c-3.94-1.14-12.92-6.12-17.6-12.57Zm323.2 0c-4.6 6.61-11.6 12.58-17.6 12.58 0-22.4 0-46.29-.05-67.38h35.9c-1.08 20.4-7.85 39.9-18.25 54.8Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-trophy"><path d="M464 80h-60.1a4 4 0 0 1-4-4V63.92a32 32 0 0 0-32-31.92l-223.79.26a32 32 0 0 0-31.94 31.93V76a4 4 0 0 1-4 4H48a16 16 0 0 0-16 16v16c0 54.53 30 112.45 76.52 125.35a7.82 7.82 0 0 1 5.55 5.9c5.77 26.89 23.52 52.5 51.41 73.61 20.91 15.83 45.85 27.5 68.27 32.48a8 8 0 0 1 6.25 7.8V444a4 4 0 0 1-4 4h-59.55c-8.61 0-16 6.62-16.43 15.23A16 16 0 0 0 176 480h159.55c8.61 0 16-6.62 16.43-15.23A16 16 0 0 0 336 448h-60a4 4 0 0 1-4-4v-86.86a8 8 0 0 1 6.25-7.8c22.42-5 47.36-16.65 68.27-32.48 27.89-21.11 45.64-46.72 51.41-73.61a7.82 7.82 0 0 1 5.55-5.9C450 224.45 480 166.53 480 112V96a16 16 0 0 0-16-16ZM112 198.22a4 4 0 0 1-6 3.45c-10.26-6.11-17.75-15.37-22.14-21.89-11.91-17.69-19-40.67-19.79-63.63a4 4 0 0 1 4-4.15h40a4 4 0 0 1 4 4c-.02 27.45-.07 58.87-.07 82.22Zm316.13-18.44c-4.39 6.52-11.87 15.78-22.13 21.89a4 4 0 0 1-6-3.46c0-26.51 0-56.63-.05-82.21a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4.15c-.79 22.96-7.9 45.94-19.81 63.63Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-tv-outline"><rect x="32" y="96" width="448" height="272" rx="32.14" ry="32.14" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M128 416h256" /></symbol><symbol  viewBox="0 0 512 512" id="icon-tv-sharp"><path d="M488 384H24a8 8 0 0 1-8-8V88a8 8 0 0 1 8-8h464a8 8 0 0 1 8 8v288a8 8 0 0 1-8 8Z" /><rect x="112" y="400" width="288" height="32" rx="4" ry="4" /></symbol><symbol  viewBox="0 0 512 512" id="icon-tv"><path d="M447.86 384H64.14A48.2 48.2 0 0 1 16 335.86V128.14A48.2 48.2 0 0 1 64.14 80h383.72A48.2 48.2 0 0 1 496 128.14v207.72A48.2 48.2 0 0 1 447.86 384Z" /><path style="stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M128 416h256" /></symbol><symbol  viewBox="0 0 512 512" id="icon-umbrella-outline"><path d="M256 272v160a32 32 0 0 1-32 32h0a32 32 0 0 1-32-32M464 272c0-114.88-93.12-208-208-208S48 157.12 48 272h0a67.88 67.88 0 0 1 96 0h0a78.28 78.28 0 0 1 102.31-7.27L256 272l9.69-7.27A78.28 78.28 0 0 1 368 272h0a67.88 67.88 0 0 1 96 0ZM256 64V48" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-umbrella-sharp"><path d="m128.93 280-.26-.3c-.9-.74-1.83-1.43-2.77-2.1ZM383.08 280l2.62-2.12c-.79.58-1.57 1.17-2.34 1.79Z" /><path d="M463.14 186.44A224.55 224.55 0 0 0 272 48.57V32h-32v16.57A223.58 223.58 0 0 0 32 272v22.52l12.25-11.21a62.63 62.63 0 0 1 81.43-5.88l.22.17c.94.67 1.87 1.36 2.77 2.1q2.09 1.69 4 3.61L144 294.63l11.31-11.32a62.59 62.59 0 0 1 81.4-5.78L240 280v152a16 16 0 0 1-32 0v-16h-32v16a48 48 0 0 0 96 0V280l3.29-2.47a62.59 62.59 0 0 1 81.4 5.78L368 294.63l11.31-11.32q1.95-1.94 4.05-3.64c.77-.62 1.55-1.21 2.34-1.79l.26-.21c24.63-18.47 60-16.13 81.81 5.64l12.23 11.2V272a223.62 223.62 0 0 0-16.86-85.56Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-umbrella"><path d="M414.39 113.61a222.26 222.26 0 0 0-136.33-64.54 8.09 8.09 0 0 1-6.88-5.62 15.79 15.79 0 0 0-30.36 0 8.09 8.09 0 0 1-6.88 5.62A224 224 0 0 0 32 271.52a16.41 16.41 0 0 0 7.24 13.87 16 16 0 0 0 20.07-2.08 51.89 51.89 0 0 1 73.31-.06 15.94 15.94 0 0 0 22.6.15 62.59 62.59 0 0 1 81.49-5.87 8.24 8.24 0 0 1 3.29 6.59v147.42c0 8.6-6.6 16-15.19 16.44A16 16 0 0 1 208 432a16 16 0 0 0-16.29-16c-9 .16-15.9 8.11-15.7 17.1a48.06 48.06 0 0 0 47.37 46.9c26.88.34 48.62-21.93 48.62-48.81V284.12a8.24 8.24 0 0 1 3.29-6.59 62.59 62.59 0 0 1 81.4 5.78 16 16 0 0 0 22.62 0 51.91 51.91 0 0 1 73.38 0 16 16 0 0 0 19.54 2.41 16.4 16.4 0 0 0 7.77-14.21 222.54 222.54 0 0 0-65.61-157.9Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-unlink-outline"><path d="M208 352h-64a96 96 0 0 1 0-192h64M304 160h64a96 96 0 0 1 0 192h-64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="36" /></symbol><symbol  viewBox="0 0 512 512" id="icon-unlink-sharp"><path d="M200.66 352H144a96 96 0 0 1 0-192h55.41M312.59 160H368a96 96 0 0 1 0 192h-56.66" fill="none" stroke="currentColor" stroke-linecap="square" stroke-linejoin="round" stroke-width="48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-unlink"><path d="M200.66 352H144a96 96 0 0 1 0-192h55.41M312.59 160H368a96 96 0 0 1 0 192h-56.66" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" /></symbol><symbol  viewBox="0 0 512 512" id="icon-videocam-off-outline"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="32" stroke-linejoin="round" d="M374.79 308.78 457.5 367a16 16 0 0 0 22.5-14.62V159.62A16 16 0 0 0 457.5 145l-82.71 58.22A16 16 0 0 0 368 216.3v79.4a16 16 0 0 0 6.79 13.08Z" /><path fill="none" stroke="#000" stroke-linecap="round" stroke-width="32" stroke-miterlimit="10" d="M50.19 140.57A51.94 51.94 0 0 0 32 180v152a52.15 52.15 0 0 0 52 52h184a51.6 51.6 0 0 0 22-4.9M208 128h60.48A51.68 51.68 0 0 1 320 179.52V248M416 416 80 80" /></symbol><symbol  viewBox="0 0 512 512" id="icon-videocam-off-sharp"><path d="m57.376 79.998 22.627-22.627 358.63 358.63-22.627 22.628zM32 112a16 16 0 0 0-16 16v256a16 16 0 0 0 16 16h288a15.89 15.89 0 0 0 9.34-3l-285-285ZM336 208v-80a16 16 0 0 0-16-16H179.63l245.44 245.44L496 400V112Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-videocam-off"><path d="M336 179.52A67.52 67.52 0 0 0 268.48 112h-79.2a4 4 0 0 0-2.82 6.83l142.71 142.71a4 4 0 0 0 6.83-2.82ZM16 180v152a68 68 0 0 0 68 68h184a67.66 67.66 0 0 0 42.84-15.24 4 4 0 0 0 .33-6L54.41 122a4 4 0 0 0-4.87-.62A68 68 0 0 0 16 180ZM464 384.39a32 32 0 0 1-13-2.77 15.77 15.77 0 0 1-2.71-1.54l-82.71-58.22A32 32 0 0 1 352 295.7v-79.4a32 32 0 0 1 13.58-26.16l82.71-58.22a15.77 15.77 0 0 1 2.71-1.54 32 32 0 0 1 45 29.24v192.76a32 32 0 0 1-32 32Z" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M416 416 80 80" /></symbol><symbol  viewBox="0 0 512 512" id="icon-videocam-outline"><path d="M374.79 308.78 457.5 367a16 16 0 0 0 22.5-14.62V159.62A16 16 0 0 0 457.5 145l-82.71 58.22A16 16 0 0 0 368 216.3v79.4a16 16 0 0 0 6.79 13.08Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M268 384H84a52.15 52.15 0 0 1-52-52V180a52.15 52.15 0 0 1 52-52h184.48A51.68 51.68 0 0 1 320 179.52V332a52.15 52.15 0 0 1-52 52Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-videocam-sharp"><path d="M336 208v-80a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v256a16 16 0 0 0 16 16h288a16 16 0 0 0 16-16v-80l160 96V112Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-videocam"><path d="M464 384.39a32 32 0 0 1-13-2.77 15.77 15.77 0 0 1-2.71-1.54l-82.71-58.22A32 32 0 0 1 352 295.7v-79.4a32 32 0 0 1 13.58-26.16l82.71-58.22a15.77 15.77 0 0 1 2.71-1.54 32 32 0 0 1 45 29.24v192.76a32 32 0 0 1-32 32ZM268 400H84a68.07 68.07 0 0 1-68-68V180a68.07 68.07 0 0 1 68-68h184.48A67.6 67.6 0 0 1 336 179.52V332a68.07 68.07 0 0 1-68 68Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-high-outline"><path d="M126 192H56a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h69.65a15.93 15.93 0 0 1 10.14 3.54l91.47 74.89A8 8 0 0 0 240 392V120a8 8 0 0 0-12.74-6.43l-91.47 74.89A15 15 0 0 1 126 192ZM320 320c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64M368 368c19.48-33.92 32-64.06 32-112s-12-77.74-32-112M416 416c30-46 48-91.43 48-160s-18-113-48-160" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-high-sharp"><path d="M320 320c9.74-19.38 16-40.84 16-64 0-23.48-6-44.42-16-64M368 368c19.48-33.92 32-64.06 32-112s-12-77.74-32-112M416 416c30-46 48-91.43 48-160s-18-113-48-160" style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" /><path d="M125.65 176.1H32v159.8h93.65L256 440V72L125.65 176.1z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-high"><path d="M232 416a23.88 23.88 0 0 1-14.2-4.68 8.27 8.27 0 0 1-.66-.51L125.76 336H56a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.75l91.37-74.81a8.27 8.27 0 0 1 .66-.51A24 24 0 0 1 256 120v272a24 24 0 0 1-24 24Zm-106.18-80Zm-.27-159.86ZM320 336a16 16 0 0 1-14.29-23.19c9.49-18.87 14.3-38 14.3-56.81 0-19.38-4.66-37.94-14.25-56.73a16 16 0 0 1 28.5-14.54C346.19 208.12 352 231.44 352 256c0 23.86-6 47.81-17.7 71.19A16 16 0 0 1 320 336Z" /><path d="M368 384a16 16 0 0 1-13.86-24C373.05 327.09 384 299.51 384 256c0-44.17-10.93-71.56-29.82-103.94a16 16 0 0 1 27.64-16.12C402.92 172.11 416 204.81 416 256c0 50.43-13.06 83.29-34.13 120a16 16 0 0 1-13.87 8Z" /><path d="M416 432a16 16 0 0 1-13.39-24.74C429.85 365.47 448 323.76 448 256c0-66.5-18.18-108.62-45.49-151.39a16 16 0 1 1 27-17.22C459.81 134.89 480 181.74 480 256c0 64.75-14.66 113.63-50.6 168.74A16 16 0 0 1 416 432Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-low-outline"><path d="M189.65 192H120a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h69.65a16 16 0 0 1 10.14 3.63l91.47 75a8 8 0 0 0 12.74-6.46V119.83a8 8 0 0 0-12.74-6.44l-91.47 75a16 16 0 0 1-10.14 3.61ZM384 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-low-sharp"><path d="m391.12 341.48-28.6-14.36 7.18-14.3c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73L362.48 185 391 170.48l7.26 14.25C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18ZM189.65 176.1H96v159.8h93.65L320 440V72L189.65 176.1z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-low"><path d="M296 416.19a23.92 23.92 0 0 1-14.21-4.69l-.66-.51-91.46-75H120a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.65l91.46-75 .66-.51A24 24 0 0 1 320 119.83v272.34a24 24 0 0 1-24 24ZM384 336a16 16 0 0 1-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0 1 28.5-14.54C410.2 208.16 416 231.47 416 256c0 23.83-6 47.78-17.7 71.18A16 16 0 0 1 384 336Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-medium-outline"><path d="M157.65 192H88a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h69.65a16 16 0 0 1 10.14 3.63l91.47 75a8 8 0 0 0 12.74-6.46V119.83a8 8 0 0 0-12.74-6.44l-91.47 75a16 16 0 0 1-10.14 3.61ZM352 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64M400 368c19.48-34 32-64 32-112s-12-77.7-32-112" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-medium-sharp"><path d="M157.65 176.1H64v159.8h93.65L288 440V72L157.65 176.1z" /><path d="M352 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64M400 368c19.48-34 32-64 32-112s-12-77.7-32-112" style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-medium"><path d="M264 416.19a23.92 23.92 0 0 1-14.21-4.69l-.66-.51-91.46-75H88a24 24 0 0 1-24-24V200a24 24 0 0 1 24-24h69.65l91.46-75 .66-.51A24 24 0 0 1 288 119.83v272.34a24 24 0 0 1-24 24ZM352 336a16 16 0 0 1-14.29-23.18c9.49-18.9 14.3-38 14.3-56.82 0-19.36-4.66-37.92-14.25-56.73a16 16 0 0 1 28.5-14.54C378.2 208.16 384 231.47 384 256c0 23.83-6 47.78-17.7 71.18A16 16 0 0 1 352 336Z" /><path d="M400 384a16 16 0 0 1-13.87-24C405 327.05 416 299.45 416 256c0-44.12-10.94-71.52-29.83-103.95A16 16 0 0 1 413.83 136C434.92 172.16 448 204.88 448 256c0 50.36-13.06 83.24-34.12 120a16 16 0 0 1-13.88 8Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-mute-outline"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M416 432 64 80" /><path d="M224 136.92v33.8a4 4 0 0 0 1.17 2.82l24 24a4 4 0 0 0 6.83-2.82v-74.15a24.53 24.53 0 0 0-12.67-21.72 23.91 23.91 0 0 0-25.55 1.83 8.27 8.27 0 0 0-.66.51l-31.94 26.15a4 4 0 0 0-.29 5.92l17.05 17.06a4 4 0 0 0 5.37.26ZM224 375.08l-78.07-63.92a32 32 0 0 0-20.28-7.16H64v-96h50.72a4 4 0 0 0 2.82-6.83l-24-24a4 4 0 0 0-2.82-1.17H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h69.76l91.36 74.8a8.27 8.27 0 0 0 .66.51 23.93 23.93 0 0 0 25.85 1.69A24.49 24.49 0 0 0 256 391.45v-50.17a4 4 0 0 0-1.17-2.82l-24-24a4 4 0 0 0-6.83 2.82ZM125.82 336ZM352 256c0-24.56-5.81-47.88-17.75-71.27a16 16 0 0 0-28.5 14.54C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 0 0 2.32 6.25l19.66 19.67a4 4 0 0 0 6.75-2A146.89 146.89 0 0 0 352 256ZM416 256c0-51.19-13.08-83.89-34.18-120.06a16 16 0 0 0-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 0 0 1.9 8.26l16.77 16.76a4 4 0 0 0 6.52-1.27C410.09 315.88 416 289.91 416 256Z" /><path d="M480 256c0-74.26-20.19-121.11-50.51-168.61a16 16 0 1 0-27 17.22C429.82 147.38 448 189.5 448 256c0 47.45-8.9 82.12-23.59 113a4 4 0 0 0 .77 4.55L443 391.39a4 4 0 0 0 6.4-1C470.88 348.22 480 307 480 256Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-mute-sharp"><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-miterlimit:10;stroke-width:32px" d="M416 432 64 80" /><path d="M352 256c0-24.56-5.81-47.88-17.75-71.27L327 170.47 298.48 185l7.27 14.25C315.34 218.06 320 236.62 320 256a112.91 112.91 0 0 1-.63 11.74l27.32 27.32A148.8 148.8 0 0 0 352 256ZM416 256c0-51.19-13.08-83.89-34.18-120.06l-8.06-13.82-27.64 16.12 8.06 13.82C373.07 184.44 384 211.83 384 256c0 25.93-3.89 46.21-11 65.33l24.5 24.51C409.19 319.68 416 292.42 416 256Z" /><path d="M480 256c0-74.26-20.19-121.11-50.51-168.61l-8.61-13.49-27 17.22 8.61 13.49C429.82 147.38 448 189.5 448 256c0 48.76-9.4 84-24.82 115.55l23.7 23.7C470.16 351.39 480 309 480 256ZM256 72l-73.6 58.78 73.6 73.59V72zM32 176.1v159.8h93.65L256 440V339.63L92.47 176.1H32z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-mute"><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" d="M416 432 64 80" /><path d="M243.33 98.86a23.89 23.89 0 0 0-25.55 1.82l-.66.51-28.52 23.35a8 8 0 0 0-.59 11.85l54.33 54.33a8 8 0 0 0 13.66-5.66v-64.49a24.51 24.51 0 0 0-12.67-21.71ZM251.33 335.29 96.69 180.69A16 16 0 0 0 85.38 176H56a24 24 0 0 0-24 24v112a24 24 0 0 0 24 24h69.76l92 75.31a23.9 23.9 0 0 0 25.87 1.69A24.51 24.51 0 0 0 256 391.45v-44.86a16 16 0 0 0-4.67-11.3ZM352 256c0-24.56-5.81-47.87-17.75-71.27a16 16 0 1 0-28.5 14.55C315.34 218.06 320 236.62 320 256q0 4-.31 8.13a8 8 0 0 0 2.32 6.25l14.36 14.36a8 8 0 0 0 13.55-4.31A146 146 0 0 0 352 256ZM416 256c0-51.18-13.08-83.89-34.18-120.06a16 16 0 0 0-27.64 16.12C373.07 184.44 384 211.83 384 256c0 23.83-3.29 42.88-9.37 60.65a8 8 0 0 0 1.9 8.26L389 337.4a8 8 0 0 0 13.13-2.79C411 311.76 416 287.26 416 256Z" /><path d="M480 256c0-74.25-20.19-121.11-50.51-168.61a16 16 0 1 0-27 17.22C429.82 147.38 448 189.5 448 256c0 46.19-8.43 80.27-22.43 110.53a8 8 0 0 0 1.59 9l11.92 11.92a8 8 0 0 0 12.92-2.16C471.6 344.9 480 305 480 256Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-off-outline"><path d="M237.65 192H168a8 8 0 0 0-8 8v112a8 8 0 0 0 8 8h69.65a16 16 0 0 1 10.14 3.63l91.47 75a8 8 0 0 0 12.74-6.46V119.83a8 8 0 0 0-12.74-6.44l-91.47 75a16 16 0 0 1-10.14 3.61Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-off-sharp"><path d="M237.65 176.1H144v159.8h93.65L368 440V72L237.65 176.1z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-volume-off"><path d="M344 416a23.92 23.92 0 0 1-14.21-4.69c-.23-.16-.44-.33-.66-.51l-91.46-74.9H168a24 24 0 0 1-24-24V200.07a24 24 0 0 1 24-24h69.65l91.46-74.9c.22-.18.43-.35.66-.51A24 24 0 0 1 368 120v272a24 24 0 0 1-24 24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-walk-outline"><path d="m314.21 482.32-56.77-114.74-44.89-57.39a72.82 72.82 0 0 1-10.13-37.05V144h15.67a40.22 40.22 0 0 1 40.23 40.22v183.36M127.9 293.05v-74.52S165.16 144 202.42 144M370.1 274.42 304 231M170.53 478.36 224 400" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><circle cx="258.32" cy="69.48" r="37.26" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-walk-sharp"><path d="m315.09 481.38-56.95-115.12-45-57.56a73.11 73.11 0 0 1-10.16-37.17V142h15.73A40.36 40.36 0 0 1 259 182.32v162.52" style="stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:32px" d="M128.18 291.5v-74.77l64.95-65.1" /><path d="m376.35 295.73-83.95-56.38v-44.68l104.68 72.95-20.73 28.11zM175.13 498.58l-21.43-26.91 80.33-81.54 15.53 32.07-74.43 76.38z" /><circle cx="259.02" cy="67.21" r="37.38" style="stroke:#000;stroke-linecap:square;stroke-linejoin:round;stroke-width:16px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-walk"><path d="m312.55 479.9-56.42-114-44.62-57a72.37 72.37 0 0 1-10.06-36.9V143.64H217a40 40 0 0 1 40 40v182.21" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M127.38 291.78v-74.07s37-74.07 74.07-74.07" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M368.09 291.78a18.49 18.49 0 0 1-10.26-3.11L297.7 250a21.18 21.18 0 0 1-9.7-17.79v-23.7a5.65 5.65 0 0 1 8.69-4.77l81.65 54.11a18.52 18.52 0 0 1-10.29 33.93ZM171.91 493.47a18.5 18.5 0 0 1-14.83-7.41c-6.14-8.18-4-17.18 3.7-25.92l59.95-74.66a7.41 7.41 0 0 1 10.76 2.06c1.56 2.54 3.38 5.65 5.19 9.09 5.24 9.95 6 16.11-1.68 25.7-8 10-52 67.44-52 67.44-2.62 2.98-7.23 3.7-11.09 3.7Z" /><circle cx="257" cy="69.56" r="37.04" style="stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:16px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-wallet-outline"><rect x="48" y="144" width="416" height="288" rx="48" ry="48" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M411.36 144v-30A50 50 0 0 0 352 64.9L88.64 109.85A50 50 0 0 0 48 159v49" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M368 320a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-wallet-sharp"><path d="M47.5 104H432V51.52a16 16 0 0 0-19.14-15.69l-368 60.48a16 16 0 0 0-12 10.47A39.69 39.69 0 0 1 47.5 104ZM463.5 128h-416a16 16 0 0 0-16 16v288a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V144a16 16 0 0 0-16-16ZM368 320a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /><path d="M31.33 259.5V116c0-12.33 5.72-18.48 15.42-20 35.2-5.53 108.58-8.5 108.58-8.5s-8.33 16-27.33 16V128c18.5 0 31.33 23.5 31.33 23.5L84.83 236Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-wallet"><path d="M95.5 104h320a87.73 87.73 0 0 1 11.18.71 66 66 0 0 0-77.51-55.56L86 94.08h-.3a66 66 0 0 0-41.07 26.13A87.57 87.57 0 0 1 95.5 104ZM415.5 128h-320a64.07 64.07 0 0 0-64 64v192a64.07 64.07 0 0 0 64 64h320a64.07 64.07 0 0 0 64-64V192a64.07 64.07 0 0 0-64-64ZM368 320a32 32 0 1 1 32-32 32 32 0 0 1-32 32Z" /><path d="M32 259.5V160c0-21.67 12-58 53.65-65.87C121 87.5 156 87.5 156 87.5s23 16 4 16-18.5 24.5 0 24.5 0 23.5 0 23.5L85.5 236Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-warning-outline"><path d="M85.57 446.25h340.86a32 32 0 0 0 28.17-47.17L284.18 82.58c-12.09-22.44-44.27-22.44-56.36 0L57.4 399.08a32 32 0 0 0 28.17 47.17Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="m250.26 195.39 5.74 122 5.73-121.95a5.74 5.74 0 0 0-5.79-6h0a5.74 5.74 0 0 0-5.68 5.95Z" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /><path d="M256 397.25a20 20 0 1 1 20-20 20 20 0 0 1-20 20Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-warning-sharp"><path d="M479 447.77 268.43 56.64a8 8 0 0 0-14.09 0L43.73 447.77a8 8 0 0 0 7.05 11.79H472a8 8 0 0 0 7-11.79Zm-197.62-36.29h-40v-40h40Zm-4-63.92h-32l-6-160h44Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-warning"><path d="M449.07 399.08 278.64 82.58c-12.08-22.44-44.26-22.44-56.35 0L51.87 399.08A32 32 0 0 0 80 446.25h340.89a32 32 0 0 0 28.18-47.17Zm-198.6-1.83a20 20 0 1 1 20-20 20 20 0 0 1-20 20Zm21.72-201.15-5.74 122a16 16 0 0 1-32 0l-5.74-121.95a21.73 21.73 0 0 1 21.5-22.69h.21a21.74 21.74 0 0 1 21.73 22.7Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-watch-outline"><rect x="112" y="112" width="288" height="288" rx="64" ry="64" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path d="M176 112V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v72M336 400v72a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-72" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-watch-sharp"><rect x="136" y="136" width="240" height="240" rx="8" ry="8" /><path d="M384 96h-48V16H176v80h-48a32 32 0 0 0-32 32v256a32 32 0 0 0 32 32h48v80h160v-80h48a32 32 0 0 0 32-32V128a32 32 0 0 0-32-32Zm8 272a24 24 0 0 1-24 24H144a24 24 0 0 1-24-24V144a24 24 0 0 1 24-24h224a24 24 0 0 1 24 24Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-watch"><rect x="136" y="136" width="240" height="240" rx="56" ry="56" /><path d="M336 96V32a16 16 0 0 0-16-16H192a16 16 0 0 0-16 16v64a80.09 80.09 0 0 0-80 80v160a80.09 80.09 0 0 0 80 80v64a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-64a80.09 80.09 0 0 0 80-80V176a80.09 80.09 0 0 0-80-80Zm56 224a72.08 72.08 0 0 1-72 72H192a72.08 72.08 0 0 1-72-72V192a72.08 72.08 0 0 1 72-72h128a72.08 72.08 0 0 1 72 72Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-water-outline"><path d="M400 320c0 88.37-55.63 144-144 144s-144-55.63-144-144c0-94.83 103.23-222.85 134.89-259.88a12 12 0 0 1 18.23 0C296.77 97.15 400 225.17 400 320Z" style="fill:none;stroke:#000;stroke-miterlimit:10;stroke-width:32px" /><path d="M344 328a72 72 0 0 1-72 72" style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" /></symbol><symbol  viewBox="0 0 512 512" id="icon-water-sharp"><path d="M256 43.91s-144 158.3-144 270.3c0 88.36 55.64 144 144 144s144-55.64 144-144c0-112-144-270.3-144-270.3Zm16 362.3v-24a60.07 60.07 0 0 0 60-60h24a84.09 84.09 0 0 1-84 84Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-water"><path d="M265.12 60.12a12 12 0 0 0-18.23 0C215.23 97.15 112 225.17 112 320c0 88.37 55.64 144 144 144s144-55.63 144-144c0-94.83-103.23-222.85-134.88-259.88ZM272 412a12 12 0 0 1-11.34-16 11.89 11.89 0 0 1 11.41-8A60.06 60.06 0 0 0 332 328.07a11.89 11.89 0 0 1 8-11.41A12 12 0 0 1 356 328a84.09 84.09 0 0 1-84 84Z" /></symbol><symbol fill="none"  viewBox="0 0 512 512" id="icon-wifi-outline"><path d="M318.586 363.5 256 424l-62.586-60.5S212 336 256 336s62.586 27.5 62.586 27.5ZM407.31 278 372 312s-41-46-116-46-116 46-116 46l-35.31-34S142.5 214 256 214s151.31 64 151.31 64Z" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" /><path d="m496 192-36.69 35.5S386.5 141 256 141 52.69 227.5 52.69 227.5L16 192S88 88 256 88s240 104 240 104Z" stroke="#000" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" /></symbol><symbol  viewBox="0 0 512 512" id="icon-wifi-sharp"><path fill-rule="evenodd" clip-rule="evenodd" d="M337.78 362.819c-4.246-8.453-11.074-15.687-12.601-17.31-3.05-3.241-7.535-7.397-13.589-11.505-12.228-8.299-30.57-16.191-55.59-16.191-25.02 0-43.362 7.892-55.59 16.191-6.054 4.108-10.539 8.264-13.589 11.505a62.537 62.537 0 0 0-3.548 4.097c-.422.535-4.307 4.76-9.053 13.213L256 442l81.78-79.181Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M425.25 279.287s-7.995-10.229-15.703-18.928c-5.983-6.753-18.1-17.71-30.901-26.377-25.762-17.444-63.897-35.077-122.646-35.077s-96.884 17.633-122.646 35.077c-12.801 8.667-20.835 15.473-28.869 24.172-8.034 8.7-17.735 21.133-17.735 21.133l56.634 54.591 11.037-12.388.187-.201c.2-.211.549-.573 1.044-1.065a90.734 90.734 0 0 1 4.709-4.326c4.294-3.693 10.823-8.733 19.473-13.804C197.103 291.97 222.709 281.78 256 281.78s58.897 10.19 76.166 20.314c8.65 5.071 15.179 10.111 19.473 13.804a90.734 90.734 0 0 1 4.709 4.326c.495.492.844.854 1.044 1.065l.187.201.009.01 11.028 12.378 56.634-54.591Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M512 195.36s-4.5-8.36-11.85-16.485c-4.391-4.855-6.219-7.406-11.155-12.511-9.868-10.207-24.703-23.648-44.901-37.04C403.583 102.463 341.778 76 256 76c-85.778 0-147.583 26.463-188.094 53.324-20.198 13.392-35.034 26.833-44.9 37.04-4.937 5.105-8.639 9.411-11.156 12.511-1.259 1.55-1.784 2.241-2.898 3.7C5.254 187.42 0 195.36 0 195.36l58.06 55.873 11.004-13.001.002-.004.002-.002.08-.092c.089-.102.245-.28.469-.529.447-.499 1.163-1.282 2.144-2.309 1.962-2.056 4.979-5.083 9.02-8.76 8.092-7.361 20.236-17.28 36.189-27.221 31.891-19.872 78.774-39.709 139.03-39.709s107.139 19.837 139.03 39.709c15.953 9.941 28.097 19.86 36.189 27.221 4.041 3.677 7.058 6.704 9.02 8.76a99.983 99.983 0 0 1 2.144 2.309c.224.249.38.427.469.529l.036.042.044.051.002.001.002.004 11.004 13.001L512 195.36Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-wifi"><path fill-rule="evenodd" clip-rule="evenodd" d="M331.295 353.764c.131.181-.091-.13 0 0a45.63 45.63 0 0 0-1.039-1.365 63.784 63.784 0 0 0-3.618-4.17c-3.112-3.302-7.69-7.537-13.87-11.725C300.287 328.047 281.56 320 256 320c-25.56 0-44.287 8.047-56.768 16.504-6.18 4.188-10.758 8.423-13.87 11.725a63.784 63.784 0 0 0-3.618 4.17c.264-.361-.43.544 0 0l-1.586 2.142a16 16 0 0 0 2.135 20.463l62.586 60.5c6.202 5.995 16.039 5.995 22.241 0l62.587-60.5a16.001 16.001 0 0 0 2.136-20.463l-.548-.777Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M421.086 269.862c-.135-.218-.596-.966-.812-1.3a71.882 71.882 0 0 0-1.81-2.639c-1.552-2.163-3.813-5.096-6.861-8.536-6.099-6.88-15.362-15.802-28.417-24.637C356.915 214.969 315.967 198 256 198c-59.967 0-100.915 16.969-127.186 34.75-13.055 8.835-22.318 17.757-28.417 24.637-3.049 3.44-5.31 6.373-6.861 8.536a70.641 70.641 0 0 0-1.81 2.639c-.216.334-.392.612-.527.829l-.285.471a16 16 0 0 0 2.678 19.664l35.31 34a16.001 16.001 0 0 0 23.007-.84l.195-.209c.207-.219.565-.591 1.074-1.096a92.935 92.935 0 0 1 4.831-4.436c4.402-3.785 11.093-8.947 19.955-14.141C195.658 292.436 221.893 282 256 282s60.342 10.436 78.036 20.804c8.862 5.194 15.553 10.356 19.955 14.141a92.935 92.935 0 0 1 4.831 4.436 48.464 48.464 0 0 1 1.269 1.305l-.005-.006-.013-.015m0 0 .026.029a16.001 16.001 0 0 0 22.999.832l35.31-34a16 16 0 0 0 2.678-19.664" /><path d="M507.974 181.264c.343.459 1.181 1.629 1.181 1.629a16.001 16.001 0 0 1-2.029 20.606l-36.69 35.5a16 16 0 0 1-23.345-1.17l-.003-.003a68.347 68.347 0 0 0-.567-.647 108.106 108.106 0 0 0-2.197-2.379c-2.009-2.116-5.095-5.229-9.229-9.01-8.275-7.569-20.69-17.764-36.997-27.981C365.499 177.384 317.58 157 256 157c-61.58 0-109.499 20.384-142.098 40.809-16.307 10.217-28.722 20.412-36.997 27.981-4.133 3.781-7.22 6.894-9.229 9.01a108.551 108.551 0 0 0-2.197 2.379c-.23.258-.39.442-.482.548l-.047.054-.03.034-.004.006-.004.005-.004.004a16 16 0 0 1-23.344 1.169l-36.69-35.5a16 16 0 0 1-2.03-20.606l.011-.016.013-.017.03-.043.079-.113.24-.337c.197-.274.466-.644.809-1.103.686-.92 1.667-2.199 2.949-3.786 2.563-3.174 6.335-7.585 11.367-12.818 10.057-10.46 25.185-24.241 45.783-37.973C105.437 99.146 168.48 72 256 72s150.563 27.146 191.875 54.687c20.598 13.732 35.726 27.513 45.783 37.973 5.032 5.233 8.804 9.644 11.367 12.818a124.805 124.805 0 0 1 2.949 3.786Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-wine-outline"><path d="M398.57 80H113.43v16S87.51 272 256 272 398.57 96 398.57 96ZM256 272v160" style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="M352 432H160" /><path style="fill:none;stroke:#000;stroke-linejoin:round;stroke-width:32px" d="M112 160h288" /></symbol><symbol  viewBox="0 0 512 512" id="icon-wine-sharp"><path d="M453 112V66.33H60.75V112l175.13 176v118H124.75v42H389v-42H277.88V288Zm-336.65-3.67h281l-37.81 38H154.16Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-wine"><path d="M414.56 94.92V80a16 16 0 0 0-16-16H113.44a16 16 0 0 0-16 16v14.92c-1.46 11.37-9.65 90.74 36.93 144.69 24.87 28.8 60.36 44.85 105.63 47.86V416h-80a16 16 0 0 0 0 32h192a16 16 0 0 0 0-32h-80V287.47c45.27-3 80.76-19.06 105.63-47.86 46.58-53.95 38.37-133.32 36.93-144.69Zm-285.3 3.41a15.14 15.14 0 0 0 .18-2.33h253.12a15.14 15.14 0 0 0 .18 2.33 201.91 201.91 0 0 1 0 45.67H129.32a204.29 204.29 0 0 1-.06-45.67Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-woman-outline"><path d="M208 368v104a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path d="M256 368v104a23.73 23.73 0 0 0 24 24h0a23.73 23.73 0 0 0 24-24V368M183 274a23.73 23.73 0 0 1-29.84 16.18h0a23.72 23.72 0 0 1-16.17-29.84l25-84.28A44.85 44.85 0 0 1 205 144h102a44.85 44.85 0 0 1 43 32.08l25 84.28a23.72 23.72 0 0 1-16.17 29.84h0a23.73 23.73 0 0 1-29.78-16.2" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><circle cx="256" cy="56" r="40" style="fill:none;stroke:#000;stroke-linecap:round;stroke-miterlimit:10;stroke-width:32px" /><path style="fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:32px" d="m208 192-48 160h192l-48-160" /></symbol><symbol  viewBox="0 0 512 512" id="icon-woman-sharp"><circle cx="255.75" cy="56" r="56" /><path d="M310.28 191.4h.05l7.66-2.3 36.79 122.6 46-13.8-16.21-54.16c0-.12 0-.24-.07-.36l-16.84-56.12-4.71-15.74-.9-3H362l-2.51-8.45a44.84 44.84 0 0 0-43-32.08H195.24a44.84 44.84 0 0 0-43 32.08l-2.51 8.45h-.06l-.9 3-4.71 15.74-16.84 56.12c0 .12 0 .24-.07.36l-16.21 54.16 46 13.8 36.76-122.6 7.54 2.26L148.25 368h51.5v144h52V368h8v144h52V368h51.51Z" /></symbol><symbol  viewBox="0 0 512 512" id="icon-woman"><circle cx="255.75" cy="56" r="56" /><path d="m394.63 277.9-10.33-34.41v-.11l-22.46-74.86h-.05l-2.51-8.45a44.87 44.87 0 0 0-43-32.08h-120a44.84 44.84 0 0 0-43 32.08l-2.51 8.45h-.06l-22.46 74.86v.11l-10.37 34.41c-3.12 10.39 2.3 21.66 12.57 25.14a20 20 0 0 0 25.6-13.18l25.58-85.25 2.17-7.23a8 8 0 0 1 15.53 2.62 7.78 7.78 0 0 1-.17 1.61L155.43 347.4a16 16 0 0 0 15.32 20.6h29v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h16v114.69c0 16.46 10.53 29.31 24 29.31s24-12.85 24-29.31V368h30a16 16 0 0 0 15.33-20.6l-43.74-145.81a7.52 7.52 0 0 1-.16-1.59 8 8 0 0 1 15.54-2.63l2.17 7.23 25.57 85.25A20 20 0 0 0 382.05 303c10.27-3.44 15.69-14.71 12.58-25.1Z" /></symbol>'),
      o.insertBefore(e, o.lastChild)
  }
  document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', a)
    : a()
}
const q = (a, o) => (
    (a.install = (e) => {
      for (const l of [a, ...Object.values({})]) e.component(l.name, l)
    }),
    a
  ),
  K3 = v({
    name: 'VerIcon',
    inheritAttrs: !1,
    __name: 'index',
    props: {
      name: { type: String, required: !1, default: '' },
      size: { type: [Number, String], required: !1, default: 14 },
      color: { type: String, required: !1, default: '#000' },
    },
    setup(a, { expose: o }) {
      o()
      const e = a,
        l = e.size + 'px',
        t = b(() => `#icon-${e.name}`),
        i = { props: e, size: l, IconName: t }
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      )
    },
  }),
  j = (a, o) => {
    const e = a.__vccOpts || a
    for (const [l, t] of o) e[l] = t
    return e
  },
  Q3 = ['xlink:href', 'fill']
function X3(a, o, e, l, t, i) {
  return (
    s(),
    c(
      'svg',
      {
        class: 'ver-icon',
        'aria-hidden': 'true',
        style: D({ width: l.size, height: l.size }),
      },
      [p('use', { 'xlink:href': l.IconName, fill: e.color }, null, 8, Q3)],
      4,
    )
  )
}
const Y3 = j(K3, [
    ['render', X3],
    ['__scopeId', 'data-v-793447e8'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/icon/src/index.vue',
    ],
  ]),
  Q = q(Y3),
  e8 = v({
    name: 'VerButton',
    __name: 'index',
    props: {
      type: { type: String, required: !1, default: '' },
      ghost: { type: Boolean, required: !1, default: !1 },
      round: { type: Boolean, required: !1, default: !1 },
      plain: { type: Boolean, required: !1, default: !1 },
      text: { type: Boolean, required: !1, default: !1 },
      shade: { type: Boolean, required: !1, default: !1 },
      slide: { type: Boolean, required: !1 },
      disabled: { type: Boolean, required: !1, default: !1 },
      size: { type: String, required: !1, default: 'default' },
      color: { type: String, required: !1, default: '' },
      circle: { type: Boolean, required: !1, default: !1 },
      icon: { type: String, required: !1, default: '' },
    },
    setup(a, { expose: o }) {
      o()
      const e = (n) => {
          let r = /^#[0-9a-fA-F]{6}$/,
            m = new RegExp(r)
          return n.match(m) == null
            ? ((r =
                /^[rR][gG][Bb][\(]((2[0-4][0-9]|25[0-5]|[01]?[0-9][0-9]?),){2}(2[0-4]\\d|25[0-5]|[01]?\\d\\d?)[\)]{1}$/),
              (m = new RegExp(r)),
              n.match(m) == null ? '' : n)
            : n
        },
        l = a,
        t = b(() => {
          const n = e(l.color)
          return [
            'ver-btn',
            l.type == '' ? '' : `ver-btn-${l.type}`,
            l.ghost == !1 ? '' : 'is-ghost',
            l.round == !1 ? '' : 'is-round',
            l.plain == !1 ? '' : 'is-plain',
            l.text == !1 ? '' : 'is-text',
            l.shade == !1 ? '' : 'is-shade',
            l.disabled == !1 ? '' : 'is-disabled',
            l.size && l.size !== 'default' ? `is-${l.size}` : '',
            l.color && n !== '' ? `ver-btn-color-${n}` : '',
            l.circle == !1 ? '' : 'is-circle',
          ]
        }),
        i = {
          CheckIsColor: e,
          props: l,
          Verclass: t,
          get VerIcon() {
            return Q
          },
        }
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      )
    },
  }),
  o8 = ['disabled', 'size', 'color']
function l8(a, o, e, l, t, i) {
  return (
    s(),
    c(
      'button',
      {
        class: H(l.Verclass),
        disabled: l.props.disabled,
        size: l.props.size,
        color: l.props.color,
      },
      [
        u(' icon '),
        e.icon
          ? (s(), Z(l.VerIcon, { key: 0, name: e.icon }, null, 8, ['name']))
          : (s(),
            c(
              _,
              { key: 1 },
              [
                u(' common '),
                p('span', null, [h(a.$slots, 'default', {}, void 0, !0)]),
              ],
              2112,
            )),
      ],
      10,
      o8,
    )
  )
}
const t8 = j(e8, [
    ['render', l8],
    ['__scopeId', 'data-v-59b2e43e'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/button/src/index.vue',
    ],
  ]),
  a8 = q(t8),
  i8 = v({
    name: 'VerText',
    __name: 'index',
    props: {
      type: { type: String, required: !1, default: 'primary' },
      size: { type: String, required: !1, default: 'default' },
      truncated: { type: Boolean, required: !1, default: !1 },
    },
    setup(a, { expose: o }) {
      o()
      const e = a,
        l = b(() => [
          'ver-text',
          e.type == 'primary' ? 'ver-text-primary' : `ver-text-${e.type}`,
          e.size == 'default' ? '' : `is-${e.size}`,
          e.truncated == !1 ? '' : 'is-truncated',
        ]),
        t = { props: e, VerClass: l }
      return (
        Object.defineProperty(t, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        t
      )
    },
  })
function s8(a, o, e, l, t, i) {
  return (
    s(),
    c(
      'span',
      { class: H(l.VerClass) },
      [h(a.$slots, 'default', {}, void 0, !0)],
      2,
    )
  )
}
const n8 = j(i8, [
    ['render', s8],
    ['__scopeId', 'data-v-a87ab481'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/text/src/index.vue',
    ],
  ]),
  r8 = q(n8),
  c8 = v({
    name: 'VerLink',
    __name: 'index',
    props: {
      type: { type: String, required: !1, default: '' },
      disabled: { type: Boolean, required: !1, default: !1 },
      href: { type: String, required: !1, default: '' },
    },
    setup(a, { expose: o }) {
      o()
      const e = a,
        l = b(() => [
          'ver-link',
          e.type == '' ? '' : `ver-link-${e.type}`,
          e.disabled == !1 ? '' : 'is-disabled',
        ]),
        t = { props: e, VerClass: l }
      return (
        Object.defineProperty(t, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        t
      )
    },
  }),
  d8 = ['href']
function h8(a, o, e, l, t, i) {
  return (
    s(),
    c(
      'a',
      { class: H(l.VerClass), href: e.href },
      [p('span', null, [h(a.$slots, 'default', {}, void 0, !0)])],
      10,
      d8,
    )
  )
}
const p8 = j(c8, [
    ['render', h8],
    ['__scopeId', 'data-v-d24feda1'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/link/src/index.vue',
    ],
  ]),
  m8 = q(p8),
  y8 = v({
    name: 'VerRow',
    __name: 'index',
    setup(a, { expose: o }) {
      o()
      const e = {}
      return (
        Object.defineProperty(e, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        e
      )
    },
  }),
  v8 = { class: 'ver-row' }
function k8(a, o, e, l, t, i) {
  return s(), c('div', v8, [h(a.$slots, 'default', {}, void 0, !0)])
}
const u8 = j(y8, [
    ['render', k8],
    ['__scopeId', 'data-v-5ce90f13'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/row/src/index.vue',
    ],
  ]),
  b8 = q(u8),
  M8 = v({
    name: 'VerCol',
    __name: 'index',
    props: {
      span: { type: Number, required: !1, default: 24 },
      offset: { type: Number, required: !1, default: 0 },
    },
    setup(a, { expose: o }) {
      o()
      const e = a,
        l = V(e.span <= 24 && e.span % 1 == 0 ? (100 / 24) * e.span + '%' : ''),
        t = V(
          e.offset <= 24 && e.offset % 1 == 0
            ? (100 / 24) * e.offset + '%'
            : '',
        ),
        i = { props: e, width: l, offset: t }
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      )
    },
  })
function x8(a, o, e, l, t, i) {
  return (
    s(),
    c(
      'div',
      { class: 'ver-col', style: D({ width: l.width, marginLeft: l.offset }) },
      [h(a.$slots, 'default', {}, void 0, !0)],
      4,
    )
  )
}
const w8 = j(M8, [
    ['render', x8],
    ['__scopeId', 'data-v-23666f5b'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/col/src/index.vue',
    ],
  ]),
  Z8 = q(w8),
  f8 = v({
    name: 'VerInput',
    __name: 'index',
    props: {
      placeholder: { type: String, required: !1, default: '' },
      modelValue: { type: [String, Number], required: !1, default: '' },
      disabled: { type: Boolean, required: !1, default: !1 },
      type: { type: String, required: !1, default: 'text' },
    },
    emits: ['update:modelValue'],
    setup(a, { expose: o, emit: e }) {
      o()
      const l = e,
        t = a,
        i = (m) => {
          const k = m.target
          l('update:modelValue', k.value)
        },
        n = b(() => ['ver-input', t.disabled == !1 ? '' : 'is-disabled']),
        r = { emit: l, props: t, input: i, VerClass: n }
      return (
        Object.defineProperty(r, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        r
      )
    },
  }),
  B8 = ['disabled', 'value', 'type', 'placeholder']
function V8(a, o, e, l, t, i) {
  return (
    s(),
    c(
      'div',
      { class: H(l.VerClass) },
      [
        p(
          'input',
          {
            disabled: e.disabled,
            value: e.modelValue,
            type: e.type,
            placeholder: e.placeholder,
            onInput: l.input,
          },
          null,
          40,
          B8,
        ),
      ],
      2,
    )
  )
}
const H8 = j(f8, [
    ['render', V8],
    ['__scopeId', 'data-v-aee5a951'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/input/src/index.vue',
    ],
  ]),
  L8 = q(H8),
  A8 = v({
    name: 'VerDialog',
    __name: 'index',
    props: {
      title: { type: String, required: !1, default: '标题' },
      modelValue: { type: Boolean, required: !1, default: !1 },
      width: { type: String, required: !1, default: '30%' },
      top: { type: String, required: !1, default: '15vh' },
    },
    emits: ['update:modelValue'],
    setup(a, { expose: o, emit: e }) {
      o()
      const l = a,
        t = e,
        i = {
          props: l,
          emit: t,
          close: () => {
            t('update:modelValue', !1)
          },
          get VerIcon() {
            return Q
          },
        }
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      )
    },
  }),
  C8 = { class: 'ver-dialog_header' },
  g8 = { class: 'ver-dialog_title' },
  _8 = { class: 'ver-dialog_body' },
  j8 = { key: 0, class: 'ver-dialog_footer' }
function S8(a, o, e, l, t, i) {
  return (
    s(),
    Z(
      R,
      { name: 'fade', persisted: '' },
      {
        default: y(() => [
          Y(
            p(
              'div',
              { class: 'ver-dialog_wrapper', onClick: d1(l.close, ['self']) },
              [
                p(
                  'div',
                  {
                    class: 'ver-dialog',
                    style: D({ width: l.props.width, marginTop: l.props.top }),
                  },
                  [
                    p('div', C8, [
                      h(
                        a.$slots,
                        'title',
                        {},
                        () => [p('span', g8, C(l.props.title), 1)],
                        !0,
                      ),
                      p(
                        'button',
                        { class: 'ver-dialog_headerbtn', onClick: l.close },
                        [w(l.VerIcon, { name: 'cross' })],
                      ),
                    ]),
                    p('div', _8, [h(a.$slots, 'default', {}, void 0, !0)]),
                    a.$slots.footer
                      ? (s(),
                        c('div', j8, [h(a.$slots, 'footer', {}, void 0, !0)]))
                      : u('v-if', !0),
                  ],
                  4,
                ),
              ],
              512,
            ),
            [[o1, l.props.modelValue]],
          ),
        ]),
        _: 3,
      },
    )
  )
}
const $8 = j(A8, [
    ['render', S8],
    ['__scopeId', 'data-v-738f5d96'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/dialog/src/index.vue',
    ],
  ]),
  q8 = q($8),
  z8 = v({
    name: 'VerDivider',
    __name: 'index',
    props: {
      line: { type: String, required: !1, default: 'solid' },
      position: { type: String, required: !1, default: 'left' },
      direction: { type: String, required: !1, default: 'horizontal' },
    },
    setup(a, { expose: o }) {
      o()
      const e = { props: a }
      return (
        Object.defineProperty(e, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        e
      )
    },
  }),
  P8 = { key: 0, class: 'ver-divider-title' }
function T8(a, o, e, l, t, i) {
  return (
    s(),
    c(
      'div',
      {
        class: H([
          'ver-divider',
          { 'ver-vertical': l.props.direction === 'vertical' },
        ]),
        style: D({
          'justify-content': l.props.position,
          'border-top': `1px ${l.props.line} #dcdfe6`,
        }),
      },
      [
        l.props.position
          ? (s(), c('div', P8, [h(a.$slots, 'default', {}, void 0, !0)]))
          : u('v-if', !0),
      ],
      6,
    )
  )
}
const I8 = j(z8, [
    ['render', T8],
    ['__scopeId', 'data-v-a8592bb2'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/divider/src/index.vue',
    ],
  ]),
  N8 = q(I8),
  D8 = v({
    name: 'VerAvatar',
    __name: 'index',
    props: {
      shape: { type: String, required: !1, default: 'circle' },
      src: { type: String, required: !1, default: '' },
      size: { type: Number, required: !1, default: 50 },
    },
    setup(a, { expose: o }) {
      o()
      const e = a,
        l = e.size + 'px',
        t = b(() => [
          'ver-avatar',
          e.shape == 'circle' ? 'is-circle' : 'is-square',
        ]),
        i = { props: e, size: l, VerClass: t }
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      )
    },
  }),
  O8 = ['src']
function E8(a, o, e, l, t, i) {
  return (
    s(),
    c(
      'span',
      { class: H(l.VerClass), style: D({ width: l.size, height: l.size }) },
      [p('img', { src: e.src }, null, 8, O8)],
      6,
    )
  )
}
const F8 = j(D8, [
    ['render', E8],
    ['__scopeId', 'data-v-01b83522'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/avatar/src/index.vue',
    ],
  ]),
  U8 = q(F8),
  J8 = v({
    name: 'VerCard',
    __name: 'index',
    props: { shadow: { type: String, required: !1, default: 'always' } },
    setup(a, { expose: o }) {
      o()
      const e = a,
        l = b(() => [
          'ver-card',
          e.shadow == 'always'
            ? 'is-shadow-always'
            : e.shadow == 'hover'
              ? 'is-shadow-hover'
              : 'is-shadow-never',
        ]),
        t = { props: e, VerClass: l }
      return (
        Object.defineProperty(t, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        t
      )
    },
  }),
  G8 = { key: 0, class: 'ver-card-header' },
  R8 = { class: 'ver-card-body' }
function W8(a, o, e, l, t, i) {
  return (
    s(),
    c(
      'div',
      { class: H(l.VerClass) },
      [
        a.$slots.header
          ? (s(), c('div', G8, [h(a.$slots, 'header', {}, void 0, !0)]))
          : u('v-if', !0),
        p('div', R8, [h(a.$slots, 'default', {}, void 0, !0)]),
      ],
      2,
    )
  )
}
const K8 = j(J8, [
    ['render', W8],
    ['__scopeId', 'data-v-50b94cc5'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/card/src/index.vue',
    ],
  ]),
  Q8 = q(K8),
  X8 = v({
    name: 'VerTag',
    __name: 'index',
    props: {
      type: { type: String, required: !1, default: 'primary' },
      plain: { type: Boolean, required: !1, default: !1 },
      size: { type: String, required: !1, default: 'default' },
      round: { type: Boolean, required: !1, default: !1 },
    },
    setup(a, { expose: o }) {
      o()
      const e = a,
        l = b(() => [
          'ver-tag',
          e.type == 'primary' ? 'ver-tag-primary' : `ver-tag-${e.type}`,
          e.round == !1 ? '' : 'is-round',
          e.plain == !1 ? '' : 'is-plain',
          e.size == 'default' ? '' : `is-${e.size}`,
        ]),
        t = { props: e, tClass: l }
      return (
        Object.defineProperty(t, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        t
      )
    },
  })
function Y8(a, o, e, l, t, i) {
  return (
    s(),
    c(
      'span',
      { class: H(l.tClass) },
      [h(a.$slots, 'default', {}, void 0, !0)],
      2,
    )
  )
}
const e5 = j(X8, [
    ['render', Y8],
    ['__scopeId', 'data-v-5c23025e'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/tag/src/index.vue',
    ],
  ]),
  o5 = q(e5),
  l5 = v({
    name: 'VerDrawer',
    __name: 'index',
    props: {
      title: { type: String, required: !1 },
      modelValue: { type: Boolean, required: !1, default: !1 },
      direction: { type: String, required: !1, default: 'left' },
    },
    emits: ['update:modelValue'],
    setup(a, { expose: o, emit: e }) {
      o()
      const l = a,
        t = e,
        i = {
          props: l,
          emit: t,
          handleClose: () => {
            t('update:modelValue', !1)
          },
          get VerIcon() {
            return Q
          },
        }
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      )
    },
  }),
  t5 = { class: 'ver-drawer' },
  a5 = { class: 'ver-drawer_header' },
  i5 = { class: 'ver-drawer_title' },
  s5 = { class: 'ver-drawer_body' }
function n5(a, o, e, l, t, i) {
  return (
    s(),
    Z(
      R,
      { name: 'fade', persisted: '' },
      {
        default: y(() => [
          Y(
            p(
              'div',
              {
                class: H([
                  'ver-drawer_wrapper',
                  `ver-drawer-${l.props.direction}`,
                ]),
                onClick: d1(l.handleClose, ['self']),
              },
              [
                p('div', t5, [
                  p('div', a5, [
                    p('span', i5, C(l.props.title ? l.props.title : '标题'), 1),
                    p(
                      'button',
                      { class: 'ver-drawer_headerbtn', onClick: l.handleClose },
                      [w(l.VerIcon, { name: 'cross' })],
                    ),
                  ]),
                  p('div', s5, [h(a.$slots, 'default', {}, void 0, !0)]),
                ]),
              ],
              2,
            ),
            [[o1, l.props.modelValue]],
          ),
        ]),
        _: 3,
      },
    )
  )
}
const r5 = j(l5, [
    ['render', n5],
    ['__scopeId', 'data-v-ae7ab880'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/drawer/src/index.vue',
    ],
  ]),
  c5 = q(r5),
  d5 = v({
    name: 'VerSwitch',
    __name: 'index',
    props: {
      modelValue: { type: Boolean, required: !1, default: !1 },
      size: { type: String, required: !1, default: 'default' },
    },
    emits: ['input', 'update:modelValue'],
    setup(a, { expose: o, emit: e }) {
      o()
      const l = a,
        t = e,
        i = b(() => [
          'ver-switch',
          l.modelValue === !1 ? '' : 'is-checked',
          l.size && l.size !== 'default' ? `is-${l.size}` : '',
        ]),
        n = {
          props: l,
          emit: t,
          VerClass: i,
          handClick: () => {
            t('input', !l.modelValue), t('update:modelValue', !l.modelValue)
          },
        }
      return (
        Object.defineProperty(n, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        n
      )
    },
  }),
  h5 = { ref: 'core', class: 'ver-switch-core' }
function p5(a, o, e, l, t, i) {
  return (
    s(),
    c(
      'label',
      { class: H(l.VerClass), onClick: l.handClick },
      [
        p(
          'span',
          h5,
          o[0] ||
            (o[0] = [p('span', { class: 'ver-switch-button' }, null, -1)]),
          512,
        ),
      ],
      2,
    )
  )
}
const m5 = j(d5, [
    ['render', p5],
    ['__scopeId', 'data-v-e94b38ff'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/switch/src/index.vue',
    ],
  ]),
  y5 = q(m5),
  v5 = v({
    name: 'VerRadio',
    __name: 'index',
    props: {
      label: { type: [String, Number, Boolean], required: !1, default: '' },
      modelValue: {
        type: [String, Number, Boolean, null],
        required: !1,
        default: null,
      },
      name: { type: String, required: !1, default: '' },
      disabled: { type: Boolean, required: !1, default: !1 },
    },
    emits: ['update:modelValue'],
    setup(a, { expose: o, emit: e }) {
      o()
      const l = V(),
        t = e,
        i = a,
        n = b({
          get: () => i.modelValue,
          set: (m) => {
            t('update:modelValue', m),
              l.value && (l.value.checked == n.value) == i.label
          },
        }),
        r = { radio: l, emit: t, props: i, modelValue: n }
      return (
        Object.defineProperty(r, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        r
      )
    },
  }),
  k5 = { class: 'ver-radio_input' },
  u5 = ['disabled', 'name', 'value'],
  b5 = { class: 'ver-radio_label' }
function M5(a, o, e, l, t, i) {
  return (
    s(),
    c(
      'label',
      {
        class: H([
          'ver-radio',
          { 'is-checked': e.label == l.modelValue, 'is-disabled': e.disabled },
        ]),
      },
      [
        p('span', k5, [
          o[1] || (o[1] = p('span', { class: 'ver-radio_inner' }, null, -1)),
          Y(
            p(
              'input',
              {
                disabled: e.disabled,
                ref: 'radio',
                class: 'ver-radio_original',
                name: e.name,
                'onUpdate:modelValue':
                  o[0] || (o[0] = (n) => (l.modelValue = n)),
                value: l.props.label,
                type: 'radio',
              },
              null,
              8,
              u5,
            ),
            [[i2, l.modelValue]],
          ),
        ]),
        p('span', b5, [
          h(a.$slots, 'default', {}, void 0, !0),
          a.$slots.default
            ? u('v-if', !0)
            : (s(), c(_, { key: 0 }, [G(C(e.label), 1)], 64)),
        ]),
      ],
      2,
    )
  )
}
const x5 = j(v5, [
    ['render', M5],
    ['__scopeId', 'data-v-b50043c3'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/radio/src/index.vue',
    ],
  ]),
  w5 = q(x5),
  Z5 = v({
    name: 'VerMessage',
    __name: 'index',
    props: {
      type: { type: String, required: !1, default: 'info' },
      content: { type: String, required: !1, default: '' },
      duration: { type: Number, required: !1, default: 0 },
      plain: { type: Boolean, required: !1, default: !1 },
      destroy: { type: Function, required: !1, default: () => {} },
    },
    setup(a, { expose: o }) {
      o()
      const e = V(!1),
        l = a,
        t = b(() => {
          switch (l.type) {
            case 'success':
              return '#4ade80'
            case 'warning':
              return 'orange'
            case 'error':
              return 'red'
            default:
              return 'gray'
          }
        }),
        i = b(() => {
          switch (l.type) {
            case 'success':
              return 'passed'
            case 'warning':
              return 'warning'
            case 'error':
              return 'clear'
            default:
              return 'info'
          }
        }),
        n = b(() => [
          'ver-message',
          l.type == 'info' ? '' : `ver-message-${l.type}`,
          l.plain == !1 ? '' : `ver-message-${l.type}-plain`,
        ])
      N(() => {
        ;(e.value = !0),
          setTimeout(() => {
            e.value = !1
          }, l.duration)
      })
      const r = {
        isVisable: e,
        props: l,
        iconColor: t,
        iconName: i,
        VerClass: n,
        get VerIcon() {
          return Q
        },
      }
      return (
        Object.defineProperty(r, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        r
      )
    },
  }),
  f5 = { class: 'text' }
function B5(a, o, e, l, t, i) {
  return (
    s(),
    Z(
      R,
      { name: 'down', onAfterLeave: e.destroy, persisted: '' },
      {
        default: y(() => [
          Y(
            p(
              'div',
              { class: H(l.VerClass) },
              [
                w(
                  l.VerIcon,
                  { color: l.iconColor, name: l.iconName },
                  null,
                  8,
                  ['color', 'name'],
                ),
                p('span', f5, C(e.content), 1),
              ],
              2,
            ),
            [[o1, l.isVisable]],
          ),
        ]),
        _: 1,
      },
      8,
      ['onAfterLeave'],
    )
  )
}
const V5 = j(Z5, [
    ['render', B5],
    ['__scopeId', 'data-v-07a73df1'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/message/src/index.vue',
    ],
  ]),
  H5 = v({
    name: 'VerTextArea',
    __name: 'index',
    props: {
      disabled: { type: Boolean, required: !1, default: !1 },
      placeholder: { type: String, required: !1, default: '' },
      modelValue: { type: String, required: !1, default: '' },
      maxlength: { type: null, required: !1, default: void 0 },
    },
    emits: ['update:modelValue', 'input'],
    setup(a, { expose: o, emit: e }) {
      var l
      o()
      const t = a,
        i = V(((l = t.modelValue) == null ? void 0 : l.length) || 0),
        n = V(),
        r = e,
        m = () => {
          r('update:modelValue', n.value.value),
            (i.value = n.value.value.length)
        },
        k = b(() => ['ver-textarea', t.disabled == !1 ? '' : 'is-disabled']),
        M = { props: t, n: i, textareaRef: n, emit: r, input: m, tClass: k }
      return (
        Object.defineProperty(M, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        M
      )
    },
  }),
  L5 = ['disabled', 'placeholder', 'maxlength', 'value'],
  A5 = { key: 0, class: 'maxlength-box' }
function C5(a, o, e, l, t, i) {
  return (
    s(),
    c(
      'div',
      { class: H(l.tClass) },
      [
        p(
          'textarea',
          {
            ref: 'textareaRef',
            disabled: l.props.disabled,
            placeholder: e.placeholder,
            maxlength: e.maxlength,
            value: e.modelValue,
            onInput: l.input,
          },
          null,
          40,
          L5,
        ),
        e.maxlength != null && e.maxlength > 0
          ? (s(), c('div', A5, C(`${l.n}/${e.maxlength}`), 1))
          : u('v-if', !0),
      ],
      2,
    )
  )
}
const g5 = j(H5, [
    ['render', C5],
    ['__scopeId', 'data-v-314a872f'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/textarea/src/index.vue',
    ],
  ]),
  _5 = q(g5),
  j5 = v({
    name: 'VerContainer',
    __name: 'index',
    setup(a, { expose: o }) {
      o()
      const e = {}
      return (
        Object.defineProperty(e, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        e
      )
    },
  }),
  S5 = { class: 'ver-container' }
function $5(a, o, e, l, t, i) {
  return s(), c('div', S5, [h(a.$slots, 'default', {}, void 0, !0)])
}
const q5 = j(j5, [
    ['render', $5],
    ['__scopeId', 'data-v-05f18007'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/container/src/index.vue',
    ],
  ]),
  z5 = q(q5),
  P5 = v({
    name: 'VerHeader',
    __name: 'index',
    setup(a, { expose: o }) {
      o()
      const e = {}
      return (
        Object.defineProperty(e, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        e
      )
    },
  }),
  T5 = { class: 'ver-header' }
function I5(a, o, e, l, t, i) {
  return s(), c('div', T5, [h(a.$slots, 'default', {}, void 0, !0)])
}
const N5 = j(P5, [
    ['render', I5],
    ['__scopeId', 'data-v-5c84cd81'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/header/src/index.vue',
    ],
  ]),
  D5 = q(N5),
  O5 = v({
    name: 'VerMain',
    __name: 'index',
    setup(a, { expose: o }) {
      o()
      const e = {}
      return (
        Object.defineProperty(e, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        e
      )
    },
  }),
  E5 = { class: 'ver-main' }
function F5(a, o, e, l, t, i) {
  return s(), c('div', E5, [h(a.$slots, 'default', {}, void 0, !0)])
}
const U5 = j(O5, [
    ['render', F5],
    ['__scopeId', 'data-v-843ea6c9'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/main/src/index.vue',
    ],
  ]),
  J5 = q(U5),
  G5 = v({
    name: 'VerNotifivation',
    __name: 'index',
    props: {
      type: { type: String, required: !1, default: 'info' },
      title: { type: String, required: !1, default: '' },
      plain: { type: Boolean, required: !1, default: !1 },
      content: { type: String, required: !1, default: '' },
      duration: { type: Number, required: !1, default: 3e3 },
      position: { type: String, required: !1, default: 'top-right' },
      destroy: { type: Function, required: !1, default: () => {} },
    },
    setup(a, { expose: o }) {
      o()
      const e = a,
        l = b(() => {
          switch (e.type) {
            case 'success':
              return '#4ade80'
            case 'warning':
              return 'orange'
            case 'error':
              return 'red'
            default:
              return 'gray'
          }
        }),
        t = b(() => {
          switch (e.type) {
            case 'success':
              return 'passed'
            case 'warning':
              return 'warning'
            case 'error':
              return 'clear'
            default:
              return 'info'
          }
        }),
        i = b(() => {
          const M = {}
          switch (e.position) {
            case 'top-right':
              return { ...M, position: 'fixed', top: '20px', right: '20px' }
            case 'top-left':
              return { ...M, position: 'fixed', top: '20px', left: '20px' }
            case 'bottom-right':
              return { ...M, position: 'fixed', bottom: '20px', right: '20px' }
            case 'bottom-left':
              return { ...M, position: 'fixed', bottom: '20px', left: '20px' }
            default:
              return M
          }
        }),
        n = V(!1),
        r = () => {
          n.value = !1
        },
        m = b(() => [
          'ver-notification',
          e.plain == !1 ? '' : `ver-notification-${e.type}-plain`,
        ])
      N(() => {
        ;(n.value = !0),
          setTimeout(() => {
            n.value = !1
          }, e.duration)
      })
      const k = {
        props: e,
        iconColor: l,
        iconName: t,
        positionStyle: i,
        isVisable: n,
        handClose: r,
        VerClass: m,
        get VerIcon() {
          return Q
        },
      }
      return (
        Object.defineProperty(k, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        k
      )
    },
  }),
  R5 = { class: 'ver-notification-top' },
  W5 = { class: 'ver-notification-title' },
  K5 = { class: 'ver-notification-content' }
function Q5(a, o, e, l, t, i) {
  return (
    s(),
    Z(
      R,
      { name: 'slide-fade', onAfterLeave: l.props.destroy, persisted: '' },
      {
        default: y(() => [
          Y(
            p(
              'div',
              { class: H(l.VerClass), style: D(l.positionStyle) },
              [
                p('div', R5, [
                  w(
                    l.VerIcon,
                    { size: 25, color: l.iconColor, name: l.iconName },
                    null,
                    8,
                    ['color', 'name'],
                  ),
                  p('h2', W5, C(e.title), 1),
                ]),
                p('div', K5, [p('span', null, C(e.content), 1)]),
                p(
                  'div',
                  { class: 'ver-notification-closebtn', onClick: l.handClose },
                  [w(l.VerIcon, { name: 'cross' })],
                ),
              ],
              6,
            ),
            [[o1, l.isVisable]],
          ),
        ]),
        _: 1,
      },
      8,
      ['onAfterLeave'],
    )
  )
}
const X5 = j(G5, [
    ['render', Q5],
    ['__scopeId', 'data-v-ff8b07c1'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/notification/src/index.vue',
    ],
  ]),
  Y5 = v({
    name: 'VerForm',
    __name: 'index',
    props: {
      model: { type: Object, required: !1 },
      labelWidth: { type: [String, Number], required: !1, default: '80px' },
    },
    setup(a, { expose: o }) {
      o()
      const e = V(null)
      B1('form', e)
      const l = { form: e }
      return (
        Object.defineProperty(l, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        l
      )
    },
  }),
  e7 = { class: 'ver-form' }
function o7(a, o, e, l, t, i) {
  return s(), c('div', e7, [h(a.$slots, 'default')])
}
const l7 = j(Y5, [
    ['render', o7],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/form/src/index.vue',
    ],
  ]),
  t7 = q(l7),
  a7 = v({
    name: 'VerFormItem',
    __name: 'index',
    props: { label: { type: [String, Number], required: !1, default: '' } },
    setup(a, { expose: o }) {
      o()
      const e = a,
        l = e1('form'),
        t = b(() => ({ width: l.labelWidth })),
        i = { props: e, form: l, labelStyle: t }
      return (
        Object.defineProperty(i, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        i
      )
    },
  }),
  i7 = { class: 'ver-form-item' },
  s7 = { class: 'ver-form-item_content' }
function n7(a, o, e, l, t, i) {
  return (
    s(),
    c('div', i7, [
      p(
        'label',
        { style: D(l.labelStyle), class: 'ver-form-item_label' },
        C(l.props.label),
        5,
      ),
      p('div', s7, [h(a.$slots, 'default', {}, void 0, !0)]),
    ])
  )
}
const r7 = j(a7, [
    ['render', n7],
    ['__scopeId', 'data-v-a1e77bc8'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/formItem/src/index.vue',
    ],
  ]),
  c7 = q(r7),
  d7 = v({
    name: 'VerTab',
    __name: 'index',
    props: { tabList: { type: Array, required: !1, default: () => [] } },
    setup(a, { expose: o }) {
      o()
      const e = a,
        l = V(0),
        t = {
          props: e,
          currentTabIndex: l,
          switchTab: (i) => {
            l.value = i
          },
        }
      return (
        Object.defineProperty(t, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        t
      )
    },
  }),
  h7 = { class: 'ver-tab' },
  p7 = { class: 'tab-header' },
  m7 = ['onClick'],
  y7 = { class: 'tab-label' }
function v7(a, o, e, l, t, i) {
  return (
    s(),
    c('div', h7, [
      p('div', p7, [
        (s(!0),
        c(
          _,
          null,
          z(
            l.props.tabList,
            (n, r) => (
              s(),
              c(
                'div',
                {
                  key: n.id,
                  class: H([
                    'tab-item',
                    { 'active-tab': l.currentTabIndex === r },
                  ]),
                  onClick: (m) => l.switchTab(r),
                },
                [p('span', y7, C(n.label), 1)],
                10,
                m7,
              )
            ),
          ),
          128,
        )),
      ]),
      (s(),
      c(
        'div',
        {
          class: 'tab-content',
          key: `tab-content-${l.props.tabList[l.currentTabIndex].name}`,
        },
        [h(a.$slots, l.props.tabList[l.currentTabIndex].name, {}, void 0, !0)],
      )),
    ])
  )
}
const k7 = j(d7, [
    ['render', v7],
    ['__scopeId', 'data-v-0f852bbb'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/tab/src/index.vue',
    ],
  ]),
  u7 = q(k7),
  T = (a) => (a ? { width: a.offsetWidth, height: a.offsetHeight } : {}),
  S1 = 100,
  b7 = v({
    name: 'VerPopOver',
    __name: 'index',
    props: { placement: { type: String, required: !1, default: 'top-left' } },
    setup(a, { expose: o }) {
      o()
      const e = a,
        l = V(!1)
      let t = null
      const i = () => {
          ;(l.value = !0), t && clearTimeout(t)
        },
        n = () => {
          t = setTimeout(() => {
            ;(l.value = !1), (t = null)
          }, S1)
        },
        r = V(null),
        m = V(null),
        k = V({ top: 0, left: 0 })
      I(l, (x) => {
        x &&
          f1(() => {
            switch (e.placement) {
              case 'top-left':
                ;(k.value.top = 0), (k.value.left = -T(m.value).width + 'px')
                break
              case 'top-right':
                ;(k.value.top = 0),
                  (k.value.left = T(r.value).width / 15 + 'px')
                break
              case 'bottom-left':
                ;(k.value.top = T(r.value).height + 'px'),
                  (k.value.left = -T(m.value).width + 'px')
                break
              case 'bottom-right':
                ;(k.value.top = T(r.value).height + 'px'),
                  (k.value.left = T(r.value).width / 15 + 'px')
                break
              case 'bottom-center':
                ;(k.value.top = T(r.value).height + 'px'),
                  (k.value.left =
                    T(r.value).width / 32 - T(m.value).width / 2 + 'px')
                break
              case 'top-center':
                ;(k.value.top = -T(m.value).height + 'px'),
                  (k.value.left =
                    T(r.value).width / 32 - T(m.value).width / 2 + 'px')
                break
            }
          })
      })
      const M = {
        DELAY_TIME: S1,
        props: e,
        isVisable: l,
        get timeout() {
          return t
        },
        set timeout(x) {
          t = x
        },
        onMouseenter: i,
        onMouseleave: n,
        referenceTarget: r,
        contentTarget: m,
        contentStyle: k,
      }
      return (
        Object.defineProperty(M, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        M
      )
    },
  }),
  M7 = { ref: 'referenceTarget' },
  x7 = { class: 'content' }
function w7(a, o, e, l, t, i) {
  return (
    s(),
    c(
      'div',
      {
        class: 'ver-popover',
        onMouseleave: l.onMouseleave,
        onMouseenter: l.onMouseenter,
      },
      [
        u(' 具名插槽 '),
        p(
          'div',
          M7,
          [u(' 具名插槽 '), h(a.$slots, 'reference', {}, void 0, !0)],
          512,
        ),
        u(' 气泡展示动画 '),
        w(
          R,
          { name: 'slide', persisted: '' },
          {
            default: y(() => [
              Y(
                p(
                  'div',
                  {
                    ref: 'contentTarget',
                    class: 'ver-popover-item',
                    style: D(l.contentStyle),
                  },
                  [
                    u(' 匿名插槽 '),
                    p('div', x7, [h(a.$slots, 'default', {}, void 0, !0)]),
                  ],
                  4,
                ),
                [[o1, l.isVisable]],
              ),
            ]),
            _: 3,
          },
        ),
      ],
      32,
    )
  )
}
const Z7 = j(b7, [
    ['render', w7],
    ['__scopeId', 'data-v-0c6b654f'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/popover/src/index.vue',
    ],
  ]),
  f7 = q(Z7),
  B7 = v({
    __name: 'index',
    props: {
      type: { type: String, required: !1, default: 'error' },
      value: { type: Number, required: !1, default: 0 },
      dot: { type: Boolean, required: !1, default: !1 },
      max: { type: Number, required: !1, default: 99 },
    },
    setup(a, { expose: o }) {
      o()
      const e = a,
        l = b(() => `badge-${e.type}`),
        t = { props: e, VerClass: l }
      return (
        Object.defineProperty(t, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        t
      )
    },
  }),
  V7 = { class: 'ver-badge' },
  H7 = { key: 0 },
  L7 = { key: 1 },
  A7 = { key: 2 }
function C7(a, o, e, l, t, i) {
  return (
    s(),
    c('span', V7, [
      h(a.$slots, 'default', {}, void 0, !0),
      p(
        'span',
        {
          class: H([
            'badge',
            [
              l.VerClass,
              { 'badge-max': l.props.value === l.props.max },
              l.props.dot ? 'is-dot' : 'is-normal',
            ],
          ]),
        },
        [
          !l.props.dot && l.props.value === 0
            ? h(a.$slots, 'default', { key: 0 }, void 0, !0)
            : (s(),
              c(
                _,
                { key: 1 },
                [
                  l.props.dot
                    ? (s(), c('span', H7))
                    : l.props.value > l.props.max
                      ? (s(), c('span', L7, C(l.props.max) + '+', 1))
                      : (s(), c('span', A7, C(l.props.value), 1)),
                ],
                64,
              )),
        ],
        2,
      ),
    ])
  )
}
const g7 = j(B7, [
    ['render', C7],
    ['__scopeId', 'data-v-2161f8bd'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/badge/src/index.vue',
    ],
  ]),
  _7 = q(g7),
  j7 = v({
    __name: 'index',
    props: {
      right: { type: String, required: !1, default: '60' },
      bottom: { type: String, required: !1, default: '40' },
      visibleHeight: { type: String, required: !1 },
      icon: { type: String, required: !1, default: '' },
      iconColor: { type: String, required: !1, default: '#FF0000' },
      visibilityHeight: { type: String, required: !1, default: '150' },
    },
    setup(a, { expose: o }) {
      o()
      const e = a,
        l = b(() => e.iconColor || '#8b5cf6'),
        t = b(() => [
          'ver-backTop',
          e.visibleHeight ? `is-visibleHeight-${e.visibleHeight}` : '',
        ]),
        i = b(() => ({ right: `${e.right}px`, bottom: `${e.bottom}px` })),
        n = a1(null),
        r = a1(),
        m = V(!0),
        k = () => {
          var L
          ;(L = n.value) == null || L.scrollTo({ top: 0, behavior: 'smooth' })
        },
        M = () => {
          n.value &&
            (m.value = n.value.scrollTop >= parseInt(e.visibilityHeight))
        },
        x = J3(M, 300, !0)
      W3(r, 'scroll', x),
        N(() => {
          ;(r.value = document), (n.value = document.documentElement), M()
        })
      const B = {
        props: e,
        iconColor: l,
        Verclass: t,
        backTopStyle: i,
        el: n,
        container: r,
        visible: m,
        handleClick: k,
        handleScroll: M,
        handleScrollThrottled: x,
        get VerIcon() {
          return Q
        },
      }
      return (
        Object.defineProperty(B, '__isScriptSetup', {
          enumerable: !1,
          value: !0,
        }),
        B
      )
    },
  }),
  S7 = { key: 1 }
function $7(a, o, e, l, t, i) {
  return l.visible
    ? (s(),
      c(
        'div',
        {
          key: 0,
          class: H(l.Verclass),
          style: D(l.backTopStyle),
          onClick: d1(l.handleClick, ['stop']),
        },
        [
          e.icon
            ? (s(),
              Z(
                l.VerIcon,
                { key: 0, name: e.icon, color: l.iconColor, size: '26' },
                null,
                8,
                ['name', 'color'],
              ))
            : (s(), c('span', S7, [h(a.$slots, 'default', {}, void 0, !0)])),
        ],
        6,
      ))
    : u('v-if', !0)
}
const q7 = j(j7, [
    ['render', $7],
    ['__scopeId', 'data-v-809c9ab7'],
    [
      '__file',
      'C:/Users/Jannik/Desktop/versakit-monorepo/packages/ui/components/backtop/src/index.vue',
    ],
  ]),
  z7 = q(q7),
  P7 = {
    mounted(a, o) {
      const { position: e, overflow: l } = getComputedStyle(a)
      e == 'static' && (a.style.position = 'relative'),
        l !== 'hidden' && (a.style.overflow = 'hidden'),
        a.addEventListener('click', function (t) {
          var i, n
          const r = document.createElement('span'),
            m = Math.max(a.offsetWidth, a.offsetHeight) * 2,
            k = (((i = o.value) == null ? void 0 : i.duration) ?? 500) / 1e3,
            M =
              ((n = o.value) == null ? void 0 : n.backgroundColor) ??
              'rgba(0, 0, 0, .15)',
            { x, y: B } = a.getBoundingClientRect(),
            { clientX: L, clientY: S } = t
          ;(r.style.width = m + 'px'),
            (r.style.height = m + 'px'),
            (r.style.position = 'absolute'),
            (r.style.backgroundColor = M),
            (r.style.top = S - B - m / 2 + 'px'),
            (r.style.left = L - x - m / 2 + 'px'),
            (r.style.transform = 'scale(0)'),
            (r.style.transition = `transform ${k}s ease-in, opacity ${k}s ease-in`),
            (r.style.borderRadius = '50%'),
            (r.style.pointerEvents = 'none'),
            a.appendChild(r),
            r.addEventListener('transitionend', function () {
              var $
              ;($ = r.parentElement) == null || $.removeChild(this)
            }),
            requestAnimationFrame(() => {
              ;(r.style.transform = 'scale(1)'), (r.style.opacity = '0')
            })
        })
    },
  },
  $1 = [
    a8,
    b8,
    r8,
    m8,
    Z8,
    L8,
    q8,
    U8,
    Q8,
    o5,
    N8,
    c5,
    y5,
    w5,
    V5,
    _5,
    z5,
    D5,
    J5,
    X5,
    t7,
    c7,
    u7,
    Q,
    f7,
    _7,
    z7,
  ],
  T7 = {
    install: (a) => {
      for (const o in $1) a.component(o, $1[o]), a.directive('ripple', P7)
    },
  },
  N7 = {
    ...I3,
    enhanceApp({ app: a }) {
      a.use(T7)
    },
  }
export { N7 as R }
