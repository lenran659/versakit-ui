import { F as c, E as a } from './chunks/theme.ByYns1Tr.js'
import {
  d as V,
  a as p,
  b as f,
  x as n,
  p as r,
  z as i,
  u as o,
  _ as v,
  e as s,
  a9 as y,
  Q as g,
} from './chunks/framework.D7H_7AjQ.js'
import { R as b } from './chunks/index.Li0lFkb-.js'
const h = `<template>\r
  <div>\r
    <VerButton @click="topleft">top-left</VerButton>\r
    <VerButton @click="topright">top-right</VerButton>\r
    <VerButton @click="bottomleft">bottom-left</VerButton>\r
    <VerButton @click="bottomright">bottom-right</VerButton>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerButton, VerNotification } from '@versakit/ui'\r
\r
const topleft = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
    position: 'top-left',\r
  })\r
}\r
\r
const topright = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
  })\r
}\r
\r
const bottomleft = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
    position: 'bottom-left',\r
  })\r
}\r
\r
const bottomright = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
    position: 'bottom-right',\r
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
  N = V({
    __name: 'position',
    setup(m) {
      const d = () => {
          a({ title: 'title', content: 'content', position: 'top-left' })
        },
        e = () => {
          a({ title: 'title', content: 'content' })
        },
        l = () => {
          a({ title: 'title', content: 'content', position: 'bottom-left' })
        },
        u = () => {
          a({ title: 'title', content: 'content', position: 'bottom-right' })
        }
      return (B, t) => (
        p(),
        f('div', null, [
          n(
            o(c),
            { onClick: d },
            { default: r(() => t[0] || (t[0] = [i('top-left')])), _: 1 },
          ),
          n(
            o(c),
            { onClick: e },
            { default: r(() => t[1] || (t[1] = [i('top-right')])), _: 1 },
          ),
          n(
            o(c),
            { onClick: l },
            { default: r(() => t[2] || (t[2] = [i('bottom-left')])), _: 1 },
          ),
          n(
            o(c),
            { onClick: u },
            { default: r(() => t[3] || (t[3] = [i('bottom-right')])), _: 1 },
          ),
        ])
      )
    },
  }),
  G = v(N, [['__scopeId', 'data-v-2b1c00f5']]),
  k = `<template>\r
  <div>\r
    <VerButton type="info" @click="info">info</VerButton>\r
    <VerButton type="success" @click="success">success</VerButton>\r
    <VerButton type="warning" @click="warning">warning</VerButton>\r
    <VerButton type="error" @click="error">error</VerButton>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerButton, VerNotification } from '@versakit/ui'\r
