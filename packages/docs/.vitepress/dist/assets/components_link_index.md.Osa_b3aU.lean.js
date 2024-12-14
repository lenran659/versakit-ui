import { u as a, V as c } from './chunks/theme.CQRJ-XKT.js'
import {
  d as u,
  a as d,
  j as f,
  p as t,
  v as s,
  z as n,
  u as l,
  _ as x,
  b,
  e as r,
  a8 as v,
  S as k,
} from './chunks/framework.DUC_U6YZ.js'
import { R as p } from './chunks/index.BOmkyUj-.js'
const y = `<template>
  <ver-row>
    <ver-link class="mx4" disabled>default</ver-link>
    <ver-link class="mx4" disabled type="primary">primary</ver-link>
    <ver-link class="mx4" disabled type="success">success</ver-link>
    <ver-link class="mx4" disabled type="info">info</ver-link>
    <ver-link class="mx4" disabled type="warning">warning</ver-link>
    <ver-link class="mx4" disabled type="error">danger</ver-link>
  </ver-row>
</template>

<script setup lang="ts">
import { VerRow, VerLink } from 'versakit-ui'
<\/script>

<style scoped>
.mx4 {
  margin: 0px 8px;
}
</style>
`,
  w = u({
    __name: 'disable',
    setup(i) {
      return (o, e) => (
        d(),
        f(l(c), null, {
          default: t(() => [
            s(
              l(a),
              { class: 'mx4', disabled: '' },
              { default: t(() => e[0] || (e[0] = [n('default')])), _: 1 },
            ),
            s(
              l(a),
              { class: 'mx4', disabled: '', type: 'primary' },
              { default: t(() => e[1] || (e[1] = [n('primary')])), _: 1 },
            ),
            s(
              l(a),
              { class: 'mx4', disabled: '', type: 'success' },
              { default: t(() => e[2] || (e[2] = [n('success')])), _: 1 },
            ),
            s(
              l(a),
              { class: 'mx4', disabled: '', type: 'info' },
              { default: t(() => e[3] || (e[3] = [n('info')])), _: 1 },
            ),
            s(
              l(a),
              { class: 'mx4', disabled: '', type: 'warning' },
              { default: t(() => e[4] || (e[4] = [n('warning')])), _: 1 },
            ),
            s(
              l(a),
              { class: 'mx4', disabled: '', type: 'error' },
              { default: t(() => e[5] || (e[5] = [n('danger')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  g = x(w, [['__scopeId', 'data-v-8ff40aa3']]),
  V = `<script setup lang="ts">
import { VerRow, VerLink } from 'versakit-ui'
<\/script>

<template>
  <ver-row>
    <ver-link class="mx4" href="https://www.baidu.com/index.html">
      default
    </ver-link>
    <ver-link class="mx4" type="primary">primary</ver-link>
    <ver-link class="mx4" type="success">success</ver-link>
    <ver-link class="mx4" type="info">info</ver-link>
    <ver-link class="mx4" type="warning">warning</ver-link>
    <ver-link class="mx4" type="error">danger</ver-link>
  </ver-row>
</template>

<style scoped>
.mx4 {
  margin: 0px 8px;
}
</style>
`,
  F = u({
    __name: 'base',
    setup(i) {
      return (o, e) => (
        d(),
        f(l(c), null, {
          default: t(() => [
            s(
              l(a),
              { class: 'mx4', href: 'https://www.baidu.com/index.html' },
              { default: t(() => e[0] || (e[0] = [n(' default ')])), _: 1 },
            ),
            s(
              l(a),
              { class: 'mx4', type: 'primary' },
              { default: t(() => e[1] || (e[1] = [n('primary')])), _: 1 },
            ),
            s(
              l(a),
              { class: 'mx4', type: 'success' },
              { default: t(() => e[2] || (e[2] = [n('success')])), _: 1 },
            ),
            s(
              l(a),
              { class: 'mx4', type: 'info' },
              { default: t(() => e[3] || (e[3] = [n('info')])), _: 1 },
            ),
            s(
              l(a),
              { class: 'mx4', type: 'warning' },
              { default: t(() => e[4] || (e[4] = [n('warning')])), _: 1 },
            ),
            s(
              l(a),
              { class: 'mx4', type: 'error' },
              { default: t(() => e[5] || (e[5] = [n('danger')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  _ = x(F, [['__scopeId', 'data-v-2d3448c0']]),
  C = JSON.parse(
    '{"title":"Link 链接","description":"","frontmatter":{},"headers":[],"relativePath":"components/link/index.md","filePath":"components/link/index.md"}',
  ),
  A = { name: 'components/link/index.md' },
  D = Object.assign(A, {
    setup(i) {
      return (o, e) => {
        const m = k('ClientOnly')
        return (
          d(),
          b('div', null, [
            e[0] ||
              (e[0] = r(
                'h1',
                { id: 'link-链接', tabindex: '-1' },
                [
                  n('Link 链接 '),
                  r(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#link-链接',
                      'aria-label': 'Permalink to "Link 链接"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = r(
                'h2',
                { id: '基础使用', tabindex: '-1' },
                [
                  n('基础使用 '),
                  r(
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
            e[2] || (e[2] = r('p', null, '基础的文字链接用法。', -1)),
            s(m, null, {
              default: t(() => [
                s(
                  l(p),
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
                    vueCode: l(V),
                  },
                  { vue: t(() => [s(_)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[3] ||
              (e[3] = r(
                'h2',
                { id: '禁用状态', tabindex: '-1' },
                [
                  n('禁用状态 '),
                  r(
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
            e[4] || (e[4] = r('p', null, '文字链接不可用状态。', -1)),
            s(m, null, {
              default: t(() => [
                s(
                  l(p),
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
                    vueCode: l(y),
                  },
                  { vue: t(() => [s(g)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[5] ||
              (e[5] = v(
                '<h2 id="link-api" tabindex="-1">Link API <a class="header-anchor" href="#link-api" aria-label="Permalink to &quot;Link API&quot;">​</a></h2><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>链接的类型，可以是<code>primary</code>、<code>success</code></td><td><code>string</code></td><td><code>default</code></td></tr><tr><td><code>disabled</code></td><td>控制链接是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>href</code></td><td>链接的路径</td><td><code>string</code></td><td><code>空</code></td></tr></tbody></table>',
                2,
              )),
          ])
        )
      }
    },
  })
export { C as __pageData, D as default }
