import { h as m, v as p } from './chunks/theme.CQRJ-XKT.js'
import {
  d as b,
  m as f,
  a as v,
  b as w,
  v as t,
  p as a,
  z as i,
  u as o,
  e as s,
  a8 as D,
  S as c,
} from './chunks/framework.DUC_U6YZ.js'
import { R as B } from './chunks/index.BOmkyUj-.js'
const k = `<template>
  <div>
    <VerButton @click="drawerLeft = true">Left</VerButton>
    <VerButton @click="drawerTop = true">Top</VerButton>
    <VerButton @click="drawerRight = true">Right</VerButton>
    <VerButton @click="drawerBottom = true">Bottom</VerButton>

    <VerDrawer v-model="drawerLeft">
      <span>左边</span>
    </VerDrawer>

    <VerDrawer direction="top" v-model="drawerTop">
      <span>上面</span>
    </VerDrawer>

    <VerDrawer direction="right" v-model="drawerRight">
      <span>上面</span>
    </VerDrawer>

    <VerDrawer direction="bottom" v-model="drawerBottom">
      <span>上面</span>
    </VerDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerDrawer, VerButton } from 'versakit-ui'

const drawerLeft = ref(false)
const drawerTop = ref(false)
const drawerRight = ref(false)
const drawerBottom = ref(false)
<\/script>
`,
  C = b({
    __name: 'direction',
    setup(V) {
      const d = f(!1),
        n = f(!1),
        r = f(!1),
        u = f(!1)
      return (A, e) => (
        v(),
        w('div', null, [
          t(
            o(m),
            { onClick: e[0] || (e[0] = (l) => (d.value = !0)) },
            { default: a(() => e[8] || (e[8] = [i('Left')])), _: 1 },
          ),
          t(
            o(m),
            { onClick: e[1] || (e[1] = (l) => (n.value = !0)) },
            { default: a(() => e[9] || (e[9] = [i('Top')])), _: 1 },
          ),
          t(
            o(m),
            { onClick: e[2] || (e[2] = (l) => (r.value = !0)) },
            { default: a(() => e[10] || (e[10] = [i('Right')])), _: 1 },
          ),
          t(
            o(m),
            { onClick: e[3] || (e[3] = (l) => (u.value = !0)) },
            { default: a(() => e[11] || (e[11] = [i('Bottom')])), _: 1 },
          ),
          t(
            o(p),
            {
              modelValue: d.value,
              'onUpdate:modelValue': e[4] || (e[4] = (l) => (d.value = l)),
            },
            {
              default: a(
                () => e[12] || (e[12] = [s('span', null, '左边', -1)]),
              ),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
          t(
            o(p),
            {
              direction: 'top',
              modelValue: n.value,
              'onUpdate:modelValue': e[5] || (e[5] = (l) => (n.value = l)),
            },
            {
              default: a(
                () => e[13] || (e[13] = [s('span', null, '上面', -1)]),
              ),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
          t(
            o(p),
            {
              direction: 'right',
              modelValue: r.value,
              'onUpdate:modelValue': e[6] || (e[6] = (l) => (r.value = l)),
            },
            {
              default: a(
                () => e[14] || (e[14] = [s('span', null, '上面', -1)]),
              ),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
          t(
            o(p),
            {
              direction: 'bottom',
              modelValue: u.value,
              'onUpdate:modelValue': e[7] || (e[7] = (l) => (u.value = l)),
            },
            {
              default: a(
                () => e[15] || (e[15] = [s('span', null, '上面', -1)]),
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
  g = `<template>
  <div>
    <VerButton @click="drawerLeft = true">基本使用</VerButton>

    <VerDrawer v-model="drawerLeft">
      <span>左边</span>
    </VerDrawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VerDrawer, VerButton } from 'versakit-ui'

const drawerLeft = ref(false)
<\/script>
`,
  x = b({
    __name: 'base',
    setup(V) {
      const d = f(!1)
      return (n, r) => (
        v(),
        w('div', null, [
          t(
            o(m),
            { onClick: r[0] || (r[0] = (u) => (d.value = !0)) },
            { default: a(() => r[2] || (r[2] = [i('基本使用')])), _: 1 },
          ),
          t(
            o(p),
            {
              modelValue: d.value,
              'onUpdate:modelValue': r[1] || (r[1] = (u) => (d.value = u)),
            },
            {
              default: a(() => r[3] || (r[3] = [s('span', null, '左边', -1)])),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  T = JSON.parse(
    '{"title":"Drawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer/index.md","filePath":"components/drawer/index.md"}',
  ),
  h = { name: 'components/drawer/index.md' },
  F = Object.assign(h, {
    setup(V) {
      return (d, n) => {
        const r = c('ClientOnly')
        return (
          v(),
          w('div', null, [
            n[0] ||
              (n[0] = D(
                '<h1 id="drawer-抽屉" tabindex="-1">Drawer 抽屉 <a class="header-anchor" href="#drawer-抽屉" aria-label="Permalink to &quot;Drawer 抽屉&quot;">​</a></h1><p>有些时候, <code>Dialog</code> 组件并不满足我们的需求, 比如你的表单很长, 亦或是你需要临时展示一些文档, <code>Drawer</code> 拥有和 <code>Dialog</code> 几乎相同的 API, 在 UI 上带来不一样的体验.</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p>呼出一个临时的侧边栏, 可以从多个方向呼出</p><p>绑定 <code>v-model</code>到一个<code>Boolean</code>类型的变量。</p>',
                5,
              )),
            t(r, null, {
              default: a(() => [
                t(
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
                    vueCode: o(g),
                  },
                  { vue: a(() => [t(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            n[1] ||
              (n[1] = s(
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
            t(r, null, {
              default: a(() => [
                t(
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
                  { vue: a(() => [t(C)]), _: 1 },
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
export { T as __pageData, F as default }
