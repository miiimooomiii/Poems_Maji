const Ge=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerpolicy&&(o.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?o.credentials="include":l.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}};Ge();const k={};let ze=Ye;const J={},M=1,z=2,Oe={owned:null,cleanups:null,context:null,owner:null};var w=null;let K=null,F=null,x=null,L=null,le=0;function Qe(e,n){const t=w,i=e.length===0,l=i?Oe:{owned:null,cleanups:null,context:null,owner:n||t},o=i?e:()=>e(()=>oe(l));w=l;try{return se(o,!0)}finally{w=t}}function H(e,n,t){const i=Je(e,n,!1,M);Pe(i)}function Ke(e){if(F)return e();let n;const t=F=[];try{n=e()}finally{F=null}return se(()=>{for(let i=0;i<t.length;i+=1){const l=t[i];if(l.pending!==J){const o=l.pending;l.pending=J,Ie(l,o)}}},!1),n}function qe(e){let n;return n=e(),n}function Ie(e,n,t){if(F)return e.pending===J&&F.push(e),e.pending=n,n;if(e.comparator&&e.comparator(e.value,n))return n;let i=!1;return e.value=n,e.observers&&e.observers.length&&se(()=>{for(let l=0;l<e.observers.length;l+=1){const o=e.observers[l];i&&K.disposed.has(o),(i&&!o.tState||!i&&!o.state)&&(o.pure?x.push(o):L.push(o),o.observers&&Ue(o)),i||(o.state=M)}if(x.length>1e6)throw x=[],new Error},!1),n}function Pe(e){if(!e.fn)return;oe(e);const n=w,t=le;w=e,Ze(e,e.value,t),w=n}function Ze(e,n,t){let i;try{i=e.fn(n)}catch(l){Re(l)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?Ie(e,i):e.value=i,e.updatedAt=t)}function Je(e,n,t,i=M,l){const o={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:w,context:null,pure:t};return w===null||w!==Oe&&(w.owned?w.owned.push(o):w.owned=[o]),o}function Xe(e){const n=K;if(e.state===0||n)return;if(e.state===z||n)return ee(e);if(e.suspense&&qe(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<le);)(e.state||n)&&t.push(e);for(let i=t.length-1;i>=0;i--)if(e=t[i],e.state===M||n)Pe(e);else if(e.state===z||n){const l=x;x=null,ee(e,t[0]),x=l}}function se(e,n){if(x)return e();let t=!1;n||(x=[]),L?t=!0:L=[],le++;try{const i=e();return et(t),i}catch(i){x||(L=null),Re(i)}}function et(e){x&&(Ye(x),x=null),!e&&(L.length?Ke(()=>{ze(L),L=null}):L=null)}function Ye(e){for(let n=0;n<e.length;n++)Xe(e[n])}function ee(e,n){const t=K;e.state=0;for(let i=0;i<e.sources.length;i+=1){const l=e.sources[i];l.sources&&(l.state===M||t?l!==n&&Xe(l):(l.state===z||t)&&ee(l,n))}}function Ue(e){const n=K;for(let t=0;t<e.observers.length;t+=1){const i=e.observers[t];(!i.state||n)&&(i.state=z,i.pure?x.push(i):L.push(i),i.observers&&Ue(i))}}function oe(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),i=e.sourceSlots.pop(),l=t.observers;if(l&&l.length){const o=l.pop(),f=t.observerSlots.pop();i<l.length&&(o.sourceSlots[f]=i,l[i]=o,t.observerSlots[i]=f)}}if(e.owned){for(n=0;n<e.owned.length;n++)oe(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function Re(e){throw e}function De(e,n){return qe(()=>e(n||{}))}function tt(e,n,t){let i=t.length,l=n.length,o=i,f=0,a=0,_=n[l-1].nextSibling,d=null;for(;f<l||a<o;){if(n[f]===t[a]){f++,a++;continue}for(;n[l-1]===t[o-1];)l--,o--;if(l===f){const v=o<i?a?t[a-1].nextSibling:t[o-a]:_;for(;a<o;)e.insertBefore(t[a++],v)}else if(o===a)for(;f<l;)(!d||!d.has(n[f]))&&n[f].remove(),f++;else if(n[f]===t[o-1]&&t[a]===n[l-1]){const v=n[--l].nextSibling;e.insertBefore(t[a++],n[f++].nextSibling),e.insertBefore(t[--o],v),n[l]=t[o]}else{if(!d){d=new Map;let g=a;for(;g<o;)d.set(t[g],g++)}const v=d.get(n[f]);if(v!=null)if(a<v&&v<o){let g=f,S=1,h;for(;++g<l&&g<o&&!((h=d.get(n[g]))==null||h!==v+S);)S++;if(S>v-a){const C=n[f];for(;a<v;)e.insertBefore(t[a++],C)}else e.replaceChild(t[a++],n[f++])}else f++;else n[f++].remove()}}}const ke="_$DX_DELEGATE";function nt(e,n,t){let i;return Qe(l=>{i=l,n===document?e():Me(n,e(),n.firstChild?null:void 0,t)}),()=>{i(),n.textContent=""}}function Fe(e,n,t){const i=document.createElement("template");i.innerHTML=e;let l=i.content.firstChild;return t&&(l=l.firstChild),l}function He(e,n=window.document){const t=n[ke]||(n[ke]=new Set);for(let i=0,l=e.length;i<l;i++){const o=e[i];t.has(o)||(t.add(o),n.addEventListener(o,it))}}function I(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function te(e,n,t,i){if(i)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const l=t[0];e.addEventListener(n,t[0]=o=>l.call(e,t[1],o))}else e.addEventListener(n,t)}function Me(e,n,t,i){if(t!==void 0&&!i&&(i=[]),typeof n!="function")return Q(e,n,i,t);H(l=>Q(e,n(),l,t),i)}function it(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),k.registry&&!k.done&&(k.done=!0,document.querySelectorAll("[id^=pl-]").forEach(i=>i.remove()));t!==null;){const i=t[n];if(i&&!t.disabled){const l=t[`${n}Data`];if(l!==void 0?i.call(t,l,e):i.call(t,e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function Q(e,n,t,i,l){for(k.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const o=typeof n,f=i!==void 0;if(e=f&&t[0]&&t[0].parentNode||e,o==="string"||o==="number"){if(k.context)return t;if(o==="number"&&(n=n.toString()),f){let a=t[0];a&&a.nodeType===3?a.data=n:a=document.createTextNode(n),t=q(e,t,i,a)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||o==="boolean"){if(k.context)return t;t=q(e,t,i)}else{if(o==="function")return H(()=>{let a=n();for(;typeof a=="function";)a=a();t=Q(e,a,t,i)}),()=>t;if(Array.isArray(n)){const a=[],_=t&&Array.isArray(t);if(ne(a,n,t,l))return H(()=>t=Q(e,a,t,i,!0)),()=>t;if(k.context){for(let d=0;d<a.length;d++)if(a[d].parentNode)return t=a}if(a.length===0){if(t=q(e,t,i),f)return t}else _?t.length===0?Ee(e,a,i):tt(e,t,a):(t&&q(e),Ee(e,a));t=a}else if(n instanceof Node){if(k.context&&n.parentNode)return t=f?[n]:n;if(Array.isArray(t)){if(f)return t=q(e,t,i,n);q(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function ne(e,n,t,i){let l=!1;for(let o=0,f=n.length;o<f;o++){let a=n[o],_=t&&t[o];if(a instanceof Node)e.push(a);else if(!(a==null||a===!0||a===!1))if(Array.isArray(a))l=ne(e,a,_)||l;else if(typeof a=="function")if(i){for(;typeof a=="function";)a=a();l=ne(e,Array.isArray(a)?a:[a],_)||l}else e.push(a),l=!0;else{const d=String(a);_&&_.nodeType===3&&_.data===d?e.push(_):e.push(document.createTextNode(d))}}return l}function Ee(e,n,t){for(let i=0,l=n.length;i<l;i++)e.insertBefore(n[i],t)}function q(e,n,t,i){if(t===void 0)return e.textContent="";const l=i||document.createTextNode("");if(n.length){let o=!1;for(let f=n.length-1;f>=0;f--){const a=n[f];if(l!==a){const _=a.parentNode===e;!o&&!f?_?e.replaceChild(l,a):e.insertBefore(l,t):_&&a.remove()}else o=!0}}else e.insertBefore(l,t);return[l]}const lt="_App_jlm01_1",st="_header_jlm01_7",ot="_appbody_jlm01_10",rt="_form_jlm01_21",at="_headmargin_jlm01_25",ct="_column_jlm01_29",ft="_prColumn_jlm01_48",ut="_label_jlm01_57",dt="_subinfo_jlm01_64",_t="_required_jlm01_70",mt="_filled_jlm01_84",vt="_visible_jlm01_87",gt="_invisible_jlm01_91",ht="_disable_jlm01_96",bt="_fixed_jlm01_99",$t="_blob_jlm01_102",pt="_transform_jlm01_1",yt="_movement_jlm01_1",xt="_mini_jlm01_121",wt="_large_jlm01_125",St="_logo_jlm01_134",Nt="_thankblob_jlm01_143",Ct="_thankmessage_jlm01_146",jt="_ag_jlm01_154",Bt="_agreementswitch_jlm01_157",Lt="_checkbox_jlm01_170",Tt="_agreement_jlm01_157",kt="_dotsBox_jlm01_182",Et="_submitFontsize_jlm01_190",At="_dots_jlm01_182",Ot="_inlineBlock_jlm01_202",qt="_footer_jlm01_205",It="_linkbox_jlm01_210",Pt="_link_jlm01_210",Xt="_labelTwitter_jlm01_221",Yt="_about_jlm01_227",Ut="_twitter_jlm01_228",Rt="_idol_jlm01_238",Dt="_left_jlm01_247",Ft="_right_jlm01_250";var r={App:lt,header:st,appbody:ot,form:rt,headmargin:at,column:ct,prColumn:ft,label:ut,subinfo:dt,required:_t,filled:mt,visible:vt,invisible:gt,disable:ht,fixed:bt,blob:$t,transform:pt,movement:yt,mini:xt,large:wt,logo:St,thankblob:Nt,thankmessage:Ct,ag:jt,agreementswitch:Bt,checkbox:Lt,agreement:Tt,dotsBox:kt,submitFontsize:Et,dots:At,inlineBlock:Ot,footer:qt,linkbox:It,link:Pt,labelTwitter:Xt,about:Yt,twitter:Ut,idol:Rt,left:Dt,right:Ft},Ve={exports:{}};(function(e,n){(function(){function t(){var i=window,l=document;if("scrollBehavior"in l.documentElement.style&&i.__forceSmoothScrollPolyfill__!==!0)return;var o=i.HTMLElement||i.Element,f=468,a={scroll:i.scroll||i.scrollTo,scrollBy:i.scrollBy,elementScroll:o.prototype.scroll||g,scrollIntoView:o.prototype.scrollIntoView},_=i.performance&&i.performance.now?i.performance.now.bind(i.performance):Date.now;function d(s){var u=["MSIE ","Trident/","Edge/"];return new RegExp(u.join("|")).test(s)}var v=d(i.navigator.userAgent)?1:0;function g(s,u){this.scrollLeft=s,this.scrollTop=u}function S(s){return .5*(1-Math.cos(Math.PI*s))}function h(s){if(s===null||typeof s!="object"||s.behavior===void 0||s.behavior==="auto"||s.behavior==="instant")return!0;if(typeof s=="object"&&s.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+s.behavior+" is not a valid value for enumeration ScrollBehavior.")}function C(s,u){if(u==="Y")return s.clientHeight+v<s.scrollHeight;if(u==="X")return s.clientWidth+v<s.scrollWidth}function E(s,u){var m=i.getComputedStyle(s,null)["overflow"+u];return m==="auto"||m==="scroll"}function A(s){var u=C(s,"Y")&&E(s,"Y"),m=C(s,"X")&&E(s,"X");return u||m}function O(s){for(;s!==l.body&&A(s)===!1;)s=s.parentNode||s.host;return s}function j(s){var u=_(),m,b,$,p=(u-s.startTime)/f;p=p>1?1:p,m=S(p),b=s.startX+(s.x-s.startX)*m,$=s.startY+(s.y-s.startY)*m,s.method.call(s.scrollable,b,$),(b!==s.x||$!==s.y)&&i.requestAnimationFrame(j.bind(i,s))}function N(s,u,m){var b,$,p,B,T=_();s===l.body?(b=i,$=i.scrollX||i.pageXOffset,p=i.scrollY||i.pageYOffset,B=a.scroll):(b=s,$=s.scrollLeft,p=s.scrollTop,B=g),j({scrollable:b,method:B,startTime:T,startX:$,startY:p,x:u,y:m})}i.scroll=i.scrollTo=function(){if(arguments[0]!==void 0){if(h(arguments[0])===!0){a.scroll.call(i,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:i.scrollX||i.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:i.scrollY||i.pageYOffset);return}N.call(i,l.body,arguments[0].left!==void 0?~~arguments[0].left:i.scrollX||i.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:i.scrollY||i.pageYOffset)}},i.scrollBy=function(){if(arguments[0]!==void 0){if(h(arguments[0])){a.scrollBy.call(i,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}N.call(i,l.body,~~arguments[0].left+(i.scrollX||i.pageXOffset),~~arguments[0].top+(i.scrollY||i.pageYOffset))}},o.prototype.scroll=o.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(h(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value could not be converted");a.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var s=arguments[0].left,u=arguments[0].top;N.call(this,this,typeof s>"u"?this.scrollLeft:~~s,typeof u>"u"?this.scrollTop:~~u)}},o.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(h(arguments[0])===!0){a.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},o.prototype.scrollIntoView=function(){if(h(arguments[0])===!0){a.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var s=O(this),u=s.getBoundingClientRect(),m=this.getBoundingClientRect();s!==l.body?(N.call(this,s,s.scrollLeft+m.left-u.left,s.scrollTop+m.top-u.top),i.getComputedStyle(s).position!=="fixed"&&i.scrollBy({left:u.left,top:u.top,behavior:"smooth"})):i.scrollBy({left:m.left,top:m.top,behavior:"smooth"})}}e.exports={polyfill:t}})()})(Ve);var Ht=Ve.exports;Ht.polyfill();const Ae=document.getElementsByClassName(r.required);let Z=()=>scroll({top:0,left:0,behavior:"smooth"});const We=()=>{const e=document.getElementById("app"),n=document.getElementById("blob"),t=document.getElementsByClassName("op"),i=document.getElementsByClassName("content"),l=document.getElementById("idols");if(n.disabled=!0,n.classList.contains(r.mini)){for(const o of i)o.classList.replace(r.visible,r.invisible);l.classList.replace(r.invisible,r.visible),Z(),setTimeout(()=>{for(const o of t)o.classList.remove(r.invisible);n.classList.remove(r.mini),setTimeout(()=>e.classList.remove("scLock"),200)},400)}else l.classList.replace(r.visible,r.invisible),e.classList.add("scLock"),n.classList.add(r.mini),Z(),setTimeout(()=>scroll(0,0),390),setTimeout(()=>{Z();for(const o of t)o.classList.add(r.invisible);for(const o of i)o.classList.replace(r.invisible,r.visible)},400);setTimeout(()=>{n.disabled=!1},400)};function Mt(){this.checked?Ae[1].classList.add(r.filled):Ae[1].classList.remove(r.filled)}function Vt(){}const Wt="_serif_1ihza_1",Gt="_serifBold_1ihza_5";var y={serif:Wt,serifBold:Gt},zt="/majipoem/assets/logo.27d13b32.svg";const Qt="_js_1i3dm_1",Kt="_loading_1i3dm_1",Zt="_loaderAnim_1i3dm_1",Jt="_fix_1i3dm_31",en="_frame_1i3dm_61",tn="_frame__title_1i3dm_67",nn="_frame__tagline_1i3dm_73",ln="_frame__links_1i3dm_78",sn="_github_1i3dm_86",on="_content_1i3dm_90",rn="_content__item_1i3dm_103",an="_button_1i3dm_122",cn="_graphicStroke_1i3dm_125",fn="_graphicScribble_1i3dm_132",un="_lineUp_1i3dm_1",dn="_glitchText_1i3dm_1",_n="_glitchLine_1i3dm_1",mn="_coverUp_1i3dm_1",vn="_graphic_1i3dm_122",gn="_frame__author_1i3dm_508";var D={js:Qt,loading:Kt,loaderAnim:Zt,fix:Jt,frame:en,frame__title:tn,frame__tagline:nn,frame__links:ln,github:sn,content:on,content__item:rn,button:an,"graphic--slide":"_graphic--slide_1i3dm_122",graphicStroke:cn,"graphic--arc":"_graphic--arc_1i3dm_128",graphicScribble:fn,"button--metis":"_button--metis_1i3dm_136","button--io":"_button--io_1i3dm_149","button--thebe":"_button--thebe_1i3dm_174","button--leda":"_button--leda_1i3dm_200","button--ersa":"_button--ersa_1i3dm_236","button--elara":"_button--elara_1i3dm_261","button--dia":"_button--dia_1i3dm_281","button--kale":"_button--kale_1i3dm_313",lineUp:un,"button--carpo":"_button--carpo_1i3dm_337","button--helike":"_button--helike_1i3dm_359",glitchText:dn,glitchLine:_n,"button--mneme":"_button--mneme_1i3dm_374",coverUp:mn,"button--iocaste":"_button--iocaste_1i3dm_395",graphic:vn,"button--herse":"_button--herse_1i3dm_415","button--carme":"_button--carme_1i3dm_434","button--eirene":"_button--eirene_1i3dm_447","frame__title-wrap":"_frame__title-wrap_1i3dm_491",frame__author:gn};const hn=Fe('<form action="https://docs.google.com/forms/u/1/d/e/1FAIpQLScUpiYpcL0d3oUgfNqO4brZUHon1zakVLV6fQe1DyUsw7DB8A/formResponse" method="post" target="hidden_iframe" autocomplete="off"><iframe id="hidden_iframe" name="hidden_iframe"></iframe><label for="title">\u984C\u540D<p>\u7A7A\u6B04\u306F\u300E\u7121\u984C\u300F\u3068\u306A\u308A\u307E\u3059</p><input id="title" name="entry.757242028" type="text" placeholder="\u300E\u7121\u984C\u300F"></label><label for="idol">\u30A2\u30A4\u30C9\u30EB\u540D<input id="idol" name="entry.1065417873" type="text" required><p style="left: 14em;">\u5FC5\u9808</p></label><label for="poem">\u672C\u6587<textarea id="poem" name="entry.1293717028" required></textarea><p>\u5FC5\u9808</p></label><label for="name">\u8457\u8005\u540D<p>\u7A7A\u6B04\u306F\u300E\u533F\u540D\u300F\u3068\u306A\u308A\u307E\u3059</p><input id="name" name="entry.1577385573" type="text" placeholder="\u300E\u533F\u540D\u300F"></label><label for="addition">\u4ED8\u8A18<p>\u89E3\u8AAC\u3084\u88DC\u8DB3\u306A\u3069\u306F\u3053\u3061\u3089\u3078</p><textarea id="addition" name="entry.1541480737"></textarea></label><label for="link">\u30EA\u30F3\u30AF<p>SNS\u3084\u30B5\u30A4\u30C8\u306EURL\u306F\u3053\u3061\u3089\u3078</p><input id="link" name="" type="url" placeholder="https://"></label><input type="hidden" name="entry.1322311763" value=""><div><button id="agreement" type="button">\u5229\u7528\u898F\u7D04\u3092\u8AAD\u3080</button><hr><label for="check"><input id="check" type="checkbox"><p>\u5FC5\u9808</p><p>\u5229\u7528\u898F\u7D04\u306B\u540C\u610F\u3057\u307E\u3059\u3002</p></label></div><div><div></div><button name="button" type="submit" value="\u6295\u7A3F\u3059\u308B"><div>\u6295\u7A3F\u3059\u308B</div><svg height="9" viewBox="0 0 101 9"><path d="M.426 1.973C4.144 1.567 17.77-.514 21.443 1.48 24.296 3.026 24.844 4.627 27.5 7c3.075 2.748 6.642-4.141 10.066-4.688 7.517-1.2 13.237 5.425 17.59 2.745C58.5 3 60.464-1.786 66 2c1.996 1.365 3.174 3.737 5.286 4.41 5.423 1.727 25.34-7.981 29.14-1.294" pathLength="1"></path></svg></button></div></form>'),bn=()=>{var e=confirm("\u6295\u7A3F\u3057\u307E\u3059\u304B\uFF1F");e&&alert("\u3054\u6295\u7A3F\u3042\u308A\u304C\u3068\u3046\u3054\u3056\u3044\u307E\u3059\uFF01\u{1F389}")},$n=()=>(()=>{const e=hn.cloneNode(!0),n=e.firstChild,t=n.nextSibling,i=t.firstChild,l=i.nextSibling,o=t.nextSibling,f=o.firstChild,a=f.nextSibling,_=a.nextSibling,d=o.nextSibling,v=d.firstChild,g=v.nextSibling,S=g.nextSibling,h=d.nextSibling,C=h.firstChild,E=C.nextSibling,A=h.nextSibling,O=A.firstChild,j=O.nextSibling,N=A.nextSibling,s=N.firstChild,u=s.nextSibling,m=N.nextSibling,b=m.nextSibling,$=b.firstChild,p=$.nextSibling,B=p.nextSibling,T=B.firstChild,P=T.nextSibling,V=P.nextSibling,X=b.nextSibling,Y=X.firstChild,U=Y.nextSibling,W=U.firstChild,G=W.nextSibling;return e.addEventListener("submit",bn),n.style.setProperty("display","none"),te($,"click",Vt,!0),te(T,"change",Mt),H(c=>{const R=`${r.form} ${r.invisible} content`,re=`${r.column} ${r.label} ${y.serifBold}`,ae=`${r.subinfo} ${y.serif}`,ce=`${r.column} ${r.label} ${y.serifBold}`,fe=`${r.requiredText}`,ue=`${r.subinfo} ${r.required} ${r.inlineBlock}`,de=`${r.column} ${r.label} ${y.serifBold}`,_e=`${r.requiredText}`,me=`${r.subinfo} ${r.required} ${r.inlineBlock}`,ve=`${r.column} ${r.label} ${y.serifBold}`,ge=`${r.subinfo} ${y.serif}`,he=`${r.column} ${r.label} ${y.serifBold}`,be=`${r.subinfo} ${y.serif}`,$e=`${r.column} ${r.label} ${y.serifBold} ${r.disable}`,pe=`${r.subinfo} ${y.serif}`,ye=`${r.column} ${r.prColumn} ${r.disable}`,xe=`${r.agreementswitch} ${y.serif}`,we=`${r.column} ${r.label} ${r.ag}`,Se=`${r.inlineBlock} ${r.checkbox}`,Ne=`${r.subinfo} ${r.required} ${r.inlineBlock}`,Ce=`${r.agreement} ${r.inlineBlock} ${y.serif}`,je=`${r.dotsBox} ${r.submitFontsize}`,Be=`${r.dots}`,Le=`${r.dotsBox} ${D.fix} ${D.button}`,Te=`${D.graphic} ${D.graphicStroke} ${D.graphicScribble}`;return R!==c._v$&&(e.className=c._v$=R),re!==c._v$2&&(t.className=c._v$2=re),ae!==c._v$3&&(l.className=c._v$3=ae),ce!==c._v$4&&(o.className=c._v$4=ce),fe!==c._v$5&&(a.className=c._v$5=fe),ue!==c._v$6&&(_.className=c._v$6=ue),de!==c._v$7&&(d.className=c._v$7=de),_e!==c._v$8&&(g.className=c._v$8=_e),me!==c._v$9&&(S.className=c._v$9=me),ve!==c._v$10&&(h.className=c._v$10=ve),ge!==c._v$11&&(E.className=c._v$11=ge),he!==c._v$12&&(A.className=c._v$12=he),be!==c._v$13&&(j.className=c._v$13=be),$e!==c._v$14&&(N.className=c._v$14=$e),pe!==c._v$15&&(u.className=c._v$15=pe),ye!==c._v$16&&(b.className=c._v$16=ye),xe!==c._v$17&&($.className=c._v$17=xe),we!==c._v$18&&(B.className=c._v$18=we),Se!==c._v$19&&(T.className=c._v$19=Se),Ne!==c._v$20&&(P.className=c._v$20=Ne),Ce!==c._v$21&&(V.className=c._v$21=Ce),je!==c._v$22&&(X.className=c._v$22=je),Be!==c._v$23&&(Y.className=c._v$23=Be),Le!==c._v$24&&(U.className=c._v$24=Le),Te!==c._v$25&&I(G,"class",c._v$25=Te),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0,_v$17:void 0,_v$18:void 0,_v$19:void 0,_v$20:void 0,_v$21:void 0,_v$22:void 0,_v$23:void 0,_v$24:void 0,_v$25:void 0}),e})();He(["click"]);var pn="/majipoem/assets/nagi.268a7c43.webp",yn="/majipoem/assets/nagi.e7f1a1ae.png",xn="/majipoem/assets/nono.adf51c68.webp",wn="/majipoem/assets/nono.01969b9b.png";const Sn=Fe('<div id="app"><header><button id="blob"></button><img alt="logo"><div id="idols"><picture><source type="image/webp"><img></picture><picture><source type="image/webp"><img></picture></div></header><div></div><div><div><p>Twitter</p><a href="https://twitter.com/NONO_info0827" target="_blank" rel="author">\u306E\u306Einfo</a><a href="https://twitter.com/mansionofnagi" target="_blank" rel="author">\u51EA\u306E\u90B8\u5B85</a></div></div><div><div><p>\u6295\u7A3F\u3055\u308C\u307E\u3057\u305F\u3002</p></div></div></div>');window.onscroll=()=>{document.getElementById("app").classList.contains("scLock")||We()};const Nn=()=>(()=>{const e=Sn.cloneNode(!0),n=e.firstChild,t=n.firstChild,i=t.nextSibling,l=i.nextSibling,o=l.firstChild,f=o.firstChild,a=f.nextSibling,_=o.nextSibling,d=_.firstChild,v=d.nextSibling,g=n.nextSibling,S=g.nextSibling,h=S.firstChild,C=h.firstChild,E=C.nextSibling,A=E.nextSibling,O=S.nextSibling,j=O.firstChild,N=j.firstChild;return te(t,"click",We,!0),I(i,"src",zt),l.style.setProperty("transition-duration","200ms"),I(f,"srcset",pn),I(a,"src",yn),I(d,"srcset",xn),I(v,"src",wn),Me(g,De($n,{})),j.style.setProperty("backgroundColor","#f4f4f4"),j.style.setProperty("pointerEvents","none"),H(s=>{const u=r.App,m=r.header,b=r.blob,$=`${r.logo} op`,p=`${r.visible}`,B=`${r.idol} ${r.left}`,T=`${r.idol} ${r.right}`,P=r.appbody,V=`${r.footer} ${r.invisible} content`,X=`${r.linkbox}`,Y=`${y.serif} ${r.labelTwitter}`,U=`${r.link} ${r.twitter}`,W=`${r.link} ${r.twitter}`,G=`${r.visible} ${r.invisible} ${r.thankblob} ed`,c=r.blob,R=r.thankmessage;return u!==s._v$&&(e.className=s._v$=u),m!==s._v$2&&(n.className=s._v$2=m),b!==s._v$3&&(t.className=s._v$3=b),$!==s._v$4&&(i.className=s._v$4=$),p!==s._v$5&&(l.className=s._v$5=p),B!==s._v$6&&(a.className=s._v$6=B),T!==s._v$7&&(v.className=s._v$7=T),P!==s._v$8&&(g.className=s._v$8=P),V!==s._v$9&&(S.className=s._v$9=V),X!==s._v$10&&(h.className=s._v$10=X),Y!==s._v$11&&(C.className=s._v$11=Y),U!==s._v$12&&(E.className=s._v$12=U),W!==s._v$13&&(A.className=s._v$13=W),G!==s._v$14&&(O.className=s._v$14=G),c!==s._v$15&&(j.className=s._v$15=c),R!==s._v$16&&(N.className=s._v$16=R),s},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0,_v$11:void 0,_v$12:void 0,_v$13:void 0,_v$14:void 0,_v$15:void 0,_v$16:void 0}),e})();He(["click"]);nt(()=>De(Nn,{}),document.getElementById("root"));const ie=108,Cn=document.getElementsByTagName("textarea"),jn=document.getElementsByClassName(r.requiredText);function Bn(){this.style.height="auto",this.scrollHeight>ie?this.style.height=this.scrollHeight+"px":this.style.height=ie+"px"}function Ln(){this.value.replaceAll("\u3000","").trim()==""?this.classList.remove(r.filled):this.classList.add(r.filled)}for(const e of Cn)e.value==""?e.setAttribute("style","height:"+ie+"px;overflow-y:hidden;"):e.setAttribute("style","height:"+e.scrollHeight+"px;overflow-y:hidden;"),e.addEventListener("input",Bn,!1);for(const e of jn)e.addEventListener("input",Ln,!1);
