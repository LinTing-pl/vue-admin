import"./iconfont-13f02ca0.js";import{k as B,d as E,r as c,o as a,c as l,a as e,t as v,b as x,F,s as N,p as j,e as q,_ as V}from"./index-fe8709b6.js";const z=B("doc",{state:()=>({docList:[{id:6,title:"愿",content:`“愿你在二十岁的人生里听一个月的歌
看三个月的书睡四个月的觉
做四个月的梦怀揣着一辈子的梦想
依旧闪闪发光”`},{id:5,title:"祝福",content:"愿你一生努力 ，一生被爱 ，想要的都拥有 ，得不到的都释怀，只愿你被这世界温柔相待"},{id:4,title:"未来",content:"万千不舍，离别祝好，未来一帆风顺！"},{id:3,title:"祝",content:"祝，春生夏明朗，秋祺冬瑞康。"},{id:2,title:"希望",content:"希望你每天早晨起来，整个世界都是一份打开的、闪闪发光的巨大礼物。"},{id:1,title:"望",content:"所有人都祝你快乐，我只愿你历经山河觉得人间值得"}]}),actions:{add(t){t.id=this.docList[0].id+1,this.docList.unshift(t)},delete(t){let n=this.docList.findIndex(s=>s.id===t);console.log(n),this.docList.splice(n,1)},update(t){this.docList=t}},persist:!0}),h=t=>(j("data-v-33dc9c21"),t=t(),q(),t),G={class:"top"},H=h(()=>e("use",{"xlink:href":"#icon-jianqu"},null,-1)),J=[H],K=h(()=>e("use",{"xlink:href":"#icon-confirm-circle"},null,-1)),M=[K],O={class:"list"},P={class:"top"},Q=h(()=>e("use",{"xlink:href":"#icon-add"},null,-1)),R=[Q],U={class:"down"},W=["onDragstart"],X=E({__name:"Document",setup(t){const n=c(),s=c(),_=c(),f=c(),r=z();let u;const L=c(r.docList);let o=c({id:null,title:"",content:""}),p,g=!1;function D(i){i.preventDefault(),i.dataTransfer.dropEffect="move"}function k(i,m){n.value.classList.add("is-active"),s.value.style.display="inline",p=m,Array.from(i.target.parentNode.children).map(d=>{d.classList.remove("active")}),i.target.classList.add("active")}function y(){n.value.classList.remove("is-active"),n.value.classList.remove("is-active1"),s.value.innerText="拖放此处",s.value.style.display="none"}function T(){n.value.classList.add("is-active1"),s.value.innerText="松开鼠标"}function S(i){n.value.classList.remove("is-active1"),s.value.innerText="拖放此处"}function I(i){o.value=p,u=p.id,g||(i.target.setAttribute("contenteditable",!0),g=!0)}function b(){(_.value.innerText||f.value.innerText)&&(o.value.title=_.value.innerText,o.value.content=f.value.innerText,r.update(o))}function C(){u&&(r.delete(u),u=null,o.value={id:null,title:"",content:""})}function w(){r.add({title:"",content:""})}return(i,m)=>(a(),l("div",{class:"content-container",onDragover:D},[e("div",{class:"edit",ref_key:"edit",ref:n},[e("div",G,[(a(),l("svg",{class:"icon icon1","aria-hidden":"true",onClick:C},J)),(a(),l("svg",{class:"icon icon2","aria-hidden":"true",onClick:b},M))]),e("div",{class:"down",onDragenter:T,onDragleave:S,onDrop:I},[e("h2",{ref_key:"title",ref:_},v(x(o).title),513),e("div",{ref_key:"content",ref:f},v(x(o).content),513),e("span",{ref_key:"info",ref:s,class:"info"},"拖放此处",512)],32)],512),e("div",O,[e("div",P,[(a(),l("svg",{class:"icon icon3","aria-hidden":"true",onClick:w},R))]),e("div",U,[(a(!0),l(F,null,N(L.value,(d,Y)=>(a(),l("div",{class:"item",draggable:"true",onDragstart:A=>k(A,d),onDragend:y},[e("h3",null,v(d.title.replaceAll(" ","")),1),e("div",null,v(d.content),1)],40,W))),256))])])],32))}});const ee=V(X,[["__scopeId","data-v-33dc9c21"]]);export{ee as default};
