import { w as e, V as a } from './chunks/theme.ByYns1Tr.js'
import {
  d as v,
  a as c,
  b as d,
  x as o,
  p as r,
  u as s,
  e as n,
  F as p,
  _ as m,
  a9 as f,
  z as t,
  Q as V,
} from './chunks/framework.D7H_7AjQ.js'
import { R as x } from './chunks/index.Li0lFkb-.js'
const C = `<template>\r
  <VerRow class="mb-4">\r
    <VerCol :span="10"><div class="col-box col-box-1"></div></VerCol>\r
    <VerCol :span="14">\r
      <div class="col-box col-box-2"></div>\r
    </VerCol>\r
  </VerRow>\r
  <VerRow class="mb-4">\r
    <VerCol :span="6"><div class="col-box col-box-1"></div></VerCol>\r
    <VerCol :span="8"><div class="col-box col-box-2"></div></VerCol>\r
    <VerCol :span="10"><div class="col-box col-box-1"></div></VerCol>\r
  </VerRow>\r
  <VerRow class="mb-4">\r
    <VerCol :span="4"><div class="col-box col-box-1"></div></VerCol>\r
    <VerCol :span="16"><div class="col-box col-box-2"></div></VerCol>\r
    <VerCol :span="4"><div class="col-box col-box-1"></div></VerCol>\r
  </VerRow>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.col-box {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 4px;\r
  min-height: 36px;\r
  background-color: #99a9bf;\r
}\r
\r
.col-box-1 {\r
  background-color: #d3dce6;\r
}\r
\r
.col-box-2 {\r
  background-color: #e5e9f2;\r
}\r
\r
.mb-4 {\r
  margin-bottom: 1rem;\r
}\r
</style>\r
`,
  w = v({
    __name: 'mix',
    setup(b) {
      return (i, l) => (
        c(),
        d(
          p,
          null,
          [
            o(
              s(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    s(e),
                    { span: 10 },
                    {
                      default: r(
                        () =>
                          l[0] ||
                          (l[0] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 14 },
                    {
                      default: r(
                        () =>
                          l[1] ||
                          (l[1] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
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
              s(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    s(e),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[2] ||
                          (l[2] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[3] ||
                          (l[3] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 10 },
                    {
                      default: r(
                        () =>
                          l[4] ||
                          (l[4] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
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
              s(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    s(e),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[5] ||
                          (l[5] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 16 },
                    {
                      default: r(
                        () =>
                          l[6] ||
                          (l[6] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[7] ||
                          (l[7] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
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
  y = m(w, [['__scopeId', 'data-v-76552a02']]),
  F = `<template>\r
  <VerRow class="mb-4">\r
    <VerCol :span="10"><div class="col-box col-box-1">10</div></VerCol>\r
    <VerCol :span="12" :offset="2">\r
      <div class="col-box col-box-2">12</div>\r
    </VerCol>\r
  </VerRow>\r
  <VerRow class="mb-4">\r
    <VerCol :span="8"><div class="col-box col-box-1">8</div></VerCol>\r
    <VerCol :span="8" :offset="8">\r
      <div class="col-box col-box-2">8</div>\r
    </VerCol>\r
  </VerRow>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.col-box {\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  border-radius: 4px;\r
  min-height: 36px;\r
  background-color: #99a9bf;\r
}\r
\r
.col-box-1 {\r
  background-color: #d3dce6;\r
}\r
\r
.col-box-2 {\r
  background-color: #e5e9f2;\r
}\r
\r
.mb-4 {\r
  margin-bottom: 1rem;\r
}\r
</style>\r
`,
  g = v({
    __name: 'offset',
    setup(b) {
      return (i, l) => (
        c(),
        d(
          p,
          null,
          [
            o(
              s(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    s(e),
                    { span: 10 },
                    {
                      default: r(
                        () =>
                          l[0] ||
                          (l[0] = [
                            n('div', { class: 'col-box col-box-1' }, '10', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 12, offset: 2 },
                    {
                      default: r(
                        () =>
                          l[1] ||
                          (l[1] = [
                            n('div', { class: 'col-box col-box-2' }, '12', -1),
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
              s(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    s(e),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[2] ||
                          (l[2] = [
                            n('div', { class: 'col-box col-box-1' }, '8', -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 8, offset: 8 },
                    {
                      default: r(
                        () =>
                          l[3] ||
                          (l[3] = [
                            n('div', { class: 'col-box col-box-2' }, '8', -1),
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
  _ = m(g, [['__scopeId', 'data-v-9c5cd5f9']]),
  A = `<template>\r
  <ver-row class="mb-4">\r
    <ver-col :span="24"><div class="col-box"></div></ver-col>\r
  </ver-row>\r
  <ver-row class="mb-4">\r
    <ver-col :span="12"><div class="col-box col-box-1"></div></ver-col>\r
    <ver-col :span="12"><div class="col-box col-box-2"></div></ver-col>\r
  </ver-row>\r
  <ver-row class="mb-4">\r
    <ver-col :span="8"><div class="col-box col-box-1"></div></ver-col>\r
    <ver-col :span="8"><div class="col-box col-box-2"></div></ver-col>\r
    <ver-col :span="8"><div class="col-box col-box-1"></div></ver-col>\r
  </ver-row>\r
  <ver-row class="mb-4">\r
    <ver-col :span="6"><div class="col-box col-box-1"></div></ver-col>\r
    <ver-col :span="6"><div class="col-box col-box-2"></div></ver-col>\r
    <ver-col :span="6"><div class="col-box col-box-1"></div></ver-col>\r
    <ver-col :span="6"><div class="col-box col-box-2"></div></ver-col>\r
  </ver-row>\r
  <ver-row class="mb-4">\r
    <ver-col :span="4"><div class="col-box col-box-1"></div></ver-col>\r
    <ver-col :span="4"><div class="col-box col-box-2"></div></ver-col>\r
    <ver-col :span="4"><div class="col-box col-box-1"></div></ver-col>\r
    <ver-col :span="4"><div class="col-box col-box-2"></div></ver-col>\r
    <ver-col :span="4"><div class="col-box col-box-1"></div></ver-col>\r
    <ver-col :span="4"><div class="col-box col-box-2"></div></ver-col>\r
  </ver-row>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.col-box {\r
  border-radius: 4px;\r
  min-height: 36px;\r
  background-color: #99a9bf;\r
}\r
\r
.col-box-1 {\r
  background-color: #d3dce6;\r
}\r
\r
.col-box-2 {\r
  background-color: #e5e9f2;\r
}\r
\r
.mb-4 {\r
  margin-bottom: 1rem;\r
}\r
</style>\r
`,
  B = v({
    __name: 'base',
    setup(b) {
      return (i, l) => (
        c(),
        d(
          p,
          null,
          [
            o(
              s(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    s(e),
                    { span: 24 },
                    {
                      default: r(
                        () =>
                          l[0] ||
                          (l[0] = [n('div', { class: 'col-box' }, null, -1)]),
                      ),
                      _: 1,
                    },
                  ),
                ]),
                _: 1,
              },
            ),
            o(
              s(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    s(e),
                    { span: 12 },
                    {
                      default: r(
                        () =>
                          l[1] ||
                          (l[1] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 12 },
                    {
                      default: r(
                        () =>
                          l[2] ||
                          (l[2] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
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
              s(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    s(e),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[3] ||
                          (l[3] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[4] ||
                          (l[4] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 8 },
                    {
                      default: r(
                        () =>
                          l[5] ||
                          (l[5] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
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
              s(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    s(e),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[6] ||
                          (l[6] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[7] ||
                          (l[7] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[8] ||
                          (l[8] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 6 },
                    {
                      default: r(
                        () =>
                          l[9] ||
                          (l[9] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
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
              s(a),
              { class: 'mb-4' },
              {
                default: r(() => [
                  o(
                    s(e),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[10] ||
                          (l[10] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[11] ||
                          (l[11] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[12] ||
                          (l[12] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[13] ||
                          (l[13] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[14] ||
                          (l[14] = [
                            n('div', { class: 'col-box col-box-1' }, null, -1),
                          ]),
                      ),
                      _: 1,
                    },
                  ),
                  o(
                    s(e),
                    { span: 4 },
                    {
                      default: r(
                        () =>
                          l[15] ||
                          (l[15] = [
                            n('div', { class: 'col-box col-box-2' }, null, -1),
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
  G = m(B, [['__scopeId', 'data-v-15a97aa3']]),
  Z = JSON.parse(
    '{"title":"Layout 布局","description":"","frontmatter":{},"headers":[],"relativePath":"components/layout/index.md","filePath":"components/layout/index.md"}',
  ),
  X = { name: 'components/layout/index.md' },
  j = Object.assign(X, {
    setup(b) {
      return (i, l) => {
        const u = V('ClientOnly')
        return (
          c(),
          d('div', null, [
            l[0] ||
              (l[0] = f(
                '<h1 id="layout-布局" tabindex="-1">Layout 布局 <a class="header-anchor" href="#layout-布局" aria-label="Permalink to &quot;Layout 布局&quot;">​</a></h1><p>通过基础的 24 分栏，迅速简便地创建布局。</p><h2 id="基础布局" tabindex="-1">基础布局 <a class="header-anchor" href="#基础布局" aria-label="Permalink to &quot;基础布局&quot;">​</a></h2><p>使用列创建基础网格布局。</p><p>通过 <code>row </code> 和 <code>col </code> 组件，并通过 <code>col </code> 组件的 <code>span </code> 属性我们就可以自由地组合布局。</p>',
                5,
              )),
            o(u, null, {
              default: r(() => [
                o(
                  s(x),
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
                    vueCode: s(A),
                  },
                  { vue: r(() => [o(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[1] ||
              (l[1] = n(
                'h2',
                { id: '分栏间隔', tabindex: '-1' },
                [
                  t('分栏间隔 '),
                  n(
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
              (l[2] = n(
                'p',
                null,
                [
                  t('通过 '),
                  n('code', null, 'offset'),
                  t(' 属性偏移占用指定的列数。'),
                ],
                -1,
              )),
            o(u, null, {
              default: r(() => [
                o(
                  s(x),
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
                  { vue: r(() => [o(_)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[3] ||
              (l[3] = n(
                'h2',
                { id: '混合布局', tabindex: '-1' },
                [
                  t('混合布局 '),
                  n(
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
              (l[4] = n(
                'p',
                null,
                '通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。',
                -1,
              )),
            o(u, null, {
              default: r(() => [
                o(
                  s(x),
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
                  { vue: r(() => [o(y)]), _: 1 },
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
