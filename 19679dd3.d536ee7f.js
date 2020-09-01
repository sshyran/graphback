(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1082:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return g}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),b=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=b(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(t),d=a,g=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return t?r.a.createElement(g,c(c({ref:n},p),{},{components:t})):r.a.createElement(g,c({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},163:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(6),o=(t(0),t(1082)),i={id:"config",title:"Config"},c={unversionedId:"intro/config",id:"version-0.12.x/intro/config",isDocsHomePage:!1,title:"Config",description:"Graphback can generate source code, migrate your database or start fully functional server basing just on your GraphQL Model.",source:"@site/versioned_docs/version-0.12.x/intro/config.md",slug:"/intro/config",permalink:"/docs/0.12.x/intro/config",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/intro/config.md",version:"0.12.x",sidebar:"version-0.12.x/docs",previous:{title:"Data Model",permalink:"/docs/0.12.x/intro/datamodel"},next:{title:"Graphback CRUD Specification",permalink:"/docs/0.12.x/crud/crudspec"}},l=[{value:"Configuration",id:"configuration",children:[{value:"Changing CRUD configuration per type",id:"changing-crud-configuration-per-type",children:[]}]},{value:"Database Migrations",id:"database-migrations",children:[]}],p={rightToc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback can generate source code, migrate your database or start fully functional server basing just on your GraphQL Model.\nGraphback Config allows you to control and configure all those use cases for your own needs. "),Object(o.b)("p",null,"The Core of Graphback will take your GraphQL Schema types annotated by ",Object(o.b)("inlineCode",{parentName:"p"},"model")," and perform various operations on them like:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Code generation"),Object(o.b)("li",{parentName:"ul"},"Database migrations"),Object(o.b)("li",{parentName:"ul"},"InMemory GraphQL API. ")),Object(o.b)("p",null,"All those operations could be controlled by ",Object(o.b)("inlineCode",{parentName:"p"},"crud")," flags that enable or disable various data access methods in plugins and runtime.\nThese include ",Object(o.b)("inlineCode",{parentName:"p"},"create"),", ",Object(o.b)("inlineCode",{parentName:"p"},"update"),", ",Object(o.b)("inlineCode",{parentName:"p"},"delete"),", ",Object(o.b)("inlineCode",{parentName:"p"},"find")," and ",Object(o.b)("inlineCode",{parentName:"p"},"findAll"),"."),Object(o.b)("h2",{id:"configuration"},"Configuration"),Object(o.b)("p",null,"Graphback allows you to customize all processes by using the open configuration standard ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphql-config.com"}),"GraphQL Config"),"."),Object(o.b)("p",null,"Each project needs to have a ",Object(o.b)("inlineCode",{parentName:"p"},".graphqlrc.yml")," file available in the root folder. In new projects this will be added for you. For existing projects you can run ",Object(o.b)("inlineCode",{parentName:"p"},"graphback config")," to generate one for you - see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/existingproject"}),"Adding to existing project"),"."),Object(o.b)("p",null,"Typical configuration looks like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"## Schema is not used by graphback but it is required by graphql-config and can be used by other extensions\n## Usually it should match the Graphback schema generator plugin\nschema: ./server/src/schema/*.graphql\n## Documents are not used by graphback but it is required by graphql-config and can be used by other extensions\n## Usually it should match the Graphback client generator plugin\ndocuments: ./client/src/graphql/**/*.graphql\nextensions:\n  # Graphback configuration\n  graphback:\n    ##  Path to file that contains GraphQL schema that will be processed by Graphback\n    ## Can be an array of paths too\n    model: ./model/**/*.graphql\n    ## Global flags for CRUD methods that will be used in plugins\n    crud:\n      create: true\n      update: true\n      findAll: true\n      find: true\n      delete: true\n      subCreate: true\n      subUpdate: true\n      subDelete: true\n    ## List of the codegen plugins \n    plugins:\n        graphback-schema:\n          format: graphql\n          outputPath: ./server/src/schema\n        graphback-client:\n          format: 'graphql'\n          outputPath: ./client/src/graphql\n        graphback-resolvers:\n          format: ts\n          outputPath: ./server/src/resolvers\n")),Object(o.b)("p",null,"Changing ",Object(o.b)("inlineCode",{parentName:"p"},"crud")," flags and running ",Object(o.b)("inlineCode",{parentName:"p"},"graphback generate")," will update the ",Object(o.b)("inlineCode",{parentName:"p"},"schema")," and ",Object(o.b)("inlineCode",{parentName:"p"},"resolvers")," using the latest config."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": For subscriptions, the user needs to change the value of the respective operations to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),". For example, changing ",Object(o.b)("inlineCode",{parentName:"p"},"subDelete")," to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," won't work unless, ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),".")),Object(o.b)("h3",{id:"changing-crud-configuration-per-type"},"Changing CRUD configuration per type"),Object(o.b)("p",null,"Generator config applies the config to all the types in your schema.\nGraphback allows you to change these for any single type using annotations."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n@crud.create: false\n"""\ntype User {\n  ....\n}\n')),Object(o.b)("p",null,"or to enable it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@crud.create\n"""\ntype User {\n  ....\n}\n')),Object(o.b)("h4",{id:"available-options"},"Available Options"),Object(o.b)("p",null,"All config options can be replicated by specifying the ",Object(o.b)("inlineCode",{parentName:"p"},"@crud.")," prefix"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"@crud.create: true\n@crud.update: true\n@crud.delete: true\n@crud.find: true\n@crud.findAll: true\n@crud.subCreate: true\n@crud.subUpdate: true\n@crud.subDelete: true\n")),Object(o.b)("p",null,"You can use these annotations to have more control over individual elements. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),'"""\n@model\n@crud.delete\n"""\ntype Note {\n  ...\n}\n')),Object(o.b)("p",null,"will create the ",Object(o.b)("inlineCode",{parentName:"p"},"delete")," mutation for ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," type."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),": Annotations override the configuration values in ",Object(o.b)("inlineCode",{parentName:"p"},".graphqlrc.yml"),".")),Object(o.b)("h2",{id:"database-migrations"},"Database Migrations"),Object(o.b)("p",null,"Graphback can migrate your database structure using your GraphQL schema."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: Full database migration support is currently only supported for PostgreSQL databases. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../db/dbintroduction#compatibility"}),"Database Compatibility"),".")),Object(o.b)("p",null,"To enable migrations to work, add the ",Object(o.b)("inlineCode",{parentName:"p"},"dbmigrations")," extension to your ",Object(o.b)("inlineCode",{parentName:"p"},".graphqlrc.yml")," file:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),"...\nextensions:\n  # Graphback configuration\n  graphback:\n    ...\n  ## graphql-migration config that can be also used in application\n  ## Please do not connect it to shared database as Graphback will automatically \n  ## execute dlls statements that can affect other applications.\n  dbmigrations:\n    ## See knex.js for db specific config format\n    client: pg\n    connection:\n      user: postgresql\n      password: postgres\n      database: users\n      host: localhost\n      port: 55432\n")))}b.isMDXComponent=!0}}]);