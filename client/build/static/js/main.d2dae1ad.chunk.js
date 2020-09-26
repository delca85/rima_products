(this.webpackJsonprima_client=this.webpackJsonprima_client||[]).push([[0],{72:function(e,t,a){e.exports=a(86)},86:function(e,t,a){"use strict";a.r(t);var n,r=a(1),c=a.n(r),l=a(65),i=a.n(l),u=a(46),m=a(9),o=function(e){var t=e.className;return c.a.createElement("div",{className:t},c.a.createElement("span",null,"Under construction..."))},s=a(22),d=function(){var e=new s.InMemoryCache;return new s.ApolloClient({uri:"/.netlify/functions/graphql",cache:e})},f=function(e){var t=e.children,a=Object(r.useMemo)((function(){return d()}),[]);return c.a.createElement(s.ApolloProvider,{client:a},t)},p=a(20),v=a(21);function b(){var e=Object(p.a)(["\n    query Parts($id: Int!) {\n  part(id: $id) {\n    id\n    name\n    thumb\n    subparts {\n      id\n      name\n      thumb\n      quantity\n    }\n  }\n}\n    "]);return b=function(){return e},e}!function(e){e.Public="PUBLIC",e.Private="PRIVATE"}(n||(n={}));var E=Object(s.gql)(b());var h=function(e){var t=e.className;return c.a.createElement("div",{className:t},"Loading...")};function x(){var e=Object(p.a)(["\n  text-align: center;\n  text-transform: capitalize;\n"]);return x=function(){return e},e}var N=Object(v.a)((function(e){var t=e.className,a=e.id,n=e.name,r=e.thumb,l=void 0===r?"":r;return c.a.createElement("div",{className:t},c.a.createElement("h2",{className:"macro-product-name"},n),c.a.createElement("img",{src:l,alt:"Product with id: ".concat(a)}))}))(x());function g(){var e=Object(p.a)(["\n  vertical-align: middle;\n  border: 1px solid #f4f6f8;\n  padding: 4px;\n  max-width: 200px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]);return g=function(){return e},e}var w=Object(v.a)((function(e){var t=e.className,a=e.text,n=e.header;return void 0!==n&&n?c.a.createElement("th",{className:t},a):c.a.createElement("td",{className:t},a)}))(g());function j(){var e=Object(p.a)(["\n  vertical-align: middle;\n  border: 1px solid #f4f6f8;\n  padding: 4px;\n  max-width: 45px;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  img {\n    width: 100%;\n  }\n"]);return j=function(){return e},e}var y=Object(v.a)((function(e){var t=e.className,a=e.src,n=e.altText;return a?c.a.createElement("td",{className:t},c.a.createElement("img",{src:a,alt:n})):c.a.createElement("td",{className:t})}))(j()),O=function(e){var t=e.className,a=e.id,n=e.name,r=e.thumb,l=e.quantity,i=void 0===l?1:l;return c.a.createElement("tr",{className:t},c.a.createElement(w,{text:a}),c.a.createElement(w,{text:n}),c.a.createElement(w,{text:i}),c.a.createElement(y,{src:r,altText:"Subpart with id: ".concat(a)}))},q=function(e){var t=e.headings;return c.a.createElement("tr",null,t.map((function(e,t){return c.a.createElement(w,{header:!0,key:"".concat(e,"-").concat(t),text:e})})))};function P(){var e=Object(p.a)(["\n  max-width: 100vw;\n  .scroll-container {\n    overflow-x: auto;\n  }\n  .table {\n    border-spacing: 0px;\n    background: #fff;\n    box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);\n    /* width: 100%; */\n  }\n"]);return P=function(){return e},e}var k=["id","name","quantity","image"],I=Object(v.a)((function(e){var t=e.className,a=e.subparts;return a.length?c.a.createElement("div",{className:t},c.a.createElement("div",{className:"scroll-container"},c.a.createElement("h2",null,"Subparts"),c.a.createElement("table",{className:"table"},c.a.createElement("thead",null,c.a.createElement(q,{headings:k})),c.a.createElement("tbody",null,a.map((function(e){var t=e.id,a=e.name,n=e.quantity,r=e.thumb;return c.a.createElement(O,{key:t,id:t,name:a,quantity:n,thumb:r})})))))):null}))(P());function A(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-around;\n"]);return A=function(){return e},e}var C=Object(v.a)((function(e){var t,a=e.className,n=Object(m.f)().id,r=Number(n),l=(t={variables:{id:r}},s.useQuery(E,t)),i=l.data,u=l.loading,o=l.error;if(u)return c.a.createElement(h,null);if(o||!i||!i.part)return c.a.createElement("div",null,"Error...");var d=i.part,f=d.subparts||[],p=d.thumb||"";return c.a.createElement("div",{className:a},c.a.createElement(N,{className:"macro-product",id:r,name:d.name,thumb:p}),c.a.createElement(I,{className:"subparts-table",subparts:f}))}))(A()),M=function(){return c.a.createElement(f,null,c.a.createElement(u.a,null,c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/macro_product/:id"},c.a.createElement(C,null)),c.a.createElement(m.a,{path:"/"},c.a.createElement(m.a,{path:"/"},c.a.createElement(o,null))))))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null)),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.d2dae1ad.chunk.js.map