import"./iconfont-13f02ca0.js";import{g as B,d as E,r as o,c as a,a as x,t as u,u as m,F,k as N,o as c,p as j,b as q,_ as V}from"./index-3dab8d0e.js";const z=B("doc",{state:()=>({docList:[{id:6,title:"no.1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",content:"第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx第一个xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"},{id:5,title:"no.2",content:"第二个"},{id:4,title:"no.3",content:"第三个"},{id:3,title:"no.1",content:"第一个"},{id:2,title:"no.2",content:"第二个"},{id:1,title:"no.3",content:"第三个"}]}),actions:{add(e){e.id=this.docList[0].id+1,this.docList.unshift(e)},delete(e){let t=this.docList.findIndex(i=>i.id===e);console.log(t),this.docList.splice(t,1)},update(e){this.docList=e}},persist:!0}),p=e=>(j("data-v-d4cfd93e"),e=e(),q(),e),G={class:"top"},H=p(()=>x("use",{"xlink:href":"#icon-jianqu"},null,-1)),J=[H],K=p(()=>x("use",{"xlink:href":"#icon-confirm-circle"},null,-1)),M=[K],O={class:"list"},P={class:"top"},Q=p(()=>x("use",{"xlink:href":"#icon-add"},null,-1)),R=[Q],U={class:"down"},W=["onDragstart"],X=E({__name:"Document",setup(e){const t=o(),i=o(),v=o(),_=o(),d=z();let r;const L=o(d.docList);let s=o({id:null,title:"",content:""}),f,h=!1;function D(n){n.preventDefault(),n.dataTransfer.dropEffect="move"}function k(n,g){t.value.classList.add("is-active"),i.value.style.display="inline",f=g,Array.from(n.target.parentNode.children).map(l=>{l.classList.remove("active")}),n.target.classList.add("active")}function y(){t.value.classList.remove("is-active"),t.value.classList.remove("is-active1"),i.value.innerText="拖放此处",i.value.style.display="none"}function T(){t.value.classList.add("is-active1"),i.value.innerText="松开鼠标"}function S(n){t.value.classList.remove("is-active1"),i.value.innerText="拖放此处"}function I(n){s.value=f,r=f.id,h||(n.target.setAttribute("contenteditable",!0),h=!0)}function b(){(v.value.innerText||_.value.innerText)&&(s.value.title=v.value.innerText,s.value.content=_.value.innerText,d.update(s))}function C(){r&&(d.delete(r),r=null,s.value={id:null,title:"",content:""})}function w(){d.add({title:"",content:""})}return(n,g)=>(c(),a("div",{class:"content-container",onDragover:D},[x("div",{class:"edit",ref_key:"edit",ref:t},[x("div",G,[(c(),a("svg",{class:"icon icon1","aria-hidden":"true",onClick:C},J)),(c(),a("svg",{class:"icon icon2","aria-hidden":"true",onClick:b},M))]),x("div",{class:"down",onDragenter:T,onDragleave:S,onDrop:I},[x("h2",{ref_key:"title",ref:v},u(m(s).title),513),x("div",{ref_key:"content",ref:_},u(m(s).content),513),x("span",{ref_key:"info",ref:i,class:"info"},"拖放此处",512)],32)],512),x("div",O,[x("div",P,[(c(),a("svg",{class:"icon icon3","aria-hidden":"true",onClick:w},R))]),x("div",U,[(c(!0),a(F,null,N(L.value,(l,Y)=>(c(),a("div",{class:"item",draggable:"true",onDragstart:A=>k(A,l),onDragend:y},[x("h3",null,u(l.title.replaceAll(" ","")),1),x("div",null,u(l.content),1)],40,W))),256))])])],32))}});const xx=V(X,[["__scopeId","data-v-d4cfd93e"]]);export{xx as default};