\r
const info = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'info',\r
    plain: true,\r
    content: 'content',\r
  })\r
}\r
\r
const success = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'success',\r
    plain: true,\r
    content: 'content',\r
  })\r
}\r
\r
const warning = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'warning',\r
    plain: true,\r
    content: 'content',\r
  })\r
}\r
\r
const error = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'error',\r
    plain: true,\r
    content: 'content',\r
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
  x = V({
    __name: 'plain',
    setup(m) {
      const d = () => {
          a({ title: 'title', type: 'info', plain: !0, content: 'content' })
        },
        e = () => {
          a({ title: 'title', type: 'success', plain: !0, content: 'content' })
        },
        l = () => {
          a({ title: 'title', type: 'warning', plain: !0, content: 'content' })
        },
        u = () => {
          a({ title: 'title', type: 'error', plain: !0, content: 'content' })
        }
      return (B, t) => (
        p(),
        f('div', null, [
          n(
            o(c),
            { type: 'info', onClick: d },
            { default: r(() => t[0] || (t[0] = [i('info')])), _: 1 },
          ),
          n(
            o(c),
            { type: 'success', onClick: e },
            { default: r(() => t[1] || (t[1] = [i('success')])), _: 1 },
          ),
          n(
            o(c),
            { type: 'warning', onClick: l },
            { default: r(() => t[2] || (t[2] = [i('warning')])), _: 1 },
          ),
          n(
            o(c),
            { type: 'error', onClick: u },
            { default: r(() => t[3] || (t[3] = [i('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  C = v(x, [['__scopeId', 'data-v-c6853a32']]),
  F = `<template>\r
  <div>\r
    <VerButton type="info" @click="info">info</VerButton>\r
    <VerButton type="success" @click="success">success</VerButton>\r
    <VerButton type="warning" @click="warning">warning</VerButton>\r
    <VerButton type="error" @click="error">error</VerButton>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerButton, VerNotification } from '@versakit/ui'\r
\r
const info = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'info',\r
    content: 'content',\r
  })\r
}\r
\r
const success = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'success',\r
    content: 'content',\r
  })\r
}\r
\r
const warning = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'warning',\r
    content: 'content',\r
  })\r
}\r
\r
const error = () => {\r
  VerNotification({\r
    title: 'title',\r
    type: 'error',\r
    content: 'content',\r
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
  _ = V({
    __name: 'type',
    setup(m) {
      const d = () => {
          a({ title: 'title', type: 'info', content: 'content' })
        },
        e = () => {
          a({ title: 'title', type: 'success', content: 'content' })
        },
        l = () => {
          a({ title: 'title', type: 'warning', content: 'content' })
        },
        u = () => {
          a({ title: 'title', type: 'error', content: 'content' })
        }
      return (B, t) => (
        p(),
        f('div', null, [
          n(
            o(c),
            { type: 'info', onClick: d },
            { default: r(() => t[0] || (t[0] = [i('info')])), _: 1 },
          ),
          n(
            o(c),
            { type: 'success', onClick: e },
            { default: r(() => t[1] || (t[1] = [i('success')])), _: 1 },
          ),
          n(
            o(c),
            { type: 'warning', onClick: l },
            { default: r(() => t[2] || (t[2] = [i('warning')])), _: 1 },
          ),
          n(
            o(c),
            { type: 'error', onClick: u },
            { default: r(() => t[3] || (t[3] = [i('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  w = v(_, [['__scopeId', 'data-v-fbbb6373']]),
  A = `<template>\r
  <div>\r
    <VerButton @click="openNotification">openNotification</VerButton>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerButton, VerNotification } from '@versakit/ui'\r
\r
const openNotification = () => {\r
  VerNotification({\r
    title: 'title',\r
    content: 'content',\r
  })\r
}\r
<\/script>\r
`,
  D = V({
    __name: 'base',
    setup(m) {
      const d = () => {
        a({ title: 'title', content: 'content' })
      }
      return (e, l) => (
        p(),
        f('div', null, [
          n(
            o(c),
            { onClick: d },
            {
              default: r(() => l[0] || (l[0] = [i('openNotification')])),
              _: 1,
            },
          ),
        ])
      )
    },
  }),
  W = JSON.parse(
    '{"title":"Notification 通知","description":"","frontmatter":{},"headers":[],"relativePath":"components/notification/index.md","filePath":"components/notification/index.md"}',
  ),
  X = { name: 'components/notification/index.md' },
  Z = Object.assign(X, {
    setup(m) {
      return (d, e) => {
        const l = g('ClientOnly')
        return (
          p(),
          f('div', null, [
            e[0] ||
              (e[0] = s(
                'h1',
                { id: 'notification-通知', tabindex: '-1' },
                [
                  i('Notification 通知 '),
                  s(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#notification-通知',
                      'aria-label': 'Permalink to "Notification 通知"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = s(
                'p',
                null,
                '悬浮出现在页面角落，显示全局的通知提醒消息。',
                -1,
              )),
            e[2] ||
              (e[2] = s(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  i('基础用法 '),
                  s(
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
            n(l, null, {
              default: r(() => [
                n(
                  o(b),
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
                    vueCode: o(A),
                  },
                  { vue: r(() => [n(D)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[3] ||
              (e[3] = s(
                'h2',
                { id: '不同类型', tabindex: '-1' },
                [
                  i('不同类型 '),
                  s(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#不同类型',
                      'aria-label': 'Permalink to "不同类型"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            n(l, null, {
              default: r(() => [
                n(
                  o(b),
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
                  { vue: r(() => [n(w)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[4] ||
              (e[4] = s(
                'h2',
                { id: '不同风格', tabindex: '-1' },
                [
                  i('不同风格 '),
                  s(
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
            n(l, null, {
              default: r(() => [
                n(
                  o(b),
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
                    vueCode: o(k),
                  },
                  { vue: r(() => [n(C)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[5] ||
              (e[5] = s(
                'h2',
                { id: '不同方向', tabindex: '-1' },
                [
                  i('不同方向 '),
                  s(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#不同方向',
                      'aria-label': 'Permalink to "不同方向"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            n(l, null, {
              default: r(() => [
                n(
                  o(b),
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
                  { vue: r(() => [n(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[6] ||
              (e[6] = y(
                '<h2 id="notification-api" tabindex="-1">Notification API <a class="header-anchor" href="#notification-api" aria-label="Permalink to &quot;Notification API&quot;">​</a></h2><h3 id="notification-属性" tabindex="-1">Notification 属性 <a class="header-anchor" href="#notification-属性" aria-label="Permalink to &quot;Notification 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>duration</code></td><td>notification 的持续时间</td><td><code>number</code></td><td><code>0</code></td></tr><tr><td><code>destroy</code></td><td>notification 的销毁函数</td><td><code>function</code></td><td><code>空</code></td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { W as __pageData, Z as default }
