/*! For license information please see b6313077.d2543b89.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[729],{1082:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var r=a.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(t),f=n,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||o;return t?a.a.createElement(d,i(i({ref:r},l),{},{components:t})):a.a.createElement(d,i({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1083:function(e,r,t){"use strict";e.exports=t(1084)},1084:function(e,r,t){"use strict";var n=t(1085),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,u=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.forward_ref"):60112,f=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function g(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||j}function _(){}function v(e,r,t){this.props=e,this.context=r,this.refs=y,this.updater=t||j}g.prototype.isReactComponent={},g.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,r,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=g.prototype;var N=v.prototype=new _;N.constructor=v,n(N,g.prototype),N.isPureReactComponent=!0;var k={current:null},w=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function x(e,r,t){var n,a={},c=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(c=""+r.key),r)w.call(r,n)&&!E.hasOwnProperty(n)&&(a[n]=r[n]);var u=arguments.length-2;if(1===u)a.children=t;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];a.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===a[n]&&(a[n]=u[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:k.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var P=/\/+/g,C=[];function D(e,r,t,n){if(C.length){var a=C.pop();return a.result=e,a.keyPrefix=r,a.func=t,a.context=n,a.count=0,a}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function R(e,r,t){return null==e?0:function e(r,t,n,a){var i=typeof r;"undefined"!==i&&"boolean"!==i||(r=null);var u=!1;if(null===r)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(r.$$typeof){case o:case c:u=!0}}if(u)return n(a,r,""===t?"."+I(r,0):t),1;if(u=0,t=""===t?".":t+":",Array.isArray(r))for(var l=0;l<r.length;l++){var s=t+I(i=r[l],l);u+=e(i,s,n,a)}else if(null===r||"object"!=typeof r?s=null:s="function"==typeof(s=O&&r[O]||r["@@iterator"])?s:null,"function"==typeof s)for(r=s.call(r),l=0;!(i=r.next()).done;)u+=e(i=i.value,s=t+I(i,l++),n,a);else if("object"===i)throw n=""+r,Error(h(31,"[object Object]"===n?"object with keys {"+Object.keys(r).join(", ")+"}":n,""));return u}(e,"",r,t)}function I(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function T(e,r){e.func.call(e.context,r,e.count++)}function A(e,r,t){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?q(e,n,t,(function(e){return e})):null!=e&&(S(e)&&(e=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(P,"$&/")+"/")+t)),n.push(e))}function q(e,r,t,n,a){var o="";null!=t&&(o=(""+t).replace(P,"$&/")+"/"),R(e,A,r=D(r,o,n,a)),$(r)}var M={current:null};function L(){var e=M.current;if(null===e)throw Error(h(321));return e}var U={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return q(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;R(e,T,r=D(null,null,r,t)),$(r)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var r=[];return q(e,r,null,(function(e){return e})),r},only:function(e){if(!S(e))throw Error(h(143));return e}},r.Component=g,r.Fragment=i,r.Profiler=l,r.PureComponent=v,r.StrictMode=u,r.Suspense=f,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,r.cloneElement=function(e,r,t){if(null==e)throw Error(h(267,e));var a=n({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,u=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in r)w.call(r,s)&&!E.hasOwnProperty(s)&&(a[s]=void 0===r[s]&&void 0!==l?l[s]:r[s])}var s=arguments.length-2;if(1===s)a.children=t;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];a.children=l}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:p,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=x,r.createFactory=function(e){var r=x.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:b,render:e}},r.isValidElement=S,r.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:d,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return L().useCallback(e,r)},r.useContext=function(e,r){return L().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return L().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return L().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return L().useLayoutEffect(e,r)},r.useMemo=function(e,r){return L().useMemo(e,r)},r.useReducer=function(e,r,t){return L().useReducer(e,r,t)},r.useRef=function(e){return L().useRef(e)},r.useState=function(e){return L().useState(e)},r.version="16.13.1"},1085:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,r){for(var t,i,u=c(e),l=1;l<arguments.length;l++){for(var s in t=Object(arguments[l]))a.call(t,s)&&(u[s]=t[s]);if(n){i=n(t);for(var p=0;p<i.length;p++)o.call(t,i[p])&&(u[i[p]]=t[i[p]])}}return u}},783:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return s}));var n=t(2),a=t(6),o=(t(1083),t(1082)),c={id:"_runtime_nodataerror_.nodataerror",title:"NoDataError",sidebar_label:"NoDataError"},i={unversionedId:"api/graphback-core/classes/_runtime_nodataerror_.nodataerror",id:"api/graphback-core/classes/_runtime_nodataerror_.nodataerror",isDocsHomePage:!1,title:"NoDataError",description:"Error thrown when database query succeded without any data",source:"@site/../docs/api/graphback-core/classes/_runtime_nodataerror_.nodataerror.md",slug:"/api/graphback-core/classes/_runtime_nodataerror_.nodataerror",permalink:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/classes/_runtime_nodataerror_.nodataerror.md",version:"current",sidebar_label:"NoDataError"},u=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"message",id:"message",children:[]},{value:"name",id:"name",children:[]},{value:"<code>Optional</code> stack",id:"optional-stack",children:[]},{value:"<code>Static</code> Error",id:"static-error",children:[]}]}],l={rightToc:u};function s(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Error thrown when database query succeded without any data\nwhich is not handled by GraphQL specification"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror#static-error"}),"Error")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("strong",{parentName:"p"},"NoDataError")))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"constructors"},"Constructors"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror#constructor"}),"constructor"))),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror#message"}),"message")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror#name"}),"name")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror#optional-stack"}),"stack")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror#static-error"}),"Error"))),Object(o.b)("h2",{id:"constructors-1"},"Constructors"),Object(o.b)("h3",{id:"constructor"},"constructor"),Object(o.b)("p",null,"+"," ",Object(o.b)("strong",{parentName:"p"},"new NoDataError"),"(",Object(o.b)("inlineCode",{parentName:"p"},"message"),": string): ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror"}),"NoDataError"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphback-core/src/runtime/NoDataError.ts#L5"}),"packages/graphback-core/src/runtime/NoDataError.ts:5"))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"message")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror"}),"NoDataError"))),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("h3",{id:"message"},"message"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"message"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror"}),"NoDataError"),".",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror#message"}),"message"))),Object(o.b)("p",null,"Defined in node_modules/typescript/lib/lib.es5.d.ts:974"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"name"},"name"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"name"),": ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror"}),"NoDataError"),".",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror#name"}),"name"))),Object(o.b)("p",null,"Defined in node_modules/typescript/lib/lib.es5.d.ts:973"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-stack"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," stack"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"stack"),"? : ",Object(o.b)("em",{parentName:"p"},"string")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Inherited from ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror"}),"NoDataError"),".",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-core/classes/_runtime_nodataerror_.nodataerror#optional-stack"}),"stack"))),Object(o.b)("p",null,"Defined in node_modules/typescript/lib/lib.es5.d.ts:975"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"static-error"},Object(o.b)("inlineCode",{parentName:"h3"},"Static")," Error"),Object(o.b)("p",null,"\u25aa ",Object(o.b)("strong",{parentName:"p"},"Error"),": ",Object(o.b)("em",{parentName:"p"},"ErrorConstructor")),Object(o.b)("p",null,"Defined in node_modules/typescript/lib/lib.es5.d.ts:984"))}s.isMDXComponent=!0}}]);