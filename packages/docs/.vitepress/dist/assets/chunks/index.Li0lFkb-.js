import {
  d as Rt,
  c as st,
  m as ot,
  w as rt,
  M as Ai,
  b as V,
  e as z,
  k as ve,
  f as tt,
  l as J,
  u as X,
  v as Ot,
  F as We,
  B as Ke,
  j as gt,
  p as ut,
  x as it,
  z as Ln,
  a as W,
  a9 as Ti,
  X as Ge,
  $ as jt,
  ad as Ri,
  n as Ni,
  T as Si,
} from './framework.D7H_7AjQ.js'
const pt = (t, e) => {
    const i = t.__vccOpts || t
    for (const [n, o] of e) i[n] = o
    return i
  },
  Ci = {},
  Li = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'lucide lucide-code',
  }
function ji(t, e) {
  return (
    W(),
    V(
      'svg',
      Li,
      e[0] ||
        (e[0] = [
          z('polyline', { points: '16 18 22 12 16 6' }, null, -1),
          z('polyline', { points: '8 6 2 12 8 18' }, null, -1),
        ]),
    )
  )
}
const Mi = pt(Ci, [['render', ji]]),
  Ii = {},
  Di = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'lucide lucide-code-xml',
  }
function Pi(t, e) {
  return (
    W(),
    V(
      'svg',
      Di,
      e[0] ||
        (e[0] = [
          z('path', { d: 'm18 16 4-4-4-4' }, null, -1),
          z('path', { d: 'm6 8-4 4 4 4' }, null, -1),
          z('path', { d: 'm14.5 4-5 16' }, null, -1),
        ]),
    )
  )
}
const Bi = pt(Ii, [['render', Pi]]),
  Ui = {},
  zi = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '24',
    height: '24',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'lucide lucide-copy',
  }
function $i(t, e) {
  return (
    W(),
    V(
      'svg',
      zi,
      e[0] ||
        (e[0] = [
          z(
            'rect',
            { width: '14', height: '14', x: '8', y: '8', rx: '2', ry: '2' },
            null,
            -1,
          ),
          z(
            'path',
            { d: 'M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2' },
            null,
            -1,
          ),
        ]),
    )
  )
}
const Fi = pt(Ui, [['render', $i]]),
  Wi = {},
  Ki = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '16',
    height: '16',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'lucide lucide-arrow-up-from-line',
  }
function Gi(t, e) {
  return (
    W(),
    V(
      'svg',
      Ki,
      e[0] ||
        (e[0] = [
          z('path', { d: 'm18 9-6-6-6 6' }, null, -1),
          z('path', { d: 'M12 3v14' }, null, -1),
          z('path', { d: 'M5 21h14' }, null, -1),
        ]),
    )
  )
}
const Hi = pt(Wi, [['render', Gi]])
function Vi(t) {
  return t === 'vue'
    ? '/src/Demo.vue'
    : t === 'react'
      ? '/src/Demo.tsx'
      : 'index.html'
}
var $ = ((t) => ((t.VUE = 'vue'), (t.REACT = 'react'), (t.HTML = 'html'), t))(
    $ || {},
  ),
  _t = ((t) => (
    (t.STACKBLITZ = 'stackblitz'), (t.CODESANDBOX = 'codesandbox'), t
  ))(_t || {})
const jn = 'vitepress-demo',
  Mn = 'This is a demo from vitepress-demo-plugin'
var Xt = {},
  In = { exports: {} }
;(function (t) {
  var e = (function () {
    var i = String.fromCharCode,
      n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      o = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
      l = {}
    function u(_, h) {
      if (!l[_]) {
        l[_] = {}
        for (var f = 0; f < _.length; f++) l[_][_.charAt(f)] = f
      }
      return l[_][h]
    }
    var a = {
      compressToBase64: function (_) {
        if (_ == null) return ''
        var h = a._compress(_, 6, function (f) {
          return n.charAt(f)
        })
        switch (h.length % 4) {
          default:
          case 0:
            return h
          case 1:
            return h + '==='
          case 2:
            return h + '=='
          case 3:
            return h + '='
        }
      },
      decompressFromBase64: function (_) {
        return _ == null
          ? ''
          : _ == ''
            ? null
            : a._decompress(_.length, 32, function (h) {
                return u(n, _.charAt(h))
              })
      },
      compressToUTF16: function (_) {
        return _ == null
          ? ''
          : a._compress(_, 15, function (h) {
              return i(h + 32)
            }) + ' '
      },
      decompressFromUTF16: function (_) {
        return _ == null
          ? ''
          : _ == ''
            ? null
            : a._decompress(_.length, 16384, function (h) {
                return _.charCodeAt(h) - 32
              })
      },
      compressToUint8Array: function (_) {
        for (
          var h = a.compress(_),
            f = new Uint8Array(h.length * 2),
            g = 0,
            y = h.length;
          g < y;
          g++
        ) {
          var T = h.charCodeAt(g)
          ;(f[g * 2] = T >>> 8), (f[g * 2 + 1] = T % 256)
        }
        return f
      },
      decompressFromUint8Array: function (_) {
        if (_ == null) return a.decompress(_)
        for (var h = new Array(_.length / 2), f = 0, g = h.length; f < g; f++)
          h[f] = _[f * 2] * 256 + _[f * 2 + 1]
        var y = []
        return (
          h.forEach(function (T) {
            y.push(i(T))
          }),
          a.decompress(y.join(''))
        )
      },
      compressToEncodedURIComponent: function (_) {
        return _ == null
          ? ''
          : a._compress(_, 6, function (h) {
              return o.charAt(h)
            })
      },
      decompressFromEncodedURIComponent: function (_) {
        return _ == null
          ? ''
          : _ == ''
            ? null
            : ((_ = _.replace(/ /g, '+')),
              a._decompress(_.length, 32, function (h) {
                return u(o, _.charAt(h))
              }))
      },
      compress: function (_) {
        return a._compress(_, 16, function (h) {
          return i(h)
        })
      },
      _compress: function (_, h, f) {
        if (_ == null) return ''
        var g,
          y,
          T = {},
          j = {},
          M = '',
          d = '',
          r = '',
          m = 2,
          R = 3,
          x = 2,
          A = [],
          c = 0,
          b = 0,
          p
        for (p = 0; p < _.length; p += 1)
          if (
            ((M = _.charAt(p)),
            Object.prototype.hasOwnProperty.call(T, M) ||
              ((T[M] = R++), (j[M] = !0)),
            (d = r + M),
            Object.prototype.hasOwnProperty.call(T, d))
          )
            r = d
          else {
            if (Object.prototype.hasOwnProperty.call(j, r)) {
              if (r.charCodeAt(0) < 256) {
                for (g = 0; g < x; g++)
                  (c = c << 1),
                    b == h - 1 ? ((b = 0), A.push(f(c)), (c = 0)) : b++
                for (y = r.charCodeAt(0), g = 0; g < 8; g++)
                  (c = (c << 1) | (y & 1)),
                    b == h - 1 ? ((b = 0), A.push(f(c)), (c = 0)) : b++,
                    (y = y >> 1)
              } else {
                for (y = 1, g = 0; g < x; g++)
                  (c = (c << 1) | y),
                    b == h - 1 ? ((b = 0), A.push(f(c)), (c = 0)) : b++,
                    (y = 0)
                for (y = r.charCodeAt(0), g = 0; g < 16; g++)
                  (c = (c << 1) | (y & 1)),
                    b == h - 1 ? ((b = 0), A.push(f(c)), (c = 0)) : b++,
                    (y = y >> 1)
              }
              m--, m == 0 && ((m = Math.pow(2, x)), x++), delete j[r]
            } else
              for (y = T[r], g = 0; g < x; g++)
                (c = (c << 1) | (y & 1)),
                  b == h - 1 ? ((b = 0), A.push(f(c)), (c = 0)) : b++,
                  (y = y >> 1)
            m--,
              m == 0 && ((m = Math.pow(2, x)), x++),
              (T[d] = R++),
              (r = String(M))
          }
        if (r !== '') {
          if (Object.prototype.hasOwnProperty.call(j, r)) {
            if (r.charCodeAt(0) < 256) {
              for (g = 0; g < x; g++)
                (c = c << 1),
                  b == h - 1 ? ((b = 0), A.push(f(c)), (c = 0)) : b++
              for (y = r.charCodeAt(0), g = 0; g < 8; g++)
                (c = (c << 1) | (y & 1)),
                  b == h - 1 ? ((b = 0), A.push(f(c)), (c = 0)) : b++,
                  (y = y >> 1)
            } else {
              for (y = 1, g = 0; g < x; g++)
                (c = (c << 1) | y),
                  b == h - 1 ? ((b = 0), A.push(f(c)), (c = 0)) : b++,
                  (y = 0)
              for (y = r.charCodeAt(0), g = 0; g < 16; g++)
                (c = (c << 1) | (y & 1)),
                  b == h - 1 ? ((b = 0), A.push(f(c)), (c = 0)) : b++,
                  (y = y >> 1)
            }
            m--, m == 0 && ((m = Math.pow(2, x)), x++), delete j[r]
          } else
            for (y = T[r], g = 0; g < x; g++)
              (c = (c << 1) | (y & 1)),
                b == h - 1 ? ((b = 0), A.push(f(c)), (c = 0)) : b++,
                (y = y >> 1)
          m--, m == 0 && ((m = Math.pow(2, x)), x++)
        }
        for (y = 2, g = 0; g < x; g++)
          (c = (c << 1) | (y & 1)),
            b == h - 1 ? ((b = 0), A.push(f(c)), (c = 0)) : b++,
            (y = y >> 1)
        for (;;)
          if (((c = c << 1), b == h - 1)) {
            A.push(f(c))
            break
          } else b++
        return A.join('')
      },
      decompress: function (_) {
        return _ == null
          ? ''
          : _ == ''
            ? null
            : a._decompress(_.length, 32768, function (h) {
                return _.charCodeAt(h)
              })
      },
      _decompress: function (_, h, f) {
        var g = [],
          y = 4,
          T = 4,
          j = 3,
          M = '',
          d = [],
          r,
          m,
          R,
          x,
          A,
          c,
          b,
          p = { val: f(0), position: h, index: 1 }
        for (r = 0; r < 3; r += 1) g[r] = r
        for (R = 0, A = Math.pow(2, 2), c = 1; c != A; )
          (x = p.val & p.position),
            (p.position >>= 1),
            p.position == 0 && ((p.position = h), (p.val = f(p.index++))),
            (R |= (x > 0 ? 1 : 0) * c),
            (c <<= 1)
        switch (R) {
          case 0:
            for (R = 0, A = Math.pow(2, 8), c = 1; c != A; )
              (x = p.val & p.position),
                (p.position >>= 1),
                p.position == 0 && ((p.position = h), (p.val = f(p.index++))),
                (R |= (x > 0 ? 1 : 0) * c),
                (c <<= 1)
            b = i(R)
            break
          case 1:
            for (R = 0, A = Math.pow(2, 16), c = 1; c != A; )
              (x = p.val & p.position),
                (p.position >>= 1),
                p.position == 0 && ((p.position = h), (p.val = f(p.index++))),
                (R |= (x > 0 ? 1 : 0) * c),
                (c <<= 1)
            b = i(R)
            break
          case 2:
            return ''
        }
        for (g[3] = b, m = b, d.push(b); ; ) {
          if (p.index > _) return ''
          for (R = 0, A = Math.pow(2, j), c = 1; c != A; )
            (x = p.val & p.position),
              (p.position >>= 1),
              p.position == 0 && ((p.position = h), (p.val = f(p.index++))),
              (R |= (x > 0 ? 1 : 0) * c),
              (c <<= 1)
          switch ((b = R)) {
            case 0:
              for (R = 0, A = Math.pow(2, 8), c = 1; c != A; )
                (x = p.val & p.position),
                  (p.position >>= 1),
                  p.position == 0 && ((p.position = h), (p.val = f(p.index++))),
                  (R |= (x > 0 ? 1 : 0) * c),
                  (c <<= 1)
              ;(g[T++] = i(R)), (b = T - 1), y--
              break
            case 1:
              for (R = 0, A = Math.pow(2, 16), c = 1; c != A; )
                (x = p.val & p.position),
                  (p.position >>= 1),
                  p.position == 0 && ((p.position = h), (p.val = f(p.index++))),
                  (R |= (x > 0 ? 1 : 0) * c),
                  (c <<= 1)
              ;(g[T++] = i(R)), (b = T - 1), y--
              break
            case 2:
              return d.join('')
          }
          if ((y == 0 && ((y = Math.pow(2, j)), j++), g[b])) M = g[b]
          else if (b === T) M = m + m.charAt(0)
          else return null
          d.push(M),
            (g[T++] = m + M.charAt(0)),
            y--,
            (m = M),
            y == 0 && ((y = Math.pow(2, j)), j++)
        }
      },
    }
    return a
  })()
  t != null
    ? (t.exports = e)
    : typeof angular < 'u' &&
      angular != null &&
      angular.module('LZString', []).factory('LZString', function () {
        return e
      })
})(In)
Object.defineProperty(Xt, '__esModule', { value: !0 })
Xt.getParameters = void 0
var Xi = In.exports
function Zi(t) {
  return Xi.compressToBase64(t)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
}
function Qi(t) {
  return Zi(JSON.stringify(t))
}
Xt.getParameters = Qi
var Zt = void 0,
  qi = Xt
Zt = qi.getParameters
var Dn = { exports: {} },
  xt = {},
  Mt = { exports: {} },
  ae = {},
  re = {},
  He
function xe() {
  if (He) return re
  He = 1
  function t(n) {
    ;(this.__parent = n),
      (this.__character_count = 0),
      (this.__indent_count = -1),
      (this.__alignment_count = 0),
      (this.__wrap_point_index = 0),
      (this.__wrap_point_character_count = 0),
      (this.__wrap_point_indent_count = -1),
      (this.__wrap_point_alignment_count = 0),
      (this.__items = [])
  }
  ;(t.prototype.clone_empty = function () {
    var n = new t(this.__parent)
    return n.set_indent(this.__indent_count, this.__alignment_count), n
  }),
    (t.prototype.item = function (n) {
      return n < 0 ? this.__items[this.__items.length + n] : this.__items[n]
    }),
    (t.prototype.has_match = function (n) {
      for (var o = this.__items.length - 1; o >= 0; o--)
        if (this.__items[o].match(n)) return !0
      return !1
    }),
    (t.prototype.set_indent = function (n, o) {
      this.is_empty() &&
        ((this.__indent_count = n || 0),
        (this.__alignment_count = o || 0),
        (this.__character_count = this.__parent.get_indent_size(
          this.__indent_count,
          this.__alignment_count,
        )))
    }),
    (t.prototype._set_wrap_point = function () {
      this.__parent.wrap_line_length &&
        ((this.__wrap_point_index = this.__items.length),
        (this.__wrap_point_character_count = this.__character_count),
        (this.__wrap_point_indent_count =
          this.__parent.next_line.__indent_count),
        (this.__wrap_point_alignment_count =
          this.__parent.next_line.__alignment_count))
    }),
    (t.prototype._should_wrap = function () {
      return (
        this.__wrap_point_index &&
        this.__character_count > this.__parent.wrap_line_length &&
        this.__wrap_point_character_count >
          this.__parent.next_line.__character_count
      )
    }),
    (t.prototype._allow_wrap = function () {
      if (this._should_wrap()) {
        this.__parent.add_new_line()
        var n = this.__parent.current_line
        return (
          n.set_indent(
            this.__wrap_point_indent_count,
            this.__wrap_point_alignment_count,
          ),
          (n.__items = this.__items.slice(this.__wrap_point_index)),
          (this.__items = this.__items.slice(0, this.__wrap_point_index)),
          (n.__character_count +=
            this.__character_count - this.__wrap_point_character_count),
          (this.__character_count = this.__wrap_point_character_count),
          n.__items[0] === ' ' &&
            (n.__items.splice(0, 1), (n.__character_count -= 1)),
          !0
        )
      }
      return !1
    }),
    (t.prototype.is_empty = function () {
      return this.__items.length === 0
    }),
    (t.prototype.last = function () {
      return this.is_empty() ? null : this.__items[this.__items.length - 1]
    }),
    (t.prototype.push = function (n) {
      this.__items.push(n)
      var o = n.lastIndexOf(`
`)
      o !== -1
        ? (this.__character_count = n.length - o)
        : (this.__character_count += n.length)
    }),
    (t.prototype.pop = function () {
      var n = null
      return (
        this.is_empty() ||
          ((n = this.__items.pop()), (this.__character_count -= n.length)),
        n
      )
    }),
    (t.prototype._remove_indent = function () {
      this.__indent_count > 0 &&
        ((this.__indent_count -= 1),
        (this.__character_count -= this.__parent.indent_size))
    }),
    (t.prototype._remove_wrap_indent = function () {
      this.__wrap_point_indent_count > 0 &&
        (this.__wrap_point_indent_count -= 1)
    }),
    (t.prototype.trim = function () {
      for (; this.last() === ' '; )
        this.__items.pop(), (this.__character_count -= 1)
    }),
    (t.prototype.toString = function () {
      var n = ''
      return (
        this.is_empty()
          ? this.__parent.indent_empty_lines &&
            (n = this.__parent.get_indent_string(this.__indent_count))
          : ((n = this.__parent.get_indent_string(
              this.__indent_count,
              this.__alignment_count,
            )),
            (n += this.__items.join(''))),
        n
      )
    })
  function e(n, o) {
    ;(this.__cache = ['']),
      (this.__indent_size = n.indent_size),
      (this.__indent_string = n.indent_char),
      n.indent_with_tabs ||
        (this.__indent_string = new Array(n.indent_size + 1).join(
          n.indent_char,
        )),
      (o = o || ''),
      n.indent_level > 0 &&
        (o = new Array(n.indent_level + 1).join(this.__indent_string)),
      (this.__base_string = o),
      (this.__base_string_length = o.length)
  }
  ;(e.prototype.get_indent_size = function (n, o) {
    var l = this.__base_string_length
    return (
      (o = o || 0), n < 0 && (l = 0), (l += n * this.__indent_size), (l += o), l
    )
  }),
    (e.prototype.get_indent_string = function (n, o) {
      var l = this.__base_string
      return (
        (o = o || 0),
        n < 0 && ((n = 0), (l = '')),
        (o += n * this.__indent_size),
        this.__ensure_cache(o),
        (l += this.__cache[o]),
        l
      )
    }),
    (e.prototype.__ensure_cache = function (n) {
      for (; n >= this.__cache.length; ) this.__add_column()
    }),
    (e.prototype.__add_column = function () {
      var n = this.__cache.length,
        o = 0,
        l = ''
      this.__indent_size &&
        n >= this.__indent_size &&
        ((o = Math.floor(n / this.__indent_size)),
        (n -= o * this.__indent_size),
        (l = new Array(o + 1).join(this.__indent_string))),
        n && (l += new Array(n + 1).join(' ')),
        this.__cache.push(l)
    })
  function i(n, o) {
    ;(this.__indent_cache = new e(n, o)),
      (this.raw = !1),
      (this._end_with_newline = n.end_with_newline),
      (this.indent_size = n.indent_size),
      (this.wrap_line_length = n.wrap_line_length),
      (this.indent_empty_lines = n.indent_empty_lines),
      (this.__lines = []),
      (this.previous_line = null),
      (this.current_line = null),
      (this.next_line = new t(this)),
      (this.space_before_token = !1),
      (this.non_breaking_space = !1),
      (this.previous_token_wrapped = !1),
      this.__add_outputline()
  }
  return (
    (i.prototype.__add_outputline = function () {
      ;(this.previous_line = this.current_line),
        (this.current_line = this.next_line.clone_empty()),
        this.__lines.push(this.current_line)
    }),
    (i.prototype.get_line_number = function () {
      return this.__lines.length
    }),
    (i.prototype.get_indent_string = function (n, o) {
      return this.__indent_cache.get_indent_string(n, o)
    }),
    (i.prototype.get_indent_size = function (n, o) {
      return this.__indent_cache.get_indent_size(n, o)
    }),
    (i.prototype.is_empty = function () {
      return !this.previous_line && this.current_line.is_empty()
    }),
    (i.prototype.add_new_line = function (n) {
      return this.is_empty() || (!n && this.just_added_newline())
        ? !1
        : (this.raw || this.__add_outputline(), !0)
    }),
    (i.prototype.get_code = function (n) {
      this.trim(!0)
      var o = this.current_line.pop()
      o &&
        (o[o.length - 1] ===
          `
` && (o = o.replace(/\n+$/g, '')),
        this.current_line.push(o)),
        this._end_with_newline && this.__add_outputline()
      var l = this.__lines.join(`
`)
      return (
        n !==
          `
` && (l = l.replace(/[\n]/g, n)),
        l
      )
    }),
    (i.prototype.set_wrap_point = function () {
      this.current_line._set_wrap_point()
    }),
    (i.prototype.set_indent = function (n, o) {
      return (
        (n = n || 0),
        (o = o || 0),
        this.next_line.set_indent(n, o),
        this.__lines.length > 1
          ? (this.current_line.set_indent(n, o), !0)
          : (this.current_line.set_indent(), !1)
      )
    }),
    (i.prototype.add_raw_token = function (n) {
      for (var o = 0; o < n.newlines; o++) this.__add_outputline()
      this.current_line.set_indent(-1),
        this.current_line.push(n.whitespace_before),
        this.current_line.push(n.text),
        (this.space_before_token = !1),
        (this.non_breaking_space = !1),
        (this.previous_token_wrapped = !1)
    }),
    (i.prototype.add_token = function (n) {
      this.__add_space_before_token(),
        this.current_line.push(n),
        (this.space_before_token = !1),
        (this.non_breaking_space = !1),
        (this.previous_token_wrapped = this.current_line._allow_wrap())
    }),
    (i.prototype.__add_space_before_token = function () {
      this.space_before_token &&
        !this.just_added_newline() &&
        (this.non_breaking_space || this.set_wrap_point(),
        this.current_line.push(' '))
    }),
    (i.prototype.remove_indent = function (n) {
      for (var o = this.__lines.length; n < o; )
        this.__lines[n]._remove_indent(), n++
      this.current_line._remove_wrap_indent()
    }),
    (i.prototype.trim = function (n) {
      for (
        n = n === void 0 ? !1 : n, this.current_line.trim();
        n && this.__lines.length > 1 && this.current_line.is_empty();

      )
        this.__lines.pop(),
          (this.current_line = this.__lines[this.__lines.length - 1]),
          this.current_line.trim()
      this.previous_line =
        this.__lines.length > 1 ? this.__lines[this.__lines.length - 2] : null
    }),
    (i.prototype.just_added_newline = function () {
      return this.current_line.is_empty()
    }),
    (i.prototype.just_added_blankline = function () {
      return (
        this.is_empty() ||
        (this.current_line.is_empty() && this.previous_line.is_empty())
      )
    }),
    (i.prototype.ensure_empty_line_above = function (n, o) {
      for (var l = this.__lines.length - 2; l >= 0; ) {
        var u = this.__lines[l]
        if (u.is_empty()) break
        if (u.item(0).indexOf(n) !== 0 && u.item(-1) !== o) {
          this.__lines.splice(l + 1, 0, new t(this)),
            (this.previous_line = this.__lines[this.__lines.length - 2])
          break
        }
        l--
      }
    }),
    (re.Output = i),
    re
  )
}
var oe = {},
  Ve
function Pn() {
  if (Ve) return oe
  Ve = 1
  function t(e, i, n, o) {
    ;(this.type = e),
      (this.text = i),
      (this.comments_before = null),
      (this.newlines = n || 0),
      (this.whitespace_before = o || ''),
      (this.parent = null),
      (this.next = null),
      (this.previous = null),
      (this.opened = null),
      (this.closed = null),
      (this.directives = null)
  }
  return (oe.Token = t), oe
}
var Xe = {},
  Ze
function Bn() {
  return (
    Ze ||
      ((Ze = 1),
      (function (t) {
        var e = '\\x23\\x24\\x40\\x41-\\x5a\\x5f\\x61-\\x7a',
          i = '\\x24\\x30-\\x39\\x41-\\x5a\\x5f\\x61-\\x7a',
          n =
            '\\xaa\\xb5\\xba\\xc0-\\xd6\\xd8-\\xf6\\xf8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0527\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0620-\\u064a\\u066e\\u066f\\u0671-\\u06d3\\u06d5\\u06e5\\u06e6\\u06ee\\u06ef\\u06fa-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07ca-\\u07ea\\u07f4\\u07f5\\u07fa\\u0800-\\u0815\\u081a\\u0824\\u0828\\u0840-\\u0858\\u08a0\\u08a2-\\u08ac\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0971-\\u0977\\u0979-\\u097f\\u0985-\\u098c\\u098f\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc\\u09dd\\u09df-\\u09e1\\u09f0\\u09f1\\u0a05-\\u0a0a\\u0a0f\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32\\u0a33\\u0a35\\u0a36\\u0a38\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0\\u0ae1\\u0b05-\\u0b0c\\u0b0f\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c\\u0b5d\\u0b5f-\\u0b61\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99\\u0b9a\\u0b9c\\u0b9e\\u0b9f\\u0ba3\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58\\u0c59\\u0c60\\u0c61\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0\\u0ce1\\u0cf1\\u0cf2\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d3a\\u0d3d\\u0d4e\\u0d60\\u0d61\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e46\\u0e81\\u0e82\\u0e84\\u0e87\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa\\u0eab\\u0ead-\\u0eb0\\u0eb2\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0edc-\\u0edf\\u0f00\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8c\\u1000-\\u102a\\u103f\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u10a0-\\u10c5\\u10c7\\u10cd\\u10d0-\\u10fa\\u10fc-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u167f\\u1681-\\u169a\\u16a0-\\u16ea\\u16ee-\\u16f0\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u18b0-\\u18f5\\u1900-\\u191c\\u1950-\\u196d\\u1970-\\u1974\\u1980-\\u19ab\\u19c1-\\u19c7\\u1a00-\\u1a16\\u1a20-\\u1a54\\u1aa7\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b83-\\u1ba0\\u1bae\\u1baf\\u1bba-\\u1be5\\u1c00-\\u1c23\\u1c4d-\\u1c4f\\u1c5a-\\u1c7d\\u1ce9-\\u1cec\\u1cee-\\u1cf1\\u1cf5\\u1cf6\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u2071\\u207f\\u2090-\\u209c\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2160-\\u2188\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2ce4\\u2ceb-\\u2cee\\u2cf2\\u2cf3\\u2d00-\\u2d25\\u2d27\\u2d2d\\u2d30-\\u2d67\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31ba\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fcc\\ua000-\\ua48c\\ua4d0-\\ua4fd\\ua500-\\ua60c\\ua610-\\ua61f\\ua62a\\ua62b\\ua640-\\ua66e\\ua67f-\\ua697\\ua6a0-\\ua6ef\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78e\\ua790-\\ua793\\ua7a0-\\ua7aa\\ua7f8-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8f2-\\ua8f7\\ua8fb\\ua90a-\\ua925\\ua930-\\ua946\\ua960-\\ua97c\\ua984-\\ua9b2\\ua9cf\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa60-\\uaa76\\uaa7a\\uaa80-\\uaaaf\\uaab1\\uaab5\\uaab6\\uaab9-\\uaabd\\uaac0\\uaac2\\uaadb-\\uaadd\\uaae0-\\uaaea\\uaaf2-\\uaaf4\\uab01-\\uab06\\uab09-\\uab0e\\uab11-\\uab16\\uab20-\\uab26\\uab28-\\uab2e\\uabc0-\\uabe2\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40\\ufb41\\ufb43\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff21-\\uff3a\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc',
          o =
            '\\u0300-\\u036f\\u0483-\\u0487\\u0591-\\u05bd\\u05bf\\u05c1\\u05c2\\u05c4\\u05c5\\u05c7\\u0610-\\u061a\\u0620-\\u0649\\u0672-\\u06d3\\u06e7-\\u06e8\\u06fb-\\u06fc\\u0730-\\u074a\\u0800-\\u0814\\u081b-\\u0823\\u0825-\\u0827\\u0829-\\u082d\\u0840-\\u0857\\u08e4-\\u08fe\\u0900-\\u0903\\u093a-\\u093c\\u093e-\\u094f\\u0951-\\u0957\\u0962-\\u0963\\u0966-\\u096f\\u0981-\\u0983\\u09bc\\u09be-\\u09c4\\u09c7\\u09c8\\u09d7\\u09df-\\u09e0\\u0a01-\\u0a03\\u0a3c\\u0a3e-\\u0a42\\u0a47\\u0a48\\u0a4b-\\u0a4d\\u0a51\\u0a66-\\u0a71\\u0a75\\u0a81-\\u0a83\\u0abc\\u0abe-\\u0ac5\\u0ac7-\\u0ac9\\u0acb-\\u0acd\\u0ae2-\\u0ae3\\u0ae6-\\u0aef\\u0b01-\\u0b03\\u0b3c\\u0b3e-\\u0b44\\u0b47\\u0b48\\u0b4b-\\u0b4d\\u0b56\\u0b57\\u0b5f-\\u0b60\\u0b66-\\u0b6f\\u0b82\\u0bbe-\\u0bc2\\u0bc6-\\u0bc8\\u0bca-\\u0bcd\\u0bd7\\u0be6-\\u0bef\\u0c01-\\u0c03\\u0c46-\\u0c48\\u0c4a-\\u0c4d\\u0c55\\u0c56\\u0c62-\\u0c63\\u0c66-\\u0c6f\\u0c82\\u0c83\\u0cbc\\u0cbe-\\u0cc4\\u0cc6-\\u0cc8\\u0cca-\\u0ccd\\u0cd5\\u0cd6\\u0ce2-\\u0ce3\\u0ce6-\\u0cef\\u0d02\\u0d03\\u0d46-\\u0d48\\u0d57\\u0d62-\\u0d63\\u0d66-\\u0d6f\\u0d82\\u0d83\\u0dca\\u0dcf-\\u0dd4\\u0dd6\\u0dd8-\\u0ddf\\u0df2\\u0df3\\u0e34-\\u0e3a\\u0e40-\\u0e45\\u0e50-\\u0e59\\u0eb4-\\u0eb9\\u0ec8-\\u0ecd\\u0ed0-\\u0ed9\\u0f18\\u0f19\\u0f20-\\u0f29\\u0f35\\u0f37\\u0f39\\u0f41-\\u0f47\\u0f71-\\u0f84\\u0f86-\\u0f87\\u0f8d-\\u0f97\\u0f99-\\u0fbc\\u0fc6\\u1000-\\u1029\\u1040-\\u1049\\u1067-\\u106d\\u1071-\\u1074\\u1082-\\u108d\\u108f-\\u109d\\u135d-\\u135f\\u170e-\\u1710\\u1720-\\u1730\\u1740-\\u1750\\u1772\\u1773\\u1780-\\u17b2\\u17dd\\u17e0-\\u17e9\\u180b-\\u180d\\u1810-\\u1819\\u1920-\\u192b\\u1930-\\u193b\\u1951-\\u196d\\u19b0-\\u19c0\\u19c8-\\u19c9\\u19d0-\\u19d9\\u1a00-\\u1a15\\u1a20-\\u1a53\\u1a60-\\u1a7c\\u1a7f-\\u1a89\\u1a90-\\u1a99\\u1b46-\\u1b4b\\u1b50-\\u1b59\\u1b6b-\\u1b73\\u1bb0-\\u1bb9\\u1be6-\\u1bf3\\u1c00-\\u1c22\\u1c40-\\u1c49\\u1c5b-\\u1c7d\\u1cd0-\\u1cd2\\u1d00-\\u1dbe\\u1e01-\\u1f15\\u200c\\u200d\\u203f\\u2040\\u2054\\u20d0-\\u20dc\\u20e1\\u20e5-\\u20f0\\u2d81-\\u2d96\\u2de0-\\u2dff\\u3021-\\u3028\\u3099\\u309a\\ua640-\\ua66d\\ua674-\\ua67d\\ua69f\\ua6f0-\\ua6f1\\ua7f8-\\ua800\\ua806\\ua80b\\ua823-\\ua827\\ua880-\\ua881\\ua8b4-\\ua8c4\\ua8d0-\\ua8d9\\ua8f3-\\ua8f7\\ua900-\\ua909\\ua926-\\ua92d\\ua930-\\ua945\\ua980-\\ua983\\ua9b3-\\ua9c0\\uaa00-\\uaa27\\uaa40-\\uaa41\\uaa4c-\\uaa4d\\uaa50-\\uaa59\\uaa7b\\uaae0-\\uaae9\\uaaf2-\\uaaf3\\uabc0-\\uabe1\\uabec\\uabed\\uabf0-\\uabf9\\ufb20-\\ufb28\\ufe00-\\ufe0f\\ufe20-\\ufe26\\ufe33\\ufe34\\ufe4d-\\ufe4f\\uff10-\\uff19\\uff3f',
          l = '\\\\u[0-9a-fA-F]{4}|\\\\u\\{[0-9a-fA-F]+\\}',
          u = '(?:' + l + '|[' + e + n + '])',
          a = '(?:' + l + '|[' + i + n + o + '])*'
        ;(t.identifier = new RegExp(u + a, 'g')),
          (t.identifierStart = new RegExp(u)),
          (t.identifierMatch = new RegExp(
            '(?:' + l + '|[' + i + n + o + '])+',
          )),
          (t.newline = /[\n\r\u2028\u2029]/),
          (t.lineBreak = new RegExp(
            `\r
|` + t.newline.source,
          )),
          (t.allLineBreaks = new RegExp(t.lineBreak.source, 'g'))
      })(Xe)),
    Xe
  )
}
var _e = {},
  Et = {},
  Qe
