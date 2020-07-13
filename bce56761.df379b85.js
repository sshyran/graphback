(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{184:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return l}));var r=t(2),a=(t(0),t(231));const o={id:"openapi",title:"Migrating from REST"},i={id:"version-0.12.x/migrations/openapi",isDocsHomePage:!1,title:"Migrating from REST",description:"OpenAPI (Swagger) is a specification for describing RESTful APIs.",source:"@site/versioned_docs/version-0.12.x/migrations/openapi.md",permalink:"/docs/migrations/openapi",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/migrations/openapi.md",version:"0.12.x",sidebar:"version-0.12.x/docs",previous:{title:"Database Migrations",permalink:"/docs/db/dbmigrations"},next:{title:"CLI commands",permalink:"/docs/commands"}},p=[{value:"Migrating from REST",id:"migrating-from-rest",children:[]}],c={rightToc:p};function l({components:e,...n}){return Object(a.b)("wrapper",Object(r.a)({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"OpenAPI (Swagger) is a specification for describing RESTful APIs.\nA specification can be generated based on an existing API with many open source solutions. "),Object(a.b)("p",null,"Developers can also utilize various OpenAPI generators thanks to ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://openapi-generator.tech"}),"OpenAPI Generator")," project.\nGenerating a GraphQL schema from OpenAPI will almost always come with some information loss.\nDue to the strongly typed nature of GraphQL, additional elements like Interfaces, Enums and Scalars\ndo not have direct mapping in OpenAPI definitions. "),Object(a.b)("p",null,"When working with Graphback, developers can generate or manually build their existing\nOpenAPI definition and then transform it into a GraphQL schema."),Object(a.b)("h2",{id:"migrating-from-rest"},"Migrating from REST"),Object(a.b)("p",null,"To migrate from your REST API put your OpenAPI definition file into your model folder (both YAML and JSON are supported) and run:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"graphback openapi\n")),Object(a.b)("p",null,"This will generate a new ",Object(a.b)("inlineCode",{parentName:"p"},".graphql")," data model file in your model folder. This will remove all methods and leave only GraphQL data types."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"NOTE: Migration is going to apply ",Object(a.b)("inlineCode",{parentName:"p"},"ID!")," type only when OpenAPI definition is\nusing UUID type. In other scenarios ",Object(a.b)("inlineCode",{parentName:"p"},"ID!")," type needs to be applied manually to\nobject.")),Object(a.b)("p",null,"These GraphQL data types are missing some annotations that will allow them to be processed by Graphback. See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"../intro/datamodel"}),"Data Model")," to complete your data model."),Object(a.b)("p",null,"Once your data model is complete, run ",Object(a.b)("inlineCode",{parentName:"p"},"graphback generate")," to process and generate a complete schema and CRUD resolvers."))}l.isMDXComponent=!0},231:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?a.a.createElement(b,p(p({ref:n},l),{},{components:t})):a.a.createElement(b,p({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);