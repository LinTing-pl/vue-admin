import{d as j,r as c,f as P,o as b,c as g,a as e,k as q,p as H,e as A,_ as y,P as ce,b as f,j as k}from"./index-383570c7.js";import"./iconfont-725833a1.js";const le=""+new URL("红模仿-34e4e2a4.jfif",import.meta.url).href,oe=""+new URL("感官先生-eba16791.jfif",import.meta.url).href,re=""+new URL("夜曲-6e2962fd.jfif",import.meta.url).href,de=""+new URL("我的名字-7225197c.jfif",import.meta.url).href,_e=""+new URL("本草纲目-dcbd6937.jfif",import.meta.url).href,ve=""+new URL("红模仿-e95f0d96.mp3",import.meta.url).href,ue=""+new URL("感官先生-780d0cd6.mp3",import.meta.url).href,fe=""+new URL("夜曲-b408eea7.mp3",import.meta.url).href,pe=""+new URL("我的名字-b45b8c2f.mp3",import.meta.url).href,me=""+new URL("本草纲目-606bb46b.mp3",import.meta.url).href,V=n=>(H("data-v-39c3ae8c"),n=n(),A(),n),he={class:"container"},be={class:"player"},ge={class:"track-time"},ye={class:"player-content"},xe=q('<img src="'+le+'" alt="" class="active" data-v-39c3ae8c><img src="'+oe+'" alt="" data-v-39c3ae8c><img src="'+re+'" alt="" data-v-39c3ae8c><img src="'+de+'" alt="" data-v-39c3ae8c><img src="'+_e+'" alt="" data-v-39c3ae8c>',5),ke=[xe],$e={class:"play-controls"},Le={class:"control"},we=V(()=>e("span",{class:"iconfont icon-step-backward"},null,-1)),Ne=[we],Te={class:"control"},je=V(()=>e("span",{class:"iconfont icon-playfill"},null,-1)),Ue=[je],Ie={class:"control"},Re=V(()=>e("span",{class:"iconfont icon-step-forward"},null,-1)),Me=[Re],Ee=j({__name:"MusicPlayer",setup(n){let s=c(),t=c(),i=c(),r=c(),h=c(),d=c(),m=c(),x=c(),p=c(),a=c(),U=c(),L=c(),F=c(),X=c(),o=new Audio,I=["红模仿","感官先生","夜曲","我的名字","本草纲目"],Y=[ve,ue,fe,pe,me],Z=["周杰伦 - 红模仿","刘凤瑶 - 感官先生","周杰伦 - 夜曲","焦麦奇 - 我的名字","周杰伦 - 本草纲目"],w,R,z,_,u,N,M,T,E,S,l=-1;function ee(){B(0),s.value.addEventListener("click",ae),p.value.addEventListener("mousemove",function(v){te(v)}),p.value.addEventListener("mouseout",D),p.value.addEventListener("click",se),o.addEventListener("timeupdate",ie),F.value.addEventListener("click",function(){B(-1)}),X.value.addEventListener("click",function(){B(1)})}function ae(){setTimeout(()=>{o.paused?(t.value.classList.add("active"),s.value.querySelector(".iconfont").classList="iconfont icon-pause",i.value.classList.add("active"),o.play()):(t.value.classList.remove("active"),s.value.querySelector(".iconfont").classList="iconfont icon-playfill",i.value.classList.remove("active"),o.pause())},300)}function te(v){w=v.clientX-p.value.getBoundingClientRect().left,R=o.duration*(w/p.value.getBoundingClientRect().width),U.value.style.width=w+"px",z=R/60,_=Math.floor(z),u=Math.floor(R-_*60),_<10&&(_="0"+_),u<10&&(u="0"+u),isNaN(_)||isNaN(u)?a.value.innerText="--:--":a.value.innerText=_+":"+u,a.value.style.left=w+"px",a.value.style.marginLeft="-20px",a.value.style.display="block"}function D(){U.value.style.width="0px",a.value.innerText="00:00",a.value.style.left="0px",a.value.style.marginLeft="0px",a.value.style.display="none"}function se(){o.currentTime=R,L.value.style.width=w+"px",D()}function ie(){N=Math.floor(o.currentTime/60),M=Math.floor(o.currentTime-N*60),T=Math.floor(o.duration/60),E=Math.floor(o.duration-T*60),S=o.currentTime/o.duration*100,N<10&&(_="0"+_),M<10&&(u="0"+u),T<10&&(_="0"+_),E<10&&(u="0"+u),isNaN(N)||isNaN(M)?m.value.innerText="00:00":m.value.innerText=N+":"+M,isNaN(T)||isNaN(E)?x.value.innerText="00:00":x.value.innerText=T+":"+E,L.value.style.width=S+"%",S==100&&(s.value.querySelector(".iconfont").classList="iconfont icon-playfill",L.value.style.width="0px",m.value.innerText="00:00",t.value.classList.remove("active"),i.value.classList.remove("active"))}function B(v){if(v==0||v==1?(++l,l>=I.length&&(l=0)):(--l,l<0&&(l=I.length-1)),l>-1&&l<I.length){v==0?s.value.querySelector(".iconfont").classList="iconfont icon-playfill":s.value.querySelector(".iconfont").classList="iconfont icon-pause",L.value.style.width="0px",m.value.innerText="00:00",x.value.innerText="00:00";let G=I[l],ne=Z[l];o.src=Y[l],v!=0&&(o.play(),t.value.classList.add("active"),i.value.classList.add("active")),h.value.innerText=G,d.value.innerText=ne,i.value.querySelector(".active").classList.remove("active"),i.value.getElementsByTagName("img")[l].classList.add("active"),r.value.style.backgroundImage="url("+i.value.getElementsByTagName("img")[l].getAttribute("src")+")"}else v==0||v==1?--l:++l}return P(()=>{ee()}),(v,G)=>(b(),g("div",he,[e("div",{ref_key:"bg",ref:r,class:"bg"},null,512),e("div",be,[e("div",{ref_key:"player_track",ref:t,class:"player-track"},[e("div",{ref_key:"album_name",ref:h,class:"album-name"},"红模仿",512),e("div",{ref_key:"track_name",ref:d,class:"track-name"},"周杰伦 - 红模仿",512),e("div",ge,[e("div",{ref_key:"current_time",ref:m,class:"current-time"},"00:00",512),e("div",{ref_key:"total_time",ref:x,class:"total-time"},"03:50",512)]),e("div",{ref_key:"progress_box",ref:p,class:"progress-box"},[e("div",{ref_key:"hover_time",ref:a,class:"hover-time"},"00:36",512),e("div",{ref_key:"hover_bar",ref:U,class:"hover-bar"},null,512),e("div",{ref_key:"progress_bar",ref:L,class:"progress-bar"},null,512)],512)],512),e("div",ye,[e("div",{ref_key:"album_cover",ref:i,class:"album-cover"},ke,512),e("div",$e,[e("div",Le,[e("div",{ref_key:"play_prev",ref:F,class:"button play-prev"},Ne,512)]),e("div",Te,[e("div",{ref_key:"play_pause",ref:s,class:"button play-pause"},Ue,512)]),e("div",Ie,[e("div",{ref_key:"play_next",ref:X,class:"button play-next"},Me,512)])])])])]))}});const Ce=y(Ee,[["__scopeId","data-v-39c3ae8c"]]),J=""+new URL("img1-3e8953b7.jfif",import.meta.url).href,K=""+new URL("img2-92c7eeac.jfif",import.meta.url).href,O=""+new URL("img3-f08c3d53.jfif",import.meta.url).href,Q=""+new URL("img4-8cb80969.jfif",import.meta.url).href,W=""+new URL("img5-09078472.jfif",import.meta.url).href,Se={class:"container"},Be={class:"small-box"},Pe=["src"],qe=["src"],He=["src"],Ae=["src"],Ve=["src"],Fe=j({__name:"CarouselMap",setup(n){let s=c(),t=c([]);const i=a=>{t.value.push(a)};let r=null,h=[J,K,O,Q,W],d=0;function m(){for(let a=0;a<t.value.length;a++)t.value[a].className="img"}function x(){m(),t.value[d].className="img active"}function p(){r=setInterval(function(){x(),d++,s.value.style.backgroundImage="url("+h[d-1]+")",d==5&&(d=0)},1500)}return P(()=>{for(let a=0;a<t.value.length;a++)t.value[a].onmousemove=function(){s.value.style.backgroundImage="url("+h[a]+")",m(),clearInterval(r),d=a+1,d==5&&(d=0),p()};p()}),ce(()=>{clearInterval(r)}),(a,U)=>(b(),g("div",Se,[e("div",{ref_key:"big_box",ref:s,class:"big-box"},null,512),e("div",Be,[e("div",{ref:i,class:"img"},[e("img",{src:f(J),alt:""},null,8,Pe)]),e("div",{ref:i,class:"img"},[e("img",{src:f(K),alt:""},null,8,qe)]),e("div",{ref:i,class:"img"},[e("img",{src:f(O),alt:""},null,8,He)]),e("div",{ref:i,class:"img"},[e("img",{src:f(Q),alt:""},null,8,Ae)]),e("div",{ref:i,class:"img"},[e("img",{src:f(W),alt:""},null,8,Ve)])])]))}});const Xe=y(Fe,[["__scopeId","data-v-92961d21"]]);const ze={},C=n=>(H("data-v-1bd7dd74"),n=n(),A(),n),De={class:"navbar"},Ge=C(()=>e("input",{type:"checkbox"},null,-1)),Je=C(()=>e("span",null,null,-1)),Ke=C(()=>e("span",null,null,-1)),Oe=C(()=>e("ul",null,[e("li",null,[e("a",null,"点赞")]),e("li",null,[e("a",null,"关注")]),e("li",null,[e("a",null,"收藏")]),e("li",null,[e("a",null,"分享")]),e("li",null,[e("a",null,"评论")])],-1)),Qe=[Ge,Je,Ke,Oe];function We(n,s){return b(),g("div",De,Qe)}const Ye=y(ze,[["render",We],["__scopeId","data-v-1bd7dd74"]]),Ze={class:"wrapper"},ea=q('<nav data-v-2604f89a><input checked id="home" name="tab" type="radio" data-v-2604f89a><input id="comment" name="tab" type="radio" data-v-2604f89a><input id="envelope" name="tab" type="radio" data-v-2604f89a><input id="heart" name="tab" type="radio" data-v-2604f89a><input id="user" name="tab" type="radio" data-v-2604f89a><label class="home" for="home" data-v-2604f89a><a href="" data-v-2604f89a><svg aria-hidden="true" class="icon" data-v-2604f89a><use xlink:href="#icon-Home" data-v-2604f89a></use></svg> Home</a></label><label class="comment" for="comment" data-v-2604f89a><a href="" data-v-2604f89a><svg aria-hidden="true" class="icon" data-v-2604f89a><use xlink:href="#icon-Comment" data-v-2604f89a></use></svg> Com</a></label><label class="envelope" for="envelope" data-v-2604f89a><a href="" data-v-2604f89a><svg aria-hidden="true" class="icon" data-v-2604f89a><use xlink:href="#icon-Comment" data-v-2604f89a></use></svg> Env</a></label><label class="heart" for="heart" data-v-2604f89a><a href="" data-v-2604f89a><svg aria-hidden="true" class="icon" data-v-2604f89a><use xlink:href="#icon-Heart" data-v-2604f89a></use></svg> Heart</a></label><label class="user" for="user" data-v-2604f89a><a href="" data-v-2604f89a><svg aria-hidden="true" class="icon" data-v-2604f89a><use xlink:href="#icon-CreateUser" data-v-2604f89a></use></svg> User</a></label><div class="tab" data-v-2604f89a></div></nav>',1),aa=[ea],ta=j({__name:"Navigationbar2",setup(n){return(s,t)=>(b(),g("div",Ze,aa))}});const sa=y(ta,[["__scopeId","data-v-2604f89a"]]);const ia={},na={class:"icon-nav"},ca=q('<li data-v-a4861680><a href="javascript:void(0)" data-v-a4861680><i class="iconfont icon-home2" data-v-a4861680></i><span data-v-a4861680>首页</span></a></li><li data-v-a4861680><a href="javascript:void(0)" data-v-a4861680><i class="iconfont icon-product-hunt" data-v-a4861680></i><span data-v-a4861680>产品管理</span></a></li><li data-v-a4861680><a href="javascript:void(0)" data-v-a4861680><i class="iconfont icon-user-circle" data-v-a4861680></i><span data-v-a4861680>会员管理</span></a></li><li data-v-a4861680><a href="javascript:void(0)" data-v-a4861680><i class="iconfont icon-shopping-bag" data-v-a4861680></i><span data-v-a4861680>订单管理</span></a></li><li data-v-a4861680><a href="javascript:void(0)" data-v-a4861680><i class="iconfont icon-credit_card" data-v-a4861680></i><span data-v-a4861680>财务中心</span></a></li><li class="split" data-v-a4861680><a href="javascript:void(0)" data-v-a4861680><i class="iconfont icon-bell" data-v-a4861680></i><span data-v-a4861680>消息</span></a></li><li data-v-a4861680><a href="javascript:void(0)" data-v-a4861680><i class="iconfont icon-gear" data-v-a4861680></i><span data-v-a4861680>系统配置</span></a></li><li data-v-a4861680><a href="javascript:void(0)" data-v-a4861680><i class="iconfont icon-user-fill" data-v-a4861680></i><span data-v-a4861680>用户中心</span></a></li>',8),la=[ca];function oa(n,s){return b(),g("ul",na,la)}const ra=y(ia,[["render",oa],["__scopeId","data-v-a4861680"]]),$=n=>(H("data-v-9e9174c7"),n=n(),A(),n),da={class:"tabbar"},_a=$(()=>e("a",{href:""},[e("span",{class:"iconfont icon-home2"}),e("span",{class:"text"},"首页")],-1)),va=[_a],ua=$(()=>e("a",{href:""},[e("span",{class:"iconfont icon-heart-fill"}),e("span",{class:"text"},"动态")],-1)),fa=[ua],pa=$(()=>e("a",{href:""},[e("span",{class:"iconfont icon-jia"}),e("span",{class:"text"},"发布")],-1)),ma=[pa],ha=$(()=>e("a",{href:""},[e("span",{class:"iconfont icon-xiaoxi-fill"}),e("span",{class:"text"},"消息")],-1)),ba=[ha],ga=$(()=>e("a",{href:""},[e("span",{class:"iconfont icon-user"}),e("span",{class:"text"},"我的")],-1)),ya=[ga],xa=$(()=>e("div",{class:"active-bg"},null,-1)),ka=j({__name:"Navigationbar4",setup(n){let s=c([]),t=i=>{s.value.push(i)};return P(()=>{function i(r){s.value.forEach(h=>{h.classList.remove("active")}),r.target.classList.add("active")}s.value.forEach(r=>{r.addEventListener("click",i)})}),(i,r)=>(b(),g("div",da,[e("ul",null,[e("li",{ref:f(t),class:"item active"},va,512),e("li",{ref:f(t),class:"item"},fa,512),e("li",{ref:f(t),class:"item"},ma,512),e("li",{ref:f(t),class:"item"},ba,512),e("li",{ref:f(t),class:"item"},ya,512),xa])]))}});const $a=y(ka,[["__scopeId","data-v-9e9174c7"]]),La={class:"content-container"},wa={class:"top"},Na={class:"top-sub"},Ta={class:"top-sub"},ja={class:"bottom"},Ua={class:"bottom-sub"},Ia={class:"bottom-sub"},Ra={class:"bottom-sub"},Ma={class:"bottom-sub"},Ea=j({__name:"Menu",setup(n){return(s,t)=>(b(),g("div",La,[e("div",wa,[e("div",Na,[k(Ce)]),e("div",Ta,[k(Xe)])]),e("div",ja,[e("div",Ua,[k(Ye)]),e("div",Ia,[k(sa)]),e("div",Ra,[k(ra)]),e("div",Ma,[k($a)])])]))}});const Ba=y(Ea,[["__scopeId","data-v-ec8b5e34"]]);export{Ba as default};
