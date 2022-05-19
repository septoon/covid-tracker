(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},132:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(42),r=a.n(i),o=(a(100),a(101),a(75)),s=a(76),d=a(89),l=a(88),j=a(29),h=a(12),u=a(4),b=a(7),p=a(166),O=a(179),v=a(178),f=a(181),x=a(182),m=a(175),g=a(85),C=a.n(g),y=a(60),k=a.n(y),w=a(80),D=a(32),E=a(81),I=a.n(E),_="covid/SET_COVID_DATA",A="covid/SET_FILTER_COVID_DATA",N="covid/SET_IS_CHECKED",T={covid:[],filterCovid:[],isChecked:!1},L=function(e){return{type:A,payload:e}},S=function(e){return{type:N,payload:e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(D.a)(Object(D.a)({},e),{},{covid:t.payload});case A:return Object(D.a)(Object(D.a)({},e),{},{filterCovid:t.payload});case N:return Object(D.a)(Object(D.a)({},e),{},{isChecked:t.payload});default:return e}},F=a(174),V=(a(55),a(74),a(1)),B=Object(b.a)("div")((function(e){var t=e.theme;return Object(u.a)({position:"relative",borderRadius:t.shape.borderRadius,backgroundColor:Object(p.a)(t.palette.common.white,.15),"&:hover":{backgroundColor:Object(p.a)(t.palette.common.white,.25)},marginLeft:0,width:"100%"},t.breakpoints.up("sm"),{marginLeft:t.spacing(1),width:"auto"})})),G=Object(b.a)("div")((function(e){return{padding:e.theme.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"}})),J=Object(b.a)(m.a)((function(e){var t=e.theme;return{color:"inherit","& .MuiInputBase-input":Object(u.a)({padding:t.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(t.spacing(4),")"),transition:t.transitions.create("width"),width:"100%"},t.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),M=function(e){var t=c.useState(""),a=Object(h.a)(t,2),n=a[0],i=a[1],r=Object(j.c)(),o=e.data.filter((function(e){return""===n?e:e.country.toLowerCase().includes(n)}));return Object(V.jsx)(v.a,{sx:{flexGrow:1},className:"header",children:Object(V.jsx)(O.a,{position:"static",children:Object(V.jsxs)(f.a,{children:[Object(V.jsx)(F.a,{onClick:function(){return e.isChecked?r(S(!1)):r(S(!0))}}),Object(V.jsx)(x.a,{className:"bar_option",variant:"h6",noWrap:!0,component:"div",sx:{flexGrow:1,display:{xs:"none",sm:"block"}},children:"COVID-19 tracker"}),Object(V.jsxs)(B,{children:[Object(V.jsx)(G,{children:Object(V.jsx)(C.a,{})}),Object(V.jsx)(J,{placeholder:"Search\u2026",onChange:function(e){var t=e.target.value.toLowerCase();i(t),r(L(o))},inputProps:{"aria-label":"search"}})]})]})})})},P=a(184),W=a(188),z=a(187),H=a(183),K=a(185),q=a(186),Q=a(180);function U(e,t,a){return{name:e,calories:t,fat:a}}var X=function(e){return Object(V.jsx)("div",{className:"tables_wrapper",children:0===e.filterCovid.length?Object(V.jsx)(x.a,{children:"Enter Country Name"}):e.filterCovid.map((function(e,t){var a=[U("Deaths",e.deaths,e.todayDeaths),U("Cases",e.cases,e.todayCases),U("Recovered",e.recovered,e.todayRecovered),U("Critical",e.critical),U("Active","",e.active)];return Object(V.jsx)(H.a,{component:Q.a,className:"table",children:Object(V.jsxs)(P.a,{sx:{minWidth:390},size:"small","aria-label":"a dense table",children:[Object(V.jsx)(K.a,{children:Object(V.jsxs)(q.a,{children:[Object(V.jsxs)(z.a,{children:[e.country," ",Object(V.jsx)("img",{src:e.countryInfo.flag,alt:"flag",className:"flag"})]}),Object(V.jsx)(z.a,{align:"right",children:"All time"}),Object(V.jsx)(z.a,{align:"right",children:"Today"})]})}),Object(V.jsx)(K.a,{children:Object(V.jsx)(q.a,{children:Object(V.jsxs)(z.a,{children:["Population - ",e.population]})})}),Object(V.jsx)(W.a,{children:a.map((function(e){return Object(V.jsxs)(q.a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(V.jsx)(z.a,{component:"th",scope:"row",children:e.name}),Object(V.jsx)(z.a,{align:"right",children:e.calories}),Object(V.jsx)(z.a,{align:"right",children:e.fat}),Object(V.jsx)(z.a,{align:"right",children:e.carbs})]},e.name)}))})]})},t)}))})},Y=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getCovidData()}},{key:"render",value:function(){return Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(M,{data:this.props.covid,isChecked:this.props.isChecked}),Object(V.jsx)(X,{data:this.props.covid,filterCovid:this.props.filterCovid})]})}}]),a}(n.a.Component),Z=Object(j.b)((function(e){return{covid:e.covidData.covid,filterCovid:e.covidData.filterCovid,isChecked:e.covidData.isChecked}}),{getCovidData:function(){return function(){var e=Object(w.a)(k.a.mark((function e(t){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://disease.sh/v3/covid-19/countries").then((function(e){return e.data}));case 2:a=e.sent,t({type:_,payload:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},setFilterCovidData:L})(Y),$=a(87),ee=a(177),te=function(){var e=Object(j.d)((function(e){return{isChecked:e.covidData.isChecked}})).isChecked;console.log(e);var t=Object($.a)({palette:{mode:e?"dark":"light"}});return Object(V.jsx)(ee.a,{theme:t,children:Object(V.jsx)("div",{className:"App",children:Object(V.jsx)(Z,{})})})},ae=a(37),ce=a(86),ne=Object(ae.c)({covidData:R}),ie=Object(ae.d)(ne,Object(ae.a)(ce.a));r.a.render(Object(V.jsx)(j.a,{store:ie,children:Object(V.jsx)(te,{})}),document.getElementById("root"))},55:function(e,t,a){},74:function(e,t,a){}},[[132,1,2]]]);
//# sourceMappingURL=main.c9f08ce6.chunk.js.map