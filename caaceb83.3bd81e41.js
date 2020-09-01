/*! For license information please see caaceb83.3bd81e41.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[815],{1082:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},f=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(r),b=n,m=f["".concat(i,".").concat(b)]||f[b]||s[b]||o;return r?a.a.createElement(m,p(p({ref:t},l),{},{components:r})):a.a.createElement(m,p({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},1083:function(e,t,r){"use strict";e.exports=r(1084)},1084:function(e,t,r){"use strict";var n=r(1085),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,p=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,l=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,f=a?Symbol.for("react.context"):60110,s=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,d=a?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j={};function g(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||h}function _(){}function v(e,t,r){this.props=e,this.context=t,this.refs=j,this.updater=r||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=g.prototype;var x=v.prototype=new _;x.constructor=v,n(x,g.prototype),x.isPureReactComponent=!0;var N={current:null},w=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,a={},i=null,p=null;if(null!=t)for(n in void 0!==t.ref&&(p=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,n)&&!P.hasOwnProperty(n)&&(a[n]=t[n]);var c=arguments.length-2;if(1===c)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(n in c=e.defaultProps)void 0===a[n]&&(a[n]=c[n]);return{$$typeof:o,type:e,key:i,ref:p,props:a,_owner:N.current}}function q(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g,C=[];function E(e,t,r,n){if(C.length){var a=C.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>C.length&&C.push(e)}function $(e,t,r){return null==e?0:function e(t,r,n,a){var p=typeof t;"undefined"!==p&&"boolean"!==p||(t=null);var c=!1;if(null===t)c=!0;else switch(p){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case o:case i:c=!0}}if(c)return n(a,t,""===r?"."+R(t,0):r),1;if(c=0,r=""===r?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){var u=r+R(p=t[l],l);c+=e(p,u,n,a)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=O&&t[O]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),l=0;!(p=t.next()).done;)c+=e(p=p.value,u=r+R(p,l++),n,a);else if("object"===p)throw n=""+t,Error(y(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return c}(e,"",t,r)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function D(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,n,r,(function(e){return e})):null!=e&&(q(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(k,"$&/")+"/")+r)),n.push(e))}function A(e,t,r,n,a){var o="";null!=r&&(o=(""+r).replace(k,"$&/")+"/"),$(e,I,t=E(t,o,n,a)),T(t)}var U={current:null};function M(){var e=U.current;if(null===e)throw Error(y(321));return e}var F={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return A(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;$(e,D,t=E(null,null,t,r)),T(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!q(e))throw Error(y(143));return e}},t.Component=g,t.Fragment=p,t.Profiler=l,t.PureComponent=v,t.StrictMode=c,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,r){if(null==e)throw Error(y(267,e));var a=n({},e.props),i=e.key,p=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(p=t.ref,c=N.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)w.call(t,u)&&!P.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){l=Array(u);for(var f=0;f<u;f++)l[f]=arguments[f+2];a.children=l}return{$$typeof:o,type:e.type,key:i,ref:p,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=q,t.lazy=function(e){return{$$typeof:d,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return M().useCallback(e,t)},t.useContext=function(e,t){return M().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return M().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return M().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return M().useLayoutEffect(e,t)},t.useMemo=function(e,t){return M().useMemo(e,t)},t.useReducer=function(e,t,r){return M().useReducer(e,t,r)},t.useRef=function(e){return M().useRef(e)},t.useState=function(e){return M().useState(e)},t.version="16.13.1"},1085:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,p,c=i(e),l=1;l<arguments.length;l++){for(var u in r=Object(arguments[l]))a.call(r,u)&&(c[u]=r[u]);if(n){p=n(r);for(var f=0;f<p.length;f++)o.call(r,p[f])&&(c[p[f]]=r[p[f]])}}return c}},872:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(1083),r(1082)),i={id:"_diff_operation_.operation",title:"Operation",sidebar_label:"Operation"},p={unversionedId:"api/graphql-migrations/interfaces/_diff_operation_.operation",id:"api/graphql-migrations/interfaces/_diff_operation_.operation",isDocsHomePage:!1,title:"Operation",description:"Hierarchy",source:"@site/../docs/api/graphql-migrations/interfaces/_diff_operation_.operation.md",slug:"/api/graphql-migrations/interfaces/_diff_operation_.operation",permalink:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-migrations/interfaces/_diff_operation_.operation.md",version:"current",sidebar_label:"Operation"},c=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"priority",id:"priority",children:[]},{value:"type",id:"type",children:[]}]}],l={rightToc:c};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Operation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tablecreateoperation"}),"TableCreateOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tablerenameoperation"}),"TableRenameOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tablecommentsetoperation"}),"TableCommentSetOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tabledropoperation"}),"TableDropOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tableindexcreateoperation"}),"TableIndexCreateOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tableindexdropoperation"}),"TableIndexDropOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tableprimarysetoperation"}),"TablePrimarySetOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tableprimarydropoperation"}),"TablePrimaryDropOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tableuniquecreateoperation"}),"TableUniqueCreateOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tableuniquedropoperation"}),"TableUniqueDropOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tableforeigncreateoperation"}),"TableForeignCreateOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.tableforeigndropoperation"}),"TableForeignDropOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.columncreateoperation"}),"ColumnCreateOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.columnalteroperation"}),"ColumnAlterOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.columnrenameoperation"}),"ColumnRenameOperation")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.columndropoperation"}),"ColumnDropOperation")))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation#priority"}),"priority")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_diff_operation_.operation#type"}),"type"))),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("h3",{id:"priority"},"priority"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"priority"),": ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphql-migrations/src/diff/Operation.ts#L23"}),"diff/Operation.ts:23"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"type"},"type"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"type"),": ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/modules/_diff_operation_#operationtype"}),"OperationType"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphql-migrations/src/diff/Operation.ts#L22"}),"diff/Operation.ts:22"))))}u.isMDXComponent=!0}}]);