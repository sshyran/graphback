/*! For license information please see 068ed1e2.cfd761c6.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(232),n(231)),c={id:"crud-client",title:"ClientCRUD Plugin",sidebar_label:"ClientCRUD"},i={id:"plugins/crud-client",isDocsHomePage:!1,title:"ClientCRUD Plugin",description:"The ClientCRUDPlugin plugin uses your GraphQL schema to generate queries, mutations, subscriptions and fragments for use in your client-side application. The generated documents are compatible with all major GraphQL providers, such as Apollo GraphQL and urql.",source:"@site/../docs/plugins/client-crud-plugin.md",permalink:"/docs/next/plugins/crud-client",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/plugins/client-crud-plugin.md",version:"next",sidebar_label:"ClientCRUD",sidebar:"docs",previous:{title:"SchemaCRUD Plugin",permalink:"/docs/next/plugins/crud-schema"},next:{title:"Create your own Graphback plugin",permalink:"/docs/next/plugins/create"},latestVersionMainDocPermalink:"/docs/gettingstarted"},l=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Configuration",id:"configuration",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"ClientCRUDPlugin")," plugin uses your GraphQL schema to generate queries, mutations, subscriptions and fragments for use in your client-side application. The generated documents are compatible with all major GraphQL providers, such as ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.apollographql.com/"}),"Apollo GraphQL")," and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://formidable.com/open-source/urql/"}),"urql"),"."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add @graphback/codegen-client\n")),Object(o.b)("p",null,"To execute this plugin on-demand, you will use the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../graphback-cli"}),"Graphback CLI"),". Install it as a devDependency in your project."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"yarn add -D graphback-cli\n")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("p",null,"It is recommended to use the Graphback CLI for certain Graphback plugins, such as those that can modify files which your application depends on. This will prevent hidden accidental file modifications that would otherwise happen during start-up, which might cause issues in your application."),Object(o.b)("p",null,"To load the ",Object(o.b)("inlineCode",{parentName:"p"},"ClientCRUDPlugin")," plugin, it should be configuration in a ",Object(o.b)("inlineCode",{parentName:"p"},".graphqlrc")," ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql-config.com"}),"GraphQL Config")," file. The Grahback CLI can dynamically load and execute plugins from a ",Object(o.b)("inlineCode",{parentName:"p"},".graphqlrc")," file."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml",metastring:'title=".graphqlrc"',title:'".graphqlrc"'}),"schema: './src/schema.graphql'\ndocuments: './client/src/graphql/**/*.graphql'\nextensions:\n  graphback:\n    # path to data mode file(s)\n    model: './model/datamodel.graphql'\n    plugins:\n      graphback-schema:\n        outputPath: './src/schema/schema.graphql'\n      graphback-client:\n        outputFile: './client/src/graphql/graphback.graphql'\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"SchemaCRUDPlugin")," should be defined before ",Object(o.b)("inlineCode",{parentName:"p"},"ClientCRUDPlugin")," as ",Object(o.b)("inlineCode",{parentName:"p"},"graphback-schema")," to ensure the latest schema is used to generate client documents."),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"./schema-crud-plugin"}),"SchemaCRUDPlugin")," for an installation and configuration guide."),Object(o.b)("p",null,"Run ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../graphback-cli#generate"}),Object(o.b)("inlineCode",{parentName:"a"},"yarn graphback generate"))," to execute plugins from the ",Object(o.b)("inlineCode",{parentName:"p"},".graphqlrc")," config file on-demand."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"$ yarn graphback generate\nGeneration successful!\nDone in 0.74s.\n")),Object(o.b)("p",null,"The client documents will be created in a file called ",Object(o.b)("inlineCode",{parentName:"p"},"./client/src/graphql/graphback.graphql"),"."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Below is a full list of the available configuration options for this plugin."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Argument"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"pluginConfig.outputFile")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Relative path to the GraphQL documents to be created.",Object(o.b)("br",null),Object(o.b)("br",null)," Example: ",Object(o.b)("inlineCode",{parentName:"td"},'"/path/to/documents.graphql"'),". ",Object(o.b)("br",null),Object(o.b)("br",null),"Supported file extensions: ",Object(o.b)("inlineCode",{parentName:"td"},".ts"),", ",Object(o.b)("inlineCode",{parentName:"td"},".graphql")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"string"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"pluginConfig.fragmentOnly")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Optional. When ",Object(o.b)("inlineCode",{parentName:"td"},"true")," Graphback generates only creates fragments, and skips creating queries, mutations and subscriptions."),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"boolean"))))))}p.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,d=s["".concat(c,".").concat(b)]||s[b]||f[b]||o;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},232:function(e,t,n){"use strict";e.exports=n(233)},233:function(e,t,n){"use strict";var r=n(234),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,c=a?Symbol.for("react.portal"):60106,i=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,f=a?Symbol.for("react.forward_ref"):60112,b=a?Symbol.for("react.suspense"):60113,d=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||y}function v(){}function C(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||y}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var w=C.prototype=new v;w.constructor=C,r(w,j.prototype),w.isPureReactComponent=!0;var k={current:null},N=Object.prototype.hasOwnProperty,P={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var r,a={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)N.call(t,r)&&!P.hasOwnProperty(r)&&(a[r]=t[r]);var l=arguments.length-2;if(1===l)a.children=n;else if(1<l){for(var u=Array(l),p=0;p<l;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===a[r]&&(a[r]=l[r]);return{$$typeof:o,type:e,key:c,ref:i,props:a,_owner:k.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var E=/\/+/g,R=[];function _(e,t,n,r){if(R.length){var a=R.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function q(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function D(e,t,n){return null==e?0:function e(t,n,r,a){var i=typeof t;"undefined"!==i&&"boolean"!==i||(t=null);var l=!1;if(null===t)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case o:case c:l=!0}}if(l)return r(a,t,""===n?"."+T(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var p=n+T(i=t[u],u);l+=e(i,p,r,a)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=h&&t[h]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),u=0;!(i=t.next()).done;)l+=e(i=i.value,p=n+T(i,u++),r,a);else if("object"===i)throw r=""+t,Error(g(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return l}(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function U(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,(function(e){return e})):null!=e&&(x(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(E,"$&/")+"/"),D(e,U,t=_(t,o,r,a)),q(t)}var I={current:null};function G(){var e=I.current;if(null===e)throw Error(g(321));return e}var A={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,$,t=_(null,null,t,n)),q(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!x(e))throw Error(g(143));return e}},t.Component=j,t.Fragment=i,t.Profiler=u,t.PureComponent=C,t.StrictMode=l,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var a=r({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=k.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)N.call(t,p)&&!P.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=n;else if(1<p){u=Array(p);for(var s=0;s<p;s++)u[s]=arguments[s+2];a.children=u}return{$$typeof:o,type:e.type,key:c,ref:i,props:a,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return G().useCallback(e,t)},t.useContext=function(e,t){return G().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return G().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return G().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return G().useLayoutEffect(e,t)},t.useMemo=function(e,t){return G().useMemo(e,t)},t.useReducer=function(e,t,n){return G().useReducer(e,t,n)},t.useRef=function(e){return G().useRef(e)},t.useState=function(e){return G().useState(e)},t.version="16.13.1"},234:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))a.call(n,p)&&(l[p]=n[p]);if(r){i=r(n);for(var s=0;s<i.length;s++)o.call(n,i[s])&&(l[i[s]]=n[i[s]])}}return l}}}]);