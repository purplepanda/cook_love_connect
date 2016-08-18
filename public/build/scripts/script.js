function previewFile(e) {
  if (e.files && e.files[0]) {
    var t = new FileReader;
    t.onload = function(e) {
      $("#blah").attr("src", e.target.result).width(350).height(200)
    }, t.readAsDataURL(e.files[0])
  }
}
var app = angular.module("cookingConnect");
app.controller("cookbookCtrl", function(e, t, r) {
  e.title = "The JABE Cookbook", e.storedRecipes = r.returnObject(), t.get("../mock/recipeObjects.json").success(function(t) {
    e.recipes = t
  }), t.get("../mock/cookbookObjects.json").success(function(t) {
    e.cookbooks = t
  }), $(document).ready(function() {
    $(document).on("click", ".recipeCard", function() {
      event.preventDefault(), $(this).closest(".recipeDetails").toggle()
    })
  })
});
var app = angular.module("cookingConnect");
app.controller("landingCtrl", function(e, t) {
  e.title = "Welcome to Cook Love Connect!", e.loginForm = function() {
    $("#login").show(), $("#loginButton").hide(), $("#signup").hide()
  }, e.regForm = function() {
    $("#signup").show(), $("#signupButton").hide(), $("#login").hide()
  }, e.fakeLogin = function() {
    t.go("userhome")
  };
  document.getElementById("txtEmail"), document.getElementById("txtPassword"), document.getElementById("btnLogin"), document.getElementById("btnSignUp"), document.getElementById("btnLogout")
});
var app = angular.module("cookingConnect");
app.controller("loginCtrl", function(e) {});
var app = angular.module("cookingConnect");
app.controller("logoutCtrl", function(e) {
  e.title = "Thank you for cooking Cook Love Connect!", e.loginForm = function() {
    $("#login").show(), $("#loginButton").hide(), $("#signup").hide()
  }, e.regForm = function() {
    $("#signup").show(), $("#signupButton").hide(), $("#login").hide()
  }, e.fakeLogin = function() {
    $state.go("userhome")
  }
});
var app = angular.module("cookingConnect");
app.controller("newFormCtrl", ["$scope", "$state", "postRecipe", "storeRecipeFactory", "$location", function(e, t, r, n, o) {
  function i() {
    e.recipes.ingredients.unshift(e.ingredient), e.ingredient = ""
  }

  function a(t) {
    e.recipes.ingredients.splice(t, 1)
  }

  function u() {
    e.recipes.instructions.push(e.instruction), e.instruction = ""
  }

  function l(t) {
    e.recipes.instructions.splice(t, 1)
  }
  e.title = "Add A New Recipe", e.recipes = {}, e.recipes.ingredients = [], e.addIngredient = i, e.removeIngredient = a, e.recipes.instructions = [], e.addInstruction = u, e.removeInstruction = l, e.submitRecipe = function(e) {
    n.saveObject(e), o.path("cookbook")
  }, e.redirectHome = r.registerUser
}]);
var app = angular.module("cookingConnect").controller("postCtrl", ["$scope", "$state", "postService", function(e, t, r) {
    e.title = "Sign Up Here", e.message = "To sign up, please fill in the information below!", e.redirectHome = r.registerUser
  }]),
  app = angular.module("cookingConnect");
