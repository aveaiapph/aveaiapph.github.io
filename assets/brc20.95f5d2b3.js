import{s as B,_ as C,r as h,o as r,c as d,b as f,w as b,i as s,t as a,m as v,p as m,F as $,d as M,k,e as y,l as S,x as z,z as N}from"./index.d407f5be.js";function D(){return B({method:"get",url:"/v1api/v4/brc_tokens/banners"})}function R(){return B({method:"get",url:"/v1api/v4/brc_tokens/info"})}function T(t){return B({method:"get",url:"/v1api/v4/brc_tokens/hot",params:t})}function I(t){return B({method:"get",url:"/v1api/v4/brc_tokens/minting",params:t})}const U={name:"TokenList",props:{tableList:Array,loading:{type:Boolean,default:!1},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},emits:["sortChange"],data(){return{activeSort:0,sortBy:""}},computed:{isLoading(){return this.loading},errors(){return this.error}},methods:{tableRowClick(t){this.$f.openMarket(t.token,t.symbol,t.chain)},switchSort(t,i){if(t&&i!==void 0){this.sortBy=t,this.activeSort=i,this.emitRemote();return}if(this.sortBy!==t){this.sortBy=t,this.activeSort=1,this.emitRemote();return}this.activeSort++,this.activeSort>1&&(this.activeSort=-1),this.emitRemote()},emitRemote(){console.log("this.activeSort",this.activeSort);let t={"-1":"desc",0:"",1:"asc"};this.$emit("sortChange",{sort:this.sortBy,sort_dir:t==null?void 0:t[this.activeSort]})}}},x={class:"table"},V={class:"table-list"},F={class:"table-item table-header"},A={class:"icon-sort-container"},G={class:"icon-sort-container"},O={class:"icon-sort-container"},E=["onClick"],j={class:"token-info table-item_d"},q={class:"icon-token-container"},J=["src"],K={class:"token-symbol"},P={class:"block",style:{"font-size":"12px",color:"#999999"}},Q={class:"table-item_d"},W={class:"table-item_d"};function X(t,i,l,u,o,n){const c=h("van-image"),_=h("van-button"),g=h("van-empty"),p=h("van-list");return r(),d("div",x,[f(p,{loading:n.isLoading,"onUpdate:loading":i[9]||(i[9]=e=>n.isLoading=e),finished:l.finished,error:n.errors,"onUpdate:error":i[10]||(i[10]=e=>n.errors=e),"error-text":t.$t("errorText"),onLoad:i[11]||(i[11]=e=>t.$emit("onload")),"loading-text":t.$t("loading"),"finished-text":t.$t("noMore"),"immediate-check":!1},{default:b(()=>[s("ul",V,[s("li",F,[s("div",{class:"table-item_d",onClick:i[2]||(i[2]=e=>n.switchSort("tx_volume_u_24h"))},[s("span",null,a(t.$t("token"))+"/"+a(t.$t("24Hvolume"))+"(btc)",1),s("div",A,[s("i",{class:v(["iconfont icon-sort-up",{active:o.activeSort===1&&o.sortBy==="tx_volume_u_24h"}]),onClick:i[0]||(i[0]=m(e=>n.switchSort("tx_volume_u_24h",1),["stop"]))},null,2),s("i",{class:v(["iconfont icon-sort-down",{active:o.activeSort===-1&&o.sortBy==="tx_volume_u_24h"}]),onClick:i[1]||(i[1]=m(e=>n.switchSort("tx_volume_u_24h",-1),["stop"]))},null,2)])]),s("div",{class:"table-item_d",onClick:i[5]||(i[5]=e=>n.switchSort("current_price_usd"))},[s("span",null,a(t.$t("price"))+"($)",1),s("div",G,[s("i",{class:v(["iconfont icon-sort-up",{active:o.activeSort===1&&o.sortBy==="current_price_usd"}]),onClick:i[3]||(i[3]=m(e=>n.switchSort("current_price_usd",1),["stop"]))},null,2),s("i",{class:v(["iconfont icon-sort-down",{active:o.activeSort===-1&&o.sortBy==="current_price_usd"}]),onClick:i[4]||(i[4]=m(e=>n.switchSort("current_price_usd",-1),["stop"]))},null,2)])]),s("div",{class:"table-item_d",onClick:i[8]||(i[8]=e=>n.switchSort("price_change"))},[s("span",null,a(t.$t("changeTd")),1),s("div",O,[s("i",{class:v(["iconfont icon-sort-up",{active:o.activeSort===1&&o.sortBy==="price_change"}]),onClick:i[6]||(i[6]=m(e=>n.switchSort("price_change",1),["stop"]))},null,2),s("i",{class:v(["iconfont icon-sort-down",{active:o.activeSort===-1&&o.sortBy==="price_change"}]),onClick:i[7]||(i[7]=m(e=>n.switchSort("price_change",-1),["stop"]))},null,2)])])]),(r(!0),d($,null,M(l.tableList,(e,L)=>(r(),d("li",{class:"table-item",key:L,onClick:m(H=>n.tableRowClick(e),["stop"])},[s("div",j,[s("div",q,[f(c,{round:"",width:"0.5rem",height:"0.5rem","icon-size":"0.5rem","lazy-load":"","show-loading":"",src:t.$f.formatIcon(e),"error-icon":"/icon-default.png"},null,8,["src"]),(e==null?void 0:e.network)||(e==null?void 0:e.chain)?(r(),d("img",{key:0,class:"icon-svg icon-network",src:`${t.$store.state.s3BaseUrl}chain/${(e==null?void 0:e.network)||(e==null?void 0:e.chain)}.png`,alt:"",srcset:""},null,8,J)):k("",!0)]),s("div",null,[s("span",K,a(e.symbol||""),1),s("span",P,a(t.$f.formatNumber2((e==null?void 0:e.tx_volume_eth_24h)/1e8||0,1,4,10**4)),1)])]),s("div",Q,[s("span",null,a(t.$f.formatNumber2(e.current_price_usd||0,3,4,10**4)),1)]),s("div",W,[e.price_change_v2&&e.price_change_v2>=0?(r(),y(_,{key:0,class:"button-priceChange",color:t.$store.getters.upColor[3],size:"mini"},{default:b(()=>[S(" +"+a(t.$f.formatNumber2(e.price_change_v2||0,1))+"% ",1)]),_:2},1032,["color"])):(r(),y(_,{key:1,class:"button-priceChange",color:t.$store.getters.downColor[3],size:"mini"},{default:b(()=>[S(a(t.$f.formatNumber2(e.price_change_v2||0,1)||0)+"% ",1)]),_:2},1032,["color"]))])],8,E))),128)),z(f(g,{class:"empty",image:t.emptyNoDataLight,description:t.$t("empty")},null,8,["image","description"]),[[N,l.tableList&&l.tableList.length===0&&!n.isLoading||!l.tableList]])])]),_:1},8,["loading","finished","error","error-text","loading-text","finished-text"])])}var Y=C(U,[["render",X],["__scopeId","data-v-5a435314"]]);const Z={name:"TokenList",props:{tableList:Array,loading:{type:Boolean,default:!1},finished:{type:Boolean,default:!1},error:{type:Boolean,default:!1}},emits:["getBrc20MintList"],data(){return{activeSort:0,sortBy:""}},computed:{isLoading(){return this.loading},errors(){return this.error}},methods:{tableRowClick(t){this.$f.openMarket(t.token,t.symbol,t.chain)}}},w={class:"table"},tt={class:"table-list"},et={class:"table-item table-header"},it={class:"table-item_d"},nt={class:"table-item_d"},st={class:"table-item_d"},ot={class:"table-item_d"},at=["onClick"],lt={class:"token-info table-item_d"},rt={class:"icon-token-container"},ct=["src"],dt={class:"token-symbol ml-4"},ht={class:"table-item_d"},_t={class:"table-item_d"},mt={class:"flex-end"},ut={class:"table-item_d"};function gt(t,i,l,u,o,n){const c=h("van-image"),_=h("van-progress"),g=h("van-empty"),p=h("van-list");return r(),d("div",w,[f(p,{loading:n.isLoading,"onUpdate:loading":i[0]||(i[0]=e=>n.isLoading=e),finished:l.finished,error:n.errors,"onUpdate:error":i[1]||(i[1]=e=>n.errors=e),"error-text":t.$t("errorText"),onLoad:i[2]||(i[2]=e=>t.$emit("getBrc20MintList")),"loading-text":t.$t("loading"),"finished-text":t.$t("noMore"),"immediate-check":!1},{default:b(()=>[s("ul",tt,[s("li",et,[s("span",it,a(t.$t("token")),1),s("span",nt,a(t.$t("1HMintedNums")),1),s("span",st,a(t.$t("minted")),1),s("span",ot,a(t.$t("holders")),1)]),(r(!0),d($,null,M(l.tableList,(e,L)=>(r(),d("li",{class:"table-item",key:L,onClick:m(H=>n.tableRowClick(e),["stop"])},[s("div",lt,[s("div",rt,[f(c,{round:"",width:"0.5rem",height:"0.5rem","icon-size":"0.5rem","lazy-load":"","show-loading":"",src:t.$f.formatIcon(e),"error-icon":"/icon-default.png"},null,8,["src"]),(e==null?void 0:e.network)||(e==null?void 0:e.chain)?(r(),d("img",{key:0,class:"icon-svg icon-network",src:`${t.$store.state.s3BaseUrl}chain/${(e==null?void 0:e.network)||(e==null?void 0:e.chain)}.png`,alt:"",srcset:""},null,8,ct)):k("",!0)]),s("span",dt,a(e.symbol||""),1)]),s("div",ht,a(t.$f.formatNumber2((e==null?void 0:e.mint_times_24h)||0)),1),s("div",_t,[s("div",mt,[s("span",null,a(t.$f.formatNumber2((e==null?void 0:e.percent)||0))+"%",1),f(_,{percentage:e==null?void 0:e.percent,"show-pivot":!1,style:{width:"60px","margin-top":"3px"}},null,8,["percentage"])])]),s("div",ut,a(t.$f.formatNumber2((e==null?void 0:e.holders)||0,3,4,10**4)),1)],8,at))),128)),z(f(g,{class:"empty",image:t.emptyNoDataLight,description:t.$t("empty")},null,8,["image","description"]),[[N,l.tableList&&l.tableList.length===0&&!n.isLoading||!l.tableList]])])]),_:1},8,["loading","finished","error","error-text","loading-text","finished-text"])])}var vt=C(Z,[["render",gt],["__scopeId","data-v-3a68dbf1"]]);const ft={name:"Brc",data(){return{active:"hot",conditions:{page:1,page_size:20,sort:"",sort_dir:""},tableData:[],loadingHot:!1,finishedHot:!1,errorHot:!1,total:0,bannerList:[],statistics:{},mint:{page:1,page_size:20},total2:0,tableDataMint:[],loadingMint:!1,finishedMint:!1,errorMint:!1}},computed:{tabs(){return[{id:"hot",title:this.$t("hots")},{id:"mint",title:this.$t("mint")}]}},components:{list:Y,mint:vt},mounted(){this.init()},methods:{init(){console.log("333333333333"),this.conditions.page=1,this.getBrc20()},switchTabs(t){this.active=t.id,this.active=="hot"&&(this.conditions={page:1,page_size:2,sort:"",sort_dir:""},this.getBrc20()),this.active=="mint"&&(this.mint={page:1,page_size:20},this.getBrc20MintList())},getBrc20Banners(){D().then(t=>{this.bannerList=t==null?void 0:t.filter(i=>i.picture_link!=="")}).catch(t=>{console.log(t)})},getBrc20Info(){R().then(t=>{this.statistics=t}).catch(t=>{console.log(t)})},sortChange({sort:t,sort_dir:i}){this.tableData=[],this.conditions.sort=t,this.conditions.sort_dir=i,i||(this.conditions.sort=""),this.conditions.page=1,this.getBrc20()},onload(){console.log(1111111),this.getBrc20()},getBrc20(){this.loadingHot=!0;let t={page:this.conditions.page,page_size:this.conditions.page_size,sort:this.conditions.sort,sort_dir:this.conditions.sort_dir};T(t).then(i=>{var u,o,n;this.total=i==null?void 0:i.total;let l=(u=i==null?void 0:i.data)==null?void 0:u.map(c=>{var _;return{...c,token:(_=c.token)==null?void 0:_.trim()}});this.tableData=(o=this.tableData)==null?void 0:o.concat(l),this.finishedHot=((n=i==null?void 0:i.data)==null?void 0:n.length)<this.conditions.page_size,this.conditions.page++}).catch(i=>{this.errorHot=!0,this.finishedHot=!0,console.log(i)}).finally(()=>{this.loadingHot=!1})},getBrc20MintList(){this.loadingMint=!0,I(this.mint).then(t=>{var l,u,o;this.total2=t==null?void 0:t.total;let i=(l=t==null?void 0:t.data)==null?void 0:l.map(n=>{var c;return{...n,percent:((n==null?void 0:n.confirmed_minted)/(n==null?void 0:n.max)*100).toFixed(1)||0,token:(c=n.token)==null?void 0:c.trim(),mint_times_24h:Math.ceil((n==null?void 0:n.mint_times_24h)||0)}});this.tableDataMint=(u=this.tableDataMint)==null?void 0:u.concat(i),this.finishedMint=((o=t==null?void 0:t.data)==null?void 0:o.length)<this.mint.page_size,this.mint.page++}).catch(t=>{this.errorMint=!0,this.finishedMint=!0,console.log(t)}).finally(()=>{this.loadingMint=!1})}}},pt={class:"brc20"},bt={class:"tabs-container"},kt={class:"tabs-wrap"},yt={class:"tabs"},Bt=["onClick"];function Lt(t,i,l,u,o,n){const c=h("list"),_=h("mint");return r(),d("div",pt,[s("div",bt,[s("div",kt,[s("div",yt,[(r(!0),d($,null,M(n.tabs,(g,p)=>(r(),d("button",{class:v(["tabs-item clickable",{active:o.active==g.id}]),key:p,onClick:m(e=>n.switchTabs(g),["stop"])},[s("span",null,a(g.title),1)],10,Bt))),128))])])]),o.active==="hot"?(r(),y(c,{key:0,tableList:o.tableData,loading:o.loadingHot,finished:o.finishedHot,error:o.errorHot,onOnload:n.onload,onSortChange:n.sortChange},null,8,["tableList","loading","finished","error","onOnload","onSortChange"])):k("",!0),o.active==="mint"?(r(),y(_,{key:1,tableList:o.tableDataMint,loading:o.loadingMint,finished:o.finishedMint,error:o.errorMint,onGetBrc20MintList:n.getBrc20MintList},null,8,["tableList","loading","finished","error","onGetBrc20MintList"])):k("",!0)])}var $t=C(ft,[["render",Lt],["__scopeId","data-v-b585384a"]]);export{$t as default};
