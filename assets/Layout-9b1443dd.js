import{i as b}from"./intro-0ca49f23.js";import{d as w,o as n,c as y,a as s,F as I,p as C,e as H,_ as S,u as M,r as h,f as B,w as V,h as P,t as $,j as p,k as D,g as N,l as O,m as k,b as t,n as R,q as T,s as j,x as z,y as q,z as c,A,B as F,C as W,D as J,G as K,H as U,I as Q,J as X,K as Y,L as Z,M as ee,R as te}from"./index-35a41995.js";import"./iconfont-725833a1.js";import{u as E}from"./colorStore-c0dc436c.js";const ae=o=>(C("data-v-1941903f"),o=o(),H(),o),se=ae(()=>s("label",{for:"menu-ipt"},[s("span"),s("span"),s("span")],-1)),ne=w({__name:"MenuBtn",props:["handler"],setup(o){const l=o;return(d,u)=>(n(),y(I,null,[s("input",{ref:"menuBtn",type:"checkbox",id:"menu-ipt",onClick:u[0]||(u[0]=(..._)=>l.handler&&l.handler(..._)),style:{display:"none"},checked:""},null,512),se],64))}});const oe=S(ne,[["__scopeId","data-v-1941903f"]]),re=""+new URL("default-180288c7.jpeg",import.meta.url).href,ce=o=>(C("data-v-99e69da2"),o=o(),H(),o),le={class:"search-container"},ie=ce(()=>s("div",{class:"search-box"},[s("input",{type:"text",class:"search-txt",placeholder:"想搜啥？"}),s("a",{class:"search-btn"},[s("span",{class:"iconfont icon-search"})])],-1)),de=[ie],ue=w({__name:"Search",setup(o){return(l,d)=>(n(),y("div",le,de))}});const pe=S(ue,[["__scopeId","data-v-99e69da2"]]),_e={class:"right-top"},fe=D('<svg class="icon" aria-hidden="true" data-v-c122f63e><use xlink:href="#icon-alert" data-v-c122f63e></use></svg><img src="'+re+'" alt="" data-v-c122f63e><span tabindex="0" data-v-c122f63e>麟听 <svg class="icon" aria-hidden="true" data-v-c122f63e><use xlink:href="#icon-sanjiao" data-v-c122f63e></use></svg></span>',3),he=w({__name:"PageHeader",props:["header","isShow"],setup(o){var f;const l=o,d=(f=N())==null?void 0:f.appContext.config.globalProperties,u=E(),_=M(),m=h(null);B(()=>{u.pageHeaderE=m.value,u.changeColor("pageHeader","")});const g=()=>{_.exit(),d==null||d.$router.go(0)};return(v,r)=>(n(),y("div",{class:"pageH",ref_key:"pageH",ref:m},[V(s("span",{style:{color:"#545c64"}},$(l.header),513),[[P,l.isShow]]),s("div",_e,[p(pe,{class:"svg"}),fe,s("div",{class:"opts"},[s("div",{class:"opt",onClick:g},"退出登录")])])],512))}});const me=S(he,[["__scopeId","data-v-c122f63e"]]),ge=O("index",{state:()=>({menuIndex:"/document"}),persist:{storage:window.sessionStorage}}),ve={class:"main-content"},ye=w({__name:"Layout",setup(o){const l=[{name:"文档",cls:"doc",router:"/document"},{name:"菜单",cls:"menu",router:"/menu"},{name:"设置",cls:"setting",router:"/setting"},{name:"地图",cls:"location",router:"/location"},{name:"音频可视化",cls:"audio",router:"/audio"},{name:"文件上传",cls:"upload",router:"/upload"},{name:"数据可视化",cls:"dv",router:"/dv"},{name:"Games",cls:"games",router:"/games"},{name:"Warning",cls:"warning",router:"/warning"},{name:"作者",cls:"author",router:"/author"}],d=h(null),u=h(null),_=h(null);let m=h(l[0].name),g=h(!1);const f=ge(),v=E(),r={shifts:{step:"1",intro:"可编辑记录文档。",position:"right"},attendGroup:{step:"2",intro:"可设置主题风格。",position:"right"},writeOff:{step:"3",intro:"上传音频后，可实现音频可视化。",position:"right"}};B(()=>{v.layoutE=_.value,v.changeColor("layout","");let i=document.querySelector(".el-menu");v.menuE=i,v.changeColor("menu",""),localStorage.getItem("isShowHelp")||(b.start(),b.onexit(function(){localStorage.setItem("isShowHelp","1")}))});const L=(i,x,a)=>{if(f.menuIndex!==i){let e="文档";switch(i){case"/document":e="文档";break;case"/menu":e="菜单";break;case"/setting":e="设置";break;case"/location":e="地图";break;case"/audio":e="音频可视化";break;case"/upload":e="文件上传";break;case"/dv":e="数据可视化";break;case"/games":e="Games";break;case"/warning":e="Warning";break;case"/author":e="作者";break}i&&(m.value=e),f.menuIndex=i}},G=i=>{let x=d.value,a=u.value;i.target.checked?(x.map(e=>{e.style.width="57px",setTimeout(()=>{e.style.visibility="visible"},200)}),a.style.fontSize="20px",g.value=!1):(x.map(e=>{e.style.width="0px",e.style.visibility="hidden",a.style.fontSize="16px"}),g.value=!0)};return(i,x)=>(n(),y("div",{class:"container",ref_key:"layout",ref:_},[p(t(R),{class:"tac"},{default:k(()=>[p(oe,{handler:G}),p(t(T),{router:"","active-text-color":"#ffd04b","background-color":"#545c64",class:"el-menu-vertical-demo","default-active":t(f).menuIndex,"text-color":"#ffffff",onSelect:L},{default:k(()=>[s("span",{class:"nav",ref_key:"menuTitle",ref:u},"Admin",512),(n(),y(I,null,j(l,(a,e)=>p(t(z),{index:a.router,key:e},{default:k(()=>[p(t(q),null,{default:k(()=>[a.cls==="menu"?(n(),c(t(A),{key:0,"data-step":r.shifts.step,"data-intro":r.shifts.intro,"data-position":r.shifts.position,"data-disable-interaction":!0},null,8,["data-step","data-intro","data-position"])):a.cls==="setting"?(n(),c(t(F),{key:1,"data-step":r.attendGroup.step,"data-intro":r.attendGroup.intro,"data-position":r.attendGroup.position,"data-disable-interaction":!0},null,8,["data-step","data-intro","data-position"])):a.cls==="location"?(n(),c(t(W),{key:2})):a.cls==="audio"?(n(),c(t(J),{key:3,"data-step":r.writeOff.step,"data-intro":r.writeOff.intro,"data-position":r.writeOff.position,"data-disable-interaction":!0},null,8,["data-step","data-intro","data-position"])):a.cls==="upload"?(n(),c(t(K),{key:4})):a.cls==="dv"?(n(),c(t(U),{key:5})):a.cls==="games"?(n(),c(t(Q),{key:6})):a.cls==="warning"?(n(),c(t(X),{key:7})):a.cls==="author"?(n(),c(t(Y),{key:8})):a.cls==="doc"?(n(),c(t(Z),{key:9})):ee("",!0)]),_:2},1024),s("span",{ref_for:!0,ref_key:"span",ref:d},$(a.name),513)]),_:2},1032,["index"])),64))]),_:1},8,["default-active"])]),_:1}),s("div",ve,[p(me,{header:t(m),"is-show":t(g)},null,8,["header","is-show"]),p(t(te))])],512))}});const be=S(ye,[["__scopeId","data-v-069d6a8c"]]);export{be as default};
