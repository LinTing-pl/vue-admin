import{d as z,r as s,f as D,o as G,c as J,a as e,k as K,p as O,e as Q,_ as W}from"./index-19f7155c.js";const Y=""+new URL("红模仿-34e4e2a4.jfif",import.meta.url).href,Z=""+new URL("感官先生-eba16791.jfif",import.meta.url).href,$=""+new URL("夜曲-6e2962fd.jfif",import.meta.url).href,ee=""+new URL("我的名字-7225197c.jfif",import.meta.url).href,te=""+new URL("本草纲目-dcbd6937.jfif",import.meta.url).href,ae=""+new URL("红模仿-e95f0d96.mp3",import.meta.url).href,se=""+new URL("感官先生-780d0cd6.mp3",import.meta.url).href,le=""+new URL("夜曲-b408eea7.mp3",import.meta.url).href,ie=""+new URL("我的名字-b45b8c2f.mp3",import.meta.url).href,re=""+new URL("本草纲目-606bb46b.mp3",import.meta.url).href,N=y=>(O("data-v-39c3ae8c"),y=y(),Q(),y),ce={class:"container"},oe={class:"player"},ne={class:"track-time"},ue={class:"player-content"},_e=K('<img src="'+Y+'" alt="" class="active" data-v-39c3ae8c><img src="'+Z+'" alt="" data-v-39c3ae8c><img src="'+$+'" alt="" data-v-39c3ae8c><img src="'+ee+'" alt="" data-v-39c3ae8c><img src="'+te+'" alt="" data-v-39c3ae8c>',5),ve=[_e],de={class:"play-controls"},fe={class:"control"},pe=N(()=>e("span",{class:"iconfont icon-step-backward"},null,-1)),me=[pe],ye={class:"control"},he=N(()=>e("span",{class:"iconfont icon-playfill"},null,-1)),be=[he],ke={class:"control"},Le=N(()=>e("span",{class:"iconfont icon-step-forward"},null,-1)),xe=[Le],ge=z({__name:"MusicPlayer",setup(y){let n=s(),_=s(),o=s(),R=s(),E=s(),M=s(),v=s(),h=s(),u=s(),r=s(),g=s(),d=s(),S=s(),U=s(),a=new Audio,b=["红模仿","感官先生","夜曲","我的名字","本草纲目"],j=[ae,se,le,ie,re],C=["周杰伦 - 红模仿","刘凤瑶 - 感官先生","周杰伦 - 夜曲","焦麦奇 - 我的名字","周杰伦 - 本草纲目"],f,k,B,l,c,p,L,m,x,w,t=-1;function I(){T(0),n.value.addEventListener("click",A),u.value.addEventListener("mousemove",function(i){H(i)}),u.value.addEventListener("mouseout",q),u.value.addEventListener("click",V),a.addEventListener("timeupdate",F),S.value.addEventListener("click",function(){T(-1)}),U.value.addEventListener("click",function(){T(1)})}function A(){setTimeout(()=>{a.paused?(_.value.classList.add("active"),n.value.querySelector(".iconfont").classList="iconfont icon-pause",o.value.classList.add("active"),a.play()):(_.value.classList.remove("active"),n.value.querySelector(".iconfont").classList="iconfont icon-playfill",o.value.classList.remove("active"),a.pause())},300)}function H(i){f=i.clientX-u.value.getBoundingClientRect().left,k=a.duration*(f/u.value.getBoundingClientRect().width),g.value.style.width=f+"px",B=k/60,l=Math.floor(B),c=Math.floor(k-l*60),l<10&&(l="0"+l),c<10&&(c="0"+c),isNaN(l)||isNaN(c)?r.value.innerText="--:--":r.value.innerText=l+":"+c,r.value.style.left=f+"px",r.value.style.marginLeft="-20px",r.value.style.display="block"}function q(){g.value.style.width="0px",r.value.innerText="00:00",r.value.style.left="0px",r.value.style.marginLeft="0px",r.value.style.display="none"}function V(){a.currentTime=k,d.value.style.width=f+"px",q()}function F(){p=Math.floor(a.currentTime/60),L=Math.floor(a.currentTime-p*60),m=Math.floor(a.duration/60),x=Math.floor(a.duration-m*60),w=a.currentTime/a.duration*100,p<10&&(l="0"+l),L<10&&(c="0"+c),m<10&&(l="0"+l),x<10&&(c="0"+c),isNaN(p)||isNaN(L)?v.value.innerText="00:00":v.value.innerText=p+":"+L,isNaN(m)||isNaN(x)?h.value.innerText="00:00":h.value.innerText=m+":"+x,d.value.style.width=w+"%",w==100&&(n.value.querySelector(".iconfont").classList="iconfont icon-playfill",d.value.style.width="0px",v.value.innerText="00:00",_.value.classList.remove("active"),o.value.classList.remove("active"))}function T(i){if(i==0||i==1?(++t,t>=b.length&&(t=0)):(--t,t<0&&(t=b.length-1)),t>-1&&t<b.length){i==0?n.value.querySelector(".iconfont").classList="iconfont icon-playfill":n.value.querySelector(".iconfont").classList="iconfont icon-pause",d.value.style.width="0px",v.value.innerText="00:00",h.value.innerText="00:00";let P=b[t],X=C[t];a.src=j[t],i!=0&&(a.play(),_.value.classList.add("active"),o.value.classList.add("active")),E.value.innerText=P,M.value.innerText=X,o.value.querySelector(".active").classList.remove("active"),o.value.getElementsByTagName("img")[t].classList.add("active"),R.value.style.backgroundImage="url("+o.value.getElementsByTagName("img")[t].getAttribute("src")+")"}else i==0||i==1?--t:++t}return D(()=>{I()}),(i,P)=>(G(),J("div",ce,[e("div",{ref_key:"bg",ref:R,class:"bg"},null,512),e("div",oe,[e("div",{ref_key:"player_track",ref:_,class:"player-track"},[e("div",{ref_key:"album_name",ref:E,class:"album-name"},"红模仿",512),e("div",{ref_key:"track_name",ref:M,class:"track-name"},"周杰伦 - 红模仿",512),e("div",ne,[e("div",{ref_key:"current_time",ref:v,class:"current-time"},"00:00",512),e("div",{ref_key:"total_time",ref:h,class:"total-time"},"03:50",512)]),e("div",{ref_key:"progress_box",ref:u,class:"progress-box"},[e("div",{ref_key:"hover_time",ref:r,class:"hover-time"},"00:36",512),e("div",{ref_key:"hover_bar",ref:g,class:"hover-bar"},null,512),e("div",{ref_key:"progress_bar",ref:d,class:"progress-bar"},null,512)],512)],512),e("div",ue,[e("div",{ref_key:"album_cover",ref:o,class:"album-cover"},ve,512),e("div",de,[e("div",fe,[e("div",{ref_key:"play_prev",ref:S,class:"button play-prev"},me,512)]),e("div",ye,[e("div",{ref_key:"play_pause",ref:n,class:"button play-pause"},be,512)]),e("div",ke,[e("div",{ref_key:"play_next",ref:U,class:"button play-next"},xe,512)])])])])]))}});const Te=W(ge,[["__scopeId","data-v-39c3ae8c"]]);export{Te as default};
