import { e as r } from './chunks/theme.1gNGnQRx.js'
import {
  d as u,
  a as l,
  b as g,
  e as o,
  v as t,
  p as a,
  z as d,
  u as n,
  F as m,
  _ as y,
  a8 as s,
  S as f,
} from './chunks/framework.DE5IkABU.js'
import { R as c } from './chunks/index.B_PIpyz3.js'
const V = `<template>
  <div class="my">
    <VerTag>Tag 1</VerTag>
    <VerTag type="success">Tag 2</VerTag>
    <VerTag type="info">Tag 3</VerTag>
    <VerTag type="warning">Tag 4</VerTag>
    <VerTag type="error">Tag 5</VerTag>
  </div>

  <div class="my">
    <VerTag plain>Tag 1</VerTag>
    <VerTag plain type="success">Tag 2</VerTag>
    <VerTag plain type="info">Tag 3</VerTag>
    <VerTag plain type="warning">Tag 4</VerTag>
    <VerTag plain type="error">Tag 5</VerTag>
  </div>

  <div class="my">
    <VerTag round>Tag 1</VerTag>
    <VerTag round type="success">Tag 2</VerTag>
    <VerTag round type="info">Tag 3</VerTag>
    <VerTag round type="warning">Tag 4</VerTag>
    <VerTag round type="error">Tag 5</VerTag>
  </div>
</template>

<script lang="ts" setup>
import { VerTag } from 'versakit-ui'
<\/script>

<style scoped>
.my {
  margin: 1rem 0;
}

.ver-tag + .ver-tag {
  margin: 0px 10px;
}
</style>
`,
  b = { class: 'my' },
  v = { class: 'my' },
  x = { class: 'my' },
  _ = u({
    __name: 'base',
    setup(i) {
      return (p, e) => (
        l(),
        g(
          m,
          null,
          [
            o('div', b, [
              t(n(r), null, {
                default: a(() => e[0] || (e[0] = [d('Tag 1')])),
                _: 1,
              }),
              t(
                n(r),
                { type: 'success' },
                { default: a(() => e[1] || (e[1] = [d('Tag 2')])), _: 1 },
              ),
              t(
                n(r),
                { type: 'info' },
                { default: a(() => e[2] || (e[2] = [d('Tag 3')])), _: 1 },
              ),
              t(
                n(r),
                { type: 'warning' },
                { default: a(() => e[3] || (e[3] = [d('Tag 4')])), _: 1 },
              ),
              t(
                n(r),
                { type: 'error' },
                { default: a(() => e[4] || (e[4] = [d('Tag 5')])), _: 1 },
              ),
            ]),
            o('div', v, [
              t(
                n(r),
                { plain: '' },
                { default: a(() => e[5] || (e[5] = [d('Tag 1')])), _: 1 },
              ),
              t(
                n(r),
                { plain: '', type: 'success' },
                { default: a(() => e[6] || (e[6] = [d('Tag 2')])), _: 1 },
              ),
              t(
                n(r),
                { plain: '', type: 'info' },
                { default: a(() => e[7] || (e[7] = [d('Tag 3')])), _: 1 },
              ),
              t(
                n(r),
                { plain: '', type: 'warning' },
                { default: a(() => e[8] || (e[8] = [d('Tag 4')])), _: 1 },
              ),
              t(
                n(r),
                { plain: '', type: 'error' },
                { default: a(() => e[9] || (e[9] = [d('Tag 5')])), _: 1 },
              ),
            ]),
            o('div', x, [
              t(
                n(r),
                { round: '' },
                { default: a(() => e[10] || (e[10] = [d('Tag 1')])), _: 1 },
              ),
              t(
                n(r),
                { round: '', type: 'success' },
                { default: a(() => e[11] || (e[11] = [d('Tag 2')])), _: 1 },
              ),
              t(
                n(r),
                { round: '', type: 'info' },
                { default: a(() => e[12] || (e[12] = [d('Tag 3')])), _: 1 },
              ),
              t(
                n(r),
                { round: '', type: 'warning' },
                { default: a(() => e[13] || (e[13] = [d('Tag 4')])), _: 1 },
              ),
              t(
                n(r),
                { round: '', type: 'error' },
                { default: a(() => e[14] || (e[14] = [d('Tag 5')])), _: 1 },
              ),
            ]),
          ],
          64,
        )
      )
    },
  }),
  h = y(_, [['__scopeId', 'data-v-62dc5d0d']]),
  C = JSON.parse(
    '{"title":"Tag 标签","description":"","frontmatter":{},"headers":[],"relativePath":"components/tag/index.md","filePath":"components/tag/index.md"}',
  ),
  F = { name: 'components/tag/index.md' },
  X = Object.assign(F, {
    setup(i) {
      return (p, e) => {
        const T = f('ClientOnly')
        return (
          l(),
          g('div', null, [
            e[0] ||
              (e[0] = s(
                '<h1 id="tag-标签" tabindex="-1">Tag 标签 <a class="header-anchor" href="#tag-标签" aria-label="Permalink to &quot;Tag 标签&quot;">​</a></h1><p>用于标记和选择。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>由<code>type</code>属性来选择 tag 类型。也能通过<code>plain</code>让 tag 的背景变得半透明，可以通过<code>color</code>属性自定义颜色。</p>',
                4,
              )),
            t(T, null, {
              default: a(() => [
                t(
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
                    vueCode: n(V),
                  },
                  { vue: a(() => [t(h)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[1] ||
              (e[1] = s(
                '<h2 id="tag-api" tabindex="-1">Tag API <a class="header-anchor" href="#tag-api" aria-label="Permalink to &quot;Tag API&quot;">​</a></h2><h3 id="tag-属性" tabindex="-1">Tag 属性 <a class="header-anchor" href="#tag-属性" aria-label="Permalink to &quot;Tag 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>Tag 的类型，可以选择以下类型：primary、success、info、warning、danger</td><td><code>string</code></td><td><code>primary</code></td></tr><tr><td><code>plain</code></td><td>背景是否半透明</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>round</code></td><td>Tag 是否为圆角</td><td><code>boolean</code></td><td><code>false</code></td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { C as __pageData, X as default }
