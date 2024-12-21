import { x as i } from './chunks/theme.ByYns1Tr.js'
import {
  d,
  a as s,
  b as o,
  e as t,
  x as n,
  u as a,
  _ as m,
  z as u,
  p as r,
  Q as b,
} from './chunks/framework.D7H_7AjQ.js'
import { R as x } from './chunks/index.Li0lFkb-.js'
const _ = `<script setup lang="ts">\r
import { VerBacktop } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <div>\r
    <div class="box">\r
      <span>占位图</span>\r
    </div>\r
    <div class="box">\r
      <span>占位图</span>\r
    </div>\r
\r
    <ver-backtop />\r
  </div>\r
</template>\r
\r
<style scoped lang="scss">\r
.box {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
  width: 100%;\r
  height: 300px;\r
  border: 1px dotted #c4c4c4;\r
}\r
</style>\r
`,
  v = d({
    __name: 'base',
    setup(l) {
      return (c, e) => (
        s(),
        o('div', null, [
          e[0] ||
            (e[0] = t(
              'div',
              { class: 'box' },
              [t('span', null, '占位图')],
              -1,
            )),
          e[1] ||
            (e[1] = t(
              'div',
              { class: 'box' },
              [t('span', null, '占位图')],
              -1,
            )),
          n(a(i)),
        ])
      )
    },
  }),
  f = m(v, [['__scopeId', 'data-v-d1050531']]),
  y = JSON.parse(
    '{"title":"Backtop 回到顶部","description":"","frontmatter":{},"headers":[],"relativePath":"components/backtop/index.md","filePath":"components/backtop/index.md"}',
  ),
  h = { name: 'components/backtop/index.md' },
  V = Object.assign(h, {
    setup(l) {
      return (c, e) => {
        const p = b('ClientOnly')
        return (
          s(),
          o('div', null, [
            e[0] ||
              (e[0] = t(
                'h1',
                { id: 'backtop-回到顶部', tabindex: '-1' },
                [
                  u('Backtop 回到顶部 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#backtop-回到顶部',
                      'aria-label': 'Permalink to "Backtop 回到顶部"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            n(p, null, {
              default: r(() => [
                n(
                  a(x),
                  {
                    title: '',
                    description: '',
                    select: 'vue',
                    order: 'vue,react,html',
                    github: '',
                    gitlab: '',
                    stackblitz: '%7B%22show%22%3Afalse%7D',
                    codesandbox: '%7B%22show%22%3Afalse%7D',
                    codeplayer: '%7B%22show%22%3Afalse%7D',
                    files:
                      '%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D',
                    scope: '',
                    visible: !0,
                    vueCode: a(_),
                  },
                  { vue: r(() => [n(f)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
          ])
        )
      }
    },
  })
export { y as __pageData, V as default }
