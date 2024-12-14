import { q as u, y as s, h as p, n as f } from './chunks/theme.CQRJ-XKT.js'
import {
  d as b,
  aa as V,
  a as i,
  j as h,
  p as n,
  v as t,
  u as e,
  z as l,
  b as F,
  e as a,
  a8 as v,
  S as I,
} from './chunks/framework.DUC_U6YZ.js'
import { R as _ } from './chunks/index.BOmkyUj-.js'
const x = `<template>
  <VerForm :model="form">
    <VerFormItem label="ID">
      <VerInput v-model="form.ID" />
    </VerFormItem>
    <VerFormItem label="Label">
      <VerInput v-model="form.label" />
    </VerFormItem>
    <VerFormItem>
      <VerButton type="primary">Submit</VerButton>
    </VerFormItem>
  </VerForm>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { VerForm, VerFormItem, VerInput, VerButton } from 'versakit-ui'

const form = reactive({
  ID: '',
  label: '',
})
<\/script>

<style scoped></style>
`,
  y = b({
    __name: 'base',
    setup(c) {
      const d = V({ ID: '', label: '' })
      return (r, o) => (
        i(),
        h(
          e(f),
          { model: d },
          {
            default: n(() => [
              t(
                e(s),
                { label: 'ID' },
                {
                  default: n(() => [
                    t(
                      e(u),
                      {
                        modelValue: d.ID,
                        'onUpdate:modelValue':
                          o[0] || (o[0] = (m) => (d.ID = m)),
                      },
                      null,
                      8,
                      ['modelValue'],
                    ),
                  ]),
                  _: 1,
                },
              ),
              t(
                e(s),
                { label: 'Label' },
                {
                  default: n(() => [
                    t(
                      e(u),
                      {
                        modelValue: d.label,
                        'onUpdate:modelValue':
                          o[1] || (o[1] = (m) => (d.label = m)),
                      },
                      null,
                      8,
                      ['modelValue'],
                    ),
                  ]),
                  _: 1,
                },
              ),
              t(e(s), null, {
                default: n(() => [
                  t(
                    e(p),
                    { type: 'primary' },
                    { default: n(() => o[2] || (o[2] = [l('Submit')])), _: 1 },
                  ),
                ]),
                _: 1,
              }),
            ]),
            _: 1,
          },
          8,
          ['model'],
        )
      )
    },
  }),
  k = JSON.parse(
    '{"title":"Form 表单","description":"","frontmatter":{},"headers":[],"relativePath":"components/form/index.md","filePath":"components/form/index.md"}',
  ),
  D = { name: 'components/form/index.md' },
  q = Object.assign(D, {
    setup(c) {
      return (d, r) => {
        const o = I('ClientOnly')
        return (
          i(),
          F('div', null, [
            r[0] ||
              (r[0] = a(
                'h1',
                { id: 'form-表单', tabindex: '-1' },
                [
                  l('Form 表单 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#form-表单',
                      'aria-label': 'Permalink to "Form 表单"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            r[1] ||
              (r[1] = a(
                'p',
                null,
                [
                  l('表单包含 '),
                  a('code', null, '输入框'),
                  l(', '),
                  a('code', null, '单选框'),
                  l(', '),
                  a('code', null, '下拉选择'),
                  l(', '),
                  a('code', null, '多选框'),
                  l(
                    ' 等用户输入的组件。 使用表单，您可以收集、验证和提交数据。',
                  ),
                ],
                -1,
              )),
            t(o, null, {
              default: n(() => [
                t(
                  e(_),
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
                    vueCode: e(x),
                  },
                  { vue: n(() => [t(y)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            r[2] ||
              (r[2] = v(
                '<h2 id="form-api" tabindex="-1">Form API <a class="header-anchor" href="#form-api" aria-label="Permalink to &quot;Form API&quot;">​</a></h2><h3 id="form-属性" tabindex="-1">Form 属性 <a class="header-anchor" href="#form-属性" aria-label="Permalink to &quot;Form 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>module</code></td><td>表单数据</td><td><code>object</code></td><td><code>空</code></td></tr><tr><td><code>labelWidth</code></td><td>标签宽度</td><td><code>string</code></td><td><code>80px</code></td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { k as __pageData, q as default }
