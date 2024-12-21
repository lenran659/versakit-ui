import { g as p, V as m } from './chunks/theme.ByYns1Tr.js'
import {
  d as f,
  m as b,
  a as i,
  j as v,
  p as o,
  x as l,
  u as a,
  b as h,
  e as t,
  z as n,
  a9 as V,
  Q as x,
} from './chunks/framework.D7H_7AjQ.js'
import { R as c } from './chunks/index.Li0lFkb-.js'
const _ = `<template>\r
  <VerRow>\r
    <VerInput disabled v-model="value" placeholder="Please input" />\r
  </VerRow>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerInput, VerRow } from '@versakit/ui'\r
\r
const value = ref('')\r
<\/script>\r
\r
<style scoped></style>\r
`,
  B = f({
    __name: 'disabled',
    setup(u) {
      const d = b('')
      return (e, r) => (
        i(),
        v(a(m), null, {
          default: o(() => [
            l(
              a(p),
              {
                disabled: '',
                modelValue: d.value,
                'onUpdate:modelValue': r[0] || (r[0] = (s) => (d.value = s)),
                placeholder: 'Please input',
              },
              null,
              8,
              ['modelValue'],
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  D = `<template>\r
  <VerRow>\r
    <VerInput v-model="value" placeholder="Please input" />\r
  </VerRow>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerInput, VerRow } from '@versakit/ui'\r
\r
const value = ref('')\r
<\/script>\r
\r
<style scoped></style>\r
`,
  A = f({
    __name: 'base',
    setup(u) {
      const d = b('')
      return (e, r) => (
        i(),
        v(a(m), null, {
          default: o(() => [
            l(
              a(p),
              {
                modelValue: d.value,
                'onUpdate:modelValue': r[0] || (r[0] = (s) => (d.value = s)),
                placeholder: 'Please input',
              },
              null,
              8,
              ['modelValue'],
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  k = JSON.parse(
    '{"title":"Input 输入框","description":"","frontmatter":{},"headers":[],"relativePath":"components/input/index.md","filePath":"components/input/index.md"}',
  ),
  y = { name: 'components/input/index.md' },
  P = Object.assign(y, {
    setup(u) {
      return (d, e) => {
        const r = x('ClientOnly')
        return (
          i(),
          h('div', null, [
            e[0] ||
              (e[0] = t(
                'h1',
                { id: 'input-输入框', tabindex: '-1' },
                [
                  n('Input 输入框 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#input-输入框',
                      'aria-label': 'Permalink to "Input 输入框"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = t(
                'h2',
                { id: '基础使用', tabindex: '-1' },
                [
                  n('基础使用 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#基础使用',
                      'aria-label': 'Permalink to "基础使用"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[2] || (e[2] = t('p', null, '通过鼠标或键盘输入字符', -1)),
            l(r, null, {
              default: o(() => [
                l(
                  a(c),
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
                    vueCode: a(D),
                  },
                  { vue: o(() => [l(A)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[3] ||
              (e[3] = t(
                'h2',
                { id: '禁用状态', tabindex: '-1' },
                [
                  n('禁用状态 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#禁用状态',
                      'aria-label': 'Permalink to "禁用状态"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[4] ||
              (e[4] = t(
                'p',
                null,
                [
                  n('通过 '),
                  t('code', null, 'disabled'),
                  n(' 属性指定是否禁用 input 组件'),
                ],
                -1,
              )),
            l(r, null, {
              default: o(() => [
                l(
                  a(c),
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
                  { vue: o(() => [l(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[5] ||
              (e[5] = V(
                '<h2 id="devider-api" tabindex="-1">Devider API <a class="header-anchor" href="#devider-api" aria-label="Permalink to &quot;Devider API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>placeholder</code></td><td>输入框中未输入时默认显示的文字</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>modelValue</code></td><td>输入框输入内容绑定的值</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>type</code></td><td>输入框的类型</td><td><code>string</code></td><td><code>text</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用输入框</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',
                2,
              )),
          ])
        )
      }
    },
  })
export { k as __pageData, P as default }
