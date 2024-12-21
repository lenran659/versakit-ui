import {
  _ as n,
  a as o,
  b as t,
  e,
  z as d,
} from './chunks/framework.D7H_7AjQ.js'
const g = JSON.parse(
    '{"title":"Loading 加载","description":"","frontmatter":{},"headers":[],"relativePath":"components/loading/index.md","filePath":"components/loading/index.md"}',
  ),
  i = { name: 'components/loading/index.md' }
function r(s, a, l, c, p, m) {
  return (
    o(),
    t(
      'div',
      null,
      a[0] ||
        (a[0] = [
          e(
            'h1',
            { id: 'loading-加载', tabindex: '-1' },
            [
              d('Loading 加载 '),
              e(
                'a',
                {
                  class: 'header-anchor',
                  href: '#loading-加载',
                  'aria-label': 'Permalink to "Loading 加载"',
                },
                '​',
              ),
            ],
            -1,
          ),
          e('p', null, '加载数据时显示动效。', -1),
        ]),
    )
  )
}
const x = n(i, [['render', r]])
export { g as __pageData, x as default }
