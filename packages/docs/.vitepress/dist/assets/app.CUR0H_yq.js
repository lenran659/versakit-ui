import { R as i } from './chunks/theme.ByYns1Tr.js'
import {
  a1 as s,
  ae as u,
  af as l,
  ag as c,
  ah as f,
  ai as d,
  aj as m,
  ak as h,
  al as g,
  am as A,
  an as P,
  d as v,
  E as w,
  D as y,
  L as C,
  ao as R,
  ap as E,
  aq as b,
  h as S,
} from './chunks/framework.D7H_7AjQ.js'
function p(e) {
  if (e.extends) {
    const a = p(e.extends)
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
const o = p(i),
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
        E(),
        b(),
        o.setup && o.setup(),
        () => S(o.Layout)
      )
    },
  })
async function D() {
  globalThis.__VITEPRESS__ = !0
  const e = L(),
    a = j()
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
function j() {
  return g(T)
}
function L() {
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
  D().then(({ app: e, router: a, data: t }) => {
    a.go().then(() => {
      u(a.route, t.site), e.mount('#app')
    })
  })
export { D as createApp }
