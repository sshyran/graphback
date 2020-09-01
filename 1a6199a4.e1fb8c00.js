/*! For license information please see 1a6199a4.e1fb8c00.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{1082:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return s}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),o=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=o(a),m=r,s=u["".concat(b,".").concat(m)]||u[m]||d[m]||c;return a?n.a.createElement(s,i(i({ref:t},p),{},{components:a})):n.a.createElement(s,i({ref:t},p))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var p=2;p<c;p++)b[p]=a[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1083:function(e,t,a){"use strict";e.exports=a(1084)},1084:function(e,t,a){"use strict";var r=a(1085),n="function"==typeof Symbol&&Symbol.for,c=n?Symbol.for("react.element"):60103,b=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,l=n?Symbol.for("react.strict_mode"):60108,p=n?Symbol.for("react.profiler"):60114,o=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,d=n?Symbol.for("react.forward_ref"):60112,m=n?Symbol.for("react.suspense"):60113,s=n?Symbol.for("react.memo"):60115,O=n?Symbol.for("react.lazy"):60116,j="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function y(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||h}function N(){}function k(e,t,a){this.props=e,this.context=t,this.refs=g,this.updater=a||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=y.prototype;var v=k.prototype=new N;v.constructor=k,r(v,y.prototype),v.isPureReactComponent=!0;var _={current:null},P=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,a){var r,n={},b=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(b=""+t.key),t)P.call(t,r)&&!C.hasOwnProperty(r)&&(n[r]=t[r]);var l=arguments.length-2;if(1===l)n.children=a;else if(1<l){for(var p=Array(l),o=0;o<l;o++)p[o]=arguments[o+2];n.children=p}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===n[r]&&(n[r]=l[r]);return{$$typeof:c,type:e,key:b,ref:i,props:n,_owner:_.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var D=/\/+/g,T=[];function S(e,t,a,r){if(T.length){var n=T.pop();return n.result=e,n.keyPrefix=t,n.func=a,n.context=r,n.count=0,n}return{result:e,keyPrefix:t,func:a,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function E(e,t,a){return null==e?0:function e(t,a,r,n){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case c:case b:l=!0}}if(l)return r(n,t,""===a?"."+G(t,0):a),1;if(l=0,a=""===a?".":a+":",Array.isArray(t))for(var p=0;p<t.length;p++){var o=a+G(i=t[p],p);l+=e(i,o,r,n)}else if(null===t||"object"!=typeof t?o=null:o="function"==typeof(o=j&&t[j]||t["@@iterator"])?o:null,"function"==typeof o)for(t=o.call(t),p=0;!(i=t.next()).done;)l+=e(i=i.value,o=a+G(i,p++),r,n);else if("object"===i)throw r=""+t,Error(f(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,a)}function G(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function F(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,a){var r=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?I(e,r,a,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+a)),r.push(e))}function I(e,t,a,r,n){var c="";null!=a&&(c=(""+a).replace(D,"$&/")+"/"),E(e,$,t=S(t,c,r,n)),R(t)}var q={current:null};function L(){var e=q.current;if(null===e)throw Error(f(321));return e}var A={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,a){if(null==e)return e;var r=[];return I(e,r,null,t,a),r},forEach:function(e,t,a){if(null==e)return e;E(e,F,t=S(null,null,t,a)),R(t)},count:function(e){return E(e,(function(){return null}),null)},toArray:function(e){var t=[];return I(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(f(143));return e}},t.Component=y,t.Fragment=i,t.Profiler=p,t.PureComponent=k,t.StrictMode=l,t.Suspense=m,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,a){if(null==e)throw Error(f(267,e));var n=r({},e.props),b=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=_.current),void 0!==t.key&&(b=""+t.key),e.type&&e.type.defaultProps)var p=e.type.defaultProps;for(o in t)P.call(t,o)&&!C.hasOwnProperty(o)&&(n[o]=void 0===t[o]&&void 0!==p?p[o]:t[o])}var o=arguments.length-2;if(1===o)n.children=a;else if(1<o){p=Array(o);for(var u=0;u<o;u++)p[u]=arguments[u+2];n.children=p}return{$$typeof:c,type:e.type,key:b,ref:i,props:n,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:O,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return L().useCallback(e,t)},t.useContext=function(e,t){return L().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return L().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return L().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return L().useLayoutEffect(e,t)},t.useMemo=function(e,t){return L().useMemo(e,t)},t.useReducer=function(e,t,a){return L().useReducer(e,t,a)},t.useRef=function(e){return L().useRef(e)},t.useState=function(e){return L().useState(e)},t.version="16.13.1"},1085:function(e,t,a){"use strict";var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function b(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var a,i,l=b(e),p=1;p<arguments.length;p++){for(var o in a=Object(arguments[p]))n.call(a,o)&&(l[o]=a[o]);if(r){i=r(a);for(var u=0;u<i.length;u++)c.call(a,i[u])&&(l[i[u]]=a[i[u]])}}return l}},165:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var r=a(2),n=a(6),c=(a(1083),a(1082)),b={id:"_runtime_graphbackdataprovider_.graphbackdataprovider",title:"GraphbackDataProvider",sidebar_label:"GraphbackDataProvider"},i={unversionedId:"api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider",id:"api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider",isDocsHomePage:!1,title:"GraphbackDataProvider",description:"Graphback layered architecture component that can be called",source:"@site/../docs/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider.md",slug:"/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider",permalink:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider.md",version:"current",sidebar_label:"GraphbackDataProvider",sidebar:"docs",previous:{title:"GraphbackAPIConfig",permalink:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig"},next:{title:"GraphBackPluginEngineOptions",permalink:"/docs/next/api/graphback-core/interfaces/_plugin_graphbackpluginengine_.graphbackpluginengineoptions"}},l=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchRead",id:"batchread",children:[]},{value:"count",id:"count",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"update",id:"update",children:[]}]}],p={rightToc:l};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Graphback layered architecture component that can be called\nfrom the service layer in both RESTFULL and GraphQL middlewares."),Object(c.b)("p",null,"Graphback implements server side procesing using following flow:"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"GraphQL Resolvers")," ->  ",Object(c.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," ","[1-*]"," -> ",Object(c.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider")),Object(c.b)("p",null,"Data layer can be composable (each provider can reference multiple layers of other providers)."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"see"))," GraphbackCRUDService"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("p",null,"\u25aa ",Object(c.b)("strong",{parentName:"p"},"Type")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GraphbackDataProvider"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider#batchread"}),"batchRead")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider#count"}),"count")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider#create"}),"create")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider#delete"}),"delete")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider#findby"}),"findBy")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider#findone"}),"findOne")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider#update"}),"update"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"batchread"},"batchRead"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"batchRead"),"(",Object(c.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"ids"),": string[], ",Object(c.b)("inlineCode",{parentName:"p"},"filter"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),", ",Object(c.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L78"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:78"))),Object(c.b)("p",null,"Read multiple items by their id's (used for lazy data loading purposes)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"relationField")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"name of the field that will be used to match ids")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ids")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"array of identifiers that needs to be fetched")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter by specific type")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"count"},"count"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"count"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),"): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L68"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:68"))),Object(c.b)("p",null,"Implementation for counting number of objects with filtering capabilities"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter by specific type")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"create"},"create"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"create"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(c.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L26"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:26"))),Object(c.b)("p",null,"Implementation for object creation"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input data")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"delete"},"delete"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"delete"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(c.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L44"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:44"))),Object(c.b)("p",null,"Implementation for object deletes"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data used for checking consistency")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"findby"},"findBy"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"findBy"),"(",Object(c.b)("inlineCode",{parentName:"p"},"args?"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.findbyargs"}),"FindByArgs"),", ",Object(c.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L61"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:61"))),Object(c.b)("p",null,"Implementation for reading objects with filtering capabilities"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"args?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/interfaces/_runtime_interfaces_.findbyargs"}),"FindByArgs"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"findone"},"findOne"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"findOne"),"(",Object(c.b)("inlineCode",{parentName:"p"},"args"),": Partial\u2039Type\u203a, ",Object(c.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L52"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:52"))),Object(c.b)("p",null,"Implementation for finding a single unique object"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"args")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter by unique attriburtes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"update"},"update"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"update"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(c.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/97ac02a/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L35"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:35"))),Object(c.b)("p",null,"Implementation for object updates"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input data")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")))}o.isMDXComponent=!0}}]);