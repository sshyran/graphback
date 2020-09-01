/*! For license information please see 8730224d.c63a18fa.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[529],{1082:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),o=t.n(n);function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){u(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),f=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=f(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,u=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=f(t),b=n,d=p["".concat(a,".").concat(b)]||p[b]||s[b]||u;return t?o.a.createElement(d,c(c({ref:r},l),{},{components:t})):o.a.createElement(d,c({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var u=t.length,a=new Array(u);a[0]=b;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<u;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1083:function(e,r,t){"use strict";e.exports=t(1084)},1084:function(e,r,t){"use strict";var n=t(1085),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function O(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||v}function j(){}function k(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||v}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var x=k.prototype=new j;x.constructor=k,n(x,O.prototype),x.isPureReactComponent=!0;var w={current:null},_=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,t){var n,o={},a=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(a=""+r.key),r)_.call(r,n)&&!S.hasOwnProperty(n)&&(o[n]=r[n]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:u,type:e,key:a,ref:c,props:o,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var C=/\/+/g,$=[];function R(e,r,t,n){if($.length){var o=$.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function N(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>$.length&&$.push(e)}function D(e,r,t){return null==e?0:function e(r,t,n,o){var c=typeof r;"undefined"!==c&&"boolean"!==c||(r=null);var i=!1;if(null===r)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(r.$$typeof){case u:case a:i=!0}}if(i)return n(o,r,""===t?"."+T(r,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(r))for(var l=0;l<r.length;l++){var f=t+T(c=r[l],l);i+=e(c,f,n,o)}else if(null===r||"object"!=typeof r?f=null:f="function"==typeof(f=m&&r[m]||r["@@iterator"])?f:null,"function"==typeof f)for(r=f.call(r),l=0;!(c=r.next()).done;)i+=e(c=c.value,f=t+T(c,l++),n,o);else if("object"===c)throw n=""+r,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(r).join(", ")+"}":n,""));return i}(e,"",r,t)}function T(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function I(e,r){e.func.call(e.context,r,e.count++)}function M(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?A(e,n,t,(function(e){return e})):null!=e&&(E(e)&&(e=function(e,r){return{$$typeof:u,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+t)),n.push(e))}function A(e,r,t,n,o){var u="";null!=t&&(u=(""+t).replace(C,"$&/")+"/"),D(e,M,r=R(r,u,n,o)),N(r)}var q={current:null};function U(){var e=q.current;if(null===e)throw Error(h(321));return e}var L={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return A(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;D(e,I,r=R(null,null,r,t)),N(r)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var r=[];return A(e,r,null,(function(e){return e})),r},only:function(e){if(!E(e))throw Error(h(143));return e}},r.Component=O,r.Fragment=c,r.Profiler=l,r.PureComponent=k,r.StrictMode=i,r.Suspense=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,r.cloneElement=function(e,r,t){if(null==e)throw Error(h(267,e));var o=n({},e.props),a=e.key,c=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,i=w.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in r)_.call(r,f)&&!S.hasOwnProperty(f)&&(o[f]=void 0===r[f]&&void 0!==l?l[f]:r[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){l=Array(f);for(var p=0;p<f;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:u,type:e.type,key:a,ref:c,props:o,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:p,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},r.createElement=P,r.createFactory=function(e){var r=P.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=E,r.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return U().useCallback(e,r)},r.useContext=function(e,r){return U().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return U().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return U().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return U().useLayoutEffect(e,r)},r.useMemo=function(e,r){return U().useMemo(e,r)},r.useReducer=function(e,r,t){return U().useReducer(e,r,t)},r.useRef=function(e){return U().useRef(e)},r.useState=function(e){return U().useState(e)},r.version="16.13.1"},1085:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,c,i=a(e),l=1;l<arguments.length;l++){for(var f in t=Object(arguments[l]))o.call(t,f)&&(i[f]=t[f]);if(n){c=n(t);for(var p=0;p<c.length;p++)u.call(t,c[p])&&(i[c[p]]=t[c[p]])}}return i}},584:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return f}));var n=t(2),o=t(6),u=(t(1083),t(1082)),a={id:"globals",title:"@graphback/runtime-knex",sidebar_label:"Globals"},c={unversionedId:"api/graphback-runtime-knex/globals",id:"api/graphback-runtime-knex/globals",isDocsHomePage:!1,title:"@graphback/runtime-knex",description:"Index",source:"@site/../docs/api/graphback-runtime-knex/globals.md",slug:"/api/graphback-runtime-knex/globals",permalink:"/docs/next/api/graphback-runtime-knex/globals",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-runtime-knex/globals.md",version:"current",sidebar_label:"Globals"},i=[{value:"Index",id:"index",children:[{value:"Modules",id:"modules",children:[]}]}],l={rightToc:i};function f(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(u.b)("h2",{id:"index"},"Index"),Object(u.b)("h3",{id:"modules"},"Modules"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/modules/_knexdbdataprovider_"}),'"KnexDBDataProvider"')),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/modules/_sqliteknexdbdataprovider_"}),'"SQLiteKnexDBDataProvider"')),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/modules/_createknexdbprovider_"}),'"createKnexDbProvider"')),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/modules/_index_"}),'"index"')),Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-runtime-knex/modules/_knexquerymapper_"}),'"knexQueryMapper"'))))}f.isMDXComponent=!0}}]);