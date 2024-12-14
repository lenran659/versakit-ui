import { R as p } from './chunks/theme.1gNGnQRx.js'
import {
  a1 as s,
  ac as u,
  ad as l,
  ae as c,
  af as f,
  ag as d,
  ah as m,
  ai as h,
  aj as g,
  ak as A,
  al as P,
  d as v,
  H as w,
  G as y,
  N as C,
  am as R,
  an as b,
  ao as E,
  h as S,
} from './chunks/framework.DE5IkABU.js'
function i(e) {
  if (e.extends) {
    const a = i(e.extends)
    return {
      ...a,
      ...e,
      async enhanceApp(t) {
        a.enhanceApp && (await a.enhanceApp(t)),
          e.enhanceApp && (await e.enhanceApp(t))
      },
    }
  }
  return e
}
const o = i(p),
  T = v({
    name: 'VitePressApp',
    setup() {
      const { site: e, lang: a, dir: t } = w()
      return (
        y(() => {
          C(() => {
            ;(document.documentElement.lang = a.value),
              (document.documentElement.dir = t.value)
          })
        }),
        e.value.router.prefetchLinks && R(),
        b(),
        E(),
        o.setup && o.setup(),
        () => S(o.Layout)
      )
    },
  })
async function j() {
  globalThis.__VITEPRESS__ = !0
  const e = _(),
    a = D()
  a.provide(l, e)
  const t = c(e.route)
  return (
    a.provide(f, t),
    a.component('Content', d),
    a.component('ClientOnly', m),
    Object.defineProperties(a.config.globalProperties, {
      $frontmatter: {
        get() {
          return t.frontmatter.value
        },
      },
      $params: {
        get() {
          return t.page.value.params
        },
      },
    }),
    o.enhanceApp && (await o.enhanceApp({ app: a, router: e, siteData: h })),
    { app: a, router: e, data: t }
  )
}
function D() {
  return g(T)
}
function _() {
  let e = s,
    a
  return A((t) => {
    let n = P(t),
      r = null
    return (
      n &&
        (e && (a = n),
        (e || a === n) && (n = n.replace(/\.js$/, '.lean.js')),
        (r = import(n))),
      s && (e = !1),
      r
    )
  }, o.NotFound)
}
s &&
  j().then(({ app: e, router: a, data: t }) => {
    a.go().then(() => {
      u(a.route, t.site), e.mount('#app')
    })
  })
export { j as createApp }
