(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var s=c(4),n=c.n(s),a=c(5),o=c(6),r=c(8),l=c(7),i=c(1),d=c.n(i),u=(c(13),c(14),c(3)),b=c.n(u),h=c(0),j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],m=function(e){Object(r.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),o=0;o<s;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={selectedGood:"Jam"},e.ClearButton=function(){e.setState({selectedGood:""})},e}return Object(o.a)(c,[{key:"switcher",value:function(e){e===this.state.selectedGood?this.setState({selectedGood:null}):this.setState({selectedGood:e})}},{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(h.jsxs)("main",{className:"section container",children:[Object(h.jsxs)("h1",{className:"title is-flex is-align-items-center",children:[t?"".concat(t," is selected"):"No goods selected",t&&Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete ml-3",onClick:function(){return e.ClearButton()}})]}),Object(h.jsx)("table",{className:"table",children:Object(h.jsx)("tbody",{children:j.map((function(c){return Object(h.jsxs)("tr",{"data-cy":"Good",className:b()({"has-background-success-light":t===c}),children:[Object(h.jsx)("td",{children:Object(h.jsx)("button",{"data-cy":t!==c?"AddButton":"RemoveButton",type:"button",className:b()({button:t!==c,"button is-info":t===c}),onClick:function(){return e.switcher(c)},children:t!==c?"+":"-"})}),Object(h.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(d.a.Component);n.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.20576cf5.chunk.js.map