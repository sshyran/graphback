(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1082:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),b=function(e){var t=i.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=b(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(r),d=n,h=u["".concat(a,".").concat(d)]||u[d]||l[d]||o;return r?i.a.createElement(h,s(s({ref:t},p),{},{components:r})):i.a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<o;p++)a[p]=r[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},142:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(2),i=r(6),o=(r(0),r(1082)),a={id:"intro",title:"Subscriptions",sidebar_label:"Subscriptions"},s={unversionedId:"subscriptions/intro",id:"version-0.14.x/subscriptions/intro",isDocsHomePage:!1,title:"Subscriptions",description:"Graphback provides out of the box subscriptions support by providing one of the PubSubEngines",source:"@site/versioned_docs/version-0.14.x/subscriptions/subscriptions.md",slug:"/subscriptions/intro",permalink:"/docs/0.14.x/subscriptions/intro",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.14.x/subscriptions/subscriptions.md",version:"0.14.x",sidebar_label:"Subscriptions",sidebar:"version-0.14.x/docs",previous:{title:"Using SQLite with Graphback",permalink:"/docs/0.14.x/databases/sqlite"},next:{title:"Authentication and authorization for Graphback",permalink:"/docs/0.14.x/authentication/intro"}},c=[{value:"Subscriptions explained",id:"subscriptions-explained",children:[]},{value:"Changing Subscription Topics",id:"changing-subscription-topics",children:[]},{value:"Running example",id:"running-example",children:[]}],p={rightToc:c};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback provides out of the box subscriptions support by providing one of the ",Object(o.b)("inlineCode",{parentName:"p"},"PubSubEngines"),"\nfrom ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/apollographql/graphql-subscriptions"}),"https://github.com/apollographql/graphql-subscriptions")," library.\nDevelopers can connect to any publish subscribe mechanism that is officially supported by graphql-subscriptions\nor even write their own.\nGraphback templates by default using ",Object(o.b)("inlineCode",{parentName:"p"},"InMemoryPubSubEngine")," which is not designed to be used for production\nuse cases."),Object(o.b)("p",null,"We recomend following engines:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"AMQ (MQTT) using ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/aerogear/graphql-mqtt-subscriptions"}),"https://github.com/aerogear/graphql-mqtt-subscriptions")),Object(o.b)("li",{parentName:"ul"},"Redis - using ",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/davidyaha/graphql-redis-subscriptions"}),"https://github.com/davidyaha/graphql-redis-subscriptions"))),Object(o.b)("h2",{id:"subscriptions-explained"},"Subscriptions explained"),Object(o.b)("p",null,"Graphback provides subscriptions for every type of the operation that is happening on the server.\nThis means that developers can explicitly subscribe to create, update and delete operations for particular resource."),Object(o.b)("p",null,"Subscriptions can be also suppressed by developers by enabling or disabling subscription CRUD flags when initializing Graphback server "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"    {\n        ...\n        subCreate: true\n        subUpdate: true\n        subDelete: false\n    }\n")),Object(o.b)("h2",{id:"changing-subscription-topics"},"Changing Subscription Topics"),Object(o.b)("p",null,"Some of the pub sub mechanism will require different format of the topic.\nGraphback CRUD services expose method that can be used to override how topics are build.\nFor example for AMQ we can create extension of the CRUD service as follows"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"export class AMQCRUDService extends CrudService {\n    protected subscriptionTopicMapping(triggerType: GraphbackOperationType, objectName: string) {\n        // Support AMQ topic creation format\n        return `graphql/${objectName}_${triggerType}`\n    }\n}\n")),Object(o.b)("h2",{id:"running-example"},"Running example"),Object(o.b)("p",null,"If you wish to use authorization mechanism you can try it on ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/aerogear/datasync-starter"}),"DataSync starter")," project"))}b.isMDXComponent=!0}}]);