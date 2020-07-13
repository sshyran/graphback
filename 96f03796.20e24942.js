(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{168:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),i=(t(0),t(231)),l={id:"crud-client",title:"Graphback CRUD Client Queries Plugin",sidebar_label:"CRUD Client Queries"},o={id:"version-0.12.x/plugins/crud-client",isDocsHomePage:!1,title:"Graphback CRUD Client Queries Plugin",description:"Graphback CRUD Client plugin",source:"@site/versioned_docs/version-0.12.x/plugins/graphback-client.md",permalink:"/docs/plugins/crud-client",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/plugins/graphback-client.md",version:"0.12.x",sidebar_label:"CRUD Client Queries",sidebar:"version-0.12.x/docs",previous:{title:"CRUD Resolvers Plugin",permalink:"/docs/plugins/crud-resolvers"},next:{title:"Creating your own plugin",permalink:"/docs/plugins/customplugin"}},c=[{value:"Graphback CRUD Client plugin",id:"graphback-crud-client-plugin",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Plugin Config",id:"plugin-config",children:[]},{value:"How it works",id:"how-it-works",children:[]}],p={rightToc:c};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"graphback-crud-client-plugin"},"Graphback CRUD Client plugin"),Object(i.b)("p",null,"Graphback client plugin allows users to generate client-side queries based on the model and CRUD settings.\nDevelopers can embed generated queries into their client-side applications.\nGenerated queries are compatible with all major GraphQL plugins like Apollo and URQL."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @graphback/codegen-client\n")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"Client-side queries can be consumed inside any application.\nWhen using any GraphQL Clients queries can be compiled and passed to the client methods.\nFor example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"apolloClient.mutate(createUserQuery)\n")),Object(i.b)("p",null,"Plugin allows to create files in many formats to suit the needs of your application."),Object(i.b)("p",null,"Please refer to ts-apollo-fullstack app for fully functional example:\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/tree/master/templates/ts-apollo-fullstack"}),"https://github.com/aerogear/graphback/tree/master/templates/ts-apollo-fullstack")),Object(i.b)("h2",{id:"plugin-config"},"Plugin Config"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"  /**\n   * Output language that will be supported\n   * Our plugin supports multiple languages for simplicity\n   *\n   * - ts - typescript file output (backwards compatibility)\n   * - graphql - .graphql file\n   * - gqlwithfragment - complete graphql queries containing fragments for redundancy\n   */\n  format: 'ts' | 'graphql' | 'gqlwithfragment'\n\n  /**\n   * Generate only fragments and skip query, mutation and subscription elements\n   * This can be particulairly usefull when many custom complex queries are needed\n   * but they still base on autogenerated fragments\n   */\n  fragmentOnly?: boolean\n\n  /**\n   * RelativePath for the output files created by generator\n   */\n  outputPath: string\n")),Object(i.b)("p",null,"Example plugin configuration in YAML: "),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"})," plugins:\n  graphback-client:\n    format: 'graphql'\n    outputPath: ./client/src/graphql\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: Plugin require ",Object(i.b)("inlineCode",{parentName:"p"},"crud")," configuration specified as part of the ",Object(i.b)("inlineCode",{parentName:"p"},"graphback")," extension ")),Object(i.b)("h2",{id:"how-it-works"},"How it works"),Object(i.b)("p",null,"Graphback asks whether you want to generate client-side queries in the ",Object(i.b)("inlineCode",{parentName:"p"},"graphback config")," command. Answering 'yes' will setup client generator plugin in your config."),Object(i.b)("p",null,"For a data model having"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"type Note {\n  id: ID!\n  title: String!\n  description: String!\n}\n")),Object(i.b)("p",null,"running ",Object(i.b)("inlineCode",{parentName:"p"},"graphback generate")," will generate queries and mutations that are enabled in crud config section."))}u.isMDXComponent=!0},231:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},g=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),g=r,d=s["".concat(l,".").concat(g)]||s[g]||b[g]||i;return t?a.a.createElement(d,o(o({ref:n},p),{},{components:t})):a.a.createElement(d,o({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);