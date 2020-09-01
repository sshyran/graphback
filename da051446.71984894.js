(window.webpackJsonp=window.webpackJsonp||[]).push([[871],{1082:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return h}));var r=t(0),n=t.n(r);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var b=n.a.createContext({}),l=function(e){var a=n.a.useContext(b),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},s=function(e){var a=l(e.components);return n.a.createElement(b.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},g=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),s=l(t),g=r,h=s["".concat(o,".").concat(g)]||s[g]||u[g]||c;return t?n.a.createElement(h,i(i({ref:a},b),{},{components:t})):n.a.createElement(h,i({ref:a},b))}));function h(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,o=new Array(c);o[0]=g;var i={};for(var p in a)hasOwnProperty.call(a,p)&&(i[p]=a[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var b=2;b<c;b++)o[b]=t[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},927:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return i})),t.d(a,"rightToc",(function(){return p})),t.d(a,"default",(function(){return l}));var r=t(2),n=t(6),c=(t(0),t(1082)),o={id:"index",title:"graphback",sidebar_label:"README"},i={unversionedId:"api/graphback/index",id:"version-0.16.x/api/graphback/index",isDocsHomePage:!1,title:"graphback",description:"Graphback",source:"@site/versioned_docs/version-0.16.x/api/graphback/index.md",slug:"/api/graphback/index",permalink:"/docs/api/graphback/index",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphback/index.md",version:"0.16.x",sidebar_label:"README"},p=[{value:"Graphback",id:"graphback",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Graphback usage",id:"graphback-usage",children:[]},{value:"GraphbackGenerator",id:"graphbackgenerator",children:[]},{value:"Graphback Runtime",id:"graphback-runtime",children:[]}],b={rightToc:p};function l(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"graphback"},"Graphback"),Object(c.b)("p",{align:"center"},Object(c.b)("img",{width:"400",src:"https://raw.githubusercontent.com/aerogear/graphback/master/website/static/img/logo.png"}),Object(c.b)("br",null),"Auto generate database structure, ",Object(c.b)("br",null),"GraphQL Resolvers and Queries from GraphQL types \ud83d\ude80"),Object(c.b)("h2",{id:"motivation"},"Motivation"),Object(c.b)("p",null,"Graphback helps you to kickstart your experience with any existing GraphQL implementation\nby generating backend and client side CRUD layer using your GraphQL data model."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Documentation"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphback.dev"}),"https://graphback.dev")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Repository"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/"}),"https://github.com/aerogear/graphback/")),Object(c.b)("h2",{id:"graphback-usage"},"Graphback usage"),Object(c.b)("p",null,"Graphback package provides programatic API for the Graphback ecosystem.\nIn most of the cases you can use graphback by utilizing graphback-cli package that will expose all useful commands and cover most of the use cases."),Object(c.b)("p",null,"Graphback package provides two ways to initialize entire ecosystem from the code"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"GraphbackRuntime"),Object(c.b)("li",{parentName:"ul"},"GraphbackGenerator")),Object(c.b)("h2",{id:"graphbackgenerator"},"GraphbackGenerator"),Object(c.b)("p",null,"Graphback generator can be used to initialize Graphback plugins that will transform schema and generate source code.\nGraphback Generator will utilize GraphQL-Config with underlying plugins"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"  const config = await loadConfig({\n    rootDir: process.cwd(),\n    extensions: [graphbackConfigExtension]\n  });\n  const project = config.getProject('default')\n  const graphbackConfig = project.extension('graphback');\n\n  const generator = new GraphbackGenerator(schemaDocument, graphbackConfig)\n  generator.generateSourceCode();\n")),Object(c.b)("p",null,"For full usage please check:\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/blob/master/packages/graphback-cli/src/components/generate.ts#L42-L43"}),"https://github.com/aerogear/graphback/blob/master/packages/graphback-cli/src/components/generate.ts#L42-L43")),Object(c.b)("h2",{id:"graphback-runtime"},"Graphback Runtime"),Object(c.b)("p",null,"Runtime class allows to initialize Graphback CRUD layer without code generation.\nAll resolvers and schema are created in-memory"),Object(c.b)("p",null,"For full usage and examples please check runtime example application\n",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/tree/master/templates/ts-apollo-runtime-backend"}),"https://github.com/aerogear/graphback/tree/master/templates/ts-apollo-runtime-backend")))}l.isMDXComponent=!0}}]);