import { f as p } from './chunks/theme.1gNGnQRx.js'
import {
  d as u,
  m as b,
  a as s,
  j as h,
  u as r,
  _ as x,
  b as f,
  e as t,
  z as d,
  v as l,
  p as o,
  a8 as V,
  S as v,
} from './chunks/framework.DE5IkABU.js'
import { R as m } from './chunks/index.B_PIpyz3.js'
const F = `<template>
  <VerTextarea v-model="textarea" :maxlength="10" placeholder="请输入内容" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VerTextarea } from 'versakit-ui'
const textarea = ref('')
<\/script>

<style scoped>
.ver-textarea {
  width: 300px;
  height: 100px;
}
</style>
`,
  A = u({
    __name: 'maxlength',
    setup(c) {
      const n = b('')
      return (e, a) => (
        s(),
        h(
          r(p),
          {
            modelValue: n.value,
            'onUpdate:modelValue': a[0] || (a[0] = (i) => (n.value = i)),
            maxlength: 10,
            placeholder: '请输入内容',
          },
          null,
          8,
          ['modelValue'],
        )
      )
    },
  }),
  _ = x(A, [['__scopeId', 'data-v-a762da2a']]),
  G = `<template>
  <VerTextarea disabled placeholder="请输入内容" />
</template>

<script lang="ts" setup>
import { VerTextarea } from 'versakit-ui'
<\/script>

<style scoped>
.ver-textarea {
  width: 300px;
  height: 100px;
}
</style>
`,
  y = u({
    __name: 'disabled',
    setup(c) {
      return (n, e) => (
        s(), h(r(p), { disabled: '', placeholder: '请输入内容' })
      )
    },
  }),
  B = x(y, [['__scopeId', 'data-v-5d45b871']]),
  X = `<template>
  <VerTextarea v-model="textareaVal" placeholder="请输入内容" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { VerTextarea } from 'versakit-ui'
const textareaVal = ref('')
<\/script>

<style scoped>
.ver-textarea {
  width: 300px;
  height: 100px;
}
</style>
`,
  T = u({
    __name: 'base',
    setup(c) {
      const n = b('')
      return (e, a) => (
        s(),
        h(
          r(p),
          {
            modelValue: n.value,
            'onUpdate:modelValue': a[0] || (a[0] = (i) => (n.value = i)),
            placeholder: '请输入内容',
          },
          null,
          8,
          ['modelValue'],
        )
      )
    },
  }),
  g = x(T, [['__scopeId', 'data-v-5f772be1']]),
  k = JSON.parse(
    '{"title":"TextArea 文本域","description":"","frontmatter":{},"headers":[],"relativePath":"components/textarea/index.md","filePath":"components/textarea/index.md"}',
  ),
  D = { name: 'components/textarea/index.md' },
  j = Object.assign(D, {
    setup(c) {
      return (n, e) => {
        const a = v('ClientOnly')
        return (
          s(),
          f('div', null, [
            e[0] ||
              (e[0] = t(
                'h1',
                { id: 'textarea-文本域', tabindex: '-1' },
                [
                  d('TextArea 文本域 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#textarea-文本域',
                      'aria-label': 'Permalink to "TextArea 文本域"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = t(
                'p',
                null,
                '多行纯文本编辑控件，适用于评论或反馈表单中的一段意见。',
                -1,
              )),
            e[2] ||
              (e[2] = t(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  d('基础用法 '),
                  t(
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
            e[3] || (e[3] = t('p', null, '用于多行输入。', -1)),
            l(a, null, {
              default: o(() => [
                l(
                  r(m),
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
                    vueCode: r(X),
                  },
                  { vue: o(() => [l(g)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[4] ||
              (e[4] = t(
                'h2',
                { id: '禁用状态', tabindex: '-1' },
                [
                  d('禁用状态 '),
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
            e[5] ||
              (e[5] = t(
                'p',
                null,
                [d('使用'), t('code', null, 'disabled'), d('属性启用')],
                -1,
              )),
            l(a, null, {
              default: o(() => [
                l(
                  r(m),
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
                    vueCode: r(G),
                  },
                  { vue: o(() => [l(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[6] ||
              (e[6] = t(
                'h2',
                { id: '限制长度', tabindex: '-1' },
                [
                  d('限制长度 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#限制长度',
                      'aria-label': 'Permalink to "限制长度"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[7] ||
              (e[7] = t(
                'p',
                null,
                [d('使用'), t('code', null, 'maxlength'), d('属性启用')],
                -1,
              )),
            l(a, null, {
              default: o(() => [
                l(
                  r(m),
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
                    vueCode: r(F),
                  },
                  { vue: o(() => [l(_)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[8] ||
              (e[8] = V(
                '<h2 id="textarea-api" tabindex="-1">Textarea API <a class="header-anchor" href="#textarea-api" aria-label="Permalink to &quot;Textarea API&quot;">​</a></h2><h3 id="textarea属性" tabindex="-1">Textarea属性 <a class="header-anchor" href="#textarea属性" aria-label="Permalink to &quot;Textarea属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>disabled</code></td><td>是否禁用</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>placeholder </code></td><td>输入框占位文本</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>maxlength</code></td><td>最大值</td><td><code>string</code></td><td><code>undefined</code></td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { k as __pageData, j as default }
