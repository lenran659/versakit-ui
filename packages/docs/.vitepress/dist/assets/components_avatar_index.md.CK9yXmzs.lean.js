import { W as a, B as f, w as i, V as _ } from './chunks/theme.ByYns1Tr.js'
import {
  d as p,
  aa as x,
  ab as k,
  a as l,
  b as m,
  F,
  B as A,
  e,
  v as V,
  x as r,
  u as s,
  _ as u,
  p as t,
  j as g,
  z as n,
  a9 as y,
  Q as q,
} from './chunks/framework.D7H_7AjQ.js'
import { R as b } from './chunks/index.Li0lFkb-.js'
const X = `<template>\r
  <div class="demo">\r
    <div v-for="fit in fits" :key="fit" class="block">\r
      <div class="title">{{ fit }}</div>\r
      <ver-avatar shape="square" :size="100" :fit="fit" :src="url" />\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { reactive, toRefs } from 'vue'\r
import { VerAvatar } from '@versakit/ui'\r
\r
const state = reactive({\r
  fits: ['fill', 'contain', 'cover', 'none'],\r
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',\r
})\r
const { fits, url } = toRefs(state)\r
<\/script>\r
\r
<style scoped>\r
.demo {\r
  display: flex;\r
  justify-content: center;\r
  align-items: center;\r
}\r
.title {\r
  width: 100%;\r
  text-align: center;\r
}\r
.block {\r
  margin-left: 15px;\r
  margin-right: 15px;\r
}\r
</style>\r
`,
  B = { class: 'demo' },
  G = { class: 'title' },
  z = p({
    __name: 'fit',
    setup(v) {
      const d = x({
          fits: ['fill', 'contain', 'cover', 'none'],
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        }),
        { fits: c, url: o } = k(d)
      return (Ve, ye) => (
        l(),
        m('div', B, [
          (l(!0),
          m(
            F,
            null,
            A(
              s(c),
              (h) => (
                l(),
                m('div', { key: h, class: 'block' }, [
                  e('div', G, V(h), 1),
                  r(
                    s(a),
                    { shape: 'square', size: 100, fit: h, src: s(o) },
                    null,
                    8,
                    ['fit', 'src'],
                  ),
                ])
              ),
            ),
            128,
          )),
        ])
      )
    },
  }),
  D = u(z, [['__scopeId', 'data-v-26d7b651']]),
  j = `<template>\r
  <div class="demo-basic">\r
    <div class="demo-error">\r
      <ver-avatar\r
        src="http://wrong"\r
        fallback="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
      />\r
    </div>\r
    <div class="demo-error">\r
      <ver-avatar src="http://wrong">\r
        <template #error>\r
          <ver-icon name="card-image" />\r
        </template>\r
      </ver-avatar>\r
    </div>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerAvatar, VerIcon } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.demo-basic {\r
  display: flex;\r
}\r
.demo-error {\r
  margin: 5px;\r
}\r
</style>\r
`,
  w = { class: 'demo-basic' },
  C = { class: 'demo-error' },
  $ = { class: 'demo-error' },
  R = p({
    __name: 'error',
    setup(v) {
      return (d, c) => (
        l(),
        m('div', w, [
          e('div', C, [
            r(s(a), {
              src: 'http://wrong',
              fallback:
                'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            }),
          ]),
          e('div', $, [
            r(
              s(a),
              { src: 'http://wrong' },
              { error: t(() => [r(s(f), { name: 'card-image' })]), _: 1 },
            ),
          ]),
        ])
      )
    },
  }),
  M = u(R, [['__scopeId', 'data-v-eedbafa5']]),
  L = `<template>\r
  <ver-row>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">circle</div>\r
        <div class="demo-basic--circle">\r
          <div class="block">\r
            <ver-avatar src="../../assets/example.jpg" />\r
          </div>\r
          <div class="block">\r
            <ver-avatar>user</ver-avatar>\r
          </div>\r
          <div class="block">\r
            <ver-avatar>\r
              <VerIcon name="card-image" />\r
            </ver-avatar>\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">square</div>\r
        <div class="demo-basic--square">\r
          <div class="block">\r
            <ver-avatar src="../../assets/example.jpg" shape="square" />\r
          </div>\r
          <div class="block">\r
            <ver-avatar shape="square">user</ver-avatar>\r
          </div>\r
          <div class="block">\r
            <ver-avatar shape="square">\r
              <VerIcon name="card-image" />\r
            </ver-avatar>\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
\r
<script setup lang="ts">\r
import { VerAvatar, VerIcon, VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.demo-basic {\r
  text-align: center;\r
}\r
\r
.demo-basic .sub-title {\r
  margin-bottom: 10px;\r
  font-size: 14px;\r
  color: #909399;\r
}\r
\r
.demo-basic .demo-basic--circle,\r
.demo-basic .demo-basic--square {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.demo-basic .block:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
\r
.demo-basic .block {\r
  flex: 1;\r
}\r
\r
.demo-basic .el-col:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
</style>\r
`,
  Z = { class: 'demo-basic' },
  N = { class: 'demo-basic--circle' },
  T = { class: 'block' },
  Q = { class: 'block' },
  S = { class: 'block' },
  W = { class: 'demo-basic' },
  Y = { class: 'demo-basic--square' },
  I = { class: 'block' },
  E = { class: 'block' },
  P = { class: 'block' },
  U = p({
    __name: 'src',
    setup(v) {
      return (d, c) => (
        l(),
        g(s(_), null, {
          default: t(() => [
            r(
              s(i),
              { span: 12 },
              {
                default: t(() => [
                  e('div', Z, [
                    c[1] ||
                      (c[1] = e('div', { class: 'sub-title' }, 'circle', -1)),
                    e('div', N, [
                      e('div', T, [
                        r(s(a), { src: '../../assets/example.jpg' }),
                      ]),
                      e('div', Q, [
                        r(s(a), null, {
                          default: t(() => c[0] || (c[0] = [n('user')])),
                          _: 1,
                        }),
                      ]),
                      e('div', S, [
                        r(s(a), null, {
                          default: t(() => [r(s(f), { name: 'card-image' })]),
                          _: 1,
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
            r(
              s(i),
              { span: 12 },
              {
                default: t(() => [
                  e('div', W, [
                    c[3] ||
                      (c[3] = e('div', { class: 'sub-title' }, 'square', -1)),
                    e('div', Y, [
                      e('div', I, [
                        r(s(a), {
                          src: '../../assets/example.jpg',
                          shape: 'square',
                        }),
                      ]),
                      e('div', E, [
                        r(
                          s(a),
                          { shape: 'square' },
                          {
                            default: t(() => c[2] || (c[2] = [n('user')])),
                            _: 1,
                          },
                        ),
                      ]),
                      e('div', P, [
                        r(
                          s(a),
                          { shape: 'square' },
                          {
                            default: t(() => [r(s(f), { name: 'card-image' })]),
                            _: 1,
                          },
                        ),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  O = u(U, [['__scopeId', 'data-v-3dde9ebd']]),
  J = `<template>\r
  <ver-row>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">circle</div>\r
        <div class="demo-basic--circle">\r
          <div class="block">\r
            <ver-avatar\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              size="sm"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              size="lg"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">square</div>\r
        <div class="demo-basic--square">\r
          <div class="block">\r
            <ver-avatar\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
              size="xs"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
              size="sm"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
              size="md"\r
            />\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerAvatar, VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.demo-basic {\r
  text-align: center;\r
}\r
\r
.demo-basic .sub-title {\r
  margin-bottom: 10px;\r
  font-size: 14px;\r
  color: #909399;\r
}\r
\r
.demo-basic .demo-basic--circle,\r
.demo-basic .demo-basic--square {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
\r
.demo-basic .block:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
\r
.demo-basic .block {\r
  flex: 1;\r
}\r
\r
.demo-basic .el-col:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
</style>\r
`,
  H = { class: 'demo-basic' },
  K = { class: 'demo-basic--circle' },
  ee = { class: 'block' },
  re = { class: 'block' },
  se = { class: 'block' },
  ce = { class: 'demo-basic' },
  te = { class: 'demo-basic--square' },
  ae = { class: 'block' },
  ne = { class: 'block' },
  le = { class: 'block' },
  oe = p({
    __name: 'size',
    setup(v) {
      return (d, c) => (
        l(),
        g(s(_), null, {
          default: t(() => [
            r(
              s(i),
              { span: 12 },
              {
                default: t(() => [
                  e('div', H, [
                    c[0] ||
                      (c[0] = e('div', { class: 'sub-title' }, 'circle', -1)),
                    e('div', K, [
                      e('div', ee, [
                        r(s(a), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          size: 'sm',
                        }),
                      ]),
                      e('div', re, [
                        r(s(a), {
                          size: 'lg',
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', se, [
                        r(s(a), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
            r(
              s(i),
              { span: 12 },
              {
                default: t(() => [
                  e('div', ce, [
                    c[1] ||
                      (c[1] = e('div', { class: 'sub-title' }, 'square', -1)),
                    e('div', te, [
                      e('div', ae, [
                        r(s(a), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                          size: 'xs',
                        }),
                      ]),
                      e('div', ne, [
                        r(s(a), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                          size: 'sm',
                        }),
                      ]),
                      e('div', le, [
                        r(s(a), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                          size: 'md',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  de = u(oe, [['__scopeId', 'data-v-58061aaa']]),
  ie = `<template>\r
  <ver-row>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">circle</div>\r
        <div class="demo-basic--circle">\r
          <div class="block">\r
            <ver-avatar\r
              :size="24"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              :size="36"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
            />\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
    <ver-col :span="12">\r
      <div class="demo-basic">\r
        <div class="sub-title">square</div>\r
        <div class="demo-basic--square">\r
          <div class="block">\r
            <ver-avatar\r
              :size="24"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              :size="36"\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
          <div class="block">\r
            <ver-avatar\r
              src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"\r
              shape="square"\r
            />\r
          </div>\r
        </div>\r
      </div>\r
    </ver-col>\r
  </ver-row>\r
</template>\r
\r
<script lang="ts" setup>\r
import { VerAvatar, VerRow, VerCol } from '@versakit/ui'\r
<\/script>\r
\r
<style scoped>\r
.demo-basic {\r
  text-align: center;\r
}\r
.demo-basic .sub-title {\r
  margin-bottom: 10px;\r
  font-size: 14px;\r
  color: #909399;\r
}\r
.demo-basic .demo-basic--circle,\r
.demo-basic .demo-basic--square {\r
  display: flex;\r
  justify-content: space-between;\r
  align-items: center;\r
}\r
.demo-basic .block:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
.demo-basic .block {\r
  flex: 1;\r
}\r
.demo-basic .el-col:not(:last-child) {\r
  border-right: 1px solid #dcdfe6;\r
}\r
</style>\r
`,
  ve = { class: 'demo-basic' },
  be = { class: 'demo-basic--circle' },
  me = { class: 'block' },
  pe = { class: 'block' },
  ue = { class: 'block' },
  he = { class: 'demo-basic' },
  fe = { class: 'demo-basic--square' },
  _e = { class: 'block' },
  ge = { class: 'block' },
  xe = { class: 'block' },
  ke = p({
    __name: 'base',
    setup(v) {
      return (d, c) => (
        l(),
        g(s(_), null, {
          default: t(() => [
            r(
              s(i),
              { span: 12 },
              {
                default: t(() => [
                  e('div', ve, [
                    c[0] ||
                      (c[0] = e('div', { class: 'sub-title' }, 'circle', -1)),
                    e('div', be, [
                      e('div', me, [
                        r(s(a), {
                          size: 24,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', pe, [
                        r(s(a), {
                          size: 36,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                      e('div', ue, [
                        r(s(a), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
            r(
              s(i),
              { span: 12 },
              {
                default: t(() => [
                  e('div', he, [
                    c[1] ||
                      (c[1] = e('div', { class: 'sub-title' }, 'square', -1)),
                    e('div', fe, [
                      e('div', _e, [
                        r(s(a), {
                          size: 24,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', ge, [
                        r(s(a), {
                          size: 36,
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                      e('div', xe, [
                        r(s(a), {
                          src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
                          shape: 'square',
                        }),
                      ]),
                    ]),
                  ]),
                ]),
                _: 1,
              },
            ),
          ]),
          _: 1,
        })
      )
    },
  }),
  Fe = u(ke, [['__scopeId', 'data-v-e928abf3']]),
  Ge = JSON.parse(
    '{"title":"Avatar 头像","description":"","frontmatter":{},"headers":[],"relativePath":"components/avatar/index.md","filePath":"components/avatar/index.md"}',
  ),
  Ae = { name: 'components/avatar/index.md' },
  ze = Object.assign(Ae, {
    setup(v) {
      return (d, c) => {
        const o = q('ClientOnly')
        return (
          l(),
          m('div', null, [
            c[0] ||
              (c[0] = e(
                'h1',
                { id: 'avatar-头像', tabindex: '-1' },
                [
                  n('Avatar 头像 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#avatar-头像',
                      'aria-label': 'Permalink to "Avatar 头像"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            c[1] ||
              (c[1] = e(
                'p',
                null,
                'Avatar 组件可以用来代表人物或对象， 支持使用图片、图标或者文字作为 Avatar。',
                -1,
              )),
            c[2] ||
              (c[2] = e(
                'h2',
                { id: '基础用法', tabindex: '-1' },
                [
                  n('基础用法 '),
                  e(
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
            c[3] ||
              (c[3] = e(
                'p',
                null,
                [
                  n(' 使用 '),
                  e('code', null, 'shape'),
                  n(' 和 '),
                  e('code', null, 'size'),
                  n(' 属性来设置Avatar的形状和大小。 '),
                ],
                -1,
              )),
            r(o, null, {
              default: t(() => [
                r(
                  s(b),
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
                    vueCode: s(ie),
                  },
                  { vue: t(() => [r(Fe)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            c[4] ||
              (c[4] = e(
                'h2',
                { id: '头像大小', tabindex: '-1' },
                [
                  n('头像大小 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#头像大小',
                      'aria-label': 'Permalink to "头像大小"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            c[5] ||
              (c[5] = e(
                'p',
                null,
                '图片的size也支持使用string类型来设置尺寸大小，例如：xs,sm,md,lg',
                -1,
              )),
            r(o, null, {
              default: t(() => [
                r(
                  s(b),
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
                    vueCode: s(J),
                  },
                  { vue: t(() => [r(de)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            c[6] ||
              (c[6] = e(
                'h2',
                { id: '展示类型', tabindex: '-1' },
                [
                  n('展示类型 '),
                  e(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#展示类型',
                      'aria-label': 'Permalink to "展示类型"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            c[7] ||
              (c[7] = e('p', null, ' 支持使用图片或者文字作为 Avatar。 ', -1)),
            r(o, null, {
              default: t(() => [
                r(
                  s(b),
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
                    vueCode: s(L),
                  },
                  { vue: t(() => [r(O)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            c[8] ||
              (c[8] = e(
                'p',
                null,
                '图片加载失败时，可以使用error属性触发函数，默认触发图片填充效果。',
                -1,
              )),
            r(o, null, {
              default: t(() => [
                r(
                  s(b),
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
                    vueCode: s(j),
                  },
                  { vue: t(() => [r(M)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            c[9] ||
              (c[9] = e(
                'p',
                null,
                '当使用图片作为用户头像时，使用object-fit属性设置该图片如何在容器中展示。',
                -1,
              )),
            r(o, null, {
              default: t(() => [
                r(
                  s(b),
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
                    vueCode: s(X),
                  },
                  { vue: t(() => [r(D)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            c[10] ||
              (c[10] = y(
                '<h2 id="avatar-api" tabindex="-1">Avatar API <a class="header-anchor" href="#avatar-api" aria-label="Permalink to &quot;Avatar API&quot;">​</a></h2><h3 id="avatar-属性" tabindex="-1">Avatar 属性 <a class="header-anchor" href="#avatar-属性" aria-label="Permalink to &quot;Avatar 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>src</code></td><td>图片资源的路径</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>size</code></td><td>尺寸大小</td><td><code>number</code> <code>string</code></td><td><code>50</code></td></tr><tr><td><code>shape</code></td><td>头像的形状，例如<code>square</code>、<code>circle</code></td><td><code>string</code></td><td><code>circle</code></td></tr><tr><td><code>fit</code></td><td>头像的填充效果，例如<code>fill</code>、<code>contain</code>、<code>cover</code></td><td><code>string</code></td><td><code>cover</code></td></tr><tr><td><code>callback</code></td><td>图片展示失败时展示的图片</td><td><code>string</code></td><td><code>imageErrorHandler()</code></td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { Ge as __pageData, ze as default }
