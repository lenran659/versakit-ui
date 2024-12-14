import { h as s, V as d } from './chunks/theme.1gNGnQRx.js'
import {
  d as y,
  a as u,
  j as m,
  p as r,
  v as e,
  u as n,
  q as v,
  z as o,
  a9 as V,
  _ as B,
  b as f,
  F as g,
  e as l,
  a8 as c,
  S as w,
} from './chunks/framework.DE5IkABU.js'
import { R as b } from './chunks/index.B_PIpyz3.js'
const x = `<script setup lang="ts">
import { VerButton, VerRow } from 'versakit-ui'
<\/script>

<template>
  <ver-row>
    <VerButton style="margin: 0.5rem" circle icon="search"></VerButton>
    <VerButton
      style="margin: 0.5rem"
      circle
      type="success"
      icon="checkmark-outline"
    ></VerButton>

    <VerButton
      style="margin: 0.5rem"
      circle
      type="error"
      icon="trash-outline"
    ></VerButton>
  </ver-row>
</template>
`,
  A = y({
    __name: 'icon',
    setup(i) {
      return (p, t) => (
        u(),
        m(n(d), null, {
          default: r(() => [
            e(n(s), {
              style: { margin: '0.5rem' },
              circle: '',
              icon: 'search',
            }),
            e(n(s), {
              style: { margin: '0.5rem' },
              circle: '',
              type: 'success',
              icon: 'checkmark-outline',
            }),
            e(n(s), {
              style: { margin: '0.5rem' },
              circle: '',
              type: 'error',
              icon: 'trash-outline',
            }),
          ]),
          _: 1,
        })
      )
    },
  }),
  F = `<script setup lang="ts">
import { VerButton, VerRow } from 'versakit-ui'
<\/script>

<template>
  <ver-row class="mb-4">
    <ver-button v-ripple type="primary">按 钮</ver-button>
    <ver-button v-ripple type="success">按 钮</ver-button>
    <ver-button v-ripple type="info">按 钮</ver-button>
    <ver-button v-ripple type="warning">按 钮</ver-button>
    <ver-button v-ripple type="error">按 钮</ver-button>
  </ver-row>
</template>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 6px;
}
</style>
`,
  D = y({
    __name: 'ripple',
    setup(i) {
      return (p, t) => {
        const a = V('ripple')
        return (
          u(),
          m(
            n(d),
            { class: 'mb-4' },
            {
              default: r(() => [
                v(
                  (u(),
                  m(
                    n(s),
                    { type: 'primary' },
                    { default: r(() => t[0] || (t[0] = [o('按 钮')])), _: 1 },
                  )),
                  [[a]],
                ),
                v(
                  (u(),
                  m(
                    n(s),
                    { type: 'success' },
                    { default: r(() => t[1] || (t[1] = [o('按 钮')])), _: 1 },
                  )),
                  [[a]],
                ),
                v(
                  (u(),
                  m(
                    n(s),
                    { type: 'info' },
                    { default: r(() => t[2] || (t[2] = [o('按 钮')])), _: 1 },
                  )),
                  [[a]],
                ),
                v(
                  (u(),
                  m(
                    n(s),
                    { type: 'warning' },
                    { default: r(() => t[3] || (t[3] = [o('按 钮')])), _: 1 },
                  )),
                  [[a]],
                ),
                v(
                  (u(),
                  m(
                    n(s),
                    { type: 'error' },
                    { default: r(() => t[4] || (t[4] = [o('按 钮')])), _: 1 },
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
  G = B(D, [['__scopeId', 'data-v-71cf4d61']]),
  C = `<script setup lang="ts">
import { VerButton, VerRow } from 'versakit-ui'
<\/script>

<template>
  <VerRow>
    <VerButton style="margin: 0.5rem" shade>none</VerButton>
    <VerButton style="margin: 0.5rem" shade type="primary">primary</VerButton>
    <VerButton style="margin: 0.5rem" shade type="success">success</VerButton>
    <VerButton style="margin: 0.5rem" shade type="info">info</VerButton>
    <VerButton style="margin: 0.5rem" shade type="warning">warning</VerButton>
    <VerButton style="margin: 0.5rem" shade type="error">danger</VerButton>
  </VerRow>

  <VerRow>
    <VerButton style="margin: 0.5rem" disabled shade>none</VerButton>
    <VerButton style="margin: 0.5rem" disabled shade type="primary">
      primary
    </VerButton>
    <VerButton style="margin: 0.5rem" disabled shade type="success">
      success
    </VerButton>
    <VerButton style="margin: 0.5rem" disabled shade type="info">
      info
    </VerButton>
    <VerButton style="margin: 0.5rem" disabled shade type="warning">
      warning
    </VerButton>
    <VerButton style="margin: 0.5rem" disabled shade type="error">
      danger
    </VerButton>
  </VerRow>
</template>

<style></style>
`,
  X = y({
    __name: 'shadow',
    setup(i) {
      return (p, t) => (
        u(),
        f(
          g,
          null,
          [
            e(n(d), null, {
              default: r(() => [
                e(
                  n(s),
                  { style: { margin: '0.5rem' }, shade: '' },
                  { default: r(() => t[0] || (t[0] = [o('none')])), _: 1 },
                ),
                e(
                  n(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'primary' },
                  { default: r(() => t[1] || (t[1] = [o('primary')])), _: 1 },
                ),
                e(
                  n(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'success' },
                  { default: r(() => t[2] || (t[2] = [o('success')])), _: 1 },
                ),
                e(
                  n(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'info' },
                  { default: r(() => t[3] || (t[3] = [o('info')])), _: 1 },
                ),
                e(
                  n(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'warning' },
                  { default: r(() => t[4] || (t[4] = [o('warning')])), _: 1 },
                ),
                e(
                  n(s),
                  { style: { margin: '0.5rem' }, shade: '', type: 'error' },
                  { default: r(() => t[5] || (t[5] = [o('danger')])), _: 1 },
                ),
              ]),
              _: 1,
            }),
            e(n(d), null, {
              default: r(() => [
                e(
                  n(s),
                  { style: { margin: '0.5rem' }, disabled: '', shade: '' },
                  { default: r(() => t[6] || (t[6] = [o('none')])), _: 1 },
                ),
                e(
                  n(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'primary',
                  },
                  { default: r(() => t[7] || (t[7] = [o(' primary ')])), _: 1 },
                ),
                e(
                  n(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'success',
                  },
                  { default: r(() => t[8] || (t[8] = [o(' success ')])), _: 1 },
                ),
                e(
                  n(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'info',
                  },
                  { default: r(() => t[9] || (t[9] = [o(' info ')])), _: 1 },
                ),
                e(
                  n(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'warning',
                  },
                  {
                    default: r(() => t[10] || (t[10] = [o(' warning ')])),
                    _: 1,
                  },
                ),
                e(
                  n(s),
                  {
                    style: { margin: '0.5rem' },
                    disabled: '',
                    shade: '',
                    type: 'error',
                  },
                  {
                    default: r(() => t[11] || (t[11] = [o(' danger ')])),
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
  R = `<script setup lang="ts">
import { VerButton, VerRow } from 'versakit-ui'
<\/script>

<template>
  <VerRow>
    <VerButton text>none</VerButton>
    <VerButton text type="primary">primary</VerButton>
    <VerButton text type="success">success</VerButton>
    <VerButton text type="info">info</VerButton>
    <VerButton text type="warning">warning</VerButton>
    <VerButton text type="error">error</VerButton>
  </VerRow>
  <VerRow>
    <VerButton disabled text>none</VerButton>
    <VerButton disabled text type="primary">primary</VerButton>
    <VerButton disabled text type="success">success</VerButton>
    <VerButton disabled text type="info">info</VerButton>
    <VerButton disabled text type="warning">warning</VerButton>
    <VerButton disabled text type="error">error</VerButton>
  </VerRow>
</template>
`,
  k = y({
    __name: 'text',
    setup(i) {
      return (p, t) => (
        u(),
        f(
          g,
          null,
          [
            e(n(d), null, {
              default: r(() => [
                e(
                  n(s),
                  { text: '' },
                  { default: r(() => t[0] || (t[0] = [o('none')])), _: 1 },
                ),
                e(
                  n(s),
                  { text: '', type: 'primary' },
                  { default: r(() => t[1] || (t[1] = [o('primary')])), _: 1 },
                ),
                e(
                  n(s),
                  { text: '', type: 'success' },
                  { default: r(() => t[2] || (t[2] = [o('success')])), _: 1 },
                ),
                e(
                  n(s),
                  { text: '', type: 'info' },
                  { default: r(() => t[3] || (t[3] = [o('info')])), _: 1 },
                ),
                e(
                  n(s),
                  { text: '', type: 'warning' },
                  { default: r(() => t[4] || (t[4] = [o('warning')])), _: 1 },
                ),
                e(
                  n(s),
                  { text: '', type: 'error' },
                  { default: r(() => t[5] || (t[5] = [o('error')])), _: 1 },
                ),
              ]),
              _: 1,
            }),
            e(n(d), null, {
              default: r(() => [
                e(
                  n(s),
                  { disabled: '', text: '' },
                  { default: r(() => t[6] || (t[6] = [o('none')])), _: 1 },
                ),
                e(
                  n(s),
                  { disabled: '', text: '', type: 'primary' },
                  { default: r(() => t[7] || (t[7] = [o('primary')])), _: 1 },
                ),
                e(
                  n(s),
                  { disabled: '', text: '', type: 'success' },
                  { default: r(() => t[8] || (t[8] = [o('success')])), _: 1 },
                ),
                e(
                  n(s),
                  { disabled: '', text: '', type: 'info' },
                  { default: r(() => t[9] || (t[9] = [o('info')])), _: 1 },
                ),
                e(
                  n(s),
                  { disabled: '', text: '', type: 'warning' },
                  { default: r(() => t[10] || (t[10] = [o('warning')])), _: 1 },
                ),
                e(
                  n(s),
                  { disabled: '', text: '', type: 'error' },
                  { default: r(() => t[11] || (t[11] = [o('error')])), _: 1 },
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
  j = `<script setup lang="ts">
import { VerButton } from 'versakit-ui'
<\/script>

<template>
  <span class="mx-2">
    <ver-button class="mx-2" type="primary" size="large">主要按钮</ver-button>
  </span>
  <span class="mx-2">
    <ver-button class="mx-2" type="primary">主要按钮</ver-button>
  </span>
  <span class="mx-2">
    <ver-button class="mx-2" type="primary" size="small">主要按钮</ver-button>
  </span>
</template>

<style>
.mx-2 {
  margin: 0 6px;
}
</style>
`,
  Z = { class: 'mx-2' },
  _ = { class: 'mx-2' },
  L = { class: 'mx-2' },
  M = y({
    __name: 'size',
    setup(i) {
      return (p, t) => (
        u(),
        f(
          g,
          null,
          [
            l('span', Z, [
              e(
                n(s),
                { class: 'mx-2', type: 'primary', size: 'large' },
                { default: r(() => t[0] || (t[0] = [o('主要按钮')])), _: 1 },
              ),
            ]),
            l('span', _, [
              e(
                n(s),
                { class: 'mx-2', type: 'primary' },
                { default: r(() => t[1] || (t[1] = [o('主要按钮')])), _: 1 },
              ),
            ]),
            l('span', L, [
              e(
                n(s),
                { class: 'mx-2', type: 'primary', size: 'small' },
                { default: r(() => t[2] || (t[2] = [o('主要按钮')])), _: 1 },
              ),
            ]),
          ],
          64,
        )
      )
    },
  }),
  N = `<script setup lang="ts">
import { VerButton, VerRow } from 'versakit-ui'
<\/script>

<template>
  <ver-row class="mb-4">
    <ver-button disabled type="primary">按 钮</ver-button>
    <ver-button disabled plain type="primary">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled type="success">按 钮</ver-button>
    <ver-button disabled plain round type="success">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled type="info">按 钮</ver-button>
    <ver-button disabled plain round type="info">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled type="warning">按 钮</ver-button>
    <ver-button disabled plain round type="warning">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button disabled type="error">按 钮</ver-button>
    <ver-button disabled plain round type="error">按 钮</ver-button>
  </ver-row>
</template>

<style scoped>
.mb-4 {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}
.ver-btn + .ver-btn {
  margin: 0px 10px;
}
</style>
`,
  T = y({
    __name: 'disabled',
    setup(i) {
      return (p, t) => (
        u(),
        f(
          g,
          null,
          [
            e(
              n(d),
              { class: 'mb-4' },
              {
                default: r(() => [
                  e(
                    n(s),
                    { disabled: '', type: 'primary' },
                    { default: r(() => t[0] || (t[0] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { disabled: '', plain: '', type: 'primary' },
                    { default: r(() => t[1] || (t[1] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(d),
              { class: 'mb-4' },
              {
                default: r(() => [
                  e(
                    n(s),
                    { disabled: '', type: 'success' },
                    { default: r(() => t[2] || (t[2] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { disabled: '', plain: '', round: '', type: 'success' },
                    { default: r(() => t[3] || (t[3] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(d),
              { class: 'mb-4' },
              {
                default: r(() => [
                  e(
                    n(s),
                    { disabled: '', type: 'info' },
                    { default: r(() => t[4] || (t[4] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { disabled: '', plain: '', round: '', type: 'info' },
                    { default: r(() => t[5] || (t[5] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(d),
              { class: 'mb-4' },
              {
                default: r(() => [
                  e(
                    n(s),
                    { disabled: '', type: 'warning' },
                    { default: r(() => t[6] || (t[6] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { disabled: '', plain: '', round: '', type: 'warning' },
                    { default: r(() => t[7] || (t[7] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(d),
              { class: 'mb-4' },
              {
                default: r(() => [
                  e(
                    n(s),
                    { disabled: '', type: 'error' },
                    { default: r(() => t[8] || (t[8] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { disabled: '', plain: '', round: '', type: 'error' },
                    { default: r(() => t[9] || (t[9] = [o('按 钮')])), _: 1 },
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
  z = B(T, [['__scopeId', 'data-v-86faaac5']]),
  q = `<script setup lang="ts">
import { VerButton, VerRow } from 'versakit-ui'
<\/script>

<template>
  <ver-row class="mb-4">
    <ver-button type="primary">按 钮</ver-button>
    <ver-button round type="primary">按 钮</ver-button>
    <ver-button plain type="primary">按 钮</ver-button>
    <ver-button plain round type="primary">按 钮</ver-button>
    <ver-button ghost type="primary">按 钮</ver-button>
    <ver-button ghost round type="primary">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="success">按 钮</ver-button>
    <ver-button round type="success">按 钮</ver-button>
    <ver-button plain type="success">按 钮</ver-button>
    <ver-button plain round type="success">按 钮</ver-button>
    <ver-button ghost type="success">按 钮</ver-button>
    <ver-button ghost round type="success">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="info">按 钮</ver-button>
    <ver-button round type="info">按 钮</ver-button>
    <ver-button plain type="info">按 钮</ver-button>
    <ver-button plain round type="info">按 钮</ver-button>
    <ver-button ghost type="info">按 钮</ver-button>
    <ver-button ghost round type="info">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="warning">按 钮</ver-button>
    <ver-button round type="warning">按 钮</ver-button>
    <ver-button plain type="warning">按 钮</ver-button>
    <ver-button plain round type="warning">按 钮</ver-button>
    <ver-button ghost type="warning">按 钮</ver-button>
    <ver-button ghost round type="warning">按 钮</ver-button>
  </ver-row>

  <ver-row class="mb-4">
    <ver-button type="error">按 钮</ver-button>
    <ver-button round type="error">按 钮</ver-button>
    <ver-button plain type="error">按 钮</ver-button>
    <ver-button plain round type="error">按 钮</ver-button>
    <ver-button ghost type="error">按 钮</ver-button>
    <ver-button ghost round type="error">按 钮</ver-button>
  </ver-row>
</template>

<style scoped lang="scss">
.mb-4 {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.ver-btn + .ver-btn {
  margin: 0px 6px;
}
</style>
`,
  P = y({
    __name: 'base',
    setup(i) {
      return (p, t) => (
        u(),
        f(
          g,
          null,
          [
            e(
              n(d),
              { class: 'mb-4' },
              {
                default: r(() => [
                  e(
                    n(s),
                    { type: 'primary' },
                    { default: r(() => t[0] || (t[0] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { round: '', type: 'primary' },
                    { default: r(() => t[1] || (t[1] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', type: 'primary' },
                    { default: r(() => t[2] || (t[2] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', round: '', type: 'primary' },
                    { default: r(() => t[3] || (t[3] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', type: 'primary' },
                    { default: r(() => t[4] || (t[4] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', round: '', type: 'primary' },
                    { default: r(() => t[5] || (t[5] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(d),
              { class: 'mb-4' },
              {
                default: r(() => [
                  e(
                    n(s),
                    { type: 'success' },
                    { default: r(() => t[6] || (t[6] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { round: '', type: 'success' },
                    { default: r(() => t[7] || (t[7] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', type: 'success' },
                    { default: r(() => t[8] || (t[8] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', round: '', type: 'success' },
                    { default: r(() => t[9] || (t[9] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', type: 'success' },
                    { default: r(() => t[10] || (t[10] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', round: '', type: 'success' },
                    { default: r(() => t[11] || (t[11] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(d),
              { class: 'mb-4' },
              {
                default: r(() => [
                  e(
                    n(s),
                    { type: 'info' },
                    { default: r(() => t[12] || (t[12] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { round: '', type: 'info' },
                    { default: r(() => t[13] || (t[13] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', type: 'info' },
                    { default: r(() => t[14] || (t[14] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', round: '', type: 'info' },
                    { default: r(() => t[15] || (t[15] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', type: 'info' },
                    { default: r(() => t[16] || (t[16] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', round: '', type: 'info' },
                    { default: r(() => t[17] || (t[17] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(d),
              { class: 'mb-4' },
              {
                default: r(() => [
                  e(
                    n(s),
                    { type: 'warning' },
                    { default: r(() => t[18] || (t[18] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { round: '', type: 'warning' },
                    { default: r(() => t[19] || (t[19] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', type: 'warning' },
                    { default: r(() => t[20] || (t[20] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', round: '', type: 'warning' },
                    { default: r(() => t[21] || (t[21] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', type: 'warning' },
                    { default: r(() => t[22] || (t[22] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', round: '', type: 'warning' },
                    { default: r(() => t[23] || (t[23] = [o('按 钮')])), _: 1 },
                  ),
                ]),
                _: 1,
              },
            ),
            e(
              n(d),
              { class: 'mb-4' },
              {
                default: r(() => [
                  e(
                    n(s),
                    { type: 'error' },
                    { default: r(() => t[24] || (t[24] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { round: '', type: 'error' },
                    { default: r(() => t[25] || (t[25] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', type: 'error' },
                    { default: r(() => t[26] || (t[26] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { plain: '', round: '', type: 'error' },
                    { default: r(() => t[27] || (t[27] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', type: 'error' },
                    { default: r(() => t[28] || (t[28] = [o('按 钮')])), _: 1 },
                  ),
                  e(
                    n(s),
                    { ghost: '', round: '', type: 'error' },
                    { default: r(() => t[29] || (t[29] = [o('按 钮')])), _: 1 },
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
  S = B(P, [['__scopeId', 'data-v-46af674e']]),
  W = JSON.parse(
    '{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button/index.md","filePath":"components/button/index.md"}',
  ),
  U = { name: 'components/button/index.md' },
  E = Object.assign(U, {
    setup(i) {
      return (p, t) => {
        const a = w('ClientOnly')
        return (
          u(),
          f('div', null, [
            t[0] ||
              (t[0] = c(
                '<h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><p>常用的操作按钮。</p><h2 id="基础使用" tabindex="-1">基础使用 <a class="header-anchor" href="#基础使用" aria-label="Permalink to &quot;基础使用&quot;">​</a></h2><p> 使用 <code>type</code>、<code>plain</code>、<code>round</code> 来定义按钮的样式。</p>',
                4,
              )),
            e(a, null, {
              default: r(() => [
                e(
                  n(b),
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
                    vueCode: n(q),
                  },
                  { vue: r(() => [e(S)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[1] ||
              (t[1] = l(
                'h2',
                { id: '禁止状态', tabindex: '-1' },
                [
                  o('禁止状态 '),
                  l(
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
              (t[2] = l(
                'p',
                null,
                '您可以使用 disabled 属性来定义按钮是否被禁用。',
                -1,
              )),
            t[3] ||
              (t[3] = l(
                'p',
                null,
                '使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。',
                -1,
              )),
            e(a, null, {
              default: r(() => [
                e(
                  n(b),
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
                  { vue: r(() => [e(z)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[4] ||
              (t[4] = l(
                'h2',
                { id: '按钮大小', tabindex: '-1' },
                [
                  o('按钮大小 '),
                  l(
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
              (t[5] = l('p', null, '您可以使用 size 属性来控制按钮大小', -1)),
            e(a, null, {
              default: r(() => [
                e(
                  n(b),
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
                    vueCode: n(j),
                  },
                  { vue: r(() => [e(M)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[6] ||
              (t[6] = l(
                'h2',
                { id: '文本按钮', tabindex: '-1' },
                [
                  o('文本按钮 '),
                  l(
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
            t[7] || (t[7] = l('p', null, '没有边框和背景色的按钮。', -1)),
            e(a, null, {
              default: r(() => [
                e(
                  n(b),
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
                    vueCode: n(R),
                  },
                  { vue: r(() => [e(k)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[8] ||
              (t[8] = l(
                'h2',
                { id: '阴影按钮', tabindex: '-1' },
                [
                  o('阴影按钮 '),
                  l(
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
              default: r(() => [
                e(
                  n(b),
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
                  { vue: r(() => [e(X)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[9] ||
              (t[9] = l(
                'h2',
                { id: '水波纹按钮', tabindex: '-1' },
                [
                  o('水波纹按钮 '),
                  l(
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
              default: r(() => [
                e(
                  n(b),
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
                  { vue: r(() => [e(G)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[10] ||
              (t[10] = l(
                'h2',
                { id: '图标按钮', tabindex: '-1' },
                [
                  o('图标按钮 '),
                  l(
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
              default: r(() => [
                e(
                  n(b),
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
                    vueCode: n(x),
                  },
                  { vue: r(() => [e(A)]), _: 1 },
                  8,
                  ['vueCode'],
                ),
              ]),
              _: 1,
            }),
            t[11] ||
              (t[11] = c(
                '<h2 id="button-api" tabindex="-1">Button API <a class="header-anchor" href="#button-api" aria-label="Permalink to &quot;Button API&quot;">​</a></h2><h3 id="button-属性" tabindex="-1">Button 属性 <a class="header-anchor" href="#button-属性" aria-label="Permalink to &quot;Button 属性&quot;">​</a></h3><table tabindex="0"><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>type</code></td><td>按钮的类型，例如可以是 <code>primary</code>（主要按钮）、<code>secondary</code>（次要按钮）等不同分类来表示不同样式风格</td><td><code>string</code></td><td><code>default</code></td></tr><tr><td><code>plain</code></td><td>用于指示按钮是否为朴素按钮样式，朴素按钮通常是背景透明、只有文字和边框等简单样式呈现</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>round</code></td><td>判断按钮是否呈现圆角的外观效果</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>确定按钮是否处于禁用状态，禁用状态下按钮不可点击，常通过变灰等视觉样式体现</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>ghost</code></td><td>是否为ghost</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>text</code></td><td>是否为文本</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>circle</code></td><td>是否为圆角</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>shade</code></td><td>是否有阴影</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td><code>color</code></td><td>颜色</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>icon</code></td><td>图标</td><td><code>string</code></td><td><code>空</code></td></tr><tr><td><code>size</code></td><td>图标</td><td><code>string</code></td><td><code>default</code></td></tr></tbody></table>',
                3,
              )),
          ])
        )
      }
    },
  })
export { W as __pageData, E as default }
