import { d as c } from './chunks/theme.ByYns1Tr.js'
import {
  d as p,
  a as n,
  j as i,
  p as r,
  e as d,
  u as s,
  b as h,
  a9 as m,
  x as t,
  Q as v,
} from './chunks/framework.D7H_7AjQ.js'
import { R as u } from './chunks/index.Li0lFkb-.js'
const b = `<template>\r
  <ver-result status="500">\r
    <template #content>\r
      <span>500 服务器错误</span>\r
    </template>\r
  </ver-result>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerResult } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped></style>\r
`,
  _ = p({
    __name: '500',
    setup(l) {
      return (a, e) => (
        n(),
        i(
          s(c),
          { status: '500' },
          {
            content: r(
              () => e[0] || (e[0] = [d('span', null, '500 服务器错误', -1)]),
            ),
            _: 1,
          },
        )
      )
    },
  }),
  f = `<template>\r
  <ver-result status="403">\r
    <template #content>\r
      <span>404 资源不存在</span>\r
    </template>\r
  </ver-result>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerResult } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped></style>\r
`,
  B = p({
    __name: '404',
    setup(l) {
      return (a, e) => (
        n(),
        i(
          s(c),
          { status: '403' },
          {
            content: r(
              () => e[0] || (e[0] = [d('span', null, '404 资源不存在', -1)]),
            ),
            _: 1,
          },
        )
      )
    },
  }),
  D = `<template>\r
  <ver-result status="403">\r
    <template #content>\r
      <span>403 禁止访问</span>\r
    </template>\r
  </ver-result>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerResult } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped></style>\r
`,
  A = p({
    __name: '403',
    setup(l) {
      return (a, e) => (
        n(),
        i(
          s(c),
          { status: '403' },
          {
            content: r(
              () => e[0] || (e[0] = [d('span', null, '403 禁止访问', -1)]),
            ),
            _: 1,
          },
        )
      )
    },
  }),
  C = `<template>\r
  <ver-result status="info">\r
    <template #content>\r
      <span>信息</span>\r
    </template>\r
  </ver-result>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerResult } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped></style>\r
`,
  V = p({
    __name: 'info',
    setup(l) {
      return (a, e) => (
        n(),
        i(
          s(c),
          { status: 'info' },
          {
            content: r(() => e[0] || (e[0] = [d('span', null, '信息', -1)])),
            _: 1,
          },
        )
      )
    },
  }),
  y = `<template>\r
  <ver-result status="warning">\r
    <template #content>\r
      <span>警告</span>\r
    </template>\r
  </ver-result>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerResult } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped></style>\r
`,
  x = p({
    __name: 'warning',
    setup(l) {
      return (a, e) => (
        n(),
        i(
          s(c),
          { status: 'warning' },
          {
            content: r(() => e[0] || (e[0] = [d('span', null, '警告', -1)])),
            _: 1,
          },
        )
      )
    },
  }),
  F = `<template>\r
  <ver-result status="error">\r
    <template #content>\r
      <span>错误</span>\r
    </template>\r
  </ver-result>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerResult } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped></style>\r
`,
  X = p({
    __name: 'error',
    setup(l) {
      return (a, e) => (
        n(),
        i(
          s(c),
          { status: 'error' },
          {
            content: r(() => e[0] || (e[0] = [d('span', null, '错误', -1)])),
            _: 1,
          },
        )
      )
    },
  }),
  g = `<template>\r
  <ver-result status="success">\r
    <template #content>\r
      <span>成功</span>\r
    </template>\r
  </ver-result>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerResult } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped></style>\r
`,
  G = p({
    __name: 'success',
    setup(l) {
      return (a, e) => (
        n(),
        i(
          s(c),
          { status: 'success' },
          {
            content: r(() => e[0] || (e[0] = [d('span', null, '成功', -1)])),
            _: 1,
          },
        )
      )
    },
  }),
  j = JSON.parse(
    '{"title":"Result 结果页","description":"","frontmatter":{},"headers":[],"relativePath":"components/result/index.md","filePath":"components/result/index.md"}',
  ),
  w = { name: 'components/result/index.md' },
  q = Object.assign(w, {
    setup(l) {
      return (a, e) => {
        const o = v('ClientOnly')
        return (
          n(),
          h('div', null, [
            e[0] ||
              (e[0] = m(
                '<h1 id="result-结果页" tabindex="-1">Result 结果页 <a class="header-anchor" href="#result-结果页" aria-label="Permalink to &quot;Result 结果页&quot;">​</a></h1><p>用于反馈一系列操作任务的处理结果。</p><h2 id="何时使用" tabindex="-1">何时使用 <a class="header-anchor" href="#何时使用" aria-label="Permalink to &quot;何时使用&quot;">​</a></h2><p>当有重要操作需告知用户处理结果，且反馈内容较为复杂时使用。</p><h2 id="演示" tabindex="-1">演示 <a class="header-anchor" href="#演示" aria-label="Permalink to &quot;演示&quot;">​</a></h2>',
                5,
              )),
            t(o, null, {
              default: r(() => [
                t(
                  s(u),
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
                    vueCode: s(g),
                  },
                  { vue: r(() => [t(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(o, null, {
              default: r(() => [
                t(
                  s(u),
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
                  { vue: r(() => [t(X)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(o, null, {
              default: r(() => [
                t(
                  s(u),
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
                    vueCode: s(y),
                  },
                  { vue: r(() => [t(x)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(o, null, {
              default: r(() => [
                t(
                  s(u),
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
                    vueCode: s(C),
                  },
                  { vue: r(() => [t(V)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(o, null, {
              default: r(() => [
                t(
                  s(u),
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
                    vueCode: s(D),
                  },
                  { vue: r(() => [t(A)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(o, null, {
              default: r(() => [
                t(
                  s(u),
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
                    vueCode: s(f),
                  },
                  { vue: r(() => [t(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t(o, null, {
              default: r(() => [
                t(
                  s(u),
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
                    vueCode: s(b),
                  },
                  { vue: r(() => [t(_)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[1] ||
              (e[1] = m(
                '<h2 id="result-api" tabindex="-1">Result API <a class="header-anchor" href="#result-api" aria-label="Permalink to &quot;Result API&quot;">​</a></h2><h3 id="result-属性" tabindex="-1">Result 属性 <a class="header-anchor" href="#result-属性" aria-label="Permalink to &quot;Result 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>status</code></td><td>结果的状态,决定图标和颜色</td><td><code>string</code></td><td><code>success</code></td></tr><tr><td><code>iconName</code></td><td>决定图标</td><td><code>string</code></td><td><code>success</code></td></tr></tbody></table><h3 id="result-插槽" tabindex="-1">Result 插槽 <a class="header-anchor" href="#result-插槽" aria-label="Permalink to &quot;Result 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>content</code></td><td>自定义内容文字</td></tr></tbody></table>',
                5,
              )),
          ])
        )
      }
    },
  })
export { j as __pageData, q as default }
