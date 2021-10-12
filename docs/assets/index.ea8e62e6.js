import{s as U,t as P,d as F,a as m,b as G,c as J,r as M}from"./vendor.8802af71.js";const Y=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerpolicy&&(l.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?l.credentials="include":t.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(t){if(t.ep)return;t.ep=!0;const l=a(t);fetch(t.href,l)}};Y();const K="_App_k1x0e_2",Q="_header_k1x0e_9",z="_appbody_k1x0e_13",D="_form_k1x0e_26",V="_headmargin_k1x0e_33",W="_column_k1x0e_38",X="_prColumn_k1x0e_61",Z="_label_k1x0e_66",ee="_subinfo_k1x0e_74",te="_required_k1x0e_81",ie="_filled_k1x0e_97",le="_visible_k1x0e_101",ne="_invisible_k1x0e_106",se="_fixed_k1x0e_115",oe="_blob_k1x0e_119",re="_transform_k1x0e_1",ae="_movement_k1x0e_1",ce="_mini_k1x0e_147",de="_large_k1x0e_152",me="_logo_k1x0e_162",_e="_thankblob_k1x0e_177",fe="_thankmessage_k1x0e_183",ue="_agreementswitch_k1x0e_194",be="_checkbox_k1x0e_210",he="_agreement_k1x0e_194",pe="_buttonBelow_k1x0e_222",$e="_inlineBlock_k1x0e_227",ve="_footer_k1x0e_231",ge="_linkbox_k1x0e_236",ke="_link_k1x0e_236",xe="_about_k1x0e_251",ye="_twitter_k1x0e_257",Be="_op_k1x0e_262",Le="_content_k1x0e_264",Ee="_ed_k1x0e_266",we="_serif_k1x0e_269",Ne="_serifBold_k1x0e_278";var e={App:K,header:Q,appbody:z,form:D,headmargin:V,column:W,prColumn:X,label:Z,subinfo:ee,required:te,filled:ie,visible:le,invisible:ne,fixed:se,blob:oe,transform:re,movement:ae,mini:ce,large:de,logo:me,thankblob:_e,thankmessage:fe,agreementswitch:ue,checkbox:be,agreement:he,buttonBelow:pe,inlineBlock:$e,footer:ve,linkbox:ge,link:ke,about:xe,twitter:ye,op:Be,content:Le,ed:Ee,serif:we,serifBold:Ne};U.polyfill();let y=[];const B=document.getElementsByClassName(e.required);function L(){const i=document.getElementById("app"),n=document.getElementById("blob"),a=Array.from(document.getElementsByClassName(e.op)),r=Array.from(document.getElementsByClassName(e.content));async function t(){a.forEach(o=>o.classList.remove(e.invisible)),n.classList.remove(e.mini)}async function l(){setTimeout(()=>i.classList.remove(e.scLock),200)}async function c(){try{const o=await t();await l(o)}catch(o){}}n.disabled=!0,n.classList.contains(e.mini)?(r.forEach(o=>o.classList.replace(e.visible,e.invisible)),scroll({top:0,left:0,behavior:"smooth"}),setTimeout(()=>c(),400)):(i.classList.add(e.scLock),n.classList.add(e.mini),scroll({top:0,left:0,behavior:"smooth"}),setTimeout(()=>scroll(0,0),390),setTimeout(()=>{scroll({top:0,left:0,behavior:"smooth"}),a.forEach(o=>o.classList.add(e.invisible)),r.forEach(o=>o.classList.replace(e.invisible,e.visible))},400)),setTimeout(()=>{n.disabled=!1},400)}function Se(){const i=document.getElementById("blob"),n=Array.from(document.getElementsByClassName(e.ed)),a=Array.from(document.getElementsByClassName(e.content));i.classList.replace(e.mini,e.large),a.forEach(r=>r.classList.replace(e.visible,e.invisible)),clearTimeout(y),y=setTimeout(function(){n.forEach(r=>r.classList.remove(e.invisible))},400)}function Ce(){this.checked?B[1].classList.add(e.filled):B[1].classList.remove(e.filled)}function Ae(){}var qe="/majipoem/assets/logo.53d9d1b7.svg";const Ie=P(`<div id="app"><header><button style="background-color:#000000" id="blob"></button><img class="${e.logo} ${e.op}" alt="logo"></header><div><form class="${e.form} ${e.invisible} ${e.content}" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd03E7BPIpR0Y9E-vfnlUTf2eU4J3OGripRMN_YrJGthUE89w/formResponse" method="post" target="hidden_iframe"><iframe style="display:none" id="hidden_iframe" name="hidden_iframe"></iframe><label class="${e.column} ${e.label} ${e.serifBold}" for="title">\u984C\u540D<p class="${e.subinfo} ${e.serif}">\u7A7A\u6B04\u306F\u300E\u7121\u984C\u300F\u3068\u306A\u308A\u307E\u3059</p><input id="title" name="entry.1866521228" type="text" placeholder="\u300E\u7121\u984C\u300F"></label><label class="${e.column} ${e.label} ${e.serifBold}" for="poem">\u672C\u6587<p class="${e.subinfo} ${e.required} ${e.inlineBlock}">\u5FC5\u9808</p><textarea id="poem" name="entry.1602729063" required=""></textarea></label><label class="${e.column} ${e.label} ${e.serifBold}" for="name">\u8457\u8005\u540D<p class="${e.subinfo} ${e.serif}">\u7A7A\u6B04\u306F\u300E\u533F\u540D\u300F\u3068\u306A\u308A\u307E\u3059</p><input id="name" name="entry.1285093387" type="text" placeholder="\u300E\u533F\u540D\u300F"></label><label class="${e.column} ${e.label} ${e.serifBold}" for="addition">\u4ED8\u8A18<p class="${e.subinfo} ${e.serif}">\u89E3\u8AAC\u3084\u88DC\u8DB3\u306A\u3069\u306F\u3053\u3061\u3089\u3078</p><textarea id="addition" name="entry.2007810462"></textarea></label><label class="${e.column} ${e.label} ${e.serifBold}" for="link">\u30EA\u30F3\u30AF<p class="${e.subinfo} ${e.serif}">SNS\u3084\u30B5\u30A4\u30C8\u306EURL\u306F\u3053\u3061\u3089\u3078</p><input id="link" name="entry.272121178" type="url" placeholder="https://"></label><input type="hidden" name="entry.26876002" value=""><div class="${e.column} ${e.prColumn}"><button class="${e.agreementswitch} ${e.serif}" id="agreement" type="button">\u5229\u7528\u898F\u7D04\u3092\u8AAD\u3080</button><hr><label class="${e.column} ${e.label}" style="margin-left=2em" for="check"><input class="${e.inlineBlock} ${e.checkbox}" id="check" type="checkbox" required><p class="${e.subinfo} ${e.required} ${e.inlineBlock}">\u5FC5\u9808</p><p class="${e.agreement} ${e.inlineBlock}">\u5229\u7528\u898F\u7D04\u306B\u540C\u610F\u3057\u307E\u3059\u3002</p></label></div><button name="button" type="submit" value="\u9001\u4FE1">\u9001\u4FE1</button></form></div><div class="${e.footer} ${e.invisible} ${e.content}"><div class="${e.linkbox}"><a class="${e.link} ${e.about}" href="https://twitter.com/majipoem" target="_blank" rel="author">\u307F\u3093\u306A\u306E\u30DE\u30B8\u30DD\u30A8\u30E0\u306B\u3064\u3044\u3066</a><a class="${e.link} ${e.twitter}" href="https://twitter.com/majipoem" target="_blank" rel="author">Twitter</a></div></div><div class="${e.visible} ${e.invisible} ${e.thankblob} ${e.ed}"><div style="background-color:#f4f4f4;pointer-events:none"><p>\u6295\u7A3F\u3055\u308C\u307E\u3057\u305F\u3002</p></div></div></div>`);window.onscroll=()=>{document.getElementById("app").classList.contains(e.scLock)||L()};function Te(){return(()=>{const i=Ie.cloneNode(!0),n=i.firstChild,a=n.firstChild,r=a.nextSibling,t=n.nextSibling,l=t.firstChild,c=l.firstChild,o=c.nextSibling,w=o.nextSibling,N=w.nextSibling,S=N.nextSibling,C=S.nextSibling,A=C.nextSibling,f=A.nextSibling,u=f.firstChild,q=u.nextSibling,I=q.nextSibling,T=I.firstChild,O=f.nextSibling,R=t.nextSibling,j=R.nextSibling,b=j.firstChild,H=b.firstChild;return m(a,"click",L,!0),G(r,"src",qe),m(l,"submit",Se),m(u,"click",Ae,!0),m(T,"change",Ce),J(s=>{const h=e.App,p=e.header,$=e.blob,v=e.appbody,g=e.buttonBelow,k=e.blob,x=e.thankmessage;return h!==s._v$&&(i.className=s._v$=h),p!==s._v$2&&(n.className=s._v$2=p),$!==s._v$3&&(a.className=s._v$3=$),v!==s._v$4&&(t.className=s._v$4=v),g!==s._v$5&&(O.className=s._v$5=g),k!==s._v$6&&(b.className=s._v$6=k),x!==s._v$7&&(H.className=s._v$7=x),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),i})()}F(["click"]);M(Te,document.getElementById("root"));const _=108,d=document.getElementsByTagName("textarea"),E=document.getElementsByClassName(e.required);function Oe(){this.style.height="auto",this.scrollHeight>_?this.style.height=this.scrollHeight+"px":this.style.height=_+"px"}function Re(){this.value==""?E[0].classList.remove(e.filled):E[0].classList.add(e.filled)}d[0].addEventListener("input",Re,!1);for(let i=0;i<d.length;i++)d[i].value==""?d[i].setAttribute("style","height:"+_+"px;overflow-y:hidden;"):d[i].setAttribute("style","height:"+d[i].scrollHeight+"px;overflow-y:hidden;"),d[i].addEventListener("input",Oe,!1);
