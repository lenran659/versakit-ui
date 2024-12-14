import { h as c, I as i } from './chunks/theme.1gNGnQRx.js'
import {
  d as y,
  a as u,
  b as p,
  v as t,
  p as s,
  z as r,
  u as o,
  _ as V,
  e as a,
  a8 as B,
  S as v,
} from './chunks/framework.DE5IkABU.js'
import { R as g } from './chunks/index.B_PIpyz3.js'
const h = `<template>
  <div>
    <VerButton type="success" @click="success">success</VerButton>
    <VerButton type="warning" @click="warning">warning</VerButton>
    <VerButton type="info" @click="info">info</VerButton>
    <VerButton type="error" @click="error">error</VerButton>
  </div>
</template>

<script setup lang="ts">
import { VerButton, VerMessage } from 'versakit-ui'

const success = () => {
  VerMessage({
    type: 'success',
    plain: true,
    content: '这是一条消息',
  })
}
const warning = () => {
  VerMessage({
    type: 'warning',
    plain: true,
    content: '这是一条消息',
  })
}

const info = () => {
  VerMessage({
    type: 'info',
    plain: true,
    content: '这是一条消息',
  })
}

const error = () => {
  VerMessage({
    type: 'error',
    plain: true,
    content: '这是一条消息',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
`,
  k = y({
    __name: 'plain',
    setup(m) {
      const d = () => {
          i({ type: 'success', plain: !0, content: '这是一条消息' })
        },
        e = () => {
          i({ type: 'warning', plain: !0, content: '这是一条消息' })
        },
        l = () => {
          i({ type: 'info', plain: !0, content: '这是一条消息' })
        },
        f = () => {
          i({ type: 'error', plain: !0, content: '这是一条消息' })
        }
      return (b, n) => (
        u(),
        p('div', null, [
          t(
            o(c),
            { type: 'success', onClick: d },
            { default: s(() => n[0] || (n[0] = [r('success')])), _: 1 },
          ),
          t(
            o(c),
            { type: 'warning', onClick: e },
            { default: s(() => n[1] || (n[1] = [r('warning')])), _: 1 },
          ),
          t(
            o(c),
            { type: 'info', onClick: l },
            { default: s(() => n[2] || (n[2] = [r('info')])), _: 1 },
          ),
          t(
            o(c),
            { type: 'error', onClick: f },
            { default: s(() => n[3] || (n[3] = [r('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  x = V(k, [['__scopeId', 'data-v-bf98a09d']]),
  M = `<template>
  <div>
    <VerButton type="success" @click="success">success</VerButton>
    <VerButton type="warning" @click="warning">warning</VerButton>
    <VerButton type="info" @click="info">info</VerButton>
    <VerButton type="error" @click="error">error</VerButton>
  </div>
</template>

<script setup lang="ts">
import { VerButton, VerMessage } from 'versakit-ui'

const success = () => {
  VerMessage({
    type: 'success',
    content: '这是一条消息',
  })
}
const warning = () => {
  VerMessage({
    type: 'warning',
    content: '这是一条消息',
  })
}

const info = () => {
  VerMessage({
    type: 'info',
    content: '这是一条消息',
  })
}

const error = () => {
  VerMessage({
    type: 'error',
    content: '这是一条消息',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
`,
  C = y({
    __name: 'status',
    setup(m) {
      const d = () => {
          i({ type: 'success', content: '这是一条消息' })
        },
        e = () => {
          i({ type: 'warning', content: '这是一条消息' })
        },
        l = () => {
          i({ type: 'info', content: '这是一条消息' })
        },
        f = () => {
          i({ type: 'error', content: '这是一条消息' })
        }
      return (b, n) => (
        u(),
        p('div', null, [
          t(
            o(c),
            { type: 'success', onClick: d },
            { default: s(() => n[0] || (n[0] = [r('success')])), _: 1 },
          ),
          t(
            o(c),
            { type: 'warning', onClick: e },
            { default: s(() => n[1] || (n[1] = [r('warning')])), _: 1 },
          ),
          t(
            o(c),
            { type: 'info', onClick: l },
            { default: s(() => n[2] || (n[2] = [r('info')])), _: 1 },
          ),
          t(
            o(c),
            { type: 'error', onClick: f },
            { default: s(() => n[3] || (n[3] = [r('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  w = V(C, [['__scopeId', 'data-v-92151366']]),
  F = `<template>
  <div>
    <VerButton @click="openMessage">点击</VerButton>
  </div>
</template>

<script setup lang="ts">
import { VerButton, VerMessage } from 'versakit-ui'

const openMessage = () => {
  VerMessage({
    type: 'info',
    content: '这是一条消息',
  })
}
<\/script>
`,
  A = y({
    __name: 'base',
    setup(m) {
      const d = () => {
        i({ type: 'info', content: '这是一条消息' })
      }
      return (e, l) => (
        u(),
        p('div', null, [
          t(
            o(c),
            { onClick: d },
            { default: s(() => l[0] || (l[0] = [r('点击')])), _: 1 },
          ),
        ])
      )
    },
  }),
  Z = JSON.parse(
    '{"title":"Message 消息提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/message/index.md","filePath":"components/message/index.md"}',
  ),
  _ = { name: 'components/message/index.md' },
  X = Object.assign(_, {
    setup(m) {
      return (d, e) => {
        const l = v('ClientOnly')
        return (
          u(),
          p('div', null, [
            e[0] ||
              (e[0] = a(
                'h1',
                { id: 'message-消息提示', tabindex: '-1' },
                [
                  r('Message 消息提示 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#message-消息提示',
                      'aria-label': 'Permalink to "Message 消息提示"',
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
                '常用于主动操作后的反馈提示。 与 Notification 的区别是后者更多用于系统级通知的被动提醒。',
                -1,
              )),
            e[2] ||
              (e[2] = a(
                'h2',
                { id: '基本用法', tabindex: '-1' },
                [
                  r('基本用法 '),
                  a(
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
            e[3] || (e[3] = a('p', null, '从顶部出现，3 秒后自动消失。', -1)),
            t(l, null, {
              default: s(() => [
                t(
                  o(g),
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
                    vueCode: o(F),
                  },
                  { vue: s(() => [t(A)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[4] ||
              (e[4] = a(
                'h2',
                { id: '不同状态', tabindex: '-1' },
                [
                  r('不同状态 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#不同状态',
                      'aria-label': 'Permalink to "不同状态"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[5] ||
              (e[5] = a(
                'p',
                null,
                '用来显示「成功、警告、消息、错误」类的操作反馈。',
                -1,
              )),
            t(l, null, {
              default: s(() => [
                t(
                  o(g),
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
                    vueCode: o(M),
                  },
                  { vue: s(() => [t(w)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[6] ||
              (e[6] = a(
                'h2',
                { id: '不同风格', tabindex: '-1' },
                [
                  r('不同风格 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#不同风格',
                      'aria-label': 'Permalink to "不同风格"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[7] ||
              (e[7] = a(
                'p',
                null,
                '用来显示「成功、警告、消息、错误」类的操作反馈。',
                -1,
              )),
            t(l, null, {
              default: s(() => [
                t(
                  o(g),
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
                    vueCode: o(h),
                  },
                  { vue: s(() => [t(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[8] ||
              (e[8] = B(
                '<h2 id="message-api" tabindex="-1">Message API <a class="header-anchor" href="#message-api" aria-label="Permalink to &quot;Message API&quot;">​</a></h2><h3 id="message-属性" tabindex="-1">Message 属性 <a class="header-anchor" href="#message-属性" aria-label="Permalink to &quot;Message 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>绑定值</td><td><code>string</code></td><td><code>info</code></td></tr><tr><td><code>content</code></td><td>消息的内容</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>duration</code></td><td>消息的持续时间</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>destroy</code></td><td>message 的销毁函数</td><td><code>function</code></td><td><code>空</code></td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { Z as __pageData, X as default }
