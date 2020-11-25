(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(2),r=n.n(s),o=n(18),i=n.n(o);n(26),n(9);var a=function(){return Object(c.jsx)("nav",{children:Object(c.jsx)("h1",{children:"Random Employee Directory"})})},l=n(6),j=n.n(l),b=n(7),u=n(19),d=n(8),h=n(20),m=n.n(h);var O=function(e){return Object(c.jsxs)("table",{style:{width:"100%"},children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{}),Object(c.jsx)("th",{children:"Name"}),Object(c.jsxs)("th",{children:["Phone Number ",Object(c.jsx)("button",{className:"filter",onClick:e.sortNumber,children:Object(c.jsx)("i",{class:"fas fa-sort"})})]}),Object(c.jsxs)("th",{children:["Email ",Object(c.jsx)("button",{className:"filter",onClick:e.sortEmail,children:Object(c.jsx)("i",{class:"fas fa-sort"})})]}),Object(c.jsx)("th",{children:"Location"})]})}),Object(c.jsx)("tbody",{children:e.list.map((function(e){return Object(c.jsxs)("tr",{style:{borderTop:"2px solid white"},children:[Object(c.jsx)("td",{children:Object(c.jsx)("img",{src:e.picture.thumbnail,alt:"profile"})}),Object(c.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(c.jsx)("td",{children:e.phone}),Object(c.jsx)("td",{children:e.email}),Object(c.jsxs)("td",{children:[e.location.state,", ",e.location.country]})]})}))})]})};var f=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),n=t[0],r=t[1],o=Object(s.useState)(""),i=Object(d.a)(o,2),a=i[0],l=i[1];function h(){return f.apply(this,arguments)}function f(){return(f=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://randomuser.me/api/?results=100");case 2:t=e.sent,r(t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(s.useEffect)((function(){h()}),[]),Object(c.jsxs)("div",{className:"container",style:{marginTop:"20px",marginBottom:"20px"},children:[Object(c.jsxs)("div",{className:"input-group mb-3 float-center",children:[Object(c.jsx)("input",{value:a,onChange:function(e){l(e.target.value),console.log(e.target.value)},type:"text",className:"form-control",placeholder:"Search by Name","aria-label":"Recipient's username","aria-describedby":"button-addon2"}),Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(){l(""),h()},children:Object(c.jsx)("i",{class:"fas fa-window-close"})}),Object(c.jsx)("button",{onClick:function(e){e.preventDefault(),function(){console.log("Searching for:",a);var e=n.filter((function(e){return a.indexOf(e.name.first)>-1||a.indexOf(e.name.last)>-1}));console.log(e),r(e)}()},className:"btn btn-primary",type:"submit",id:"button-addon2",children:"Search"})]}),Object(c.jsx)("div",{style:{display:"flex",justifyContent:"center",margin:"auto",color:"lime"},children:Object(c.jsx)("p",{children:Object(c.jsx)("small",{children:"Hover over the Phone Number or Email to Sort Employees"})})}),Object(c.jsx)(O,{list:n,sortEmail:function(){console.log("SORTING!!!!");var e=n.sort((function(e,t){return e.email<t.email?-1:e.email>t.email?1:0}));console.log("Sorted List: ",e),r(Object(b.a)(e))},sortNumber:function(){console.log("SORTING!!!!");var e=n.sort((function(e,t){return e.phone<t.phone?-1:e.phone>t.phone?1:0}));console.log("Sorted List: ",e),r(Object(b.a)(e))}})]})};var x=function(){return Object(c.jsxs)("div",{className:"body",children:[Object(c.jsx)(a,{}),Object(c.jsx)(f,{})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),p()},9:function(e,t,n){}},[[45,1,2]]]);
//# sourceMappingURL=main.fde42f8b.chunk.js.map