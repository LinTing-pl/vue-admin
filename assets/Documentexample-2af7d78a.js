import{l as C,d as B,r as c,o as l,c as d,a as e,t as f,b as m,w as N,h as E,F,x as j,p as q,e as V,_ as z}from"./index-788e2208.js";import"./iconfont-725833a1.js";const G=C("doc",{state:()=>({docList:[{id:6,title:"愿",content:`“愿你在二十岁的人生里听一个月的歌
看三个月的书睡四个月的觉
做四个月的梦怀揣着一辈子的梦想
依旧闪闪发光”`},{id:5,title:"祝福",content:"愿你一生努力 ，一生被爱 ，想要的都拥有 ，得不到的都释怀，只愿你被这世界温柔相待"},{id:4,title:"未来",content:"万千不舍，离别祝好，未来一帆风顺！"},{id:3,title:"祝",content:"祝，春生夏明朗，秋祺冬瑞康。"},{id:2,title:"希望",content:"希望你每天早晨起来，整个世界都是一份打开的、闪闪发光的巨大礼物。"},{id:1,title:"望",content:"所有人都祝你快乐，我只愿你历经山河觉得人间值得"}]}),actions:{add(t){t.id=this.docList[0].id+1,this.docList.unshift(t)},delete(t){let n=this.docList.findIndex(s=>s.id===t);console.log(n),this.docList.splice(n,1)},update(t){this.docList=t}},persist:!0}),g=t=>(q("data-v-70d34143"),t=t(),V(),t),H={class:"top"},J=g(()=>e("use",{"xlink:href":"#icon-jianqu"},null,-1)),K=[J],M=g(()=>e("use",{"xlink:href":"#icon-confirm-circle"},null,-1)),O=[M],P={class:"list"},Q={class:"top"},R=g(()=>e("use",{"xlink:href":"#icon-add"},null,-1)),U=[R],W={class:"down"},X=["onDragstart"],Y=B({__name:"Documentexample",setup(t){const n=c(),s=c(),v=c(),p=c(),_=G();let a;const r=c(_.docList);let o=c({id:null,title:"",content:""}),h;function D(i){i.preventDefault(),i.dataTransfer.dropEffect="move"}function L(i,x){n.value.classList.add("is-active"),s.value.style.display="inline",h=x,Array.from(i.target.parentNode.children).map(u=>{u.classList.remove("active")}),i.target.classList.add("active")}function k(){n.value.classList.remove("is-active"),n.value.classList.remove("is-active1"),s.value.innerText="拖放此处",s.value.style.display="none"}function y(){n.value.classList.add("is-active1"),s.value.innerText="松开鼠标"}function T(i){n.value.classList.remove("is-active1"),s.value.innerText="拖放此处"}function S(i){o.value=h,a=h.id,i.target.setAttribute("contenteditable",!0)}function b(){(v.value.innerText||p.value.innerText)&&(o.value.title=v.value.innerText,o.value.content=p.value.innerText,_.update(o))}function w(){a&&(_.delete(a),a=null,o.value={id:null,title:"",content:""},v.value.parentNode.removeAttribute("contenteditable"))}function I(){(r.value[0].content.length||r.value[0].title.length)&&(_.add({title:"",content:""}),a=r.value[0].id,o.value=r.value[0])}return(i,x)=>(l(),d("div",{class:"example-container",onDragover:D},[e("div",{class:"edit",ref_key:"edit",ref:n},[e("div",H,[(l(),d("svg",{class:"icon icon1","aria-hidden":"true",onClick:w},K)),(l(),d("svg",{class:"icon icon2","aria-hidden":"true",onClick:b},O))]),e("div",{class:"down",onDragenter:y,onDragleave:T,onDrop:S},[e("h2",{ref_key:"title",ref:v},f(m(o).title),513),e("div",{ref_key:"content",ref:p},f(m(o).content),513),N(e("span",{ref_key:"info",ref:s,class:"info"},"拖放此处",512),[[E,!m(a)]])],32)],512),e("div",P,[e("div",Q,[(l(),d("svg",{class:"icon icon3","aria-hidden":"true",onClick:I},U))]),e("div",W,[(l(!0),d(F,null,j(r.value,(u,Z)=>(l(),d("div",{class:"item",draggable:"true",onDragstart:A=>L(A,u),onDragend:k},[e("h3",null,f(u.title.replaceAll(" ","")),1),e("div",null,f(u.content),1)],40,X))),256))])])],32))}});const te=z(Y,[["__scopeId","data-v-70d34143"]]);export{te as default};
