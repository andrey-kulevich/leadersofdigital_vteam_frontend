(this.webpackJsonpleadersofdigital_hyper_frontend=this.webpackJsonpleadersofdigital_hyper_frontend||[]).push([[0],{132:function(e,t,n){},245:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),s=(n(132),n(14)),l=n(119),o=n(247),j=n(277),d=n(298);function u(e){return e.slice(5,-3).replace("T"," ")}var b=n(2),h=Object(j.a)((function(e){return Object(d.a)({chartPaper:{marginTop:e.spacing(3),padding:e.spacing(2),minHeight:300}})})),O=function(e){var t=e.data,n=h(),a={labels:t.confirmTime.map((function(e){return u(e)})),datasets:[{label:"\u0421\u0438\u0441\u0442\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435",fill:!1,lineTension:.1,backgroundColor:"rgb(255,134,0)",borderColor:"rgb(255,134,0)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderWidth:1,pointHoverRadius:5,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t.systolic},{label:"\u0414\u0438\u0430\u0441\u0442\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435",fill:!1,lineTension:.1,backgroundColor:"rgb(0,159,255)",borderColor:"rgb(0,159,255)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderWidth:1,pointHoverRadius:5,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t.diastolic},{label:"\u041f\u0443\u043b\u044c\u0441",fill:!1,lineTension:.1,backgroundColor:"rgb(248,104,104)",borderColor:"rgb(248,104,104)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderWidth:1,pointHoverRadius:5,pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t.pulse}]};return Object(b.jsx)(o.a,{variant:"outlined",className:n.chartPaper,children:Object(b.jsx)(l.a,{data:a,options:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{suggestedMin:0}}]}},type:null})})},p=n(293),x=n(281),m=n(282),f=n(283),g=n(284),y=n(285),v=n(286),w=Object(j.a)((function(e){return Object(d.a)({paper:{marginTop:e.spacing(1),marginBottom:e.spacing(2),maxHeight:220},container:{maxHeight:220}})})),T=function(e){var t=e.data,n=w();return Object(b.jsx)(o.a,{variant:"outlined",className:n.paper,children:Object(b.jsx)(x.a,{className:n.container,children:Object(b.jsxs)(m.a,{stickyHeader:!0,size:"small","aria-label":"a dense table",children:[Object(b.jsx)(f.a,{children:Object(b.jsxs)(g.a,{children:[Object(b.jsx)(y.a,{children:"\u0412\u0440\u0435\u043c\u044f"}),Object(b.jsx)(y.a,{children:"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439"}),Object(b.jsx)(y.a,{children:"\u0421\u0438\u0441\u0442\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),Object(b.jsx)(y.a,{children:"\u0414\u0438\u0430\u0441\u0442\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),Object(b.jsx)(y.a,{children:"\u041f\u0443\u043b\u044c\u0441"})]})}),Object(b.jsx)(v.a,{children:t.map((function(e,t){return Object(b.jsxs)(g.a,{children:[Object(b.jsx)(y.a,{children:u(e.confirmTime)}),Object(b.jsx)(y.a,{children:e.description}),Object(b.jsx)(y.a,{children:e.systolic}),Object(b.jsx)(y.a,{children:e.diastolic}),Object(b.jsx)(y.a,{children:e.pulse})]},t)}))})]})})})},D=n(287),k=n(68),S=n(288),N=n(248),H=n(289),R=n(290),B=n(65),C=n.n(B),M=n(66),F=n.n(M),E=n(67),U=n.n(E),L=Object(j.a)((function(e){return Object(d.a)({root:{marginTop:e.spacing(1),padding:e.spacing(2),minHeight:50}})})),_=function(e){var t=e.min,n=e.max,a=e.average,r=L();return Object(b.jsx)(o.a,{variant:"outlined",className:r.root,children:Object(b.jsxs)(D.a,{container:!0,direction:"row",spacing:2,children:[Object(b.jsx)(D.a,{item:!0,xs:4,children:Object(b.jsxs)(o.a,{variant:"outlined",children:[Object(b.jsx)(k.a,{variant:"h6",align:"center",children:"\u0421\u0438\u0441\u0442\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),Object(b.jsxs)(S.a,{dense:!0,children:[Object(b.jsxs)(N.a,{children:[Object(b.jsx)(H.a,{children:Object(b.jsx)(C.a,{color:"secondary"})}),Object(b.jsx)(R.a,{primary:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 - "+n.systolic})]}),Object(b.jsxs)(N.a,{children:[Object(b.jsx)(H.a,{children:Object(b.jsx)(F.a,{color:"primary"})}),Object(b.jsx)(R.a,{primary:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 - "+t.systolic})]}),Object(b.jsxs)(N.a,{children:[Object(b.jsx)(H.a,{children:Object(b.jsx)(U.a,{})}),Object(b.jsx)(R.a,{primary:"\u0421\u0440\u0435\u0434\u043d\u0435\u0435 - "+a.systolic})]})]})]})}),Object(b.jsx)(D.a,{item:!0,xs:4,children:Object(b.jsxs)(o.a,{variant:"outlined",children:[Object(b.jsx)(k.a,{variant:"h6",align:"center",children:"\u0414\u0438\u0430\u0441\u0442\u043e\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0434\u0430\u0432\u043b\u0435\u043d\u0438\u0435"}),Object(b.jsxs)(S.a,{dense:!0,children:[Object(b.jsxs)(N.a,{children:[Object(b.jsx)(H.a,{children:Object(b.jsx)(C.a,{color:"secondary"})}),Object(b.jsx)(R.a,{primary:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 - "+n.diastolic})]}),Object(b.jsxs)(N.a,{children:[Object(b.jsx)(H.a,{children:Object(b.jsx)(F.a,{color:"primary"})}),Object(b.jsx)(R.a,{primary:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 - "+t.diastolic})]}),Object(b.jsxs)(N.a,{children:[Object(b.jsx)(H.a,{children:Object(b.jsx)(U.a,{})}),Object(b.jsx)(R.a,{primary:"\u0421\u0440\u0435\u0434\u043d\u0435\u0435 - "+a.diastolic})]})]})]})}),Object(b.jsx)(D.a,{item:!0,xs:4,children:Object(b.jsxs)(o.a,{variant:"outlined",children:[Object(b.jsx)(k.a,{variant:"h6",align:"center",children:"\u041f\u0443\u043b\u044c\u0441"}),Object(b.jsxs)(S.a,{dense:!0,children:[Object(b.jsxs)(N.a,{children:[Object(b.jsx)(H.a,{children:Object(b.jsx)(C.a,{color:"secondary"})}),Object(b.jsx)(R.a,{primary:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 - "+n.pulse})]}),Object(b.jsxs)(N.a,{children:[Object(b.jsx)(H.a,{children:Object(b.jsx)(F.a,{color:"primary"})}),Object(b.jsx)(R.a,{primary:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 - "+t.pulse})]}),Object(b.jsxs)(N.a,{children:[Object(b.jsx)(H.a,{children:Object(b.jsx)(U.a,{})}),Object(b.jsx)(R.a,{primary:"\u0421\u0440\u0435\u0434\u043d\u0438\u0439 - "+a.pulse})]})]})]})})]})})},J=n(291),P=n(292),W=n(294),Y=n(85),z=n.n(Y),A=n(116),G=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),i=Object(s.a)(c,2),l=i[0],o=i[1];return{loading:n,request:Object(a.useCallback)(function(){var e=Object(A.a)(z.a.mark((function e(t,n,a,c){var i,s,l,j;return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.prev=1,s={},a&&(a=JSON.stringify(a),s["Content-Type"]="application/json;charset=utf-8"),c&&(s.Authorization="Basic ".concat(c)),e.next=7,fetch("".concat("https://www.visdom.tech/b2doc_SS/").concat(t),{method:n,body:a,headers:s});case 7:if(l=e.sent,j=null,"POST"!==n&&"GET"!==n){e.next=13;break}return e.next=12,l.json();case 12:j=e.sent;case 13:if(l.ok){e.next=15;break}return e.abrupt("return",null===(i=j)||void 0===i?void 0:i.message);case 15:return r(!1),e.abrupt("return",j);case 19:e.prev=19,e.t0=e.catch(1),r(!1),o(e.t0.message);case 23:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(t,n,a,r){return e.apply(this,arguments)}}(),[]),error:l,clearError:function(){return o(null)}}},I=n(117),q=n.n(I),X=n(118),Z=n.n(X),K=Object(j.a)((function(e){return Object(d.a)({root:{flexGrow:1,marginBottom:e.spacing(2)},icon:{marginTop:e.spacing(.5)},link:{textDecoration:"none"}})}));function Q(){var e=K(),t=Object(a.useState)(),n=Object(s.a)(t,2),r=n[0],c=n[1],i=G().request;return Object(a.useEffect)((function(){i("users/user?snils="+document.URL.substr(document.URL.length-16),"GET",null,"OTYwODg3MjU1NTpwYXNzd29yZA==").then((function(e){return c(e)}))}),[]),Object(b.jsx)("div",{className:e.root,children:Object(b.jsx)(J.a,{position:"static",color:"transparent",children:Object(b.jsx)(P.a,{variant:"dense",children:Object(b.jsx)(p.a,{children:r?Object(b.jsxs)(D.a,{container:!0,direction:"row",spacing:2,justify:"space-between",children:[Object(b.jsx)(D.a,{item:!0,children:Object(b.jsxs)(D.a,{container:!0,direction:"row",spacing:2,children:[Object(b.jsx)(D.a,{item:!0,children:Object(b.jsxs)(k.a,{variant:"h5",children:[r.firstName," ",r.lastName,": \u0441\u0435\u0440\u0434\u0435\u0447\u043d\u044b\u0435 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438"]})}),Object(b.jsx)(D.a,{item:!0,children:Object(b.jsx)(q.a,{color:"secondary",className:e.icon})})]})}),Object(b.jsx)(D.a,{item:!0,children:Object(b.jsx)(W.a,{className:e.button,startIcon:Object(b.jsx)(Z.a,{color:"primary",children:"send"}),children:Object(b.jsx)("a",{className:e.link,href:"https://telegram.me/".concat(r.telegramUsername),children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432 \u0442\u0435\u043b\u0435\u0433\u0440\u0430\u043c\u0435"})})})]}):""})})})})}var V=n(295),$=Object(j.a)((function(e){return Object(d.a)({paper:{marginTop:e.spacing(3),padding:e.spacing(2)}})})),ee=function(e){var t=e.message;return Object(b.jsx)("div",{className:$().paper,children:Object(b.jsxs)(D.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:3,children:[Object(b.jsx)(D.a,{item:!0,children:Object(b.jsx)(V.a,{})}),Object(b.jsx)(D.a,{item:!0,children:Object(b.jsx)(k.a,{children:t})})]})})},te=n(297),ne=n(296),ae=Object(j.a)((function(e){return Object(d.a)({root:{width:"10em"}})})),re=function(e){var t=e.filterBy,n=e.setFilterBy,r=ae(),c=Object(a.useState)(t[0]),i=Object(s.a)(c,2),l=i[0],o=i[1];return Object(b.jsxs)(te.a,{size:"small",label:"\u0424\u0438\u043b\u044c\u0442\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u043e",select:!0,id:"selectPeriod",variant:"outlined",value:l,className:r.root,onChange:function(e){n(e.target.value),o(e.target.value)},children:[Object(b.jsx)(ne.a,{value:"week",children:"\u041d\u0435\u0434\u0435\u043b\u044f"},1),Object(b.jsx)(ne.a,{value:"month",children:"\u041c\u0435\u0441\u044f\u0446"},2),Object(b.jsx)(ne.a,{value:"year",children:"\u0413\u043e\u0434"},3),Object(b.jsx)(ne.a,{value:"all_time",children:"\u0412\u0441\u0435 \u0432\u0440\u0435\u043c\u044f"},3)]})};var ce=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(s.a)(c,2),l=i[0],o=i[1],j=G(),d=j.loading,u=j.request;Object(a.useEffect)((function(){console.log(document.URL.substr(document.URL.length-14)),u("pressure/patient?snils="+document.URL.substr(document.URL.length-16),"GET",null,"OTYwODg3MjU1NTpwYXNzd29yZA==").then((function(e){var t=e;t=t.filter((function(e){return e.diastolic>30&&e.systolic>50&&e.pulse>40})),r(t)}))}),[]),Object(a.useEffect)((function(){h("week")}),[n]);var h=function(e){switch(e){case"week":var t=function(){var e=new Date,t=e.getDay(),n=e.getDate(),a=new Date(e);a.setDate(n-t),a.setHours(0,0,0,0);var r=new Date(e);return r.setDate(n+(7-t)),r.setHours(0,0,0,0),[a,r]}(),a=Object(s.a)(t,2),r=a[0],c=a[1];o(n.filter((function(e){return+new Date(e.confirmTime)>=+r&&+new Date(e.confirmTime)<+c})));break;case"month":o(n.filter((function(e){return new Date(e.confirmTime).getMonth()===(new Date).getMonth()})));break;case"year":o(n.filter((function(e){return new Date(e.confirmTime).getFullYear()===(new Date).getFullYear()})));break;case"all_time":o(n)}},x=function(){var e={confirmTime:[],systolic:[],diastolic:[],pulse:[]};return l&&l.forEach((function(t){e.confirmTime.push(t.confirmTime),e.systolic.push(t.systolic),e.diastolic.push(t.diastolic),e.pulse.push(t.pulse)})),e};return d?Object(b.jsx)(ee,{message:"\u0418\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445..."}):Object(b.jsx)(b.Fragment,{children:n?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(Q,{}),Object(b.jsxs)(p.a,{children:[Object(b.jsx)(re,{filterBy:["week","month","year","all_time"],setFilterBy:h}),Object(b.jsx)(O,{data:x()}),Object(b.jsx)(_,{min:function(){var e=x();return{systolic:Math.min.apply(null,e.systolic),diastolic:Math.min.apply(null,e.diastolic),pulse:Math.min.apply(null,e.pulse)}}(),max:function(){var e=x();return{systolic:Math.max.apply(null,e.systolic),diastolic:Math.max.apply(null,e.diastolic),pulse:Math.max.apply(null,e.pulse)}}(),average:function(){var e=x();return{systolic:Math.floor(e.systolic.reduce((function(e,t){return e+t}),0)/e.systolic.length),diastolic:Math.floor(e.diastolic.reduce((function(e,t){return e+t}),0)/e.diastolic.length),pulse:Math.floor(e.pulse.reduce((function(e,t){return e+t}),0)/e.pulse.length)}}()}),Object(b.jsx)(T,{data:l})]})]}):Object(b.jsx)(p.a,{children:Object(b.jsx)(k.a,{variant:"h5",align:"center",children:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435, \u043f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0438"})})})},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,300)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(ce,{})}),document.getElementById("root")),ie()}},[[245,1,2]]]);
//# sourceMappingURL=main.32f67840.chunk.js.map