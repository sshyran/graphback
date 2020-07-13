(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),o=(n(0),n(231)),i={id:"datasources",title:"Data Sources"},c={id:"version-0.12.x/db/datasources",isDocsHomePage:!1,title:"Data Sources",description:"Your Graphback enabled API can work with a variety of databases. Our runtime libraries provide datasources for the following databases:",source:"@site/versioned_docs/version-0.12.x/db/datasources.md",permalink:"/docs/db/datasources",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/db/datasources.md",version:"0.12.x",sidebar:"version-0.12.x/docs",previous:{title:"Database",permalink:"/docs/db/dbintroduction"},next:{title:"Database Migrations",permalink:"/docs/db/dbmigrations"}},l=[{value:"PostgreSQL",id:"postgresql",children:[{value:"Installation",id:"installation",children:[]},{value:"Adding to your project",id:"adding-to-your-project",children:[]}]},{value:"MongoDB",id:"mongodb",children:[{value:"Installation",id:"installation-1",children:[]},{value:"Adding to your project",id:"adding-to-your-project-1",children:[]}]},{value:"SQLite",id:"sqlite",children:[{value:"Installation",id:"installation-2",children:[]},{value:"Adding to your project",id:"adding-to-your-project-2",children:[]}]},{value:"Using data sources",id:"using-data-sources",children:[]}],b={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Your Graphback enabled API can work with a variety of databases. Our runtime libraries provide datasources for the following databases:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#postgresql"}),"PostgreSQL")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#mongodb"}),"MongoDB")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#sqlite"}),"SQLite"))),Object(o.b)("p",null,"Each of these datasources give you a database-specific implementation of our ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../crud/crudspec"}),"CRUD Specification"),". For more on how these data sources work see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../crud/crudruntime"}),"CRUD Runtime Abstraction"),"."),Object(o.b)("h2",{id:"postgresql"},"PostgreSQL"),Object(o.b)("h3",{id:"installation"},"Installation"),Object(o.b)("p",null,"Install with npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @graphback/runtime-knex\n")),Object(o.b)("p",null,"You will also need to have ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://knexjs.org/"}),"Knex.js")," installed:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install knex\n")),Object(o.b)("h3",{id:"adding-to-your-project"},"Adding to your project"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"createKnexPGCRUDRuntimeServices")," method creates a CRUD service and PostgreSQL data provider for each of your models.  "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"createKnexPGCRUDRuntimeServices")," has the following arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"models: GraphbackPubSubModel[]"),": List of your Graphback models and their individual configurations. This is generated with your resolvers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"schema: GraphQLSchema"),": Your GraphQL schema."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"db: Knex"),": Knex database instance."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pubSub: PubSubEngine"),": PubSub instance.")),Object(o.b)("p",null,"You can then attach these runtime services to your server context:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { createKnexPGCRUDRuntimeServices } from '@graphback/runtime-knex';\nimport { buildSchema } from 'graphql';\nimport Knex from 'knex';\nimport { PubSub } from 'graphql-subscriptions';\nimport { models } from './resolvers/models';\nimport resolvers from './resolvers/resolvers';\n\nconst schema = buildSchema(...);\n\nconst db = Knex(...);\n\nconst pubSub = new PubSub();\n\n// create runtime services for Postgres\nconst context = createKnexPGCRUDRuntimeServices(models, schema, db, pubSub);\n\nconst apolloServer = new ApolloServer({\n    typeDefs,\n    resolvers,\n    context\n});\n")),Object(o.b)("h2",{id:"mongodb"},"MongoDB"),Object(o.b)("h3",{id:"installation-1"},"Installation"),Object(o.b)("p",null,"Install with npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @graphback/runtime-mongo\n")),Object(o.b)("p",null,"You will also need to have a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/mongodb/node-mongodb-native"}),"MongoDB Node.js Driver")," installed:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install mongodb\n")),Object(o.b)("h3",{id:"adding-to-your-project-1"},"Adding to your project"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"createMongoCRUDRuntimeContext")," method creates a CRUD service and MongoDB data provider for each of your models.  "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"createMongoCRUDRuntimeContext")," has the following arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"models: GraphbackPubSubModel[]"),": List of your Graphback models and their individual configurations. This is generated with your resolvers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"schema: GraphQLSchema"),": Your GraphQL schema."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"db: Db"),": Mongo Database instance."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pubSub: PubSubEngine"),": PubSub instance.")),Object(o.b)("p",null,"You can then attach these runtime services to your server context:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { createMongoCRUDRuntimeContext } from '@graphback/runtime-mongo';\nimport { buildSchema } from 'graphql';\nimport { Db } from \"mongodb\";\nimport { PubSub } from 'graphql-subscriptions';\nimport { models } from './resolvers/models';\nimport resolvers from './resolvers/resolvers';\n\nconst schema = buildSchema(...);\n\n// Example Mongo Connection URL\nconst url = 'mongodb://mongodb:mongo@localhost:27017/admin';\n\nconst mongoClient = await MongoClient.connect(url);\n// get db instance\nconst db = mongoClient.db('users');\n\nconst pubSub = new PubSub();\n\n// create runtime services for MongoDB\nconst context = createMongoCRUDRuntimeContext(models, schema, db, pubSub);\n\nconst apolloServer = new ApolloServer({\n    typeDefs,\n    resolvers,\n    context\n});\n")),Object(o.b)("h2",{id:"sqlite"},"SQLite"),Object(o.b)("h3",{id:"installation-2"},"Installation"),Object(o.b)("p",null,"Install with npm:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install @graphback/runtime-knex\n")),Object(o.b)("p",null,"You will also need to have ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"http://knexjs.org/"}),"Knex.js")," installed:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"npm install knex\n")),Object(o.b)("h3",{id:"adding-to-your-project-2"},"Adding to your project"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"createKnexCRUDRuntimeServices")," method creates a CRUD service and PostgreSQL data provider for each of your models.  "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"createKnexCRUDRuntimeServices")," has the following arguments:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"models: GraphbackPubSubModel[]"),": List of your Graphback models and their individual configurations. This is generated with your resolvers."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"schema: GraphQLSchema"),": Your GraphQL schema."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"db: Knex"),": Knex database instance."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pubSub: PubSubEngine"),": PubSub instance.")),Object(o.b)("p",null,"You can then attach these runtime services to your server context:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { createKnexCRUDRuntimeServices } from '@graphback/runtime-knex';\nimport { buildSchema } from 'graphql';\nimport Knex from 'knex';\nimport { PubSub } from 'graphql-subscriptions';\nimport { models } from './resolvers/models';\nimport resolvers from './resolvers/resolvers';\n\nconst schema = buildSchema(...);\n\nconst db = Knex(...);\n\nconst pubSub = new PubSub();\n\n// create runtime services for SQLite\nconst context = createKnexCRUDRuntimeServices(models, schema, db, pubSub);\n\nconst apolloServer = new ApolloServer({\n    typeDefs,\n    resolvers,\n    context\n});\n")),Object(o.b)("h2",{id:"using-data-sources"},"Using data sources"),Object(o.b)("p",null,"Your data sources are attached to the application context and can be accessed in every resolver function:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"findAllComments: (parent, args, context) => {\n    return context.Comment.findAll();\n};\n")))}s.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);