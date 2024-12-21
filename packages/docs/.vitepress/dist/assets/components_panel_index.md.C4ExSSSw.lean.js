import { N as o } from './chunks/theme.ByYns1Tr.js'
import {
  a as s,
  b as m,
  x as l,
  p as n,
  z as t,
  u as r,
  F as c,
  j as h,
  e as a,
  a9 as b,
  Q as f,
} from './chunks/framework.D7H_7AjQ.js'
import { R as p } from './chunks/index.Li0lFkb-.js'
const v = `<template>\r
  <VerPanel shadow="always">始终</VerPanel>\r
  <VerPanel shadow="hover">悬浮</VerPanel>\r
  <VerPanel shadow="never">永不</VerPanel>\r
</template>\r
\r
<script setup>\r
import { VerPanel } from '@versakit/ui'\r
<\/script>\r
`,
  P = {
    __name: 'shadow',
    setup(d) {
      return (i, e) => (
        s(),
        m(
          c,
          null,
          [
            l(
              r(o),
              { shadow: 'always' },
              { default: n(() => e[0] || (e[0] = [t('始终')])), _: 1 },
            ),
            l(
              r(o),
              { shadow: 'hover' },
              { default: n(() => e[1] || (e[1] = [t('悬浮')])), _: 1 },
            ),
            l(
              r(o),
              { shadow: 'never' },
              { default: n(() => e[2] || (e[2] = [t('永不')])), _: 1 },
            ),
          ],
          64,
        )
      )
    },
  },
  V = `<template>\r
  <VerPanel>基本面板</VerPanel>\r
</template>\r
\r
<script setup>\r
import { VerPanel } from '@versakit/ui'\r
<\/script>\r
`,
  w = {
    __name: 'base',
    setup(d) {
      return (i, e) => (
        s(),
        h(r(o), null, {
          default: n(() => e[0] || (e[0] = [t('基本面板')])),
          _: 1,
        })
      )
    },
  },
  D = JSON.parse(
    '{"title":"Panel 面板","description":"","frontmatter":{},"headers":[],"relativePath":"components/panel/index.md","filePath":"components/panel/index.md"}',
  ),
  x = { name: 'components/panel/index.md' },
  y = Object.assign(x, {
    setup(d) {
      return (i, e) => {
        const u = f('ClientOnly')
        return (
          s(),
          m('div', null, [
            e[0] ||
              (e[0] = a(
                'h1',
                { id: 'panel-面板', tabindex: '-1' },
                [
                  t('Panel 面板 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#panel-面板',
                      'aria-label': 'Permalink to "Panel 面板"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[1] ||
              (e[1] = a(
                'p',
                null,
                '面板通常是指一个独立的容器，用于承载内容。',
                -1,
              )),
            e[2] ||
              (e[2] = a(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  t('基础用法 '),
                  a(
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
            l(u, null, {
              default: n(() => [
                l(
                  r(p),
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
                    vueCode: r(V),
                  },
                  { vue: n(() => [l(w)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[3] ||
              (e[3] = a(
                'h2',
                { id: '阴影', tabindex: '-1' },
                [
                  t('阴影 '),
                  a(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#阴影',
                      'aria-label': 'Permalink to "阴影"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e[4] ||
              (e[4] = a(
                'p',
                null,
                '你可以定义什么时候展示面板的阴影效果。',
                -1,
              )),
            e[5] ||
              (e[5] = a(
                'p',
                null,
                [
                  t('通过'),
                  a('code', null, 'shadow'),
                  t('属性设置卡片阴影出现的时刻。该属性的值可以是: '),
                  a('code', null, 'always'),
                  t('、'),
                  a('code', null, 'hover'),
                  t(' 或 '),
                  a('code', null, 'never'),
                ],
                -1,
              )),
            l(u, null, {
              default: n(() => [
                l(
                  r(p),
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
                    vueCode: r(v),
                  },
                  { vue: n(() => [l(P)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            e[6] ||
              (e[6] = b(
                '<h2 id="panel-api" tabindex="-1">Panel API <a class="header-anchor" href="#panel-api" aria-label="Permalink to &quot;Panel API&quot;">​</a></h2><h3 id="panel-属性" tabindex="-1">Panel 属性 <a class="header-anchor" href="#panel-属性" aria-label="Permalink to &quot;Panel 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>shadow</code></td><td>可以使用shadow来决定卡片拥有阴影的时机</td><td><code>enum</code></td><td><code>always</code></td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { D as __pageData, y as default }
