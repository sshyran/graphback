/*! For license information please see 737be4d7.728c2272.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[567],{1333:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=n.a.createContext({}),b=function(e){var t=n.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=b(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=b(r),f=a,h=l["".concat(o,".").concat(f)]||l[f]||s[f]||c;return r?n.a.createElement(h,i(i({ref:t},u),{},{components:r})):n.a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=r[u];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1334:function(e,t,r){"use strict";e.exports=r(1335)},1335:function(e,t,r){"use strict";var a=r(1336),n=60103,c=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var o=60109,i=60110,p=60112;t.Suspense=60113;var u=60115,b=60116;if("function"==typeof Symbol&&Symbol.for){var l=Symbol.for;n=l("react.element"),c=l("react.portal"),t.Fragment=l("react.fragment"),t.StrictMode=l("react.strict_mode"),t.Profiler=l("react.profiler"),o=l("react.provider"),i=l("react.context"),p=l("react.forward_ref"),t.Suspense=l("react.suspense"),u=l("react.memo"),b=l("react.lazy")}var s="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},d={};function m(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||h}function O(){}function j(e,t,r){this.props=e,this.context=t,this.refs=d,this.updater=r||h}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},O.prototype=m.prototype;var y=j.prototype=new O;y.constructor=j,a(y,m.prototype),y.isPureReactComponent=!0;var g={current:null},v=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var a,c={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)v.call(t,a)&&!k.hasOwnProperty(a)&&(c[a]=t[a]);var p=arguments.length-2;if(1===p)c.children=r;else if(1<p){for(var u=Array(p),b=0;b<p;b++)u[b]=arguments[b+2];c.children=u}if(e&&e.defaultProps)for(a in p=e.defaultProps)void 0===c[a]&&(c[a]=p[a]);return{$$typeof:n,type:e,key:o,ref:i,props:c,_owner:g.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function w(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,r,a,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var p=!1;if(null===e)p=!0;else switch(i){case"string":case"number":p=!0;break;case"object":switch(e.$$typeof){case n:case c:p=!0}}if(p)return o=o(p=e),e=""===a?"."+w(p,0):a,Array.isArray(o)?(r="",null!=e&&(r=e.replace(N,"$&/")+"/"),x(o,t,r,"",(function(e){return e}))):null!=o&&(P(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,r+(!o.key||p&&p.key===o.key?"":(""+o.key).replace(N,"$&/")+"/")+e)),t.push(o)),1;if(p=0,a=""===a?".":a+":",Array.isArray(e))for(var u=0;u<e.length;u++){var b=a+w(i=e[u],u);p+=x(i,t,r,b,o)}else if("function"==typeof(b=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=s&&e[s]||e["@@iterator"])?e:null}(e)))for(e=b.call(e),u=0;!(i=e.next()).done;)p+=x(i=i.value,t,r,b=a+w(i,u++),o);else if("object"===i)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return p}function C(e,t,r){if(null==e)return e;var a=[],n=0;return x(e,a,"","",(function(e){return t.call(r,e,n++)})),a}function S(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var E={current:null};function I(){var e=E.current;if(null===e)throw Error(f(321));return e}var A={ReactCurrentDispatcher:E,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:g,IsSomeRendererActing:{current:!1},assign:a};t.Children={map:C,forEach:function(e,t,r){C(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!P(e))throw Error(f(143));return e}},t.Component=m,t.PureComponent=j,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,r){if(null==e)throw Error(f(267,e));var c=a({},e.props),o=e.key,i=e.ref,p=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,p=g.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(b in t)v.call(t,b)&&!k.hasOwnProperty(b)&&(c[b]=void 0===t[b]&&void 0!==u?u[b]:t[b])}var b=arguments.length-2;if(1===b)c.children=r;else if(1<b){u=Array(b);for(var l=0;l<b;l++)u[l]=arguments[l+2];c.children=u}return{$$typeof:n,type:e.type,key:o,ref:i,props:c,_owner:p}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:o,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:b,_payload:{_status:-1,_result:e},_init:S}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return I().useCallback(e,t)},t.useContext=function(e,t){return I().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return I().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return I().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return I().useLayoutEffect(e,t)},t.useMemo=function(e,t){return I().useMemo(e,t)},t.useReducer=function(e,t,r){return I().useReducer(e,t,r)},t.useRef=function(e){return I().useRef(e)},t.useState=function(e){return I().useState(e)},t.version="17.0.1"},1336:function(e,t,r){"use strict";var a=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var r,i,p=o(e),u=1;u<arguments.length;u++){for(var b in r=Object(arguments[u]))n.call(r,b)&&(p[b]=r[b]);if(a){i=a(r);for(var l=0;l<i.length;l++)c.call(r,i[l])&&(p[i[l]]=r[i[l]])}}return p}},635:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var a=r(3),n=r(7),c=(r(1334),r(1333)),o={id:"_buildgraphbackapi_.graphbackapi",title:"GraphbackAPI",sidebar_label:"GraphbackAPI"},i={unversionedId:"api/graphback/interfaces/_buildgraphbackapi_.graphbackapi",id:"api/graphback/interfaces/_buildgraphbackapi_.graphbackapi",isDocsHomePage:!1,title:"GraphbackAPI",description:"Defines the individual components created in the Graphback API",source:"@site/../docs/api/graphback/interfaces/_buildgraphbackapi_.graphbackapi.md",slug:"/api/graphback/interfaces/_buildgraphbackapi_.graphbackapi",permalink:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapi",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback/interfaces/_buildgraphbackapi_.graphbackapi.md",version:"current",sidebar_label:"GraphbackAPI",sidebar:"docs",previous:{title:"buildGraphbackAPI",permalink:"/docs/next/api/graphback/modules/_buildgraphbackapi_"},next:{title:"GraphbackAPIConfig",permalink:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"resolvers",id:"resolvers",children:[]},{value:"schema",id:"schema",children:[]},{value:"services",id:"services",children:[]},{value:"typeDefs",id:"typedefs",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"contextCreator",id:"contextcreator",children:[]}]}],u={rightToc:p};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Defines the individual components created in the Graphback API"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"GraphbackAPI"))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapi#resolvers"}),"resolvers")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapi#schema"}),"schema")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapi#services"}),"services")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapi#typedefs"}),"typeDefs"))),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/graphback/interfaces/_buildgraphbackapi_.graphbackapi#contextcreator"}),"contextCreator"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"resolvers"},"resolvers"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"resolvers"),": ",Object(c.b)("em",{parentName:"p"},"Record\u2039string, any\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback/src/buildGraphbackAPI.ts#L44"}),"buildGraphbackAPI.ts:44"))),Object(c.b)("p",null,"CRUD resolvers for every data model"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"schema"},"schema"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"schema"),": ",Object(c.b)("em",{parentName:"p"},"GraphQLSchema")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback/src/buildGraphbackAPI.ts#L40"}),"buildGraphbackAPI.ts:40"))),Object(c.b)("p",null,"GraphQL schema object"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"services"},"services"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"services"),": ",Object(c.b)("em",{parentName:"p"},"GraphbackServiceConfigMap")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback/src/buildGraphbackAPI.ts#L48"}),"buildGraphbackAPI.ts:48"))),Object(c.b)("p",null,"Model:Service map of CRUD services for every data model"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"typedefs"},"typeDefs"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"typeDefs"),": ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback/src/buildGraphbackAPI.ts#L36"}),"buildGraphbackAPI.ts:36"))),Object(c.b)("p",null,"GraphQL schema as a string"),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"contextcreator"},"contextCreator"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"contextCreator"),"(",Object(c.b)("inlineCode",{parentName:"p"},"context?"),": any): ",Object(c.b)("em",{parentName:"p"},"GraphbackContext")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback/src/buildGraphbackAPI.ts#L53"}),"buildGraphbackAPI.ts:53"))),Object(c.b)("p",null,"Creates context to be attached to the running server"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"context?")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"any")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"GraphbackContext")))}b.isMDXComponent=!0}}]);