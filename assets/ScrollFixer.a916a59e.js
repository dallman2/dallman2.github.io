import{c as k,b as R,u as pe,a as ye,d as ge,e as ze,h as Se}from"./dom.9d20c5dc.js";import{c as d,h as y,r as g,b as qe,s as oe,g as $,i as V,l as _e,m as Ce,Q as ke,R as C,n as we,S as Ee,C as O,U as Q,H as W,E as T,F as x,D as j,V as Be,j as Pe,k as Me,o as Ae,w as G,_ as Oe,x as He,y as $e,z as De,W as Qe,O as Te}from"./index.acf654aa.js";import{Q as J,a as je,s as Z,c as ee}from"./use-quasar.6751bd23.js";var Ue=k({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(t,{slots:l}){const o=d(()=>`q-item__section column q-item__section--${t.avatar===!0||t.side===!0||t.thumbnail===!0?"side":"main"}`+(t.top===!0?" q-item__section--top justify-start":" justify-center")+(t.avatar===!0?" q-item__section--avatar":"")+(t.thumbnail===!0?" q-item__section--thumbnail":"")+(t.noWrap===!0?" q-item__section--nowrap":""));return()=>y("div",{class:o.value},R(l.default))}});const K={dark:{type:Boolean,default:null}};function X(t,l){return d(()=>t.dark===null?l.dark.isActive:t.dark)}var Ve=k({name:"QItem",props:{...K,...pe,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(t,{slots:l,emit:o}){const{proxy:{$q:s}}=$(),e=X(t,s),{hasLink:r,linkAttrs:i,linkClass:a,linkTag:f,navigateOnClick:c}=ye(),z=g(null),p=g(null),b=d(()=>t.clickable===!0||r.value===!0||t.tag==="label"),m=d(()=>t.disable!==!0&&b.value===!0),S=d(()=>"q-item q-item-type row no-wrap"+(t.dense===!0?" q-item--dense":"")+(e.value===!0?" q-item--dark":"")+(r.value===!0&&t.active===null?a.value:t.active===!0?` q-item--active${t.activeClass!==void 0?` ${t.activeClass}`:""}`:"")+(t.disable===!0?" disabled":"")+(m.value===!0?" q-item--clickable q-link cursor-pointer "+(t.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(t.focused===!0?" q-manual-focusable--focused":""):"")),_=d(()=>{if(t.insetLevel===void 0)return null;const h=s.lang.rtl===!0?"Right":"Left";return{["padding"+h]:16+t.insetLevel*56+"px"}});function D(h){m.value===!0&&(p.value!==null&&(h.qKeyEvent!==!0&&document.activeElement===z.value?p.value.focus():document.activeElement===p.value&&z.value.focus()),c(h))}function w(h){if(m.value===!0&&qe(h,13)===!0){oe(h),h.qKeyEvent=!0;const B=new MouseEvent("click",h);B.qKeyEvent=!0,z.value.dispatchEvent(B)}o("keyup",h)}function E(){const h=ge(l.default,[]);return m.value===!0&&h.unshift(y("div",{class:"q-focus-helper",tabindex:-1,ref:p})),h}return()=>{const h={ref:z,class:S.value,style:_.value,onClick:D,onKeyup:w};return m.value===!0?(h.tabindex=t.tabindex||"0",Object.assign(h,i.value)):b.value===!0&&(h["aria-disabled"]="true"),y(f.value,h,E())}}}),We=k({name:"QList",props:{...K,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(t,{slots:l}){const o=$(),s=X(t,o.proxy.$q),e=d(()=>"q-list"+(t.bordered===!0?" q-list--bordered":"")+(t.dense===!0?" q-list--dense":"")+(t.separator===!0?" q-list--separator":"")+(s.value===!0?" q-list--dark":"")+(t.padding===!0?" q-list--padding":""));return()=>y("div",{class:e.value},R(l.default))}}),Ge=k({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:l}){const{proxy:{$q:o}}=$(),s=V(_e);V(Ce,()=>{console.error("QPage needs to be child of QPageContainer")});const e=d(()=>{const i=(s.header.space===!0?s.header.size:0)+(s.footer.space===!0?s.footer.size:0);if(typeof t.styleFn=="function"){const a=s.isContainer.value===!0?s.containerHeight.value:o.screen.height;return t.styleFn(i,a)}return{minHeight:s.isContainer.value===!0?s.containerHeight.value-i+"px":o.screen.height===0?i!==0?`calc(100vh - ${i}px)`:"100vh":o.screen.height-i+"px"}}),r=d(()=>`q-page${t.padding===!0?" q-layout-padding":""}`);return()=>y("main",{class:r.value,style:e.value},R(l.default))}});const Y={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},Fe=Object.keys(Y);Y.all=!0;function te(t){const l={};for(const o of Fe)t[o]===!0&&(l[o]=!0);return Object.keys(l).length===0?Y:(l.horizontal===!0?l.left=l.right=!0:l.left===!0&&l.right===!0&&(l.horizontal=!0),l.vertical===!0?l.up=l.down=!0:l.up===!0&&l.down===!0&&(l.vertical=!0),l.horizontal===!0&&l.vertical===!0&&(l.all=!0),l)}function ae(t,l){return l.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof l.handler=="function"&&t.target.nodeName.toUpperCase()!=="INPUT"&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(l.uid)===-1)}function Le(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),ke.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function F(t,l,o){const s=x(t);let e,r=s.left-l.event.x,i=s.top-l.event.y,a=Math.abs(r),f=Math.abs(i);const c=l.direction;c.horizontal===!0&&c.vertical!==!0?e=r<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?e=i<0?"up":"down":c.up===!0&&i<0?(e="up",a>f&&(c.left===!0&&r<0?e="left":c.right===!0&&r>0&&(e="right"))):c.down===!0&&i>0?(e="down",a>f&&(c.left===!0&&r<0?e="left":c.right===!0&&r>0&&(e="right"))):c.left===!0&&r<0?(e="left",a<f&&(c.up===!0&&i<0?e="up":c.down===!0&&i>0&&(e="down"))):c.right===!0&&r>0&&(e="right",a<f&&(c.up===!0&&i<0?e="up":c.down===!0&&i>0&&(e="down")));let z=!1;if(e===void 0&&o===!1){if(l.event.isFirst===!0||l.event.lastDir===void 0)return{};e=l.event.lastDir,z=!0,e==="left"||e==="right"?(s.left-=r,a=0,r=0):(s.top-=i,f=0,i=0)}return{synthetic:z,payload:{evt:t,touch:l.event.mouse!==!0,mouse:l.event.mouse===!0,position:s,direction:e,isFirst:l.event.isFirst,isFinal:o===!0,duration:Date.now()-l.event.time,distance:{x:a,y:f},offset:{x:r,y:i},delta:{x:s.left-l.event.lastX,y:s.top-l.event.lastY}}}}let xe=0;var le=ze({name:"touch-pan",beforeMount(t,{value:l,modifiers:o}){if(o.mouse!==!0&&C.has.touch!==!0)return;function s(r,i){o.mouse===!0&&i===!0?oe(r):(o.stop===!0&&T(r),o.prevent===!0&&W(r))}const e={uid:"qvtp_"+xe++,handler:l,modifiers:o,direction:te(o),noop:we,mouseStart(r){ae(r,e)&&Ee(r)&&(O(e,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),e.start(r,!0))},touchStart(r){if(ae(r,e)){const i=r.target;O(e,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),e.start(r)}},start(r,i){if(C.is.firefox===!0&&Q(t,!0),e.lastEvt=r,i===!0||o.stop===!0){if(e.direction.all!==!0&&(i!==!0||e.modifiers.mouseAllDir!==!0&&e.modifiers.mousealldir!==!0)){const c=r.type.indexOf("mouse")>-1?new MouseEvent(r.type,r):new TouchEvent(r.type,r);r.defaultPrevented===!0&&W(c),r.cancelBubble===!0&&T(c),Object.assign(c,{qKeyEvent:r.qKeyEvent,qClickOutside:r.qClickOutside,qAnchorHandled:r.qAnchorHandled,qClonedBy:r.qClonedBy===void 0?[e.uid]:r.qClonedBy.concat(e.uid)}),e.initialEvent={target:r.target,event:c}}T(r)}const{left:a,top:f}=x(r);e.event={x:a,y:f,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:f}},move(r){if(e.event===void 0)return;const i=x(r),a=i.left-e.event.x,f=i.top-e.event.y;if(a===0&&f===0)return;e.lastEvt=r;const c=e.event.mouse===!0,z=()=>{s(r,c);let m;o.preserveCursor!==!0&&o.preservecursor!==!0&&(m=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Le(),e.styleCleanup=S=>{if(e.styleCleanup=void 0,m!==void 0&&(document.documentElement.style.cursor=m),document.body.classList.remove("non-selectable"),c===!0){const _=()=>{document.body.classList.remove("no-pointer-events--children")};S!==void 0?setTimeout(()=>{_(),S()},50):_()}else S!==void 0&&S()}};if(e.event.detected===!0){e.event.isFirst!==!0&&s(r,e.event.mouse);const{payload:m,synthetic:S}=F(r,e,!1);m!==void 0&&(e.handler(m)===!1?e.end(r):(e.styleCleanup===void 0&&e.event.isFirst===!0&&z(),e.event.lastX=m.position.left,e.event.lastY=m.position.top,e.event.lastDir=S===!0?void 0:m.direction,e.event.isFirst=!1));return}if(e.direction.all===!0||c===!0&&(e.modifiers.mouseAllDir===!0||e.modifiers.mousealldir===!0)){z(),e.event.detected=!0,e.move(r);return}const p=Math.abs(a),b=Math.abs(f);p!==b&&(e.direction.horizontal===!0&&p>b||e.direction.vertical===!0&&p<b||e.direction.up===!0&&p<b&&f<0||e.direction.down===!0&&p<b&&f>0||e.direction.left===!0&&p>b&&a<0||e.direction.right===!0&&p>b&&a>0?(e.event.detected=!0,e.move(r)):e.end(r,!0))},end(r,i){if(e.event!==void 0){if(j(e,"temp"),C.is.firefox===!0&&Q(t,!1),i===!0)e.styleCleanup!==void 0&&e.styleCleanup(),e.event.detected!==!0&&e.initialEvent!==void 0&&e.initialEvent.target.dispatchEvent(e.initialEvent.event);else if(e.event.detected===!0){e.event.isFirst===!0&&e.handler(F(r===void 0?e.lastEvt:r,e).payload);const{payload:a}=F(r===void 0?e.lastEvt:r,e,!0),f=()=>{e.handler(a)};e.styleCleanup!==void 0?e.styleCleanup(f):f()}e.event=void 0,e.initialEvent=void 0,e.lastEvt=void 0}}};if(t.__qtouchpan=e,o.mouse===!0){const r=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";O(e,"main",[[t,"mousedown","mouseStart",`passive${r}`]])}C.has.touch===!0&&O(e,"main",[[t,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[t,"touchmove","noop","notPassiveCapture"]])},updated(t,l){const o=t.__qtouchpan;o!==void 0&&(l.oldValue!==l.value&&(typeof value!="function"&&o.end(),o.handler=l.value),o.direction=te(l.modifiers))},beforeUnmount(t){const l=t.__qtouchpan;l!==void 0&&(l.event!==void 0&&l.end(),j(l,"main"),j(l,"temp"),C.is.firefox===!0&&Q(t,!1),l.styleCleanup!==void 0&&l.styleCleanup(),delete t.__qtouchpan)}});function H(t,l,o){return o<=l?l:Math.min(o,Math.max(l,t))}const re=["vertical","horizontal"],L={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},ie={prevent:!0,mouse:!0,mouseAllDir:!0},ne=t=>t>=250?50:Math.ceil(t/5);var Re=k({name:"QScrollArea",props:{...K,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(t,{slots:l,emit:o}){const s=g(!1),e=g(!1),r=g(!1),i={vertical:g(0),horizontal:g(0)},a={vertical:{ref:g(null),position:g(0),size:g(0)},horizontal:{ref:g(null),position:g(0),size:g(0)}},{proxy:f}=$(),c=X(t,f.$q);let z,p;const b=g(null),m=d(()=>"q-scrollarea"+(c.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=d(()=>{const n=a.vertical.size.value-i.vertical.value;if(n<=0)return 0;const u=H(a.vertical.position.value/n,0,1);return Math.round(u*1e4)/1e4}),a.vertical.thumbHidden=d(()=>(t.visible===null?r.value:t.visible)!==!0&&s.value===!1&&e.value===!1||a.vertical.size.value<=i.vertical.value+1),a.vertical.thumbStart=d(()=>a.vertical.percentage.value*(i.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=d(()=>Math.round(H(i.vertical.value*i.vertical.value/a.vertical.size.value,ne(i.vertical.value),i.vertical.value))),a.vertical.style=d(()=>({...t.thumbStyle,...t.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=d(()=>{const n=a.horizontal.size.value-i.horizontal.value;if(n<=0)return 0;const u=H(a.horizontal.position.value/n,0,1);return Math.round(u*1e4)/1e4}),a.horizontal.thumbHidden=d(()=>(t.visible===null?r.value:t.visible)!==!0&&s.value===!1&&e.value===!1||a.horizontal.size.value<=i.horizontal.value+1),a.horizontal.thumbStart=d(()=>a.horizontal.percentage.value*(i.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=d(()=>Math.round(H(i.horizontal.value*i.horizontal.value/a.horizontal.size.value,ne(i.horizontal.value),i.horizontal.value))),a.horizontal.style=d(()=>({...t.thumbStyle,...t.horizontalThumbStyle,left:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const S=d(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?t.contentStyle:t.contentActiveStyle),_=[[le,n=>{I(n,"vertical")},void 0,{vertical:!0,...ie}]],D=[[le,n=>{I(n,"horizontal")},void 0,{horizontal:!0,...ie}]];function w(){const n={};return re.forEach(u=>{const v=a[u];n[u+"Position"]=v.position.value,n[u+"Percentage"]=v.percentage.value,n[u+"Size"]=v.size.value,n[u+"ContainerSize"]=i[u].value}),n}const E=Be(()=>{const n=w();n.ref=f,o("scroll",n)},0);function h(n,u,v){if(re.includes(n)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(n==="vertical"?Z:ee)(b.value,u,v)}function B({height:n,width:u}){let v=!1;i.vertical.value!==n&&(i.vertical.value=n,v=!0),i.horizontal.value!==u&&(i.horizontal.value=u,v=!0),v===!0&&P()}function ue({position:n}){let u=!1;a.vertical.position.value!==n.top&&(a.vertical.position.value=n.top,u=!0),a.horizontal.position.value!==n.left&&(a.horizontal.position.value=n.left,u=!0),u===!0&&P()}function se({height:n,width:u}){a.horizontal.size.value!==u&&(a.horizontal.size.value=u,P()),a.vertical.size.value!==n&&(a.vertical.size.value=n,P())}function I(n,u){const v=a[u];if(n.isFirst===!0){if(v.thumbHidden.value===!0)return;p=v.position.value,e.value=!0}else if(e.value!==!0)return;n.isFinal===!0&&(e.value=!1);const q=L[u],A=i[u].value,he=(v.size.value-A)/(A-v.thumbSize.value),me=n.distance[q.dist],be=p+(n.direction===q.dir?1:-1)*me*he;U(be,u)}function N(n,u){const v=a[u];if(v.thumbHidden.value!==!0){const q=n[L[u].offset];if(q<v.thumbStart.value||q>v.thumbStart.value+v.thumbSize.value){const A=q-v.thumbSize.value/2;U(A/i[u].value*v.size.value,u)}v.ref.value!==null&&v.ref.value.dispatchEvent(new MouseEvent(n.type,n))}}function ce(n){N(n,"vertical")}function ve(n){N(n,"horizontal")}function P(){s.value===!0?clearTimeout(z):s.value=!0,z=setTimeout(()=>{s.value=!1},t.delay),t.onScroll!==void 0&&E()}function U(n,u){b.value[L[u].scroll]=n}function de(){r.value=!0}function fe(){r.value=!1}let M=null;return Pe(()=>{M={top:a.vertical.position.value,left:a.horizontal.position.value}}),Me(()=>{if(M===null)return;const n=b.value;n!==null&&(ee(n,M.left),Z(n,M.top))}),Ae(E.cancel),Object.assign(f,{getScrollTarget:()=>b.value,getScroll:w,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:h,setScrollPercentage(n,u,v){h(n,u*(a[n].size.value-i[n].value),v)}}),()=>y("div",{class:m.value,onMouseenter:de,onMouseleave:fe},[y("div",{ref:b,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:t.tabindex!==void 0?t.tabindex:void 0},[y("div",{class:"q-scrollarea__content absolute",style:S.value},Se(l.default,[y(J,{debounce:0,onResize:se})])),y(je,{axis:"both",onScroll:ue})]),y(J,{debounce:0,onResize:B}),y("div",{class:a.vertical.barClass.value,style:[t.barStyle,t.verticalBarStyle],"aria-hidden":"true",onMousedown:ce}),y("div",{class:a.horizontal.barClass.value,style:[t.barStyle,t.horizontalBarStyle],"aria-hidden":"true",onMousedown:ve}),G(y("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),_),G(y("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),D)])}});const Ke={};function Xe(t,l){return He(),$e(Re,{"thumb-style":{right:"-1vw"},style:Te(`height: ${t.$q.screen.height-50}px; width: 99vw;`)},{default:De(()=>[Qe(t.$slots,"content")]),_:3},8,["style"])}var Je=Oe(Ke,[["render",Xe]]);export{Ge as Q,Je as S,We as a,Ve as b,Ue as c,X as d,Re as e,Le as f,K as u};
