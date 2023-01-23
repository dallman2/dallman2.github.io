import{b as M,C as V,D as X,E as z,F as G,c as s,r as j,o as Y,h as b,T as J,w as Z,g as ee,s as x,G as te,H as ne}from"./index.acf654aa.js";import{Q as A}from"./QIcon.ce2287f1.js";import{Q as ae}from"./QSpinner.db51495f.js";import{e as le,f as ue,g as re,a as ie,i as oe,u as se,c as ce,h as de}from"./dom.9d20c5dc.js";function fe(e,a=250){let l=!1,i;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},a),i=e.apply(this,arguments)),i}}function K(e,a,l,i){l.modifiers.stop===!0&&z(e);const r=l.modifiers.color;let h=l.modifiers.center;h=h===!0||i===!0;const m=document.createElement("span"),c=document.createElement("span"),E=G(e),{left:T,top:q,width:p,height:n}=a.getBoundingClientRect(),g=Math.sqrt(p*p+n*n),d=g/2,k=`${(p-g)/2}px`,u=h?k:`${E.left-T-d}px`,f=`${(n-g)/2}px`,P=h?f:`${E.top-q-d}px`;c.className="q-ripple__inner",ue(c,{height:`${g}px`,width:`${g}px`,transform:`translate3d(${u},${P},0) scale3d(.2,.2,1)`,opacity:0}),m.className=`q-ripple${r?" text-"+r:""}`,m.setAttribute("dir","ltr"),m.appendChild(c),a.appendChild(m);const S=()=>{m.remove(),clearTimeout(B)};l.abort.push(S);let B=setTimeout(()=>{c.classList.add("q-ripple__inner--enter"),c.style.transform=`translate3d(${k},${f},0) scale3d(1,1,1)`,c.style.opacity=.2,B=setTimeout(()=>{c.classList.remove("q-ripple__inner--enter"),c.classList.add("q-ripple__inner--leave"),c.style.opacity=0,B=setTimeout(()=>{m.remove(),l.abort.splice(l.abort.indexOf(S),1)},275)},250)},50)}function Q(e,{modifiers:a,value:l,arg:i}){const r=Object.assign({},e.cfg.ripple,a,l);e.modifiers={early:r.early===!0,stop:r.stop===!0,center:r.center===!0,color:r.color||i,keyCodes:[].concat(r.keyCodes||13)}}var ve=le({name:"ripple",beforeMount(e,a){const l=a.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const i={cfg:l,enabled:a.value!==!1,modifiers:{},abort:[],start(r){i.enabled===!0&&r.qSkipRipple!==!0&&r.type===(i.modifiers.early===!0?"pointerdown":"click")&&K(r,e,i,r.qKeyEvent===!0)},keystart:fe(r=>{i.enabled===!0&&r.qSkipRipple!==!0&&M(r,i.modifiers.keyCodes)===!0&&r.type===`key${i.modifiers.early===!0?"down":"up"}`&&K(r,e,i,!0)},300)};Q(i,a),e.__qripple=i,V(i,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,a){if(a.oldValue!==a.value){const l=e.__qripple;l!==void 0&&(l.enabled=a.value!==!1,l.enabled===!0&&Object(a.value)===a.value&&Q(l,a))}},beforeUnmount(e){const a=e.__qripple;a!==void 0&&(a.abort.forEach(l=>{l()}),X(a,"main"),delete e._qripple)}});const D={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},be=Object.keys(D),me={align:{type:String,validator:e=>be.includes(e)}};function ge(e){return s(()=>{const a=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${D[a]}`})}const N={none:0,xs:4,sm:8,md:16,lg:24,xl:32},ye={xs:8,sm:10,md:14,lg:20,xl:24},he=["button","submit","reset"],ke=/[^\s]\/[^\s]/,qe={...oe,...se,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,square:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...me.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function pe(e){const a=re(e,ye),l=ge(e),{hasRouterLink:i,hasLink:r,linkTag:h,linkAttrs:m,navigateOnClick:c}=ie({fallbackTag:"button"}),E=s(()=>{const u=e.fab===!1&&e.fabMini===!1?a.value:{};return e.padding!==void 0?Object.assign({},u,{padding:e.padding.split(/\s+/).map(f=>f in N?N[f]+"px":f).join(" "),minWidth:"0",minHeight:"0"}):u}),T=s(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),q=s(()=>e.disable!==!0&&e.loading!==!0),p=s(()=>q.value===!0?e.tabindex||0:-1),n=s(()=>e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":"standard"),g=s(()=>{const u={tabindex:p.value};return r.value===!0?Object.assign(u,m.value):he.includes(e.type)===!0&&(u.type=e.type),h.value==="a"?(e.disable===!0?u["aria-disabled"]="true":u.href===void 0&&(u.role="button"),i.value!==!0&&ke.test(e.type)===!0&&(u.type=e.type)):e.disable===!0&&(u.disabled="",u["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(u,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),u}),d=s(()=>{let u;e.color!==void 0?e.flat===!0||e.outline===!0?u=`text-${e.textColor||e.color}`:u=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(u=`text-${e.textColor}`);const f=e.round===!0?"round":`rectangle${T.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${n.value} q-btn--${f}`+(u!==void 0?" "+u:"")+(q.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),k=s(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:d,style:E,innerClasses:k,attributes:g,hasLink:r,linkTag:h,navigateOnClick:c,isActionable:q}}const{passiveCapture:v}=te;let C=null,w=null,L=null;var Le=ce({name:"QBtn",props:{...qe,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:a,emit:l}){const{proxy:i}=ee(),{classes:r,style:h,innerClasses:m,attributes:c,hasLink:E,linkTag:T,navigateOnClick:q,isActionable:p}=pe(e),n=j(null),g=j(null);let d=null,k,u;const f=s(()=>e.label!==void 0&&e.label!==null&&e.label!==""),P=s(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:E.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),S=s(()=>({center:e.round})),B=s(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),I=s(()=>{if(e.loading===!0)return{onMousedown:_,onTouchstart:_,onClick:_,onKeydown:_,onKeyup:_};if(p.value===!0){const t={onClick:O,onKeydown:F,onMousedown:U};if(i.$q.platform.has.touch===!0){const o=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${o}`]=H}return t}return{onClick:x}}),W=s(()=>({ref:n,class:"q-btn q-btn-item non-selectable no-outline "+r.value,style:h.value,...c.value,...I.value}));function O(t){if(n.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const o=document.activeElement;if(e.type==="submit"&&o!==document.body&&n.value.contains(o)===!1&&o.contains(n.value)===!1){n.value.focus();const R=()=>{document.removeEventListener("keydown",x,!0),document.removeEventListener("keyup",R,v),n.value!==null&&n.value.removeEventListener("blur",R,v)};document.addEventListener("keydown",x,!0),document.addEventListener("keyup",R,v),n.value.addEventListener("blur",R,v)}}q(t)}}function F(t){n.value!==null&&(l("keydown",t),M(t,[13,32])===!0&&w!==n.value&&(w!==null&&$(),t.defaultPrevented!==!0&&(n.value.focus(),w=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("keyup",y,!0),n.value.addEventListener("blur",y,v)),x(t)))}function H(t){n.value!==null&&(l("touchstart",t),t.defaultPrevented!==!0&&(C!==n.value&&(C!==null&&$(),C=n.value,d=t.target,d.addEventListener("touchcancel",y,v),d.addEventListener("touchend",y,v)),k=!0,clearTimeout(u),u=setTimeout(()=>{k=!1},200)))}function U(t){n.value!==null&&(t.qSkipRipple=k===!0,l("mousedown",t),t.defaultPrevented!==!0&&L!==n.value&&(L!==null&&$(),L=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("mouseup",y,v)))}function y(t){if(n.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===n.value)){if(t!==void 0&&t.type==="keyup"){if(w===n.value&&M(t,[13,32])===!0){const o=new MouseEvent("click",t);o.qKeyEvent=!0,t.defaultPrevented===!0&&ne(o),t.cancelBubble===!0&&z(o),n.value.dispatchEvent(o),x(t),t.qKeyEvent=!0}l("keyup",t)}$()}}function $(t){const o=g.value;t!==!0&&(C===n.value||L===n.value)&&o!==null&&o!==document.activeElement&&(o.setAttribute("tabindex",-1),o.focus()),C===n.value&&(d!==null&&(d.removeEventListener("touchcancel",y,v),d.removeEventListener("touchend",y,v)),C=d=null),L===n.value&&(document.removeEventListener("mouseup",y,v),L=null),w===n.value&&(document.removeEventListener("keyup",y,!0),n.value!==null&&n.value.removeEventListener("blur",y,v),w=null),n.value!==null&&n.value.classList.remove("q-btn--active")}function _(t){x(t),t.qSkipRipple=!0}return Y(()=>{$(!0)}),Object.assign(i,{click:O}),()=>{let t=[];e.icon!==void 0&&t.push(b(A,{name:e.icon,left:e.stack===!1&&f.value===!0,role:"img","aria-hidden":"true"})),f.value===!0&&t.push(b("span",{class:"block"},[e.label])),t=de(a.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(b(A,{name:e.iconRight,right:e.stack===!1&&f.value===!0,role:"img","aria-hidden":"true"}));const o=[b("span",{class:"q-focus-helper",ref:g})];return e.loading===!0&&e.percentage!==void 0&&o.push(b("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[b("span",{class:"q-btn__progress-indicator fit block",style:B.value})])),o.push(b("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+m.value},t)),e.loading!==null&&o.push(b(J,{name:"q-transition--fade"},()=>e.loading===!0?[b("span",{key:"loading",class:"absolute-full flex flex-center"},a.loading!==void 0?a.loading():[b(ae)])]:null)),Z(b(T.value,W.value,o),[[ve,P.value,void 0,S.value]])}}});export{Le as Q,ve as R};
