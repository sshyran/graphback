(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{101:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return s}));var r=t(1),o=t(6),i=(t(0),t(220)),a={title:"OpenAPI migrations",id:"openapi"},p={id:"version-0.9.x/openapi",title:"OpenAPI migrations",description:"## OpenAPI spec migration",source:"@site/versioned_docs/version-0.9.x/openapi.md",permalink:"/docs/0.9.x/openapi",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.9.x/openapi.md",version:"0.9.x",sidebar:"version-0.9.x/docs",previous:{title:"Migrating to GraphQL",permalink:"/docs/0.9.x/migrations"},next:{title:"CLI commands",permalink:"/docs/0.9.x/commands"}},c=[{value:"OpenAPI spec migration",id:"openapi-spec-migration",children:[]},{value:"Migration workflow",id:"migration-workflow",children:[]}],l={rightToc:c};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"openapi-spec-migration"},"OpenAPI spec migration"),Object(i.b)("p",null,"OpenAPI (Swagger) is a specification for describing RESTful APIs.\nA specification can be generated based on an existing API with many open source solutions. "),Object(i.b)("p",null,"Developers can also utilize various OpenAPI generators thanks to ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://openapi-generator.tech"}),"OpenAPI Generator")," project.\nGenerating a GraphQL schema from OpenAPI will almost always come with some information loss.\nDue to the strongly typed nature of GraphQL additional elements like Interfaces, Enums and Scalars\ndo not have direct mapping in OpenAPI definitions. "),Object(i.b)("p",null,"When working with Graphback developers can generate or manually build their existing\nOpenAPI definition and then transform it into a GraphQL schema."),Object(i.b)("h2",{id:"migration-workflow"},"Migration workflow"),Object(i.b)("p",null,"To migrate simply put your OpenAPI definition into the model folder (both YAML and JSON are supported)\nand execute:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"graphback openapi")," "),Object(i.b)("p",null,"By default the command will strip out all methods and leave only the OpenAPI types.\nDevelopers can manually apply Graphback directives and tweak the schema for their own needs."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"NOTE: Migration is going to apply ",Object(i.b)("inlineCode",{parentName:"p"},"ID!")," type only when OpenAPI definition is\nusing UUID type. In other scenarios ",Object(i.b)("inlineCode",{parentName:"p"},"ID!")," type needs to be applied manually to\nobject.")))}s.isMDXComponent=!0},220:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p({},n,{},e)),t},u=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,b=u["".concat(a,".").concat(m)]||u[m]||d[m]||i;return t?o.a.createElement(b,p({ref:n},l,{components:t})):o.a.createElement(b,p({ref:n},l))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);