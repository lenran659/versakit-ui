import { F as m, u as p } from './chunks/theme.ByYns1Tr.js'
import {
  d as b,
  m as f,
  a as w,
  b as v,
  x as r,
  p as a,
  z as i,
  u as o,
  e as u,
  a9 as D,
  Q as c,
} from './chunks/framework.D7H_7AjQ.js'
import { R as B } from './chunks/index.Li0lFkb-.js'
const k = `<template>\r
  <div>\r
    <VerButton @click="drawerLeft = true">Left</VerButton>\r
    <VerButton @click="drawerTop = true">Top</VerButton>\r
    <VerButton @click="drawerRight = true">Right</VerButton>\r
    <VerButton @click="drawerBottom = true">Bottom</VerButton>\r
\r
    <VerDrawer v-model="drawerLeft">\r
      <span>左边</span>\r
    </VerDrawer>\r
\r
    <VerDrawer direction="top" v-model="drawerTop">\r
      <span>上面</span>\r
    </VerDrawer>\r
\r
    <VerDrawer direction="right" v-model="drawerRight">\r
      <span>上面</span>\r
    </VerDrawer>\r
\r
    <VerDrawer direction="bottom" v-model="drawerBottom">\r
      <span>上面</span>\r
    </VerDrawer>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerDrawer, VerButton } from '@versakit/ui'\r
\r
const drawerLeft = ref(false)\r
const drawerTop = ref(false)\r
const drawerRight = ref(false)\r
const drawerBottom = ref(false)\r
<\/script>\r
`,
  x = b({
    __name: 'direction',
    setup(V) {
      const d = f(!1),
        n = f(!1),
        t = f(!1),
        s = f(!1)
      return (h, e) => (
        w(),
        v('div', null, [
          r(
            o(m),
            { onClick: e[0] || (e[0] = (l) => (d.value = !0)) },
            { default: a(() => e[8] || (e[8] = [i('Left')])), _: 1 },
          ),
          r(
            o(m),
            { onClick: e[1] || (e[1] = (l) => (n.value = !0)) },
            { default: a(() => e[9] || (e[9] = [i('Top')])), _: 1 },
          ),
          r(
            o(m),
            { onClick: e[2] || (e[2] = (l) => (t.value = !0)) },
            { default: a(() => e[10] || (e[10] = [i('Right')])), _: 1 },
          ),
          r(
            o(m),
            { onClick: e[3] || (e[3] = (l) => (s.value = !0)) },
            { default: a(() => e[11] || (e[11] = [i('Bottom')])), _: 1 },
          ),
          r(
            o(p),
            {
              modelValue: d.value,
              'onUpdate:modelValue': e[4] || (e[4] = (l) => (d.value = l)),
            },
            {
              default: a(
                () => e[12] || (e[12] = [u('span', null, '左边', -1)]),
              ),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
          r(
            o(p),
            {
              direction: 'top',
              modelValue: n.value,
              'onUpdate:modelValue': e[5] || (e[5] = (l) => (n.value = l)),
            },
            {
              default: a(
                () => e[13] || (e[13] = [u('span', null, '上面', -1)]),
              ),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
          r(
            o(p),
            {
              direction: 'right',
              modelValue: t.value,
              'onUpdate:modelValue': e[6] || (e[6] = (l) => (t.value = l)),
            },
            {
              default: a(
                () => e[14] || (e[14] = [u('span', null, '上面', -1)]),
              ),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
          r(
            o(p),
            {
              direction: 'bottom',
              modelValue: s.value,
              'onUpdate:modelValue': e[7] || (e[7] = (l) => (s.value = l)),
            },
            {
              default: a(
                () => e[15] || (e[15] = [u('span', null, '上面', -1)]),
              ),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  C = `<template>\r
  <div>\r
    <VerButton @click="drawerLeft = true">基本使用</VerButton>\r
\r
    <VerDrawer v-model="drawerLeft">\r
      <span>左边</span>\r
    </VerDrawer>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from 'vue'\r
import { VerDrawer, VerButton } from '@versakit/ui'\r
\r
const drawerLeft = ref(false)\r
<\/script>\r
`,
  g = b({
    __name: 'base',
    setup(V) {
      const d = f(!1)
      return (n, t) => (
        w(),
        v('div', null, [
          r(
            o(m),
            { onClick: t[0] || (t[0] = (s) => (d.value = !0)) },
            { default: a(() => t[2] || (t[2] = [i('基本使用')])), _: 1 },
          ),
          r(
            o(p),
            {
              modelValue: d.value,
              'onUpdate:modelValue': t[1] || (t[1] = (s) => (d.value = s)),
            },
            {
              default: a(() => t[3] || (t[3] = [u('span', null, '左边', -1)])),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  F = JSON.parse(
    '{"title":"Drawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer/index.md","filePath":"components/drawer/index.md"}',
  ),
  A = { name: 'components/drawer/index.md' },
  T = Object.assign(A, {
    setup(V) {
      return (d, n) => {
        const t = c('ClientOnly')
        return (
          w(),
          v('div', null, [
            n[0] ||
              (n[0] = D(
                '<h1 id="drawer-抽屉" tabindex="-1">Drawer 抽屉 <a class="header-anchor" href="#drawer-抽屉" aria-label="Permalink to &quot;Drawer 抽屉&quot;">​</a></h1><p>有些时候, <code>Dialog</code> 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, <code>Drawer</code> 拥有和 <code>Dialog</code> 几乎相同的 API, 在 UI 上带来不一样的体验.</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>呼出一个临时的侧边栏, 可以从多个方向呼出</p><p>绑定 <code>v-model</code>到一个<code>Boolean</code>类型的变量。</p>',
                5,
              )),
            r(t, null, {
              default: a(() => [
                r(
                  o(B),
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
                    vueCode: o(C),
                  },
                  { vue: a(() => [r(g)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            n[1] ||
              (n[1] = u(
                'h2',
                { id: '不同方向', tabindex: '-1' },
                [
                  i('不同方向 '),
                  u(
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
            r(t, null, {
              default: a(() => [
                r(
                  o(B),
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
                  { vue: a(() => [r(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            n[2] ||
              (n[2] = D(
                '<h2 id="drawer-api" tabindex="-1">Drawer API <a class="header-anchor" href="#drawer-api" aria-label="Permalink to &quot;Drawer API&quot;">​</a></h2><h3 id="drawer-属性" tabindex="-1">Drawer 属性 <a class="header-anchor" href="#drawer-属性" aria-label="Permalink to &quot;Drawer 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td><code>空</code></td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { F as __pageData, T as default }
