import{d as N,r as V,o as r,c as d,l as e,m as a,L as u,F as T,s as W,M as t,b as s,N as F,O as P,P as U,Q as B,S as D,T as E,U as z,V as k,a as y,K as A,W as K,X as O,Y as g,p as Q,e as R,_ as X}from"./index-fe8709b6.js";const Y=_=>(Q("data-v-fa47034c"),_=_(),R(),_),$={class:"content-container"},j={key:0,class:"display"},q=Y(()=>y("div",{class:"custom-loading"},[y("svg",{class:"circular",viewBox:"-10, -10, 50, 50"},[y("path",{class:"path",d:`\r
                            M 30 15\r
                            L 28 17\r
                            M 25.61 25.61\r
                            A 15 15, 0, 0, 1, 15 30\r
                            A 15 15, 0, 1, 1, 27.99 7.5\r
                            L 15 15\r
                          `,style:{"stroke-width":"4px",fill:"rgba(0, 0, 0, 0)"}})])],-1)),G={key:1,class:"display"},H={key:2,class:"display display3"},J={key:3,class:"display"},Z={class:"demo-progress"},ee=N({__name:"Menu",setup(_){const i=V(4),h=V(2),w=[k,K,O],x=()=>{g({title:"Success",message:"This is a success message",type:"success"})},I=()=>{g({title:"Warning",message:"This is a warning message",type:"warning"})},S=()=>{g({title:"Info",message:"This is an info message",type:"info"})},C=()=>{g({title:"Error",message:"This is an error message",type:"error"})},b=v=>v===100?"Full":`${v}%`;return(v,l)=>{const n=u("el-button"),f=u("el-row"),m=u("el-rate"),c=u("el-progress"),L=u("el-carousel-item"),M=u("el-carousel");return r(),d("div",$,[e(M,{"indicator-position":"outside",height:"90%"},{default:a(()=>[(r(),d(T,null,W(4,p=>e(L,{key:p},{default:a(()=>[p===1?(r(),d("div",j,[e(f,{class:"mb-4"},{default:a(()=>[e(n,null,{default:a(()=>[t("Default")]),_:1}),e(n,{type:"primary"},{default:a(()=>[t("Primary")]),_:1}),e(n,{type:"success"},{default:a(()=>[t("Success")]),_:1}),e(n,{type:"info"},{default:a(()=>[t("Info")]),_:1}),e(n,{type:"warning"},{default:a(()=>[t("Warning")]),_:1}),e(n,{type:"danger"},{default:a(()=>[t("Danger")]),_:1})]),_:1}),e(f,{class:"mb-4"},{default:a(()=>[e(n,{plain:""},{default:a(()=>[t("Plain")]),_:1}),e(n,{type:"primary",plain:""},{default:a(()=>[t("Primary")]),_:1}),e(n,{type:"success",plain:""},{default:a(()=>[t("Success")]),_:1}),e(n,{type:"info",plain:""},{default:a(()=>[t("Info")]),_:1}),e(n,{type:"warning",plain:""},{default:a(()=>[t("Warning")]),_:1}),e(n,{type:"danger",plain:""},{default:a(()=>[t("Danger")]),_:1})]),_:1}),e(f,{class:"mb-4"},{default:a(()=>[e(n,{round:""},{default:a(()=>[t("Round")]),_:1}),e(n,{type:"primary",round:""},{default:a(()=>[t("Primary")]),_:1}),e(n,{type:"success",round:""},{default:a(()=>[t("Success")]),_:1}),e(n,{type:"info",round:""},{default:a(()=>[t("Info")]),_:1}),e(n,{type:"warning",round:""},{default:a(()=>[t("Warning")]),_:1}),e(n,{type:"danger",round:""},{default:a(()=>[t("Danger")]),_:1})]),_:1}),e(f,null,{default:a(()=>[e(n,{icon:s(F),circle:""},null,8,["icon"]),e(n,{type:"primary",icon:s(P),circle:""},null,8,["icon"]),e(n,{type:"success",icon:s(U),circle:""},null,8,["icon"]),e(n,{type:"info",icon:s(B),circle:""},null,8,["icon"]),e(n,{type:"warning",icon:s(D),circle:""},null,8,["icon"]),e(n,{type:"danger",icon:s(E),circle:""},null,8,["icon"]),e(n,{type:"primary",loading:""},{default:a(()=>[t("Loading")]),_:1}),e(n,{type:"primary","loading-icon":s(z),loading:""},{default:a(()=>[t("Loading")]),_:1},8,["loading-icon"]),e(n,{type:"primary",loading:""},{loading:a(()=>[q]),default:a(()=>[t(" Loading ")]),_:1})]),_:1})])):p===2?(r(),d("div",G,[e(m,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=o=>i.value=o),size:"large"},null,8,["modelValue"]),e(m,{modelValue:i.value,"onUpdate:modelValue":l[1]||(l[1]=o=>i.value=o)},null,8,["modelValue"]),e(m,{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=o=>i.value=o),size:"small"},null,8,["modelValue"]),e(m,{modelValue:h.value,"onUpdate:modelValue":l[3]||(l[3]=o=>h.value=o),icons:w,"void-icon":s(k),colors:["#409eff","#67c23a","#FF9900"]},null,8,["modelValue","void-icon"])])):p===3?(r(),d("div",H,[e(n,{plain:"",onClick:x},{default:a(()=>[t(" Success ")]),_:1}),e(n,{plain:"",onClick:I},{default:a(()=>[t(" Warning ")]),_:1}),e(n,{plain:"",onClick:S},{default:a(()=>[t(" Info ")]),_:1}),e(n,{plain:"",onClick:C},{default:a(()=>[t(" Error ")]),_:1})])):p===4?(r(),d("div",J,[y("div",Z,[e(c,{percentage:50,indeterminate:!0}),e(c,{percentage:100,format:b,indeterminate:!0}),e(c,{percentage:100,status:"success",indeterminate:!0,duration:5}),e(c,{percentage:100,status:"warning",indeterminate:!0,duration:1}),e(c,{percentage:50,status:"exception",indeterminate:!0})])])):A("",!0)]),_:2},1024)),64))]),_:1})])}}});const ne=X(ee,[["__scopeId","data-v-fa47034c"]]);export{ne as default};