app.controller("recipeInfoCtrl", function(e) {
  e.title = "Recipe Info"
});
var app = angular.module("cookingConnect");
app.controller("registerCtrl", ["$scope", "$http", "$state", function(e, t, r) {
  e.title = "Sign Up Here", e.message = "To sign up, please fill in the information below!", e.registerUser = function() {
    var r = {
      firstName: e.user.firstName,
      lastName: e.user.lastName,
      email: e.user.email,
      password: e.user.password
    };
    t.post("/users", r).then(function(t) {
      e.items = t.data
    }, function(e) {})
  }
}]);
var app = angular.module("cookingConnect");
app.controller("userhomeCtrl", ["$scope", "$http", function(e, t) {
  e.title = "My Kitchen";
  var r = "";
  e.submitSearch = function(n) {
    r = n;
    var o = "http://recipepuppy.com/api/?q=",
      i = o + r;
    t.get(i).then(function(t) {
      e.thirdpartyrecipes = t.data.results
    });
    var a = {};
    a.getRecipe = function() {
      return t.get(i)
    }
  }, e.submitRecipe = function() {}
}]);
var app = angular.module("cookingConnect");
app.directive("recipeCard", function() {
  return {
    restrict: "E",
    replace: !0,
    templateUrl: "partials/recipeCard.html"
  }
});
var app = angular.module("cookingConnect", ["ui.router"]);
app.config(["$stateProvider", "$urlRouterProvider", function(e, t) {
    t.otherwise("/landing"), e.state("landing", {
      url: "/landing",
      templateUrl: "partials/landing.html",
      controller: "landingCtrl"
    }).state("login", {
      url: "/login",
      templateUrl: "partials/login.html",
      controller: "loginCtrl"
    }).state("logout", {
      url: "/logout",
      templateUrl: "partials/logout.html",
      controller: "logoutCtrl"
    }).state("userhome", {
      url: "/userhome",
      templateUrl: "partials/userhome.html",
      controller: "userhomeCtrl"
    }).state("cookbook", {
      url: "/cookbook",
      templateUrl: "partials/cookbook.html",
      controller: "cookbookCtrl"
    }).state("newForm", {
      url: "/newForm",
      templateUrl: "partials/newForm.html",
      controller: "newFormCtrl"
    }).state("recipeInfo", {
      url: "/recipeInfo",
      templateUrl: "partials/recipeInfo.html",
      controller: "recipeInfoCtrl"
    })
  }]), "undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"),
  function(e, t, r) {
    "use strict";

    function n(e, t) {
      return z(new(z(function() {}, {
        prototype: e
      })), t)
    }

    function o(e) {
      return L(arguments, function(t) {
        t !== e && L(t, function(t, r) {
          e.hasOwnProperty(r) || (e[r] = t)
        })
      }), e
    }

    function i(e, t) {
      var r = [];
      for (var n in e.path) {
        if (e.path[n] !== t.path[n]) break;
        r.push(e.path[n])
      }
      return r
    }

    function a(e) {
      if (Object.keys) return Object.keys(e);
      var t = [];
      return L(e, function(e, r) {
        t.push(r)
      }), t
    }

    function u(e, t) {
      if (Array.prototype.indexOf) return e.indexOf(t, Number(arguments[2]) || 0);
      var r = e.length >>> 0,
        n = Number(arguments[2]) || 0;
      for (n = 0 > n ? Math.ceil(n) : Math.floor(n), 0 > n && (n += r); r > n; n++)
        if (n in e && e[n] === t) return n;
      return -1
    }

    function l(e, t, r, n) {
      var o, l = i(r, n),
        s = {},
        c = [];
      for (var f in l)
        if (l[f] && l[f].params && (o = a(l[f].params), o.length))
          for (var p in o) u(c, o[p]) >= 0 || (c.push(o[p]), s[o[p]] = e[o[p]]);
      return z({}, s, t)
    }

    function s(e, t, r) {
      if (!r) {
        r = [];
        for (var n in e) r.push(n)
      }
      for (var o = 0; o < r.length; o++) {
        var i = r[o];
        if (e[i] != t[i]) return !1
      }
      return !0
    }

    function c(e, t) {
      var r = {};
      return L(e, function(e) {
        r[e] = t[e]
      }), r
    }

    function f(e) {
      var t = {},
        r = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
      return L(r, function(r) {
        r in e && (t[r] = e[r])
      }), t
    }

    function p(e) {
      var t = {},
        r = Array.prototype.concat.apply(Array.prototype, Array.prototype.slice.call(arguments, 1));
      for (var n in e) - 1 == u(r, n) && (t[n] = e[n]);
      return t
    }

    function h(e, t) {
      var r = T(e),
        n = r ? [] : {};
      return L(e, function(e, o) {
        t(e, o) && (n[r ? n.length : o] = e)
      }), n
    }

    function v(e, t) {
      var r = T(e) ? [] : {};
      return L(e, function(e, n) {
        r[n] = t(e, n)
      }), r
    }

    function m(e, t) {
      var n = 1,
        i = 2,
        l = {},
        s = [],
        c = l,
        f = z(e.when(l), {
          $$promises: l,
          $$values: l
        });
      this.study = function(l) {
        function h(e, r) {
          if (g[r] !== i) {
            if ($.push(r), g[r] === n) throw $.splice(0, u($, r)), new Error("Cyclic dependency: " + $.join(" -> "));
            if (g[r] = n, D(e)) d.push(r, [function() {
              return t.get(e)
            }], s);
            else {
              var o = t.annotate(e);
              L(o, function(e) {
                e !== r && l.hasOwnProperty(e) && h(l[e], e)
              }), d.push(r, e, o)
            }
            $.pop(), g[r] = i
          }
        }

        function v(e) {
          return B(e) && e.then && e.$$promises
        }
        if (!B(l)) throw new Error("'invocables' must be an object");
        var m = a(l || {}),
          d = [],
          $ = [],
          g = {};
        return L(l, h), l = $ = g = null,
          function(n, i, a) {
            function u() {
              --w || (b || o(y, i.$$values), $.$$values = y, $.$$promises = $.$$promises || !0, delete $.$$inheritedValues, h.resolve(y))
            }

            function l(e) {
              $.$$failure = e, h.reject(e)
            }

            function s(r, o, i) {
              function s(e) {
                f.reject(e), l(e)
              }

              function c() {
                if (!N($.$$failure)) try {
                  f.resolve(t.invoke(o, a, y)), f.promise.then(function(e) {
                    y[r] = e, u()
                  }, s)
                } catch (e) {
                  s(e)
                }
              }
              var f = e.defer(),
                p = 0;
              L(i, function(e) {
                g.hasOwnProperty(e) && !n.hasOwnProperty(e) && (p++, g[e].then(function(t) {
                  y[e] = t, --p || c()
                }, s))
              }), p || c(), g[r] = f.promise
            }
            if (v(n) && a === r && (a = i, i = n, n = null), n) {
              if (!B(n)) throw new Error("'locals' must be an object")
            } else n = c;
            if (i) {
              if (!v(i)) throw new Error("'parent' must be a promise returned by $resolve.resolve()")
            } else i = f;
            var h = e.defer(),
              $ = h.promise,
              g = $.$$promises = {},
              y = z({}, n),
              w = 1 + d.length / 3,
              b = !1;
            if (N(i.$$failure)) return l(i.$$failure), $;
            i.$$inheritedValues && o(y, p(i.$$inheritedValues, m)), z(g, i.$$promises), i.$$values ? (b = o(y, p(i.$$values, m)), $.$$inheritedValues = p(i.$$values, m), u()) : (i.$$inheritedValues && ($.$$inheritedValues = p(i.$$inheritedValues, m)), i.then(u, l));
            for (var k = 0, S = d.length; S > k; k += 3) n.hasOwnProperty(d[k]) ? u() : s(d[k], d[k + 1], d[k + 2]);
            return $
          }
      }, this.resolve = function(e, t, r, n) {
        return this.study(e)(t, r, n)
      }
    }

    function d(e, t, r) {
      this.fromConfig = function(e, t, r) {
        return N(e.template) ? this.fromString(e.template, t) : N(e.templateUrl) ? this.fromUrl(e.templateUrl, t) : N(e.templateProvider) ? this.fromProvider(e.templateProvider, t, r) : null
      }, this.fromString = function(e, t) {
        return M(e) ? e(t) : e
      }, this.fromUrl = function(r, n) {
        return M(r) && (r = r(n)), null == r ? null : e.get(r, {
          cache: t,
          headers: {
            Accept: "text/html"
          }
        }).then(function(e) {
          return e.data
        })
      }, this.fromProvider = function(e, t, n) {
        return r.invoke(e, null, n || {
          params: t
        })
      }
    }

    function $(e, t, o) {
      function i(t, r, n, o) {
        if (d.push(t), v[t]) return v[t];
        if (!/^\w+([-.]+\w+)*(?:\[\])?$/.test(t)) throw new Error("Invalid parameter name '" + t + "' in pattern '" + e + "'");
        if (m[t]) throw new Error("Duplicate parameter name '" + t + "' in pattern '" + e + "'");
        return m[t] = new K.Param(t, r, n, o), m[t]
      }

      function a(e, t, r, n) {
        var o = ["", ""],
          i = e.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
        if (!t) return i;
        switch (r) {
          case !1:
            o = ["(", ")" + (n ? "?" : "")];
            break;
          case !0:
            i = i.replace(/\/$/, ""), o = ["(?:/(", ")|/)?"];
            break;
          default:
            o = ["(" + r + "|", ")?"]
        }
        return i + o[0] + t + o[1]
      }

      function u(o, i) {
        var a, u, l, s, c;
        return a = o[2] || o[3], c = t.params[a], l = e.substring(p, o.index), u = i ? o[4] : o[4] || ("*" == o[1] ? ".*" : null), u && (s = K.type(u) || n(K.type("string"), {
          pattern: new RegExp(u, t.caseInsensitive ? "i" : r)
        })), {
          id: a,
          regexp: u,
          segment: l,
          type: s,
          cfg: c
        }
      }
      t = z({
        params: {}
      }, B(t) ? t : {});
      var l, s = /([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        c = /([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,
        f = "^",
        p = 0,
        h = this.segments = [],
        v = o ? o.params : {},
        m = this.params = o ? o.params.$$new() : new K.ParamSet,
        d = [];
      this.source = e;
      for (var $, g, y;
        (l = s.exec(e)) && ($ = u(l, !1), !($.segment.indexOf("?") >= 0));) g = i($.id, $.type, $.cfg, "path"), f += a($.segment, g.type.pattern.source, g.squash, g.isOptional), h.push($.segment), p = s.lastIndex;
      y = e.substring(p);
      var w = y.indexOf("?");
      if (w >= 0) {
        var b = this.sourceSearch = y.substring(w);
        if (y = y.substring(0, w), this.sourcePath = e.substring(0, p + w), b.length > 0)
          for (p = 0; l = c.exec(b);) $ = u(l, !0), g = i($.id, $.type, $.cfg, "search"), p = s.lastIndex
      } else this.sourcePath = e, this.sourceSearch = "";
      f += a(y) + (t.strict === !1 ? "/?" : "") + "$", h.push(y), this.regexp = new RegExp(f, t.caseInsensitive ? "i" : r), this.prefix = h[0], this.$$paramNames = d
    }

    function g(e) {
      z(this, e)
    }

    function y() {
      function e(e) {
        return null != e ? e.toString().replace(/~/g, "~~").replace(/\//g, "~2F") : e
      }

      function o(e) {
        return null != e ? e.toString().replace(/~2F/g, "/").replace(/~~/g, "~") : e
      }

      function i() {
        return {
          strict: m,
          caseInsensitive: p
        }
      }

      function l(e) {
        return M(e) || T(e) && M(e[e.length - 1])
      }

      function s() {
        for (; k.length;) {
          var e = k.shift();
          if (e.pattern) throw new Error("You cannot override a type's .pattern at runtime.");
          t.extend(w[e.name], f.invoke(e.def))
        }
      }

      function c(e) {
        z(this, e || {})
      }
      K = this;
      var f, p = !1,
        m = !0,
        d = !1,
        w = {},
        b = !0,
        k = [],
        S = {
          string: {
            encode: e,
            decode: o,
            is: function(e) {
              return null == e || !N(e) || "string" == typeof e
            },
            pattern: /[^\/]*/
          },
          int: {
            encode: e,
            decode: function(e) {
              return parseInt(e, 10)
            },
            is: function(e) {
              return N(e) && this.decode(e.toString()) === e
            },
            pattern: /\d+/
          },
          bool: {
            encode: function(e) {
              return e ? 1 : 0
            },
            decode: function(e) {
              return 0 !== parseInt(e, 10)
            },
            is: function(e) {
              return e === !0 || e === !1
            },
            pattern: /0|1/
          },
          date: {
            encode: function(e) {
              return this.is(e) ? [e.getFullYear(), ("0" + (e.getMonth() + 1)).slice(-2), ("0" + e.getDate()).slice(-2)].join("-") : r
            },
            decode: function(e) {
              if (this.is(e)) return e;
              var t = this.capture.exec(e);
              return t ? new Date(t[1], t[2] - 1, t[3]) : r
            },
            is: function(e) {
              return e instanceof Date && !isNaN(e.valueOf())
            },
            equals: function(e, t) {
              return this.is(e) && this.is(t) && e.toISOString() === t.toISOString()
            },
            pattern: /[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,
            capture: /([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/
          },
          json: {
            encode: t.toJson,
            decode: t.fromJson,
            is: t.isObject,
            equals: t.equals,
            pattern: /[^\/]*/
          },
          any: {
            encode: t.identity,
            decode: t.identity,
            equals: t.equals,
            pattern: /.*/
          }
        };
      y.$$getDefaultValue = function(e) {
        if (!l(e.value)) return e.value;
        if (!f) throw new Error("Injectable functions cannot be called at configuration time");
        return f.invoke(e.value)
      }, this.caseInsensitive = function(e) {
        return N(e) && (p = e), p
      }, this.strictMode = function(e) {
        return N(e) && (m = e), m
      }, this.defaultSquashPolicy = function(e) {
        if (!N(e)) return d;
        if (e !== !0 && e !== !1 && !D(e)) throw new Error("Invalid squash policy: " + e + ". Valid policies: false, true, arbitrary-string");
        return d = e, e
      }, this.compile = function(e, t) {
        return new $(e, z(i(), t))
      }, this.isMatcher = function(e) {
        if (!B(e)) return !1;
        var t = !0;
        return L($.prototype, function(r, n) {
          M(r) && (t = t && N(e[n]) && M(e[n]))
        }), t
      }, this.type = function(e, t, r) {
        if (!N(t)) return w[e];
        if (w.hasOwnProperty(e)) throw new Error("A type named '" + e + "' has already been defined.");
        return w[e] = new g(z({
          name: e
        }, t)), r && (k.push({
          name: e,
          def: r
        }), b || s()), this
      }, L(S, function(e, t) {
        w[t] = new g(z({
          name: t
        }, e))
      }), w = n(w, {}), this.$get = ["$injector", function(e) {
        return f = e, b = !1, s(), L(S, function(e, t) {
          w[t] || (w[t] = new g(e))
        }), this
      }], this.Param = function(e, n, o, i) {
        function s(e) {
          var t = B(e) ? a(e) : [],
            r = -1 === u(t, "value") && -1 === u(t, "type") && -1 === u(t, "squash") && -1 === u(t, "array");
          return r && (e = {
            value: e
          }), e.$$fn = l(e.value) ? e.value : function() {
            return e.value
          }, e
        }

        function c(r, n, o) {
          if (r.type && n) throw new Error("Param '" + e + "' has two type configurations.");
          return n ? n : r.type ? t.isString(r.type) ? w[r.type] : r.type instanceof g ? r.type : new g(r.type) : "config" === o ? w.any : w.string
        }

        function p() {
          var t = {
              array: "search" === i && "auto"
            },
            r = e.match(/\[\]$/) ? {
              array: !0
            } : {};
          return z(t, r, o).array
        }

        function m(e, t) {
          var r = e.squash;
          if (!t || r === !1) return !1;
          if (!N(r) || null == r) return d;
          if (r === !0 || D(r)) return r;
          throw new Error("Invalid squash policy: '" + r + "'. Valid policies: false, true, or arbitrary string")
        }

        function $(e, t, n, o) {
          var i, a, l = [{
            from: "",
            to: n || t ? r : ""
          }, {
            from: null,
            to: n || t ? r : ""
          }];
          return i = T(e.replace) ? e.replace : [], D(o) && i.push({
            from: o,
            to: r
          }), a = v(i, function(e) {
            return e.from
          }), h(l, function(e) {
            return -1 === u(a, e.from)
          }).concat(i)
        }

        function y() {
          if (!f) throw new Error("Injectable functions cannot be called at configuration time");
          var e = f.invoke(o.$$fn);
          if (null !== e && e !== r && !S.type.is(e)) throw new Error("Default value (" + e + ") for parameter '" + S.id + "' is not an instance of Type (" + S.type.name + ")");
          return e
        }

        function b(e) {
          function t(e) {
            return function(t) {
              return t.from === e
            }
          }

          function r(e) {
            var r = v(h(S.replace, t(e)), function(e) {
              return e.to
            });
            return r.length ? r[0] : e
          }
          return e = r(e), N(e) ? S.type.$normalize(e) : y()
        }

        function k() {
          return "{Param:" + e + " " + n + " squash: '" + j + "' optional: " + E + "}"
        }
        var S = this;
        o = s(o), n = c(o, n, i);
        var C = p();
        n = C ? n.$asArray(C, "search" === i) : n, "string" !== n.name || C || "path" !== i || o.value !== r || (o.value = "");
        var E = o.value !== r,
          j = m(o, E),
          P = $(o, C, E, j);
        z(this, {
          id: e,
          type: n,
          location: i,
          array: C,
          squash: j,
          replace: P,
          isOptional: E,
          value: b,
          dynamic: r,
          config: o,
          toString: k
        })
      }, c.prototype = {
        $$new: function() {
          return n(this, z(new c, {
            $$parent: this
          }))
        },
        $$keys: function() {
          for (var e = [], t = [], r = this, n = a(c.prototype); r;) t.push(r), r = r.$$parent;
          return t.reverse(), L(t, function(t) {
            L(a(t), function(t) {
              -1 === u(e, t) && -1 === u(n, t) && e.push(t)
            })
          }), e
        },
        $$values: function(e) {
          var t = {},
            r = this;
          return L(r.$$keys(), function(n) {
            t[n] = r[n].value(e && e[n])
          }), t
        },
        $$equals: function(e, t) {
          var r = !0,
            n = this;
          return L(n.$$keys(), function(o) {
            var i = e && e[o],
              a = t && t[o];
            n[o].type.equals(i, a) || (r = !1)
          }), r
        },
        $$validates: function(e) {
          var n, o, i, a, u, l = this.$$keys();
          for (n = 0; n < l.length && (o = this[l[n]], i = e[l[n]], i !== r && null !== i || !o.isOptional); n++) {
            if (a = o.type.$normalize(i), !o.type.is(a)) return !1;
            if (u = o.type.encode(a), t.isString(u) && !o.type.pattern.exec(u)) return !1
          }
          return !0
        },
        $$parent: r
      }, this.ParamSet = c
    }

    function w(e, n) {
      function o(e) {
        var t = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);
        return null != t ? t[1].replace(/\\(.)/g, "$1") : ""
      }

      function i(e, t) {
        return e.replace(/\$(\$|\d{1,2})/, function(e, r) {
          return t["$" === r ? 0 : Number(r)]
        })
      }

      function a(e, t, r) {
        if (!r) return !1;
        var n = e.invoke(t, t, {
          $match: r
        });
        return !N(n) || n
      }

      function u(n, o, i, a, u) {
        function p(e, t, r) {
          return "/" === d ? e : t ? d.slice(0, -1) + e : r ? d.slice(1) + e : e
        }

        function h(e) {
          function t(e) {
            var t = e(i, n);
            return !!t && (D(t) && n.replace().url(t), !0)
          }
          if (!e || !e.defaultPrevented) {
            m && n.url() === m, m = r;
            var o, a = s.length;
            for (o = 0; a > o; o++)
              if (t(s[o])) return;
            c && t(c)
          }
        }

        function v() {
          return l = l || o.$on("$locationChangeSuccess", h)
        }
        var m, d = a.baseHref(),
          $ = n.url();
        return f || v(), {
          sync: function() {
            h()
          },
          listen: function() {
            return v()
          },
          update: function(e) {
            return e ? void($ = n.url()) : void(n.url() !== $ && (n.url($), n.replace()))
          },
          push: function(e, t, o) {
            var i = e.format(t || {});
            null !== i && t && t["#"] && (i += "#" + t["#"]), n.url(i), m = o && o.$$avoidResync ? n.url() : r, o && o.replace && n.replace()
          },
          href: function(r, o, i) {
            if (!r.validates(o)) return null;
            var a = e.html5Mode();
            t.isObject(a) && (a = a.enabled), a = a && u.history;
            var l = r.format(o);
            if (i = i || {}, a || null === l || (l = "#" + e.hashPrefix() + l), null !== l && o && o["#"] && (l += "#" + o["#"]), l = p(l, a, i.absolute), !i.absolute || !l) return l;
            var s = !a && l ? "/" : "",
              c = n.port();
            return c = 80 === c || 443 === c ? "" : ":" + c, [n.protocol(), "://", n.host(), c, s, l].join("")
          }
        }
      }
      var l, s = [],
        c = null,
        f = !1;
      this.rule = function(e) {
        if (!M(e)) throw new Error("'rule' must be a function");
        return s.push(e), this
      }, this.otherwise = function(e) {
        if (D(e)) {
          var t = e;
          e = function() {
            return t
          }
        } else if (!M(e)) throw new Error("'rule' must be a function");
        return c = e, this
      }, this.when = function(e, t) {
        var r, u = D(t);
        if (D(e) && (e = n.compile(e)), !u && !M(t) && !T(t)) throw new Error("invalid 'handler' in when()");
        var l = {
            matcher: function(e, t) {
              return u && (r = n.compile(t), t = ["$match", function(e) {
                return r.format(e)
              }]), z(function(r, n) {
                return a(r, t, e.exec(n.path(), n.search()))
              }, {
                prefix: D(e.prefix) ? e.prefix : ""
              })
            },
            regex: function(e, t) {
              if (e.global || e.sticky) throw new Error("when() RegExp must not be global or sticky");
              return u && (r = t, t = ["$match", function(e) {
                return i(r, e)
              }]), z(function(r, n) {
                return a(r, t, e.exec(n.path()))
              }, {
                prefix: o(e)
              })
            }
          },
          s = {
            matcher: n.isMatcher(e),
            regex: e instanceof RegExp
          };
        for (var c in s)
          if (s[c]) return this.rule(l[c](e, t));
        throw new Error("invalid 'what' in when()")
      }, this.deferIntercept = function(e) {
        e === r && (e = !0), f = e
      }, this.$get = u, u.$inject = ["$location", "$rootScope", "$injector", "$browser", "$sniffer"]
    }

    function b(e, o) {
      function i(e) {
        return 0 === e.indexOf(".") || 0 === e.indexOf("^")
      }

      function p(e, t) {
        if (!e) return r;
        var n = D(e),
          o = n ? e : e.name,
          a = i(o);
        if (a) {
          if (!t) throw new Error("No reference point given for path '" + o + "'");
          t = p(t);
          for (var u = o.split("."), l = 0, s = u.length, c = t; s > l; l++)
            if ("" !== u[l] || 0 !== l) {
              if ("^" !== u[l]) break;
              if (!c.parent) throw new Error("Path '" + o + "' not valid for state '" + t.name + "'");
              c = c.parent
            } else c = t;
          u = u.slice(l).join("."), o = c.name + (c.name && u ? "." : "") + u
        }
        var f = E[o];
        return !f || !n && (n || f !== e && f.self !== e) ? r : f
      }

      function h(e, t) {
        j[e] || (j[e] = []), j[e].push(t)
      }

      function m(e) {
        for (var t = j[e] || []; t.length;) d(t.shift())
      }

      function d(t) {
        t = n(t, {
          self: t,
          resolve: t.resolve || {},
          toString: function() {
            return this.name
          }
        });
        var r = t.name;
        if (!D(r) || r.indexOf("@") >= 0) throw new Error("State must have a valid name");
        if (E.hasOwnProperty(r)) throw new Error("State '" + r + "' is already defined");
        var o = -1 !== r.indexOf(".") ? r.substring(0, r.lastIndexOf(".")) : D(t.parent) ? t.parent : B(t.parent) && D(t.parent.name) ? t.parent.name : "";
        if (o && !E[o]) return h(o, t.self);
        for (var i in x) M(x[i]) && (t[i] = x[i](t, x.$delegates[i]));
        return E[r] = t, !t[P] && t.url && e.when(t.url, ["$match", "$stateParams", function(e, r) {
          C.$current.navigable == t && s(e, r) || C.transitionTo(t, e, {
            inherit: !0,
            location: !1
          })
        }]), m(r), t
      }

      function $(e) {
        return e.indexOf("*") > -1
      }

      function g(e) {
        for (var t = e.split("."), r = C.$current.name.split("."), n = 0, o = t.length; o > n; n++) "*" === t[n] && (r[n] = "*");
        return "**" === t[0] && (r = r.slice(u(r, t[1])), r.unshift("**")), "**" === t[t.length - 1] && (r.splice(u(r, t[t.length - 2]) + 1, Number.MAX_VALUE), r.push("**")), t.length == r.length && r.join("") === t.join("")
      }

      function y(e, t) {
        return D(e) && !N(t) ? x[e] : M(t) && D(e) ? (x[e] && !x.$delegates[e] && (x.$delegates[e] = x[e]), x[e] = t, this) : this
      }

      function w(e, t) {
        return B(e) ? t = e : t.name = e, d(t), this
      }

      function b(e, o, i, u, f, h, m, d, y) {
        function w(t, r, n, i) {
          var a = e.$broadcast("$stateNotFound", t, r, n);
          if (a.defaultPrevented) return m.update(), A;
          if (!a.retry) return null;
          if (i.$retry) return m.update(), I;
          var u = C.transition = o.when(a.retry);
          return u.then(function() {
            return u !== C.transition ? j : (t.options.$retry = !0, C.transitionTo(t.to, t.toParams, t.options))
          }, function() {
            return A
          }), m.update(), u
        }

        function b(e, r, n, a, l, s) {
          function p() {
            var r = [];
            return L(e.views, function(n, o) {
              var a = n.resolve && n.resolve !== e.resolve ? n.resolve : {};
              a.$template = [function() {
                return i.load(o, {
                  view: n,
                  locals: l.globals,
                  params: h,
                  notify: s.notify
                }) || ""
              }], r.push(f.resolve(a, l.globals, l.resolve, e).then(function(r) {
                if (M(n.controllerProvider) || T(n.controllerProvider)) {
                  var i = t.extend({}, a, l.globals);
                  r.$$controller = u.invoke(n.controllerProvider, null, i)
                } else r.$$controller = n.controller;
                r.$$state = e, r.$$controllerAs = n.controllerAs, l[o] = r
              }))
            }), o.all(r).then(function() {
              return l.globals
            })
          }
          var h = n ? r : c(e.params.$$keys(), r),
            v = {
              $stateParams: h
            };
          l.resolve = f.resolve(e.resolve, v, l.resolve, e);
          var m = [l.resolve.then(function(e) {
            l.globals = e
          })];
          return a && m.push(a), o.all(m).then(p).then(function(e) {
            return l
          })
        }
        var j = o.reject(new Error("transition superseded")),
          x = o.reject(new Error("transition prevented")),
          A = o.reject(new Error("transition aborted")),
          I = o.reject(new Error("transition failed"));
        return S.locals = {
          resolve: null,
          globals: {
            $stateParams: {}
          }
        }, C = {
          params: {},
          current: S.self,
          $current: S,
          transition: null
        }, C.reload = function(e) {
          return C.transitionTo(C.current, h, {
            reload: e || !0,
            inherit: !1,
            notify: !0
          })
        }, C.go = function(e, t, r) {
          return C.transitionTo(e, t, z({
            inherit: !0,
            relative: C.$current
          }, r))
        }, C.transitionTo = function(t, r, i) {
          r = r || {}, i = z({
            location: !0,
            inherit: !1,
            relative: null,
            notify: !0,
            reload: !1,
            $retry: !1
          }, i || {});
          var a, s = C.$current,
            f = C.params,
            v = s.path,
            d = p(t, i.relative),
            $ = r["#"];
          if (!N(d)) {
            var g = {
                to: t,
                toParams: r,
                options: i
              },
              y = w(g, s.self, f, i);
            if (y) return y;
            if (t = g.to, r = g.toParams, i = g.options, d = p(t, i.relative), !N(d)) {
              if (!i.relative) throw new Error("No such state '" + t + "'");
              throw new Error("Could not resolve '" + t + "' from state '" + i.relative + "'")
            }
          }
          if (d[P]) throw new Error("Cannot transition to abstract state '" + t + "'");
          if (i.inherit && (r = l(h, r || {}, C.$current, d)), !d.params.$$validates(r)) return I;
          r = d.params.$$values(r), t = d;
          var E = t.path,
            A = 0,
            O = E[A],
            q = S.locals,
            R = [];
          if (i.reload) {
            if (D(i.reload) || B(i.reload)) {
              if (B(i.reload) && !i.reload.name) throw new Error("Invalid reload state object");
              var F = i.reload === !0 ? v[0] : p(i.reload);
              if (i.reload && !F) throw new Error("No such reload state '" + (D(i.reload) ? i.reload : i.reload.name) + "'");
              for (; O && O === v[A] && O !== F;) q = R[A] = O.locals, A++, O = E[A]
            }
          } else
            for (; O && O === v[A] && O.ownParams.$$equals(r, f);) q = R[A] = O.locals, A++, O = E[A];
          if (k(t, r, s, f, q, i)) return $ && (r["#"] = $), C.params = r, H(C.params, h), H(c(t.params.$$keys(), h), t.locals.globals.$stateParams), i.location && t.navigable && t.navigable.url && (m.push(t.navigable.url, r, {
            $$avoidResync: !0,
            replace: "replace" === i.location
          }), m.update(!0)), C.transition = null, o.when(C.current);
          if (r = c(t.params.$$keys(), r || {}), $ && (r["#"] = $), i.notify && e.$broadcast("$stateChangeStart", t.self, r, s.self, f, i).defaultPrevented) return e.$broadcast("$stateChangeCancel", t.self, r, s.self, f), null == C.transition && m.update(), x;
          for (var U = o.when(q), V = A; V < E.length; V++, O = E[V]) q = R[V] = n(q), U = b(O, r, O === t, U, q, i);
          var M = C.transition = U.then(function() {
            var n, o, a;
            if (C.transition !== M) return j;
            for (n = v.length - 1; n >= A; n--) a = v[n], a.self.onExit && u.invoke(a.self.onExit, a.self, a.locals.globals), a.locals = null;
            for (n = A; n < E.length; n++) o = E[n], o.locals = R[n], o.self.onEnter && u.invoke(o.self.onEnter, o.self, o.locals.globals);
            return C.transition !== M ? j : (C.$current = t, C.current = t.self, C.params = r, H(C.params, h), C.transition = null, i.location && t.navigable && m.push(t.navigable.url, t.navigable.locals.globals.$stateParams, {
              $$avoidResync: !0,
              replace: "replace" === i.location
            }), i.notify && e.$broadcast("$stateChangeSuccess", t.self, r, s.self, f), m.update(!0), C.current)
          }, function(n) {
            return C.transition !== M ? j : (C.transition = null, a = e.$broadcast("$stateChangeError", t.self, r, s.self, f, n), a.defaultPrevented || m.update(), o.reject(n))
          });
          return M
        }, C.is = function(e, t, n) {
          n = z({
            relative: C.$current
          }, n || {});
          var o = p(e, n.relative);
          return N(o) ? C.$current === o && (!t || s(o.params.$$values(t), h)) : r
        }, C.includes = function(e, t, n) {
          if (n = z({
              relative: C.$current
            }, n || {}), D(e) && $(e)) {
            if (!g(e)) return !1;
            e = C.$current.name
          }
          var o = p(e, n.relative);
          return N(o) ? !!N(C.$current.includes[o.name]) && (!t || s(o.params.$$values(t), h, a(t))) : r
        }, C.href = function(e, t, n) {
          n = z({
            lossy: !0,
            inherit: !0,
            absolute: !1,
            relative: C.$current
          }, n || {});
          var o = p(e, n.relative);
          if (!N(o)) return null;
          n.inherit && (t = l(h, t || {}, C.$current, o));
          var i = o && n.lossy ? o.navigable : o;
          return i && i.url !== r && null !== i.url ? m.href(i.url, c(o.params.$$keys().concat("#"), t || {}), {
            absolute: n.absolute
          }) : null
        }, C.get = function(e, t) {
          if (0 === arguments.length) return v(a(E), function(e) {
            return E[e].self
          });
          var r = p(e, t || C.$current);
          return r && r.self ? r.self : null
        }, C
      }

      function k(e, t, r, n, o, i) {
        function a(e, t, r) {
          function n(t) {
            return "search" != e.params[t].location
          }
          var o = e.params.$$keys().filter(n),
            i = f.apply({}, [e.params].concat(o)),
            a = new K.ParamSet(i);
          return a.$$equals(t, r)
        }
        return !(i.reload || e !== r || !(o === r.locals || e.self.reloadOnSearch === !1 && a(r, n, t))) || void 0
      }
      var S, C, E = {},
        j = {},
        P = "abstract",
        x = {
          parent: function(e) {
            if (N(e.parent) && e.parent) return p(e.parent);
            var t = /^(.+)\.[^.]+$/.exec(e.name);
            return t ? p(t[1]) : S
          },
          data: function(e) {
            return e.parent && e.parent.data && (e.data = e.self.data = n(e.parent.data, e.data)), e.data
          },
          url: function(e) {
            var t = e.url,
              r = {
                params: e.params || {}
              };
            if (D(t)) return "^" == t.charAt(0) ? o.compile(t.substring(1), r) : (e.parent.navigable || S).url.concat(t, r);
            if (!t || o.isMatcher(t)) return t;
            throw new Error("Invalid url '" + t + "' in state '" + e + "'")
          },
          navigable: function(e) {
            return e.url ? e : e.parent ? e.parent.navigable : null
          },
          ownParams: function(e) {
            var t = e.url && e.url.params || new K.ParamSet;
            return L(e.params || {}, function(e, r) {
              t[r] || (t[r] = new K.Param(r, null, e, "config"))
            }), t
          },
          params: function(e) {
            var t = f(e.ownParams, e.ownParams.$$keys());
            return e.parent && e.parent.params ? z(e.parent.params.$$new(), t) : new K.ParamSet
          },
          views: function(e) {
            var t = {};
            return L(N(e.views) ? e.views : {
              "": e
            }, function(r, n) {
              n.indexOf("@") < 0 && (n += "@" + e.parent.name), t[n] = r
            }), t
          },
          path: function(e) {
            return e.parent ? e.parent.path.concat(e) : []
          },
          includes: function(e) {
            var t = e.parent ? z({}, e.parent.includes) : {};
            return t[e.name] = !0, t
          },
          $delegates: {}
        };
      S = d({
        name: "",
        url: "^",
        views: null,
        abstract: !0
      }), S.navigable = null, this.decorator = y, this.state = w, this.$get = b, b.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$urlRouter", "$location", "$urlMatcherFactory"]
    }

    function k() {
      function e(e, t) {
        return {
          load: function(e, r) {
            var n, o = {
              template: null,
              controller: null,
              view: null,
              locals: null,
              notify: !0,
              async: !0,
              params: {}
            };
            return r = z(o, r), r.view && (n = t.fromConfig(r.view, r.params, r.locals)), n
          }
        }
      }
      this.$get = e, e.$inject = ["$rootScope", "$templateFactory"]
    }

    function S() {
      var e = !1;
      this.useAnchorScroll = function() {
        e = !0
      }, this.$get = ["$anchorScroll", "$timeout", function(t, r) {
        return e ? t : function(e) {
          return r(function() {
            e[0].scrollIntoView()
          }, 0, !1)
        }
      }]
    }

    function C(e, r, n, o) {
      function i() {
        return r.has ? function(e) {
          return r.has(e) ? r.get(e) : null
        } : function(e) {
          try {
            return r.get(e)
          } catch (e) {
            return null
          }
        }
      }

      function a(e, r) {
        function n(e) {
          return 1 === _ && Y >= 4 ? !!s.enabled(e) : 1 === _ && Y >= 2 ? !!s.enabled() : !!l
        }
        var o = {
          enter: function(e, t, r) {
            t.after(e), r()
          },
          leave: function(e, t) {
            e.remove(), t()
          }
        };
        if (e.noanimation) return o;
        if (s) return {
          enter: function(e, r, i) {
            n(e) ? t.version.minor > 2 ? s.enter(e, null, r).then(i) : s.enter(e, null, r, i) : o.enter(e, r, i)
          },
          leave: function(e, r) {
            n(e) ? t.version.minor > 2 ? s.leave(e).then(r) : s.leave(e, r) : o.leave(e, r)
          }
        };
        if (l) {
          var i = l && l(r, e);
          return {
            enter: function(e, t, r) {
              i.enter(e, null, t), r()
            },
            leave: function(e, t) {
              i.leave(e), t()
            }
          }
        }
        return o
      }
      var u = i(),
        l = u("$animator"),
        s = u("$animate"),
        c = {
          restrict: "ECA",
          terminal: !0,
          priority: 400,
          transclude: "element",
          compile: function(r, i, u) {
            return function(r, i, l) {
              function s() {
                function e() {
                  t && t.remove(), r && r.$destroy()
                }
                var t = f,
                  r = h;
                r && (r._willBeDestroyed = !0), p ? ($.leave(p, function() {
                  e(), f = null
                }), f = p) : (e(), f = null), p = null, h = null
              }

              function c(a) {
                var c, f = j(r, l, i, o),
                  g = f && e.$current && e.$current.locals[f];
                if ((a || g !== v) && !r._willBeDestroyed) {
                  c = r.$new(), v = e.$current.locals[f], c.$emit("$viewContentLoading", f);
                  var y = u(c, function(e) {
                    $.enter(e, i, function() {
                      h && h.$emit("$viewContentAnimationEnded"), (t.isDefined(d) && !d || r.$eval(d)) && n(e)
                    }), s()
                  });
                  p = y, h = c, h.$emit("$viewContentLoaded", f), h.$eval(m)
                }
              }
              var f, p, h, v, m = l.onload || "",
                d = l.autoscroll,
                $ = a(l, r);
              r.$on("$stateChangeSuccess", function() {
                c(!1)
              }), c(!0)
            }
          }
        };
      return c
    }

    function E(e, t, r, n) {
      return {
        restrict: "ECA",
        priority: -400,
        compile: function(o) {
          var i = o.html();
          return function(o, a, u) {
            var l = r.$current,
              s = j(o, u, a, n),
              c = l && l.locals[s];
            if (c) {
              a.data("$uiView", {
                name: s,
                state: c.$$state
              }), a.html(c.$template ? c.$template : i);
              var f = e(a.contents());
              if (c.$$controller) {
                c.$scope = o, c.$element = a;
                var p = t(c.$$controller, c);
                c.$$controllerAs && (o[c.$$controllerAs] = p), a.data("$ngControllerController", p), a.children().data("$ngControllerController", p)
              }
              f(o)
            }
          }
        }
      }
    }

    function j(e, t, r, n) {
      var o = n(t.uiView || t.name || "")(e),
        i = r.inheritedData("$uiView");
      return o.indexOf("@") >= 0 ? o : o + "@" + (i ? i.state.name : "")
    }

    function P(e, t) {
      var r, n = e.match(/^\s*({[^}]*})\s*$/);
      if (n && (e = t + "(" + n[1] + ")"), r = e.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/), !r || 4 !== r.length) throw new Error("Invalid state ref '" + e + "'");
      return {
        state: r[1],
        paramExpr: r[3] || null
      }
    }

    function x(e) {
      var t = e.parent().inheritedData("$uiView");
      return t && t.state && t.state.name ? t.state : void 0
    }

    function A(e) {
      var t = "[object SVGAnimatedString]" === Object.prototype.toString.call(e.prop("href")),
        r = "FORM" === e[0].nodeName;
      return {
        attr: r ? "action" : t ? "xlink:href" : "href",
        isAnchor: "A" === e.prop("tagName").toUpperCase(),
        clickable: !r
      }
    }

    function I(e, t, r, n, o) {
      return function(i) {
        var a = i.which || i.button,
          u = o();
        if (!(a > 1 || i.ctrlKey || i.metaKey || i.shiftKey || e.attr("target"))) {
          var l = r(function() {
            t.go(u.state, u.params, u.options)
          });
          i.preventDefault();
          var s = n.isAnchor && !u.href ? 1 : 0;
          i.preventDefault = function() {
            s-- <= 0 && r.cancel(l)
          }
        }
      }
    }

    function O(e, t) {
      return {
        relative: x(e) || t.$current,
        inherit: !0
      }
    }

    function q(e, r) {
      return {
        restrict: "A",
        require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
        link: function(n, o, i, a) {
          var u = P(i.uiSref, e.current.name),
            l = {
              state: u.state,
              href: null,
              params: null
            },
            s = A(o),
            c = a[1] || a[0];
          l.options = z(O(o, e), i.uiSrefOpts ? n.$eval(i.uiSrefOpts) : {});
          var f = function(r) {
            r && (l.params = t.copy(r)), l.href = e.href(u.state, l.params, l.options), c && c.$$addStateInfo(u.state, l.params), null !== l.href && i.$set(s.attr, l.href)
          };
          u.paramExpr && (n.$watch(u.paramExpr, function(e) {
            e !== l.params && f(e)
          }, !0), l.params = t.copy(n.$eval(u.paramExpr))), f(), s.clickable && o.bind("click", I(o, e, r, s, function() {
            return l
          }))
        }
      }
    }

    function R(e, t) {
      return {
        restrict: "A",
        require: ["?^uiSrefActive", "?^uiSrefActiveEq"],
        link: function(r, n, o, i) {
          function a(t) {
            f.state = t[0], f.params = t[1], f.options = t[2], f.href = e.href(f.state, f.params, f.options), l && l.$$addStateInfo(f.state, f.params), f.href && o.$set(u.attr, f.href)
          }
          var u = A(n),
            l = i[1] || i[0],
            s = [o.uiState, o.uiStateParams || null, o.uiStateOpts || null],
            c = "[" + s.map(function(e) {
              return e || "null"
            }).join(", ") + "]",
            f = {
              state: null,
              params: null,
              options: null,
              href: null
            };
          r.$watch(c, a, !0), a(r.$eval(c)), u.clickable && n.bind("click", I(n, e, t, u, function() {
            return f
          }))
        }
      }
    }

    function F(e, t, r) {
      return {
        restrict: "A",
        controller: ["$scope", "$element", "$attrs", "$timeout", function(t, n, o, i) {
          function a(t, r, o) {
            var i = e.get(t, x(n)),
              a = u(t, r);
            m.push({
              state: i || {
                name: t
              },
              params: r,
              hash: a
            }), d[a] = o
          }

          function u(e, r) {
            if (!D(e)) throw new Error("state should be a string");
            return B(r) ? e + J(r) : (r = t.$eval(r), B(r) ? e + J(r) : e)
          }

          function l() {
            for (var e = 0; e < m.length; e++) f(m[e].state, m[e].params) ? s(n, d[m[e].hash]) : c(n, d[m[e].hash]), p(m[e].state, m[e].params) ? s(n, h) : c(n, h)
          }

          function s(e, t) {
            i(function() {
              e.addClass(t)
            })
          }

          function c(e, t) {
            e.removeClass(t)
          }

          function f(t, r) {
            return e.includes(t.name, r)
          }

          function p(t, r) {
            return e.is(t.name, r)
          }
          var h, v, m = [],
            d = {};
          h = r(o.uiSrefActiveEq || "", !1)(t);
          try {
            v = t.$eval(o.uiSrefActive)
          } catch (e) {}
          v = v || r(o.uiSrefActive || "", !1)(t), B(v) && L(v, function(r, n) {
            if (D(r)) {
              var o = P(r, e.current.name);
              a(o.state, t.$eval(o.paramExpr), n)
            }
          }), this.$$addStateInfo = function(e, t) {
            B(v) && m.length > 0 || (a(e, t, v), l())
          }, t.$on("$stateChangeSuccess", l), l()
        }]
      }
    }

    function U(e) {
      var t = function(t, r) {
        return e.is(t, r)
      };
      return t.$stateful = !0, t
    }

    function V(e) {
      var t = function(t, r, n) {
        return e.includes(t, r, n)
      };
      return t.$stateful = !0, t
    }
    var N = t.isDefined,
      M = t.isFunction,
      D = t.isString,
      B = t.isObject,
      T = t.isArray,
      L = t.forEach,
      z = t.extend,
      H = t.copy,
      J = t.toJson;
    t.module("ui.router.util", ["ng"]), t.module("ui.router.router", ["ui.router.util"]), t.module("ui.router.state", ["ui.router.router", "ui.router.util"]), t.module("ui.router", ["ui.router.state"]), t.module("ui.router.compat", ["ui.router"]), m.$inject = ["$q", "$injector"], t.module("ui.router.util").service("$resolve", m), d.$inject = ["$http", "$templateCache", "$injector"], t.module("ui.router.util").service("$templateFactory", d);
    var K;
    $.prototype.concat = function(e, t) {
      var r = {
        caseInsensitive: K.caseInsensitive(),
        strict: K.strictMode(),
        squash: K.defaultSquashPolicy()
      };
      return new $(this.sourcePath + e + this.sourceSearch, z(r, t), this)
    }, $.prototype.toString = function() {
      return this.source
    }, $.prototype.exec = function(e, t) {
      function r(e) {
        function t(e) {
          return e.split("").reverse().join("")
        }

        function r(e) {
          return e.replace(/\\-/g, "-")
        }
        var n = t(e).split(/-(?!\\)/),
          o = v(n, t);
        return v(o, r).reverse()
      }
      var n = this.regexp.exec(e);
      if (!n) return null;
      t = t || {};
      var o, i, a, u = this.parameters(),
        l = u.length,
        s = this.segments.length - 1,
        c = {};
      if (s !== n.length - 1) throw new Error("Unbalanced capture group in route '" + this.source + "'");
      var f, p;
      for (o = 0; s > o; o++) {
        for (a = u[o], f = this.params[a], p = n[o + 1], i = 0; i < f.replace.length; i++) f.replace[i].from === p && (p = f.replace[i].to);
        p && f.array === !0 && (p = r(p)), N(p) && (p = f.type.decode(p)), c[a] = f.value(p)
      }
      for (; l > o; o++) {
        for (a = u[o], c[a] = this.params[a].value(t[a]), f = this.params[a], p = t[a], i = 0; i < f.replace.length; i++) f.replace[i].from === p && (p = f.replace[i].to);
        N(p) && (p = f.type.decode(p)), c[a] = f.value(p)
      }
      return c
    }, $.prototype.parameters = function(e) {
      return N(e) ? this.params[e] || null : this.$$paramNames
    }, $.prototype.validates = function(e) {
      return this.params.$$validates(e)
    }, $.prototype.format = function(e) {
      function t(e) {
        return encodeURIComponent(e).replace(/-/g, function(e) {
          return "%5C%" + e.charCodeAt(0).toString(16).toUpperCase()
        })
      }
      e = e || {};
      var r = this.segments,
        n = this.parameters(),
        o = this.params;
      if (!this.validates(e)) return null;
      var i, a = !1,
        u = r.length - 1,
        l = n.length,
        s = r[0];
      for (i = 0; l > i; i++) {
        var c = u > i,
          f = n[i],
          p = o[f],
          h = p.value(e[f]),
          m = p.isOptional && p.type.equals(p.value(), h),
          d = !!m && p.squash,
          $ = p.type.encode(h);
        if (c) {
          var g = r[i + 1],
            y = i + 1 === u;
          if (d === !1) null != $ && (s += T($) ? v($, t).join("-") : encodeURIComponent($)), s += g;
          else if (d === !0) {
            var w = s.match(/\/$/) ? /\/?(.*)/ : /(.*)/;
            s += g.match(w)[1]
          } else D(d) && (s += d + g);
          y && p.squash === !0 && "/" === s.slice(-1) && (s = s.slice(0, -1))
        } else {
          if (null == $ || m && d !== !1) continue;
          if (T($) || ($ = [$]), 0 === $.length) continue;
          $ = v($, encodeURIComponent).join("&" + f + "="), s += (a ? "&" : "?") + (f + "=" + $), a = !0
        }
      }
      return s
    }, g.prototype.is = function(e, t) {
      return !0
    }, g.prototype.encode = function(e, t) {
      return e
    }, g.prototype.decode = function(e, t) {
      return e
    }, g.prototype.equals = function(e, t) {
      return e == t
    }, g.prototype.$subPattern = function() {
      var e = this.pattern.toString();
      return e.substr(1, e.length - 2)
    }, g.prototype.pattern = /.*/, g.prototype.toString = function() {
      return "{Type:" + this.name + "}"
    }, g.prototype.$normalize = function(e) {
      return this.is(e) ? e : this.decode(e)
    }, g.prototype.$asArray = function(e, t) {
      function n(e, t) {
        function n(e, t) {
          return function() {
            return e[t].apply(e, arguments)
          }
        }

        function o(e) {
          return T(e) ? e : N(e) ? [e] : []
        }

        function i(e) {
          switch (e.length) {
            case 0:
              return r;
            case 1:
              return "auto" === t ? e[0] : e;
            default:
              return e
          }
        }

        function a(e) {
          return !e
        }

        function u(e, t) {
          return function(r) {
            if (T(r) && 0 === r.length) return r;
            r = o(r);
            var n = v(r, e);
            return t === !0 ? 0 === h(n, a).length : i(n)
          }
        }

        function l(e) {
          return function(t, r) {
            var n = o(t),
              i = o(r);
            if (n.length !== i.length) return !1;
            for (var a = 0; a < n.length; a++)
              if (!e(n[a], i[a])) return !1;
            return !0
          }
        }
        this.encode = u(n(e, "encode")), this.decode = u(n(e, "decode")), this.is = u(n(e, "is"), !0), this.equals = l(n(e, "equals")), this.pattern = e.pattern, this.$normalize = u(n(e, "$normalize")), this.name = e.name, this.$arrayMode = t
      }
      if (!e) return this;
      if ("auto" === e && !t) throw new Error("'auto' array mode is for query parameters only");
      return new n(this, e)
    }, t.module("ui.router.util").provider("$urlMatcherFactory", y), t.module("ui.router.util").run(["$urlMatcherFactory", function(e) {}]), w.$inject = ["$locationProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.router").provider("$urlRouter", w), b.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider"], t.module("ui.router.state").factory("$stateParams", function() {
      return {}
    }).provider("$state", b), k.$inject = [], t.module("ui.router.state").provider("$view", k), t.module("ui.router.state").provider("$uiViewScroll", S);
    var _ = t.version.major,
      Y = t.version.minor;
    C.$inject = ["$state", "$injector", "$uiViewScroll", "$interpolate"], E.$inject = ["$compile", "$controller", "$state", "$interpolate"], t.module("ui.router.state").directive("uiView", C), t.module("ui.router.state").directive("uiView", E), q.$inject = ["$state", "$timeout"], R.$inject = ["$state", "$timeout"], F.$inject = ["$state", "$stateParams", "$interpolate"], t.module("ui.router.state").directive("uiSref", q).directive("uiSrefActive", F).directive("uiSrefActiveEq", F).directive("uiState", R), U.$inject = ["$state"], V.$inject = ["$state"], t.module("ui.router.state").filter("isState", U).filter("includedByState", V)
  }(window, window.angular);
var app = angular.module("cookingConnect");
app.factory("searchFactory", ["$http", function(e) {
  var t = "http://recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3",
    r = {};
  return r.getRecipe = function() {
    return e.get(t)
  }, r
}]);
var app = angular.module("cookingConnect").factory("postRecipe", ["$http", "$state", function(e, t) {
    var r = function(r) {
      return e.post("/users", r).then(function(e) {
        t.go("userhome")
      })
    };
    return {
      registerUser: r
    }
  }]),
  app = angular.module("cookingConnect");
app.factory("storeRecipeFactory", function() {
  function e(e) {
    r.push(e)
  }

  function t() {
    return r
  }
  var r = [];
  return {
    saveObject: e,
    returnObject: t
  }
});
