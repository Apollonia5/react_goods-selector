(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),o=c(4),a=c(5),l=c(8),r=c(7),d=c(1),i=c(6),u=c.n(i),b=(c(13),c(14),c(0)),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(o.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.selectProduct=function(t){e.setState({selectedGood:t})},e.deselectProduct=function(){e.setState({selectedGood:""})},e}return Object(a.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(b.jsxs)("main",{className:"section container",children:[t?Object(b.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){e.deselectProduct()}})]}):Object(b.jsx)("h1",{className:"title",children:"No goods selected"}),Object(b.jsx)("table",{className:"table",children:Object(b.jsx)("tbody",{children:j.map((function(c){return Object(b.jsxs)("tr",{"data-cy":"Good",className:u()({"has-background-success-light":t===c}),children:[t===c?Object(b.jsx)("td",{children:Object(b.jsx)("button",{"data-cy":"RemoveButton",type:"button",className:"button is-info",onClick:function(){e.deselectProduct()},children:"-"})}):Object(b.jsx)("td",{children:Object(b.jsx)("button",{"data-cy":"AddButton",type:"button",className:"button",onClick:function(){e.selectProduct(c)},children:"+"})}),Object(b.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(d.Component);n.a.render(Object(b.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.4eb4790a.chunk.js.map