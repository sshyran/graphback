/*! For license information please see 4410d730.eee61fc5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{1333:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),f=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=f(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=f(n),b=r,d=s["".concat(c,".").concat(b)]||s[b]||p[b]||o;return n?a.a.createElement(d,i(i({ref:t},u),{},{components:n})):a.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1334:function(e,t,n){"use strict";e.exports=n(1335)},1335:function(e,t,n){"use strict";var r=n(1336),a=60103,o=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var c=60109,i=60110,l=60112;t.Suspense=60113;var u=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;a=s("react.element"),o=s("react.portal"),t.Fragment=s("react.fragment"),t.StrictMode=s("react.strict_mode"),t.Profiler=s("react.profiler"),c=s("react.provider"),i=s("react.context"),l=s("react.forward_ref"),t.Suspense=s("react.suspense"),u=s("react.memo"),f=s("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function m(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}function h(){}function O(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(b(85));this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=m.prototype;var g=O.prototype=new h;g.constructor=O,r(g,m.prototype),g.isPureReactComponent=!0;var j={current:null},v=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,n){var r,o={},c=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)v.call(t,r)&&!_.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var u=Array(l),f=0;f<l;f++)u[f]=arguments[f+2];o.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:c,ref:i,props:o,_owner:j.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var C=/\/+/g;function S(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function N(e,t,n,r,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var l=!1;if(null===e)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return c=c(l=e),e=""===r?"."+S(l,0):r,Array.isArray(c)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),N(c,t,n,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||l&&l.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),t.push(c)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var f=r+S(i=e[u],u);l+=N(i,t,n,f,c)}else if("function"==typeof(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e)))for(e=f.call(e),u=0;!(i=e.next()).done;)l+=N(i=i.value,t,n,f=r+S(i,u++),c);else if("object"===i)throw t=""+e,Error(b(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function P(e,t,n){if(null==e)return e;var r=[],a=0;return N(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var x={current:null};function R(){var e=x.current;if(null===e)throw Error(b(321));return e}var T={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:j,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:P,forEach:function(e,t,n){P(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(b(143));return e}},t.Component=m,t.PureComponent=O,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,t.cloneElement=function(e,t,n){if(null==e)throw Error(b(267,e));var o=r({},e.props),c=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=j.current),void 0!==t.key&&(c=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(f in t)v.call(t,f)&&!_.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==u?u[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){u=Array(f);for(var s=0;s<f;s++)u[s]=arguments[s+2];o.children=u}return{$$typeof:a,type:e.type,key:c,ref:i,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:i,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return R().useCallback(e,t)},t.useContext=function(e,t){return R().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return R().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return R().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return R().useLayoutEffect(e,t)},t.useMemo=function(e,t){return R().useMemo(e,t)},t.useReducer=function(e,t,n){return R().useReducer(e,t,n)},t.useRef=function(e){return R().useRef(e)},t.useState=function(e){return R().useState(e)},t.version="17.0.1"},1336:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function c(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,i,l=c(e),u=1;u<arguments.length;u++){for(var f in n=Object(arguments[u]))a.call(n,f)&&(l[f]=n[f]);if(r){i=r(n);for(var s=0;s<i.length;s++)o.call(n,i[s])&&(l[i[s]]=n[i[s]])}}return l}},415:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(3),a=n(7),o=(n(1334),n(1333)),c={id:"_util_.datasyncmodelconflictconfig",title:"DataSyncModelConflictConfig",sidebar_label:"DataSyncModelConflictConfig"},i={unversionedId:"api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig",id:"api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig",isDocsHomePage:!1,title:"DataSyncModelConflictConfig",description:"Interface for specifying conflict configuration of a model",source:"@site/../docs/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig.md",slug:"/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig",permalink:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig.md",version:"current",sidebar_label:"DataSyncModelConflictConfig"},l=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Optional</code> conflictResolution",id:"optional-conflictresolution",children:[]},{value:"<code>Optional</code> deltaTTL",id:"optional-deltattl",children:[]},{value:"<code>Optional</code> enabled",id:"optional-enabled",children:[]}]}],u={rightToc:l};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Interface for specifying conflict configuration of a model"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"DataSyncModelConflictConfig")),Object(o.b)("p",{parentName:"li"},"\u21b3 ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.globalconflictconfig"}),"GlobalConflictConfig")))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig#optional-conflictresolution"}),"conflictResolution")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig#optional-deltattl"}),"deltaTTL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.datasyncmodelconflictconfig#optional-enabled"}),"enabled"))),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("h3",{id:"optional-conflictresolution"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," conflictResolution"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"conflictResolution"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_util_.conflictresolutionstrategy"}),"ConflictResolutionStrategy"))),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback-datasync/src/util.ts#L102"}),"packages/graphback-datasync/src/util.ts:102"))),Object(o.b)("p",null,"One of the conflict resolutions strategies:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"ThrowOnConflict,"),Object(o.b)("li",{parentName:"ul"},"ClientSideWins,"),Object(o.b)("li",{parentName:"ul"},"ServerSideWins")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-deltattl"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," deltaTTL"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"deltaTTL"),"? : ",Object(o.b)("em",{parentName:"p"},"number")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback-datasync/src/util.ts#L106"}),"packages/graphback-datasync/src/util.ts:106"))),Object(o.b)("p",null,"Value in seconds used to delete old history entries wth diffs that may no longer be needed."),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-enabled"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," enabled"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"enabled"),"? : ",Object(o.b)("em",{parentName:"p"},"boolean")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/4feda92/packages/graphback-datasync/src/util.ts#L95"}),"packages/graphback-datasync/src/util.ts:95"))),Object(o.b)("p",null,"Flag that enables conflict resolution"))}f.isMDXComponent=!0}}]);