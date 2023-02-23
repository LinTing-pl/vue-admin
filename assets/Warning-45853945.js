import"./iconfont-13f02ca0.js";import{d as u,Y as m,c as l,b as t,J as y,a as s,t as _,o as d,p as g,e as h,Z as b,_ as f,$ as C,r as p,f as x,l as $}from"./index-c0a1cd0f.js";const k=a=>(g("data-v-f1cc0dcc"),a=a(),h(),a),E=k(()=>s("svg",{class:"icon icon1","aria-hidden":"true"},[s("use",{"xlink:href":"#icon-weihuzhong"})],-1)),T=k(()=>s("use",{"xlink:href":"#icon-error"},null,-1)),w=[T],I={class:"info"},B=u({__name:"Error",props:["errorType","global","onClick"],setup(a){const o=a;let n=()=>{b.go(-1),o.onClick()},e="";switch(o.errorType){case"304":e="请求的网站未改变";break;case"404":e="服务器未找到";break;case"504":e="服务器请求超时";break;default:e=`${o.errorType}错误功能正在开发`}return m(()=>{switch(o.errorType){case"304":e="请求的网站未改变";break;case"404":e="服务器未找到";break;case"504":e="服务器请求超时";break;default:e=`${o.errorType}错误功能正在开发`}}),(i,r)=>(d(),l("div",null,[E,o.global?(d(),l("svg",{key:0,onClick:r[0]||(r[0]=(...c)=>t(n)&&t(n)(...c)),class:"icon icon2","aria-hidden":"true"},w)):y("",!0),s("span",I,_(t(e)),1)]))}});const v=f(B,[["__scopeId","data-v-f1cc0dcc"]]);function S(a,o){const n=document.createElement("div");n.setAttribute("id","error"),document.body.appendChild(n);const e=C(v,{errorType:a,global:o,onClick(){e.unmount(),n.remove()}});b.push("/error").then(()=>{e.mount(n)})}const D={class:"content-container"},N={class:"opts"},V=u({__name:"Warning",setup(a){let o=p("304"),n=p(),e=i=>{o.value=i.target.innerText};return x(()=>{n.value.click()}),(i,r)=>(d(),l("div",D,[s("div",N,[s("button",{ref_key:"btnDefault",ref:n,onClick:r[0]||(r[0]=(...c)=>t(e)&&t(e)(...c))},"304",512),s("button",{onClick:r[1]||(r[1]=(...c)=>t(e)&&t(e)(...c))},"404"),s("button",{onClick:r[2]||(r[2]=(...c)=>t(e)&&t(e)(...c))},"504"),s("button",{onClick:r[3]||(r[3]=c=>t(S)(t(o),!0))},"报"+_(t(o))+"错误",1)]),$(v,{"error-type":t(o)},null,8,["error-type"])]))}});const z=f(V,[["__scopeId","data-v-b79b14eb"]]);export{z as default};
