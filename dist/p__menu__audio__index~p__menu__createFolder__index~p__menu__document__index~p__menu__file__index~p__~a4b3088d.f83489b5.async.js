(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"4ANX":function(e,t,a){"use strict";var n=a("R+Pm"),i=a("nKUr"),c=e=>{var t=Object(n["a"])({scriptUrl:"//at.alicdn.com/t/font_2995112_xnwhmzjjir.js"});return Object(i["jsx"])(t,{className:e.className,type:e.type,style:{fontSize:e.size+"px",color:e.color}})};t["a"]=c},"9Eo+":function(e,t,a){e.exports={loader:"loader___1xqSB",row:"row___1mQXy",flicker:"flicker___1kHpo"}},"9PCQ":function(e,t,a){e.exports=a.p+"static/noData.0598ba57.png"},"9cNf":function(e,t,a){e.exports={ShareBox:"ShareBox___2r_Kz",shareBox:"ShareBox___2r_Kz",title:"title___1Ldne",inputBox:"inputBox___1bXNt",input:"input___3SdK1",copy:"copy___Wvmyi",load:"load___1cu7u",move:"move___1xgUd"}},FQJK:function(e,t,a){"use strict";a("2qtc");var n=a("kLXV"),i=a("k1fw"),c=a("tJVT"),l=a("P6Xv"),s=a.n(l),r=a("/MKj"),o=a("q1tI"),d=a("cEo8"),b=a.n(d),u=(a("T2oS"),a("W9HT")),j=(a("miYZ"),a("tsqr")),p=a("9og8"),f=a("WmNS"),v=a.n(f),_=a("ZmDx"),x=a.n(_),m=a("4ANX"),h=a("jnMK"),O=a("2LCi"),g=e=>{var t=e.substring(e.lastIndexOf(".")+1),a="";switch(t){case"png":case"jpg":case"jpeg":case"bmp":case"gif":case"webp":case"psd":case"svg":case"tiff":a="picture";break;case"cda":case"wav":case"mp3":case"wmv":case"flac":case"aac":a="music";break;case"mp4":case"avi":case"mov":case"rmvb":case"rm":case"flv":case"3gp":a="video";break;case"txt":case"xls":case"xlsx":case"doc":case"docx":case"ppt":case"pptx":case"pdf":case"md":a="document";break;default:a="other";break}return a},y=a("nKUr"),k=e=>{var t,a=Object(o["useState"])(!1),n=Object(c["a"])(a,2),l=n[0],s=(n[1],O["b"].contract),r=(O["b"].getID,function(){var a=Object(p["a"])(v.a.mark((function a(n){var c,r,o,d,b;return v.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(c=t.files,r=t=>{e.dispatch({type:"fileModelInfo/save",state:{fileModelDisplay:"open",fileDownloadStatus:{progress:t/c[0].size*100,fileName:c[0].name,filesize:c[0].size,type:"Parsing"}}})},0!==c.length){a.next=5;break}return j["default"].warning("Select File To Upload!"),a.abrupt("return");case 5:if(!l){a.next=7;break}return a.abrupt("return");case 7:return a.prev=7,e.dispatch({type:"fileModelInfo/save",state:{fileModelDisplay:"open",fileDownloadStatus:{progress:0,fileName:c[0].name,filesize:c[0].size,type:"Parsing"}}}),a.next=11,O["a"].put(c,{onStoredChunk:r});case 11:return o=a.sent,d=[],d="newFloder"===e.floderType?[g(c[0].name),e.title]:[g(c[0].name)],b={cid:o,file_name:c[0].name,file_size:c[0].size,file_type:c[0].type,file_owner_folder:d},e.dispatch({type:"fileModelInfo/save",state:{fileModelDisplay:"open"}}),a.next=18,s.store(b);case 18:e.dispatch({type:"fileModelInfo/save",state:{fileDownloadStatus:{progress:100,fileName:c[0].name,filesize:c[0].size,type:"Success",initObj:Object(i["a"])(Object(i["a"])({},b),{},{created:(new Date).getTime()+"000000"})}}}),e.reloadTable(),a.next=27;break;case 22:a.prev=22,a.t0=a["catch"](7),console.log(a.t0),"filesRepetition"==a.t0.Error?j["default"].warning("Files exist on the blockchain,Do Not Upload Again!"):j["default"].error("Error"),e.dispatch({type:"fileModelInfo/save",state:{fileDownloadStatus:{progress:100,fileName:c[0].name,filesize:c[0].size,initObj:null,type:"Error"}}});case 27:case"end":return a.stop()}}),a,null,[[7,22]])})));return function(e){return a.apply(this,arguments)}}());return Object(y["jsx"])(h["a"],{borderAnimation:!0,className:x.a.card,background:"linear-gradient(178deg, rgb(22, 23, 25) 0%, rgb(32, 38, 42) 100%)",defaultBorder:!1,children:Object(y["jsxs"])("div",{className:x.a.ImportButton,onClick:()=>{t.click()},children:[Object(y["jsx"])("div",{className:x.a.addIconBox,children:Object(y["jsx"])(m["a"],{type:"icon-daoruwenjian1",size:16,color:"rgba(255, 255, 255, 0.8)"})}),Object(y["jsx"])(u["a"],{spinning:!1,size:"small",children:Object(y["jsx"])("div",{className:x.a.title,children:"Upload"})}),Object(y["jsx"])("input",{type:"file",onChange:r,className:x.a.displayNone,ref:e=>{t=e}})]})})};function w(e){var t=e.globalTop.token;return{token:t}}var S=Object(r["c"])(w)(k),N=e=>Object(y["jsx"])("div",{className:"".concat(b.a.ActionHeader," ActionHeader"),children:Object(y["jsx"])(S,{floderType:e.floderType,setFileModelDisplay:e.setFileModelDisplay,setFileDownloadStatus:e.setFileDownloadStatus,title:e.title,reloadTable:e.reloadTable})}),B=N,D=(a("Q9mQ"),a("diRs")),I=(a("sRBo"),a("kaz8")),T=a("qmVF"),M=a.n(T),L=a("VmGg"),C=a("rZqG"),z=a("wb4B"),P=a.n(z),R=e=>{if("no"===e.allChecked)return Object(y["jsx"])(y["Fragment"],{});var t,a=e.tableCheckedList.filter((e=>e));function n(t){t.callback&&t.callback(e.checkindex)}a.length>1&&(t=["download","rename","check","copy","move"]);var i=e.setList.map(((e,a)=>{var i=t&&t.includes(e.key);return Object(y["jsx"])("div",{className:"".concat(P.a.box," ").concat(i?P.a.disabled:""),onClick:()=>!i&&n(e),children:Object(y["jsx"])(h["a"],{borderAnimation:!i,defaultBorder:!1,background:"linear-gradient(135deg, rgb(33, 35, 40), rgba(45, 48, 55, 1))",children:Object(y["jsxs"])("div",{className:P.a.innerBox,children:[Object(y["jsx"])(m["a"],{type:e.icon,size:24}),Object(y["jsx"])("div",{className:P.a.title,children:e.title})]},a)})},a)}));return Object(y["jsx"])("div",{className:"".concat(P.a.FileSetBottomRender," animate__animated animate__fadeInUp animate__faster"),children:i})};function A(e){var t=e.globalTop.token;return{token:t}}var F=Object(r["c"])(A)(R),U=a("Ns3m"),E=a("SLhE"),H=a("UTfn"),K=O["b"].getID,V=K,Q="".concat(V,"_uploadFiles"),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Number(localStorage.getItem(Q))||0;t+=e,localStorage.setItem(Q,t.toString())},J=a("vDqi"),X=a.n(J),W=a("SOgc"),G=a.n(W),Y=e=>Object(y["jsxs"])("div",{className:G.a.noData,children:[Object(y["jsx"])("div",{className:G.a.image,style:{backgroundImage:"url(".concat(e.image||a("9PCQ"),")")}}),Object(y["jsx"])("div",{children:e.title||"None"})]});function Z(e){var t=e.globalTop.token;return{token:t}}var $=Object(r["c"])(Z)(Y),ee=$,te=a("bIAK"),ae=O["b"].getlist,ne=(O["b"].contract,O["b"].getID,e=>{var t=Object(o["useState"])(!1),a=Object(c["a"])(t,2),n=a[0],l=a[1],s=[{key:"download",icon:"icon-xiazai1",title:"Download",callback:r},{key:"share",icon:"icon-fenxiang",title:"Share Link",callback(t){var a=null===u||void 0===u?void 0:u.list[t].cid;e.setShareUrl("https://".concat(a,".ipfs.dweb.link/")),e.setShareModal(!0)}},{key:"rename",icon:"icon-zhongmingming",title:"Rename",callback:_e},{key:"copy",icon:"icon-fuzhi",title:"Copy",callback(t){e.setCheckData(null===u||void 0===u?void 0:u.list[t]),e.setSelectListType("copy"),e.setSelectListModal(!0)}},{key:"move",icon:"icon-yidongdao",title:"Move",callback(){e.setSelectListType("move"),e.setSelectListModal(!0)}},{key:"delete",icon:"icon-shanchu",title:"Remove",callback(t){"all"===ie&&(t=null===u||void 0===u?void 0:u.list.map((e=>e.sid))),"recently used"==e.title?"number"===typeof t?(Object(H["a"])([null===u||void 0===u?void 0:u.list[t].sid]),e.reloadTable(),j["default"].success("Record Remove Success")):"object"===typeof t&&(Object(H["a"])(t),e.reloadTable(),T([]),j["default"].success("Record Remove Success")):"number"===typeof t?(e.setClickItem({listData:null===u||void 0===u?void 0:u.list[t],folderName:null===u||void 0===u?void 0:u.folderName,isOnly:!0}),e.setDeleteModal(!0)):"object"===typeof t&&(e.setClickItem({listData:t,folderName:null===u||void 0===u?void 0:u.folderName,isOnly:!1}),e.setDeleteModal(!0))}}];function r(t){"object"===typeof t&&(null===u||void 0===u||u.list.map(((e,a)=>{e.sid==t[0]&&(t=a)}))),e.dispatch({type:"fileModelInfo/save",state:{fileModelDisplay:"open"}});var a=null===u||void 0===u?void 0:u.list[t],n=a.cid,i=Object(E["a"])(n,a.file_name);if(a){var c=a.file_name,l=null===u||void 0===u?void 0:u.list[t];e.dispatch({type:"fileModelInfo/save",state:{fileDownloadStatus:{progress:0,fileName:l.file_name,filesize:l.file_size,type:"Parsing"}}}),X()({method:"get",url:i,responseType:"blob",headers:{"content-type":a.file_type},onDownloadProgress:t=>{e.dispatch({type:"fileModelInfo/save",state:{fileDownloadStatus:{progress:t.loaded/t.total*100,fileName:l.file_name,filesize:l.file_size,type:"Downloading"}}})}}).then((t=>{var n=new Blob([t.data],{type:t.data.type}),i=document.createElement("a"),s=window.URL.createObjectURL(n);i.href=s,i.download=c,document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(s),Object(H["c"])(a),q(t.data.size),e.dispatch({type:"fileModelInfo/save",state:{fileDownloadStatus:{progress:100,fileName:l.file_name,filesize:l.file_size,type:"Success"}}})})).catch((t=>{e.dispatch({type:"fileModelInfo/save",state:{fileDownloadStatus:{progress:100,fileName:l.file_name,filesize:l.file_size,type:"Error"}}})}))}}var d=Object(o["useRef"])(null),b=Object(L["a"])((e=>k(null===e||void 0===e?void 0:e.nextPage)),{target:d,isNoMore(e){return!1===(null===e||void 0===e?void 0:e.next)}}),u=b.data,f=b.loading,_=(b.loadMore,b.loadingMore),x=b.noMore,g=b.reload;function k(){return w.apply(this,arguments)}function w(){return w=Object(p["a"])(v.a.mark((function t(){var a,n,i,c=arguments;return v.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=c.length>0&&void 0!==c[0]?c[0]:0,l(!0),n=[],i=!1,t.prev=4,t.next=7,e.getList(a);case 7:return n=t.sent,n=ae(n),t.next=11,Promise.all(n.map(function(){var e=Object(p["a"])(v.a.mark((function e(t){var a,n;return v.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O["a"].status(t.cid);case 2:a=e.sent,a.pins.some((e=>"Pinning"==e.status))?t.pinStatus="Pinning":a.pins.some((e=>"Pinned"==e.status))?t.pinStatus="Pinned":t.pinStatus="PinQueued",n=[],0!=a.deals.length?a.deals.forEach((e=>{n.push(e)})):n.push("Queuing"),t.storageProviders=n;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 11:if(t.sent,"recently used"!==e.title){t.next=14;break}throw Error;case 14:if("newFloder"!==e.floderType){t.next=16;break}throw Error;case 16:n.length&&(a+=1,i=!0),l(!1),t.next=24;break;case 20:t.prev=20,t.t0=t["catch"](4),l(!1),console.warn(t.t0);case 24:return t.abrupt("return",{list:n,nextPage:a,next:i});case 25:case"end":return t.stop()}}),t,null,[[4,20]])}))),w.apply(this,arguments)}Object(o["useEffect"])((()=>{e.setReloadTable((()=>()=>{ce("no"),T([]),A([]),g()}))}),[g]);var S=Object(o["useState"])([]),N=Object(c["a"])(S,2),B=N[0],T=N[1],z=Object(o["useState"])([]),P=Object(c["a"])(z,2),R=P[0],A=P[1],K=e=>{var t=B.concat();t[e]=!t[e];var a=[];for(var n in t)a.push(null===u||void 0===u?void 0:u.list[n].sid);A(a),T(t)};Object(o["useEffect"])((()=>{var t,a,n=B.filter((e=>e));n.length===(null===u||void 0===u||null===(t=u.list)||void 0===t?void 0:t.length)&&ce("all"),n.length<((null===u||void 0===u||null===(a=u.list)||void 0===a?void 0:a.length)||0)&&ce("some"),0===n.length&&ce("no"),e.dispatch({type:"menu/save",state:{audioList:null===u||void 0===u?void 0:u.list}})}),[u,B]);var V=Object(C["a"])({}),Q=Object(c["a"])(V,2),J=Q[0],W=Q[1];Object(o["useEffect"])((()=>{e.headerList.map((e=>{e.sort&&W({[e.key]:0})}))}),[e.headerList]);var G=e=>{if(e){var t=Math.floor(e/1044*100);return{minWidth:t+"%"}}return{flex:1}},Y=()=>e.headerList.map((e=>{var t=e.align||"left",a=()=>{var t="";return e.sort&&(t+="pointer"),t},n=()=>{if(e.sort){var t=()=>{var t=J[e.key];return 0===t?"":1===t?M.a.top:2===t?M.a.bottom:void 0};return Object(y["jsxs"])("div",{className:"".concat(M.a.sort," ").concat(t()),children:[Object(y["jsx"])(m["a"],{type:"icon-shang",className:M.a.top}),Object(y["jsx"])(m["a"],{type:"icon-xia",className:M.a.bottom})]})}};return Object(y["jsxs"])("div",{className:a(),style:Object(i["a"])(Object(i["a"])({},G(e.width)),{},{textAlign:t}),onClick:()=>Z(e),children:[e.title,n()]},e.key)}));function Z(e){e.sort&&W((t=>({[e.key]:(t[e.key]+1)%3})))}var $=Object(o["useState"])("no"),ne=Object(c["a"])($,2),ie=ne[0],ce=ne[1],le=()=>{var e=!1,t=!1;return"some"===ie&&(e=!0),"all"===ie&&(t=!0),Object(y["jsx"])(I["a"],{onChange:se,indeterminate:e,checked:t})};function se(){var e,t;"all"===ie?T(new Array(null===u||void 0===u||null===(e=u.list)||void 0===e?void 0:e.length).fill(!1)):T(new Array(null===u||void 0===u||null===(t=u.list)||void 0===t?void 0:t.length).fill(!0))}var re=Object(o["useState"])({index:-1,status:""}),oe=Object(c["a"])(re,2),de=oe[0],be=oe[1],ue=Object(o["useState"])(-1),je=Object(c["a"])(ue,2),pe=je[0],fe=je[1],ve=()=>{var t;if(0==(null===u||void 0===u?void 0:u.list.length))return!1;var a=e=>Object(y["jsx"])("div",{children:Object(y["jsx"])("ul",{children:e.map(((e,t)=>Object(y["jsxs"])("li",{children:[Object(y["jsx"])("a",{href:"https://filfox.info/en/deal/".concat(e.dealId),children:e.storageProvider}),Object(y["jsxs"])("span",{children:["  ",e.status]})]},t)))})});return null===u||void 0===u||null===(t=u.list)||void 0===t?void 0:t.map(((t,n)=>{var c=t=>{var c=()=>{var e=null;return e=Object(y["jsx"])("div",{className:"".concat(M.a.nameBox," pointer ").concat(M.a.nowrap),onClick:()=>be(Object(i["a"])(Object(i["a"])({},de),{},{index:n})),children:Object(y["jsx"])(D["a"],{placement:"topLeft",content:t.file_name,children:t.file_name})}),e},l=()=>{var e=e=>{fe(-1),e.callback&&e.callback(n)},t=s.map(((t,a)=>Object(y["jsx"])("div",{onClick:()=>e(t),children:Object(y["jsx"])(h["a"],{borderAnimation:!0,radius:4,defaultBorder:!1,background:"#33373f",children:Object(y["jsxs"])("div",{className:M.a.line,children:[Object(y["jsx"])(m["a"],{type:t.icon,size:16}),Object(y["jsx"])("div",{className:M.a.title,children:t.title})]})})},a)));return Object(y["jsx"])("div",{className:M.a.setBox,children:t})};return e.headerList.map((e=>{var s=e.align||"left",r=t[e.key];return"name"===e.key&&(r=Object(y["jsxs"])("div",{className:"df aic",children:[Object(y["jsx"])(m["a"],{type:t.icon,size:20}),c()]})),"set"===e.key&&(r=Object(y["jsx"])(D["a"],{content:l(),trigger:"click",overlayClassName:"tableSetPopover",placement:"bottomRight",visible:pe===n,onVisibleChange:e=>{fe(e?n:-1)},children:Object(y["jsx"])("div",{children:Object(y["jsx"])(m["a"],{type:"icon-gengduo",size:32,className:"".concat(M.a.setIcon," pointer")})})})),"file_size"===e.key&&(r=Object(y["jsx"])("span",{children:Object(U["b"])(t[e.key],2)})),"storageProviders"==e.key&&(r="string"!=typeof t[e.key][0]?Object(y["jsx"])(D["a"],{content:a(t[e.key]),children:Object(y["jsx"])("div",{style:{color:"#00b8c4"},children:"Details"})}):Object(y["jsx"])("div",{children:t[e.key][0]})),"created"===e.key&&(r=Object(y["jsx"])("span",{children:Object(U["a"])(t[e.key])})),"cid"===e.key&&(r=Object(y["jsx"])(D["a"],{content:t[e.key],children:Object(y["jsx"])("div",{className:M.a.keyBox,children:t[e.key]})})),Object(y["jsx"])("div",{style:Object(i["a"])(Object(i["a"])({},G(e.width)),{},{textAlign:s}),className:"df",children:r},e.key)}))};return Object(y["jsx"])("div",{className:"".concat(M.a.tableListBox," tableListBox"),onDoubleClick:()=>{Object(H["c"])(t),"music"!==t.file_folder[0]&&e.setPreviewState({previewURL:Object(E["a"])(t.cid,t.file_name),isPreview:!0,previewType:"",fileType:t.file_type}),e.audioActiveIndex===n?(e.dispatch({type:"menu/save",state:{audioActiveIndex:-1}}),setTimeout((()=>{e.dispatch({type:"menu/save",state:{audioActiveIndex:n}})}),300)):e.dispatch({type:"menu/save",state:{audioActiveIndex:n}})},children:Object(y["jsx"])(h["a"],{borderAnimation:!0,fileType:t.file_folder,fileCid:t.sid,inline:!1,children:Object(y["jsxs"])("div",{className:M.a.tableList,children:[Object(y["jsx"])("div",{className:M.a.checkedBox,children:Object(y["jsx"])(I["a"],{onChange:()=>K(n),checked:B[n]})}),c(t)]})})},n)}))};function _e(e){if(void 0!==e)be(Object(i["a"])(Object(i["a"])({},de),{},{index:e}));else{var t=B.filter((e=>e));if(1===t.length){var a=B.findIndex((e=>e));be(Object(i["a"])(Object(i["a"])({},de),{},{index:a}))}}}function xe(){return x?(null===u||void 0===u?void 0:u.nextPage)>1?"---No More---":"":_?"Loading...":void 0}var me=Object(o["useState"])(),he=Object(c["a"])(me,2),Oe=he[0];he[1];function ge(){return Oe||(null!==u&&void 0!==u&&u.nextPage||null!==u&&void 0!==u&&u.list.length||n?n?Object(y["jsx"])(te["a"],{}):Object(y["jsxs"])(y["Fragment"],{children:[Object(y["jsxs"])("div",{className:M.a.TableBox,children:[Object(y["jsxs"])("div",{className:M.a.header,children:[Object(y["jsx"])("div",{className:M.a.checkedBox,children:le()}),Y()]}),Object(y["jsx"])("div",{className:M.a.content,ref:d,children:f?Object(y["jsx"])("div",{className:"df jcc",style:{opacity:"0.1"},children:"loading"}):Object(y["jsxs"])(y["Fragment"],{children:[ve(),Object(y["jsx"])("div",{className:"df jcc",style:{opacity:"0.1"},children:xe()})]})})]}),Object(y["jsx"])(F,{allChecked:ie,tableCheckedList:B,setList:s,checkindex:R})]}):Object(y["jsx"])(ee,{image:e.noDataImage,title:e.noData}))}return ge()});function ie(e){var t=e.globalTop.token,a=e.menu.audioActiveIndex;return{token:t,audioActiveIndex:a}}var ce=Object(r["c"])(ie)(ne),le=a("9cNf"),se=a.n(le),re=a("P5Jw"),oe=e=>{var t="SHARE",a=()=>{e.setShareModal(!1)};return Object(y["jsx"])(n["a"],{title:t,visible:e.shareModal,footer:!1,onCancel:a,centered:!0,zIndex:1031,children:Object(y["jsxs"])("div",{className:se.a.ShareBox,children:[Object(y["jsx"])("div",{className:se.a.title,children:"Share link has been generated"}),Object(y["jsxs"])("div",{className:se.a.inputBox,children:[Object(y["jsx"])(h["a"],{radius:4,borderAnimation:!1,children:Object(y["jsx"])("div",{className:se.a.input,children:e.shareUrl})}),Object(y["jsx"])(re["CopyToClipboard"],{text:e.shareUrl,children:Object(y["jsx"])("div",{className:se.a.copy,children:"Copy"})})]})]})})};function de(e){var t=e.globalTop.token;return{token:t}}var be=Object(r["c"])(de)(oe),ue=a("R8ux"),je=e=>{var t=Object(o["useState"])(!1),a=Object(c["a"])(t,2),i=a[0],l=a[1],s=O["b"].contract,r=e.clickItem,d="Delete",b=()=>{e.setDeleteModal(!1)},u=function(){var t=Object(p["a"])(v.a.mark((function t(){return v.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(r),l(!0),!r.isOnly){t.next=17;break}if(!r.listData.cid||r.folderName){t.next=10;break}return t.next=6,s.file_delete({cid:r.listData.cid});case 6:e.reloadTable(),e.setDeleteModal(!1),t.next=15;break;case 10:if(!r.listData.cid||!r.folderName){t.next=15;break}return t.next=13,s.file_delete_in_folder({cid:r.listData.cid,folder:r.folderName});case 13:e.reloadTable(),e.setDeleteModal(!1);case 15:t.next=41;break;case 17:if(!r.listData||r.folderName){t.next=30;break}return t.prev=18,t.next=21,s.files_delete({sids:r.listData},ue["d"]);case 21:e.reloadTable(),t.next=27;break;case 24:t.prev=24,t.t0=t["catch"](18),j["default"].error("Error");case 27:e.setDeleteModal(!1),t.next=41;break;case 30:if(!r.listData||!r.folderName){t.next=41;break}return t.prev=31,t.next=34,s.files_delete_in_folder({sids:r.listData,folder:r.folderName});case 34:e.reloadTable(),t.next=40;break;case 37:t.prev=37,t.t1=t["catch"](31),j["default"].error("Error");case 40:e.setDeleteModal(!1);case 41:l(!1);case 42:case"end":return t.stop()}}),t,null,[[18,24],[31,37]])})));return function(){return t.apply(this,arguments)}}();return Object(y["jsx"])(n["a"],{title:d,visible:e.deleteModal,confirmLoading:i,onCancel:b,onOk:u,centered:!0,zIndex:1031,cancelText:"No",okText:"Yes",children:"Are you sure to delete this file (folder)?"})};function pe(e){var t=e.globalTop.token;return{token:t}}var fe=Object(r["c"])(pe)(je),ve=a("PWKf"),_e=a.n(ve),xe=e=>{var t=O["b"].contract,a=O["b"].getID,i=(O["b"].getlist,"copy"===e.type?"Copy":"Move"),l=Object(o["useState"])(!1),s=Object(c["a"])(l,2),r=(s[0],s[1],Object(o["useState"])([{icon:"",title:""}])),d=Object(c["a"])(r,2),b=d[0],u=d[1],j=Object(o["useState"])(!1),f=Object(c["a"])(j,2),_=f[0],x=f[1],h=function(){var e=Object(p["a"])(v.a.mark((function e(){var n,i,c;return v.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=JSON,e.next=3,t.view_account({did:"did:near:".concat(a)});case 3:for(c in e.t1=e.sent,n=e.t0.parse.call(e.t0,e.t1),i=[],n.file_folders)"picture"===n.file_folders[c]||"music"===n.file_folders[c]||"video"===n.file_folders[c]||"document"===n.file_folders[c]||"other"===n.file_folders[c]||i.push({title:n.file_folders[c],icon:"icon-wenjian"});return e.abrupt("return",[...i]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o["useEffect"])((()=>{Object(p["a"])(v.a.mark((function e(){return v.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,h();case 3:e.t1=e.sent,e.t2=[...e.t1],(0,e.t0)(e.t2);case 6:case"end":return e.stop()}}),e)})))()}),[]);var g=function(){var a=Object(p["a"])(v.a.mark((function a(n){return v.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(x(!0),"copy"!==e.type){a.next=7;break}return a.next=4,t.file_copy_to_folder({sid:e.checkData.sid,folder:n});case 4:a.sent,a.next=11;break;case 7:if("move"!==e.type){a.next=11;break}return a.next=10,t.file_copy_to_folder({sid:e.checkData.sid,folder:n});case 10:a.sent;case 11:x(!1),k();case 13:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),k=function(){var t=Object(p["a"])(v.a.mark((function t(){return v.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.setSelectListModal(!1);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(y["jsx"])(n["a"],{title:i,visible:e.selectListModal,confirmLoading:_,onCancel:k,centered:!0,zIndex:1031,children:0!==b.length&&Object(y["jsxs"])("div",{className:_e.a.SelectListBox,children:[b.map(((e,t)=>Object(y["jsxs"])("div",{className:"".concat(_e.a.box),onClick:()=>g(e.title),children:[Object(y["jsx"])(m["a"],{type:e.icon,size:20}),Object(y["jsx"])("div",{className:_e.a.title,children:e.title})]},t))),0===b.length&&Object(y["jsx"])("div",{children:"None"})]})})};function me(e){var t=e.globalTop.token;return{token:t}}var he=Object(r["c"])(me)(xe),Oe=(a("mHj4"),e=>{var t=Object(o["useState"])([{key:"name",title:"Name"},{key:"cid",title:"CID",width:300},{key:"pinStatus",title:"Pin Status",width:100},{key:"file_size",title:"Size",width:100},{key:"created",title:"Timestamp",width:130},{key:"storageProviders",title:"Storage Providers",width:100},{key:"set",title:"",width:70}]),a=Object(c["a"])(t,2),l=a[0],r=(a[1],Object(o["useState"])(!1)),d=Object(c["a"])(r,2),b=d[0],u=d[1],j=Object(o["useState"])(!1),p=Object(c["a"])(j,2),f=p[0],v=p[1],_=Object(o["useState"])("copy"),x=Object(c["a"])(_,2),m=x[0],h=x[1],O=Object(o["useState"])(!1),g=Object(c["a"])(O,2),k=g[0],w=g[1],S=Object(o["useState"])(),N=Object(c["a"])(S,2),D=(N[0],N[1]),I=Object(o["useState"])(null),T=Object(c["a"])(I,2),M=T[0],L=T[1],C=Object(o["useState"])(null),z=Object(c["a"])(C,2),P=z[0],R=z[1],A=Object(o["useState"])(!1),F=Object(c["a"])(A,2),U=(F[0],F[1]),E=Object(o["useState"])(""),H=Object(c["a"])(E,2),K=H[0],V=H[1],Q=Object(o["useState"])(1),q=Object(c["a"])(Q,2),J=(q[0],q[1],Object(o["useState"])((()=>()=>{}))),X=Object(c["a"])(J,2),W=X[0],G=X[1],Y=(Object(o["useRef"])(null),Object(o["useState"])({previewURL:"",isPreview:!1,previewType:"",fileType:""})),Z=Object(c["a"])(Y,2),$=Z[0],ee=Z[1];Object(o["useImperativeHandle"])(e.onRef,(()=>({reloadTable:W})));var te=Object(o["useState"])(),ae=Object(c["a"])(te,2),ne=ae[0],ie=ae[1];return Object(y["jsxs"])("div",{className:s.a.FileTable,children:[Object(y["jsx"])(B,{setFileModelDisplay:U,setFileDownloadStatus:D,title:e.title,reloadTable:W,floderType:e.floderType}),Object(y["jsxs"])("div",{className:s.a.tableCardBox,children:[Object(y["jsx"])("div",{className:s.a.title,children:e.title}),e.tableAfterContent&&e.tableAfterContent(ne),Object(y["jsx"])(ce,{setShowCheck:ie,setFileModelDisplay:U,setFileDownloadStatus:D,setCheckData:R,title:e.title,floderType:e.floderType,headerList:l,getList:e.getList,setShareModal:u,setDeleteModal:v,setClickItem:L,setSelectListType:h,setSelectListModal:w,setReloadTable:G,noData:e.noData,reloadTable:W,noDataImage:e.noDataImage,setShareUrl:V,setPreviewState:ee})]}),Object(y["jsx"])(be,{shareUrl:K,shareModal:b,setShareModal:u}),Object(y["jsx"])(fe,{deleteModal:f,clickItem:M,setDeleteModal:v,reloadTable:W}),Object(y["jsx"])(he,{type:m,selectListModal:k,checkData:P,setSelectListModal:w}),Object(y["jsx"])("div",{className:"previewContent",children:Object(y["jsx"])(n["a"],{visible:$.isPreview,footer:null,className:"previewContent",width:"image"===$.previewType?"520px":"80%",onCancel:()=>ee(Object(i["a"])(Object(i["a"])({},$),{},{isPreview:!1})),style:{backgroundColor:"rgba(0,0,0,0)"},children:Object(y["jsx"])("div",{className:s.a.previewBox,style:{textAlign:"center"},children:Object(y["jsx"])("embed",{src:$.previewURL,style:{color:"#fff",backgroundColor:"#f1f1f1"},type:$.fileType,color:"#fff",width:"800",height:"800"})})})})]})});function ge(e){var t=e.globalTop.token;return{token:t}}t["a"]=Object(r["c"])(ge)(Oe)},LhIy:function(e,t,a){e.exports={Card:"Card___1dkUe",card:"Card___1dkUe",bg1:"bg1___24BOV",bg2:"bg2___UzlPQ",defaultBorder:"defaultBorder___1_YUD",borderAnimation:"borderAnimation___1YmcH",bg2Animation:"bg2Animation___279zQ"}},Ns3m:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));var n=e=>{var t=e.toString().substring(0,13),a=new Date(Number(t)),n=a.getFullYear(),i=(a.getMonth()+1).toString().padStart(2,"0"),c=a.getDate().toString().padStart(2,"0"),l=a.getHours().toString().padStart(2,"0"),s=a.getMinutes().toString().padStart(2,"0"),r=a.getSeconds().toString().padStart(2,"0");return"".concat(n,"-").concat(i,"-").concat(c," ").concat(l,":").concat(s,":").concat(r)},i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0==e)return"0 B";var a=1024,n=t||2,i=["B","KB","MB","GB","TB","PB","EB","ZB","YB"],c=Math.floor(Math.log(e)/Math.log(a));return parseFloat((e/Math.pow(a,c)).toFixed(n))+" "+i[c]}},P6Xv:function(e,t,a){e.exports={FileTable:"FileTable___32DeQ",fileTable:"FileTable___32DeQ",tableCardBox:"tableCardBox___3DtSz",title:"title___3HWSd",previewBox:"previewBox___2s4XA","ant-modal-wrap":"ant-modal-wrap___2mgI0",antModalWrap:"ant-modal-wrap___2mgI0","ant-modal-content":"ant-modal-content___1VVh9",antModalContent:"ant-modal-content___1VVh9"}},PWKf:function(e,t,a){e.exports={SelectListBox:"SelectListBox___gqeNs",selectListBox:"SelectListBox___gqeNs",box:"box___36UWR",title:"title___229dL"}},SOgc:function(e,t,a){e.exports={noData:"noData___1C8Nx",image:"image___3wLPh"}},UTfn:function(e,t,a){"use strict";a.d(t,"c",(function(){return l})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return r}));var n=a("2LCi"),i=n["b"].getID,c=i,l=e=>{var t=[];localStorage.getItem("".concat(c,"_recentlyFiles"))&&(t=JSON.parse(localStorage.getItem("".concat(c,"_recentlyFiles"))||""));var a=0,n=t.some(((t,n)=>(t.sid===e.sid&&(a=n),t.sid===e.sid)));n?t.unshift(t.splice(a,1)[0]):t.unshift(e),t.length>10&&t.splice(10),localStorage.setItem("".concat(c,"_recentlyFiles"),JSON.stringify(t))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=JSON.parse(localStorage.getItem("".concat(c,"_recentlyFiles"))||"[]");return t.splice(e),t},r=e=>{var t=JSON.parse(localStorage.getItem("".concat(c,"_recentlyFiles"))||"[]"),a=function(a){t.some(((n,i)=>{n.sid===e[a]&&t.splice(i,1)}))};for(var n in e)a(n);console.log(t),localStorage.setItem("".concat(c,"_recentlyFiles"),JSON.stringify(t))}},ZmDx:function(e,t,a){e.exports={card:"card___1H9KL",ImportButton:"ImportButton___3wovt",importButton:"ImportButton___3wovt",bg:"bg___RGVgN",addIconBox:"addIconBox___1jdvt",title:"title___3BeV-",displayNone:"displayNone___6ENxD"}},bIAK:function(e,t,a){"use strict";var n=a("9Eo+"),i=a.n(n),c=a("nKUr"),l=e=>Object(c["jsx"])("div",{className:i.a.loadingBox,children:Object(c["jsxs"])("div",{className:i.a.loader,children:[Object(c["jsxs"])("div",{className:i.a.row,children:[Object(c["jsx"])("span",{}),Object(c["jsx"])("span",{}),Object(c["jsx"])("span",{})]}),Object(c["jsxs"])("div",{className:i.a.row,children:[Object(c["jsx"])("span",{}),Object(c["jsx"])("span",{}),Object(c["jsx"])("span",{})]}),Object(c["jsxs"])("div",{className:i.a.row,children:[Object(c["jsx"])("span",{}),Object(c["jsx"])("span",{}),Object(c["jsx"])("span",{})]})]})});t["a"]=l},cEo8:function(e,t,a){e.exports={ActionHeader:"ActionHeader___mfRla",actionHeader:"ActionHeader___mfRla",searchBox:"searchBox___17RA6"}},jnMK:function(e,t,a){"use strict";var n=a("k1fw"),i=a("LhIy"),c=a.n(i),l=a("nKUr"),s=e=>{e=Object(n["a"])({inline:!0,radius:8,defaultBorder:!0,background:"rgb(38, 41, 45)",borderAnimation:!1},e);var t="".concat(c.a.Card," ").concat(e.borderAnimation?c.a.borderAnimation:""),a={borderRadius:e.radius+"px",display:e.inline?"inline-block":"block"};e.boxShadow&&(a.boxShadow=e.boxShadow);var i={borderRadius:e.radius+"px",background:e.background},s={borderRadius:e.radius+"px"};return Object(l["jsxs"])("div",{className:t,style:a,children:[Object(l["jsx"])("div",{className:"".concat(c.a.bg1," ").concat(e.className||""),style:i}),Object(l["jsx"])("div",{className:"".concat(c.a.bg2," ").concat(e.defaultBorder?c.a.defaultBorder:""),style:s}),e.children]})};t["a"]=s},mHj4:function(e,t,a){},qmVF:function(e,t,a){e.exports={TableBox:"TableBox___2qmXd",tableBox:"TableBox___2qmXd",header:"header___7Ov0w",checkedBox:"checkedBox___3BfNr",sort:"sort___2wsdz",top:"top___trrjj",bottom:"bottom___1pEKk",content:"content___12nxE",tableListBox:"tableListBox___1Pzdk",setIcon:"setIcon___2zarF",tableList:"tableList___2wz6O",nameBox:"nameBox___3LLkv",keyBox:"keyBox___11u03",nowrap:"nowrap___9N2pQ",fileSetBottomRender:"fileSetBottomRender___3PRN4",box:"box___2GbUH",disabled:"disabled___3ae4n",innerBox:"innerBox___38IJ4",card:"card___2Ivo4",title:"title___d8IEV",setBox:"setBox___2iyIL",line:"line___1EvBp",container:"container___2Uu5z",loader:"loader___1P_QQ",loaderDot:"loaderDot___3bPCC"}},wb4B:function(e,t,a){e.exports={FileSetBottomRender:"FileSetBottomRender___2jVP1",fileSetBottomRender:"FileSetBottomRender___2jVP1",box:"box___3T-yh",disabled:"disabled___GUztX",innerBox:"innerBox___3esmy",card:"card___1MlHo",title:"title___1jUZb"}}}]);