(window.webpackJsonp=window.webpackJsonp||[]).push([[310],{1082:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),u=p(n),s=a,m=u["".concat(i,".").concat(s)]||u[s]||d[s]||l;return n?r.a.createElement(m,b(b({ref:t},o),{},{components:n})):r.a.createElement(m,b({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var o=2;o<l;o++)i[o]=n[o];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},365:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),l=(n(0),n(1082)),i={id:"queries",title:"Queries",sidebar_label:"Queries"},b={unversionedId:"crud/queries",id:"version-0.16.x/crud/queries",isDocsHomePage:!1,title:"Queries",description:"Graphback provides two query types for every model in the schema.",source:"@site/versioned_docs/version-0.16.x/crud/queries.md",slug:"/crud/queries",permalink:"/docs/crud/queries",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/crud/queries.md",version:"0.16.x",sidebar_label:"Queries",sidebar:"version-0.16.x/docs",previous:{title:"CRUD Overview",permalink:"/docs/crud/overview"},next:{title:"Mutations",permalink:"/docs/crud/mutations"}},c=[{value:"Find",id:"find",children:[{value:"Filtering",id:"filtering",children:[]},{value:"Pagination",id:"pagination",children:[]},{value:"Ordering",id:"ordering",children:[]}]},{value:"Get",id:"get",children:[]}],o={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Graphback provides two query types for every model in the schema."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#find"}),Object(l.b)("inlineCode",{parentName:"a"},"find<Type>s")),": fetch all or a subset of items through optional filtering, pagination and sorting."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"#get"}),Object(l.b)("inlineCode",{parentName:"a"},"get<Type>")),": fetch a single item by its unique ID.")),Object(l.b)("h2",{id:"find"},"Find"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"find")," operation allows the client to fetch multiple items from the database, with optional filtering, pagination and ordering of the data allowing you to specify exactly the data you need. "),Object(l.b)("p",null,"The query follows the naming format ",Object(l.b)("inlineCode",{parentName:"p"},"find<Type>s"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  findNotes(filter: NoteFilter, page: PageRequest, orderBy: OrderByInput): NoteResultList!\n}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Arguments:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"filter"),": filter object to query specific data."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"page"),": enables pagination of the data."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"orderBy"),": sorts the data in ascending or descending order.")),Object(l.b)("p",null,"The items fetched by ",Object(l.b)("inlineCode",{parentName:"p"},"findNote")," are returned in a container type ",Object(l.b)("inlineCode",{parentName:"p"},"NoteResultList")," created by Graphback:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type NoteResultList {\n  # The notes are returned in the items field\n  items: [Note]!\n  # Offset specified in query\n  offset: Int\n  # Offset specified in query\n  limit: Int\n  # total count of notes in the database\n  count: Int\n}\n")),Object(l.b)("p",null,"Example of a simple query to retrieve all notes:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"query {\n  findNotes {\n    items {\n      id\n      title\n      likes\n    }\n  }\n}\n")),Object(l.b)("h3",{id:"filtering"},"Filtering"),Object(l.b)("p",null,"Graphback generates all the appropriate schema elements from ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphqlcrud.org"}),"GraphQLCRUD")," and provides a mapping implementation for both PostgreSQL and MongoDB.\nThis lets you perform simple or complex querying of your data directly from GraphQL queries."),Object(l.b)("p",null,"Take an example ",Object(l.b)("inlineCode",{parentName:"p"},"Note")," model, which uses each of the built-in scalar types: ",Object(l.b)("inlineCode",{parentName:"p"},"ID"),", ",Object(l.b)("inlineCode",{parentName:"p"},"String"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Boolean"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Int"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Float"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'""" @model """\ntype Note {\n  id: ID!\n  title: String!\n  opened: Boolean\n  likes: Int\n  completedPercentage: Float\n}\n')),Object(l.b)("p",null,"Graphback generates a filter input type for each model in the schema."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"input NoteFilter {\n  id: IDInput\n  title: StringInput\n  opened: BooleanInput\n  likes: IntInput\n  completedPercentage: FloatInput\n  and: [NoteFilter!]\n  or: [NoteFilter!]\n  not: NoteFilter\n}\n")),Object(l.b)("p",null,"So you can perform filtering of the data like this:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'query {\n  findNotes(filter: {\n    title: {\n      contains: "emails"\n    },\n    opened: {\n      eq: false\n    },\n    likes: {\n      gt: 10\n    },\n    completedPercentage: {\n      between: [20, 40]\n    },\n    and: {\n      title: {\n        startsWith: "read"\n      }\n    },\n    or: {\n      likes: {\n        eq: 100 \n      }\n    },\n    not: {\n      title: {\n        contains: "archived"\n      }\n    }\n  }) {\n    items {\n      id\n      title\n      likes\n    }\n  }\n}\n')),Object(l.b)("h4",{id:"operators"},"Operators"),Object(l.b)("p",null,"This is a list of all available filter operators."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Operator"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Meaning"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Scalars"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"eq"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Equal to"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ne"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Not equal to"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"lt"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Less than"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"le"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Less than or equal to"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"gt"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Greater than"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"gt"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Greater than or equal to"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"between"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Between a range (of numbers)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Int, Float")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"in"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"In a list of items"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"All")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"contains"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String contains"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"startsWith"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String starts with"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"endsWith"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String ends with"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"String")))),Object(l.b)("p",null,"Each field in the ",Object(l.b)("inlineCode",{parentName:"p"},"NoteFilter")," input maps to a generated scalar input. This specifies the operators available for that scalar."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"input StringInput {\n  ne: String\n  eq: String\n  le: String\n  lt: String\n  ge: String\n  gt: String\n  in: [String!]\n  contains: String\n  startsWith: String\n  endsWith: String\n}\n\ninput IDInput {\n  ne: ID\n  eq: ID\n  le: ID\n  lt: ID\n  ge: ID\n  gt: ID\n  in: [ID!]\n}\n\ninput IntInput {\n  ne: Int\n  eq: Int\n  le: Int\n  lt: Int\n  ge: Int\n  gt: Int\n  in: [Int!]\n  between: [Int!]\n}\n\ninput FloatInput {\n  ne: Float\n  eq: Float\n  le: Float\n  lt: Float\n  ge: Float\n  gt: Float\n  in: [Float!]\n  between: [Float!]\n}\n\ninput BooleanInput {\n  ne: Boolean\n  eq: Boolean\n}\n")),Object(l.b)("p",null,"Graphback generates a filter input for the ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/model/scalars"}),"Graphback scalars")," too. For convenience, a filter input for ",Object(l.b)("inlineCode",{parentName:"p"},"Date"),", ",Object(l.b)("inlineCode",{parentName:"p"},"DateTime"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Time"),", ",Object(l.b)("inlineCode",{parentName:"p"},"Timestamp")," scalars is also generated; however we do not officially support these scalars and recommend you to use the Graphback scalars."),Object(l.b)("h3",{id:"pagination"},"Pagination"),Object(l.b)("p",null,"You can perform pagination with the ",Object(l.b)("inlineCode",{parentName:"p"},"page")," argument."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type PageRequest {\n  limit: Int\n  offset: Int\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"findNotes(page: {limit: 10, offset:4}) {\n  items {\n    id\n  }\n}\n")),Object(l.b)("h3",{id:"ordering"},"Ordering"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"input OrderByInput {\n  field: String!\n  order: SortDirectionEnum = ASC\n}\n\nenum SortDirectionEnum {\n  DESC\n  ASC\n}\n")),Object(l.b)("p",null,"To sort/order items by a certain field, use the ",Object(l.b)("inlineCode",{parentName:"p"},"orderBy")," argument."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'findNotes(orderBy: {order: DESC, field: "likes"}) {\n  items {\n    id\n  }\n}\n')),Object(l.b)("h2",{id:"get"},"Get"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"get")," operation allows the client to fetch a single item from the database by its unique ID."),Object(l.b)("p",null,"The query follows the naming format ",Object(l.b)("inlineCode",{parentName:"p"},"get<Type>"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),"type Query {\n  getNote(id: ID!): Note\n}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Arguments:")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"id"),": The unique ID of the object. This will always be ",Object(l.b)("inlineCode",{parentName:"li"},"id: ID"),". The resolver will automatically map this to your primary key field.")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'"""\n@model\n"""\ntype User {\n  """@id"""\n  email: String\n  name: String\n}\n')),Object(l.b)("p",null,"Example of a query to retrieve a single user by their primary field (email):"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-graphql"}),'getNote(id: "tommyshelby@gmail.com") {\n  id\n  email\n  name\n}\n')))}p.isMDXComponent=!0}}]);