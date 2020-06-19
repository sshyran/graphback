/*! For license information please see 71b298df.f2f8fae3.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(222),n(221)),i={id:"dbmigrations",title:"Database Migrations",sidebar_label:"Migrations"},l={id:"db/dbmigrations",title:"Database Migrations",description:"Graphback uses [graphql-migrations](https://www.npmjs.com/package/graphql-migrations) to automatically create and update tables from a GraphQL schema.",source:"@site/../docs/db/migrations.md",permalink:"/docs/next/db/dbmigrations",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/db/migrations.md",version:"next",sidebar_label:"Migrations",sidebar:"docs",previous:{title:"Data Sources",permalink:"/docs/next/db/datasources"},next:{title:"CLI commands",permalink:"/docs/next/commands"}},c=[{value:"Compatibility",id:"compatibility",children:[]},{value:"Usage",id:"usage",children:[{value:"API",id:"api",children:[]},{value:"Migration Options",id:"migration-options",children:[]}]},{value:"Defining your data model",id:"defining-your-data-model",children:[]}],u={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback uses ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/graphql-migrations"}),"graphql-migrations")," to automatically create and update tables from a GraphQL schema."),Object(o.b)("h2",{id:"compatibility"},"Compatibility"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"PostgreSQL (create and update database)"),Object(o.b)("li",{parentName:"ul"},"SQLite (create database only)")),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("h3",{id:"api"},"API"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"migrateDB")," method creates and updates your tables and columns to match your GraphQL schema."),Object(o.b)("p",null,"All the database operations are wrapped in a single transaction, so your database will be fully rolled back to its initial state if an error occurs."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { migrateDB } from 'graphql-migrations';\n\nconst dbConfig = {\n  // Knex.js based configuration\n};\n\nmigrateDB(dbConfig, schemaText, {\n  // Additional options\n}).then((ops) => {\n    console.log(ops);\n});\n...\n")),Object(o.b)("h3",{id:"migration-options"},"Migration Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"config"),": database configuration options."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"schemaText"),": GraphQL schema text."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"options"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"updateComments"),": overwrite comments on table and columns."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"scalarMap"),": Custom scalar mapping. Default: ",Object(o.b)("inlineCode",{parentName:"li"},"null"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mapListToJson"),": Map scalar lists to JSON column type by default."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"debug"),": display debugging information and SQL queries."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"removeDirectivesFromSchema"),": Strips all directives from schema before processing."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"operationFilter"),": Filter out database operations that we don't want, e.g. prevent table deletion."),Object(o.b)("li",{parentName:"ul"},"All other options are not currently supported by Graphback.")))),Object(o.b)("h2",{id:"defining-your-data-model"},"Defining your data model"),Object(o.b)("h4",{id:"primary-key"},"Primary key"),Object(o.b)("p",null,"Each type must have a primary key. The primary key field must be ",Object(o.b)("inlineCode",{parentName:"p"},"id")," and the type must be ",Object(o.b)("inlineCode",{parentName:"p"},"ID"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-gql"}),"type Note {\n  id: ID!\n  title: String!\n}\n")),Object(o.b)("h4",{id:"foreign-keys"},"Foreign keys"),Object(o.b)("h5",{id:"onetoone"},"OneToOne"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Profile {\n  id: ID!\n  """\n  @oneToOne\n  """\n  user: User!\n}\n\n"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String\n}\n')),Object(o.b)("p",null,"This creates a relationship via a ",Object(o.b)("inlineCode",{parentName:"p"},"userId")," column in the ",Object(o.b)("inlineCode",{parentName:"p"},"profile")," table. You can customize the key tracking the relationship with the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," annotation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Profile {\n  id: ID!\n  """\n  @oneToOne key: \'user_id\'\n  """\n  user: User!\n}\n\n"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String\n}\n')),Object(o.b)("p",null,"This maps ",Object(o.b)("inlineCode",{parentName:"p"},"Profile.user")," to ",Object(o.b)("inlineCode",{parentName:"p"},"profile.user_id")," in the database."),Object(o.b)("h5",{id:"onetomany"},"OneToMany"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n  """\n  @oneToMany field: \'note\'\n  """\n  comments: [Comment]\n}\n')),Object(o.b)("p",null,"This creates a relationship between ",Object(o.b)("inlineCode",{parentName:"p"},"Note.comments")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Comment.note")," and maps to ",Object(o.b)("inlineCode",{parentName:"p"},"comment.noteId")," in the database. If ",Object(o.b)("inlineCode",{parentName:"p"},"Comment.note")," does not exist it will be generated for you."),Object(o.b)("p",null,"With the ",Object(o.b)("inlineCode",{parentName:"p"},"key")," annotation you can customise the database column to map to."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype Note {\n  id: ID!\n  title: String!\n  """\n  @oneToMany field: \'note\', key: \'note_id\'\n  """\n  comments: [Comment]\n}\n')),Object(o.b)("p",null,"This maps to ",Object(o.b)("inlineCode",{parentName:"p"},"comment.note_id")," in the database."),Object(o.b)("h5",{id:"manytomany"},"ManyToMany"),Object(o.b)("p",null,"To create a many-to-many relationship, add a model for your join table and use two one-to-many relationship mappings to create the relationship."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'""" \n@model \n"""\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  """\n  @oneToMany field: \'note\'\n  """\n  authors: [NoteAuthor]\n}\n\n"""\n@model\n"""\ntype NoteAuthor {\n  id: ID!\n}\n\n"""\n@model\n"""\ntype User {\n  id: ID!\n  name: String\n  """\n  @oneToMany field: \'author\'\n  """\n  notes: [NoteAuthor]\n}\n')),Object(o.b)("h4",{id:"default-field-value"},"Default field value"),Object(o.b)("p",null,"You can specify a default value using the ",Object(o.b)("inlineCode",{parentName:"p"},"@default")," field annotation as shown below."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  id: ID!\n  title: String!\n  """\n  @default(value: false)\n  """\n  complete: Boolean\n}\n')),Object(o.b)("h4",{id:"custom-column-type"},"Custom column type"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  id: ID!\n  """\n  @db.type: \'string\'\n  @db.length: 100\n  """\n  title: String!\n}\n')),Object(o.b)("h4",{id:"changing-column-names-in-graphback"},"Changing column names in Graphback"),Object(o.b)("p",null,"When working with database migration library it is possible to change individual database columns.\nUsing custom column will require manual mapping in resolver or database layer. "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-graphql"}),'type Note {\n  id: ID!\n  """\n  @db.name: \'note_title\'\n  """\n  title: String!\n}\n')),Object(o.b)("p",null,"When using custom name in database we need to map it directly inside resolver or db layer."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"      // In your data provider\n      data.title = data['note_title']\n      return data;\n    }\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"NOTE: To be able to fully use Graphback, it is recommended that your data models objects to have ",Object(o.b)("inlineCode",{parentName:"p"},"id: ID!")," field\nor a primary key field specified with the ",Object(o.b)("inlineCode",{parentName:"p"},"@id")," annotation.")))}p.isMDXComponent=!0},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||b[d]||o;return n?a.a.createElement(m,l({ref:t},u,{components:n})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},222:function(e,t,n){"use strict";e.exports=n(223)},223:function(e,t,n){"use strict";var r=n(224),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,l=a?Symbol.for("react.fragment"):60107,c=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,p=a?Symbol.for("react.provider"):60109,s=a?Symbol.for("react.context"):60110,b=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,m=a?Symbol.for("react.memo"):60115,f=a?Symbol.for("react.lazy"):60116,y="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var O={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function j(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||O}function v(){}function N(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||O}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(h(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var w=N.prototype=new v;w.constructor=N,r(w,j.prototype),w.isPureReactComponent=!0;var C={current:null},k=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r,a={},i=null,l=null;if(null!=t)for(r in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&!S.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var u=Array(c),p=0;p<c;p++)u[p]=arguments[p+2];a.children=u}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:o,type:e,key:i,ref:l,props:a,_owner:C.current}}function _(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var x=/\/+/g,D=[];function T(e,t,n,r){if(D.length){var a=D.pop();return a.result=e,a.keyPrefix=t,a.func=n,a.context=r,a.count=0,a}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function E(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function I(e,t,n){return null==e?0:function e(t,n,r,a){var l=typeof t;"undefined"!==l&&"boolean"!==l||(t=null);var c=!1;if(null===t)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case o:case i:c=!0}}if(c)return r(a,t,""===n?"."+q(t,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(t))for(var u=0;u<t.length;u++){var p=n+q(l=t[u],u);c+=e(l,p,r,a)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=y&&t[y]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),u=0;!(l=t.next()).done;)c+=e(l=l.value,p=n+q(l,u++),r,a);else if("object"===l)throw r=""+t,Error(h(31,"[object Object]"===r?"object with keys {"+Object.keys(t).join(", ")+"}":r,""));return c}(e,"",t,n)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function $(e,t,n){var r=e.result,a=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?R(e,r,n,(function(e){return e})):null!=e&&(_(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(x,"$&/")+"/")+n)),r.push(e))}function R(e,t,n,r,a){var o="";null!=n&&(o=(""+n).replace(x,"$&/")+"/"),I(e,$,t=T(t,o,r,a)),E(t)}var A={current:null};function U(){var e=A.current;if(null===e)throw Error(h(321));return e}var L={ReactCurrentDispatcher:A,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return R(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;I(e,M,t=T(null,null,t,n)),E(t)},count:function(e){return I(e,(function(){return null}),null)},toArray:function(e){var t=[];return R(e,t,null,(function(e){return e})),t},only:function(e){if(!_(e))throw Error(h(143));return e}},t.Component=j,t.Fragment=l,t.Profiler=u,t.PureComponent=N,t.StrictMode=c,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error(h(267,e));var a=r({},e.props),i=e.key,l=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,c=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(p in t)k.call(t,p)&&!S.hasOwnProperty(p)&&(a[p]=void 0===t[p]&&void 0!==u?u[p]:t[p])}var p=arguments.length-2;if(1===p)a.children=n;else if(1<p){u=Array(p);for(var s=0;s<p;s++)u[s]=arguments[s+2];a.children=u}return{$$typeof:o,type:e.type,key:i,ref:l,props:a,_owner:c}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},t.createElement=P,t.createFactory=function(e){var t=P.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:b,render:e}},t.isValidElement=_,t.lazy=function(e){return{$$typeof:f,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},224:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,t){for(var n,l,c=i(e),u=1;u<arguments.length;u++){for(var p in n=Object(arguments[u]))a.call(n,p)&&(c[p]=n[p]);if(r){l=r(n);for(var s=0;s<l.length;s++)o.call(n,l[s])&&(c[l[s]]=n[l[s]])}}return c}}}]);