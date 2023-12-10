"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{154:(M,h,r)=>{r.d(h,{c:()=>s});var f=r(5960),l=r(9951),c=r(6535);const s=(e,i)=>{let t,n;const m=(a,w,E)=>{if(typeof document>"u")return;const y=document.elementFromPoint(a,w);y&&i(y)?y!==t&&(o(),_(y,E)):o()},_=(a,w)=>{t=a,n||(n=t);const E=t;(0,f.w)(()=>E.classList.add("ion-activated")),w()},o=(a=!1)=>{if(!t)return;const w=t;(0,f.w)(()=>w.classList.remove("ion-activated")),a&&n!==t&&t.click(),t=void 0};return(0,c.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:a=>m(a.currentX,a.currentY,l.a),onMove:a=>m(a.currentX,a.currentY,l.b),onEnd:()=>{o(!0),(0,l.h)(),n=void 0}})}},1836:(M,h,r)=>{r.d(h,{g:()=>l});var f=r(1848);const l=()=>{if(void 0!==f.w)return f.w.Capacitor}},983:(M,h,r)=>{r.d(h,{c:()=>f,i:()=>l});const f=(c,s,e)=>"function"==typeof e?e(c,s):"string"==typeof e?c[e]===s[e]:Array.isArray(s)?s.includes(c):c===s,l=(c,s,e)=>void 0!==c&&(Array.isArray(c)?c.some(i=>f(i,s,e)):f(c,s,e))},4162:(M,h,r)=>{r.d(h,{i:()=>f});const f=l=>l&&""!==l.dir?"rtl"===l.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},8434:(M,h,r)=>{r.r(h),r.d(h,{startFocusVisible:()=>s});const f="ion-focused",c=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],s=e=>{let i=[],t=!0;const n=e?e.shadowRoot:document,m=e||document.body,_=p=>{i.forEach(u=>u.classList.remove(f)),p.forEach(u=>u.classList.add(f)),i=p},o=()=>{t=!1,_([])},a=p=>{t=c.includes(p.key),t||_([])},w=p=>{if(t&&void 0!==p.composedPath){const u=p.composedPath().filter(g=>!!g.classList&&g.classList.contains("ion-focusable"));_(u)}},E=()=>{n.activeElement===m&&_([])};return n.addEventListener("keydown",a),n.addEventListener("focusin",w),n.addEventListener("focusout",E),n.addEventListener("touchstart",o,{passive:!0}),n.addEventListener("mousedown",o),{destroy:()=>{n.removeEventListener("keydown",a),n.removeEventListener("focusin",w),n.removeEventListener("focusout",E),n.removeEventListener("touchstart",o),n.removeEventListener("mousedown",o)},setFocus:_}}},9749:(M,h,r)=>{r.d(h,{c:()=>l});var f=r(512);const l=i=>{const t=i;let n;return{hasLegacyControl:()=>{if(void 0===n){const _=void 0!==t.label||c(t),o=t.hasAttribute("aria-label")||t.hasAttribute("aria-labelledby")&&null===t.shadowRoot,a=(0,f.h)(t);n=!0===t.legacy||!_&&!o&&null!==a}return n}}},c=i=>!!(s.includes(i.tagName)&&null!==i.querySelector('[slot="label"]')||e.includes(i.tagName)&&""!==i.textContent),s=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],e=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},9951:(M,h,r)=>{r.d(h,{I:()=>l,a:()=>t,b:()=>n,c:()=>i,d:()=>_,h:()=>m});var f=r(1836),l=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(l||{});const s={getEngine(){const o=window.TapticEngine;if(o)return o;const a=(0,f.g)();return null!=a&&a.isPluginAvailable("Haptics")?a.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const a=(0,f.g)();return"web"!==(null==a?void 0:a.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,f.g)(),impact(o){const a=this.getEngine();if(!a)return;const w=this.isCapacitor()?o.style:o.style.toLowerCase();a.impact({style:w})},notification(o){const a=this.getEngine();if(!a)return;const w=this.isCapacitor()?o.type:o.type.toLowerCase();a.notification({type:w})},selection(){const o=this.isCapacitor()?l.Light:"light";this.impact({style:o})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},e=()=>s.available(),i=()=>{e()&&s.selection()},t=()=>{e()&&s.selectionStart()},n=()=>{e()&&s.selectionChanged()},m=()=>{e()&&s.selectionEnd()},_=o=>{e()&&s.impact(o)}},7946:(M,h,r)=>{r.d(h,{I:()=>i,a:()=>_,b:()=>e,c:()=>w,d:()=>y,f:()=>o,g:()=>m,i:()=>n,p:()=>E,r:()=>p,s:()=>a});var f=r(5861),l=r(512),c=r(2400);const e="ion-content",i=".ion-content-scroll-host",t=`${e}, ${i}`,n=u=>"ION-CONTENT"===u.tagName,m=function(){var u=(0,f.Z)(function*(g){return n(g)?(yield new Promise(v=>(0,l.c)(g,v)),g.getScrollElement()):g});return function(v){return u.apply(this,arguments)}}(),_=u=>u.querySelector(i)||u.querySelector(t),o=u=>u.closest(t),a=(u,g)=>n(u)?u.scrollToTop(g):Promise.resolve(u.scrollTo({top:0,left:0,behavior:g>0?"smooth":"auto"})),w=(u,g,v,O)=>n(u)?u.scrollByPoint(g,v,O):Promise.resolve(u.scrollBy({top:v,left:g,behavior:O>0?"smooth":"auto"})),E=u=>(0,c.b)(u,e),y=u=>{if(n(u)){const v=u.scrollY;return u.scrollY=!1,v}return u.style.setProperty("overflow","hidden"),!0},p=(u,g)=>{n(u)?u.scrollY=g:u.style.removeProperty("overflow")}},5307:(M,h,r)=>{r.d(h,{a:()=>f,b:()=>w,c:()=>t,d:()=>E,e:()=>D,f:()=>i,g:()=>y,h:()=>c,i:()=>l,j:()=>O,k:()=>C,l:()=>n,m:()=>o,n:()=>p,o:()=>_,p:()=>e,q:()=>s,r:()=>v,s:()=>d,t:()=>a,u:()=>u,v:()=>g,w:()=>m});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},5917:(M,h,r)=>{r.d(h,{c:()=>s,g:()=>e});var f=r(1848),l=r(512),c=r(2400);const s=(t,n,m)=>{let _,o;if(void 0!==f.w&&"MutationObserver"in f.w){const y=Array.isArray(n)?n:[n];_=new MutationObserver(p=>{for(const u of p)for(const g of u.addedNodes)if(g.nodeType===Node.ELEMENT_NODE&&y.includes(g.slot))return m(),void(0,l.r)(()=>a(g))}),_.observe(t,{childList:!0})}const a=y=>{var p;o&&(o.disconnect(),o=void 0),o=new MutationObserver(u=>{m();for(const g of u)for(const v of g.removedNodes)v.nodeType===Node.ELEMENT_NODE&&v.slot===n&&E()}),o.observe(null!==(p=y.parentElement)&&void 0!==p?p:y,{subtree:!0,childList:!0})},E=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{_&&(_.disconnect(),_=void 0),E()}}},e=(t,n,m)=>{const _=null==t?0:t.toString().length,o=i(_,n);if(void 0===m)return o;try{return m(_,n)}catch(a){return(0,c.a)("Exception in provided `counterFormatter`.",a),o}},i=(t,n)=>`${t} / ${n}`},6591:(M,h,r)=>{r.r(h),r.d(h,{KEYBOARD_DID_CLOSE:()=>e,KEYBOARD_DID_OPEN:()=>s,copyVisualViewport:()=>C,keyboardDidClose:()=>u,keyboardDidOpen:()=>y,keyboardDidResize:()=>p,resetKeyboardAssist:()=>_,setKeyboardClose:()=>E,setKeyboardOpen:()=>w,startKeyboardAssist:()=>o,trackViewportChanges:()=>O});var f=r(3920);r(1836),r(1848);const s="ionKeyboardDidShow",e="ionKeyboardDidHide";let t={},n={},m=!1;const _=()=>{t={},n={},m=!1},o=d=>{if(f.K.getEngine())a(d);else{if(!d.visualViewport)return;n=C(d.visualViewport),d.visualViewport.onresize=()=>{O(d),y()||p(d)?w(d):u(d)&&E(d)}}},a=d=>{d.addEventListener("keyboardDidShow",D=>w(d,D)),d.addEventListener("keyboardDidHide",()=>E(d))},w=(d,D)=>{g(d,D),m=!0},E=d=>{v(d),m=!1},y=()=>!m&&t.width===n.width&&(t.height-n.height)*n.scale>150,p=d=>m&&!u(d),u=d=>m&&n.height===d.innerHeight,g=(d,D)=>{const L=new CustomEvent(s,{detail:{keyboardHeight:D?D.keyboardHeight:d.innerHeight-n.height}});d.dispatchEvent(L)},v=d=>{const D=new CustomEvent(e);d.dispatchEvent(D)},O=d=>{t=Object.assign({},n),n=C(d.visualViewport)},C=d=>({width:Math.round(d.width),height:Math.round(d.height),offsetTop:d.offsetTop,offsetLeft:d.offsetLeft,pageTop:d.pageTop,pageLeft:d.pageLeft,scale:d.scale})},3920:(M,h,r)=>{r.d(h,{K:()=>s,a:()=>c});var f=r(1836),l=function(e){return e.Unimplemented="UNIMPLEMENTED",e.Unavailable="UNAVAILABLE",e}(l||{}),c=function(e){return e.Body="body",e.Ionic="ionic",e.Native="native",e.None="none",e}(c||{});const s={getEngine(){const e=(0,f.g)();if(null!=e&&e.isPluginAvailable("Keyboard"))return e.Plugins.Keyboard},getResizeMode(){const e=this.getEngine();return null!=e&&e.getResizeMode?e.getResizeMode().catch(i=>{if(i.code!==l.Unimplemented)throw i}):Promise.resolve(void 0)}}},9252:(M,h,r)=>{r.d(h,{c:()=>i});var f=r(5861),l=r(1848),c=r(3920);const s=t=>{if(void 0===l.d||t===c.a.None||void 0===t)return null;const n=l.d.querySelector("ion-app");return null!=n?n:l.d.body},e=t=>{const n=s(t);return null===n?0:n.clientHeight},i=function(){var t=(0,f.Z)(function*(n){let m,_,o,a;const w=function(){var g=(0,f.Z)(function*(){const v=yield c.K.getResizeMode(),O=void 0===v?void 0:v.mode;m=()=>{void 0===a&&(a=e(O)),o=!0,E(o,O)},_=()=>{o=!1,E(o,O)},null==l.w||l.w.addEventListener("keyboardWillShow",m),null==l.w||l.w.addEventListener("keyboardWillHide",_)});return function(){return g.apply(this,arguments)}}(),E=(g,v)=>{n&&n(g,y(v))},y=g=>{if(0===a||a===e(g))return;const v=s(g);return null!==v?new Promise(O=>{const d=new ResizeObserver(()=>{v.clientHeight===a&&(d.disconnect(),O())});d.observe(v)}):void 0};return yield w(),{init:w,destroy:()=>{null==l.w||l.w.removeEventListener("keyboardWillShow",m),null==l.w||l.w.removeEventListener("keyboardWillHide",_),m=_=void 0},isKeyboardVisible:()=>o}});return function(m){return t.apply(this,arguments)}}()},9229:(M,h,r)=>{r.d(h,{c:()=>l});var f=r(5861);const l=()=>{let c;return{lock:function(){var e=(0,f.Z)(function*(){const i=c;let t;return c=new Promise(n=>t=n),void 0!==i&&(yield i),t});return function(){return e.apply(this,arguments)}}()}}},9150:(M,h,r)=>{r.d(h,{c:()=>c});var f=r(1848),l=r(512);const c=(s,e,i)=>{let t;const n=()=>!(void 0===e()||void 0!==s.label||null===i()),_=()=>{const a=e();if(void 0===a)return;if(!n())return void a.style.removeProperty("width");const w=i().scrollWidth;if(0===w&&null===a.offsetParent&&void 0!==f.w&&"IntersectionObserver"in f.w){if(void 0!==t)return;const E=t=new IntersectionObserver(y=>{1===y[0].intersectionRatio&&(_(),E.disconnect(),t=void 0)},{threshold:.01,root:s});E.observe(a)}else a.style.setProperty("width",.75*w+"px")};return{calculateNotchWidth:()=>{n()&&(0,l.r)(()=>{_()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},2217:(M,h,r)=>{r.d(h,{S:()=>l});const l={bubbles:{dur:1e3,circles:9,fn:(c,s,e)=>{const i=c*s/e-c+"ms",t=2*Math.PI*s/e;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(c,s,e)=>{const i=s/e,t=c*i-c+"ms",n=2*Math.PI*i;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(c,s)=>({r:6,style:{left:32-32*s+"%","animation-delay":-110*s+"ms"}})},lines:{dur:1e3,lines:8,fn:(c,s,e)=>({y1:14,y2:26,style:{transform:`rotate(${360/e*s+(s<e/2?180:-180)}deg)`,"animation-delay":c*s/e-c+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(c,s,e)=>({y1:12,y2:20,style:{transform:`rotate(${360/e*s+(s<e/2?180:-180)}deg)`,"animation-delay":c*s/e-c+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(c,s,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":c*s/e-c+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(c,s,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*s+(s<6?180:-180)}deg)`,"animation-delay":c*s/e-c+"ms"}})}}},3049:(M,h,r)=>{r.r(h),r.d(h,{createSwipeBackGesture:()=>e});var f=r(512),l=r(4162),c=r(6535);r(2019);const e=(i,t,n,m,_)=>{const o=i.ownerDocument.defaultView;let a=(0,l.i)(i);const E=v=>a?-v.deltaX:v.deltaX;return(0,c.createGesture)({el:i,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:v=>(a=(0,l.i)(i),(v=>{const{startX:C}=v;return a?C>=o.innerWidth-50:C<=50})(v)&&t()),onStart:n,onMove:v=>{const C=E(v)/o.innerWidth;m(C)},onEnd:v=>{const O=E(v),C=o.innerWidth,d=O/C,D=(v=>a?-v.velocityX:v.velocityX)(v),L=D>=0&&(D>.2||O>C/2),P=(L?1-d:d)*C;let x=0;if(P>5){const A=P/Math.abs(D);x=Math.min(A,540)}_(L,d<=0?.01:(0,f.l)(0,d,.9999),x)}})}},6806:(M,h,r)=>{r.d(h,{w:()=>f});const f=(s,e,i)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(n=>{i(l(n,e))});return t.observe(s,{childList:!0,subtree:!0}),t},l=(s,e)=>{let i;return s.forEach(t=>{for(let n=0;n<t.addedNodes.length;n++)i=c(t.addedNodes[n],e)||i}),i},c=(s,e)=>{if(1!==s.nodeType)return;const i=s;return(i.tagName===e.toUpperCase()?[i]:Array.from(i.querySelectorAll(e))).find(n=>n.value===i.value)}}}]);