import{_ as a,o as t,c as n,a as o,d,l as p,p as _,e as r}from"./index-dea78184.js";const i={name:"BaiduMap",methods:{map(){let e=new window.BMap.Map(this.$refs.allmap);e.centerAndZoom(new window.BMap.Point(116.404,39.915),11),e.addControl(new BMap.NavigationControl),e.addControl(new BMap.ScaleControl),e.addControl(new BMap.OverviewMapControl),e.addControl(new BMap.MapTypeControl),e.setCurrentCity("北京"),e.enableScrollWheelZoom(!0)}},data(){return{}},mounted(){this.map()}},l={id:"map"},u={id:"allmap",ref:"allmap"};function m(e,s,c,C,M,b){return t(),n("div",l,[o("div",u,null,512)])}const w=a(i,[["render",m]]),v=e=>(_("data-v-b2421b72"),e=e(),r(),e),f={class:"content-container"},h=v(()=>o("div",{class:"info"},[o("span",null,"由于不可抗力因素，地图可能存在无法使用情况，敬请期待后续开发。")],-1)),B=d({__name:"Location",setup(e){return(s,c)=>(t(),n("div",f,[h,p(w,{class:"bm-view",ak:"Ndu4iww5PUNFuDfy8RPoIG4EbWdGCPHI",center:"大同"})]))}});const y=a(B,[["__scopeId","data-v-b2421b72"]]);export{y as default};
