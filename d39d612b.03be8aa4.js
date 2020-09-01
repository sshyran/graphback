(window.webpackJsonp=window.webpackJsonp||[]).push([[850],{1082:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var i=b.a.createContext({}),l=function(e){var t=b.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=l(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},O=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),o=l(a),O=r,j=o["".concat(c,".").concat(O)]||o[O]||m[O]||n;return a?b.a.createElement(j,p(p({ref:t},i),{},{components:a})):b.a.createElement(j,p({ref:t},i))}));function j(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=O;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<n;i++)c[i]=a[i];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},906:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return l}));var r=a(2),b=a(6),n=(a(0),a(1082)),c={id:"_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",title:"SQLiteKnexDBDataProvider",sidebar_label:"SQLiteKnexDBDataProvider"},p={unversionedId:"api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",id:"version-0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",isDocsHomePage:!1,title:"SQLiteKnexDBDataProvider",description:"Knex.js database data provider exposing basic CRUD operations.",source:"@site/versioned_docs/version-0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider.md",slug:"/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",permalink:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider.md",version:"0.15.x",sidebar_label:"SQLiteKnexDBDataProvider",sidebar:"version-0.15.x/docs",previous:{title:"KnexDBDataProvider",permalink:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"},next:{title:"createMongoDbProvider",permalink:"/docs/0.15.x/api/graphback-runtime-mongodb/modules/_createmongodbprovider_"}},d=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Implements",id:"implements",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Protected</code> baseType",id:"protected-basetype",children:[]},{value:"<code>Protected</code> db",id:"protected-db",children:[]},{value:"<code>Protected</code> tableMap",id:"protected-tablemap",children:[]},{value:"<code>Protected</code> tableName",id:"protected-tablename",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchRead",id:"batchread",children:[]},{value:"count",id:"count",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"<code>Protected</code> getSelectedFields",id:"protected-getselectedfields",children:[]},{value:"update",id:"update",children:[]}]}],i={rightToc:d};function l(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Knex.js database data provider exposing basic CRUD operations."),Object(n.b)("p",null,"NOTE: This class implements SQLite specific implementaion"),Object(n.b)("h2",{id:"type-parameters"},"Type parameters"),Object(n.b)("p",null,"\u25aa ",Object(n.b)("strong",{parentName:"p"},"Type")),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),"\u2039Type\u203a"),Object(n.b)("p",{parentName:"li"},"\u21b3 ",Object(n.b)("strong",{parentName:"p"},"SQLiteKnexDBDataProvider")))),Object(n.b)("h2",{id:"implements"},"Implements"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"GraphbackDataProvider\u2039Type\u203a")),Object(n.b)("h2",{id:"index"},"Index"),Object(n.b)("h3",{id:"constructors"},"Constructors"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#constructor"}),"constructor"))),Object(n.b)("h3",{id:"properties"},"Properties"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#protected-basetype"}),"baseType")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#protected-db"}),"db")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#protected-tablemap"}),"tableMap")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#protected-tablename"}),"tableName"))),Object(n.b)("h3",{id:"methods"},"Methods"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#batchread"}),"batchRead")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#count"}),"count")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#create"}),"create")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#delete"}),"delete")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#findby"}),"findBy")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#findone"}),"findOne")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#protected-getselectedfields"}),"getSelectedFields")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider#update"}),"update"))),Object(n.b)("h2",{id:"constructors-1"},"Constructors"),Object(n.b)("h3",{id:"constructor"},"constructor"),Object(n.b)("p",null,"+"," ",Object(n.b)("strong",{parentName:"p"},"new SQLiteKnexDBDataProvider"),"(",Object(n.b)("inlineCode",{parentName:"p"},"baseType"),": GraphQLObjectType, ",Object(n.b)("inlineCode",{parentName:"p"},"db"),": Knex): ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"}),"SQLiteKnexDBDataProvider"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#constructor"}),"constructor"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-runtime-knex/src/SQLiteKnexDBDataProvider.ts#L12"}),"SQLiteKnexDBDataProvider.ts:12"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"baseType")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLObjectType")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"db")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Knex")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_sqliteknexdbdataprovider_.sqliteknexdbdataprovider"}),"SQLiteKnexDBDataProvider"))),Object(n.b)("h2",{id:"properties-1"},"Properties"),Object(n.b)("h3",{id:"protected-basetype"},Object(n.b)("inlineCode",{parentName:"h3"},"Protected")," baseType"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"baseType"),": ",Object(n.b)("em",{parentName:"p"},"GraphQLObjectType")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-basetype"}),"baseType"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L20"}),"KnexDBDataProvider.ts:20"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"protected-db"},Object(n.b)("inlineCode",{parentName:"h3"},"Protected")," db"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"db"),": ",Object(n.b)("em",{parentName:"p"},"Knex")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-db"}),"db"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L19"}),"KnexDBDataProvider.ts:19"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"protected-tablemap"},Object(n.b)("inlineCode",{parentName:"h3"},"Protected")," tableMap"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"tableMap"),": ",Object(n.b)("em",{parentName:"p"},"ModelTableMap")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-tablemap"}),"tableMap"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L22"}),"KnexDBDataProvider.ts:22"))),Object(n.b)("hr",null),Object(n.b)("h3",{id:"protected-tablename"},Object(n.b)("inlineCode",{parentName:"h3"},"Protected")," tableName"),Object(n.b)("p",null,"\u2022 ",Object(n.b)("strong",{parentName:"p"},"tableName"),": ",Object(n.b)("em",{parentName:"p"},"string")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-tablename"}),"tableName"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L21"}),"KnexDBDataProvider.ts:21"))),Object(n.b)("h2",{id:"methods-1"},"Methods"),Object(n.b)("h3",{id:"batchread"},"batchRead"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"batchRead"),"(",Object(n.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"ids"),": string[], ",Object(n.b)("inlineCode",{parentName:"p"},"filter"),": any, ",Object(n.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#batchread"}),"batchRead"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L104"}),"KnexDBDataProvider.ts:104"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"relationField")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"ids")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"count"},"count"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"count"),"(",Object(n.b)("inlineCode",{parentName:"p"},"filter"),": any): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#count"}),"count"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L97"}),"KnexDBDataProvider.ts:97"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"create"},"create"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"create"),"(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(n.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Overrides ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#create"}),"create"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-runtime-knex/src/SQLiteKnexDBDataProvider.ts#L18"}),"SQLiteKnexDBDataProvider.ts:18"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"delete"},"delete"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"delete"),"(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(n.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#delete"}),"delete"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L57"}),"KnexDBDataProvider.ts:57"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"findby"},"findBy"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"findBy"),"(",Object(n.b)("inlineCode",{parentName:"p"},"filter"),": QueryFilter\u2039Type\u203a, ",Object(n.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext, ",Object(n.b)("inlineCode",{parentName:"p"},"page?"),": GraphbackPage, ",Object(n.b)("inlineCode",{parentName:"p"},"orderBy?"),": GraphbackOrderBy): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#findby"}),"findBy"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L81"}),"KnexDBDataProvider.ts:81"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"QueryFilter\u2039Type\u203a")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"page?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackPage")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"orderBy?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackOrderBy")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"findone"},"findOne"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"findOne"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": Partial\u2039Type\u203a, ",Object(n.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#findone"}),"findOne"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L70"}),"KnexDBDataProvider.ts:70"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"protected-getselectedfields"},Object(n.b)("inlineCode",{parentName:"h3"},"Protected")," getSelectedFields"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"getSelectedFields"),"(",Object(n.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(n.b)("em",{parentName:"p"},'string[] | "'),'"*'),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#protected-getselectedfields"}),"getSelectedFields"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L121"}),"KnexDBDataProvider.ts:121"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},'string[] | "'),'"*'),Object(n.b)("hr",null),Object(n.b)("h3",{id:"update"},"update"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"update"),"(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(n.b)("inlineCode",{parentName:"p"},"context"),": GraphbackContext): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Inherited from ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider"}),"KnexDBDataProvider"),".",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphback-runtime-knex/classes/_knexdbdataprovider_.knexdbdataprovider#update"}),"update"))),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphback-runtime-knex/src/KnexDBDataProvider.ts#L41"}),"KnexDBDataProvider.ts:41"))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"context")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphbackContext")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")))}l.isMDXComponent=!0}}]);