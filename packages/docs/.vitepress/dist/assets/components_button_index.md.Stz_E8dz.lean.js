import { F as s, V as l } from './chunks/theme.ByYns1Tr.js'
import {
  d as y,
  a as u,
  j as b,
  p as n,
  x as e,
  u as r,
  q as f,
  z as o,
  ac as V,
  _ as c,
  b as v,
  F as g,
  e as d,
  a9 as B,
  Q as x,
} from './chunks/framework.D7H_7AjQ.js'
import { R as m } from './chunks/index.Li0lFkb-.js'
const w = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row>\r
    <VerButton style="margin: 0.5rem" circle icon="search" />\r
    <VerButton style="margin: 0.5rem" circle type="success" icon="check" />\r
    <VerButton style="margin: 0.5rem" circle type="error" icon="trash" />\r
  </ver-row>\r
</template>\r
`,
  A = y({
    __name: 'icon',
    setup(i) {
      return (p, t) => (
        u(),
        b(r(l), null, {
          default: n(() => [
            e(r(s), {
              style: { margin: '0.5rem' },
              circle: '',
              icon: 'search',
            }),
            e(r(s), {
              style: { margin: '0.5rem' },
              circle: '',
              type: 'success',
              icon: 'check',
            }),
            e(r(s), {
              style: { margin: '0.5rem' },
              circle: '',
              type: 'error',
              icon: 'trash',
            }),
          ]),
          _: 1,
        })
      )
    },
  }),
  F = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row class="mb-4">\r
    <ver-button v-ripple type="primary">按 钮</ver-button>\r
    <ver-button v-ripple type="success">按 钮</ver-button>\r
    <ver-button v-ripple type="info">按 钮</ver-button>\r
    <ver-button v-ripple type="warning">按 钮</ver-button>\r
    <ver-button v-ripple type="error">按 钮</ver-button>\r
  </ver-row>\r
</template>\r
\r
<style scoped lang="scss">\r
.mb-4 {\r
  display: flex;\r
  justify-content: space-between;\r
  margin-bottom: 1rem;\r
}\r
\r
.ver-btn + .ver-btn {\r
  margin: 0px 6px;\r
}\r
</style>\r
`,
  D = y({
    __name: 'ripple',
    setup(i) {
      return (p, t) => {
        const a = V('ripple')
        return (
          u(),
          b(
            r(l),
            { class: 'mb-4' },
            {
              default: n(() => [
                f(
                  (u(),
                  b(
                    r(s),
                    { type: 'primary' },
                    { default: n(() => t[0] || (t[0] = [o('按 钮')])), _: 1 },
                  )),
                  [[a]],
                ),
                f(
                  (u(),
                  b(
                    r(s),
                    { type: 'success' },
                    { default: n(() => t[1] || (t[1] = [o('按 钮')])), _: 1 },
                  )),
                  [[a]],
                ),
                f(
                  (u(),
                  b(
                    r(s),
                    { type: 'info' },
                    { default: n(() => t[2] || (t[2] = [o('按 钮')])), _: 1 },
                  )),
                  [[a]],
                ),
                f(
                  (u(),
                  b(
                    r(s),
                    { type: 'warning' },
                    { default: n(() => t[3] || (t[3] = [o('按 钮')])), _: 1 },
                  )),
                  [[a]],
                ),
                f(
                  (u(),
                  b(
                    r(s),
                    { type: 'error' },
                    { default: n(() => t[4] || (t[4] = [o('按 钮')])), _: 1 },
                  )),
                  [[a]],
                ),
              ]),
              _: 1,
            },
          )
        )
      }
    },
  }),
  G = c(D, [['__scopeId', 'data-v-715c3514']]),
  C = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <VerRow>\r
    <VerButton style="margin: 0.5rem" shade>none</VerButton>\r
    <VerButton style="margin: 0.5rem" shade type="primary">primary</VerButton>\r
    <VerButton style="margin: 0.5rem" shade type="success">success</VerButton>\r
    <VerButton style="margin: 0.5rem" shade type="info">info</VerButton>\r
    <VerButton style="margin: 0.5rem" shade type="warning">warning</VerButton>\r
    <VerButton style="margin: 0.5rem" shade type="error">danger</VerButton>\r
  </VerRow>\r
