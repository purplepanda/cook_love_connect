function previewFile(e){if(e.files&&e.files[0]){var t=new FileReader;t.onload=function(e){$("#blah").attr("src",e.target.result).width(350).height(200)},t.readAsDataURL(e.files[0])}}var app=angular.module("cookingConnect");app.controller("cookbookCtrl",function(e,t){e.title="The ... Cookbook",t.get("../mock/recipeObjects.json").success(function(t){e.recipes=t}),t.get("../mock/cookbookObjects.json").success(function(t){e.cookbooks=t}),$(document).ready(function(){$(document).on("click",".recipeCard",function(){$(".recipeDetails").toggle()})})});var app=angular.module("cookingConnect");app.controller("landingCtrl",function(e){e.title="Welcome to Cook Love Connect!",e.loginTemp=function(){$("#login").show(),$("#loginButton").hide(),$("#signup").hide()},e.regTemp=function(){$("#signup").show(),$("#signupButton").hide(),$("#login").hide()}});var app=angular.module("cookingConnect");app.controller("newFormCtrl",function(e){function t(){e.ingredients.unshift(e.ingredient),e.ingredient=""}function r(t){e.ingredients.splice(t,1)}function n(){e.instructions.push(e.instruction),e.instruction=""}function i(t){e.instructions.splice(t,1)}e.title="New Form Recipe",e.ingredients=["Dummy Test"],e.addIngredient=t,e.removeIngredient=r,e.instructions=["Dummy Test for intructions"],e.addInstruction=n,e.removeInstruction=i});var app=angular.module("cookingConnect");app.controller("recipeInfoCtrl",function(e){e.title="Recipe Info"});var app=angular.module("cookingConnect");app.controller("userhomeCtrl",["$scope","$http",function(e,t){e.title="My Kitchen";var r="";e.submitSearch=function(n){r=n;var i="http://recipepuppy.com/api/?q=",o=i+r;t.get(o).then(function(t){e.thirdpartyrecipes=t.data.results});var a={};a.getRecipe=function(){return t.get(o)}}}]);var app=angular.module("cookingConnect");app.directive("recipeCard",function(){return{restrict:"E",replace:!0,templateUrl:"partials/recipeCard.html"}}),"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(e,t,r){"use strict";function n(e,t){return L(new(L(function(){},{prototype:e})),t)}function i(e){return B(arguments,function(t){t!==e&&B(t,function(t,r){e.hasOwnProperty(r)||(e[r]=t)})}),e}function o(e,t){var r=[];for(var n in e.path){if(e.path[n]!==t.path[n])break;r.push(e.path[n])}return r}function a(e){if(Object.keys)return Object.keys(e);var t=[];return B(e,function(e,r){t.push(r)}),t}function u(e,t){if(Array.prototype.indexOf)return e.indexOf(t,Number(arguments[2])||0);var r=e.length>>>0,n=Number(arguments[2])||0;for(n=0>n?Math.ceil(n):Math.floor(n),0>n&&(n+=r);r>n;n++)if(n in e&&e[n]===t)return n;return-1}function l(e,t,r,n){var i,l=o(r,n),s={},c=[];for(var f in l)if(l[f]&&l[f].params&&(i=a(l[f].params),i.length))for(var p in i)u(c,i[p])>=0||(c.push(i[p]),s[i[p]]=e[i[p]]);return L({},s,t)}function s(e,t,r){if(!r){r=[];for(var n in e)r.push(n)}for(var i=0;i<r.length;i++){var o=r[i];if(e[o]!=t[o])return!1}return!0}function c(e,t){var r={};return B(e,function(e){r[e]=t[e]}),r}function f(e){var t={},r=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return B(r,function(r){r in e&&(t[r]=e[r])}),t}function p(e){var t={},r=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var n in e)-1==u(r,n)&&(t[n]=e[n]);return t}function h(e,t){var r=z(e),n=r?[]:{};return B(e,function(e,i){t(e,i)&&(n[r?n.length:i]=e)}),n}function v(e,t){var r=z(e)?[]:{};return B(e,function(e,n){r[n]=t(e,n)}),r}function $(e,t){var n=1,o=2,l={},s=[],c=l,f=L(e.when(l),{$$promises:l,$$values:l});this.study=function(l){function h(e,r){if(g[r]!==o){if(d.push(r),g[r]===n)throw d.splice(0,u(d,r)),new Error("Cyclic dependency: "+d.join(" -> "));if(g[r]=n,N(e))m.push(r,[function(){return t.get(e)}],s);else{var i=t.annotate(e);B(i,function(e){e!==r&&l.hasOwnProperty(e)&&h(l[e],e)}),m.push(r,e,i)}d.pop(),g[r]=o}}function v(e){return T(e)&&e.then&&e.$$promises}if(!T(l))throw new Error("'invocables' must be an object");var $=a(l||{}),m=[],d=[],g={};return B(l,h),l=d=g=null,function(n,o,a){function u(){--w||(b||i(y,o.$$values),d.$$values=y,d.$$promises=d.$$promises||!0,delete d.$$inheritedValues,h.resolve(y))}function l(e){d.$$failure=e,h.reject(e)}function s(r,i,o){function s(e){f.reject(e),l(e)}function c(){if(!M(d.$$failure))try{f.resolve(t.invoke(i,a,y)),f.promise.then(function(e){y[r]=e,u()},s)}catch(e){s(e)}}var f=e.defer(),p=0;B(o,function(e){g.hasOwnProperty(e)&&!n.hasOwnProperty(e)&&(p++,g[e].then(function(t){y[e]=t,--p||c()},s))}),p||c(),g[r]=f.promise}if(v(n)&&a===r&&(a=o,o=n,n=null),n){if(!T(n))throw new Error("'locals' must be an object")}else n=c;if(o){if(!v(o))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else o=f;var h=e.defer(),d=h.promise,g=d.$$promises={},y=L({},n),w=1+m.length/3,b=!1;if(M(o.$$failure))return l(o.$$failure),d;o.$$inheritedValues&&i(y,p(o.$$inheritedValues,$)),L(g,o.$$promises),o.$$values?(b=i(y,p(o.$$values,$)),d.$$inheritedValues=p(o.$$values,$),u()):(o.$$inheritedValues&&(d.$$inheritedValues=p(o.$$inheritedValues,$)),o.then(u,l));for(var S=0,k=m.length;k>S;S+=3)n.hasOwnProperty(m[S])?u():s(m[S],m[S+1],m[S+2]);return d}},this.resolve=function(e,t,r,n){return this.study(e)(t,r,n)}}function m(e,t,r){this.fromConfig=function(e,t,r){return M(e.template)?this.fromString(e.template,t):M(e.templateUrl)?this.fromUrl(e.templateUrl,t):M(e.templateProvider)?this.fromProvider(e.templateProvider,t,r):null},this.fromString=function(e,t){return U(e)?e(t):e},this.fromUrl=function(r,n){return U(r)&&(r=r(n)),null==r?null:e.get(r,{cache:t,headers:{Accept:"text/html"}}).then(function(e){return e.data})},this.fromProvider=function(e,t,n){return r.invoke(e,null,n||{params:t})}}function d(e,t,i){function o(t,r,n,i){if(m.push(t),v[t])return v[t];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(t))throw new Error("Invalid parameter name '"+t+"' in pattern '"+e+"'");if($[t])throw new Error("Duplicate parameter name '"+t+"' in pattern '"+e+"'");return $[t]=new _.Param(t,r,n,i),$[t]}function a(e,t,r,n){var i=["",""],o=e.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!t)return o;switch(r){case!1:i=["(",")"+(n?"?":"")];break;case!0:o=o.replace(/\/$/,""),i=["(?:/(",")|/)?"];break;default:i=["("+r+"|",")?"]}return o+i[0]+t+i[1]}function u(i,o){var a,u,l,s,c;return a=i[2]||i[3],c=t.params[a],l=e.substring(p,i.index),u=o?i[4]:i[4]||("*"==i[1]?".*":null),u&&(s=_.type(u)||n(_.type("string"),{pattern:new RegExp(u,t.caseInsensitive?"i":r)})),{id:a,regexp:u,segment:l,type:s,cfg:c}}t=L({params:{}},T(t)?t:{});var l,s=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,c=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,f="^",p=0,h=this.segments=[],v=i?i.params:{},$=this.params=i?i.params.$$new():new _.ParamSet,m=[];this.source=e;for(var d,g,y;(l=s.exec(e))&&(d=u(l,!1),!(d.segment.indexOf("?")>=0));)g=o(d.id,d.type,d.cfg,"path"),f+=a(d.segment,g.type.pattern.source,g.squash,g.isOptional),h.push(d.segment),p=s.lastIndex;y=e.substring(p);var w=y.indexOf("?");if(w>=0){var b=this.sourceSearch=y.substring(w);if(y=y.substring(0,w),this.sourcePath=e.substring(0,p+w),b.length>0)for(p=0;l=c.exec(b);)d=u(l,!0),g=o(d.id,d.type,d.cfg,"search"),p=s.lastIndex}else this.sourcePath=e,this.sourceSearch="";f+=a(y)+(t.strict===!1?"/?":"")+"$",h.push(y),this.regexp=new RegExp(f,t.caseInsensitive?"i":r),this.prefix=h[0],this.$$paramNames=m}function g(e){L(this,e)}function y(){function e(e){return null!=e?e.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):e}function i(e){return null!=e?e.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):e}function o(){return{strict:$,caseInsensitive:p}}function l(e){return U(e)||z(e)&&U(e[e.length-1])}function s(){for(;S.length;){var e=S.shift();if(e.pattern)throw new Error("You cannot override a type's .pattern at runtime.");t.extend(w[e.name],f.invoke(e.def))}}function c(e){L(this,e||{})}_=this;var f,p=!1,$=!0,m=!1,w={},b=!0,S=[],k={string:{encode:e,decode:i,is:function(e){return null==e||!M(e)||"string"==typeof e},pattern:/[^\/]*/},int:{encode:e,decode:function(e){return parseInt(e,10)},is:function(e){return M(e)&&this.decode(e.toString())===e},pattern:/\d+/},bool:{encode:function(e){return e?1:0},decode:function(e){return 0!==parseInt(e,10)},is:function(e){return e===!0||e===!1},pattern:/0|1/},date:{encode:function(e){return this.is(e)?[e.getFullYear(),("0"+(e.getMonth()+1)).slice(-2),("0"+e.getDate()).slice(-2)].join("-"):r},decode:function(e){if(this.is(e))return e;var t=this.capture.exec(e);return t?new Date(t[1],t[2]-1,t[3]):r},is:function(e){return e instanceof Date&&!isNaN(e.valueOf())},equals:function(e,t){return this.is(e)&&this.is(t)&&e.toISOString()===t.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:t.toJson,decode:t.fromJson,is:t.isObject,equals:t.equals,pattern:/[^\/]*/},any:{encode:t.identity,decode:t.identity,equals:t.equals,pattern:/.*/}};y.$$getDefaultValue=function(e){if(!l(e.value))return e.value;if(!f)throw new Error("Injectable functions cannot be called at configuration time");return f.invoke(e.value)},this.caseInsensitive=function(e){return M(e)&&(p=e),p},this.strictMode=function(e){return M(e)&&($=e),$},this.defaultSquashPolicy=function(e){if(!M(e))return m;if(e!==!0&&e!==!1&&!N(e))throw new Error("Invalid squash policy: "+e+". Valid policies: false, true, arbitrary-string");return m=e,e},this.compile=function(e,t){return new d(e,L(o(),t))},this.isMatcher=function(e){if(!T(e))return!1;var t=!0;return B(d.prototype,function(r,n){U(r)&&(t=t&&M(e[n])&&U(e[n]))}),t},this.type=function(e,t,r){if(!M(t))return w[e];if(w.hasOwnProperty(e))throw new Error("A type named '"+e+"' has already been defined.");return w[e]=new g(L({name:e},t)),r&&(S.push({name:e,def:r}),b||s()),this},B(k,function(e,t){w[t]=new g(L({name:t},e))}),w=n(w,{}),this.$get=["$injector",function(e){return f=e,b=!1,s(),B(k,function(e,t){w[t]||(w[t]=new g(e))}),this}],this.Param=function(e,n,i,o){function s(e){var t=T(e)?a(e):[],r=-1===u(t,"value")&&-1===u(t,"type")&&-1===u(t,"squash")&&-1===u(t,"array");return r&&(e={value:e}),e.$$fn=l(e.value)?e.value:function(){return e.value},e}function c(r,n,i){if(r.type&&n)throw new Error("Param '"+e+"' has two type configurations.");return n?n:r.type?t.isString(r.type)?w[r.type]:r.type instanceof g?r.type:new g(r.type):"config"===i?w.any:w.string}function p(){var t={array:"search"===o&&"auto"},r=e.match(/\[\]$/)?{array:!0}:{};return L(t,r,i).array}function $(e,t){var r=e.squash;if(!t||r===!1)return!1;if(!M(r)||null==r)return m;if(r===!0||N(r))return r;throw new Error("Invalid squash policy: '"+r+"'. Valid policies: false, true, or arbitrary string")}function d(e,t,n,i){var o,a,l=[{from:"",to:n||t?r:""},{from:null,to:n||t?r:""}];return o=z(e.replace)?e.replace:[],N(i)&&o.push({from:i,to:r}),a=v(o,function(e){return e.from}),h(l,function(e){return-1===u(a,e.from)}).concat(o)}function y(){if(!f)throw new Error("Injectable functions cannot be called at configuration time");var e=f.invoke(i.$$fn);if(null!==e&&e!==r&&!k.type.is(e))throw new Error("Default value ("+e+") for parameter '"+k.id+"' is not an instance of Type ("+k.type.name+")");return e}function b(e){function t(e){return function(t){return t.from===e}}function r(e){var r=v(h(k.replace,t(e)),function(e){return e.to});return r.length?r[0]:e}return e=r(e),M(e)?k.type.$normalize(e):y()}function S(){return"{Param:"+e+" "+n+" squash: '"+j+"' optional: "+P+"}"}var k=this;i=s(i),n=c(i,n,o);var E=p();n=E?n.$asArray(E,"search"===o):n,"string"!==n.name||E||"path"!==o||i.value!==r||(i.value="");var P=i.value!==r,j=$(i,P),x=d(i,E,P,j);L(this,{id:e,type:n,location:o,array:E,squash:j,replace:x,isOptional:P,value:b,dynamic:r,config:i,toString:S})},c.prototype={$$new:function(){return n(this,L(new c,{$$parent:this}))},$$keys:function(){for(var e=[],t=[],r=this,n=a(c.prototype);r;)t.push(r),r=r.$$parent;return t.reverse(),B(t,function(t){B(a(t),function(t){-1===u(e,t)&&-1===u(n,t)&&e.push(t)})}),e},$$values:function(e){var t={},r=this;return B(r.$$keys(),function(n){t[n]=r[n].value(e&&e[n])}),t},$$equals:function(e,t){var r=!0,n=this;return B(n.$$keys(),function(i){var o=e&&e[i],a=t&&t[i];n[i].type.equals(o,a)||(r=!1)}),r},$$validates:function(e){var n,i,o,a,u,l=this.$$keys();for(n=0;n<l.length&&(i=this[l[n]],o=e[l[n]],o!==r&&null!==o||!i.isOptional);n++){if(a=i.type.$normalize(o),!i.type.is(a))return!1;if(u=i.type.encode(a),t.isString(u)&&!i.type.pattern.exec(u))return!1}return!0},$$parent:r},this.ParamSet=c}function w(e,n){function i(e){var t=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(e.source);return null!=t?t[1].replace(/\\(.)/g,"$1"):""}function o(e,t){return e.replace(/\$(\$|\d{1,2})/,function(e,r){return t["$"===r?0:Number(r)]})}function a(e,t,r){if(!r)return!1;var n=e.invoke(t,t,{$match:r});return!M(n)||n}function u(n,i,o,a,u){function p(e,t,r){return"/"===m?e:t?m.slice(0,-1)+e:r?m.slice(1)+e:e}function h(e){function t(e){var t=e(o,n);return!!t&&(N(t)&&n.replace().url(t),!0)}if(!e||!e.defaultPrevented){$&&n.url()===$,$=r;var i,a=s.length;for(i=0;a>i;i++)if(t(s[i]))return;c&&t(c)}}function v(){return l=l||i.$on("$locationChangeSuccess",h)}var $,m=a.baseHref(),d=n.url();return f||v(),{sync:function(){h()},listen:function(){return v()},update:function(e){return e?void(d=n.url()):void(n.url()!==d&&(n.url(d),n.replace()))},push:function(e,t,i){var o=e.format(t||{});null!==o&&t&&t["#"]&&(o+="#"+t["#"]),n.url(o),$=i&&i.$$avoidResync?n.url():r,i&&i.replace&&n.replace()},href:function(r,i,o){if(!r.validates(i))return null;var a=e.html5Mode();t.isObject(a)&&(a=a.enabled),a=a&&u.history;var l=r.format(i);if(o=o||{},a||null===l||(l="#"+e.hashPrefix()+l),null!==l&&i&&i["#"]&&(l+="#"+i["#"]),l=p(l,a,o.absolute),!o.absolute||!l)return l;var s=!a&&l?"/":"",c=n.port();return c=80===c||443===c?"":":"+c,[n.protocol(),"://",n.host(),c,s,l].join("")}}}var l,s=[],c=null,f=!1;this.rule=function(e){if(!U(e))throw new Error("'rule' must be a function");return s.push(e),this},this.otherwise=function(e){if(N(e)){var t=e;e=function(){return t}}else if(!U(e))throw new Error("'rule' must be a function");return c=e,this},this.when=function(e,t){var r,u=N(t);if(N(e)&&(e=n.compile(e)),!u&&!U(t)&&!z(t))throw new Error("invalid 'handler' in when()");var l={matcher:function(e,t){return u&&(r=n.compile(t),t=["$match",function(e){return r.format(e)}]),L(function(r,n){return a(r,t,e.exec(n.path(),n.search()))},{prefix:N(e.prefix)?e.prefix:""})},regex:function(e,t){if(e.global||e.sticky)throw new Error("when() RegExp must not be global or sticky");return u&&(r=t,t=["$match",function(e){return o(r,e)}]),L(function(r,n){return a(r,t,e.exec(n.path()))},{prefix:i(e)})}},s={matcher:n.isMatcher(e),regex:e instanceof RegExp};for(var c in s)if(s[c])return this.rule(l[c](e,t));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(e){e===r&&(e=!0),f=e},this.$get=u,u.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function b(e,i){function o(e){return 0===e.indexOf(".")||0===e.indexOf("^")}function p(e,t){if(!e)return r;var n=N(e),i=n?e:e.name,a=o(i);if(a){if(!t)throw new Error("No reference point given for path '"+i+"'");t=p(t);for(var u=i.split("."),l=0,s=u.length,c=t;s>l;l++)if(""!==u[l]||0!==l){if("^"!==u[l])break;if(!c.parent)throw new Error("Path '"+i+"' not valid for state '"+t.name+"'");c=c.parent}else c=t;u=u.slice(l).join("."),i=c.name+(c.name&&u?".":"")+u}var f=P[i];return!f||!n&&(n||f!==e&&f.self!==e)?r:f}function h(e,t){j[e]||(j[e]=[]),j[e].push(t)}function $(e){for(var t=j[e]||[];t.length;)m(t.shift())}function m(t){t=n(t,{self:t,resolve:t.resolve||{},toString:function(){return this.name}});var r=t.name;if(!N(r)||r.indexOf("@")>=0)throw new Error("State must have a valid name");if(P.hasOwnProperty(r))throw new Error("State '"+r+"' is already defined");var i=-1!==r.indexOf(".")?r.substring(0,r.lastIndexOf(".")):N(t.parent)?t.parent:T(t.parent)&&N(t.parent.name)?t.parent.name:"";if(i&&!P[i])return h(i,t.self);for(var o in C)U(C[o])&&(t[o]=C[o](t,C.$delegates[o]));return P[r]=t,!t[x]&&t.url&&e.when(t.url,["$match","$stateParams",function(e,r){E.$current.navigable==t&&s(e,r)||E.transitionTo(t,e,{inherit:!0,location:!1})}]),$(r),t}function d(e){return e.indexOf("*")>-1}function g(e){for(var t=e.split("."),r=E.$current.name.split("."),n=0,i=t.length;i>n;n++)"*"===t[n]&&(r[n]="*");return"**"===t[0]&&(r=r.slice(u(r,t[1])),r.unshift("**")),"**"===t[t.length-1]&&(r.splice(u(r,t[t.length-2])+1,Number.MAX_VALUE),r.push("**")),t.length==r.length&&r.join("")===t.join("")}function y(e,t){return N(e)&&!M(t)?C[e]:U(t)&&N(e)?(C[e]&&!C.$delegates[e]&&(C.$delegates[e]=C[e]),C[e]=t,this):this}function w(e,t){return T(e)?t=e:t.name=e,m(t),this}function b(e,i,o,u,f,h,$,m,y){function w(t,r,n,o){var a=e.$broadcast("$stateNotFound",t,r,n);if(a.defaultPrevented)return $.update(),A;if(!a.retry)return null;if(o.$retry)return $.update(),I;var u=E.transition=i.when(a.retry);return u.then(function(){return u!==E.transition?j:(t.options.$retry=!0,E.transitionTo(t.to,t.toParams,t.options))},function(){return A}),$.update(),u}function b(e,r,n,a,l,s){function p(){var r=[];return B(e.views,function(n,i){var a=n.resolve&&n.resolve!==e.resolve?n.resolve:{};a.$template=[function(){return o.load(i,{view:n,locals:l.globals,params:h,notify:s.notify})||""}],r.push(f.resolve(a,l.globals,l.resolve,e).then(function(r){if(U(n.controllerProvider)||z(n.controllerProvider)){var o=t.extend({},a,l.globals);r.$$controller=u.invoke(n.controllerProvider,null,o)}else r.$$controller=n.controller;r.$$state=e,r.$$controllerAs=n.controllerAs,l[i]=r}))}),i.all(r).then(function(){return l.globals})}var h=n?r:c(e.params.$$keys(),r),v={$stateParams:h};l.resolve=f.resolve(e.resolve,v,l.resolve,e);var $=[l.resolve.then(function(e){l.globals=e})];return a&&$.push(a),i.all($).then(p).then(function(e){return l})}var j=i.reject(new Error("transition superseded")),C=i.reject(new Error("transition prevented")),A=i.reject(new Error("transition aborted")),I=i.reject(new Error("transition failed"));return k.locals={resolve:null,globals:{$stateParams:{}}},E={params:{},current:k.self,$current:k,transition:null},E.reload=function(e){return E.transitionTo(E.current,h,{reload:e||!0,inherit:!1,notify:!0})},E.go=function(e,t,r){return E.transitionTo(e,t,L({inherit:!0,relative:E.$current},r))},E.transitionTo=function(t,r,o){r=r||{},o=L({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},o||{});var a,s=E.$current,f=E.params,v=s.path,m=p(t,o.relative),d=r["#"];if(!M(m)){var g={to:t,toParams:r,options:o},y=w(g,s.self,f,o);if(y)return y;if(t=g.to,r=g.toParams,o=g.options,m=p(t,o.relative),!M(m)){if(!o.relative)throw new Error("No such state '"+t+"'");throw new Error("Could not resolve '"+t+"' from state '"+o.relative+"'")}}if(m[x])throw new Error("Cannot transition to abstract state '"+t+"'");if(o.inherit&&(r=l(h,r||{},E.$current,m)),!m.params.$$validates(r))return I;r=m.params.$$values(r),t=m;var P=t.path,A=0,O=P[A],q=k.locals,F=[];if(o.reload){if(N(o.reload)||T(o.reload)){if(T(o.reload)&&!o.reload.name)throw new Error("Invalid reload state object");var R=o.reload===!0?v[0]:p(o.reload);if(o.reload&&!R)throw new Error("No such reload state '"+(N(o.reload)?o.reload:o.reload.name)+"'");for(;O&&O===v[A]&&O!==R;)q=F[A]=O.locals,A++,O=P[A]}}else for(;O&&O===v[A]&&O.ownParams.$$equals(r,f);)q=F[A]=O.locals,A++,O=P[A];if(S(t,r,s,f,q,o))return d&&(r["#"]=d),E.params=r,K(E.params,h),K(c(t.params.$$keys(),h),t.locals.globals.$stateParams),o.location&&t.navigable&&t.navigable.url&&($.push(t.navigable.url,r,{$$avoidResync:!0,replace:"replace"===o.location}),$.update(!0)),E.transition=null,i.when(E.current);if(r=c(t.params.$$keys(),r||{}),d&&(r["#"]=d),o.notify&&e.$broadcast("$stateChangeStart",t.self,r,s.self,f,o).defaultPrevented)return e.$broadcast("$stateChangeCancel",t.self,r,s.self,f),null==E.transition&&$.update(),C;for(var V=i.when(q),D=A;D<P.length;D++,O=P[D])q=F[D]=n(q),V=b(O,r,O===t,V,q,o);var U=E.transition=V.then(function(){var n,i,a;if(E.transition!==U)return j;for(n=v.length-1;n>=A;n--)a=v[n],a.self.onExit&&u.invoke(a.self.onExit,a.self,a.locals.globals),a.locals=null;for(n=A;n<P.length;n++)i=P[n],i.locals=F[n],i.self.onEnter&&u.invoke(i.self.onEnter,i.self,i.locals.globals);return E.transition!==U?j:(E.$current=t,E.current=t.self,E.params=r,K(E.params,h),E.transition=null,o.location&&t.navigable&&$.push(t.navigable.url,t.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===o.location}),o.notify&&e.$broadcast("$stateChangeSuccess",t.self,r,s.self,f),$.update(!0),E.current)},function(n){return E.transition!==U?j:(E.transition=null,a=e.$broadcast("$stateChangeError",t.self,r,s.self,f,n),a.defaultPrevented||$.update(),i.reject(n))});return U},E.is=function(e,t,n){n=L({relative:E.$current},n||{});var i=p(e,n.relative);return M(i)?E.$current===i&&(!t||s(i.params.$$values(t),h)):r},E.includes=function(e,t,n){if(n=L({relative:E.$current},n||{}),N(e)&&d(e)){if(!g(e))return!1;e=E.$current.name}var i=p(e,n.relative);return M(i)?!!M(E.$current.includes[i.name])&&(!t||s(i.params.$$values(t),h,a(t))):r},E.href=function(e,t,n){n=L({lossy:!0,inherit:!0,absolute:!1,relative:E.$current},n||{});var i=p(e,n.relative);if(!M(i))return null;n.inherit&&(t=l(h,t||{},E.$current,i));var o=i&&n.lossy?i.navigable:i;return o&&o.url!==r&&null!==o.url?$.href(o.url,c(i.params.$$keys().concat("#"),t||{}),{absolute:n.absolute}):null},E.get=function(e,t){if(0===arguments.length)return v(a(P),function(e){return P[e].self});var r=p(e,t||E.$current);return r&&r.self?r.self:null},E}function S(e,t,r,n,i,o){function a(e,t,r){function n(t){return"search"!=e.params[t].location}var i=e.params.$$keys().filter(n),o=f.apply({},[e.params].concat(i)),a=new _.ParamSet(o);return a.$$equals(t,r)}return!(o.reload||e!==r||!(i===r.locals||e.self.reloadOnSearch===!1&&a(r,n,t)))||void 0}var k,E,P={},j={},x="abstract",C={parent:function(e){if(M(e.parent)&&e.parent)return p(e.parent);var t=/^(.+)\.[^.]+$/.exec(e.name);return t?p(t[1]):k},data:function(e){return e.parent&&e.parent.data&&(e.data=e.self.data=n(e.parent.data,e.data)),e.data},url:function(e){var t=e.url,r={params:e.params||{}};if(N(t))return"^"==t.charAt(0)?i.compile(t.substring(1),r):(e.parent.navigable||k).url.concat(t,r);if(!t||i.isMatcher(t))return t;throw new Error("Invalid url '"+t+"' in state '"+e+"'")},navigable:function(e){return e.url?e:e.parent?e.parent.navigable:null},ownParams:function(e){var t=e.url&&e.url.params||new _.ParamSet;return B(e.params||{},function(e,r){t[r]||(t[r]=new _.Param(r,null,e,"config"))}),t},params:function(e){var t=f(e.ownParams,e.ownParams.$$keys());return e.parent&&e.parent.params?L(e.parent.params.$$new(),t):new _.ParamSet},views:function(e){var t={};return B(M(e.views)?e.views:{"":e},function(r,n){n.indexOf("@")<0&&(n+="@"+e.parent.name),t[n]=r}),t},path:function(e){return e.parent?e.parent.path.concat(e):[]},includes:function(e){var t=e.parent?L({},e.parent.includes):{};return t[e.name]=!0,t},$delegates:{}};k=m({name:"",url:"^",views:null,abstract:!0}),k.navigable=null,this.decorator=y,this.state=w,this.$get=b,b.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function S(){function e(e,t){return{load:function(e,r){var n,i={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return r=L(i,r),r.view&&(n=t.fromConfig(r.view,r.params,r.locals)),n}}}this.$get=e,e.$inject=["$rootScope","$templateFactory"]}function k(){var e=!1;this.useAnchorScroll=function(){e=!0},this.$get=["$anchorScroll","$timeout",function(t,r){return e?t:function(e){return r(function(){e[0].scrollIntoView()},0,!1)}}]}function E(e,r,n,i){function o(){return r.has?function(e){return r.has(e)?r.get(e):null}:function(e){try{return r.get(e)}catch(e){return null}}}function a(e,r){function n(e){return 1===Y&&G>=4?!!s.enabled(e):1===Y&&G>=2?!!s.enabled():!!l}var i={enter:function(e,t,r){t.after(e),r()},leave:function(e,t){e.remove(),t()}};if(e.noanimation)return i;if(s)return{enter:function(e,r,o){n(e)?t.version.minor>2?s.enter(e,null,r).then(o):s.enter(e,null,r,o):i.enter(e,r,o)},leave:function(e,r){n(e)?t.version.minor>2?s.leave(e).then(r):s.leave(e,r):i.leave(e,r)}};if(l){var o=l&&l(r,e);return{enter:function(e,t,r){o.enter(e,null,t),r()},leave:function(e,t){o.leave(e),t()}}}return i}var u=o(),l=u("$animator"),s=u("$animate"),c={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(r,o,u){return function(r,o,l){function s(){function e(){t&&t.remove(),r&&r.$destroy()}var t=f,r=h;r&&(r._willBeDestroyed=!0),p?(d.leave(p,function(){e(),f=null}),f=p):(e(),f=null),p=null,h=null}function c(a){var c,f=j(r,l,o,i),g=f&&e.$current&&e.$current.locals[f];if((a||g!==v)&&!r._willBeDestroyed){c=r.$new(),v=e.$current.locals[f],c.$emit("$viewContentLoading",f);var y=u(c,function(e){d.enter(e,o,function(){h&&h.$emit("$viewContentAnimationEnded"),(t.isDefined(m)&&!m||r.$eval(m))&&n(e)}),s()});p=y,h=c,h.$emit("$viewContentLoaded",f),h.$eval($)}}var f,p,h,v,$=l.onload||"",m=l.autoscroll,d=a(l,r);r.$on("$stateChangeSuccess",function(){c(!1)}),c(!0)}}};return c}function P(e,t,r,n){return{restrict:"ECA",priority:-400,compile:function(i){var o=i.html();return function(i,a,u){var l=r.$current,s=j(i,u,a,n),c=l&&l.locals[s];if(c){a.data("$uiView",{name:s,state:c.$$state}),a.html(c.$template?c.$template:o);var f=e(a.contents());if(c.$$controller){c.$scope=i,c.$element=a;var p=t(c.$$controller,c);c.$$controllerAs&&(i[c.$$controllerAs]=p),a.data("$ngControllerController",p),a.children().data("$ngControllerController",p)}f(i)}}}}}function j(e,t,r,n){var i=n(t.uiView||t.name||"")(e),o=r.inheritedData("$uiView");return i.indexOf("@")>=0?i:i+"@"+(o?o.state.name:"")}function x(e,t){var r,n=e.match(/^\s*({[^}]*})\s*$/);if(n&&(e=t+"("+n[1]+")"),r=e.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!r||4!==r.length)throw new Error("Invalid state ref '"+e+"'");return{state:r[1],paramExpr:r[3]||null}}function C(e){var t=e.parent().inheritedData("$uiView");return t&&t.state&&t.state.name?t.state:void 0}function A(e){var t="[object SVGAnimatedString]"===Object.prototype.toString.call(e.prop("href")),r="FORM"===e[0].nodeName;return{attr:r?"action":t?"xlink:href":"href",isAnchor:"A"===e.prop("tagName").toUpperCase(),clickable:!r}}function I(e,t,r,n,i){return function(o){var a=o.which||o.button,u=i();if(!(a>1||o.ctrlKey||o.metaKey||o.shiftKey||e.attr("target"))){var l=r(function(){t.go(u.state,u.params,u.options)});o.preventDefault();var s=n.isAnchor&&!u.href?1:0;o.preventDefault=function(){s--<=0&&r.cancel(l)}}}}function O(e,t){return{relative:C(e)||t.$current,inherit:!0}}function q(e,r){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,i,o,a){var u=x(o.uiSref,e.current.name),l={state:u.state,href:null,params:null},s=A(i),c=a[1]||a[0];l.options=L(O(i,e),o.uiSrefOpts?n.$eval(o.uiSrefOpts):{});var f=function(r){r&&(l.params=t.copy(r)),l.href=e.href(u.state,l.params,l.options),c&&c.$$addStateInfo(u.state,l.params),null!==l.href&&o.$set(s.attr,l.href)};u.paramExpr&&(n.$watch(u.paramExpr,function(e){e!==l.params&&f(e)},!0),l.params=t.copy(n.$eval(u.paramExpr))),f(),s.clickable&&i.bind("click",I(i,e,r,s,function(){return l}))}}}function F(e,t){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(r,n,i,o){function a(t){f.state=t[0],f.params=t[1],f.options=t[2],f.href=e.href(f.state,f.params,f.options),l&&l.$$addStateInfo(f.state,f.params),f.href&&i.$set(u.attr,f.href)}var u=A(n),l=o[1]||o[0],s=[i.uiState,i.uiStateParams||null,i.uiStateOpts||null],c="["+s.map(function(e){return e||"null"}).join(", ")+"]",f={state:null,params:null,options:null,href:null};r.$watch(c,a,!0),a(r.$eval(c)),u.clickable&&n.bind("click",I(n,e,t,u,function(){return f}))}}}function R(e,t,r){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(t,n,i,o){function a(t,r,i){var o=e.get(t,C(n)),a=u(t,r);$.push({state:o||{name:t},params:r,hash:a}),m[a]=i}function u(e,r){if(!N(e))throw new Error("state should be a string");return T(r)?e+J(r):(r=t.$eval(r),T(r)?e+J(r):e)}function l(){for(var e=0;e<$.length;e++)f($[e].state,$[e].params)?s(n,m[$[e].hash]):c(n,m[$[e].hash]),p($[e].state,$[e].params)?s(n,h):c(n,h)}function s(e,t){o(function(){e.addClass(t)})}function c(e,t){e.removeClass(t)}function f(t,r){return e.includes(t.name,r)}function p(t,r){return e.is(t.name,r)}var h,v,$=[],m={};h=r(i.uiSrefActiveEq||"",!1)(t);try{v=t.$eval(i.uiSrefActive)}catch(e){}v=v||r(i.uiSrefActive||"",!1)(t),T(v)&&B(v,function(r,n){if(N(r)){var i=x(r,e.current.name);a(i.state,t.$eval(i.paramExpr),n)}}),this.$$addStateInfo=function(e,t){T(v)&&$.length>0||(a(e,t,v),l())},t.$on("$stateChangeSuccess",l),l()}]}}function V(e){var t=function(t,r){return e.is(t,r)};return t.$stateful=!0,t}function D(e){var t=function(t,r,n){return e.includes(t,r,n)};return t.$stateful=!0,t}var M=t.isDefined,U=t.isFunction,N=t.isString,T=t.isObject,z=t.isArray,B=t.forEach,L=t.extend,K=t.copy,J=t.toJson;t.module("ui.router.util",["ng"]),t.module("ui.router.router",["ui.router.util"]),t.module("ui.router.state",["ui.router.router","ui.router.util"]),t.module("ui.router",["ui.router.state"]),t.module("ui.router.compat",["ui.router"]),$.$inject=["$q","$injector"],t.module("ui.router.util").service("$resolve",$),m.$inject=["$http","$templateCache","$injector"],t.module("ui.router.util").service("$templateFactory",m);var _;d.prototype.concat=function(e,t){var r={caseInsensitive:_.caseInsensitive(),strict:_.strictMode(),squash:_.defaultSquashPolicy()};return new d(this.sourcePath+e+this.sourceSearch,L(r,t),this)},d.prototype.toString=function(){return this.source},d.prototype.exec=function(e,t){function r(e){function t(e){return e.split("").reverse().join("")}function r(e){return e.replace(/\\-/g,"-")}var n=t(e).split(/-(?!\\)/),i=v(n,t);return v(i,r).reverse()}var n=this.regexp.exec(e);if(!n)return null;t=t||{};var i,o,a,u=this.parameters(),l=u.length,s=this.segments.length-1,c={};if(s!==n.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var f,p;for(i=0;s>i;i++){for(a=u[i],f=this.params[a],p=n[i+1],o=0;o<f.replace.length;o++)f.replace[o].from===p&&(p=f.replace[o].to);p&&f.array===!0&&(p=r(p)),M(p)&&(p=f.type.decode(p)),c[a]=f.value(p)}for(;l>i;i++){for(a=u[i],c[a]=this.params[a].value(t[a]),f=this.params[a],p=t[a],o=0;o<f.replace.length;o++)f.replace[o].from===p&&(p=f.replace[o].to);M(p)&&(p=f.type.decode(p)),c[a]=f.value(p)}return c},d.prototype.parameters=function(e){return M(e)?this.params[e]||null:this.$$paramNames},d.prototype.validates=function(e){return this.params.$$validates(e)},d.prototype.format=function(e){function t(e){return encodeURIComponent(e).replace(/-/g,function(e){return"%5C%"+e.charCodeAt(0).toString(16).toUpperCase()})}e=e||{};var r=this.segments,n=this.parameters(),i=this.params;if(!this.validates(e))return null;var o,a=!1,u=r.length-1,l=n.length,s=r[0];for(o=0;l>o;o++){var c=u>o,f=n[o],p=i[f],h=p.value(e[f]),$=p.isOptional&&p.type.equals(p.value(),h),m=!!$&&p.squash,d=p.type.encode(h);if(c){var g=r[o+1],y=o+1===u;if(m===!1)null!=d&&(s+=z(d)?v(d,t).join("-"):encodeURIComponent(d)),s+=g;else if(m===!0){var w=s.match(/\/$/)?/\/?(.*)/:/(.*)/;s+=g.match(w)[1]}else N(m)&&(s+=m+g);y&&p.squash===!0&&"/"===s.slice(-1)&&(s=s.slice(0,-1))}else{if(null==d||$&&m!==!1)continue;if(z(d)||(d=[d]),0===d.length)continue;d=v(d,encodeURIComponent).join("&"+f+"="),s+=(a?"&":"?")+(f+"="+d),a=!0}}return s},g.prototype.is=function(e,t){return!0},g.prototype.encode=function(e,t){return e},g.prototype.decode=function(e,t){return e},g.prototype.equals=function(e,t){return e==t},g.prototype.$subPattern=function(){var e=this.pattern.toString();return e.substr(1,e.length-2)},g.prototype.pattern=/.*/,g.prototype.toString=function(){
return"{Type:"+this.name+"}"},g.prototype.$normalize=function(e){return this.is(e)?e:this.decode(e)},g.prototype.$asArray=function(e,t){function n(e,t){function n(e,t){return function(){return e[t].apply(e,arguments)}}function i(e){return z(e)?e:M(e)?[e]:[]}function o(e){switch(e.length){case 0:return r;case 1:return"auto"===t?e[0]:e;default:return e}}function a(e){return!e}function u(e,t){return function(r){if(z(r)&&0===r.length)return r;r=i(r);var n=v(r,e);return t===!0?0===h(n,a).length:o(n)}}function l(e){return function(t,r){var n=i(t),o=i(r);if(n.length!==o.length)return!1;for(var a=0;a<n.length;a++)if(!e(n[a],o[a]))return!1;return!0}}this.encode=u(n(e,"encode")),this.decode=u(n(e,"decode")),this.is=u(n(e,"is"),!0),this.equals=l(n(e,"equals")),this.pattern=e.pattern,this.$normalize=u(n(e,"$normalize")),this.name=e.name,this.$arrayMode=t}if(!e)return this;if("auto"===e&&!t)throw new Error("'auto' array mode is for query parameters only");return new n(this,e)},t.module("ui.router.util").provider("$urlMatcherFactory",y),t.module("ui.router.util").run(["$urlMatcherFactory",function(e){}]),w.$inject=["$locationProvider","$urlMatcherFactoryProvider"],t.module("ui.router.router").provider("$urlRouter",w),b.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],t.module("ui.router.state").factory("$stateParams",function(){return{}}).provider("$state",b),S.$inject=[],t.module("ui.router.state").provider("$view",S),t.module("ui.router.state").provider("$uiViewScroll",k);var Y=t.version.major,G=t.version.minor;E.$inject=["$state","$injector","$uiViewScroll","$interpolate"],P.$inject=["$compile","$controller","$state","$interpolate"],t.module("ui.router.state").directive("uiView",E),t.module("ui.router.state").directive("uiView",P),q.$inject=["$state","$timeout"],F.$inject=["$state","$timeout"],R.$inject=["$state","$stateParams","$interpolate"],t.module("ui.router.state").directive("uiSref",q).directive("uiSrefActive",R).directive("uiSrefActiveEq",R).directive("uiState",F),V.$inject=["$state"],D.$inject=["$state"],t.module("ui.router.state").filter("isState",V).filter("includedByState",D)}(window,window.angular);var app=angular.module("cookingConnect",["ui.router"]);app.config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/landing"),e.state("landing",{url:"/landing",templateUrl:"partials/landing.html",controller:"landingCtrl"}).state("userhome",{url:"/userhome",templateUrl:"partials/userhome.html",controller:"userhomeCtrl"}).state("cookbook",{url:"/cookbook",templateUrl:"partials/cookbook.html",controller:"cookbookCtrl"}).state("newForm",{url:"/newForm",templateUrl:"partials/newForm.html",controller:"newFormCtrl"}).state("recipeInfo",{url:"/recipeInfo",templateUrl:"partials/recipeInfo.html",controller:"recipeInfoCtrl"})}]);var app=angular.module("cookingConnect");app.factory("searchFactory",["$http",function(e){var t="http://recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3",r={};return r.getRecipe=function(){return e.get(t)},r}]);