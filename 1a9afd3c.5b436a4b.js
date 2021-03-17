/*! For license information please see 1a9afd3c.5b436a4b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{1333:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),o=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=o(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=o(a),s=r,m=u["".concat(b,".").concat(s)]||u[s]||d[s]||c;return a?n.a.createElement(m,p(p({ref:t},l),{},{components:a})):n.a.createElement(m,p({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=s;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,b[1]=p;for(var l=2;l<c;l++)b[l]=a[l];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1334:function(e,t,a){"use strict";e.exports=a(1335)},1335:function(e,t,a){"use strict";var r=a(1336),n=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var b=60109,p=60110,i=60112;t.Suspense=60113;var l=60115,o=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;n=u("react.element"),c=u("react.portal"),t.Fragment=u("react.fragment"),t.StrictMode=u("react.strict_mode"),t.Profiler=u("react.profiler"),b=u("react.provider"),p=u("react.context"),i=u("react.forward_ref"),t.Suspense=u("react.suspense"),l=u("react.memo"),o=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,a){this.props=e,this.context=t,this.refs=O,this.updater=a||m}function f(){}function g(e,t,a){this.props=e,this.context=t,this.refs=O,this.updater=a||m}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(s(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},f.prototype=j.prototype;var h=g.prototype=new f;h.constructor=g,r(h,j.prototype),h.isPureReactComponent=!0;var N={current:null},y=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,a){var r,c={},b=null,p=null;if(null!=t)for(r in void 0!==t.ref&&(p=t.ref),void 0!==t.key&&(b=""+t.key),t)y.call(t,r)&&!_.hasOwnProperty(r)&&(c[r]=t[r]);var i=arguments.length-2;if(1===i)c.children=a;else if(1<i){for(var l=Array(i),o=0;o<i;o++)l[o]=arguments[o+2];c.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===c[r]&&(c[r]=i[r]);return{$$typeof:n,type:e,key:b,ref:p,props:c,_owner:N.current}}function v(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function w(e,t,a,r,b){var p=typeof e;"undefined"!==p&&"boolean"!==p||(e=null);var i=!1;if(null===e)i=!0;else switch(p){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case n:case c:i=!0}}if(i)return b=b(i=e),e=""===r?"."+C(i,0):r,Array.isArray(b)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),w(b,t,a,"",(function(e){return e}))):null!=b&&(v(b)&&(b=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(b,a+(!b.key||i&&i.key===b.key?"":(""+b.key).replace(P,"$&/")+"/")+e)),t.push(b)),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var l=0;l<e.length;l++){var o=r+C(p=e[l],l);i+=w(p,t,a,o,b)}else if("function"==typeof(o=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e)))for(e=o.call(e),l=0;!(p=e.next()).done;)i+=w(p=p.value,t,a,o=r+C(p,l++),b);else if("object"===p)throw t=""+e,Error(s(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return i}function D(e,t,a){if(null==e)return e;var r=[],n=0;return w(e,r,"","",(function(e){return t.call(a,e,n++)})),r}function T(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function R(){var e=x.current;if(null===e)throw Error(s(321));return e}var E={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:D,forEach:function(e,t,a){D(e,(function(){t.apply(this,arguments)}),a)},count:function(e){var t=0;return D(e,(function(){t++})),t},toArray:function(e){return D(e,(function(e){return e}))||[]},only:function(e){if(!v(e))throw Error(s(143));return e}},t.Component=j,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=E,t.cloneElement=function(e,t,a){if(null==e)throw Error(s(267,e));var c=r({},e.props),b=e.key,p=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(p=t.ref,i=N.current),void 0!==t.key&&(b=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(o in t)y.call(t,o)&&!_.hasOwnProperty(o)&&(c[o]=void 0===t[o]&&void 0!==l?l[o]:t[o])}var o=arguments.length-2;if(1===o)c.children=a;else if(1<o){l=Array(o);for(var u=0;u<o;u++)l[u]=arguments[u+2];c.children=l}return{$$typeof:n,type:e.type,key:b,ref:p,props:c,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:b,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=v,t.lazy=function(e){return{$$typeof:o,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return R().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,a){return R().useReducer(e,t,a)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.1"},1336:function(e,t,a){"use strict";var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function b(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var a,p,i=b(e),l=1;l<arguments.length;l++){for(var o in a=Object(arguments[l]))n.call(a,o)&&(i[o]=a[o]);if(r){p=r(a);for(var u=0;u<p.length;u++)c.call(a,p[u])&&(i[p[u]]=a[p[u]])}}return i}},211:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return o}));var r=a(3),n=a(7),c=(a(1334),a(1333)),b={id:"_packages_graphback_core_src_runtime_graphbackdataprovider_.graphbackdataprovider",title:"GraphbackDataProvider",sidebar_label:"GraphbackDataProvider"},p={unversionedId:"api/graphback-core/interfaces/_packages_graphback_core_src_runtime_graphbackdataprovider_.graphbackdataprovider",id:"api/graphback-core/interfaces/_packages_graphback_core_src_runtime_graphbackdataprovider_.graphbackdataprovider",isDocsHomePage:!1,title:"GraphbackDataProvider",description:"Graphback layered architecture component that can be called",source:"@site/../docs/api/graphback-core/interfaces/_packages_graphback_core_src_runtime_graphbackdataprovider_.graphbackdataprovider.md",slug:"/api/graphback-core/interfaces/_packages_graphback_core_src_runtime_graphbackdataprovider_.graphbackdataprovider",permalink:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_runtime_graphbackdataprovider_.graphbackdataprovider",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-core/interfaces/_packages_graphback_core_src_runtime_graphbackdataprovider_.graphbackdataprovider.md",version:"current",sidebar_label:"GraphbackDataProvider",sidebar:"docs",previous:{title:"GraphbackAPIConfig",permalink:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig"},next:{title:"GraphBackPluginEngineOptions",permalink:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_plugin_graphbackpluginengine_.graphbackpluginengineoptions"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchRead",id:"batchread",children:[]},{value:"count",id:"count",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"update",id:"update",children:[]}]}],l={rightToc:i};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Graphback layered architecture component that can be called\nfrom the service layer in both RESTFULL and GraphQL middlewares."),Object(c.b)("p",null,"Graphback implements server side procesing using following flow:"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"GraphQL Resolvers")," ->  ",Object(c.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," ","[1-*]"," -> ",Object(c.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider")),Object(c.b)("p",null,"Data layer can be composable (each provider can reference multiple layers of other providers)."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"see"))," GraphbackCRUDService"),Object(c.b)("h2",{id:"type-parameters"},"Type parameters"),Object(c.b)("p",null,"\u25aa ",Object(c.b)("strong",{parentName:"p"},"Type")),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GraphbackDataProvider"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_runtime_graphbackdataprovider_.graphbackdataprovider#batchread"}),"batchRead")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_runtime_graphbackdataprovider_.graphbackdataprovider#count"}),"count")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_runtime_graphbackdataprovider_.graphbackdataprovider#create"}),"create")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_runtime_graphbackdataprovider_.graphbackdataprovider#delete"}),"delete")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_runtime_graphbackdataprovider_.graphbackdataprovider#findby"}),"findBy")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_runtime_graphbackdataprovider_.graphbackdataprovider#findone"}),"findOne")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_runtime_graphbackdataprovider_.graphbackdataprovider#update"}),"update"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"batchread"},"batchRead"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"batchRead"),"(",Object(c.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"ids"),": string[], ",Object(c.b)("inlineCode",{parentName:"p"},"filter"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_packages_graphback_core_src_runtime_queryfilter_#queryfilter"}),"QueryFilter"),", ",Object(c.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L78"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:78"))),Object(c.b)("p",null,"Read multiple items by their id's (used for lazy data loading purposes)"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"relationField")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"name of the field that will be used to match ids")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"ids")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"array of identifiers that needs to be fetched")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_packages_graphback_core_src_runtime_queryfilter_#queryfilter"}),"QueryFilter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter by specific type")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"count"},"count"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"count"),"(",Object(c.b)("inlineCode",{parentName:"p"},"filter"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/modules/_packages_graphback_core_src_runtime_queryfilter_#queryfilter"}),"QueryFilter"),"): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L68"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:68"))),Object(c.b)("p",null,"Implementation for counting number of objects with filtering capabilities"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"filter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/modules/_packages_graphback_core_src_runtime_queryfilter_#queryfilter"}),"QueryFilter")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter by specific type")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"create"},"create"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"create"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(c.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L26"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:26"))),Object(c.b)("p",null,"Implementation for object creation"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input data")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"delete"},"delete"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"delete"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(c.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L44"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:44"))),Object(c.b)("p",null,"Implementation for object deletes"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data used for checking consistency")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"findby"},"findBy"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"findBy"),"(",Object(c.b)("inlineCode",{parentName:"p"},"args?"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_runtime_interfaces_.findbyargs"}),"FindByArgs"),", ",Object(c.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L61"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:61"))),Object(c.b)("p",null,"Implementation for reading objects with filtering capabilities"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"args?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphback-core/interfaces/_packages_graphback_core_src_runtime_interfaces_.findbyargs"}),"FindByArgs"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"findone"},"findOne"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"findOne"),"(",Object(c.b)("inlineCode",{parentName:"p"},"args"),": Partial\u2039Type\u203a, ",Object(c.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L52"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:52"))),Object(c.b)("p",null,"Implementation for finding a single unique object"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"args")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter by unique attriburtes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"update"},"update"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"update"),"(",Object(c.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(c.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L35"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:35"))),Object(c.b)("p",null,"Implementation for object updates"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"data")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input data")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")))}o.isMDXComponent=!0}}]);