\r
  <VerRow>\r
    <VerButton style="margin: 0.5rem" disabled shade>none</VerButton>\r
    <VerButton style="margin: 0.5rem" disabled shade type="primary">\r
      primary\r
    </VerButton>\r
    <VerButton style="margin: 0.5rem" disabled shade type="success">\r
      success\r
    </VerButton>\r
    <VerButton style="margin: 0.5rem" disabled shade type="info">\r
      info\r
    </VerButton>\r
    <VerButton style="margin: 0.5rem" disabled shade type="warning">\r
      warning\r
    </VerButton>\r
    <VerButton style="margin: 0.5rem" disabled shade type="error">\r
      danger\r
    </VerButton>\r
  </VerRow>\r
</template>\r
\r
<style></style>\r
`,
  X = y({
    __name: 'shadow',
    setup(i) {
      return (p, t) => (
        u(),
        v(
          g,
          null,
          [
            e(r(l), null, {
              default: n(() => [
                e(
                  r(s),
                  { style: { margin: '0.5rem' }, shade: '' },
                  { default: n(() => t[0] || (t[0] = [o('none')])), _: 1 },
                ),
                e(
                  r(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'primary' },
                  { default: n(() => t[1] || (t[1] = [o('primary')])), _: 1 },
                ),
                e(
                  r(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'success' },
                  { default: n(() => t[2] || (t[2] = [o('success')])), _: 1 },
                ),
                e(
                  r(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'info' },
                  { default: n(() => t[3] || (t[3] = [o('info')])), _: 1 },
                ),
                e(
                  r(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'warning' },
                  { default: n(() => t[4] || (t[4] = [o('warning')])), _: 1 },
                ),
                e(
                  r(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'error' },
                  { default: n(() => t[5] || (t[5] = [o('danger')])), _: 1 },
                ),
              ]),
              _: 1,
            }),
            e(r(l), null, {
              default: n(() => [
                e(
                  r(s),
                  { style: { margin: '0.5rem' }, disabled: '', shade: '' },
                  { default: n(() => t[6] || (t[6] = [o('none')])), _: 1 },
                ),
                e(
                  r(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'primary',
                  },
                  { default: n(() => t[7] || (t[7] = [o(' primary ')])), _: 1 },
                ),
                e(
                  r(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'success',
                  },
                  { default: n(() => t[8] || (t[8] = [o(' success ')])), _: 1 },
                ),
                e(
                  r(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'info',
                  },
                  { default: n(() => t[9] || (t[9] = [o(' info ')])), _: 1 },
                ),
                e(
                  r(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'warning',
                  },
                  {
                    default: n(() => t[10] || (t[10] = [o(' warning ')])),
                    _: 1,
                  },
                ),
                e(
                  r(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'error',
                  },
                  {
                    default: n(() => t[11] || (t[11] = [o(' danger ')])),
                    _: 1,
                  },
                ),
              ]),
              _: 1,
            }),
          ],
          64,
        )
      )
    },
  }),
  R = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <VerRow>\r
    <VerButton text>none</VerButton>\r
    <VerButton text type="primary">primary</VerButton>\r
    <VerButton text type="success">success</VerButton>\r
    <VerButton text type="info">info</VerButton>\r
    <VerButton text type="warning">warning</VerButton>\r
    <VerButton text type="error">error</VerButton>\r
  </VerRow>\r
  <VerRow>\r
    <VerButton disabled text>none</VerButton>\r
    <VerButton disabled text type="primary">primary</VerButton>\r
    <VerButton disabled text type="success">success</VerButton>\r
    <VerButton disabled text type="info">info</VerButton>\r
    <VerButton disabled text type="warning">warning</VerButton>\r
    <VerButton disabled text type="error">error</VerButton>\r
  </VerRow>\r
</template>\r
`,
  k = y({
    __name: 'text',
    setup(i) {
      return (p, t) => (
        u(),
        v(
          g,
          null,
          [
            e(r(l), null, {
              default: n(() => [
                e(
                  r(s),
                  { text: '' },
                  { default: n(() => t[0] || (t[0] = [o('none')])), _: 1 },
                ),
                e(
                  r(s),
                  { text: '', type: 'primary' },
                  { default: n(() => t[1] || (t[1] = [o('primary')])), _: 1 },
                ),
                e(
                  r(s),
                  { text: '', type: 'success' },
                  { default: n(() => t[2] || (t[2] = [o('success')])), _: 1 },
                ),
                e(
                  r(s),
                  { text: '', type: 'info' },
                  { default: n(() => t[3] || (t[3] = [o('info')])), _: 1 },
                ),
                e(
                  r(s),
                  { text: '', type: 'warning' },
                  { default: n(() => t[4] || (t[4] = [o('warning')])), _: 1 },
                ),
                e(
                  r(s),
                  { text: '', type: 'error' },
                  { default: n(() => t[5] || (t[5] = [o('error')])), _: 1 },
                ),
              ]),
              _: 1,
            }),
            e(r(l), null, {
              default: n(() => [
                e(
                  r(s),
                  { disabled: '', text: '' },
                  { default: n(() => t[6] || (t[6] = [o('none')])), _: 1 },
                ),
                e(
                  r(s),
                  { disabled: '', text: '', type: 'primary' },
                  { default: n(() => t[7] || (t[7] = [o('primary')])), _: 1 },
                ),
                e(
                  r(s),
                  { disabled: '', text: '', type: 'success' },
                  { default: n(() => t[8] || (t[8] = [o('success')])), _: 1 },
                ),
                e(
                  r(s),
                  { disabled: '', text: '', type: 'info' },
                  { default: n(() => t[9] || (t[9] = [o('info')])), _: 1 },
                ),
                e(
                  r(s),
                  { disabled: '', text: '', type: 'warning' },
                  { default: n(() => t[10] || (t[10] = [o('warning')])), _: 1 },
                ),
                e(
                  r(s),
                  { disabled: '', text: '', type: 'error' },
                  { default: n(() => t[11] || (t[11] = [o('error')])), _: 1 },
                ),
              ]),
              _: 1,
            }),
          ],
          64,
        )
      )
    },
  }),
  j = `<script setup lang="ts">\r
import { VerButton } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <div>\r
    <span class="mx-2">\r
      <ver-button class="mx-2" type="primary" size="lg">主要按钮</ver-button>\r
    </span>\r
    <span class="mx-2">\r
      <ver-button class="mx-2" type="primary">主要按钮</ver-button>\r
    </span>\r
    <span class="mx-2">\r
      <ver-button class="mx-2" type="primary" size="sm">主要按钮</ver-button>\r
    </span>\r
    <span class="mx-2">\r
      <ver-button class="mx-2" type="primary" size="sm">主要按钮</ver-button>\r
    </span>\r
\r
    <span class="mx-2">\r
      <ver-button class="mx-2" type="primary" size="xs">主要按钮</ver-button>\r
    </span>\r
  </div>\r
</template>\r
\r
<style>\r
.mx-2 {\r
  margin: 0 6px;\r
}\r
</style>\r
`,
  Z = { class: 'mx-2' },
  _ = { class: 'mx-2' },
  z = { class: 'mx-2' },
  L = { class: 'mx-2' },
  M = { class: 'mx-2' },
  N = y({
    __name: 'size',
    setup(i) {
      return (p, t) => (
        u(),
        v('div', null, [
          d('span', Z, [
            e(
              r(s),
              { class: 'mx-2', type: 'primary', size: 'lg' },
              { default: n(() => t[0] || (t[0] = [o('主要按钮')])), _: 1 },
            ),
          ]),
          d('span', _, [
            e(
              r(s),
              { class: 'mx-2', type: 'primary' },
              { default: n(() => t[1] || (t[1] = [o('主要按钮')])), _: 1 },
            ),
          ]),
          d('span', z, [
            e(
              r(s),
              { class: 'mx-2', type: 'primary', size: 'sm' },
              { default: n(() => t[2] || (t[2] = [o('主要按钮')])), _: 1 },
            ),
          ]),
          d('span', L, [
            e(
              r(s),
              { class: 'mx-2', type: 'primary', size: 'sm' },
              { default: n(() => t[3] || (t[3] = [o('主要按钮')])), _: 1 },
            ),
          ]),
          d('span', M, [
            e(
              r(s),
              { class: 'mx-2', type: 'primary', size: 'xs' },
              { default: n(() => t[4] || (t[4] = [o('主要按钮')])), _: 1 },
            ),
          ]),
        ])
      )
    },
  }),
  T = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="primary">按 钮</ver-button>\r
    <ver-button disabled plain type="primary">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="success">按 钮</ver-button>\r
    <ver-button disabled plain round type="success">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="info">按 钮</ver-button>\r
    <ver-button disabled plain round type="info">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="warning">按 钮</ver-button>\r
    <ver-button disabled plain round type="warning">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button disabled type="error">按 钮</ver-button>\r
    <ver-button disabled plain round type="error">按 钮</ver-button>\r
  </ver-row>\r