function Ee() {
  if (Qe) return Et
  Qe = 1
  function t(n, o) {
    ;(this.raw_options = e(n, o)),
      (this.disabled = this._get_boolean('disabled')),
      (this.eol = this._get_characters('eol', 'auto')),
      (this.end_with_newline = this._get_boolean('end_with_newline')),
      (this.indent_size = this._get_number('indent_size', 4)),
      (this.indent_char = this._get_characters('indent_char', ' ')),
      (this.indent_level = this._get_number('indent_level')),
      (this.preserve_newlines = this._get_boolean('preserve_newlines', !0)),
      (this.max_preserve_newlines = this._get_number(
        'max_preserve_newlines',
        32786,
      )),
      this.preserve_newlines || (this.max_preserve_newlines = 0),
      (this.indent_with_tabs = this._get_boolean(
        'indent_with_tabs',
        this.indent_char === '	',
      )),
      this.indent_with_tabs &&
        ((this.indent_char = '	'),
        this.indent_size === 1 && (this.indent_size = 4)),
      (this.wrap_line_length = this._get_number(
        'wrap_line_length',
        this._get_number('max_char'),
      )),
      (this.indent_empty_lines = this._get_boolean('indent_empty_lines')),
      (this.templating = this._get_selection_list(
        'templating',
        [
          'auto',
          'none',
          'angular',
          'django',
          'erb',
          'handlebars',
          'php',
          'smarty',
        ],
        ['auto'],
      ))
  }
  ;(t.prototype._get_array = function (n, o) {
    var l = this.raw_options[n],
      u = o || []
    return (
      typeof l == 'object'
        ? l !== null && typeof l.concat == 'function' && (u = l.concat())
        : typeof l == 'string' && (u = l.split(/[^a-zA-Z0-9_\/\-]+/)),
      u
    )
  }),
    (t.prototype._get_boolean = function (n, o) {
      var l = this.raw_options[n],
        u = l === void 0 ? !!o : !!l
      return u
    }),
    (t.prototype._get_characters = function (n, o) {
      var l = this.raw_options[n],
        u = o || ''
      return (
        typeof l == 'string' &&
          (u = l
            .replace(/\\r/, '\r')
            .replace(
              /\\n/,
              `
`,
            )
            .replace(/\\t/, '	')),
        u
      )
    }),
    (t.prototype._get_number = function (n, o) {
      var l = this.raw_options[n]
      ;(o = parseInt(o, 10)), isNaN(o) && (o = 0)
      var u = parseInt(l, 10)
      return isNaN(u) && (u = o), u
    }),
    (t.prototype._get_selection = function (n, o, l) {
      var u = this._get_selection_list(n, o, l)
      if (u.length !== 1)
        throw new Error(
          "Invalid Option Value: The option '" +
            n +
            `' can only be one of the following values:
` +
            o +
            `
You passed in: '` +
            this.raw_options[n] +
            "'",
        )
      return u[0]
    }),
    (t.prototype._get_selection_list = function (n, o, l) {
      if (!o || o.length === 0)
        throw new Error('Selection list cannot be empty.')
      if (((l = l || [o[0]]), !this._is_valid_selection(l, o)))
        throw new Error('Invalid Default Value!')
      var u = this._get_array(n, l)
      if (!this._is_valid_selection(u, o))
        throw new Error(
          "Invalid Option Value: The option '" +
            n +
            `' can contain only the following values:
` +
            o +
            `
You passed in: '` +
            this.raw_options[n] +
            "'",
        )
      return u
    }),
    (t.prototype._is_valid_selection = function (n, o) {
      return (
        n.length &&
        o.length &&
        !n.some(function (l) {
          return o.indexOf(l) === -1
        })
      )
    })
  function e(n, o) {
    var l = {}
    n = i(n)
    var u
    for (u in n) u !== o && (l[u] = n[u])
    if (o && n[o]) for (u in n[o]) l[u] = n[o][u]
    return l
  }
  function i(n) {
    var o = {},
      l
    for (l in n) {
      var u = l.replace(/-/g, '_')
      o[u] = n[l]
    }
    return o
  }
  return (Et.Options = t), (Et.normalizeOpts = i), (Et.mergeOpts = e), Et
}
var qe
function Un() {
  if (qe) return _e
  qe = 1
  var t = Ee().Options,
    e = ['before-newline', 'after-newline', 'preserve-newline']
  function i(n) {
    t.call(this, n, 'js')
    var o = this.raw_options.brace_style || null
    o === 'expand-strict'
      ? (this.raw_options.brace_style = 'expand')
      : o === 'collapse-preserve-inline'
        ? (this.raw_options.brace_style = 'collapse,preserve-inline')
        : this.raw_options.braces_on_own_line !== void 0 &&
          (this.raw_options.brace_style = this.raw_options.braces_on_own_line
            ? 'expand'
            : 'collapse')
    var l = this._get_selection_list('brace_style', [
      'collapse',
      'expand',
      'end-expand',
      'none',
      'preserve-inline',
    ])
    ;(this.brace_preserve_inline = !1), (this.brace_style = 'collapse')
    for (var u = 0; u < l.length; u++)
      l[u] === 'preserve-inline'
        ? (this.brace_preserve_inline = !0)
        : (this.brace_style = l[u])
    ;(this.unindent_chained_methods = this._get_boolean(
      'unindent_chained_methods',
    )),
      (this.break_chained_methods = this._get_boolean('break_chained_methods')),
      (this.space_in_paren = this._get_boolean('space_in_paren')),
      (this.space_in_empty_paren = this._get_boolean('space_in_empty_paren')),
      (this.jslint_happy = this._get_boolean('jslint_happy')),
      (this.space_after_anon_function = this._get_boolean(
        'space_after_anon_function',
      )),
      (this.space_after_named_function = this._get_boolean(
        'space_after_named_function',
      )),
      (this.keep_array_indentation = this._get_boolean(
        'keep_array_indentation',
      )),
      (this.space_before_conditional = this._get_boolean(
        'space_before_conditional',
        !0,
      )),
      (this.unescape_strings = this._get_boolean('unescape_strings')),
      (this.e4x = this._get_boolean('e4x')),
      (this.comma_first = this._get_boolean('comma_first')),
      (this.operator_position = this._get_selection('operator_position', e)),
      (this.test_output_raw = this._get_boolean('test_output_raw')),
      this.jslint_happy && (this.space_after_anon_function = !0)
  }
  return (i.prototype = new t()), (_e.Options = i), _e
}
var yt = {},
  le = {},
  Je
