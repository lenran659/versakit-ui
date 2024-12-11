import {
  _ as t,
  c as r,
  j as a,
  a as o,
  o as s,
} from './chunks/framework.3-QL-XRe.js'
const x = JSON.parse(
    '{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"markdown-examples.md","filePath":"markdown-examples.md"}',
  ),
  n = { name: 'markdown-examples.md' }
function d(m, e, l, c, p, i) {
  return (
    s(),
    r(
      'div',
      null,
      e[0] ||
        (e[0] = [
          a(
            'h2',
            { id: '你好', tabindex: '-1' },
            [
              o('你好 '),
              a(
                'a',
                {
                  class: 'header-anchor',
                  href: '#你好',
                  'aria-label': 'Permalink to "你好"',
                },
                '​',
              ),
            ],
            -1,
          ),
        ]),
    )
  )
}
const _ = t(n, [['render', d]])
export { x as __pageData, _ as default }
