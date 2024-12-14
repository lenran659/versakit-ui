import { S as i } from './chunks/theme.CQRJ-XKT.js'
import {
  d,
  a as o,
  b as c,
  e as t,
  v as n,
  u as a,
  _ as m,
  z as u,
  p as s,
  S as b,
} from './chunks/framework.DUC_U6YZ.js'
import { R as v } from './chunks/index.BOmkyUj-.js'
const _ = `<script setup lang="ts">
import { VerBacktop } from 'versakit-ui'
<\/script>

<template>
  <div>
    <div class="box">
      <span>占位图</span>
    </div>
    <div class="box">
      <span>占位图</span>
    </div>

    <ver-backtop icon="arrow-up-circle-sharp"></ver-backtop>
  </div>
</template>

<style scoped lang="scss">
.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  border: 1px dotted #c4c4c4;
}
</style>
`,
  f = d({
    __name: 'base',
    setup(l) {
      return (r, e) => (
        o(),
        c('div', null, [
          e[0] ||
            (e[0] = t(
              'div',
              { class: 'box' },
              [t('span', null, '占位图')],
              -1,
            )),
          e[1] ||
            (e[1] = t(
              'div',
              { class: 'box' },
              [t('span', null, '占位图')],
              -1,
            )),
          n(a(i), { icon: 'arrow-up-circle-sharp' }),
        ])
      )
    },
  }),
  x = m(f, [['__scopeId', 'data-v-3f6ee7d4']]),
  y = JSON.parse(
    '{"title":"Backtop 回到顶部","description":"","frontmatter":{},"headers":[],"relativePath":"components/backtop/index.md","filePath":"components/backtop/index.md"}',
  ),
  h = { name: 'components/backtop/index.md' },
  V = Object.assign(h, {
    setup(l) {
      return (r, e) => {
        const p = b('ClientOnly')
        return (
          o(),
          c('div', null, [
            e[0] ||
              (e[0] = t(
                'h1',
                { id: 'backtop-回到顶部', tabindex: '-1' },
                [
                  u('Backtop 回到顶部 '),
                  t(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#backtop-回到顶部',
                      'aria-label': 'Permalink to "Backtop 回到顶部"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            n(p, null, {
              default: s(() => [
                n(
                  a(v),
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
                    vueCode: a(_),
                  },
                  { vue: s(() => [n(x)]), _: 1 },
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
export { y as __pageData, V as default }