</template>\r
\r
<style scoped>\r
.mb-4 {\r
  display: flex;\r
  align-items: center;\r
  margin-bottom: 1rem;\r
}\r
.ver-btn + .ver-btn {\r
  margin: 0px 10px;\r
}\r
</style>\r
`,
  q = y({
    __name: 'disabled',
    setup(i) {
      return (p, t) => (
        u(),
        v(
          g,
          null,
          [
            e(
              r(l),
              { class: 'mb-4' },
              {
                default: n(() => [
                  e(
                    r(s),
                    { disabled: '', type: 'primary' },
                    { default: n(() => t[0] || (t[0] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { disabled: '', plain: '', type: 'primary' },
                    { default: n(() => t[1] || (t[1] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              r(l),
              { class: 'mb-4' },
              {
                default: n(() => [
                  e(
                    r(s),
                    { disabled: '', type: 'success' },
                    { default: n(() => t[2] || (t[2] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { disabled: '', plain: '', round: '', type: 'success' },
                    { default: n(() => t[3] || (t[3] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              r(l),
              { class: 'mb-4' },
              {
                default: n(() => [
                  e(
                    r(s),
                    { disabled: '', type: 'info' },
                    { default: n(() => t[4] || (t[4] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { disabled: '', plain: '', round: '', type: 'info' },
                    { default: n(() => t[5] || (t[5] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              r(l),
              { class: 'mb-4' },
              {
                default: n(() => [
                  e(
                    r(s),
                    { disabled: '', type: 'warning' },
                    { default: n(() => t[6] || (t[6] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { disabled: '', plain: '', round: '', type: 'warning' },
                    { default: n(() => t[7] || (t[7] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              r(l),
              { class: 'mb-4' },
              {
                default: n(() => [
                  e(
                    r(s),
                    { disabled: '', type: 'error' },
                    { default: n(() => t[8] || (t[8] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { disabled: '', plain: '', round: '', type: 'error' },
                    { default: n(() => t[9] || (t[9] = [o('按 钮')])), _: 1 },
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
  P = c(q, [['__scopeId', 'data-v-dd5398bb']]),
  S = `<script setup lang="ts">\r
