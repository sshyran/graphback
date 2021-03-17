/*! For license information please see 819bc0fb.437de88c.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[623],{1333:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,b=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?a.a.createElement(b,i(i({ref:t},s),{},{components:n})):a.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1334:function(e,t,n){"use strict";e.exports=n(1335)},1335:function(e,t,n){"use strict";var r=n(1336),a=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,i=60110,u=60112;t.Suspense=60113;var s=60115,l=60116;if("function"==typeof Symbol&&Symbol.for){var p=Symbol.for;a=p("react.element"),o=p("react.portal"),t.Fragment=p("react.fragment"),t.StrictMode=p("react.strict_mode"),t.Profiler=p("react.profiler"),c=p("react.provider"),i=p("react.context"),u=p("react.forward_ref"),t.Suspense=p("react.suspense"),s=p("react.memo"),l=p("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function y(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||b}function m(){}function g(e,t,n){this.props=e,this.context=t,this.refs=h,this.updater=n||b}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=y.prototype;var O=g.prototype=new m;O.constructor=g,r(O,y.prototype),O.isPureReactComponent=!0;var v={current:null},j=Object.prototype.hasOwnProperty,w={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)j.call(t,r)&&!w.hasOwnProperty(r)&&(o[r]=t[r]);var u=arguments.length-2;if(1===u)o.children=n;else if(1<u){for(var s=Array(u),l=0;l<u;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===o[r]&&(o[r]=u[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:v.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,n,r,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var u=!1;if(null===e)u=!0;else switch(i){case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case a:case o:u=!0}}if(u)return c=c(u=e),e=""===r?"."+S(u,0):r,Array.isArray(c)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),P(c,t,n,"",(function(e){return e}))):null!=c&&(_(c)&&(c=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||u&&u.key===c.key?"":(""+c.key).replace(N,"$&/")+"/")+e)),t.push(c)),1;if(u=0,r=""===r?".":r+":",Array.isArray(e))for(var s=0;s<e.length;s++){var l=r+S(i=e[s],s);u+=P(i,t,n,l,c)}else if("function"==typeof(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e)))for(e=l.call(e),s=0;!(i=e.next()).done;)u+=P(i=i.value,t,n,l=r+S(i,s++),c);else if("object"===i)throw t=""+e,Error(d(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return u}function x(e,t,n){if(null==e)return e;var r=[],a=0;return P(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var D={current:null};function E(){var e=D.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:D,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:v,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:x,forEach:function(e,t,n){x(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return x(e,(function(){t++})),t},toArray:function(e){return x(e,(function(e){return e}))||[]},only:function(e){if(!_(e))throw Error(d(143));return e}},t.Component=y,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error(d(267,e));var o=r({},e.props),c=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=v.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)j.call(t,l)&&!w.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){s=Array(l);for(var p=0;p<l;p++)s[p]=arguments[p+2];o.children=s}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:C}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return E().useCallback(e,t)},t.useContext=function(e,t){return E().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return E().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return E().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return E().useLayoutEffect(e,t)},t.useMemo=function(e,t){return E().useMemo(e,t)},t.useReducer=function(e,t,n){return E().useReducer(e,t,n)},t.useRef=function(e){return E().useRef(e)},t.useState=function(e){return E().useState(e)},t.version="17.0.1"},1336:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,u=c(e),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))a.call(n,l)&&(u[l]=n[l]);if(r){i=r(n);for(var p=0;p<i.length;p++)o.call(n,i[p])&&(u[i[p]]=n[i[p]])}}return u}},691:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(1334),n(1333)),c={id:"intro",title:"Introduction to Data Synchronization",sidebar_label:"What is Data Synchronization?"},i={unversionedId:"datasync/intro",id:"datasync/intro",isDocsHomePage:!1,title:"Introduction to Data Synchronization",description:"The @graphback/datasync package consists of the Data Synchronization Schema plugin and compatible data sources, provides out of the box Data Synchronization strategies for GraphQL clients with offline functionality e.g. Offix.",source:"@site/../docs/datasync/intro.md",slug:"/datasync/intro",permalink:"/docs/next/datasync/intro",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/datasync/intro.md",version:"current",sidebar_label:"What is Data Synchronization?",sidebar:"docs",previous:{title:"Authentication with Keycloak",permalink:"/docs/next/authentication/keycloak"},next:{title:"Setting up Delta Queries",permalink:"/docs/next/datasync/delta-queries"}},u=[{value:"Motivation",id:"motivation",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],s={rightToc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@graphback/datasync")," package consists of the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin"}),"Data Synchronization Schema plugin")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/classes/_providers_datasyncmongodbdataprovider_.datasyncmongodbdataprovider"}),"compatible data sources"),", provides out of the box Data Synchronization strategies for GraphQL clients with offline functionality e.g. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://offix.dev"}),"Offix"),". "),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Currently this plugin ",Object(o.b)("strong",{parentName:"p"},"only")," supports MongoDB data sources, with support for other kinds of data sources coming in a future release."))),Object(o.b)("h2",{id:"motivation"},"Motivation"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@graphback/datasync")," package is meant to be naturally extend ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://offix.dev"}),"Offix")," with a GraphQLCRUD compliant API:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Fetch data that was changed based on the client side timestamp"),Object(o.b)("li",{parentName:"ul"},"Ensure data consistency using timestamp provided")),Object(o.b)("p",null,"It achieves this by:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Providing Delta Queries"),": Delta queries can be used by GraphQL clients to refresh changes in data between periods of connectivity outages. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Providing server-side Conflict Resolution capabilities"),": For mutations that are applied offline, this provides the server with the ability to resolve conflicts between server and client.")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"The Graphback Data Synchronization package provides schema plugins as well as data sources for all supported data synchronization features."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install @graphback/datasync\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"Add annotations to your data models:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n// highlight-next-line\n@datasync\n"""\ntype User {\n  id: _GraphbackObjectID\n  name: String\n}\n')),Object(o.b)("p",null,"The preferred and simpest way to add data sync functionality is to use the ",Object(o.b)("inlineCode",{parentName:"p"},"createDataSyncAPI")," function which wraps ",Object(o.b)("inlineCode",{parentName:"p"},"buildGraphbackAPI"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { createDataSyncAPI } from '@graphback/datasync'\n\nconst { typeDefs, resolvers, contextCreator } = createDataSyncAPI(modelDefs, { db });\n")),Object(o.b)("p",null,"Alternatively, you can use the default ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/getting-started/add-to-project#configure-graphback"}),Object(o.b)("inlineCode",{parentName:"a"},"buildGraphbackAPI"))," and add the ",Object(o.b)("inlineCode",{parentName:"p"},"DataSyncPlugin")," plugin directly:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { buildGraphbackAPI } from 'graphback';\nimport { DataSyncPlugin } from '@graphback/datasync'\n\nconst { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(schema, {\n  ...,\n  plugins: [\n    new DataSyncPlugin({\n      enabled: true\n    })\n  ]\n});\n")),Object(o.b)("p",null,"Or if you are invoking the plugin with ",Object(o.b)("inlineCode",{parentName:"p"},"graphback generate"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".graphqlrc"',title:'".graphqlrc"'}),"schema: './src/schema.graphql'\ndocuments: './client/src/graphql/**/*.graphql'\nextensions:\n  graphback:\n    # path to data mode file(s)\n    model: './model/datamodel.graphql'\n    plugins:\n      ...\n      graphback-datasync:\n        packageName: '@graphback/datasync' # required to dynamically load\n        conflictConfig: \n          models:\n            Note:\n              enabled: true\n")),Object(o.b)("p",null,"For a more in-depth guide to setting up data synchronization features, check ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/datasync/delta-queries"}),"this")," page."))}l.isMDXComponent=!0}}]);