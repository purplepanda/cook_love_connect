function previewFile(e){if(e.files&&e.files[0]){var t=new FileReader;t.onload=function(e){$("#blah").attr("src",e.target.result).width(150).height(200)},t.readAsDataURL(e.files[0])}}var app=angular.module("cookingConnect");app.controller("cookbookCtrl",function(e,t){e.title="The ... Cookbook",t({method:"GET",dataType:"jsonp",crossDomain:!0,url:"http://food2fork.com/api/search?key=fc28481c5019cd053fe8ad5794e34d40&q=shredded%20chicken"}).then(function(e){},function(e){}),t.get("../mock/recipeObjects.json").success(function(t){e.recipes=t}),t.get("../mock/cookbookObjects.json").success(function(t){e.cookbooks=t})});var app=angular.module("cookingConnect");app.controller("landingCtrl",function(e){e.title="Welcome to Cook Love Connect!",e.loginTemp=function(){$("#login").show(),$("#loginButton").hide(),$("#signup").hide()},e.regTemp=function(){$("#signup").show(),$("#signupButton").hide(),$("#login").hide()}});var app=angular.module("cookingConnect");app.controller("userhomeCtrl",function(e){e.title="My Kitchen"});var app=angular.module("cookingConnect");app.directive("recipeCard",function(){return{restrict:"E",replace:!0,templateUrl:"partials/recipeCard.html"}}),"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(e,t,r){"use strict";function n(e,t){return L(new(L(function(){},{prototype:e})),t)}function a(e){return B(arguments,function(t){t!==e&&B(t,function(t,r){e.hasOwnProperty(r)||(e[r]=t)})}),e}function i(e,t){var r=[];for(var n in e.path){if(e.path[n]!==t.path[n])break;r.push(e.path[n])}return r}function o(e){if(Object.keys)return Object.keys(e);var t=[];return B(e,function(e,r){t.push(r)}),t}function u(e,t){if(Array.prototype.indexOf)return e.indexOf(t,Number(arguments[2])||0);var r=e.length>>>0,n=Number(arguments[2])||0;for(n=0>n?Math.ceil(n):Math.floor(n),0>n&&(n+=r);r>n;n++)if(n in e&&e[n]===t)return n;return-1}function l(e,t,r,n){var a,l=i(r,n),s={},c=[];for(var f in l)if(l[f]&&l[f].params&&(a=o(l[f].params),a.length))for(var p in a)u(c,a[p])>=0||(c.push(a[p]),s[a[p]]=e[a[p]]);return L({},s,t)}function s(e,t,r){if(!r){r=[];for(var n in e)r.push(n)}for(var a=0;a<r.length;a++){var i=r[a];if(e[i]!=t[i])return!1}return!0}function c(e,t){var r={};return B(e,function(e){r[e]=t[e]}),r}function f(e){var t={},r=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return B(r,function(r){r in e&&(t[r]=e[r])}),t}function p(e){var t={},r=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var n in e)-1==u(r,n)&&(t[n]=e[n]);return t}function h(e,t){var r=z(e),n=r?[]:{};return B(e,function(e,a){t(e,a)&&(n[r?n.length:a]=e)}),n}function v(e,t){var r=z(e)?[]:{};return B(e,function(e,n){r[n]=t(e,n)}),r}function $(e,t){var n=1,i=2,l={},s=[],c=l,f=L(e.when(l),{$$promises:l,$$values:l});this.study=function(l){function h(e,r){if(g[r]!==i){if(m.push(r),g[r]===n)throw m.splice(0,u(m,r)),new Error("Cyclic dependency: "+m.join(" -> "));if(g[r]=n,N(e))d.push(r,[function(){return t.get(e)}],s);else{var a=t.annotate(e);B(a,function(e){e!==r&&l.hasOwnProperty(e)&&h(l[e],e)}),d.push(r,e,a)}m.pop(),g[r]=i}}function v(e){return T(e)&&e.then&&e.$$promises}if(!T(l))throw new Error("'invocables' must be an object");var $=o(l||{}),d=[],m=[],g={};return B(l,h),l=m=g=null,function(n,i,o){function u(){--w||(b||a(y,i.$$values),m.$$values=y,m.$$promises=m.$$promises||!0,delete m.$$inheritedValues,h.resolve(y))}function l(e){m.$$failure=e,h.reject(e)}function s(r,a,i){function s(e){f.reject(e),l(e)}function c(){if(!U(m.$$failure))try{f.resolve(t.invoke(a,o,y)),f.promise.then(function(e){y[r]=e,u()},s)}catch(e){s(e)}}var f=e.defer(),p=0;B(i,function(e){g.hasOwnProperty(e)&&!n.hasOwnProperty(e)&&(p++,g[e].then(function(t){y[e]=t,--p||c()},s))}),p||c(),g[r]=f.promise}if(v(n)&&o===r&&(o=i,i=n,n=null),n){if(!T(n))throw new Error("'locals' must be an object")}else n=c;if(i){if(!v(i))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else i=f;var h=e.defer(),m=h.promise,g=m.$$promises={},y=L({},n),w=1+d.length/3,b=!1;if(U(i.$$failure))return l(i.$$failure),m;i.$$inheritedValues&&a(y,p(i.$$inheritedValues,$)),L(g,i.$$promises),i.$$values?(b=a(y,p(i.$$values,$)),m.$$inheritedValues=p(i.$$values,$),u()):(i.$$inheritedValues&&(m.$$inheritedValues=p(i.$$inheritedValues,$)),i.then(u,l));for(var S=0,k=d.length;k>S;S+=3)n.hasOwnProperty(d[S])?u():s(d[S],d[S+1],d[S+2]);return m}},this.resolve=function(e,t,r,n){return this.study(e)(t,r,n)}}function d(e,t,r){this.fromConfig=function(e,t,r){return U(e.template)?this.fromString(e.template,t):U(e.templateUrl)?this.fromUrl(e.templateUrl,t):U(e.templateProvider)?this.fromProvider(e.templateProvider,t,r):null},this.fromString=function(e,t){return F(e)?e(t):e},this.fromUrl=function(r,n){return F(r)&&(r=r(n)),null==r?null:e.get(r,{cache:t,headers:{Accept:"text/html"}}).then(function(e){return e.data})},this.fromProvider=function(e,t,n){return r.invoke(e,null,n||{params:t})}}function m(e,t,a){function i(t,r,n,a){if(d.push(t),v[t])return v[t];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(t))throw new Error("Invalid parameter name '"+t+"' in pattern '"+e+"'");if($[t])throw new Error("Duplicate parameter name '"+t+"' in pattern '"+e+"'");return $[t]=new _.Param(t,r,n,a),$[t]}function o(e,t,r,n){var a=["",""],i=e.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!t)return i;switch(r){case!1:a=["(",")"+(n?"?":"")];break;case!0:i=i.replace(/\/$/,""),a=["(?:/(",")|/)?"];break;default:a=["("+r+"|",")?"]}return i+a[0]+t+a[1]}function u(a,i){var o,u,l,s,c;return o=a[2]||a[3],c=t.params[o],l=e.substring(p,a.index),u=i?a[4]:a[4]||("*"==a[1]?".*":null),u&&(s=_.type(u)||n(_.type("string"),{pattern:new RegExp(u,t.caseInsensitive?"i":r)})),{id:o,regexp:u,segment:l,type:s,cfg:c}}t=L({params:{}},T(t)?t:{});var l,s=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,c=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f="^",p=0,h=this.segments=[],v=a?a.params:{},$=this.params=a?a.params.$$new():new _.ParamSet,d=[];this.source=e;for(var m,g,y;(l=s.exec(e))&&(m=u(l,!1),!(m.segment.indexOf("?")>=0));)g=i(m.id,m.type,m.cfg,"path"),f+=o(m.segment,g.type.pattern.source,g.squash,g.isOptional),h.push(m.segment),p=s.lastIndex;y=e.substring(p);var w=y.indexOf("?");if(w>=0){var b=this.sourceSearch=y.substring(w);if(y=y.substring(0,w),this.sourcePath=e.substring(0,p+w),b.length>0)for(p=0;l=c.exec(b);)m=u(l,!0),g=i(m.id,m.type,m.cfg,"search"),p=s.lastIndex}else this.sourcePath=e,this.sourceSearch="";f+=o(y)+(t.strict===!1?"/?":"")+"$",h.push(y),this.regexp=new RegExp(f,t.caseInsensitive?"i":r),this.prefix=h[0],this.$$paramNames=d}function g(e){L(this,e)}function y(){function e(e){return null!=e?e.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):e}function a(e){return null!=e?e.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):e}function i(){return{strict:$,caseInsensitive:p}}function l(e){return F(e)||z(e)&&F(e[e.length-1])}function s(){for(;S.length;){var e=S.shift();if(e.pattern)throw new Error("You cannot override a type's .pattern at runtime.");t.extend(w[e.name],f.invoke(e.def))}}function c(e){L(this,e||{})}_=this;var f,p=!1,$=!0,d=!1,w={},b=!0,S=[],k={string:{encode:e,decode:a,is:function(e){return null==e||!U(e)||"string"==typeof e},pattern:/[^\/]*/},int:{encode:e,decode:function(e){return parseInt(e,10)},is:function(e){return U(e)&&this.decode(e.toString())===e},pattern:/\d+/},bool:{encode:function(e){return e?1:0},decode:function(e){return 0!==parseInt(e,10)},is:function(e){return e===!0||e===!1},pattern:/0|1/},date:{encode:function(e){return this.is(e)?[e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2)].join("-"):r},decode:function(e){if(this.is(e))return e;var t=this.capture.exec(e);return t?new Date(t[1],t[2]-1,t[3]):r},is:function(e){return e instanceof Date&&!isNaN(e.valueOf())},equals:function(e,t){return this.is(e)&&this.is(t)&&e.toISOString()===t.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:t.toJson,decode:t.fromJson,is:t.isObject,equals:t.equals,pattern:/[^\/]*/},any:{encode:t.identity,decode:t.identity,equals:t.equals,pattern:/.*/}};y.$$getDefaultValue=function(e){if(!l(e.value))return e.value;if(!f)throw new Error("Injectable functions cannot be called at configuration time");return f.invoke(e.value)},this.caseInsensitive=function(e){return U(e)&&(p=e),p},this.strictMode=function(e){return U(e)&&($=e),$},this.defaultSquashPolicy=function(e){if(!U(e))return d;if(e!==!0&&e!==!1&&!N(e))throw new Error("Invalid squash policy: "+e+". Valid policies: false, true, arbitrary-string");return d=e,e},this.compile=function(e,t){return new m(e,L(i(),t))},this.isMatcher=function(e){if(!T(e))return!1;var t=!0;return B(m.prototype,function(r,n){F(r)&&(t=t&&U(e[n])&&F(e[n]))}),t},this.type=function(e,t,r){if(!U(t))return w[e];if(w.hasOwnProperty(e))throw new Error("A type named '"+e+"' has already been defined.");return w[e]=new g(L({name:e},t)),r&&(S.push({name:e,def:r}),b||s()),this},B(k,function(e,t){w[t]=new g(L({name:t},e))}),w=n(w,{}),this.$get=["$injector",function(e){return f=e,b=!1,s(),B(k,function(e,t){w[t]||(w[t]=new g(e))}),this}],this.Param=function(e,n,a,i){function s(e){var t=T(e)?o(e):[],r=-1===u(t,"value")&&-1===u(t,"type")&&-1===u(t,"squash")&&-1===u(t,"array");return r&&(e={value:e}),e.$$fn=l(e.value)?e.value:function(){return e.value},e}function c(r,n,a){if(r.type&&n)throw new Error("Param '"+e+"' has two type configurations.");return n?n:r.type?t.isString(r.type)?w[r.type]:r.type instanceof g?r.type:new g(r.type):"config"===a?w.any:w.string}function p(){var t={array:"search"===i&&"auto"},r=e.match(/\[\]$/)?{array:!0}:{};return L(t,r,a).array}function $(e,t){var r=e.squash;if(!t||r===!1)return!1;if(!U(r)||null==r)return d;if(r===!0||N(r))return r;throw new Error("Invalid squash policy: '"+r+"'. Valid policies: false, true, or arbitrary string")}function m(e,t,n,a){var i,o,l=[{from:"",to:n||t?r:""},{from:null,to:n||t?r:""}];return i=z(e.replace)?e.replace:[],N(a)&&i.push({from:a,to:r}),o=v(i,function(e){return e.from}),h(l,function(e){return-1===u(o,e.from)}).concat(i)}function y(){if(!f)throw new Error("Injectable functions cannot be called at configuration time");var e=f.invoke(a.$$fn);if(null!==e&&e!==r&&!k.type.is(e))throw new Error("Default value ("+e+") for parameter '"+k.id+"' is not an instance of Type ("+k.type.name+")");return e}function b(e){function t(e){return function(t){return t.from===e}}function r(e){var r=v(h(k.replace,t(e)),function(e){return e.to});return r.length?r[0]:e}return e=r(e),U(e)?k.type.$normalize(e):y()}function S(){return"{Param:"+e+" "+n+" squash: '"+j+"' optional: "+P+"}"}var k=this;a=s(a),n=c(a,n,i);var E=p();n=E?n.$asArray(E,"search"===i):n,"string"!==n.name||E||"path"!==i||a.value!==r||(a.value="");var P=a.value!==r,j=$(a,P),x=m(a,E,P,j);L(this,{id:e,type:n,location:i,array:E,squash:j,replace:x,isOptional:P,value:b,dynamic:r,config:a,toString:S})},c.prototype={$$new:function(){return n(this,L(new c,{$$parent:this}))},$$keys:function(){for(var e=[],t=[],r=this,n=o(c.prototype);r;)t.push(r),r=r.$$parent;return t.reverse(),B(t,function(t){B(o(t),function(t){-1===u(e,t)&&-1===u(n,t)&&e.push(t)})}),e},$$values:function(e){var t={},r=this;return B(r.$$keys(),function(n){t[n]=r[n].value(e&&e[n])}),t},$$equals:function(e,t){var r=!0,n=this;return B(n.$$keys(),function(a){var i=e&&e[a],o=t&&t[a];n[a].type.equals(i,o)||(r=!1)}),r},$$validates:function(e){var n,a,i,o,u,l=this.$$keys();for(n=0;n<l.length&&(a=this[l[n]],i=e[l[n]],i!==r&&null!==i||!a.isOptional);n++){if(o=a.type.$normalize(i),!a.type.is(o))return!1;if(u=a.type.encode(o),t.isString(u)&&!a.type.pattern.exec(u))return!1}return!0},$$parent:r},this.ParamSet=c}function w(e,n){function a(e){var t=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);return null!=t?t[1].replace(/\\(.)/g,"$1"):""}function i(e,t){return e.replace(/\$(\$|\d{1,2})/,function(e,r){return t["$"===r?0:Number(r)]})}function o(e,t,r){if(!r)return!1;var n=e.invoke(t,t,{$match:r});return!U(n)||n}function u(n,a,i,o,u){function p(e,t,r){return"/"===d?e:t?d.slice(0,-1)+e:r?d.slice(1)+e:e}function h(e){function t(e){var t=e(i,n);return!!t&&(N(t)&&n.replace().url(t),!0)}if(!e||!e.defaultPrevented){$&&n.url()===$,$=r;var a,o=s.length;for(a=0;o>a;a++)if(t(s[a]))return;c&&t(c)}}function v(){return l=l||a.$on("$locationChangeSuccess",h)}var $,d=o.baseHref(),m=n.url();return f||v(),{sync:function(){h()},listen:function(){return v()},update:function(e){return e?void(m=n.url()):void(n.url()!==m&&(n.url(m),n.replace()))},push:function(e,t,a){var i=e.format(t||{});null!==i&&t&&t["#"]&&(i+="#"+t["#"]),n.url(i),$=a&&a.$$avoidResync?n.url():r,a&&a.replace&&n.replace()},href:function(r,a,i){if(!r.validates(a))return null;var o=e.html5Mode();t.isObject(o)&&(o=o.enabled),o=o&&u.history;var l=r.format(a);if(i=i||{},o||null===l||(l="#"+e.hashPrefix()+l),null!==l&&a&&a["#"]&&(l+="#"+a["#"]),l=p(l,o,i.absolute),!i.absolute||!l)return l;var s=!o&&l?"/":"",c=n.port();return c=80===c||443===c?"":":"+c,[n.protocol(),"://",n.host(),c,s,l].join("")}}}var l,s=[],c=null,f=!1;this.rule=function(e){if(!F(e))throw new Error("'rule' must be a function");return s.push(e),this},this.otherwise=function(e){if(N(e)){var t=e;e=function(){return t}}else if(!F(e))throw new Error("'rule' must be a function");return c=e,this},this.when=function(e,t){var r,u=N(t);if(N(e)&&(e=n.compile(e)),!u&&!F(t)&&!z(t))throw new Error("invalid 'handler' in when()");var l={matcher:function(e,t){return u&&(r=n.compile(t),t=["$match",function(e){return r.format(e)}]),L(function(r,n){return o(r,t,e.exec(n.path(),n.search()))},{prefix:N(e.prefix)?e.prefix:""})},regex:function(e,t){if(e.global||e.sticky)throw new Error("when() RegExp must not be global or sticky");return u&&(r=t,t=["$match",function(e){return i(r,e)}]),L(function(r,n){return o(r,t,e.exec(n.path()))},{prefix:a(e)})}},s={matcher:n.isMatcher(e),regex:e instanceof RegExp};for(var c in s)if(s[c])return this.rule(l[c](e,t));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(e){e===r&&(e=!0),f=e},this.$get=u,u.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function b(e,a){function i(e){return 0===e.indexOf(".")||0===e.indexOf("^")}function p(e,t){if(!e)return r;var n=N(e),a=n?e:e.name,o=i(a);if(o){if(!t)throw new Error("No reference point given for path '"+a+"'");t=p(t);for(var u=a.split("."),l=0,s=u.length,c=t;s>l;l++)if(""!==u[l]||0!==l){if("^"!==u[l])break;if(!c.parent)throw new Error("Path '"+a+"' not valid for state '"+t.name+"'");c=c.parent}else c=t;u=u.slice(l).join("."),a=c.name+(c.name&&u?".":"")+u}var f=P[a];return!f||!n&&(n||f!==e&&f.self!==e)?r:f}function h(e,t){j[e]||(j[e]=[]),j[e].push(t)}function $(e){for(var t=j[e]||[];t.length;)d(t.shift())}function d(t){t=n(t,{self:t,resolve:t.resolve||{},toString:function(){return this.name}});var r=t.name;if(!N(r)||r.indexOf("@")>=0)throw new Error("State must have a valid name");if(P.hasOwnProperty(r))throw new Error("State '"+r+"' is already defined");var a=-1!==r.indexOf(".")?r.substring(0,r.lastIndexOf(".")):N(t.parent)?t.parent:T(t.parent)&&N(t.parent.name)?t.parent.name:"";if(a&&!P[a])return h(a,t.self);for(var i in C)F(C[i])&&(t[i]=C[i](t,C.$delegates[i]));return P[r]=t,!t[x]&&t.url&&e.when(t.url,["$match","$stateParams",function(e,r){E.$current.navigable==t&&s(e,r)||E.transitionTo(t,e,{inherit:!0,location:!1})}]),$(r),t}function m(e){return e.indexOf("*")>-1}function g(e){for(var t=e.split("."),r=E.$current.name.split("."),n=0,a=t.length;a>n;n++)"*"===t[n]&&(r[n]="*");return"**"===t[0]&&(r=r.slice(u(r,t[1])),r.unshift("**")),"**"===t[t.length-1]&&(r.splice(u(r,t[t.length-2])+1,Number.MAX_VALUE),r.push("**")),t.length==r.length&&r.join("")===t.join("")}function y(e,t){return N(e)&&!U(t)?C[e]:F(t)&&N(e)?(C[e]&&!C.$delegates[e]&&(C.$delegates[e]=C[e]),C[e]=t,this):this}function w(e,t){return T(e)?t=e:t.name=e,d(t),this}function b(e,a,i,u,f,h,$,d,y){function w(t,r,n,i){var o=e.$broadcast("$stateNotFound",t,r,n);if(o.defaultPrevented)return $.update(),A;if(!o.retry)return null;if(i.$retry)return $.update(),O;var u=E.transition=a.when(o.retry);return u.then(function(){return u!==E.transition?j:(t.options.$retry=!0,E.transitionTo(t.to,t.toParams,t.options))},function(){return A}),$.update(),u}function b(e,r,n,o,l,s){function p(){var r=[];return B(e.views,function(n,a){var o=n.resolve&&n.resolve!==e.resolve?n.resolve:{};o.$template=[function(){return i.load(a,{view:n,locals:l.globals,params:h,notify:s.notify})||""}],r.push(f.resolve(o,l.globals,l.resolve,e).then(function(r){if(F(n.controllerProvider)||z(n.controllerProvider)){var i=t.extend({},o,l.globals);r.$$controller=u.invoke(n.controllerProvider,null,i)}else r.$$controller=n.controller;r.$$state=e,r.$$controllerAs=n.controllerAs,l[a]=r}))}),a.all(r).then(function(){return l.globals})}var h=n?r:c(e.params.$$keys(),r),v={$stateParams:h};l.resolve=f.resolve(e.resolve,v,l.resolve,e);var $=[l.resolve.then(function(e){l.globals=e})];return o&&$.push(o),a.all($).then(p).then(function(e){return l})}var j=a.reject(new Error("transition superseded")),C=a.reject(new Error("transition prevented")),A=a.reject(new Error("transition aborted")),O=a.reject(new Error("transition failed"));return k.locals={resolve:null,globals:{$stateParams:{}}},E={params:{},current:k.self,$current:k,transition:null},E.reload=function(e){return E.transitionTo(E.current,h,{reload:e||!0,inherit:!1,notify:!0})},E.go=function(e,t,r){return E.transitionTo(e,t,L({inherit:!0,relative:E.$current},r))},E.transitionTo=function(t,r,i){r=r||{},i=L({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},i||{});var o,s=E.$current,f=E.params,v=s.path,d=p(t,i.relative),m=r["#"];if(!U(d)){var g={to:t,toParams:r,options:i},y=w(g,s.self,f,i);if(y)return y;if(t=g.to,r=g.toParams,i=g.options,d=p(t,i.relative),!U(d)){if(!i.relative)throw new Error("No such state '"+t+"'");throw new Error("Could not resolve '"+t+"' from state '"+i.relative+"'")}}if(d[x])throw new Error("Cannot transition to abstract state '"+t+"'");if(i.inherit&&(r=l(h,r||{},E.$current,d)),!d.params.$$validates(r))return O;r=d.params.$$values(r),t=d;var P=t.path,A=0,q=P[A],I=k.locals,V=[];if(i.reload){if(N(i.reload)||T(i.reload)){if(T(i.reload)&&!i.reload.name)throw new Error("Invalid reload state object");var M=i.reload===!0?v[0]:p(i.reload);if(i.reload&&!M)throw new Error("No such reload state '"+(N(i.reload)?i.reload:i.reload.name)+"'");for(;q&&q===v[A]&&q!==M;)I=V[A]=q.locals,A++,q=P[A]}}else for(;q&&q===v[A]&&q.ownParams.$$equals(r,f);)I=V[A]=q.locals,A++,q=P[A];if(S(t,r,s,f,I,i))return m&&(r["#"]=m),E.params=r,K(E.params,h),K(c(t.params.$$keys(),h),t.locals.globals.$stateParams),i.location&&t.navigable&&t.navigable.url&&($.push(t.navigable.url,r,{$$avoidResync:!0,replace:"replace"===i.location}),$.update(!0)),E.transition=null,a.when(E.current);if(r=c(t.params.$$keys(),r||{}),m&&(r["#"]=m),i.notify&&e.$broadcast("$stateChangeStart",t.self,r,s.self,f,i).defaultPrevented)return e.$broadcast("$stateChangeCancel",t.self,r,s.self,f),null==E.transition&&$.update(),C;for(var R=a.when(I),D=A;D<P.length;D++,q=P[D])I=V[D]=n(I),R=b(q,r,q===t,R,I,i);var F=E.transition=R.then(function(){var n,a,o;if(E.transition!==F)return j;for(n=v.length-1;n>=A;n--)o=v[n],o.self.onExit&&u.invoke(o.self.onExit,o.self,o.locals.globals),o.locals=null;for(n=A;n<P.length;n++)a=P[n],a.locals=V[n],a.self.onEnter&&u.invoke(a.self.onEnter,a.self,a.locals.globals);return E.transition!==F?j:(E.$current=t,E.current=t.self,E.params=r,K(E.params,h),E.transition=null,i.location&&t.navigable&&$.push(t.navigable.url,t.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===i.location}),i.notify&&e.$broadcast("$stateChangeSuccess",t.self,r,s.self,f),$.update(!0),E.current)},function(n){return E.transition!==F?j:(E.transition=null,o=e.$broadcast("$stateChangeError",t.self,r,s.self,f,n),o.defaultPrevented||$.update(),a.reject(n))});return F},E.is=function(e,t,n){n=L({relative:E.$current},n||{});var a=p(e,n.relative);return U(a)?E.$current===a&&(!t||s(a.params.$$values(t),h)):r},E.includes=function(e,t,n){if(n=L({relative:E.$current},n||{}),N(e)&&m(e)){if(!g(e))return!1;e=E.$current.name}var a=p(e,n.relative);return U(a)?!!U(E.$current.includes[a.name])&&(!t||s(a.params.$$values(t),h,o(t))):r},E.href=function(e,t,n){n=L({lossy:!0,inherit:!0,absolute:!1,relative:E.$current},n||{});var a=p(e,n.relative);if(!U(a))return null;n.inherit&&(t=l(h,t||{},E.$current,a));var i=a&&n.lossy?a.navigable:a;return i&&i.url!==r&&null!==i.url?$.href(i.url,c(a.params.$$keys().concat("#"),t||{}),{absolute:n.absolute}):null},E.get=function(e,t){if(0===arguments.length)return v(o(P),function(e){return P[e].self});var r=p(e,t||E.$current);return r&&r.self?r.self:null},E}function S(e,t,r,n,a,i){function o(e,t,r){function n(t){return"search"!=e.params[t].location}var a=e.params.$$keys().filter(n),i=f.apply({},[e.params].concat(a)),o=new _.ParamSet(i);return o.$$equals(t,r)}return!(i.reload||e!==r||!(a===r.locals||e.self.reloadOnSearch===!1&&o(r,n,t)))||void 0}var k,E,P={},j={},x="abstract",C={parent:function(e){if(U(e.parent)&&e.parent)return p(e.parent);var t=/^(.+)\.[^.]+$/.exec(e.name);return t?p(t[1]):k},data:function(e){return e.parent&&e.parent.data&&(e.data=e.self.data=n(e.parent.data,e.data)),e.data},url:function(e){var t=e.url,r={params:e.params||{}};if(N(t))return"^"==t.charAt(0)?a.compile(t.substring(1),r):(e.parent.navigable||k).url.concat(t,r);if(!t||a.isMatcher(t))return t;throw new Error("Invalid url '"+t+"' in state '"+e+"'")},navigable:function(e){return e.url?e:e.parent?e.parent.navigable:null},ownParams:function(e){var t=e.url&&e.url.params||new _.ParamSet;return B(e.params||{},function(e,r){t[r]||(t[r]=new _.Param(r,null,e,"config"))}),t},params:function(e){var t=f(e.ownParams,e.ownParams.$$keys());return e.parent&&e.parent.params?L(e.parent.params.$$new(),t):new _.ParamSet},views:function(e){var t={};return B(U(e.views)?e.views:{"":e},function(r,n){n.indexOf("@")<0&&(n+="@"+e.parent.name),t[n]=r}),t},path:function(e){return e.parent?e.parent.path.concat(e):[]},includes:function(e){var t=e.parent?L({},e.parent.includes):{};return t[e.name]=!0,t},$delegates:{}};k=d({name:"",url:"^",views:null,abstract:!0}),k.navigable=null,this.decorator=y,this.state=w,this.$get=b,b.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function S(){function e(e,t){return{load:function(e,r){var n,a={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return r=L(a,r),r.view&&(n=t.fromConfig(r.view,r.params,r.locals)),n}}}this.$get=e,e.$inject=["$rootScope","$templateFactory"]}function k(){var e=!1;this.useAnchorScroll=function(){e=!0},this.$get=["$anchorScroll","$timeout",function(t,r){return e?t:function(e){return r(function(){e[0].scrollIntoView()},0,!1)}}]}function E(e,r,n,a){function i(){return r.has?function(e){return r.has(e)?r.get(e):null}:function(e){try{return r.get(e)}catch(e){return null}}}function o(e,r){function n(e){return 1===G&&Y>=4?!!s.enabled(e):1===G&&Y>=2?!!s.enabled():!!l}var a={enter:function(e,t,r){t.after(e),r()},leave:function(e,t){e.remove(),t()}};if(e.noanimation)return a;if(s)return{enter:function(e,r,i){n(e)?t.version.minor>2?s.enter(e,null,r).then(i):s.enter(e,null,r,i):a.enter(e,r,i)},leave:function(e,r){n(e)?t.version.minor>2?s.leave(e).then(r):s.leave(e,r):a.leave(e,r)}};if(l){var i=l&&l(r,e);return{enter:function(e,t,r){i.enter(e,null,t),r()},leave:function(e,t){i.leave(e),t()}}}return a}var u=i(),l=u("$animator"),s=u("$animate"),c={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(r,i,u){return function(r,i,l){function s(){function e(){t&&t.remove(),r&&r.$destroy()}var t=f,r=h;r&&(r._willBeDestroyed=!0),p?(m.leave(p,function(){e(),f=null}),f=p):(e(),f=null),p=null,h=null}function c(o){var c,f=j(r,l,i,a),g=f&&e.$current&&e.$current.locals[f];if((o||g!==v)&&!r._willBeDestroyed){c=r.$new(),v=e.$current.locals[f],c.$emit("$viewContentLoading",f);var y=u(c,function(e){m.enter(e,i,function(){h&&h.$emit("$viewContentAnimationEnded"),(t.isDefined(d)&&!d||r.$eval(d))&&n(e)}),s()});p=y,h=c,h.$emit("$viewContentLoaded",f),h.$eval($)}}var f,p,h,v,$=l.onload||"",d=l.autoscroll,m=o(l,r);r.$on("$stateChangeSuccess",function(){c(!1)}),c(!0)}}};return c}function P(e,t,r,n){return{restrict:"ECA",priority:-400,compile:function(a){var i=a.html();return function(a,o,u){var l=r.$current,s=j(a,u,o,n),c=l&&l.locals[s];if(c){o.data("$uiView",{name:s,state:c.$$state}),o.html(c.$template?c.$template:i);var f=e(o.contents());if(c.$$controller){c.$scope=a,c.$element=o;var p=t(c.$$controller,c);c.$$controllerAs&&(a[c.$$controllerAs]=p),o.data("$ngControllerController",p),o.children().data("$ngControllerController",p)}f(a)}}}}}function j(e,t,r,n){var a=n(t.uiView||t.name||"")(e),i=r.inheritedData("$uiView");return a.indexOf("@")>=0?a:a+"@"+(i?i.state.name:"")}function x(e,t){var r,n=e.match(/^\s*({[^}]*})\s*$/);if(n&&(e=t+"("+n[1]+")"),r=e.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!r||4!==r.length)throw new Error("Invalid state ref '"+e+"'");return{state:r[1],paramExpr:r[3]||null}}function C(e){var t=e.parent().inheritedData("$uiView");return t&&t.state&&t.state.name?t.state:void 0}function A(e){var t="[object SVGAnimatedString]"===Object.prototype.toString.call(e.prop("href")),r="FORM"===e[0].nodeName;return{attr:r?"action":t?"xlink:href":"href",isAnchor:"A"===e.prop("tagName").toUpperCase(),clickable:!r}}function O(e,t,r,n,a){return function(i){var o=i.which||i.button,u=a();if(!(o>1||i.ctrlKey||i.metaKey||i.shiftKey||e.attr("target"))){var l=r(function(){t.go(u.state,u.params,u.options)});i.preventDefault();var s=n.isAnchor&&!u.href?1:0;i.preventDefault=function(){s--<=0&&r.cancel(l)}}}}function q(e,t){return{relative:C(e)||t.$current,inherit:!0}}function I(e,r){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,a,i,o){var u=x(i.uiSref,e.current.name),l={state:u.state,href:null,params:null},s=A(a),c=o[1]||o[0];l.options=L(q(a,e),i.uiSrefOpts?n.$eval(i.uiSrefOpts):{});var f=function(r){r&&(l.params=t.copy(r)),l.href=e.href(u.state,l.params,l.options),c&&c.$$addStateInfo(u.state,l.params),null!==l.href&&i.$set(s.attr,l.href)};u.paramExpr&&(n.$watch(u.paramExpr,function(e){e!==l.params&&f(e)},!0),l.params=t.copy(n.$eval(u.paramExpr))),f(),s.clickable&&a.bind("click",O(a,e,r,s,function(){return l}))}}}function V(e,t){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(r,n,a,i){function o(t){f.state=t[0],f.params=t[1],f.options=t[2],f.href=e.href(f.state,f.params,f.options),l&&l.$$addStateInfo(f.state,f.params),f.href&&a.$set(u.attr,f.href)}var u=A(n),l=i[1]||i[0],s=[a.uiState,a.uiStateParams||null,a.uiStateOpts||null],c="["+s.map(function(e){return e||"null"}).join(", ")+"]",f={state:null,params:null,options:null,href:null};r.$watch(c,o,!0),o(r.$eval(c)),u.clickable&&n.bind("click",O(n,e,t,u,function(){return f}))}}}function M(e,t,r){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(t,n,a,i){function o(t,r,a){var i=e.get(t,C(n)),o=u(t,r);$.push({state:i||{name:t},params:r,hash:o}),d[o]=a}function u(e,r){if(!N(e))throw new Error("state should be a string");return T(r)?e+J(r):(r=t.$eval(r),T(r)?e+J(r):e)}function l(){for(var e=0;e<$.length;e++)f($[e].state,$[e].params)?s(n,d[$[e].hash]):c(n,d[$[e].hash]),p($[e].state,$[e].params)?s(n,h):c(n,h)}function s(e,t){i(function(){e.addClass(t)})}function c(e,t){e.removeClass(t)}function f(t,r){return e.includes(t.name,r)}function p(t,r){return e.is(t.name,r)}var h,v,$=[],d={};h=r(a.uiSrefActiveEq||"",!1)(t);try{v=t.$eval(a.uiSrefActive)}catch(e){}v=v||r(a.uiSrefActive||"",!1)(t),T(v)&&B(v,function(r,n){if(N(r)){var a=x(r,e.current.name);o(a.state,t.$eval(a.paramExpr),n)}}),this.$$addStateInfo=function(e,t){T(v)&&$.length>0||(o(e,t,v),l())},t.$on("$stateChangeSuccess",l),l()}]}}function R(e){var t=function(t,r){return e.is(t,r)};return t.$stateful=!0,t}function D(e){var t=function(t,r,n){return e.includes(t,r,n)};return t.$stateful=!0,t}var U=t.isDefined,F=t.isFunction,N=t.isString,T=t.isObject,z=t.isArray,B=t.forEach,L=t.extend,K=t.copy,J=t.toJson;t.module("ui.router.util",["ng"]),t.module("ui.router.router",["ui.router.util"]),t.module("ui.router.state",["ui.router.router","ui.router.util"]),t.module("ui.router",["ui.router.state"]),t.module("ui.router.compat",["ui.router"]),$.$inject=["$q","$injector"],t.module("ui.router.util").service("$resolve",$),d.$inject=["$http","$templateCache","$injector"],t.module("ui.router.util").service("$templateFactory",d);var _;m.prototype.concat=function(e,t){var r={caseInsensitive:_.caseInsensitive(),strict:_.strictMode(),squash:_.defaultSquashPolicy()};return new m(this.sourcePath+e+this.sourceSearch,L(r,t),this)},m.prototype.toString=function(){return this.source},m.prototype.exec=function(e,t){function r(e){function t(e){return e.split("").reverse().join("")}function r(e){return e.replace(/\\-/g,"-")}var n=t(e).split(/-(?!\\)/),a=v(n,t);return v(a,r).reverse()}var n=this.regexp.exec(e);if(!n)return null;t=t||{};var a,i,o,u=this.parameters(),l=u.length,s=this.segments.length-1,c={};if(s!==n.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var f,p;for(a=0;s>a;a++){for(o=u[a],f=this.params[o],p=n[a+1],i=0;i<f.replace.length;i++)f.replace[i].from===p&&(p=f.replace[i].to);p&&f.array===!0&&(p=r(p)),U(p)&&(p=f.type.decode(p)),c[o]=f.value(p)}for(;l>a;a++){for(o=u[a],c[o]=this.params[o].value(t[o]),f=this.params[o],p=t[o],i=0;i<f.replace.length;i++)f.replace[i].from===p&&(p=f.replace[i].to);U(p)&&(p=f.type.decode(p)),c[o]=f.value(p)}return c},m.prototype.parameters=function(e){return U(e)?this.params[e]||null:this.$$paramNames},m.prototype.validates=function(e){return this.params.$$validates(e)},m.prototype.format=function(e){function t(e){return encodeURIComponent(e).replace(/-/g,function(e){return"%5C%"+e.charCodeAt(0).toString(16).toUpperCase()})}e=e||{};var r=this.segments,n=this.parameters(),a=this.params;if(!this.validates(e))return null;var i,o=!1,u=r.length-1,l=n.length,s=r[0];for(i=0;l>i;i++){var c=u>i,f=n[i],p=a[f],h=p.value(e[f]),$=p.isOptional&&p.type.equals(p.value(),h),d=!!$&&p.squash,m=p.type.encode(h);if(c){var g=r[i+1],y=i+1===u;if(d===!1)null!=m&&(s+=z(m)?v(m,t).join("-"):encodeURIComponent(m)),s+=g;else if(d===!0){var w=s.match(/\/$/)?/\/?(.*)/:/(.*)/;s+=g.match(w)[1]}else N(d)&&(s+=d+g);y&&p.squash===!0&&"/"===s.slice(-1)&&(s=s.slice(0,-1))}else{if(null==m||$&&d!==!1)continue;if(z(m)||(m=[m]),0===m.length)continue;m=v(m,encodeURIComponent).join("&"+f+"="),s+=(o?"&":"?")+(f+"="+m),o=!0}}return s},g.prototype.is=function(e,t){return!0},g.prototype.encode=function(e,t){return e},g.prototype.decode=function(e,t){return e},g.prototype.equals=function(e,t){return e==t},g.prototype.$subPattern=function(){var e=this.pattern.toString();return e.substr(1,e.length-2)},g.prototype.pattern=/.*/,g.prototype.toString=function(){return"{Type:"+this.name+"}"},g.prototype.$normalize=function(e){return this.is(e)?e:this.decode(e)},g.prototype.$asArray=function(e,t){function n(e,t){function n(e,t){return function(){return e[t].apply(e,arguments)}}function a(e){return z(e)?e:U(e)?[e]:[]}function i(e){switch(e.length){case 0:return r;case 1:return"auto"===t?e[0]:e;default:return e}}function o(e){return!e}function u(e,t){return function(r){if(z(r)&&0===r.length)return r;r=a(r);var n=v(r,e);return t===!0?0===h(n,o).length:i(n)}}function l(e){return function(t,r){var n=a(t),i=a(r);if(n.length!==i.length)return!1;for(var o=0;o<n.length;o++)if(!e(n[o],i[o]))return!1;return!0}}this.encode=u(n(e,"encode")),this.decode=u(n(e,"decode")),this.is=u(n(e,"is"),!0),
this.equals=l(n(e,"equals")),this.pattern=e.pattern,this.$normalize=u(n(e,"$normalize")),this.name=e.name,this.$arrayMode=t}if(!e)return this;if("auto"===e&&!t)throw new Error("'auto' array mode is for query parameters only");return new n(this,e)},t.module("ui.router.util").provider("$urlMatcherFactory",y),t.module("ui.router.util").run(["$urlMatcherFactory",function(e){}]),w.$inject=["$locationProvider","$urlMatcherFactoryProvider"],t.module("ui.router.router").provider("$urlRouter",w),b.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],t.module("ui.router.state").factory("$stateParams",function(){return{}}).provider("$state",b),S.$inject=[],t.module("ui.router.state").provider("$view",S),t.module("ui.router.state").provider("$uiViewScroll",k);var G=t.version.major,Y=t.version.minor;E.$inject=["$state","$injector","$uiViewScroll","$interpolate"],P.$inject=["$compile","$controller","$state","$interpolate"],t.module("ui.router.state").directive("uiView",E),t.module("ui.router.state").directive("uiView",P),I.$inject=["$state","$timeout"],V.$inject=["$state","$timeout"],M.$inject=["$state","$stateParams","$interpolate"],t.module("ui.router.state").directive("uiSref",I).directive("uiSrefActive",M).directive("uiSrefActiveEq",M).directive("uiState",V),R.$inject=["$state"],D.$inject=["$state"],t.module("ui.router.state").filter("isState",R).filter("includedByState",D)}(window,window.angular);var app=angular.module("cookingConnect",["ui.router"]);app.config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/landing"),e.state("landing",{url:"/landing",templateUrl:"partials/landing.html",controller:"landingCtrl"}).state("userhome",{url:"/userhome",templateUrl:"partials/userhome.html",controller:"userhomeCtrl"}).state("cookbook",{url:"/cookbook",templateUrl:"partials/cookbook.html",controller:"cookbookCtrl"})}]);