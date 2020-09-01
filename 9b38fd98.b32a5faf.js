/*! For license information please see 9b38fd98.b32a5faf.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[607],{1082:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},f=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),b=n,m=f["".concat(i,".").concat(b)]||f[b]||s[b]||o;return r?a.a.createElement(m,u(u({ref:t},c),{},{components:r})):a.a.createElement(m,u({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1083:function(e,t,r){"use strict";e.exports=r(1084)},1084:function(e,t,r){"use strict";var n=r(1085),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,u=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,c=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,f=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,d=a?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function j(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||O}function v(){}function _(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||O}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var w=_.prototype=new v;w.constructor=_,n(w,j.prototype),w.isPureReactComponent=!0;var P={current:null},k=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,r){var n,a={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,n)&&!S.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var c=Array(l),p=0;p<l;p++)c[p]=arguments[p+2];a.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:i,ref:u,props:a,_owner:P.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g,E=[];function $(e,t,r,n){if(E.length){var a=E.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>E.length&&E.push(e)}function R(e,t,r){return null==e?0:function e(t,r,n,a){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var l=!1;if(null===t)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case o:case i:l=!0}}if(l)return n(a,t,""===r?"."+q(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var c=0;c<t.length;c++){var p=r+q(u=t[c],c);l+=e(u,p,n,a)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=y&&t[y]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),c=0;!(u=t.next()).done;)l+=e(u=u.value,p=r+q(u,c++),n,a);else if("object"===u)throw n=""+t,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return l}(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,n,r,(function(e){return e})):null!=e&&(N(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),n.push(e))}function D(e,t,r,n,a){var o="";null!=r&&(o=(""+r).replace(C,"$&/")+"/"),R(e,I,t=$(t,o,n,a)),T(t)}var A={current:null};function U(){var e=A.current;if(null===e)throw Error(g(321));return e}var L={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return D(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;R(e,M,t=$(null,null,t,r)),T(t)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){if(!N(e))throw Error(g(143));return e}},t.Component=j,t.Fragment=u,t.Profiler=c,t.PureComponent=_,t.StrictMode=l,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,r){if(null==e)throw Error(g(267,e));var a=n({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=P.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(p in t)k.call(t,p)&&!S.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==c?c[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=r;else if(1<p){c=Array(p);for(var f=0;f<p;f++)c[f]=arguments[f+2];a.children=c}return{$$typeof:o,type:e.type,key:i,ref:u,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=N,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return U().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,r){return U().useReducer(e,t,r)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1085:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,u,l=i(e),c=1;c<arguments.length;c++){for(var p in r=Object(arguments[c]))a.call(r,p)&&(l[p]=r[p]);if(n){u=n(r);for(var f=0;f<u.length;f++)o.call(r,u[f])&&(l[u[f]]=r[u[f]])}}return l}},662:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(1083),r(1082)),i={id:"_plugin_migrateplugin_",title:"plugin/MigratePlugin",sidebar_label:"plugin/MigratePlugin"},u={unversionedId:"api/graphql-migrations/modules/_plugin_migrateplugin_",id:"api/graphql-migrations/modules/_plugin_migrateplugin_",isDocsHomePage:!1,title:"plugin/MigratePlugin",description:"Index",source:"@site/../docs/api/graphql-migrations/modules/_plugin_migrateplugin_.md",slug:"/api/graphql-migrations/modules/_plugin_migrateplugin_",permalink:"/docs/next/api/graphql-migrations/modules/_plugin_migrateplugin_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-migrations/modules/_plugin_migrateplugin_.md",version:"current",sidebar_label:"plugin/MigratePlugin"},l=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Type aliases",id:"type-aliases",children:[]}]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"WriteCallback",id:"writecallback",children:[]}]}],c={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"interfaces"},"Interfaces"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_plugin_migrateplugin_.migrateplugin"}),"MigratePlugin")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_plugin_migrateplugin_.writeparams"}),"WriteParams"))),Object(o.b)("h3",{id:"type-aliases"},"Type aliases"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/modules/_plugin_migrateplugin_#writecallback"}),"WriteCallback"))),Object(o.b)("h2",{id:"type-aliases-1"},"Type aliases"),Object(o.b)("h3",{id:"writecallback"},"WriteCallback"),Object(o.b)("p",null,"\u01ac ",Object(o.b)("strong",{parentName:"p"},"WriteCallback"),": ",Object(o.b)("em",{parentName:"p"},"function")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphql-migrations/src/plugin/MigratePlugin.ts#L4"}),"plugin/MigratePlugin.ts:4"))),Object(o.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"op"),": any, ",Object(o.b)("inlineCode",{parentName:"p"},"transaction"),": Transaction): ",Object(o.b)("em",{parentName:"p"},"any")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"op")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"transaction")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Transaction")))))}p.isMDXComponent=!0}}]);