function Oe() {
  if (Je) return le
  Je = 1
  var t = RegExp.prototype.hasOwnProperty('sticky')
  function e(i) {
    ;(this.__input = i || ''),
      (this.__input_length = this.__input.length),
      (this.__position = 0)
  }
  return (
    (e.prototype.restart = function () {
      this.__position = 0
    }),
    (e.prototype.back = function () {
      this.__position > 0 && (this.__position -= 1)
    }),
    (e.prototype.hasNext = function () {
      return this.__position < this.__input_length
    }),
    (e.prototype.next = function () {
      var i = null
      return (
        this.hasNext() &&
          ((i = this.__input.charAt(this.__position)), (this.__position += 1)),
        i
      )
    }),
    (e.prototype.peek = function (i) {
      var n = null
      return (
        (i = i || 0),
        (i += this.__position),
        i >= 0 && i < this.__input_length && (n = this.__input.charAt(i)),
        n
      )
    }),
    (e.prototype.__match = function (i, n) {
      i.lastIndex = n
      var o = i.exec(this.__input)
      return o && !(t && i.sticky) && o.index !== n && (o = null), o
    }),
    (e.prototype.test = function (i, n) {
      return (
        (n = n || 0),
        (n += this.__position),
        n >= 0 && n < this.__input_length ? !!this.__match(i, n) : !1
      )
    }),
    (e.prototype.testChar = function (i, n) {
      var o = this.peek(n)
      return (i.lastIndex = 0), o !== null && i.test(o)
    }),
    (e.prototype.match = function (i) {
      var n = this.__match(i, this.__position)
      return n ? (this.__position += n[0].length) : (n = null), n
    }),
    (e.prototype.read = function (i, n, o) {
      var l = '',
        u
      return (
        i && ((u = this.match(i)), u && (l += u[0])),
        n && (u || !i) && (l += this.readUntil(n, o)),
        l
      )
    }),
    (e.prototype.readUntil = function (i, n) {
      var o = '',
        l = this.__position
      i.lastIndex = this.__position
      var u = i.exec(this.__input)
      return (
        u
          ? ((l = u.index), n && (l += u[0].length))
          : (l = this.__input_length),
        (o = this.__input.substring(this.__position, l)),
        (this.__position = l),
        o
      )
    }),
    (e.prototype.readUntilAfter = function (i) {
      return this.readUntil(i, !0)
    }),
    (e.prototype.get_regexp = function (i, n) {
      var o = null,
        l = 'g'
      return (
        n && t && (l = 'y'),
        typeof i == 'string' && i !== ''
          ? (o = new RegExp(i, l))
          : i && (o = new RegExp(i.source, l)),
        o
      )
    }),
    (e.prototype.get_literal_regexp = function (i) {
      return RegExp(i.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
    }),
    (e.prototype.peekUntilAfter = function (i) {
      var n = this.__position,
        o = this.readUntilAfter(i)
      return (this.__position = n), o
    }),
    (e.prototype.lookBack = function (i) {
      var n = this.__position - 1
      return (
        n >= i.length &&
        this.__input.substring(n - i.length, n).toLowerCase() === i
      )
    }),
    (le.InputScanner = e),
    le
  )
}
var It = {},
  ue = {},
  Ye
function Ji() {
  if (Ye) return ue
  Ye = 1
  function t(e) {
    ;(this.__tokens = []),
      (this.__tokens_length = this.__tokens.length),
      (this.__position = 0),
      (this.__parent_token = e)
  }
  return (
    (t.prototype.restart = function () {
      this.__position = 0
    }),
    (t.prototype.isEmpty = function () {
      return this.__tokens_length === 0
    }),
    (t.prototype.hasNext = function () {
      return this.__position < this.__tokens_length
    }),
    (t.prototype.next = function () {
      var e = null
      return (
        this.hasNext() &&
          ((e = this.__tokens[this.__position]), (this.__position += 1)),
        e
      )
    }),
    (t.prototype.peek = function (e) {
      var i = null
      return (
        (e = e || 0),
        (e += this.__position),
        e >= 0 && e < this.__tokens_length && (i = this.__tokens[e]),
        i
      )
    }),
    (t.prototype.add = function (e) {
      this.__parent_token && (e.parent = this.__parent_token),
        this.__tokens.push(e),
        (this.__tokens_length += 1)
    }),
    (ue.TokenStream = t),
    ue
  )
}
var ce = {},
  pe = {},
  tn
function Qt() {
  if (tn) return pe
  tn = 1
  function t(e, i) {
    ;(this._input = e),
      (this._starting_pattern = null),
      (this._match_pattern = null),
      (this._until_pattern = null),
      (this._until_after = !1),
      i &&
        ((this._starting_pattern = this._input.get_regexp(
          i._starting_pattern,
          !0,
        )),
        (this._match_pattern = this._input.get_regexp(i._match_pattern, !0)),
        (this._until_pattern = this._input.get_regexp(i._until_pattern)),
        (this._until_after = i._until_after))
  }
  return (
    (t.prototype.read = function () {
      var e = this._input.read(this._starting_pattern)
      return (
        (!this._starting_pattern || e) &&
          (e += this._input.read(
            this._match_pattern,
            this._until_pattern,
            this._until_after,
          )),
        e
      )
    }),
    (t.prototype.read_match = function () {
      return this._input.match(this._match_pattern)
    }),
    (t.prototype.until_after = function (e) {
      var i = this._create()
      return (
        (i._until_after = !0),
        (i._until_pattern = this._input.get_regexp(e)),
        i._update(),
        i
      )
    }),
    (t.prototype.until = function (e) {
      var i = this._create()
      return (
        (i._until_after = !1),
        (i._until_pattern = this._input.get_regexp(e)),
        i._update(),
        i
      )
    }),
    (t.prototype.starting_with = function (e) {
      var i = this._create()
      return (
        (i._starting_pattern = this._input.get_regexp(e, !0)), i._update(), i
      )
    }),
    (t.prototype.matching = function (e) {
      var i = this._create()
      return (i._match_pattern = this._input.get_regexp(e, !0)), i._update(), i
    }),
    (t.prototype._create = function () {
      return new t(this._input, this)
    }),
    (t.prototype._update = function () {}),
    (pe.Pattern = t),
    pe
  )
}
var en
function Yi() {
  if (en) return ce
  en = 1
  var t = Qt().Pattern
  function e(i, n) {
    t.call(this, i, n),
      n
        ? (this._line_regexp = this._input.get_regexp(n._line_regexp))
        : this.__set_whitespace_patterns('', ''),
      (this.newline_count = 0),
      (this.whitespace_before_token = '')
  }
  return (
    (e.prototype = new t()),
    (e.prototype.__set_whitespace_patterns = function (i, n) {
      ;(i += '\\t '),
        (n += '\\n\\r'),
        (this._match_pattern = this._input.get_regexp('[' + i + n + ']+', !0)),
        (this._newline_regexp = this._input.get_regexp('\\r\\n|[' + n + ']'))
    }),
    (e.prototype.read = function () {
      ;(this.newline_count = 0), (this.whitespace_before_token = '')
      var i = this._input.read(this._match_pattern)
      if (i === ' ') this.whitespace_before_token = ' '
      else if (i) {
        var n = this.__split(this._newline_regexp, i)
        ;(this.newline_count = n.length - 1),
          (this.whitespace_before_token = n[this.newline_count])
      }
      return i
    }),
    (e.prototype.matching = function (i, n) {
      var o = this._create()
      return o.__set_whitespace_patterns(i, n), o._update(), o
    }),
    (e.prototype._create = function () {
      return new e(this._input, this)
    }),
    (e.prototype.__split = function (i, n) {
      i.lastIndex = 0
      for (var o = 0, l = [], u = i.exec(n); u; )
        l.push(n.substring(o, u.index)),
          (o = u.index + u[0].length),
          (u = i.exec(n))
      return o < n.length ? l.push(n.substring(o, n.length)) : l.push(''), l
    }),
    (ce.WhitespacePattern = e),
    ce
  )
}
var nn
function Gt() {
  if (nn) return It
  nn = 1
  var t = Oe().InputScanner,
    e = Pn().Token,
    i = Ji().TokenStream,
    n = Yi().WhitespacePattern,
    o = { START: 'TK_START', RAW: 'TK_RAW', EOF: 'TK_EOF' },
    l = function (u, a) {
      ;(this._input = new t(u)),
        (this._options = a || {}),
        (this.__tokens = null),
        (this._patterns = {}),
        (this._patterns.whitespace = new n(this._input))
    }
  return (
    (l.prototype.tokenize = function () {
      this._input.restart(), (this.__tokens = new i()), this._reset()
      for (
        var u, a = new e(o.START, ''), _ = null, h = [], f = new i();
        a.type !== o.EOF;

      ) {
        for (u = this._get_next_token(a, _); this._is_comment(u); )
          f.add(u), (u = this._get_next_token(a, _))
        f.isEmpty() || ((u.comments_before = f), (f = new i())),
          (u.parent = _),
          this._is_opening(u)
            ? (h.push(_), (_ = u))
            : _ &&
              this._is_closing(u, _) &&
              ((u.opened = _), (_.closed = u), (_ = h.pop()), (u.parent = _)),
          (u.previous = a),
          (a.next = u),
          this.__tokens.add(u),
          (a = u)
      }
      return this.__tokens
    }),
    (l.prototype._is_first_token = function () {
      return this.__tokens.isEmpty()
    }),
    (l.prototype._reset = function () {}),
    (l.prototype._get_next_token = function (u, a) {
      this._readWhitespace()
      var _ = this._input.read(/.+/g)
      return _ ? this._create_token(o.RAW, _) : this._create_token(o.EOF, '')
    }),
    (l.prototype._is_comment = function (u) {
      return !1
    }),
    (l.prototype._is_opening = function (u) {
      return !1
    }),
    (l.prototype._is_closing = function (u, a) {
      return !1
    }),
    (l.prototype._create_token = function (u, a) {
      var _ = new e(
        u,
        a,
        this._patterns.whitespace.newline_count,
        this._patterns.whitespace.whitespace_before_token,
      )
      return _
    }),
    (l.prototype._readWhitespace = function () {
      return this._patterns.whitespace.read()
    }),
    (It.Tokenizer = l),
    (It.TOKEN = o),
    It
  )
}
var he = {},
  sn
function Ae() {
  if (sn) return he
  sn = 1
  function t(e, i) {
    ;(e = typeof e == 'string' ? e : e.source),
      (i = typeof i == 'string' ? i : i.source),
      (this.__directives_block_pattern = new RegExp(
        e + / beautify( \w+[:]\w+)+ /.source + i,
        'g',
      )),
      (this.__directive_pattern = / (\w+)[:](\w+)/g),
      (this.__directives_end_ignore_pattern = new RegExp(
        e + /\sbeautify\signore:end\s/.source + i,
        'g',
      ))
  }
  return (
    (t.prototype.get_directives = function (e) {
      if (!e.match(this.__directives_block_pattern)) return null
      var i = {}
      this.__directive_pattern.lastIndex = 0
      for (var n = this.__directive_pattern.exec(e); n; )
        (i[n[1]] = n[2]), (n = this.__directive_pattern.exec(e))
      return i
    }),
    (t.prototype.readIgnored = function (e) {
      return e.readUntilAfter(this.__directives_end_ignore_pattern)
    }),
    (he.Directives = t),
    he
  )
}
var de = {},
  an
function zn() {
  if (an) return de
  an = 1
  var t = Qt().Pattern,
    e = {
      django: !1,
      erb: !1,
      handlebars: !1,
      php: !1,
      smarty: !1,
      angular: !1,
    }
  function i(n, o) {
    t.call(this, n, o),
      (this.__template_pattern = null),
      (this._disabled = Object.assign({}, e)),
      (this._excluded = Object.assign({}, e)),
      o &&
        ((this.__template_pattern = this._input.get_regexp(
          o.__template_pattern,
        )),
        (this._excluded = Object.assign(this._excluded, o._excluded)),
        (this._disabled = Object.assign(this._disabled, o._disabled)))
    var l = new t(n)
    this.__patterns = {
      handlebars_comment: l.starting_with(/{{!--/).until_after(/--}}/),
      handlebars_unescaped: l.starting_with(/{{{/).until_after(/}}}/),
      handlebars: l.starting_with(/{{/).until_after(/}}/),
      php: l.starting_with(/<\?(?:[= ]|php)/).until_after(/\?>/),
      erb: l.starting_with(/<%[^%]/).until_after(/[^%]%>/),
      django: l.starting_with(/{%/).until_after(/%}/),
      django_value: l.starting_with(/{{/).until_after(/}}/),
      django_comment: l.starting_with(/{#/).until_after(/#}/),
      smarty: l.starting_with(/{(?=[^}{\s\n])/).until_after(/[^\s\n]}/),
      smarty_comment: l.starting_with(/{\*/).until_after(/\*}/),
      smarty_literal: l.starting_with(/{literal}/).until_after(/{\/literal}/),
    }
  }
  return (
    (i.prototype = new t()),
    (i.prototype._create = function () {
      return new i(this._input, this)
    }),
    (i.prototype._update = function () {
      this.__set_templated_pattern()
    }),
    (i.prototype.disable = function (n) {
      var o = this._create()
      return (o._disabled[n] = !0), o._update(), o
    }),
    (i.prototype.read_options = function (n) {
      var o = this._create()
      for (var l in e) o._disabled[l] = n.templating.indexOf(l) === -1
      return o._update(), o
    }),
    (i.prototype.exclude = function (n) {
      var o = this._create()
      return (o._excluded[n] = !0), o._update(), o
    }),
    (i.prototype.read = function () {
      var n = ''
      this._match_pattern
        ? (n = this._input.read(this._starting_pattern))
        : (n = this._input.read(
            this._starting_pattern,
            this.__template_pattern,
          ))
      for (var o = this._read_template(); o; )
        this._match_pattern
          ? (o += this._input.read(this._match_pattern))
          : (o += this._input.readUntil(this.__template_pattern)),
          (n += o),
          (o = this._read_template())
      return (
        this._until_after &&
          (n += this._input.readUntilAfter(this._until_pattern)),
        n
      )
    }),
    (i.prototype.__set_templated_pattern = function () {
      var n = []
      this._disabled.php ||
        n.push(this.__patterns.php._starting_pattern.source),
        this._disabled.handlebars ||
          n.push(this.__patterns.handlebars._starting_pattern.source),
        this._disabled.erb ||
          n.push(this.__patterns.erb._starting_pattern.source),
        this._disabled.django ||
          (n.push(this.__patterns.django._starting_pattern.source),
          n.push(this.__patterns.django_value._starting_pattern.source),
          n.push(this.__patterns.django_comment._starting_pattern.source)),
        this._disabled.smarty ||
          n.push(this.__patterns.smarty._starting_pattern.source),
        this._until_pattern && n.push(this._until_pattern.source),
        (this.__template_pattern = this._input.get_regexp(
          '(?:' + n.join('|') + ')',
        ))
    }),
    (i.prototype._read_template = function () {
      var n = '',
        o = this._input.peek()
      if (o === '<') {
        var l = this._input.peek(1)
        !this._disabled.php &&
          !this._excluded.php &&
          l === '?' &&
          (n = n || this.__patterns.php.read()),
          !this._disabled.erb &&
            !this._excluded.erb &&
            l === '%' &&
            (n = n || this.__patterns.erb.read())
      } else
        o === '{' &&
          (!this._disabled.handlebars &&
            !this._excluded.handlebars &&
            ((n = n || this.__patterns.handlebars_comment.read()),
            (n = n || this.__patterns.handlebars_unescaped.read()),
            (n = n || this.__patterns.handlebars.read())),
          this._disabled.django ||
            (!this._excluded.django &&
              !this._excluded.handlebars &&
              (n = n || this.__patterns.django_value.read()),
            this._excluded.django ||
              ((n = n || this.__patterns.django_comment.read()),
              (n = n || this.__patterns.django.read()))),
          this._disabled.smarty ||
            (this._disabled.django &&
              this._disabled.handlebars &&
              ((n = n || this.__patterns.smarty_comment.read()),
              (n = n || this.__patterns.smarty_literal.read()),
              (n = n || this.__patterns.smarty.read()))))
      return n
    }),
    (de.TemplatablePattern = i),
    de
  )
}
var rn
function Dt() {
  if (rn) return yt
  rn = 1
  var t = Oe().InputScanner,
    e = Gt().Tokenizer,
    i = Gt().TOKEN,
    n = Ae().Directives,
    o = Bn(),
    l = Qt().Pattern,
    u = zn().TemplatablePattern
  function a(c, b) {
    return b.indexOf(c) !== -1
  }
  var _ = {
      START_EXPR: 'TK_START_EXPR',
      END_EXPR: 'TK_END_EXPR',
      START_BLOCK: 'TK_START_BLOCK',
      END_BLOCK: 'TK_END_BLOCK',
      WORD: 'TK_WORD',
      RESERVED: 'TK_RESERVED',
      SEMICOLON: 'TK_SEMICOLON',
      STRING: 'TK_STRING',
      EQUALS: 'TK_EQUALS',
      OPERATOR: 'TK_OPERATOR',
      COMMA: 'TK_COMMA',
      BLOCK_COMMENT: 'TK_BLOCK_COMMENT',
      COMMENT: 'TK_COMMENT',
      DOT: 'TK_DOT',
      UNKNOWN: 'TK_UNKNOWN',
      START: i.START,
      RAW: i.RAW,
      EOF: i.EOF,
    },
    h = new n(/\/\*/, /\*\//),
    f =
      /0[xX][0123456789abcdefABCDEF_]*n?|0[oO][01234567_]*n?|0[bB][01_]*n?|\d[\d_]*n|(?:\.\d[\d_]*|\d[\d_]*\.?[\d_]*)(?:[eE][+-]?[\d_]+)?/,
    g = /[0-9]/,
    y = /[^\d\.]/,
    T =
      '>>> === !== &&= ??= ||= << && >= ** != == <= >> || ?? |> < / - + > : & % ? ^ | *'.split(
        ' ',
      ),
    j =
      '>>>= ... >>= <<= === >>> !== **= &&= ??= ||= => ^= :: /= << <= == && -= >= >> != -- += ** || ?? ++ %= &= *= |= |> = ! ? > < : / ^ - + * & % ~ |'
  ;(j = j.replace(/[-[\]{}()*+?.,\\^$|#]/g, '\\$&')),
    (j = '\\?\\.(?!\\d) ' + j),
    (j = j.replace(/ /g, '|'))
  var M = new RegExp(j),
    d =
      'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(
        ',',
      ),
    r = d.concat([
      'do',
      'in',
      'of',
      'else',
      'get',
      'set',
      'new',
      'catch',
      'finally',
      'typeof',
      'yield',
      'async',
      'await',
      'from',
      'as',
      'class',
      'extends',
    ]),
    m = new RegExp('^(?:' + r.join('|') + ')$'),
    R,
    x = function (c, b) {
      e.call(this, c, b),
        (this._patterns.whitespace = this._patterns.whitespace.matching(
          /\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff/.source,
          /\u2028\u2029/.source,
        ))
      var p = new l(this._input),
        O = new u(this._input).read_options(this._options)
      this.__patterns = {
        template: O,
        identifier: O.starting_with(o.identifier).matching(o.identifierMatch),
        number: p.matching(f),
        punct: p.matching(M),
        comment: p.starting_with(/\/\//).until(/[\n\r\u2028\u2029]/),
        block_comment: p.starting_with(/\/\*/).until_after(/\*\//),
        html_comment_start: p.matching(/<!--/),
        html_comment_end: p.matching(/-->/),
        include: p.starting_with(/#include/).until_after(o.lineBreak),
        shebang: p.starting_with(/#!/).until_after(o.lineBreak),
        xml: p.matching(
          /[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[^}]+?}|!\[CDATA\[[^\]]*?\]\]|)(\s*{[^}]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{([^{}]|{[^}]+?})+?}))*\s*(\/?)\s*>/,
        ),
        single_quote: O.until(/['\\\n\r\u2028\u2029]/),
        double_quote: O.until(/["\\\n\r\u2028\u2029]/),
        template_text: O.until(/[`\\$]/),
        template_expression: O.until(/[`}\\]/),
      }
    }
  ;(x.prototype = new e()),
    (x.prototype._is_comment = function (c) {
      return (
        c.type === _.COMMENT ||
        c.type === _.BLOCK_COMMENT ||
        c.type === _.UNKNOWN
      )
    }),
    (x.prototype._is_opening = function (c) {
      return c.type === _.START_BLOCK || c.type === _.START_EXPR
    }),
    (x.prototype._is_closing = function (c, b) {
      return (
        (c.type === _.END_BLOCK || c.type === _.END_EXPR) &&
        b &&
        ((c.text === ']' && b.text === '[') ||
          (c.text === ')' && b.text === '(') ||
          (c.text === '}' && b.text === '{'))
      )
    }),
    (x.prototype._reset = function () {
      R = !1
    }),
    (x.prototype._get_next_token = function (c, b) {
      var p = null
      this._readWhitespace()
      var O = this._input.peek()
      return O === null
        ? this._create_token(_.EOF, '')
        : ((p = p || this._read_non_javascript(O)),
          (p = p || this._read_string(O)),
          (p = p || this._read_pair(O, this._input.peek(1))),
          (p = p || this._read_word(c)),
          (p = p || this._read_singles(O)),
          (p = p || this._read_comment(O)),
          (p = p || this._read_regexp(O, c)),
          (p = p || this._read_xml(O, c)),
          (p = p || this._read_punctuation()),
          (p = p || this._create_token(_.UNKNOWN, this._input.next())),
          p)
    }),
    (x.prototype._read_word = function (c) {
      var b
      if (((b = this.__patterns.identifier.read()), b !== ''))
        return (
          (b = b.replace(
            o.allLineBreaks,
            `
`,
          )),
          !(
            c.type === _.DOT ||
            (c.type === _.RESERVED && (c.text === 'set' || c.text === 'get'))
          ) && m.test(b)
            ? (b === 'in' || b === 'of') &&
              (c.type === _.WORD || c.type === _.STRING)
              ? this._create_token(_.OPERATOR, b)
              : this._create_token(_.RESERVED, b)
            : this._create_token(_.WORD, b)
        )
      if (((b = this.__patterns.number.read()), b !== ''))
        return this._create_token(_.WORD, b)
    }),
    (x.prototype._read_singles = function (c) {
      var b = null
      return (
        c === '(' || c === '['
          ? (b = this._create_token(_.START_EXPR, c))
          : c === ')' || c === ']'
            ? (b = this._create_token(_.END_EXPR, c))
            : c === '{'
              ? (b = this._create_token(_.START_BLOCK, c))
              : c === '}'
                ? (b = this._create_token(_.END_BLOCK, c))
                : c === ';'
                  ? (b = this._create_token(_.SEMICOLON, c))
                  : c === '.' && y.test(this._input.peek(1))
                    ? (b = this._create_token(_.DOT, c))
                    : c === ',' && (b = this._create_token(_.COMMA, c)),
        b && this._input.next(),
        b
      )
    }),
    (x.prototype._read_pair = function (c, b) {
      var p = null
      return (
        c === '#' &&
          b === '{' &&
          (p = this._create_token(_.START_BLOCK, c + b)),
        p && (this._input.next(), this._input.next()),
        p
      )
    }),
    (x.prototype._read_punctuation = function () {
      var c = this.__patterns.punct.read()
      if (c !== '')
        return c === '='
          ? this._create_token(_.EQUALS, c)
          : c === '?.'
            ? this._create_token(_.DOT, c)
            : this._create_token(_.OPERATOR, c)
    }),
    (x.prototype._read_non_javascript = function (c) {
      var b = ''
      if (c === '#') {
        if (this._is_first_token() && ((b = this.__patterns.shebang.read()), b))
          return this._create_token(
            _.UNKNOWN,
            b.trim() +
              `
`,
          )
        if (((b = this.__patterns.include.read()), b))
          return this._create_token(
            _.UNKNOWN,
            b.trim() +
              `
`,
          )
        c = this._input.next()
        var p = '#'
        if (this._input.hasNext() && this._input.testChar(g)) {
          do (c = this._input.next()), (p += c)
          while (this._input.hasNext() && c !== '#' && c !== '=')
          return (
            c === '#' ||
              (this._input.peek() === '[' && this._input.peek(1) === ']'
                ? ((p += '[]'), this._input.next(), this._input.next())
                : this._input.peek() === '{' &&
                  this._input.peek(1) === '}' &&
                  ((p += '{}'), this._input.next(), this._input.next())),
            this._create_token(_.WORD, p)
          )
        }
        this._input.back()
      } else if (c === '<' && this._is_first_token()) {
        if (((b = this.__patterns.html_comment_start.read()), b)) {
          for (; this._input.hasNext() && !this._input.testChar(o.newline); )
            b += this._input.next()
          return (R = !0), this._create_token(_.COMMENT, b)
        }
      } else if (
        R &&
        c === '-' &&
        ((b = this.__patterns.html_comment_end.read()), b)
      )
        return (R = !1), this._create_token(_.COMMENT, b)
      return null
    }),
    (x.prototype._read_comment = function (c) {
      var b = null
      if (c === '/') {
        var p = ''
        if (this._input.peek(1) === '*') {
          p = this.__patterns.block_comment.read()
          var O = h.get_directives(p)
          O && O.ignore === 'start' && (p += h.readIgnored(this._input)),
            (p = p.replace(
              o.allLineBreaks,
              `
`,
            )),
            (b = this._create_token(_.BLOCK_COMMENT, p)),
            (b.directives = O)
        } else
          this._input.peek(1) === '/' &&
            ((p = this.__patterns.comment.read()),
            (b = this._create_token(_.COMMENT, p)))
      }
      return b
    }),
    (x.prototype._read_string = function (c) {
      if (c === '`' || c === "'" || c === '"') {
        var b = this._input.next()
        return (
          (this.has_char_escapes = !1),
          c === '`'
            ? (b += this._read_string_recursive('`', !0, '${'))
            : (b += this._read_string_recursive(c)),
          this.has_char_escapes && this._options.unescape_strings && (b = A(b)),
          this._input.peek() === c && (b += this._input.next()),
          (b = b.replace(
            o.allLineBreaks,
            `
`,
          )),
          this._create_token(_.STRING, b)
        )
      }
      return null
    }),
    (x.prototype._allow_regexp_or_xml = function (c) {
      return (
        (c.type === _.RESERVED &&
          a(c.text, [
            'return',
            'case',
            'throw',
            'else',
            'do',
            'typeof',
            'yield',
          ])) ||
        (c.type === _.END_EXPR &&
          c.text === ')' &&
          c.opened.previous.type === _.RESERVED &&
          a(c.opened.previous.text, ['if', 'while', 'for'])) ||
        a(c.type, [
          _.COMMENT,
          _.START_EXPR,
          _.START_BLOCK,
          _.START,
          _.END_BLOCK,
          _.OPERATOR,
          _.EQUALS,
          _.EOF,
          _.SEMICOLON,
          _.COMMA,
        ])
      )
    }),
    (x.prototype._read_regexp = function (c, b) {
      if (c === '/' && this._allow_regexp_or_xml(b)) {
        for (
          var p = this._input.next(), O = !1, s = !1;
          this._input.hasNext() &&
          (O || s || this._input.peek() !== c) &&
          !this._input.testChar(o.newline);

        )
          (p += this._input.peek()),
            O
              ? (O = !1)
              : ((O = this._input.peek() === '\\'),
                this._input.peek() === '['
                  ? (s = !0)
                  : this._input.peek() === ']' && (s = !1)),
            this._input.next()
        return (
          this._input.peek() === c &&
            ((p += this._input.next()), (p += this._input.read(o.identifier))),
          this._create_token(_.STRING, p)
        )
      }
      return null
    }),
    (x.prototype._read_xml = function (c, b) {
      if (this._options.e4x && c === '<' && this._allow_regexp_or_xml(b)) {
        var p = '',
          O = this.__patterns.xml.read_match()
        if (O) {
          for (
            var s = O[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}'),
              w = s.indexOf('{') === 0,
              k = 0;
            O;

          ) {
            var E = !!O[1],
              C = O[2],
              D = !!O[O.length - 1] || C.slice(0, 8) === '![CDATA['
            if (
              (!D &&
                (C === s ||
                  (w && C.replace(/^{\s+/, '{').replace(/\s+}$/, '}'))) &&
                (E ? --k : ++k),
              (p += O[0]),
              k <= 0)
            )
              break
            O = this.__patterns.xml.read_match()
          }
          return (
            O || (p += this._input.match(/[\s\S]*/g)[0]),
            (p = p.replace(
              o.allLineBreaks,
              `
`,
            )),
            this._create_token(_.STRING, p)
          )
        }
      }
      return null
    })
  function A(c) {
    for (var b = '', p = 0, O = new t(c), s = null; O.hasNext(); )
      if (
        ((s = O.match(/([\s]|[^\\]|\\\\)+/g)),
        s && (b += s[0]),
        O.peek() === '\\')
      ) {
        if ((O.next(), O.peek() === 'x')) s = O.match(/x([0-9A-Fa-f]{2})/g)
        else if (O.peek() === 'u')
          (s = O.match(/u([0-9A-Fa-f]{4})/g)),
            s || (s = O.match(/u\{([0-9A-Fa-f]+)\}/g))
        else {
          ;(b += '\\'), O.hasNext() && (b += O.next())
          continue
        }
        if (
          !s ||
          ((p = parseInt(s[1], 16)),
          p > 126 && p <= 255 && s[0].indexOf('x') === 0)
        )
          return c
        ;(p >= 0 && p < 32) || p > 1114111
          ? (b += '\\' + s[0])
          : p === 34 || p === 39 || p === 92
            ? (b += '\\' + String.fromCharCode(p))
            : (b += String.fromCharCode(p))
      }
    return b
  }
  return (
    (x.prototype._read_string_recursive = function (c, b, p) {
      var O, s
      c === "'"
        ? (s = this.__patterns.single_quote)
        : c === '"'
          ? (s = this.__patterns.double_quote)
          : c === '`'
            ? (s = this.__patterns.template_text)
            : c === '}' && (s = this.__patterns.template_expression)
      for (var w = s.read(), k = ''; this._input.hasNext(); ) {
        if (((k = this._input.next()), k === c || (!b && o.newline.test(k)))) {
          this._input.back()
          break
        } else
          k === '\\' && this._input.hasNext()
            ? ((O = this._input.peek()),
              O === 'x' || O === 'u'
                ? (this.has_char_escapes = !0)
                : O === '\r' &&
                  this._input.peek(1) ===
                    `
` &&
                  this._input.next(),
              (k += this._input.next()))
            : p &&
              (p === '${' &&
                k === '$' &&
                this._input.peek() === '{' &&
                (k += this._input.next()),
              p === k &&
                (c === '`'
                  ? (k += this._read_string_recursive('}', b, '`'))
                  : (k += this._read_string_recursive('`', b, '${')),
                this._input.hasNext() && (k += this._input.next())))
        ;(k += s.read()), (w += k)
      }
      return w
    }),
    (yt.Tokenizer = x),
    (yt.TOKEN = _),
    (yt.positionable_operators = T.slice()),
    (yt.line_starters = d.slice()),
    yt
  )
}
var on
function ts() {
  if (on) return ae
  on = 1
  var t = xe().Output,
    e = Pn().Token,
    i = Bn(),
    n = Un().Options,
    o = Dt().Tokenizer,
    l = Dt().line_starters,
    u = Dt().positionable_operators,
    a = Dt().TOKEN
  function _(s, w) {
    return w.indexOf(s) !== -1
  }
  function h(s) {
    return s.replace(/^\s+/g, '')
  }
  function f(s) {
    for (var w = {}, k = 0; k < s.length; k++) w[s[k].replace(/-/g, '_')] = s[k]
    return w
  }
  function g(s, w) {
    return s && s.type === a.RESERVED && s.text === w
  }
  function y(s, w) {
    return s && s.type === a.RESERVED && _(s.text, w)
  }
  var T = [
      'case',
      'return',
      'do',
      'if',
      'throw',
      'else',
      'await',
      'break',
      'continue',
      'async',
    ],
    j = ['before-newline', 'after-newline', 'preserve-newline'],
    M = f(j),
    d = [M.before_newline, M.preserve_newline],
    r = {
      BlockStatement: 'BlockStatement',
      Statement: 'Statement',
      ObjectLiteral: 'ObjectLiteral',
      ArrayLiteral: 'ArrayLiteral',
      ForInitializer: 'ForInitializer',
      Conditional: 'Conditional',
      Expression: 'Expression',
    }
  function m(s, w) {
    w.multiline_frame ||
      w.mode === r.ForInitializer ||
      w.mode === r.Conditional ||
      s.remove_indent(w.start_line_index)
  }
  function R(s) {
    s = s.replace(
      i.allLineBreaks,
      `
`,
    )
    for (
      var w = [],
        k = s.indexOf(`
`);
      k !== -1;

    )
      w.push(s.substring(0, k)),
        (s = s.substring(k + 1)),
        (k = s.indexOf(`
`))
    return s.length && w.push(s), w
  }
  function x(s) {
    return s === r.ArrayLiteral
  }
  function A(s) {
    return _(s, [r.Expression, r.ForInitializer, r.Conditional])
  }
  function c(s, w) {
    for (var k = 0; k < s.length; k++) {
      var E = s[k].trim()
      if (E.charAt(0) !== w) return !1
    }
    return !0
  }
  function b(s, w) {
    for (var k = 0, E = s.length, C; k < E; k++)
      if (((C = s[k]), C && C.indexOf(w) !== 0)) return !1
    return !0
  }
  function p(s, w) {
    ;(w = w || {}),
      (this._source_text = s || ''),
      (this._output = null),
      (this._tokens = null),
      (this._last_last_text = null),
      (this._flags = null),
      (this._previous_flags = null),
      (this._flag_store = null),
      (this._options = new n(w))
  }
  ;(p.prototype.create_flags = function (s, w) {
    var k = 0
    s &&
      ((k = s.indentation_level),
      !this._output.just_added_newline() &&
        s.line_indent_level > k &&
        (k = s.line_indent_level))
    var E = {
      mode: w,
      parent: s,
      last_token: s ? s.last_token : new e(a.START_BLOCK, ''),
      last_word: s ? s.last_word : '',
      declaration_statement: !1,
      declaration_assignment: !1,
      multiline_frame: !1,
      inline_frame: !1,
      if_block: !1,
      else_block: !1,
      class_start_block: !1,
      do_block: !1,
      do_while: !1,
      import_block: !1,
      in_case_statement: !1,
      in_case: !1,
      case_body: !1,
      case_block: !1,
      indentation_level: k,
      alignment: 0,
      line_indent_level: s ? s.line_indent_level : k,
      start_line_index: this._output.get_line_number(),
      ternary_depth: 0,
    }
    return E
  }),
    (p.prototype._reset = function (s) {
      var w = s.match(/^[\t ]*/)[0]
      ;(this._last_last_text = ''),
        (this._output = new t(this._options, w)),
        (this._output.raw = this._options.test_output_raw),
        (this._flag_store = []),
        this.set_mode(r.BlockStatement)
      var k = new o(s, this._options)
      return (this._tokens = k.tokenize()), s
    }),
    (p.prototype.beautify = function () {
      if (this._options.disabled) return this._source_text
      var s,
        w = this._reset(this._source_text),
        k = this._options.eol
      this._options.eol === 'auto' &&
        ((k = `
`),
        w && i.lineBreak.test(w || '') && (k = w.match(i.lineBreak)[0]))
      for (var E = this._tokens.next(); E; )
        this.handle_token(E),
          (this._last_last_text = this._flags.last_token.text),
          (this._flags.last_token = E),
          (E = this._tokens.next())
      return (s = this._output.get_code(k)), s
    }),
    (p.prototype.handle_token = function (s, w) {
      s.type === a.START_EXPR
        ? this.handle_start_expr(s)
        : s.type === a.END_EXPR
          ? this.handle_end_expr(s)
          : s.type === a.START_BLOCK
            ? this.handle_start_block(s)
            : s.type === a.END_BLOCK
              ? this.handle_end_block(s)
              : s.type === a.WORD
                ? this.handle_word(s)
                : s.type === a.RESERVED
                  ? this.handle_word(s)
                  : s.type === a.SEMICOLON
                    ? this.handle_semicolon(s)
                    : s.type === a.STRING
                      ? this.handle_string(s)
                      : s.type === a.EQUALS
                        ? this.handle_equals(s)
                        : s.type === a.OPERATOR
                          ? this.handle_operator(s)
                          : s.type === a.COMMA
                            ? this.handle_comma(s)
                            : s.type === a.BLOCK_COMMENT
                              ? this.handle_block_comment(s, w)
                              : s.type === a.COMMENT
                                ? this.handle_comment(s, w)
                                : s.type === a.DOT
                                  ? this.handle_dot(s)
                                  : s.type === a.EOF
                                    ? this.handle_eof(s)
                                    : s.type === a.UNKNOWN
                                      ? this.handle_unknown(s, w)
                                      : this.handle_unknown(s, w)
    }),
    (p.prototype.handle_whitespace_and_comments = function (s, w) {
      var k = s.newlines,
        E = this._options.keep_array_indentation && x(this._flags.mode)
      if (s.comments_before)
        for (var C = s.comments_before.next(); C; )
          this.handle_whitespace_and_comments(C, w),
            this.handle_token(C, w),
            (C = s.comments_before.next())
      if (E) for (var D = 0; D < k; D += 1) this.print_newline(D > 0, w)
      else if (
        (this._options.max_preserve_newlines &&
          k > this._options.max_preserve_newlines &&
          (k = this._options.max_preserve_newlines),
        this._options.preserve_newlines && k > 1)
      ) {
        this.print_newline(!1, w)
        for (var K = 1; K < k; K += 1) this.print_newline(!0, w)
      }
    })
  var O = ['async', 'break', 'continue', 'return', 'throw', 'yield']
  return (
    (p.prototype.allow_wrap_or_preserved_newline = function (s, w) {
      if (((w = w === void 0 ? !1 : w), !this._output.just_added_newline())) {
        var k = (this._options.preserve_newlines && s.newlines) || w,
          E = _(this._flags.last_token.text, u) || _(s.text, u)
        if (E) {
          var C =
            (_(this._flags.last_token.text, u) &&
              _(this._options.operator_position, d)) ||
            _(s.text, u)
          k = k && C
        }
        if (k) this.print_newline(!1, !0)
        else if (this._options.wrap_line_length) {
          if (y(this._flags.last_token, O)) return
          this._output.set_wrap_point()
        }
      }
    }),
    (p.prototype.print_newline = function (s, w) {
      if (
        !w &&
        this._flags.last_token.text !== ';' &&
        this._flags.last_token.text !== ',' &&
        this._flags.last_token.text !== '=' &&
        (this._flags.last_token.type !== a.OPERATOR ||
          this._flags.last_token.text === '--' ||
          this._flags.last_token.text === '++')
      )
        for (
          var k = this._tokens.peek();
          this._flags.mode === r.Statement &&
          !(this._flags.if_block && g(k, 'else')) &&
          !this._flags.do_block;

        )
          this.restore_mode()
      this._output.add_new_line(s) && (this._flags.multiline_frame = !0)
    }),
    (p.prototype.print_token_line_indentation = function (s) {
      this._output.just_added_newline() &&
        (this._options.keep_array_indentation &&
        s.newlines &&
        (s.text === '[' || x(this._flags.mode))
          ? (this._output.current_line.set_indent(-1),
            this._output.current_line.push(s.whitespace_before),
            (this._output.space_before_token = !1))
          : this._output.set_indent(
              this._flags.indentation_level,
              this._flags.alignment,
            ) &&
            (this._flags.line_indent_level = this._flags.indentation_level))
    }),
    (p.prototype.print_token = function (s) {
      if (this._output.raw) {
        this._output.add_raw_token(s)
        return
      }
      if (
        this._options.comma_first &&
        s.previous &&
        s.previous.type === a.COMMA &&
        this._output.just_added_newline() &&
        this._output.previous_line.last() === ','
      ) {
        var w = this._output.previous_line.pop()
        this._output.previous_line.is_empty() &&
          (this._output.previous_line.push(w),
          this._output.trim(!0),
          this._output.current_line.pop(),
          this._output.trim()),
          this.print_token_line_indentation(s),
          this._output.add_token(','),
          (this._output.space_before_token = !0)
      }
      this.print_token_line_indentation(s),
        (this._output.non_breaking_space = !0),
        this._output.add_token(s.text),
        this._output.previous_token_wrapped &&
          (this._flags.multiline_frame = !0)
    }),
    (p.prototype.indent = function () {
      ;(this._flags.indentation_level += 1),
        this._output.set_indent(
          this._flags.indentation_level,
          this._flags.alignment,
        )
    }),
    (p.prototype.deindent = function () {
      this._flags.indentation_level > 0 &&
        (!this._flags.parent ||
          this._flags.indentation_level >
            this._flags.parent.indentation_level) &&
        ((this._flags.indentation_level -= 1),
        this._output.set_indent(
          this._flags.indentation_level,
          this._flags.alignment,
        ))
    }),
    (p.prototype.set_mode = function (s) {
      this._flags
        ? (this._flag_store.push(this._flags),
          (this._previous_flags = this._flags))
        : (this._previous_flags = this.create_flags(null, s)),
        (this._flags = this.create_flags(this._previous_flags, s)),
        this._output.set_indent(
          this._flags.indentation_level,
          this._flags.alignment,
        )
    }),
    (p.prototype.restore_mode = function () {
      this._flag_store.length > 0 &&
        ((this._previous_flags = this._flags),
        (this._flags = this._flag_store.pop()),
        this._previous_flags.mode === r.Statement &&
          m(this._output, this._previous_flags),
        this._output.set_indent(
          this._flags.indentation_level,
          this._flags.alignment,
        ))
    }),
    (p.prototype.start_of_object_property = function () {
      return (
        this._flags.parent.mode === r.ObjectLiteral &&
        this._flags.mode === r.Statement &&
        ((this._flags.last_token.text === ':' &&
          this._flags.ternary_depth === 0) ||
          y(this._flags.last_token, ['get', 'set']))
      )
    }),
    (p.prototype.start_of_statement = function (s) {
      var w = !1
      return (
        (w =
          w ||
          (y(this._flags.last_token, ['var', 'let', 'const']) &&
            s.type === a.WORD)),
        (w = w || g(this._flags.last_token, 'do')),
        (w =
          w ||
          (!(
            this._flags.parent.mode === r.ObjectLiteral &&
            this._flags.mode === r.Statement
          ) &&
            y(this._flags.last_token, O) &&
            !s.newlines)),
        (w =
          w ||
          (g(this._flags.last_token, 'else') &&
            !(g(s, 'if') && !s.comments_before))),
        (w =
          w ||
          (this._flags.last_token.type === a.END_EXPR &&
            (this._previous_flags.mode === r.ForInitializer ||
              this._previous_flags.mode === r.Conditional))),
        (w =
          w ||
          (this._flags.last_token.type === a.WORD &&
            this._flags.mode === r.BlockStatement &&
            !this._flags.in_case &&
            !(s.text === '--' || s.text === '++') &&
            this._last_last_text !== 'function' &&
            s.type !== a.WORD &&
            s.type !== a.RESERVED)),
        (w =
          w ||
          (this._flags.mode === r.ObjectLiteral &&
            ((this._flags.last_token.text === ':' &&
              this._flags.ternary_depth === 0) ||
              y(this._flags.last_token, ['get', 'set'])))),
        w
          ? (this.set_mode(r.Statement),
            this.indent(),
            this.handle_whitespace_and_comments(s, !0),
            this.start_of_object_property() ||
              this.allow_wrap_or_preserved_newline(
                s,
                y(s, ['do', 'for', 'if', 'while']),
              ),
            !0)
          : !1
      )
    }),
    (p.prototype.handle_start_expr = function (s) {
      this.start_of_statement(s) || this.handle_whitespace_and_comments(s)
      var w = r.Expression
      if (s.text === '[') {
        if (
          this._flags.last_token.type === a.WORD ||
          this._flags.last_token.text === ')'
        ) {
          y(this._flags.last_token, l) &&
            (this._output.space_before_token = !0),
            this.print_token(s),
            this.set_mode(w),
            this.indent(),
            this._options.space_in_paren &&
              (this._output.space_before_token = !0)
          return
        }
        ;(w = r.ArrayLiteral),
          x(this._flags.mode) &&
            (this._flags.last_token.text === '[' ||
              (this._flags.last_token.text === ',' &&
                (this._last_last_text === ']' ||
                  this._last_last_text === '}'))) &&
            (this._options.keep_array_indentation || this.print_newline()),
          _(this._flags.last_token.type, [
            a.START_EXPR,
            a.END_EXPR,
            a.WORD,
            a.OPERATOR,
            a.DOT,
          ]) || (this._output.space_before_token = !0)
      } else {
        if (this._flags.last_token.type === a.RESERVED)
          this._flags.last_token.text === 'for'
            ? ((this._output.space_before_token =
                this._options.space_before_conditional),
              (w = r.ForInitializer))
            : _(this._flags.last_token.text, ['if', 'while', 'switch'])
              ? ((this._output.space_before_token =
                  this._options.space_before_conditional),
                (w = r.Conditional))
              : _(this._flags.last_word, ['await', 'async'])
                ? (this._output.space_before_token = !0)
                : this._flags.last_token.text === 'import' &&
                    s.whitespace_before === ''
                  ? (this._output.space_before_token = !1)
                  : (_(this._flags.last_token.text, l) ||
                      this._flags.last_token.text === 'catch') &&
                    (this._output.space_before_token = !0)
        else if (
          this._flags.last_token.type === a.EQUALS ||
          this._flags.last_token.type === a.OPERATOR
        )
          this.start_of_object_property() ||
            this.allow_wrap_or_preserved_newline(s)
        else if (this._flags.last_token.type === a.WORD) {
          this._output.space_before_token = !1
          var k = this._tokens.peek(-3)
          if (this._options.space_after_named_function && k) {
            var E = this._tokens.peek(-4)
            y(k, ['async', 'function']) ||
            (k.text === '*' && y(E, ['async', 'function']))
              ? (this._output.space_before_token = !0)
              : this._flags.mode === r.ObjectLiteral
                ? (k.text === '{' ||
                    k.text === ',' ||
                    (k.text === '*' && (E.text === '{' || E.text === ','))) &&
                  (this._output.space_before_token = !0)
                : this._flags.parent &&
                  this._flags.parent.class_start_block &&
                  (this._output.space_before_token = !0)
          }
        } else this.allow_wrap_or_preserved_newline(s)
        ;((this._flags.last_token.type === a.RESERVED &&
          (this._flags.last_word === 'function' ||
            this._flags.last_word === 'typeof')) ||
          (this._flags.last_token.text === '*' &&
            (_(this._last_last_text, ['function', 'yield']) ||
              (this._flags.mode === r.ObjectLiteral &&
                _(this._last_last_text, ['{', ',']))))) &&
          (this._output.space_before_token =
            this._options.space_after_anon_function)
      }
      this._flags.last_token.text === ';' ||
      this._flags.last_token.type === a.START_BLOCK
        ? this.print_newline()
        : (this._flags.last_token.type === a.END_EXPR ||
            this._flags.last_token.type === a.START_EXPR ||
            this._flags.last_token.type === a.END_BLOCK ||
            this._flags.last_token.text === '.' ||
            this._flags.last_token.type === a.COMMA) &&
          this.allow_wrap_or_preserved_newline(s, s.newlines),
        this.print_token(s),
        this.set_mode(w),
        this._options.space_in_paren && (this._output.space_before_token = !0),
        this.indent()
    }),
    (p.prototype.handle_end_expr = function (s) {
      for (; this._flags.mode === r.Statement; ) this.restore_mode()
      this.handle_whitespace_and_comments(s),
        this._flags.multiline_frame &&
          this.allow_wrap_or_preserved_newline(
            s,
            s.text === ']' &&
              x(this._flags.mode) &&
              !this._options.keep_array_indentation,
          ),
        this._options.space_in_paren &&
          (this._flags.last_token.type === a.START_EXPR &&
          !this._options.space_in_empty_paren
            ? (this._output.trim(), (this._output.space_before_token = !1))
            : (this._output.space_before_token = !0)),
        this.deindent(),
        this.print_token(s),
        this.restore_mode(),
        m(this._output, this._previous_flags),
        this._flags.do_while &&
          this._previous_flags.mode === r.Conditional &&
          ((this._previous_flags.mode = r.Expression),
          (this._flags.do_block = !1),
          (this._flags.do_while = !1))
    }),
    (p.prototype.handle_start_block = function (s) {
      this.handle_whitespace_and_comments(s)
      var w = this._tokens.peek(),
        k = this._tokens.peek(1)
      this._flags.last_word === 'switch' &&
      this._flags.last_token.type === a.END_EXPR
        ? (this.set_mode(r.BlockStatement),
          (this._flags.in_case_statement = !0))
        : this._flags.case_body
          ? this.set_mode(r.BlockStatement)
          : k &&
              ((_(k.text, [':', ',']) &&
                _(w.type, [a.STRING, a.WORD, a.RESERVED])) ||
                (_(w.text, ['get', 'set', '...']) &&
                  _(k.type, [a.WORD, a.RESERVED])))
            ? _(this._last_last_text, ['class', 'interface']) &&
              !_(k.text, [':', ','])
              ? this.set_mode(r.BlockStatement)
              : this.set_mode(r.ObjectLiteral)
            : this._flags.last_token.type === a.OPERATOR &&
                this._flags.last_token.text === '=>'
              ? this.set_mode(r.BlockStatement)
              : _(this._flags.last_token.type, [
                    a.EQUALS,
                    a.START_EXPR,
                    a.COMMA,
                    a.OPERATOR,
                  ]) ||
                  y(this._flags.last_token, [
                    'return',
                    'throw',
                    'import',
                    'default',
                  ])
                ? this.set_mode(r.ObjectLiteral)
                : this.set_mode(r.BlockStatement),
        this._flags.last_token &&
          y(this._flags.last_token.previous, ['class', 'extends']) &&
          (this._flags.class_start_block = !0)
      var E = !w.comments_before && w.text === '}',
        C =
          E &&
          this._flags.last_word === 'function' &&
          this._flags.last_token.type === a.END_EXPR
      if (this._options.brace_preserve_inline) {
        var D = 0,
          K = null
        this._flags.inline_frame = !0
        do
          if (((D += 1), (K = this._tokens.peek(D - 1)), K.newlines)) {
            this._flags.inline_frame = !1
            break
          }
        while (K.type !== a.EOF && !(K.type === a.END_BLOCK && K.opened === s))
      }
      ;(this._options.brace_style === 'expand' ||
        (this._options.brace_style === 'none' && s.newlines)) &&
      !this._flags.inline_frame
        ? this._flags.last_token.type !== a.OPERATOR &&
          (C ||
            this._flags.last_token.type === a.EQUALS ||
            (y(this._flags.last_token, T) &&
              this._flags.last_token.text !== 'else'))
          ? (this._output.space_before_token = !0)
          : this.print_newline(!1, !0)
        : (x(this._previous_flags.mode) &&
            (this._flags.last_token.type === a.START_EXPR ||
              this._flags.last_token.type === a.COMMA) &&
            ((this._flags.last_token.type === a.COMMA ||
              this._options.space_in_paren) &&
              (this._output.space_before_token = !0),
            (this._flags.last_token.type === a.COMMA ||
              (this._flags.last_token.type === a.START_EXPR &&
                this._flags.inline_frame)) &&
              (this.allow_wrap_or_preserved_newline(s),
              (this._previous_flags.multiline_frame =
                this._previous_flags.multiline_frame ||
                this._flags.multiline_frame),
              (this._flags.multiline_frame = !1))),
          this._flags.last_token.type !== a.OPERATOR &&
            this._flags.last_token.type !== a.START_EXPR &&
            (_(this._flags.last_token.type, [a.START_BLOCK, a.SEMICOLON]) &&
            !this._flags.inline_frame
              ? this.print_newline()
              : (this._output.space_before_token = !0))),
        this.print_token(s),
        this.indent(),
        !E &&
          !(this._options.brace_preserve_inline && this._flags.inline_frame) &&
          this.print_newline()
    }),
    (p.prototype.handle_end_block = function (s) {
      for (
        this.handle_whitespace_and_comments(s);
        this._flags.mode === r.Statement;

      )
        this.restore_mode()
      var w = this._flags.last_token.type === a.START_BLOCK
      this._flags.inline_frame && !w
        ? (this._output.space_before_token = !0)
        : this._options.brace_style === 'expand'
          ? w || this.print_newline()
          : w ||
            (x(this._flags.mode) && this._options.keep_array_indentation
              ? ((this._options.keep_array_indentation = !1),
                this.print_newline(),
                (this._options.keep_array_indentation = !0))
              : this.print_newline()),
        this.restore_mode(),
        this.print_token(s)
    }),
    (p.prototype.handle_word = function (s) {
      if (s.type === a.RESERVED) {
        if (_(s.text, ['set', 'get']) && this._flags.mode !== r.ObjectLiteral)
          s.type = a.WORD
        else if (s.text === 'import' && _(this._tokens.peek().text, ['(', '.']))
          s.type = a.WORD
        else if (_(s.text, ['as', 'from']) && !this._flags.import_block)
          s.type = a.WORD
        else if (this._flags.mode === r.ObjectLiteral) {
          var w = this._tokens.peek()
          w.text === ':' && (s.type = a.WORD)
        }
      }
      if (
        (this.start_of_statement(s)
          ? y(this._flags.last_token, ['var', 'let', 'const']) &&
            s.type === a.WORD &&
            (this._flags.declaration_statement = !0)
          : s.newlines &&
              !A(this._flags.mode) &&
              (this._flags.last_token.type !== a.OPERATOR ||
                this._flags.last_token.text === '--' ||
                this._flags.last_token.text === '++') &&
              this._flags.last_token.type !== a.EQUALS &&
              (this._options.preserve_newlines ||
                !y(this._flags.last_token, [
                  'var',
                  'let',
                  'const',
                  'set',
                  'get',
                ]))
            ? (this.handle_whitespace_and_comments(s), this.print_newline())
            : this.handle_whitespace_and_comments(s),
        this._flags.do_block && !this._flags.do_while)
      )
        if (g(s, 'while')) {
          ;(this._output.space_before_token = !0),
            this.print_token(s),
            (this._output.space_before_token = !0),
            (this._flags.do_while = !0)
          return
        } else this.print_newline(), (this._flags.do_block = !1)
      if (this._flags.if_block)
        if (!this._flags.else_block && g(s, 'else')) this._flags.else_block = !0
        else {
          for (; this._flags.mode === r.Statement; ) this.restore_mode()
          ;(this._flags.if_block = !1), (this._flags.else_block = !1)
        }
      if (this._flags.in_case_statement && y(s, ['case', 'default'])) {
        this.print_newline(),
          !this._flags.case_block &&
            (this._flags.case_body || this._options.jslint_happy) &&
            this.deindent(),
          (this._flags.case_body = !1),
          this.print_token(s),
          (this._flags.in_case = !0)
        return
      }
      if (
        ((this._flags.last_token.type === a.COMMA ||
          this._flags.last_token.type === a.START_EXPR ||
          this._flags.last_token.type === a.EQUALS ||
          this._flags.last_token.type === a.OPERATOR) &&
          !this.start_of_object_property() &&
          !(
            _(this._flags.last_token.text, ['+', '-']) &&
            this._last_last_text === ':' &&
            this._flags.parent.mode === r.ObjectLiteral
          ) &&
          this.allow_wrap_or_preserved_newline(s),
        g(s, 'function'))
      ) {
        ;(_(this._flags.last_token.text, ['}', ';']) ||
          (this._output.just_added_newline() &&
            !(
              _(this._flags.last_token.text, ['(', '[', '{', ':', '=', ',']) ||
              this._flags.last_token.type === a.OPERATOR
            ))) &&
          !this._output.just_added_blankline() &&
          !s.comments_before &&
          (this.print_newline(), this.print_newline(!0)),
          this._flags.last_token.type === a.RESERVED ||
          this._flags.last_token.type === a.WORD
            ? y(this._flags.last_token, ['get', 'set', 'new', 'export']) ||
              y(this._flags.last_token, O)
              ? (this._output.space_before_token = !0)
              : g(this._flags.last_token, 'default') &&
                  this._last_last_text === 'export'
                ? (this._output.space_before_token = !0)
                : this._flags.last_token.text === 'declare'
                  ? (this._output.space_before_token = !0)
                  : this.print_newline()
            : this._flags.last_token.type === a.OPERATOR ||
                this._flags.last_token.text === '='
              ? (this._output.space_before_token = !0)
              : (!this._flags.multiline_frame &&
                  (A(this._flags.mode) || x(this._flags.mode))) ||
                this.print_newline(),
          this.print_token(s),
          (this._flags.last_word = s.text)
        return
      }
      var k = 'NONE'
      if (
        (this._flags.last_token.type === a.END_BLOCK
          ? this._previous_flags.inline_frame
            ? (k = 'SPACE')
            : y(s, ['else', 'catch', 'finally', 'from'])
              ? this._options.brace_style === 'expand' ||
                this._options.brace_style === 'end-expand' ||
                (this._options.brace_style === 'none' && s.newlines)
                ? (k = 'NEWLINE')
                : ((k = 'SPACE'), (this._output.space_before_token = !0))
              : (k = 'NEWLINE')
          : this._flags.last_token.type === a.SEMICOLON &&
              this._flags.mode === r.BlockStatement
            ? (k = 'NEWLINE')
            : this._flags.last_token.type === a.SEMICOLON && A(this._flags.mode)
              ? (k = 'SPACE')
              : this._flags.last_token.type === a.STRING
                ? (k = 'NEWLINE')
                : this._flags.last_token.type === a.RESERVED ||
                    this._flags.last_token.type === a.WORD ||
                    (this._flags.last_token.text === '*' &&
                      (_(this._last_last_text, ['function', 'yield']) ||
                        (this._flags.mode === r.ObjectLiteral &&
                          _(this._last_last_text, ['{', ',']))))
                  ? (k = 'SPACE')
                  : this._flags.last_token.type === a.START_BLOCK
                    ? this._flags.inline_frame
                      ? (k = 'SPACE')
                      : (k = 'NEWLINE')
                    : this._flags.last_token.type === a.END_EXPR &&
                      ((this._output.space_before_token = !0), (k = 'NEWLINE')),
        y(s, l) &&
          this._flags.last_token.text !== ')' &&
          (this._flags.inline_frame ||
          this._flags.last_token.text === 'else' ||
          this._flags.last_token.text === 'export'
            ? (k = 'SPACE')
            : (k = 'NEWLINE')),
        y(s, ['else', 'catch', 'finally']))
      )
        if (
          (!(
            this._flags.last_token.type === a.END_BLOCK &&
            this._previous_flags.mode === r.BlockStatement
          ) ||
            this._options.brace_style === 'expand' ||
            this._options.brace_style === 'end-expand' ||
            (this._options.brace_style === 'none' && s.newlines)) &&
          !this._flags.inline_frame
        )
          this.print_newline()
        else {
          this._output.trim(!0)
          var E = this._output.current_line
          E.last() !== '}' && this.print_newline(),
            (this._output.space_before_token = !0)
        }
      else
        k === 'NEWLINE'
          ? y(this._flags.last_token, T)
            ? (this._output.space_before_token = !0)
            : this._flags.last_token.text === 'declare' &&
                y(s, ['var', 'let', 'const'])
              ? (this._output.space_before_token = !0)
              : this._flags.last_token.type !== a.END_EXPR
                ? (this._flags.last_token.type !== a.START_EXPR ||
                    !y(s, ['var', 'let', 'const'])) &&
                  this._flags.last_token.text !== ':' &&
                  (g(s, 'if') && g(s.previous, 'else')
                    ? (this._output.space_before_token = !0)
                    : this.print_newline())
                : y(s, l) &&
                  this._flags.last_token.text !== ')' &&
                  this.print_newline()
          : this._flags.multiline_frame &&
              x(this._flags.mode) &&
              this._flags.last_token.text === ',' &&
              this._last_last_text === '}'
            ? this.print_newline()
            : k === 'SPACE' && (this._output.space_before_token = !0)
      s.previous &&
        (s.previous.type === a.WORD || s.previous.type === a.RESERVED) &&
        (this._output.space_before_token = !0),
        this.print_token(s),
        (this._flags.last_word = s.text),
        s.type === a.RESERVED &&
          (s.text === 'do'
            ? (this._flags.do_block = !0)
            : s.text === 'if'
              ? (this._flags.if_block = !0)
              : s.text === 'import'
                ? (this._flags.import_block = !0)
                : this._flags.import_block &&
                  g(s, 'from') &&
                  (this._flags.import_block = !1))
    }),
    (p.prototype.handle_semicolon = function (s) {
      this.start_of_statement(s)
        ? (this._output.space_before_token = !1)
        : this.handle_whitespace_and_comments(s)
      for (
        var w = this._tokens.peek();
        this._flags.mode === r.Statement &&
        !(this._flags.if_block && g(w, 'else')) &&
        !this._flags.do_block;

      )
        this.restore_mode()
      this._flags.import_block && (this._flags.import_block = !1),
        this.print_token(s)
    }),
    (p.prototype.handle_string = function (s) {
      ;(s.text.startsWith('`') &&
        s.newlines === 0 &&
        s.whitespace_before === '' &&
        (s.previous.text === ')' || this._flags.last_token.type === a.WORD)) ||
        (this.start_of_statement(s)
          ? (this._output.space_before_token = !0)
          : (this.handle_whitespace_and_comments(s),
            this._flags.last_token.type === a.RESERVED ||
            this._flags.last_token.type === a.WORD ||
            this._flags.inline_frame
              ? (this._output.space_before_token = !0)
              : this._flags.last_token.type === a.COMMA ||
                  this._flags.last_token.type === a.START_EXPR ||
                  this._flags.last_token.type === a.EQUALS ||
                  this._flags.last_token.type === a.OPERATOR
                ? this.start_of_object_property() ||
                  this.allow_wrap_or_preserved_newline(s)
                : s.text.startsWith('`') &&
                    this._flags.last_token.type === a.END_EXPR &&
                    (s.previous.text === ']' || s.previous.text === ')') &&
                    s.newlines === 0
                  ? (this._output.space_before_token = !0)
                  : this.print_newline())),
        this.print_token(s)
    }),
    (p.prototype.handle_equals = function (s) {
      this.start_of_statement(s) || this.handle_whitespace_and_comments(s),
        this._flags.declaration_statement &&
          (this._flags.declaration_assignment = !0),
        (this._output.space_before_token = !0),
        this.print_token(s),
        (this._output.space_before_token = !0)
    }),
    (p.prototype.handle_comma = function (s) {
      this.handle_whitespace_and_comments(s, !0),
        this.print_token(s),
        (this._output.space_before_token = !0),
        this._flags.declaration_statement
          ? (A(this._flags.parent.mode) &&
              (this._flags.declaration_assignment = !1),
            this._flags.declaration_assignment
              ? ((this._flags.declaration_assignment = !1),
                this.print_newline(!1, !0))
              : this._options.comma_first &&
                this.allow_wrap_or_preserved_newline(s))
          : this._flags.mode === r.ObjectLiteral ||
              (this._flags.mode === r.Statement &&
                this._flags.parent.mode === r.ObjectLiteral)
            ? (this._flags.mode === r.Statement && this.restore_mode(),
              this._flags.inline_frame || this.print_newline())
            : this._options.comma_first &&
              this.allow_wrap_or_preserved_newline(s)
    }),
    (p.prototype.handle_operator = function (s) {
      var w =
          s.text === '*' &&
          (y(this._flags.last_token, ['function', 'yield']) ||
            _(this._flags.last_token.type, [
              a.START_BLOCK,
              a.COMMA,
              a.END_BLOCK,
              a.SEMICOLON,
            ])),
        k =
          _(s.text, ['-', '+']) &&
          (_(this._flags.last_token.type, [
            a.START_BLOCK,
            a.START_EXPR,
            a.EQUALS,
            a.OPERATOR,
          ]) ||
            _(this._flags.last_token.text, l) ||
            this._flags.last_token.text === ',')
      if (!this.start_of_statement(s)) {
        var E = !w
        this.handle_whitespace_and_comments(s, E)
      }
      if (s.text === '*' && this._flags.last_token.type === a.DOT) {
        this.print_token(s)
        return
      }
      if (s.text === '::') {
        this.print_token(s)
        return
      }
      if (_(s.text, ['-', '+']) && this.start_of_object_property()) {
        this.print_token(s)
        return
      }
      if (
        (this._flags.last_token.type === a.OPERATOR &&
          _(this._options.operator_position, d) &&
          this.allow_wrap_or_preserved_newline(s),
        s.text === ':' && this._flags.in_case)
      ) {
        this.print_token(s),
          (this._flags.in_case = !1),
          (this._flags.case_body = !0),
          this._tokens.peek().type !== a.START_BLOCK
            ? (this.indent(),
              this.print_newline(),
              (this._flags.case_block = !1))
            : ((this._flags.case_block = !0),
              (this._output.space_before_token = !0))
        return
      }
      var C = !0,
        D = !0,
        K = !1
      if (
        (s.text === ':'
          ? this._flags.ternary_depth === 0
            ? (C = !1)
            : ((this._flags.ternary_depth -= 1), (K = !0))
          : s.text === '?' && (this._flags.ternary_depth += 1),
        !k && !w && this._options.preserve_newlines && _(s.text, u))
      ) {
        var v = s.text === ':',
          N = v && K,
          I = v && !K
        switch (this._options.operator_position) {
          case M.before_newline:
            ;(this._output.space_before_token = !I),
              this.print_token(s),
              (!v || N) && this.allow_wrap_or_preserved_newline(s),
              (this._output.space_before_token = !0)
            return
          case M.after_newline:
            ;(this._output.space_before_token = !0),
              !v || N
                ? this._tokens.peek().newlines
                  ? this.print_newline(!1, !0)
                  : this.allow_wrap_or_preserved_newline(s)
                : (this._output.space_before_token = !1),
              this.print_token(s),
              (this._output.space_before_token = !0)
            return
          case M.preserve_newline:
            I || this.allow_wrap_or_preserved_newline(s),
              (C = !(this._output.just_added_newline() || I)),
              (this._output.space_before_token = C),
              this.print_token(s),
              (this._output.space_before_token = !0)
            return
        }
      }
      if (w) {
        this.allow_wrap_or_preserved_newline(s), (C = !1)
        var B = this._tokens.peek()
        D = B && _(B.type, [a.WORD, a.RESERVED])
      } else if (s.text === '...')
        this.allow_wrap_or_preserved_newline(s),
          (C = this._flags.last_token.type === a.START_BLOCK),
          (D = !1)
      else if (_(s.text, ['--', '++', '!', '~']) || k) {
        if (
          ((this._flags.last_token.type === a.COMMA ||
            this._flags.last_token.type === a.START_EXPR) &&
            this.allow_wrap_or_preserved_newline(s),
          (C = !1),
          (D = !1),
          s.newlines && (s.text === '--' || s.text === '++' || s.text === '~'))
        ) {
          var F = y(this._flags.last_token, T) && s.newlines
          F &&
            (this._previous_flags.if_block ||
              this._previous_flags.else_block) &&
            this.restore_mode(),
            this.print_newline(F, !0)
        }
        this._flags.last_token.text === ';' && A(this._flags.mode) && (C = !0),
          this._flags.last_token.type === a.RESERVED
            ? (C = !0)
            : this._flags.last_token.type === a.END_EXPR
              ? (C = !(
                  this._flags.last_token.text === ']' &&
                  (s.text === '--' || s.text === '++')
                ))
              : this._flags.last_token.type === a.OPERATOR &&
                ((C =
                  _(s.text, ['--', '-', '++', '+']) &&
                  _(this._flags.last_token.text, ['--', '-', '++', '+'])),
                _(s.text, ['+', '-']) &&
                  _(this._flags.last_token.text, ['--', '++']) &&
                  (D = !0)),
          ((this._flags.mode === r.BlockStatement &&
            !this._flags.inline_frame) ||
            this._flags.mode === r.Statement) &&
            (this._flags.last_token.text === '{' ||
              this._flags.last_token.text === ';') &&
            this.print_newline()
      }
      ;(this._output.space_before_token = this._output.space_before_token || C),
        this.print_token(s),
        (this._output.space_before_token = D)
    }),
    (p.prototype.handle_block_comment = function (s, w) {
      if (this._output.raw) {
        this._output.add_raw_token(s),
          s.directives &&
            s.directives.preserve === 'end' &&
            (this._output.raw = this._options.test_output_raw)
        return
      }
      if (s.directives) {
        this.print_newline(!1, w),
          this.print_token(s),
          s.directives.preserve === 'start' && (this._output.raw = !0),
          this.print_newline(!1, !0)
        return
      }
      if (!i.newline.test(s.text) && !s.newlines) {
        ;(this._output.space_before_token = !0),
          this.print_token(s),
          (this._output.space_before_token = !0)
        return
      } else this.print_block_commment(s, w)
    }),
    (p.prototype.print_block_commment = function (s, w) {
      var k = R(s.text),
        E,
        C = !1,
        D = !1,
        K = s.whitespace_before,
        v = K.length
      if (
        (this.print_newline(!1, w),
        this.print_token_line_indentation(s),
        this._output.add_token(k[0]),
        this.print_newline(!1, w),
        k.length > 1)
      ) {
        for (
          k = k.slice(1),
            C = c(k, '*'),
            D = b(k, K),
            C && (this._flags.alignment = 1),
            E = 0;
          E < k.length;
          E++
        )
          C
            ? (this.print_token_line_indentation(s),
              this._output.add_token(h(k[E])))
            : D && k[E]
              ? (this.print_token_line_indentation(s),
                this._output.add_token(k[E].substring(v)))
              : (this._output.current_line.set_indent(-1),
                this._output.add_token(k[E])),
            this.print_newline(!1, w)
        this._flags.alignment = 0
      }
    }),
    (p.prototype.handle_comment = function (s, w) {
      s.newlines ? this.print_newline(!1, w) : this._output.trim(!0),
        (this._output.space_before_token = !0),
        this.print_token(s),
        this.print_newline(!1, w)
    }),
    (p.prototype.handle_dot = function (s) {
      this.start_of_statement(s) || this.handle_whitespace_and_comments(s, !0),
        this._flags.last_token.text.match('^[0-9]+$') &&
          (this._output.space_before_token = !0),
        y(this._flags.last_token, T)
          ? (this._output.space_before_token = !1)
          : this.allow_wrap_or_preserved_newline(
              s,
              this._flags.last_token.text === ')' &&
                this._options.break_chained_methods,
            ),
        this._options.unindent_chained_methods &&
          this._output.just_added_newline() &&
          this.deindent(),
        this.print_token(s)
    }),
    (p.prototype.handle_unknown = function (s, w) {
      this.print_token(s),
        s.text[s.text.length - 1] ===
          `
` && this.print_newline(!1, w)
    }),
    (p.prototype.handle_eof = function (s) {
      for (; this._flags.mode === r.Statement; ) this.restore_mode()
      this.handle_whitespace_and_comments(s)
    }),
    (ae.Beautifier = p),
    ae
  )
}
var _n
function es() {
  if (_n) return Mt.exports
  _n = 1
  var t = ts().Beautifier,
    e = Un().Options
  function i(n, o) {
    var l = new t(n, o)
    return l.beautify()
  }
  return (
    (Mt.exports = i),
    (Mt.exports.defaultOptions = function () {
      return new e()
    }),
    Mt.exports
  )
}
var Pt = { exports: {} },
  fe = {},
  ge = {},
  ln
function $n() {
  if (ln) return ge
  ln = 1
  var t = Ee().Options
  function e(i) {
    t.call(this, i, 'css'),
      (this.selector_separator_newline = this._get_boolean(
        'selector_separator_newline',
        !0,
      )),
      (this.newline_between_rules = this._get_boolean(
        'newline_between_rules',
        !0,
      ))
    var n = this._get_boolean('space_around_selector_separator')
    this.space_around_combinator =
      this._get_boolean('space_around_combinator') || n
    var o = this._get_selection_list('brace_style', [
      'collapse',
      'expand',
      'end-expand',
      'none',
      'preserve-inline',
    ])
    this.brace_style = 'collapse'
    for (var l = 0; l < o.length; l++)
      o[l] !== 'expand'
        ? (this.brace_style = 'collapse')
        : (this.brace_style = o[l])
  }
  return (e.prototype = new t()), (ge.Options = e), ge
}
var un
function ns() {
  if (un) return fe
  un = 1
  var t = $n().Options,
    e = xe().Output,
    i = Oe().InputScanner,
    n = Ae().Directives,
    o = new n(/\/\*/, /\*\//),
    l = /\r\n|[\r\n]/,
    u = /\r\n|[\r\n]/g,
    a = /\s/,
    _ = /(?:\s|\n)+/g,
    h = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g,
    f = /\/\/(?:[^\n\r\u2028\u2029]*)/g
  function g(y, T) {
    ;(this._source_text = y || ''),
      (this._options = new t(T)),
      (this._ch = null),
      (this._input = null),
      (this.NESTED_AT_RULE = {
        page: !0,
        'font-face': !0,
        keyframes: !0,
        media: !0,
        supports: !0,
        document: !0,
      }),
      (this.CONDITIONAL_GROUP_RULE = { media: !0, supports: !0, document: !0 }),
      (this.NON_SEMICOLON_NEWLINE_PROPERTY = [
        'grid-template-areas',
        'grid-template',
      ])
  }
  return (
    (g.prototype.eatString = function (y) {
      var T = ''
      for (this._ch = this._input.next(); this._ch; ) {
        if (((T += this._ch), this._ch === '\\')) T += this._input.next()
        else if (
          y.indexOf(this._ch) !== -1 ||
          this._ch ===
            `
`
        )
          break
        this._ch = this._input.next()
      }
      return T
    }),
    (g.prototype.eatWhitespace = function (y) {
      for (
        var T = a.test(this._input.peek()), j = 0;
        a.test(this._input.peek());

      )
        (this._ch = this._input.next()),
          y &&
            this._ch ===
              `
` &&
            (j === 0 || j < this._options.max_preserve_newlines) &&
            (j++, this._output.add_new_line(!0))
      return T
    }),
    (g.prototype.foundNestedPseudoClass = function () {
      for (var y = 0, T = 1, j = this._input.peek(T); j; ) {
        if (j === '{') return !0
        if (j === '(') y += 1
        else if (j === ')') {
          if (y === 0) return !1
          y -= 1
        } else if (j === ';' || j === '}') return !1
        T++, (j = this._input.peek(T))
      }
      return !1
    }),
    (g.prototype.print_string = function (y) {
      this._output.set_indent(this._indentLevel),
        (this._output.non_breaking_space = !0),
        this._output.add_token(y)
    }),
    (g.prototype.preserveSingleSpace = function (y) {
      y && (this._output.space_before_token = !0)
    }),
    (g.prototype.indent = function () {
      this._indentLevel++
    }),
    (g.prototype.outdent = function () {
      this._indentLevel > 0 && this._indentLevel--
    }),
    (g.prototype.beautify = function () {
      if (this._options.disabled) return this._source_text
      var y = this._source_text,
        T = this._options.eol
      T === 'auto' &&
        ((T = `
`),
        y && l.test(y || '') && (T = y.match(l)[0])),
        (y = y.replace(
          u,
          `
`,
        ))
      var j = y.match(/^[\t ]*/)[0]
      ;(this._output = new e(this._options, j)),
        (this._input = new i(y)),
        (this._indentLevel = 0),
        (this._nestedLevel = 0),
        (this._ch = null)
      for (
        var M = 0,
          d = !1,
          r = !1,
          m = !1,
          R = !1,
          x = !1,
          A = this._ch,
          c = !1,
          b,
          p,
          O;
        (b = this._input.read(_)),
          (p = b !== ''),
          (O = A),
          (this._ch = this._input.next()),
          this._ch === '\\' &&
            this._input.hasNext() &&
            (this._ch += this._input.next()),
          (A = this._ch),
          this._ch;

      )
        if (this._ch === '/' && this._input.peek() === '*') {
          this._output.add_new_line(), this._input.back()
          var s = this._input.read(h),
            w = o.get_directives(s)
          w && w.ignore === 'start' && (s += o.readIgnored(this._input)),
            this.print_string(s),
            this.eatWhitespace(!0),
            this._output.add_new_line()
        } else if (this._ch === '/' && this._input.peek() === '/')
          (this._output.space_before_token = !0),
            this._input.back(),
            this.print_string(this._input.read(f)),
            this.eatWhitespace(!0)
        else if (this._ch === '$') {
          this.preserveSingleSpace(p), this.print_string(this._ch)
          var k = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g)
          k.match(/[ :]$/) &&
            ((k = this.eatString(': ').replace(/\s+$/, '')),
            this.print_string(k),
            (this._output.space_before_token = !0)),
            M === 0 && k.indexOf(':') !== -1 && ((r = !0), this.indent())
        } else if (this._ch === '@')
          if ((this.preserveSingleSpace(p), this._input.peek() === '{'))
            this.print_string(this._ch + this.eatString('}'))
          else {
            this.print_string(this._ch)
            var E = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g)
            E.match(/[ :]$/) &&
              ((E = this.eatString(': ').replace(/\s+$/, '')),
              this.print_string(E),
              (this._output.space_before_token = !0)),
              M === 0 && E.indexOf(':') !== -1
                ? ((r = !0), this.indent())
                : E in this.NESTED_AT_RULE
                  ? ((this._nestedLevel += 1),
                    E in this.CONDITIONAL_GROUP_RULE && (m = !0))
                  : M === 0 && !r && (R = !0)
          }
        else if (this._ch === '#' && this._input.peek() === '{')
          this.preserveSingleSpace(p),
            this.print_string(this._ch + this.eatString('}'))
        else if (this._ch === '{')
          r && ((r = !1), this.outdent()),
            (R = !1),
            m
              ? ((m = !1), (d = this._indentLevel >= this._nestedLevel))
              : (d = this._indentLevel >= this._nestedLevel - 1),
            this._options.newline_between_rules &&
              d &&
              this._output.previous_line &&
              this._output.previous_line.item(-1) !== '{' &&
              this._output.ensure_empty_line_above('/', ','),
            (this._output.space_before_token = !0),
            this._options.brace_style === 'expand'
              ? (this._output.add_new_line(),
                this.print_string(this._ch),
                this.indent(),
                this._output.set_indent(this._indentLevel))
              : (O === '('
                  ? (this._output.space_before_token = !1)
                  : O !== ',' && this.indent(),
                this.print_string(this._ch)),
            this.eatWhitespace(!0),
            this._output.add_new_line()
        else if (this._ch === '}')
          this.outdent(),
            this._output.add_new_line(),
            O === '{' && this._output.trim(!0),
            r && (this.outdent(), (r = !1)),
            this.print_string(this._ch),
            (d = !1),
            this._nestedLevel && this._nestedLevel--,
            this.eatWhitespace(!0),
            this._output.add_new_line(),
            this._options.newline_between_rules &&
              !this._output.just_added_blankline() &&
              this._input.peek() !== '}' &&
              this._output.add_new_line(!0),
            this._input.peek() === ')' &&
              (this._output.trim(!0),
              this._options.brace_style === 'expand' &&
                this._output.add_new_line(!0))
        else if (this._ch === ':') {
          for (var C = 0; C < this.NON_SEMICOLON_NEWLINE_PROPERTY.length; C++)
            if (this._input.lookBack(this.NON_SEMICOLON_NEWLINE_PROPERTY[C])) {
              c = !0
              break
            }
          ;(d || m) &&
          !(this._input.lookBack('&') || this.foundNestedPseudoClass()) &&
          !this._input.lookBack('(') &&
          !R &&
          M === 0
            ? (this.print_string(':'),
              r ||
                ((r = !0),
                (this._output.space_before_token = !0),
                this.eatWhitespace(!0),
                this.indent()))
            : (this._input.lookBack(' ') &&
                (this._output.space_before_token = !0),
              this._input.peek() === ':'
                ? ((this._ch = this._input.next()), this.print_string('::'))
                : this.print_string(':'))
        } else if (this._ch === '"' || this._ch === "'") {
          var D = O === '"' || O === "'"
          this.preserveSingleSpace(D || p),
            this.print_string(this._ch + this.eatString(this._ch)),
            this.eatWhitespace(!0)
        } else if (this._ch === ';')
          (c = !1),
            M === 0
              ? (r && (this.outdent(), (r = !1)),
                (R = !1),
                this.print_string(this._ch),
                this.eatWhitespace(!0),
                this._input.peek() !== '/' && this._output.add_new_line())
              : (this.print_string(this._ch),
                this.eatWhitespace(!0),
                (this._output.space_before_token = !0))
        else if (this._ch === '(')
          if (this._input.lookBack('url'))
            this.print_string(this._ch),
              this.eatWhitespace(),
              M++,
              this.indent(),
              (this._ch = this._input.next()),
              this._ch === ')' || this._ch === '"' || this._ch === "'"
                ? this._input.back()
                : this._ch &&
                  (this.print_string(this._ch + this.eatString(')')),
                  M && (M--, this.outdent()))
          else {
            var K = !1
            this._input.lookBack('with') && (K = !0),
              this.preserveSingleSpace(p || K),
              this.print_string(this._ch),
              r && O === '$' && this._options.selector_separator_newline
                ? (this._output.add_new_line(), (x = !0))
                : (this.eatWhitespace(), M++, this.indent())
          }
        else if (this._ch === ')')
          M && (M--, this.outdent()),
            x &&
              this._input.peek() === ';' &&
              this._options.selector_separator_newline &&
              ((x = !1), this.outdent(), this._output.add_new_line()),
            this.print_string(this._ch)
        else if (this._ch === ',')
          this.print_string(this._ch),
            this.eatWhitespace(!0),
            this._options.selector_separator_newline &&
            (!r || x) &&
            M === 0 &&
            !R
              ? this._output.add_new_line()
              : (this._output.space_before_token = !0)
        else if (
          (this._ch === '>' || this._ch === '+' || this._ch === '~') &&
          !r &&
          M === 0
        )
          this._options.space_around_combinator
            ? ((this._output.space_before_token = !0),
              this.print_string(this._ch),
              (this._output.space_before_token = !0))
            : (this.print_string(this._ch),
              this.eatWhitespace(),
              this._ch && a.test(this._ch) && (this._ch = ''))
        else if (this._ch === ']') this.print_string(this._ch)
        else if (this._ch === '[')
          this.preserveSingleSpace(p), this.print_string(this._ch)
        else if (this._ch === '=')
          this.eatWhitespace(),
            this.print_string('='),
            a.test(this._ch) && (this._ch = '')
        else if (this._ch === '!' && !this._input.lookBack('\\'))
          (this._output.space_before_token = !0), this.print_string(this._ch)
        else {
          var v = O === '"' || O === "'"
          this.preserveSingleSpace(v || p),
            this.print_string(this._ch),
            !this._output.just_added_newline() &&
              this._input.peek() ===
                `
` &&
              c &&
              this._output.add_new_line()
        }
      var N = this._output.get_code(T)
      return N
    }),
    (fe.Beautifier = g),
    fe
  )
}
var cn
function is() {
  if (cn) return Pt.exports
  cn = 1
  var t = ns().Beautifier,
    e = $n().Options
  function i(n, o) {
    var l = new t(n, o)
    return l.beautify()
  }
  return (
    (Pt.exports = i),
    (Pt.exports.defaultOptions = function () {
      return new e()
    }),
    Pt.exports
  )
}
var Bt = { exports: {} },
  me = {},
  be = {},
  pn
function Fn() {
  if (pn) return be
  pn = 1
  var t = Ee().Options
  function e(i) {
    t.call(this, i, 'html'),
      this.templating.length === 1 &&
        this.templating[0] === 'auto' &&
        (this.templating = ['django', 'erb', 'handlebars', 'php']),
      (this.indent_inner_html = this._get_boolean('indent_inner_html')),
      (this.indent_body_inner_html = this._get_boolean(
        'indent_body_inner_html',
        !0,
      )),
      (this.indent_head_inner_html = this._get_boolean(
        'indent_head_inner_html',
        !0,
      )),
      (this.indent_handlebars = this._get_boolean('indent_handlebars', !0)),
      (this.wrap_attributes = this._get_selection('wrap_attributes', [
        'auto',
        'force',
        'force-aligned',
        'force-expand-multiline',
        'aligned-multiple',
        'preserve',
        'preserve-aligned',
      ])),
      (this.wrap_attributes_min_attrs = this._get_number(
        'wrap_attributes_min_attrs',
        2,
      )),
      (this.wrap_attributes_indent_size = this._get_number(
        'wrap_attributes_indent_size',
        this.indent_size,
      )),
      (this.extra_liners = this._get_array('extra_liners', [
        'head',
        'body',
        '/html',
      ])),
      (this.inline = this._get_array('inline', [
        'a',
        'abbr',
        'area',
        'audio',
        'b',
        'bdi',
        'bdo',
        'br',
        'button',
        'canvas',
        'cite',
        'code',
        'data',
        'datalist',
        'del',
        'dfn',
        'em',
        'embed',
        'i',
        'iframe',
        'img',
        'input',
        'ins',
        'kbd',
        'keygen',
        'label',
        'map',
        'mark',
        'math',
        'meter',
        'noscript',
        'object',
        'output',
        'progress',
        'q',
        'ruby',
        's',
        'samp',
        'select',
        'small',
        'span',
        'strong',
        'sub',
        'sup',
        'svg',
        'template',
        'textarea',
        'time',
        'u',
        'var',
        'video',
        'wbr',
        'text',
        'acronym',
        'big',
        'strike',
        'tt',
      ])),
      (this.inline_custom_elements = this._get_boolean(
        'inline_custom_elements',
        !0,
      )),
      (this.void_elements = this._get_array('void_elements', [
        'area',
        'base',
        'br',
        'col',
        'embed',
        'hr',
        'img',
        'input',
        'keygen',
        'link',
        'menuitem',
        'meta',
        'param',
        'source',
        'track',
        'wbr',
        '!doctype',
        '?xml',
        'basefont',
        'isindex',
      ])),
      (this.unformatted = this._get_array('unformatted', [])),
      (this.content_unformatted = this._get_array('content_unformatted', [
        'pre',
        'textarea',
      ])),
      (this.unformatted_content_delimiter = this._get_characters(
        'unformatted_content_delimiter',
      )),
      (this.indent_scripts = this._get_selection('indent_scripts', [
        'normal',
        'keep',
        'separate',
      ]))
  }
  return (e.prototype = new t()), (be.Options = e), be
}
var Ut = {},
  hn
function dn() {
  if (hn) return Ut
  hn = 1
  var t = Gt().Tokenizer,
    e = Gt().TOKEN,
    i = Ae().Directives,
    n = zn().TemplatablePattern,
    o = Qt().Pattern,
    l = {
      TAG_OPEN: 'TK_TAG_OPEN',
      TAG_CLOSE: 'TK_TAG_CLOSE',
      CONTROL_FLOW_OPEN: 'TK_CONTROL_FLOW_OPEN',
      CONTROL_FLOW_CLOSE: 'TK_CONTROL_FLOW_CLOSE',
      ATTRIBUTE: 'TK_ATTRIBUTE',
      EQUALS: 'TK_EQUALS',
      VALUE: 'TK_VALUE',
      COMMENT: 'TK_COMMENT',
      TEXT: 'TK_TEXT',
      UNKNOWN: 'TK_UNKNOWN',
      START: e.START,
      RAW: e.RAW,
      EOF: e.EOF,
    },
    u = new i(/<\!--/, /-->/),
    a = function (_, h) {
      t.call(this, _, h), (this._current_tag_name = '')
      var f = new n(this._input).read_options(this._options),
        g = new o(this._input)
      if (
        ((this.__patterns = {
          word: f.until(/[\n\r\t <]/),
          word_control_flow_close_excluded: f.until(/[\n\r\t <}]/),
          single_quote: f.until_after(/'/),
          double_quote: f.until_after(/"/),
          attribute: f.until(/[\n\r\t =>]|\/>/),
          element_name: f.until(/[\n\r\t >\/]/),
          angular_control_flow_start: g.matching(/\@[a-zA-Z]+[^({]*[({]/),
          handlebars_comment: g.starting_with(/{{!--/).until_after(/--}}/),
          handlebars: g.starting_with(/{{/).until_after(/}}/),
          handlebars_open: g.until(/[\n\r\t }]/),
          handlebars_raw_close: g.until(/}}/),
          comment: g.starting_with(/<!--/).until_after(/-->/),
          cdata: g.starting_with(/<!\[CDATA\[/).until_after(/]]>/),
          conditional_comment: g.starting_with(/<!\[/).until_after(/]>/),
          processing: g.starting_with(/<\?/).until_after(/\?>/),
        }),
        this._options.indent_handlebars &&
          ((this.__patterns.word = this.__patterns.word.exclude('handlebars')),
          (this.__patterns.word_control_flow_close_excluded =
            this.__patterns.word_control_flow_close_excluded.exclude(
              'handlebars',
            ))),
        (this._unformatted_content_delimiter = null),
        this._options.unformatted_content_delimiter)
      ) {
        var y = this._input.get_literal_regexp(
          this._options.unformatted_content_delimiter,
        )
        this.__patterns.unformatted_content_delimiter = g
          .matching(y)
          .until_after(y)
      }
    }
  return (
    (a.prototype = new t()),
    (a.prototype._is_comment = function (_) {
      return !1
    }),
    (a.prototype._is_opening = function (_) {
      return _.type === l.TAG_OPEN || _.type === l.CONTROL_FLOW_OPEN
    }),
    (a.prototype._is_closing = function (_, h) {
      return (
        (_.type === l.TAG_CLOSE &&
          h &&
          (((_.text === '>' || _.text === '/>') && h.text[0] === '<') ||
            (_.text === '}}' && h.text[0] === '{' && h.text[1] === '{'))) ||
        (_.type === l.CONTROL_FLOW_CLOSE &&
          _.text === '}' &&
          h.text.endsWith('{'))
      )
    }),
    (a.prototype._reset = function () {
      this._current_tag_name = ''
    }),
    (a.prototype._get_next_token = function (_, h) {
      var f = null
      this._readWhitespace()
      var g = this._input.peek()
      return g === null
        ? this._create_token(l.EOF, '')
        : ((f = f || this._read_open_handlebars(g, h)),
          (f = f || this._read_attribute(g, _, h)),
          (f = f || this._read_close(g, h)),
          (f = f || this._read_control_flows(g, h)),
          (f = f || this._read_raw_content(g, _, h)),
          (f = f || this._read_content_word(g, h)),
          (f = f || this._read_comment_or_cdata(g)),
          (f = f || this._read_processing(g)),
          (f = f || this._read_open(g, h)),
          (f = f || this._create_token(l.UNKNOWN, this._input.next())),
          f)
    }),
    (a.prototype._read_comment_or_cdata = function (_) {
      var h = null,
        f = null,
        g = null
      if (_ === '<') {
        var y = this._input.peek(1)
        y === '!' &&
          ((f = this.__patterns.comment.read()),
          f
            ? ((g = u.get_directives(f)),
              g && g.ignore === 'start' && (f += u.readIgnored(this._input)))
            : (f = this.__patterns.cdata.read())),
          f && ((h = this._create_token(l.COMMENT, f)), (h.directives = g))
      }
      return h
    }),
    (a.prototype._read_processing = function (_) {
      var h = null,
        f = null,
        g = null
      if (_ === '<') {
        var y = this._input.peek(1)
        ;(y === '!' || y === '?') &&
          ((f = this.__patterns.conditional_comment.read()),
          (f = f || this.__patterns.processing.read())),
          f && ((h = this._create_token(l.COMMENT, f)), (h.directives = g))
      }
      return h
    }),
    (a.prototype._read_open = function (_, h) {
      var f = null,
        g = null
      return (
        (!h || h.type === l.CONTROL_FLOW_OPEN) &&
          _ === '<' &&
          ((f = this._input.next()),
          this._input.peek() === '/' && (f += this._input.next()),
          (f += this.__patterns.element_name.read()),
          (g = this._create_token(l.TAG_OPEN, f))),
        g
      )
    }),
    (a.prototype._read_open_handlebars = function (_, h) {
      var f = null,
        g = null
      return (
        (!h || h.type === l.CONTROL_FLOW_OPEN) &&
          this._options.indent_handlebars &&
          _ === '{' &&
          this._input.peek(1) === '{' &&
          (this._input.peek(2) === '!'
            ? ((f = this.__patterns.handlebars_comment.read()),
              (f = f || this.__patterns.handlebars.read()),
              (g = this._create_token(l.COMMENT, f)))
            : ((f = this.__patterns.handlebars_open.read()),
              (g = this._create_token(l.TAG_OPEN, f)))),
        g
      )
    }),
    (a.prototype._read_control_flows = function (_, h) {
      var f = '',
        g = null
      if (
        !this._options.templating.includes('angular') ||
        !this._options.indent_handlebars
      )
        return g
      if (_ === '@') {
        if (((f = this.__patterns.angular_control_flow_start.read()), f === ''))
          return g
        for (
          var y = f.endsWith('(') ? 1 : 0, T = 0;
          !(f.endsWith('{') && y === T);

        ) {
          var j = this._input.next()
          if (j === null) break
          j === '(' ? y++ : j === ')' && T++, (f += j)
        }
        g = this._create_token(l.CONTROL_FLOW_OPEN, f)
      } else
        _ === '}' &&
          h &&
          h.type === l.CONTROL_FLOW_OPEN &&
          ((f = this._input.next()),
          (g = this._create_token(l.CONTROL_FLOW_CLOSE, f)))
      return g
    }),
    (a.prototype._read_close = function (_, h) {
      var f = null,
        g = null
      return (
        h &&
          h.type === l.TAG_OPEN &&
          (h.text[0] === '<' &&
          (_ === '>' || (_ === '/' && this._input.peek(1) === '>'))
            ? ((f = this._input.next()),
              _ === '/' && (f += this._input.next()),
              (g = this._create_token(l.TAG_CLOSE, f)))
            : h.text[0] === '{' &&
              _ === '}' &&
              this._input.peek(1) === '}' &&
              (this._input.next(),
              this._input.next(),
              (g = this._create_token(l.TAG_CLOSE, '}}')))),
        g
      )
    }),
    (a.prototype._read_attribute = function (_, h, f) {
      var g = null,
        y = ''
      if (f && f.text[0] === '<')
        if (_ === '=') g = this._create_token(l.EQUALS, this._input.next())
        else if (_ === '"' || _ === "'") {
          var T = this._input.next()
          _ === '"'
            ? (T += this.__patterns.double_quote.read())
            : (T += this.__patterns.single_quote.read()),
            (g = this._create_token(l.VALUE, T))
        } else
          (y = this.__patterns.attribute.read()),
            y &&
              (h.type === l.EQUALS
                ? (g = this._create_token(l.VALUE, y))
                : (g = this._create_token(l.ATTRIBUTE, y)))
      return g
    }),
    (a.prototype._is_content_unformatted = function (_) {
      return (
        this._options.void_elements.indexOf(_) === -1 &&
        (this._options.content_unformatted.indexOf(_) !== -1 ||
          this._options.unformatted.indexOf(_) !== -1)
      )
    }),
    (a.prototype._read_raw_content = function (_, h, f) {
      var g = ''
      if (f && f.text[0] === '{')
        g = this.__patterns.handlebars_raw_close.read()
      else if (
        h.type === l.TAG_CLOSE &&
        h.opened.text[0] === '<' &&
        h.text[0] !== '/'
      ) {
        var y = h.opened.text.substr(1).toLowerCase()
        if (y === 'script' || y === 'style') {
          var T = this._read_comment_or_cdata(_)
          if (T) return (T.type = l.TEXT), T
          g = this._input.readUntil(
            new RegExp('</' + y + '[\\n\\r\\t ]*?>', 'ig'),
          )
        } else
          this._is_content_unformatted(y) &&
            (g = this._input.readUntil(
              new RegExp('</' + y + '[\\n\\r\\t ]*?>', 'ig'),
            ))
      }
      return g ? this._create_token(l.TEXT, g) : null
    }),
    (a.prototype._read_content_word = function (_, h) {
      var f = ''
      if (
        (this._options.unformatted_content_delimiter &&
          _ === this._options.unformatted_content_delimiter[0] &&
          (f = this.__patterns.unformatted_content_delimiter.read()),
        f ||
          (f =
            h && h.type === l.CONTROL_FLOW_OPEN
              ? this.__patterns.word_control_flow_close_excluded.read()
              : this.__patterns.word.read()),
        f)
      )
        return this._create_token(l.TEXT, f)
    }),
    (Ut.Tokenizer = a),
    (Ut.TOKEN = l),
    Ut
  )
}
var fn
function ss() {
  if (fn) return me
  fn = 1
  var t = Fn().Options,
    e = xe().Output,
    i = dn().Tokenizer,
    n = dn().TOKEN,
    o = /\r\n|[\r\n]/,
    l = /\r\n|[\r\n]/g,
    u = function (d, r) {
      ;(this.indent_level = 0),
        (this.alignment_size = 0),
        (this.max_preserve_newlines = d.max_preserve_newlines),
        (this.preserve_newlines = d.preserve_newlines),
        (this._output = new e(d, r))
    }
  ;(u.prototype.current_line_has_match = function (d) {
    return this._output.current_line.has_match(d)
  }),
    (u.prototype.set_space_before_token = function (d, r) {
      ;(this._output.space_before_token = d),
        (this._output.non_breaking_space = r)
    }),
    (u.prototype.set_wrap_point = function () {
      this._output.set_indent(this.indent_level, this.alignment_size),
        this._output.set_wrap_point()
    }),
    (u.prototype.add_raw_token = function (d) {
      this._output.add_raw_token(d)
    }),
    (u.prototype.print_preserved_newlines = function (d) {
      var r = 0
      d.type !== n.TEXT &&
        d.previous.type !== n.TEXT &&
        (r = d.newlines ? 1 : 0),
        this.preserve_newlines &&
          (r =
            d.newlines < this.max_preserve_newlines + 1
              ? d.newlines
              : this.max_preserve_newlines + 1)
      for (var m = 0; m < r; m++) this.print_newline(m > 0)
      return r !== 0
    }),
    (u.prototype.traverse_whitespace = function (d) {
      return d.whitespace_before || d.newlines
        ? (this.print_preserved_newlines(d) ||
            (this._output.space_before_token = !0),
          !0)
        : !1
    }),
    (u.prototype.previous_token_wrapped = function () {
      return this._output.previous_token_wrapped
    }),
    (u.prototype.print_newline = function (d) {
      this._output.add_new_line(d)
    }),
    (u.prototype.print_token = function (d) {
      d.text &&
        (this._output.set_indent(this.indent_level, this.alignment_size),
        this._output.add_token(d.text))
    }),
    (u.prototype.indent = function () {
      this.indent_level++
    }),
    (u.prototype.deindent = function () {
      this.indent_level > 0 &&
        (this.indent_level--,
        this._output.set_indent(this.indent_level, this.alignment_size))
    }),
    (u.prototype.get_full_indent = function (d) {
      return (
        (d = this.indent_level + (d || 0)),
        d < 1 ? '' : this._output.get_indent_string(d)
      )
    })
  var a = function (d) {
      for (var r = null, m = d.next; m.type !== n.EOF && d.closed !== m; ) {
        if (m.type === n.ATTRIBUTE && m.text === 'type') {
          m.next &&
            m.next.type === n.EQUALS &&
            m.next.next &&
            m.next.next.type === n.VALUE &&
            (r = m.next.next.text)
          break
        }
        m = m.next
      }
      return r
    },
    _ = function (d, r) {
      var m = null,
        R = null
      return r.closed
        ? (d === 'script'
            ? (m = 'text/javascript')
            : d === 'style' && (m = 'text/css'),
          (m = a(r) || m),
          m.search('text/css') > -1
            ? (R = 'css')
            : m.search(
                  /module|((text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect))/,
                ) > -1
              ? (R = 'javascript')
              : m.search(/(text|application|dojo)\/(x-)?(html)/) > -1
                ? (R = 'html')
                : m.search(/test\/null/) > -1 && (R = 'null'),
          R)
        : null
    }
  function h(d, r) {
    return r.indexOf(d) !== -1
  }
  function f(d, r, m) {
    ;(this.parent = d || null),
      (this.tag = r ? r.tag_name : ''),
      (this.indent_level = m || 0),
      (this.parser_token = r || null)
  }
  function g(d) {
    ;(this._printer = d), (this._current_frame = null)
  }
  ;(g.prototype.get_parser_token = function () {
    return this._current_frame ? this._current_frame.parser_token : null
  }),
    (g.prototype.record_tag = function (d) {
      var r = new f(this._current_frame, d, this._printer.indent_level)
      this._current_frame = r
    }),
    (g.prototype._try_pop_frame = function (d) {
      var r = null
      return (
        d &&
          ((r = d.parser_token),
          (this._printer.indent_level = d.indent_level),
          (this._current_frame = d.parent)),
        r
      )
    }),
    (g.prototype._get_frame = function (d, r) {
      for (var m = this._current_frame; m && d.indexOf(m.tag) === -1; ) {
        if (r && r.indexOf(m.tag) !== -1) {
          m = null
          break
        }
        m = m.parent
      }
      return m
    }),
    (g.prototype.try_pop = function (d, r) {
      var m = this._get_frame([d], r)
      return this._try_pop_frame(m)
    }),
    (g.prototype.indent_to_tag = function (d) {
      var r = this._get_frame(d)
      r && (this._printer.indent_level = r.indent_level)
    })
  function y(d, r, m, R) {
    ;(this._source_text = d || ''),
      (r = r || {}),
      (this._js_beautify = m),
      (this._css_beautify = R),
      (this._tag_stack = null)
    var x = new t(r, 'html')
    ;(this._options = x),
      (this._is_wrap_attributes_force =
        this._options.wrap_attributes.substr(0, 5) === 'force'),
      (this._is_wrap_attributes_force_expand_multiline =
        this._options.wrap_attributes === 'force-expand-multiline'),
      (this._is_wrap_attributes_force_aligned =
        this._options.wrap_attributes === 'force-aligned'),
      (this._is_wrap_attributes_aligned_multiple =
        this._options.wrap_attributes === 'aligned-multiple'),
      (this._is_wrap_attributes_preserve =
        this._options.wrap_attributes.substr(0, 8) === 'preserve'),
      (this._is_wrap_attributes_preserve_aligned =
        this._options.wrap_attributes === 'preserve-aligned')
  }
  ;(y.prototype.beautify = function () {
    if (this._options.disabled) return this._source_text
    var d = this._source_text,
      r = this._options.eol
    this._options.eol === 'auto' &&
      ((r = `
`),
      d && o.test(d) && (r = d.match(o)[0])),
      (d = d.replace(
        l,
        `
`,
      ))
    var m = d.match(/^[\t ]*/)[0],
      R = { text: '', type: '' },
      x = new T(),
      A = new u(this._options, m),
      c = new i(d, this._options).tokenize()
    this._tag_stack = new g(A)
    for (var b = null, p = c.next(); p.type !== n.EOF; )
      p.type === n.TAG_OPEN || p.type === n.COMMENT
        ? ((b = this._handle_tag_open(A, p, x, R, c)), (x = b))
        : p.type === n.ATTRIBUTE ||
            p.type === n.EQUALS ||
            p.type === n.VALUE ||
            (p.type === n.TEXT && !x.tag_complete)
          ? (b = this._handle_inside_tag(A, p, x, R))
          : p.type === n.TAG_CLOSE
            ? (b = this._handle_tag_close(A, p, x))
            : p.type === n.TEXT
              ? (b = this._handle_text(A, p, x))
              : p.type === n.CONTROL_FLOW_OPEN
                ? (b = this._handle_control_flow_open(A, p))
                : p.type === n.CONTROL_FLOW_CLOSE
                  ? (b = this._handle_control_flow_close(A, p))
                  : A.add_raw_token(p),
        (R = b),
        (p = c.next())
    var O = A._output.get_code(r)
    return O
  }),
    (y.prototype._handle_control_flow_open = function (d, r) {
      var m = { text: r.text, type: r.type }
      return (
        d.set_space_before_token(r.newlines || r.whitespace_before !== '', !0),
        r.newlines
          ? d.print_preserved_newlines(r)
          : d.set_space_before_token(
              r.newlines || r.whitespace_before !== '',
              !0,
            ),
        d.print_token(r),
        d.indent(),
        m
      )
    }),
    (y.prototype._handle_control_flow_close = function (d, r) {
      var m = { text: r.text, type: r.type }
      return (
        d.deindent(),
        r.newlines
          ? d.print_preserved_newlines(r)
          : d.set_space_before_token(
              r.newlines || r.whitespace_before !== '',
              !0,
            ),
        d.print_token(r),
        m
      )
    }),
    (y.prototype._handle_tag_close = function (d, r, m) {
      var R = { text: r.text, type: r.type }
      return (
        (d.alignment_size = 0),
        (m.tag_complete = !0),
        d.set_space_before_token(r.newlines || r.whitespace_before !== '', !0),
        m.is_unformatted
          ? d.add_raw_token(r)
          : (m.tag_start_char === '<' &&
              (d.set_space_before_token(r.text[0] === '/', !0),
              this._is_wrap_attributes_force_expand_multiline &&
                m.has_wrapped_attrs &&
                d.print_newline(!1)),
            d.print_token(r)),
        m.indent_content &&
          !(m.is_unformatted || m.is_content_unformatted) &&
          (d.indent(), (m.indent_content = !1)),
        !m.is_inline_element &&
          !(m.is_unformatted || m.is_content_unformatted) &&
          d.set_wrap_point(),
        R
      )
    }),
    (y.prototype._handle_inside_tag = function (d, r, m, R) {
      var x = m.has_wrapped_attrs,
        A = { text: r.text, type: r.type }
      return (
        d.set_space_before_token(r.newlines || r.whitespace_before !== '', !0),
        m.is_unformatted
          ? d.add_raw_token(r)
          : m.tag_start_char === '{' && r.type === n.TEXT
            ? d.print_preserved_newlines(r)
              ? ((r.newlines = 0), d.add_raw_token(r))
              : d.print_token(r)
            : (r.type === n.ATTRIBUTE
                ? d.set_space_before_token(!0)
                : (r.type === n.EQUALS ||
                    (r.type === n.VALUE && r.previous.type === n.EQUALS)) &&
                  d.set_space_before_token(!1),
              r.type === n.ATTRIBUTE &&
                m.tag_start_char === '<' &&
                ((this._is_wrap_attributes_preserve ||
                  this._is_wrap_attributes_preserve_aligned) &&
                  (d.traverse_whitespace(r), (x = x || r.newlines !== 0)),
                this._is_wrap_attributes_force &&
                  m.attr_count >= this._options.wrap_attributes_min_attrs &&
                  (R.type !== n.TAG_OPEN ||
                    this._is_wrap_attributes_force_expand_multiline) &&
                  (d.print_newline(!1), (x = !0))),
              d.print_token(r),
              (x = x || d.previous_token_wrapped()),
              (m.has_wrapped_attrs = x)),
        A
      )
    }),
    (y.prototype._handle_text = function (d, r, m) {
      var R = { text: r.text, type: 'TK_CONTENT' }
      return (
        m.custom_beautifier_name
          ? this._print_custom_beatifier_text(d, r, m)
          : m.is_unformatted || m.is_content_unformatted
            ? d.add_raw_token(r)
            : (d.traverse_whitespace(r), d.print_token(r)),
        R
      )
    }),
    (y.prototype._print_custom_beatifier_text = function (d, r, m) {
      var R = this
      if (r.text !== '') {
        var x = r.text,
          A,
          c = 1,
          b = '',
          p = ''
        m.custom_beautifier_name === 'javascript' &&
        typeof this._js_beautify == 'function'
          ? (A = this._js_beautify)
          : m.custom_beautifier_name === 'css' &&
              typeof this._css_beautify == 'function'
            ? (A = this._css_beautify)
            : m.custom_beautifier_name === 'html' &&
              (A = function (C, D) {
                var K = new y(C, D, R._js_beautify, R._css_beautify)
                return K.beautify()
              }),
          this._options.indent_scripts === 'keep'
            ? (c = 0)
            : this._options.indent_scripts === 'separate' &&
              (c = -d.indent_level)
        var O = d.get_full_indent(c)
        if (
          ((x = x.replace(/\n[ \t]*$/, '')),
          m.custom_beautifier_name !== 'html' &&
            x[0] === '<' &&
            x.match(/^(<!--|<!\[CDATA\[)/))
        ) {
          var s =
            /^(<!--[^\n]*|<!\[CDATA\[)(\n?)([ \t\n]*)([\s\S]*)(-->|]]>)$/.exec(
              x,
            )
          if (!s) {
            d.add_raw_token(r)
            return
          }
          ;(b =
            O +
            s[1] +
            `
`),
            (x = s[4]),
            s[5] && (p = O + s[5]),
            (x = x.replace(/\n[ \t]*$/, '')),
            (s[2] ||
              s[3].indexOf(`
`) !== -1) &&
              ((s = s[3].match(/[ \t]+$/)), s && (r.whitespace_before = s[0]))
        }
        if (x)
          if (A) {
            var w = function () {
              this.eol = `
`
            }
            w.prototype = this._options.raw_options
            var k = new w()
            x = A(O + x, k)
          } else {
            var E = r.whitespace_before
            E &&
              (x = x.replace(
                new RegExp(
                  `
(` +
                    E +
                    ')?',
                  'g',
                ),
                `
`,
              )),
              (x =
                O +
                x.replace(
                  /\n/g,
                  `
` + O,
                ))
          }
        b &&
          (x
            ? (x =
                b +
                x +
                `
` +
                p)
            : (x = b + p)),
          d.print_newline(!1),
          x &&
            ((r.text = x),
            (r.whitespace_before = ''),
            (r.newlines = 0),
            d.add_raw_token(r),
            d.print_newline(!0))
      }
    }),
    (y.prototype._handle_tag_open = function (d, r, m, R, x) {
      var A = this._get_tag_open_token(r)
      if (
        ((m.is_unformatted || m.is_content_unformatted) &&
        !m.is_empty_element &&
        r.type === n.TAG_OPEN &&
        !A.is_start_tag
          ? (d.add_raw_token(r),
            (A.start_tag_token = this._tag_stack.try_pop(A.tag_name)))
          : (d.traverse_whitespace(r),
            this._set_tag_position(d, r, A, m, R),
            A.is_inline_element || d.set_wrap_point(),
            d.print_token(r)),
        A.is_start_tag && this._is_wrap_attributes_force)
      ) {
        var c = 0,
          b
        do
          (b = x.peek(c)),
            b.type === n.ATTRIBUTE && (A.attr_count += 1),
            (c += 1)
        while (b.type !== n.EOF && b.type !== n.TAG_CLOSE)
      }
      return (
        (this._is_wrap_attributes_force_aligned ||
          this._is_wrap_attributes_aligned_multiple ||
          this._is_wrap_attributes_preserve_aligned) &&
          (A.alignment_size = r.text.length + 1),
        !A.tag_complete &&
          !A.is_unformatted &&
          (d.alignment_size = A.alignment_size),
        A
      )
    })
  var T = function (d, r) {
    if (
      ((this.parent = d || null),
      (this.text = ''),
      (this.type = 'TK_TAG_OPEN'),
      (this.tag_name = ''),
      (this.is_inline_element = !1),
      (this.is_unformatted = !1),
      (this.is_content_unformatted = !1),
      (this.is_empty_element = !1),
      (this.is_start_tag = !1),
      (this.is_end_tag = !1),
      (this.indent_content = !1),
      (this.multiline_content = !1),
      (this.custom_beautifier_name = null),
      (this.start_tag_token = null),
      (this.attr_count = 0),
      (this.has_wrapped_attrs = !1),
      (this.alignment_size = 0),
      (this.tag_complete = !1),
      (this.tag_start_char = ''),
      (this.tag_check = ''),
      !r)
    )
      this.tag_complete = !0
    else {
      var m
      ;(this.tag_start_char = r.text[0]),
        (this.text = r.text),
        this.tag_start_char === '<'
          ? ((m = r.text.match(/^<([^\s>]*)/)),
            (this.tag_check = m ? m[1] : ''))
          : ((m = r.text.match(/^{{~?(?:[\^]|#\*?)?([^\s}]+)/)),
            (this.tag_check = m ? m[1] : ''),
            (r.text.startsWith('{{#>') || r.text.startsWith('{{~#>')) &&
              this.tag_check[0] === '>' &&
              (this.tag_check === '>' && r.next !== null
                ? (this.tag_check = r.next.text.split(' ')[0])
                : (this.tag_check = r.text.split('>')[1]))),
        (this.tag_check = this.tag_check.toLowerCase()),
        r.type === n.COMMENT && (this.tag_complete = !0),
        (this.is_start_tag = this.tag_check.charAt(0) !== '/'),
        (this.tag_name = this.is_start_tag
          ? this.tag_check
          : this.tag_check.substr(1)),
        (this.is_end_tag =
          !this.is_start_tag || (r.closed && r.closed.text === '/>'))
      var R = 2
      this.tag_start_char === '{' &&
        this.text.length >= 3 &&
        this.text.charAt(2) === '~' &&
        (R = 3),
        (this.is_end_tag =
          this.is_end_tag ||
          (this.tag_start_char === '{' &&
            (this.text.length < 3 || /[^#\^]/.test(this.text.charAt(R)))))
    }
  }
  ;(y.prototype._get_tag_open_token = function (d) {
    var r = new T(this._tag_stack.get_parser_token(), d)
    return (
      (r.alignment_size = this._options.wrap_attributes_indent_size),
      (r.is_end_tag =
        r.is_end_tag || h(r.tag_check, this._options.void_elements)),
      (r.is_empty_element = r.tag_complete || (r.is_start_tag && r.is_end_tag)),
      (r.is_unformatted =
        !r.tag_complete && h(r.tag_check, this._options.unformatted)),
      (r.is_content_unformatted =
        !r.is_empty_element &&
        h(r.tag_check, this._options.content_unformatted)),
      (r.is_inline_element =
        h(r.tag_name, this._options.inline) ||
        (this._options.inline_custom_elements && r.tag_name.includes('-')) ||
        r.tag_start_char === '{'),
      r
    )
  }),
    (y.prototype._set_tag_position = function (d, r, m, R, x) {
      if (
        (m.is_empty_element ||
          (m.is_end_tag
            ? (m.start_tag_token = this._tag_stack.try_pop(m.tag_name))
            : (this._do_optional_end_element(m) &&
                (m.is_inline_element || d.print_newline(!1)),
              this._tag_stack.record_tag(m),
              (m.tag_name === 'script' || m.tag_name === 'style') &&
                !(m.is_unformatted || m.is_content_unformatted) &&
                (m.custom_beautifier_name = _(m.tag_check, r)))),
        h(m.tag_check, this._options.extra_liners) &&
          (d.print_newline(!1),
          d._output.just_added_blankline() || d.print_newline(!0)),
        m.is_empty_element)
      ) {
        if (m.tag_start_char === '{' && m.tag_check === 'else') {
          this._tag_stack.indent_to_tag(['if', 'unless', 'each']),
            (m.indent_content = !0)
          var A = d.current_line_has_match(/{{#if/)
          A || d.print_newline(!1)
        }
        ;(m.tag_name === '!--' &&
          x.type === n.TAG_CLOSE &&
          R.is_end_tag &&
          m.text.indexOf(`
`) === -1) ||
          (m.is_inline_element || m.is_unformatted || d.print_newline(!1),
          this._calcluate_parent_multiline(d, m))
      } else if (m.is_end_tag) {
        var c = !1
        ;(c = m.start_tag_token && m.start_tag_token.multiline_content),
          (c =
            c ||
            (!m.is_inline_element &&
              !(R.is_inline_element || R.is_unformatted) &&
              !(x.type === n.TAG_CLOSE && m.start_tag_token === R) &&
              x.type !== 'TK_CONTENT')),
          (m.is_content_unformatted || m.is_unformatted) && (c = !1),
          c && d.print_newline(!1)
      } else
        (m.indent_content = !m.custom_beautifier_name),
          m.tag_start_char === '<' &&
            (m.tag_name === 'html'
              ? (m.indent_content = this._options.indent_inner_html)
              : m.tag_name === 'head'
                ? (m.indent_content = this._options.indent_head_inner_html)
                : m.tag_name === 'body' &&
                  (m.indent_content = this._options.indent_body_inner_html)),
          !(m.is_inline_element || m.is_unformatted) &&
            (x.type !== 'TK_CONTENT' || m.is_content_unformatted) &&
            d.print_newline(!1),
          this._calcluate_parent_multiline(d, m)
    }),
    (y.prototype._calcluate_parent_multiline = function (d, r) {
      r.parent &&
        d._output.just_added_newline() &&
        !(
          (r.is_inline_element || r.is_unformatted) &&
          r.parent.is_inline_element
        ) &&
        (r.parent.multiline_content = !0)
    })
  var j = [
      'address',
      'article',
      'aside',
      'blockquote',
      'details',
      'div',
      'dl',
      'fieldset',
      'figcaption',
      'figure',
      'footer',
      'form',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'header',
      'hr',
      'main',
      'menu',
      'nav',
      'ol',
      'p',
      'pre',
      'section',
      'table',
      'ul',
    ],
    M = ['a', 'audio', 'del', 'ins', 'map', 'noscript', 'video']
  return (
    (y.prototype._do_optional_end_element = function (d) {
      var r = null
      if (!(d.is_empty_element || !d.is_start_tag || !d.parent)) {
        if (d.tag_name === 'body') r = r || this._tag_stack.try_pop('head')
        else if (d.tag_name === 'li')
          r = r || this._tag_stack.try_pop('li', ['ol', 'ul', 'menu'])
        else if (d.tag_name === 'dd' || d.tag_name === 'dt')
          (r = r || this._tag_stack.try_pop('dt', ['dl'])),
            (r = r || this._tag_stack.try_pop('dd', ['dl']))
        else if (d.parent.tag_name === 'p' && j.indexOf(d.tag_name) !== -1) {
          var m = d.parent.parent
          ;(!m || M.indexOf(m.tag_name) === -1) &&
            (r = r || this._tag_stack.try_pop('p'))
        } else
          d.tag_name === 'rp' || d.tag_name === 'rt'
            ? ((r = r || this._tag_stack.try_pop('rt', ['ruby', 'rtc'])),
              (r = r || this._tag_stack.try_pop('rp', ['ruby', 'rtc'])))
            : d.tag_name === 'optgroup'
              ? (r = r || this._tag_stack.try_pop('optgroup', ['select']))
              : d.tag_name === 'option'
                ? (r =
                    r ||
                    this._tag_stack.try_pop('option', [
                      'select',
                      'datalist',
                      'optgroup',
                    ]))
                : d.tag_name === 'colgroup'
                  ? (r = r || this._tag_stack.try_pop('caption', ['table']))
                  : d.tag_name === 'thead'
                    ? ((r = r || this._tag_stack.try_pop('caption', ['table'])),
                      (r = r || this._tag_stack.try_pop('colgroup', ['table'])))
                    : d.tag_name === 'tbody' || d.tag_name === 'tfoot'
                      ? ((r =
                          r || this._tag_stack.try_pop('caption', ['table'])),
                        (r =
                          r || this._tag_stack.try_pop('colgroup', ['table'])),
                        (r = r || this._tag_stack.try_pop('thead', ['table'])),
                        (r = r || this._tag_stack.try_pop('tbody', ['table'])))
                      : d.tag_name === 'tr'
                        ? ((r =
                            r || this._tag_stack.try_pop('caption', ['table'])),
                          (r =
                            r ||
                            this._tag_stack.try_pop('colgroup', ['table'])),
                          (r =
                            r ||
                            this._tag_stack.try_pop('tr', [
                              'table',
                              'thead',
                              'tbody',
                              'tfoot',
                            ])))
                        : (d.tag_name === 'th' || d.tag_name === 'td') &&
                          ((r =
                            r ||
                            this._tag_stack.try_pop('td', [
                              'table',
                              'thead',
                              'tbody',
                              'tfoot',
                              'tr',
                            ])),
                          (r =
                            r ||
                            this._tag_stack.try_pop('th', [
                              'table',
                              'thead',
                              'tbody',
                              'tfoot',
                              'tr',
                            ])))
        return (d.parent = this._tag_stack.get_parser_token()), r
      }
    }),
    (me.Beautifier = y),
    me
  )
}
var gn
function as() {
  if (gn) return Bt.exports
  gn = 1
  var t = ss().Beautifier,
    e = Fn().Options
  function i(n, o, l, u) {
    var a = new t(n, o, l, u)
    return a.beautify()
  }
  return (
    (Bt.exports = i),
    (Bt.exports.defaultOptions = function () {
      return new e()
    }),
    Bt.exports
  )
}
var mn
function rs() {
  if (mn) return xt
  mn = 1
  var t = es(),
    e = is(),
    i = as()
  function n(o, l, u, a) {
    return (u = u || t), (a = a || e), i(o, l, u, a)
  }
  return (
    (n.defaultOptions = i.defaultOptions),
    (xt.js = t),
    (xt.css = e),
    (xt.html = n),
    xt
  )
}
;(function (t) {
  function e(i, n, o) {
    var l = function (u, a) {
      return i.js_beautify(u, a)
    }
    return (
      (l.js = i.js_beautify),
      (l.css = n.css_beautify),
      (l.html = o.html_beautify),
      (l.js_beautify = i.js_beautify),
      (l.css_beautify = n.css_beautify),
      (l.html_beautify = o.html_beautify),
      l
    )
  }
  ;(function (i) {
    var n = rs()
    ;(n.js_beautify = n.js),
      (n.css_beautify = n.css),
      (n.html_beautify = n.html),
      (i.exports = e(n, n, n))
  })(t)
})(Dn)
/*!
 * is-whitespace <https://github.com/jonschlinkert/is-whitespace>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */ var bn,
  os = function (t) {
    return typeof t == 'string' && _s().test(t)
  }
function _s() {
  return (
    bn ||
    (bn = new RegExp(`^[\\s	
\v\f\r   ᠎             　\u2028\u2029\uFEFF"]+$`))
  )
}
/*!
 * is-extendable <https://github.com/jonschlinkert/is-extendable>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */ var ls = function (t) {
    return (
      typeof t < 'u' &&
      t !== null &&
      (typeof t == 'object' || typeof t == 'function')
    )
  },
  yn = ls,
  Wn = function (t) {
    yn(t) || (t = {})
    for (var e = arguments.length, i = 1; i < e; i++) {
      var n = arguments[i]
      yn(n) && us(t, n)
    }
    return t
  }
function us(t, e) {
  for (var i in e) cs(e, i) && (t[i] = e[i])
}
function cs(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e)
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var ps = function (t) {
  return t != null && (Kn(t) || hs(t) || !!t._isBuffer)
}
function Kn(t) {
  return (
    !!t.constructor &&
    typeof t.constructor.isBuffer == 'function' &&
    t.constructor.isBuffer(t)
  )
}
function hs(t) {
  return (
    typeof t.readFloatLE == 'function' &&
    typeof t.slice == 'function' &&
    Kn(t.slice(0, 0))
  )
}
var ds = ps,
  fs = Object.prototype.toString,
  gs = function (t) {
    if (typeof t > 'u') return 'undefined'
    if (t === null) return 'null'
    if (t === !0 || t === !1 || t instanceof Boolean) return 'boolean'
    if (typeof t == 'string' || t instanceof String) return 'string'
    if (typeof t == 'number' || t instanceof Number) return 'number'
    if (typeof t == 'function' || t instanceof Function) return 'function'
    if (typeof Array.isArray < 'u' && Array.isArray(t)) return 'array'
    if (t instanceof RegExp) return 'regexp'
    if (t instanceof Date) return 'date'
    var e = fs.call(t)
    return e === '[object RegExp]'
      ? 'regexp'
      : e === '[object Date]'
        ? 'date'
        : e === '[object Arguments]'
          ? 'arguments'
          : e === '[object Error]'
            ? 'error'
            : ds(t)
              ? 'buffer'
              : e === '[object Set]'
                ? 'set'
                : e === '[object WeakSet]'
                  ? 'weakset'
                  : e === '[object Map]'
                    ? 'map'
                    : e === '[object WeakMap]'
                      ? 'weakmap'
                      : e === '[object Symbol]'
                        ? 'symbol'
                        : e === '[object Int8Array]'
                          ? 'int8array'
                          : e === '[object Uint8Array]'
                            ? 'uint8array'
                            : e === '[object Uint8ClampedArray]'
                              ? 'uint8clampedarray'
                              : e === '[object Int16Array]'
                                ? 'int16array'
                                : e === '[object Uint16Array]'
                                  ? 'uint16array'
                                  : e === '[object Int32Array]'
                                    ? 'int32array'
                                    : e === '[object Uint32Array]'
                                      ? 'uint32array'
                                      : e === '[object Float32Array]'
                                        ? 'float32array'
                                        : e === '[object Float64Array]'
                                          ? 'float64array'
                                          : 'object'
  }
/*!
 * condense-newlines <https://github.com/jonschlinkert/condense-newlines>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */ var ms = os,
  bs = Wn,
  ys = gs,
  ks = function (t, e) {
    var i = bs({}, e),
      n =
        i.sep ||
        `

`,
      o = i.min,
      l
    return (
      typeof o == 'number' &&
        o !== 2 &&
        (l = new RegExp('(\\r\\n|\\n|\\u2424) {' + o + ',}')),
      typeof l > 'u' && (l = i.regex || /(\r\n|\n|\u2424){2,}/g),
      i.keepWhitespace !== !0 &&
        (t = t
          .split(
            `
`,
          )
          .map(function (u) {
            return ms(u) ? u.trim() : u
          }).join(`
`)),
      (t = ws(t, i)),
      t.replace(l, n)
    )
  }
function ws(t, e) {
  var i = e.trailingNewline
  if (i === !1) return t
  switch (ys(i)) {
    case 'string':
      t = t.replace(/\s+$/, e.trailingNewline)
      break
    case 'function':
      t = e.trailingNewline(t)
      break
    case 'undefined':
    case 'boolean':
    default: {
      t = t.replace(
        /\s+$/,
        `
`,
      )
      break
    }
  }
  return t
}
/*!
 * pretty <https://github.com/jonschlinkert/pretty>
 *
 * Copyright (c) 2013-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */ var vs = Dn.exports,
  xs = ks,
  Es = Wn,
  Os = {
    unformatted: ['code', 'pre', 'em', 'strong', 'span'],
    indent_inner_html: !0,
    indent_char: ' ',
    indent_size: 2,
    sep: `
`,
  },
  As = function (t, e) {
    var i = Es({}, Os, e)
    return (
      (t = vs.html(t, i)),
      i.ocd === !0 ? (i.newlines && (i.sep = i.newlines), Ts(t, i)) : t
    )
  }
function Ts(t, e) {
  return xs(t, e)
    .replace(/^\s+/g, '')
    .replace(
      /\s+$/g,
      `
`,
    )
    .replace(
      /(\s*<!--)/g,
      `
$1`,
    )
    .replace(/>(\s*)(?=<!--\s*\/)/g, '> ')
}
function vt(t) {
  let { code: e, src: i } = t || {}
  e || (e = '<div id="app"></div>'),
    i &&
      (e += `
<script type="module" src="${i}"><\/script>`)
  const n = new DOMParser().parseFromString(e, 'text/html')
  return As(
    `<!DOCTYPE html>
${n.documentElement.outerHTML}`,
    { ocd: !0 },
  )
}
function qt(t) {
  const e = {}
  return (
    t === $.REACT && (e.jsx = 'react'),
    JSON.stringify(
      {
        compilerOptions: {
          target: 'es5',
          lib: ['dom', 'dom.iterable', 'esnext'],
          allowJs: !0,
          skipLibCheck: !0,
          esModuleInterop: !0,
          allowImportingTsExtensions: !0,
          allowSyntheticDefaultImports: !0,
          strict: !0,
          forceConsistentCasingInFileNames: !0,
          module: 'esnext',
          moduleResolution: 'node',
          resolveJsonModule: !0,
          isolatedModules: !0,
          noEmit: !0,
          ...e,
        },
        include: ['src'],
      },
      null,
      2,
    )
  )
}
const Gn = () =>
    JSON.stringify(
      { installDependencies: !1, startCommand: 'npm install && npm run dev' },
      null,
      2,
    ),
  Rs = `import { createApp } from "vue";
import Demo from "./Demo.vue";

const app = createApp(Demo);
app.mount("#app");
`,
  Ns = `import React from "react";
import { createRoot } from "react-dom/client";
import Demo from "./Demo.tsx";

const root = createRoot(document.querySelector("#app"));
root.render(<Demo />);
`
function Jt(t) {
  return t === $.VUE ? Rs : t === $.REACT ? Ns : ''
}
const Ss = `import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
export default defineConfig({
  plugins: [vue(), vueJsx()],
});
`,
  Cs = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
});
`
function Hn(t) {
  return t === $.VUE ? Ss : t === $.REACT ? Cs : ''
}
const Ls = () => ({
    copyContent: ot(''),
    clickCopy: async (t) => {
      await navigator.clipboard.writeText(t)
    },
  }),
  js = () => {
    const t = ot(!0)
    return {
      isCodeFold: t,
      setCodeFold: (e) => {
        t.value = e
      },
    }
  }
function Ms(t) {
  return [
    ...(t.match(/from '([^']+)'(;)?(\r)?\n/g) || []),
    ...(t.match(/from "([^"]+)"(;)?(\r)?\n/g) || []),
  ]
    .map((e) => {
      let i = ''
      return (
        e.includes("'")
          ? (i = e.split("'")[1])
          : e.includes('"') && (i = e.split('"')[1]),
        i.includes('/') &&
          (i.startsWith('@')
            ? (i = i.split('/')[0] + '/' + i.split('/')[1])
            : (i = i.split('/')[0])),
        i
      )
    })
    .filter((e) => e !== '')
    .reduce((e, i) => ((e[i] = 'latest'), e), {})
}
function Vn(t) {
  return (
    t instanceof Map
      ? (t.clear =
          t.delete =
          t.set =
            function () {
              throw new Error('map is read-only')
            })
      : t instanceof Set &&
        (t.add =
          t.clear =
          t.delete =
            function () {
              throw new Error('set is read-only')
            }),
    Object.freeze(t),
    Object.getOwnPropertyNames(t).forEach((e) => {
      const i = t[e],
        n = typeof i
      ;(n === 'object' || n === 'function') && !Object.isFrozen(i) && Vn(i)
    }),
    t
  )
}
class kn {
  constructor(e) {
    e.data === void 0 && (e.data = {}),
      (this.data = e.data),
      (this.isMatchIgnored = !1)
  }
  ignoreMatch() {
    this.isMatchIgnored = !0
  }
}
function Xn(t) {
  return t
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
}
function ct(t, ...e) {
  const i = Object.create(null)
  for (const n in t) i[n] = t[n]
  return (
    e.forEach(function (n) {
      for (const o in n) i[o] = n[o]
    }),
    i
  )
}
const Is = '</span>',
  wn = (t) => !!t.scope,
  Ds = (t, { prefix: e }) => {
    if (t.startsWith('language:')) return t.replace('language:', 'language-')
    if (t.includes('.')) {
      const i = t.split('.')
      return [
        `${e}${i.shift()}`,
        ...i.map((n, o) => `${n}${'_'.repeat(o + 1)}`),
      ].join(' ')
    }
    return `${e}${t}`
  }
class Ps {
  constructor(e, i) {
    ;(this.buffer = ''), (this.classPrefix = i.classPrefix), e.walk(this)
  }
  addText(e) {
    this.buffer += Xn(e)
  }
  openNode(e) {
    if (!wn(e)) return
    const i = Ds(e.scope, { prefix: this.classPrefix })
    this.span(i)
  }
  closeNode(e) {
    !wn(e) || (this.buffer += Is)
  }
  value() {
    return this.buffer
  }
  span(e) {
    this.buffer += `<span class="${e}">`
  }
}
const vn = (t = {}) => {
  const e = { children: [] }
  return Object.assign(e, t), e
}
class Te {
  constructor() {
    ;(this.rootNode = vn()), (this.stack = [this.rootNode])
  }
  get top() {
    return this.stack[this.stack.length - 1]
  }
  get root() {
    return this.rootNode
  }
  add(e) {
    this.top.children.push(e)
  }
  openNode(e) {
    const i = vn({ scope: e })
    this.add(i), this.stack.push(i)
  }
  closeNode() {
    if (this.stack.length > 1) return this.stack.pop()
  }
  closeAllNodes() {
    for (; this.closeNode(); );
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4)
  }
  walk(e) {
    return this.constructor._walk(e, this.rootNode)
  }
  static _walk(e, i) {
    return (
      typeof i == 'string'
        ? e.addText(i)
        : i.children &&
          (e.openNode(i),
          i.children.forEach((n) => this._walk(e, n)),
          e.closeNode(i)),
      e
    )
  }
  static _collapse(e) {
    typeof e != 'string' &&
      (!e.children ||
        (e.children.every((i) => typeof i == 'string')
          ? (e.children = [e.children.join('')])
          : e.children.forEach((i) => {
              Te._collapse(i)
            })))
  }
}
class Bs extends Te {
  constructor(e) {
    super(), (this.options = e)
  }
  addText(e) {
    e !== '' && this.add(e)
  }
  startScope(e) {
    this.openNode(e)
  }
  endScope() {
    this.closeNode()
  }
  __addSublanguage(e, i) {
    const n = e.root
    i && (n.scope = `language:${i}`), this.add(n)
  }
  toHTML() {
    return new Ps(this, this.options).value()
  }
  finalize() {
    return this.closeAllNodes(), !0
  }
}
function At(t) {
  return t ? (typeof t == 'string' ? t : t.source) : null
}
function Zn(t) {
  return bt('(?=', t, ')')
}
function Us(t) {
  return bt('(?:', t, ')*')
}
function zs(t) {
  return bt('(?:', t, ')?')
}
function bt(...t) {
  return t.map((e) => At(e)).join('')
}
function $s(t) {
  const e = t[t.length - 1]
  return typeof e == 'object' && e.constructor === Object
    ? (t.splice(t.length - 1, 1), e)
    : {}
}
function Re(...t) {
  return '(' + ($s(t).capture ? '' : '?:') + t.map((e) => At(e)).join('|') + ')'
}
function Qn(t) {
  return new RegExp(t.toString() + '|').exec('').length - 1
}
function Fs(t, e) {
  const i = t && t.exec(e)
  return i && i.index === 0
}
const Ws = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./
function Ne(t, { joinWith: e }) {
  let i = 0
  return t
    .map((n) => {
      i += 1
      const o = i
      let l = At(n),
        u = ''
      for (; l.length > 0; ) {
        const a = Ws.exec(l)
        if (!a) {
          u += l
          break
        }
        ;(u += l.substring(0, a.index)),
          (l = l.substring(a.index + a[0].length)),
          a[0][0] === '\\' && a[1]
            ? (u += '\\' + String(Number(a[1]) + o))
            : ((u += a[0]), a[0] === '(' && i++)
      }
      return u
    })
    .map((n) => `(${n})`)
    .join(e)
}
const Ks = /\b\B/,
  qn = '[a-zA-Z]\\w*',
  Se = '[a-zA-Z_]\\w*',
  Jn = '\\b\\d+(\\.\\d+)?',
  Yn = '(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)',
  ti = '\\b(0b[01]+)',
  Gs =
    '!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~',
  Hs = (t = {}) => {
    const e = /^#![ ]*\//
    return (
      t.binary && (t.begin = bt(e, /.*\b/, t.binary, /\b.*/)),
      ct(
        {
          scope: 'meta',
          begin: e,
          end: /$/,
          relevance: 0,
          'on:begin': (i, n) => {
            i.index !== 0 && n.ignoreMatch()
          },
        },
        t,
      )
    )
  },
  Tt = { begin: '\\\\[\\s\\S]', relevance: 0 },
  Vs = {
    scope: 'string',
    begin: "'",
    end: "'",
    illegal: '\\n',
    contains: [Tt],
  },
  Xs = {
    scope: 'string',
    begin: '"',
    end: '"',
    illegal: '\\n',
    contains: [Tt],
  },
  Zs = {
    begin:
      /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
  },
  Yt = function (t, e, i = {}) {
    const n = ct({ scope: 'comment', begin: t, end: e, contains: [] }, i)
    n.contains.push({
      scope: 'doctag',
      begin: '[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)',
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0,
    })
    const o = Re(
      'I',
      'a',
      'is',
      'so',
      'us',
      'to',
      'at',
      'if',
      'in',
      'it',
      'on',
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      /[A-Za-z]+[-][a-z]+/,
      /[A-Za-z][a-z]{2,}/,
    )
    return (
      n.contains.push({
        begin: bt(/[ ]+/, '(', o, /[.]?[:]?([.][ ]|[ ])/, '){3}'),
      }),
      n
    )
  },
  Qs = Yt('//', '$'),
  qs = Yt('/\\*', '\\*/'),
  Js = Yt('#', '$'),
  Ys = { scope: 'number', begin: Jn, relevance: 0 },
  ta = { scope: 'number', begin: Yn, relevance: 0 },
  ea = { scope: 'number', begin: ti, relevance: 0 },
  na = {
    scope: 'regexp',
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [Tt, { begin: /\[/, end: /\]/, relevance: 0, contains: [Tt] }],
  },
  ia = { scope: 'title', begin: qn, relevance: 0 },
  sa = { scope: 'title', begin: Se, relevance: 0 },
  aa = { begin: '\\.\\s*' + Se, relevance: 0 },
  ra = function (t) {
    return Object.assign(t, {
      'on:begin': (e, i) => {
        i.data._beginMatch = e[1]
      },
      'on:end': (e, i) => {
        i.data._beginMatch !== e[1] && i.ignoreMatch()
      },
    })
  }
var zt = Object.freeze({
  __proto__: null,
  APOS_STRING_MODE: Vs,
  BACKSLASH_ESCAPE: Tt,
  BINARY_NUMBER_MODE: ea,
  BINARY_NUMBER_RE: ti,
  COMMENT: Yt,
  C_BLOCK_COMMENT_MODE: qs,
  C_LINE_COMMENT_MODE: Qs,
  C_NUMBER_MODE: ta,
  C_NUMBER_RE: Yn,
  END_SAME_AS_BEGIN: ra,
  HASH_COMMENT_MODE: Js,
  IDENT_RE: qn,
  MATCH_NOTHING_RE: Ks,
  METHOD_GUARD: aa,
  NUMBER_MODE: Ys,
  NUMBER_RE: Jn,
  PHRASAL_WORDS_MODE: Zs,
  QUOTE_STRING_MODE: Xs,
  REGEXP_MODE: na,
  RE_STARTERS_RE: Gs,
  SHEBANG: Hs,
  TITLE_MODE: ia,
  UNDERSCORE_IDENT_RE: Se,
  UNDERSCORE_TITLE_MODE: sa,
})
function oa(t, e) {
  t.input[t.index - 1] === '.' && e.ignoreMatch()
}
function _a(t, e) {
  t.className !== void 0 && ((t.scope = t.className), delete t.className)
}
function la(t, e) {
  !e ||
    !t.beginKeywords ||
    ((t.begin =
      '\\b(' + t.beginKeywords.split(' ').join('|') + ')(?!\\.)(?=\\b|\\s)'),
    (t.__beforeBegin = oa),
    (t.keywords = t.keywords || t.beginKeywords),
    delete t.beginKeywords,
    t.relevance === void 0 && (t.relevance = 0))
}
function ua(t, e) {
  !Array.isArray(t.illegal) || (t.illegal = Re(...t.illegal))
}
function ca(t, e) {
  if (t.match) {
    if (t.begin || t.end)
      throw new Error('begin & end are not supported with match')
    ;(t.begin = t.match), delete t.match
  }
}
function pa(t, e) {
  t.relevance === void 0 && (t.relevance = 1)
}
const ha = (t, e) => {
    if (!t.beforeMatch) return
    if (t.starts) throw new Error('beforeMatch cannot be used with starts')
    const i = Object.assign({}, t)
    Object.keys(t).forEach((n) => {
      delete t[n]
    }),
      (t.keywords = i.keywords),
      (t.begin = bt(i.beforeMatch, Zn(i.begin))),
      (t.starts = {
        relevance: 0,
        contains: [Object.assign(i, { endsParent: !0 })],
      }),
      (t.relevance = 0),
      delete i.beforeMatch
  },
  da = [
    'of',
    'and',
    'for',
    'in',
    'not',
    'or',
    'if',
    'then',
    'parent',
    'list',
    'value',
  ],
  fa = 'keyword'
function ei(t, e, i = fa) {
  const n = Object.create(null)
  return (
    typeof t == 'string'
      ? o(i, t.split(' '))
      : Array.isArray(t)
        ? o(i, t)
        : Object.keys(t).forEach(function (l) {
            Object.assign(n, ei(t[l], e, l))
          }),
    n
  )
  function o(l, u) {
    e && (u = u.map((a) => a.toLowerCase())),
      u.forEach(function (a) {
        const _ = a.split('|')
        n[_[0]] = [l, ga(_[0], _[1])]
      })
  }
}
function ga(t, e) {
  return e ? Number(e) : ma(t) ? 0 : 1
}
function ma(t) {
  return da.includes(t.toLowerCase())
}
const xn = {},
  mt = (t) => {
    console.error(t)
  },
  En = (t, ...e) => {
    console.log(`WARN: ${t}`, ...e)
  },
  kt = (t, e) => {
    xn[`${t}/${e}`] ||
      (console.log(`Deprecated as of ${t}. ${e}`), (xn[`${t}/${e}`] = !0))
  },
  Ht = new Error()
function ni(t, e, { key: i }) {
  let n = 0
  const o = t[i],
    l = {},
    u = {}
  for (let a = 1; a <= e.length; a++)
    (u[a + n] = o[a]), (l[a + n] = !0), (n += Qn(e[a - 1]))
  ;(t[i] = u), (t[i]._emit = l), (t[i]._multi = !0)
}
function ba(t) {
  if (Array.isArray(t.begin)) {
    if (t.skip || t.excludeBegin || t.returnBegin)
      throw (
        (mt(
          'skip, excludeBegin, returnBegin not compatible with beginScope: {}',
        ),
        Ht)
      )
    if (typeof t.beginScope != 'object' || t.beginScope === null)
      throw (mt('beginScope must be object'), Ht)
    ni(t, t.begin, { key: 'beginScope' }),
      (t.begin = Ne(t.begin, { joinWith: '' }))
  }
}
function ya(t) {
  if (Array.isArray(t.end)) {
    if (t.skip || t.excludeEnd || t.returnEnd)
      throw (
        (mt('skip, excludeEnd, returnEnd not compatible with endScope: {}'), Ht)
      )
    if (typeof t.endScope != 'object' || t.endScope === null)
      throw (mt('endScope must be object'), Ht)
    ni(t, t.end, { key: 'endScope' }), (t.end = Ne(t.end, { joinWith: '' }))
  }
}
function ka(t) {
  t.scope &&
    typeof t.scope == 'object' &&
    t.scope !== null &&
    ((t.beginScope = t.scope), delete t.scope)
}
function wa(t) {
  ka(t),
    typeof t.beginScope == 'string' && (t.beginScope = { _wrap: t.beginScope }),
    typeof t.endScope == 'string' && (t.endScope = { _wrap: t.endScope }),
    ba(t),
    ya(t)
}
function va(t) {
  function e(u, a) {
    return new RegExp(
      At(u),
      'm' +
        (t.case_insensitive ? 'i' : '') +
        (t.unicodeRegex ? 'u' : '') +
        (a ? 'g' : ''),
    )
  }
  class i {
    constructor() {
      ;(this.matchIndexes = {}),
        (this.regexes = []),
        (this.matchAt = 1),
        (this.position = 0)
    }
    addRule(a, _) {
      ;(_.position = this.position++),
        (this.matchIndexes[this.matchAt] = _),
        this.regexes.push([_, a]),
        (this.matchAt += Qn(a) + 1)
    }
    compile() {
      this.regexes.length === 0 && (this.exec = () => null)
      const a = this.regexes.map((_) => _[1])
      ;(this.matcherRe = e(Ne(a, { joinWith: '|' }), !0)), (this.lastIndex = 0)
    }
    exec(a) {
      this.matcherRe.lastIndex = this.lastIndex
      const _ = this.matcherRe.exec(a)
      if (!_) return null
      const h = _.findIndex((g, y) => y > 0 && g !== void 0),
        f = this.matchIndexes[h]
      return _.splice(0, h), Object.assign(_, f)
    }
  }
  class n {
    constructor() {
      ;(this.rules = []),
        (this.multiRegexes = []),
        (this.count = 0),
        (this.lastIndex = 0),
        (this.regexIndex = 0)
    }
    getMatcher(a) {
      if (this.multiRegexes[a]) return this.multiRegexes[a]
      const _ = new i()
      return (
        this.rules.slice(a).forEach(([h, f]) => _.addRule(h, f)),
        _.compile(),
        (this.multiRegexes[a] = _),
        _
      )
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0
    }
    considerAll() {
      this.regexIndex = 0
    }
    addRule(a, _) {
      this.rules.push([a, _]), _.type === 'begin' && this.count++
    }
    exec(a) {
      const _ = this.getMatcher(this.regexIndex)
      _.lastIndex = this.lastIndex
      let h = _.exec(a)
      if (
        this.resumingScanAtSamePosition() &&
        !(h && h.index === this.lastIndex)
      ) {
        const f = this.getMatcher(0)
        ;(f.lastIndex = this.lastIndex + 1), (h = f.exec(a))
      }
      return (
        h &&
          ((this.regexIndex += h.position + 1),
          this.regexIndex === this.count && this.considerAll()),
        h
      )
    }
  }
  function o(u) {
    const a = new n()
    return (
      u.contains.forEach((_) => a.addRule(_.begin, { rule: _, type: 'begin' })),
      u.terminatorEnd && a.addRule(u.terminatorEnd, { type: 'end' }),
      u.illegal && a.addRule(u.illegal, { type: 'illegal' }),
      a
    )
  }
  function l(u, a) {
    const _ = u
    if (u.isCompiled) return _
    ;[_a, ca, wa, ha].forEach((f) => f(u, a)),
      t.compilerExtensions.forEach((f) => f(u, a)),
      (u.__beforeBegin = null),
      [la, ua, pa].forEach((f) => f(u, a)),
      (u.isCompiled = !0)
    let h = null
    return (
      typeof u.keywords == 'object' &&
        u.keywords.$pattern &&
        ((u.keywords = Object.assign({}, u.keywords)),
        (h = u.keywords.$pattern),
        delete u.keywords.$pattern),
      (h = h || /\w+/),
      u.keywords && (u.keywords = ei(u.keywords, t.case_insensitive)),
      (_.keywordPatternRe = e(h, !0)),
      a &&
        (u.begin || (u.begin = /\B|\b/),
        (_.beginRe = e(_.begin)),
        !u.end && !u.endsWithParent && (u.end = /\B|\b/),
        u.end && (_.endRe = e(_.end)),
        (_.terminatorEnd = At(_.end) || ''),
        u.endsWithParent &&
          a.terminatorEnd &&
          (_.terminatorEnd += (u.end ? '|' : '') + a.terminatorEnd)),
      u.illegal && (_.illegalRe = e(u.illegal)),
      u.contains || (u.contains = []),
      (u.contains = [].concat(
        ...u.contains.map(function (f) {
          return xa(f === 'self' ? u : f)
        }),
      )),
      u.contains.forEach(function (f) {
        l(f, _)
      }),
      u.starts && l(u.starts, a),
      (_.matcher = o(_)),
      _
    )
  }
  if (
    (t.compilerExtensions || (t.compilerExtensions = []),
    t.contains && t.contains.includes('self'))
  )
    throw new Error(
      'ERR: contains `self` is not supported at the top-level of a language.  See documentation.',
    )
  return (t.classNameAliases = ct(t.classNameAliases || {})), l(t)
}
function ii(t) {
  return t ? t.endsWithParent || ii(t.starts) : !1
}
function xa(t) {
  return (
    t.variants &&
      !t.cachedVariants &&
      (t.cachedVariants = t.variants.map(function (e) {
        return ct(t, { variants: null }, e)
      })),
    t.cachedVariants
      ? t.cachedVariants
      : ii(t)
        ? ct(t, { starts: t.starts ? ct(t.starts) : null })
        : Object.isFrozen(t)
          ? ct(t)
          : t
  )
}
var Ea = '11.10.0'
class Oa extends Error {
  constructor(e, i) {
    super(e), (this.name = 'HTMLInjectionError'), (this.html = i)
  }
}
const ye = Xn,
  On = ct,
  An = Symbol('nomatch'),
  Aa = 7,
  si = function (t) {
    const e = Object.create(null),
      i = Object.create(null),
      n = []
    let o = !0
    const l =
        "Could not find the language '{}', did you forget to load/include a language module?",
      u = { disableAutodetect: !0, name: 'Plain text', contains: [] }
    let a = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: 'hljs-',
      cssSelector: 'pre code',
      languages: null,
      __emitter: Bs,
    }
    function _(v) {
      return a.noHighlightRe.test(v)
    }
    function h(v) {
      let N = v.className + ' '
      N += v.parentNode ? v.parentNode.className : ''
      const I = a.languageDetectRe.exec(N)
      if (I) {
        const B = O(I[1])
        return (
          B ||
            (En(l.replace('{}', I[1])),
            En('Falling back to no-highlight mode for this block.', v)),
          B ? I[1] : 'no-highlight'
        )
      }
      return N.split(/\s+/).find((B) => _(B) || O(B))
    }
    function f(v, N, I) {
      let B = '',
        F = ''
      typeof N == 'object'
        ? ((B = v), (I = N.ignoreIllegals), (F = N.language))
        : (kt('10.7.0', 'highlight(lang, code, ...args) has been deprecated.'),
          kt(
            '10.7.0',
            `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`,
          ),
          (F = v),
          (B = N)),
        I === void 0 && (I = !0)
      const Z = { code: B, language: F }
      D('before:highlight', Z)
      const lt = Z.result ? Z.result : g(Z.language, Z.code, I)
      return (lt.code = Z.code), D('after:highlight', lt), lt
    }
    function g(v, N, I, B) {
      const F = Object.create(null)
      function Z(S, L) {
        return S.keywords[L]
      }
      function lt() {
        if (!P.keywords) {
          Q.addText(H)
          return
        }
        let S = 0
        P.keywordPatternRe.lastIndex = 0
        let L = P.keywordPatternRe.exec(H),
          U = ''
        for (; L; ) {
          U += H.substring(S, L.index)
          const G = nt.case_insensitive ? L[0].toLowerCase() : L[0],
            q = Z(P, G)
          if (q) {
            const [at, Ei] = q
            if (
              (Q.addText(U),
              (U = ''),
              (F[G] = (F[G] || 0) + 1),
              F[G] <= Aa && (Lt += Ei),
              at.startsWith('_'))
            )
              U += L[0]
            else {
              const Oi = nt.classNameAliases[at] || at
              et(L[0], Oi)
            }
          } else U += L[0]
          ;(S = P.keywordPatternRe.lastIndex), (L = P.keywordPatternRe.exec(H))
        }
        ;(U += H.substring(S)), Q.addText(U)
      }
      function St() {
        if (H === '') return
        let S = null
        if (typeof P.subLanguage == 'string') {
          if (!e[P.subLanguage]) {
            Q.addText(H)
            return
          }
          ;(S = g(P.subLanguage, H, !0, Fe[P.subLanguage])),
            (Fe[P.subLanguage] = S._top)
        } else S = T(H, P.subLanguage.length ? P.subLanguage : null)
        P.relevance > 0 && (Lt += S.relevance),
          Q.__addSublanguage(S._emitter, S.language)
      }
      function Y() {
        P.subLanguage != null ? St() : lt(), (H = '')
      }
      function et(S, L) {
        S !== '' && (Q.startScope(L), Q.addText(S), Q.endScope())
      }
      function Be(S, L) {
        let U = 1
        const G = L.length - 1
        for (; U <= G; ) {
          if (!S._emit[U]) {
            U++
            continue
          }
          const q = nt.classNameAliases[S[U]] || S[U],
            at = L[U]
          q ? et(at, q) : ((H = at), lt(), (H = '')), U++
        }
      }
      function Ue(S, L) {
        return (
          S.scope &&
            typeof S.scope == 'string' &&
            Q.openNode(nt.classNameAliases[S.scope] || S.scope),
          S.beginScope &&
            (S.beginScope._wrap
              ? (et(
                  H,
                  nt.classNameAliases[S.beginScope._wrap] || S.beginScope._wrap,
                ),
                (H = ''))
              : S.beginScope._multi && (Be(S.beginScope, L), (H = ''))),
          (P = Object.create(S, { parent: { value: P } })),
          P
        )
      }
      function ze(S, L, U) {
        let G = Fs(S.endRe, U)
        if (G) {
          if (S['on:end']) {
            const q = new kn(S)
            S['on:end'](L, q), q.isMatchIgnored && (G = !1)
          }
          if (G) {
            for (; S.endsParent && S.parent; ) S = S.parent
            return S
          }
        }
        if (S.endsWithParent) return ze(S.parent, L, U)
      }
      function yi(S) {
        return P.matcher.regexIndex === 0 ? ((H += S[0]), 1) : ((se = !0), 0)
      }
      function ki(S) {
        const L = S[0],
          U = S.rule,
          G = new kn(U),
          q = [U.__beforeBegin, U['on:begin']]
        for (const at of q) if (at && (at(S, G), G.isMatchIgnored)) return yi(L)
        return (
          U.skip
            ? (H += L)
            : (U.excludeBegin && (H += L),
              Y(),
              !U.returnBegin && !U.excludeBegin && (H = L)),
          Ue(U, S),
          U.returnBegin ? 0 : L.length
        )
      }
      function wi(S) {
        const L = S[0],
          U = N.substring(S.index),
          G = ze(P, S, U)
        if (!G) return An
        const q = P
        P.endScope && P.endScope._wrap
          ? (Y(), et(L, P.endScope._wrap))
          : P.endScope && P.endScope._multi
            ? (Y(), Be(P.endScope, S))
            : q.skip
              ? (H += L)
              : (q.returnEnd || q.excludeEnd || (H += L),
                Y(),
                q.excludeEnd && (H = L))
        do
          P.scope && Q.closeNode(),
            !P.skip && !P.subLanguage && (Lt += P.relevance),
            (P = P.parent)
        while (P !== G.parent)
        return G.starts && Ue(G.starts, S), q.returnEnd ? 0 : L.length
      }
      function vi() {
        const S = []
        for (let L = P; L !== nt; L = L.parent) L.scope && S.unshift(L.scope)
        S.forEach((L) => Q.openNode(L))
      }
      let Ct = {}
      function $e(S, L) {
        const U = L && L[0]
        if (((H += S), U == null)) return Y(), 0
        if (
          Ct.type === 'begin' &&
          L.type === 'end' &&
          Ct.index === L.index &&
          U === ''
        ) {
          if (((H += N.slice(L.index, L.index + 1)), !o)) {
            const G = new Error(`0 width match regex (${v})`)
            throw ((G.languageName = v), (G.badRule = Ct.rule), G)
          }
          return 1
        }
        if (((Ct = L), L.type === 'begin')) return ki(L)
        if (L.type === 'illegal' && !I) {
          const G = new Error(
            'Illegal lexeme "' +
              U +
              '" for mode "' +
              (P.scope || '<unnamed>') +
              '"',
          )
          throw ((G.mode = P), G)
        } else if (L.type === 'end') {
          const G = wi(L)
          if (G !== An) return G
        }
        if (L.type === 'illegal' && U === '') return 1
        if (ie > 1e5 && ie > L.index * 3)
          throw new Error(
            'potential infinite loop, way more iterations than matches',
          )
        return (H += U), U.length
      }
      const nt = O(v)
      if (!nt)
        throw (
          (mt(l.replace('{}', v)), new Error('Unknown language: "' + v + '"'))
        )
      const xi = va(nt)
      let ne = '',
        P = B || xi
      const Fe = {},
        Q = new a.__emitter(a)
      vi()
      let H = '',
        Lt = 0,
        ht = 0,
        ie = 0,
        se = !1
      try {
        if (nt.__emitTokens) nt.__emitTokens(N, Q)
        else {
          for (P.matcher.considerAll(); ; ) {
            ie++,
              se ? (se = !1) : P.matcher.considerAll(),
              (P.matcher.lastIndex = ht)
            const S = P.matcher.exec(N)
            if (!S) break
            const L = N.substring(ht, S.index),
              U = $e(L, S)
            ht = S.index + U
          }
          $e(N.substring(ht))
        }
        return (
          Q.finalize(),
          (ne = Q.toHTML()),
          {
            language: v,
            value: ne,
            relevance: Lt,
            illegal: !1,
            _emitter: Q,
            _top: P,
          }
        )
      } catch (S) {
        if (S.message && S.message.includes('Illegal'))
          return {
            language: v,
            value: ye(N),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: S.message,
              index: ht,
              context: N.slice(ht - 100, ht + 100),
              mode: S.mode,
              resultSoFar: ne,
            },
            _emitter: Q,
          }
        if (o)
          return {
            language: v,
            value: ye(N),
            illegal: !1,
            relevance: 0,
            errorRaised: S,
            _emitter: Q,
            _top: P,
          }
        throw S
      }
    }
    function y(v) {
      const N = {
        value: ye(v),
        illegal: !1,
        relevance: 0,
        _top: u,
        _emitter: new a.__emitter(a),
      }
      return N._emitter.addText(v), N
    }
    function T(v, N) {
      N = N || a.languages || Object.keys(e)
      const I = y(v),
        B = N.filter(O)
          .filter(w)
          .map((Y) => g(Y, v, !1))
      B.unshift(I)
      const F = B.sort((Y, et) => {
          if (Y.relevance !== et.relevance) return et.relevance - Y.relevance
          if (Y.language && et.language) {
            if (O(Y.language).supersetOf === et.language) return 1
            if (O(et.language).supersetOf === Y.language) return -1
          }
          return 0
        }),
        [Z, lt] = F,
        St = Z
      return (St.secondBest = lt), St
    }
    function j(v, N, I) {
      const B = (N && i[N]) || I
      v.classList.add('hljs'), v.classList.add(`language-${B}`)
    }
    function M(v) {
      let N = null
      const I = h(v)
      if (_(I)) return
      if (
        (D('before:highlightElement', { el: v, language: I }),
        v.dataset.highlighted)
      ) {
        console.log(
          'Element previously highlighted. To highlight again, first unset `dataset.highlighted`.',
          v,
        )
        return
      }
      if (
        v.children.length > 0 &&
        (a.ignoreUnescapedHTML ||
          (console.warn(
            'One of your code blocks includes unescaped HTML. This is a potentially serious security risk.',
          ),
          console.warn(
            'https://github.com/highlightjs/highlight.js/wiki/security',
          ),
          console.warn('The element with unescaped HTML:'),
          console.warn(v)),
        a.throwUnescapedHTML)
      )
        throw new Oa(
          'One of your code blocks includes unescaped HTML.',
          v.innerHTML,
        )
      N = v
      const B = N.textContent,
        F = I ? f(B, { language: I, ignoreIllegals: !0 }) : T(B)
      ;(v.innerHTML = F.value),
        (v.dataset.highlighted = 'yes'),
        j(v, I, F.language),
        (v.result = {
          language: F.language,
          re: F.relevance,
          relevance: F.relevance,
        }),
        F.secondBest &&
          (v.secondBest = {
            language: F.secondBest.language,
            relevance: F.secondBest.relevance,
          }),
        D('after:highlightElement', { el: v, result: F, text: B })
    }
    function d(v) {
      a = On(a, v)
    }
    const r = () => {
      x(),
        kt('10.6.0', 'initHighlighting() deprecated.  Use highlightAll() now.')
    }
    function m() {
      x(),
        kt(
          '10.6.0',
          'initHighlightingOnLoad() deprecated.  Use highlightAll() now.',
        )
    }
    let R = !1
    function x() {
      if (document.readyState === 'loading') {
        R = !0
        return
      }
      document.querySelectorAll(a.cssSelector).forEach(M)
    }
    function A() {
      R && x()
    }
    typeof window < 'u' &&
      window.addEventListener &&
      window.addEventListener('DOMContentLoaded', A, !1)
    function c(v, N) {
      let I = null
      try {
        I = N(t)
      } catch (B) {
        if (
          (mt(
            "Language definition for '{}' could not be registered.".replace(
              '{}',
              v,
            ),
          ),
          o)
        )
          mt(B)
        else throw B
        I = u
      }
      I.name || (I.name = v),
        (e[v] = I),
        (I.rawDefinition = N.bind(null, t)),
        I.aliases && s(I.aliases, { languageName: v })
    }
    function b(v) {
      delete e[v]
      for (const N of Object.keys(i)) i[N] === v && delete i[N]
    }
    function p() {
      return Object.keys(e)
    }
    function O(v) {
      return (v = (v || '').toLowerCase()), e[v] || e[i[v]]
    }
    function s(v, { languageName: N }) {
      typeof v == 'string' && (v = [v]),
        v.forEach((I) => {
          i[I.toLowerCase()] = N
        })
    }
    function w(v) {
      const N = O(v)
      return N && !N.disableAutodetect
    }
    function k(v) {
      v['before:highlightBlock'] &&
        !v['before:highlightElement'] &&
        (v['before:highlightElement'] = (N) => {
          v['before:highlightBlock'](Object.assign({ block: N.el }, N))
        }),
        v['after:highlightBlock'] &&
          !v['after:highlightElement'] &&
          (v['after:highlightElement'] = (N) => {
            v['after:highlightBlock'](Object.assign({ block: N.el }, N))
          })
    }
    function E(v) {
      k(v), n.push(v)
    }
    function C(v) {
      const N = n.indexOf(v)
      N !== -1 && n.splice(N, 1)
    }
    function D(v, N) {
      const I = v
      n.forEach(function (B) {
        B[I] && B[I](N)
      })
    }
    function K(v) {
      return (
        kt('10.7.0', 'highlightBlock will be removed entirely in v12.0'),
        kt('10.7.0', 'Please use highlightElement now.'),
        M(v)
      )
    }
    Object.assign(t, {
      highlight: f,
      highlightAuto: T,
      highlightAll: x,
      highlightElement: M,
      highlightBlock: K,
      configure: d,
      initHighlighting: r,
      initHighlightingOnLoad: m,
      registerLanguage: c,
      unregisterLanguage: b,
      listLanguages: p,
      getLanguage: O,
      registerAliases: s,
      autoDetection: w,
      inherit: On,
      addPlugin: E,
      removePlugin: C,
    }),
      (t.debugMode = function () {
        o = !1
      }),
      (t.safeMode = function () {
        o = !0
      }),
      (t.versionString = Ea),
      (t.regex = {
        concat: bt,
        lookahead: Zn,
        either: Re,
        optional: zs,
        anyNumberOfTimes: Us,
      })
    for (const v in zt) typeof zt[v] == 'object' && Vn(zt[v])
    return Object.assign(t, zt), t
  },
  wt = si({})
wt.newInstance = () => si({})
var Ta = wt
wt.HighlightJS = wt
wt.default = wt
const Nt = Ta,
  Vt = '[A-Za-z$_][0-9A-Za-z$_]*',
  ai = [
    'as',
    'in',
    'of',
    'if',
    'for',
    'while',
    'finally',
    'var',
    'new',
    'function',
    'do',
    'return',
    'void',
    'else',
    'break',
    'catch',
    'instanceof',
    'with',
    'throw',
    'case',
    'default',
    'try',
    'switch',
    'continue',
    'typeof',
    'delete',
    'let',
    'yield',
    'const',
    'class',
    'debugger',
    'async',
    'await',
    'static',
    'import',
    'from',
    'export',
    'extends',
  ],
  ri = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
  oi = [
    'Object',
    'Function',
    'Boolean',
    'Symbol',
    'Math',
    'Date',
    'Number',
    'BigInt',
    'String',
    'RegExp',
    'Array',
    'Float32Array',
    'Float64Array',
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Int32Array',
    'Uint16Array',
    'Uint32Array',
    'BigInt64Array',
    'BigUint64Array',
    'Set',
    'Map',
    'WeakSet',
    'WeakMap',
    'ArrayBuffer',
    'SharedArrayBuffer',
    'Atomics',
    'DataView',
    'JSON',
    'Promise',
    'Generator',
    'GeneratorFunction',
    'AsyncFunction',
    'Reflect',
    'Proxy',
    'Intl',
    'WebAssembly',
  ],
  _i = [
    'Error',
    'EvalError',
    'InternalError',
    'RangeError',
    'ReferenceError',
    'SyntaxError',
    'TypeError',
    'URIError',
  ],
  li = [
    'setInterval',
    'setTimeout',
    'clearInterval',
    'clearTimeout',
    'require',
    'exports',
    'eval',
    'isFinite',
    'isNaN',
    'parseFloat',
    'parseInt',
    'decodeURI',
    'decodeURIComponent',
    'encodeURI',
    'encodeURIComponent',
    'escape',
    'unescape',
  ],
  ui = [
    'arguments',
    'this',
    'super',
    'console',
    'window',
    'document',
    'localStorage',
    'sessionStorage',
    'module',
    'global',
  ],
  ci = [].concat(li, oi, _i)
function Ra(t) {
  const e = t.regex,
    i = (v, { after: N }) => {
      const I = '</' + v[0].slice(1)
      return v.input.indexOf(I, N) !== -1
    },
    n = Vt,
    o = { begin: '<>', end: '</>' },
    l = /<[A-Za-z0-9\\._:-]+\s*\/>/,
    u = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (v, N) => {
        const I = v[0].length + v.index,
          B = v.input[I]
        if (B === '<' || B === ',') {
          N.ignoreMatch()
          return
        }
        B === '>' && (i(v, { after: I }) || N.ignoreMatch())
        let F
        const Z = v.input.substring(I)
        if ((F = Z.match(/^\s*=/))) {
          N.ignoreMatch()
          return
        }
        if ((F = Z.match(/^\s+extends\s+/)) && F.index === 0) {
          N.ignoreMatch()
          return
        }
      },
    },
    a = {
      $pattern: Vt,
      keyword: ai,
      literal: ri,
      built_in: ci,
      'variable.language': ui,
    },
    _ = '[0-9](_?[0-9])*',
    h = `\\.(${_})`,
    f = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
    g = {
      className: 'number',
      variants: [
        { begin: `(\\b(${f})((${h})|\\.)?|(${h}))[eE][+-]?(${_})\\b` },
        { begin: `\\b(${f})\\b((${h})\\b|\\.)?|(${h})\\b` },
        { begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
        { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
        { begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
        { begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
        { begin: '\\b0[0-7]+n?\\b' },
      ],
      relevance: 0,
    },
    y = {
      className: 'subst',
      begin: '\\$\\{',
      end: '\\}',
      keywords: a,
      contains: [],
    },
    T = {
      begin: '.?html`',
      end: '',
      starts: {
        end: '`',
        returnEnd: !1,
        contains: [t.BACKSLASH_ESCAPE, y],
        subLanguage: 'xml',
      },
    },
    j = {
      begin: '.?css`',
      end: '',
      starts: {
        end: '`',
        returnEnd: !1,
        contains: [t.BACKSLASH_ESCAPE, y],
        subLanguage: 'css',
      },
    },
    M = {
      begin: '.?gql`',
      end: '',
      starts: {
        end: '`',
        returnEnd: !1,
        contains: [t.BACKSLASH_ESCAPE, y],
        subLanguage: 'graphql',
      },
    },
    d = {
      className: 'string',
      begin: '`',
      end: '`',
      contains: [t.BACKSLASH_ESCAPE, y],
    },
    r = {
      className: 'comment',
      variants: [
        t.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
          relevance: 0,
          contains: [
            {
              begin: '(?=@[A-Za-z]+)',
              relevance: 0,
              contains: [
                { className: 'doctag', begin: '@[A-Za-z]+' },
                {
                  className: 'type',
                  begin: '\\{',
                  end: '\\}',
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0,
                },
                {
                  className: 'variable',
                  begin: n + '(?=\\s*(-)|$)',
                  endsParent: !0,
                  relevance: 0,
                },
                { begin: /(?=[^\n])\s/, relevance: 0 },
              ],
            },
          ],
        }),
        t.C_BLOCK_COMMENT_MODE,
        t.C_LINE_COMMENT_MODE,
      ],
    },
    m = [
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE,
      T,
      j,
      M,
      d,
      { match: /\$\d+/ },
      g,
    ]
  y.contains = m.concat({
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: ['self'].concat(m),
  })
  const R = [].concat(r, y.contains),
    x = R.concat([
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: a,
        contains: ['self'].concat(R),
      },
    ]),
    A = {
      className: 'params',
      begin: /(\s*)\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: a,
      contains: x,
    },
    c = {
      variants: [
        {
          match: [
            /class/,
            /\s+/,
            n,
            /\s+/,
            /extends/,
            /\s+/,
            e.concat(n, '(', e.concat(/\./, n), ')*'),
          ],
          scope: {
            1: 'keyword',
            3: 'title.class',
            5: 'keyword',
            7: 'title.class.inherited',
          },
        },
        {
          match: [/class/, /\s+/, n],
          scope: { 1: 'keyword', 3: 'title.class' },
        },
      ],
    },
    b = {
      relevance: 0,
      match: e.either(
        /\bJSON/,
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      ),
      className: 'title.class',
      keywords: { _: [...oi, ..._i] },
    },
    p = {
      label: 'use_strict',
      className: 'meta',
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/,
    },
    O = {
      variants: [
        { match: [/function/, /\s+/, n, /(?=\s*\()/] },
        { match: [/function/, /\s*(?=\()/] },
      ],
      className: { 1: 'keyword', 3: 'title.function' },
      label: 'func.def',
      contains: [A],
      illegal: /%/,
    },
    s = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: 'variable.constant',
    }
  function w(v) {
    return e.concat('(?!', v.join('|'), ')')
  }
  const k = {
      match: e.concat(
        /\b/,
        w([...li, 'super', 'import'].map((v) => `${v}\\s*\\(`)),
        n,
        e.lookahead(/\s*\(/),
      ),
      className: 'title.function',
      relevance: 0,
    },
    E = {
      begin: e.concat(/\./, e.lookahead(e.concat(n, /(?![0-9A-Za-z$_(])/))),
      end: n,
      excludeBegin: !0,
      keywords: 'prototype',
      className: 'property',
      relevance: 0,
    },
    C = {
      match: [/get|set/, /\s+/, n, /(?=\()/],
      className: { 1: 'keyword', 3: 'title.function' },
      contains: [{ begin: /\(\)/ }, A],
    },
    D =
      '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' +
      t.UNDERSCORE_IDENT_RE +
      ')\\s*=>',
    K = {
      match: [
        /const|var|let/,
        /\s+/,
        n,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        e.lookahead(D),
      ],
      keywords: 'async',
      className: { 1: 'keyword', 3: 'title.function' },
      contains: [A],
    }
  return {
    name: 'JavaScript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: a,
    exports: { PARAMS_CONTAINS: x, CLASS_REFERENCE: b },
    illegal: /#(?![$_A-z])/,
    contains: [
      t.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
      p,
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE,
      T,
      j,
      M,
      d,
      r,
      { match: /\$\d+/ },
      g,
      b,
      { className: 'attr', begin: n + e.lookahead(':'), relevance: 0 },
      K,
      {
        begin: '(' + t.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        relevance: 0,
        contains: [
          r,
          t.REGEXP_MODE,
          {
            className: 'function',
            begin: D,
            returnBegin: !0,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  { begin: t.UNDERSCORE_IDENT_RE, relevance: 0 },
                  { className: null, begin: /\(\s*\)/, skip: !0 },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: x,
                  },
                ],
              },
            ],
          },
          { begin: /,/, relevance: 0 },
          { match: /\s+/, relevance: 0 },
          {
            variants: [
              { begin: o.begin, end: o.end },
              { match: l },
              { begin: u.begin, 'on:begin': u.isTrulyOpeningTag, end: u.end },
            ],
            subLanguage: 'xml',
            contains: [
              { begin: u.begin, end: u.end, skip: !0, contains: ['self'] },
            ],
          },
        ],
      },
      O,
      { beginKeywords: 'while if switch catch for' },
      {
        begin:
          '\\b(?!function)' +
          t.UNDERSCORE_IDENT_RE +
          '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
        returnBegin: !0,
        label: 'func.def',
        contains: [
          A,
          t.inherit(t.TITLE_MODE, { begin: n, className: 'title.function' }),
        ],
      },
      { match: /\.\.\./, relevance: 0 },
      E,
      { match: '\\$' + n, relevance: 0 },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: 'title.function' },
        contains: [A],
      },
      k,
      s,
      c,
      C,
      { match: /\$[(.]/ },
    ],
  }
}
function Na(t) {
  const e = Ra(t),
    i = Vt,
    n = [
      'any',
      'void',
      'number',
      'boolean',
      'string',
      'object',
      'never',
      'symbol',
      'bigint',
      'unknown',
    ],
    o = {
      begin: [/namespace/, /\s+/, t.IDENT_RE],
      beginScope: { 1: 'keyword', 3: 'title.class' },
    },
    l = {
      beginKeywords: 'interface',
      end: /\{/,
      excludeEnd: !0,
      keywords: { keyword: 'interface extends', built_in: n },
      contains: [e.exports.CLASS_REFERENCE],
    },
    u = { className: 'meta', relevance: 10, begin: /^\s*['"]use strict['"]/ },
    a = [
      'type',
      'interface',
      'public',
      'private',
      'protected',
      'implements',
      'declare',
      'abstract',
      'readonly',
      'enum',
      'override',
      'satisfies',
    ],
    _ = {
      $pattern: Vt,
      keyword: ai.concat(a),
      literal: ri,
      built_in: ci.concat(n),
      'variable.language': ui,
    },
    h = { className: 'meta', begin: '@' + i },
    f = (T, j, M) => {
      const d = T.contains.findIndex((r) => r.label === j)
      if (d === -1) throw new Error('can not find mode to replace')
      T.contains.splice(d, 1, M)
    }
  Object.assign(e.keywords, _), e.exports.PARAMS_CONTAINS.push(h)
  const g = e.contains.find((T) => T.className === 'attr')
  e.exports.PARAMS_CONTAINS.push([e.exports.CLASS_REFERENCE, g]),
    (e.contains = e.contains.concat([h, o, l])),
    f(e, 'shebang', t.SHEBANG()),
    f(e, 'use_strict', u)
  const y = e.contains.find((T) => T.label === 'func.def')
  return (
    (y.relevance = 0),
    Object.assign(e, {
      name: 'TypeScript',
      aliases: ['ts', 'tsx', 'mts', 'cts'],
    }),
    e
  )
}
const Tn = '[A-Za-z$_][0-9A-Za-z$_]*',
  Sa = [
    'as',
    'in',
    'of',
    'if',
    'for',
    'while',
    'finally',
    'var',
    'new',
    'function',
    'do',
    'return',
    'void',
    'else',
    'break',
    'catch',
    'instanceof',
    'with',
    'throw',
    'case',
    'default',
    'try',
    'switch',
    'continue',
    'typeof',
    'delete',
    'let',
    'yield',
    'const',
    'class',
    'debugger',
    'async',
    'await',
    'static',
    'import',
    'from',
    'export',
    'extends',
  ],
  Ca = ['true', 'false', 'null', 'undefined', 'NaN', 'Infinity'],
  pi = [
    'Object',
    'Function',
    'Boolean',
    'Symbol',
    'Math',
    'Date',
    'Number',
    'BigInt',
    'String',
    'RegExp',
    'Array',
    'Float32Array',
    'Float64Array',
    'Int8Array',
    'Uint8Array',
    'Uint8ClampedArray',
    'Int16Array',
    'Int32Array',
    'Uint16Array',
    'Uint32Array',
    'BigInt64Array',
    'BigUint64Array',
    'Set',
    'Map',
    'WeakSet',
    'WeakMap',
    'ArrayBuffer',
    'SharedArrayBuffer',
    'Atomics',
    'DataView',
    'JSON',
    'Promise',
    'Generator',
    'GeneratorFunction',
    'AsyncFunction',
    'Reflect',
    'Proxy',
    'Intl',
    'WebAssembly',
  ],
  hi = [
    'Error',
    'EvalError',
    'InternalError',
    'RangeError',
    'ReferenceError',
    'SyntaxError',
    'TypeError',
    'URIError',
  ],
  di = [
    'setInterval',
    'setTimeout',
    'clearInterval',
    'clearTimeout',
    'require',
    'exports',
    'eval',
    'isFinite',
    'isNaN',
    'parseFloat',
    'parseInt',
    'decodeURI',
    'decodeURIComponent',
    'encodeURI',
    'encodeURIComponent',
    'escape',
    'unescape',
  ],
  La = [
    'arguments',
    'this',
    'super',
    'console',
    'window',
    'document',
    'localStorage',
    'sessionStorage',
    'module',
    'global',
  ],
  ja = [].concat(di, pi, hi)
function Ma(t) {
  const e = t.regex,
    i = (v, { after: N }) => {
      const I = '</' + v[0].slice(1)
      return v.input.indexOf(I, N) !== -1
    },
    n = Tn,
    o = { begin: '<>', end: '</>' },
    l = /<[A-Za-z0-9\\._:-]+\s*\/>/,
    u = {
      begin: /<[A-Za-z0-9\\._:-]+/,
      end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
      isTrulyOpeningTag: (v, N) => {
        const I = v[0].length + v.index,
          B = v.input[I]
        if (B === '<' || B === ',') {
          N.ignoreMatch()
          return
        }
        B === '>' && (i(v, { after: I }) || N.ignoreMatch())
        let F
        const Z = v.input.substring(I)
        if ((F = Z.match(/^\s*=/))) {
          N.ignoreMatch()
          return
        }
        if ((F = Z.match(/^\s+extends\s+/)) && F.index === 0) {
          N.ignoreMatch()
          return
        }
      },
    },
    a = {
      $pattern: Tn,
      keyword: Sa,
      literal: Ca,
      built_in: ja,
      'variable.language': La,
    },
    _ = '[0-9](_?[0-9])*',
    h = `\\.(${_})`,
    f = '0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*',
    g = {
      className: 'number',
      variants: [
        { begin: `(\\b(${f})((${h})|\\.)?|(${h}))[eE][+-]?(${_})\\b` },
        { begin: `\\b(${f})\\b((${h})\\b|\\.)?|(${h})\\b` },
        { begin: '\\b(0|[1-9](_?[0-9])*)n\\b' },
        { begin: '\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b' },
        { begin: '\\b0[bB][0-1](_?[0-1])*n?\\b' },
        { begin: '\\b0[oO][0-7](_?[0-7])*n?\\b' },
        { begin: '\\b0[0-7]+n?\\b' },
      ],
      relevance: 0,
    },
    y = {
      className: 'subst',
      begin: '\\$\\{',
      end: '\\}',
      keywords: a,
      contains: [],
    },
    T = {
      begin: '.?html`',
      end: '',
      starts: {
        end: '`',
        returnEnd: !1,
        contains: [t.BACKSLASH_ESCAPE, y],
        subLanguage: 'xml',
      },
    },
    j = {
      begin: '.?css`',
      end: '',
      starts: {
        end: '`',
        returnEnd: !1,
        contains: [t.BACKSLASH_ESCAPE, y],
        subLanguage: 'css',
      },
    },
    M = {
      begin: '.?gql`',
      end: '',
      starts: {
        end: '`',
        returnEnd: !1,
        contains: [t.BACKSLASH_ESCAPE, y],
        subLanguage: 'graphql',
      },
    },
    d = {
      className: 'string',
      begin: '`',
      end: '`',
      contains: [t.BACKSLASH_ESCAPE, y],
    },
    r = {
      className: 'comment',
      variants: [
        t.COMMENT(/\/\*\*(?!\/)/, '\\*/', {
          relevance: 0,
          contains: [
            {
              begin: '(?=@[A-Za-z]+)',
              relevance: 0,
              contains: [
                { className: 'doctag', begin: '@[A-Za-z]+' },
                {
                  className: 'type',
                  begin: '\\{',
                  end: '\\}',
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0,
                },
                {
                  className: 'variable',
                  begin: n + '(?=\\s*(-)|$)',
                  endsParent: !0,
                  relevance: 0,
                },
                { begin: /(?=[^\n])\s/, relevance: 0 },
              ],
            },
          ],
        }),
        t.C_BLOCK_COMMENT_MODE,
        t.C_LINE_COMMENT_MODE,
      ],
    },
    m = [
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE,
      T,
      j,
      M,
      d,
      { match: /\$\d+/ },
      g,
    ]
  y.contains = m.concat({
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: ['self'].concat(m),
  })
  const R = [].concat(r, y.contains),
    x = R.concat([
      {
        begin: /(\s*)\(/,
        end: /\)/,
        keywords: a,
        contains: ['self'].concat(R),
      },
    ]),
    A = {
      className: 'params',
      begin: /(\s*)\(/,
      end: /\)/,
      excludeBegin: !0,
      excludeEnd: !0,
      keywords: a,
      contains: x,
    },
    c = {
      variants: [
        {
          match: [
            /class/,
            /\s+/,
            n,
            /\s+/,
            /extends/,
            /\s+/,
            e.concat(n, '(', e.concat(/\./, n), ')*'),
          ],
          scope: {
            1: 'keyword',
            3: 'title.class',
            5: 'keyword',
            7: 'title.class.inherited',
          },
        },
        {
          match: [/class/, /\s+/, n],
          scope: { 1: 'keyword', 3: 'title.class' },
        },
      ],
    },
    b = {
      relevance: 0,
      match: e.either(
        /\bJSON/,
        /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
        /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
        /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/,
      ),
      className: 'title.class',
      keywords: { _: [...pi, ...hi] },
    },
    p = {
      label: 'use_strict',
      className: 'meta',
      relevance: 10,
      begin: /^\s*['"]use (strict|asm)['"]/,
    },
    O = {
      variants: [
        { match: [/function/, /\s+/, n, /(?=\s*\()/] },
        { match: [/function/, /\s*(?=\()/] },
      ],
      className: { 1: 'keyword', 3: 'title.function' },
      label: 'func.def',
      contains: [A],
      illegal: /%/,
    },
    s = {
      relevance: 0,
      match: /\b[A-Z][A-Z_0-9]+\b/,
      className: 'variable.constant',
    }
  function w(v) {
    return e.concat('(?!', v.join('|'), ')')
  }
  const k = {
      match: e.concat(
        /\b/,
        w([...di, 'super', 'import'].map((v) => `${v}\\s*\\(`)),
        n,
        e.lookahead(/\s*\(/),
      ),
      className: 'title.function',
      relevance: 0,
    },
    E = {
      begin: e.concat(/\./, e.lookahead(e.concat(n, /(?![0-9A-Za-z$_(])/))),
      end: n,
      excludeBegin: !0,
      keywords: 'prototype',
      className: 'property',
      relevance: 0,
    },
    C = {
      match: [/get|set/, /\s+/, n, /(?=\()/],
      className: { 1: 'keyword', 3: 'title.function' },
      contains: [{ begin: /\(\)/ }, A],
    },
    D =
      '(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|' +
      t.UNDERSCORE_IDENT_RE +
      ')\\s*=>',
    K = {
      match: [
        /const|var|let/,
        /\s+/,
        n,
        /\s*/,
        /=\s*/,
        /(async\s*)?/,
        e.lookahead(D),
      ],
      keywords: 'async',
      className: { 1: 'keyword', 3: 'title.function' },
      contains: [A],
    }
  return {
    name: 'JavaScript',
    aliases: ['js', 'jsx', 'mjs', 'cjs'],
    keywords: a,
    exports: { PARAMS_CONTAINS: x, CLASS_REFERENCE: b },
    illegal: /#(?![$_A-z])/,
    contains: [
      t.SHEBANG({ label: 'shebang', binary: 'node', relevance: 5 }),
      p,
      t.APOS_STRING_MODE,
      t.QUOTE_STRING_MODE,
      T,
      j,
      M,
      d,
      r,
      { match: /\$\d+/ },
      g,
      b,
      { className: 'attr', begin: n + e.lookahead(':'), relevance: 0 },
      K,
      {
        begin: '(' + t.RE_STARTERS_RE + '|\\b(case|return|throw)\\b)\\s*',
        keywords: 'return throw case',
        relevance: 0,
        contains: [
          r,
          t.REGEXP_MODE,
          {
            className: 'function',
            begin: D,
            returnBegin: !0,
            end: '\\s*=>',
            contains: [
              {
                className: 'params',
                variants: [
                  { begin: t.UNDERSCORE_IDENT_RE, relevance: 0 },
                  { className: null, begin: /\(\s*\)/, skip: !0 },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: x,
                  },
                ],
              },
            ],
          },
          { begin: /,/, relevance: 0 },
          { match: /\s+/, relevance: 0 },
          {
            variants: [
              { begin: o.begin, end: o.end },
              { match: l },
              { begin: u.begin, 'on:begin': u.isTrulyOpeningTag, end: u.end },
            ],
            subLanguage: 'xml',
            contains: [
              { begin: u.begin, end: u.end, skip: !0, contains: ['self'] },
            ],
          },
        ],
      },
      O,
      { beginKeywords: 'while if switch catch for' },
      {
        begin:
          '\\b(?!function)' +
          t.UNDERSCORE_IDENT_RE +
          '\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{',
        returnBegin: !0,
        label: 'func.def',
        contains: [
          A,
          t.inherit(t.TITLE_MODE, { begin: n, className: 'title.function' }),
        ],
      },
      { match: /\.\.\./, relevance: 0 },
      E,
      { match: '\\$' + n, relevance: 0 },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: 'title.function' },
        contains: [A],
      },
      k,
      s,
      c,
      C,
      { match: /\$[(.]/ },
    ],
  }
}
const Ia = (t) => ({
    IMPORTANT: { scope: 'meta', begin: '!important' },
    BLOCK_COMMENT: t.C_BLOCK_COMMENT_MODE,
    HEXCOLOR: {
      scope: 'number',
      begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/,
    },
    FUNCTION_DISPATCH: { className: 'built_in', begin: /[\w-]+(?=\()/ },
    ATTRIBUTE_SELECTOR_MODE: {
      scope: 'selector-attr',
      begin: /\[/,
      end: /\]/,
      illegal: '$',
      contains: [t.APOS_STRING_MODE, t.QUOTE_STRING_MODE],
    },
    CSS_NUMBER_MODE: {
      scope: 'number',
      begin:
        t.NUMBER_RE +
        '(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?',
      relevance: 0,
    },
    CSS_VARIABLE: { className: 'attr', begin: /--[A-Za-z_][A-Za-z0-9_-]*/ },
  }),
  Da = [
    'a',
    'abbr',
    'address',
    'article',
    'aside',
    'audio',
    'b',
    'blockquote',
    'body',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'dd',
    'del',
    'details',
    'dfn',
    'div',
    'dl',
    'dt',
    'em',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'header',
    'hgroup',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'main',
    'mark',
    'menu',
    'nav',
    'object',
    'ol',
    'optgroup',
    'option',
    'p',
    'picture',
    'q',
    'quote',
    'samp',
    'section',
    'select',
    'source',
    'span',
    'strong',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'tr',
    'ul',
    'var',
    'video',
  ],
  Pa = [
    'defs',
    'g',
    'marker',
    'mask',
    'pattern',
    'svg',
    'switch',
    'symbol',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feFlood',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMorphology',
    'feOffset',
    'feSpecularLighting',
    'feTile',
    'feTurbulence',
    'linearGradient',
    'radialGradient',
    'stop',
    'circle',
    'ellipse',
    'image',
    'line',
    'path',
    'polygon',
    'polyline',
    'rect',
    'text',
    'use',
    'textPath',
    'tspan',
    'foreignObject',
    'clipPath',
  ],
  Ba = [...Da, ...Pa],
  Ua = [
    'any-hover',
    'any-pointer',
    'aspect-ratio',
    'color',
    'color-gamut',
    'color-index',
    'device-aspect-ratio',
    'device-height',
    'device-width',
    'display-mode',
    'forced-colors',
    'grid',
    'height',
    'hover',
    'inverted-colors',
    'monochrome',
    'orientation',
    'overflow-block',
    'overflow-inline',
    'pointer',
    'prefers-color-scheme',
    'prefers-contrast',
    'prefers-reduced-motion',
    'prefers-reduced-transparency',
    'resolution',
    'scan',
    'scripting',
    'update',
    'width',
    'min-width',
    'max-width',
    'min-height',
    'max-height',
  ]
    .sort()
    .reverse(),
  za = [
    'active',
    'any-link',
    'blank',
    'checked',
    'current',
    'default',
    'defined',
    'dir',
    'disabled',
    'drop',
    'empty',
    'enabled',
    'first',
    'first-child',
    'first-of-type',
    'fullscreen',
    'future',
    'focus',
    'focus-visible',
    'focus-within',
    'has',
    'host',
    'host-context',
    'hover',
    'indeterminate',
    'in-range',
    'invalid',
    'is',
    'lang',
    'last-child',
    'last-of-type',
    'left',
    'link',
    'local-link',
    'not',
    'nth-child',
    'nth-col',
    'nth-last-child',
    'nth-last-col',
    'nth-last-of-type',
    'nth-of-type',
    'only-child',
    'only-of-type',
    'optional',
    'out-of-range',
    'past',
    'placeholder-shown',
    'read-only',
    'read-write',
    'required',
    'right',
    'root',
    'scope',
    'target',
    'target-within',
    'user-invalid',
    'valid',
    'visited',
    'where',
  ]
    .sort()
    .reverse(),
  $a = [
    'after',
    'backdrop',
    'before',
    'cue',
    'cue-region',
    'first-letter',
    'first-line',
    'grammar-error',
    'marker',
    'part',
    'placeholder',
    'selection',
    'slotted',
    'spelling-error',
  ]
    .sort()
    .reverse(),
  Fa = [
    'accent-color',
    'align-content',
    'align-items',
    'align-self',
    'alignment-baseline',
    'all',
    'animation',
    'animation-delay',
    'animation-direction',
    'animation-duration',
    'animation-fill-mode',
    'animation-iteration-count',
    'animation-name',
    'animation-play-state',
    'animation-timing-function',
    'appearance',
    'backface-visibility',
    'background',
    'background-attachment',
    'background-blend-mode',
    'background-clip',
    'background-color',
    'background-image',
    'background-origin',
    'background-position',
    'background-repeat',
    'background-size',
    'baseline-shift',
    'block-size',
    'border',
    'border-block',
    'border-block-color',
    'border-block-end',
    'border-block-end-color',
    'border-block-end-style',
    'border-block-end-width',
    'border-block-start',
    'border-block-start-color',
    'border-block-start-style',
    'border-block-start-width',
    'border-block-style',
    'border-block-width',
    'border-bottom',
    'border-bottom-color',
    'border-bottom-left-radius',
    'border-bottom-right-radius',
    'border-bottom-style',
    'border-bottom-width',
    'border-collapse',
    'border-color',
    'border-image',
    'border-image-outset',
    'border-image-repeat',
    'border-image-slice',
    'border-image-source',
    'border-image-width',
    'border-inline',
    'border-inline-color',
    'border-inline-end',
    'border-inline-end-color',
    'border-inline-end-style',
    'border-inline-end-width',
    'border-inline-start',
    'border-inline-start-color',
    'border-inline-start-style',
    'border-inline-start-width',
    'border-inline-style',
    'border-inline-width',
    'border-left',
    'border-left-color',
    'border-left-style',
    'border-left-width',
    'border-radius',
    'border-right',
    'border-end-end-radius',
    'border-end-start-radius',
    'border-right-color',
    'border-right-style',
    'border-right-width',
    'border-spacing',
    'border-start-end-radius',
    'border-start-start-radius',
    'border-style',
    'border-top',
    'border-top-color',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-top-style',
    'border-top-width',
    'border-width',
    'bottom',
    'box-decoration-break',
    'box-shadow',
    'box-sizing',
    'break-after',
    'break-before',
    'break-inside',
    'cx',
    'cy',
    'caption-side',
    'caret-color',
    'clear',
    'clip',
    'clip-path',
    'clip-rule',
    'color',
    'color-interpolation',
    'color-interpolation-filters',
    'color-profile',
    'color-rendering',
    'color-scheme',
    'column-count',
    'column-fill',
    'column-gap',
    'column-rule',
    'column-rule-color',
    'column-rule-style',
    'column-rule-width',
    'column-span',
    'column-width',
    'columns',
    'contain',
    'content',
    'content-visibility',
    'counter-increment',
    'counter-reset',
    'cue',
    'cue-after',
    'cue-before',
    'cursor',
    'direction',
    'display',
    'dominant-baseline',
    'empty-cells',
    'enable-background',
    'fill',
    'fill-opacity',
    'fill-rule',
    'filter',
    'flex',
    'flex-basis',
    'flex-direction',
    'flex-flow',
    'flex-grow',
    'flex-shrink',
    'flex-wrap',
    'float',
    'flow',
    'flood-color',
    'flood-opacity',
    'font',
    'font-display',
    'font-family',
    'font-feature-settings',
    'font-kerning',
    'font-language-override',
    'font-size',
    'font-size-adjust',
    'font-smoothing',
    'font-stretch',
    'font-style',
    'font-synthesis',
    'font-variant',
    'font-variant-caps',
    'font-variant-east-asian',
    'font-variant-ligatures',
    'font-variant-numeric',
    'font-variant-position',
    'font-variation-settings',
    'font-weight',
    'gap',
    'glyph-orientation-horizontal',
    'glyph-orientation-vertical',
    'grid',
    'grid-area',
    'grid-auto-columns',
    'grid-auto-flow',
    'grid-auto-rows',
    'grid-column',
    'grid-column-end',
    'grid-column-start',
    'grid-gap',
    'grid-row',
    'grid-row-end',
    'grid-row-start',
    'grid-template',
    'grid-template-areas',
    'grid-template-columns',
    'grid-template-rows',
    'hanging-punctuation',
    'height',
    'hyphens',
    'icon',
    'image-orientation',
    'image-rendering',
    'image-resolution',
    'ime-mode',
    'inline-size',
    'inset',
    'inset-block',
    'inset-block-end',
    'inset-block-start',
    'inset-inline',
    'inset-inline-end',
    'inset-inline-start',
    'isolation',
    'kerning',
    'justify-content',
    'justify-items',
    'justify-self',
    'left',
    'letter-spacing',
    'lighting-color',
    'line-break',
    'line-height',
    'list-style',
    'list-style-image',
    'list-style-position',
    'list-style-type',
    'marker',
    'marker-end',
    'marker-mid',
    'marker-start',
    'mask',
    'margin',
    'margin-block',
    'margin-block-end',
    'margin-block-start',
    'margin-bottom',
    'margin-inline',
    'margin-inline-end',
    'margin-inline-start',
    'margin-left',
    'margin-right',
    'margin-top',
    'marks',
    'mask',
    'mask-border',
    'mask-border-mode',
    'mask-border-outset',
    'mask-border-repeat',
    'mask-border-slice',
    'mask-border-source',
    'mask-border-width',
    'mask-clip',
    'mask-composite',
    'mask-image',
    'mask-mode',
    'mask-origin',
    'mask-position',
    'mask-repeat',
    'mask-size',
    'mask-type',
    'max-block-size',
    'max-height',
    'max-inline-size',
    'max-width',
    'min-block-size',
    'min-height',
    'min-inline-size',
    'min-width',
    'mix-blend-mode',
    'nav-down',
    'nav-index',
    'nav-left',
    'nav-right',
    'nav-up',
    'none',
    'normal',
    'object-fit',
    'object-position',
    'opacity',
    'order',
    'orphans',
    'outline',
    'outline-color',
    'outline-offset',
    'outline-style',
    'outline-width',
    'overflow',
    'overflow-wrap',
    'overflow-x',
    'overflow-y',
    'padding',
    'padding-block',
    'padding-block-end',
    'padding-block-start',
    'padding-bottom',
    'padding-inline',
    'padding-inline-end',
    'padding-inline-start',
    'padding-left',
    'padding-right',
    'padding-top',
    'page-break-after',
    'page-break-before',
    'page-break-inside',
    'pause',
    'pause-after',
    'pause-before',
    'perspective',
    'perspective-origin',
    'pointer-events',
    'position',
    'quotes',
    'r',
    'resize',
    'rest',
    'rest-after',
    'rest-before',
    'right',
    'rotate',
    'row-gap',
    'scale',
    'scroll-margin',
    'scroll-margin-block',
    'scroll-margin-block-end',
    'scroll-margin-block-start',
    'scroll-margin-bottom',
    'scroll-margin-inline',
    'scroll-margin-inline-end',
    'scroll-margin-inline-start',
    'scroll-margin-left',
    'scroll-margin-right',
    'scroll-margin-top',
    'scroll-padding',
    'scroll-padding-block',
    'scroll-padding-block-end',
    'scroll-padding-block-start',
    'scroll-padding-bottom',
    'scroll-padding-inline',
    'scroll-padding-inline-end',
    'scroll-padding-inline-start',
    'scroll-padding-left',
    'scroll-padding-right',
    'scroll-padding-top',
    'scroll-snap-align',
    'scroll-snap-stop',
    'scroll-snap-type',
    'scrollbar-color',
    'scrollbar-gutter',
    'scrollbar-width',
    'shape-image-threshold',
    'shape-margin',
    'shape-outside',
    'shape-rendering',
    'stop-color',
    'stop-opacity',
    'stroke',
    'stroke-dasharray',
    'stroke-dashoffset',
    'stroke-linecap',
    'stroke-linejoin',
    'stroke-miterlimit',
    'stroke-opacity',
    'stroke-width',
    'speak',
    'speak-as',
    'src',
    'tab-size',
    'table-layout',
    'text-anchor',
    'text-align',
    'text-align-all',
    'text-align-last',
    'text-combine-upright',
    'text-decoration',
    'text-decoration-color',
    'text-decoration-line',
    'text-decoration-skip-ink',
    'text-decoration-style',
    'text-decoration-thickness',
    'text-emphasis',
    'text-emphasis-color',
    'text-emphasis-position',
    'text-emphasis-style',
    'text-indent',
    'text-justify',
    'text-orientation',
    'text-overflow',
    'text-rendering',
    'text-shadow',
    'text-transform',
    'text-underline-offset',
    'text-underline-position',
    'top',
    'transform',
    'transform-box',
    'transform-origin',
    'transform-style',
    'transition',
    'transition-delay',
    'transition-duration',
    'transition-property',
    'transition-timing-function',
    'translate',
    'unicode-bidi',
    'vector-effect',
    'vertical-align',
    'visibility',
    'voice-balance',
    'voice-duration',
    'voice-family',
    'voice-pitch',
    'voice-range',
    'voice-rate',
    'voice-stress',
    'voice-volume',
    'white-space',
    'widows',
    'width',
    'will-change',
    'word-break',
    'word-spacing',
    'word-wrap',
    'writing-mode',
    'x',
    'y',
    'z-index',
  ]
    .sort()
    .reverse()
function Wa(t) {
  const e = t.regex,
    i = Ia(t),
    n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ },
    o = 'and or not only',
    l = /@-?\w[\w]*(-\w+)*/,
    u = '[a-zA-Z-][a-zA-Z0-9_-]*',
    a = [t.APOS_STRING_MODE, t.QUOTE_STRING_MODE]
  return {
    name: 'CSS',
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: 'from to' },
    classNameAliases: { keyframePosition: 'selector-tag' },
    contains: [
      i.BLOCK_COMMENT,
      n,
      i.CSS_NUMBER_MODE,
      { className: 'selector-id', begin: /#[A-Za-z0-9_-]+/, relevance: 0 },
      { className: 'selector-class', begin: '\\.' + u, relevance: 0 },
      i.ATTRIBUTE_SELECTOR_MODE,
      {
        className: 'selector-pseudo',
        variants: [
          { begin: ':(' + za.join('|') + ')' },
          { begin: ':(:)?(' + $a.join('|') + ')' },
        ],
      },
      i.CSS_VARIABLE,
      { className: 'attribute', begin: '\\b(' + Fa.join('|') + ')\\b' },
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          i.BLOCK_COMMENT,
          i.HEXCOLOR,
          i.IMPORTANT,
          i.CSS_NUMBER_MODE,
          ...a,
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            keywords: { built_in: 'url data-uri' },
            contains: [
              ...a,
              {
                className: 'string',
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0,
              },
            ],
          },
          i.FUNCTION_DISPATCH,
        ],
      },
      {
        begin: e.lookahead(/@/),
        end: '[{;]',
        relevance: 0,
        illegal: /:/,
        contains: [
          { className: 'keyword', begin: l },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: o,
              attribute: Ua.join(' '),
            },
            contains: [
              { begin: /[a-z-]+(?=:)/, className: 'attribute' },
              ...a,
              i.CSS_NUMBER_MODE,
            ],
          },
        ],
      },
      { className: 'selector-tag', begin: '\\b(' + Ba.join('|') + ')\\b' },
    ],
  }
}
function Ka(t) {
  const e = t.regex,
    i = e.concat(
      /[\p{L}_]/u,
      e.optional(/[\p{L}0-9_.-]*:/u),
      /[\p{L}0-9_.-]*/u,
    ),
    n = /[\p{L}0-9._:-]+/u,
    o = { className: 'symbol', begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/ },
    l = {
      begin: /\s/,
      contains: [
        { className: 'keyword', begin: /#?[a-z_][a-z1-9_-]+/, illegal: /\n/ },
      ],
    },
    u = t.inherit(l, { begin: /\(/, end: /\)/ }),
    a = t.inherit(t.APOS_STRING_MODE, { className: 'string' }),
    _ = t.inherit(t.QUOTE_STRING_MODE, { className: 'string' }),
    h = {
      endsWithParent: !0,
      illegal: /</,
      relevance: 0,
      contains: [
        { className: 'attr', begin: n, relevance: 0 },
        {
          begin: /=\s*/,
          relevance: 0,
          contains: [
            {
              className: 'string',
              endsParent: !0,
              variants: [
                { begin: /"/, end: /"/, contains: [o] },
                { begin: /'/, end: /'/, contains: [o] },
                { begin: /[^\s"'=<>`]+/ },
              ],
            },
          ],
        },
      ],
    }
  return {
    name: 'HTML, XML',
    aliases: [
      'html',
      'xhtml',
      'rss',
      'atom',
      'xjb',
      'xsd',
      'xsl',
      'plist',
      'wsf',
      'svg',
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: 'meta',
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          l,
          _,
          a,
          u,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: 'meta',
                begin: /<![a-z]/,
                end: />/,
                contains: [l, u, _, a],
              },
            ],
          },
        ],
      },
      t.COMMENT(/<!--/, /-->/, { relevance: 10 }),
      { begin: /<!\[CDATA\[/, end: /\]\]>/, relevance: 10 },
      o,
      {
        className: 'meta',
        end: /\?>/,
        variants: [
          { begin: /<\?xml/, relevance: 10, contains: [_] },
          { begin: /<\?[a-z][a-z0-9]+/ },
        ],
      },
      {
        className: 'tag',
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: 'style' },
        contains: [h],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: ['css', 'xml'],
        },
      },
      {
        className: 'tag',
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: 'script' },
        contains: [h],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: ['javascript', 'handlebars', 'xml'],
        },
      },
      { className: 'tag', begin: /<>|<\/>/ },
      {
        className: 'tag',
        begin: e.concat(
          /</,
          e.lookahead(e.concat(i, e.either(/\/>/, />/, /\s/))),
        ),
        end: /\/?>/,
        contains: [{ className: 'name', begin: i, relevance: 0, starts: h }],
      },
      {
        className: 'tag',
        begin: e.concat(/<\//, e.lookahead(e.concat(i, />/))),
        contains: [
          { className: 'name', begin: i, relevance: 0 },
          { begin: />/, relevance: 0, endsParent: !0 },
        ],
      },
    ],
  }
}
Nt.registerLanguage('typescript', Na)
Nt.registerLanguage('javascript', Ma)
Nt.registerLanguage('xml', Ka)
Nt.registerLanguage('css', Wa)
const Rn = (t) => Nt.highlightAuto(t).value,
  $t = 'vitepress-demo-plugin',
  Ft = (t, e, i, n) => {
    let o = e === '' ? `${t}` : `${t}-${e}`
    return i && (o += `__${i}`), n && (o += `--${n}`), o
  },
  Ce = (t = '') => ({
    b: () => Ft($t, t),
    e: (e = '') => Ft($t, t, e),
    m: (e = '') => Ft($t, t, '', e),
    bem: (e, i, n) => Ft($t, e, i, n),
  }),
  Ga = ({ code: t, styles: e, links: i }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    ${e}
    ${i}
    <style>
      body {
        min-height: 0;
      }
    </style>
  </head>
  <body>
    ${t}
  </body>
</html>
  `,
  Ha = (t, e) => {
    const i = { dependencies: {}, devDependencies: { typescript: 'latest' } }
    return (
      t === $.VUE
        ? ((i.dependencies.vue = 'latest'),
          e === _t.STACKBLITZ
            ? ((i.devDependencies.vite = 'latest'),
              (i.devDependencies['@vitejs/plugin-vue'] = 'latest'),
              (i.devDependencies['@vitejs/plugin-vue-jsx'] = 'latest'))
            : e === _t.CODESANDBOX &&
              (i.devDependencies['@vue/cli-plugin-babel'] = 'latest'))
        : t === $.REACT &&
          ((i.dependencies.react = 'latest'),
          (i.dependencies['react-dom'] = 'latest'),
          (i.dependencies['@emotion/react'] = 'latest'),
          (i.dependencies['@emotion/styled'] = 'latest'),
          (i.devDependencies['@types/react'] = 'latest'),
          (i.devDependencies['@types/react-dom'] = 'latest'),
          e === _t.STACKBLITZ &&
            ((i.devDependencies.vite = 'latest'),
            (i.devDependencies['@vitejs/plugin-react'] = 'latest'))),
      i
    )
  }
function te(t) {
  const { type: e, platform: i, code: n, title: o, description: l } = t,
    u =
      i === _t.STACKBLITZ
        ? {
            scripts: {
              dev: 'vite',
              build: 'vite build',
              serve: 'vite preview',
            },
          }
        : {},
    { dependencies: a, devDependencies: _ } = Ha(e, i),
    h = {
      name: o,
      description: l,
      version: '0.0.0',
      private: !0,
      ...u,
      dependencies: { ...Ms(n), ...a },
      devDependencies: { ..._ },
    }
  return JSON.stringify(h, null, 2)
}
function Va(t) {
  const { code: e } = t
  return Zt({
    files: {
      'package.json': {
        content: te({ type: $.VUE, platform: _t.CODESANDBOX, code: e }),
      },
      'tsconfig.json': { content: qt($.VUE) },
      'index.html': { content: vt() },
      'src/main.ts': { content: Jt($.VUE) },
      'src/Demo.vue': { content: e },
      ...t.customFiles,
    },
  })
}
function Xa(t) {
  const { code: e } = t
  return Zt({
    files: {
      'package.json': {
        content: te({ type: $.REACT, platform: _t.CODESANDBOX, code: e }),
      },
      'tsconfig.json': { content: qt($.REACT) },
      'index.html': { content: vt() },
      'src/main.tsx': { content: Jt($.REACT) },
      'src/Demo.tsx': { content: e },
      ...t.customFiles,
    },
  })
}
function Za(t) {
  const { code: e } = t
  return Zt({
    files: { 'index.html': { content: vt({ code: e }) }, ...t.customFiles },
    template: 'static',
  })
}
function Qa(t) {
  var e, i, n
  const o =
      (e = (t.templates || []).find((a) => a.scope === 'global')) == null
        ? void 0
        : e.files,
    l =
      (i = (t.templates || []).find((a) => a.scope === t.type)) == null
        ? void 0
        : i.files,
    u =
      (n = (t.templates || []).find((a) => a.scope === t.scope)) == null
        ? void 0
        : n.files
  t.customFiles = { ...o, ...l, ...u }
  for (let a in t.customFiles)
    t.customFiles[a] = { content: t.customFiles[a] || '' }
  if (t.type === $.VUE) return Va(t)
  if (t.type === $.REACT) return Xa(t)
  if (t.type === $.HTML) return Za(t)
}
const qa = {
    action: 'https://codesandbox.io/api/v1/sandboxes/define',
    method: 'post',
    target: '_blank',
    style: { display: 'flex' },
  },
  Ja = ['value'],
  Ya = ['value'],
  tr = Rt({
    __name: 'codesandbox',
    props: {
      code: {},
      type: {},
      title: {},
      description: {},
      scope: {},
      templates: {},
    },
    setup(t) {
      const e = t,
        i = st(() =>
          Qa({
            code: e.code,
            type: e.type,
            title: e.title || jn,
            description: e.description || Mn,
            scope: e.scope,
            templates: e.templates,
          }),
        ),
        n = st(() => Vi(e.type))
      return (o, l) => (
        W(),
        V('form', qa, [
          z(
            'input',
            { style: { display: 'none' }, name: 'parameters', value: i.value },
            null,
            8,
            Ja,
          ),
          l[0] ||
            (l[0] = z(
              'input',
              { style: { display: 'none' }, name: 'embed', value: 1 },
              null,
              -1,
            )),
          z(
            'input',
            {
              style: { display: 'none' },
              name: 'query',
              value: `module=${n.value}`,
            },
            null,
            8,
            Ya,
          ),
          l[1] ||
            (l[1] = Ti(
              '<button type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-codesandbox"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg></button>',
              1,
            )),
        ])
      )
    },
  }),
  er = 500,
  nr = 20,
  ir = 300,
  sr = 'https://stackblitz.com',
  Nn = [
    'angular-cli',
    'create-react-app',
    'html',
    'javascript',
    'node',
    'polymer',
    'typescript',
    'vue',
  ],
  ar = ['project', 'search', 'ports', 'settings'],
  rr = ['light', 'dark'],
  or = ['editor', 'preview'],
  Sn = {
    clickToLoad: (t) => dt('ctl', t),
    devToolsHeight: (t) => Cn('devtoolsheight', t),
    forceEmbedLayout: (t) => dt('embed', t),
    hideDevTools: (t) => dt('hidedevtools', t),
    hideExplorer: (t) => dt('hideExplorer', t),
    hideNavigation: (t) => dt('hideNavigation', t),
    openFile: (t) => Wt('file', t),
    showSidebar: (t) => _r('showSidebar', t),
    sidebarView: (t) => ke('sidebarView', t, ar),
    startScript: (t) => Wt('startScript', t),
    terminalHeight: (t) => Cn('terminalHeight', t),
    theme: (t) => ke('theme', t, rr),
    view: (t) => ke('view', t, or),
    zenMode: (t) => dt('zenMode', t),
    organization: (t) =>
      `${Wt('orgName', t == null ? void 0 : t.name)}&${Wt('orgProvider', t == null ? void 0 : t.provider)}`,
    crossOriginIsolated: (t) => dt('corp', t),
  }
function fi(t = {}) {
  const e = Object.entries(t)
    .map(([i, n]) => (n != null && Sn.hasOwnProperty(i) ? Sn[i](n) : ''))
    .filter(Boolean)
  return e.length ? `?${e.join('&')}` : ''
}
function dt(t, e) {
  return e === !0 ? `${t}=1` : ''
}
function _r(t, e) {
  return typeof e == 'boolean' ? `${t}=${e ? '1' : '0'}` : ''
}
function Cn(t, e) {
  if (typeof e == 'number' && !Number.isNaN(e)) {
    const i = Math.min(100, Math.max(0, e))
    return `${t}=${encodeURIComponent(Math.round(i))}`
  }
  return ''
}
function ke(t, e = '', i = []) {
  return i.includes(e) ? `${t}=${encodeURIComponent(e)}` : ''
}
function Wt(t, e) {
  return (Array.isArray(e) ? e : [e])
    .filter((i) => typeof i == 'string' && i.trim() !== '')
    .map((i) => `${t}=${encodeURIComponent(i)}`)
    .join('&')
}
function gi() {
  return (
    Math.random().toString(36).slice(2, 6) +
    Math.random().toString(36).slice(2, 6)
  )
}
function Le(t, e) {
  return `${mi(e)}${t}${fi(e)}`
}
function je(t, e) {
  const i = { forceEmbedLayout: !0 }
  return (
    e && typeof e == 'object' && Object.assign(i, e), `${mi(i)}${t}${fi(i)}`
  )
}
function mi(t = {}) {
  return (typeof t.origin == 'string' ? t.origin : sr).replace(/\/$/, '')
}
function Me(t, e, i) {
  if (!e || !t || !t.parentNode) throw new Error('Invalid Element')
  t.id && (e.id = t.id),
    t.className && (e.className = t.className),
    lr(e, i),
    ur(t, e, i),
    t.replaceWith(e)
}
function Ie(t) {
  if (typeof t == 'string') {
    const e = document.getElementById(t)
    if (!e) throw new Error(`Could not find element with id '${t}'`)
    return e
  } else if (t instanceof HTMLElement) return t
  throw new Error(`Invalid element: ${t}`)
}
function De(t) {
  return t && t.newWindow === !1 ? '_self' : '_blank'
}
function lr(t, e = {}) {
  const i = Object.hasOwnProperty.call(e, 'height') ? `${e.height}` : `${ir}`,
    n = Object.hasOwnProperty.call(e, 'width') ? `${e.width}` : void 0
  t.setAttribute('height', i),
    n ? t.setAttribute('width', n) : t.setAttribute('style', 'width:100%;')
}
function ur(t, e, i = {}) {
  var n, o, l
  const u =
    (l =
      (o = (n = t.allow) == null ? void 0 : n.split(';')) == null
        ? void 0
        : o.map((a) => a.trim())) != null
      ? l
      : []
  i.crossOriginIsolated &&
    !u.includes('cross-origin-isolated') &&
    u.push('cross-origin-isolated'),
    u.length > 0 && (e.allow = u.join('; '))
}
class cr {
  constructor(e) {
    ;(this.pending = {}),
      (this.port = e),
      (this.port.onmessage = this.messageListener.bind(this))
  }
  request({ type: e, payload: i }) {
    return new Promise((n, o) => {
      const l = gi()
      ;(this.pending[l] = { resolve: n, reject: o }),
        this.port.postMessage({ type: e, payload: { ...i, __reqid: l } })
    })
  }
  messageListener(e) {
    var i
    if (typeof ((i = e.data.payload) == null ? void 0 : i.__reqid) != 'string')
      return
    const { type: n, payload: o } = e.data,
      { __reqid: l, __success: u, __error: a } = o
    this.pending[l] &&
      (u
        ? this.pending[l].resolve(this.cleanResult(o))
        : this.pending[l].reject(a ? `${n}: ${a}` : n),
      delete this.pending[l])
  }
  cleanResult(e) {
    const i = { ...e }
    return (
      delete i.__reqid,
      delete i.__success,
      delete i.__error,
      Object.keys(i).length ? i : null
    )
  }
}
class pr {
  constructor(e, i) {
    ;(this.editor = {
      openFile: (n) =>
        this._rdc.request({ type: 'SDK_OPEN_FILE', payload: { path: n } }),
      setCurrentFile: (n) =>
        this._rdc.request({
          type: 'SDK_SET_CURRENT_FILE',
          payload: { path: n },
        }),
      setTheme: (n) =>
        this._rdc.request({ type: 'SDK_SET_UI_THEME', payload: { theme: n } }),
      setView: (n) =>
        this._rdc.request({ type: 'SDK_SET_UI_VIEW', payload: { view: n } }),
      showSidebar: (n = !0) =>
        this._rdc.request({
          type: 'SDK_TOGGLE_SIDEBAR',
          payload: { visible: n },
        }),
    }),
      (this.preview = {
        origin: '',
        getUrl: () =>
          this._rdc
            .request({ type: 'SDK_GET_PREVIEW_URL', payload: {} })
            .then((n) => {
              var o
              return (o = n == null ? void 0 : n.url) != null ? o : null
            }),
        setUrl: (n = '/') => {
          if (typeof n != 'string' || !n.startsWith('/'))
            throw new Error(
              `Invalid argument: expected a path starting with '/', got '${n}'`,
            )
          return this._rdc.request({
            type: 'SDK_SET_PREVIEW_URL',
            payload: { path: n },
          })
        },
      }),
      (this._rdc = new cr(e)),
      Object.defineProperty(this.preview, 'origin', {
        value: typeof i.previewOrigin == 'string' ? i.previewOrigin : null,
        writable: !1,
      })
  }
  applyFsDiff(e) {
    const i = (n) => n !== null && typeof n == 'object'
    if (!i(e) || !i(e.create))
      throw new Error(
        'Invalid diff object: expected diff.create to be an object.',
      )
    if (!Array.isArray(e.destroy))
      throw new Error(
        'Invalid diff object: expected diff.destroy to be an array.',
      )
    return this._rdc.request({ type: 'SDK_APPLY_FS_DIFF', payload: e })
  }
  getDependencies() {
    return this._rdc.request({ type: 'SDK_GET_DEPS_SNAPSHOT', payload: {} })
  }
  getFsSnapshot() {
    return this._rdc.request({ type: 'SDK_GET_FS_SNAPSHOT', payload: {} })
  }
}
const Kt = []
class hr {
  constructor(e) {
    ;(this.id = gi()),
      (this.element = e),
      (this.pending = new Promise((i, n) => {
        const o = ({ data: h, ports: f }) => {
            ;(h == null ? void 0 : h.action) === 'SDK_INIT_SUCCESS' &&
              h.id === this.id &&
              ((this.vm = new pr(f[0], h.payload)), i(this.vm), u())
          },
          l = () => {
            var h
            ;(h = this.element.contentWindow) == null ||
              h.postMessage({ action: 'SDK_INIT', id: this.id }, '*')
          }
        function u() {
          window.clearInterval(_), window.removeEventListener('message', o)
        }
        window.addEventListener('message', o), l()
        let a = 0
        const _ = window.setInterval(() => {
          if (this.vm) {
            u()
            return
          }
          if (a >= nr) {
            u(),
              n(
                'Timeout: Unable to establish a connection with the StackBlitz VM',
              ),
              Kt.forEach((h, f) => {
                h.id === this.id && Kt.splice(f, 1)
              })
            return
          }
          a++, l()
        }, er)
      })),
      Kt.push(this)
  }
}
const dr = (t) => {
  var e
  const i = t instanceof Element ? 'element' : 'id'
  return (e = Kt.find((n) => n[i] === t)) != null ? e : null
}
function fr(t, e) {
  const i = document.createElement('input')
  return (i.type = 'hidden'), (i.name = t), (i.value = e), i
}
function gr(t) {
  return t.replace(/\[/g, '%5B').replace(/\]/g, '%5D')
}
function bi({
  template: t,
  title: e,
  description: i,
  dependencies: n,
  files: o,
  settings: l,
}) {
  if (!Nn.includes(t)) {
    const h = Nn.map((f) => `'${f}'`).join(', ')
    console.warn(`Unsupported project.template: must be one of ${h}`)
  }
  const u = [],
    a = (h, f, g = '') => {
      u.push(fr(h, typeof f == 'string' ? f : g))
    }
  a('project[title]', e),
    typeof i == 'string' && i.length > 0 && a('project[description]', i),
    a('project[template]', t, 'javascript'),
    n &&
      (t === 'node'
        ? console.warn(
            "Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template.",
          )
        : a('project[dependencies]', JSON.stringify(n))),
    l && a('project[settings]', JSON.stringify(l)),
    Object.entries(o).forEach(([h, f]) => {
      a(`project[files][${gr(h)}]`, f)
    })
  const _ = document.createElement('form')
  return (
    (_.method = 'POST'),
    _.setAttribute('style', 'display:none!important;'),
    _.append(...u),
    _
  )
}
function mr(t, e) {
  const i = bi(t)
  return (
    (i.action = je('/run', e)),
    (i.id = 'sb_run'),
    `<!doctype html>
<html>
<head><title></title></head>
<body>
  ${i.outerHTML}
  <script>document.getElementById('${i.id}').submit();<\/script>
</body>
</html>`
  )
}
function br(t, e) {
  const i = bi(t)
  ;(i.action = Le('/run', e)),
    (i.target = De(e)),
    document.body.appendChild(i),
    i.submit(),
    document.body.removeChild(i)
}
function ee(t) {
  var e
  return t != null && t.contentWindow
    ? ((e = dr(t)) != null ? e : new hr(t)).pending
    : Promise.reject('Provided element is not an iframe.')
}
function yr(t, e) {
  br(t, e)
}
function kr(t, e) {
  const i = Le(`/edit/${t}`, e),
    n = De(e)
  window.open(i, n)
}
function wr(t, e) {
  const i = Le(`/github/${t}`, e),
    n = De(e)
  window.open(i, n)
}
function vr(t, e, i) {
  var n
  const o = Ie(t),
    l = mr(e, i),
    u = document.createElement('iframe')
  return Me(o, u, i), (n = u.contentDocument) == null || n.write(l), ee(u)
}
function xr(t, e, i) {
  const n = Ie(t),
    o = document.createElement('iframe')
  return (o.src = je(`/edit/${e}`, i)), Me(n, o, i), ee(o)
}
function Er(t, e, i) {
  const n = Ie(t),
    o = document.createElement('iframe')
  return (o.src = je(`/github/${e}`, i)), Me(n, o, i), ee(o)
}
const Pe = {
    connect: ee,
    embedGithubProject: Er,
    embedProject: vr,
    embedProjectId: xr,
    openGithubProject: wr,
    openProject: yr,
    openProjectId: kr,
  },
  Or = (t) => {
    const { code: e, title: i, description: n } = t
    Pe.openProject(
      {
        title: i,
        description: n,
        template: 'html',
        files: { 'index.html': vt({ code: e }), ...t.customFiles },
      },
      { openFile: 'index.html' },
    )
  },
  Ar = (t) => {
    const { code: e, title: i, description: n } = t
    Pe.openProject(
      {
        title: i,
        description: n,
        template: 'node',
        files: {
          'src/Demo.tsx': e,
          'src/main.tsx': Jt($.REACT),
          'index.html': vt({ src: '/src/main.tsx' }),
          'package.json': te({
            type: $.REACT,
            platform: _t.STACKBLITZ,
            code: e,
          }),
          'vite.config.js': Hn($.REACT),
          '.stackblitzrc': Gn(),
          'tsconfig.json': qt($.REACT),
          ...t.customFiles,
        },
      },
      { openFile: 'src/Demo.tsx' },
    )
  },
  Tr = (t) => {
    const { code: e, title: i, description: n } = t
    Pe.openProject(
      {
        title: i,
        description: n,
        template: 'node',
        files: {
          'src/Demo.vue': e,
          'src/main.ts': Jt($.VUE),
          'index.html': vt({ src: '/src/main.ts' }),
          'package.json': te({ type: $.VUE, platform: _t.STACKBLITZ, code: e }),
          'vite.config.js': Hn($.VUE),
          '.stackblitzrc': Gn(),
          'tsconfig.json': qt($.VUE),
          ...t.customFiles,
        },
      },
      { openFile: 'src/Demo.vue' },
    )
  }
function Rr(t) {
  var e, i, n
  const o =
      (e = (t.templates || []).find((a) => a.scope === 'global')) == null
        ? void 0
        : e.files,
    l =
      (i = (t.templates || []).find((a) => a.scope === t.type)) == null
        ? void 0
        : i.files,
    u =
      (n = (t.templates || []).find((a) => a.scope === t.scope)) == null
        ? void 0
        : n.files
  if (((t.customFiles = { ...o, ...l, ...u }), t.type === $.VUE)) return Tr(t)
  if (t.type === $.REACT) return Ar(t)
  if (t.type === $.HTML) return Or(t)
}
const Nr = Rt({
    __name: 'stackblitz',
    props: {
      code: {},
      type: {},
      title: {},
      description: {},
      templates: {},
      scope: {},
    },
    setup(t) {
      const e = t
      function i() {
        Rr({
          code: e.code,
          type: e.type,
          title: e.title || jn,
          description: e.description || Mn,
          templates: e.templates || [],
          scope: e.scope,
        })
      }
      return (n, o) => (
        W(),
        V(
          'svg',
          {
            onClick: i,
            viewBox: '64 64 896 896',
            focusable: 'false',
            'data-icon': 'thunderbolt',
            width: '20px',
            height: '20px',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          o[0] ||
            (o[0] = [
              z(
                'path',
                {
                  d: 'M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211L378.2 732.5z',
                },
                null,
                -1,
              ),
            ]),
        )
      )
    },
  }),
  Sr = {},
  Cr = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '20',
    height: '20',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'lucide lucide-github',
  }
function Lr(t, e) {
  return (
    W(),
    V(
      'svg',
      Cr,
      e[0] ||
        (e[0] = [
          z(
            'path',
            {
              d: 'M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4',
            },
            null,
            -1,
          ),
          z('path', { d: 'M9 18c-4.51 2-5-2-7-2' }, null, -1),
        ]),
    )
  )
}
const jr = pt(Sr, [['render', Lr]]),
  Mr = {},
  Ir = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: '20',
    height: '20',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '2',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    class: 'lucide lucide-gitlab',
  }
function Dr(t, e) {
  return (
    W(),
    V(
      'svg',
      Ir,
      e[0] ||
        (e[0] = [
          z(
            'path',
            {
              d: 'm22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z',
            },
            null,
            -1,
          ),
        ]),
    )
  )
}
const Pr = pt(Mr, [['render', Dr]]),
  Br = {},
  Ur = {
    xmlns: 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    fill: 'none',
    version: '1.1',
    width: '18',
    height: '18',
    viewBox: '0 0 24 24',
  }
function zr(t, e) {
  return (
    W(),
    V(
      'svg',
      Ur,
      e[0] ||
        (e[0] = [
          z(
            'defs',
            null,
            [
              z('clipPath', { id: 'master_svg0_27_0291' }, [
                z('rect', {
                  x: '0',
                  y: '0',
                  width: '24',
                  height: '24',
                  rx: '0',
                }),
              ]),
            ],
            -1,
          ),
          z(
            'g',
            { 'clip-path': 'url(#master_svg0_27_0291)' },
            [
              z('g', null, [
                z('path', {
                  d: 'M4.707482,11.29327L4.707107,11.29289Q4.566455,11.152239999999999,4.382683,11.07612Q4.198912,11,4,11Q3.801088,11,3.617317,11.07612Q3.433545,11.152239999999999,3.292893,11.29289Q3.152241,11.43355,3.07612,11.61732Q3,11.80109,3,12Q3,12.02403,3.001154,12.04804Q3.010111,12.23427,3.085581,12.40477Q3.161051,12.57527,3.292893,12.70711L3.293268,12.70748L8.29289,17.7071Q8.36254,17.776699999999998,8.44443,17.8315Q8.52632,17.886200000000002,8.61732,17.9239Q8.70831,17.9616,8.80491,17.980800000000002Q8.90151,18,9,18Q9.09849,18,9.19509,17.980800000000002Q9.29169,17.9616,9.38268,17.9239Q9.47368,17.886200000000002,9.55557,17.8315Q9.63746,17.776699999999998,9.70711,17.7071L20.7071,6.707107Q20.8478,6.566454,20.9239,6.382683Q21,6.198912,21,6Q21,5.801088,20.9239,5.617317Q20.8478,5.433546,20.7071,5.292894Q20.5665,5.152241,20.3827,5.076121Q20.1989,5,20,5Q19.9741,5,19.9483,5.001339Q19.762999999999998,5.010937,19.5935,5.086334Q19.4241,5.16173,19.2929,5.292893L19.2925,5.293268L9,15.58579L4.707482,11.29327Z',
                  'fill-rule': 'evenodd',
                  fill: 'currentColor',
                  'fill-opacity': '0.8500000238418579',
                }),
              ]),
            ],
            -1,
          ),
        ]),
    )
  )
}
const $r = pt(Br, [['render', zr]]),
  Fr = { style: { color: 'var(--vp-c-text-1)' } },
  Wr = 3e3,
  Kr = Rt({
    __name: 'message',
    props: { content: { default: '复制成功！' }, close: {} },
    setup(t, { expose: e }) {
      const i = Ce(),
        n = t,
        o = ot(!1),
        l = (h) => {
          o.value = h
        },
        u = ot(-9999),
        a = (h) => {
          u.value = h
        }
      rt(o, (h) => {
        h === !0 &&
          setTimeout(() => {
            o.value = !1
          }, Wr)
      })
      const _ = () => {
        n.close()
      }
      return (
        e({ setVisible: l, setTopHeight: a }),
        (h, f) => (
          W(),
          gt(
            Si,
            { name: 'slide-fade', onAfterLeave: _ },
            {
              default: ut(() => [
                o.value
                  ? (W(),
                    V(
                      'div',
                      {
                        key: 0,
                        class: J([X(i).bem('message-notice', 'container')]),
                        style: Ni({ top: u.value + 'px' }),
                      },
                      [it($r), z('span', Fr, Ot(h.content), 1)],
                      6,
                    ))
                  : tt('', !0),
              ]),
              _: 1,
            },
          )
        )
      )
    },
  }),
  we = [],
  Gr = {
    open: () => {
      const t = document.createElement('div'),
        e = Ri(Kr, {
          content: '已将代码复制至剪切板！',
          close: () => {
            document.body.removeChild(t), we.pop(), e.unmount()
          },
        }),
        i = e.mount(t)
      document.body.appendChild(t)
      const n = we.length,
        o = n === 0 ? 10 : (n + 1) * 10 + n * 42
      i.setTopHeight(o), i.setVisible(!0), we.push(i)
    },
  },
  Hr = Rt({
    __name: 'index',
    props: { content: {} },
    setup(t) {
      const e = Ce(),
        i = t
      return (n, o) => (
        W(),
        V(
          'div',
          { class: J([X(e).bem('tooltip', 'wrapper')]) },
          [
            z(
              'div',
              { class: J([X(e).bem('tooltip', 'content')]) },
              [ve(n.$slots, 'content', {}, () => [Ln(Ot(i.content), 1)], !0)],
              2,
            ),
            ve(n.$slots, 'default', {}, void 0, !0),
          ],
          2,
        )
      )
    },
  }),
  ft = pt(Hr, [['__scopeId', 'data-v-6bd5801c']]),
  Vr = { style: { 'flex-shrink': '0' } },
  Xr = ['innerHTML'],
  Zr = ['onClick'],
  Qr = ['onClick'],
  qr = { class: 'language-html' },
  Jr = ['innerHTML'],
  to = Rt({
    __name: 'index',
    props: {
      title: { default: '默认标题' },
      description: { default: '描述内容' },
      reactComponent: {},
      vueCode: {},
      reactCode: {},
      htmlCode: {},
      order: { default: 'vue,react,html' },
      visible: { type: Boolean, default: !0 },
      select: { default: $.VUE },
      github: { default: '' },
      gitlab: { default: '' },
      reactCreateElement: {},
      reactCreateRoot: {},
      stackblitz: {},
      codesandbox: {},
      codeplayer: {},
      scope: {},
      files: {},
    },
    setup(t) {
      const e = t,
        i = st(() => JSON.parse(decodeURIComponent(e.stackblitz || '{}'))),
        n = st(() => JSON.parse(decodeURIComponent(e.codesandbox || '{}')))
      st(() => JSON.parse(decodeURIComponent(e.codeplayer || '{}')))
      const o = ot(''),
        l = st(() => {
          var E
          const C = JSON.parse(decodeURIComponent(e.files || '{}'))[h.value]
          return (
            C &&
              !C[o.value] &&
              (o.value = ((E = Object.keys(C)) == null ? void 0 : E[0]) || ''),
            C
          )
        }),
        u = st(() => e.order.split(',').map((E) => E.trim())),
        a = Ge('coot-code-type', {}),
        _ = Ge('set-coot-code-type', (E) => {}),
        h = ot($.VUE)
      function f(E) {
        ;(h.value = E), typeof _ == 'function' && _(E)
      }
      const g = Ce(),
        { isCodeFold: y, setCodeFold: T } = js(),
        { clickCopy: j } = Ls(),
        M = st(() => e[`${h.value}Code`]),
        d = st(() =>
          l.value && l.value[o.value] ? Rn(l.value[o.value]) : Rn(M.value),
        ),
        r = st(() =>
          [$.VUE, $.REACT, $.HTML]
            .filter((E) => e[`${E}Code`])
            .sort((E, C) => u.value.indexOf(E) - u.value.indexOf(C)),
        )
      rt(
        () => (a == null ? void 0 : a.value),
        (E) => {
          E && e[`${E}Code`] && (h.value = E)
        },
        { immediate: !0 },
      )
      const m = () => {
          window.open(e.github, '_blank')
        },
        R = () => {
          window.open(e.gitlab, '_blank')
        }
      rt(
        () => h.value,
        (E) => {
          !E || (E === 'html' ? b() : E === 'react' && s())
        },
        { immediate: !0 },
      )
      const x = () => {
          j(M.value || ''), Gr.open()
        },
        A = ot()
      let c
      function b() {
        jt(() => {
          if (!A.value) return
          const E = A.value.querySelector('iframe'),
            C = E.contentDocument || E.contentWindow.document
          C.open()
          const D = document.head.querySelectorAll('style'),
            K = document.head.querySelectorAll('link[as="style"]'),
            v = document.head.querySelectorAll('link[as="font"]'),
            N = Array.from(D).map(
              (Z) => `<style replace="true">${Z.innerText}</style>`,
            ).join(`
`),
            I = Array.from(K).map((Z) => Z.outerHTML).join(`
`),
            B = Array.from(v).map((Z) => Z.outerHTML).join(`
`)
          C.write(
            Ga({
              code: e.htmlCode || '',
              styles: N,
              links:
                I +
                `
` +
                B,
            }),
          ),
            C.close()
          const F = (c = function () {
            requestAnimationFrame(() => {
              ;(E.style.height = C.body.scrollHeight + 'px'),
                C.documentElement &&
                  (C.documentElement.className =
                    document.documentElement.className),
                F === c && c()
            })
          })
          c()
        })
      }
      rt(
        () => e.htmlCode,
        (E) => {
          E && b()
        },
        { immediate: !0 },
      )
      const p = ot()
      let O = null
      function s() {
        jt(() => {
          e.reactComponent &&
            h.value === 'react' &&
            e.reactCode &&
            (O || (O = e.reactCreateRoot(p.value)),
            O.render(e.reactCreateElement(e.reactComponent, {}, null)))
        })
      }
      Ai(() => {
        O && (O.unmount(), (O = null))
      }),
        rt(
          () => [p.value, e.reactComponent],
          (E) => {
            p.value ? s() : O && (O.unmount(), (O = null))
          },
          { immediate: !0, deep: !0 },
        ),
        rt(
          () => e.reactCode,
          (E) => {
            E && O && O.render(e.reactCreateElement(e.reactComponent, {}, null))
          },
          { immediate: !0, deep: !0 },
        ),
        rt(
          () => e.select,
          (E) => {
            E && e[`${E}Code`] && (h.value = E)
          },
          { immediate: !0 },
        ),
        rt(
          () => r.value,
          () => {
            e[`${h.value}Code`] || (h.value = r.value[0])
          },
          { immediate: !0, deep: !0 },
        )
      function w(E) {
        ;(o.value = E),
          k.value && (k.value.style.height = 'auto'),
          jt(() => {
            k.value.style.height = k.value.scrollHeight + 'px'
          })
      }
      const k = ot()
      return (
        rt(
          () => y.value,
          (E) => {
            jt(() => {
              k.value &&
                (E
                  ? (k.value.style.height = 0)
                  : (k.value.style.height = k.value.scrollHeight + 'px'))
            })
          },
        ),
        (E, C) => (
          W(),
          V(
            'div',
            { class: J([X(g).e('container')]) },
            [
              z(
                'section',
                { class: J([X(g).bem('preview')]) },
                [
                  h.value === 'vue'
                    ? ve(E.$slots, 'vue', { key: 0 })
                    : h.value === 'html'
                      ? (W(),
                        V(
                          'div',
                          { key: 1, ref_key: 'htmlContainerRef', ref: A },
                          C[3] ||
                            (C[3] = [
                              z(
                                'iframe',
                                {
                                  style: {
                                    width: '100%',
                                    height: 'auto',
                                    border: 'none',
                                  },
                                },
                                null,
                                -1,
                              ),
                            ]),
                          512,
                        ))
                      : h.value === 'react'
                        ? (W(),
                          V(
                            'div',
                            { key: 2, ref_key: 'reactContainerRef', ref: p },
                            null,
                            512,
                          ))
                        : tt('', !0),
                ],
                2,
              ),
              z(
                'section',
                { class: J([X(g).bem('description')]) },
                [
                  E.title
                    ? (W(),
                      V(
                        'div',
                        {
                          key: 0,
                          class: J([X(g).bem('description', 'title')]),
                        },
                        [z('div', Vr, Ot(E.title), 1)],
                        2,
                      ))
                    : tt('', !0),
                  E.description
                    ? (W(),
                      V(
                        'div',
                        {
                          key: 1,
                          class: J([X(g).bem('description', 'content')]),
                          innerHTML: E.description,
                        },
                        null,
                        10,
                        Xr,
                      ))
                    : tt('', !0),
                  e.description || (!e.title && !e.description)
                    ? (W(),
                      V(
                        'div',
                        {
                          key: 2,
                          class: J([X(g).bem('description', 'split-line')]),
                        },
                        null,
                        2,
                      ))
                    : tt('', !0),
                  r.value.length > 1 && E.visible
                    ? (W(),
                      V(
                        'div',
                        { key: 3, class: J([X(g).bem('lang-tabs')]) },
                        [
                          (W(!0),
                          V(
                            We,
                            null,
                            Ke(
                              r.value,
                              (D) => (
                                W(),
                                V(
                                  'div',
                                  {
                                    key: D,
                                    class: J([
                                      X(g).bem('tab'),
                                      h.value === D && X(g).bem('active-tab'),
                                    ]),
                                    onClick: (K) => (f == null ? void 0 : f(D)),
                                  },
                                  Ot(D),
                                  11,
                                  Zr,
                                )
                              ),
                            ),
                            128,
                          )),
                        ],
                        2,
                      ))
                    : tt('', !0),
                  z(
                    'div',
                    { class: J([X(g).bem('description', 'handle-btn')]) },
                    [
                      i.value.show
                        ? (W(),
                          gt(
                            ft,
                            { key: 0, content: '在 stackblitz 中打开' },
                            {
                              default: ut(() => [
                                it(
                                  Nr,
                                  {
                                    code: M.value,
                                    type: h.value,
                                    scope: E.scope || '',
                                    templates: i.value.templates || [],
                                  },
                                  null,
                                  8,
                                  ['code', 'type', 'scope', 'templates'],
                                ),
                              ]),
                              _: 1,
                            },
                          ))
                        : tt('', !0),
                      n.value.show
                        ? (W(),
                          gt(
                            ft,
                            { key: 1, content: '在 codesandbox 中打开' },
                            {
                              default: ut(() => [
                                it(
                                  tr,
                                  {
                                    code: M.value,
                                    type: h.value,
                                    scope: E.scope || '',
                                    templates: n.value.templates || [],
                                  },
                                  null,
                                  8,
                                  ['code', 'type', 'scope', 'templates'],
                                ),
                              ]),
                              _: 1,
                            },
                          ))
                        : tt('', !0),
                      E.github
                        ? (W(),
                          gt(
                            ft,
                            { key: 2, content: '在 github 中打开' },
                            {
                              default: ut(() => [it(jr, { onClick: m })]),
                              _: 1,
                            },
                          ))
                        : tt('', !0),
                      E.gitlab
                        ? (W(),
                          gt(
                            ft,
                            { key: 3, content: '在 gitlab 中打开' },
                            {
                              default: ut(() => [it(Pr, { onClick: R })]),
                              _: 1,
                            },
                          ))
                        : tt('', !0),
                      X(y)
                        ? (W(),
                          gt(
                            ft,
                            { key: 5, content: '展开代码' },
                            {
                              default: ut(() => [
                                it(Mi, {
                                  onClick: C[1] || (C[1] = (D) => X(T)(!1)),
                                }),
                              ]),
                              _: 1,
                            },
                          ))
                        : (W(),
                          gt(
                            ft,
                            { key: 4, content: '收起代码' },
                            {
                              default: ut(() => [
                                it(Bi, {
                                  onClick: C[0] || (C[0] = (D) => X(T)(!0)),
                                }),
                              ]),
                              _: 1,
                            },
                          )),
                      it(
                        ft,
                        { content: '复制代码' },
                        { default: ut(() => [it(Fi, { onClick: x })]), _: 1 },
                      ),
                    ],
                    2,
                  ),
                ],
                2,
              ),
              z(
                'section',
                {
                  class: J([X(g).bem('source')]),
                  ref_key: 'sourceRef',
                  ref: k,
                },
                [
                  Object.keys(l.value).length
                    ? (W(),
                      V(
                        'div',
                        { key: 0, class: J([X(g).bem('file-tabs')]) },
                        [
                          (W(!0),
                          V(
                            We,
                            null,
                            Ke(
                              Object.keys(l.value),
                              (D) => (
                                W(),
                                V(
                                  'div',
                                  {
                                    key: D,
                                    class: J([
                                      X(g).bem('tab'),
                                      o.value === D && X(g).bem('active-tab'),
                                    ]),
                                    onClick: (K) => w(D),
                                  },
                                  Ot(D),
                                  11,
                                  Qr,
                                )
                              ),
                            ),
                            128,
                          )),
                        ],
                        2,
                      ))
                    : tt('', !0),
                  z('pre', qr, [
                    z('code', { innerHTML: d.value }, null, 8, Jr),
                  ]),
                ],
                2,
              ),
              X(y)
                ? tt('', !0)
                : (W(),
                  V(
                    'div',
                    {
                      key: 0,
                      class: J(X(g).bem('fold')),
                      onClick: C[2] || (C[2] = (D) => X(T)(!0)),
                    },
                    [it(Hi), C[4] || (C[4] = Ln('收起代码 '))],
                    2,
                  )),
            ],
            2,
          )
        )
      )
    },
  })
export { to as R }
