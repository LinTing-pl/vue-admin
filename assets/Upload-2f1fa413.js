import{d as P,r,f as K,o as B,c as N,a as t,j as E,b as a,t as o,F as W,x as q,Q as F,S as G,w as h,v as Q,i as X,h as S,E as v,m as J,H as Y,T as Z,p as ee,e as se,_ as te}from"./index-463adb68.js";const U=g=>(ee("data-v-e28c8141"),g=g(),se(),g),ne={class:"content-container"},le={class:"info-top"},ae=U(()=>t("span",null,"将目录或多个文件拖拽到此进行扫描",-1)),oe={class:"upload-opts"},ue={class:"upload-content"},re=U(()=>t("div",{class:"content-header"},[t("span",null,"文件名"),t("span",null,"类型"),t("span",null,"大小"),t("span",null,"状态"),t("span",null,"操作")],-1)),pe=["value"],ie={class:"progress"},ce={class:"progress-etr"},de={class:"upload-info"},fe=P({__name:"Upload",setup(g){const m=r(),_=r(),p=r([]);let y=r(0),w=r(0),i=r(0),x=3;const f=[];let d=r(3),b=r(!1),l=d.value;const k=[".jpg",".jpeg",".bmp",".webp",".gif",".png",".mp3",".mp4"];K(()=>{_.value.ondragenter=function(s){s.preventDefault()},_.value.ondragover=function(s){s.preventDefault()},_.value.ondrop=function(s){s.preventDefault();for(const n of s.dataTransfer.items){const e=n.webkitGetAsEntry();M(e)}}});const C=s=>{s==="only"||s==="mutiple"&&m.value.setAttribute("webkitdirectory",""),m.value.click()},$=s=>{let n=s.target.files;if(n.length!==0){if(n.length===1){let e=n[0];I(e)}else Array.from(n).map(e=>{I(e)});s.target.value=""}},D=s=>{s==="only"||s==="mutiple"&&m.value.removeAttribute("webkitdirectory")},I=s=>{if(!A(s)){let e="."+s.name.split(".").pop();v({showClose:!0,message:"您选择的类型为"+e+"。Warning, 仅支持文件的类型："+k.join("、"),type:"warning"});return}let n=new FileReader;n.onload=function(e){var c;let u=(c=e.target)==null?void 0:c.result;p.value.push({name:s.name,type:"."+s.name.split(".").pop(),size:s.size,status:"pending",progress:0,result:u,success:!1,t1:null,t2:null}),y.value=p.value.length,i.value+=s.size},n.readAsDataURL(s)},M=s=>{s.isDirectory?s.createReader().readEntries(e=>{for(let u of e)M(u)}):s.file(n=>{I(n)})},A=s=>{if(k.indexOf("."+s.name.split(".").pop())!==-1)return!0},O=s=>{clearTimeout(s.t1),clearInterval(s.t2),s.status==="pending"?v({showClose:!0,message:"Oops, 删除成功.",type:"error"}):s.status==="upload"?v({showClose:!0,message:"Oops, 停止上传, 并删除成功.",type:"error"}):s.status==="success"&&(w.value--,v({showClose:!0,message:"Oops, 撤销上传, 成功删除服务器文件.",type:"error"})),p.value.splice(p.value.findIndex(n=>n==s),1),y.value--,i.value-=s.size},R=async()=>{let s=p.value.filter(e=>!e.success);s.length||v({showClose:!0,message:"Warning, 还没有选择文件。",type:"warning"}),s.map(e=>{e.status="upload",e.size>1024*1024*x&&setTimeout(()=>{e.status="error文件太大"},250)}),(async()=>{for(let e of s){if(e.size>1024*1024*x)continue;let u=5+Math.ceil(Math.random()*9);const c=new XMLHttpRequest,z=new Promise(T=>{c.onload=function(j){clearInterval(e.t2),e.status="success",e.success=!0,w.value++},c.open("POST","/upload/upload"),e.t2=setInterval(()=>{e.progress=parseInt(e.progress+100/u)},1e3),e.t1=setTimeout(()=>{c.send(),T(1)},u*1e3)});for(z.then(T=>{let j=f.findIndex(L=>L==z);f.splice(j,1)}),f.push(z);f.length>=d.value;)await Promise.race(f)}})()},H=s=>{b.value=!0},V=()=>{Number.isNaN(Number(l))||!l?l=d.value:(l=parseInt(l),l<1?l=1:l>10&&(l=10),l!==d.value&&(d.value=l,J({title:"Success",message:`小爱同学会在‘完成一个正在上传任务后’为您同步设置‘同时上传任务数量为${d.value}’`,type:"success"}))),b.value=!1};return(s,n)=>(B(),N("div",ne,[t("div",{ref_key:"select",ref:_,class:"upload-area",onClick:n[0]||(n[0]=e=>C("none"))},[t("span",le,[E(a(Y),{class:"icon1"}),ae]),t("span",null,"支持文件的类型："+o(k.join("、")),1),t("span",null,"每个文件允许的最大尺寸："+o(a(x))+"M",1),t("input",{ref_key:"ipt",ref:m,type:"file",title:"",onChange:$,multiple:"",accept:".jpg,.jpeg,.bmp,.webp,.gif,.png,.mp3,.mp4"},null,544)],512),t("div",oe,[t("button",{onClick:n[1]||(n[1]=e=>C("only")),onBlur:n[2]||(n[2]=e=>D("only"))},"选择文件",32),t("button",{onClick:n[3]||(n[3]=e=>C("mutiple")),onBlur:n[4]||(n[4]=e=>D("mutiple"))},"选择文件夹",32)]),t("div",ue,[re,(B(!0),N(W,null,q(p.value,(e,u)=>(B(),N("div",{class:"content-main",key:u},[t("span",null,o(e.name),1),t("span",null,o(e.type),1),t("span",null,o((e.size/1024).toFixed(2))+"KB",1),t("span",null,[h(t("span",{class:F({"content-status":!0,pending:e.status==="pending",success:e.status==="success",error:e.status.slice(0,5)==="error"})},o(e.status==="pending"?"待上传":e.status==="success"?"已上传":e.status.slice(5)),3),[[S,e.status!=="upload"]]),h(t("span",null,[t("progress",{max:"100",value:e.progress},null,8,pe),t("span",ie,o(e.progress)+"%",1),t("span",ce,o(e.progress===0?"待上传":"上传中"),1)],512),[[S,e.status==="upload"]])]),t("span",null,[E(a(Z),{class:"icon2",onClick:c=>O(e)},null,8,["onClick"])])]))),128))]),t("div",de,[t("span",null,"文件数量："+o(a(y)),1),t("span",null,"成功上传："+o(a(w)),1),t("span",null,"总大小："+o(a(i)/1024/1024>1?(a(i)/1024/1024).toFixed(2)+"MB":a(i)/1024>1?(a(i)/1024).toFixed(2)+"KB":a(i)+"bype"),1),t("button",{class:F({isenable:!!p.value.length}),onClick:R},"开始上传",2),t("span",null,[G("同时上传数量："),h(t("input",{type:"text","onUpdate:modelValue":n[5]||(n[5]=e=>X(l)?l.value=e:l=e),onInput:H},null,544),[[Q,a(l)]])]),h(t("button",{class:"confirm",onClick:V},"确定",512),[[S,a(b)]])])]))}});const ge=te(fe,[["__scopeId","data-v-e28c8141"]]);export{ge as default};
