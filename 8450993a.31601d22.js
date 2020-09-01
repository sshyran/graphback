(window.webpackJsonp=window.webpackJsonp||[]).push([[512],{1082:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return m}));var t=r(0),a=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var n=a.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},b=function(e){var n=l(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(r),d=t,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return r?a.a.createElement(m,i(i({ref:n},p),{},{components:r})):a.a.createElement(m,i({ref:n},p))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},567:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return c})),r.d(n,"metadata",(function(){return i})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return l}));var t=r(2),a=r(6),o=(r(0),r(1082)),c={title:"CLI commands",id:"commands"},i={unversionedId:"commands",id:"version-0.10.x/commands",isDocsHomePage:!1,title:"CLI commands",description:"Commands",source:"@site/versioned_docs/version-0.10.x/commands.md",slug:"/commands",permalink:"/docs/0.10.x/commands",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.10.x/commands.md",version:"0.10.x",sidebar:"version-0.10.x/docs",previous:{title:"OpenAPI migrations",permalink:"/docs/0.10.x/openapi"},next:{title:"Releases",permalink:"/docs/0.10.x/releases"}},s=[{value:"Commands",id:"commands",children:[{value:"Config",id:"config",children:[]},{value:"Generate",id:"generate",children:[]},{value:"Database",id:"database",children:[]}]},{value:"OpenAPI",id:"openapi",children:[]}],p={rightToc:s};function l(e){var n=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"commands"},"Commands"),Object(o.b)("p",null,"CLI offers help prompt.\nExecute ",Object(o.b)("inlineCode",{parentName:"p"},"graphback")," in your shell for more information"),Object(o.b)("h3",{id:"config"},"Config"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"graphback config\n")),Object(o.b)("p",null,"Create configuration in existing project to support Graphback resolver and schema generation."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")," When creating configuration please review if locations created for ",Object(o.b)("inlineCode",{parentName:"p"},"folders")," integration match your project folder structure")),Object(o.b)("h3",{id:"generate"},"Generate"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"graphback generate\n")),Object(o.b)("p",null,"  Generate command will generate schema and resolvers for your GraphQL server based on your data model."),Object(o.b)("h3",{id:"database"},"Database"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"graphback db\n")),Object(o.b)("p",null,"  This command creates a database or update an existing one based on your data model. Currently supports PostgreSQL and sqlite3."),Object(o.b)("h2",{id:"openapi"},"OpenAPI"),Object(o.b)("pre",null,Object(o.b)("code",Object(t.a)({parentName:"pre"},{className:"language-bash"}),"graphback openapi \n")),Object(o.b)("p",null," Generate GraphQL schema and resolvers based on OpenAPI spec"))}l.isMDXComponent=!0}}]);