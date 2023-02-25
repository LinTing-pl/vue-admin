import{i as S}from"./intro-0ca49f23.js";import{d as b,o as s,c as k,a as n,F as I,p as V,e as M,_ as w,u as G,r as m,f as C,w as P,h as $,t as H,j as D,g as N,k as O,l as p,m as x,b as t,n as R,q as T,s as j,x as z,y as q,z as u,A,B as F,C as W,D as J,G as K,H as U,I as Q,J as X,K as Y,R as Z}from"./index-77364602.js";import"./iconfont-13f02ca0.js";import{u as B}from"./colorStore-823281ba.js";const ee=i=>(V("data-v-3060f496"),i=i(),M(),i),te=ee(()=>n("label",{for:"menu-ipt"},[n("span"),n("span"),n("span")],-1)),ae=b({__name:"MenuBtn",props:["handler"],setup(i){const l=i;return(d,c)=>(s(),k(I,null,[n("input",{ref:"menuBtn",type:"checkbox",id:"menu-ipt",onClick:c[0]||(c[0]=(...f)=>l.handler&&l.handler(...f)),style:{display:"none"},checked:""},null,512),te],64))}});const se=w(ae,[["__scopeId","data-v-3060f496"]]),ne=""+new URL("default-180288c7.jpeg",import.meta.url).href,oe=D('<svg class="icon" aria-hidden="true" data-v-5a3829b0><use xlink:href="#icon-search" data-v-5a3829b0></use></svg><svg class="icon" aria-hidden="true" data-v-5a3829b0><use xlink:href="#icon-alert" data-v-5a3829b0></use></svg><img src="'+ne+'" alt="" data-v-5a3829b0><span tabindex="0" data-v-5a3829b0>麟听 <svg class="icon" aria-hidden="true" data-v-5a3829b0><use xlink:href="#icon-sanjiao" data-v-5a3829b0></use></svg></span>',4),re=b({__name:"PageHeader",props:["header","isShow"],setup(i){var _;const l=i,d=(_=N())==null?void 0:_.appContext.config.globalProperties,c=B(),f=G(),h=m(null);C(()=>{c.pageHeaderE=h.value,c.changeColor("pageHeader","")});const g=()=>{f.exit(),d==null||d.$router.go(0)};return(v,o)=>(s(),k("div",{class:"pageH",ref_key:"pageH",ref:h},[P(n("span",{style:{color:"#545c64"}},H(l.header),513),[[$,l.isShow]]),n("div",{class:"right-top"},[oe,n("div",{class:"opts"},[n("div",{class:"opt",onClick:g},"退出登录")])])],512))}});const ie=w(re,[["__scopeId","data-v-5a3829b0"]]),le=O("index",{state:()=>({menuIndex:"/document"}),persist:{storage:window.sessionStorage}}),ce={class:"main-content"},ue=b({__name:"Layout",setup(i){const l=[{name:"文档",cls:"doc",router:"/document"},{name:"菜单",cls:"menu",router:"/menu"},{name:"设置",cls:"setting",router:"/setting"},{name:"地图",cls:"location",router:"/location"},{name:"音频可视化",cls:"audio",router:"/audio"},{name:"文件上传",cls:"upload",router:"/upload"},{name:"Warning",cls:"warning",router:"/warning"},{name:"作者",cls:"author",router:"/author"}],d=m(null),c=m(null),f=m(null);let h=m(l[0].name),g=m(!1);const _=le(),v=B(),o={shifts:{step:"1",intro:"可编辑记录文档。",position:"right"},attendGroup:{step:"2",intro:"可设置主题风格。",position:"right"},writeOff:{step:"3",intro:"上传音频后，可实现音频可视化。",position:"right"}};C(()=>{v.layoutE=f.value,v.changeColor("layout","");let r=document.querySelector(".el-menu");v.menuE=r,v.changeColor("menu",""),localStorage.getItem("isShowHelp")||(S.start(),S.onexit(function(){localStorage.setItem("isShowHelp","1")}))});const E=(r,y,a)=>{if(_.menuIndex!==r){let e="文档";switch(r){case"/document":e="文档";break;case"/menu":e="菜单";break;case"/setting":e="设置";break;case"/location":e="地图";break;case"/audio":e="音频可视化";break;case"/upload":e="文件上传";break;case"/warning":e="Warning";break;case"/author":e="作者";break}r&&(h.value=e),_.menuIndex=r}},L=r=>{let y=d.value,a=c.value;r.target.checked?(y.map(e=>{e.style.width="57px",setTimeout(()=>{e.style.visibility="visible"},200)}),a.style.fontSize="20px",g.value=!1):(y.map(e=>{e.style.width="0px",e.style.visibility="hidden",a.style.fontSize="16px"}),g.value=!0)};return(r,y)=>(s(),k("div",{class:"container",ref_key:"layout",ref:f},[p(t(R),{class:"tac"},{default:x(()=>[p(se,{handler:L}),p(t(T),{router:"","active-text-color":"#ffd04b","background-color":"#545c64",class:"el-menu-vertical-demo","default-active":t(_).menuIndex,"text-color":"#ffffff",onSelect:E},{default:x(()=>[n("span",{class:"nav",ref_key:"menuTitle",ref:c},"Admin",512),(s(),k(I,null,j(l,(a,e)=>p(t(z),{index:a.router,key:e},{default:x(()=>[p(t(q),null,{default:x(()=>[a.cls==="menu"?(s(),u(t(A),{key:0,"data-step":o.shifts.step,"data-intro":o.shifts.intro,"data-position":o.shifts.position,"data-disable-interaction":!0},null,8,["data-step","data-intro","data-position"])):a.cls==="setting"?(s(),u(t(F),{key:1,"data-step":o.attendGroup.step,"data-intro":o.attendGroup.intro,"data-position":o.attendGroup.position,"data-disable-interaction":!0},null,8,["data-step","data-intro","data-position"])):a.cls==="location"?(s(),u(t(W),{key:2})):a.cls==="audio"?(s(),u(t(J),{key:3,"data-step":o.writeOff.step,"data-intro":o.writeOff.intro,"data-position":o.writeOff.position,"data-disable-interaction":!0},null,8,["data-step","data-intro","data-position"])):a.cls==="upload"?(s(),u(t(K),{key:4})):a.cls==="warning"?(s(),u(t(U),{key:5})):a.cls==="author"?(s(),u(t(Q),{key:6})):a.cls==="doc"?(s(),u(t(X),{key:7})):Y("",!0)]),_:2},1024),n("span",{ref_for:!0,ref_key:"span",ref:d},H(a.name),513)]),_:2},1032,["index"])),64))]),_:1},8,["default-active"])]),_:1}),n("div",ce,[p(ie,{header:t(h),"is-show":t(g)},null,8,["header","is-show"]),p(t(Z))])],512))}});const me=w(ue,[["__scopeId","data-v-c76777df"]]);export{me as default};
