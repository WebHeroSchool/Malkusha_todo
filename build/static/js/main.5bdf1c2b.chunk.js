(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{123:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),i=a.n(c),s=a(11),o=a.n(s),r=a(67),l=a(12),u=a(174),j=a(71),d=a.n(j),h=a(124),b=function(e){var t=e.count,a=e.onClickDelAll;return Object(n.jsxs)("div",{className:d.a.footer,children:[Object(n.jsxs)("div",{className:d.a.subtitle,children:["Tasks to complete: ",t]}),Object(n.jsx)(h.a,{color:"secondary",onClick:a,children:"Delete completed tasks"})]})};b.defaultProps={count:0};var p=b,O=a(16),m=a(34),f=a(17),x=a(18),v=a(173),_=a(166),g=a(176),k=a(92),C=a(170),D=a(175),y=a(167),A=a(169),w=a(168),N=a(72),S=a.n(N),I=a.p+"static/media/instagram.b79433a6.png",L=a.p+"static/media/vk.33ed0b7a.png",M=a.p+"static/media/whatsapp.b1b801cf.png",P=a.p+"static/media/telegram.b555086d.png",V=a.p+"static/media/mail.2c378c9e.png",T=a(23),F=a.n(T),R=new k.a,B=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={user:[],isLoading:!0,repoList:[],loadFailure:!1,currentPage:1,perPage:1},e.doRepoList=function(t,a){R.repos.listForUser({username:"Malkusha",per_page:t,page:a}).then((function(t){var n=t.data;e.setState({repoList:n,isLoading:!1,currentPage:a})})).catch((function(t){e.setState({isLoading:!1,isError:!0,errorMessage:t})}))},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.doRepoList(this.state.perPage,this.state.currentPage),R.users.getByUsername({username:"Malkusha"}).then((function(t){var a=t.data;e.setState({user:a,isLoading:!1})})).catch((function(){e.setState({isLoading:!1,loadFailure:!0})}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.isLoading,c=t.repoList,i=t.loadFailure,s=t.user,o=t.currentPage,r=t.perPage;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:F.a.about,children:[Object(n.jsx)(g.a,{variant:"square",alt:"Anastasiya",src:s.avatar_url}),Object(n.jsx)("h3",{className:F.a.name,children:s.name})]}),Object(n.jsxs)("p",{className:F.a.bio,children:["\u2603 ",s.bio]}),Object(n.jsx)("h1",{children:a?Object(n.jsx)(_.a,{color:"secondary"}):" "}),Object(n.jsxs)(D.a,{children:[Object(n.jsx)(y.a,{expandIcon:Object(n.jsx)(S.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(n.jsx)(w.a,{children:"My portfolio"})}),Object(n.jsx)(A.a,{children:Object(n.jsxs)(w.a,{children:[Object(n.jsx)("a",{href:"https://webheroschool.github.io/AXION_Malkusha/",children:Object(n.jsx)("p",{children:"Online shop page"})}),Object(n.jsx)("a",{href:"https://webheroschool.github.io/Malkusha_JS_exam/",children:Object(n.jsx)("p",{children:"Card game"})}),Object(n.jsx)("a",{href:" https://webheroschool.github.io/Malkusha_todo/",children:Object(n.jsx)("p",{children:"React app"})})]})})]}),Object(n.jsxs)(D.a,{children:[Object(n.jsx)(y.a,{expandIcon:Object(n.jsx)(S.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(n.jsx)(w.a,{children:"My repos"})}),Object(n.jsx)(A.a,{children:Object(n.jsxs)(w.a,{children:[!a&&Object(n.jsx)("ul",{children:c.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsxs)("a",{href:e.html_url,children:[e.name,"."]}),Object(n.jsxs)("p",{className:F.a.repo,children:["Description: ",e.description]}),Object(n.jsxs)("p",{className:F.a.repo,children:["language: ",e.language]})]},e.id)}))}),Object(n.jsx)(v.a,{size:"small",shape:"rounded",count:Math.ceil(s.public_repos/r),page:o,hideNextButton:!0,hidePrevButton:!0,onChange:function(t,a){e.doRepoList(r,a)}})]})})]}),Object(n.jsxs)("p",{className:F.a.follow,children:["Follow ",Object(n.jsx)("a",{href:s.html_url,children:"my page on GitHub"})]}),i&&Object(n.jsx)("h2",{children:"Something's wrong. Have a rest"}),Object(n.jsxs)(C.a,{className:F.a.card,children:[Object(n.jsx)("a",{href:"https://www.instagram.com/pas_malkusha/",children:Object(n.jsx)("img",{className:F.a.icon,src:I})}),Object(n.jsx)("a",{href:"https://vk.com/id456129067",children:Object(n.jsx)("img",{className:F.a.icon,src:L})}),Object(n.jsx)("a",{href:"https://wa.me/79168454226",children:Object(n.jsx)("img",{className:F.a.icon,src:M})}),Object(n.jsx)("a",{href:"https://t.me/pas_malkusha",children:Object(n.jsx)("img",{className:F.a.icon,src:P})}),Object(n.jsx)("a",{href:"mailto:malkusha@mail.ru",children:Object(n.jsx)("img",{className:F.a.icon,src:V})})]})]})}}]),a}(i.a.Component),E=a(93),U=a(90),z=a(22),H=a(20),q=a(64),J=a.n(q),W=a(73),G=a.n(W),K=a(126),Q=a(91),X=a.n(Q),Y=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(){return Object(O.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.timerID=setInterval((function(){return console.log("interval")}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e,t=this.props,a=t.value,c=t.id,i=t.isDone,s=t.onClickDone,o=t.onClickDelete;return Object(n.jsxs)("span",{children:[Object(n.jsx)("span",{className:J()((e={},Object(H.a)(e,G.a.item,!0),Object(H.a)(e,G.a.done,i),e)),onClick:function(){return s(c)},children:a}),Object(n.jsx)(K.a,{"aria-label":"delete",onClick:function(){return o(c)},children:Object(n.jsx)(X.a,{})})]})}}]),a}(i.a.Component);Y.defaultProps={isDone:!1};var Z=Y,$=a(74),ee=a.n($),te=function(e){var t=e.items,a=(e.visibleItems,e.id,e.onClickDone),c=e.onClickDelete,i=e.onClickDelAll,s=e.onClickFiler;return Object(n.jsx)("ul",{className:ee.a.list,children:t.map((function(e){return Object(n.jsx)("li",{className:J()(Object(H.a)({},ee.a.done,e.isDone)),children:Object(n.jsx)(Z,{value:e.value,isDone:e.isDone,id:e.id,onClickDone:a,onClickDelete:c,onClickDelAll:i,onClickFiler:s})},e.value)}))})},ae=a(6),ne=a.n(ae),ce=a(172),ie=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(O.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={inputValue:""},e.onButtonClick=function(){var t=e.props.items.findIndex((function(t){return t.value===e.state.inputValue}));""===e.state.inputValue?e.setState({inputValue:"The task must not be empty"}):-1!==t?e.setState({inputValue:"This task is already exisits"}):""!==e.state.inputValue&&-1===t&&(e.setState({inputValue:""}),e.props.onClickAdd(e.state.inputValue))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props;t.onClickAdd,t.items;return Object(n.jsxs)("div",{children:[Object(n.jsx)(ce.a,{id:"standard-full-width",label:"Add a task",fullWidth:!0,margin:"normal",InputLabelProps:{shrink:!0},color:"secondary",value:this.state.inputValue,onChange:function(t){return e.setState({inputValue:t.target.value})}}),Object(n.jsx)(h.a,{onClick:this.onButtonClick,children:"Add"})]})}}]),a}(i.a.Component);ce.a.PropTypes={inputValue:ne.a.string.isRequired};var se=ie,oe=a(171),re=a(75),le=a.n(re),ue=function(){var e=[{value:"To finish studying",isDone:!1,id:1},{value:"To decorate a Christmas tree",isDone:!1,id:2},{value:'To make "olivye" salad',isDone:!0,id:3}],t=2,a=Object(c.useState)(e),i=Object(z.a)(a,2),s=i[0],o=i[1],r=Object(c.useState)(t),l=Object(z.a)(r,2),u=l[0],j=l[1],d=Object(c.useState)(e),b=Object(z.a)(d,2),O=b[0],m=b[1];Object(c.useEffect)((function(e){console.log("Mount")}),[]),Object(c.useEffect)((function(){console.log("Update")})),Object(c.useEffect)((function(){console.log("Count")}),[u]);var f=function(t){var a=s;switch(t){case"all":a=s;break;case"active":a=s.filter((function(e){return!0!==e.isDone}));break;case"completed":a=s.filter((function(e){return!0===e.isDone}));break;default:a=e,console.log(a)}m(a)};return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:le.a.title,children:"\u2603 Christmas tasks:"}),Object(n.jsx)(se,{items:s,onClickAdd:function(e){var t=[].concat(Object(E.a)(s),[{value:e,isDone:!1,id:u+1}]);o(t),m(t),j((function(e){return e+1}))}}),Object(n.jsxs)(oe.a,{variant:"text",size:"small",color:"secondary","aria-label":"text primary button group",children:[Object(n.jsx)(h.a,{id:"all",onClick:function(e){return f("all")},children:"All"}),Object(n.jsx)(h.a,{id:"active",onClick:function(e){return f("active")},children:"Active"}),Object(n.jsx)(h.a,{id:"completed",onClick:function(e){return f("completed")},children:"Completed"})]}),Object(n.jsxs)(C.a,{className:le.a.card,children:[Object(n.jsx)(te,{items:O,onClickDone:function(e){var t=s.map((function(t){var a=Object(U.a)({},t);return t.id===e&&(a.isDone=!t.isDone),a})),a=t.filter((function(e){return!0!==e.isDone})).length;o(t),m(t),j(a)},onClickDelete:function(e){var t=s.filter((function(t){return t.id!==e})),a=t.filter((function(e){return!0!==e.isDone})).length;o(t),m(t),j(a)}}),Object(n.jsx)(p,{count:u,onClickDelAll:function(e){var t=s.filter((function(e){return!0!==e.isDone}));o(t),m(t)}})]})]})},je=a(76),de=a.n(je),he=function(){return Object(n.jsx)(r.a,{children:Object(n.jsxs)("div",{className:de.a.wrap,children:[Object(n.jsx)("p",{className:de.a.note,children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u0432 WebHeroSchool"}),Object(n.jsxs)(u.a,{"aria-label":"breadcrumb",separator:"|",children:[Object(n.jsx)(r.b,{to:"/",color:"inherit",href:"#",children:"About"}),Object(n.jsx)(r.b,{to:"/todo",color:"inherit",href:"#",children:"Tasks"})]}),Object(n.jsx)(l.a,{path:"/",exact:!0,component:B}),Object(n.jsx)(l.a,{path:"/todo",component:ue})]})})};o.a.render(Object(n.jsx)(he,{}),document.getElementById("root"))},23:function(e,t,a){e.exports={about:"About_about__6o7y3",repo:"About_repo__1b-Su",name:"About_name__23C1g",follow:"About_follow__2AHzS",card:"About_card__Vm2xU",icon:"About_icon__2ORcQ",bio:"About_bio__2_tlg"}},71:function(e,t,a){e.exports={footer:"Footer_footer__3kRR3",subtitle:"Footer_subtitle__3SMAK"}},73:function(e,t,a){e.exports={item:"Item_item__1Io36",done:"Item_done__3_wc0"}},74:function(e,t,a){e.exports={list:"ItemList_list__2a0Om",done:"ItemList_done__dmgt0"}},75:function(e,t,a){e.exports={title:"Todo_title__8CbDz",card:"Todo_card__3qM_h"}},76:function(e,t,a){e.exports={wrap:"App_wrap__3bO-E",note:"App_note__3ahst"}}},[[123,1,2]]]);
//# sourceMappingURL=main.5bdf1c2b.chunk.js.map