(this.webpackJsonpsuperhero=this.webpackJsonpsuperhero||[]).push([[0],{249:function(e,a,t){e.exports=t.p+"static/media/spiderWebIcon.7b5bbdba.svg"},265:function(e,a,t){e.exports=t(545)},545:function(e,a,t){"use strict";t.r(a);t(266),t(191),t(314);var n=t(0),r=t.n(n),c=t(34),o=t.n(c),l=t(257),i=t(31),s=t(581),u=t(85),d=(t(501),t(502),t(76)),m=t(251),p=t(252),f={auth:{token:"3018572491512249"},search:{isSearchLoading:!1,results:[],error:"",total:0},hero:{isHeroLoading:!1,info:{},error:""},filter:{filterBy:[],filteredList:[],isFiltering:!1,error:"",power:[0,100],speed:[0,100]}},h=t(21),b="SEARCH_HEROES_PENDING",E="SEARCH_HEROES_SUCCESS",g="SEARCH_HEROES_FAIL",v="GET_HERO_PENDING",y="GET_HERO_SUCCESS",w="GET_HERO_FAIL",x="SET_FILTERS",O="RESET_FILTERS",j="FILTER_RESULTS_PENDING",S="FILTER_RESULTS_SUCCESS",k="FILTER_RESULTS_FAIL",F=t(22);function C(e){var a=e.power,t=void 0===a?null:a,n=e.speed,r=void 0===n?null:n;return e.results.filter((function(e){var a=e.powerstats.speed>=r[0],t=e.powerstats.speed<=r[1];return a&&t})).filter((function(e){return parseInt(e.powerstats.power)>=t[0]&&parseInt(e.powerstats.power)<=t[1]}))}var N=Object(d.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.auth,a=arguments.length>1?arguments[1]:void 0;return a.type,e},hero:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.hero,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case v:return Object(h.a)({},e,{isHeroLoading:!0,info:{}});case y:return Object(h.a)({},e,{isHeroLoading:!1,info:a.payload.data});case w:return Object(h.a)({},e,{isHeroLoading:!1,error:a.payload,info:{}});default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.search,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return Object(h.a)({},e,{isSearchLoading:!0});case E:return Object(h.a)({},e,{isSearchLoading:!1,total:a.payload.results.length,results:a.payload.results,term:a.payload.term});case g:return Object(h.a)({},e,{isSearchLoading:!1,error:a.payload,total:0,results:[],term:""});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.filter,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case x:return Object(h.a)({},e,Object(F.a)({},a.payload.key,a.payload.data));case j:return Object(h.a)({},e,{isFiltering:!0});case S:return Object(h.a)({},e,{isFiltering:!1,filteredList:C({power:e.power,speed:e.speed,results:a.payload})});case k:return Object(h.a)({},e,{isFiltering:!1,filteredList:[],error:a.payload});case O:return Object(h.a)({},e,{power:f.power,speed:f.speed});default:return e}}}),R=[p.a],L=Object(d.createStore)(N,Object(m.composeWithDevTools)(d.applyMiddleware.apply(void 0,R))),I=t(546),H=t(126),T={50:"#ffebef",100:"#ffccd4",200:"#f5979d",300:"#ed6e76",400:"#f94854",500:"#ff2f39",600:"#f02338",700:"#de1532",800:"#d1052a",900:"#c3001d"},B={50:"#FFF8E1",100:"#FFEDB4",200:"#FFE183",300:"#FFD651",400:"#FFCC2B",500:"#FFC30E",600:"#FFB506",700:"#FFA204",800:"#FF9103",900:"#FF7101",A100:"#ffe57f",A200:"#ffd740",A400:"#ffc400",A700:"#ffab00"},_={white:{transparent:"transparent",default:"#fff",98:"#fafafa"},black:{default:"#000","01":"rgba(0, 0, 0, 0.1)",25:"rgba(0, 0, 0, 0.25)",12:"rgba(0, 0, 0, 0.12)",87:"rgba(0, 0, 0, 0.87)",54:"rgba(0, 0, 0, 0.54)",38:"rgba(0, 0, 0, 0.38)"}},M={common:Object(h.a)({black:_.black.default,white:_.white.default,transparent:_.white.transparent},_.white,{},_.black),background:{paper:_.white.default,default:_.white[98],opacity30:"rgba(255, 255, 255, 0.3)"},primary:Object(h.a)({light:T[200],main:T[700],dark:T[900],contrastText:_.white.default},T),secondary:Object(h.a)({light:B[200],main:B[500],dark:B[900],contrastText:_.white.default},B),text:{primary:_.black[87],secondary:_.black[54],disabled:_.black[38],hint:_.black[38]},shadow:{default:"0 1px 14px ".concat(_.black["01"]),wide:"0 24px 44px ".concat(_.black[25])}},A=t(258),W=Object(A.a)({palette:Object(h.a)({},M),customShape:{borderRadius:{default:8,rounded:"50%"}},customShadow:{default:M.shadow.default,wide:M.shadow.wide},customSize:{card:{default:170}}});function P(e){var a=e.data,t=a.width,n=a.className,c=D();return r.a.createElement("div",{className:"".concat(c.loaderCotainer," ").concat(n)},r.a.createElement(H.BarLoader,{width:t,color:M.primary.main}))}var D=Object(I.a)((function(e){return{loaderCotainer:{display:"flex",flex:1,justifyContent:"center",alignItems:"center"}}})),G=t(563);var U,z,V=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var a=16*Math.random()|0;return("x"===e?a:3&a|8).toString(16)}))},q=(U={},Object(F.a)(U,b,(function(){return{type:b}})),Object(F.a)(U,E,(function(e){return{type:E,payload:e}})),Object(F.a)(U,g,(function(e){return{type:g,payload:e}})),Object(F.a)(U,v,(function(){return{type:v}})),Object(F.a)(U,y,(function(e){return{type:y,payload:e}})),Object(F.a)(U,w,(function(e){return{type:w,payload:e}})),Object(F.a)(U,j,(function(){return{type:j}})),Object(F.a)(U,S,(function(e){return{type:S,payload:e}})),Object(F.a)(U,k,(function(e){return{type:k,payload:e}})),Object(F.a)(U,x,(function(e){return{type:x,payload:e}})),Object(F.a)(U,O,(function(){return{type:O}})),U),J=t(165),$=t.n(J),K={request:(z=L,function(e,a){var t=z&&z.getState().auth.token;$.a.defaults.baseURL=function(e){return"https://superheroapi.com/api.php/"+e}(t);var n={headers:{Accept:"application/json","Content-Type":"application/json"}};return{get:function(){return $.a.get(e,Object(h.a)({},n,{},a))}}})},Q=t(70);var X={powerStats:function(e){return e.map((function(e){var a=Object.entries(e.powerstats).map((function(e){var a=Object(Q.a)(e,2),t=a[0],n=a[1];return[t,"null"===n?0:parseInt(n)]}));return Object(h.a)({},e,{powerstats:Object.fromEntries(a)})}))}};var Y={searchService:function(e){return K.request("".concat("search/").concat(e)).get().then((function(e){return function(e){var a=e.data;return{status:e.status,success:a.response,term:a["results-for"]||"",results:X.powerStats(a.results)||[]}}(e)}))},getHeroService:function(e){return K.request("/".concat(e)).get().then((function(e){return function(e){var a=e.data;return{status:e.status,data:a}}(e)}))}};function Z(){var e=Object(u.b)();return{actions:{searchHeroes:function(a){return e((t=a,function(e){return e(q[b]()),Y.searchService(t).then((function(a){return(a.status<200||a.status>299)&&Promise.reject(a),e(q[E](a)),a})).catch((function(a){e(q[g](a))}))}));var t},getHero:function(a){return e((t=a,function(e){return e(q[v]()),Y.getHeroService(t).then((function(a){return(a.status<200||a.status>299)&&Promise.reject(a),e(q[y](a)),a})).catch((function(a){e(q[w](a))}))}));var t},setFilters:function(a){return e((t=a,function(e){return e(q[x](t))}));var t},resetFilters:function(){return e((function(e){return e(q[O]())}))},filterResults:function(a){return e((function(e,a){var t=a().search.results;e(q[j]()),setTimeout((function(){e(q[S](t))}),500)}))}}}}function ee(){var e=Object(u.c)((function(e){return e}));return{state:{auth:e.auth,search:e.search,hero:e.hero,filter:e.filter}}}function ae(e){var a=e.actions,t=a.handleApplyFilters,n=(a.handleresetFilters,te()),c=ee().state.filter,o=c.power,l=c.speed,i=c.isFiltering;return r.a.createElement("div",{className:n.filterModalContainer},r.a.createElement("div",{className:n.filtersSpace},r.a.createElement(Ue,{data:{label:"Power",defaultValue:o&&o,key:"power"}}),r.a.createElement(Ue,{data:{label:"Speed",defaultValue:l&&l,key:"speed"}})),r.a.createElement("div",{className:n.filterModalFooter},r.a.createElement(G.a,{onClick:t,color:"primary",variant:"contained"},i?r.a.createElement(H.PulseLoader,{size:10,color:M.common.white}):"Apply filters")))}var te=Object(I.a)((function(e){return{filterModalContainer:{display:"flex",flexDirection:"column",padding:16},filterModalFooter:{display:"flex",flexDirection:"column",justifyContent:"space-between"},filtersSpace:{flexGrow:1,marginBottom:100}}})),ne=t(565),re=t(566),ce=t(567);function oe(){var e=le();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:e.container,"data-testid":"brf-hero-header"},r.a.createElement(ne.a,{className:e.appBar},r.a.createElement(re.a,{className:e.toolbar},r.a.createElement(ce.a,{className:e.materialContainer},r.a.createElement("h2",{className:e.title},"Super Hero"))))))}var le=Object(I.a)((function(e){return{appBar:{background:e&&e.palette&&e.palette.primary.main},appBarItens:{flexGrow:1},container:{position:"relative",minHeight:96},toolbar:{padding:[[16,0]]},materialContainer:{alignItems:"center",display:"flex",justifyContent:"space-between"},title:{fontFamily:"Permanent Marker",fontSize:40,color:e&&e.palette&&e.palette.primary[100],margin:0}}})),ie=t(573),se=t(568),ue=t(569),de=t(570),me=t(571),pe=t(572);function fe(e){var a=e.data,t=a.id,n=a.name,c=a.image,o=a.powerstats,l=a.handleOpenModal,i=he();return r.a.createElement(se.a,{className:i.container,onClick:function(){return l(t)}},r.a.createElement(ue.a,null,r.a.createElement(de.a,{className:i.media,image:c,title:n}),r.a.createElement(me.a,null,r.a.createElement(pe.a,{gutterBottom:!0,variant:"h5"},n),o&&r.a.createElement(Te,{data:{list:o}}))))}var he=Object(ie.a)((function(e){var a;return{container:(a={boxShadow:e.customShadow.default,minWidth:270,margin:[[10,10,24,10]]},Object(F.a)(a,e.breakpoints.up("sm"),{minWidth:210}),Object(F.a)(a,e.breakpoints.up("md"),{minWidth:286}),a),media:{height:140}}})),be=t(574),Ee=t(575),ge=t(576),ve=t(577),ye=t(578),we=t(135);function xe(e){var a=e.data.isModalOpen,t=e.actions.handleCloseModal,n=ee().state.hero,c=n.isHeroLoading,o=n.info,l=o.name,i=o.powerstats,s=o.biography,u=o.image,d=o.appearance,m=o.work,p=o.connections,f=Oe({url:u&&u.url});return r.a.createElement(Le,{data:{isModalOpen:a},actions:{handleCloseModal:t}},r.a.createElement("div",{className:f.container},c?r.a.createElement(P,{data:{width:100}}):r.a.createElement("div",{className:f.body},r.a.createElement("div",{className:f.media}),r.a.createElement("div",{className:f.content},r.a.createElement("header",{className:f.header},r.a.createElement(pe.a,{variant:"h3",color:"primary"},l),r.a.createElement(G.a,{color:"primary",className:f.btn,onClick:t},r.a.createElement(be.a,{component:we.a,className:"".concat(f.closeIcon)}))),r.a.createElement(Ee.a,{className:f.table},r.a.createElement(ge.a,null,r.a.createElement(ve.a,null,r.a.createElement(ye.a,null,r.a.createElement(pe.a,null,"Publisher")),r.a.createElement(ye.a,null,r.a.createElement(pe.a,null,s&&s.publisher))),r.a.createElement(ve.a,null,r.a.createElement(ye.a,null,r.a.createElement(pe.a,null,"Appearance")),r.a.createElement(ye.a,null,r.a.createElement(pe.a,null,"Gender: ",d&&d.gender),r.a.createElement(pe.a,null,"Race: ",d&&d.race),r.a.createElement(pe.a,null,"Height: ",d&&d.height[1]),r.a.createElement(pe.a,null,"Weight: ",d&&d.weight[1]))),r.a.createElement(ve.a,null,r.a.createElement(ye.a,null,r.a.createElement(pe.a,null,"Work base")),r.a.createElement(ye.a,null,r.a.createElement(pe.a,null,m&&m.base))),r.a.createElement(ve.a,null,r.a.createElement(ye.a,null,r.a.createElement(pe.a,null,"Relatives")),r.a.createElement(ye.a,null,r.a.createElement(pe.a,null,p&&p.relatives))))),r.a.createElement(Te,{data:{list:i}})))))}var Oe=Object(ie.a)((function(e){return{container:Object(F.a)({alignItems:"center",display:"flex",justifyContent:"center",minHeight:300,minWidth:300},e.breakpoints.up("md"),{minWidth:500}),body:Object(F.a)({display:"flex",flexDirection:"column"},e.breakpoints.up("md"),{flexDirection:"row"}),media:Object(F.a)({backgroundImage:function(e){var a=e.url;return"url(".concat(a,")")},backgroundPosition:"center top",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:200,width:"auto"},e.breakpoints.up("md"),{height:"auto",width:300}),content:{padding:[[20,16]],minWidth:300},table:{marginBottom:16},closeIcon:{height:30,width:30},header:{display:"flex",justifyContent:"space-between"}}})),je=t(579);function Se(e){var a=e.children,t=ke();return r.a.createElement(ce.a,{"data-testid":"layout"},r.a.createElement(je.a,{item:!0,xs:12},r.a.createElement(oe,null)),r.a.createElement(je.a,{item:!0,xs:12,className:t.main},a))}var ke=Object(I.a)((function(e){return{main:{padding:[[64,0]]}}})),Fe=t(582),Ce=t(580),Ne=t(547);var Re=Object(I.a)((function(e){return{modal:{display:"flex",alignItems:"center",justifyContent:"center"},content:{borderRadius:4,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5]}}})),Le=r.a.memo((function(e){var a=e.data.isModalOpen,t=e.actions.handleCloseModal,n=e.children,c=Re();return r.a.createElement(Fe.a,{open:a,onClose:t,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",closeAfterTransition:!0,BackdropComponent:Ce.a,BackdropProps:{timeout:500},className:c.modal},r.a.createElement(Ne.a,{in:a},r.a.createElement("div",{className:c.content},n)))}));function Ie(e){var a=e.data,t=a.name,n=a.strength,c=He({strength:n});return r.a.createElement("div",{className:c.container},r.a.createElement(pe.a,{className:c.name},t),r.a.createElement("div",{className:c.barContainer},r.a.createElement("div",{className:c.bar})))}var He=Object(ie.a)((function(e){var a=e.palette;return{container:{display:"flex"},name:{textTransform:"capitalize",width:"50%"},bar:{backgroundColor:a.primary.main,height:5,width:function(e){var a=e.strength;return"".concat(a,"%")}},barContainer:{backgroundColor:a.common.black["01"],display:"flex",alignItems:"center",width:"50%"}}}));function Te(e){var a=e.data.list;return r.a.createElement(r.a.Fragment,null,a&&Object.entries(a).map((function(e){return r.a.createElement(Ie,{data:{name:e[0],strength:e[1]},key:V()})})))}var Be=t(260),_e=t(583),Me=t(249),Ae=t.n(Me);function We(e){var a=e.data,t=a.value,n=a.shakeField,c=e.actions,o=c.handleChangeTerm,l=c.handleSubmitSearch,i=Pe();return r.a.createElement(Be.a,{className:"".concat(i.container," ").concat(n?i.animatedSearchFieldError:"")},r.a.createElement("form",{onSubmit:l,className:i.form},r.a.createElement(_e.a,{id:"outlined-basic",variant:"outlined",fullWidth:!0,className:i.searchField,placeholder:"Search your favorite hero!",inputProps:{classes:i.searchField},onChange:o,value:t}),r.a.createElement(G.a,{variant:"contained",color:"primary",className:i.btn,onClick:l},r.a.createElement(be.a,{component:we.b,className:"icon-search ".concat(i.searchIcon)}))))}var Pe=Object(I.a)((function(e){var a=e.customShape,t=e.customShadow,n=e.palette;return{container:{borderRadius:a&&a.borderRadius.default,boxShadow:t&&t.wide,overflow:"hidden"},form:{display:"flex","& input[type='text']":{color:n&&n.text.primary,fontFamily:"Permanent Marker",fontSize:20,"&::placeholder":{opacity:1}}},searchField:{background:n&&n.common.white,padding:[[16,20]]},btn:{backgroundImage:"url(".concat(Ae.a,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",fill:n&&n.common.white,borderBottomLeftRadius:0,borderTopLeftRadius:0,padding:[[20,36]]},icon:{alignItems:"center",color:n&&n.common.white,display:"flex"},searchIcon:{height:30,width:30},animatedSearchFieldError:{animation:"$shake 0.82s cubic-bezier(.36,.07,.19,.97) both",transform:"translate3d(0, 0, 0)",backfaceVisibility:"hidden",perspective:1e3},"@keyframes shake":{"10%, 90%":{transform:"translate3d(-1px, 0, 0)"},"20%, 80%":{transform:"translate3d(2px, 0, 0)"},"30%, 50%, 70%":{transform:"translate3d(-4px, 0, 0)"},"40%, 60%":{transform:"translate3d(4px, 0, 0)"}}}})),De=t(584),Ge=t(134);function Ue(e){var a=e.data,t=a.label,c=a.defaultValue,o=a.key,l=Z().actions,i=Object(n.useState)(c),s=Object(Q.a)(i,2),u=s[0],d=s[1];Object(n.useEffect)((function(){ze((function(){l.setFilters({key:o,data:u})}))}),[u]);var m=qe();return r.a.createElement("div",{className:m.container},r.a.createElement(pe.a,{id:"continuous-slider"},t),r.a.createElement(De.a,{ValueLabelComponent:Ve,value:u,onChange:function(e,a){d(a)}}))}var ze=Object(Ge.debounce)((function(e){e()}),500);function Ve(e){var a=e.children;e.open,e.value;return r.a.createElement(r.a.Fragment,null,a)}var qe=Object(I.a)((function(e){return{container:{marginBottom:16}}})),Je=t(106),$e=t.n(Je),Ke=t(166);function Qe(){var e=Object(n.useState)(""),a=Object(Q.a)(e,2),t=a[0],c=a[1],o=Object(n.useState)(!1),l=Object(Q.a)(o,2),i=l[0],s=l[1],u=Object(n.useState)(!1),d=Object(Q.a)(u,2),m=d[0],p=d[1],f=Xe(),h=Z().actions,b=ee().state,E=b.search,g=E.total,v=E.term,y=E.results,w=E.isSearchLoading,x=b.filter.filteredList;function O(){return(O=Object(Ke.a)($e.a.mark((function e(a){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),t.length>=2?(h.searchHeroes(t),c("")):(s(!0),setTimeout((function(){s(!1)}),1e3));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e){p(!0),h.getHero(e)}function S(){return(S=Object(Ke.a)($e.a.mark((function e(){return $e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h.filterResults();case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!Object(Ge.isEmpty)(y)&&h.filterResults()}),[y]),r.a.createElement(je.a,{container:!0,"data-testid":"homepage"},r.a.createElement(je.a,{item:!0,xs:12,className:f.searchContainer},r.a.createElement(We,{data:{value:t,shakeField:i},actions:{handleChangeTerm:function(e){c(e.target.value)},handleSubmitSearch:function(e){return O.apply(this,arguments)}}})),r.a.createElement(je.a,{item:!0,xs:12},w?r.a.createElement(P,{data:{width:500,className:f.barLoader}}):r.a.createElement(je.a,{container:!0,spacing:2,className:f.heros},x&&x.length>0&&r.a.createElement(je.a,{item:!0,xs:12,className:f.foundResults},r.a.createElement("div",{className:f.foundResults},r.a.createElement(pe.a,{className:f.resultsFor},"We found ",g," results for"),r.a.createElement(pe.a,{className:f.term,color:"primary"},'"',v,'"'))),r.a.createElement(je.a,{item:!0,xs:12,sm:3},r.a.createElement("div",{className:f.filterContainer},y&&y.length>0&&r.a.createElement(ae,{actions:{handleApplyFilters:function(){return S.apply(this,arguments)},handleresetFilters:function(){h.resetFilters()}}}))),r.a.createElement(je.a,{item:!0,xs:12,sm:9},r.a.createElement("div",{className:f.heroList},x.length>0&&x.map((function(e,a){return r.a.createElement(fe,{data:{id:e.id,name:e.name,image:e.image.url,powerstats:e.powerstats,handleOpenModal:j},key:V()})})))),r.a.createElement(je.a,{item:!0,xs:12},r.a.createElement(xe,{data:{isModalOpen:m},actions:{handleCloseModal:function(){p(!1)}}})))))}var Xe=Object(I.a)((function(e){return{"@global":{body:{margin:0},fontFamily:["Roboto","-apple - system","BlinkMacSystemFont","Segoe UI","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue","sans - serif"],"::selection":{backgroundColor:e.palette.primary.main,color:e.palette.primary[100]}},searchContainer:{marginBottom:50},heroList:{display:"flex",flexWrap:"wrap"},foundResults:{display:"flex",justifyContent:"space-between",marginBottom:8},term:{fontWeight:700},resultsFor:{marginRight:4},barLoader:{marginTop:100}}}));var Ye=function(){return r.a.createElement(u.a,{store:L},r.a.createElement(s.a,{theme:W},r.a.createElement(Se,null,r.a.createElement(l.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{component:Qe,path:"/",exact:!0}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(Ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[265,1,2]]]);
//# sourceMappingURL=main.bada06fe.chunk.js.map