import { N as s } from './chunks/theme.ByYns1Tr.js'
import {
  d as v,
  a,
  b as d,
  q as p,
  j as c,
  p as t,
  z as n,
  u as l,
  ac as b,
  e as o,
  x as i,
  Q as _,
} from './chunks/framework.D7H_7AjQ.js'
import { R as f } from './chunks/index.Li0lFkb-.js'
const V = `<script setup lang="ts">\r
import { VerPanel } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerPanel v-ripple="{ duration: 800, color: '#c4b5fd' }">Primary</VerPanel>\r
\r
    <VerPanel v-ripple="{ duration: 800, color: '#86efac' }">success</VerPanel>\r
\r
    <VerPanel v-ripple="{ duration: 800, color: '#fdba74' }">warn</VerPanel>\r
\r
    <VerPanel v-ripple="{ duration: 800, color: '#fca5a5' }">error</VerPanel>\r
  </div>\r
</template>\r
`,
  B = v({
    __name: 'color',
    setup(u) {
      return (m, e) => {
        const r = b('ripple')
        return (
          a(),
          d('div', null, [
            p(
              (a(),
              c(l(s), null, {
                default: t(() => e[0] || (e[0] = [n('Primary')])),
                _: 1,
              })),
              [[r, { duration: 800, color: '#c4b5fd' }]],
            ),
            p(
              (a(),
              c(l(s), null, {
                default: t(() => e[1] || (e[1] = [n('success')])),
                _: 1,
              })),
              [[r, { duration: 800, color: '#86efac' }]],
            ),
            p(
              (a(),
              c(l(s), null, {
                default: t(() => e[2] || (e[2] = [n('warn')])),
                _: 1,
              })),
              [[r, { duration: 800, color: '#fdba74' }]],
            ),
            p(
              (a(),
              c(l(s), null, {
                default: t(() => e[3] || (e[3] = [n('error')])),
                _: 1,
              })),
              [[r, { duration: 800, color: '#fca5a5' }]],
            ),
          ])
        )
      }
    },
  }),
  P = `<script setup lang="ts">\r
import { VerPanel } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <div>\r
    <VerPanel v-ripple>组件内使用v-ripple</VerPanel>\r
  </div>\r
</template>\r
`,
  x = v({
    __name: 'base',
    setup(u) {
      return (m, e) => {
        const r = b('ripple')
        return (
          a(),
          d('div', null, [
            p(
              (a(),
              c(l(s), null, {
                default: t(() => e[0] || (e[0] = [n('组件内使用v-ripple')])),
                _: 1,
              })),
              [[r]],
            ),
          ])
        )
      }
    },
  }),
  k = JSON.parse(
    '{"title":"Ripple 水波纹","description":"","frontmatter":{},"headers":[],"relativePath":"components/ripple/index.md","filePath":"components/ripple/index.md"}',
  ),
  D = { name: 'components/ripple/index.md' },
  w = Object.assign(D, {
    setup(u) {
      return (m, e) => {
        const r = _('ClientOnly')
        return (
          a(),
          d('div', null, [
            e[0] ||
              (e[0] = o(
                'h1',
                { id: 'ripple-水波纹', tabindex: '-1' },
                [
                  n('Ripple 水波纹 '),
                  o(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#ripple-水波纹',
                      'aria-label': 'Permalink to "Ripple 水波纹"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = o(
                'h2',
                { id: '基本用法', tabindex: '-1' },
                [
                  n('基本用法 '),
                  o(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基本用法',
                      'aria-label': 'Permalink to "基本用法"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            i(r, null, {
              default: t(() => [
                i(
                  l(f),
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
                    vueCode: l(P),
                  },
                  { vue: t(() => [i(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[2] ||
              (e[2] = o(
                'h2',
                { id: '自定义颜色', tabindex: '-1' },
                [
                  n('自定义颜色 '),
                  o(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自定义颜色',
                      'aria-label': 'Permalink to "自定义颜色"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            i(r, null, {
              default: t(() => [
                i(
                  l(f),
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
                    vueCode: l(V),
                  },
                  { vue: t(() => [i(B)]), _: 1 },
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
export { k as __pageData, w as default }
