(this.webpackJsonpvscodesidebar=this.webpackJsonpvscodesidebar||[]).push([[0],{18:function(e,i,n){},19:function(e,i,n){"use strict";n.r(i);var t=n(1),r=n(7),c=n(8),o=n(3),l=n(4),d=n(0),s=function(e){var i=e.item,n=e.wrapperFunction,r=Object(t.useState)(!0),c=Object(o.a)(r,2),s=c[0],u=c[1],j=Object(t.useState)({visible:!1,isFolder:!1}),b=Object(o.a)(j,2),v=b[0],f=b[1],m=function(e){f({visible:!0,isFolder:e})};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:i.isFolder?"folder":"file",onClick:function(e){u((function(e){return!e}))},children:i.name}),i.isFolder&&Object(d.jsxs)("div",{style:{display:"inline"},children:[Object(d.jsx)("button",{onClick:function(){return m(!0)},children:"+Folder"}),Object(d.jsx)("button",{onClick:function(){return m(!1)},children:"+File"})]}),i.isFolder&&v.visible&&Object(d.jsx)("input",{type:"text",style:{"margin-left":"1rem"},autoFocus:!0,onKeyDown:function(e){if(13===e.keyCode&&e.target.value){var t={name:e.target.value,isFolder:v.isFolder,id:(new Date).getTime()};console.log(i.id,"###"),n(t,i.id),f(Object(l.a)(Object(l.a)({},v),{},{visible:!1}))}},onBlur:function(){return f(Object(l.a)(Object(l.a)({},v),{},{visible:!1}))}}),i.children&&s&&Object(d.jsx)("div",{style:{"margin-left":"1rem"},children:Object(d.jsx)(a,{folders:i.children,wrapperFunction:n})})]})},a=function(e){var i=e.folders,n=e.wrapperFunction;return console.log(n,"finall"),Object(d.jsx)("div",{children:i.map((function(e,i){return Object(d.jsx)("div",{children:Object(d.jsx)(s,{item:e,wrapperFunction:n})},i)}))})},u=[{id:1,name:"root",isFolder:!0,children:[{id:2,name:"public",isFolder:!0,children:[{id:3,name:"index.html",isFolder:!1}]},{id:4,name:"src",isFolder:!0,children:[{id:5,name:"mockData",isFolder:!0,children:[{id:6,name:"data.js",isFolder:!1}]},{id:7,name:"App.js",isFolder:!1},{id:8,name:"index.js",isFolder:!1},{id:9,name:"styles.css",isFolder:!1}]},{id:10,name:"package.json",isFolder:!1}]}];n(18);function j(){var e=Object(t.useState)(u),i=Object(o.a)(e,2),n=i[0],r=i[1];return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(a,{folders:n,wrapperFunction:function(e,i){var t=Object(c.a)(n);!function e(i,n,t){console.log(i,t);for(var r=0;r<(null===t||void 0===t?void 0:t.length);r++){if(t[r].id==n)return console.log("$$$"),void(t[r].children?t[r].children.unshift(i):t[r].children=[i]);var c;e(i,n,null===(c=t[r])||void 0===c?void 0:c.children)}}(e,i,t),console.log(t,"final"),r(t)}})})}var b=document.getElementById("root");Object(r.createRoot)(b).render(Object(d.jsx)(t.StrictMode,{children:Object(d.jsx)(j,{})}))}},[[19,1,2]]]);
//# sourceMappingURL=main.eed5b8cc.chunk.js.map