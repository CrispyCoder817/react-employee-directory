(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);n(20);var s=n(1),a=n.n(s),r=n(12),c=n.n(r),i=(n(25),n(26),n(13)),o=n(14),l=n(19),d=n(17),j=(n(27),n(0));var h=function(e){return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{alt:e.last,src:e.image})}),Object(j.jsxs)("div",{children:[e.title," ",e.first," ",e.last," "]}),Object(j.jsx)("div",{children:e.gender}),Object(j.jsx)("div",{children:e.age}),Object(j.jsx)("div",{children:e.phone}),Object(j.jsx)("div",{children:e.email})]})},u=n(15),m=n.n(u),b=function(){return m.a.get("https://randomuser.me/api/?results=20")},p=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={alphabetical:!0,ascending:!0,sortedEmployees:[],employees:[]},e.sortName=function(){var t=[];t=e.state.alphabetical?e.props.empList.sort((function(e,t){var n=e.name.last.toLowerCase(),s=t.name.last.toLowerCase();return n<s?-1:n>s?1:0})):e.props.empList.sort((function(e,t){var n=e.name.last.toLowerCase(),s=t.name.last.toLowerCase();return n>s?-1:n<s?1:0})),e.setState({alphabetical:!e.state.alphabetical,sortedEmployees:t})},e.sortAge=function(){var t=[];t=e.state.ascending?e.state.employees.sort((function(e,t){var n=e.dob.age,s=t.dob.age;return n<s?-1:n>s?1:0})):e.state.employees.sort((function(e,t){var n=e.dob.age,s=t.dob.age;return n>s?-1:n<s?1:0})),e.setState({ascending:!e.state.ascending,sortedEmployees:t})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.state.employees.length<1&&b().then((function(t){console.log(t),e.setState({employees:t.data.results})}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"header",children:[Object(j.jsx)("div",{children:"Photo"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{onClick:this.sortName,className:"name",children:"Name"})," "]}),Object(j.jsx)("div",{children:"Gender"}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{onClick:this.sortAge,className:"age",children:"Age"})}),Object(j.jsx)("div",{children:"Phone"}),Object(j.jsx)("div",{children:"E-mail"})]}),this.state.employees.length>0?this.state.employees.map((function(e,t){return Object(j.jsx)(h,{image:e.picture.large,first:e.name.first,last:e.name.last,title:e.name.title,gender:e.gender,age:e.dob.age,phone:e.cell,email:e.email},t)})):""]})}}]),n}(a.a.Component);n(47);var v=function(){return Object(j.jsx)("div",{children:Object(j.jsx)(p,{})})},g=n(18);var O=function(){return Object(j.jsx)("div",{children:Object(j.jsxs)(g.a,{className:"jumbotron",children:[Object(j.jsx)("h1",{className:"title",children:"workForceReady"}),Object(j.jsx)("p",{className:"lead",children:"Search for an employee by name, position, or country."})]})})};var f=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(O,{}),Object(j.jsx)(v,{})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),x()}},[[48,1,2]]]);
//# sourceMappingURL=main.a62b0064.chunk.js.map