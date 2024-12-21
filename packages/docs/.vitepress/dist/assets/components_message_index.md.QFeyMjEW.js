import { F as c, J as i } from './chunks/theme.ByYns1Tr.js'
import {
  d as y,
  a as u,
  b as p,
  x as t,
  p as r,
  z as o,
  u as s,
  _ as V,
  e as a,
  a9 as B,
  Q as v,
} from './chunks/framework.D7H_7AjQ.js'
import { R as g } from './chunks/index.Li0lFkb-.js'
const h = `<template>\r
  <div>\r
    <VerButton type="success" @click="success">success</VerButton>\r
    <VerButton type="warning" @click="warning">warning</VerButton>\r
    <VerButton type="info" @click="info">info</VerButton>\r
    <VerButton type="error" @click="error">error</VerButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerButton, VerMessage } from '@versakit/ui'\r
\r
const success = () => {\r
  VerMessage({\r
    type: 'success',\r
    plain: true,\r
    content: '这是一条消息',\r
  })\r
}\r
const warning = () => {\r
  VerMessage({\r
    type: 'warning',\r
    plain: true,\r
    content: '这是一条消息',\r
  })\r
}\r
\r
const info = () => {\r
  VerMessage({\r
    type: 'info',\r
    plain: true,\r
    content: '这是一条消息',\r
  })\r
}\r
\r
const error = () => {\r
  VerMessage({\r
    type: 'error',\r
    plain: true,\r
    content: '这是一条消息',\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.ver-btn {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  x = y({
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
            s(c),
            { type: 'success', onClick: d },
            { default: r(() => n[0] || (n[0] = [o('success')])), _: 1 },
          ),
          t(
            s(c),
            { type: 'warning', onClick: e },
            { default: r(() => n[1] || (n[1] = [o('warning')])), _: 1 },
          ),
          t(
            s(c),
            { type: 'info', onClick: l },
            { default: r(() => n[2] || (n[2] = [o('info')])), _: 1 },
          ),
          t(
            s(c),
            { type: 'error', onClick: f },
            { default: r(() => n[3] || (n[3] = [o('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  k = V(x, [['__scopeId', 'data-v-5737f663']]),
  M = `<template>\r
  <div>\r
    <VerButton type="success" @click="success">success</VerButton>\r
    <VerButton type="warning" @click="warning">warning</VerButton>\r
    <VerButton type="info" @click="info">info</VerButton>\r
    <VerButton type="error" @click="error">error</VerButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerButton, VerMessage } from '@versakit/ui'\r
\r
const success = () => {\r
  VerMessage({\r
    type: 'success',\r
    content: '这是一条消息',\r
  })\r
}\r
const warning = () => {\r
  VerMessage({\r
    type: 'warning',\r
    content: '这是一条消息',\r
  })\r
}\r
\r
const info = () => {\r
  VerMessage({\r
    type: 'info',\r
    content: '这是一条消息',\r
  })\r
}\r
\r
const error = () => {\r
  VerMessage({\r
    type: 'error',\r
    content: '这是一条消息',\r
  })\r
}\r
<\/script>\r
\r
<style scoped>\r
.ver-btn {\r
  margin: 0px 10px;\r
}\r
</style>\r
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
            s(c),
            { type: 'success', onClick: d },
            { default: r(() => n[0] || (n[0] = [o('success')])), _: 1 },
          ),
          t(
            s(c),
            { type: 'warning', onClick: e },
            { default: r(() => n[1] || (n[1] = [o('warning')])), _: 1 },
          ),
          t(
            s(c),
            { type: 'info', onClick: l },
            { default: r(() => n[2] || (n[2] = [o('info')])), _: 1 },
          ),
          t(
            s(c),
            { type: 'error', onClick: f },
            { default: r(() => n[3] || (n[3] = [o('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  w = V(C, [['__scopeId', 'data-v-7b69b044']]),
  F = `<template>\r
  <div>\r
    <VerButton @click="openMessage">点击</VerButton>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerButton, VerMessage } from '@versakit/ui'\r
\r
const openMessage = () => {\r
  VerMessage({\r
    type: 'info',\r
    content: '这是一条消息',\r
    duration: 2000,\r
  })\r
}\r
<\/script>\r
`,
  A = y({
    __name: 'base',
    setup(m) {
      const d = () => {
        i({ type: 'info', content: '这是一条消息', duration: 2e3 })
      }
      return (e, l) => (
        u(),
        p('div', null, [
          t(
            s(c),
            { onClick: d },
            { default: r(() => l[0] || (l[0] = [o('点击')])), _: 1 },
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
                  o('Message 消息提示 '),
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
                  o('基本用法 '),
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
              default: r(() => [
                t(
                  s(g),
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
                    vueCode: s(F),
                  },
                  { vue: r(() => [t(A)]), _: 1 },
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
                  o('不同状态 '),
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
              default: r(() => [
                t(
                  s(g),
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
                    vueCode: s(M),
                  },
                  { vue: r(() => [t(w)]), _: 1 },
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
                  o('不同风格 '),
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
              default: r(() => [
                t(
                  s(g),
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
                    vueCode: s(h),
                  },
                  { vue: r(() => [t(k)]), _: 1 },
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
