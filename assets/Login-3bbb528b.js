import{d as g,r as m,u as b,o as v,c as h,a as e,w as i,v as c,b as p,i as r,g as x,E as y,p as L,e as w,_ as I}from"./index-5f736cc7.js";const u=l=>(L("data-v-b64660b2"),l=l(),w(),l),k={class:"layout"},C=u(()=>e("h1",null,"Welcome",-1)),S={class:"form"},B=u(()=>e("ul",{class:"bg-squares"},[e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li"),e("li")],-1)),E=g({__name:"Login",setup(l){const n=m(),d=b(),_=x().appContext.config.globalProperties;let s="admin",o="123456";function f(){d.login(s,o)?(n.value.classList.add("success"),setTimeout(()=>{_.$router.push("/")},1e3)):y.error("Oops, 账号或密码错误。")}return(M,a)=>(v(),h("div",k,[e("div",{class:"con",ref_key:"con",ref:n},[C,e("div",S,[i(e("input",{type:"text",placeholder:"您的账号","onUpdate:modelValue":a[0]||(a[0]=t=>r(s)?s.value=t:s=t)},null,512),[[c,p(s)]]),i(e("input",{type:"password",placeholder:"您的密码","onUpdate:modelValue":a[1]||(a[1]=t=>r(o)?o.value=t:o=t)},null,512),[[c,p(o)]]),e("button",{class:"btn-login",onClick:f},"登录")])],512),B]))}});const U=I(E,[["__scopeId","data-v-b64660b2"]]);export{U as default};
