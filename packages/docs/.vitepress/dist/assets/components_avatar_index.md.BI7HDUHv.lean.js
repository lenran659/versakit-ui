import { G as d, C as o, V as p } from './chunks/theme.1gNGnQRx.js'
import {
  d as m,
  a as r,
  j as v,
  p as n,
  v as c,
  e,
  u as a,
  _ as u,
  b as h,
  z as s,
  a8 as f,
  S as _,
} from './chunks/framework.DE5IkABU.js'
import { R as g } from './chunks/index.B_PIpyz3.js'
const x = `<template>
  <ver-row>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">circle</div>
        <div class="demo-basic--circle">
          <div class="block">
            <ver-avatar
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </div>
          <div class="block">
            <ver-avatar
              :size="24"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
            />
          </div>
        </div>
      </div>
    </ver-col>
    <ver-col :span="12">
      <div class="demo-basic">
        <div class="sub-title">square</div>
        <div class="demo-basic--square">
          <div class="block">
            <ver-avatar
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              shape="square"
            />
          </div>
          <div class="block">
            <ver-avatar
              :size="24"
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
              shape="square"
            />
          </div>
        </div>
      </div>
    </ver-col>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerAvatar, VerRow, VerCol } from 'versakit-ui'
<\/script>

<style scoped>
.demo-basic {
  text-align: center;
}
.demo-basic .sub-title {
  margin-bottom: 10px;
  font-size: 14px;
  color: #909399;
}
.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.demo-basic .block:not(:last-child) {
  border-right: 1px solid #dcdfe6;
}
.demo-basic .block {
  flex: 1;
}
.demo-basic .el-col:not(:last-child) {
  border-right: 1px solid #dcdfe6;
}
</style>
`,
  A = { class: 'demo-basic' },
  k = { class: 'demo-basic--circle' },
  V = { class: 'block' },
  q = { class: 'block' },
  y = { class: 'demo-basic' },
  C = { class: 'demo-basic--square' },
  F = { class: 'block' },
  B = { class: 'block' },
  z = m({
    __name: 'base',
    setup(l) {
      return (i, t) => (
        r(),
        v(a(p), null, {
          default: n(() => [
            c(
              a(o),
              { span: 12 },
              {
                default: n(() => [
                  e('div', A, [
                    t[0] ||
                      (t[0] = e('div', { class: 'sub-title' }, 'circle', -1)),
                    e('div', k, [
                      e('div', V, [
                        c(a(d), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', q, [
                        c(a(d), {
                          size: 24,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
            c(
              a(o),
              { span: 12 },
              {
                default: n(() => [
                  e('div', y, [
                    t[1] ||
                      (t[1] = e('div', { class: 'sub-title' }, 'square', -1)),
                    e('div', C, [
                      e('div', F, [
                        c(a(d), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', B, [
                        c(a(d), {
                          size: 24,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  G = u(z, [['__scopeId', 'data-v-406bd57d']]),
  P = JSON.parse(
    '{"title":"Avatar 头像","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}',
  ),
  X = { name: 'components/avatar/index.md' },
  j = Object.assign(X, {
    setup(l) {
      return (i, t) => {
        const b = _('ClientOnly')
        return (
          r(),
          h('div', null, [
            t[0] ||
              (t[0] = e(
                'h1',
                { id: 'avatar-头像', tabindex: '-1' },
                [
                  s('Avatar 头像 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#avatar-头像',
                      'aria-label': 'Permalink to "Avatar 头像"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[1] ||
              (t[1] = e(
                'p',
                null,
                'Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。',
                -1,
              )),
            t[2] ||
              (t[2] = e(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  s('基础用法 '),
                  e(
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
            t[3] ||
              (t[3] = e(
                'p',
                null,
                [
                  s(' 使用 '),
                  e('code', null, 'shape'),
                  s(' 和 '),
                  e('code', null, 'size'),
                  s(' 属性来设置Avatar的形状和大小。 '),
                ],
                -1,
              )),
            c(b, null, {
              default: n(() => [
                c(
                  a(g),
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
                    vueCode: a(x),
                  },
                  { vue: n(() => [c(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[4] ||
              (t[4] = f(
                '<h2 id="avatar-api" tabindex="-1">Avatar API <a class="header-anchor" href="#avatar-api" aria-label="Permalink to &quot;Avatar API&quot;">​</a></h2><h3 id="avatar-属性" tabindex="-1">Avatar 属性 <a class="header-anchor" href="#avatar-属性" aria-label="Permalink to &quot;Avatar 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>src</code></td><td>图片资源的路径</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>size</code></td><td>尺寸大小</td><td><code>number</code></td><td><code>50</code></td></tr><tr><td><code>shape</code></td><td>头像的形状，例如<code>square</code>、<code>circle</code></td><td><code>string</code></td><td><code>circle</code></td></tr></tbody></table><p>src: &#39;&#39;, size: 50, shape: &#39;circle&#39;,</p>',
                4,
              )),
          ])
        )
      }
    },
  })
export { P as __pageData, j as default }
