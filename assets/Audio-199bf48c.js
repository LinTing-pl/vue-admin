import{d as S,r as m,c as B,a as r,T as E,o as I,p as k,b as q,_ as F}from"./index-efbc796d.js";const D=f=>(k("data-v-3fef2b03"),f=f(),q(),f),H={class:"content-container"},M={class:"opts"},P=D(()=>r("label",{for:"ipt"},[r("span",null,"上传")],-1)),U=S({__name:"Audio",setup(f){const p=m(),y=m();let v=!1,o=!1,i,u,s,a=99,h=!1;const d=["#33ccff","#ff99cc"];let _=d[0];const b=e=>{const t=e.target.files[0];if(t){const c=new FileReader;c.readAsDataURL(t),c.onload=function(l){var n;p.value.src=(n=l.target)==null?void 0:n.result}}},w=()=>{if(v){o=!0,g();return}i=y.value.getContext("2d");const e=new AudioContext,t=e.createMediaElementSource(p.value);s=e.createAnalyser(),s.fftSize=512,u=new Uint8Array(s.frequencyBinCount),t.connect(s),s.connect(e.destination),v=!0,o=!0,g()},g=()=>{if(!v||!o)return;requestAnimationFrame(g);const{width:e,height:t}=y.value;i.clearRect(0,0,e,t),s.getByteFrequencyData(u);const c=u.length/2.5,l=e/c/2;i.fillStyle=_+Math.ceil(a),h?(a=a+.5,a===99&&(h=!1)):(a=a-.5,a===50&&(h=!0,_===d[0]?_=d[1]:_=d[0]));for(let n=0;n<c;n++){const x=u[n]/255*t,C=n*l+e/2,R=e/2-(n+1)*l,A=t-x;i.fillRect(C,A,l-3,x),i.fillRect(R,A,l-3,x)}};return(e,t)=>(I(),B("div",H,[r("canvas",{ref_key:"cvs",ref:y},null,512),r("div",M,[P,r("audio",{ref_key:"audioEle",ref:p,src:"",controls:"",onPlay:w,onPause:t[0]||(t[0]=c=>E(o)?o.value=!1:o=!1)},null,544),r("input",{id:"ipt",type:"file",style:{display:"none"},onChange:b},null,32)])]))}});const N=F(U,[["__scopeId","data-v-3fef2b03"]]);export{N as default};
