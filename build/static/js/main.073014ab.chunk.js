(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{123:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),s=a.n(c),i=a(11),o=a.n(i),r=a(68),l=a(12),u=a(174),j=a(54),d=a.n(j),b=a(124),h=function(e){var t=e.count,a=e.countDone,c=e.countAll,s=e.onClickDelAll;return Object(n.jsxs)("div",{className:d.a.footer,children:[Object(n.jsxs)("div",{className:d.a.subtitle,children:["Tasks to complete: ",t]}),Object(n.jsxs)("div",{className:d.a.subtitle,children:["Tasks Done: ",a]}),Object(n.jsxs)("div",{className:d.a.subtitle,children:["All tasks: ",c]}),Object(n.jsx)(b.a,{color:"secondary",onClick:s,children:"Delete completed tasks"})]})};h.defaultProps={count:0};var p=h,O=a(16),m=a(34),f=a(18),x=a(19),g=a(173),v=a(166),_=a(176),k=a(92),D=a(170),C=a(175),S=a(167),A=a(169),N=a(168),y=a(72),w=a.n(y),I=a.p+"static/media/instagram.b79433a6.png",L=a.p+"static/media/vk.33ed0b7a.png",V=a.p+"static/media/whatsapp.b1b801cf.png",M=a.p+"static/media/telegram.b555086d.png",P=a.p+"static/media/mail.2c378c9e.png",J=a(23),T=a.n(J),E=new k.a,F=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={user:[],isLoading:!0,repoList:[],loadFailure:!1,currentPage:1,perPage:1},e.doRepoList=function(t,a){E.repos.listForUser({username:"Malkusha",per_page:t,page:a}).then((function(t){var n=t.data;e.setState({repoList:n,isLoading:!1,currentPage:a})})).catch((function(t){e.setState({isLoading:!1,isError:!0,errorMessage:t})}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.doRepoList(this.state.perPage,this.state.currentPage),E.users.getByUsername({username:"Malkusha"}).then((function(t){var a=t.data;e.setState({user:a,isLoading:!1})})).catch((function(){e.setState({isLoading:!1,loadFailure:!0})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,c=t.repoList,s=t.loadFailure,i=t.user,o=t.currentPage,r=t.perPage;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:T.a.about,children:[Object(n.jsx)(_.a,{variant:"square",alt:"Anastasiya",src:i.avatar_url}),Object(n.jsx)("h3",{className:T.a.name,children:i.name})]}),Object(n.jsxs)("p",{className:T.a.bio,children:["\u2603 ",i.bio]}),Object(n.jsx)("h1",{children:a?Object(n.jsx)(v.a,{color:"secondary"}):" "}),Object(n.jsxs)(C.a,{children:[Object(n.jsx)(S.a,{expandIcon:Object(n.jsx)(w.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(n.jsx)(N.a,{children:"My portfolio"})}),Object(n.jsx)(A.a,{children:Object(n.jsxs)(N.a,{children:[Object(n.jsx)("a",{href:"https://webheroschool.github.io/AXION_Malkusha/",children:Object(n.jsx)("p",{children:"Online shop page"})}),Object(n.jsx)("a",{href:"https://webheroschool.github.io/Malkusha_JS_exam/",children:Object(n.jsx)("p",{children:"Card game"})}),Object(n.jsx)("a",{href:" https://webheroschool.github.io/Malkusha_todo/",children:Object(n.jsx)("p",{children:"React app"})})]})})]}),Object(n.jsxs)(C.a,{children:[Object(n.jsx)(S.a,{expandIcon:Object(n.jsx)(w.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(n.jsx)(N.a,{children:"My repos"})}),Object(n.jsx)(A.a,{children:Object(n.jsxs)(N.a,{children:[!a&&Object(n.jsx)("ul",{children:c.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsxs)("a",{href:e.html_url,children:[e.name,"."]}),Object(n.jsxs)("p",{className:T.a.repo,children:["Description: ",e.description]}),Object(n.jsxs)("p",{className:T.a.repo,children:["language: ",e.language]})]},e.id)}))}),Object(n.jsx)(g.a,{size:"small",shape:"rounded",count:Math.ceil(i.public_repos/r),page:o,hideNextButton:!0,hidePrevButton:!0,onChange:function(t,a){e.doRepoList(r,a)}})]})})]}),Object(n.jsxs)("p",{className:T.a.follow,children:["Follow ",Object(n.jsx)("a",{href:i.html_url,children:"my page on GitHub"})]}),s&&Object(n.jsx)("h2",{children:"Something's wrong. Have a rest"}),Object(n.jsxs)(D.a,{className:T.a.card,children:[Object(n.jsx)("a",{href:"https://www.instagram.com/pas_malkusha/",children:Object(n.jsx)("img",{className:T.a.icon,src:I})}),Object(n.jsx)("a",{href:"https://vk.com/id456129067",children:Object(n.jsx)("img",{className:T.a.icon,src:L})}),Object(n.jsx)("a",{href:"https://wa.me/79168454226",children:Object(n.jsx)("img",{className:T.a.icon,src:V})}),Object(n.jsx)("a",{href:"https://t.me/pas_malkusha",children:Object(n.jsx)("img",{className:T.a.icon,src:M})}),Object(n.jsx)("a",{href:"mailto:malkusha@mail.ru",children:Object(n.jsx)("img",{className:T.a.icon,src:P})})]})]})}}]),a}(s.a.Component),R=a(93),B=a(90),z=a(17),H=a(21),q=a(65),U=a.n(q),W=a(73),G=a.n(W),K=a(126),Q=a(91),X=a.n(Q),Y=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e,t=this.props,a=t.value,c=t.id,s=t.isDone,i=t.onClickDone,o=t.onClickDelete;return Object(n.jsxs)("span",{children:[Object(n.jsx)("span",{className:U()((e={},Object(H.a)(e,G.a.item,!0),Object(H.a)(e,G.a.done,s),e)),onClick:function(){return i(c)},children:a}),Object(n.jsx)(K.a,{"aria-label":"delete",onClick:function(){return o(c)},children:Object(n.jsx)(X.a,{})})]})}}]),a}(s.a.Component);Y.defaultProps={isDone:!1};var Z=Y,$=a(74),ee=a.n($),te=function(e){var t=e.items,a=(e.id,e.onClickDone),c=e.onClickDelete,s=e.onClickDelAll,i=e.onClickFilter;return Object(n.jsx)("ul",{className:ee.a.list,children:t.map((function(e){return Object(n.jsx)("li",{className:U()(Object(H.a)({},ee.a.done,e.isDone)),children:Object(n.jsx)(Z,{value:e.value,isDone:e.isDone,id:e.id,onClickDone:a,onClickDelete:c,onClickDelAll:s,onClickFilter:i})},e.value)}))})},ae=a(6),ne=a.n(ae),ce=a(172),se=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={inputValue:""},e.onButtonClick=function(){var t=e.props.items.findIndex((function(t){return t.value===e.state.inputValue}));""===e.state.inputValue?e.setState({inputValue:"The task must not be empty"}):-1!==t?e.setState({inputValue:"This task is already exisits"}):""!==e.state.inputValue&&-1===t&&(e.setState({inputValue:""}),e.props.onClickAdd(e.state.inputValue))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props;t.onClickAdd,t.items;return Object(n.jsxs)("div",{children:[Object(n.jsx)(ce.a,{id:"standard-full-width",label:"Add a task",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},color:"secondary",value:this.state.inputValue,onChange:function(t){return e.setState({inputValue:t.target.value})},onClick:function(t){return e.setState({inputValue:""})}}),Object(n.jsx)(b.a,{onClick:this.onButtonClick,children:"Add"})]})}}]),a}(s.a.Component);ce.a.PropTypes={inputValue:ne.a.string.isRequired};var ie=se,oe=a(171),re=a(75),le=a.n(re),ue=function(){var e={items:JSON.parse(localStorage.getItem("items"))||[{value:"To finish studying",isDone:!1,id:1},{value:"To decorate a Christmas tree",isDone:!1,id:2},{value:'To make "olivye" salad',isDone:!0,id:3}],count:JSON.parse(localStorage.getItem("count"))||2,countDone:JSON.parse(localStorage.getItem("countDone"))||1,countAll:JSON.parse(localStorage.getItem("countAll"))||3},t=Object(c.useState)(e.items),a=Object(z.a)(t,2),s=a[0],i=a[1],o=Object(c.useState)(e.items),r=Object(z.a)(o,2),l=r[0],u=r[1],j=Object(c.useState)("all"),d=Object(z.a)(j,2),h=d[0],O=d[1],m=Object(c.useState)(e.count),f=Object(z.a)(m,2),x=f[0],g=f[1],v=Object(c.useState)(e.countDone),_=Object(z.a)(v,2),k=_[0],C=_[1],S=Object(c.useState)(e.countAll),A=Object(z.a)(S,2),N=A[0],y=A[1];Object(c.useEffect)((function(){u(s)}),[]),Object(c.useEffect)((function(){w(h)}),[s]),Object(c.useEffect)((function(){localStorage.setItem("items",JSON.stringify(s))})),Object(c.useEffect)((function(){localStorage.setItem("count",JSON.stringify(x))})),Object(c.useEffect)((function(){localStorage.setItem("countDone",JSON.stringify(k))})),Object(c.useEffect)((function(){localStorage.setItem("countAll",JSON.stringify(N))}));var w=function(t){var a=s;switch(t){case"all":a=s;break;case"active":a=s.filter((function(e){return!0!==e.isDone}));break;case"completed":a=s.filter((function(e){return!0===e.isDone}));break;default:a=e.items}u(a),O(t)};return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:le.a.title,children:"\u2603 Christmas tasks:"}),Object(n.jsx)(ie,{items:s,onClickAdd:function(e){var t=[].concat(Object(R.a)(s),[{value:e,isDone:!1,id:x+1}]);i(t),g((function(e){return e+1})),y((function(e){return e+1}))}}),Object(n.jsxs)(oe.a,{variant:"text",size:"small",color:"secondary","aria-label":"text primary button group",children:[Object(n.jsx)(b.a,{id:"all",onClick:function(e){return w("all")},children:"All"}),Object(n.jsx)(b.a,{id:"active",onClick:function(e){return w("active")},children:"Active"}),Object(n.jsx)(b.a,{id:"completed",onClick:function(e){return w("completed")},children:"Completed"})]}),Object(n.jsxs)(D.a,{className:le.a.card,children:[Object(n.jsx)(te,{items:l,onClickDone:function(e){var t=s.map((function(t){var a=Object(B.a)({},t);return t.id===e&&(a.isDone=!t.isDone),a})),a=t.filter((function(e){return!0!==e.isDone})).length,n=t.filter((function(e){return!0===e.isDone})).length,c=t.length;i(t),g(a),C(n),y(c)},onClickDelete:function(e){var t=s.filter((function(t){return t.id!==e}));t.forEach((function(t){t.id>e&&t.id--}));var a=t.filter((function(e){return!0!==e.isDone})).length,n=t.filter((function(e){return!0===e.isDone})).length,c=t.length;i(t),g(a),C(n),y(c)},onClickFilter:w}),Object(n.jsx)(p,{count:x,countDone:k,countAll:N,onClickDelAll:function(e){var t=s.filter((function(e){return!0!==e.isDone})),a=t.length;i(t),C(0),y(a)}})]})]})},je=a(76),de=a.n(je),be=function(){return Object(n.jsx)(r.a,{children:Object(n.jsxs)("div",{className:de.a.wrap,children:[Object(n.jsx)("p",{className:de.a.note,children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0432 WebHeroSchool"}),Object(n.jsxs)(u.a,{"aria-label":"breadcrumb",separator:"|",children:[Object(n.jsx)(r.b,{to:"/",color:"inherit",href:"#",children:"About"}),Object(n.jsx)(r.b,{to:"/todo",color:"inherit",href:"#",children:"Tasks"})]}),Object(n.jsx)(l.a,{path:"/",exact:!0,component:F}),Object(n.jsx)(l.a,{path:"/todo",component:ue})]})})};o.a.render(Object(n.jsx)(be,{}),document.getElementById("root"))},23:function(e,t,a){e.exports={about:"About_about__6o7y3",repo:"About_repo__1b-Su",name:"About_name__23C1g",follow:"About_follow__2AHzS",card:"About_card__Vm2xU",icon:"About_icon__2ORcQ",bio:"About_bio__2_tlg"}},54:function(e,t,a){e.exports={footer:"Footer_footer__3kRR3",subtitle:"Footer_subtitle__3SMAK"}},73:function(e,t,a){e.exports={item:"Item_item__1Io36",done:"Item_done__3_wc0"}},74:function(e,t,a){e.exports={list:"ItemList_list__2a0Om",done:"ItemList_done__dmgt0"}},75:function(e,t,a){e.exports={title:"Todo_title__8CbDz",card:"Todo_card__3qM_h"}},76:function(e,t,a){e.exports={wrap:"App_wrap__3bO-E",note:"App_note__3ahst"}}},[[123,1,2]]]);
//# sourceMappingURL=main.073014ab.chunk.js.map