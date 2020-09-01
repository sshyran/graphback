/*! For license information please see d8d6b486.2e4b256c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[868],{1082:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(r),s=n,f=p["".concat(c,".").concat(s)]||p[s]||d[s]||o;return r?a.a.createElement(f,i(i({ref:t},b),{},{components:r})):a.a.createElement(f,i({ref:t},b))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=r[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},1083:function(e,t,r){"use strict";e.exports=r(1084)},1084:function(e,t,r){"use strict";var n=r(1085),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,b=a?Symbol.for("react.profiler"):60114,u=a?Symbol.for("react.provider"):60109,p=a?Symbol.for("react.context"):60110,d=a?Symbol.for("react.forward_ref"):60112,s=a?Symbol.for("react.suspense"):60113,f=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function O(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function v(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||j}function h(){}function N(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||j}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(O(85));this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=v.prototype;var _=N.prototype=new h;_.constructor=N,n(_,v.prototype),_.isPureReactComponent=!0;var D={current:null},P=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var n,a={},c=null,i=null;if(null!=t)for(n in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)P.call(t,n)&&!k.hasOwnProperty(n)&&(a[n]=t[n]);var l=arguments.length-2;if(1===l)a.children=r;else if(1<l){for(var b=Array(l),u=0;u<l;u++)b[u]=arguments[u+2];a.children=b}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:D.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g,x=[];function E(e,t,r,n){if(x.length){var a=x.pop();return a.result=e,a.keyPrefix=t,a.func=r,a.context=n,a.count=0,a}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function M(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function $(e,t,r){return null==e?0:function e(t,r,n,a){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case o:case c:l=!0}}if(l)return n(a,t,""===r?"."+R(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var b=0;b<t.length;b++){var u=r+R(i=t[b],b);l+=e(i,u,n,a)}else if(null===t||"object"!=typeof t?u=null:u="function"==typeof(u=y&&t[y]||t["@@iterator"])?u:null,"function"==typeof u)for(t=u.call(t),b=0;!(i=t.next()).done;)l+=e(i=i.value,u=r+R(i,b++),n,a);else if("object"===i)throw n=""+t,Error(O(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return l}(e,"",t,r)}function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function T(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?A(e,n,r,(function(e){return e})):null!=e&&(w(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(C,"$&/")+"/")+r)),n.push(e))}function A(e,t,r,n,a){var o="";null!=r&&(o=(""+r).replace(C,"$&/")+"/"),$(e,I,t=E(t,o,n,a)),M(t)}var F={current:null};function L(){var e=F.current;if(null===e)throw Error(O(321));return e}var U={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:D,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,r){if(null==e)return e;var n=[];return A(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;$(e,T,t=E(null,null,t,r)),M(t)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var t=[];return A(e,t,null,(function(e){return e})),t},only:function(e){if(!w(e))throw Error(O(143));return e}},t.Component=v,t.Fragment=i,t.Profiler=b,t.PureComponent=N,t.StrictMode=l,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,t.cloneElement=function(e,t,r){if(null==e)throw Error(O(267,e));var a=n({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=D.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var b=e.type.defaultProps;for(u in t)P.call(t,u)&&!k.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==b?b[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){b=Array(u);for(var p=0;p<u;p++)b[p]=arguments[p+2];a.children=b}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return L().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,r){return L().useReducer(e,t,r)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.13.1"},1085:function(e,t,r){"use strict";var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var r,i,l=c(e),b=1;b<arguments.length;b++){for(var u in r=Object(arguments[b]))a.call(r,u)&&(l[u]=r[u]);if(n){i=n(r);for(var p=0;p<i.length;p++)o.call(r,i[p])&&(l[i[p]]=r[i[p]])}}return l}},924:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(1083),r(1082)),c={id:"_providers_createdatasyncmongodbprovider_",title:"providers/createDataSyncMongoDbProvider",sidebar_label:"providers/createDataSyncMongoDbProvider"},i={unversionedId:"api/graphback-datasync/modules/_providers_createdatasyncmongodbprovider_",id:"api/graphback-datasync/modules/_providers_createdatasyncmongodbprovider_",isDocsHomePage:!1,title:"providers/createDataSyncMongoDbProvider",description:"Index",source:"@site/../docs/api/graphback-datasync/modules/_providers_createdatasyncmongodbprovider_.md",slug:"/api/graphback-datasync/modules/_providers_createdatasyncmongodbprovider_",permalink:"/docs/next/api/graphback-datasync/modules/_providers_createdatasyncmongodbprovider_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/modules/_providers_createdatasyncmongodbprovider_.md",version:"current",sidebar_label:"providers/createDataSyncMongoDbProvider"},l=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"createDataSyncConflictProviderCreator",id:"createdatasyncconflictprovidercreator",children:[]},{value:"createDataSyncMongoDbProvider",id:"createdatasyncmongodbprovider",children:[]}]}],b={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"functions"},"Functions"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_providers_createdatasyncmongodbprovider_#createdatasyncconflictprovidercreator"}),"createDataSyncConflictProviderCreator")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_providers_createdatasyncmongodbprovider_#createdatasyncmongodbprovider"}),"createDataSyncMongoDbProvider"))),Object(o.b)("h2",{id:"functions-1"},"Functions"),Object(o.b)("h3",{id:"createdatasyncconflictprovidercreator"},"createDataSyncConflictProviderCreator"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"createDataSyncConflictProviderCreator"),"(",Object(o.b)("inlineCode",{parentName:"p"},"db"),": Db, ",Object(o.b)("inlineCode",{parentName:"p"},"conflictConfig?"),": ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig"),"): ",Object(o.b)("em",{parentName:"p"},"function")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphback-datasync/src/providers/createDataSyncMongoDbProvider.ts#L31"}),"packages/graphback-datasync/src/providers/createDataSyncMongoDbProvider.ts:31"))),Object(o.b)("p",null,"Creates a new Data Synchronization data provider creator for MongoDB with\noptionally specified per-model conflict configuration"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"db")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Db"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MongoDB Db object")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"conflictConfig?")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Object for configuring conflicts for individual models")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"function")),Object(o.b)("p",null,"\u25b8 (",Object(o.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(o.b)("em",{parentName:"p"},"GraphbackDataProvider")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"model")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"createdatasyncmongodbprovider"},"createDataSyncMongoDbProvider"),Object(o.b)("p",null,"\u25b8 ",Object(o.b)("strong",{parentName:"p"},"createDataSyncMongoDbProvider"),"(",Object(o.b)("inlineCode",{parentName:"p"},"db"),": Db): ",Object(o.b)("em",{parentName:"p"},"function")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphback-datasync/src/providers/createDataSyncMongoDbProvider.ts#L13"}),"packages/graphback-datasync/src/providers/createDataSyncMongoDbProvider.ts:13"))),Object(o.b)("p",null,"Creates a new Data synchronisation data provider for MongoDb"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"db")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Db"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"MongoDb connection")))),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Returns:")," ",Object(o.b)("em",{parentName:"p"},"function")),Object(o.b)("p",null,"\u25b8 (...",Object(o.b)("inlineCode",{parentName:"p"},"args"),": any[]): ",Object(o.b)("em",{parentName:"p"},"GraphbackDataProvider")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Parameters:")),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"...args")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"any[]")))))}u.isMDXComponent=!0}}]);