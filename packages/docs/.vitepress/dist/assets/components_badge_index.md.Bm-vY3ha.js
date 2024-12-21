import { F as u, a as c } from './chunks/theme.ByYns1Tr.js'
import {
  m as B,
  a as i,
  j as f,
  p as n,
  x as r,
  u as l,
  z as a,
  _ as g,
  b,
  F as h,
  e as t,
  a9 as v,
  Q as V,
} from './chunks/framework.D7H_7AjQ.js'
import { R as m } from './chunks/index.Li0lFkb-.js'
const x = `<template>\r
  <VerBadge type="number" :value="value1">\r
    <VerButton @click="countUp()">点我增加</VerButton>\r
  </VerBadge>\r
</template>\r
\r
<script setup>\r
import { VerBadge, VerButton } from '@versakit/ui'\r
import { ref } from 'vue'\r
\r
const value1 = ref(95)\r
\r
const countUp = () => {\r
  value1.value++\r
}\r
<\/script>\r
`,
  y = {
    __name: 'number',
    setup(p) {
      const o = B(95),
        e = () => {
          o.value++
        }
      return (s, d) => (
        i(),
        f(
          l(c),
          { type: 'number', value: o.value },
          {
            default: n(() => [
              r(
                l(u),
                { onClick: d[0] || (d[0] = (D) => e()) },
                { default: n(() => d[1] || (d[1] = [a('点我增加')])), _: 1 },
              ),
            ]),
            _: 1,
          },
          8,
          ['value'],
        )
      )
    },
  },
  _ = `<template>\r
  <VerBadge>\r
    <VerButton type="primary">点我没啥</VerButton>\r
  </VerBadge>\r
  <VerBadge type="text" value="new">\r
    <VerButton>点我没事</VerButton>\r
  </VerBadge>\r
</template>\r
\r
<script setup>\r
import { VerBadge, VerButton } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped lang="scss">\r
.ver-badge {\r
  margin-right: 20px;\r
}\r
</style>\r
`,
  F = {
    __name: 'base',
    setup(p) {
      return (o, e) => (
        i(),
        b(
          h,
          null,
          [
            r(l(c), null, {
              default: n(() => [
                r(
                  l(u),
                  { type: 'primary' },
                  { default: n(() => e[0] || (e[0] = [a('点我没啥')])), _: 1 },
                ),
              ]),
              _: 1,
            }),
            r(
              l(c),
              { type: 'text', value: 'new' },
              {
                default: n(() => [
                  r(l(u), null, {
                    default: n(() => e[1] || (e[1] = [a('点我没事')])),
                    _: 1,
                  }),
                ]),
                _: 1,
              },
            ),
          ],
          64,
        )
      )
    },
  },
  A = g(F, [['__scopeId', 'data-v-31bacf98']]),
  w = JSON.parse(
    '{"title":"Badge 徽标","description":"","frontmatter":{},"headers":[],"relativePath":"components/badge/index.md","filePath":"components/badge/index.md"}',
  ),
  C = { name: 'components/badge/index.md' },
  L = Object.assign(C, {
    setup(p) {
      return (o, e) => {
        const s = V('ClientOnly')
        return (
          i(),
          b('div', null, [
            e[0] ||
              (e[0] = t(
                'h1',
                { id: 'badge-徽标', tabindex: '-1' },
                [
                  a('Badge 徽标 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#badge-徽标',
                      'aria-label': 'Permalink to "Badge 徽标"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = t(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  a('基础用法 '),
                  t(
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
            e[2] ||
              (e[2] = t(
                'p',
                null,
                [
                  a('可以通过设置'),
                  t('code', null, 'type'),
                  a('属性改变徽标类型'),
                ],
                -1,
              )),
            r(s, null, {
              default: n(() => [
                r(
                  l(m),
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
                    vueCode: l(_),
                  },
                  { vue: n(() => [r(A)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[3] ||
              (e[3] = t(
                'h2',
                { id: '数字徽标', tabindex: '-1' },
                [
                  a('数字徽标 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#数字徽标',
                      'aria-label': 'Permalink to "数字徽标"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[4] ||
              (e[4] = t(
                'p',
                null,
                [
                  a('当徽标中数字大于'),
                  t('code', null, '99'),
                  a('时候会显示'),
                  t('code', null, '99+'),
                  a('，使用数字徽标需将'),
                  t('code', null, 'type'),
                  a('属性设置为'),
                  t('code', null, 'number'),
                ],
                -1,
              )),
            r(s, null, {
              default: n(() => [
                r(
                  l(m),
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
                    vueCode: l(x),
                  },
                  { vue: n(() => [r(y)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[5] ||
              (e[5] = v(
                '<h2 id="badge-api" tabindex="-1">Badge API <a class="header-anchor" href="#badge-api" aria-label="Permalink to &quot;Badge API&quot;">​</a></h2><h3 id="badge-属性" tabindex="-1">Badge 属性 <a class="header-anchor" href="#badge-属性" aria-label="Permalink to &quot;Badge 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>指定徽标的类型</td><td><code>string</code></td><td><code>&quot;dot&quot;</code></td></tr><tr><td><code>value</code></td><td>徽标显示的值</td><td><code>num</code>、<code>string</code></td><td></td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { w as __pageData, L as default }
