import{i as b}from"./intro-0ca49f23.js";import{d as U,r as A,f as G,T as H,o as I,c as M,a as s,_ as O}from"./index-788e2208.js";const q=""+new URL("juwairen-3ec683e2.mp3",import.meta.url).href,F={class:"example-container"},T=["data-step","data-intro","data-position"],D={class:"opts"},L={for:"ipt"},P=["data-step","data-intro","data-position"],j=["data-step","data-intro","data-position"],z=U({__name:"Audioexample",setup(N){const p=A(),m=A();let h=!1,c=!1,l,f,i,n=99,y=!1,g;const u=["#33ccff","#ff99cc"];let _=u[0];const e={shifts:{step:"1",intro:"上传音频。",position:"top"},attendGroup:{step:"2",intro:"点击播放。",position:"top"},writeOff:{step:"3",intro:"实现音频可视化。",position:"bottom"}};G(()=>{localStorage.getItem("isShowHelp")==="1"&&(b.start(),b.onexit(function(){localStorage.setItem("isShowHelp","2")}))}),H(()=>{c=!1});const S=t=>{const o=t.target.files[0];if(o){const d=new FileReader;d.readAsDataURL(o),d.onload=function(r){var a;p.value.src=(a=r.target)==null?void 0:a.result}}},C=()=>{if(h){c=!0,clearTimeout(g),x();return}l=m.value.getContext("2d");const t=new AudioContext,o=t.createMediaElementSource(p.value);i=t.createAnalyser(),i.fftSize=512,f=new Uint8Array(i.frequencyBinCount),o.connect(i),i.connect(t.destination),h=!0,c=!0,x()},x=()=>{if(!h||!c)return;requestAnimationFrame(x);const{width:t,height:o}=m.value;l.clearRect(0,0,t,o),i.getByteFrequencyData(f);const d=f.length/2.5,r=t/d/2;l.fillStyle=_+Math.ceil(n),y?(n=n+.5,n===99&&(y=!1)):(n=n-.5,n===50&&(y=!0,_===u[0]?_=u[1]:_=u[0]));for(let a=0;a<d;a++){const v=f[a]/255*o,k=a*r+t/2,E=t/2-(a+1)*r,w=o-v;l.fillRect(k,w,r-3,v),l.fillRect(E,w,r-3,v)}},B=()=>{g=setTimeout(()=>{c=!1},2e3)},R=()=>{p.value.setAttribute("src",q)};return(t,o)=>(I(),M("div",F,[s("canvas",{ref_key:"cvs",ref:m,"data-step":e.writeOff.step,"data-intro":e.writeOff.intro,"data-position":e.writeOff.position,"data-disable-interaction":!0},null,8,T),s("div",D,[s("span",{class:"model",onClick:R},"样品"),s("label",L,[s("span",{class:"up","data-step":e.shifts.step,"data-intro":e.shifts.intro,"data-position":e.shifts.position,"data-disable-interaction":!0},"上传",8,P)]),s("audio",{ref_key:"audioEle",ref:p,src:"",controls:"",onPlay:C,onPause:B,"data-step":e.attendGroup.step,"data-intro":e.attendGroup.intro,"data-position":e.attendGroup.position,"data-disable-interaction":!0},null,40,j),s("input",{id:"ipt",type:"file",style:{display:"none"},onChange:S,accept:"audio/*,video/*"},null,32)])]))}});const K=O(z,[["__scopeId","data-v-ffb7511f"]]);export{K as default};
