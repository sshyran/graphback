(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{174:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return b}));var r=a(2),n=a(6),o=(a(0),a(231)),i={id:"quickstart",title:"Create client and server application from template",sidebar_label:"Create a new app"},c={id:"version-0.12.x/intro/quickstart",isDocsHomePage:!1,title:"Create client and server application from template",description:"You can use the Graphback CLI to generate a new GraphQL project in minutes.",source:"@site/versioned_docs/version-0.12.x/intro/quickstart.md",permalink:"/docs/intro/quickstart",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.12.x/intro/quickstart.md",version:"0.12.x",sidebar_label:"Create a new app",sidebar:"version-0.12.x/docs",previous:{title:"Introduction to Graphback",permalink:"/docs/gettingstarted"},next:{title:"Adding Graphback to your Node.js project",permalink:"/docs/intro/existingproject"}},p=[{value:"Next steps",id:"next-steps",children:[]}],l={rightToc:p};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can use the Graphback CLI to generate a new GraphQL project in minutes."),Object(o.b)("p",null,"Initializing with npx:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npx graphback-cli init <project-name>\n")),Object(o.b)("p",null,"Or by installing Graphback CLI globally:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"npm install -g graphback-cli\ngraphback init <project-name>\n")),Object(o.b)("p",null,"The CLI will ask you to choose from one of three templates:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"apollo-fullstack-ts"),": Apollo GraphQL server and React client using TypeScript and PostgreSQL."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"apollo-postgres-runtime-ts"),": Apollo GraphQL Server using Graphback runtime API and PostgreSQL database."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"apollo-mongo-runtime-ts"),": Apollo GraphQL Server using Graphback runtime API and MongoDB database.")),Object(o.b)("p",null,"In a few seconds you should have an empty GraphQL application."),Object(o.b)("h3",{id:"next-steps"},"Next steps"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To change the default application configuration see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/intro/config"}),"Graphback Config"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/intro/datamodel"}),"Defining your Data model")," for how to design your data model.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Once your data model is complete, run ",Object(o.b)("inlineCode",{parentName:"p"},"graphback generate")," from your project to generate a GraphQL schema and API.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Graphback provides a number of different data sources which can be configured at application runtime. See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"../db/datasources"}),"Data Sources"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If you are using a PostgreSQL datasource you can migrate your database to match your schema by running ",Object(o.b)("inlineCode",{parentName:"p"},"graphback db"),". See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/db/dbmigrations"}),"Database Migrations")," for more.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run your application!"))))}b.isMDXComponent=!0},231:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=b(a),m=r,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return a?n.a.createElement(d,c(c({ref:t},l),{},{components:a})):n.a.createElement(d,c({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);