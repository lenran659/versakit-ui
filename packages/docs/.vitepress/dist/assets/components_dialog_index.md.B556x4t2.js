import { h as s, c as m, V as c, q as D } from './chunks/theme.CQRJ-XKT.js'
import {
  d as g,
  m as p,
  a as v,
  j as V,
  p as n,
  v as o,
  z as d,
  u as a,
  e as i,
  _ as x,
  b as y,
  a8 as F,
  S as h,
} from './chunks/framework.DUC_U6YZ.js'
import { R as f } from './chunks/index.BOmkyUj-.js'
const k = `<template>
  <ver-row>
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>

    <VerDialog v-model="dialogVisible">
      <template #title>
        <div class="title">
          <h4>This is a custom header!</h4>
        </div>
      </template>
    </VerDialog>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerRow, VerButton, VerDialog } from 'versakit-ui'

import { ref } from 'vue'

const dialogVisible = ref(false)
<\/script>
`,
  B = g({
    __name: 'header',
    setup(b) {
      const r = p(!1)
      return (l, e) => (
        v(),
        V(a(c), null, {
          default: n(() => [
            o(
              a(s),
              { onClick: e[0] || (e[0] = (t) => (r.value = !0)) },
              {
                default: n(() => e[2] || (e[2] = [d('点击打开对话框')])),
                _: 1,
              },
            ),
            o(
              a(m),
              {
                modelValue: r.value,
                'onUpdate:modelValue': e[1] || (e[1] = (t) => (r.value = t)),
              },
              {
                title: n(
                  () =>
                    e[3] ||
                    (e[3] = [
                      i(
                        'div',
                        { class: 'title' },
                        [i('h4', null, 'This is a custom header!')],
                        -1,
                      ),
                    ]),
                ),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  C = `<template>
  <ver-row>
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>
    <ver-button @click="dialogFromVisible = true">点击打开对话框</ver-button>
    <!-- 普通 -->
    <ver-dialog v-model="dialogVisible" title="测试">
      <p>这是一个信息</p>
    </ver-dialog>
    <!-- 表单 -->
    <ver-dialog v-model="dialogFromVisible" title="表单">
      <div>
        <ver-input />
      </div>
      <template #footer>
        <ver-button>取消</ver-button>
        <ver-button type="primary" @click="dialogFromVisible = false">
          确定
        </ver-button>
      </template>
    </ver-dialog>
  </ver-row>
</template>

<script lang="ts" setup>
import { VerRow, VerButton, VerDialog, VerInput } from 'versakit-ui'

import { ref } from 'vue'

const dialogVisible = ref(false)
const dialogFromVisible = ref(false)
<\/script>

<style scoped>
.t-dialog_footer .t-btn {
  margin-right: 20px;
}

.t-btn + .t-btn {
  margin: 0px 10px;
}
</style>
`,
  A = g({
    __name: 'content',
    setup(b) {
      const r = p(!1),
        l = p(!1)
      return (e, t) => (
        v(),
        V(a(c), null, {
          default: n(() => [
            o(
              a(s),
              { onClick: t[0] || (t[0] = (u) => (r.value = !0)) },
              {
                default: n(() => t[5] || (t[5] = [d('点击打开对话框')])),
                _: 1,
              },
            ),
            o(
              a(s),
              { onClick: t[1] || (t[1] = (u) => (l.value = !0)) },
              {
                default: n(() => t[6] || (t[6] = [d('点击打开对话框')])),
                _: 1,
              },
            ),
            o(
              a(m),
              {
                modelValue: r.value,
                'onUpdate:modelValue': t[2] || (t[2] = (u) => (r.value = u)),
                title: '测试',
              },
              {
                default: n(
                  () => t[7] || (t[7] = [i('p', null, '这是一个信息', -1)]),
                ),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
            o(
              a(m),
              {
                modelValue: l.value,
                'onUpdate:modelValue': t[4] || (t[4] = (u) => (l.value = u)),
                title: '表单',
              },
              {
                footer: n(() => [
                  o(a(s), null, {
                    default: n(() => t[8] || (t[8] = [d('取消')])),
                    _: 1,
                  }),
                  o(
                    a(s),
                    {
                      type: 'primary',
                      onClick: t[3] || (t[3] = (u) => (l.value = !1)),
                    },
                    { default: n(() => t[9] || (t[9] = [d(' 确定 ')])), _: 1 },
                  ),
                ]),
                default: n(() => [i('div', null, [o(a(D))])]),
                _: 1,
              },
              8,
              ['modelValue'],
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  G = x(A, [['__scopeId', 'data-v-ab60efd3']]),
  Z = `<template>
  <div>
    <ver-button @click="dialogVisible = true">点击打开对话框</ver-button>

    <ver-dialog v-model="dialogVisible">
      <span>这是一段信息</span>
      <template #footer>
        <ver-button>取消</ver-button>
        <ver-button type="primary" @click="dialogVisible = false">
          确定
        </ver-button>
      </template>
    </ver-dialog>
  </div>
</template>

<script lang="ts" setup>
import { VerButton, VerDialog } from 'versakit-ui'

import { ref } from 'vue'

const dialogVisible = ref(false)
<\/script>

<style scoped>
.ver-dialog_footer .ver-btn {
  margin-right: 20px;
}
</style>
`,
  X = g({
    __name: 'base',
    setup(b) {
      const r = p(!1)
      return (l, e) => (
        v(),
        y('div', null, [
          o(
            a(s),
            { onClick: e[0] || (e[0] = (t) => (r.value = !0)) },
            { default: n(() => e[3] || (e[3] = [d('点击打开对话框')])), _: 1 },
          ),
          o(
            a(m),
            {
              modelValue: r.value,
              'onUpdate:modelValue': e[2] || (e[2] = (t) => (r.value = t)),
            },
            {
              footer: n(() => [
                o(a(s), null, {
                  default: n(() => e[4] || (e[4] = [d('取消')])),
                  _: 1,
                }),
                o(
                  a(s),
                  {
                    type: 'primary',
                    onClick: e[1] || (e[1] = (t) => (r.value = !1)),
                  },
                  { default: n(() => e[5] || (e[5] = [d(' 确定 ')])), _: 1 },
                ),
              ]),
              default: n(() => [
                e[6] || (e[6] = i('span', null, '这是一段信息', -1)),
              ]),
              _: 1,
            },
            8,
            ['modelValue'],
          ),
        ])
      )
    },
  }),
  w = x(X, [['__scopeId', 'data-v-45e89ba6']]),
  P = JSON.parse(
    '{"title":"Dialog 对话框","description":"","frontmatter":{},"headers":[],"relativePath":"components/dialog/index.md","filePath":"components/dialog/index.md"}',
  ),
  j = { name: 'components/dialog/index.md' },
  T = Object.assign(j, {
    setup(b) {
      return (r, l) => {
        const e = h('ClientOnly')
        return (
          v(),
          y('div', null, [
            l[0] ||
              (l[0] = i(
                'h1',
                { id: 'dialog-对话框', tabindex: '-1' },
                [
                  d('Dialog 对话框 '),
                  i(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#dialog-对话框',
                      'aria-label': 'Permalink to "Dialog 对话框"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[1] ||
              (l[1] = i(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  d('基础用法 '),
                  i(
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
            l[2] ||
              (l[2] = i(
                'p',
                null,
                [
                  d(
                    '在保留当前页面状态的情况下，告知用户并承载相关操作。 绑定 ',
                  ),
                  i('code', null, 'v-model'),
                  d('到一个'),
                  i('code', null, 'Boolean'),
                  d('类型的变量。'),
                ],
                -1,
              )),
            o(e, null, {
              default: n(() => [
                o(
                  a(f),
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
                    vueCode: a(Z),
                  },
                  { vue: n(() => [o(w)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[3] ||
              (l[3] = i(
                'h2',
                { id: '自定义内容', tabindex: '-1' },
                [
                  d('自定义内容 '),
                  i(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自定义内容',
                      'aria-label': 'Permalink to "自定义内容"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[4] || (l[4] = i('p', null, '对话框的内容可以是任何东西。', -1)),
            o(e, null, {
              default: n(() => [
                o(
                  a(f),
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
                    vueCode: a(C),
                  },
                  { vue: n(() => [o(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[5] ||
              (l[5] = i(
                'h2',
                { id: '自定义标题', tabindex: '-1' },
                [
                  d('自定义标题 '),
                  i(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#自定义标题',
                      'aria-label': 'Permalink to "自定义标题"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            l[6] ||
              (l[6] = i(
                'p',
                null,
                [
                  d(
                    '可用于自定义显示标题区域。为了保持可用性，除了使用此插槽外，使用 ',
                  ),
                  i('code', null, 'title'),
                  d('属性来指定哪些元素应该读取为对话框标题。'),
                ],
                -1,
              )),
            o(e, null, {
              default: n(() => [
                o(
                  a(f),
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
                    vueCode: a(k),
                  },
                  { vue: n(() => [o(B)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            l[7] ||
              (l[7] = F(
                '<h2 id="dialog-api" tabindex="-1">Dialog API <a class="header-anchor" href="#dialog-api" aria-label="Permalink to &quot;Dialog API&quot;">​</a></h2><h3 id="dialog-属性" tabindex="-1">Dialog 属性 <a class="header-anchor" href="#dialog-属性" aria-label="Permalink to &quot;Dialog 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>modelValue</code></td><td>绑定值</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>width</code></td><td>dialog的宽度</td><td><code>string</code></td><td><code>30%</code></td></tr><tr><td><code>top</code></td><td>距顶部距离</td><td><code>string</code></td><td><code>15vh</code></td></tr></tbody></table><h3 id="dialog-插槽" tabindex="-1">Dialog 插槽 <a class="header-anchor" href="#dialog-插槽" aria-label="Permalink to &quot;Dialog 插槽&quot;">​</a></h3><table tabindex="0"><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td><code>title</code></td><td>dialog的标题部分</td></tr><tr><td><code>footer</code></td><td>dialog的footer部分</td></tr></tbody></table>',
                5,
              )),
          ])
        )
      }
    },
  })
export { P as __pageData, T as default }
