/*! For license information please see f3d3e2a6.f6cab4cf.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[981],{1037:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return p}));var n=t(2),o=t(6),a=(t(1083),t(1082)),c={id:"_graphbackconfig_.graphbackconfig",title:"GraphbackConfig",sidebar_label:"GraphbackConfig"},i={unversionedId:"api/graphback/interfaces/_graphbackconfig_.graphbackconfig",id:"api/graphback/interfaces/_graphbackconfig_.graphbackconfig",isDocsHomePage:!1,title:"GraphbackConfig",description:"Global configuration for Graphback ecosystem that represents each plugin",source:"@site/../docs/api/graphback/interfaces/_graphbackconfig_.graphbackconfig.md",slug:"/api/graphback/interfaces/_graphbackconfig_.graphbackconfig",permalink:"/docs/next/api/graphback/interfaces/_graphbackconfig_.graphbackconfig",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback/interfaces/_graphbackconfig_.graphbackconfig.md",version:"current",sidebar_label:"GraphbackConfig"},u=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Optional</code> crud",id:"optional-crud",children:[]},{value:"<code>Optional</code> plugins",id:"optional-plugins",children:[]}]}],l={rightToc:u};function p(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Global configuration for Graphback ecosystem that represents each plugin"),Object(a.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"GraphbackConfig"))),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback/interfaces/_graphbackconfig_.graphbackconfig#optional-crud"}),"crud")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback/interfaces/_graphbackconfig_.graphbackconfig#optional-plugins"}),"plugins"))),Object(a.b)("h2",{id:"properties-1"},"Properties"),Object(a.b)("h3",{id:"optional-crud"},Object(a.b)("inlineCode",{parentName:"h3"},"Optional")," crud"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"crud"),"? : ",Object(a.b)("em",{parentName:"p"},"GraphbackCRUDGeneratorConfig")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphback/src/GraphbackConfig.ts#L9"}),"GraphbackConfig.ts:9"))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"optional-plugins"},Object(a.b)("inlineCode",{parentName:"h3"},"Optional")," plugins"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"plugins"),"? : ",Object(a.b)("em",{parentName:"p"},"object | any")),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Defined in ",Object(a.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphback/src/GraphbackConfig.ts#L11"}),"GraphbackConfig.ts:11"))))}p.isMDXComponent=!0},1082:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return h}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),p=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=p(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},b=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=p(t),b=n,h=f["".concat(c,".").concat(b)]||f[b]||s[b]||a;return t?o.a.createElement(h,i(i({ref:r},l),{},{components:t})):o.a.createElement(h,i({ref:r},l))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=b;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},1083:function(e,r,t){"use strict";e.exports=t(1084)},1084:function(e,r,t){"use strict";var n=t(1085),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,c=o?Symbol.for("react.portal"):60106,i=o?Symbol.for("react.fragment"):60107,u=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,h=o?Symbol.for("react.memo"):60115,d=o?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function v(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||m}function j(){}function k(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,r,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=v.prototype;var _=k.prototype=new j;_.constructor=k,n(_,v.prototype),_.isPureReactComponent=!0;var w={current:null},C=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function S(e,r,t){var n,o={},c=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)C.call(r,n)&&!P.hasOwnProperty(n)&&(o[n]=r[n]);var u=arguments.length-2;if(1===u)o.children=t;else if(1<u){for(var l=Array(u),p=0;p<u;p++)l[p]=arguments[p+2];o.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===o[n]&&(o[n]=u[n]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var E=/\/+/g,N=[];function $(e,r,t,n){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function D(e,r,t){return null==e?0:function e(r,t,n,o){var i=typeof r;"undefined"!==i&&"boolean"!==i||(r=null);var u=!1;if(null===r)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(r.$$typeof){case a:case c:u=!0}}if(u)return n(o,r,""===t?"."+G(r,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(r))for(var l=0;l<r.length;l++){var p=t+G(i=r[l],l);u+=e(i,p,n,o)}else if(null===r||"object"!=typeof r?p=null:p="function"==typeof(p=y&&r[y]||r["@@iterator"])?p:null,"function"==typeof p)for(r=p.call(r),l=0;!(i=r.next()).done;)u+=e(i=i.value,p=t+G(i,l++),n,o);else if("object"===i)throw n=""+r,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(r).join(", ")+"}":n,""));return u}(e,"",r,t)}function G(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function T(e,r){e.func.call(e.context,r,e.count++)}function I(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?A(e,n,t,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,r){return{$$typeof:a,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+t)),n.push(e))}function A(e,r,t,n,o){var a="";null!=t&&(a=(""+t).replace(E,"$&/")+"/"),D(e,I,r=$(r,a,n,o)),R(r)}var M={current:null};function U(){var e=M.current;if(null===e)throw Error(g(321));return e}var L={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return A(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;D(e,T,r=$(null,null,r,t)),R(r)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var r=[];return A(e,r,null,(function(e){return e})),r},only:function(e){if(!x(e))throw Error(g(143));return e}},r.Component=v,r.Fragment=i,r.Profiler=l,r.PureComponent=k,r.StrictMode=u,r.Suspense=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,r.cloneElement=function(e,r,t){if(null==e)throw Error(g(267,e));var o=n({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,u=w.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(p in r)C.call(r,p)&&!P.hasOwnProperty(p)&&(o[p]=void 0===r[p]&&void 0!==l?l[p]:r[p])}var p=arguments.length-2;if(1===p)o.children=t;else if(1<p){l=Array(p);for(var f=0;f<p;f++)l[f]=arguments[f+2];o.children=l}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:f,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},r.createElement=S,r.createFactory=function(e){var r=S.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=x,r.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:h,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return U().useCallback(e,r)},r.useContext=function(e,r){return U().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return U().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return U().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return U().useLayoutEffect(e,r)},r.useMemo=function(e,r){return U().useMemo(e,r)},r.useReducer=function(e,r,t){return U().useReducer(e,r,t)},r.useRef=function(e){return U().useRef(e)},r.useState=function(e){return U().useState(e)},r.version="16.13.1"},1085:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,i,u=c(e),l=1;l<arguments.length;l++){for(var p in t=Object(arguments[l]))o.call(t,p)&&(u[p]=t[p]);if(n){i=n(t);for(var f=0;f<i.length;f++)a.call(t,i[f])&&(u[i[f]]=t[i[f]])}}return u}}}]);