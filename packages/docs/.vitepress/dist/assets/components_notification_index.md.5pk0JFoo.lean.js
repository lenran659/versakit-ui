import { h as c, D as a } from './chunks/theme.CQRJ-XKT.js'
import {
  d as V,
  a as p,
  b as f,
  v as n,
  p as o,
  z as l,
  u as i,
  _ as v,
  e as s,
  a8 as y,
  S as h,
} from './chunks/framework.DUC_U6YZ.js'
import { R as b } from './chunks/index.BOmkyUj-.js'
const g = `<template>
  <div>
    <VerButton @click="topleft">top-left</VerButton>
    <VerButton @click="topright">top-right</VerButton>
    <VerButton @click="bottomleft">bottom-left</VerButton>
    <VerButton @click="bottomright">bottom-right</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from 'versakit-ui'

const topleft = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    position: 'top-left',
  })
}

const topright = () => {
  VerNotification({
    title: 'title',
    content: 'content',
  })
}

const bottomleft = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    position: 'bottom-left',
  })
}

const bottomright = () => {
  VerNotification({
    title: 'title',
    content: 'content',
    position: 'bottom-right',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
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
        r = () => {
          a({ title: 'title', content: 'content', position: 'bottom-left' })
        },
        u = () => {
          a({ title: 'title', content: 'content', position: 'bottom-right' })
        }
      return (B, t) => (
        p(),
        f('div', null, [
          n(
            i(c),
            { onClick: d },
            { default: o(() => t[0] || (t[0] = [l('top-left')])), _: 1 },
          ),
          n(
            i(c),
            { onClick: e },
            { default: o(() => t[1] || (t[1] = [l('top-right')])), _: 1 },
          ),
          n(
            i(c),
            { onClick: r },
            { default: o(() => t[2] || (t[2] = [l('bottom-left')])), _: 1 },
          ),
          n(
            i(c),
            { onClick: u },
            { default: o(() => t[3] || (t[3] = [l('bottom-right')])), _: 1 },
          ),
        ])
      )
    },
  }),
  G = v(N, [['__scopeId', 'data-v-f073dad8']]),
  k = `<template>
  <div>
    <VerButton type="info" @click="info">info</VerButton>
    <VerButton type="success" @click="success">success</VerButton>
    <VerButton type="warning" @click="warning">warning</VerButton>
    <VerButton type="error" @click="error">error</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from 'versakit-ui'

const info = () => {
  VerNotification({
    title: 'title',
    type: 'info',
    plain: true,
    content: 'content',
  })
}

const success = () => {
  VerNotification({
    title: 'title',
    type: 'success',
    plain: true,
    content: 'content',
  })
}

const warning = () => {
  VerNotification({
    title: 'title',
    type: 'warning',
    plain: true,
    content: 'content',
  })
}

const error = () => {
  VerNotification({
    title: 'title',
    type: 'error',
    plain: true,
    content: 'content',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
`,
  C = V({
    __name: 'plain',
    setup(m) {
      const d = () => {
          a({ title: 'title', type: 'info', plain: !0, content: 'content' })
        },
        e = () => {
          a({ title: 'title', type: 'success', plain: !0, content: 'content' })
        },
        r = () => {
          a({ title: 'title', type: 'warning', plain: !0, content: 'content' })
        },
        u = () => {
          a({ title: 'title', type: 'error', plain: !0, content: 'content' })
        }
      return (B, t) => (
        p(),
        f('div', null, [
          n(
            i(c),
            { type: 'info', onClick: d },
            { default: o(() => t[0] || (t[0] = [l('info')])), _: 1 },
          ),
          n(
            i(c),
            { type: 'success', onClick: e },
            { default: o(() => t[1] || (t[1] = [l('success')])), _: 1 },
          ),
          n(
            i(c),
            { type: 'warning', onClick: r },
            { default: o(() => t[2] || (t[2] = [l('warning')])), _: 1 },
          ),
          n(
            i(c),
            { type: 'error', onClick: u },
            { default: o(() => t[3] || (t[3] = [l('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  x = v(C, [['__scopeId', 'data-v-ad553c6f']]),
  F = `<template>
  <div>
    <VerButton type="info" @click="info">info</VerButton>
    <VerButton type="success" @click="success">success</VerButton>
    <VerButton type="warning" @click="warning">warning</VerButton>
    <VerButton type="error" @click="error">error</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from 'versakit-ui'

const info = () => {
  VerNotification({
    title: 'title',
    type: 'info',
    content: 'content',
  })
}

const success = () => {
  VerNotification({
    title: 'title',
    type: 'success',
    content: 'content',
  })
}

const warning = () => {
  VerNotification({
    title: 'title',
    type: 'warning',
    content: 'content',
  })
}

const error = () => {
  VerNotification({
    title: 'title',
    type: 'error',
    content: 'content',
  })
}
<\/script>

<style scoped>
.ver-btn {
  margin: 0px 10px;
}
</style>
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
        r = () => {
          a({ title: 'title', type: 'warning', content: 'content' })
        },
        u = () => {
          a({ title: 'title', type: 'error', content: 'content' })
        }
      return (B, t) => (
        p(),
        f('div', null, [
          n(
            i(c),
            { type: 'info', onClick: d },
            { default: o(() => t[0] || (t[0] = [l('info')])), _: 1 },
          ),
          n(
            i(c),
            { type: 'success', onClick: e },
            { default: o(() => t[1] || (t[1] = [l('success')])), _: 1 },
          ),
          n(
            i(c),
            { type: 'warning', onClick: r },
            { default: o(() => t[2] || (t[2] = [l('warning')])), _: 1 },
          ),
          n(
            i(c),
            { type: 'error', onClick: u },
            { default: o(() => t[3] || (t[3] = [l('error')])), _: 1 },
          ),
        ])
      )
    },
  }),
  w = v(_, [['__scopeId', 'data-v-e47c0974']]),
  A = `<template>
  <div>
    <VerButton @click="openNotification">openNotification</VerButton>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerNotification } from 'versakit-ui'

const openNotification = () => {
  VerNotification({
    title: 'title',
    content: 'content',
  })
}
<\/script>
`,
  D = V({
    __name: 'base',
    setup(m) {
      const d = () => {
        a({ title: 'title', content: 'content' })
      }
      return (e, r) => (
        p(),
        f('div', null, [
          n(
            i(c),
            { onClick: d },
            {
              default: o(() => r[0] || (r[0] = [l('openNotification')])),
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
        const r = h('ClientOnly')
        return (
          p(),
          f('div', null, [
            e[0] ||
              (e[0] = s(
                'h1',
                { id: 'notification-通知', tabindex: '-1' },
                [
                  l('Notification 通知 '),
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
                  l('基础用法 '),
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
            n(r, null, {
              default: o(() => [
                n(
                  i(b),
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
                    vueCode: i(A),
                  },
                  { vue: o(() => [n(D)]), _: 1 },
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
                  l('不同类型 '),
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
            n(r, null, {
              default: o(() => [
                n(
                  i(b),
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
                    vueCode: i(F),
                  },
                  { vue: o(() => [n(w)]), _: 1 },
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
                  l('不同风格 '),
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
            n(r, null, {
              default: o(() => [
                n(
                  i(b),
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
                    vueCode: i(k),
                  },
                  { vue: o(() => [n(x)]), _: 1 },
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
                  l('不同方向 '),
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
            n(r, null, {
              default: o(() => [
                n(
                  i(b),
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
                    vueCode: i(g),
                  },
                  { vue: o(() => [n(G)]), _: 1 },
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