import { VerButton, VerRow } from '@versakit/ui'\r
<\/script>\r
\r
<template>\r
  <ver-row class="mb-4">\r
    <ver-button type="primary">按 钮</ver-button>\r
    <ver-button round type="primary">按 钮</ver-button>\r
    <ver-button plain type="primary">按 钮</ver-button>\r
    <ver-button plain round type="primary">按 钮</ver-button>\r
    <ver-button ghost type="primary">按 钮</ver-button>\r
    <ver-button ghost round type="primary">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="success">按 钮</ver-button>\r
    <ver-button round type="success">按 钮</ver-button>\r
    <ver-button plain type="success">按 钮</ver-button>\r
    <ver-button plain round type="success">按 钮</ver-button>\r
    <ver-button ghost type="success">按 钮</ver-button>\r
    <ver-button ghost round type="success">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="info">按 钮</ver-button>\r
    <ver-button round type="info">按 钮</ver-button>\r
    <ver-button plain type="info">按 钮</ver-button>\r
    <ver-button plain round type="info">按 钮</ver-button>\r
    <ver-button ghost type="info">按 钮</ver-button>\r
    <ver-button ghost round type="info">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="warning">按 钮</ver-button>\r
    <ver-button round type="warning">按 钮</ver-button>\r
    <ver-button plain type="warning">按 钮</ver-button>\r
    <ver-button plain round type="warning">按 钮</ver-button>\r
    <ver-button ghost type="warning">按 钮</ver-button>\r
    <ver-button ghost round type="warning">按 钮</ver-button>\r
  </ver-row>\r
\r
  <ver-row class="mb-4">\r
    <ver-button type="error">按 钮</ver-button>\r
    <ver-button round type="error">按 钮</ver-button>\r
    <ver-button plain type="error">按 钮</ver-button>\r
    <ver-button plain round type="error">按 钮</ver-button>\r
    <ver-button ghost type="error">按 钮</ver-button>\r
    <ver-button ghost round type="error">按 钮</ver-button>\r
  </ver-row>\r
