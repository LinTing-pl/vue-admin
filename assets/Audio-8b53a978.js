import{i as x}from"./intro-0ca49f23.js";import{d as U,r as A,f as G,N as H,o as I,c as M,a as s,_ as O}from"./index-5f736cc7.js";const q=""+new URL("juwairen-3ec683e2.mp3",import.meta.url).href,F={class:"content-container"},D=["data-step","data-intro","data-position"],L={class:"opts"},N={for:"ipt"},P=["data-step","data-intro","data-position"],T=["data-step","data-intro","data-position"],j=U({__name:"Audio",setup(z){const p=A(),h=A();let m=!1,c=!1,l,u,i,n=99,y=!1,w;const f=["#33ccff","#ff99cc"];let _=f[0];const e={shifts:{step:"1",intro:"上传音频。",position:"top"},attendGroup:{step:"2",intro:"点击播放。",position:"top"},writeOff:{step:"3",intro:"实现音频可视化。",position:"bottom"}};G(()=>{localStorage.getItem("isShowHelp")==="1"&&(x.start(),x.onexit(function(){localStorage.setItem("isShowHelp","2")}))}),H(()=>{c=!1});const S=t=>{const o=t.target.files[0];if(o){const d=new FileReader;d.readAsDataURL(o),d.onload=function(r){var a;p.value.src=(a=r.target)==null?void 0:a.result}}},C=()=>{if(m){c=!0,clearTimeout(w),v();return}l=h.value.getContext("2d");const t=new AudioContext,o=t.createMediaElementSource(p.value);i=t.createAnalyser(),i.fftSize=512,u=new Uint8Array(i.frequencyBinCount),o.connect(i),i.connect(t.destination),m=!0,c=!0,v()},v=()=>{if(!m||!c)return;requestAnimationFrame(v);const{width:t,height:o}=h.value;l.clearRect(0,0,t,o),i.getByteFrequencyData(u);const d=u.length/2.5,r=t/d/2;l.fillStyle=_+Math.ceil(n),y?(n=n+.5,n===99&&(y=!1)):(n=n-.5,n===50&&(y=!0,_===f[0]?_=f[1]:_=f[0]));for(let a=0;a<d;a++){const g=u[a]/255*o,k=a*r+t/2,E=t/2-(a+1)*r,b=o-g;l.fillRect(k,b,r-3,g),l.fillRect(E,b,r-3,g)}},B=()=>{w=setTimeout(()=>{c=!1},2e3)},R=()=>{p.value.setAttribute("src",q)};return(t,o)=>(I(),M("div",F,[s("canvas",{ref_key:"cvs",ref:h,"data-step":e.writeOff.step,"data-intro":e.writeOff.intro,"data-position":e.writeOff.position,"data-disable-interaction":!0},null,8,D),s("div",L,[s("span",{class:"model",onClick:R},"样品"),s("label",N,[s("span",{class:"up","data-step":e.shifts.step,"data-intro":e.shifts.intro,"data-position":e.shifts.position,"data-disable-interaction":!0},"上传",8,P)]),s("audio",{ref_key:"audioEle",ref:p,src:"",controls:"",onPlay:C,onPause:B,"data-step":e.attendGroup.step,"data-intro":e.attendGroup.intro,"data-position":e.attendGroup.position,"data-disable-interaction":!0},null,40,T),s("input",{id:"ipt",type:"file",style:{display:"none"},onChange:S,accept:"audio/*,video/*"},null,32)])]))}});const K=O(j,[["__scopeId","data-v-9ebc8d54"]]);export{K as default};
