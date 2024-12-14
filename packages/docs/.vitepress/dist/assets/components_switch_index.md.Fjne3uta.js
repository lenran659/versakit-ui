import { Z as d } from './chunks/theme.1gNGnQRx.js'
import {
  d as p,
  m as v,
  a as u,
  b as h,
  v as o,
  u as n,
  F as f,
  _ as b,
  j as V,
  e as a,
  z as r,
  p as i,
  a8 as w,
  S as x,
} from './chunks/framework.DE5IkABU.js'
import { R as c } from './chunks/index.B_PIpyz3.js'
const B = `<template>
  <VerSwitch size="large" v-model="value" />
  <VerSwitch v-model="value" />
  <VerSwitch size="small" v-model="value" />
</template>

<script lang="ts" setup>
import { VerSwitch } from 'versakit-ui'
import { ref } from 'vue'

const value = ref(false)
<\/script>

<style scoped>
.ver-switch {
  margin: 0px 10px;
}
</style>
`,
  _ = p({
    __name: 'size',
    setup(m) {
      const l = v(!1)
      return (e, t) => (
        u(),
        h(
          f,
          null,
          [
            o(
              n(d),
              {
                size: 'large',
                modelValue: l.value,
                'onUpdate:modelValue': t[0] || (t[0] = (s) => (l.value = s)),
              },
              null,
              8,
              ['modelValue'],
            ),
            o(
              n(d),
              {
                modelValue: l.value,
                'onUpdate:modelValue': t[1] || (t[1] = (s) => (l.value = s)),
              },
              null,
              8,
              ['modelValue'],
            ),
            o(
              n(d),
              {
                size: 'small',
                modelValue: l.value,
                'onUpdate:modelValue': t[2] || (t[2] = (s) => (l.value = s)),
              },
              null,
              8,
              ['modelValue'],
            ),
          ],
          64,
        )
      )
    },
  }),
  C = b(_, [['__scopeId', 'data-v-c0b51e0b']]),
  X = `<template>
  <VerSwitch v-model="value" />
</template>

<script lang="ts" setup>
import { VerSwitch } from 'versakit-ui'
import { ref } from 'vue'

const value = ref(false)
<\/script>
`,
  A = p({
    __name: 'base',
    setup(m) {
      const l = v(!1)
      return (e, t) => (
        u(),
        V(
          n(d),
          {
            modelValue: l.value,
            'onUpdate:modelValue': t[0] || (t[0] = (s) => (l.value = s)),
          },
          null,
          8,
          ['modelValue'],
        )
      )
    },
  }),
  g = JSON.parse(
    '{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch/index.md","filePath":"components/switch/index.md"}',
  ),
  F = { name: 'components/switch/index.md' },
  G = Object.assign(F, {
    setup(m) {
      return (l, e) => {
        const t = x('ClientOnly')
        return (
          u(),
          h('div', null, [
            e[0] ||
              (e[0] = a(
                'h1',
                { id: 'switch-开关', tabindex: '-1' },
                [
                  r('Switch 开关 '),
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
                  r('基础用法 '),
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
                  r('绑定 '),
                  a('code', null, 'v-model'),
                  r('到一个'),
                  a('code', null, 'Boolean'),
                  r('类型的变量。'),
                ],
                -1,
              )),
            o(t, null, {
              default: i(() => [
                o(
                  n(c),
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
                    vueCode: n(X),
                  },
                  { vue: i(() => [o(A)]), _: 1 },
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
                  r('尺寸 '),
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
            o(t, null, {
              default: i(() => [
                o(
                  n(c),
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
                    vueCode: n(B),
                  },
                  { vue: i(() => [o(C)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[5] ||
              (e[5] = w(
                '<h2 id="switch-api" tabindex="-1">Switch API <a class="header-anchor" href="#switch-api" aria-label="Permalink to &quot;Switch API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>绑定值</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',
                2,
              )),
          ])
        )
      }
    },
  })
export { g as __pageData, G as default }