</template>\r
\r
<style scoped lang="scss">\r
.mb-4 {\r
  display: flex;\r
  justify-content: space-between;\r
  margin-bottom: 1rem;\r
}\r
\r
.ver-btn + .ver-btn {\r
  margin: 0px 6px;\r
}\r
</style>\r
`,
  U = y({
    __name: 'base',
    setup(i) {
      return (p, t) => (
        u(),
        v(
          g,
          null,
          [
            e(
              r(l),
              { class: 'mb-4' },
              {
                default: n(() => [
                  e(
                    r(s),
                    { type: 'primary' },
                    { default: n(() => t[0] || (t[0] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { round: '', type: 'primary' },
                    { default: n(() => t[1] || (t[1] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { plain: '', type: 'primary' },
                    { default: n(() => t[2] || (t[2] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { plain: '', round: '', type: 'primary' },
                    { default: n(() => t[3] || (t[3] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { ghost: '', type: 'primary' },
                    { default: n(() => t[4] || (t[4] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { ghost: '', round: '', type: 'primary' },
                    { default: n(() => t[5] || (t[5] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              r(l),
              { class: 'mb-4' },
              {
                default: n(() => [
                  e(
                    r(s),
                    { type: 'success' },
                    { default: n(() => t[6] || (t[6] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { round: '', type: 'success' },
                    { default: n(() => t[7] || (t[7] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { plain: '', type: 'success' },
                    { default: n(() => t[8] || (t[8] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { plain: '', round: '', type: 'success' },
                    { default: n(() => t[9] || (t[9] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { ghost: '', type: 'success' },
                    { default: n(() => t[10] || (t[10] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { ghost: '', round: '', type: 'success' },
                    { default: n(() => t[11] || (t[11] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              r(l),
              { class: 'mb-4' },
              {
                default: n(() => [
                  e(
                    r(s),
                    { type: 'info' },
                    { default: n(() => t[12] || (t[12] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { round: '', type: 'info' },
                    { default: n(() => t[13] || (t[13] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { plain: '', type: 'info' },
                    { default: n(() => t[14] || (t[14] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { plain: '', round: '', type: 'info' },
                    { default: n(() => t[15] || (t[15] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { ghost: '', type: 'info' },
                    { default: n(() => t[16] || (t[16] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { ghost: '', round: '', type: 'info' },
                    { default: n(() => t[17] || (t[17] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              r(l),
              { class: 'mb-4' },
              {
                default: n(() => [
                  e(
                    r(s),
                    { type: 'warning' },
                    { default: n(() => t[18] || (t[18] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { round: '', type: 'warning' },
                    { default: n(() => t[19] || (t[19] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { plain: '', type: 'warning' },
                    { default: n(() => t[20] || (t[20] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { plain: '', round: '', type: 'warning' },
                    { default: n(() => t[21] || (t[21] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { ghost: '', type: 'warning' },
                    { default: n(() => t[22] || (t[22] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { ghost: '', round: '', type: 'warning' },
                    { default: n(() => t[23] || (t[23] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              r(l),
              { class: 'mb-4' },
              {
                default: n(() => [
                  e(
                    r(s),
                    { type: 'error' },
                    { default: n(() => t[24] || (t[24] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { round: '', type: 'error' },
                    { default: n(() => t[25] || (t[25] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { plain: '', type: 'error' },
                    { default: n(() => t[26] || (t[26] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { plain: '', round: '', type: 'error' },
                    { default: n(() => t[27] || (t[27] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { ghost: '', type: 'error' },
                    { default: n(() => t[28] || (t[28] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    r(s),
                    { ghost: '', round: '', type: 'error' },
                    { default: n(() => t[29] || (t[29] = [o('按 钮')])), _: 1 },
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
  J = c(U, [['__scopeId', 'data-v-61c152c5']]),
  $ = JSON.parse(
    '{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}',
  ),
  Q = { name: 'components/button/index.md' },
  I = Object.assign(Q, {
    setup(i) {
      return (p, t) => {
        const a = x('ClientOnly')
        return (
          u(),
          v('div', null, [
            t[0] ||
              (t[0] = B(
                '<h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><p>常用的操作按钮。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p> 使用 <code>type</code>、<code>plain</code>、<code>round</code> 来定义按钮的样式。</p>',
                4,
              )),
            e(a, null, {
              default: n(() => [
                e(
                  r(m),
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
                    vueCode: r(S),
                  },
                  { vue: n(() => [e(J)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[1] ||
              (t[1] = d(
                'h2',
                { id: '禁止状态', tabindex: '-1' },
                [
                  o('禁止状态 '),
                  d(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#禁止状态',
                      'aria-label': 'Permalink to "禁止状态"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[2] ||
              (t[2] = d(
                'p',
                null,
                '您可以使用 disabled 属性来定义按钮是否被禁用。',
                -1,
              )),
            t[3] ||
              (t[3] = d(
                'p',
                null,
                '使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。',
                -1,
              )),
            e(a, null, {
              default: n(() => [
                e(
                  r(m),
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
                    vueCode: r(T),
                  },
                  { vue: n(() => [e(P)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[4] ||
              (t[4] = d(
                'h2',
                { id: '按钮大小', tabindex: '-1' },
                [
                  o('按钮大小 '),
                  d(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#按钮大小',
                      'aria-label': 'Permalink to "按钮大小"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[5] ||
              (t[5] = d('p', null, '您可以使用 size 属性来控制按钮大小', -1)),
            e(a, null, {
              default: n(() => [
                e(
                  r(m),
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
                    vueCode: r(j),
                  },
                  { vue: n(() => [e(N)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[6] ||
              (t[6] = d(
                'h2',
                { id: '文本按钮', tabindex: '-1' },
                [
                  o('文本按钮 '),
                  d(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#文本按钮',
                      'aria-label': 'Permalink to "文本按钮"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            t[7] || (t[7] = d('p', null, '没有边框和背景色的按钮。', -1)),
            e(a, null, {
              default: n(() => [
                e(
                  r(m),
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
                    vueCode: r(R),
                  },
                  { vue: n(() => [e(k)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[8] ||
              (t[8] = d(
                'h2',
                { id: '阴影按钮', tabindex: '-1' },
                [
                  o('阴影按钮 '),
                  d(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#阴影按钮',
                      'aria-label': 'Permalink to "阴影按钮"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e(a, null, {
              default: n(() => [
                e(
                  r(m),
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
                    vueCode: r(C),
                  },
                  { vue: n(() => [e(X)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[9] ||
              (t[9] = d(
                'h2',
                { id: '水波纹按钮', tabindex: '-1' },
                [
                  o('水波纹按钮 '),
                  d(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#水波纹按钮',
                      'aria-label': 'Permalink to "水波纹按钮"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e(a, null, {
              default: n(() => [
                e(
                  r(m),
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
                    vueCode: r(F),
                  },
                  { vue: n(() => [e(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[10] ||
              (t[10] = d(
                'h2',
                { id: '图标按钮', tabindex: '-1' },
                [
                  o('图标按钮 '),
                  d(
                    'a',
                    {
                      class: 'header-anchor',
                      href: '#图标按钮',
                      'aria-label': 'Permalink to "图标按钮"',
                    },
                    '​',
                  ),
                ],
                -1,
              )),
            e(a, null, {
              default: n(() => [
                e(
                  r(m),
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
                    vueCode: r(w),
                  },
                  { vue: n(() => [e(A)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[11] ||
              (t[11] = B(
                '<h2 id="button-api" tabindex="-1">Button API <a class="header-anchor" href="#button-api" aria-label="Permalink to &quot;Button API&quot;">​</a></h2><h3 id="button-属性" tabindex="-1">Button 属性 <a class="header-anchor" href="#button-属性" aria-label="Permalink to &quot;Button 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>按钮的类型，例如可以是 <code>primary</code>（主要按钮）、<code>secondary</code>（次要按钮）等不同分类来表示不同样式风格</td><td><code>string</code></td><td><code>default</code></td></tr><tr><td><code>plain</code></td><td>用于指示按钮是否为朴素按钮样式，朴素按钮通常是背景透明、只有文字和边框等简单样式呈现</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>round</code></td><td>判断按钮是否呈现圆角的外观效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>确定按钮是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>ghost</code></td><td>是否为ghost</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>text</code></td><td>是否为文本</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>circle</code></td><td>是否为圆角</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>shade</code></td><td>是否有阴影</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>颜色</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>icon</code></td><td>图标</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>size</code></td><td>图标</td><td><code>string</code></td><td><code>default</code></td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { $ as __pageData, I as default }
