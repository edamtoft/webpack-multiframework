!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=23)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={HELLO_WORLD:"Hello World"}},10:function(e,t,n){"use strict";n.r(t),n.d(t,"h",function(){return i}),n.d(t,"createElement",function(){return i}),n.d(t,"cloneElement",function(){return c}),n.d(t,"Component",function(){return U}),n.d(t,"render",function(){return B}),n.d(t,"rerender",function(){return d}),n.d(t,"options",function(){return r});var r={},o=[],a=[];function i(e,t){var n,i,l,u,c=a;for(u=arguments.length;u-- >2;)o.push(arguments[u]);for(t&&null!=t.children&&(o.length||o.push(t.children),delete t.children);o.length;)if((i=o.pop())&&void 0!==i.pop)for(u=i.length;u--;)o.push(i[u]);else"boolean"==typeof i&&(i=null),(l="function"!=typeof e)&&(null==i?i="":"number"==typeof i?i=String(i):"string"!=typeof i&&(l=!1)),l&&n?c[c.length-1]+=i:c===a?c=[i]:c.push(i),n=l;var s=new function(){};return s.nodeName=e,s.children=c,s.attributes=null==t?void 0:t,s.key=null==t?void 0:t.key,void 0!==r.vnode&&r.vnode(s),s}function l(e,t){for(var n in t)e[n]=t[n];return e}var u="function"==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout;function c(e,t){return i(e.nodeName,l(l({},e.attributes),t),arguments.length>2?[].slice.call(arguments,2):e.children)}var s=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,p=[];function f(e){!e._dirty&&(e._dirty=!0)&&1==p.push(e)&&(r.debounceRendering||u)(d)}function d(){var e,t=p;for(p=[];e=t.pop();)e._dirty&&E(e)}function v(e,t){return e.normalizedNodeName===t||e.nodeName.toLowerCase()===t.toLowerCase()}function m(e){var t=l({},e.attributes);t.children=e.children;var n=e.nodeName.defaultProps;if(void 0!==n)for(var r in n)void 0===t[r]&&(t[r]=n[r]);return t}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function h(e,t,n,r,o){if("className"===t&&(t="class"),"key"===t);else if("ref"===t)n&&n(null),r&&r(e);else if("class"!==t||o)if("style"===t){if(r&&"string"!=typeof r&&"string"!=typeof n||(e.style.cssText=r||""),r&&"object"==typeof r){if("string"!=typeof n)for(var a in n)a in r||(e.style[a]="");for(var a in r)e.style[a]="number"==typeof r[a]&&!1===s.test(a)?r[a]+"px":r[a]}}else if("dangerouslySetInnerHTML"===t)r&&(e.innerHTML=r.__html||"");else if("o"==t[0]&&"n"==t[1]){var i=t!==(t=t.replace(/Capture$/,""));t=t.toLowerCase().substring(2),r?n||e.addEventListener(t,b,i):e.removeEventListener(t,b,i),(e._listeners||(e._listeners={}))[t]=r}else if("list"!==t&&"type"!==t&&!o&&t in e)!function(e,t,n){try{e[t]=n}catch(e){}}(e,t,null==r?"":r),null!=r&&!1!==r||e.removeAttribute(t);else{var l=o&&t!==(t=t.replace(/^xlink:?/,""));null==r||!1===r?l?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.removeAttribute(t):"function"!=typeof r&&(l?e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),r):e.setAttribute(t,r))}else e.className=r||""}function b(e){return this._listeners[e.type](r.event&&r.event(e)||e)}var y=[],g=0,C=!1,x=!1;function N(){for(var e;e=y.pop();)r.afterMount&&r.afterMount(e),e.componentDidMount&&e.componentDidMount()}function w(e,t,n,r,o,a){g++||(C=null!=o&&void 0!==o.ownerSVGElement,x=null!=e&&!("__preactattr_"in e));var i=k(e,t,n,r,a);return o&&i.parentNode!==o&&o.appendChild(i),--g||(x=!1,a||N()),i}function k(e,t,n,r,o){var a=e,i=C;if(null!=t&&"boolean"!=typeof t||(t=""),"string"==typeof t||"number"==typeof t)return e&&void 0!==e.splitText&&e.parentNode&&(!e._component||o)?e.nodeValue!=t&&(e.nodeValue=t):(a=document.createTextNode(t),e&&(e.parentNode&&e.parentNode.replaceChild(a,e),P(e,!0))),a.__preactattr_=!0,a;var l,u,c=t.nodeName;if("function"==typeof c)return function(e,t,n,r){var o=e&&e._component,a=o,i=e,l=o&&e._componentConstructor===t.nodeName,u=l,c=m(t);for(;o&&!u&&(o=o._parentComponent);)u=o.constructor===t.nodeName;o&&u&&(!r||o._component)?(L(o,c,3,n,r),e=o.base):(a&&!l&&(T(a),e=i=null),o=M(t.nodeName,c,n),e&&!o.nextBase&&(o.nextBase=e,i=null),L(o,c,1,n,r),e=o.base,i&&e!==i&&(i._component=null,P(i,!1)));return e}(e,t,n,r);if(C="svg"===c||"foreignObject"!==c&&C,c=String(c),(!e||!v(e,c))&&(l=c,(u=C?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l)).normalizedNodeName=l,a=u,e)){for(;e.firstChild;)a.appendChild(e.firstChild);e.parentNode&&e.parentNode.replaceChild(a,e),P(e,!0)}var s=a.firstChild,p=a.__preactattr_,f=t.children;if(null==p){p=a.__preactattr_={};for(var d=a.attributes,b=d.length;b--;)p[d[b].name]=d[b].value}return!x&&f&&1===f.length&&"string"==typeof f[0]&&null!=s&&void 0!==s.splitText&&null==s.nextSibling?s.nodeValue!=f[0]&&(s.nodeValue=f[0]):(f&&f.length||null!=s)&&function(e,t,n,r,o){var a,i,l,u,c,s=e.childNodes,p=[],f={},d=0,m=0,h=s.length,b=0,y=t?t.length:0;if(0!==h)for(var g=0;g<h;g++){var C=s[g],x=C.__preactattr_,N=y&&x?C._component?C._component.__key:x.key:null;null!=N?(d++,f[N]=C):(x||(void 0!==C.splitText?!o||C.nodeValue.trim():o))&&(p[b++]=C)}if(0!==y)for(var g=0;g<y;g++){u=t[g],c=null;var N=u.key;if(null!=N)d&&void 0!==f[N]&&(c=f[N],f[N]=void 0,d--);else if(!c&&m<b)for(a=m;a<b;a++)if(void 0!==p[a]&&(w=i=p[a],O=o,"string"==typeof(S=u)||"number"==typeof S?void 0!==w.splitText:"string"==typeof S.nodeName?!w._componentConstructor&&v(w,S.nodeName):O||w._componentConstructor===S.nodeName)){c=i,p[a]=void 0,a===b-1&&b--,a===m&&m++;break}c=k(c,u,n,r),l=s[g],c&&c!==e&&c!==l&&(null==l?e.appendChild(c):c===l.nextSibling?_(l):e.insertBefore(c,l))}var w,S,O;if(d)for(var g in f)void 0!==f[g]&&P(f[g],!1);for(;m<=b;)void 0!==(c=p[b--])&&P(c,!1)}(a,f,n,r,x||null!=p.dangerouslySetInnerHTML),function(e,t,n){var r;for(r in n)t&&null!=t[r]||null==n[r]||h(e,r,n[r],n[r]=void 0,C);for(r in t)"children"===r||"innerHTML"===r||r in n&&t[r]===("value"===r||"checked"===r?e[r]:n[r])||h(e,r,n[r],n[r]=t[r],C)}(a,t.attributes,p),C=i,a}function P(e,t){var n=e._component;n?T(n):(null!=e.__preactattr_&&e.__preactattr_.ref&&e.__preactattr_.ref(null),!1!==t&&null!=e.__preactattr_||_(e),S(e))}function S(e){for(e=e.lastChild;e;){var t=e.previousSibling;P(e,!0),e=t}}var O={};function M(e,t,n){var r,o=O[e.name];if(e.prototype&&e.prototype.render?(r=new e(t,n),U.call(r,t,n)):((r=new U(t,n)).constructor=e,r.render=j),o)for(var a=o.length;a--;)if(o[a].constructor===e){r.nextBase=o[a].nextBase,o.splice(a,1);break}return r}function j(e,t,n){return this.constructor(e,n)}function L(e,t,n,o,a){e._disable||(e._disable=!0,(e.__ref=t.ref)&&delete t.ref,(e.__key=t.key)&&delete t.key,!e.base||a?e.componentWillMount&&e.componentWillMount():e.componentWillReceiveProps&&e.componentWillReceiveProps(t,o),o&&o!==e.context&&(e.prevContext||(e.prevContext=e.context),e.context=o),e.prevProps||(e.prevProps=e.props),e.props=t,e._disable=!1,0!==n&&(1!==n&&!1===r.syncComponentUpdates&&e.base?f(e):E(e,1,a)),e.__ref&&e.__ref(e))}function E(e,t,n,o){if(!e._disable){var a,i,u,c=e.props,s=e.state,p=e.context,f=e.prevProps||c,d=e.prevState||s,v=e.prevContext||p,_=e.base,h=e.nextBase,b=_||h,C=e._component,x=!1;if(_&&(e.props=f,e.state=d,e.context=v,2!==t&&e.shouldComponentUpdate&&!1===e.shouldComponentUpdate(c,s,p)?x=!0:e.componentWillUpdate&&e.componentWillUpdate(c,s,p),e.props=c,e.state=s,e.context=p),e.prevProps=e.prevState=e.prevContext=e.nextBase=null,e._dirty=!1,!x){a=e.render(c,s,p),e.getChildContext&&(p=l(l({},p),e.getChildContext()));var k,S,O=a&&a.nodeName;if("function"==typeof O){var j=m(a);(i=C)&&i.constructor===O&&j.key==i.__key?L(i,j,1,p,!1):(k=i,e._component=i=M(O,j,p),i.nextBase=i.nextBase||h,i._parentComponent=e,L(i,j,0,p,!1),E(i,1,n,!0)),S=i.base}else u=b,(k=C)&&(u=e._component=null),(b||1===t)&&(u&&(u._component=null),S=w(u,a,p,n||!_,b&&b.parentNode,!0));if(b&&S!==b&&i!==C){var U=b.parentNode;U&&S!==U&&(U.replaceChild(S,b),k||(b._component=null,P(b,!1)))}if(k&&T(k),e.base=S,S&&!o){for(var B=e,W=e;W=W._parentComponent;)(B=W).base=S;S._component=B,S._componentConstructor=B.constructor}}if(!_||n?y.unshift(e):x||(e.componentDidUpdate&&e.componentDidUpdate(f,d,v),r.afterUpdate&&r.afterUpdate(e)),null!=e._renderCallbacks)for(;e._renderCallbacks.length;)e._renderCallbacks.pop().call(e);g||o||N()}}function T(e){r.beforeUnmount&&r.beforeUnmount(e);var t=e.base;e._disable=!0,e.componentWillUnmount&&e.componentWillUnmount(),e.base=null;var n=e._component;n?T(n):t&&(t.__preactattr_&&t.__preactattr_.ref&&t.__preactattr_.ref(null),e.nextBase=t,_(t),function(e){var t=e.constructor.name;(O[t]||(O[t]=[])).push(e)}(e),S(t)),e.__ref&&e.__ref(null)}function U(e,t){this._dirty=!0,this.context=t,this.props=e,this.state=this.state||{}}function B(e,t,n){return w(n,e,{},!1,t,!1)}l(U.prototype,{setState:function(e,t){var n=this.state;this.prevState||(this.prevState=l({},n)),l(n,"function"==typeof e?e(n,this.props):e),t&&(this._renderCallbacks=this._renderCallbacks||[]).push(t),f(this)},forceUpdate:function(e){e&&(this._renderCallbacks=this._renderCallbacks||[]).push(e),E(this,2)},render:function(){}});var W={h:i,createElement:i,cloneElement:c,Component:U,render:B,rerender:d,options:r};t.default=W},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(10);var a=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){return(0,o.h)("nav",{className:"navbar navbar-expand navbar-light bg-light"},(0,o.h)("div",{className:"container"},(0,o.h)("a",{className:"navbar-brand",href:"https://edamtoft.github.io/webpack-multiframework"},"Multi-Framework Sample"),(0,o.h)("ul",{className:"navbar-nav mr-auto"},(0,o.h)("li",{className:"nav-item"},(0,o.h)("a",{className:"nav-link",href:"../sample-vue-app/index.html"},"Vue")),(0,o.h)("li",{className:"nav-item"},(0,o.h)("a",{className:"nav-link",href:"../sample-react-app/index.html"},"React")),(0,o.h)("li",{className:"nav-item active"},(0,o.h)("a",{className:"nav-link",href:"../sample-preact-app/index.html"},"Preact")))))}}]),t}();t.default=a},23:function(e,t,n){"use strict";var r=n(10),o=i(n(22)),a=i(n(0));function i(e){return e&&e.__esModule?e:{default:e}}var l=document.getElementById("app");(0,r.render)((0,r.h)("div",null,(0,r.h)(o.default,null),(0,r.h)("main",{className:"container mt-4"},(0,r.h)("h1",null,a.default.HELLO_WORLD," From Preact"))),l)}});