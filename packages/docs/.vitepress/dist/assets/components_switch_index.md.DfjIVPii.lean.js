import { A as d } from './chunks/theme.ByYns1Tr.js'
import {
  d as p,
  m as v,
  a as u,
  b as h,
  x as r,
  u as o,
  _ as f,
  j as b,
  e as a,
  z as s,
  p as i,
  a9 as V,
  Q as w,
} from './chunks/framework.D7H_7AjQ.js'
import { R as c } from './chunks/index.Li0lFkb-.js'
const x = `<template>\r
  <div>\r
    <VerSwitch size="lg" v-model="value" />\r
    <VerSwitch v-model="value" />\r
    <VerSwitch size="sm" v-model="value" />\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerSwitch } from '@versakit/ui'\r
import { ref } from 'vue'\r
\r
const value = ref(false)\r
<\/script>\r
\r
<style scoped>\r
.ver-switch {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  A = p({
    __name: 'size',
    setup(m) {
      const l = v(!1)
      return (e, t) => (
        u(),
        h('div', null, [
          r(
            o(d),
            {
              size: 'lg',
              modelValue: l.value,
              'onUpdate:modelValue': t[0] || (t[0] = (n) => (l.value = n)),
            },
            null,
            8,
            ['modelValue'],
          ),
          r(
            o(d),
            {
              modelValue: l.value,
              'onUpdate:modelValue': t[1] || (t[1] = (n) => (l.value = n)),
            },
            null,
            8,
            ['modelValue'],
          ),
          r(
            o(d),
            {
              size: 'sm',
              modelValue: l.value,
              'onUpdate:modelValue': t[2] || (t[2] = (n) => (l.value = n)),
            },
            null,
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  B = f(A, [['__scopeId', 'data-v-884f5489']]),
  _ = `<template>\r
  <VerSwitch v-model="value" />\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerSwitch } from '@versakit/ui'\r
import { ref } from 'vue'\r
\r
const value = ref(false)\r
<\/script>\r
`,
  C = p({
    __name: 'base',
    setup(m) {
      const l = v(!1)
      return (e, t) => (
        u(),
        b(
          o(d),
          {
            modelValue: l.value,
            'onUpdate:modelValue': t[0] || (t[0] = (n) => (l.value = n)),
          },
          null,
          8,
          ['modelValue'],
        )
      )
    },
  }),
  y = JSON.parse(
    '{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch/index.md","filePath":"components/switch/index.md"}',
  ),
  X = { name: 'components/switch/index.md' },
  G = Object.assign(X, {
    setup(m) {
      return (l, e) => {
        const t = w('ClientOnly')
        return (
          u(),
          h('div', null, [
            e[0] ||
              (e[0] = a(
                'h1',
                { id: 'switch-开关', tabindex: '-1' },
                [
                  s('Switch 开关 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#switch-开关',
                      'aria-label': 'Permalink to "Switch 开关"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = a(
                'p',
                null,
                '表示两种相互对立的状态间的切换，多用于触发「开/关」。',
                -1,
              )),
            e[2] ||
              (e[2] = a(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  s('基础用法 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基础用法',
                      'aria-label': 'Permalink to "基础用法"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[3] ||
              (e[3] = a(
                'p',
                null,
                [
                  s('绑定 '),
                  a('code', null, 'v-model'),
                  s('到一个'),
                  a('code', null, 'Boolean'),
                  s('类型的变量。'),
                ],
                -1,
              )),
            r(t, null, {
              default: i(() => [
                r(
                  o(c),
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
                    vueCode: o(_),
                  },
                  { vue: i(() => [r(C)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[4] ||
              (e[4] = a(
                'h2',
                { id: '尺寸', tabindex: '-1' },
                [
                  s('尺寸 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#尺寸',
                      'aria-label': 'Permalink to "尺寸"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            r(t, null, {
              default: i(() => [
                r(
                  o(c),
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
                    vueCode: o(x),
                  },
                  { vue: i(() => [r(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[5] ||
              (e[5] = V(
                '<h2 id="switch-api" tabindex="-1">Switch API <a class="header-anchor" href="#switch-api" aria-label="Permalink to &quot;Switch API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定值</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',
                2,
              )),
          ])
        )
      }
    },
  })
export { y as __pageData, G as default }
