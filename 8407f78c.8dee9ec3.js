(window.webpackJsonp=window.webpackJsonp||[]).push([[637],{1315:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},692:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),i=n(6),r=(n(0),n(1315)),o={id:"keycloak",title:"Authentication with Keycloak",sidebar_label:"Keycloak"},c={unversionedId:"authentication/keycloak",id:"version-0.14.x/authentication/keycloak",isDocsHomePage:!1,title:"Authentication with Keycloak",description:"Graphback Keycloak Authz",source:"@site/versioned_docs/version-0.14.x/authentication/keycloak.md",slug:"/authentication/keycloak",permalink:"/docs/0.14.x/authentication/keycloak",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.14.x/authentication/keycloak.md",version:"0.14.x",sidebar_label:"Keycloak",sidebar:"version-0.14.x/docs",previous:{title:"Authentication and authorization for Graphback",permalink:"/docs/0.14.x/authentication/intro"},next:{title:"Data Synchronization",permalink:"/docs/0.14.x/datasync/intro"}},l=[{value:"Graphback Keycloak Authz",id:"graphback-keycloak-authz",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Relationships Authorization",id:"relationships-authorization",children:[]},{value:"Field Updates Authorization",id:"field-updates-authorization",children:[]},{value:"Query Field-Level authorization",id:"query-field-level-authorization",children:[]},{value:"Dynamic Filtering",id:"dynamic-filtering",children:[]},{value:"Your own Resolvers",id:"your-own-resolvers",children:[]},{value:"Using authorization with Graphback",id:"using-authorization-with-graphback",children:[]},{value:"Running example",id:"running-example",children:[]}],s={rightToc:l};function b(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"graphback-keycloak-authz"},"Graphback Keycloak Authz"),Object(r.b)("p",null,"Graphback Keycloak Authz enables ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.keycloak.org/"}),"Keycloak")," integration in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphback.dev"}),"Graphback")," based applications. This enables you to declaratively add authorization capabilities like role based access on top of the CRUD model that is used within Graphback."),Object(r.b)("p",null,"This package is designed to work with ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/keycloak-connect"}),Object(r.b)("inlineCode",{parentName:"a"},"keycloak-connect"))," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/keycloak-connect-graphql"}),Object(r.b)("inlineCode",{parentName:"a"},"keycloak-connect-graphql")),". ",Object(r.b)("inlineCode",{parentName:"p"},"keycloak-connect")," is the official Keycloak middleware for Express applications. ",Object(r.b)("inlineCode",{parentName:"p"},"keycloak-connect-graphql")," provides deeper Keycloak integration into GraphQL servers."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"This package is an early alpha and not officially supported by Graphback"))),Object(r.b)("h2",{id:"getting-started"},"Getting Started"),Object(r.b)("p",null,"This module requires you to install the following dependencies into your application."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install keycloak-connect\nnpm install keycloak-connect-graphql\n")),Object(r.b)("p",null,"Then follow the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/keycloak-connect-graphql#getting-started"}),"Getting started instructions for ",Object(r.b)("inlineCode",{parentName:"a"},"keycloak-connect-graphql"))),Object(r.b)("p",null,"Once the getting started instructions are covered, you must create a configuration that defines the authorization rules for each model within your Graphback application."),Object(r.b)("p",null,"Here is an example configuration."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const authConfig = {\n  Task: {\n    create: {},\n    read: {},\n    update: { roles: ['admin'] },\n    delete: { roles: ['admin'] },\n    subCreate: {},\n    subUpdate: { roles: ['admin'] },\n    subDelete: { roles: ['admin'] },\n  },\n  Report: {\n    create: { roles: ['admin'] },\n    update: { roles: ['admin'] },\n    delete: { roles: ['admin'] },\n  },\n};\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("inlineCode",{parentName:"p"},"CrudServiceAuthConfig")," interface defines all possible keys that each model can define.\nWhen key is not defined engine will assume that no roles are required."))),Object(r.b)("p",null,"With this configuration the following rules are in place."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"All users can create and read ",Object(r.b)("inlineCode",{parentName:"li"},"Task")," types but only admins can update and delete them."),Object(r.b)("li",{parentName:"ul"},"Admin users can create, update and delete ",Object(r.b)("inlineCode",{parentName:"li"},"Report")," types, and all users can read them.")),Object(r.b)("h2",{id:"relationships-authorization"},"Relationships Authorization"),Object(r.b)("p",null,"Developers can also add authorization rules on sepecific relationships for data fetching purposes.\nRelationship rules will be added on top of the existing rules that are defined for the individual objects."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const authConfig = {\n  Task: {\n    relations: {\n        taskUsers: { roles: ['admin'] }\n        allTasksComments: { roles: ['commenter'] }\n    },\n\n  },\n")),Object(r.b)("p",null,"With this configuration the following rules are in place."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tasks ",Object(r.b)("inlineCode",{parentName:"li"},"taskUsers")," field has ",Object(r.b)("inlineCode",{parentName:"li"},"admin")," role applied. Fetching User object will require ",Object(r.b)("inlineCode",{parentName:"li"},"admin")," role for any user field fetched"),Object(r.b)("li",{parentName:"ul"},"Tasks ",Object(r.b)("inlineCode",{parentName:"li"},"allTasksComments")," field has ",Object(r.b)("inlineCode",{parentName:"li"},"commenter")," role applied. Fetching ",Object(r.b)("inlineCode",{parentName:"li"},"Comment")," object will require ",Object(r.b)("inlineCode",{parentName:"li"},"commenter")," role for any user field fetched")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Due to limitations of the Graphback ",Object(r.b)("inlineCode",{parentName:"p"},"relations")," authorization works only on ",Object(r.b)("inlineCode",{parentName:"p"},"OneToMany")," relationships.\n",Object(r.b)("inlineCode",{parentName:"p"},"OneToOne")," relationships will utilize ",Object(r.b)("inlineCode",{parentName:"p"},"read")," config of the relationship target."))),Object(r.b)("h2",{id:"field-updates-authorization"},"Field Updates Authorization"),Object(r.b)("p",null,"Developers can prevent from unauthorized updates of the certain fields for ",Object(r.b)("inlineCode",{parentName:"p"},"create")," and ",Object(r.b)("inlineCode",{parentName:"p"},"update")," operations.\n",Object(r.b)("inlineCode",{parentName:"p"},"updateFields")," configuration can be used to restrict what fields can be updated."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const authConfig = {\n  Task: {\n    updateFields: {\n       secret: { roles: ['admin'] }\n    },\n  },\n")),Object(r.b)("p",null,"With this configuration the following rules are in place."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tasks ",Object(r.b)("inlineCode",{parentName:"li"},"secret")," field has ",Object(r.b)("inlineCode",{parentName:"li"},"admin")," role applied. ",Object(r.b)("inlineCode",{parentName:"li"},"createTask")," and ",Object(r.b)("inlineCode",{parentName:"li"},"updateTask")," will require ",Object(r.b)("inlineCode",{parentName:"li"},"admin")," role if\nsecret field was provided as part of the input type.")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"When designing your schema you need to consider impact of the authorization rules on your types."))),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Current implementation doesn't allow developers to handle ",Object(r.b)("inlineCode",{parentName:"p"},"create")," and ",Object(r.b)("inlineCode",{parentName:"p"},"update")," operations separately.\nIf you would like to handle those separately please consider extending ",Object(r.b)("inlineCode",{parentName:"p"},"KeycloakCRUDService"),"."))),Object(r.b)("h2",{id:"query-field-level-authorization"},"Query Field-Level authorization"),Object(r.b)("p",null,"Developers can prevent from unautorized queries of the certain fields for ",Object(r.b)("inlineCode",{parentName:"p"},"find")," and ",Object(r.b)("inlineCode",{parentName:"p"},"get")," operations.\n",Object(r.b)("inlineCode",{parentName:"p"},"returnFields")," configuration can be used to restrict what fields can be fetched."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const authConfig = {\n  Task: {\n    returnFields: {\n       secretReturnField: { roles: ['admin'] }\n    },\n  }\n")),Object(r.b)("p",null,"With this configuration the following rules are in place."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tasks ",Object(r.b)("inlineCode",{parentName:"li"},"secretReturnField")," field has ",Object(r.b)("inlineCode",{parentName:"li"},"admin")," role applied. ",Object(r.b)("inlineCode",{parentName:"li"},"findTask")," operation will fail with\nunauthorized error if non admin user requests ",Object(r.b)("inlineCode",{parentName:"li"},"secretReturnField"))),Object(r.b)("h2",{id:"dynamic-filtering"},"Dynamic Filtering"),Object(r.b)("p",null,"In many ocassions developers want to restrict certain resources only for their respective owners.\nSpecifying user ID on the client is not secure as it can be altered to request resource that user\nis not authorized to see. Solution for this problem is to apply specific filtering rules on the\nserver based on the currently logged user information:"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Keycloak-authz")," library allows to provide dynamic filter for each individual model object."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const authConfig = {\n  Task: {\n    filterUsingAuthInfo: myAuthFilter,\n  },\n};\n\n/**\n * @param filter - filter object that can be extended to add extra query\n * @param profileInfo - profile information hidden in token (req.kauth.grant.access_token.content)\n * @return filter - new filter field for your specific database\n */\nconst myAuthFilter = (filter: any, profileInfo: any) => {\n  filter.ownerEmail = {\n    profileInfo: {\n      eq: profileInfo.email\n    }\n  };\n\n  return filter;\n};\n")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Dynamic filtering is an ",Object(r.b)("strong",{parentName:"p"},"experimental")," feature due to lack of strong typings on ",Object(r.b)("inlineCode",{parentName:"p"},"profileInfo")," and ",Object(r.b)("inlineCode",{parentName:"p"},"filter"),".\nPlease review Graphback ",Object(r.b)("inlineCode",{parentName:"p"},"QueryFilter")," definitions and Keycloak profile information objects before building filters."))),Object(r.b)("h2",{id:"your-own-resolvers"},"Your own Resolvers"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"keycloak-authz")," package provides out of the box handlers for the Graphback generated resolvers.\nDevelopers can utilize authorization in their own resolvers and custom code.\nFor more information please refer to the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/keycloak-connect-graphql"}),"https://github.com/aerogear/keycloak-connect-graphql")," library documentation"),Object(r.b)("h2",{id:"using-authorization-with-graphback"},"Using authorization with Graphback"),Object(r.b)("p",null,"During server initialization, use the ",Object(r.b)("inlineCode",{parentName:"p"},"createKeycloakCRUDService")," function to initialize the KeycloakCrudService instances for each model."),Object(r.b)("p",null,"The following example shows just the necessary parts to set up the runtime services in Graphback."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { ApolloServer } from 'apollo-server-express'\nimport { createKeycloakCRUDService } from '@graphback/keycloak-authz'\nimport { KnexDbDataProvider } from '@graphback/runtime-knex'\nimport { PubSub } from 'graphql-subscriptions'\nimport * as Knex from 'knex'\nimport { buildGraphbackAPI, createCRUDService } from 'graphback'\n\n// the application model\nconst model = `\n\"\"\"\n@model\n\"\"\"\ntype Task {\n  id: ID!\n  title: String!\n  description: String!\n}`\n\n// the auth rules for the application\nconst authConfig = {\n  Task: {\n    create: {},\n    read: {},\n    update: { roles: [\"admin\"] },\n    delete: { roles: [\"admin\"] }\n  }\n}\n\n// set up the Knex database client\nconst db = Knex({...})\n\n// standard Graphback runtime setup\nconst pubSub = new PubSub()\n\nconst keycloakService = createKeycloakCRUDService(authConfig, createCRUDService({\n  pubSub: new PubSub()\n}));\nconst { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(modelDefs, {\n  serviceCreator: keycloakService,\n  dataProviderCreator: createKnexDbProvider(db)\n});\n\nconst server = new ApolloServer({\n  typeDefs,\n  resolvers,\n  context: (context) => {\n    return {\n      ...contextCreator(context),\n      kauth: new KeycloakContext({ req: context.req })\n    }\n  }\n})\n")),Object(r.b)("p",null,"The above example shows runtime set up using the KnexDbDataProvider, but other data providers such as the ",Object(r.b)("inlineCode",{parentName:"p"},"MongoDBDataProvider")," can also be passed."),Object(r.b)("h2",{id:"running-example"},"Running example"),Object(r.b)("p",null,"If you wish to use authorization mechanism you can try it on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/datasync-starter"}),"DataSync starter")," project"))}b.isMDXComponent=!0}}]);