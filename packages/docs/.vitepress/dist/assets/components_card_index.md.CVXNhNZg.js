import { h as o, V as y, F as C } from './chunks/theme.ByYns1Tr.js'
import {
  d as m,
  a as s,
  j as w,
  p as a,
  x as r,
  z as l,
  u as n,
  _ as h,
  b as i,
  e as t,
  F as b,
  B as f,
  v as x,
  a9 as v,
  Q as F,
} from './chunks/framework.D7H_7AjQ.js'
import { R as u } from './chunks/index.Li0lFkb-.js'
const _ = `<template>\r
  <ver-row>\r
    <ver-card style="width: 480px" shadow="always">Always</ver-card>\r
    <ver-card style="width: 480px" shadow="hover">Hover</ver-card>\r
    <ver-card style="width: 480px" shadow="never">Never</ver-card>\r
  </ver-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerCard, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.ver-card {\r
  margin: 20px 0;\r
}\r
</style>\r
`,
  V = m({
    __name: 'shadow',
    setup(c) {
      return (p, e) => (
        s(),
        w(n(y), null, {
          default: a(() => [
            r(
              n(o),
              { style: { width: '480px' }, shadow: 'always' },
              { default: a(() => e[0] || (e[0] = [l('Always')])), _: 1 },
            ),
            r(
              n(o),
              { style: { width: '480px' }, shadow: 'hover' },
              { default: a(() => e[1] || (e[1] = [l('Hover')])), _: 1 },
            ),
            r(
              n(o),
              { style: { width: '480px' }, shadow: 'never' },
              { default: a(() => e[2] || (e[2] = [l('Never')])), _: 1 },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  A = h(V, [['__scopeId', 'data-v-bfedcfcb']]),
  G = `<template>\r
  <div>\r
    <ver-card>\r
      <template #header>\r
        <div>\r
          <span>头部</span>\r
        </div>\r
      </template>\r
      <div>\r
        <span>内容</span>\r
      </div>\r
      <template #footer>\r
        <div>\r
          <span>底部</span>\r
        </div>\r
      </template>\r
    </ver-card>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerCard } from '@versakit/ui'\r
<\/script>\r
`,
  B = m({
    __name: 'template',
    setup(c) {
      return (p, e) => (
        s(),
        i('div', null, [
          r(n(o), null, {
            header: a(
              () =>
                e[0] ||
                (e[0] = [t('div', null, [t('span', null, '头部')], -1)]),
            ),
            footer: a(
              () =>
                e[1] ||
                (e[1] = [t('div', null, [t('span', null, '底部')], -1)]),
            ),
            default: a(() => [
              e[2] || (e[2] = t('div', null, [t('span', null, '内容')], -1)),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  D = `<template>\r
  <div>\r
    <ver-card>\r
      <div v-for="o in 4" :key="o" class="text item">\r
        {{ 'List item ' + o }}\r
      </div>\r
    </ver-card>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerCard } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.card-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
.text {\r
  font-size: 14px;\r
}\r
\r
.item {\r
  margin-bottom: 18px;\r
}\r
</style>\r
`,
  k = m({
    __name: 'simple',
    setup(c) {
      return (p, e) => (
        s(),
        i('div', null, [
          r(n(o), null, {
            default: a(() => [
              (s(),
              i(
                b,
                null,
                f(4, (d) =>
                  t(
                    'div',
                    { key: d, class: 'text item' },
                    x('List item ' + d),
                    1,
                  ),
                ),
                64,
              )),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  g = h(k, [['__scopeId', 'data-v-64269854']]),
  N = `<template>\r
  <div>\r
    <ver-card>\r
      <template #header>\r
        <div class="card-header">\r
          <span>Card name</span>\r
          <ver-button size="sm" type="primary">按 钮</ver-button>\r
        </div>\r
      </template>\r
      <div v-for="o in 4" :key="o" class="text item">\r
        {{ 'List item ' + o }}\r
      </div>\r
    </ver-card>\r
  </div>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerCard, VerButton } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.card-header {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
.text {\r
  font-size: 14px;\r
}\r
\r
.item {\r
  margin-bottom: 18px;\r
}\r
</style>\r
`,
  X = { class: 'card-header' },
  L = m({
    __name: 'base',
    setup(c) {
      return (p, e) => (
        s(),
        i('div', null, [
          r(n(o), null, {
            header: a(() => [
              t('div', X, [
                e[1] || (e[1] = t('span', null, 'Card name', -1)),
                r(
                  n(C),
                  { size: 'sm', type: 'primary' },
                  { default: a(() => e[0] || (e[0] = [l('按 钮')])), _: 1 },
                ),
              ]),
            ]),
            default: a(() => [
              (s(),
              i(
                b,
                null,
                f(4, (d) =>
                  t(
                    'div',
                    { key: d, class: 'text item' },
                    x('List item ' + d),
                    1,
                  ),
                ),
                64,
              )),
            ]),
            _: 1,
          }),
        ])
      )
    },
  }),
  j = h(L, [['__scopeId', 'data-v-0a15679d']]),
  P = JSON.parse(
    '{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/card/index.md","filePath":"components/card/index.md"}',
  ),
  Z = { name: 'components/card/index.md' },
  T = Object.assign(Z, {
    setup(c) {
      return (p, e) => {
        const d = F('ClientOnly')
        return (
          s(),
          i('div', null, [
            e[0] ||
              (e[0] = v(
                '<h1 id="card-卡片" tabindex="-1">Card 卡片 <a class="header-anchor" href="#card-卡片" aria-label="Permalink to &quot;Card 卡片&quot;">​</a></h1><p>将信息聚合在卡片容器中展示。</p><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>卡片包含标题，内容以及操作区域。</p><p>Card 组件 由 <code>header</code> 和 <code>body</code>组成。<code>header</code> 是可选的，其内容取决于一个具名的 <code>solt</code></p>',
                5,
              )),
            r(d, null, {
              default: a(() => [
                r(
                  n(u),
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
                    vueCode: n(N),
                  },
                  { vue: a(() => [r(j)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[1] ||
              (e[1] = t(
                'h2',
                { id: '简单卡片', tabindex: '-1' },
                [
                  l('简单卡片 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#简单卡片',
                      'aria-label': 'Permalink to "简单卡片"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[2] || (e[2] = t('p', null, '卡片可以只有内容区域。', -1)),
            r(d, null, {
              default: a(() => [
                r(
                  n(u),
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
                    vueCode: n(D),
                  },
                  { vue: a(() => [r(g)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[3] ||
              (e[3] = t(
                'h2',
                { id: '插槽', tabindex: '-1' },
                [
                  l('插槽 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#插槽',
                      'aria-label': 'Permalink to "插槽"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[4] || (e[4] = t('p', null, '卡片可以只有内容区域。', -1)),
            r(d, null, {
              default: a(() => [
                r(
                  n(u),
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
                    vueCode: n(G),
                  },
                  { vue: a(() => [r(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[5] ||
              (e[5] = t(
                'h2',
                { id: '带有阴影效果的卡片', tabindex: '-1' },
                [
                  l('带有阴影效果的卡片 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#带有阴影效果的卡片',
                      'aria-label': 'Permalink to "带有阴影效果的卡片"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[6] ||
              (e[6] = t(
                'p',
                null,
                '你可以定义什么时候展示卡片的阴影效果。',
                -1,
              )),
            e[7] ||
              (e[7] = t(
                'p',
                null,
                [
                  l('通过 '),
                  t('code', null, 'shadow'),
                  l('属性设置卡片阴影出现的时刻。该属性的值可以是: '),
                  t('code', null, 'always'),
                  l('、'),
                  t('code', null, 'hover'),
                  l(' 或 '),
                  t('code', null, 'never'),
                ],
                -1,
              )),
            r(d, null, {
              default: a(() => [
                r(
                  n(u),
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
                    vueCode: n(_),
                  },
                  { vue: a(() => [r(A)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[8] ||
              (e[8] = v(
                '<h2 id="card-api" tabindex="-1">Card API <a class="header-anchor" href="#card-api" aria-label="Permalink to &quot;Card API&quot;">​</a></h2><h3 id="card-属性" tabindex="-1">Card 属性 <a class="header-anchor" href="#card-属性" aria-label="Permalink to &quot;Card 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>shadow</code></td><td>可以使用shadow来决定卡片拥有阴影的时机</td><td><code>enum</code></td><td><code>always</code></td></tr></tbody></table><h3 id="card-插槽" tabindex="-1">Card 插槽 <a class="header-anchor" href="#card-插槽" aria-label="Permalink to &quot;Card 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>header</code></td><td>卡片标题内容</td></tr></tbody></table>',
                5,
              )),
          ])
        )
      }
    },
  })
export { P as __pageData, T as default }
