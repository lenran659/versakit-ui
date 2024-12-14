import { C as a, V as t } from './chunks/theme.CQRJ-XKT.js'
import {
  d as x,
  a as r,
  b as d,
  v as o,
  p as s,
  u as n,
  e,
  F as p,
  _ as m,
  a8 as f,
  z as c,
  S as V,
} from './chunks/framework.DUC_U6YZ.js'
import { R as v } from './chunks/index.BOmkyUj-.js'
const C = `<template>
  <VerRow class="mb-4">
    <VerCol :span="10"><div class="col-box col-box-1"></div></VerCol>
    <VerCol :span="14">
      <div class="col-box col-box-2"></div>
    </VerCol>
  </VerRow>
  <VerRow class="mb-4">
    <VerCol :span="6"><div class="col-box col-box-1"></div></VerCol>
    <VerCol :span="8"><div class="col-box col-box-2"></div></VerCol>
    <VerCol :span="10"><div class="col-box col-box-1"></div></VerCol>
  </VerRow>
  <VerRow class="mb-4">
    <VerCol :span="4"><div class="col-box col-box-1"></div></VerCol>
    <VerCol :span="16"><div class="col-box col-box-2"></div></VerCol>
    <VerCol :span="4"><div class="col-box col-box-1"></div></VerCol>
  </VerRow>
</template>

<script setup lang="ts">
import { VerRow, VerCol } from 'versakit-ui'
<\/script>

<style scoped>
.col-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}

.col-box-1 {
  background-color: #d3dce6;
}

.col-box-2 {
  background-color: #e5e9f2;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
`,
  y = x({
    __name: 'mix',
    setup(b) {
      return (i, l) => (
        r(),
        d(
          p,
          null,
          [
            o(
              n(t),
              { class: 'mb-4' },
              {
                default: s(() => [
                  o(
                    n(a),
                    { span: 10 },
                    {
                      default: s(
                        () =>
                          l[0] ||
                          (l[0] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 14 },
                    {
                      default: s(
                        () =>
                          l[1] ||
                          (l[1] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              n(t),
              { class: 'mb-4' },
              {
                default: s(() => [
                  o(
                    n(a),
                    { span: 6 },
                    {
                      default: s(
                        () =>
                          l[2] ||
                          (l[2] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 8 },
                    {
                      default: s(
                        () =>
                          l[3] ||
                          (l[3] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 10 },
                    {
                      default: s(
                        () =>
                          l[4] ||
                          (l[4] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              n(t),
              { class: 'mb-4' },
              {
                default: s(() => [
                  o(
                    n(a),
                    { span: 4 },
                    {
                      default: s(
                        () =>
                          l[5] ||
                          (l[5] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 16 },
                    {
                      default: s(
                        () =>
                          l[6] ||
                          (l[6] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 4 },
                    {
                      default: s(
                        () =>
                          l[7] ||
                          (l[7] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ],
          64,
        )
      )
    },
  }),
  w = m(y, [['__scopeId', 'data-v-d1af598c']]),
  F = `<template>
  <VerRow class="mb-4">
    <VerCol :span="10"><div class="col-box col-box-1">10</div></VerCol>
    <VerCol :span="12" :offset="2">
      <div class="col-box col-box-2">12</div>
    </VerCol>
  </VerRow>
  <VerRow class="mb-4">
    <VerCol :span="8"><div class="col-box col-box-1">8</div></VerCol>
    <VerCol :span="8" :offset="8">
      <div class="col-box col-box-2">8</div>
    </VerCol>
  </VerRow>
</template>

<script setup lang="ts">
import { VerRow, VerCol } from 'versakit-ui'
<\/script>

<style scoped>
.col-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}

.col-box-1 {
  background-color: #d3dce6;
}

.col-box-2 {
  background-color: #e5e9f2;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
`,
  g = x({
    __name: 'offset',
    setup(b) {
      return (i, l) => (
        r(),
        d(
          p,
          null,
          [
            o(
              n(t),
              { class: 'mb-4' },
              {
                default: s(() => [
                  o(
                    n(a),
                    { span: 10 },
                    {
                      default: s(
                        () =>
                          l[0] ||
                          (l[0] = [
                            e('div', { class: 'col-box col-box-1' }, '10', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 12, offset: 2 },
                    {
                      default: s(
                        () =>
                          l[1] ||
                          (l[1] = [
                            e('div', { class: 'col-box col-box-2' }, '12', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              n(t),
              { class: 'mb-4' },
              {
                default: s(() => [
                  o(
                    n(a),
                    { span: 8 },
                    {
                      default: s(
                        () =>
                          l[2] ||
                          (l[2] = [
                            e('div', { class: 'col-box col-box-1' }, '8', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 8, offset: 8 },
                    {
                      default: s(
                        () =>
                          l[3] ||
                          (l[3] = [
                            e('div', { class: 'col-box col-box-2' }, '8', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ],
          64,
        )
      )
    },
  }),
  _ = m(g, [['__scopeId', 'data-v-e659784c']]),
  A = `<template>
  <ver-row class="mb-4">
    <ver-col :span="24"><div class="col-box"></div></ver-col>
  </ver-row>
  <ver-row class="mb-4">
    <ver-col :span="12"><div class="col-box col-box-1"></div></ver-col>
    <ver-col :span="12"><div class="col-box col-box-2"></div></ver-col>
  </ver-row>
  <ver-row class="mb-4">
    <ver-col :span="8"><div class="col-box col-box-1"></div></ver-col>
    <ver-col :span="8"><div class="col-box col-box-2"></div></ver-col>
    <ver-col :span="8"><div class="col-box col-box-1"></div></ver-col>
  </ver-row>
  <ver-row class="mb-4">
    <ver-col :span="6"><div class="col-box col-box-1"></div></ver-col>
    <ver-col :span="6"><div class="col-box col-box-2"></div></ver-col>
    <ver-col :span="6"><div class="col-box col-box-1"></div></ver-col>
    <ver-col :span="6"><div class="col-box col-box-2"></div></ver-col>
  </ver-row>
  <ver-row class="mb-4">
    <ver-col :span="4"><div class="col-box col-box-1"></div></ver-col>
    <ver-col :span="4"><div class="col-box col-box-2"></div></ver-col>
    <ver-col :span="4"><div class="col-box col-box-1"></div></ver-col>
    <ver-col :span="4"><div class="col-box col-box-2"></div></ver-col>
    <ver-col :span="4"><div class="col-box col-box-1"></div></ver-col>
    <ver-col :span="4"><div class="col-box col-box-2"></div></ver-col>
  </ver-row>
</template>

<script setup lang="ts">
import { VerRow, VerCol } from 'versakit-ui'
<\/script>

<style scoped>
.col-box {
  border-radius: 4px;
  min-height: 36px;
  background-color: #99a9bf;
}

.col-box-1 {
  background-color: #d3dce6;
}

.col-box-2 {
  background-color: #e5e9f2;
}

.mb-4 {
  margin-bottom: 1rem;
}
</style>
`,
  B = x({
    __name: 'base',
    setup(b) {
      return (i, l) => (
        r(),
        d(
          p,
          null,
          [
            o(
              n(t),
              { class: 'mb-4' },
              {
                default: s(() => [
                  o(
                    n(a),
                    { span: 24 },
                    {
                      default: s(
                        () =>
                          l[0] ||
                          (l[0] = [e('div', { class: 'col-box' }, null, -1)]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              n(t),
              { class: 'mb-4' },
              {
                default: s(() => [
                  o(
                    n(a),
                    { span: 12 },
                    {
                      default: s(
                        () =>
                          l[1] ||
                          (l[1] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 12 },
                    {
                      default: s(
                        () =>
                          l[2] ||
                          (l[2] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              n(t),
              { class: 'mb-4' },
              {
                default: s(() => [
                  o(
                    n(a),
                    { span: 8 },
                    {
                      default: s(
                        () =>
                          l[3] ||
                          (l[3] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 8 },
                    {
                      default: s(
                        () =>
                          l[4] ||
                          (l[4] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 8 },
                    {
                      default: s(
                        () =>
                          l[5] ||
                          (l[5] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              n(t),
              { class: 'mb-4' },
              {
                default: s(() => [
                  o(
                    n(a),
                    { span: 6 },
                    {
                      default: s(
                        () =>
                          l[6] ||
                          (l[6] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 6 },
                    {
                      default: s(
                        () =>
                          l[7] ||
                          (l[7] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 6 },
                    {
                      default: s(
                        () =>
                          l[8] ||
                          (l[8] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 6 },
                    {
                      default: s(
                        () =>
                          l[9] ||
                          (l[9] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              n(t),
              { class: 'mb-4' },
              {
                default: s(() => [
                  o(
                    n(a),
                    { span: 4 },
                    {
                      default: s(
                        () =>
                          l[10] ||
                          (l[10] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 4 },
                    {
                      default: s(
                        () =>
                          l[11] ||
                          (l[11] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 4 },
                    {
                      default: s(
                        () =>
                          l[12] ||
                          (l[12] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 4 },
                    {
                      default: s(
                        () =>
                          l[13] ||
                          (l[13] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 4 },
                    {
                      default: s(
                        () =>
                          l[14] ||
                          (l[14] = [
                            e('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    n(a),
                    { span: 4 },
                    {
                      default: s(
                        () =>
                          l[15] ||
                          (l[15] = [
                            e('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
          ],
          64,
        )
      )
    },
  }),
  G = m(B, [['__scopeId', 'data-v-2d60484a']]),
  Z = JSON.parse(
    '{"title":"Layout 布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/layout/index.md","filePath":"components/layout/index.md"}',
  ),
  X = { name: 'components/layout/index.md' },
  j = Object.assign(X, {
    setup(b) {
      return (i, l) => {
        const u = V('ClientOnly')
        return (
          r(),
          d('div', null, [
            l[0] ||
              (l[0] = f(
                '<h1 id="layout-布局" tabindex="-1">Layout 布局 <a class="header-anchor" href="#layout-布局" aria-label="Permalink to &quot;Layout 布局&quot;">​</a></h1><p>通过基础的 24 分栏，迅速简便地创建布局。</p><h2 id="基础布局" tabindex="-1">基础布局 <a class="header-anchor" href="#基础布局" aria-label="Permalink to &quot;基础布局&quot;">​</a></h2><p>使用列创建基础网格布局。</p><p>通过 <code>row </code> 和 <code>col </code> 组件，并通过 <code>col </code> 组件的 <code>span </code> 属性我们就可以自由地组合布局。</p>',
                5,
              )),
            o(u, null, {
              default: s(() => [
                o(
                  n(v),
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
                    vueCode: n(A),
                  },
                  { vue: s(() => [o(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[1] ||
              (l[1] = e(
                'h2',
                { id: '分栏间隔', tabindex: '-1' },
                [
                  c('分栏间隔 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#分栏间隔',
                      'aria-label': 'Permalink to "分栏间隔"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[2] ||
              (l[2] = e(
                'p',
                null,
                [
                  c('通过 '),
                  e('code', null, 'offset'),
                  c(' 属性偏移占用指定的列数。'),
                ],
                -1,
              )),
            o(u, null, {
              default: s(() => [
                o(
                  n(v),
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
                    vueCode: n(F),
                  },
                  { vue: s(() => [o(_)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[3] ||
              (l[3] = e(
                'h2',
                { id: '混合布局', tabindex: '-1' },
                [
                  c('混合布局 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#混合布局',
                      'aria-label': 'Permalink to "混合布局"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[4] ||
              (l[4] = e(
                'p',
                null,
                '通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。',
                -1,
              )),
            o(u, null, {
              default: s(() => [
                o(
                  n(v),
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
                    vueCode: n(C),
                  },
                  { vue: s(() => [o(w)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
          ])
        )
      }
    },
  })
export { Z as __pageData, j as default }
