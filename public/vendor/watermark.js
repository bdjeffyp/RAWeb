/*
 Watermark v3.1.4 (August 13, 2012) plugin for jQuery
 http://jquery-watermark.googlecode.com/
 Copyright (c) 2009-2012 Todd Northrop
 http://www.speednet.biz/
 Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function (n, t, i) {
  var g = 'TEXTAREA', d = 'function', nt = 'password', c = 'maxLength', v = 'type', r = '', u = !0, rt = 'placeholder', h = !1, tt = 'watermark', s = tt, o = 'watermarkClass', w = 'watermarkFocus', a = 'watermarkSubmit', b = 'watermarkMaxLength', e = 'watermarkPassword', f = 'watermarkText',
    l = /\r/g, ft = /^(button|checkbox|hidden|image|radio|range|reset|submit)$/i, it = 'input:data(' + s + '),textarea:data(' + s + ')', p = ':watermarkable', k = ['Page_ClientValidate'], y = h, ut = rt in document.createElement('input');
  n.watermark = n.watermark || {
    version: '3.1.4', runOnce: u, options: {className: tt, useNative: u, hideBeforeUnload: u}, hide: function (t) {
      n(t).filter(it).each(function () {
        n.watermark._hide(n(this));
      });
    }, _hide: function (n, i) {
      var a = n[0], w = (a.value || r).replace(l, r), h = n.data(f) || r, p = n.data(b) || 0, y = n.data(o), s, u;
      h.length && w == h && (a.value = r, n.data(e) && (n.attr(v) || r) === 'text' && (s = n.data(e) || [], u = n.parent() || [], s.length && u.length && (u[0].removeChild(n[0]), u[0].appendChild(s[0]), n = s)), p && (n.attr(c, p), n.removeData(b)), i && (n.attr('autocomplete', 'off'), t.setTimeout(function () {
        n.select();
      }, 1))), y && n.removeClass(y);
    }, show: function (t) {
      n(t).filter(it).each(function () {
        n.watermark._show(n(this));
      });
    }, _show: function (t) {
      var p = t[0], g = (p.value || r).replace(l, r), i = t.data(f) || r, k = t.attr(v) || r, d = t.data(o), h, s, a;
      g.length != 0 && g != i || t.data(w) ? n.watermark._hide(t) : (y = u, t.data(e) && k === nt && (h = t.data(e) || [], s = t.parent() || [], h.length && s.length && (s[0].removeChild(t[0]), s[0].appendChild(h[0]), t = h, t.attr(c, i.length), p = t[0])), (k === 'text' || k === 'search') && (a = t.attr(c) || 0, a > 0 && i.length > a && (t.data(b, a), t.attr(c, i.length))), d && t.addClass(d), p.value = i);
    }, hideAll: function () {
      y && (n.watermark.hide(p), y = h);
    }, showAll: function () {
      n.watermark.show(p);
    }
  }, n.fn.watermark = n.fn.watermark || function (i, y) {
    var tt = 'string';
    if (!this.length) return this;
    var k = h, b = typeof i == tt;
    return b && (i = i.replace(l, r)), typeof y == 'object' ? (k = typeof y.className == tt, y = n.extend({}, n.watermark.options, y)) : typeof y == tt ? (k = u, y = n.extend({}, n.watermark.options, {className: y})) : y = n.watermark.options, typeof y.useNative != d && (y.useNative = y.useNative ? function () {
      return u;
    } : function () {
      return h;
    }), this.each(function () {
      var et = 'dragleave', ot = 'dragenter', ft = this, h = n(ft), st, d, tt, it;
      if (h.is(p)) {
        if (h.data(s)) {
          (b || k) && (n.watermark._hide(h), b && h.data(f, i), k && h.data(o, y.className));
        } else {
          if (ut && y.useNative.call(ft, h) && (h.attr('tagName') || r) !== g) {
            b && h.attr(rt, i);
            return;
          }
          h.data(f, b ? i : r), h.data(o, y.className), h.data(s, 1), (h.attr(v) || r) === nt ? (st = h.wrap('<span>').parent(), d = n(st.html().replace(/type=["']?password["']?/i, 'type="text"')), d.data(f, h.data(f)), d.data(o, h.data(o)), d.data(s, 1), d.attr(c, i.length), d.focus(function () {
            n.watermark._hide(d, u);
          }).bind(ot, function () {
            n.watermark._hide(d);
          }).bind('dragend', function () {
            t.setTimeout(function () {
              d.blur();
            }, 1);
          }), h.blur(function () {
            n.watermark._show(h);
          }).bind(et, function () {
            n.watermark._show(h);
          }), d.data(e, h), h.data(e, d)) : h.focus(function () {
            h.data(w, 1), n.watermark._hide(h, u);
          }).blur(function () {
            h.data(w, 0), n.watermark._show(h);
          }).bind(ot, function () {
            n.watermark._hide(h);
          }).bind(et, function () {
            n.watermark._show(h);
          }).bind('dragend', function () {
            t.setTimeout(function () {
              n.watermark._show(h);
            }, 1);
          }).bind('drop', function (n) {
            var i = h[0], t = n.originalEvent.dataTransfer.getData('Text');
            (i.value || r).replace(l, r).replace(t, r) === h.data(f) && (i.value = t), h.focus();
          }), ft.form && (tt = ft.form, it = n(tt), it.data(a) || (it.submit(n.watermark.hideAll), tt.submit ? (it.data(a, tt.submit), tt.submit = function (t, i) {
            return function () {
              var r = i.data(a);
              n.watermark.hideAll(), r.apply ? r.apply(t, Array.prototype.slice.call(arguments)) : r();
            };
          }(tt, it)) : (it.data(a, 1), tt.submit = function (t) {
            return function () {
              n.watermark.hideAll(), delete t.submit, t.submit();
            };
          }(tt))));
        }
        n.watermark._show(h);
      }
    });
  }, n.watermark.runOnce && (n.watermark.runOnce = h, n.extend(n.expr[':'], {
    data: n.expr.createPseudo ? n.expr.createPseudo(function (t) {
      return function (i) {
        return !!n.data(i, t);
      };
    }) : function (t, i, r) {
      return !!n.data(t, r[3]);
    }, watermarkable: function (n) {
      var t, i = n.nodeName;
      return i === g ? u : i !== 'INPUT' ? h : (t = n.getAttribute(v), !t || !ft.test(t));
    }
  }), function (t) {
    n.fn.val = function () {
      var u = this, e = Array.prototype.slice.call(arguments), o;
      return u.length ? e.length ? (t.apply(u, e), n.watermark.show(u), u) : u.data(s) ? (o = (u[0].value || r).replace(l, r), o === (u.data(f) || r) ? r : o) : t.apply(u) : e.length ? u : i;
    };
  }(n.fn.val), k.length && n(function () {
    for (var u, r, i = k.length - 1; i >= 0; i--) u = k[i], r = t[u], typeof r == d && (t[u] = function (t) {
      return function () {
        return n.watermark.hideAll(), t.apply(null, Array.prototype.slice.call(arguments));
      };
    }(r));
  }), n(t).bind('beforeunload', function () {
    n.watermark.options.hideBeforeUnload && n.watermark.hideAll();
  }));
})(jQuery, window);
$.fn.exists = function () {
  return this.length !== 0;
};
