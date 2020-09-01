/*! For license information please see 57e06acd.68740c04.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[337],{1082:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return b}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),f=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=f(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=f(t),d=n,b=p["".concat(a,".").concat(d)]||p[d]||s[d]||c;return t?o.a.createElement(b,u(u({ref:r},l),{},{components:t})):o.a.createElement(b,u({ref:r},l))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=d;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,a[1]=u;for(var l=2;l<c;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1083:function(e,r,t){"use strict";e.exports=t(1084)},1084:function(e,r,t){"use strict";var n=t(1085),o="function"==typeof Symbol&&Symbol.for,c=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,i=o?Symbol.for("react.strict_mode"):60108,l=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function k(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||v}function j(){}function g(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||v}k.prototype.isReactComponent={},k.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=k.prototype;var x=g.prototype=new j;x.constructor=g,n(x,k.prototype),x.isPureReactComponent=!0;var C={current:null},_=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function w(e,r,t){var n,o={},a=null,u=null;if(null!=r)for(n in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(a=""+r.key),r)_.call(r,n)&&!S.hasOwnProperty(n)&&(o[n]=r[n]);var i=arguments.length-2;if(1===i)o.children=t;else if(1<i){for(var l=Array(i),f=0;f<i;f++)l[f]=arguments[f+2];o.children=l}if(e&&e.defaultProps)for(n in i=e.defaultProps)void 0===o[n]&&(o[n]=i[n]);return{$$typeof:c,type:e,key:a,ref:u,props:o,_owner:C.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var E=/\/+/g,N=[];function R(e,r,t,n){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=r,o.func=t,o.context=n,o.count=0,o}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function $(e,r,t){return null==e?0:function e(r,t,n,o){var u=typeof r;"undefined"!==u&&"boolean"!==u||(r=null);var i=!1;if(null===r)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(r.$$typeof){case c:case a:i=!0}}if(i)return n(o,r,""===t?"."+z(r,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(r))for(var l=0;l<r.length;l++){var f=t+z(u=r[l],l);i+=e(u,f,n,o)}else if(null===r||"object"!=typeof r?f=null:f="function"==typeof(f=h&&r[h]||r["@@iterator"])?f:null,"function"==typeof f)for(r=f.call(r),l=0;!(u=r.next()).done;)i+=e(u=u.value,f=t+z(u,l++),n,o);else if("object"===u)throw n=""+r,Error(m(31,"[object Object]"===n?"object with keys {"+Object.keys(r).join(", ")+"}":n,""));return i}(e,"",r,t)}function z(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function D(e,r){e.func.call(e.context,r,e.count++)}function K(e,r,t){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?T(e,n,t,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,r){return{$$typeof:c,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+t)),n.push(e))}function T(e,r,t,n,o){var c="";null!=t&&(c=(""+t).replace(E,"$&/")+"/"),$(e,K,r=R(r,c,n,o)),A(r)}var I={current:null};function U(){var e=I.current;if(null===e)throw Error(m(321));return e}var F={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return T(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;$(e,D,r=R(null,null,r,t)),A(r)},count:function(e){return $(e,(function(){return null}),null)},toArray:function(e){var r=[];return T(e,r,null,(function(e){return e})),r},only:function(e){if(!P(e))throw Error(m(143));return e}},r.Component=k,r.Fragment=u,r.Profiler=l,r.PureComponent=g,r.StrictMode=i,r.Suspense=d,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,t){if(null==e)throw Error(m(267,e));var o=n({},e.props),a=e.key,u=e.ref,i=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=C.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in r)_.call(r,f)&&!S.hasOwnProperty(f)&&(o[f]=void 0===r[f]&&void 0!==l?l[f]:r[f])}var f=arguments.length-2;if(1===f)o.children=t;else if(1<f){l=Array(f);for(var p=0;p<f;p++)l[p]=arguments[p+2];o.children=l}return{$$typeof:c,type:e.type,key:a,ref:u,props:o,_owner:i}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:p,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},r.createElement=w,r.createFactory=function(e){var r=w.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=P,r.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:b,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return U().useCallback(e,r)},r.useContext=function(e,r){return U().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return U().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return U().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return U().useLayoutEffect(e,r)},r.useMemo=function(e,r){return U().useMemo(e,r)},r.useReducer=function(e,r,t){return U().useReducer(e,r,t)},r.useRef=function(e){return U().useRef(e)},r.useState=function(e){return U().useState(e)},r.version="16.13.1"},1085:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,r){for(var t,u,i=a(e),l=1;l<arguments.length;l++){for(var f in t=Object(arguments[l]))o.call(t,f)&&(i[f]=t[f]);if(n){u=n(t);for(var p=0;p<u.length;p++)c.call(t,u[p])&&(i[u[p]]=t[u[p]])}}return i}},392:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return u})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return f}));var n=t(2),o=t(6),c=(t(1083),t(1082)),a={id:"_index_",title:"index",sidebar_label:"index"},u={unversionedId:"api/graphback-keycloak-authz/modules/_index_",id:"api/graphback-keycloak-authz/modules/_index_",isDocsHomePage:!1,title:"index",description:"Index",source:"@site/../docs/api/graphback-keycloak-authz/modules/_index_.md",slug:"/api/graphback-keycloak-authz/modules/_index_",permalink:"/docs/next/api/graphback-keycloak-authz/modules/_index_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-keycloak-authz/modules/_index_.md",version:"current",sidebar_label:"index"},i=[{value:"Index",id:"index",children:[{value:"References",id:"references",children:[]}]},{value:"References",id:"references-1",children:[{value:"AuthFilter",id:"authfilter",children:[]},{value:"CrudOperationAuthConfig",id:"crudoperationauthconfig",children:[]},{value:"CrudServiceAuthConfig",id:"crudserviceauthconfig",children:[]},{value:"CrudServicesAuthConfig",id:"crudservicesauthconfig",children:[]},{value:"GraphbackKeycloakContext",id:"graphbackkeycloakcontext",children:[]},{value:"KeycloakCrudService",id:"keycloakcrudservice",children:[]},{value:"KeycloakCrudServiceOptions",id:"keycloakcrudserviceoptions",children:[]},{value:"createKeycloakCRUDService",id:"createkeycloakcrudservice",children:[]}]}],l={rightToc:i};function f(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"references"},"References"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#authfilter"}),"AuthFilter")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#crudoperationauthconfig"}),"CrudOperationAuthConfig")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#crudserviceauthconfig"}),"CrudServiceAuthConfig")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#crudservicesauthconfig"}),"CrudServicesAuthConfig")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#graphbackkeycloakcontext"}),"GraphbackKeycloakContext")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#keycloakcrudservice"}),"KeycloakCrudService")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#keycloakcrudserviceoptions"}),"KeycloakCrudServiceOptions")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-keycloak-authz/modules/_index_#createkeycloakcrudservice"}),"createKeycloakCRUDService"))),Object(c.b)("h2",{id:"references-1"},"References"),Object(c.b)("h3",{id:"authfilter"},"AuthFilter"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"AuthFilter"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"crudoperationauthconfig"},"CrudOperationAuthConfig"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"CrudOperationAuthConfig"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"crudserviceauthconfig"},"CrudServiceAuthConfig"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"CrudServiceAuthConfig"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"crudservicesauthconfig"},"CrudServicesAuthConfig"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"CrudServicesAuthConfig"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"graphbackkeycloakcontext"},"GraphbackKeycloakContext"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"GraphbackKeycloakContext"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"keycloakcrudservice"},"KeycloakCrudService"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"KeycloakCrudService"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"keycloakcrudserviceoptions"},"KeycloakCrudServiceOptions"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"KeycloakCrudServiceOptions"),":"),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createkeycloakcrudservice"},"createKeycloakCRUDService"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"createKeycloakCRUDService"),":"))}f.isMDXComponent=!0}}]);