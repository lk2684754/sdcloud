(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[13],{"4ANX":function(e,t,a){"use strict";var n=a("R+Pm"),r=a("nKUr"),c=e=>{var t=Object(n["a"])({scriptUrl:"//at.alicdn.com/t/font_2995112_15r2fyi3v6t.js"});return Object(r["jsx"])(t,{className:e.className,type:e.type,style:{fontSize:e.size+"px",color:e.color}})};t["a"]=c},"Ax+9":function(e,t,a){e.exports={backImage:"backImage___2JR2w",home:"home___CjzXa",leftContext:"leftContext___1z9ah",title:"title___3BFPH",intro:"intro___1eeyi",details:"details___2rlbj",join:"join___3RfWG",CardList:"CardList___2HVvR",cardList:"CardList___2HVvR",CardHover:"CardHover___2WuvI",cardHover:"CardHover___2WuvI",CardBox:"CardBox___QwVem",cardBox:"CardBox___QwVem",icon:"icon___2i4L-",printUnit:"printUnit___2lddw",unit:"unit___3W1Rc",historyBox:"historyBox___3pqCY",headerBox:"headerBox___5ObU-",more:"more___2mYJH",list:"list___3hj5B",box:"box___3GjVs",user:"user___17Wkp",rightContext:"rightContext___SS19v",disabledCard:"disabledCard___1Fk56"}},LhIy:function(e,t,a){e.exports={Card:"Card___1dkUe",card:"Card___1dkUe",bg1:"bg1___24BOV",bg2:"bg2___UzlPQ",defaultBorder:"defaultBorder___1_YUD",borderAnimation:"borderAnimation___1YmcH",bg2Animation:"bg2Animation___279zQ"}},Ns3m:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return r}));var n=e=>{var t=e.toString().substring(0,13),a=new Date(Number(t)),n=a.getFullYear(),r=(a.getMonth()+1).toString().padStart(2,"0"),c=a.getDate().toString().padStart(2,"0"),i=a.getHours().toString().padStart(2,"0"),o=a.getMinutes().toString().padStart(2,"0"),s=a.getSeconds().toString().padStart(2,"0");return"".concat(n,"-").concat(r,"-").concat(c," ").concat(i,":").concat(o,":").concat(s)},r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0==e)return"0 B";var a=1024,n=t||2,r=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],c=Math.floor(Math.log(e)/Math.log(a));return parseFloat((e/Math.pow(a,c)).toFixed(n))+" "+r[c]}},"R+Pm":function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a("VTBJ"),r=a("Ff2n"),c=a("q1tI"),i=a("rePB"),o=a("TSYQ"),s=a.n(o),l=a("Pw59"),d=a("Qi1f"),u=["className","component","viewBox","spin","rotate","tabIndex","onClick","children"],b=c["forwardRef"]((function(e,t){var a=e.className,o=e.component,b=e.viewBox,j=e.spin,m=e.rotate,h=e.tabIndex,v=e.onClick,_=e.children,x=Object(r["a"])(e,u);Object(d["g"])(Boolean(o||_),"Should have `component` prop or `children`."),Object(d["f"])();var p=c["useContext"](l["a"]),f=p.prefixCls,g=void 0===f?"anticon":f,O=s()(g,a),N=s()(Object(i["a"])({},"".concat(g,"-spin"),!!j)),w=m?{msTransform:"rotate(".concat(m,"deg)"),transform:"rotate(".concat(m,"deg)")}:void 0,y=Object(n["a"])(Object(n["a"])({},d["e"]),{},{className:N,style:w,viewBox:b});b||delete y.viewBox;var C=function(){return o?c["createElement"](o,Object(n["a"])({},y),_):_?(Object(d["g"])(Boolean(b)||1===c["Children"].count(_)&&c["isValidElement"](_)&&"use"===c["Children"].only(_).type,"Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."),c["createElement"]("svg",Object(n["a"])(Object(n["a"])({},y),{},{viewBox:b}),_)):null},B=h;return void 0===B&&v&&(B=-1),c["createElement"]("span",Object(n["a"])(Object(n["a"])({role:"img"},x),{},{ref:t,tabIndex:B,onClick:v,className:O}),C())}));b.displayName="AntdIcon";var j=b,m=["type","children"],h=new Set;function v(e){return Boolean("string"===typeof e&&e.length&&!h.has(e))}function _(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=e[t];if(v(a)){var n=document.createElement("script");n.setAttribute("src",a),n.setAttribute("data-namespace",a),e.length>t+1&&(n.onload=function(){_(e,t+1)},n.onerror=function(){_(e,t+1)}),h.add(a),document.body.appendChild(n)}}function x(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.scriptUrl,a=e.extraCommonProps,i=void 0===a?{}:a;t&&"undefined"!==typeof document&&"undefined"!==typeof window&&"function"===typeof document.createElement&&(Array.isArray(t)?_(t.reverse()):_([t]));var o=c["forwardRef"]((function(e,t){var a=e.type,o=e.children,s=Object(r["a"])(e,m),l=null;return e.type&&(l=c["createElement"]("use",{xlinkHref:"#".concat(a)})),o&&(l=o),c["createElement"](j,Object(n["a"])(Object(n["a"])(Object(n["a"])({},i),s),{},{ref:t}),l)}));return o.displayName="Iconfont",o}},YIsw:function(e,t,a){"use strict";a.r(t);var n=a("9og8"),r=a("tJVT"),c=a("WmNS"),i=a.n(c),o=a("Ax+9"),s=a.n(o),l=a("/MKj"),d=a("jnMK"),u=a("lfel"),b=a("4ANX"),j=a("q1tI"),m=a("2LCi"),h=a("Ns3m"),v=(a("9kvl"),a("bL2x"),a("nKUr")),_=e=>Object(v["jsx"])("div",{className:"intro",children:Object(v["jsxs"])("div",{className:"wrapper",children:[Object(v["jsx"])("h1",{className:"cs",children:"Makes Decentralized Storage Easy"}),Object(v["jsx"])("div",{className:"bar left"}),Object(v["jsx"])("div",{className:"bar top"}),Object(v["jsx"])("div",{className:"bar right"}),Object(v["jsx"])("div",{className:"bar bottom"}),Object(v["jsxs"])("div",{className:"galleryItem",children:[Object(v["jsx"])("div",{className:"image"}),Object(v["jsxs"])("div",{className:"galleryOverlay",children:[Object(v["jsx"])("h2",{className:"itemTitle",children:"CONTRACT"}),Object(v["jsxs"])("p",{className:"",children:[">>",' "NEAR is a decentralized development platform where developers can host serverless applications and smart contracts; SDCloud contracts are written and deployed on NEAR, supporting various file operations']})]})]}),Object(v["jsxs"])("div",{className:"galleryItem",children:[Object(v["jsx"])("div",{className:"image"}),Object(v["jsxs"])("div",{className:"galleryOverlay",children:[Object(v["jsx"])("h2",{className:"itemTitle",children:"STORAGE"}),Object(v["jsxs"])("p",{className:"",children:[">>"," Filecoin is a decentralized peer-to-peer storage network, allowing anyone to store and validate large-scale data as part of a global, 15-exabyte (and growing) network. Under the hood, all Filecoin nodes use the IPFS."]})]})]}),Object(v["jsxs"])("div",{className:"galleryItem",children:[Object(v["jsx"])("div",{className:"image"}),Object(v["jsxs"])("div",{className:"galleryOverlay",children:[Object(v["jsx"])("h2",{className:"itemTitle",children:"PAYMENT"}),Object(v["jsxs"])("p",{className:"",children:[">>"," You only need to pay a small amount of NEAR as an on-chain transaction fee to store your hotspot data on the IPFS network; cold backup data,  store the data on the Filecoin network, your file operations Every step will be recorded on the chain"]})]})]}),Object(v["jsx"])("div",{className:"clear"})]})});function x(e){var t=e.globalTop.token;return{token:t}}var p=Object(l["c"])(x)(_),f=p,g=a("kC+k"),O=a.n(g),N=m["b"].contract,w=m["b"].getID,y=e=>{var t=Object(j["useState"])(969),a=Object(r["a"])(t,2),c=a[0],o=a[1];Object(j["useEffect"])((()=>{o(window.innerHeight),console.log(window.innerHeight)}),[window.innerHeight]);var l=Object(j["useState"])([{icon:"icon-cunchushijian",title:"Storage days",number:"0",unit:"day"},{icon:"icon-cunchudaxiao",title:"Total storage size",number:"0",unit:"B"},{icon:"icon-cunchushuliang",title:"Number of stored fil",number:"0",unit:""}]),m=Object(r["a"])(l,2),_=m[0],x=m[1],p=()=>_.map(((e,t)=>Object(v["jsx"])("div",{className:s.a.CardHover,children:Object(v["jsx"])(d["a"],{defaultBorder:!1,borderAnimation:!0,background:"#33373F",radius:20,children:Object(v["jsxs"])("div",{className:s.a.CardBox,children:[Object(v["jsx"])("div",{className:s.a.icon,children:Object(v["jsx"])(b["a"],{type:e.icon,size:28})}),Object(v["jsx"])("div",{className:s.a.title,children:e.title}),Object(v["jsxs"])("div",{className:s.a.printUnit,children:[e.number,Object(v["jsx"])("div",{className:s.a.unit,children:e.unit})]})]})},t)},t))),g=function(){var e=Object(n["a"])(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,N.view_account({did:"did:near:".concat(w)});case 2:t=e.sent,t=JSON.parse(t),a=(new Date).getTime(),a-=t.document.created.toString().substring(0,13),n=Math.ceil(a/1e3/24/3600),x([{icon:"icon-cunchushijian",title:"Storage days",number:n,unit:"day"},{icon:"icon-cunchudaxiao",title:"Total storage size",number:Object(h["b"])(t.files_all_size,2),unit:""},{icon:"icon-cunchushuliang",title:"Number of stored fil",number:t.files_num,unit:""}]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j["useEffect"])((()=>{Object(n["a"])(i.a.mark((function e(){return i.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:case"end":return e.stop()}}),e)})))()}),[]),Object(v["jsxs"])(v["Fragment"],{children:[Object(v["jsx"])(f,{}),Object(v["jsx"])("img",{className:s.a.backImage,src:O.a,height:c,alt:""}),Object(v["jsxs"])("div",{className:s.a.home,children:[Object(v["jsxs"])("div",{className:s.a.leftContext,children:[Object(v["jsx"])(u["a"],{height:40}),Object(v["jsx"])("div",{className:s.a.CardList,children:p()})]}),Object(v["jsx"])("div",{className:"".concat(s.a.rightContext," rightContext")})]})]})};function C(e){var t=e.globalTop.token;return{token:t}}var B=Object(l["c"])(C)(y);t["default"]=B},bL2x:function(e,t,a){},jnMK:function(e,t,a){"use strict";var n=a("k1fw"),r=a("LhIy"),c=a.n(r),i=a("nKUr"),o=e=>{e=Object(n["a"])({inline:!0,radius:8,defaultBorder:!0,background:"rgb(38, 41, 45)",borderAnimation:!1},e);var t="".concat(c.a.Card," ").concat(e.borderAnimation?c.a.borderAnimation:""),a={borderRadius:e.radius+"px",display:e.inline?"inline-block":"block"};e.boxShadow&&(a.boxShadow=e.boxShadow);var r={borderRadius:e.radius+"px",background:e.background},o={borderRadius:e.radius+"px"};return Object(i["jsxs"])("div",{className:t,style:a,children:[Object(i["jsx"])("div",{className:"".concat(c.a.bg1," ").concat(e.className||""),style:r}),Object(i["jsx"])("div",{className:"".concat(c.a.bg2," ").concat(e.defaultBorder?c.a.defaultBorder:""),style:o}),e.children]})};t["a"]=o},"kC+k":function(e,t,a){e.exports=a.p+"static/homeBack.2d557475.png"},lfel:function(e,t,a){"use strict";var n=a("nKUr"),r=e=>Object(n["jsx"])("div",{style:{width:e.width+"px",height:e.height+"px"}});t["a"]=r}}]);