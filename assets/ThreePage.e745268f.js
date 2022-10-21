import{R as Ripple,u as useSpinnerProps,a as useSpinner,b as QSpinner,Q as QBtn}from"./QBtn.4ab1e580.js";import{d as useSizeProps,c as useSize,Q as QIcon}from"./QIcon.62774396.js";import{u as useDarkProps,a as useDark,S as ScrollFixer,Q as QPage}from"./ScrollFixer.702cb3e2.js";import{c as createComponent,f as hDir,i as hMergeSlotSafely}from"./dom.48ce64bf.js";import{c as computed,h,s as stopAndPrevent,g as getCurrentInstance,T as Transition,_ as _export_sfc,r as ref,x as openBlock,y as createBlock,z as withCtx,A as createVNode,w as withDirectives,W as vShow,N as createBaseVNode,X as createCommentVNode,B as resolveComponent}from"./index.5f138bc7.js";import{u as useTransitionProps,a as useTransition}from"./use-transition.ac09e04d.js";import{u as useQuasar}from"./use-quasar.dabdfe0a.js";const defaultSizes={xs:8,sm:10,md:14,lg:20,xl:24};var QChip=createComponent({name:"QChip",props:{...useDarkProps,...useSizeProps,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(o,{slots:e,emit:t}){const{proxy:{$q:n}}=getCurrentInstance(),i=useDark(o,n),r=useSize(o,defaultSizes),l=computed(()=>o.selected===!0||o.icon!==void 0),a=computed(()=>o.selected===!0?o.iconSelected||n.iconSet.chip.selected:o.icon),c=computed(()=>o.iconRemove||n.iconSet.chip.remove),u=computed(()=>o.disable===!1&&(o.clickable===!0||o.selected!==null)),d=computed(()=>{const v=o.outline===!0&&o.color||o.textColor;return"q-chip row inline no-wrap items-center"+(o.outline===!1&&o.color!==void 0?` bg-${o.color}`:"")+(v?` text-${v} q-chip--colored`:"")+(o.disable===!0?" disabled":"")+(o.dense===!0?" q-chip--dense":"")+(o.outline===!0?" q-chip--outline":"")+(o.selected===!0?" q-chip--selected":"")+(u.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(o.square===!0?" q-chip--square":"")+(i.value===!0?" q-chip--dark q-dark":"")}),m=computed(()=>o.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:o.tabindex||0,role:"button","aria-hidden":"false","aria-label":o.removeAriaLabel||n.lang.label.remove});function _(v){v.keyCode===13&&p(v)}function p(v){o.disable||(t("update:selected",!o.selected),t("click",v))}function y(v){(v.keyCode===void 0||v.keyCode===13)&&(stopAndPrevent(v),o.disable===!1&&(t("update:modelValue",!1),t("remove")))}function g(){const v=[];u.value===!0&&v.push(h("div",{class:"q-focus-helper"})),l.value===!0&&v.push(h(QIcon,{class:"q-chip__icon q-chip__icon--left",name:a.value}));const b=o.label!==void 0?[h("div",{class:"ellipsis"},[o.label])]:void 0;return v.push(h("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},hMergeSlotSafely(e.default,b))),o.iconRight&&v.push(h(QIcon,{class:"q-chip__icon q-chip__icon--right",name:o.iconRight})),o.removable===!0&&v.push(h(QIcon,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:c.value,...m.value,onClick:y,onKeyup:y})),v}return()=>{if(o.modelValue===!1)return;const v={class:d.value,style:r.value};return u.value===!0&&Object.assign(v,m.value,{onClick:p,onKeyup:_}),hDir("div",v,g(),"ripple",o.ripple!==!1&&o.disable!==!0,()=>[[Ripple,o.ripple]])}}});const svg=[h("g",{transform:"translate(-20,-20)"},[h("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[h("animateTransform",{attributeName:"transform",type:"rotate",from:"90 50 50",to:"0 50 50",dur:"1s",repeatCount:"indefinite"})])]),h("g",{transform:"translate(20,20) rotate(15 50 50)"},[h("path",{d:"M79.9,52.6C80,51.8,80,50.9,80,50s0-1.8-0.1-2.6l-5.1-0.4c-0.3-2.4-0.9-4.6-1.8-6.7l4.2-2.9c-0.7-1.6-1.6-3.1-2.6-4.5 L70,35c-1.4-1.9-3.1-3.5-4.9-4.9l2.2-4.6c-1.4-1-2.9-1.9-4.5-2.6L59.8,27c-2.1-0.9-4.4-1.5-6.7-1.8l-0.4-5.1C51.8,20,50.9,20,50,20 s-1.8,0-2.6,0.1l-0.4,5.1c-2.4,0.3-4.6,0.9-6.7,1.8l-2.9-4.1c-1.6,0.7-3.1,1.6-4.5,2.6l2.1,4.6c-1.9,1.4-3.5,3.1-5,4.9l-4.5-2.1 c-1,1.4-1.9,2.9-2.6,4.5l4.1,2.9c-0.9,2.1-1.5,4.4-1.8,6.8l-5,0.4C20,48.2,20,49.1,20,50s0,1.8,0.1,2.6l5,0.4 c0.3,2.4,0.9,4.7,1.8,6.8l-4.1,2.9c0.7,1.6,1.6,3.1,2.6,4.5l4.5-2.1c1.4,1.9,3.1,3.5,5,4.9l-2.1,4.6c1.4,1,2.9,1.9,4.5,2.6l2.9-4.1 c2.1,0.9,4.4,1.5,6.7,1.8l0.4,5.1C48.2,80,49.1,80,50,80s1.8,0,2.6-0.1l0.4-5.1c2.3-0.3,4.6-0.9,6.7-1.8l2.9,4.2 c1.6-0.7,3.1-1.6,4.5-2.6L65,69.9c1.9-1.4,3.5-3,4.9-4.9l4.6,2.2c1-1.4,1.9-2.9,2.6-4.5L73,59.8c0.9-2.1,1.5-4.4,1.8-6.7L79.9,52.6 z M50,65c-8.3,0-15-6.7-15-15c0-8.3,6.7-15,15-15s15,6.7,15,15C65,58.3,58.3,65,50,65z",fill:"currentColor"},[h("animateTransform",{attributeName:"transform",type:"rotate",from:"0 50 50",to:"90 50 50",dur:"1s",repeatCount:"indefinite"})])])];var QSpinnerGears=createComponent({name:"QSpinnerGears",props:useSpinnerProps,setup(o){const{cSize:e,classes:t}=useSpinner(o);return()=>h("svg",{class:t.value,width:e.value,height:e.value,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",xmlns:"http://www.w3.org/2000/svg"},svg)}}),QInnerLoading=createComponent({name:"QInnerLoading",props:{...useDarkProps,...useTransitionProps,showing:Boolean,color:String,size:{type:[String,Number],default:42},label:String,labelClass:String,labelStyle:[String,Array,Object]},setup(o,{slots:e}){const t=getCurrentInstance(),n=useDark(o,t.proxy.$q),{transition:i,transitionStyle:r}=useTransition(o,computed(()=>o.showing)),l=computed(()=>"q-inner-loading absolute-full column flex-center"+(n.value===!0?" q-inner-loading--dark":"")),a=computed(()=>"q-inner-loading__label"+(o.labelClass!==void 0?` ${o.labelClass}`:""));function c(){const d=[h(QSpinner,{size:o.size,color:o.color})];return o.label!==void 0&&d.push(h("div",{class:a.value,style:o.labelStyle},[o.label])),d}function u(){return o.showing===!0?h("div",{class:l.value,style:r.value},e.default!==void 0?e.default():c()):null}return()=>h(Transition,{name:i.value,appear:!0},u)}});/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const REVISION="145",MOUSE={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},TOUCH={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},CullFaceNone=0,CullFaceBack=1,CullFaceFront=2,PCFShadowMap=1,PCFSoftShadowMap=2,VSMShadowMap=3,FrontSide=0,BackSide=1,DoubleSide=2,NoBlending=0,NormalBlending=1,AdditiveBlending=2,SubtractiveBlending=3,MultiplyBlending=4,CustomBlending=5,AddEquation=100,SubtractEquation=101,ReverseSubtractEquation=102,MinEquation=103,MaxEquation=104,ZeroFactor=200,OneFactor=201,SrcColorFactor=202,OneMinusSrcColorFactor=203,SrcAlphaFactor=204,OneMinusSrcAlphaFactor=205,DstAlphaFactor=206,OneMinusDstAlphaFactor=207,DstColorFactor=208,OneMinusDstColorFactor=209,SrcAlphaSaturateFactor=210,NeverDepth=0,AlwaysDepth=1,LessDepth=2,LessEqualDepth=3,EqualDepth=4,GreaterEqualDepth=5,GreaterDepth=6,NotEqualDepth=7,MultiplyOperation=0,MixOperation=1,AddOperation=2,NoToneMapping=0,LinearToneMapping=1,ReinhardToneMapping=2,CineonToneMapping=3,ACESFilmicToneMapping=4,CustomToneMapping=5,UVMapping=300,CubeReflectionMapping=301,CubeRefractionMapping=302,EquirectangularReflectionMapping=303,EquirectangularRefractionMapping=304,CubeUVReflectionMapping=306,RepeatWrapping=1e3,ClampToEdgeWrapping=1001,MirroredRepeatWrapping=1002,NearestFilter=1003,NearestMipmapNearestFilter=1004,NearestMipmapLinearFilter=1005,LinearFilter=1006,LinearMipmapNearestFilter=1007,LinearMipmapLinearFilter=1008,UnsignedByteType=1009,ByteType=1010,ShortType=1011,UnsignedShortType=1012,IntType=1013,UnsignedIntType=1014,FloatType=1015,HalfFloatType=1016,UnsignedShort4444Type=1017,UnsignedShort5551Type=1018,UnsignedInt248Type=1020,AlphaFormat=1021,RGBFormat=1022,RGBAFormat=1023,LuminanceFormat=1024,LuminanceAlphaFormat=1025,DepthFormat=1026,DepthStencilFormat=1027,RedFormat=1028,RedIntegerFormat=1029,RGFormat=1030,RGIntegerFormat=1031,RGBAIntegerFormat=1033,RGB_S3TC_DXT1_Format=33776,RGBA_S3TC_DXT1_Format=33777,RGBA_S3TC_DXT3_Format=33778,RGBA_S3TC_DXT5_Format=33779,RGB_PVRTC_4BPPV1_Format=35840,RGB_PVRTC_2BPPV1_Format=35841,RGBA_PVRTC_4BPPV1_Format=35842,RGBA_PVRTC_2BPPV1_Format=35843,RGB_ETC1_Format=36196,RGB_ETC2_Format=37492,RGBA_ETC2_EAC_Format=37496,RGBA_ASTC_4x4_Format=37808,RGBA_ASTC_5x4_Format=37809,RGBA_ASTC_5x5_Format=37810,RGBA_ASTC_6x5_Format=37811,RGBA_ASTC_6x6_Format=37812,RGBA_ASTC_8x5_Format=37813,RGBA_ASTC_8x6_Format=37814,RGBA_ASTC_8x8_Format=37815,RGBA_ASTC_10x5_Format=37816,RGBA_ASTC_10x6_Format=37817,RGBA_ASTC_10x8_Format=37818,RGBA_ASTC_10x10_Format=37819,RGBA_ASTC_12x10_Format=37820,RGBA_ASTC_12x12_Format=37821,RGBA_BPTC_Format=36492,LinearEncoding=3e3,sRGBEncoding=3001,BasicDepthPacking=3200,RGBADepthPacking=3201,TangentSpaceNormalMap=0,ObjectSpaceNormalMap=1,SRGBColorSpace="srgb",LinearSRGBColorSpace="srgb-linear",KeepStencilOp=7680,AlwaysStencilFunc=519,StaticDrawUsage=35044,GLSL3="300 es",_SRGBAFormat=1035;class EventDispatcher{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,l=i.length;r<l;r++)i[r].call(this,e);e.target=null}}}const _lut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],DEG2RAD=Math.PI/180,RAD2DEG=180/Math.PI;function generateUUID(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_lut[o&255]+_lut[o>>8&255]+_lut[o>>16&255]+_lut[o>>24&255]+"-"+_lut[e&255]+_lut[e>>8&255]+"-"+_lut[e>>16&15|64]+_lut[e>>24&255]+"-"+_lut[t&63|128]+_lut[t>>8&255]+"-"+_lut[t>>16&255]+_lut[t>>24&255]+_lut[n&255]+_lut[n>>8&255]+_lut[n>>16&255]+_lut[n>>24&255]).toLowerCase()}function clamp(o,e,t){return Math.max(e,Math.min(t,o))}function euclideanModulo(o,e){return(o%e+e)%e}function lerp(o,e,t){return(1-t)*o+t*e}function isPowerOfTwo(o){return(o&o-1)===0&&o!==0}function floorPowerOfTwo(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function denormalize(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function normalize(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Vector2{constructor(e=0,t=0){Vector2.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,l=this.y-e.y;return this.x=r*n-l*i+e.x,this.y=r*i+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Matrix3{constructor(){Matrix3.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,r,l,a,c,u){const d=this.elements;return d[0]=e,d[1]=i,d[2]=a,d[3]=t,d[4]=r,d[5]=c,d[6]=n,d[7]=l,d[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,l=n[0],a=n[3],c=n[6],u=n[1],d=n[4],m=n[7],_=n[2],p=n[5],y=n[8],g=i[0],v=i[3],b=i[6],x=i[1],M=i[4],E=i[7],A=i[2],L=i[5],D=i[8];return r[0]=l*g+a*x+c*A,r[3]=l*v+a*M+c*L,r[6]=l*b+a*E+c*D,r[1]=u*g+d*x+m*A,r[4]=u*v+d*M+m*L,r[7]=u*b+d*E+m*D,r[2]=_*g+p*x+y*A,r[5]=_*v+p*M+y*L,r[8]=_*b+p*E+y*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],l=e[4],a=e[5],c=e[6],u=e[7],d=e[8];return t*l*d-t*a*u-n*r*d+n*a*c+i*r*u-i*l*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],l=e[4],a=e[5],c=e[6],u=e[7],d=e[8],m=d*l-a*u,_=a*c-d*r,p=u*r-l*c,y=t*m+n*_+i*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/y;return e[0]=m*g,e[1]=(i*u-d*n)*g,e[2]=(a*n-i*l)*g,e[3]=_*g,e[4]=(d*t-i*c)*g,e[5]=(i*r-a*t)*g,e[6]=p*g,e[7]=(n*c-u*t)*g,e[8]=(l*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,l,a){const c=Math.cos(r),u=Math.sin(r);return this.set(n*c,n*u,-n*(c*l+u*a)+l+e,-i*u,i*c,-i*(-u*l+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),i=this.elements,r=i[0],l=i[3],a=i[6],c=i[1],u=i[4],d=i[7];return i[0]=t*r+n*c,i[3]=t*l+n*u,i[6]=t*a+n*d,i[1]=-n*r+t*c,i[4]=-n*l+t*u,i[7]=-n*a+t*d,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function arrayNeedsUint32(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function createElementNS(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function SRGBToLinear(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function LinearToSRGB(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const FN={[SRGBColorSpace]:{[LinearSRGBColorSpace]:SRGBToLinear},[LinearSRGBColorSpace]:{[SRGBColorSpace]:LinearToSRGB}},ColorManagement={legacyMode:!0,get workingColorSpace(){return LinearSRGBColorSpace},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(FN[e]&&FN[e][t]!==void 0){const n=FN[e][t];return o.r=n(o.r),o.g=n(o.g),o.b=n(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},_colorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_rgb={r:0,g:0,b:0},_hslA={h:0,s:0,l:0},_hslB={h:0,s:0,l:0};function hue2rgb(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function toComponents(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Color{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=SRGBColorSpace){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ColorManagement.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=LinearSRGBColorSpace){return this.r=e,this.g=t,this.b=n,ColorManagement.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=LinearSRGBColorSpace){if(e=euclideanModulo(e,1),t=clamp(t,0,1),n=clamp(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,l=2*n-r;this.r=hue2rgb(l,r,e+1/3),this.g=hue2rgb(l,r,e),this.b=hue2rgb(l,r,e-1/3)}return ColorManagement.toWorkingColorSpace(this,i),this}setStyle(e,t=SRGBColorSpace){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let r;const l=i[1],a=i[2];switch(l){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,ColorManagement.toWorkingColorSpace(this,t),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,ColorManagement.toWorkingColorSpace(this,t),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,u=parseFloat(r[2])/100,d=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,u,d,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],l=r.length;if(l===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,ColorManagement.toWorkingColorSpace(this,t),this;if(l===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,ColorManagement.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=SRGBColorSpace){const n=_colorKeywords[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=SRGBToLinear(e.r),this.g=SRGBToLinear(e.g),this.b=SRGBToLinear(e.b),this}copyLinearToSRGB(e){return this.r=LinearToSRGB(e.r),this.g=LinearToSRGB(e.g),this.b=LinearToSRGB(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb),e),clamp(_rgb.r*255,0,255)<<16^clamp(_rgb.g*255,0,255)<<8^clamp(_rgb.b*255,0,255)<<0}getHexString(e=SRGBColorSpace){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=LinearSRGBColorSpace){ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb),t);const n=_rgb.r,i=_rgb.g,r=_rgb.b,l=Math.max(n,i,r),a=Math.min(n,i,r);let c,u;const d=(a+l)/2;if(a===l)c=0,u=0;else{const m=l-a;switch(u=d<=.5?m/(l+a):m/(2-l-a),l){case n:c=(i-r)/m+(i<r?6:0);break;case i:c=(r-n)/m+2;break;case r:c=(n-i)/m+4;break}c/=6}return e.h=c,e.s=u,e.l=d,e}getRGB(e,t=LinearSRGBColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb),t),e.r=_rgb.r,e.g=_rgb.g,e.b=_rgb.b,e}getStyle(e=SRGBColorSpace){return ColorManagement.fromWorkingColorSpace(toComponents(this,_rgb),e),e!==SRGBColorSpace?`color(${e} ${_rgb.r} ${_rgb.g} ${_rgb.b})`:`rgb(${_rgb.r*255|0},${_rgb.g*255|0},${_rgb.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(_hslA),_hslA.h+=e,_hslA.s+=t,_hslA.l+=n,this.setHSL(_hslA.h,_hslA.s,_hslA.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(_hslA),e.getHSL(_hslB);const n=lerp(_hslA.h,_hslB.h,t),i=lerp(_hslA.s,_hslB.s,t),r=lerp(_hslA.l,_hslB.l,t);return this.setHSL(n,i,r),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Color.NAMES=_colorKeywords;let _canvas;class ImageUtils{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement=="undefined")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{_canvas===void 0&&(_canvas=createElementNS("canvas")),_canvas.width=e.width,_canvas.height=e.height;const n=_canvas.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=_canvas}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement!="undefined"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&e instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&e instanceof ImageBitmap){const t=createElementNS("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let l=0;l<r.length;l++)r[l]=SRGBToLinear(r[l]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(SRGBToLinear(t[n]/255)*255):t[n]=SRGBToLinear(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Source{constructor(e=null){this.isSource=!0,this.uuid=generateUUID(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let l=0,a=i.length;l<a;l++)i[l].isDataTexture?r.push(serializeImage(i[l].image)):r.push(serializeImage(i[l]))}else r=serializeImage(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function serializeImage(o){return typeof HTMLImageElement!="undefined"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&o instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&o instanceof ImageBitmap?ImageUtils.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let textureId=0;class Texture extends EventDispatcher{constructor(e=Texture.DEFAULT_IMAGE,t=Texture.DEFAULT_MAPPING,n=ClampToEdgeWrapping,i=ClampToEdgeWrapping,r=LinearFilter,l=LinearMipmapLinearFilter,a=RGBAFormat,c=UnsignedByteType,u=1,d=LinearEncoding){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:textureId++}),this.uuid=generateUUID(),this.name="",this.source=new Source(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=l,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Vector2(0,0),this.repeat=new Vector2(1,1),this.center=new Vector2(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Matrix3,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==UVMapping)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case RepeatWrapping:e.x=e.x-Math.floor(e.x);break;case ClampToEdgeWrapping:e.x=e.x<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case RepeatWrapping:e.y=e.y-Math.floor(e.y);break;case ClampToEdgeWrapping:e.y=e.y<0?0:1;break;case MirroredRepeatWrapping:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Texture.DEFAULT_IMAGE=null;Texture.DEFAULT_MAPPING=UVMapping;class Vector4{constructor(e=0,t=0,n=0,i=1){Vector4.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*i+l[12]*r,this.y=l[1]*t+l[5]*n+l[9]*i+l[13]*r,this.z=l[2]*t+l[6]*n+l[10]*i+l[14]*r,this.w=l[3]*t+l[7]*n+l[11]*i+l[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,u=c[0],d=c[4],m=c[8],_=c[1],p=c[5],y=c[9],g=c[2],v=c[6],b=c[10];if(Math.abs(d-_)<.01&&Math.abs(m-g)<.01&&Math.abs(y-v)<.01){if(Math.abs(d+_)<.1&&Math.abs(m+g)<.1&&Math.abs(y+v)<.1&&Math.abs(u+p+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(u+1)/2,E=(p+1)/2,A=(b+1)/2,L=(d+_)/4,D=(m+g)/4,R=(y+v)/4;return M>E&&M>A?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=L/n,r=D/n):E>A?E<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(E),n=L/i,r=R/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=D/r,i=R/r),this.set(n,i,r,t),this}let x=Math.sqrt((v-y)*(v-y)+(m-g)*(m-g)+(_-d)*(_-d));return Math.abs(x)<.001&&(x=1),this.x=(v-y)/x,this.y=(m-g)/x,this.z=(_-d)/x,this.w=Math.acos((u+p+b-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WebGLRenderTarget extends EventDispatcher{constructor(e,t,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vector4(0,0,e,t),this.scissorTest=!1,this.viewport=new Vector4(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new Texture(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:LinearFilter,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Source(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class DataArrayTexture extends Texture{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Data3DTexture extends Texture{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=NearestFilter,this.minFilter=NearestFilter,this.wrapR=ClampToEdgeWrapping,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Quaternion{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,l,a){let c=n[i+0],u=n[i+1],d=n[i+2],m=n[i+3];const _=r[l+0],p=r[l+1],y=r[l+2],g=r[l+3];if(a===0){e[t+0]=c,e[t+1]=u,e[t+2]=d,e[t+3]=m;return}if(a===1){e[t+0]=_,e[t+1]=p,e[t+2]=y,e[t+3]=g;return}if(m!==g||c!==_||u!==p||d!==y){let v=1-a;const b=c*_+u*p+d*y+m*g,x=b>=0?1:-1,M=1-b*b;if(M>Number.EPSILON){const A=Math.sqrt(M),L=Math.atan2(A,b*x);v=Math.sin(v*L)/A,a=Math.sin(a*L)/A}const E=a*x;if(c=c*v+_*E,u=u*v+p*E,d=d*v+y*E,m=m*v+g*E,v===1-a){const A=1/Math.sqrt(c*c+u*u+d*d+m*m);c*=A,u*=A,d*=A,m*=A}}e[t]=c,e[t+1]=u,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,i,r,l){const a=n[i],c=n[i+1],u=n[i+2],d=n[i+3],m=r[l],_=r[l+1],p=r[l+2],y=r[l+3];return e[t]=a*y+d*m+c*p-u*_,e[t+1]=c*y+d*_+u*m-a*p,e[t+2]=u*y+d*p+a*_-c*m,e[t+3]=d*y-a*m-c*_-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,r=e._z,l=e._order,a=Math.cos,c=Math.sin,u=a(n/2),d=a(i/2),m=a(r/2),_=c(n/2),p=c(i/2),y=c(r/2);switch(l){case"XYZ":this._x=_*d*m+u*p*y,this._y=u*p*m-_*d*y,this._z=u*d*y+_*p*m,this._w=u*d*m-_*p*y;break;case"YXZ":this._x=_*d*m+u*p*y,this._y=u*p*m-_*d*y,this._z=u*d*y-_*p*m,this._w=u*d*m+_*p*y;break;case"ZXY":this._x=_*d*m-u*p*y,this._y=u*p*m+_*d*y,this._z=u*d*y+_*p*m,this._w=u*d*m-_*p*y;break;case"ZYX":this._x=_*d*m-u*p*y,this._y=u*p*m+_*d*y,this._z=u*d*y-_*p*m,this._w=u*d*m+_*p*y;break;case"YZX":this._x=_*d*m+u*p*y,this._y=u*p*m+_*d*y,this._z=u*d*y-_*p*m,this._w=u*d*m-_*p*y;break;case"XZY":this._x=_*d*m-u*p*y,this._y=u*p*m-_*d*y,this._z=u*d*y+_*p*m,this._w=u*d*m+_*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],l=t[1],a=t[5],c=t[9],u=t[2],d=t[6],m=t[10],_=n+a+m;if(_>0){const p=.5/Math.sqrt(_+1);this._w=.25/p,this._x=(d-c)*p,this._y=(r-u)*p,this._z=(l-i)*p}else if(n>a&&n>m){const p=2*Math.sqrt(1+n-a-m);this._w=(d-c)/p,this._x=.25*p,this._y=(i+l)/p,this._z=(r+u)/p}else if(a>m){const p=2*Math.sqrt(1+a-n-m);this._w=(r-u)/p,this._x=(i+l)/p,this._y=.25*p,this._z=(c+d)/p}else{const p=2*Math.sqrt(1+m-n-a);this._w=(l-i)/p,this._x=(r+u)/p,this._y=(c+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(clamp(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,l=e._w,a=t._x,c=t._y,u=t._z,d=t._w;return this._x=n*d+l*a+i*u-r*c,this._y=i*d+l*c+r*a-n*u,this._z=r*d+l*u+n*c-i*a,this._w=l*d-n*a-i*c-r*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,l=this._w;let a=l*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=l,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*l+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(c),d=Math.atan2(u,a),m=Math.sin((1-t)*d)/u,_=Math.sin(t*d)/u;return this._w=l*m+this._w*_,this._x=n*m+this._x*_,this._y=i*m+this._y*_,this._z=r*m+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Vector3{constructor(e=0,t=0,n=0){Vector3.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_quaternion$4.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_quaternion$4.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,l=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*l,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*l,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,l=e.y,a=e.z,c=e.w,u=c*t+l*i-a*n,d=c*n+a*t-r*i,m=c*i+r*n-l*t,_=-r*t-l*n-a*i;return this.x=u*c+_*-r+d*-a-m*-l,this.y=d*c+_*-l+m*-r-u*-a,this.z=m*c+_*-a+u*-l-d*-r,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,l=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*l-n*c,this.z=n*a-i*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _vector$c.copy(this).projectOnVector(e),this.sub(_vector$c)}reflect(e){return this.sub(_vector$c.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(clamp(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _vector$c=new Vector3,_quaternion$4=new Quaternion;class Box3{constructor(e=new Vector3(1/0,1/0,1/0),t=new Vector3(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,r=-1/0,l=-1/0,a=-1/0;for(let c=0,u=e.length;c<u;c+=3){const d=e[c],m=e[c+1],_=e[c+2];d<t&&(t=d),m<n&&(n=m),_<i&&(i=_),d>r&&(r=d),m>l&&(l=m),_>a&&(a=_)}return this.min.set(t,n,i),this.max.set(r,l,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,r=-1/0,l=-1/0,a=-1/0;for(let c=0,u=e.count;c<u;c++){const d=e.getX(c),m=e.getY(c),_=e.getZ(c);d<t&&(t=d),m<n&&(n=m),_<i&&(i=_),d>r&&(r=d),m>l&&(l=m),_>a&&(a=_)}return this.min.set(t,n,i),this.max.set(r,l,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_vector$b.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let l=0,a=r.count;l<a;l++)_vector$b.fromBufferAttribute(r,l).applyMatrix4(e.matrixWorld),this.expandByPoint(_vector$b)}else n.boundingBox===null&&n.computeBoundingBox(),_box$3.copy(n.boundingBox),_box$3.applyMatrix4(e.matrixWorld),this.union(_box$3);const i=e.children;for(let r=0,l=i.length;r<l;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_vector$b),_vector$b.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_center),_extents.subVectors(this.max,_center),_v0$2.subVectors(e.a,_center),_v1$7.subVectors(e.b,_center),_v2$3.subVectors(e.c,_center),_f0.subVectors(_v1$7,_v0$2),_f1.subVectors(_v2$3,_v1$7),_f2.subVectors(_v0$2,_v2$3);let t=[0,-_f0.z,_f0.y,0,-_f1.z,_f1.y,0,-_f2.z,_f2.y,_f0.z,0,-_f0.x,_f1.z,0,-_f1.x,_f2.z,0,-_f2.x,-_f0.y,_f0.x,0,-_f1.y,_f1.x,0,-_f2.y,_f2.x,0];return!satForAxes(t,_v0$2,_v1$7,_v2$3,_extents)||(t=[1,0,0,0,1,0,0,0,1],!satForAxes(t,_v0$2,_v1$7,_v2$3,_extents))?!1:(_triangleNormal.crossVectors(_f0,_f1),t=[_triangleNormal.x,_triangleNormal.y,_triangleNormal.z],satForAxes(t,_v0$2,_v1$7,_v2$3,_extents))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return _vector$b.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(_vector$b).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_points[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_points[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_points[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_points[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_points[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_points[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_points[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_points[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_points),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _points=[new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3,new Vector3],_vector$b=new Vector3,_box$3=new Box3,_v0$2=new Vector3,_v1$7=new Vector3,_v2$3=new Vector3,_f0=new Vector3,_f1=new Vector3,_f2=new Vector3,_center=new Vector3,_extents=new Vector3,_triangleNormal=new Vector3,_testAxis=new Vector3;function satForAxes(o,e,t,n,i){for(let r=0,l=o.length-3;r<=l;r+=3){_testAxis.fromArray(o,r);const a=i.x*Math.abs(_testAxis.x)+i.y*Math.abs(_testAxis.y)+i.z*Math.abs(_testAxis.z),c=e.dot(_testAxis),u=t.dot(_testAxis),d=n.dot(_testAxis);if(Math.max(-Math.max(c,u,d),Math.min(c,u,d))>a)return!1}return!0}const _box$2=new Box3,_v1$6=new Vector3,_toFarthestPoint=new Vector3,_toPoint=new Vector3;class Sphere{constructor(e=new Vector3,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_box$2.setFromPoints(e).getCenter(n);let i=0;for(let r=0,l=e.length;r<l;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_toPoint.subVectors(e,this.center);const t=_toPoint.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.add(_toPoint.multiplyScalar(i/n)),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?_toFarthestPoint.set(0,0,1).multiplyScalar(e.radius):_toFarthestPoint.subVectors(e.center,this.center).normalize().multiplyScalar(e.radius),this.expandByPoint(_v1$6.copy(e.center).add(_toFarthestPoint)),this.expandByPoint(_v1$6.copy(e.center).sub(_toFarthestPoint)),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _vector$a=new Vector3,_segCenter=new Vector3,_segDir=new Vector3,_diff=new Vector3,_edge1=new Vector3,_edge2=new Vector3,_normal$1=new Vector3;class Ray{constructor(e=new Vector3,t=new Vector3(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_vector$a)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_vector$a.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_vector$a.copy(this.direction).multiplyScalar(t).add(this.origin),_vector$a.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_segCenter.copy(e).add(t).multiplyScalar(.5),_segDir.copy(t).sub(e).normalize(),_diff.copy(this.origin).sub(_segCenter);const r=e.distanceTo(t)*.5,l=-this.direction.dot(_segDir),a=_diff.dot(this.direction),c=-_diff.dot(_segDir),u=_diff.lengthSq(),d=Math.abs(1-l*l);let m,_,p,y;if(d>0)if(m=l*c-a,_=l*a-c,y=r*d,m>=0)if(_>=-y)if(_<=y){const g=1/d;m*=g,_*=g,p=m*(m+l*_+2*a)+_*(l*m+_+2*c)+u}else _=r,m=Math.max(0,-(l*_+a)),p=-m*m+_*(_+2*c)+u;else _=-r,m=Math.max(0,-(l*_+a)),p=-m*m+_*(_+2*c)+u;else _<=-y?(m=Math.max(0,-(-l*r+a)),_=m>0?-r:Math.min(Math.max(-r,-c),r),p=-m*m+_*(_+2*c)+u):_<=y?(m=0,_=Math.min(Math.max(-r,-c),r),p=_*(_+2*c)+u):(m=Math.max(0,-(l*r+a)),_=m>0?r:Math.min(Math.max(-r,-c),r),p=-m*m+_*(_+2*c)+u);else _=l>0?-r:r,m=Math.max(0,-(l*_+a)),p=-m*m+_*(_+2*c)+u;return n&&n.copy(this.direction).multiplyScalar(m).add(this.origin),i&&i.copy(_segDir).multiplyScalar(_).add(_segCenter),p}intersectSphere(e,t){_vector$a.subVectors(e.center,this.origin);const n=_vector$a.dot(this.direction),i=_vector$a.dot(_vector$a)-n*n,r=e.radius*e.radius;if(i>r)return null;const l=Math.sqrt(r-i),a=n-l,c=n+l;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,l,a,c;const u=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,_=this.origin;return u>=0?(n=(e.min.x-_.x)*u,i=(e.max.x-_.x)*u):(n=(e.max.x-_.x)*u,i=(e.min.x-_.x)*u),d>=0?(r=(e.min.y-_.y)*d,l=(e.max.y-_.y)*d):(r=(e.max.y-_.y)*d,l=(e.min.y-_.y)*d),n>l||r>i||((r>n||n!==n)&&(n=r),(l<i||i!==i)&&(i=l),m>=0?(a=(e.min.z-_.z)*m,c=(e.max.z-_.z)*m):(a=(e.max.z-_.z)*m,c=(e.min.z-_.z)*m),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,_vector$a)!==null}intersectTriangle(e,t,n,i,r){_edge1.subVectors(t,e),_edge2.subVectors(n,e),_normal$1.crossVectors(_edge1,_edge2);let l=this.direction.dot(_normal$1),a;if(l>0){if(i)return null;a=1}else if(l<0)a=-1,l=-l;else return null;_diff.subVectors(this.origin,e);const c=a*this.direction.dot(_edge2.crossVectors(_diff,_edge2));if(c<0)return null;const u=a*this.direction.dot(_edge1.cross(_diff));if(u<0||c+u>l)return null;const d=-a*_diff.dot(_normal$1);return d<0?null:this.at(d/l,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Matrix4{constructor(){Matrix4.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,r,l,a,c,u,d,m,_,p,y,g,v){const b=this.elements;return b[0]=e,b[4]=t,b[8]=n,b[12]=i,b[1]=r,b[5]=l,b[9]=a,b[13]=c,b[2]=u,b[6]=d,b[10]=m,b[14]=_,b[3]=p,b[7]=y,b[11]=g,b[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Matrix4().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/_v1$5.setFromMatrixColumn(e,0).length(),r=1/_v1$5.setFromMatrixColumn(e,1).length(),l=1/_v1$5.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,l=Math.cos(n),a=Math.sin(n),c=Math.cos(i),u=Math.sin(i),d=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){const _=l*d,p=l*m,y=a*d,g=a*m;t[0]=c*d,t[4]=-c*m,t[8]=u,t[1]=p+y*u,t[5]=_-g*u,t[9]=-a*c,t[2]=g-_*u,t[6]=y+p*u,t[10]=l*c}else if(e.order==="YXZ"){const _=c*d,p=c*m,y=u*d,g=u*m;t[0]=_+g*a,t[4]=y*a-p,t[8]=l*u,t[1]=l*m,t[5]=l*d,t[9]=-a,t[2]=p*a-y,t[6]=g+_*a,t[10]=l*c}else if(e.order==="ZXY"){const _=c*d,p=c*m,y=u*d,g=u*m;t[0]=_-g*a,t[4]=-l*m,t[8]=y+p*a,t[1]=p+y*a,t[5]=l*d,t[9]=g-_*a,t[2]=-l*u,t[6]=a,t[10]=l*c}else if(e.order==="ZYX"){const _=l*d,p=l*m,y=a*d,g=a*m;t[0]=c*d,t[4]=y*u-p,t[8]=_*u+g,t[1]=c*m,t[5]=g*u+_,t[9]=p*u-y,t[2]=-u,t[6]=a*c,t[10]=l*c}else if(e.order==="YZX"){const _=l*c,p=l*u,y=a*c,g=a*u;t[0]=c*d,t[4]=g-_*m,t[8]=y*m+p,t[1]=m,t[5]=l*d,t[9]=-a*d,t[2]=-u*d,t[6]=p*m+y,t[10]=_-g*m}else if(e.order==="XZY"){const _=l*c,p=l*u,y=a*c,g=a*u;t[0]=c*d,t[4]=-m,t[8]=u*d,t[1]=_*m+g,t[5]=l*d,t[9]=p*m-y,t[2]=y*m-p,t[6]=a*d,t[10]=g*m+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_zero,e,_one)}lookAt(e,t,n){const i=this.elements;return _z.subVectors(e,t),_z.lengthSq()===0&&(_z.z=1),_z.normalize(),_x.crossVectors(n,_z),_x.lengthSq()===0&&(Math.abs(n.z)===1?_z.x+=1e-4:_z.z+=1e-4,_z.normalize(),_x.crossVectors(n,_z)),_x.normalize(),_y.crossVectors(_z,_x),i[0]=_x.x,i[4]=_y.x,i[8]=_z.x,i[1]=_x.y,i[5]=_y.y,i[9]=_z.y,i[2]=_x.z,i[6]=_y.z,i[10]=_z.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,l=n[0],a=n[4],c=n[8],u=n[12],d=n[1],m=n[5],_=n[9],p=n[13],y=n[2],g=n[6],v=n[10],b=n[14],x=n[3],M=n[7],E=n[11],A=n[15],L=i[0],D=i[4],R=i[8],I=i[12],U=i[1],J=i[5],ne=i[9],F=i[13],P=i[2],N=i[6],q=i[10],G=i[14],H=i[3],W=i[7],$=i[11],V=i[15];return r[0]=l*L+a*U+c*P+u*H,r[4]=l*D+a*J+c*N+u*W,r[8]=l*R+a*ne+c*q+u*$,r[12]=l*I+a*F+c*G+u*V,r[1]=d*L+m*U+_*P+p*H,r[5]=d*D+m*J+_*N+p*W,r[9]=d*R+m*ne+_*q+p*$,r[13]=d*I+m*F+_*G+p*V,r[2]=y*L+g*U+v*P+b*H,r[6]=y*D+g*J+v*N+b*W,r[10]=y*R+g*ne+v*q+b*$,r[14]=y*I+g*F+v*G+b*V,r[3]=x*L+M*U+E*P+A*H,r[7]=x*D+M*J+E*N+A*W,r[11]=x*R+M*ne+E*q+A*$,r[15]=x*I+M*F+E*G+A*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],l=e[1],a=e[5],c=e[9],u=e[13],d=e[2],m=e[6],_=e[10],p=e[14],y=e[3],g=e[7],v=e[11],b=e[15];return y*(+r*c*m-i*u*m-r*a*_+n*u*_+i*a*p-n*c*p)+g*(+t*c*p-t*u*_+r*l*_-i*l*p+i*u*d-r*c*d)+v*(+t*u*m-t*a*p-r*l*m+n*l*p+r*a*d-n*u*d)+b*(-i*a*d-t*c*m+t*a*_+i*l*m-n*l*_+n*c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],l=e[4],a=e[5],c=e[6],u=e[7],d=e[8],m=e[9],_=e[10],p=e[11],y=e[12],g=e[13],v=e[14],b=e[15],x=m*v*u-g*_*u+g*c*p-a*v*p-m*c*b+a*_*b,M=y*_*u-d*v*u-y*c*p+l*v*p+d*c*b-l*_*b,E=d*g*u-y*m*u+y*a*p-l*g*p-d*a*b+l*m*b,A=y*m*c-d*g*c-y*a*_+l*g*_+d*a*v-l*m*v,L=t*x+n*M+i*E+r*A;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/L;return e[0]=x*D,e[1]=(g*_*r-m*v*r-g*i*p+n*v*p+m*i*b-n*_*b)*D,e[2]=(a*v*r-g*c*r+g*i*u-n*v*u-a*i*b+n*c*b)*D,e[3]=(m*c*r-a*_*r-m*i*u+n*_*u+a*i*p-n*c*p)*D,e[4]=M*D,e[5]=(d*v*r-y*_*r+y*i*p-t*v*p-d*i*b+t*_*b)*D,e[6]=(y*c*r-l*v*r-y*i*u+t*v*u+l*i*b-t*c*b)*D,e[7]=(l*_*r-d*c*r+d*i*u-t*_*u-l*i*p+t*c*p)*D,e[8]=E*D,e[9]=(y*m*r-d*g*r-y*n*p+t*g*p+d*n*b-t*m*b)*D,e[10]=(l*g*r-y*a*r+y*n*u-t*g*u-l*n*b+t*a*b)*D,e[11]=(d*a*r-l*m*r-d*n*u+t*m*u+l*n*p-t*a*p)*D,e[12]=A*D,e[13]=(d*g*i-y*m*i+y*n*_-t*g*_-d*n*v+t*m*v)*D,e[14]=(y*a*i-l*g*i-y*n*c+t*g*c+l*n*v-t*a*v)*D,e[15]=(l*m*i-d*a*i+d*n*c-t*m*c-l*n*_+t*a*_)*D,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,l=e.x,a=e.y,c=e.z,u=r*l,d=r*a;return this.set(u*l+n,u*a-i*c,u*c+i*a,0,u*a+i*c,d*a+n,d*c-i*l,0,u*c-i*a,d*c+i*l,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,l){return this.set(1,n,r,0,e,1,l,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,l=t._y,a=t._z,c=t._w,u=r+r,d=l+l,m=a+a,_=r*u,p=r*d,y=r*m,g=l*d,v=l*m,b=a*m,x=c*u,M=c*d,E=c*m,A=n.x,L=n.y,D=n.z;return i[0]=(1-(g+b))*A,i[1]=(p+E)*A,i[2]=(y-M)*A,i[3]=0,i[4]=(p-E)*L,i[5]=(1-(_+b))*L,i[6]=(v+x)*L,i[7]=0,i[8]=(y+M)*D,i[9]=(v-x)*D,i[10]=(1-(_+g))*D,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=_v1$5.set(i[0],i[1],i[2]).length();const l=_v1$5.set(i[4],i[5],i[6]).length(),a=_v1$5.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],_m1$2.copy(this);const u=1/r,d=1/l,m=1/a;return _m1$2.elements[0]*=u,_m1$2.elements[1]*=u,_m1$2.elements[2]*=u,_m1$2.elements[4]*=d,_m1$2.elements[5]*=d,_m1$2.elements[6]*=d,_m1$2.elements[8]*=m,_m1$2.elements[9]*=m,_m1$2.elements[10]*=m,t.setFromRotationMatrix(_m1$2),n.x=r,n.y=l,n.z=a,this}makePerspective(e,t,n,i,r,l){const a=this.elements,c=2*r/(t-e),u=2*r/(n-i),d=(t+e)/(t-e),m=(n+i)/(n-i),_=-(l+r)/(l-r),p=-2*l*r/(l-r);return a[0]=c,a[4]=0,a[8]=d,a[12]=0,a[1]=0,a[5]=u,a[9]=m,a[13]=0,a[2]=0,a[6]=0,a[10]=_,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,r,l){const a=this.elements,c=1/(t-e),u=1/(n-i),d=1/(l-r),m=(t+e)*c,_=(n+i)*u,p=(l+r)*d;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-m,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-_,a[2]=0,a[6]=0,a[10]=-2*d,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const _v1$5=new Vector3,_m1$2=new Matrix4,_zero=new Vector3(0,0,0),_one=new Vector3(1,1,1),_x=new Vector3,_y=new Vector3,_z=new Vector3,_matrix$1=new Matrix4,_quaternion$3=new Quaternion;class Euler{constructor(e=0,t=0,n=0,i=Euler.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],l=i[4],a=i[8],c=i[1],u=i[5],d=i[9],m=i[2],_=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(clamp(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-l,r)):(this._x=Math.atan2(_,u),this._z=0);break;case"YXZ":this._x=Math.asin(-clamp(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(clamp(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-m,p),this._z=Math.atan2(-l,u)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-clamp(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(_,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-l,u));break;case"YZX":this._z=Math.asin(clamp(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-clamp(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,u),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return _matrix$1.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_matrix$1,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _quaternion$3.setFromEuler(this),this.setFromQuaternion(_quaternion$3,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Euler.DefaultOrder="XYZ";Euler.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Layers{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _object3DId=0;const _v1$4=new Vector3,_q1=new Quaternion,_m1$1=new Matrix4,_target=new Vector3,_position$3=new Vector3,_scale$2=new Vector3,_quaternion$2=new Quaternion,_xAxis=new Vector3(1,0,0),_yAxis=new Vector3(0,1,0),_zAxis=new Vector3(0,0,1),_addedEvent={type:"added"},_removedEvent={type:"removed"};class Object3D extends EventDispatcher{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_object3DId++}),this.uuid=generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Object3D.DefaultUp.clone();const e=new Vector3,t=new Euler,n=new Quaternion,i=new Vector3(1,1,1);function r(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Matrix4},normalMatrix:{value:new Matrix3}}),this.matrix=new Matrix4,this.matrixWorld=new Matrix4,this.matrixAutoUpdate=Object3D.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Object3D.DefaultMatrixWorldAutoUpdate,this.layers=new Layers,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.multiply(_q1),this}rotateOnWorldAxis(e,t){return _q1.setFromAxisAngle(e,t),this.quaternion.premultiply(_q1),this}rotateX(e){return this.rotateOnAxis(_xAxis,e)}rotateY(e){return this.rotateOnAxis(_yAxis,e)}rotateZ(e){return this.rotateOnAxis(_zAxis,e)}translateOnAxis(e,t){return _v1$4.copy(e).applyQuaternion(this.quaternion),this.position.add(_v1$4.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_xAxis,e)}translateY(e){return this.translateOnAxis(_yAxis,e)}translateZ(e){return this.translateOnAxis(_zAxis,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(_m1$1.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_target.copy(e):_target.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_position$3.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_m1$1.lookAt(_position$3,_target,this.up):_m1$1.lookAt(_target,_position$3,this.up),this.quaternion.setFromRotationMatrix(_m1$1),i&&(_m1$1.extractRotation(i.matrixWorld),_q1.setFromRotationMatrix(_m1$1),this.quaternion.premultiply(_q1.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_addedEvent)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(_removedEvent)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(_removedEvent)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_m1$1.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_m1$1.multiply(e.parent.matrixWorld)),e.applyMatrix4(_m1$1),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,e,_scale$2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_position$3,_quaternion$2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,l=i.length;r<l;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,d=c.length;u<d;u++){const m=c[u];r(e.shapes,m)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=l(e.geometries),c=l(e.materials),u=l(e.textures),d=l(e.images),m=l(e.shapes),_=l(e.skeletons),p=l(e.animations),y=l(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),u.length>0&&(n.textures=u),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),_.length>0&&(n.skeletons=_),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=i,n;function l(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Object3D.DefaultUp=new Vector3(0,1,0);Object3D.DefaultMatrixAutoUpdate=!0;Object3D.DefaultMatrixWorldAutoUpdate=!0;const _v0$1=new Vector3,_v1$3=new Vector3,_v2$2=new Vector3,_v3$1=new Vector3,_vab=new Vector3,_vac=new Vector3,_vbc=new Vector3,_vap=new Vector3,_vbp=new Vector3,_vcp=new Vector3;class Triangle{constructor(e=new Vector3,t=new Vector3,n=new Vector3){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),_v0$1.subVectors(e,t),i.cross(_v0$1);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){_v0$1.subVectors(i,t),_v1$3.subVectors(n,t),_v2$2.subVectors(e,t);const l=_v0$1.dot(_v0$1),a=_v0$1.dot(_v1$3),c=_v0$1.dot(_v2$2),u=_v1$3.dot(_v1$3),d=_v1$3.dot(_v2$2),m=l*u-a*a;if(m===0)return r.set(-2,-1,-1);const _=1/m,p=(u*c-a*d)*_,y=(l*d-a*c)*_;return r.set(1-p-y,y,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_v3$1),_v3$1.x>=0&&_v3$1.y>=0&&_v3$1.x+_v3$1.y<=1}static getUV(e,t,n,i,r,l,a,c){return this.getBarycoord(e,t,n,i,_v3$1),c.set(0,0),c.addScaledVector(r,_v3$1.x),c.addScaledVector(l,_v3$1.y),c.addScaledVector(a,_v3$1.z),c}static isFrontFacing(e,t,n,i){return _v0$1.subVectors(n,t),_v1$3.subVectors(e,t),_v0$1.cross(_v1$3).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _v0$1.subVectors(this.c,this.b),_v1$3.subVectors(this.a,this.b),_v0$1.cross(_v1$3).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Triangle.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Triangle.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Triangle.getUV(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Triangle.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Triangle.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let l,a;_vab.subVectors(i,n),_vac.subVectors(r,n),_vap.subVectors(e,n);const c=_vab.dot(_vap),u=_vac.dot(_vap);if(c<=0&&u<=0)return t.copy(n);_vbp.subVectors(e,i);const d=_vab.dot(_vbp),m=_vac.dot(_vbp);if(d>=0&&m<=d)return t.copy(i);const _=c*m-d*u;if(_<=0&&c>=0&&d<=0)return l=c/(c-d),t.copy(n).addScaledVector(_vab,l);_vcp.subVectors(e,r);const p=_vab.dot(_vcp),y=_vac.dot(_vcp);if(y>=0&&p<=y)return t.copy(r);const g=p*u-c*y;if(g<=0&&u>=0&&y<=0)return a=u/(u-y),t.copy(n).addScaledVector(_vac,a);const v=d*y-p*m;if(v<=0&&m-d>=0&&p-y>=0)return _vbc.subVectors(r,i),a=(m-d)/(m-d+(p-y)),t.copy(i).addScaledVector(_vbc,a);const b=1/(v+g+_);return l=g*b,a=_*b,t.copy(n).addScaledVector(_vab,l).addScaledVector(_vac,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let materialId=0;class Material extends EventDispatcher{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:materialId++}),this.uuid=generateUUID(),this.name="",this.type="Material",this.blending=NormalBlending,this.side=FrontSide,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=SrcAlphaFactor,this.blendDst=OneMinusSrcAlphaFactor,this.blendEquation=AddEquation,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=LessEqualDepth,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=AlwaysStencilFunc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=KeepStencilOp,this.stencilZFail=KeepStencilOp,this.stencilZPass=KeepStencilOp,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==NormalBlending&&(n.blending=this.blending),this.side!==FrontSide&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(r){const l=[];for(const a in r){const c=r[a];delete c.metadata,l.push(c)}return l}if(t){const r=i(e.textures),l=i(e.images);r.length>0&&(n.textures=r),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class MeshBasicMaterial extends Material{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _vector$9=new Vector3,_vector2$1=new Vector2;class BufferAttribute{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=StaticDrawUsage,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_vector2$1.fromBufferAttribute(this,t),_vector2$1.applyMatrix3(e),this.setXY(t,_vector2$1.x,_vector2$1.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix3(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyMatrix4(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.applyNormalMatrix(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_vector$9.fromBufferAttribute(this,t),_vector$9.transformDirection(e),this.setXYZ(t,_vector$9.x,_vector$9.y,_vector$9.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=denormalize(t,this.array)),t}setX(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=denormalize(t,this.array)),t}setY(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=denormalize(t,this.array)),t}setZ(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=denormalize(t,this.array)),t}setW(e,t){return this.normalized&&(t=normalize(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array),i=normalize(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=normalize(t,this.array),n=normalize(n,this.array),i=normalize(i,this.array),r=normalize(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==StaticDrawUsage&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Uint16BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uint32BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Float32BufferAttribute extends BufferAttribute{constructor(e,t,n){super(new Float32Array(e),t,n)}}let _id$1=0;const _m1=new Matrix4,_obj=new Object3D,_offset=new Vector3,_box$1=new Box3,_boxMorphTargets=new Box3,_vector$8=new Vector3;class BufferGeometry extends EventDispatcher{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_id$1++}),this.uuid=generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(arrayNeedsUint32(e)?Uint32BufferAttribute:Uint16BufferAttribute)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Matrix3().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _m1.makeRotationFromQuaternion(e),this.applyMatrix4(_m1),this}rotateX(e){return _m1.makeRotationX(e),this.applyMatrix4(_m1),this}rotateY(e){return _m1.makeRotationY(e),this.applyMatrix4(_m1),this}rotateZ(e){return _m1.makeRotationZ(e),this.applyMatrix4(_m1),this}translate(e,t,n){return _m1.makeTranslation(e,t,n),this.applyMatrix4(_m1),this}scale(e,t,n){return _m1.makeScale(e,t,n),this.applyMatrix4(_m1),this}lookAt(e){return _obj.lookAt(e),_obj.updateMatrix(),this.applyMatrix4(_obj.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_offset).negate(),this.translate(_offset.x,_offset.y,_offset.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Float32BufferAttribute(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Box3);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Vector3(-1/0,-1/0,-1/0),new Vector3(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];_box$1.setFromBufferAttribute(r),this.morphTargetsRelative?(_vector$8.addVectors(this.boundingBox.min,_box$1.min),this.boundingBox.expandByPoint(_vector$8),_vector$8.addVectors(this.boundingBox.max,_box$1.max),this.boundingBox.expandByPoint(_vector$8)):(this.boundingBox.expandByPoint(_box$1.min),this.boundingBox.expandByPoint(_box$1.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sphere);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Vector3,1/0);return}if(e){const n=this.boundingSphere.center;if(_box$1.setFromBufferAttribute(e),t)for(let r=0,l=t.length;r<l;r++){const a=t[r];_boxMorphTargets.setFromBufferAttribute(a),this.morphTargetsRelative?(_vector$8.addVectors(_box$1.min,_boxMorphTargets.min),_box$1.expandByPoint(_vector$8),_vector$8.addVectors(_box$1.max,_boxMorphTargets.max),_box$1.expandByPoint(_vector$8)):(_box$1.expandByPoint(_boxMorphTargets.min),_box$1.expandByPoint(_boxMorphTargets.max))}_box$1.getCenter(n);let i=0;for(let r=0,l=e.count;r<l;r++)_vector$8.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(_vector$8));if(t)for(let r=0,l=t.length;r<l;r++){const a=t[r],c=this.morphTargetsRelative;for(let u=0,d=a.count;u<d;u++)_vector$8.fromBufferAttribute(a,u),c&&(_offset.fromBufferAttribute(e,u),_vector$8.add(_offset)),i=Math.max(i,n.distanceToSquared(_vector$8))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,l=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new BufferAttribute(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,u=[],d=[];for(let U=0;U<a;U++)u[U]=new Vector3,d[U]=new Vector3;const m=new Vector3,_=new Vector3,p=new Vector3,y=new Vector2,g=new Vector2,v=new Vector2,b=new Vector3,x=new Vector3;function M(U,J,ne){m.fromArray(i,U*3),_.fromArray(i,J*3),p.fromArray(i,ne*3),y.fromArray(l,U*2),g.fromArray(l,J*2),v.fromArray(l,ne*2),_.sub(m),p.sub(m),g.sub(y),v.sub(y);const F=1/(g.x*v.y-v.x*g.y);!isFinite(F)||(b.copy(_).multiplyScalar(v.y).addScaledVector(p,-g.y).multiplyScalar(F),x.copy(p).multiplyScalar(g.x).addScaledVector(_,-v.x).multiplyScalar(F),u[U].add(b),u[J].add(b),u[ne].add(b),d[U].add(x),d[J].add(x),d[ne].add(x))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let U=0,J=E.length;U<J;++U){const ne=E[U],F=ne.start,P=ne.count;for(let N=F,q=F+P;N<q;N+=3)M(n[N+0],n[N+1],n[N+2])}const A=new Vector3,L=new Vector3,D=new Vector3,R=new Vector3;function I(U){D.fromArray(r,U*3),R.copy(D);const J=u[U];A.copy(J),A.sub(D.multiplyScalar(D.dot(J))).normalize(),L.crossVectors(R,J);const F=L.dot(d[U])<0?-1:1;c[U*4]=A.x,c[U*4+1]=A.y,c[U*4+2]=A.z,c[U*4+3]=F}for(let U=0,J=E.length;U<J;++U){const ne=E[U],F=ne.start,P=ne.count;for(let N=F,q=F+P;N<q;N+=3)I(n[N+0]),I(n[N+1]),I(n[N+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new BufferAttribute(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,p=n.count;_<p;_++)n.setXYZ(_,0,0,0);const i=new Vector3,r=new Vector3,l=new Vector3,a=new Vector3,c=new Vector3,u=new Vector3,d=new Vector3,m=new Vector3;if(e)for(let _=0,p=e.count;_<p;_+=3){const y=e.getX(_+0),g=e.getX(_+1),v=e.getX(_+2);i.fromBufferAttribute(t,y),r.fromBufferAttribute(t,g),l.fromBufferAttribute(t,v),d.subVectors(l,r),m.subVectors(i,r),d.cross(m),a.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),u.fromBufferAttribute(n,v),a.add(d),c.add(d),u.add(d),n.setXYZ(y,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(v,u.x,u.y,u.z)}else for(let _=0,p=t.count;_<p;_+=3)i.fromBufferAttribute(t,_+0),r.fromBufferAttribute(t,_+1),l.fromBufferAttribute(t,_+2),d.subVectors(l,r),m.subVectors(i,r),d.cross(m),n.setXYZ(_+0,d.x,d.y,d.z),n.setXYZ(_+1,d.x,d.y,d.z),n.setXYZ(_+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_vector$8.fromBufferAttribute(e,t),_vector$8.normalize(),e.setXYZ(t,_vector$8.x,_vector$8.y,_vector$8.z)}toNonIndexed(){function e(a,c){const u=a.array,d=a.itemSize,m=a.normalized,_=new u.constructor(c.length*d);let p=0,y=0;for(let g=0,v=c.length;g<v;g++){a.isInterleavedBufferAttribute?p=c[g]*a.data.stride+a.offset:p=c[g]*d;for(let b=0;b<d;b++)_[y++]=u[p++]}return new BufferAttribute(_,d,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new BufferGeometry,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],u=e(c,n);t.setAttribute(a,u)}const r=this.morphAttributes;for(const a in r){const c=[],u=r[a];for(let d=0,m=u.length;d<m;d++){const _=u[d],p=e(_,n);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let a=0,c=l.length;a<c;a++){const u=l[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const u=n[c];e.data.attributes[c]=u.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],d=[];for(let m=0,_=u.length;m<_;m++){const p=u[m];d.push(p.toJSON(e.data))}d.length>0&&(i[c]=d,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const u in i){const d=i[u];this.setAttribute(u,d.clone(t))}const r=e.morphAttributes;for(const u in r){const d=[],m=r[u];for(let _=0,p=m.length;_<p;_++)d.push(m[_].clone(t));this.morphAttributes[u]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let u=0,d=l.length;u<d;u++){const m=l[u];this.addGroup(m.start,m.count,m.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const _inverseMatrix$2=new Matrix4,_ray$2=new Ray,_sphere$3=new Sphere,_vA$1=new Vector3,_vB$1=new Vector3,_vC$1=new Vector3,_tempA=new Vector3,_tempB=new Vector3,_tempC=new Vector3,_morphA=new Vector3,_morphB=new Vector3,_morphC=new Vector3,_uvA$1=new Vector2,_uvB$1=new Vector2,_uvC$1=new Vector2,_intersectionPoint=new Vector3,_intersectionPointWorld=new Vector3;class Mesh extends Object3D{constructor(e=new BufferGeometry,t=new MeshBasicMaterial){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=i.length;r<l;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),_sphere$3.copy(n.boundingSphere),_sphere$3.applyMatrix4(r),e.ray.intersectsSphere(_sphere$3)===!1)||(_inverseMatrix$2.copy(r).invert(),_ray$2.copy(e.ray).applyMatrix4(_inverseMatrix$2),n.boundingBox!==null&&_ray$2.intersectsBox(n.boundingBox)===!1))return;let l;const a=n.index,c=n.attributes.position,u=n.morphAttributes.position,d=n.morphTargetsRelative,m=n.attributes.uv,_=n.attributes.uv2,p=n.groups,y=n.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,v=p.length;g<v;g++){const b=p[g],x=i[b.materialIndex],M=Math.max(b.start,y.start),E=Math.min(a.count,Math.min(b.start+b.count,y.start+y.count));for(let A=M,L=E;A<L;A+=3){const D=a.getX(A),R=a.getX(A+1),I=a.getX(A+2);l=checkBufferGeometryIntersection(this,x,e,_ray$2,c,u,d,m,_,D,R,I),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=b.materialIndex,t.push(l))}}else{const g=Math.max(0,y.start),v=Math.min(a.count,y.start+y.count);for(let b=g,x=v;b<x;b+=3){const M=a.getX(b),E=a.getX(b+1),A=a.getX(b+2);l=checkBufferGeometryIntersection(this,i,e,_ray$2,c,u,d,m,_,M,E,A),l&&(l.faceIndex=Math.floor(b/3),t.push(l))}}else if(c!==void 0)if(Array.isArray(i))for(let g=0,v=p.length;g<v;g++){const b=p[g],x=i[b.materialIndex],M=Math.max(b.start,y.start),E=Math.min(c.count,Math.min(b.start+b.count,y.start+y.count));for(let A=M,L=E;A<L;A+=3){const D=A,R=A+1,I=A+2;l=checkBufferGeometryIntersection(this,x,e,_ray$2,c,u,d,m,_,D,R,I),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=b.materialIndex,t.push(l))}}else{const g=Math.max(0,y.start),v=Math.min(c.count,y.start+y.count);for(let b=g,x=v;b<x;b+=3){const M=b,E=b+1,A=b+2;l=checkBufferGeometryIntersection(this,i,e,_ray$2,c,u,d,m,_,M,E,A),l&&(l.faceIndex=Math.floor(b/3),t.push(l))}}}}function checkIntersection(o,e,t,n,i,r,l,a){let c;if(e.side===BackSide?c=n.intersectTriangle(l,r,i,!0,a):c=n.intersectTriangle(i,r,l,e.side!==DoubleSide,a),c===null)return null;_intersectionPointWorld.copy(a),_intersectionPointWorld.applyMatrix4(o.matrixWorld);const u=t.ray.origin.distanceTo(_intersectionPointWorld);return u<t.near||u>t.far?null:{distance:u,point:_intersectionPointWorld.clone(),object:o}}function checkBufferGeometryIntersection(o,e,t,n,i,r,l,a,c,u,d,m){_vA$1.fromBufferAttribute(i,u),_vB$1.fromBufferAttribute(i,d),_vC$1.fromBufferAttribute(i,m);const _=o.morphTargetInfluences;if(r&&_){_morphA.set(0,0,0),_morphB.set(0,0,0),_morphC.set(0,0,0);for(let y=0,g=r.length;y<g;y++){const v=_[y],b=r[y];v!==0&&(_tempA.fromBufferAttribute(b,u),_tempB.fromBufferAttribute(b,d),_tempC.fromBufferAttribute(b,m),l?(_morphA.addScaledVector(_tempA,v),_morphB.addScaledVector(_tempB,v),_morphC.addScaledVector(_tempC,v)):(_morphA.addScaledVector(_tempA.sub(_vA$1),v),_morphB.addScaledVector(_tempB.sub(_vB$1),v),_morphC.addScaledVector(_tempC.sub(_vC$1),v)))}_vA$1.add(_morphA),_vB$1.add(_morphB),_vC$1.add(_morphC)}o.isSkinnedMesh&&(o.boneTransform(u,_vA$1),o.boneTransform(d,_vB$1),o.boneTransform(m,_vC$1));const p=checkIntersection(o,e,t,n,_vA$1,_vB$1,_vC$1,_intersectionPoint);if(p){a&&(_uvA$1.fromBufferAttribute(a,u),_uvB$1.fromBufferAttribute(a,d),_uvC$1.fromBufferAttribute(a,m),p.uv=Triangle.getUV(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2)),c&&(_uvA$1.fromBufferAttribute(c,u),_uvB$1.fromBufferAttribute(c,d),_uvC$1.fromBufferAttribute(c,m),p.uv2=Triangle.getUV(_intersectionPoint,_vA$1,_vB$1,_vC$1,_uvA$1,_uvB$1,_uvC$1,new Vector2));const y={a:u,b:d,c:m,normal:new Vector3,materialIndex:0};Triangle.getNormal(_vA$1,_vB$1,_vC$1,y.normal),p.face=y}return p}class BoxGeometry extends BufferGeometry{constructor(e=1,t=1,n=1,i=1,r=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:l};const a=this;i=Math.floor(i),r=Math.floor(r),l=Math.floor(l);const c=[],u=[],d=[],m=[];let _=0,p=0;y("z","y","x",-1,-1,n,t,e,l,r,0),y("z","y","x",1,-1,n,t,-e,l,r,1),y("x","z","y",1,1,e,n,t,i,l,2),y("x","z","y",1,-1,e,n,-t,i,l,3),y("x","y","z",1,-1,e,t,n,i,r,4),y("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Float32BufferAttribute(u,3)),this.setAttribute("normal",new Float32BufferAttribute(d,3)),this.setAttribute("uv",new Float32BufferAttribute(m,2));function y(g,v,b,x,M,E,A,L,D,R,I){const U=E/D,J=A/R,ne=E/2,F=A/2,P=L/2,N=D+1,q=R+1;let G=0,H=0;const W=new Vector3;for(let $=0;$<q;$++){const V=$*J-F;for(let z=0;z<N;z++){const K=z*U-ne;W[g]=K*x,W[v]=V*M,W[b]=P,u.push(W.x,W.y,W.z),W[g]=0,W[v]=0,W[b]=L>0?1:-1,d.push(W.x,W.y,W.z),m.push(z/D),m.push(1-$/R),G+=1}}for(let $=0;$<R;$++)for(let V=0;V<D;V++){const z=_+V+N*$,K=_+V+N*($+1),oe=_+(V+1)+N*($+1),ce=_+(V+1)+N*$;c.push(z,K,ce),c.push(K,oe,ce),H+=6}a.addGroup(p,H,I),p+=H,_+=G}}static fromJSON(e){return new BoxGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function cloneUniforms(o){const e={};for(const t in o){e[t]={};for(const n in o[t]){const i=o[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function mergeUniforms(o){const e={};for(let t=0;t<o.length;t++){const n=cloneUniforms(o[t]);for(const i in n)e[i]=n[i]}return e}function cloneUniformsGroups(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}const UniformsUtils={clone:cloneUniforms,merge:mergeUniforms};var default_vertex=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,default_fragment=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ShaderMaterial extends Material{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=default_vertex,this.fragmentShader=default_fragment,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cloneUniforms(e.uniforms),this.uniformsGroups=cloneUniformsGroups(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const l=this.uniforms[i].value;l&&l.isTexture?t.uniforms[i]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[i]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[i]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[i]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[i]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[i]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[i]={type:"m4",value:l.toArray()}:t.uniforms[i]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Camera extends Object3D{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Matrix4,this.projectionMatrix=new Matrix4,this.projectionMatrixInverse=new Matrix4}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class PerspectiveCamera extends Camera{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=RAD2DEG*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return RAD2DEG*2*Math.atan(Math.tan(DEG2RAD*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(DEG2RAD*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const l=this.view;if(this.view!==null&&this.view.enabled){const c=l.fullWidth,u=l.fullHeight;r+=l.offsetX*i/c,t-=l.offsetY*n/u,i*=l.width/c,n*=l.height/u}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fov=90,aspect=1;class CubeCamera extends Object3D{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new PerspectiveCamera(fov,aspect,e,t);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new Vector3(1,0,0)),this.add(i);const r=new PerspectiveCamera(fov,aspect,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new Vector3(-1,0,0)),this.add(r);const l=new PerspectiveCamera(fov,aspect,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(new Vector3(0,1,0)),this.add(l);const a=new PerspectiveCamera(fov,aspect,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new Vector3(0,-1,0)),this.add(a);const c=new PerspectiveCamera(fov,aspect,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new Vector3(0,0,1)),this.add(c);const u=new PerspectiveCamera(fov,aspect,e,t);u.layers=this.layers,u.up.set(0,-1,0),u.lookAt(new Vector3(0,0,-1)),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,l,a,c,u]=this.children,d=e.getRenderTarget(),m=e.toneMapping,_=e.xr.enabled;e.toneMapping=NoToneMapping,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,r),e.setRenderTarget(n,2),e.render(t,l),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,u),e.setRenderTarget(d),e.toneMapping=m,e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class CubeTexture extends Texture{constructor(e,t,n,i,r,l,a,c,u,d){e=e!==void 0?e:[],t=t!==void 0?t:CubeReflectionMapping,super(e,t,n,i,r,l,a,c,u,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WebGLCubeRenderTarget extends WebGLRenderTarget{constructor(e,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new CubeTexture(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:LinearFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new BoxGeometry(5,5,5),r=new ShaderMaterial({name:"CubemapFromEquirect",uniforms:cloneUniforms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:BackSide,blending:NoBlending});r.uniforms.tEquirect.value=t;const l=new Mesh(i,r),a=t.minFilter;return t.minFilter===LinearMipmapLinearFilter&&(t.minFilter=LinearFilter),new CubeCamera(1,10,this).update(e,l),t.minFilter=a,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,i);e.setRenderTarget(r)}}const _vector1=new Vector3,_vector2=new Vector3,_normalMatrix=new Matrix3;class Plane{constructor(e=new Vector3(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=_vector1.subVectors(n,t).cross(_vector2.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(_vector1),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(n).multiplyScalar(r).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_normalMatrix.getNormalMatrix(e),i=this.coplanarPoint(_vector1).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _sphere$2=new Sphere,_vector$7=new Vector3;class Frustum{constructor(e=new Plane,t=new Plane,n=new Plane,i=new Plane,r=new Plane,l=new Plane){this.planes=[e,t,n,i,r,l]}set(e,t,n,i,r,l){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],r=n[1],l=n[2],a=n[3],c=n[4],u=n[5],d=n[6],m=n[7],_=n[8],p=n[9],y=n[10],g=n[11],v=n[12],b=n[13],x=n[14],M=n[15];return t[0].setComponents(a-i,m-c,g-_,M-v).normalize(),t[1].setComponents(a+i,m+c,g+_,M+v).normalize(),t[2].setComponents(a+r,m+u,g+p,M+b).normalize(),t[3].setComponents(a-r,m-u,g-p,M-b).normalize(),t[4].setComponents(a-l,m-d,g-y,M-x).normalize(),t[5].setComponents(a+l,m+d,g+y,M+x).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),_sphere$2.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$2)}intersectsSprite(e){return _sphere$2.center.set(0,0,0),_sphere$2.radius=.7071067811865476,_sphere$2.applyMatrix4(e.matrixWorld),this.intersectsSphere(_sphere$2)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_vector$7.x=i.normal.x>0?e.max.x:e.min.x,_vector$7.y=i.normal.y>0?e.max.y:e.min.y,_vector$7.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_vector$7)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function WebGLAnimation(){let o=null,e=!1,t=null,n=null;function i(r,l){t(r,l),n=o.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=o.requestAnimationFrame(i),e=!0)},stop:function(){o.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){o=r}}}function WebGLAttributes(o,e){const t=e.isWebGL2,n=new WeakMap;function i(u,d){const m=u.array,_=u.usage,p=o.createBuffer();o.bindBuffer(d,p),o.bufferData(d,m,_),u.onUploadCallback();let y;if(m instanceof Float32Array)y=5126;else if(m instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(m instanceof Int16Array)y=5122;else if(m instanceof Uint32Array)y=5125;else if(m instanceof Int32Array)y=5124;else if(m instanceof Int8Array)y=5120;else if(m instanceof Uint8Array)y=5121;else if(m instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:p,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:u.version}}function r(u,d,m){const _=d.array,p=d.updateRange;o.bindBuffer(m,u),p.count===-1?o.bufferSubData(m,0,_):(t?o.bufferSubData(m,p.offset*_.BYTES_PER_ELEMENT,_,p.offset,p.count):o.bufferSubData(m,p.offset*_.BYTES_PER_ELEMENT,_.subarray(p.offset,p.offset+p.count)),p.count=-1)}function l(u){return u.isInterleavedBufferAttribute&&(u=u.data),n.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=n.get(u);d&&(o.deleteBuffer(d.buffer),n.delete(u))}function c(u,d){if(u.isGLBufferAttribute){const _=n.get(u);(!_||_.version<u.version)&&n.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const m=n.get(u);m===void 0?n.set(u,i(u,d)):m.version<u.version&&(r(m.buffer,u,d),m.version=u.version)}return{get:l,remove:a,update:c}}class PlaneGeometry extends BufferGeometry{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,l=t/2,a=Math.floor(n),c=Math.floor(i),u=a+1,d=c+1,m=e/a,_=t/c,p=[],y=[],g=[],v=[];for(let b=0;b<d;b++){const x=b*_-l;for(let M=0;M<u;M++){const E=M*m-r;y.push(E,-x,0),g.push(0,0,1),v.push(M/a),v.push(1-b/c)}}for(let b=0;b<c;b++)for(let x=0;x<a;x++){const M=x+u*b,E=x+u*(b+1),A=x+1+u*(b+1),L=x+1+u*b;p.push(M,E,L),p.push(E,A,L)}this.setIndex(p),this.setAttribute("position",new Float32BufferAttribute(y,3)),this.setAttribute("normal",new Float32BufferAttribute(g,3)),this.setAttribute("uv",new Float32BufferAttribute(v,2))}static fromJSON(e){return new PlaneGeometry(e.width,e.height,e.widthSegments,e.heightSegments)}}var alphamap_fragment=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex="vec3 transformed = vec3( position );",beginnormal_vertex=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,iridescence_fragment=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,clipping_planes_pars_fragment=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,cube_uv_reflection_fragment=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment="gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_vertex=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_fragment=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,lights_pars_begin=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,envmap_physical_pars_fragment=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,lights_toon_fragment=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,lights_phong_fragment=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lights_physical_fragment=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,iridescence_pars_fragment=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,output_fragment=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,shadowmask_pars_fragment=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,transmission_pars_fragment=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vertex$g=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fragment$g=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fragment$f=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$e=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fragment$e=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,vertex$d=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fragment$d=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vertex$c=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fragment$c=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,vertex$b=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$b=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$a=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fragment$a=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$9=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$9=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$8=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fragment$8=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$7=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fragment$7=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,vertex$6=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$6=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fragment$5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$4=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$4=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vertex$3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fragment$3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vertex$2=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fragment$2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vertex$1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fragment$1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ShaderChunk={alphamap_fragment,alphamap_pars_fragment,alphatest_fragment,alphatest_pars_fragment,aomap_fragment,aomap_pars_fragment,begin_vertex,beginnormal_vertex,bsdfs,iridescence_fragment,bumpmap_pars_fragment,clipping_planes_fragment,clipping_planes_pars_fragment,clipping_planes_pars_vertex,clipping_planes_vertex,color_fragment,color_pars_fragment,color_pars_vertex,color_vertex,common,cube_uv_reflection_fragment,defaultnormal_vertex,displacementmap_pars_vertex,displacementmap_vertex,emissivemap_fragment,emissivemap_pars_fragment,encodings_fragment,encodings_pars_fragment,envmap_fragment,envmap_common_pars_fragment,envmap_pars_fragment,envmap_pars_vertex,envmap_physical_pars_fragment,envmap_vertex,fog_vertex,fog_pars_vertex,fog_fragment,fog_pars_fragment,gradientmap_pars_fragment,lightmap_fragment,lightmap_pars_fragment,lights_lambert_fragment,lights_lambert_pars_fragment,lights_pars_begin,lights_toon_fragment,lights_toon_pars_fragment,lights_phong_fragment,lights_phong_pars_fragment,lights_physical_fragment,lights_physical_pars_fragment,lights_fragment_begin,lights_fragment_maps,lights_fragment_end,logdepthbuf_fragment,logdepthbuf_pars_fragment,logdepthbuf_pars_vertex,logdepthbuf_vertex,map_fragment,map_pars_fragment,map_particle_fragment,map_particle_pars_fragment,metalnessmap_fragment,metalnessmap_pars_fragment,morphcolor_vertex,morphnormal_vertex,morphtarget_pars_vertex,morphtarget_vertex,normal_fragment_begin,normal_fragment_maps,normal_pars_fragment,normal_pars_vertex,normal_vertex,normalmap_pars_fragment,clearcoat_normal_fragment_begin,clearcoat_normal_fragment_maps,clearcoat_pars_fragment,iridescence_pars_fragment,output_fragment,packing,premultiplied_alpha_fragment,project_vertex,dithering_fragment,dithering_pars_fragment,roughnessmap_fragment,roughnessmap_pars_fragment,shadowmap_pars_fragment,shadowmap_pars_vertex,shadowmap_vertex,shadowmask_pars_fragment,skinbase_vertex,skinning_pars_vertex,skinning_vertex,skinnormal_vertex,specularmap_fragment,specularmap_pars_fragment,tonemapping_fragment,tonemapping_pars_fragment,transmission_fragment,transmission_pars_fragment,uv_pars_fragment,uv_pars_vertex,uv_vertex,uv2_pars_fragment,uv2_pars_vertex,uv2_vertex,worldpos_vertex,background_vert:vertex$g,background_frag:fragment$g,cube_vert:vertex$f,cube_frag:fragment$f,depth_vert:vertex$e,depth_frag:fragment$e,distanceRGBA_vert:vertex$d,distanceRGBA_frag:fragment$d,equirect_vert:vertex$c,equirect_frag:fragment$c,linedashed_vert:vertex$b,linedashed_frag:fragment$b,meshbasic_vert:vertex$a,meshbasic_frag:fragment$a,meshlambert_vert:vertex$9,meshlambert_frag:fragment$9,meshmatcap_vert:vertex$8,meshmatcap_frag:fragment$8,meshnormal_vert:vertex$7,meshnormal_frag:fragment$7,meshphong_vert:vertex$6,meshphong_frag:fragment$6,meshphysical_vert:vertex$5,meshphysical_frag:fragment$5,meshtoon_vert:vertex$4,meshtoon_frag:fragment$4,points_vert:vertex$3,points_frag:fragment$3,shadow_vert:vertex$2,shadow_frag:fragment$2,sprite_vert:vertex$1,sprite_frag:fragment$1},UniformsLib={common:{diffuse:{value:new Color(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Matrix3},uv2Transform:{value:new Matrix3},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Color(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Color(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}},sprite:{diffuse:{value:new Color(16777215)},opacity:{value:1},center:{value:new Vector2(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Matrix3}}},ShaderLib={basic:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.fog]),vertexShader:ShaderChunk.meshbasic_vert,fragmentShader:ShaderChunk.meshbasic_frag},lambert:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshlambert_vert,fragmentShader:ShaderChunk.meshlambert_frag},phong:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.specularmap,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},specular:{value:new Color(1118481)},shininess:{value:30}}]),vertexShader:ShaderChunk.meshphong_vert,fragmentShader:ShaderChunk.meshphong_frag},standard:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.envmap,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.roughnessmap,UniformsLib.metalnessmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag},toon:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.aomap,UniformsLib.lightmap,UniformsLib.emissivemap,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.gradientmap,UniformsLib.fog,UniformsLib.lights,{emissive:{value:new Color(0)}}]),vertexShader:ShaderChunk.meshtoon_vert,fragmentShader:ShaderChunk.meshtoon_frag},matcap:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,UniformsLib.fog,{matcap:{value:null}}]),vertexShader:ShaderChunk.meshmatcap_vert,fragmentShader:ShaderChunk.meshmatcap_frag},points:{uniforms:mergeUniforms([UniformsLib.points,UniformsLib.fog]),vertexShader:ShaderChunk.points_vert,fragmentShader:ShaderChunk.points_frag},dashed:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ShaderChunk.linedashed_vert,fragmentShader:ShaderChunk.linedashed_frag},depth:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap]),vertexShader:ShaderChunk.depth_vert,fragmentShader:ShaderChunk.depth_frag},normal:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.bumpmap,UniformsLib.normalmap,UniformsLib.displacementmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.meshnormal_vert,fragmentShader:ShaderChunk.meshnormal_frag},sprite:{uniforms:mergeUniforms([UniformsLib.sprite,UniformsLib.fog]),vertexShader:ShaderChunk.sprite_vert,fragmentShader:ShaderChunk.sprite_frag},background:{uniforms:{uvTransform:{value:new Matrix3},t2D:{value:null}},vertexShader:ShaderChunk.background_vert,fragmentShader:ShaderChunk.background_frag},cube:{uniforms:mergeUniforms([UniformsLib.envmap,{opacity:{value:1}}]),vertexShader:ShaderChunk.cube_vert,fragmentShader:ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ShaderChunk.equirect_vert,fragmentShader:ShaderChunk.equirect_frag},distanceRGBA:{uniforms:mergeUniforms([UniformsLib.common,UniformsLib.displacementmap,{referencePosition:{value:new Vector3},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ShaderChunk.distanceRGBA_vert,fragmentShader:ShaderChunk.distanceRGBA_frag},shadow:{uniforms:mergeUniforms([UniformsLib.lights,UniformsLib.fog,{color:{value:new Color(0)},opacity:{value:1}}]),vertexShader:ShaderChunk.shadow_vert,fragmentShader:ShaderChunk.shadow_frag}};ShaderLib.physical={uniforms:mergeUniforms([ShaderLib.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Vector2(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Color(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Vector2},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Color(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Color(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ShaderChunk.meshphysical_vert,fragmentShader:ShaderChunk.meshphysical_frag};function WebGLBackground(o,e,t,n,i,r){const l=new Color(0);let a=i===!0?0:1,c,u,d=null,m=0,_=null;function p(g,v){let b=!1,x=v.isScene===!0?v.background:null;x&&x.isTexture&&(x=e.get(x));const M=o.xr,E=M.getSession&&M.getSession();E&&E.environmentBlendMode==="additive"&&(x=null),x===null?y(l,a):x&&x.isColor&&(y(x,1),b=!0),(o.autoClear||b)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),x&&(x.isCubeTexture||x.mapping===CubeUVReflectionMapping)?(u===void 0&&(u=new Mesh(new BoxGeometry(1,1,1),new ShaderMaterial({name:"BackgroundCubeMaterial",uniforms:cloneUniforms(ShaderLib.cube.uniforms),vertexShader:ShaderLib.cube.vertexShader,fragmentShader:ShaderLib.cube.fragmentShader,side:BackSide,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,(d!==x||m!==x.version||_!==o.toneMapping)&&(u.material.needsUpdate=!0,d=x,m=x.version,_=o.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Mesh(new PlaneGeometry(2,2),new ShaderMaterial({name:"BackgroundMaterial",uniforms:cloneUniforms(ShaderLib.background.uniforms),vertexShader:ShaderLib.background.vertexShader,fragmentShader:ShaderLib.background.fragmentShader,side:FrontSide,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||m!==x.version||_!==o.toneMapping)&&(c.material.needsUpdate=!0,d=x,m=x.version,_=o.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function y(g,v){t.buffers.color.setClear(g.r,g.g,g.b,v,r)}return{getClearColor:function(){return l},setClearColor:function(g,v=1){l.set(g),a=v,y(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,y(l,a)},render:p}}function WebGLBindingStates(o,e,t,n){const i=o.getParameter(34921),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||r!==null,a={},c=v(null);let u=c,d=!1;function m(P,N,q,G,H){let W=!1;if(l){const $=g(G,q,N);u!==$&&(u=$,p(u.object)),W=b(P,G,q,H),W&&x(P,G,q,H)}else{const $=N.wireframe===!0;(u.geometry!==G.id||u.program!==q.id||u.wireframe!==$)&&(u.geometry=G.id,u.program=q.id,u.wireframe=$,W=!0)}H!==null&&t.update(H,34963),(W||d)&&(d=!1,R(P,N,q,G),H!==null&&o.bindBuffer(34963,t.get(H).buffer))}function _(){return n.isWebGL2?o.createVertexArray():r.createVertexArrayOES()}function p(P){return n.isWebGL2?o.bindVertexArray(P):r.bindVertexArrayOES(P)}function y(P){return n.isWebGL2?o.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function g(P,N,q){const G=q.wireframe===!0;let H=a[P.id];H===void 0&&(H={},a[P.id]=H);let W=H[N.id];W===void 0&&(W={},H[N.id]=W);let $=W[G];return $===void 0&&($=v(_()),W[G]=$),$}function v(P){const N=[],q=[],G=[];for(let H=0;H<i;H++)N[H]=0,q[H]=0,G[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:q,attributeDivisors:G,object:P,attributes:{},index:null}}function b(P,N,q,G){const H=u.attributes,W=N.attributes;let $=0;const V=q.getAttributes();for(const z in V)if(V[z].location>=0){const oe=H[z];let ce=W[z];if(ce===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(ce=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(ce=P.instanceColor)),oe===void 0||oe.attribute!==ce||ce&&oe.data!==ce.data)return!0;$++}return u.attributesNum!==$||u.index!==G}function x(P,N,q,G){const H={},W=N.attributes;let $=0;const V=q.getAttributes();for(const z in V)if(V[z].location>=0){let oe=W[z];oe===void 0&&(z==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),z==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor));const ce={};ce.attribute=oe,oe&&oe.data&&(ce.data=oe.data),H[z]=ce,$++}u.attributes=H,u.attributesNum=$,u.index=G}function M(){const P=u.newAttributes;for(let N=0,q=P.length;N<q;N++)P[N]=0}function E(P){A(P,0)}function A(P,N){const q=u.newAttributes,G=u.enabledAttributes,H=u.attributeDivisors;q[P]=1,G[P]===0&&(o.enableVertexAttribArray(P),G[P]=1),H[P]!==N&&((n.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,N),H[P]=N)}function L(){const P=u.newAttributes,N=u.enabledAttributes;for(let q=0,G=N.length;q<G;q++)N[q]!==P[q]&&(o.disableVertexAttribArray(q),N[q]=0)}function D(P,N,q,G,H,W){n.isWebGL2===!0&&(q===5124||q===5125)?o.vertexAttribIPointer(P,N,q,H,W):o.vertexAttribPointer(P,N,q,G,H,W)}function R(P,N,q,G){if(n.isWebGL2===!1&&(P.isInstancedMesh||G.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;M();const H=G.attributes,W=q.getAttributes(),$=N.defaultAttributeValues;for(const V in W){const z=W[V];if(z.location>=0){let K=H[V];if(K===void 0&&(V==="instanceMatrix"&&P.instanceMatrix&&(K=P.instanceMatrix),V==="instanceColor"&&P.instanceColor&&(K=P.instanceColor)),K!==void 0){const oe=K.normalized,ce=K.itemSize,Q=t.get(K);if(Q===void 0)continue;const pe=Q.buffer,fe=Q.type,ye=Q.bytesPerElement;if(K.isInterleavedBufferAttribute){const de=K.data,Le=de.stride,Te=K.offset;if(de.isInstancedInterleavedBuffer){for(let be=0;be<z.locationSize;be++)A(z.location+be,de.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let be=0;be<z.locationSize;be++)E(z.location+be);o.bindBuffer(34962,pe);for(let be=0;be<z.locationSize;be++)D(z.location+be,ce/z.locationSize,fe,oe,Le*ye,(Te+ce/z.locationSize*be)*ye)}else{if(K.isInstancedBufferAttribute){for(let de=0;de<z.locationSize;de++)A(z.location+de,K.meshPerAttribute);P.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let de=0;de<z.locationSize;de++)E(z.location+de);o.bindBuffer(34962,pe);for(let de=0;de<z.locationSize;de++)D(z.location+de,ce/z.locationSize,fe,oe,ce*ye,ce/z.locationSize*de*ye)}}else if($!==void 0){const oe=$[V];if(oe!==void 0)switch(oe.length){case 2:o.vertexAttrib2fv(z.location,oe);break;case 3:o.vertexAttrib3fv(z.location,oe);break;case 4:o.vertexAttrib4fv(z.location,oe);break;default:o.vertexAttrib1fv(z.location,oe)}}}}L()}function I(){ne();for(const P in a){const N=a[P];for(const q in N){const G=N[q];for(const H in G)y(G[H].object),delete G[H];delete N[q]}delete a[P]}}function U(P){if(a[P.id]===void 0)return;const N=a[P.id];for(const q in N){const G=N[q];for(const H in G)y(G[H].object),delete G[H];delete N[q]}delete a[P.id]}function J(P){for(const N in a){const q=a[N];if(q[P.id]===void 0)continue;const G=q[P.id];for(const H in G)y(G[H].object),delete G[H];delete q[P.id]}}function ne(){F(),d=!0,u!==c&&(u=c,p(u.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:m,reset:ne,resetDefaultState:F,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfProgram:J,initAttributes:M,enableAttribute:E,disableUnusedAttributes:L}}function WebGLBufferRenderer(o,e,t,n){const i=n.isWebGL2;let r;function l(u){r=u}function a(u,d){o.drawArrays(r,u,d),t.update(d,r,1)}function c(u,d,m){if(m===0)return;let _,p;if(i)_=o,p="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[p](r,u,d,m),t.update(d,r,m)}this.setMode=l,this.render=a,this.renderInstances=c}function WebGLCapabilities(o,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");n=o.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(D){if(D==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext!="undefined"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&o instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const u=l||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,m=o.getParameter(34930),_=o.getParameter(35660),p=o.getParameter(3379),y=o.getParameter(34076),g=o.getParameter(34921),v=o.getParameter(36347),b=o.getParameter(36348),x=o.getParameter(36349),M=_>0,E=l||e.has("OES_texture_float"),A=M&&E,L=l?o.getParameter(36183):0;return{isWebGL2:l,drawBuffers:u,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:d,maxTextures:m,maxVertexTextures:_,maxTextureSize:p,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:v,maxVaryings:b,maxFragmentUniforms:x,vertexTextures:M,floatFragmentTextures:E,floatVertexTextures:A,maxSamples:L}}function WebGLClipping(o){const e=this;let t=null,n=0,i=!1,r=!1;const l=new Plane,a=new Matrix3,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,_,p){const y=m.length!==0||_||n!==0||i;return i=_,t=d(m,p,0),n=m.length,y},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1,u()},this.setState=function(m,_,p){const y=m.clippingPlanes,g=m.clipIntersection,v=m.clipShadows,b=o.get(m);if(!i||y===null||y.length===0||r&&!v)r?d(null):u();else{const x=r?0:n,M=x*4;let E=b.clippingState||null;c.value=E,E=d(y,_,M,p);for(let A=0;A!==M;++A)E[A]=t[A];b.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,_,p,y){const g=m!==null?m.length:0;let v=null;if(g!==0){if(v=c.value,y!==!0||v===null){const b=p+g*4,x=_.matrixWorldInverse;a.getNormalMatrix(x),(v===null||v.length<b)&&(v=new Float32Array(b));for(let M=0,E=p;M!==g;++M,E+=4)l.copy(m[M]).applyMatrix4(x,a),l.normal.toArray(v,E),v[E+3]=l.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,v}}function WebGLCubeMaps(o){let e=new WeakMap;function t(l,a){return a===EquirectangularReflectionMapping?l.mapping=CubeReflectionMapping:a===EquirectangularRefractionMapping&&(l.mapping=CubeRefractionMapping),l}function n(l){if(l&&l.isTexture&&l.isRenderTargetTexture===!1){const a=l.mapping;if(a===EquirectangularReflectionMapping||a===EquirectangularRefractionMapping)if(e.has(l)){const c=e.get(l).texture;return t(c,l.mapping)}else{const c=l.image;if(c&&c.height>0){const u=new WebGLCubeRenderTarget(c.height/2);return u.fromEquirectangularTexture(o,l),e.set(l,u),l.addEventListener("dispose",i),t(u.texture,l.mapping)}else return null}}return l}function i(l){const a=l.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class OrthographicCamera extends Camera{constructor(e=-1,t=1,n=1,i=-1,r=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,l=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,l=r+u*this.view.width,a-=d*this.view.offsetY,c=a-d*this.view.height}this.projectionMatrix.makeOrthographic(r,l,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const LOD_MIN=4,EXTRA_LOD_SIGMA=[.125,.215,.35,.446,.526,.582],MAX_SAMPLES=20,_flatCamera=new OrthographicCamera,_clearColor=new Color;let _oldTarget=null;const PHI=(1+Math.sqrt(5))/2,INV_PHI=1/PHI,_axisDirections=[new Vector3(1,1,1),new Vector3(-1,1,1),new Vector3(1,1,-1),new Vector3(-1,1,-1),new Vector3(0,PHI,INV_PHI),new Vector3(0,PHI,-INV_PHI),new Vector3(INV_PHI,0,PHI),new Vector3(-INV_PHI,0,PHI),new Vector3(PHI,INV_PHI,0),new Vector3(-PHI,INV_PHI,0)];class PMREMGenerator{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){_oldTarget=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_oldTarget),e.scissorTest=!1,_setViewport(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_oldTarget=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:LinearFilter,minFilter:LinearFilter,generateMipmaps:!1,type:HalfFloatType,format:RGBAFormat,encoding:LinearEncoding,depthBuffer:!1},i=_createRenderTarget(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_createRenderTarget(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_createPlanes(r)),this._blurMaterial=_getBlurShader(r,e,t)}return i}_compileMaterial(e){const t=new Mesh(this._lodPlanes[0],e);this._renderer.compile(t,_flatCamera)}_sceneToCubeUV(e,t,n,i){const a=new PerspectiveCamera(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,m=d.autoClear,_=d.toneMapping;d.getClearColor(_clearColor),d.toneMapping=NoToneMapping,d.autoClear=!1;const p=new MeshBasicMaterial({name:"PMREM.Background",side:BackSide,depthWrite:!1,depthTest:!1}),y=new Mesh(new BoxGeometry,p);let g=!1;const v=e.background;v?v.isColor&&(p.color.copy(v),e.background=null,g=!0):(p.color.copy(_clearColor),g=!0);for(let b=0;b<6;b++){const x=b%3;x===0?(a.up.set(0,c[b],0),a.lookAt(u[b],0,0)):x===1?(a.up.set(0,0,c[b]),a.lookAt(0,u[b],0)):(a.up.set(0,c[b],0),a.lookAt(0,0,u[b]));const M=this._cubeSize;_setViewport(i,x*M,b>2?M:0,M,M),d.setRenderTarget(i),g&&d.render(y,a),d.render(e,a)}y.geometry.dispose(),y.material.dispose(),d.toneMapping=_,d.autoClear=m,e.background=v}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===CubeReflectionMapping||e.mapping===CubeRefractionMapping;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=_getCubemapMaterial()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_getEquirectMaterial());const r=i?this._cubemapMaterial:this._equirectMaterial,l=new Mesh(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;_setViewport(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(l,_flatCamera)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),l=_axisDirections[(i-1)%_axisDirections.length];this._blur(e,i-1,i,r,l)}t.autoClear=n}_blur(e,t,n,i,r){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,i,"latitudinal",r),this._halfBlur(l,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,l,a){const c=this._renderer,u=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,m=new Mesh(this._lodPlanes[i],u),_=u.uniforms,p=this._sizeLods[n]-1,y=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*MAX_SAMPLES-1),g=r/y,v=isFinite(r)?1+Math.floor(d*g):MAX_SAMPLES;v>MAX_SAMPLES&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${MAX_SAMPLES}`);const b=[];let x=0;for(let D=0;D<MAX_SAMPLES;++D){const R=D/g,I=Math.exp(-R*R/2);b.push(I),D===0?x+=I:D<v&&(x+=2*I)}for(let D=0;D<b.length;D++)b[D]=b[D]/x;_.envMap.value=e.texture,_.samples.value=v,_.weights.value=b,_.latitudinal.value=l==="latitudinal",a&&(_.poleAxis.value=a);const{_lodMax:M}=this;_.dTheta.value=y,_.mipInt.value=M-n;const E=this._sizeLods[i],A=3*E*(i>M-LOD_MIN?i-M+LOD_MIN:0),L=4*(this._cubeSize-E);_setViewport(t,A,L,3*E,2*E),c.setRenderTarget(t),c.render(m,_flatCamera)}}function _createPlanes(o){const e=[],t=[],n=[];let i=o;const r=o-LOD_MIN+1+EXTRA_LOD_SIGMA.length;for(let l=0;l<r;l++){const a=Math.pow(2,i);t.push(a);let c=1/a;l>o-LOD_MIN?c=EXTRA_LOD_SIGMA[l-o+LOD_MIN-1]:l===0&&(c=0),n.push(c);const u=1/(a-2),d=-u,m=1+u,_=[d,d,m,d,m,m,d,d,m,m,d,m],p=6,y=6,g=3,v=2,b=1,x=new Float32Array(g*y*p),M=new Float32Array(v*y*p),E=new Float32Array(b*y*p);for(let L=0;L<p;L++){const D=L%3*2/3-1,R=L>2?0:-1,I=[D,R,0,D+2/3,R,0,D+2/3,R+1,0,D,R,0,D+2/3,R+1,0,D,R+1,0];x.set(I,g*y*L),M.set(_,v*y*L);const U=[L,L,L,L,L,L];E.set(U,b*y*L)}const A=new BufferGeometry;A.setAttribute("position",new BufferAttribute(x,g)),A.setAttribute("uv",new BufferAttribute(M,v)),A.setAttribute("faceIndex",new BufferAttribute(E,b)),e.push(A),i>LOD_MIN&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _createRenderTarget(o,e,t){const n=new WebGLRenderTarget(o,e,t);return n.texture.mapping=CubeUVReflectionMapping,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _setViewport(o,e,t,n,i){o.viewport.set(e,t,n,i),o.scissor.set(e,t,n,i)}function _getBlurShader(o,e,t){const n=new Float32Array(MAX_SAMPLES),i=new Vector3(0,1,0);return new ShaderMaterial({name:"SphericalGaussianBlur",defines:{n:MAX_SAMPLES,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getEquirectMaterial(){return new ShaderMaterial({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCubemapMaterial(){return new ShaderMaterial({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_getCommonVertexShader(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:NoBlending,depthTest:!1,depthWrite:!1})}function _getCommonVertexShader(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function WebGLCubeUVMaps(o){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,u=c===EquirectangularReflectionMapping||c===EquirectangularRefractionMapping,d=c===CubeReflectionMapping||c===CubeRefractionMapping;if(u||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let m=e.get(a);return t===null&&(t=new PMREMGenerator(o)),m=u?t.fromEquirectangular(a,m):t.fromCubemap(a,m),e.set(a,m),m.texture}else{if(e.has(a))return e.get(a).texture;{const m=a.image;if(u&&m&&m.height>0||d&&m&&i(m)){t===null&&(t=new PMREMGenerator(o));const _=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,_),a.addEventListener("dispose",r),_.texture}else return null}}}return a}function i(a){let c=0;const u=6;for(let d=0;d<u;d++)a[d]!==void 0&&c++;return c===u}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function WebGLExtensions(o){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=o.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function WebGLGeometries(o,e,t,n){const i={},r=new WeakMap;function l(m){const _=m.target;_.index!==null&&e.remove(_.index);for(const y in _.attributes)e.remove(_.attributes[y]);_.removeEventListener("dispose",l),delete i[_.id];const p=r.get(_);p&&(e.remove(p),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function a(m,_){return i[_.id]===!0||(_.addEventListener("dispose",l),i[_.id]=!0,t.memory.geometries++),_}function c(m){const _=m.attributes;for(const y in _)e.update(_[y],34962);const p=m.morphAttributes;for(const y in p){const g=p[y];for(let v=0,b=g.length;v<b;v++)e.update(g[v],34962)}}function u(m){const _=[],p=m.index,y=m.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let M=0,E=x.length;M<E;M+=3){const A=x[M+0],L=x[M+1],D=x[M+2];_.push(A,L,L,D,D,A)}}else{const x=y.array;g=y.version;for(let M=0,E=x.length/3-1;M<E;M+=3){const A=M+0,L=M+1,D=M+2;_.push(A,L,L,D,D,A)}}const v=new(arrayNeedsUint32(_)?Uint32BufferAttribute:Uint16BufferAttribute)(_,1);v.version=g;const b=r.get(m);b&&e.remove(b),r.set(m,v)}function d(m){const _=r.get(m);if(_){const p=m.index;p!==null&&_.version<p.version&&u(m)}else u(m);return r.get(m)}return{get:a,update:c,getWireframeAttribute:d}}function WebGLIndexedBufferRenderer(o,e,t,n){const i=n.isWebGL2;let r;function l(_){r=_}let a,c;function u(_){a=_.type,c=_.bytesPerElement}function d(_,p){o.drawElements(r,p,a,_*c),t.update(p,r,1)}function m(_,p,y){if(y===0)return;let g,v;if(i)g=o,v="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](r,p,a,_*c,y),t.update(p,r,y)}this.setMode=l,this.setIndex=u,this.render=d,this.renderInstances=m}function WebGLInfo(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,l,a){switch(t.calls++,l){case 4:t.triangles+=a*(r/3);break;case 1:t.lines+=a*(r/2);break;case 3:t.lines+=a*(r-1);break;case 2:t.lines+=a*r;break;case 0:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function numericalSort(o,e){return o[0]-e[0]}function absNumericalSort(o,e){return Math.abs(e[1])-Math.abs(o[1])}function WebGLMorphtargets(o,e,t){const n={},i=new Float32Array(8),r=new WeakMap,l=new Vector4,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function c(u,d,m,_){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=y!==void 0?y.length:0;let v=r.get(d);if(v===void 0||v.count!==g){let N=function(){F.dispose(),r.delete(d),d.removeEventListener("dispose",N)};v!==void 0&&v.texture.dispose();const M=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,A=d.morphAttributes.color!==void 0,L=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let I=0;M===!0&&(I=1),E===!0&&(I=2),A===!0&&(I=3);let U=d.attributes.position.count*I,J=1;U>e.maxTextureSize&&(J=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const ne=new Float32Array(U*J*4*g),F=new DataArrayTexture(ne,U,J,g);F.type=FloatType,F.needsUpdate=!0;const P=I*4;for(let q=0;q<g;q++){const G=L[q],H=D[q],W=R[q],$=U*J*4*q;for(let V=0;V<G.count;V++){const z=V*P;M===!0&&(l.fromBufferAttribute(G,V),ne[$+z+0]=l.x,ne[$+z+1]=l.y,ne[$+z+2]=l.z,ne[$+z+3]=0),E===!0&&(l.fromBufferAttribute(H,V),ne[$+z+4]=l.x,ne[$+z+5]=l.y,ne[$+z+6]=l.z,ne[$+z+7]=0),A===!0&&(l.fromBufferAttribute(W,V),ne[$+z+8]=l.x,ne[$+z+9]=l.y,ne[$+z+10]=l.z,ne[$+z+11]=W.itemSize===4?l.w:1)}}v={count:g,texture:F,size:new Vector2(U,J)},r.set(d,v),d.addEventListener("dispose",N)}let b=0;for(let M=0;M<p.length;M++)b+=p[M];const x=d.morphTargetsRelative?1:1-b;_.getUniforms().setValue(o,"morphTargetBaseInfluence",x),_.getUniforms().setValue(o,"morphTargetInfluences",p),_.getUniforms().setValue(o,"morphTargetsTexture",v.texture,t),_.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}else{const y=p===void 0?0:p.length;let g=n[d.id];if(g===void 0||g.length!==y){g=[];for(let E=0;E<y;E++)g[E]=[E,0];n[d.id]=g}for(let E=0;E<y;E++){const A=g[E];A[0]=E,A[1]=p[E]}g.sort(absNumericalSort);for(let E=0;E<8;E++)E<y&&g[E][1]?(a[E][0]=g[E][0],a[E][1]=g[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(numericalSort);const v=d.morphAttributes.position,b=d.morphAttributes.normal;let x=0;for(let E=0;E<8;E++){const A=a[E],L=A[0],D=A[1];L!==Number.MAX_SAFE_INTEGER&&D?(v&&d.getAttribute("morphTarget"+E)!==v[L]&&d.setAttribute("morphTarget"+E,v[L]),b&&d.getAttribute("morphNormal"+E)!==b[L]&&d.setAttribute("morphNormal"+E,b[L]),i[E]=D,x+=D):(v&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),b&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),i[E]=0)}const M=d.morphTargetsRelative?1:1-x;_.getUniforms().setValue(o,"morphTargetBaseInfluence",M),_.getUniforms().setValue(o,"morphTargetInfluences",i)}}return{update:c}}function WebGLObjects(o,e,t,n){let i=new WeakMap;function r(c){const u=n.render.frame,d=c.geometry,m=e.get(c,d);return i.get(m)!==u&&(e.update(m),i.set(m,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),m}function l(){i=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:r,dispose:l}}const emptyTexture=new Texture,emptyArrayTexture=new DataArrayTexture,empty3dTexture=new Data3DTexture,emptyCubeTexture=new CubeTexture,arrayCacheF32=[],arrayCacheI32=[],mat4array=new Float32Array(16),mat3array=new Float32Array(9),mat2array=new Float32Array(4);function flatten(o,e,t){const n=o[0];if(n<=0||n>0)return o;const i=e*t;let r=arrayCacheF32[i];if(r===void 0&&(r=new Float32Array(i),arrayCacheF32[i]=r),e!==0){n.toArray(r,0);for(let l=1,a=0;l!==e;++l)a+=t,o[l].toArray(r,a)}return r}function arraysEqual(o,e){if(o.length!==e.length)return!1;for(let t=0,n=o.length;t<n;t++)if(o[t]!==e[t])return!1;return!0}function copyArray(o,e){for(let t=0,n=e.length;t<n;t++)o[t]=e[t]}function allocTexUnits(o,e){let t=arrayCacheI32[e];t===void 0&&(t=new Int32Array(e),arrayCacheI32[e]=t);for(let n=0;n!==e;++n)t[n]=o.allocateTextureUnit();return t}function setValueV1f(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function setValueV2f(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(arraysEqual(t,e))return;o.uniform2fv(this.addr,e),copyArray(t,e)}}function setValueV3f(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(arraysEqual(t,e))return;o.uniform3fv(this.addr,e),copyArray(t,e)}}function setValueV4f(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(arraysEqual(t,e))return;o.uniform4fv(this.addr,e),copyArray(t,e)}}function setValueM2(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat2array.set(n),o.uniformMatrix2fv(this.addr,!1,mat2array),copyArray(t,n)}}function setValueM3(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat3array.set(n),o.uniformMatrix3fv(this.addr,!1,mat3array),copyArray(t,n)}}function setValueM4(o,e){const t=this.cache,n=e.elements;if(n===void 0){if(arraysEqual(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),copyArray(t,e)}else{if(arraysEqual(t,n))return;mat4array.set(n),o.uniformMatrix4fv(this.addr,!1,mat4array),copyArray(t,n)}}function setValueV1i(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function setValueV2i(o,e){const t=this.cache;arraysEqual(t,e)||(o.uniform2iv(this.addr,e),copyArray(t,e))}function setValueV3i(o,e){const t=this.cache;arraysEqual(t,e)||(o.uniform3iv(this.addr,e),copyArray(t,e))}function setValueV4i(o,e){const t=this.cache;arraysEqual(t,e)||(o.uniform4iv(this.addr,e),copyArray(t,e))}function setValueV1ui(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function setValueV2ui(o,e){const t=this.cache;arraysEqual(t,e)||(o.uniform2uiv(this.addr,e),copyArray(t,e))}function setValueV3ui(o,e){const t=this.cache;arraysEqual(t,e)||(o.uniform3uiv(this.addr,e),copyArray(t,e))}function setValueV4ui(o,e){const t=this.cache;arraysEqual(t,e)||(o.uniform4uiv(this.addr,e),copyArray(t,e))}function setValueT1(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||emptyTexture,i)}function setValueT3D1(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||empty3dTexture,i)}function setValueT6(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||emptyCubeTexture,i)}function setValueT2DArray1(o,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(o.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||emptyArrayTexture,i)}function getSingularSetter(o){switch(o){case 5126:return setValueV1f;case 35664:return setValueV2f;case 35665:return setValueV3f;case 35666:return setValueV4f;case 35674:return setValueM2;case 35675:return setValueM3;case 35676:return setValueM4;case 5124:case 35670:return setValueV1i;case 35667:case 35671:return setValueV2i;case 35668:case 35672:return setValueV3i;case 35669:case 35673:return setValueV4i;case 5125:return setValueV1ui;case 36294:return setValueV2ui;case 36295:return setValueV3ui;case 36296:return setValueV4ui;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1;case 35679:case 36299:case 36307:return setValueT3D1;case 35680:case 36300:case 36308:case 36293:return setValueT6;case 36289:case 36303:case 36311:case 36292:return setValueT2DArray1}}function setValueV1fArray(o,e){o.uniform1fv(this.addr,e)}function setValueV2fArray(o,e){const t=flatten(e,this.size,2);o.uniform2fv(this.addr,t)}function setValueV3fArray(o,e){const t=flatten(e,this.size,3);o.uniform3fv(this.addr,t)}function setValueV4fArray(o,e){const t=flatten(e,this.size,4);o.uniform4fv(this.addr,t)}function setValueM2Array(o,e){const t=flatten(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function setValueM3Array(o,e){const t=flatten(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function setValueM4Array(o,e){const t=flatten(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function setValueV1iArray(o,e){o.uniform1iv(this.addr,e)}function setValueV2iArray(o,e){o.uniform2iv(this.addr,e)}function setValueV3iArray(o,e){o.uniform3iv(this.addr,e)}function setValueV4iArray(o,e){o.uniform4iv(this.addr,e)}function setValueV1uiArray(o,e){o.uniform1uiv(this.addr,e)}function setValueV2uiArray(o,e){o.uniform2uiv(this.addr,e)}function setValueV3uiArray(o,e){o.uniform3uiv(this.addr,e)}function setValueV4uiArray(o,e){o.uniform4uiv(this.addr,e)}function setValueT1Array(o,e,t){const n=this.cache,i=e.length,r=allocTexUnits(t,i);arraysEqual(n,r)||(o.uniform1iv(this.addr,r),copyArray(n,r));for(let l=0;l!==i;++l)t.setTexture2D(e[l]||emptyTexture,r[l])}function setValueT3DArray(o,e,t){const n=this.cache,i=e.length,r=allocTexUnits(t,i);arraysEqual(n,r)||(o.uniform1iv(this.addr,r),copyArray(n,r));for(let l=0;l!==i;++l)t.setTexture3D(e[l]||empty3dTexture,r[l])}function setValueT6Array(o,e,t){const n=this.cache,i=e.length,r=allocTexUnits(t,i);arraysEqual(n,r)||(o.uniform1iv(this.addr,r),copyArray(n,r));for(let l=0;l!==i;++l)t.setTextureCube(e[l]||emptyCubeTexture,r[l])}function setValueT2DArrayArray(o,e,t){const n=this.cache,i=e.length,r=allocTexUnits(t,i);arraysEqual(n,r)||(o.uniform1iv(this.addr,r),copyArray(n,r));for(let l=0;l!==i;++l)t.setTexture2DArray(e[l]||emptyArrayTexture,r[l])}function getPureArraySetter(o){switch(o){case 5126:return setValueV1fArray;case 35664:return setValueV2fArray;case 35665:return setValueV3fArray;case 35666:return setValueV4fArray;case 35674:return setValueM2Array;case 35675:return setValueM3Array;case 35676:return setValueM4Array;case 5124:case 35670:return setValueV1iArray;case 35667:case 35671:return setValueV2iArray;case 35668:case 35672:return setValueV3iArray;case 35669:case 35673:return setValueV4iArray;case 5125:return setValueV1uiArray;case 36294:return setValueV2uiArray;case 36295:return setValueV3uiArray;case 36296:return setValueV4uiArray;case 35678:case 36198:case 36298:case 36306:case 35682:return setValueT1Array;case 35679:case 36299:case 36307:return setValueT3DArray;case 35680:case 36300:case 36308:case 36293:return setValueT6Array;case 36289:case 36303:case 36311:case 36292:return setValueT2DArrayArray}}class SingleUniform{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=getSingularSetter(t.type)}}class PureArrayUniform{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=getPureArraySetter(t.type)}}class StructuredUniform{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,l=i.length;r!==l;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const RePathPart=/(\w+)(\])?(\[|\.)?/g;function addUniform(o,e){o.seq.push(e),o.map[e.id]=e}function parseUniform(o,e,t){const n=o.name,i=n.length;for(RePathPart.lastIndex=0;;){const r=RePathPart.exec(n),l=RePathPart.lastIndex;let a=r[1];const c=r[2]==="]",u=r[3];if(c&&(a=a|0),u===void 0||u==="["&&l+2===i){addUniform(t,u===void 0?new SingleUniform(a,o,e):new PureArrayUniform(a,o,e));break}else{let m=t.map[a];m===void 0&&(m=new StructuredUniform(a),addUniform(t,m)),t=m}}}class WebGLUniforms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),l=e.getUniformLocation(t,r.name);parseUniform(r,l,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,l=t.length;r!==l;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const l=e[i];l.id in t&&n.push(l)}return n}}function WebGLShader(o,e,t){const n=o.createShader(e);return o.shaderSource(n,t),o.compileShader(n),n}let programIdCount=0;function handleSource(o,e){const t=o.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let l=i;l<r;l++){const a=l+1;n.push(`${a===e?">":" "} ${a}: ${t[l]}`)}return n.join(`
`)}function getEncodingComponents(o){switch(o){case LinearEncoding:return["Linear","( value )"];case sRGBEncoding:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function getShaderErrors(o,e,t){const n=o.getShaderParameter(e,35713),i=o.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const l=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+handleSource(o.getShaderSource(e),l)}else return i}function getTexelEncodingFunction(o,e){const t=getEncodingComponents(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function getToneMappingFunction(o,e){let t;switch(e){case LinearToneMapping:t="Linear";break;case ReinhardToneMapping:t="Reinhard";break;case CineonToneMapping:t="OptimizedCineon";break;case ACESFilmicToneMapping:t="ACESFilmic";break;case CustomToneMapping:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function generateExtensions(o){return[o.extensionDerivatives||!!o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(filterEmptyLine).join(`
`)}function generateDefines(o){const e=[];for(const t in o){const n=o[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fetchAttributeLocations(o,e){const t={},n=o.getProgramParameter(e,35721);for(let i=0;i<n;i++){const r=o.getActiveAttrib(e,i),l=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),t[l]={type:r.type,location:o.getAttribLocation(e,l),locationSize:a}}return t}function filterEmptyLine(o){return o!==""}function replaceLightNums(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function replaceClippingPlaneNums(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const includePattern=/^[ \t]*#include +<([\w\d./]+)>/gm;function resolveIncludes(o){return o.replace(includePattern,includeReplacer)}function includeReplacer(o,e){const t=ShaderChunk[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return resolveIncludes(t)}const unrollLoopPattern=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function unrollLoops(o){return o.replace(unrollLoopPattern,loopReplacer)}function loopReplacer(o,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function generatePrecision(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function generateShadowMapTypeDefine(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===PCFShadowMap?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===PCFSoftShadowMap?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===VSMShadowMap&&(e="SHADOWMAP_TYPE_VSM"),e}function generateEnvMapTypeDefine(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case CubeReflectionMapping:case CubeRefractionMapping:e="ENVMAP_TYPE_CUBE";break;case CubeUVReflectionMapping:e="ENVMAP_TYPE_CUBE_UV";break}return e}function generateEnvMapModeDefine(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case CubeRefractionMapping:e="ENVMAP_MODE_REFRACTION";break}return e}function generateEnvMapBlendingDefine(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case MultiplyOperation:e="ENVMAP_BLENDING_MULTIPLY";break;case MixOperation:e="ENVMAP_BLENDING_MIX";break;case AddOperation:e="ENVMAP_BLENDING_ADD";break}return e}function generateCubeUVSize(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function WebGLProgram(o,e,t,n){const i=o.getContext(),r=t.defines;let l=t.vertexShader,a=t.fragmentShader;const c=generateShadowMapTypeDefine(t),u=generateEnvMapTypeDefine(t),d=generateEnvMapModeDefine(t),m=generateEnvMapBlendingDefine(t),_=generateCubeUVSize(t),p=t.isWebGL2?"":generateExtensions(t),y=generateDefines(r),g=i.createProgram();let v,b,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=[y].filter(filterEmptyLine).join(`
`),v.length>0&&(v+=`
`),b=[p,y].filter(filterEmptyLine).join(`
`),b.length>0&&(b+=`
`)):(v=[generatePrecision(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(filterEmptyLine).join(`
`),b=[p,generatePrecision(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==NoToneMapping?"#define TONE_MAPPING":"",t.toneMapping!==NoToneMapping?ShaderChunk.tonemapping_pars_fragment:"",t.toneMapping!==NoToneMapping?getToneMappingFunction("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ShaderChunk.encodings_pars_fragment,getTexelEncodingFunction("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(filterEmptyLine).join(`
`)),l=resolveIncludes(l),l=replaceLightNums(l,t),l=replaceClippingPlaneNums(l,t),a=resolveIncludes(a),a=replaceLightNums(a,t),a=replaceClippingPlaneNums(a,t),l=unrollLoops(l),a=unrollLoops(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,v=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,b=["#define varying in",t.glslVersion===GLSL3?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===GLSL3?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const M=x+v+l,E=x+b+a,A=WebGLShader(i,35633,M),L=WebGLShader(i,35632,E);if(i.attachShader(g,A),i.attachShader(g,L),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),o.debug.checkShaderErrors){const I=i.getProgramInfoLog(g).trim(),U=i.getShaderInfoLog(A).trim(),J=i.getShaderInfoLog(L).trim();let ne=!0,F=!0;if(i.getProgramParameter(g,35714)===!1){ne=!1;const P=getShaderErrors(i,A,"vertex"),N=getShaderErrors(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+I+`
`+P+`
`+N)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||J==="")&&(F=!1);F&&(this.diagnostics={runnable:ne,programLog:I,vertexShader:{log:U,prefix:v},fragmentShader:{log:J,prefix:b}})}i.deleteShader(A),i.deleteShader(L);let D;this.getUniforms=function(){return D===void 0&&(D=new WebGLUniforms(i,g)),D};let R;return this.getAttributes=function(){return R===void 0&&(R=fetchAttributeLocations(i,g)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=programIdCount++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=L,this}let _id=0;class WebGLShaderCache{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new WebGLShaderStage(e),t.set(e,n)),n}}class WebGLShaderStage{constructor(e){this.id=_id++,this.code=e,this.usedTimes=0}}function WebGLPrograms(o,e,t,n,i,r,l){const a=new Layers,c=new WebGLShaderCache,u=[],d=i.isWebGL2,m=i.logarithmicDepthBuffer,_=i.vertexTextures;let p=i.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(R,I,U,J,ne){const F=J.fog,P=ne.geometry,N=R.isMeshStandardMaterial?J.environment:null,q=(R.isMeshStandardMaterial?t:e).get(R.envMap||N),G=!!q&&q.mapping===CubeUVReflectionMapping?q.image.height:null,H=y[R.type];R.precision!==null&&(p=i.getMaxPrecision(R.precision),p!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",p,"instead."));const W=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,$=W!==void 0?W.length:0;let V=0;P.morphAttributes.position!==void 0&&(V=1),P.morphAttributes.normal!==void 0&&(V=2),P.morphAttributes.color!==void 0&&(V=3);let z,K,oe,ce;if(H){const Le=ShaderLib[H];z=Le.vertexShader,K=Le.fragmentShader}else z=R.vertexShader,K=R.fragmentShader,c.update(R),oe=c.getVertexShaderID(R),ce=c.getFragmentShaderID(R);const Q=o.getRenderTarget(),pe=R.alphaTest>0,fe=R.clearcoat>0,ye=R.iridescence>0;return{isWebGL2:d,shaderID:H,shaderName:R.type,vertexShader:z,fragmentShader:K,defines:R.defines,customVertexShaderID:oe,customFragmentShaderID:ce,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:p,instancing:ne.isInstancedMesh===!0,instancingColor:ne.isInstancedMesh===!0&&ne.instanceColor!==null,supportsVertexTextures:_,outputEncoding:Q===null?o.outputEncoding:Q.isXRRenderTarget===!0?Q.texture.encoding:LinearEncoding,map:!!R.map,matcap:!!R.matcap,envMap:!!q,envMapMode:q&&q.mapping,envMapCubeUVHeight:G,lightMap:!!R.lightMap,aoMap:!!R.aoMap,emissiveMap:!!R.emissiveMap,bumpMap:!!R.bumpMap,normalMap:!!R.normalMap,objectSpaceNormalMap:R.normalMapType===ObjectSpaceNormalMap,tangentSpaceNormalMap:R.normalMapType===TangentSpaceNormalMap,decodeVideoTexture:!!R.map&&R.map.isVideoTexture===!0&&R.map.encoding===sRGBEncoding,clearcoat:fe,clearcoatMap:fe&&!!R.clearcoatMap,clearcoatRoughnessMap:fe&&!!R.clearcoatRoughnessMap,clearcoatNormalMap:fe&&!!R.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!R.iridescenceMap,iridescenceThicknessMap:ye&&!!R.iridescenceThicknessMap,displacementMap:!!R.displacementMap,roughnessMap:!!R.roughnessMap,metalnessMap:!!R.metalnessMap,specularMap:!!R.specularMap,specularIntensityMap:!!R.specularIntensityMap,specularColorMap:!!R.specularColorMap,opaque:R.transparent===!1&&R.blending===NormalBlending,alphaMap:!!R.alphaMap,alphaTest:pe,gradientMap:!!R.gradientMap,sheen:R.sheen>0,sheenColorMap:!!R.sheenColorMap,sheenRoughnessMap:!!R.sheenRoughnessMap,transmission:R.transmission>0,transmissionMap:!!R.transmissionMap,thicknessMap:!!R.thicknessMap,combine:R.combine,vertexTangents:!!R.normalMap&&!!P.attributes.tangent,vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!R.map||!!R.bumpMap||!!R.normalMap||!!R.specularMap||!!R.alphaMap||!!R.emissiveMap||!!R.roughnessMap||!!R.metalnessMap||!!R.clearcoatMap||!!R.clearcoatRoughnessMap||!!R.clearcoatNormalMap||!!R.iridescenceMap||!!R.iridescenceThicknessMap||!!R.displacementMap||!!R.transmissionMap||!!R.thicknessMap||!!R.specularIntensityMap||!!R.specularColorMap||!!R.sheenColorMap||!!R.sheenRoughnessMap,uvsVertexOnly:!(!!R.map||!!R.bumpMap||!!R.normalMap||!!R.specularMap||!!R.alphaMap||!!R.emissiveMap||!!R.roughnessMap||!!R.metalnessMap||!!R.clearcoatNormalMap||!!R.iridescenceMap||!!R.iridescenceThicknessMap||R.transmission>0||!!R.transmissionMap||!!R.thicknessMap||!!R.specularIntensityMap||!!R.specularColorMap||R.sheen>0||!!R.sheenColorMap||!!R.sheenRoughnessMap)&&!!R.displacementMap,fog:!!F,useFog:R.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!R.flatShading,sizeAttenuation:R.sizeAttenuation,logarithmicDepthBuffer:m,skinning:ne.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:V,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&U.length>0,shadowMapType:o.shadowMap.type,toneMapping:R.toneMapped?o.toneMapping:NoToneMapping,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===DoubleSide,flipSided:R.side===BackSide,useDepthPacking:!!R.depthPacking,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionDerivatives:R.extensions&&R.extensions.derivatives,extensionFragDepth:R.extensions&&R.extensions.fragDepth,extensionDrawBuffers:R.extensions&&R.extensions.drawBuffers,extensionShaderTextureLOD:R.extensions&&R.extensions.shaderTextureLOD,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:R.customProgramCacheKey()}}function v(R){const I=[];if(R.shaderID?I.push(R.shaderID):(I.push(R.customVertexShaderID),I.push(R.customFragmentShaderID)),R.defines!==void 0)for(const U in R.defines)I.push(U),I.push(R.defines[U]);return R.isRawShaderMaterial===!1&&(b(I,R),x(I,R),I.push(o.outputEncoding)),I.push(R.customProgramCacheKey),I.join()}function b(R,I){R.push(I.precision),R.push(I.outputEncoding),R.push(I.envMapMode),R.push(I.envMapCubeUVHeight),R.push(I.combine),R.push(I.vertexUvs),R.push(I.fogExp2),R.push(I.sizeAttenuation),R.push(I.morphTargetsCount),R.push(I.morphAttributeCount),R.push(I.numDirLights),R.push(I.numPointLights),R.push(I.numSpotLights),R.push(I.numSpotLightMaps),R.push(I.numHemiLights),R.push(I.numRectAreaLights),R.push(I.numDirLightShadows),R.push(I.numPointLightShadows),R.push(I.numSpotLightShadows),R.push(I.numSpotLightShadowsWithMaps),R.push(I.shadowMapType),R.push(I.toneMapping),R.push(I.numClippingPlanes),R.push(I.numClipIntersection),R.push(I.depthPacking)}function x(R,I){a.disableAll(),I.isWebGL2&&a.enable(0),I.supportsVertexTextures&&a.enable(1),I.instancing&&a.enable(2),I.instancingColor&&a.enable(3),I.map&&a.enable(4),I.matcap&&a.enable(5),I.envMap&&a.enable(6),I.lightMap&&a.enable(7),I.aoMap&&a.enable(8),I.emissiveMap&&a.enable(9),I.bumpMap&&a.enable(10),I.normalMap&&a.enable(11),I.objectSpaceNormalMap&&a.enable(12),I.tangentSpaceNormalMap&&a.enable(13),I.clearcoat&&a.enable(14),I.clearcoatMap&&a.enable(15),I.clearcoatRoughnessMap&&a.enable(16),I.clearcoatNormalMap&&a.enable(17),I.iridescence&&a.enable(18),I.iridescenceMap&&a.enable(19),I.iridescenceThicknessMap&&a.enable(20),I.displacementMap&&a.enable(21),I.specularMap&&a.enable(22),I.roughnessMap&&a.enable(23),I.metalnessMap&&a.enable(24),I.gradientMap&&a.enable(25),I.alphaMap&&a.enable(26),I.alphaTest&&a.enable(27),I.vertexColors&&a.enable(28),I.vertexAlphas&&a.enable(29),I.vertexUvs&&a.enable(30),I.vertexTangents&&a.enable(31),I.uvsVertexOnly&&a.enable(32),R.push(a.mask),a.disableAll(),I.fog&&a.enable(0),I.useFog&&a.enable(1),I.flatShading&&a.enable(2),I.logarithmicDepthBuffer&&a.enable(3),I.skinning&&a.enable(4),I.morphTargets&&a.enable(5),I.morphNormals&&a.enable(6),I.morphColors&&a.enable(7),I.premultipliedAlpha&&a.enable(8),I.shadowMapEnabled&&a.enable(9),I.physicallyCorrectLights&&a.enable(10),I.doubleSided&&a.enable(11),I.flipSided&&a.enable(12),I.useDepthPacking&&a.enable(13),I.dithering&&a.enable(14),I.specularIntensityMap&&a.enable(15),I.specularColorMap&&a.enable(16),I.transmission&&a.enable(17),I.transmissionMap&&a.enable(18),I.thicknessMap&&a.enable(19),I.sheen&&a.enable(20),I.sheenColorMap&&a.enable(21),I.sheenRoughnessMap&&a.enable(22),I.decodeVideoTexture&&a.enable(23),I.opaque&&a.enable(24),R.push(a.mask)}function M(R){const I=y[R.type];let U;if(I){const J=ShaderLib[I];U=UniformsUtils.clone(J.uniforms)}else U=R.uniforms;return U}function E(R,I){let U;for(let J=0,ne=u.length;J<ne;J++){const F=u[J];if(F.cacheKey===I){U=F,++U.usedTimes;break}}return U===void 0&&(U=new WebGLProgram(o,I,R,r),u.push(U)),U}function A(R){if(--R.usedTimes===0){const I=u.indexOf(R);u[I]=u[u.length-1],u.pop(),R.destroy()}}function L(R){c.remove(R)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:E,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:D}}function WebGLProperties(){let o=new WeakMap;function e(r){let l=o.get(r);return l===void 0&&(l={},o.set(r,l)),l}function t(r){o.delete(r)}function n(r,l,a){o.get(r)[l]=a}function i(){o=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function painterSortStable(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function reversePainterSortStable(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function WebGLRenderList(){const o=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function l(m,_,p,y,g,v){let b=o[e];return b===void 0?(b={id:m.id,object:m,geometry:_,material:p,groupOrder:y,renderOrder:m.renderOrder,z:g,group:v},o[e]=b):(b.id=m.id,b.object=m,b.geometry=_,b.material=p,b.groupOrder=y,b.renderOrder=m.renderOrder,b.z=g,b.group=v),e++,b}function a(m,_,p,y,g,v){const b=l(m,_,p,y,g,v);p.transmission>0?n.push(b):p.transparent===!0?i.push(b):t.push(b)}function c(m,_,p,y,g,v){const b=l(m,_,p,y,g,v);p.transmission>0?n.unshift(b):p.transparent===!0?i.unshift(b):t.unshift(b)}function u(m,_){t.length>1&&t.sort(m||painterSortStable),n.length>1&&n.sort(_||reversePainterSortStable),i.length>1&&i.sort(_||reversePainterSortStable)}function d(){for(let m=e,_=o.length;m<_;m++){const p=o[m];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:d,sort:u}}function WebGLRenderLists(){let o=new WeakMap;function e(n,i){const r=o.get(n);let l;return r===void 0?(l=new WebGLRenderList,o.set(n,[l])):i>=r.length?(l=new WebGLRenderList,r.push(l)):l=r[i],l}function t(){o=new WeakMap}return{get:e,dispose:t}}function UniformsCache(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Vector3,color:new Color};break;case"SpotLight":t={position:new Vector3,direction:new Vector3,color:new Color,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Vector3,color:new Color,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Vector3,skyColor:new Color,groundColor:new Color};break;case"RectAreaLight":t={color:new Color,position:new Vector3,halfWidth:new Vector3,halfHeight:new Vector3};break}return o[e.id]=t,t}}}function ShadowUniformsCache(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vector2,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let nextVersion=0;function shadowCastingAndTexturingLightsFirst(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function WebGLLights(o,e){const t=new UniformsCache,n=ShadowUniformsCache(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)i.probe.push(new Vector3);const r=new Vector3,l=new Matrix4,a=new Matrix4;function c(d,m){let _=0,p=0,y=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let g=0,v=0,b=0,x=0,M=0,E=0,A=0,L=0,D=0,R=0;d.sort(shadowCastingAndTexturingLightsFirst);const I=m!==!0?Math.PI:1;for(let J=0,ne=d.length;J<ne;J++){const F=d[J],P=F.color,N=F.intensity,q=F.distance,G=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)_+=P.r*N*I,p+=P.g*N*I,y+=P.b*N*I;else if(F.isLightProbe)for(let H=0;H<9;H++)i.probe[H].addScaledVector(F.sh.coefficients[H],N);else if(F.isDirectionalLight){const H=t.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity*I),F.castShadow){const W=F.shadow,$=n.get(F);$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,i.directionalShadow[g]=$,i.directionalShadowMap[g]=G,i.directionalShadowMatrix[g]=F.shadow.matrix,E++}i.directional[g]=H,g++}else if(F.isSpotLight){const H=t.get(F);H.position.setFromMatrixPosition(F.matrixWorld),H.color.copy(P).multiplyScalar(N*I),H.distance=q,H.coneCos=Math.cos(F.angle),H.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),H.decay=F.decay,i.spot[b]=H;const W=F.shadow;if(F.map&&(i.spotLightMap[D]=F.map,D++,W.updateMatrices(F),F.castShadow&&R++),i.spotLightMatrix[b]=W.matrix,F.castShadow){const $=n.get(F);$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,i.spotShadow[b]=$,i.spotShadowMap[b]=G,L++}b++}else if(F.isRectAreaLight){const H=t.get(F);H.color.copy(P).multiplyScalar(N),H.halfWidth.set(F.width*.5,0,0),H.halfHeight.set(0,F.height*.5,0),i.rectArea[x]=H,x++}else if(F.isPointLight){const H=t.get(F);if(H.color.copy(F.color).multiplyScalar(F.intensity*I),H.distance=F.distance,H.decay=F.decay,F.castShadow){const W=F.shadow,$=n.get(F);$.shadowBias=W.bias,$.shadowNormalBias=W.normalBias,$.shadowRadius=W.radius,$.shadowMapSize=W.mapSize,$.shadowCameraNear=W.camera.near,$.shadowCameraFar=W.camera.far,i.pointShadow[v]=$,i.pointShadowMap[v]=G,i.pointShadowMatrix[v]=F.shadow.matrix,A++}i.point[v]=H,v++}else if(F.isHemisphereLight){const H=t.get(F);H.skyColor.copy(F.color).multiplyScalar(N*I),H.groundColor.copy(F.groundColor).multiplyScalar(N*I),i.hemi[M]=H,M++}}x>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=UniformsLib.LTC_FLOAT_1,i.rectAreaLTC2=UniformsLib.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=UniformsLib.LTC_HALF_1,i.rectAreaLTC2=UniformsLib.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=_,i.ambient[1]=p,i.ambient[2]=y;const U=i.hash;(U.directionalLength!==g||U.pointLength!==v||U.spotLength!==b||U.rectAreaLength!==x||U.hemiLength!==M||U.numDirectionalShadows!==E||U.numPointShadows!==A||U.numSpotShadows!==L||U.numSpotMaps!==D)&&(i.directional.length=g,i.spot.length=b,i.rectArea.length=x,i.point.length=v,i.hemi.length=M,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=L+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,U.directionalLength=g,U.pointLength=v,U.spotLength=b,U.rectAreaLength=x,U.hemiLength=M,U.numDirectionalShadows=E,U.numPointShadows=A,U.numSpotShadows=L,U.numSpotMaps=D,i.version=nextVersion++)}function u(d,m){let _=0,p=0,y=0,g=0,v=0;const b=m.matrixWorldInverse;for(let x=0,M=d.length;x<M;x++){const E=d[x];if(E.isDirectionalLight){const A=i.directional[_];A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(b),_++}else if(E.isSpotLight){const A=i.spot[y];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(b),A.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(b),y++}else if(E.isRectAreaLight){const A=i.rectArea[g];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(b),a.identity(),l.copy(E.matrixWorld),l.premultiply(b),a.extractRotation(l),A.halfWidth.set(E.width*.5,0,0),A.halfHeight.set(0,E.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const A=i.point[p];A.position.setFromMatrixPosition(E.matrixWorld),A.position.applyMatrix4(b),p++}else if(E.isHemisphereLight){const A=i.hemi[v];A.direction.setFromMatrixPosition(E.matrixWorld),A.direction.transformDirection(b),v++}}}return{setup:c,setupView:u,state:i}}function WebGLRenderState(o,e){const t=new WebGLLights(o,e),n=[],i=[];function r(){n.length=0,i.length=0}function l(m){n.push(m)}function a(m){i.push(m)}function c(m){t.setup(n,m)}function u(m){t.setupView(n,m)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:u,pushLight:l,pushShadow:a}}function WebGLRenderStates(o,e){let t=new WeakMap;function n(r,l=0){const a=t.get(r);let c;return a===void 0?(c=new WebGLRenderState(o,e),t.set(r,[c])):l>=a.length?(c=new WebGLRenderState(o,e),a.push(c)):c=a[l],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class MeshDepthMaterial extends Material{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=BasicDepthPacking,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class MeshDistanceMaterial extends Material{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new Vector3,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vertex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragment=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WebGLShadowMap(o,e,t){let n=new Frustum;const i=new Vector2,r=new Vector2,l=new Vector4,a=new MeshDepthMaterial({depthPacking:RGBADepthPacking}),c=new MeshDistanceMaterial,u={},d=t.maxTextureSize,m={0:BackSide,1:FrontSide,2:DoubleSide},_=new ShaderMaterial({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vector2},radius:{value:4}},vertexShader:vertex,fragmentShader:fragment}),p=_.clone();p.defines.HORIZONTAL_PASS=1;const y=new BufferGeometry;y.setAttribute("position",new BufferAttribute(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Mesh(y,_),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=PCFShadowMap,this.render=function(E,A,L){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||E.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),I=o.getActiveMipmapLevel(),U=o.state;U.setBlending(NoBlending),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);for(let J=0,ne=E.length;J<ne;J++){const F=E[J],P=F.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const N=P.getFrameExtents();if(i.multiply(N),r.copy(P.mapSize),(i.x>d||i.y>d)&&(i.x>d&&(r.x=Math.floor(d/N.x),i.x=r.x*N.x,P.mapSize.x=r.x),i.y>d&&(r.y=Math.floor(d/N.y),i.y=r.y*N.y,P.mapSize.y=r.y)),P.map===null){const G=this.type!==VSMShadowMap?{minFilter:NearestFilter,magFilter:NearestFilter}:{};P.map=new WebGLRenderTarget(i.x,i.y,G),P.map.texture.name=F.name+".shadowMap",P.camera.updateProjectionMatrix()}o.setRenderTarget(P.map),o.clear();const q=P.getViewportCount();for(let G=0;G<q;G++){const H=P.getViewport(G);l.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),U.viewport(l),P.updateMatrices(F,G),n=P.getFrustum(),M(A,L,P.camera,F,this.type)}P.isPointLightShadow!==!0&&this.type===VSMShadowMap&&b(P,L),P.needsUpdate=!1}v.needsUpdate=!1,o.setRenderTarget(D,R,I)};function b(E,A){const L=e.update(g);_.defines.VSM_SAMPLES!==E.blurSamples&&(_.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,_.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new WebGLRenderTarget(i.x,i.y)),_.uniforms.shadow_pass.value=E.map.texture,_.uniforms.resolution.value=E.mapSize,_.uniforms.radius.value=E.radius,o.setRenderTarget(E.mapPass),o.clear(),o.renderBufferDirect(A,null,L,_,g,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,o.setRenderTarget(E.map),o.clear(),o.renderBufferDirect(A,null,L,p,g,null)}function x(E,A,L,D,R,I){let U=null;const J=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(J!==void 0?U=J:U=L.isPointLight===!0?c:a,o.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0){const ne=U.uuid,F=A.uuid;let P=u[ne];P===void 0&&(P={},u[ne]=P);let N=P[F];N===void 0&&(N=U.clone(),P[F]=N),U=N}return U.visible=A.visible,U.wireframe=A.wireframe,I===VSMShadowMap?U.side=A.shadowSide!==null?A.shadowSide:A.side:U.side=A.shadowSide!==null?A.shadowSide:m[A.side],U.alphaMap=A.alphaMap,U.alphaTest=A.alphaTest,U.clipShadows=A.clipShadows,U.clippingPlanes=A.clippingPlanes,U.clipIntersection=A.clipIntersection,U.displacementMap=A.displacementMap,U.displacementScale=A.displacementScale,U.displacementBias=A.displacementBias,U.wireframeLinewidth=A.wireframeLinewidth,U.linewidth=A.linewidth,L.isPointLight===!0&&U.isMeshDistanceMaterial===!0&&(U.referencePosition.setFromMatrixPosition(L.matrixWorld),U.nearDistance=D,U.farDistance=R),U}function M(E,A,L,D,R){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===VSMShadowMap)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const J=e.update(E),ne=E.material;if(Array.isArray(ne)){const F=J.groups;for(let P=0,N=F.length;P<N;P++){const q=F[P],G=ne[q.materialIndex];if(G&&G.visible){const H=x(E,G,D,L.near,L.far,R);o.renderBufferDirect(L,null,J,H,E,q)}}}else if(ne.visible){const F=x(E,ne,D,L.near,L.far,R);o.renderBufferDirect(L,null,J,F,E,null)}}const U=E.children;for(let J=0,ne=U.length;J<ne;J++)M(U[J],A,L,D,R)}}function WebGLState(o,e,t){const n=t.isWebGL2;function i(){let X=!1;const ve=new Vector4;let ue=null;const se=new Vector4(0,0,0,0);return{setMask:function(he){ue!==he&&!X&&(o.colorMask(he,he,he,he),ue=he)},setLocked:function(he){X=he},setClear:function(he,Se,Ne,We,Ke){Ke===!0&&(he*=We,Se*=We,Ne*=We),ve.set(he,Se,Ne,We),se.equals(ve)===!1&&(o.clearColor(he,Se,Ne,We),se.copy(ve))},reset:function(){X=!1,ue=null,se.set(-1,0,0,0)}}}function r(){let X=!1,ve=null,ue=null,se=null;return{setTest:function(he){he?pe(2929):fe(2929)},setMask:function(he){ve!==he&&!X&&(o.depthMask(he),ve=he)},setFunc:function(he){if(ue!==he){switch(he){case NeverDepth:o.depthFunc(512);break;case AlwaysDepth:o.depthFunc(519);break;case LessDepth:o.depthFunc(513);break;case LessEqualDepth:o.depthFunc(515);break;case EqualDepth:o.depthFunc(514);break;case GreaterEqualDepth:o.depthFunc(518);break;case GreaterDepth:o.depthFunc(516);break;case NotEqualDepth:o.depthFunc(517);break;default:o.depthFunc(515)}ue=he}},setLocked:function(he){X=he},setClear:function(he){se!==he&&(o.clearDepth(he),se=he)},reset:function(){X=!1,ve=null,ue=null,se=null}}}function l(){let X=!1,ve=null,ue=null,se=null,he=null,Se=null,Ne=null,We=null,Ke=null;return{setTest:function(ze){X||(ze?pe(2960):fe(2960))},setMask:function(ze){ve!==ze&&!X&&(o.stencilMask(ze),ve=ze)},setFunc:function(ze,Je,Xe){(ue!==ze||se!==Je||he!==Xe)&&(o.stencilFunc(ze,Je,Xe),ue=ze,se=Je,he=Xe)},setOp:function(ze,Je,Xe){(Se!==ze||Ne!==Je||We!==Xe)&&(o.stencilOp(ze,Je,Xe),Se=ze,Ne=Je,We=Xe)},setLocked:function(ze){X=ze},setClear:function(ze){Ke!==ze&&(o.clearStencil(ze),Ke=ze)},reset:function(){X=!1,ve=null,ue=null,se=null,he=null,Se=null,Ne=null,We=null,Ke=null}}}const a=new i,c=new r,u=new l,d=new WeakMap,m=new WeakMap;let _={},p={},y=new WeakMap,g=[],v=null,b=!1,x=null,M=null,E=null,A=null,L=null,D=null,R=null,I=!1,U=null,J=null,ne=null,F=null,P=null;const N=o.getParameter(35661);let q=!1,G=0;const H=o.getParameter(7938);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=G>=2);let W=null,$={};const V=o.getParameter(3088),z=o.getParameter(2978),K=new Vector4().fromArray(V),oe=new Vector4().fromArray(z);function ce(X,ve,ue){const se=new Uint8Array(4),he=o.createTexture();o.bindTexture(X,he),o.texParameteri(X,10241,9728),o.texParameteri(X,10240,9728);for(let Se=0;Se<ue;Se++)o.texImage2D(ve+Se,0,6408,1,1,0,6408,5121,se);return he}const Q={};Q[3553]=ce(3553,3553,1),Q[34067]=ce(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),pe(2929),c.setFunc(LessEqualDepth),Be(!1),je(CullFaceBack),pe(2884),Ue(NoBlending);function pe(X){_[X]!==!0&&(o.enable(X),_[X]=!0)}function fe(X){_[X]!==!1&&(o.disable(X),_[X]=!1)}function ye(X,ve){return p[X]!==ve?(o.bindFramebuffer(X,ve),p[X]=ve,n&&(X===36009&&(p[36160]=ve),X===36160&&(p[36009]=ve)),!0):!1}function de(X,ve){let ue=g,se=!1;if(X)if(ue=y.get(ve),ue===void 0&&(ue=[],y.set(ve,ue)),X.isWebGLMultipleRenderTargets){const he=X.texture;if(ue.length!==he.length||ue[0]!==36064){for(let Se=0,Ne=he.length;Se<Ne;Se++)ue[Se]=36064+Se;ue.length=he.length,se=!0}}else ue[0]!==36064&&(ue[0]=36064,se=!0);else ue[0]!==1029&&(ue[0]=1029,se=!0);se&&(t.isWebGL2?o.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function Le(X){return v!==X?(o.useProgram(X),v=X,!0):!1}const Te={[AddEquation]:32774,[SubtractEquation]:32778,[ReverseSubtractEquation]:32779};if(n)Te[MinEquation]=32775,Te[MaxEquation]=32776;else{const X=e.get("EXT_blend_minmax");X!==null&&(Te[MinEquation]=X.MIN_EXT,Te[MaxEquation]=X.MAX_EXT)}const be={[ZeroFactor]:0,[OneFactor]:1,[SrcColorFactor]:768,[SrcAlphaFactor]:770,[SrcAlphaSaturateFactor]:776,[DstColorFactor]:774,[DstAlphaFactor]:772,[OneMinusSrcColorFactor]:769,[OneMinusSrcAlphaFactor]:771,[OneMinusDstColorFactor]:775,[OneMinusDstAlphaFactor]:773};function Ue(X,ve,ue,se,he,Se,Ne,We){if(X===NoBlending){b===!0&&(fe(3042),b=!1);return}if(b===!1&&(pe(3042),b=!0),X!==CustomBlending){if(X!==x||We!==I){if((M!==AddEquation||L!==AddEquation)&&(o.blendEquation(32774),M=AddEquation,L=AddEquation),We)switch(X){case NormalBlending:o.blendFuncSeparate(1,771,1,771);break;case AdditiveBlending:o.blendFunc(1,1);break;case SubtractiveBlending:o.blendFuncSeparate(0,769,0,1);break;case MultiplyBlending:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case NormalBlending:o.blendFuncSeparate(770,771,1,771);break;case AdditiveBlending:o.blendFunc(770,1);break;case SubtractiveBlending:o.blendFuncSeparate(0,769,0,1);break;case MultiplyBlending:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}E=null,A=null,D=null,R=null,x=X,I=We}return}he=he||ve,Se=Se||ue,Ne=Ne||se,(ve!==M||he!==L)&&(o.blendEquationSeparate(Te[ve],Te[he]),M=ve,L=he),(ue!==E||se!==A||Se!==D||Ne!==R)&&(o.blendFuncSeparate(be[ue],be[se],be[Se],be[Ne]),E=ue,A=se,D=Se,R=Ne),x=X,I=null}function Ve(X,ve){X.side===DoubleSide?fe(2884):pe(2884);let ue=X.side===BackSide;ve&&(ue=!ue),Be(ue),X.blending===NormalBlending&&X.transparent===!1?Ue(NoBlending):Ue(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),a.setMask(X.colorWrite);const se=X.stencilWrite;u.setTest(se),se&&(u.setMask(X.stencilWriteMask),u.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),u.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),O(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?pe(32926):fe(32926)}function Be(X){U!==X&&(X?o.frontFace(2304):o.frontFace(2305),U=X)}function je(X){X!==CullFaceNone?(pe(2884),X!==J&&(X===CullFaceBack?o.cullFace(1029):X===CullFaceFront?o.cullFace(1028):o.cullFace(1032))):fe(2884),J=X}function ke(X){X!==ne&&(q&&o.lineWidth(X),ne=X)}function O(X,ve,ue){X?(pe(32823),(F!==ve||P!==ue)&&(o.polygonOffset(ve,ue),F=ve,P=ue)):fe(32823)}function w(X){X?pe(3089):fe(3089)}function T(X){X===void 0&&(X=33984+N-1),W!==X&&(o.activeTexture(X),W=X)}function S(X,ve,ue){ue===void 0&&(W===null?ue=33984+N-1:ue=W);let se=$[ue];se===void 0&&(se={type:void 0,texture:void 0},$[ue]=se),(se.type!==X||se.texture!==ve)&&(W!==ue&&(o.activeTexture(ue),W=ue),o.bindTexture(X,ve||Q[X]),se.type=X,se.texture=ve)}function C(){const X=$[W];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function j(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Y(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ae(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function le(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ge(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function k(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Z(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xe(X){K.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),K.copy(X))}function _e(X){oe.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),oe.copy(X))}function Me(X,ve){let ue=m.get(ve);ue===void 0&&(ue=new WeakMap,m.set(ve,ue));let se=ue.get(X);se===void 0&&(se=o.getUniformBlockIndex(ve,X.name),ue.set(X,se))}function Ee(X,ve){const se=m.get(ve).get(X);d.get(X)!==se&&(o.uniformBlockBinding(ve,se,X.__bindingPointIndex),d.set(X,se))}function Ie(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),n===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},W=null,$={},p={},y=new WeakMap,g=[],v=null,b=!1,x=null,M=null,E=null,A=null,L=null,D=null,R=null,I=!1,U=null,J=null,ne=null,F=null,P=null,K.set(0,0,o.canvas.width,o.canvas.height),oe.set(0,0,o.canvas.width,o.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:pe,disable:fe,bindFramebuffer:ye,drawBuffers:de,useProgram:Le,setBlending:Ue,setMaterial:Ve,setFlipSided:Be,setCullFace:je,setLineWidth:ke,setPolygonOffset:O,setScissorTest:w,activeTexture:T,bindTexture:S,unbindTexture:C,compressedTexImage2D:j,texImage2D:Z,texImage3D:me,updateUBOMapping:Me,uniformBlockBinding:Ee,texStorage2D:ge,texStorage3D:k,texSubImage2D:Y,texSubImage3D:ae,compressedTexSubImage2D:le,scissor:xe,viewport:_e,reset:Ie}}function WebGLTextures(o,e,t,n,i,r,l){const a=i.isWebGL2,c=i.maxTextures,u=i.maxCubemapSize,d=i.maxTextureSize,m=i.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let g;const v=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(S,C){return b?new OffscreenCanvas(S,C):createElementNS("canvas")}function M(S,C,j,Y){let ae=1;if((S.width>Y||S.height>Y)&&(ae=Y/Math.max(S.width,S.height)),ae<1||C===!0)if(typeof HTMLImageElement!="undefined"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&S instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&S instanceof ImageBitmap){const le=C?floorPowerOfTwo:Math.floor,ge=le(ae*S.width),k=le(ae*S.height);g===void 0&&(g=x(ge,k));const Z=j?x(ge,k):g;return Z.width=ge,Z.height=k,Z.getContext("2d").drawImage(S,0,0,ge,k),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+ge+"x"+k+")."),Z}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function E(S){return isPowerOfTwo(S.width)&&isPowerOfTwo(S.height)}function A(S){return a?!1:S.wrapS!==ClampToEdgeWrapping||S.wrapT!==ClampToEdgeWrapping||S.minFilter!==NearestFilter&&S.minFilter!==LinearFilter}function L(S,C){return S.generateMipmaps&&C&&S.minFilter!==NearestFilter&&S.minFilter!==LinearFilter}function D(S){o.generateMipmap(S)}function R(S,C,j,Y,ae=!1){if(a===!1)return C;if(S!==null){if(o[S]!==void 0)return o[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let le=C;return C===6403&&(j===5126&&(le=33326),j===5131&&(le=33325),j===5121&&(le=33321)),C===33319&&(j===5126&&(le=33328),j===5131&&(le=33327),j===5121&&(le=33323)),C===6408&&(j===5126&&(le=34836),j===5131&&(le=34842),j===5121&&(le=Y===sRGBEncoding&&ae===!1?35907:32856),j===32819&&(le=32854),j===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function I(S,C,j){return L(S,j)===!0||S.isFramebufferTexture&&S.minFilter!==NearestFilter&&S.minFilter!==LinearFilter?Math.log2(Math.max(C.width,C.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?C.mipmaps.length:1}function U(S){return S===NearestFilter||S===NearestMipmapNearestFilter||S===NearestMipmapLinearFilter?9728:9729}function J(S){const C=S.target;C.removeEventListener("dispose",J),F(C),C.isVideoTexture&&y.delete(C)}function ne(S){const C=S.target;C.removeEventListener("dispose",ne),N(C)}function F(S){const C=n.get(S);if(C.__webglInit===void 0)return;const j=S.source,Y=v.get(j);if(Y){const ae=Y[C.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&P(S),Object.keys(Y).length===0&&v.delete(j)}n.remove(S)}function P(S){const C=n.get(S);o.deleteTexture(C.__webglTexture);const j=S.source,Y=v.get(j);delete Y[C.__cacheKey],l.memory.textures--}function N(S){const C=S.texture,j=n.get(S),Y=n.get(C);if(Y.__webglTexture!==void 0&&(o.deleteTexture(Y.__webglTexture),l.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)o.deleteFramebuffer(j.__webglFramebuffer[ae]),j.__webglDepthbuffer&&o.deleteRenderbuffer(j.__webglDepthbuffer[ae]);else{if(o.deleteFramebuffer(j.__webglFramebuffer),j.__webglDepthbuffer&&o.deleteRenderbuffer(j.__webglDepthbuffer),j.__webglMultisampledFramebuffer&&o.deleteFramebuffer(j.__webglMultisampledFramebuffer),j.__webglColorRenderbuffer)for(let ae=0;ae<j.__webglColorRenderbuffer.length;ae++)j.__webglColorRenderbuffer[ae]&&o.deleteRenderbuffer(j.__webglColorRenderbuffer[ae]);j.__webglDepthRenderbuffer&&o.deleteRenderbuffer(j.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let ae=0,le=C.length;ae<le;ae++){const ge=n.get(C[ae]);ge.__webglTexture&&(o.deleteTexture(ge.__webglTexture),l.memory.textures--),n.remove(C[ae])}n.remove(C),n.remove(S)}let q=0;function G(){q=0}function H(){const S=q;return S>=c&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+c),q+=1,S}function W(S){const C=[];return C.push(S.wrapS),C.push(S.wrapT),C.push(S.magFilter),C.push(S.minFilter),C.push(S.anisotropy),C.push(S.internalFormat),C.push(S.format),C.push(S.type),C.push(S.generateMipmaps),C.push(S.premultiplyAlpha),C.push(S.flipY),C.push(S.unpackAlignment),C.push(S.encoding),C.join()}function $(S,C){const j=n.get(S);if(S.isVideoTexture&&w(S),S.isRenderTargetTexture===!1&&S.version>0&&j.__version!==S.version){const Y=S.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{fe(j,S,C);return}}t.bindTexture(3553,j.__webglTexture,33984+C)}function V(S,C){const j=n.get(S);if(S.version>0&&j.__version!==S.version){fe(j,S,C);return}t.bindTexture(35866,j.__webglTexture,33984+C)}function z(S,C){const j=n.get(S);if(S.version>0&&j.__version!==S.version){fe(j,S,C);return}t.bindTexture(32879,j.__webglTexture,33984+C)}function K(S,C){const j=n.get(S);if(S.version>0&&j.__version!==S.version){ye(j,S,C);return}t.bindTexture(34067,j.__webglTexture,33984+C)}const oe={[RepeatWrapping]:10497,[ClampToEdgeWrapping]:33071,[MirroredRepeatWrapping]:33648},ce={[NearestFilter]:9728,[NearestMipmapNearestFilter]:9984,[NearestMipmapLinearFilter]:9986,[LinearFilter]:9729,[LinearMipmapNearestFilter]:9985,[LinearMipmapLinearFilter]:9987};function Q(S,C,j){if(j?(o.texParameteri(S,10242,oe[C.wrapS]),o.texParameteri(S,10243,oe[C.wrapT]),(S===32879||S===35866)&&o.texParameteri(S,32882,oe[C.wrapR]),o.texParameteri(S,10240,ce[C.magFilter]),o.texParameteri(S,10241,ce[C.minFilter])):(o.texParameteri(S,10242,33071),o.texParameteri(S,10243,33071),(S===32879||S===35866)&&o.texParameteri(S,32882,33071),(C.wrapS!==ClampToEdgeWrapping||C.wrapT!==ClampToEdgeWrapping)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(S,10240,U(C.magFilter)),o.texParameteri(S,10241,U(C.minFilter)),C.minFilter!==NearestFilter&&C.minFilter!==LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(C.type===FloatType&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===HalfFloatType&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(o.texParameterf(S,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function pe(S,C){let j=!1;S.__webglInit===void 0&&(S.__webglInit=!0,C.addEventListener("dispose",J));const Y=C.source;let ae=v.get(Y);ae===void 0&&(ae={},v.set(Y,ae));const le=W(C);if(le!==S.__cacheKey){ae[le]===void 0&&(ae[le]={texture:o.createTexture(),usedTimes:0},l.memory.textures++,j=!0),ae[le].usedTimes++;const ge=ae[S.__cacheKey];ge!==void 0&&(ae[S.__cacheKey].usedTimes--,ge.usedTimes===0&&P(C)),S.__cacheKey=le,S.__webglTexture=ae[le].texture}return j}function fe(S,C,j){let Y=3553;C.isDataArrayTexture&&(Y=35866),C.isData3DTexture&&(Y=32879);const ae=pe(S,C),le=C.source;t.bindTexture(Y,S.__webglTexture,33984+j);const ge=n.get(le);if(le.version!==ge.__version||ae===!0){t.activeTexture(33984+j),o.pixelStorei(37440,C.flipY),o.pixelStorei(37441,C.premultiplyAlpha),o.pixelStorei(3317,C.unpackAlignment),o.pixelStorei(37443,0);const k=A(C)&&E(C.image)===!1;let Z=M(C.image,k,!1,d);Z=T(C,Z);const me=E(Z)||a,xe=r.convert(C.format,C.encoding);let _e=r.convert(C.type),Me=R(C.internalFormat,xe,_e,C.encoding,C.isVideoTexture);Q(Y,C,me);let Ee;const Ie=C.mipmaps,X=a&&C.isVideoTexture!==!0,ve=ge.__version===void 0||ae===!0,ue=I(C,Z,me);if(C.isDepthTexture)Me=6402,a?C.type===FloatType?Me=36012:C.type===UnsignedIntType?Me=33190:C.type===UnsignedInt248Type?Me=35056:Me=33189:C.type===FloatType&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===DepthFormat&&Me===6402&&C.type!==UnsignedShortType&&C.type!==UnsignedIntType&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=UnsignedIntType,_e=r.convert(C.type)),C.format===DepthStencilFormat&&Me===6402&&(Me=34041,C.type!==UnsignedInt248Type&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=UnsignedInt248Type,_e=r.convert(C.type))),ve&&(X?t.texStorage2D(3553,1,Me,Z.width,Z.height):t.texImage2D(3553,0,Me,Z.width,Z.height,0,xe,_e,null));else if(C.isDataTexture)if(Ie.length>0&&me){X&&ve&&t.texStorage2D(3553,ue,Me,Ie[0].width,Ie[0].height);for(let se=0,he=Ie.length;se<he;se++)Ee=Ie[se],X?t.texSubImage2D(3553,se,0,0,Ee.width,Ee.height,xe,_e,Ee.data):t.texImage2D(3553,se,Me,Ee.width,Ee.height,0,xe,_e,Ee.data);C.generateMipmaps=!1}else X?(ve&&t.texStorage2D(3553,ue,Me,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,Z.width,Z.height,xe,_e,Z.data)):t.texImage2D(3553,0,Me,Z.width,Z.height,0,xe,_e,Z.data);else if(C.isCompressedTexture){X&&ve&&t.texStorage2D(3553,ue,Me,Ie[0].width,Ie[0].height);for(let se=0,he=Ie.length;se<he;se++)Ee=Ie[se],C.format!==RGBAFormat?xe!==null?X?t.compressedTexSubImage2D(3553,se,0,0,Ee.width,Ee.height,xe,Ee.data):t.compressedTexImage2D(3553,se,Me,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?t.texSubImage2D(3553,se,0,0,Ee.width,Ee.height,xe,_e,Ee.data):t.texImage2D(3553,se,Me,Ee.width,Ee.height,0,xe,_e,Ee.data)}else if(C.isDataArrayTexture)X?(ve&&t.texStorage3D(35866,ue,Me,Z.width,Z.height,Z.depth),t.texSubImage3D(35866,0,0,0,0,Z.width,Z.height,Z.depth,xe,_e,Z.data)):t.texImage3D(35866,0,Me,Z.width,Z.height,Z.depth,0,xe,_e,Z.data);else if(C.isData3DTexture)X?(ve&&t.texStorage3D(32879,ue,Me,Z.width,Z.height,Z.depth),t.texSubImage3D(32879,0,0,0,0,Z.width,Z.height,Z.depth,xe,_e,Z.data)):t.texImage3D(32879,0,Me,Z.width,Z.height,Z.depth,0,xe,_e,Z.data);else if(C.isFramebufferTexture){if(ve)if(X)t.texStorage2D(3553,ue,Me,Z.width,Z.height);else{let se=Z.width,he=Z.height;for(let Se=0;Se<ue;Se++)t.texImage2D(3553,Se,Me,se,he,0,xe,_e,null),se>>=1,he>>=1}}else if(Ie.length>0&&me){X&&ve&&t.texStorage2D(3553,ue,Me,Ie[0].width,Ie[0].height);for(let se=0,he=Ie.length;se<he;se++)Ee=Ie[se],X?t.texSubImage2D(3553,se,0,0,xe,_e,Ee):t.texImage2D(3553,se,Me,xe,_e,Ee);C.generateMipmaps=!1}else X?(ve&&t.texStorage2D(3553,ue,Me,Z.width,Z.height),t.texSubImage2D(3553,0,0,0,xe,_e,Z)):t.texImage2D(3553,0,Me,xe,_e,Z);L(C,me)&&D(Y),ge.__version=le.version,C.onUpdate&&C.onUpdate(C)}S.__version=C.version}function ye(S,C,j){if(C.image.length!==6)return;const Y=pe(S,C),ae=C.source;t.bindTexture(34067,S.__webglTexture,33984+j);const le=n.get(ae);if(ae.version!==le.__version||Y===!0){t.activeTexture(33984+j),o.pixelStorei(37440,C.flipY),o.pixelStorei(37441,C.premultiplyAlpha),o.pixelStorei(3317,C.unpackAlignment),o.pixelStorei(37443,0);const ge=C.isCompressedTexture||C.image[0].isCompressedTexture,k=C.image[0]&&C.image[0].isDataTexture,Z=[];for(let se=0;se<6;se++)!ge&&!k?Z[se]=M(C.image[se],!1,!0,u):Z[se]=k?C.image[se].image:C.image[se],Z[se]=T(C,Z[se]);const me=Z[0],xe=E(me)||a,_e=r.convert(C.format,C.encoding),Me=r.convert(C.type),Ee=R(C.internalFormat,_e,Me,C.encoding),Ie=a&&C.isVideoTexture!==!0,X=le.__version===void 0||Y===!0;let ve=I(C,me,xe);Q(34067,C,xe);let ue;if(ge){Ie&&X&&t.texStorage2D(34067,ve,Ee,me.width,me.height);for(let se=0;se<6;se++){ue=Z[se].mipmaps;for(let he=0;he<ue.length;he++){const Se=ue[he];C.format!==RGBAFormat?_e!==null?Ie?t.compressedTexSubImage2D(34069+se,he,0,0,Se.width,Se.height,_e,Se.data):t.compressedTexImage2D(34069+se,he,Ee,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+se,he,0,0,Se.width,Se.height,_e,Me,Se.data):t.texImage2D(34069+se,he,Ee,Se.width,Se.height,0,_e,Me,Se.data)}}}else{ue=C.mipmaps,Ie&&X&&(ue.length>0&&ve++,t.texStorage2D(34067,ve,Ee,Z[0].width,Z[0].height));for(let se=0;se<6;se++)if(k){Ie?t.texSubImage2D(34069+se,0,0,0,Z[se].width,Z[se].height,_e,Me,Z[se].data):t.texImage2D(34069+se,0,Ee,Z[se].width,Z[se].height,0,_e,Me,Z[se].data);for(let he=0;he<ue.length;he++){const Ne=ue[he].image[se].image;Ie?t.texSubImage2D(34069+se,he+1,0,0,Ne.width,Ne.height,_e,Me,Ne.data):t.texImage2D(34069+se,he+1,Ee,Ne.width,Ne.height,0,_e,Me,Ne.data)}}else{Ie?t.texSubImage2D(34069+se,0,0,0,_e,Me,Z[se]):t.texImage2D(34069+se,0,Ee,_e,Me,Z[se]);for(let he=0;he<ue.length;he++){const Se=ue[he];Ie?t.texSubImage2D(34069+se,he+1,0,0,_e,Me,Se.image[se]):t.texImage2D(34069+se,he+1,Ee,_e,Me,Se.image[se])}}}L(C,xe)&&D(34067),le.__version=ae.version,C.onUpdate&&C.onUpdate(C)}S.__version=C.version}function de(S,C,j,Y,ae){const le=r.convert(j.format,j.encoding),ge=r.convert(j.type),k=R(j.internalFormat,le,ge,j.encoding);n.get(C).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,k,C.width,C.height,C.depth,0,le,ge,null):t.texImage2D(ae,0,k,C.width,C.height,0,le,ge,null)),t.bindFramebuffer(36160,S),O(C)?_.framebufferTexture2DMultisampleEXT(36160,Y,ae,n.get(j).__webglTexture,0,ke(C)):o.framebufferTexture2D(36160,Y,ae,n.get(j).__webglTexture,0),t.bindFramebuffer(36160,null)}function Le(S,C,j){if(o.bindRenderbuffer(36161,S),C.depthBuffer&&!C.stencilBuffer){let Y=33189;if(j||O(C)){const ae=C.depthTexture;ae&&ae.isDepthTexture&&(ae.type===FloatType?Y=36012:ae.type===UnsignedIntType&&(Y=33190));const le=ke(C);O(C)?_.renderbufferStorageMultisampleEXT(36161,le,Y,C.width,C.height):o.renderbufferStorageMultisample(36161,le,Y,C.width,C.height)}else o.renderbufferStorage(36161,Y,C.width,C.height);o.framebufferRenderbuffer(36160,36096,36161,S)}else if(C.depthBuffer&&C.stencilBuffer){const Y=ke(C);j&&O(C)===!1?o.renderbufferStorageMultisample(36161,Y,35056,C.width,C.height):O(C)?_.renderbufferStorageMultisampleEXT(36161,Y,35056,C.width,C.height):o.renderbufferStorage(36161,34041,C.width,C.height),o.framebufferRenderbuffer(36160,33306,36161,S)}else{const Y=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ae=0;ae<Y.length;ae++){const le=Y[ae],ge=r.convert(le.format,le.encoding),k=r.convert(le.type),Z=R(le.internalFormat,ge,k,le.encoding),me=ke(C);j&&O(C)===!1?o.renderbufferStorageMultisample(36161,me,Z,C.width,C.height):O(C)?_.renderbufferStorageMultisampleEXT(36161,me,Z,C.width,C.height):o.renderbufferStorage(36161,Z,C.width,C.height)}}o.bindRenderbuffer(36161,null)}function Te(S,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,S),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),$(C.depthTexture,0);const Y=n.get(C.depthTexture).__webglTexture,ae=ke(C);if(C.depthTexture.format===DepthFormat)O(C)?_.framebufferTexture2DMultisampleEXT(36160,36096,3553,Y,0,ae):o.framebufferTexture2D(36160,36096,3553,Y,0);else if(C.depthTexture.format===DepthStencilFormat)O(C)?_.framebufferTexture2DMultisampleEXT(36160,33306,3553,Y,0,ae):o.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function be(S){const C=n.get(S),j=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!C.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");Te(C.__webglFramebuffer,S)}else if(j){C.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,C.__webglFramebuffer[Y]),C.__webglDepthbuffer[Y]=o.createRenderbuffer(),Le(C.__webglDepthbuffer[Y],S,!1)}else t.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=o.createRenderbuffer(),Le(C.__webglDepthbuffer,S,!1);t.bindFramebuffer(36160,null)}function Ue(S,C,j){const Y=n.get(S);C!==void 0&&de(Y.__webglFramebuffer,S,S.texture,36064,3553),j!==void 0&&be(S)}function Ve(S){const C=S.texture,j=n.get(S),Y=n.get(C);S.addEventListener("dispose",ne),S.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=o.createTexture()),Y.__version=C.version,l.memory.textures++);const ae=S.isWebGLCubeRenderTarget===!0,le=S.isWebGLMultipleRenderTargets===!0,ge=E(S)||a;if(ae){j.__webglFramebuffer=[];for(let k=0;k<6;k++)j.__webglFramebuffer[k]=o.createFramebuffer()}else{if(j.__webglFramebuffer=o.createFramebuffer(),le)if(i.drawBuffers){const k=S.texture;for(let Z=0,me=k.length;Z<me;Z++){const xe=n.get(k[Z]);xe.__webglTexture===void 0&&(xe.__webglTexture=o.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&O(S)===!1){const k=le?C:[C];j.__webglMultisampledFramebuffer=o.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,j.__webglMultisampledFramebuffer);for(let Z=0;Z<k.length;Z++){const me=k[Z];j.__webglColorRenderbuffer[Z]=o.createRenderbuffer(),o.bindRenderbuffer(36161,j.__webglColorRenderbuffer[Z]);const xe=r.convert(me.format,me.encoding),_e=r.convert(me.type),Me=R(me.internalFormat,xe,_e,me.encoding,S.isXRRenderTarget===!0),Ee=ke(S);o.renderbufferStorageMultisample(36161,Ee,Me,S.width,S.height),o.framebufferRenderbuffer(36160,36064+Z,36161,j.__webglColorRenderbuffer[Z])}o.bindRenderbuffer(36161,null),S.depthBuffer&&(j.__webglDepthRenderbuffer=o.createRenderbuffer(),Le(j.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,Y.__webglTexture),Q(34067,C,ge);for(let k=0;k<6;k++)de(j.__webglFramebuffer[k],S,C,36064,34069+k);L(C,ge)&&D(34067),t.unbindTexture()}else if(le){const k=S.texture;for(let Z=0,me=k.length;Z<me;Z++){const xe=k[Z],_e=n.get(xe);t.bindTexture(3553,_e.__webglTexture),Q(3553,xe,ge),de(j.__webglFramebuffer,S,xe,36064+Z,3553),L(xe,ge)&&D(3553)}t.unbindTexture()}else{let k=3553;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?k=S.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(k,Y.__webglTexture),Q(k,C,ge),de(j.__webglFramebuffer,S,C,36064,k),L(C,ge)&&D(k),t.unbindTexture()}S.depthBuffer&&be(S)}function Be(S){const C=E(S)||a,j=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Y=0,ae=j.length;Y<ae;Y++){const le=j[Y];if(L(le,C)){const ge=S.isWebGLCubeRenderTarget?34067:3553,k=n.get(le).__webglTexture;t.bindTexture(ge,k),D(ge),t.unbindTexture()}}}function je(S){if(a&&S.samples>0&&O(S)===!1){const C=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],j=S.width,Y=S.height;let ae=16384;const le=[],ge=S.stencilBuffer?33306:36096,k=n.get(S),Z=S.isWebGLMultipleRenderTargets===!0;if(Z)for(let me=0;me<C.length;me++)t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+me,36161,null),t.bindFramebuffer(36160,k.__webglFramebuffer),o.framebufferTexture2D(36009,36064+me,3553,null,0);t.bindFramebuffer(36008,k.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,k.__webglFramebuffer);for(let me=0;me<C.length;me++){le.push(36064+me),S.depthBuffer&&le.push(ge);const xe=k.__ignoreDepthValues!==void 0?k.__ignoreDepthValues:!1;if(xe===!1&&(S.depthBuffer&&(ae|=256),S.stencilBuffer&&(ae|=1024)),Z&&o.framebufferRenderbuffer(36008,36064,36161,k.__webglColorRenderbuffer[me]),xe===!0&&(o.invalidateFramebuffer(36008,[ge]),o.invalidateFramebuffer(36009,[ge])),Z){const _e=n.get(C[me]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,_e,0)}o.blitFramebuffer(0,0,j,Y,0,0,j,Y,ae,9728),p&&o.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),Z)for(let me=0;me<C.length;me++){t.bindFramebuffer(36160,k.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+me,36161,k.__webglColorRenderbuffer[me]);const xe=n.get(C[me]).__webglTexture;t.bindFramebuffer(36160,k.__webglFramebuffer),o.framebufferTexture2D(36009,36064+me,3553,xe,0)}t.bindFramebuffer(36009,k.__webglMultisampledFramebuffer)}}function ke(S){return Math.min(m,S.samples)}function O(S){const C=n.get(S);return a&&S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function w(S){const C=l.render.frame;y.get(S)!==C&&(y.set(S,C),S.update())}function T(S,C){const j=S.encoding,Y=S.format,ae=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===_SRGBAFormat||j!==LinearEncoding&&(j===sRGBEncoding?a===!1?e.has("EXT_sRGB")===!0&&Y===RGBAFormat?(S.format=_SRGBAFormat,S.minFilter=LinearFilter,S.generateMipmaps=!1):C=ImageUtils.sRGBToLinear(C):(Y!==RGBAFormat||ae!==UnsignedByteType)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",j)),C}this.allocateTextureUnit=H,this.resetTextureUnits=G,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=z,this.setTextureCube=K,this.rebindTextures=Ue,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=de,this.useMultisampledRTT=O}function WebGLUtils(o,e,t){const n=t.isWebGL2;function i(r,l=null){let a;if(r===UnsignedByteType)return 5121;if(r===UnsignedShort4444Type)return 32819;if(r===UnsignedShort5551Type)return 32820;if(r===ByteType)return 5120;if(r===ShortType)return 5122;if(r===UnsignedShortType)return 5123;if(r===IntType)return 5124;if(r===UnsignedIntType)return 5125;if(r===FloatType)return 5126;if(r===HalfFloatType)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===AlphaFormat)return 6406;if(r===RGBAFormat)return 6408;if(r===LuminanceFormat)return 6409;if(r===LuminanceAlphaFormat)return 6410;if(r===DepthFormat)return 6402;if(r===DepthStencilFormat)return 34041;if(r===RedFormat)return 6403;if(r===RGBFormat)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(r===_SRGBAFormat)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===RedIntegerFormat)return 36244;if(r===RGFormat)return 33319;if(r===RGIntegerFormat)return 33320;if(r===RGBAIntegerFormat)return 36249;if(r===RGB_S3TC_DXT1_Format||r===RGBA_S3TC_DXT1_Format||r===RGBA_S3TC_DXT3_Format||r===RGBA_S3TC_DXT5_Format)if(l===sRGBEncoding)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===RGB_S3TC_DXT1_Format)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===RGBA_S3TC_DXT1_Format)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===RGBA_S3TC_DXT3_Format)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===RGBA_S3TC_DXT5_Format)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===RGB_S3TC_DXT1_Format)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===RGBA_S3TC_DXT1_Format)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===RGBA_S3TC_DXT3_Format)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===RGBA_S3TC_DXT5_Format)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===RGB_PVRTC_4BPPV1_Format||r===RGB_PVRTC_2BPPV1_Format||r===RGBA_PVRTC_4BPPV1_Format||r===RGBA_PVRTC_2BPPV1_Format)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===RGB_PVRTC_4BPPV1_Format)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===RGB_PVRTC_2BPPV1_Format)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===RGBA_PVRTC_4BPPV1_Format)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===RGBA_PVRTC_2BPPV1_Format)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===RGB_ETC1_Format)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===RGB_ETC2_Format||r===RGBA_ETC2_EAC_Format)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===RGB_ETC2_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===RGBA_ETC2_EAC_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===RGBA_ASTC_4x4_Format||r===RGBA_ASTC_5x4_Format||r===RGBA_ASTC_5x5_Format||r===RGBA_ASTC_6x5_Format||r===RGBA_ASTC_6x6_Format||r===RGBA_ASTC_8x5_Format||r===RGBA_ASTC_8x6_Format||r===RGBA_ASTC_8x8_Format||r===RGBA_ASTC_10x5_Format||r===RGBA_ASTC_10x6_Format||r===RGBA_ASTC_10x8_Format||r===RGBA_ASTC_10x10_Format||r===RGBA_ASTC_12x10_Format||r===RGBA_ASTC_12x12_Format)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===RGBA_ASTC_4x4_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===RGBA_ASTC_5x4_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===RGBA_ASTC_5x5_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===RGBA_ASTC_6x5_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===RGBA_ASTC_6x6_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===RGBA_ASTC_8x5_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===RGBA_ASTC_8x6_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===RGBA_ASTC_8x8_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===RGBA_ASTC_10x5_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===RGBA_ASTC_10x6_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===RGBA_ASTC_10x8_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===RGBA_ASTC_10x10_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===RGBA_ASTC_12x10_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===RGBA_ASTC_12x12_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===RGBA_BPTC_Format)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===RGBA_BPTC_Format)return l===sRGBEncoding?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return r===UnsignedInt248Type?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[r]!==void 0?o[r]:null}return{convert:i}}class ArrayCamera extends PerspectiveCamera{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Group extends Object3D{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _moveEvent={type:"move"};class WebXRController{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Group,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Group,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Vector3,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Vector3),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Group,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Vector3,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Vector3),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,l=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){l=!0;for(const g of e.hand.values()){const v=t.getJointPose(g,n);if(u.joints[g.jointName]===void 0){const x=new Group;x.matrixAutoUpdate=!1,x.visible=!1,u.joints[g.jointName]=x,u.add(x)}const b=u.joints[g.jointName];v!==null&&(b.matrix.fromArray(v.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.jointRadius=v.radius),b.visible=v!==null}const d=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],_=d.position.distanceTo(m.position),p=.02,y=.005;u.inputState.pinching&&_>p+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&_<=p-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_moveEvent)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),u!==null&&(u.visible=l!==null),this}}class DepthTexture extends Texture{constructor(e,t,n,i,r,l,a,c,u,d){if(d=d!==void 0?d:DepthFormat,d!==DepthFormat&&d!==DepthStencilFormat)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===DepthFormat&&(n=UnsignedIntType),n===void 0&&d===DepthStencilFormat&&(n=UnsignedInt248Type),super(null,i,r,l,a,c,d,n,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:NearestFilter,this.minFilter=c!==void 0?c:NearestFilter,this.flipY=!1,this.generateMipmaps=!1}}class WebXRManager extends EventDispatcher{constructor(e,t){super();const n=this;let i=null,r=1,l=null,a="local-floor",c=null,u=null,d=null,m=null,_=null,p=null;const y=t.getContextAttributes();let g=null,v=null;const b=[],x=[],M=new PerspectiveCamera;M.layers.enable(1),M.viewport=new Vector4;const E=new PerspectiveCamera;E.layers.enable(2),E.viewport=new Vector4;const A=[M,E],L=new ArrayCamera;L.layers.enable(1),L.layers.enable(2);let D=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=b[W];return $===void 0&&($=new WebXRController,b[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=b[W];return $===void 0&&($=new WebXRController,b[W]=$),$.getGripSpace()},this.getHand=function(W){let $=b[W];return $===void 0&&($=new WebXRController,b[W]=$),$.getHandSpace()};function I(W){const $=x.indexOf(W.inputSource);if($===-1)return;const V=b[$];V!==void 0&&V.dispatchEvent({type:W.type,data:W.inputSource})}function U(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",J);for(let W=0;W<b.length;W++){const $=x[W];$!==null&&(x[W]=null,b[W].disconnect($))}D=null,R=null,e.setRenderTarget(g),_=null,m=null,d=null,i=null,v=null,H.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||l},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return m!==null?m:_},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",U),i.addEventListener("inputsourceschange",J),y.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};_=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:_}),v=new WebGLRenderTarget(_.framebufferWidth,_.framebufferHeight,{format:RGBAFormat,type:UnsignedByteType,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let $=null,V=null,z=null;y.depth&&(z=y.stencil?35056:33190,$=y.stencil?DepthStencilFormat:DepthFormat,V=y.stencil?UnsignedInt248Type:UnsignedIntType);const K={colorFormat:32856,depthFormat:z,scaleFactor:r};d=new XRWebGLBinding(i,t),m=d.createProjectionLayer(K),i.updateRenderState({layers:[m]}),v=new WebGLRenderTarget(m.textureWidth,m.textureHeight,{format:RGBAFormat,type:UnsignedByteType,depthTexture:new DepthTexture(m.textureWidth,m.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const oe=e.properties.get(v);oe.__ignoreDepthValues=m.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(1),c=null,l=await i.requestReferenceSpace(a),H.setContext(i),H.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function J(W){for(let $=0;$<W.removed.length;$++){const V=W.removed[$],z=x.indexOf(V);z>=0&&(x[z]=null,b[z].dispatchEvent({type:"disconnected",data:V}))}for(let $=0;$<W.added.length;$++){const V=W.added[$];let z=x.indexOf(V);if(z===-1){for(let oe=0;oe<b.length;oe++)if(oe>=x.length){x.push(V),z=oe;break}else if(x[oe]===null){x[oe]=V,z=oe;break}if(z===-1)break}const K=b[z];K&&K.dispatchEvent({type:"connected",data:V})}}const ne=new Vector3,F=new Vector3;function P(W,$,V){ne.setFromMatrixPosition($.matrixWorld),F.setFromMatrixPosition(V.matrixWorld);const z=ne.distanceTo(F),K=$.projectionMatrix.elements,oe=V.projectionMatrix.elements,ce=K[14]/(K[10]-1),Q=K[14]/(K[10]+1),pe=(K[9]+1)/K[5],fe=(K[9]-1)/K[5],ye=(K[8]-1)/K[0],de=(oe[8]+1)/oe[0],Le=ce*ye,Te=ce*de,be=z/(-ye+de),Ue=be*-ye;$.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ue),W.translateZ(be),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const Ve=ce+be,Be=Q+be,je=Le-Ue,ke=Te+(z-Ue),O=pe*Q/Be*Ve,w=fe*Q/Be*Ve;W.projectionMatrix.makePerspective(je,ke,O,w,Ve,Be)}function N(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;L.near=E.near=M.near=W.near,L.far=E.far=M.far=W.far,(D!==L.near||R!==L.far)&&(i.updateRenderState({depthNear:L.near,depthFar:L.far}),D=L.near,R=L.far);const $=W.parent,V=L.cameras;N(L,$);for(let K=0;K<V.length;K++)N(V[K],$);L.matrixWorld.decompose(L.position,L.quaternion,L.scale),W.matrix.copy(L.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale);const z=W.children;for(let K=0,oe=z.length;K<oe;K++)z[K].updateMatrixWorld(!0);V.length===2?P(L,M,E):L.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return L},this.getFoveation=function(){if(m!==null)return m.fixedFoveation;if(_!==null)return _.fixedFoveation},this.setFoveation=function(W){m!==null&&(m.fixedFoveation=W),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=W)};let q=null;function G(W,$){if(u=$.getViewerPose(c||l),p=$,u!==null){const V=u.views;_!==null&&(e.setRenderTargetFramebuffer(v,_.framebuffer),e.setRenderTarget(v));let z=!1;V.length!==L.cameras.length&&(L.cameras.length=0,z=!0);for(let K=0;K<V.length;K++){const oe=V[K];let ce=null;if(_!==null)ce=_.getViewport(oe);else{const pe=d.getViewSubImage(m,oe);ce=pe.viewport,K===0&&(e.setRenderTargetTextures(v,pe.colorTexture,m.ignoreDepthValues?void 0:pe.depthStencilTexture),e.setRenderTarget(v))}let Q=A[K];Q===void 0&&(Q=new PerspectiveCamera,Q.layers.enable(K),Q.viewport=new Vector4,A[K]=Q),Q.matrix.fromArray(oe.transform.matrix),Q.projectionMatrix.fromArray(oe.projectionMatrix),Q.viewport.set(ce.x,ce.y,ce.width,ce.height),K===0&&L.matrix.copy(Q.matrix),z===!0&&L.cameras.push(Q)}}for(let V=0;V<b.length;V++){const z=x[V],K=b[V];z!==null&&K!==void 0&&K.update(z,$,c||l)}q&&q(W,$),p=null}const H=new WebGLAnimation;H.setAnimationLoop(G),this.setAnimationLoop=function(W){q=W},this.dispose=function(){}}}function WebGLMaterials(o,e){function t(g,v){g.fogColor.value.copy(v.color),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function n(g,v,b,x,M){v.isMeshBasicMaterial||v.isMeshLambertMaterial?i(g,v):v.isMeshToonMaterial?(i(g,v),d(g,v)):v.isMeshPhongMaterial?(i(g,v),u(g,v)):v.isMeshStandardMaterial?(i(g,v),m(g,v),v.isMeshPhysicalMaterial&&_(g,v,M)):v.isMeshMatcapMaterial?(i(g,v),p(g,v)):v.isMeshDepthMaterial?i(g,v):v.isMeshDistanceMaterial?(i(g,v),y(g,v)):v.isMeshNormalMaterial?i(g,v):v.isLineBasicMaterial?(r(g,v),v.isLineDashedMaterial&&l(g,v)):v.isPointsMaterial?a(g,v,b,x):v.isSpriteMaterial?c(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function i(g,v){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map),v.alphaMap&&(g.alphaMap.value=v.alphaMap),v.bumpMap&&(g.bumpMap.value=v.bumpMap,g.bumpScale.value=v.bumpScale,v.side===BackSide&&(g.bumpScale.value*=-1)),v.displacementMap&&(g.displacementMap.value=v.displacementMap,g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap),v.normalMap&&(g.normalMap.value=v.normalMap,g.normalScale.value.copy(v.normalScale),v.side===BackSide&&g.normalScale.value.negate()),v.specularMap&&(g.specularMap.value=v.specularMap),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);const b=e.get(v).envMap;if(b&&(g.envMap.value=b,g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=v.reflectivity,g.ior.value=v.ior,g.refractionRatio.value=v.refractionRatio),v.lightMap){g.lightMap.value=v.lightMap;const E=o.physicallyCorrectLights!==!0?Math.PI:1;g.lightMapIntensity.value=v.lightMapIntensity*E}v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity);let x;v.map?x=v.map:v.specularMap?x=v.specularMap:v.displacementMap?x=v.displacementMap:v.normalMap?x=v.normalMap:v.bumpMap?x=v.bumpMap:v.roughnessMap?x=v.roughnessMap:v.metalnessMap?x=v.metalnessMap:v.alphaMap?x=v.alphaMap:v.emissiveMap?x=v.emissiveMap:v.clearcoatMap?x=v.clearcoatMap:v.clearcoatNormalMap?x=v.clearcoatNormalMap:v.clearcoatRoughnessMap?x=v.clearcoatRoughnessMap:v.iridescenceMap?x=v.iridescenceMap:v.iridescenceThicknessMap?x=v.iridescenceThicknessMap:v.specularIntensityMap?x=v.specularIntensityMap:v.specularColorMap?x=v.specularColorMap:v.transmissionMap?x=v.transmissionMap:v.thicknessMap?x=v.thicknessMap:v.sheenColorMap?x=v.sheenColorMap:v.sheenRoughnessMap&&(x=v.sheenRoughnessMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),g.uvTransform.value.copy(x.matrix));let M;v.aoMap?M=v.aoMap:v.lightMap&&(M=v.lightMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uv2Transform.value.copy(M.matrix))}function r(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity}function l(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function a(g,v,b,x){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*b,g.scale.value=x*.5,v.map&&(g.map.value=v.map),v.alphaMap&&(g.alphaMap.value=v.alphaMap),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);let M;v.map?M=v.map:v.alphaMap&&(M=v.alphaMap),M!==void 0&&(M.matrixAutoUpdate===!0&&M.updateMatrix(),g.uvTransform.value.copy(M.matrix))}function c(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map),v.alphaMap&&(g.alphaMap.value=v.alphaMap),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);let b;v.map?b=v.map:v.alphaMap&&(b=v.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),g.uvTransform.value.copy(b.matrix))}function u(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4)}function d(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap)}function m(g,v){g.roughness.value=v.roughness,g.metalness.value=v.metalness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap),v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap),e.get(v).envMap&&(g.envMapIntensity.value=v.envMapIntensity)}function _(g,v,b){g.ior.value=v.ior,v.sheen>0&&(g.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),g.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(g.sheenColorMap.value=v.sheenColorMap),v.sheenRoughnessMap&&(g.sheenRoughnessMap.value=v.sheenRoughnessMap)),v.clearcoat>0&&(g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap),v.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),g.clearcoatNormalMap.value=v.clearcoatNormalMap,v.side===BackSide&&g.clearcoatNormalScale.value.negate())),v.iridescence>0&&(g.iridescence.value=v.iridescence,g.iridescenceIOR.value=v.iridescenceIOR,g.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(g.iridescenceMap.value=v.iridescenceMap),v.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=v.iridescenceThicknessMap)),v.transmission>0&&(g.transmission.value=v.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(g.transmissionMap.value=v.transmissionMap),g.thickness.value=v.thickness,v.thicknessMap&&(g.thicknessMap.value=v.thicknessMap),g.attenuationDistance.value=v.attenuationDistance,g.attenuationColor.value.copy(v.attenuationColor)),g.specularIntensity.value=v.specularIntensity,g.specularColor.value.copy(v.specularColor),v.specularIntensityMap&&(g.specularIntensityMap.value=v.specularIntensityMap),v.specularColorMap&&(g.specularColorMap.value=v.specularColorMap)}function p(g,v){v.matcap&&(g.matcap.value=v.matcap)}function y(g,v){g.referencePosition.value.copy(v.referencePosition),g.nearDistance.value=v.nearDistance,g.farDistance.value=v.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function WebGLUniformsGroups(o,e,t,n){let i={},r={},l=[];const a=t.isWebGL2?o.getParameter(35375):0;function c(x,M){const E=M.program;n.uniformBlockBinding(x,E)}function u(x,M){let E=i[x.id];E===void 0&&(y(x),E=d(x),i[x.id]=E,x.addEventListener("dispose",v));const A=M.program;n.updateUBOMapping(x,A);const L=e.render.frame;r[x.id]!==L&&(_(x),r[x.id]=L)}function d(x){const M=m();x.__bindingPointIndex=M;const E=o.createBuffer(),A=x.__size,L=x.usage;return o.bindBuffer(35345,E),o.bufferData(35345,A,L),o.bindBuffer(35345,null),o.bindBufferBase(35345,M,E),E}function m(){for(let x=0;x<a;x++)if(l.indexOf(x)===-1)return l.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(x){const M=i[x.id],E=x.uniforms,A=x.__cache;o.bindBuffer(35345,M);for(let L=0,D=E.length;L<D;L++){const R=E[L];if(p(R,L,A)===!0){const I=R.value,U=R.__offset;typeof I=="number"?(R.__data[0]=I,o.bufferSubData(35345,U,R.__data)):(R.value.isMatrix3?(R.__data[0]=R.value.elements[0],R.__data[1]=R.value.elements[1],R.__data[2]=R.value.elements[2],R.__data[3]=R.value.elements[0],R.__data[4]=R.value.elements[3],R.__data[5]=R.value.elements[4],R.__data[6]=R.value.elements[5],R.__data[7]=R.value.elements[0],R.__data[8]=R.value.elements[6],R.__data[9]=R.value.elements[7],R.__data[10]=R.value.elements[8],R.__data[11]=R.value.elements[0]):I.toArray(R.__data),o.bufferSubData(35345,U,R.__data))}}o.bindBuffer(35345,null)}function p(x,M,E){const A=x.value;if(E[M]===void 0)return typeof A=="number"?E[M]=A:E[M]=A.clone(),!0;if(typeof A=="number"){if(E[M]!==A)return E[M]=A,!0}else{const L=E[M];if(L.equals(A)===!1)return L.copy(A),!0}return!1}function y(x){const M=x.uniforms;let E=0;const A=16;let L=0;for(let D=0,R=M.length;D<R;D++){const I=M[D],U=g(I);if(I.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,D>0){L=E%A;const J=A-L;L!==0&&J-U.boundary<0&&(E+=A-L,I.__offset=E)}E+=U.storage}return L=E%A,L>0&&(E+=A-L),x.__size=E,x.__cache={},this}function g(x){const M=x.value,E={boundary:0,storage:0};return typeof M=="number"?(E.boundary=4,E.storage=4):M.isVector2?(E.boundary=8,E.storage=8):M.isVector3||M.isColor?(E.boundary=16,E.storage=12):M.isVector4?(E.boundary=16,E.storage=16):M.isMatrix3?(E.boundary=48,E.storage=48):M.isMatrix4?(E.boundary=64,E.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),E}function v(x){const M=x.target;M.removeEventListener("dispose",v);const E=l.indexOf(M.__bindingPointIndex);l.splice(E,1),o.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function b(){for(const x in i)o.deleteBuffer(i[x]);l=[],i={},r={}}return{bind:c,update:u,dispose:b}}function createCanvasElement(){const o=createElementNS("canvas");return o.style.display="block",o}function WebGLRenderer(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:createCanvasElement(),t=o.context!==void 0?o.context:null,n=o.depth!==void 0?o.depth:!0,i=o.stencil!==void 0?o.stencil:!0,r=o.antialias!==void 0?o.antialias:!1,l=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,c=o.powerPreference!==void 0?o.powerPreference:"default",u=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let d;t!==null?d=t.getContextAttributes().alpha:d=o.alpha!==void 0?o.alpha:!1;let m=null,_=null;const p=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=LinearEncoding,this.physicallyCorrectLights=!1,this.toneMapping=NoToneMapping,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const g=this;let v=!1,b=0,x=0,M=null,E=-1,A=null;const L=new Vector4,D=new Vector4;let R=null,I=e.width,U=e.height,J=1,ne=null,F=null;const P=new Vector4(0,0,I,U),N=new Vector4(0,0,I,U);let q=!1;const G=new Frustum;let H=!1,W=!1,$=null;const V=new Matrix4,z=new Vector2,K=new Vector3,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ce(){return M===null?J:1}let Q=t;function pe(B,te){for(let ie=0;ie<B.length;ie++){const ee=B[ie],re=e.getContext(ee,te);if(re!==null)return re}return null}try{const B={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${REVISION}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),Q===null){const te=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&te.shift(),Q=pe(te,B),Q===null)throw pe(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(B){throw console.error("THREE.WebGLRenderer: "+B.message),B}let fe,ye,de,Le,Te,be,Ue,Ve,Be,je,ke,O,w,T,S,C,j,Y,ae,le,ge,k,Z,me;function xe(){fe=new WebGLExtensions(Q),ye=new WebGLCapabilities(Q,fe,o),fe.init(ye),k=new WebGLUtils(Q,fe,ye),de=new WebGLState(Q,fe,ye),Le=new WebGLInfo,Te=new WebGLProperties,be=new WebGLTextures(Q,fe,de,Te,ye,k,Le),Ue=new WebGLCubeMaps(g),Ve=new WebGLCubeUVMaps(g),Be=new WebGLAttributes(Q,ye),Z=new WebGLBindingStates(Q,fe,Be,ye),je=new WebGLGeometries(Q,Be,Le,Z),ke=new WebGLObjects(Q,je,Be,Le),ae=new WebGLMorphtargets(Q,ye,be),C=new WebGLClipping(Te),O=new WebGLPrograms(g,Ue,Ve,fe,ye,Z,C),w=new WebGLMaterials(g,Te),T=new WebGLRenderLists,S=new WebGLRenderStates(fe,ye),Y=new WebGLBackground(g,Ue,de,ke,d,l),j=new WebGLShadowMap(g,ke,ye),me=new WebGLUniformsGroups(Q,Le,ye,de),le=new WebGLBufferRenderer(Q,fe,Le,ye),ge=new WebGLIndexedBufferRenderer(Q,fe,Le,ye),Le.programs=O.programs,g.capabilities=ye,g.extensions=fe,g.properties=Te,g.renderLists=T,g.shadowMap=j,g.state=de,g.info=Le}xe();const _e=new WebXRManager(g,Q);this.xr=_e,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const B=fe.get("WEBGL_lose_context");B&&B.loseContext()},this.forceContextRestore=function(){const B=fe.get("WEBGL_lose_context");B&&B.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(B){B!==void 0&&(J=B,this.setSize(I,U,!1))},this.getSize=function(B){return B.set(I,U)},this.setSize=function(B,te,ie){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=B,U=te,e.width=Math.floor(B*J),e.height=Math.floor(te*J),ie!==!1&&(e.style.width=B+"px",e.style.height=te+"px"),this.setViewport(0,0,B,te)},this.getDrawingBufferSize=function(B){return B.set(I*J,U*J).floor()},this.setDrawingBufferSize=function(B,te,ie){I=B,U=te,J=ie,e.width=Math.floor(B*ie),e.height=Math.floor(te*ie),this.setViewport(0,0,B,te)},this.getCurrentViewport=function(B){return B.copy(L)},this.getViewport=function(B){return B.copy(P)},this.setViewport=function(B,te,ie,ee){B.isVector4?P.set(B.x,B.y,B.z,B.w):P.set(B,te,ie,ee),de.viewport(L.copy(P).multiplyScalar(J).floor())},this.getScissor=function(B){return B.copy(N)},this.setScissor=function(B,te,ie,ee){B.isVector4?N.set(B.x,B.y,B.z,B.w):N.set(B,te,ie,ee),de.scissor(D.copy(N).multiplyScalar(J).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(B){de.setScissorTest(q=B)},this.setOpaqueSort=function(B){ne=B},this.setTransparentSort=function(B){F=B},this.getClearColor=function(B){return B.copy(Y.getClearColor())},this.setClearColor=function(){Y.setClearColor.apply(Y,arguments)},this.getClearAlpha=function(){return Y.getClearAlpha()},this.setClearAlpha=function(){Y.setClearAlpha.apply(Y,arguments)},this.clear=function(B=!0,te=!0,ie=!0){let ee=0;B&&(ee|=16384),te&&(ee|=256),ie&&(ee|=1024),Q.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),T.dispose(),S.dispose(),Te.dispose(),Ue.dispose(),Ve.dispose(),ke.dispose(),Z.dispose(),me.dispose(),O.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Se),_e.removeEventListener("sessionend",Ne),$&&($.dispose(),$=null),We.stop()};function Me(B){B.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const B=Le.autoReset,te=j.enabled,ie=j.autoUpdate,ee=j.needsUpdate,re=j.type;xe(),Le.autoReset=B,j.enabled=te,j.autoUpdate=ie,j.needsUpdate=ee,j.type=re}function Ie(B){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",B.statusMessage)}function X(B){const te=B.target;te.removeEventListener("dispose",X),ve(te)}function ve(B){ue(B),Te.remove(B)}function ue(B){const te=Te.get(B).programs;te!==void 0&&(te.forEach(function(ie){O.releaseProgram(ie)}),B.isShaderMaterial&&O.releaseShaderCache(B))}this.renderBufferDirect=function(B,te,ie,ee,re,we){te===null&&(te=oe);const Ae=re.isMesh&&re.matrixWorld.determinant()<0,Re=dt(B,te,ie,ee,re);de.setMaterial(ee,Ae);let Ce=ie.index;const Fe=ie.attributes.position;if(Ce===null){if(Fe===void 0||Fe.count===0)return}else if(Ce.count===0)return;let Pe=1;ee.wireframe===!0&&(Ce=je.getWireframeAttribute(ie),Pe=2),Z.setup(re,ee,Re,ie,Ce);let De,Ge=le;Ce!==null&&(De=Be.get(Ce),Ge=ge,Ge.setIndex(De));const et=Ce!==null?Ce.count:Fe.count,nt=ie.drawRange.start*Pe,it=ie.drawRange.count*Pe,Ze=we!==null?we.start*Pe:0,Oe=we!==null?we.count*Pe:1/0,rt=Math.max(nt,Ze),He=Math.min(et,nt+it,Ze+Oe)-1,Ye=Math.max(0,He-rt+1);if(Ye!==0){if(re.isMesh)ee.wireframe===!0?(de.setLineWidth(ee.wireframeLinewidth*ce()),Ge.setMode(1)):Ge.setMode(4);else if(re.isLine){let Qe=ee.linewidth;Qe===void 0&&(Qe=1),de.setLineWidth(Qe*ce()),re.isLineSegments?Ge.setMode(1):re.isLineLoop?Ge.setMode(2):Ge.setMode(3)}else re.isPoints?Ge.setMode(0):re.isSprite&&Ge.setMode(4);if(re.isInstancedMesh)Ge.renderInstances(rt,Ye,re.count);else if(ie.isInstancedBufferGeometry){const Qe=Math.min(ie.instanceCount,ie._maxInstanceCount);Ge.renderInstances(rt,Ye,Qe)}else Ge.render(rt,Ye)}},this.compile=function(B,te){function ie(ee,re,we){ee.transparent===!0&&ee.side===DoubleSide?(ee.side=BackSide,ee.needsUpdate=!0,ot(ee,re,we),ee.side=FrontSide,ee.needsUpdate=!0,ot(ee,re,we),ee.side=DoubleSide):ot(ee,re,we)}_=S.get(B),_.init(),y.push(_),B.traverseVisible(function(ee){ee.isLight&&ee.layers.test(te.layers)&&(_.pushLight(ee),ee.castShadow&&_.pushShadow(ee))}),_.setupLights(g.physicallyCorrectLights),B.traverse(function(ee){const re=ee.material;if(re)if(Array.isArray(re))for(let we=0;we<re.length;we++){const Ae=re[we];ie(Ae,B,ee)}else ie(re,B,ee)}),y.pop(),_=null};let se=null;function he(B){se&&se(B)}function Se(){We.stop()}function Ne(){We.start()}const We=new WebGLAnimation;We.setAnimationLoop(he),typeof self!="undefined"&&We.setContext(self),this.setAnimationLoop=function(B){se=B,_e.setAnimationLoop(B),B===null?We.stop():We.start()},_e.addEventListener("sessionstart",Se),_e.addEventListener("sessionend",Ne),this.render=function(B,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(te),te=_e.getCamera()),B.isScene===!0&&B.onBeforeRender(g,B,te,M),_=S.get(B,y.length),_.init(),y.push(_),V.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),G.setFromProjectionMatrix(V),W=this.localClippingEnabled,H=C.init(this.clippingPlanes,W,te),m=T.get(B,p.length),m.init(),p.push(m),Ke(B,te,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(ne,F),H===!0&&C.beginShadows();const ie=_.state.shadowsArray;if(j.render(ie,B,te),H===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),Y.render(m,B),_.setupLights(g.physicallyCorrectLights),te.isArrayCamera){const ee=te.cameras;for(let re=0,we=ee.length;re<we;re++){const Ae=ee[re];ze(m,B,Ae,Ae.viewport)}}else ze(m,B,te);M!==null&&(be.updateMultisampleRenderTarget(M),be.updateRenderTargetMipmap(M)),B.isScene===!0&&B.onAfterRender(g,B,te),Z.resetDefaultState(),E=-1,A=null,y.pop(),y.length>0?_=y[y.length-1]:_=null,p.pop(),p.length>0?m=p[p.length-1]:m=null};function Ke(B,te,ie,ee){if(B.visible===!1)return;if(B.layers.test(te.layers)){if(B.isGroup)ie=B.renderOrder;else if(B.isLOD)B.autoUpdate===!0&&B.update(te);else if(B.isLight)_.pushLight(B),B.castShadow&&_.pushShadow(B);else if(B.isSprite){if(!B.frustumCulled||G.intersectsSprite(B)){ee&&K.setFromMatrixPosition(B.matrixWorld).applyMatrix4(V);const Ae=ke.update(B),Re=B.material;Re.visible&&m.push(B,Ae,Re,ie,K.z,null)}}else if((B.isMesh||B.isLine||B.isPoints)&&(B.isSkinnedMesh&&B.skeleton.frame!==Le.render.frame&&(B.skeleton.update(),B.skeleton.frame=Le.render.frame),!B.frustumCulled||G.intersectsObject(B))){ee&&K.setFromMatrixPosition(B.matrixWorld).applyMatrix4(V);const Ae=ke.update(B),Re=B.material;if(Array.isArray(Re)){const Ce=Ae.groups;for(let Fe=0,Pe=Ce.length;Fe<Pe;Fe++){const De=Ce[Fe],Ge=Re[De.materialIndex];Ge&&Ge.visible&&m.push(B,Ae,Ge,ie,K.z,De)}}else Re.visible&&m.push(B,Ae,Re,ie,K.z,null)}}const we=B.children;for(let Ae=0,Re=we.length;Ae<Re;Ae++)Ke(we[Ae],te,ie,ee)}function ze(B,te,ie,ee){const re=B.opaque,we=B.transmissive,Ae=B.transparent;_.setupLightsView(ie),we.length>0&&Je(re,te,ie),ee&&de.viewport(L.copy(ee)),re.length>0&&Xe(re,te,ie),we.length>0&&Xe(we,te,ie),Ae.length>0&&Xe(Ae,te,ie),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Je(B,te,ie){const ee=ye.isWebGL2;$===null&&($=new WebGLRenderTarget(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")?HalfFloatType:UnsignedByteType,minFilter:LinearMipmapLinearFilter,samples:ee&&r===!0?4:0})),g.getDrawingBufferSize(z),ee?$.setSize(z.x,z.y):$.setSize(floorPowerOfTwo(z.x),floorPowerOfTwo(z.y));const re=g.getRenderTarget();g.setRenderTarget($),g.clear();const we=g.toneMapping;g.toneMapping=NoToneMapping,Xe(B,te,ie),g.toneMapping=we,be.updateMultisampleRenderTarget($),be.updateRenderTargetMipmap($),g.setRenderTarget(re)}function Xe(B,te,ie){const ee=te.isScene===!0?te.overrideMaterial:null;for(let re=0,we=B.length;re<we;re++){const Ae=B[re],Re=Ae.object,Ce=Ae.geometry,Fe=ee===null?Ae.material:ee,Pe=Ae.group;Re.layers.test(ie.layers)&&ht(Re,te,ie,Ce,Fe,Pe)}}function ht(B,te,ie,ee,re,we){B.onBeforeRender(g,te,ie,ee,re,we),B.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,B.matrixWorld),B.normalMatrix.getNormalMatrix(B.modelViewMatrix),re.onBeforeRender(g,te,ie,ee,B,we),re.transparent===!0&&re.side===DoubleSide?(re.side=BackSide,re.needsUpdate=!0,g.renderBufferDirect(ie,te,ee,re,B,we),re.side=FrontSide,re.needsUpdate=!0,g.renderBufferDirect(ie,te,ee,re,B,we),re.side=DoubleSide):g.renderBufferDirect(ie,te,ee,re,B,we),B.onAfterRender(g,te,ie,ee,re,we)}function ot(B,te,ie){te.isScene!==!0&&(te=oe);const ee=Te.get(B),re=_.state.lights,we=_.state.shadowsArray,Ae=re.state.version,Re=O.getParameters(B,re.state,we,te,ie),Ce=O.getProgramCacheKey(Re);let Fe=ee.programs;ee.environment=B.isMeshStandardMaterial?te.environment:null,ee.fog=te.fog,ee.envMap=(B.isMeshStandardMaterial?Ve:Ue).get(B.envMap||ee.environment),Fe===void 0&&(B.addEventListener("dispose",X),Fe=new Map,ee.programs=Fe);let Pe=Fe.get(Ce);if(Pe!==void 0){if(ee.currentProgram===Pe&&ee.lightsStateVersion===Ae)return ut(B,Re),Pe}else Re.uniforms=O.getUniforms(B),B.onBuild(ie,Re,g),B.onBeforeCompile(Re,g),Pe=O.acquireProgram(Re,Ce),Fe.set(Ce,Pe),ee.uniforms=Re.uniforms;const De=ee.uniforms;(!B.isShaderMaterial&&!B.isRawShaderMaterial||B.clipping===!0)&&(De.clippingPlanes=C.uniform),ut(B,Re),ee.needsLights=mt(B),ee.lightsStateVersion=Ae,ee.needsLights&&(De.ambientLightColor.value=re.state.ambient,De.lightProbe.value=re.state.probe,De.directionalLights.value=re.state.directional,De.directionalLightShadows.value=re.state.directionalShadow,De.spotLights.value=re.state.spot,De.spotLightShadows.value=re.state.spotShadow,De.rectAreaLights.value=re.state.rectArea,De.ltc_1.value=re.state.rectAreaLTC1,De.ltc_2.value=re.state.rectAreaLTC2,De.pointLights.value=re.state.point,De.pointLightShadows.value=re.state.pointShadow,De.hemisphereLights.value=re.state.hemi,De.directionalShadowMap.value=re.state.directionalShadowMap,De.directionalShadowMatrix.value=re.state.directionalShadowMatrix,De.spotShadowMap.value=re.state.spotShadowMap,De.spotLightMatrix.value=re.state.spotLightMatrix,De.spotLightMap.value=re.state.spotLightMap,De.pointShadowMap.value=re.state.pointShadowMap,De.pointShadowMatrix.value=re.state.pointShadowMatrix);const Ge=Pe.getUniforms(),et=WebGLUniforms.seqWithValue(Ge.seq,De);return ee.currentProgram=Pe,ee.uniformsList=et,Pe}function ut(B,te){const ie=Te.get(B);ie.outputEncoding=te.outputEncoding,ie.instancing=te.instancing,ie.skinning=te.skinning,ie.morphTargets=te.morphTargets,ie.morphNormals=te.morphNormals,ie.morphColors=te.morphColors,ie.morphTargetsCount=te.morphTargetsCount,ie.numClippingPlanes=te.numClippingPlanes,ie.numIntersection=te.numClipIntersection,ie.vertexAlphas=te.vertexAlphas,ie.vertexTangents=te.vertexTangents,ie.toneMapping=te.toneMapping}function dt(B,te,ie,ee,re){te.isScene!==!0&&(te=oe),be.resetTextureUnits();const we=te.fog,Ae=ee.isMeshStandardMaterial?te.environment:null,Re=M===null?g.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:LinearEncoding,Ce=(ee.isMeshStandardMaterial?Ve:Ue).get(ee.envMap||Ae),Fe=ee.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,Pe=!!ee.normalMap&&!!ie.attributes.tangent,De=!!ie.morphAttributes.position,Ge=!!ie.morphAttributes.normal,et=!!ie.morphAttributes.color,nt=ee.toneMapped?g.toneMapping:NoToneMapping,it=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ze=it!==void 0?it.length:0,Oe=Te.get(ee),rt=_.state.lights;if(H===!0&&(W===!0||B!==A)){const qe=B===A&&ee.id===E;C.setState(ee,B,qe)}let He=!1;ee.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==rt.state.version||Oe.outputEncoding!==Re||re.isInstancedMesh&&Oe.instancing===!1||!re.isInstancedMesh&&Oe.instancing===!0||re.isSkinnedMesh&&Oe.skinning===!1||!re.isSkinnedMesh&&Oe.skinning===!0||Oe.envMap!==Ce||ee.fog===!0&&Oe.fog!==we||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==C.numPlanes||Oe.numIntersection!==C.numIntersection)||Oe.vertexAlphas!==Fe||Oe.vertexTangents!==Pe||Oe.morphTargets!==De||Oe.morphNormals!==Ge||Oe.morphColors!==et||Oe.toneMapping!==nt||ye.isWebGL2===!0&&Oe.morphTargetsCount!==Ze)&&(He=!0):(He=!0,Oe.__version=ee.version);let Ye=Oe.currentProgram;He===!0&&(Ye=ot(ee,te,re));let Qe=!1,at=!1,st=!1;const $e=Ye.getUniforms(),tt=Oe.uniforms;if(de.useProgram(Ye.program)&&(Qe=!0,at=!0,st=!0),ee.id!==E&&(E=ee.id,at=!0),Qe||A!==B){if($e.setValue(Q,"projectionMatrix",B.projectionMatrix),ye.logarithmicDepthBuffer&&$e.setValue(Q,"logDepthBufFC",2/(Math.log(B.far+1)/Math.LN2)),A!==B&&(A=B,at=!0,st=!0),ee.isShaderMaterial||ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshStandardMaterial||ee.envMap){const qe=$e.map.cameraPosition;qe!==void 0&&qe.setValue(Q,K.setFromMatrixPosition(B.matrixWorld))}(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&$e.setValue(Q,"isOrthographic",B.isOrthographicCamera===!0),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial||ee.isShadowMaterial||re.isSkinnedMesh)&&$e.setValue(Q,"viewMatrix",B.matrixWorldInverse)}if(re.isSkinnedMesh){$e.setOptional(Q,re,"bindMatrix"),$e.setOptional(Q,re,"bindMatrixInverse");const qe=re.skeleton;qe&&(ye.floatVertexTextures?(qe.boneTexture===null&&qe.computeBoneTexture(),$e.setValue(Q,"boneTexture",qe.boneTexture,be),$e.setValue(Q,"boneTextureSize",qe.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const lt=ie.morphAttributes;if((lt.position!==void 0||lt.normal!==void 0||lt.color!==void 0&&ye.isWebGL2===!0)&&ae.update(re,ie,ee,Ye),(at||Oe.receiveShadow!==re.receiveShadow)&&(Oe.receiveShadow=re.receiveShadow,$e.setValue(Q,"receiveShadow",re.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(tt.envMap.value=Ce,tt.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),at&&($e.setValue(Q,"toneMappingExposure",g.toneMappingExposure),Oe.needsLights&&pt(tt,st),we&&ee.fog===!0&&w.refreshFogUniforms(tt,we),w.refreshMaterialUniforms(tt,ee,J,U,$),WebGLUniforms.upload(Q,Oe.uniformsList,tt,be)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(WebGLUniforms.upload(Q,Oe.uniformsList,tt,be),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&$e.setValue(Q,"center",re.center),$e.setValue(Q,"modelViewMatrix",re.modelViewMatrix),$e.setValue(Q,"normalMatrix",re.normalMatrix),$e.setValue(Q,"modelMatrix",re.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const qe=ee.uniformsGroups;for(let ct=0,gt=qe.length;ct<gt;ct++)if(ye.isWebGL2){const ft=qe[ct];me.update(ft,Ye),me.bind(ft,Ye)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ye}function pt(B,te){B.ambientLightColor.needsUpdate=te,B.lightProbe.needsUpdate=te,B.directionalLights.needsUpdate=te,B.directionalLightShadows.needsUpdate=te,B.pointLights.needsUpdate=te,B.pointLightShadows.needsUpdate=te,B.spotLights.needsUpdate=te,B.spotLightShadows.needsUpdate=te,B.rectAreaLights.needsUpdate=te,B.hemisphereLights.needsUpdate=te}function mt(B){return B.isMeshLambertMaterial||B.isMeshToonMaterial||B.isMeshPhongMaterial||B.isMeshStandardMaterial||B.isShadowMaterial||B.isShaderMaterial&&B.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(B,te,ie){Te.get(B.texture).__webglTexture=te,Te.get(B.depthTexture).__webglTexture=ie;const ee=Te.get(B);ee.__hasExternalTextures=!0,ee.__hasExternalTextures&&(ee.__autoAllocateDepthBuffer=ie===void 0,ee.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(B,te){const ie=Te.get(B);ie.__webglFramebuffer=te,ie.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(B,te=0,ie=0){M=B,b=te,x=ie;let ee=!0;if(B){const Ce=Te.get(B);Ce.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),ee=!1):Ce.__webglFramebuffer===void 0?be.setupRenderTarget(B):Ce.__hasExternalTextures&&be.rebindTextures(B,Te.get(B.texture).__webglTexture,Te.get(B.depthTexture).__webglTexture)}let re=null,we=!1,Ae=!1;if(B){const Ce=B.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture)&&(Ae=!0);const Fe=Te.get(B).__webglFramebuffer;B.isWebGLCubeRenderTarget?(re=Fe[te],we=!0):ye.isWebGL2&&B.samples>0&&be.useMultisampledRTT(B)===!1?re=Te.get(B).__webglMultisampledFramebuffer:re=Fe,L.copy(B.viewport),D.copy(B.scissor),R=B.scissorTest}else L.copy(P).multiplyScalar(J).floor(),D.copy(N).multiplyScalar(J).floor(),R=q;if(de.bindFramebuffer(36160,re)&&ye.drawBuffers&&ee&&de.drawBuffers(B,re),de.viewport(L),de.scissor(D),de.setScissorTest(R),we){const Ce=Te.get(B.texture);Q.framebufferTexture2D(36160,36064,34069+te,Ce.__webglTexture,ie)}else if(Ae){const Ce=Te.get(B.texture),Fe=te||0;Q.framebufferTextureLayer(36160,36064,Ce.__webglTexture,ie||0,Fe)}E=-1},this.readRenderTargetPixels=function(B,te,ie,ee,re,we,Ae){if(!(B&&B.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Te.get(B).__webglFramebuffer;if(B.isWebGLCubeRenderTarget&&Ae!==void 0&&(Re=Re[Ae]),Re){de.bindFramebuffer(36160,Re);try{const Ce=B.texture,Fe=Ce.format,Pe=Ce.type;if(Fe!==RGBAFormat&&k.convert(Fe)!==Q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=Pe===HalfFloatType&&(fe.has("EXT_color_buffer_half_float")||ye.isWebGL2&&fe.has("EXT_color_buffer_float"));if(Pe!==UnsignedByteType&&k.convert(Pe)!==Q.getParameter(35738)&&!(Pe===FloatType&&(ye.isWebGL2||fe.has("OES_texture_float")||fe.has("WEBGL_color_buffer_float")))&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=B.width-ee&&ie>=0&&ie<=B.height-re&&Q.readPixels(te,ie,ee,re,k.convert(Fe),k.convert(Pe),we)}finally{const Ce=M!==null?Te.get(M).__webglFramebuffer:null;de.bindFramebuffer(36160,Ce)}}},this.copyFramebufferToTexture=function(B,te,ie=0){const ee=Math.pow(2,-ie),re=Math.floor(te.image.width*ee),we=Math.floor(te.image.height*ee);be.setTexture2D(te,0),Q.copyTexSubImage2D(3553,ie,0,0,B.x,B.y,re,we),de.unbindTexture()},this.copyTextureToTexture=function(B,te,ie,ee=0){const re=te.image.width,we=te.image.height,Ae=k.convert(ie.format),Re=k.convert(ie.type);be.setTexture2D(ie,0),Q.pixelStorei(37440,ie.flipY),Q.pixelStorei(37441,ie.premultiplyAlpha),Q.pixelStorei(3317,ie.unpackAlignment),te.isDataTexture?Q.texSubImage2D(3553,ee,B.x,B.y,re,we,Ae,Re,te.image.data):te.isCompressedTexture?Q.compressedTexSubImage2D(3553,ee,B.x,B.y,te.mipmaps[0].width,te.mipmaps[0].height,Ae,te.mipmaps[0].data):Q.texSubImage2D(3553,ee,B.x,B.y,Ae,Re,te.image),ee===0&&ie.generateMipmaps&&Q.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(B,te,ie,ee,re=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const we=B.max.x-B.min.x+1,Ae=B.max.y-B.min.y+1,Re=B.max.z-B.min.z+1,Ce=k.convert(ee.format),Fe=k.convert(ee.type);let Pe;if(ee.isData3DTexture)be.setTexture3D(ee,0),Pe=32879;else if(ee.isDataArrayTexture)be.setTexture2DArray(ee,0),Pe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Q.pixelStorei(37440,ee.flipY),Q.pixelStorei(37441,ee.premultiplyAlpha),Q.pixelStorei(3317,ee.unpackAlignment);const De=Q.getParameter(3314),Ge=Q.getParameter(32878),et=Q.getParameter(3316),nt=Q.getParameter(3315),it=Q.getParameter(32877),Ze=ie.isCompressedTexture?ie.mipmaps[0]:ie.image;Q.pixelStorei(3314,Ze.width),Q.pixelStorei(32878,Ze.height),Q.pixelStorei(3316,B.min.x),Q.pixelStorei(3315,B.min.y),Q.pixelStorei(32877,B.min.z),ie.isDataTexture||ie.isData3DTexture?Q.texSubImage3D(Pe,re,te.x,te.y,te.z,we,Ae,Re,Ce,Fe,Ze.data):ie.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Q.compressedTexSubImage3D(Pe,re,te.x,te.y,te.z,we,Ae,Re,Ce,Ze.data)):Q.texSubImage3D(Pe,re,te.x,te.y,te.z,we,Ae,Re,Ce,Fe,Ze),Q.pixelStorei(3314,De),Q.pixelStorei(32878,Ge),Q.pixelStorei(3316,et),Q.pixelStorei(3315,nt),Q.pixelStorei(32877,it),re===0&&ee.generateMipmaps&&Q.generateMipmap(Pe),de.unbindTexture()},this.initTexture=function(B){B.isCubeTexture?be.setTextureCube(B,0):B.isData3DTexture?be.setTexture3D(B,0):B.isDataArrayTexture?be.setTexture2DArray(B,0):be.setTexture2D(B,0),de.unbindTexture()},this.resetState=function(){b=0,x=0,M=null,de.reset(),Z.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class WebGL1Renderer extends WebGLRenderer{}WebGL1Renderer.prototype.isWebGL1Renderer=!0;class Scene extends Object3D{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class LineBasicMaterial extends Material{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Color(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const _start$1=new Vector3,_end$1=new Vector3,_inverseMatrix$1=new Matrix4,_ray$1=new Ray,_sphere$1=new Sphere;class Line extends Object3D{constructor(e=new BufferGeometry,t=new LineBasicMaterial){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)_start$1.fromBufferAttribute(t,i-1),_end$1.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=_start$1.distanceTo(_end$1);e.setAttribute("lineDistance",new Float32BufferAttribute(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_sphere$1.copy(n.boundingSphere),_sphere$1.applyMatrix4(i),_sphere$1.radius+=r,e.ray.intersectsSphere(_sphere$1)===!1)return;_inverseMatrix$1.copy(i).invert(),_ray$1.copy(e.ray).applyMatrix4(_inverseMatrix$1);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,u=new Vector3,d=new Vector3,m=new Vector3,_=new Vector3,p=this.isLineSegments?2:1,y=n.index,v=n.attributes.position;if(y!==null){const b=Math.max(0,l.start),x=Math.min(y.count,l.start+l.count);for(let M=b,E=x-1;M<E;M+=p){const A=y.getX(M),L=y.getX(M+1);if(u.fromBufferAttribute(v,A),d.fromBufferAttribute(v,L),_ray$1.distanceSqToSegment(u,d,_,m)>c)continue;_.applyMatrix4(this.matrixWorld);const R=e.ray.origin.distanceTo(_);R<e.near||R>e.far||t.push({distance:R,point:m.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const b=Math.max(0,l.start),x=Math.min(v.count,l.start+l.count);for(let M=b,E=x-1;M<E;M+=p){if(u.fromBufferAttribute(v,M),d.fromBufferAttribute(v,M+1),_ray$1.distanceSqToSegment(u,d,_,m)>c)continue;_.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(_);L<e.near||L>e.far||t.push({distance:L,point:m.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,l=i.length;r<l;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const _start=new Vector3,_end=new Vector3;class LineSegments extends Line{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)_start.fromBufferAttribute(t,i),_end.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+_start.distanceTo(_end);e.setAttribute("lineDistance",new Float32BufferAttribute(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class MeshLambertMaterial extends Material{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Color(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Color(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=TangentSpaceNormalMap,this.normalScale=new Vector2(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=MultiplyOperation,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Light extends Object3D{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Color(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _projScreenMatrix$1=new Matrix4,_lightPositionWorld$1=new Vector3,_lookTarget$1=new Vector3;class LightShadow{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vector2(512,512),this.map=null,this.mapPass=null,this.matrix=new Matrix4,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Frustum,this._frameExtents=new Vector2(1,1),this._viewportCount=1,this._viewports=[new Vector4(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;_lightPositionWorld$1.setFromMatrixPosition(e.matrixWorld),t.position.copy(_lightPositionWorld$1),_lookTarget$1.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_lookTarget$1),t.updateMatrixWorld(),_projScreenMatrix$1.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix$1),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_projScreenMatrix$1)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _projScreenMatrix=new Matrix4,_lightPositionWorld=new Vector3,_lookTarget=new Vector3;class PointLightShadow extends LightShadow{constructor(){super(new PerspectiveCamera(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vector2(4,2),this._viewportCount=6,this._viewports=[new Vector4(2,1,1,1),new Vector4(0,1,1,1),new Vector4(3,1,1,1),new Vector4(1,1,1,1),new Vector4(3,0,1,1),new Vector4(1,0,1,1)],this._cubeDirections=[new Vector3(1,0,0),new Vector3(-1,0,0),new Vector3(0,0,1),new Vector3(0,0,-1),new Vector3(0,1,0),new Vector3(0,-1,0)],this._cubeUps=[new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,1,0),new Vector3(0,0,1),new Vector3(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),_lightPositionWorld.setFromMatrixPosition(e.matrixWorld),n.position.copy(_lightPositionWorld),_lookTarget.copy(n.position),_lookTarget.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_lookTarget),n.updateMatrixWorld(),i.makeTranslation(-_lightPositionWorld.x,-_lightPositionWorld.y,-_lightPositionWorld.z),_projScreenMatrix.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_projScreenMatrix)}}class PointLight extends Light{constructor(e,t,n=0,i=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new PointLightShadow}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class AmbientLight extends Light{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const _eyeRight=new Matrix4,_eyeLeft=new Matrix4,_projectionMatrix=new Matrix4;class StereoCamera{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new PerspectiveCamera,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new PerspectiveCamera,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,_projectionMatrix.copy(e.projectionMatrix);const i=t.eyeSep/2,r=i*t.near/t.focus,l=t.near*Math.tan(DEG2RAD*t.fov*.5)/t.zoom;let a,c;_eyeLeft.elements[12]=-i,_eyeRight.elements[12]=i,a=-l*t.aspect+r,c=l*t.aspect+r,_projectionMatrix.elements[0]=2*t.near/(c-a),_projectionMatrix.elements[8]=(c+a)/(c-a),this.cameraL.projectionMatrix.copy(_projectionMatrix),a=-l*t.aspect-r,c=l*t.aspect-r,_projectionMatrix.elements[0]=2*t.near/(c-a),_projectionMatrix.elements[8]=(c+a)/(c-a),this.cameraR.projectionMatrix.copy(_projectionMatrix)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(_eyeLeft),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(_eyeRight)}}class Raycaster{constructor(e,t,n=0,i=1/0){this.ray=new Ray(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Layers,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return intersectObject(e,this,n,t),n.sort(ascSort),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)intersectObject(e[i],this,n,t);return n.sort(ascSort),n}}function ascSort(o,e){return o.distance-e.distance}function intersectObject(o,e,t,n){if(o.layers.test(e.layers)&&o.raycast(e,t),n===!0){const i=o.children;for(let r=0,l=i.length;r<l;r++)intersectObject(i[r],e,t,!0)}}class Spherical{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(clamp(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class GridHelper extends LineSegments{constructor(e=10,t=10,n=4473924,i=8947848){n=new Color(n),i=new Color(i);const r=t/2,l=e/t,a=e/2,c=[],u=[];for(let _=0,p=0,y=-a;_<=t;_++,y+=l){c.push(-a,0,y,a,0,y),c.push(y,0,-a,y,0,a);const g=_===r?n:i;g.toArray(u,p),p+=3,g.toArray(u,p),p+=3,g.toArray(u,p),p+=3,g.toArray(u,p),p+=3}const d=new BufferGeometry;d.setAttribute("position",new Float32BufferAttribute(c,3)),d.setAttribute("color",new Float32BufferAttribute(u,3));const m=new LineBasicMaterial({vertexColors:!0,toneMapped:!1});super(d,m),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Box3Helper extends LineSegments{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new BufferGeometry;r.setIndex(new BufferAttribute(n,1)),r.setAttribute("position",new Float32BufferAttribute(i,3)),super(r,new LineBasicMaterial({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class BoxBufferGeometry extends BoxGeometry{constructor(e,t,n,i,r,l){console.warn("THREE.BoxBufferGeometry has been renamed to THREE.BoxGeometry."),super(e,t,n,i,r,l)}}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:REVISION}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=REVISION);const _changeEvent={type:"change"},_startEvent={type:"start"},_endEvent={type:"end"};class OrbitControls extends EventDispatcher{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:MOUSE.ROTATE,MIDDLE:MOUSE.DOLLY,RIGHT:MOUSE.PAN},this.touches={ONE:TOUCH.ROTATE,TWO:TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",T),this._domElementKeyEvents=k},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(_changeEvent),n.update(),r=i.NONE},this.update=function(){const k=new Vector3,Z=new Quaternion().setFromUnitVectors(e.up,new Vector3(0,1,0)),me=Z.clone().invert(),xe=new Vector3,_e=new Quaternion,Me=2*Math.PI;return function(){const Ie=n.object.position;k.copy(Ie).sub(n.target),k.applyQuaternion(Z),a.setFromVector3(k),n.autoRotate&&r===i.NONE&&I(D()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let X=n.minAzimuthAngle,ve=n.maxAzimuthAngle;return isFinite(X)&&isFinite(ve)&&(X<-Math.PI?X+=Me:X>Math.PI&&(X-=Me),ve<-Math.PI?ve+=Me:ve>Math.PI&&(ve-=Me),X<=ve?a.theta=Math.max(X,Math.min(ve,a.theta)):a.theta=a.theta>(X+ve)/2?Math.max(X,a.theta):Math.min(ve,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),k.setFromSpherical(a),k.applyQuaternion(me),Ie.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),d.set(0,0,0)),u=1,m||xe.distanceToSquared(n.object.position)>l||8*(1-_e.dot(n.object.quaternion))>l?(n.dispatchEvent(_changeEvent),xe.copy(n.object.position),_e.copy(n.object.quaternion),m=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",j),n.domElement.removeEventListener("pointerdown",Ue),n.domElement.removeEventListener("pointercancel",je),n.domElement.removeEventListener("wheel",w),n.domElement.removeEventListener("pointermove",Ve),n.domElement.removeEventListener("pointerup",Be),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",T)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const l=1e-6,a=new Spherical,c=new Spherical;let u=1;const d=new Vector3;let m=!1;const _=new Vector2,p=new Vector2,y=new Vector2,g=new Vector2,v=new Vector2,b=new Vector2,x=new Vector2,M=new Vector2,E=new Vector2,A=[],L={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function R(){return Math.pow(.95,n.zoomSpeed)}function I(k){c.theta-=k}function U(k){c.phi-=k}const J=function(){const k=new Vector3;return function(me,xe){k.setFromMatrixColumn(xe,0),k.multiplyScalar(-me),d.add(k)}}(),ne=function(){const k=new Vector3;return function(me,xe){n.screenSpacePanning===!0?k.setFromMatrixColumn(xe,1):(k.setFromMatrixColumn(xe,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(me),d.add(k)}}(),F=function(){const k=new Vector3;return function(me,xe){const _e=n.domElement;if(n.object.isPerspectiveCamera){const Me=n.object.position;k.copy(Me).sub(n.target);let Ee=k.length();Ee*=Math.tan(n.object.fov/2*Math.PI/180),J(2*me*Ee/_e.clientHeight,n.object.matrix),ne(2*xe*Ee/_e.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(J(me*(n.object.right-n.object.left)/n.object.zoom/_e.clientWidth,n.object.matrix),ne(xe*(n.object.top-n.object.bottom)/n.object.zoom/_e.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(k){n.object.isPerspectiveCamera?u/=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*k)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(k){n.object.isPerspectiveCamera?u*=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/k)),n.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(k){_.set(k.clientX,k.clientY)}function G(k){x.set(k.clientX,k.clientY)}function H(k){g.set(k.clientX,k.clientY)}function W(k){p.set(k.clientX,k.clientY),y.subVectors(p,_).multiplyScalar(n.rotateSpeed);const Z=n.domElement;I(2*Math.PI*y.x/Z.clientHeight),U(2*Math.PI*y.y/Z.clientHeight),_.copy(p),n.update()}function $(k){M.set(k.clientX,k.clientY),E.subVectors(M,x),E.y>0?P(R()):E.y<0&&N(R()),x.copy(M),n.update()}function V(k){v.set(k.clientX,k.clientY),b.subVectors(v,g).multiplyScalar(n.panSpeed),F(b.x,b.y),g.copy(v),n.update()}function z(k){k.deltaY<0?N(R()):k.deltaY>0&&P(R()),n.update()}function K(k){let Z=!1;switch(k.code){case n.keys.UP:F(0,n.keyPanSpeed),Z=!0;break;case n.keys.BOTTOM:F(0,-n.keyPanSpeed),Z=!0;break;case n.keys.LEFT:F(n.keyPanSpeed,0),Z=!0;break;case n.keys.RIGHT:F(-n.keyPanSpeed,0),Z=!0;break}Z&&(k.preventDefault(),n.update())}function oe(){if(A.length===1)_.set(A[0].pageX,A[0].pageY);else{const k=.5*(A[0].pageX+A[1].pageX),Z=.5*(A[0].pageY+A[1].pageY);_.set(k,Z)}}function ce(){if(A.length===1)g.set(A[0].pageX,A[0].pageY);else{const k=.5*(A[0].pageX+A[1].pageX),Z=.5*(A[0].pageY+A[1].pageY);g.set(k,Z)}}function Q(){const k=A[0].pageX-A[1].pageX,Z=A[0].pageY-A[1].pageY,me=Math.sqrt(k*k+Z*Z);x.set(0,me)}function pe(){n.enableZoom&&Q(),n.enablePan&&ce()}function fe(){n.enableZoom&&Q(),n.enableRotate&&oe()}function ye(k){if(A.length==1)p.set(k.pageX,k.pageY);else{const me=ge(k),xe=.5*(k.pageX+me.x),_e=.5*(k.pageY+me.y);p.set(xe,_e)}y.subVectors(p,_).multiplyScalar(n.rotateSpeed);const Z=n.domElement;I(2*Math.PI*y.x/Z.clientHeight),U(2*Math.PI*y.y/Z.clientHeight),_.copy(p)}function de(k){if(A.length===1)v.set(k.pageX,k.pageY);else{const Z=ge(k),me=.5*(k.pageX+Z.x),xe=.5*(k.pageY+Z.y);v.set(me,xe)}b.subVectors(v,g).multiplyScalar(n.panSpeed),F(b.x,b.y),g.copy(v)}function Le(k){const Z=ge(k),me=k.pageX-Z.x,xe=k.pageY-Z.y,_e=Math.sqrt(me*me+xe*xe);M.set(0,_e),E.set(0,Math.pow(M.y/x.y,n.zoomSpeed)),P(E.y),x.copy(M)}function Te(k){n.enableZoom&&Le(k),n.enablePan&&de(k)}function be(k){n.enableZoom&&Le(k),n.enableRotate&&ye(k)}function Ue(k){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",Ve),n.domElement.addEventListener("pointerup",Be)),Y(k),k.pointerType==="touch"?S(k):ke(k))}function Ve(k){n.enabled!==!1&&(k.pointerType==="touch"?C(k):O(k))}function Be(k){ae(k),A.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",Ve),n.domElement.removeEventListener("pointerup",Be)),n.dispatchEvent(_endEvent),r=i.NONE}function je(k){ae(k)}function ke(k){let Z;switch(k.button){case 0:Z=n.mouseButtons.LEFT;break;case 1:Z=n.mouseButtons.MIDDLE;break;case 2:Z=n.mouseButtons.RIGHT;break;default:Z=-1}switch(Z){case MOUSE.DOLLY:if(n.enableZoom===!1)return;G(k),r=i.DOLLY;break;case MOUSE.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;H(k),r=i.PAN}else{if(n.enableRotate===!1)return;q(k),r=i.ROTATE}break;case MOUSE.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;q(k),r=i.ROTATE}else{if(n.enablePan===!1)return;H(k),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(_startEvent)}function O(k){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;W(k);break;case i.DOLLY:if(n.enableZoom===!1)return;$(k);break;case i.PAN:if(n.enablePan===!1)return;V(k);break}}function w(k){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(k.preventDefault(),n.dispatchEvent(_startEvent),z(k),n.dispatchEvent(_endEvent))}function T(k){n.enabled===!1||n.enablePan===!1||K(k)}function S(k){switch(le(k),A.length){case 1:switch(n.touches.ONE){case TOUCH.ROTATE:if(n.enableRotate===!1)return;oe(),r=i.TOUCH_ROTATE;break;case TOUCH.PAN:if(n.enablePan===!1)return;ce(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case TOUCH.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;pe(),r=i.TOUCH_DOLLY_PAN;break;case TOUCH.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;fe(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(_startEvent)}function C(k){switch(le(k),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(k),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;de(k),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(k),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(k),n.update();break;default:r=i.NONE}}function j(k){n.enabled!==!1&&k.preventDefault()}function Y(k){A.push(k)}function ae(k){delete L[k.pointerId];for(let Z=0;Z<A.length;Z++)if(A[Z].pointerId==k.pointerId){A.splice(Z,1);return}}function le(k){let Z=L[k.pointerId];Z===void 0&&(Z=new Vector2,L[k.pointerId]=Z),Z.set(k.pageX,k.pageY)}function ge(k){const Z=k.pointerId===A[0].pointerId?A[1]:A[0];return L[Z.pointerId]}n.domElement.addEventListener("contextmenu",j),n.domElement.addEventListener("pointerdown",Ue),n.domElement.addEventListener("pointercancel",je),n.domElement.addEventListener("wheel",w,{passive:!1}),this.update()}}var commonjsGlobal=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function commonjsRequire(o){throw new Error('Could not dynamically require "'+o+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var mirada_min={exports:{}};(function(module,exports){(function(o){module.exports=o()})(function(){return function(){function o(e,t,n){function i(a,c){if(!t[a]){if(!e[a]){var u=typeof commonjsRequire=="function"&&commonjsRequire;if(!c&&u)return u(a,!0);if(r)return r(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var m=t[a]={exports:{}};e[a][0].call(m.exports,function(_){var p=e[a][1][_];return i(p||_)},m,m.exports,o,e,t,n)}return t[a].exports}for(var r=typeof commonjsRequire=="function"&&commonjsRequire,l=0;l<n.length;l++)i(n[l]);return i}return o}()({1:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function i(r,l,a){this.videoInput=r,this.outputCanvas=l,this.callback=a,this.streaming=!1,this.onVideoCanPlay=this.onVideoCanPlay.bind(this),this.onVideoStarted=this.onVideoStarted.bind(this),this.onVideoStopped=this.onVideoStopped.bind(this)}return i.prototype.start=function(){this.streaming||this.startCamera("qvga",this.onVideoStarted,this.videoInput)},i.prototype.stop=function(){this.streaming&&(this.stopCamera(),this.onVideoStopped())},i.prototype.startCamera=function(r,l,a){var c=this;navigator.mediaDevices.getUserMedia({video:a,audio:!1}).then(function(u){a.srcObject=u,a.play(),c.videoInput=a,c.stream=u,c.onCameraStartedCallback=l,a.addEventListener("canplay",c.onVideoCanPlay,!1)}).catch(function(u){console.error(u)})},i.prototype.stopCamera=function(){this.videoInput&&(this.videoInput.pause(),this.videoInput.srcObject=null,this.videoInput.removeEventListener("canplay",this.onVideoCanPlay)),this.stream&&this.stream.getVideoTracks().forEach(function(r){return r.stop()})},i.prototype.onVideoStarted=function(){this.streaming=!0,this.outputCanvas.width=this.videoInput.videoWidth,this.outputCanvas.height=this.videoInput.videoHeight,this.callback()},i.prototype.onVideoStopped=function(){this.streaming=!1,this.outputCanvas.getContext("2d").clearRect(0,0,this.outputCanvas.width,this.outputCanvas.height),this.stopCamera()},i.prototype.onVideoCanPlay=function(){this.onCameraStartedCallback&&this.onCameraStartedCallback(this.stream,this.videoInput)},i}();t.CameraHelper=n},{}],2:[function(o,e,t){var n=this&&this.__assign||function(){return n=Object.assign||function(_){for(var p,y=1,g=arguments.length;y<g;y++){p=arguments[y];for(var v in p)Object.prototype.hasOwnProperty.call(p,v)&&(_[v]=p[v])}return _},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=o("../util/base64"),r=o("../util/imageUtil"),l=o("./imageCreation"),a={};function c(_,p,y){y===void 0&&(y=a),y=n(n({},a),y);var g=i.arrayBufferToUrl(_,p,y.name),v=new Image;return new Promise(function(b){v.onload=function(){y.canvas||(y.canvas=document.createElement("canvas"),y.appendToBody&&document.body.append(y.canvas)),y.canvas.setAttribute("width",v.naturalWidth+""),y.canvas.setAttribute("height",v.naturalHeight+""),y.canvas.getContext("2d").drawImage(v,0,0),b({canvas:y.canvas,width:v.naturalWidth,height:v.naturalHeight})},v.onerror=function(x){console.log("ERROR",x)},v.src=g})}t.renderArrayBufferInCanvas=c;function u(_,p){return p===void 0&&(p=a),new Promise(function(y){var g=new Image;g.style.display="none",g.onerror=function(v){console.log("ERROR",v),y(void 0)},g.onload=function(v){p.canvas||(p.canvas=document.createElement("canvas"),p.appendToBody&&document.body.append(p.canvas)),p.canvas.setAttribute("width",(g.width||500)+""),p.canvas.setAttribute("height",(g.height||500)+""),p.canvas.getContext("2d").drawImage(g,0,0),y({canvas:p.canvas,width:g.naturalWidth,height:g.naturalHeight}),g.remove()},document.body.append(g),g.src=i.dataToUrl(_,"image/svg+xml",p.name||"image.svg")})}t.renderSvgInCanvas=u;var d={rgba:!0,forceSameSize:!0};function m(_,p){p=n(n({},d),p),p.canvas||(p.canvas=document.createElement("canvas"),p.appendToBody&&!p.canvas.isConnected&&document.body.append(p.canvas));var y=p.rgba?r.toRgba(_):_,g=l.asHtmlImageData(y),v=p.canvas.getContext("2d");return p.clear&&v.clearRect(0,0,p.canvas.width,p.canvas.height),p.forceSameSize?(p.canvas.width=g.width,p.canvas.height=g.height,v.putImageData(g,0,0,0,0,g.width,g.height)):p.region?v.putImageData(g,p.region.x,p.region.y,p.region.x,p.region.y,p.region.width,p.region.height):v.putImageData(g,0,0),p.rgba&&y.delete(),p.canvas}t.renderInCanvas=m},{"../util/base64":58,"../util/imageUtil":61,"./imageCreation":3}],3:[function(o,e,t){var n=this&&this.__awaiter||function(d,m,_,p){function y(g){return g instanceof _?g:new _(function(v){v(g)})}return new(_||(_=Promise))(function(g,v){function b(E){try{M(p.next(E))}catch(A){v(A)}}function x(E){try{M(p.throw(E))}catch(A){v(A)}}function M(E){E.done?g(E.value):y(E.value).then(b,x)}M((p=p.apply(d,m||[])).next())})},i=this&&this.__generator||function(d,m){var _={label:0,sent:function(){if(g[0]&1)throw g[1];return g[1]},trys:[],ops:[]},p,y,g,v;return v={next:b(0),throw:b(1),return:b(2)},typeof Symbol=="function"&&(v[Symbol.iterator]=function(){return this}),v;function b(M){return function(E){return x([M,E])}}function x(M){if(p)throw new TypeError("Generator is already executing.");for(;_;)try{if(p=1,y&&(g=M[0]&2?y.return:M[0]?y.throw||((g=y.return)&&g.call(y),0):y.next)&&!(g=g.call(y,M[1])).done)return g;switch(y=0,g&&(M=[M[0]&2,g.value]),M[0]){case 0:case 1:g=M;break;case 4:return _.label++,{value:M[1],done:!1};case 5:_.label++,y=M[1],M=[0];continue;case 7:M=_.ops.pop(),_.trys.pop();continue;default:if(g=_.trys,!(g=g.length>0&&g[g.length-1])&&(M[0]===6||M[0]===2)){_=0;continue}if(M[0]===3&&(!g||M[1]>g[0]&&M[1]<g[3])){_.label=M[1];break}if(M[0]===6&&_.label<g[1]){_.label=g[1],g=M;break}if(g&&_.label<g[2]){_.label=g[2],_.ops.push(M);break}g[2]&&_.ops.pop(),_.trys.pop();continue}M=m.call(d,_)}catch(E){M=[6,E],y=0}finally{p=g=0}if(M[0]&5)throw M[1];return{value:M[0]?M[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var r=o("../file"),l=o("../util/imageUtil");function a(d){return n(this,void 0,void 0,function(){var m;return i(this,function(_){switch(_.label){case 0:return[4,r.File.fromHtmlFileInputElement(d)];case 1:return m=_.sent(),[2,m.map(function(p){return p.asMat()})]}})})}t.fromInputFileElement=a;function c(d){return new Promise(function(m,_){var p=new Image;p.onload=function(y){var g=document.createElement("canvas");g.width=p.width,g.height=p.height;var v=g.getContext("2d");v.drawImage(p,0,0,p.width,p.height);var b=v.getImageData(0,0,g.width,g.height);m(b)},p.onerror=_,p.src=d})}t.fetchImageData=c;function u(d){var m=l.toImageData(d),_=new ImageData(m.data,m.width,m.height);return _}t.asHtmlImageData=u},{"../file":6,"../util/imageUtil":61}],4:[function(o,e,t){var n=this&&this.__assign||function(){return n=Object.assign||function(p){for(var y,g=1,v=arguments.length;g<v;g++){y=arguments[g];for(var b in y)Object.prototype.hasOwnProperty.call(y,b)&&(p[b]=y[b])}return p},n.apply(this,arguments)},i=this&&this.__importStar||function(p){if(p&&p.__esModule)return p;var y={};if(p!=null)for(var g in p)Object.hasOwnProperty.call(p,g)&&(y[g]=p[g]);return y.default=p,y};Object.defineProperty(t,"__esModule",{value:!0});var r=i(o("./cameraHelper")),l=i(o("./canvasRender")),a=i(o("./imageCreation")),c=i(o("./videoReader")),u=o("./cameraHelper");t.CameraHelper=u.CameraHelper;var d=o("./canvasRender");t.renderArrayBufferInCanvas=d.renderArrayBufferInCanvas,t.renderInCanvas=d.renderInCanvas;var m=o("./imageCreation");t.getHtmlImageData=m.asHtmlImageData,t.fetchImageData=m.fetchImageData,t.fromInputFileElement=m.fromInputFileElement;var _=o("./videoReader");t.VideoReader=_.VideoReader,t.browser=n(n(n(n({},l),r),a),c)},{"./cameraHelper":1,"./canvasRender":2,"./imageCreation":3,"./videoReader":5}],5:[function(o,e,t){var n=this&&this.__assign||function(){return n=Object.assign||function(l){for(var a,c=1,u=arguments.length;c<u;c++){a=arguments[c];for(var d in a)Object.prototype.hasOwnProperty.call(a,d)&&(l[d]=a[d])}return l},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});var i=o("../util"),r=function(){function l(a,c,u){u===void 0&&(u=l.defaultOptions),this.video=a,this.canvas=c,this.o=u,this.mat=null,this.streaming=!1,this.o=n(n({},l.defaultOptions),u),this.ctx=c.getContext("2d"),this.size=this.getSize()}return l.prototype.read=function(){this.o.noMatCheck||this.matCheck(),this.ctx.drawImage(this.video,0,0,this.size.width,this.size.height),this.mat.data.set(this.ctx.getImageData(0,0,this.size.width,this.size.height).data)},l.prototype.canPlay=function(){var a=this,c={audio:!1,video:!0};return new Promise(function(u){a.video.addEventListener("canplay",function(){var d=a.getSize();a.canvas.width=d.width,a.canvas.height=d.height,a.mat=new cv.Mat(d.height,d.width,cv.CV_8UC4),a.streaming=!0,u()},!1),navigator.mediaDevices.getUserMedia(c).then(function(d){a.stream=a.video.srcObject=d})})},l.prototype.stop=function(){this.stream&&(this.stream.getVideoTracks().forEach(function(a){return a.stop()}),this.streaming=!1,i.del(this.mat))},l.prototype.getSize=function(){return this.size||(this.size=this.o.size==="videoSize"?{width:this.video.videoWidth,height:this.video.videoHeight}:this.o.size==="video"?{width:this.video.width,height:this.video.height}:{width:this.canvas.width,height:this.canvas.height}),this.size},l.prototype.matCheck=function(){if(!(this.mat instanceof cv.Mat))throw new Error("Please input the valid cv.Mat instance.");if(this.mat.type()!==cv.CV_8UC4)throw new Error("Bad type of input mat: the type should be cv.CV_8UC4.");if(this.mat.cols!==this.size.width||this.mat.rows!==this.size.height)throw new Error("Bad size of input mat: the size should be same as the video.")},l.defaultOptions={size:"canvas",constraints:{audio:!1,video:!0}},l}();t.VideoReader=r},{"../util":62}],6:[function(o,e,t){(function(n){var i=this&&this.__awaiter||function(b,x,M,E){function A(L){return L instanceof M?L:new M(function(D){D(L)})}return new(M||(M=Promise))(function(L,D){function R(J){try{U(E.next(J))}catch(ne){D(ne)}}function I(J){try{U(E.throw(J))}catch(ne){D(ne)}}function U(J){J.done?L(J.value):A(J.value).then(R,I)}U((E=E.apply(b,x||[])).next())})},r=this&&this.__generator||function(b,x){var M={label:0,sent:function(){if(L[0]&1)throw L[1];return L[1]},trys:[],ops:[]},E,A,L,D;return D={next:R(0),throw:R(1),return:R(2)},typeof Symbol=="function"&&(D[Symbol.iterator]=function(){return this}),D;function R(U){return function(J){return I([U,J])}}function I(U){if(E)throw new TypeError("Generator is already executing.");for(;M;)try{if(E=1,A&&(L=U[0]&2?A.return:U[0]?A.throw||((L=A.return)&&L.call(A),0):A.next)&&!(L=L.call(A,U[1])).done)return L;switch(A=0,L&&(U=[U[0]&2,L.value]),U[0]){case 0:case 1:L=U;break;case 4:return M.label++,{value:U[1],done:!1};case 5:M.label++,A=U[1],U=[0];continue;case 7:U=M.ops.pop(),M.trys.pop();continue;default:if(L=M.trys,!(L=L.length>0&&L[L.length-1])&&(U[0]===6||U[0]===2)){M=0;continue}if(U[0]===3&&(!L||U[1]>L[0]&&U[1]<L[3])){M.label=U[1];break}if(U[0]===6&&M.label<L[1]){M.label=L[1],L=U;break}if(L&&M.label<L[2]){M.label=L[2],M.ops.push(U);break}L[2]&&M.ops.pop(),M.trys.pop();continue}U=x.call(b,M)}catch(J){U=[6,J],A=0}finally{E=L=0}if(U[0]&5)throw U[1];return{value:U[0]?U[1]:void 0,done:!0}}},l=this&&this.__importDefault||function(b){return b&&b.__esModule?b:{default:b}};Object.defineProperty(t,"__esModule",{value:!0});var a=o("assert"),c=l(o("cross-fetch")),u=o("misc-utils-of-mine-generic"),d=o("./browser/imageCreation"),m=o("./format"),_=o("./util/base64"),p=o("./util/fileUtil"),y=o("./util/imageUtil"),g=o("file-type"),v=function(){function b(x,M){this.name=x,this._mat=M}return b.prototype.size=function(){return{width:this._mat.cols,height:this._mat.rows}},b.prototype.getMimeType=function(){return u.getMimeTypeForExtension(this.getExtension())},b.prototype.getExtension=function(){return u.getFileExtension(this.name).toLowerCase()},b.prototype.asMat=function(){return this._mat},b.prototype.asImageData=function(){return y.toImageData(this._mat)},b.prototype.asHTMLImageData=function(){return d.asHtmlImageData(this._mat)},b.prototype.asDataUrl=function(){return"data:"+this.getMimeType()+";"+this.name+";base64,"+this.asBase64()},Object.defineProperty(b.prototype,"width",{get:function(){return this._mat.cols},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"height",{get:function(){return this._mat.rows},enumerable:!0,configurable:!0}),Object.defineProperty(b.prototype,"mat",{get:function(){return this._mat},enumerable:!0,configurable:!0}),b.prototype.remove=function(x){return x===void 0&&(x=!0),x&&this.delete(),this.name&&p.isFile(this.name)&&p.removeFile(this.name),this},b.prototype.asArrayBuffer=function(x){return x===void 0&&(x=this.getExtension()),i(this,void 0,void 0,function(){return r(this,function(M){switch(M.label){case 0:return[4,m.encodeOrThrow(this.asImageData(),x)];case 1:return[2,M.sent()]}})})},b.prototype.write=function(x,M){return x===void 0&&(x=this.name),M===void 0&&(M=this.getExtension()),i(this,void 0,void 0,function(){var E;return r(this,function(A){switch(A.label){case 0:return[4,this.asArrayBuffer(M)];case 1:return E=A.sent(),p.writeFile(x,new Uint8ClampedArray(E)),[2,this]}})})},b.prototype.setMat=function(x){return this.delete(),this._mat=x,this},b.prototype.show=function(x){return cv.imshow(x,this.asMat()),this},b.prototype.asBase64=function(x){return x===void 0&&(x=this.getExtension()),i(this,void 0,void 0,function(){var M;return r(this,function(E){switch(E.label){case 0:return[4,this.asArrayBuffer(x)];case 1:return M=E.sent(),[2,_.arrayBufferToBase64(M)]}})})},b.prototype.delete=function(){try{this._mat&&this._mat.delete()}catch{}},b.prototype.toRgba=function(){var x=y.toRgba(this.mat);return this.mat.delete(),this._mat=x,this},b.prototype.clone=function(x){return x===void 0&&(x=this.name),b.fromMat(this.mat.clone(),x)},b.fromBase64=function(x,M){var E=n.from(x,"base64");return b.fromArrayBuffer(E,M||b.getBufferFileName(E))},b.fromArrayBuffer=function(x,M){return i(this,void 0,void 0,function(){var E,A,L;return r(this,function(D){switch(D.label){case 0:return D.trys.push([0,2,,3]),M=M||b.getBufferFileName(x),E=u.getFileExtension(M),[4,m.decodeOrThrow(x,E)];case 1:return A=D.sent(),[2,b.fromData(A,M)];case 2:throw L=D.sent(),console.error(L),L;case 3:return[2]}})})},b.fromArrayBufferView=function(x,M){return i(this,void 0,void 0,function(){return r(this,function(E){return[2,b.fromArrayBuffer(x.buffer,M)]})})},b.getBufferFileType=function(x){var M=b.fileType(x);if(!M)throw new Error("Could not get file type for buffer");return M},b.fileType=function(x){var M=g(x);if(!M){var E=_.arrayBufferToString(x);E.includes("<svg")&&(M={ext:"svg",mime:"image/svg+xml"})}return M},b.getBufferFileName=function(x){var M=b.getBufferFileType(x);return u.unique("file")+M.ext},b.fromDataUrl=function(x,M){return i(this,void 0,void 0,function(){return r(this,function(E){switch(E.label){case 0:return[4,b.fromBase64(_.urlToBase64(x),M)];case 1:return[2,E.sent()]}})})},b.fromHtmlFileInputElement=function(x){var M=this;if(!u.inBrowser())throw new Error("This method is only supported in the browser");return Promise.all(Array.from(x.files).map(function(E){return new Promise(function(A,L){var D=new FileReader;D.addEventListener("loadend",function(R){return i(M,void 0,void 0,function(){var I;return r(this,function(U){switch(U.label){case 0:return I=A,[4,b.fromArrayBuffer(D.result,E.name)];case 1:return[2,I.apply(void 0,[U.sent()])]}})})}),D.readAsArrayBuffer(E)})}))},b.fromCanvas=function(x){if(!u.inBrowser())throw new Error("This method is only supported in the browser");return b.fromMat(cv.imread(x))},b.resolveOne=function(x){return i(this,void 0,void 0,function(){var M;return r(this,function(E){switch(E.label){case 0:return[4,b.resolve(x)];case 1:return M=E.sent(),[2,M.length>0?M[0]:void 0]}})})},b.resolve=function(x){return i(this,void 0,void 0,function(){var M,E,A=this;return r(this,function(L){switch(L.label){case 0:return M=u.asArray(x||[]).filter(u.notUndefined),[4,u.serial(M.map(function(D){return function(){return i(A,void 0,void 0,function(){return r(this,function(R){switch(R.label){case 0:return typeof D!="string"?[3,5]:p.isFile(D)?[4,b.fromFile(D)]:[3,2];case 1:return[2,R.sent()];case 2:return[4,b.fromUrl(D)];case 3:return[2,R.sent()];case 4:return[3,6];case 5:return a.ok(ArrayBuffer.isView(D._mat.data.buffer)),[2,D];case 6:return[2]}})})}}))];case 1:return E=L.sent(),[2,E.filter(u.notUndefined)]}})})},b.isFile=function(x){return!!x&&!!x.name&&!!x._mat&&!!x._mat.data&&typeof x.constructor!="undefined"&&!!x.asImageData&&!!x.asMat},b.asPath=function(x){return typeof x=="string"?x:x.name},b.fromData=function(x,M){return new b(b._buildName(M),cv.matFromImageData(x))},b._buildName=function(x){return x||u.unique("file")+".png"},b.fromMat=function(x,M){return new b(b._buildName(M),x)},b.prototype.toString=function(){return'[File "'+this.name+'"]'},b.fromUrl=function(x,M){return M===void 0&&(M={}),i(this,void 0,void 0,function(){var E,A,L;return r(this,function(D){switch(D.label){case 0:return m.getDefaultCodec(),[4,c.default(x)];case 1:return E=D.sent(),[4,E.arrayBuffer()];case 2:return A=D.sent(),[4,m.decodeOrThrow(A)];case 3:return L=D.sent(),[2,b.fromData(L,M.name||u.getFileNameFromUrl(x))]}})})},b.fromFile=function(x,M){return M===void 0&&(M=u.basename(x)),i(this,void 0,void 0,function(){var E;return r(this,function(A){switch(A.label){case 0:return[4,m.decodeOrThrow(p.readFile(x).buffer)];case 1:return E=A.sent(),[2,b.fromData(E,M)]}})})},b}();t.File=v}).call(this,o("buffer").Buffer)},{"./browser/imageCreation":3,"./format":9,"./util/base64":58,"./util/fileUtil":59,"./util/imageUtil":61,assert:64,buffer:70,"cross-fetch":71,"file-type":72,"misc-utils-of-mine-generic":92}],7:[function(o,e,t){var n=this&&this.__awaiter||function(d,m,_,p){function y(g){return g instanceof _?g:new _(function(v){v(g)})}return new(_||(_=Promise))(function(g,v){function b(E){try{M(p.next(E))}catch(A){v(A)}}function x(E){try{M(p.throw(E))}catch(A){v(A)}}function M(E){E.done?g(E.value):y(E.value).then(b,x)}M((p=p.apply(d,m||[])).next())})},i=this&&this.__generator||function(d,m){var _={label:0,sent:function(){if(g[0]&1)throw g[1];return g[1]},trys:[],ops:[]},p,y,g,v;return v={next:b(0),throw:b(1),return:b(2)},typeof Symbol=="function"&&(v[Symbol.iterator]=function(){return this}),v;function b(M){return function(E){return x([M,E])}}function x(M){if(p)throw new TypeError("Generator is already executing.");for(;_;)try{if(p=1,y&&(g=M[0]&2?y.return:M[0]?y.throw||((g=y.return)&&g.call(y),0):y.next)&&!(g=g.call(y,M[1])).done)return g;switch(y=0,g&&(M=[M[0]&2,g.value]),M[0]){case 0:case 1:g=M;break;case 4:return _.label++,{value:M[1],done:!1};case 5:_.label++,y=M[1],M=[0];continue;case 7:M=_.ops.pop(),_.trys.pop();continue;default:if(g=_.trys,!(g=g.length>0&&g[g.length-1])&&(M[0]===6||M[0]===2)){_=0;continue}if(M[0]===3&&(!g||M[1]>g[0]&&M[1]<g[3])){_.label=M[1];break}if(M[0]===6&&_.label<g[1]){_.label=g[1],g=M;break}if(g&&_.label<g[2]){_.label=g[2],_.ops.push(M);break}g[2]&&_.ops.pop(),_.trys.pop();continue}M=m.call(d,_)}catch(E){M=[6,E],y=0}finally{p=g=0}if(M[0]&5)throw M[1];return{value:M[0]?M[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var r=o("misc-utils-of-mine-generic"),l=o("../browser/canvasRender"),a=o("../file"),c=o("../util/base64"),u=function(){function d(){}return d.prototype.decode=function(m,_){return n(this,void 0,void 0,function(){var p,y,g,v,b,x,M;return i(this,function(E){switch(E.label){case 0:return y=_?r.getMimeTypeForExtension(_):(p=a.File.fileType(m))&&p.mime||void 0,y?y!=="image/svg+xml"?[3,2]:[4,l.renderSvgInCanvas(c.arrayBufferToString(m))]:[2];case 1:return M=E.sent(),[3,4];case 2:return[4,l.renderArrayBufferInCanvas(m,y)];case 3:M=E.sent(),E.label=4;case 4:return g=M,v=g.canvas,b=g.height,x=g.width,[2,v.getContext("2d").getImageData(0,0,x,b)]}})})},d.prototype.encode=function(m,_,p){return n(this,void 0,void 0,function(){var y,g;return i(this,function(v){try{return y=cv.matFromImageData(m),g=l.renderInCanvas(y,{forceSameSize:!0,rgba:!0}),y.delete(),[2,new Promise(function(b,x){g.toBlob(function(M){if(!M)return b(void 0);var E=new FileReader;E.onloadend=function(A){b(E.result||void 0)},E.onerror=E.onabort=function(){E.error?x(E.error):b(void 0)},E.readAsArrayBuffer(M)},r.getMimeTypeForExtension(_)||"image/png",p)})]}catch(b){console.error(b)}return[2]})})},d}();t.CanvasCodec=u},{"../browser/canvasRender":2,"../file":6,"../util/base64":58,"misc-utils-of-mine-generic":92}],8:[function(o,e,t){var n=this&&this.__awaiter||function(x,M,E,A){function L(D){return D instanceof E?D:new E(function(R){R(D)})}return new(E||(E=Promise))(function(D,R){function I(ne){try{J(A.next(ne))}catch(F){R(F)}}function U(ne){try{J(A.throw(ne))}catch(F){R(F)}}function J(ne){ne.done?D(ne.value):L(ne.value).then(I,U)}J((A=A.apply(x,M||[])).next())})},i=this&&this.__generator||function(x,M){var E={label:0,sent:function(){if(D[0]&1)throw D[1];return D[1]},trys:[],ops:[]},A,L,D,R;return R={next:I(0),throw:I(1),return:I(2)},typeof Symbol=="function"&&(R[Symbol.iterator]=function(){return this}),R;function I(J){return function(ne){return U([J,ne])}}function U(J){if(A)throw new TypeError("Generator is already executing.");for(;E;)try{if(A=1,L&&(D=J[0]&2?L.return:J[0]?L.throw||((D=L.return)&&D.call(L),0):L.next)&&!(D=D.call(L,J[1])).done)return D;switch(L=0,D&&(J=[J[0]&2,D.value]),J[0]){case 0:case 1:D=J;break;case 4:return E.label++,{value:J[1],done:!1};case 5:E.label++,L=J[1],J=[0];continue;case 7:J=E.ops.pop(),E.trys.pop();continue;default:if(D=E.trys,!(D=D.length>0&&D[D.length-1])&&(J[0]===6||J[0]===2)){E=0;continue}if(J[0]===3&&(!D||J[1]>D[0]&&J[1]<D[3])){E.label=J[1];break}if(J[0]===6&&E.label<D[1]){E.label=D[1],D=J;break}if(D&&E.label<D[2]){E.label=D[2],E.ops.push(J);break}D[2]&&E.ops.pop(),E.trys.pop();continue}J=M.call(x,E)}catch(ne){J=[6,ne],L=0}finally{A=D=0}if(J[0]&5)throw J[1];return{value:J[0]?J[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var r=o("misc-utils-of-mine-generic"),l=o("../file");function a(x){return n(this,void 0,void 0,function(){return i(this,function(M){return u.push(x),[2]})})}t.installFormatProxy=a;function c(){return n(this,void 0,void 0,function(){return i(this,function(x){return u.length=0,[2]})})}t.unInstallFormatProxies=c;var u=[],d=[],m=!1;function _(x){return n(this,void 0,void 0,function(){var M;return i(this,function(E){switch(E.label){case 0:return typeof x!="function"?[3,2]:[4,x()];case 1:return M=E.sent(),[3,4];case 2:return[4,x.create()];case 3:M=E.sent(),E.label=4;case 4:return[2,M]}})})}function p(){return n(this,void 0,void 0,function(){var x,M=this;return i(this,function(E){switch(E.label){case 0:return m?[3,3]:(m=!0,x=u.length,x?[4,r.serial(u.map(function(A){return function(){return n(M,void 0,void 0,function(){var L;return i(this,function(D){switch(D.label){case 0:return[4,_(A)];case 1:return L=D.sent(),d.push(L),[2]}})})}}))]:[3,2]);case 1:x=E.sent(),E.label=2;case 2:E.label=3;case 3:return[2]}})})}t.loadFormatProxies=p;function y(){d.length=0}t.unloadFormatProxies=y;function g(){var x=d.length?d[0]:void 0;if(!x)throw new Error("No codec found. you need to provide a proxy and wait for loadFormatProxies()");return x}t.getDefaultCodec=g;function v(x,M){return n(this,void 0,void 0,function(){var E;return i(this,function(A){switch(A.label){case 0:return[4,g().decode(x,M)];case 1:return E=A.sent(),r.checkThrow(E,"Fail to decode buffer. "+(M?"requested format: "+M:"")+". Detected format: "+(l.File.getBufferFileType(x)&&l.File.getBufferFileType(x).mime||"unknown")),[2,E]}})})}t.decodeOrThrow=v;function b(x,M,E){return n(this,void 0,void 0,function(){var A;return i(this,function(L){switch(L.label){case 0:return[4,g().encode(x,M,E)];case 1:return A=L.sent(),r.checkThrow(A,"Fail to encode to requested format "+M+". Given: "+M),[2,A]}})})}t.encodeOrThrow=b},{"../file":6,"misc-utils-of-mine-generic":92}],9:[function(o,e,t){var n=this&&this.__assign||function(){return n=Object.assign||function(u){for(var d,m=1,_=arguments.length;m<_;m++){d=arguments[m];for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&(u[p]=d[p])}return u},n.apply(this,arguments)};function i(u){for(var d in u)t.hasOwnProperty(d)||(t[d]=u[d])}var r=this&&this.__importStar||function(u){if(u&&u.__esModule)return u;var d={};if(u!=null)for(var m in u)Object.hasOwnProperty.call(u,m)&&(d[m]=u[m]);return d.default=u,d};Object.defineProperty(t,"__esModule",{value:!0}),i(o("./canvasCodec")),i(o("./format")),i(o("./jimpCodec"));var l=r(o("./canvasCodec")),a=r(o("./format")),c=r(o("./jimpCodec"));t.format=n(n(n({},l),a),c)},{"./canvasCodec":7,"./format":8,"./jimpCodec":10}],10:[function(o,e,t){(function(n){var i=this&&this.__assign||function(){return i=Object.assign||function(u){for(var d,m=1,_=arguments.length;m<_;m++){d=arguments[m];for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&(u[p]=d[p])}return u},i.apply(this,arguments)},r=this&&this.__awaiter||function(u,d,m,_){function p(y){return y instanceof m?y:new m(function(g){g(y)})}return new(m||(m=Promise))(function(y,g){function v(M){try{x(_.next(M))}catch(E){g(E)}}function b(M){try{x(_.throw(M))}catch(E){g(E)}}function x(M){M.done?y(M.value):p(M.value).then(v,b)}x((_=_.apply(u,d||[])).next())})},l=this&&this.__generator||function(u,d){var m={label:0,sent:function(){if(y[0]&1)throw y[1];return y[1]},trys:[],ops:[]},_,p,y,g;return g={next:v(0),throw:v(1),return:v(2)},typeof Symbol=="function"&&(g[Symbol.iterator]=function(){return this}),g;function v(x){return function(M){return b([x,M])}}function b(x){if(_)throw new TypeError("Generator is already executing.");for(;m;)try{if(_=1,p&&(y=x[0]&2?p.return:x[0]?p.throw||((y=p.return)&&y.call(p),0):p.next)&&!(y=y.call(p,x[1])).done)return y;switch(p=0,y&&(x=[x[0]&2,y.value]),x[0]){case 0:case 1:y=x;break;case 4:return m.label++,{value:x[1],done:!1};case 5:m.label++,p=x[1],x=[0];continue;case 7:x=m.ops.pop(),m.trys.pop();continue;default:if(y=m.trys,!(y=y.length>0&&y[y.length-1])&&(x[0]===6||x[0]===2)){m=0;continue}if(x[0]===3&&(!y||x[1]>y[0]&&x[1]<y[3])){m.label=x[1];break}if(x[0]===6&&m.label<y[1]){m.label=y[1],y=x;break}if(y&&m.label<y[2]){m.label=y[2],m.ops.push(x);break}y[2]&&m.ops.pop(),m.trys.pop();continue}x=d.call(u,m)}catch(M){x=[6,M],p=0}finally{_=y=0}if(x[0]&5)throw x[1];return{value:x[0]?x[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var a=o("misc-utils-of-mine-generic"),c=function(){function u(d){this.jimp=d}return u.prototype.decode=function(d){return r(this,void 0,void 0,function(){var m;return l(this,function(_){switch(_.label){case 0:return[4,this.jimp.create(n.from(d))];case 1:return m=_.sent(),[2,m.bitmap]}})})},u.prototype.encode=function(d,m,_){return r(this,void 0,void 0,function(){var p,y,g;return l(this,function(v){switch(v.label){case 0:if(p=a.getMimeTypeForExtension(m),!p)throw new Error("format not supported"+m);return y=new this.jimp(i(i({},d),{data:n.from(d.data.buffer)})),[4,y.getBufferAsync(p)];case 1:return g=v.sent(),[2,g]}})})},u}();t.JimpCodec=c}).call(this,o("buffer").Buffer)},{buffer:70,"misc-utils-of-mine-generic":92}],11:[function(o,e,t){function n(i){for(var r in i)t.hasOwnProperty(r)||(t[r]=i[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(o("./browser")),n(o("./file")),n(o("./format/")),n(o("./opencvReady")),n(o("./types/opencv")),n(o("./util")),o("./types/_cv")},{"./browser":4,"./file":6,"./format/":9,"./opencvReady":12,"./types/_cv":13,"./types/opencv":52,"./util":62}],12:[function(o,e,t){(function(n){var i=this&&this.__awaiter||function(b,x,M,E){function A(L){return L instanceof M?L:new M(function(D){D(L)})}return new(M||(M=Promise))(function(L,D){function R(J){try{U(E.next(J))}catch(ne){D(ne)}}function I(J){try{U(E.throw(J))}catch(ne){D(ne)}}function U(J){J.done?L(J.value):A(J.value).then(R,I)}U((E=E.apply(b,x||[])).next())})},r=this&&this.__generator||function(b,x){var M={label:0,sent:function(){if(L[0]&1)throw L[1];return L[1]},trys:[],ops:[]},E,A,L,D;return D={next:R(0),throw:R(1),return:R(2)},typeof Symbol=="function"&&(D[Symbol.iterator]=function(){return this}),D;function R(U){return function(J){return I([U,J])}}function I(U){if(E)throw new TypeError("Generator is already executing.");for(;M;)try{if(E=1,A&&(L=U[0]&2?A.return:U[0]?A.throw||((L=A.return)&&L.call(A),0):A.next)&&!(L=L.call(A,U[1])).done)return L;switch(A=0,L&&(U=[U[0]&2,L.value]),U[0]){case 0:case 1:L=U;break;case 4:return M.label++,{value:U[1],done:!1};case 5:M.label++,A=U[1],U=[0];continue;case 7:U=M.ops.pop(),M.trys.pop();continue;default:if(L=M.trys,!(L=L.length>0&&L[L.length-1])&&(U[0]===6||U[0]===2)){M=0;continue}if(U[0]===3&&(!L||U[1]>L[0]&&U[1]<L[3])){M.label=U[1];break}if(U[0]===6&&M.label<L[1]){M.label=L[1],L=U;break}if(L&&M.label<L[2]){M.label=L[2],M.ops.push(U);break}L[2]&&M.ops.pop(),M.trys.pop();continue}U=x.call(b,M)}catch(J){U=[6,J],A=0}finally{E=L=0}if(U[0]&5)throw U[1];return{value:U[0]?U[1]:void 0,done:!0}}},l=this&&this.__spreadArrays||function(){for(var b=0,x=0,M=arguments.length;x<M;x++)b+=arguments[x].length;for(var E=Array(b),A=0,x=0;x<M;x++)for(var L=arguments[x],D=0,R=L.length;D<R;D++,A++)E[A]=L[D];return E};Object.defineProperty(t,"__esModule",{value:!0});var a=o("fs"),c=o("misc-utils-of-mine-generic"),u=o("./format"),d=o("./util/misc");t.FS_ROOT="/work";var m;function _(){return m}t.getFS=_;var p=!1;function y(b){return b===void 0&&(b={}),i(this,void 0,void 0,function(){var x,M=this;return r(this,function(E){switch(E.label){case 0:return b.force&&(p=!1,c.getGlobal().Module=void 0,m=void 0),p?(b.onloadCallback&&b.onloadCallback(),[2]):(x=b.formatProxies||l(c.isNode()?[]:[function(){return new u.CanvasCodec}]),[4,c.serial(x.map(function(A){return function(){return i(M,void 0,void 0,function(){return r(this,function(L){switch(L.label){case 0:return[4,u.installFormatProxy(A)];case 1:return L.sent(),[2]}})})}}))]);case 1:return E.sent(),[4,u.loadFormatProxies()];case 2:return E.sent(),c.isNode()?[4,g(b)]:[3,4];case 3:return E.sent(),[3,6];case 4:return[4,v(b)];case 5:E.sent(),E.label=6;case 6:return[2]}})})}t.loadOpencv=y;function g(b){var x=this;return new Promise(function(M){var E=b.opencvJsExceptions?"opencv_exception.js":"opencv.js",A=[b.opencvJsLocation,"./node_modules/mirada/dist/src/"+E,"./dist/src/"+E].filter(c.notFalsy),L=c.getGlobal(),D=A.find(a.existsSync),R=D&&d.resolveNodeModule(D);if(!R)throw d.buildError(E+" not found. in any of these: "+A.join(", "));L.Module={preRun:function(){typeof window!="object"&&!L.Module.FS.analyzePath(t.FS_ROOT).exists&&(L.Module.FS.mkdir(t.FS_ROOT),L.Module.FS.mount(L.Module.FS.filesystems.NODEFS,{root:b.cwd||n.cwd()||"."},t.FS_ROOT))},onRuntimeInitialized:function(){return i(x,void 0,void 0,function(){return r(this,function(I){return p=!0,m=c.getGlobal().Module.FS,b.onloadCallback&&b.onloadCallback(),M(),[2]})})},onAbort:function(I){console.error("Error has occurred in WebAssembly Module",I,I.stack),console.trace()}};try{L.cv=o(R)}catch(I){throw console.error("An error occurred when trying to load "+E+" form "+R,I,I.stack),I}})}function v(b){var x=this;return new Promise(function(M,E){var A=document.createElement("script");A.setAttribute("async",""),A.setAttribute("type","text/javascript"),A.addEventListener("load",function(){return i(x,void 0,void 0,function(){var R,I=this;return r(this,function(U){return R=c.getGlobal(),typeof R.cv!="undefined"&&typeof R.cv.getBuildInformation!="undefined"?(p=!0,m=c.getGlobal().Module.FS,b.onloadCallback&&b.onloadCallback(),M()):(R.cv=typeof R.cv=="undefined"?{}:R.cv,R.cv.onRuntimeInitialized=function(){return i(I,void 0,void 0,function(){return r(this,function(J){return p=!0,m=c.getGlobal().Module.FS,b.onloadCallback&&b.onloadCallback(),M(),[2]})})}),[2]})})});var L=b.opencvJsLocation||(b.opencvJsExceptions?"opencv_exception.js":"opencv.js");A.addEventListener("error",function(){E("Failed to load "+L)}),A.src=L;var D=document.getElementsByTagName("script")[0];D.parentNode.insertBefore(A,D)})}}).call(this,o("_process"))},{"./format":9,"./util/misc":63,_process:121,fs:69,"misc-utils-of-mine-generic":92}],13:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],14:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],15:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0}),o("./_types")},{"./_types":35}],16:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],17:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],18:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],19:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0}),o("./_types")},{"./_types":35}],20:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],21:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],22:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],23:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],24:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],25:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],26:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],27:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0}),o("./_types")},{"./_types":35}],28:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0}),o("./_types")},{"./_types":35}],29:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],30:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],31:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],32:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],33:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],34:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./Mat");t.InputArray=n.Mat,t.InputArrayOfArrays=n.Mat,t.InputOutputArray=n.Mat,t.InputOutputArrayOfArrays=n.Mat,t.MatVector=n.Mat,t.OutputArray=n.Mat,t.OutputArrayOfArrays=n.Mat,o("."),o("../_cv")},{".":52,"../_cv":13,"./Mat":27}],35:[function(o,e,t){function n(i){for(var r in i)t.hasOwnProperty(r)||(t[r]=i[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(o("./Affine3")),n(o("./Algorithm")),n(o("./AutoBuffer")),n(o("./BFMatcher")),n(o("./BOWTrainer")),n(o("./calib3d")),n(o("./CascadeClassifier")),n(o("./core_array")),n(o("./core_cluster")),n(o("./core_hal_interface")),n(o("./core_utils")),n(o("./DescriptorMatcher")),n(o("./dnn")),n(o("./DynamicBitset")),n(o("./Exception")),n(o("./features2d_draw")),n(o("./FlannBasedMatcher")),n(o("./HOGDescriptor")),n(o("./imgproc_color_conversions")),n(o("./imgproc_draw")),n(o("./imgproc_feature")),n(o("./imgproc_filter")),n(o("./imgproc_hist")),n(o("./imgproc_misc")),n(o("./imgproc_object")),n(o("./imgproc_shape")),n(o("./imgproc_transform")),n(o("./Logger")),n(o("./LshTable")),n(o("./Mat")),n(o("./MatExpr")),n(o("./MatOp")),n(o("./Matx")),n(o("./Node")),n(o("./objdetect")),n(o("./PCA")),n(o("./photo_inpaint")),n(o("./RotatedRect")),n(o("./softdouble")),n(o("./softfloat")),n(o("./video_track")),n(o("./_hacks"))},{"./Affine3":14,"./Algorithm":15,"./AutoBuffer":16,"./BFMatcher":17,"./BOWTrainer":18,"./CascadeClassifier":19,"./DescriptorMatcher":20,"./DynamicBitset":21,"./Exception":22,"./FlannBasedMatcher":23,"./HOGDescriptor":24,"./Logger":25,"./LshTable":26,"./Mat":27,"./MatExpr":28,"./MatOp":29,"./Matx":30,"./Node":31,"./PCA":32,"./RotatedRect":33,"./_hacks":34,"./calib3d":36,"./core_array":37,"./core_cluster":38,"./core_hal_interface":39,"./core_utils":40,"./dnn":41,"./features2d_draw":42,"./imgproc_color_conversions":43,"./imgproc_draw":44,"./imgproc_feature":45,"./imgproc_filter":46,"./imgproc_hist":47,"./imgproc_misc":48,"./imgproc_object":49,"./imgproc_shape":50,"./imgproc_transform":51,"./objdetect":53,"./photo_inpaint":54,"./softdouble":55,"./softfloat":56,"./video_track":57}],36:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],37:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],38:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],39:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],40:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],41:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],42:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],43:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],44:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],45:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],46:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],47:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],48:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],49:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],50:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],51:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],52:[function(o,e,t){function n(i){for(var r in i)t.hasOwnProperty(r)||(t[r]=i[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(o("./_hacks")),n(o("./_types"))},{"./_hacks":34,"./_types":35}],53:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],54:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],55:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],56:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],57:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0})},{}],58:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=o("buffer/");function i(_,p,y){return l(r(_),p,y)}t.dataToUrl=i;function r(_){return n.Buffer.from(_).toString("base64")}t.dataToBase64=r;function l(_,p,y){return"data:"+p+(y?";name="+y:"")+";base64,"+_}t.base64ToUrl=l;function a(_){return _.substring(_.indexOf(";base64,")+8)}t.urlToBase64=a;function c(_){var p=_&&_.split(";base64,"),y=p.length?p[0].split(";").find(function(g){return g.includes("name=")}):"";return p=y?y.split("="):[],p[p.length-1]}t.getDataUrlFileName=c;function u(_){return n.Buffer.from(_).toString("base64")}t.arrayBufferToBase64=u;function d(_,p,y){var g=u(_);return l(g,p,y)}t.arrayBufferToUrl=d;function m(_){return n.Buffer.from(_).toString()}t.arrayBufferToString=m},{"buffer/":70}],59:[function(o,e,t){var n=this&&this.__awaiter||function(v,b,x,M){function E(A){return A instanceof x?A:new x(function(L){L(A)})}return new(x||(x=Promise))(function(A,L){function D(U){try{I(M.next(U))}catch(J){L(J)}}function R(U){try{I(M.throw(U))}catch(J){L(J)}}function I(U){U.done?A(U.value):E(U.value).then(D,R)}I((M=M.apply(v,b||[])).next())})},i=this&&this.__generator||function(v,b){var x={label:0,sent:function(){if(A[0]&1)throw A[1];return A[1]},trys:[],ops:[]},M,E,A,L;return L={next:D(0),throw:D(1),return:D(2)},typeof Symbol=="function"&&(L[Symbol.iterator]=function(){return this}),L;function D(I){return function(U){return R([I,U])}}function R(I){if(M)throw new TypeError("Generator is already executing.");for(;x;)try{if(M=1,E&&(A=I[0]&2?E.return:I[0]?E.throw||((A=E.return)&&A.call(E),0):E.next)&&!(A=A.call(E,I[1])).done)return A;switch(E=0,A&&(I=[I[0]&2,A.value]),I[0]){case 0:case 1:A=I;break;case 4:return x.label++,{value:I[1],done:!1};case 5:x.label++,E=I[1],I=[0];continue;case 7:I=x.ops.pop(),x.trys.pop();continue;default:if(A=x.trys,!(A=A.length>0&&A[A.length-1])&&(I[0]===6||I[0]===2)){x=0;continue}if(I[0]===3&&(!A||I[1]>A[0]&&I[1]<A[3])){x.label=I[1];break}if(I[0]===6&&x.label<A[1]){x.label=A[1],A=I;break}if(A&&x.label<A[2]){x.label=A[2],x.ops.push(I);break}A[2]&&x.ops.pop(),x.trys.pop();continue}I=b.call(v,x)}catch(U){I=[6,U],E=0}finally{M=A=0}if(I[0]&5)throw I[1];return{value:I[0]?I[1]:void 0,done:!0}}},r=this&&this.__importDefault||function(v){return v&&v.__esModule?v:{default:v}};Object.defineProperty(t,"__esModule",{value:!0});var l=r(o("cross-fetch")),a=o("../opencvReady");function c(v,b){return b===void 0&&(b=cv.FS),b.readFile(d(v))}t.readFile=c;function u(v){return v.startsWith(a.FS_ROOT+"/")?v.substring((a.FS_ROOT+"/").length,v.length):""+v}t.getFileName=u;function d(v){return v.startsWith(a.FS_ROOT+"/")?v:a.FS_ROOT+"/"+v}t.getFilePath=d;function m(v,b,x){x===void 0&&(x=cv.FS),x.writeFile(d(v),b)}t.writeFile=m;function _(v,b){b===void 0&&(b=cv.FS),b.unlink(d(d(v)))}t.removeFile=_;function p(v,b){b===void 0&&(b=cv.FS);try{return b.isDir(b.stat(d(v)).mode)}catch{return!1}}t.isDir=p;function y(v,b){b===void 0&&(b=cv.FS);try{return b.isFile(b.stat(d(v)).mode)}catch{return!1}}t.isFile=y,t.fileUtil={isDir:p,isFile:y,removeFile:_,writeFile:m,getFilePath:d,readFile:c,getFileName:u};function g(v,b){return n(this,void 0,void 0,function(){var x,M,E,A,L;return i(this,function(D){switch(D.label){case 0:return b=b||v.substring(v.lastIndexOf("/")+1,v.length),cv.FS.readdir("/").includes(b)?[3,4]:[4,l.default(v)];case 1:return x=D.sent(),E=(M=cv.FS).createDataFile,A=["/",b],L=Uint8ClampedArray.bind,[4,x.arrayBuffer()];case 2:return[4,E.apply(M,A.concat([new(L.apply(Uint8ClampedArray,[void 0,D.sent()])),!0,!1,!1]))];case 3:D.sent(),D.label=4;case 4:return[2,b]}})})}t.loadDataFile=g},{"../opencvReady":12,"cross-fetch":71}],60:[function(o,e,t){var n=this&&this.__awaiter||function(c,u,d,m){function _(p){return p instanceof d?p:new d(function(y){y(p)})}return new(d||(d=Promise))(function(p,y){function g(x){try{b(m.next(x))}catch(M){y(M)}}function v(x){try{b(m.throw(x))}catch(M){y(M)}}function b(x){x.done?p(x.value):_(x.value).then(g,v)}b((m=m.apply(c,u||[])).next())})},i=this&&this.__generator||function(c,u){var d={label:0,sent:function(){if(p[0]&1)throw p[1];return p[1]},trys:[],ops:[]},m,_,p,y;return y={next:g(0),throw:g(1),return:g(2)},typeof Symbol=="function"&&(y[Symbol.iterator]=function(){return this}),y;function g(b){return function(x){return v([b,x])}}function v(b){if(m)throw new TypeError("Generator is already executing.");for(;d;)try{if(m=1,_&&(p=b[0]&2?_.return:b[0]?_.throw||((p=_.return)&&p.call(_),0):_.next)&&!(p=p.call(_,b[1])).done)return p;switch(_=0,p&&(b=[b[0]&2,p.value]),b[0]){case 0:case 1:p=b;break;case 4:return d.label++,{value:b[1],done:!1};case 5:d.label++,_=b[1],b=[0];continue;case 7:b=d.ops.pop(),d.trys.pop();continue;default:if(p=d.trys,!(p=p.length>0&&p[p.length-1])&&(b[0]===6||b[0]===2)){d=0;continue}if(b[0]===3&&(!p||b[1]>p[0]&&b[1]<p[3])){d.label=b[1];break}if(b[0]===6&&d.label<p[1]){d.label=p[1],p=b;break}if(p&&d.label<p[2]){d.label=p[2],d.ops.push(b);break}p[2]&&d.ops.pop(),d.trys.pop();continue}b=u.call(c,d)}catch(x){b=[6,x],_=0}finally{m=p=0}if(b[0]&5)throw b[1];return{value:b[0]?b[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(".."),l=o("./imageUtil");function a(c){return n(this,void 0,void 0,function(){var u,d,m,_,p,y,g,v,b,x,M;return i(this,function(E){switch(E.label){case 0:return[4,r.loadOpencv()];case 1:for(E.sent(),u=c.image.asMat(),cv.cvtColor(u,u,cv.COLOR_RGBA2RGB,0),d=new cv.Mat,m=new cv.Mat,_=new cv.Mat,p=new cv.Rect(c.x,c.y,c.width,c.height),cv.grabCut(u,d,p,m,_,1,cv.GC_INIT_WITH_RECT),y=0;y<u.rows;y++)for(g=0;g<u.cols;g++)(d.ucharPtr(y,g)[0]==0||d.ucharPtr(y,g)[0]==2)&&(u.ucharPtr(y,g)[0]=0,u.ucharPtr(y,g)[1]=0,u.ucharPtr(y,g)[2]=0);return c.frameColor&&(v=new cv.Point(p.x,p.y),b=new cv.Point(p.x+p.width,p.y+p.height),cv.rectangle(u,v,b,c.frameColor)),x=l.toRgba(u),M=r.toImageData(x),d.delete(),x.delete(),m.delete(),_.delete(),[2,{image:M}]}})})}t.grabCut_obsolete=a},{"..":11,"./imageUtil":61}],61:[function(o,e,t){(function(n){var i=this&&this.__awaiter||function(G,H,W,$){function V(z){return z instanceof W?z:new W(function(K){K(z)})}return new(W||(W=Promise))(function(z,K){function oe(pe){try{Q($.next(pe))}catch(fe){K(fe)}}function ce(pe){try{Q($.throw(pe))}catch(fe){K(fe)}}function Q(pe){pe.done?z(pe.value):V(pe.value).then(oe,ce)}Q(($=$.apply(G,H||[])).next())})},r=this&&this.__generator||function(G,H){var W={label:0,sent:function(){if(z[0]&1)throw z[1];return z[1]},trys:[],ops:[]},$,V,z,K;return K={next:oe(0),throw:oe(1),return:oe(2)},typeof Symbol=="function"&&(K[Symbol.iterator]=function(){return this}),K;function oe(Q){return function(pe){return ce([Q,pe])}}function ce(Q){if($)throw new TypeError("Generator is already executing.");for(;W;)try{if($=1,V&&(z=Q[0]&2?V.return:Q[0]?V.throw||((z=V.return)&&z.call(V),0):V.next)&&!(z=z.call(V,Q[1])).done)return z;switch(V=0,z&&(Q=[Q[0]&2,z.value]),Q[0]){case 0:case 1:z=Q;break;case 4:return W.label++,{value:Q[1],done:!1};case 5:W.label++,V=Q[1],Q=[0];continue;case 7:Q=W.ops.pop(),W.trys.pop();continue;default:if(z=W.trys,!(z=z.length>0&&z[z.length-1])&&(Q[0]===6||Q[0]===2)){W=0;continue}if(Q[0]===3&&(!z||Q[1]>z[0]&&Q[1]<z[3])){W.label=Q[1];break}if(Q[0]===6&&W.label<z[1]){W.label=z[1],z=Q;break}if(z&&W.label<z[2]){W.label=z[2],W.ops.push(Q);break}z[2]&&W.ops.pop(),W.trys.pop();continue}Q=H.call(G,W)}catch(pe){Q=[6,pe],V=0}finally{$=z=0}if(Q[0]&5)throw Q[1];return{value:Q[0]?Q[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var l=o("misc-utils-of-mine-generic"),a=o("../file");function c(G){return{data:new Uint8ClampedArray(G.data),width:G.cols,height:G.rows}}t.toImageData=c,t.asImageData=c;function u(G){return G&&typeof G.rows=="number"&&typeof G.cols=="number"&&typeof G.data=="object"&&typeof G.copyTo=="function"}t.isMat=u;function d(G,H){H===void 0&&(H=new cv.Mat);var W=G.type()%8,$=W<=cv.CV_8S?1:W<=cv.CV_32S?1/256:255,V=W===cv.CV_8S||W===cv.CV_16S?128:0;switch(G.convertTo(H,cv.CV_8U,$,V),H.type()){case cv.CV_8UC1:cv.cvtColor(H,H,cv.COLOR_GRAY2RGBA);break;case cv.CV_8UC3:cv.cvtColor(H,H,cv.COLOR_RGB2RGBA);break;case cv.CV_8UC4:break;default:throw new Error("Bad number of channels (Source image must have 1, 3 or 4 channels)")}return H}t.toRgba=d;function m(G){return i(this,void 0,void 0,function(){var H;return r(this,function(W){switch(W.label){case 0:return[4,a.File.fromFile(G)];case 1:return H=W.sent(),[2,H.asMat()]}})})}t.fromFile=m;function _(G){return i(this,void 0,void 0,function(){var H;return r(this,function(W){switch(W.label){case 0:return[4,a.File.fromArrayBuffer(G)];case 1:return H=W.sent(),[2,H.asMat()]}})})}t.fromArrayBuffer=_;function p(G){return i(this,void 0,void 0,function(){var H;return r(this,function(W){switch(W.label){case 0:return[4,a.File.fromUrl(G)];case 1:return H=W.sent(),[2,H.asMat()]}})})}t.fromUrl=p;function y(G,H,W){W===void 0&&(W=!1);var $=g(G),V=g(H);if($.rows>0&&$.rows==V.rows&&$.cols>0&&$.cols==$.cols){var z=cv.norm1($,V,cv.NORM_L2),K=z/($.rows*$.cols);return W&&v($,V),K}else return 1}t.compareL2=y;function g(G){return a.File.isFile(G)?G.asMat():G}t.asMat=g;function v(){for(var G=[],H=0;H<arguments.length;H++)G[H]=arguments[H];G.filter(function(W){return!W.isDeleted()}).forEach(function(W){return W.delete()})}t.del=v;function b(G,H,W,$){for(var V=G.channels(),z=G.data,K=0;K<$.length;K++)z[W*V*G.cols+H*V+K]=$[K]}t.set=b;function x(G,H,W){for(var $=G.channels(),V=G.data,z=[],K=0;K<$;K++)z.push(V[W*$*G.cols+H*$+K]);return z}t.get=x;function M(G,H,W){for(var $=0;$<G.rows;$++)for(var V=0;V<G.cols;V++){var z=W(x(G,V,$),V,$);b(H,V,$,z)}}t.map=M;var E;function A(){return E||(E=cv.Mat.ones(0,0,cv.CV_8U)),E}t.noArray=A;function L(G){return new cv.Size(G.x,G.y)}t.pointToSize=L;function D(G){return new cv.Point(G.width,G.height)}t.sizeToPoint=D;function R(G){return typeof G=="object"&&typeof G.width=="number"}t.isSize=R;function I(G){return{rows:G.rows,cols:G.cols,type:G.type(),data:F(G.data)}}t.mat2data=I;function U(G){return cv.matFromArray(G.rows,G.cols,G.type,P(G.data))}t.data2mat=U;function J(G){return G&&typeof G=="object"&&typeof G.rows=="number"&&typeof G.cols=="number"&&typeof G.type!="undefined"&&Object.keys(G).sort().join(",")==="cols,data,rows,type"}t.isMatData=J;var ne=o("buffer/").Buffer;l.isNode()&&typeof ne!="undefined"&&(ne=n);function F(G){return ne.from(G).toString("base64")}function P(G){return new Uint8Array(ne.from(G,"base64"))}function N(G){return JSON.stringify(G,function(H,W){return u(W)?I(W):W})}t.jsonStringifyWithMat=N;function q(G){return JSON.parse(G,function(H,W){return J(W)?U(W):W})}t.jsonParseWithMat=q}).call(this,o("buffer").Buffer)},{"../file":6,buffer:70,"buffer/":70,"misc-utils-of-mine-generic":92}],62:[function(o,e,t){function n(a){for(var c in a)t.hasOwnProperty(c)||(t[c]=a[c])}var i=this&&this.__importStar||function(a){if(a&&a.__esModule)return a;var c={};if(a!=null)for(var u in a)Object.hasOwnProperty.call(a,u)&&(c[u]=a[u]);return c.default=a,c};Object.defineProperty(t,"__esModule",{value:!0});var r=o("./fileUtil");t.fileUtil=r.fileUtil,t.loadDataFile=r.loadDataFile,n(o("./grabCut")),n(o("./imageUtil"));var l=i(o("./fileUtil"));t.file=l},{"./fileUtil":59,"./grabCut":60,"./imageUtil":61}],63:[function(o,e,t){(function(n){Object.defineProperty(t,"__esModule",{value:!0});var i=o("misc-utils-of-mine-generic"),r=o("path");function l(_){return console.error(_),typeof _.stack!="undefined"&&console.log((_.stack+"").split(`
`).join(`
`)),_ instanceof Error?_:new Error(_)}t.buildError=l;function a(_){var p=i.withoutExtension(r.relative(r.join(n,".."),r.resolve(_)));return p.startsWith(".")||(p="./"+p),p}t.resolveNodeModule=a;function c(_){return(m()-_)/1e6}t.msFrom=c;function u(_){return((m()-_)/1e6).toPrecision(1)+" ms"}t.timeFrom=u;var d=typeof performance!="undefined"&&typeof performance.now=="function";function m(){return d?performance.now():0}t.now=m}).call(this,"/dist/src/util")},{"misc-utils-of-mine-generic":92,path:120}],64:[function(o,e,t){(function(n){var i=o("object-assign");function r(P,N){if(P===N)return 0;for(var q=P.length,G=N.length,H=0,W=Math.min(q,G);H<W;++H)if(P[H]!==N[H]){q=P[H],G=N[H];break}return q<G?-1:G<q?1:0}function l(P){return n.Buffer&&typeof n.Buffer.isBuffer=="function"?n.Buffer.isBuffer(P):!!(P!=null&&P._isBuffer)}var a=o("util/"),c=Object.prototype.hasOwnProperty,u=Array.prototype.slice,d=function(){return function(){}.name==="foo"}();function m(P){return Object.prototype.toString.call(P)}function _(P){return l(P)||typeof n.ArrayBuffer!="function"?!1:typeof ArrayBuffer.isView=="function"?ArrayBuffer.isView(P):P?!!(P instanceof DataView||P.buffer&&P.buffer instanceof ArrayBuffer):!1}var p=e.exports=E,y=/\s*function\s+([^\(\s]*)\s*/;function g(P){if(!!a.isFunction(P)){if(d)return P.name;var N=P.toString(),q=N.match(y);return q&&q[1]}}p.AssertionError=function(N){this.name="AssertionError",this.actual=N.actual,this.expected=N.expected,this.operator=N.operator,N.message?(this.message=N.message,this.generatedMessage=!1):(this.message=x(this),this.generatedMessage=!0);var q=N.stackStartFunction||M;if(Error.captureStackTrace)Error.captureStackTrace(this,q);else{var G=new Error;if(G.stack){var H=G.stack,W=g(q),$=H.indexOf(`
`+W);if($>=0){var V=H.indexOf(`
`,$+1);H=H.substring(V+1)}this.stack=H}}},a.inherits(p.AssertionError,Error);function v(P,N){return typeof P=="string"?P.length<N?P:P.slice(0,N):P}function b(P){if(d||!a.isFunction(P))return a.inspect(P);var N=g(P),q=N?": "+N:"";return"[Function"+q+"]"}function x(P){return v(b(P.actual),128)+" "+P.operator+" "+v(b(P.expected),128)}function M(P,N,q,G,H){throw new p.AssertionError({message:q,actual:P,expected:N,operator:G,stackStartFunction:H})}p.fail=M;function E(P,N){P||M(P,!0,N,"==",p.ok)}p.ok=E,p.equal=function(N,q,G){N!=q&&M(N,q,G,"==",p.equal)},p.notEqual=function(N,q,G){N==q&&M(N,q,G,"!=",p.notEqual)},p.deepEqual=function(N,q,G){A(N,q,!1)||M(N,q,G,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(N,q,G){A(N,q,!0)||M(N,q,G,"deepStrictEqual",p.deepStrictEqual)};function A(P,N,q,G){if(P===N)return!0;if(l(P)&&l(N))return r(P,N)===0;if(a.isDate(P)&&a.isDate(N))return P.getTime()===N.getTime();if(a.isRegExp(P)&&a.isRegExp(N))return P.source===N.source&&P.global===N.global&&P.multiline===N.multiline&&P.lastIndex===N.lastIndex&&P.ignoreCase===N.ignoreCase;if((P===null||typeof P!="object")&&(N===null||typeof N!="object"))return q?P===N:P==N;if(_(P)&&_(N)&&m(P)===m(N)&&!(P instanceof Float32Array||P instanceof Float64Array))return r(new Uint8Array(P.buffer),new Uint8Array(N.buffer))===0;if(l(P)!==l(N))return!1;G=G||{actual:[],expected:[]};var H=G.actual.indexOf(P);return H!==-1&&H===G.expected.indexOf(N)?!0:(G.actual.push(P),G.expected.push(N),D(P,N,q,G))}function L(P){return Object.prototype.toString.call(P)=="[object Arguments]"}function D(P,N,q,G){if(P==null||N===null||N===void 0)return!1;if(a.isPrimitive(P)||a.isPrimitive(N))return P===N;if(q&&Object.getPrototypeOf(P)!==Object.getPrototypeOf(N))return!1;var H=L(P),W=L(N);if(H&&!W||!H&&W)return!1;if(H)return P=u.call(P),N=u.call(N),A(P,N,q);var $=F(P),V=F(N),z,K;if($.length!==V.length)return!1;for($.sort(),V.sort(),K=$.length-1;K>=0;K--)if($[K]!==V[K])return!1;for(K=$.length-1;K>=0;K--)if(z=$[K],!A(P[z],N[z],q,G))return!1;return!0}p.notDeepEqual=function(N,q,G){A(N,q,!1)&&M(N,q,G,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=R;function R(P,N,q){A(P,N,!0)&&M(P,N,q,"notDeepStrictEqual",R)}p.strictEqual=function(N,q,G){N!==q&&M(N,q,G,"===",p.strictEqual)},p.notStrictEqual=function(N,q,G){N===q&&M(N,q,G,"!==",p.notStrictEqual)};function I(P,N){if(!P||!N)return!1;if(Object.prototype.toString.call(N)=="[object RegExp]")return N.test(P);try{if(P instanceof N)return!0}catch{}return Error.isPrototypeOf(N)?!1:N.call({},P)===!0}function U(P){var N;try{P()}catch(q){N=q}return N}function J(P,N,q,G){var H;if(typeof N!="function")throw new TypeError('"block" argument must be a function');typeof q=="string"&&(G=q,q=null),H=U(N),G=(q&&q.name?" ("+q.name+").":".")+(G?" "+G:"."),P&&!H&&M(H,q,"Missing expected exception"+G);var W=typeof G=="string",$=!P&&a.isError(H),V=!P&&H&&!q;if(($&&W&&I(H,q)||V)&&M(H,q,"Got unwanted exception"+G),P&&H&&q&&!I(H,q)||!P&&H)throw H}p.throws=function(P,N,q){J(!0,P,N,q)},p.doesNotThrow=function(P,N,q){J(!1,P,N,q)},p.ifError=function(P){if(P)throw P};function ne(P,N){P||M(P,!0,N,"==",ne)}p.strict=i(ne,p,{equal:p.strictEqual,deepEqual:p.deepStrictEqual,notEqual:p.notStrictEqual,notDeepEqual:p.notDeepStrictEqual}),p.strict.strict=p.strict;var F=Object.keys||function(P){var N=[];for(var q in P)c.call(P,q)&&N.push(q);return N}}).call(this,typeof commonjsGlobal!="undefined"?commonjsGlobal:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{"object-assign":119,"util/":67}],65:[function(o,e,t){typeof Object.create=="function"?e.exports=function(i,r){i.super_=r,i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(i,r){i.super_=r;var l=function(){};l.prototype=r.prototype,i.prototype=new l,i.prototype.constructor=i}},{}],66:[function(o,e,t){e.exports=function(i){return i&&typeof i=="object"&&typeof i.copy=="function"&&typeof i.fill=="function"&&typeof i.readUInt8=="function"}},{}],67:[function(o,e,t){(function(n,i){var r=/%[sdj%]/g;t.format=function(V){if(!D(V)){for(var z=[],K=0;K<arguments.length;K++)z.push(c(arguments[K]));return z.join(" ")}for(var K=1,oe=arguments,ce=oe.length,Q=String(V).replace(r,function(fe){if(fe==="%%")return"%";if(K>=ce)return fe;switch(fe){case"%s":return String(oe[K++]);case"%d":return Number(oe[K++]);case"%j":try{return JSON.stringify(oe[K++])}catch{return"[Circular]"}default:return fe}}),pe=oe[K];K<ce;pe=oe[++K])E(pe)||!J(pe)?Q+=" "+pe:Q+=" "+c(pe);return Q},t.deprecate=function(V,z){if(I(i.process))return function(){return t.deprecate(V,z).apply(this,arguments)};if(n.noDeprecation===!0)return V;var K=!1;function oe(){if(!K){if(n.throwDeprecation)throw new Error(z);n.traceDeprecation?console.trace(z):console.error(z),K=!0}return V.apply(this,arguments)}return oe};var l={},a;t.debuglog=function(V){if(I(a)&&(a={}.NODE_DEBUG||""),V=V.toUpperCase(),!l[V])if(new RegExp("\\b"+V+"\\b","i").test(a)){var z=n.pid;l[V]=function(){var K=t.format.apply(t,arguments);console.error("%s %d: %s",V,z,K)}}else l[V]=function(){};return l[V]};function c(V,z){var K={seen:[],stylize:d};return arguments.length>=3&&(K.depth=arguments[2]),arguments.length>=4&&(K.colors=arguments[3]),M(z)?K.showHidden=z:z&&t._extend(K,z),I(K.showHidden)&&(K.showHidden=!1),I(K.depth)&&(K.depth=2),I(K.colors)&&(K.colors=!1),I(K.customInspect)&&(K.customInspect=!0),K.colors&&(K.stylize=u),_(K,V,K.depth)}t.inspect=c,c.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},c.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"};function u(V,z){var K=c.styles[z];return K?"\x1B["+c.colors[K][0]+"m"+V+"\x1B["+c.colors[K][1]+"m":V}function d(V,z){return V}function m(V){var z={};return V.forEach(function(K,oe){z[K]=!0}),z}function _(V,z,K){if(V.customInspect&&z&&P(z.inspect)&&z.inspect!==t.inspect&&!(z.constructor&&z.constructor.prototype===z)){var oe=z.inspect(K,V);return D(oe)||(oe=_(V,oe,K)),oe}var ce=p(V,z);if(ce)return ce;var Q=Object.keys(z),pe=m(Q);if(V.showHidden&&(Q=Object.getOwnPropertyNames(z)),F(z)&&(Q.indexOf("message")>=0||Q.indexOf("description")>=0))return y(z);if(Q.length===0){if(P(z)){var fe=z.name?": "+z.name:"";return V.stylize("[Function"+fe+"]","special")}if(U(z))return V.stylize(RegExp.prototype.toString.call(z),"regexp");if(ne(z))return V.stylize(Date.prototype.toString.call(z),"date");if(F(z))return y(z)}var ye="",de=!1,Le=["{","}"];if(x(z)&&(de=!0,Le=["[","]"]),P(z)){var Te=z.name?": "+z.name:"";ye=" [Function"+Te+"]"}if(U(z)&&(ye=" "+RegExp.prototype.toString.call(z)),ne(z)&&(ye=" "+Date.prototype.toUTCString.call(z)),F(z)&&(ye=" "+y(z)),Q.length===0&&(!de||z.length==0))return Le[0]+ye+Le[1];if(K<0)return U(z)?V.stylize(RegExp.prototype.toString.call(z),"regexp"):V.stylize("[Object]","special");V.seen.push(z);var be;return de?be=g(V,z,K,pe,Q):be=Q.map(function(Ue){return v(V,z,K,pe,Ue,de)}),V.seen.pop(),b(be,ye,Le)}function p(V,z){if(I(z))return V.stylize("undefined","undefined");if(D(z)){var K="'"+JSON.stringify(z).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return V.stylize(K,"string")}if(L(z))return V.stylize(""+z,"number");if(M(z))return V.stylize(""+z,"boolean");if(E(z))return V.stylize("null","null")}function y(V){return"["+Error.prototype.toString.call(V)+"]"}function g(V,z,K,oe,ce){for(var Q=[],pe=0,fe=z.length;pe<fe;++pe)$(z,String(pe))?Q.push(v(V,z,K,oe,String(pe),!0)):Q.push("");return ce.forEach(function(ye){ye.match(/^\d+$/)||Q.push(v(V,z,K,oe,ye,!0))}),Q}function v(V,z,K,oe,ce,Q){var pe,fe,ye;if(ye=Object.getOwnPropertyDescriptor(z,ce)||{value:z[ce]},ye.get?ye.set?fe=V.stylize("[Getter/Setter]","special"):fe=V.stylize("[Getter]","special"):ye.set&&(fe=V.stylize("[Setter]","special")),$(oe,ce)||(pe="["+ce+"]"),fe||(V.seen.indexOf(ye.value)<0?(E(K)?fe=_(V,ye.value,null):fe=_(V,ye.value,K-1),fe.indexOf(`
`)>-1&&(Q?fe=fe.split(`
`).map(function(de){return"  "+de}).join(`
`).substr(2):fe=`
`+fe.split(`
`).map(function(de){return"   "+de}).join(`
`))):fe=V.stylize("[Circular]","special")),I(pe)){if(Q&&ce.match(/^\d+$/))return fe;pe=JSON.stringify(""+ce),pe.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(pe=pe.substr(1,pe.length-2),pe=V.stylize(pe,"name")):(pe=pe.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),pe=V.stylize(pe,"string"))}return pe+": "+fe}function b(V,z,K){var oe=V.reduce(function(ce,Q){return Q.indexOf(`
`)>=0,ce+Q.replace(/\u001b\[\d\d?m/g,"").length+1},0);return oe>60?K[0]+(z===""?"":z+`
 `)+" "+V.join(`,
  `)+" "+K[1]:K[0]+z+" "+V.join(", ")+" "+K[1]}function x(V){return Array.isArray(V)}t.isArray=x;function M(V){return typeof V=="boolean"}t.isBoolean=M;function E(V){return V===null}t.isNull=E;function A(V){return V==null}t.isNullOrUndefined=A;function L(V){return typeof V=="number"}t.isNumber=L;function D(V){return typeof V=="string"}t.isString=D;function R(V){return typeof V=="symbol"}t.isSymbol=R;function I(V){return V===void 0}t.isUndefined=I;function U(V){return J(V)&&q(V)==="[object RegExp]"}t.isRegExp=U;function J(V){return typeof V=="object"&&V!==null}t.isObject=J;function ne(V){return J(V)&&q(V)==="[object Date]"}t.isDate=ne;function F(V){return J(V)&&(q(V)==="[object Error]"||V instanceof Error)}t.isError=F;function P(V){return typeof V=="function"}t.isFunction=P;function N(V){return V===null||typeof V=="boolean"||typeof V=="number"||typeof V=="string"||typeof V=="symbol"||typeof V=="undefined"}t.isPrimitive=N,t.isBuffer=o("./support/isBuffer");function q(V){return Object.prototype.toString.call(V)}function G(V){return V<10?"0"+V.toString(10):V.toString(10)}var H=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function W(){var V=new Date,z=[G(V.getHours()),G(V.getMinutes()),G(V.getSeconds())].join(":");return[V.getDate(),H[V.getMonth()],z].join(" ")}t.log=function(){console.log("%s - %s",W(),t.format.apply(t,arguments))},t.inherits=o("inherits"),t._extend=function(V,z){if(!z||!J(z))return V;for(var K=Object.keys(z),oe=K.length;oe--;)V[K[oe]]=z[K[oe]];return V};function $(V,z){return Object.prototype.hasOwnProperty.call(V,z)}}).call(this,o("_process"),typeof commonjsGlobal!="undefined"?commonjsGlobal:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{"./support/isBuffer":66,_process:121,inherits:65}],68:[function(o,e,t){t.byteLength=d,t.toByteArray=_,t.fromByteArray=g;for(var n=[],i=[],r=typeof Uint8Array!="undefined"?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,c=l.length;a<c;++a)n[a]=l[a],i[l.charCodeAt(a)]=a;i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63;function u(v){var b=v.length;if(b%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var x=v.indexOf("=");x===-1&&(x=b);var M=x===b?0:4-x%4;return[x,M]}function d(v){var b=u(v),x=b[0],M=b[1];return(x+M)*3/4-M}function m(v,b,x){return(b+x)*3/4-x}function _(v){var b,x=u(v),M=x[0],E=x[1],A=new r(m(v,M,E)),L=0,D=E>0?M-4:M,R;for(R=0;R<D;R+=4)b=i[v.charCodeAt(R)]<<18|i[v.charCodeAt(R+1)]<<12|i[v.charCodeAt(R+2)]<<6|i[v.charCodeAt(R+3)],A[L++]=b>>16&255,A[L++]=b>>8&255,A[L++]=b&255;return E===2&&(b=i[v.charCodeAt(R)]<<2|i[v.charCodeAt(R+1)]>>4,A[L++]=b&255),E===1&&(b=i[v.charCodeAt(R)]<<10|i[v.charCodeAt(R+1)]<<4|i[v.charCodeAt(R+2)]>>2,A[L++]=b>>8&255,A[L++]=b&255),A}function p(v){return n[v>>18&63]+n[v>>12&63]+n[v>>6&63]+n[v&63]}function y(v,b,x){for(var M,E=[],A=b;A<x;A+=3)M=(v[A]<<16&16711680)+(v[A+1]<<8&65280)+(v[A+2]&255),E.push(p(M));return E.join("")}function g(v){for(var b,x=v.length,M=x%3,E=[],A=16383,L=0,D=x-M;L<D;L+=A)E.push(y(v,L,L+A>D?D:L+A));return M===1?(b=v[x-1],E.push(n[b>>2]+n[b<<4&63]+"==")):M===2&&(b=(v[x-2]<<8)+v[x-1],E.push(n[b>>10]+n[b>>4&63]+n[b<<2&63]+"=")),E.join("")}},{}],69:[function(o,e,t){},{}],70:[function(o,e,t){(function(d){var i=o("base64-js"),r=o("ieee754"),l=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;t.Buffer=d,t.SlowBuffer=E,t.INSPECT_MAX_BYTES=50;var a=2147483647;t.kMaxLength=a,d.TYPED_ARRAY_SUPPORT=c(),!d.TYPED_ARRAY_SUPPORT&&typeof console!="undefined"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function c(){try{var O=new Uint8Array(1),w={foo:function(){return 42}};return Object.setPrototypeOf(w,Uint8Array.prototype),Object.setPrototypeOf(O,w),O.foo()===42}catch{return!1}}Object.defineProperty(d.prototype,"parent",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.buffer}}),Object.defineProperty(d.prototype,"offset",{enumerable:!0,get:function(){if(!!d.isBuffer(this))return this.byteOffset}});function u(O){if(O>a)throw new RangeError('The value "'+O+'" is invalid for option "size"');var w=new Uint8Array(O);return Object.setPrototypeOf(w,d.prototype),w}function d(O,w,T){if(typeof O=="number"){if(typeof w=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return y(O)}return m(O,w,T)}typeof Symbol!="undefined"&&Symbol.species!=null&&d[Symbol.species]===d&&Object.defineProperty(d,Symbol.species,{value:null,configurable:!0,enumerable:!1,writable:!1}),d.poolSize=8192;function m(O,w,T){if(typeof O=="string")return g(O,w);if(ArrayBuffer.isView(O))return v(O);if(O==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof O);if(Be(O,ArrayBuffer)||O&&Be(O.buffer,ArrayBuffer))return b(O,w,T);if(typeof O=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');var S=O.valueOf&&O.valueOf();if(S!=null&&S!==O)return d.from(S,w,T);var C=x(O);if(C)return C;if(typeof Symbol!="undefined"&&Symbol.toPrimitive!=null&&typeof O[Symbol.toPrimitive]=="function")return d.from(O[Symbol.toPrimitive]("string"),w,T);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof O)}d.from=function(O,w,T){return m(O,w,T)},Object.setPrototypeOf(d.prototype,Uint8Array.prototype),Object.setPrototypeOf(d,Uint8Array);function _(O){if(typeof O!="number")throw new TypeError('"size" argument must be of type number');if(O<0)throw new RangeError('The value "'+O+'" is invalid for option "size"')}function p(O,w,T){return _(O),O<=0?u(O):w!==void 0?typeof T=="string"?u(O).fill(w,T):u(O).fill(w):u(O)}d.alloc=function(O,w,T){return p(O,w,T)};function y(O){return _(O),u(O<0?0:M(O)|0)}d.allocUnsafe=function(O){return y(O)},d.allocUnsafeSlow=function(O){return y(O)};function g(O,w){if((typeof w!="string"||w==="")&&(w="utf8"),!d.isEncoding(w))throw new TypeError("Unknown encoding: "+w);var T=A(O,w)|0,S=u(T),C=S.write(O,w);return C!==T&&(S=S.slice(0,C)),S}function v(O){for(var w=O.length<0?0:M(O.length)|0,T=u(w),S=0;S<w;S+=1)T[S]=O[S]&255;return T}function b(O,w,T){if(w<0||O.byteLength<w)throw new RangeError('"offset" is outside of buffer bounds');if(O.byteLength<w+(T||0))throw new RangeError('"length" is outside of buffer bounds');var S;return w===void 0&&T===void 0?S=new Uint8Array(O):T===void 0?S=new Uint8Array(O,w):S=new Uint8Array(O,w,T),Object.setPrototypeOf(S,d.prototype),S}function x(O){if(d.isBuffer(O)){var w=M(O.length)|0,T=u(w);return T.length===0||O.copy(T,0,0,w),T}if(O.length!==void 0)return typeof O.length!="number"||je(O.length)?u(0):v(O);if(O.type==="Buffer"&&Array.isArray(O.data))return v(O.data)}function M(O){if(O>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return O|0}function E(O){return+O!=O&&(O=0),d.alloc(+O)}d.isBuffer=function(w){return w!=null&&w._isBuffer===!0&&w!==d.prototype},d.compare=function(w,T){if(Be(w,Uint8Array)&&(w=d.from(w,w.offset,w.byteLength)),Be(T,Uint8Array)&&(T=d.from(T,T.offset,T.byteLength)),!d.isBuffer(w)||!d.isBuffer(T))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(w===T)return 0;for(var S=w.length,C=T.length,j=0,Y=Math.min(S,C);j<Y;++j)if(w[j]!==T[j]){S=w[j],C=T[j];break}return S<C?-1:C<S?1:0},d.isEncoding=function(w){switch(String(w).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},d.concat=function(w,T){if(!Array.isArray(w))throw new TypeError('"list" argument must be an Array of Buffers');if(w.length===0)return d.alloc(0);var S;if(T===void 0)for(T=0,S=0;S<w.length;++S)T+=w[S].length;var C=d.allocUnsafe(T),j=0;for(S=0;S<w.length;++S){var Y=w[S];if(Be(Y,Uint8Array)&&(Y=d.from(Y)),!d.isBuffer(Y))throw new TypeError('"list" argument must be an Array of Buffers');Y.copy(C,j),j+=Y.length}return C};function A(O,w){if(d.isBuffer(O))return O.length;if(ArrayBuffer.isView(O)||Be(O,ArrayBuffer))return O.byteLength;if(typeof O!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof O);var T=O.length,S=arguments.length>2&&arguments[2]===!0;if(!S&&T===0)return 0;for(var C=!1;;)switch(w){case"ascii":case"latin1":case"binary":return T;case"utf8":case"utf-8":return Le(O).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return T*2;case"hex":return T>>>1;case"base64":return Ue(O).length;default:if(C)return S?-1:Le(O).length;w=(""+w).toLowerCase(),C=!0}}d.byteLength=A;function L(O,w,T){var S=!1;if((w===void 0||w<0)&&(w=0),w>this.length||((T===void 0||T>this.length)&&(T=this.length),T<=0)||(T>>>=0,w>>>=0,T<=w))return"";for(O||(O="utf8");;)switch(O){case"hex":return z(this,w,T);case"utf8":case"utf-8":return G(this,w,T);case"ascii":return $(this,w,T);case"latin1":case"binary":return V(this,w,T);case"base64":return q(this,w,T);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return K(this,w,T);default:if(S)throw new TypeError("Unknown encoding: "+O);O=(O+"").toLowerCase(),S=!0}}d.prototype._isBuffer=!0;function D(O,w,T){var S=O[w];O[w]=O[T],O[T]=S}d.prototype.swap16=function(){var w=this.length;if(w%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var T=0;T<w;T+=2)D(this,T,T+1);return this},d.prototype.swap32=function(){var w=this.length;if(w%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var T=0;T<w;T+=4)D(this,T,T+3),D(this,T+1,T+2);return this},d.prototype.swap64=function(){var w=this.length;if(w%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var T=0;T<w;T+=8)D(this,T,T+7),D(this,T+1,T+6),D(this,T+2,T+5),D(this,T+3,T+4);return this},d.prototype.toString=function(){var w=this.length;return w===0?"":arguments.length===0?G(this,0,w):L.apply(this,arguments)},d.prototype.toLocaleString=d.prototype.toString,d.prototype.equals=function(w){if(!d.isBuffer(w))throw new TypeError("Argument must be a Buffer");return this===w?!0:d.compare(this,w)===0},d.prototype.inspect=function(){var w="",T=t.INSPECT_MAX_BYTES;return w=this.toString("hex",0,T).replace(/(.{2})/g,"$1 ").trim(),this.length>T&&(w+=" ... "),"<Buffer "+w+">"},l&&(d.prototype[l]=d.prototype.inspect),d.prototype.compare=function(w,T,S,C,j){if(Be(w,Uint8Array)&&(w=d.from(w,w.offset,w.byteLength)),!d.isBuffer(w))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof w);if(T===void 0&&(T=0),S===void 0&&(S=w?w.length:0),C===void 0&&(C=0),j===void 0&&(j=this.length),T<0||S>w.length||C<0||j>this.length)throw new RangeError("out of range index");if(C>=j&&T>=S)return 0;if(C>=j)return-1;if(T>=S)return 1;if(T>>>=0,S>>>=0,C>>>=0,j>>>=0,this===w)return 0;for(var Y=j-C,ae=S-T,le=Math.min(Y,ae),ge=this.slice(C,j),k=w.slice(T,S),Z=0;Z<le;++Z)if(ge[Z]!==k[Z]){Y=ge[Z],ae=k[Z];break}return Y<ae?-1:ae<Y?1:0};function R(O,w,T,S,C){if(O.length===0)return-1;if(typeof T=="string"?(S=T,T=0):T>2147483647?T=2147483647:T<-2147483648&&(T=-2147483648),T=+T,je(T)&&(T=C?0:O.length-1),T<0&&(T=O.length+T),T>=O.length){if(C)return-1;T=O.length-1}else if(T<0)if(C)T=0;else return-1;if(typeof w=="string"&&(w=d.from(w,S)),d.isBuffer(w))return w.length===0?-1:I(O,w,T,S,C);if(typeof w=="number")return w=w&255,typeof Uint8Array.prototype.indexOf=="function"?C?Uint8Array.prototype.indexOf.call(O,w,T):Uint8Array.prototype.lastIndexOf.call(O,w,T):I(O,[w],T,S,C);throw new TypeError("val must be string, number or Buffer")}function I(O,w,T,S,C){var j=1,Y=O.length,ae=w.length;if(S!==void 0&&(S=String(S).toLowerCase(),S==="ucs2"||S==="ucs-2"||S==="utf16le"||S==="utf-16le")){if(O.length<2||w.length<2)return-1;j=2,Y/=2,ae/=2,T/=2}function le(xe,_e){return j===1?xe[_e]:xe.readUInt16BE(_e*j)}var ge;if(C){var k=-1;for(ge=T;ge<Y;ge++)if(le(O,ge)===le(w,k===-1?0:ge-k)){if(k===-1&&(k=ge),ge-k+1===ae)return k*j}else k!==-1&&(ge-=ge-k),k=-1}else for(T+ae>Y&&(T=Y-ae),ge=T;ge>=0;ge--){for(var Z=!0,me=0;me<ae;me++)if(le(O,ge+me)!==le(w,me)){Z=!1;break}if(Z)return ge}return-1}d.prototype.includes=function(w,T,S){return this.indexOf(w,T,S)!==-1},d.prototype.indexOf=function(w,T,S){return R(this,w,T,S,!0)},d.prototype.lastIndexOf=function(w,T,S){return R(this,w,T,S,!1)};function U(O,w,T,S){T=Number(T)||0;var C=O.length-T;S?(S=Number(S),S>C&&(S=C)):S=C;var j=w.length;S>j/2&&(S=j/2);for(var Y=0;Y<S;++Y){var ae=parseInt(w.substr(Y*2,2),16);if(je(ae))return Y;O[T+Y]=ae}return Y}function J(O,w,T,S){return Ve(Le(w,O.length-T),O,T,S)}function ne(O,w,T,S){return Ve(Te(w),O,T,S)}function F(O,w,T,S){return ne(O,w,T,S)}function P(O,w,T,S){return Ve(Ue(w),O,T,S)}function N(O,w,T,S){return Ve(be(w,O.length-T),O,T,S)}d.prototype.write=function(w,T,S,C){if(T===void 0)C="utf8",S=this.length,T=0;else if(S===void 0&&typeof T=="string")C=T,S=this.length,T=0;else if(isFinite(T))T=T>>>0,isFinite(S)?(S=S>>>0,C===void 0&&(C="utf8")):(C=S,S=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var j=this.length-T;if((S===void 0||S>j)&&(S=j),w.length>0&&(S<0||T<0)||T>this.length)throw new RangeError("Attempt to write outside buffer bounds");C||(C="utf8");for(var Y=!1;;)switch(C){case"hex":return U(this,w,T,S);case"utf8":case"utf-8":return J(this,w,T,S);case"ascii":return ne(this,w,T,S);case"latin1":case"binary":return F(this,w,T,S);case"base64":return P(this,w,T,S);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,w,T,S);default:if(Y)throw new TypeError("Unknown encoding: "+C);C=(""+C).toLowerCase(),Y=!0}},d.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function q(O,w,T){return w===0&&T===O.length?i.fromByteArray(O):i.fromByteArray(O.slice(w,T))}function G(O,w,T){T=Math.min(O.length,T);for(var S=[],C=w;C<T;){var j=O[C],Y=null,ae=j>239?4:j>223?3:j>191?2:1;if(C+ae<=T){var le,ge,k,Z;switch(ae){case 1:j<128&&(Y=j);break;case 2:le=O[C+1],(le&192)===128&&(Z=(j&31)<<6|le&63,Z>127&&(Y=Z));break;case 3:le=O[C+1],ge=O[C+2],(le&192)===128&&(ge&192)===128&&(Z=(j&15)<<12|(le&63)<<6|ge&63,Z>2047&&(Z<55296||Z>57343)&&(Y=Z));break;case 4:le=O[C+1],ge=O[C+2],k=O[C+3],(le&192)===128&&(ge&192)===128&&(k&192)===128&&(Z=(j&15)<<18|(le&63)<<12|(ge&63)<<6|k&63,Z>65535&&Z<1114112&&(Y=Z))}}Y===null?(Y=65533,ae=1):Y>65535&&(Y-=65536,S.push(Y>>>10&1023|55296),Y=56320|Y&1023),S.push(Y),C+=ae}return W(S)}var H=4096;function W(O){var w=O.length;if(w<=H)return String.fromCharCode.apply(String,O);for(var T="",S=0;S<w;)T+=String.fromCharCode.apply(String,O.slice(S,S+=H));return T}function $(O,w,T){var S="";T=Math.min(O.length,T);for(var C=w;C<T;++C)S+=String.fromCharCode(O[C]&127);return S}function V(O,w,T){var S="";T=Math.min(O.length,T);for(var C=w;C<T;++C)S+=String.fromCharCode(O[C]);return S}function z(O,w,T){var S=O.length;(!w||w<0)&&(w=0),(!T||T<0||T>S)&&(T=S);for(var C="",j=w;j<T;++j)C+=ke[O[j]];return C}function K(O,w,T){for(var S=O.slice(w,T),C="",j=0;j<S.length;j+=2)C+=String.fromCharCode(S[j]+S[j+1]*256);return C}d.prototype.slice=function(w,T){var S=this.length;w=~~w,T=T===void 0?S:~~T,w<0?(w+=S,w<0&&(w=0)):w>S&&(w=S),T<0?(T+=S,T<0&&(T=0)):T>S&&(T=S),T<w&&(T=w);var C=this.subarray(w,T);return Object.setPrototypeOf(C,d.prototype),C};function oe(O,w,T){if(O%1!==0||O<0)throw new RangeError("offset is not uint");if(O+w>T)throw new RangeError("Trying to access beyond buffer length")}d.prototype.readUIntLE=function(w,T,S){w=w>>>0,T=T>>>0,S||oe(w,T,this.length);for(var C=this[w],j=1,Y=0;++Y<T&&(j*=256);)C+=this[w+Y]*j;return C},d.prototype.readUIntBE=function(w,T,S){w=w>>>0,T=T>>>0,S||oe(w,T,this.length);for(var C=this[w+--T],j=1;T>0&&(j*=256);)C+=this[w+--T]*j;return C},d.prototype.readUInt8=function(w,T){return w=w>>>0,T||oe(w,1,this.length),this[w]},d.prototype.readUInt16LE=function(w,T){return w=w>>>0,T||oe(w,2,this.length),this[w]|this[w+1]<<8},d.prototype.readUInt16BE=function(w,T){return w=w>>>0,T||oe(w,2,this.length),this[w]<<8|this[w+1]},d.prototype.readUInt32LE=function(w,T){return w=w>>>0,T||oe(w,4,this.length),(this[w]|this[w+1]<<8|this[w+2]<<16)+this[w+3]*16777216},d.prototype.readUInt32BE=function(w,T){return w=w>>>0,T||oe(w,4,this.length),this[w]*16777216+(this[w+1]<<16|this[w+2]<<8|this[w+3])},d.prototype.readIntLE=function(w,T,S){w=w>>>0,T=T>>>0,S||oe(w,T,this.length);for(var C=this[w],j=1,Y=0;++Y<T&&(j*=256);)C+=this[w+Y]*j;return j*=128,C>=j&&(C-=Math.pow(2,8*T)),C},d.prototype.readIntBE=function(w,T,S){w=w>>>0,T=T>>>0,S||oe(w,T,this.length);for(var C=T,j=1,Y=this[w+--C];C>0&&(j*=256);)Y+=this[w+--C]*j;return j*=128,Y>=j&&(Y-=Math.pow(2,8*T)),Y},d.prototype.readInt8=function(w,T){return w=w>>>0,T||oe(w,1,this.length),this[w]&128?(255-this[w]+1)*-1:this[w]},d.prototype.readInt16LE=function(w,T){w=w>>>0,T||oe(w,2,this.length);var S=this[w]|this[w+1]<<8;return S&32768?S|4294901760:S},d.prototype.readInt16BE=function(w,T){w=w>>>0,T||oe(w,2,this.length);var S=this[w+1]|this[w]<<8;return S&32768?S|4294901760:S},d.prototype.readInt32LE=function(w,T){return w=w>>>0,T||oe(w,4,this.length),this[w]|this[w+1]<<8|this[w+2]<<16|this[w+3]<<24},d.prototype.readInt32BE=function(w,T){return w=w>>>0,T||oe(w,4,this.length),this[w]<<24|this[w+1]<<16|this[w+2]<<8|this[w+3]},d.prototype.readFloatLE=function(w,T){return w=w>>>0,T||oe(w,4,this.length),r.read(this,w,!0,23,4)},d.prototype.readFloatBE=function(w,T){return w=w>>>0,T||oe(w,4,this.length),r.read(this,w,!1,23,4)},d.prototype.readDoubleLE=function(w,T){return w=w>>>0,T||oe(w,8,this.length),r.read(this,w,!0,52,8)},d.prototype.readDoubleBE=function(w,T){return w=w>>>0,T||oe(w,8,this.length),r.read(this,w,!1,52,8)};function ce(O,w,T,S,C,j){if(!d.isBuffer(O))throw new TypeError('"buffer" argument must be a Buffer instance');if(w>C||w<j)throw new RangeError('"value" argument is out of bounds');if(T+S>O.length)throw new RangeError("Index out of range")}d.prototype.writeUIntLE=function(w,T,S,C){if(w=+w,T=T>>>0,S=S>>>0,!C){var j=Math.pow(2,8*S)-1;ce(this,w,T,S,j,0)}var Y=1,ae=0;for(this[T]=w&255;++ae<S&&(Y*=256);)this[T+ae]=w/Y&255;return T+S},d.prototype.writeUIntBE=function(w,T,S,C){if(w=+w,T=T>>>0,S=S>>>0,!C){var j=Math.pow(2,8*S)-1;ce(this,w,T,S,j,0)}var Y=S-1,ae=1;for(this[T+Y]=w&255;--Y>=0&&(ae*=256);)this[T+Y]=w/ae&255;return T+S},d.prototype.writeUInt8=function(w,T,S){return w=+w,T=T>>>0,S||ce(this,w,T,1,255,0),this[T]=w&255,T+1},d.prototype.writeUInt16LE=function(w,T,S){return w=+w,T=T>>>0,S||ce(this,w,T,2,65535,0),this[T]=w&255,this[T+1]=w>>>8,T+2},d.prototype.writeUInt16BE=function(w,T,S){return w=+w,T=T>>>0,S||ce(this,w,T,2,65535,0),this[T]=w>>>8,this[T+1]=w&255,T+2},d.prototype.writeUInt32LE=function(w,T,S){return w=+w,T=T>>>0,S||ce(this,w,T,4,4294967295,0),this[T+3]=w>>>24,this[T+2]=w>>>16,this[T+1]=w>>>8,this[T]=w&255,T+4},d.prototype.writeUInt32BE=function(w,T,S){return w=+w,T=T>>>0,S||ce(this,w,T,4,4294967295,0),this[T]=w>>>24,this[T+1]=w>>>16,this[T+2]=w>>>8,this[T+3]=w&255,T+4},d.prototype.writeIntLE=function(w,T,S,C){if(w=+w,T=T>>>0,!C){var j=Math.pow(2,8*S-1);ce(this,w,T,S,j-1,-j)}var Y=0,ae=1,le=0;for(this[T]=w&255;++Y<S&&(ae*=256);)w<0&&le===0&&this[T+Y-1]!==0&&(le=1),this[T+Y]=(w/ae>>0)-le&255;return T+S},d.prototype.writeIntBE=function(w,T,S,C){if(w=+w,T=T>>>0,!C){var j=Math.pow(2,8*S-1);ce(this,w,T,S,j-1,-j)}var Y=S-1,ae=1,le=0;for(this[T+Y]=w&255;--Y>=0&&(ae*=256);)w<0&&le===0&&this[T+Y+1]!==0&&(le=1),this[T+Y]=(w/ae>>0)-le&255;return T+S},d.prototype.writeInt8=function(w,T,S){return w=+w,T=T>>>0,S||ce(this,w,T,1,127,-128),w<0&&(w=255+w+1),this[T]=w&255,T+1},d.prototype.writeInt16LE=function(w,T,S){return w=+w,T=T>>>0,S||ce(this,w,T,2,32767,-32768),this[T]=w&255,this[T+1]=w>>>8,T+2},d.prototype.writeInt16BE=function(w,T,S){return w=+w,T=T>>>0,S||ce(this,w,T,2,32767,-32768),this[T]=w>>>8,this[T+1]=w&255,T+2},d.prototype.writeInt32LE=function(w,T,S){return w=+w,T=T>>>0,S||ce(this,w,T,4,2147483647,-2147483648),this[T]=w&255,this[T+1]=w>>>8,this[T+2]=w>>>16,this[T+3]=w>>>24,T+4},d.prototype.writeInt32BE=function(w,T,S){return w=+w,T=T>>>0,S||ce(this,w,T,4,2147483647,-2147483648),w<0&&(w=4294967295+w+1),this[T]=w>>>24,this[T+1]=w>>>16,this[T+2]=w>>>8,this[T+3]=w&255,T+4};function Q(O,w,T,S,C,j){if(T+S>O.length)throw new RangeError("Index out of range");if(T<0)throw new RangeError("Index out of range")}function pe(O,w,T,S,C){return w=+w,T=T>>>0,C||Q(O,w,T,4),r.write(O,w,T,S,23,4),T+4}d.prototype.writeFloatLE=function(w,T,S){return pe(this,w,T,!0,S)},d.prototype.writeFloatBE=function(w,T,S){return pe(this,w,T,!1,S)};function fe(O,w,T,S,C){return w=+w,T=T>>>0,C||Q(O,w,T,8),r.write(O,w,T,S,52,8),T+8}d.prototype.writeDoubleLE=function(w,T,S){return fe(this,w,T,!0,S)},d.prototype.writeDoubleBE=function(w,T,S){return fe(this,w,T,!1,S)},d.prototype.copy=function(w,T,S,C){if(!d.isBuffer(w))throw new TypeError("argument should be a Buffer");if(S||(S=0),!C&&C!==0&&(C=this.length),T>=w.length&&(T=w.length),T||(T=0),C>0&&C<S&&(C=S),C===S||w.length===0||this.length===0)return 0;if(T<0)throw new RangeError("targetStart out of bounds");if(S<0||S>=this.length)throw new RangeError("Index out of range");if(C<0)throw new RangeError("sourceEnd out of bounds");C>this.length&&(C=this.length),w.length-T<C-S&&(C=w.length-T+S);var j=C-S;if(this===w&&typeof Uint8Array.prototype.copyWithin=="function")this.copyWithin(T,S,C);else if(this===w&&S<T&&T<C)for(var Y=j-1;Y>=0;--Y)w[Y+T]=this[Y+S];else Uint8Array.prototype.set.call(w,this.subarray(S,C),T);return j},d.prototype.fill=function(w,T,S,C){if(typeof w=="string"){if(typeof T=="string"?(C=T,T=0,S=this.length):typeof S=="string"&&(C=S,S=this.length),C!==void 0&&typeof C!="string")throw new TypeError("encoding must be a string");if(typeof C=="string"&&!d.isEncoding(C))throw new TypeError("Unknown encoding: "+C);if(w.length===1){var j=w.charCodeAt(0);(C==="utf8"&&j<128||C==="latin1")&&(w=j)}}else typeof w=="number"?w=w&255:typeof w=="boolean"&&(w=Number(w));if(T<0||this.length<T||this.length<S)throw new RangeError("Out of range index");if(S<=T)return this;T=T>>>0,S=S===void 0?this.length:S>>>0,w||(w=0);var Y;if(typeof w=="number")for(Y=T;Y<S;++Y)this[Y]=w;else{var ae=d.isBuffer(w)?w:d.from(w,C),le=ae.length;if(le===0)throw new TypeError('The value "'+w+'" is invalid for argument "value"');for(Y=0;Y<S-T;++Y)this[Y+T]=ae[Y%le]}return this};var ye=/[^+\/0-9A-Za-z-_]/g;function de(O){if(O=O.split("=")[0],O=O.trim().replace(ye,""),O.length<2)return"";for(;O.length%4!==0;)O=O+"=";return O}function Le(O,w){w=w||1/0;for(var T,S=O.length,C=null,j=[],Y=0;Y<S;++Y){if(T=O.charCodeAt(Y),T>55295&&T<57344){if(!C){if(T>56319){(w-=3)>-1&&j.push(239,191,189);continue}else if(Y+1===S){(w-=3)>-1&&j.push(239,191,189);continue}C=T;continue}if(T<56320){(w-=3)>-1&&j.push(239,191,189),C=T;continue}T=(C-55296<<10|T-56320)+65536}else C&&(w-=3)>-1&&j.push(239,191,189);if(C=null,T<128){if((w-=1)<0)break;j.push(T)}else if(T<2048){if((w-=2)<0)break;j.push(T>>6|192,T&63|128)}else if(T<65536){if((w-=3)<0)break;j.push(T>>12|224,T>>6&63|128,T&63|128)}else if(T<1114112){if((w-=4)<0)break;j.push(T>>18|240,T>>12&63|128,T>>6&63|128,T&63|128)}else throw new Error("Invalid code point")}return j}function Te(O){for(var w=[],T=0;T<O.length;++T)w.push(O.charCodeAt(T)&255);return w}function be(O,w){for(var T,S,C,j=[],Y=0;Y<O.length&&!((w-=2)<0);++Y)T=O.charCodeAt(Y),S=T>>8,C=T%256,j.push(C),j.push(S);return j}function Ue(O){return i.toByteArray(de(O))}function Ve(O,w,T,S){for(var C=0;C<S&&!(C+T>=w.length||C>=O.length);++C)w[C+T]=O[C];return C}function Be(O,w){return O instanceof w||O!=null&&O.constructor!=null&&O.constructor.name!=null&&O.constructor.name===w.name}function je(O){return O!==O}var ke=function(){for(var O="0123456789abcdef",w=new Array(256),T=0;T<16;++T)for(var S=T*16,C=0;C<16;++C)w[S+C]=O[T]+O[C];return w}()}).call(this,o("buffer").Buffer)},{"base64-js":68,buffer:70,ieee754:75}],71:[function(o,e,t){var n=function(i){function r(){this.fetch=!1,this.DOMException=i.DOMException}return r.prototype=i,new r}(typeof self!="undefined"?self:this);(function(i){(function(r){var l={searchParams:"URLSearchParams"in i,iterable:"Symbol"in i&&"iterator"in Symbol,blob:"FileReader"in i&&"Blob"in i&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in i,arrayBuffer:"ArrayBuffer"in i};function a(F){return F&&DataView.prototype.isPrototypeOf(F)}if(l.arrayBuffer)var c=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(F){return F&&c.indexOf(Object.prototype.toString.call(F))>-1};function d(F){if(typeof F!="string"&&(F=String(F)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(F))throw new TypeError("Invalid character in header field name");return F.toLowerCase()}function m(F){return typeof F!="string"&&(F=String(F)),F}function _(F){var P={next:function(){var N=F.shift();return{done:N===void 0,value:N}}};return l.iterable&&(P[Symbol.iterator]=function(){return P}),P}function p(F){this.map={},F instanceof p?F.forEach(function(P,N){this.append(N,P)},this):Array.isArray(F)?F.forEach(function(P){this.append(P[0],P[1])},this):F&&Object.getOwnPropertyNames(F).forEach(function(P){this.append(P,F[P])},this)}p.prototype.append=function(F,P){F=d(F),P=m(P);var N=this.map[F];this.map[F]=N?N+", "+P:P},p.prototype.delete=function(F){delete this.map[d(F)]},p.prototype.get=function(F){return F=d(F),this.has(F)?this.map[F]:null},p.prototype.has=function(F){return this.map.hasOwnProperty(d(F))},p.prototype.set=function(F,P){this.map[d(F)]=m(P)},p.prototype.forEach=function(F,P){for(var N in this.map)this.map.hasOwnProperty(N)&&F.call(P,this.map[N],N,this)},p.prototype.keys=function(){var F=[];return this.forEach(function(P,N){F.push(N)}),_(F)},p.prototype.values=function(){var F=[];return this.forEach(function(P){F.push(P)}),_(F)},p.prototype.entries=function(){var F=[];return this.forEach(function(P,N){F.push([N,P])}),_(F)},l.iterable&&(p.prototype[Symbol.iterator]=p.prototype.entries);function y(F){if(F.bodyUsed)return Promise.reject(new TypeError("Already read"));F.bodyUsed=!0}function g(F){return new Promise(function(P,N){F.onload=function(){P(F.result)},F.onerror=function(){N(F.error)}})}function v(F){var P=new FileReader,N=g(P);return P.readAsArrayBuffer(F),N}function b(F){var P=new FileReader,N=g(P);return P.readAsText(F),N}function x(F){for(var P=new Uint8Array(F),N=new Array(P.length),q=0;q<P.length;q++)N[q]=String.fromCharCode(P[q]);return N.join("")}function M(F){if(F.slice)return F.slice(0);var P=new Uint8Array(F.byteLength);return P.set(new Uint8Array(F)),P.buffer}function E(){return this.bodyUsed=!1,this._initBody=function(F){this._bodyInit=F,F?typeof F=="string"?this._bodyText=F:l.blob&&Blob.prototype.isPrototypeOf(F)?this._bodyBlob=F:l.formData&&FormData.prototype.isPrototypeOf(F)?this._bodyFormData=F:l.searchParams&&URLSearchParams.prototype.isPrototypeOf(F)?this._bodyText=F.toString():l.arrayBuffer&&l.blob&&a(F)?(this._bodyArrayBuffer=M(F.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):l.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(F)||u(F))?this._bodyArrayBuffer=M(F):this._bodyText=F=Object.prototype.toString.call(F):this._bodyText="",this.headers.get("content-type")||(typeof F=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):l.searchParams&&URLSearchParams.prototype.isPrototypeOf(F)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},l.blob&&(this.blob=function(){var F=y(this);if(F)return F;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?y(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(v)}),this.text=function(){var F=y(this);if(F)return F;if(this._bodyBlob)return b(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(x(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},l.formData&&(this.formData=function(){return this.text().then(R)}),this.json=function(){return this.text().then(JSON.parse)},this}var A=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function L(F){var P=F.toUpperCase();return A.indexOf(P)>-1?P:F}function D(F,P){P=P||{};var N=P.body;if(F instanceof D){if(F.bodyUsed)throw new TypeError("Already read");this.url=F.url,this.credentials=F.credentials,P.headers||(this.headers=new p(F.headers)),this.method=F.method,this.mode=F.mode,this.signal=F.signal,!N&&F._bodyInit!=null&&(N=F._bodyInit,F.bodyUsed=!0)}else this.url=String(F);if(this.credentials=P.credentials||this.credentials||"same-origin",(P.headers||!this.headers)&&(this.headers=new p(P.headers)),this.method=L(P.method||this.method||"GET"),this.mode=P.mode||this.mode||null,this.signal=P.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&N)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(N)}D.prototype.clone=function(){return new D(this,{body:this._bodyInit})};function R(F){var P=new FormData;return F.trim().split("&").forEach(function(N){if(N){var q=N.split("="),G=q.shift().replace(/\+/g," "),H=q.join("=").replace(/\+/g," ");P.append(decodeURIComponent(G),decodeURIComponent(H))}}),P}function I(F){var P=new p,N=F.replace(/\r?\n[\t ]+/g," ");return N.split(/\r?\n/).forEach(function(q){var G=q.split(":"),H=G.shift().trim();if(H){var W=G.join(":").trim();P.append(H,W)}}),P}E.call(D.prototype);function U(F,P){P||(P={}),this.type="default",this.status=P.status===void 0?200:P.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in P?P.statusText:"OK",this.headers=new p(P.headers),this.url=P.url||"",this._initBody(F)}E.call(U.prototype),U.prototype.clone=function(){return new U(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},U.error=function(){var F=new U(null,{status:0,statusText:""});return F.type="error",F};var J=[301,302,303,307,308];U.redirect=function(F,P){if(J.indexOf(P)===-1)throw new RangeError("Invalid status code");return new U(null,{status:P,headers:{location:F}})},r.DOMException=i.DOMException;try{new r.DOMException}catch{r.DOMException=function(P,N){this.message=P,this.name=N;var q=Error(P);this.stack=q.stack},r.DOMException.prototype=Object.create(Error.prototype),r.DOMException.prototype.constructor=r.DOMException}function ne(F,P){return new Promise(function(N,q){var G=new D(F,P);if(G.signal&&G.signal.aborted)return q(new r.DOMException("Aborted","AbortError"));var H=new XMLHttpRequest;function W(){H.abort()}H.onload=function(){var $={status:H.status,statusText:H.statusText,headers:I(H.getAllResponseHeaders()||"")};$.url="responseURL"in H?H.responseURL:$.headers.get("X-Request-URL");var V="response"in H?H.response:H.responseText;N(new U(V,$))},H.onerror=function(){q(new TypeError("Network request failed"))},H.ontimeout=function(){q(new TypeError("Network request failed"))},H.onabort=function(){q(new r.DOMException("Aborted","AbortError"))},H.open(G.method,G.url,!0),G.credentials==="include"?H.withCredentials=!0:G.credentials==="omit"&&(H.withCredentials=!1),"responseType"in H&&l.blob&&(H.responseType="blob"),G.headers.forEach(function($,V){H.setRequestHeader(V,$)}),G.signal&&(G.signal.addEventListener("abort",W),H.onreadystatechange=function(){H.readyState===4&&G.signal.removeEventListener("abort",W)}),H.send(typeof G._bodyInit=="undefined"?null:G._bodyInit)})}return ne.polyfill=!0,i.fetch||(i.fetch=ne,i.Headers=p,i.Request=D,i.Response=U),r.Headers=p,r.Request=D,r.Response=U,r.fetch=ne,r})({})})(n),delete n.fetch.polyfill,t=n.fetch,t.default=n.fetch,t.fetch=n.fetch,t.Headers=n.Headers,t.Request=n.Request,t.Response=n.Response,e.exports=t},{}],72:[function(require,module,exports){(function(Buffer){const{multiByteIndexOf,stringToBytes,readUInt64LE,tarHeaderChecksumMatches,uint8ArrayUtf8ByteString}=require("./util"),supported=require("./supported"),xpiZipFilename=stringToBytes("META-INF/mozilla.rsa"),oxmlContentTypes=stringToBytes("[Content_Types].xml"),oxmlRels=stringToBytes("_rels/.rels"),fileType=o=>{if(!(o instanceof Uint8Array||o instanceof ArrayBuffer||Buffer.isBuffer(o)))throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof o}\``);const e=o instanceof Uint8Array?o:new Uint8Array(o);if(!(e&&e.length>1))return;const t=(r,l)=>{l={offset:0,...l};for(let a=0;a<r.length;a++)if(l.mask){if(r[a]!==(l.mask[a]&e[a+l.offset]))return!1}else if(r[a]!==e[a+l.offset])return!1;return!0},n=(r,l)=>t(stringToBytes(r),l);if(t([255,216,255]))return{ext:"jpg",mime:"image/jpeg"};if(t([137,80,78,71,13,10,26,10])){const l=e.findIndex((c,u)=>u>=33&&e[u]===73&&e[u+1]===68&&e[u+2]===65&&e[u+3]===84),a=e.subarray(33,l);return a.findIndex((c,u)=>a[u]===97&&a[u+1]===99&&a[u+2]===84&&a[u+3]===76)>=0?{ext:"apng",mime:"image/apng"}:{ext:"png",mime:"image/png"}}if(t([71,73,70]))return{ext:"gif",mime:"image/gif"};if(t([87,69,66,80],{offset:8}))return{ext:"webp",mime:"image/webp"};if(t([70,76,73,70]))return{ext:"flif",mime:"image/flif"};if((t([73,73,42,0])||t([77,77,0,42]))&&t([67,82],{offset:8}))return{ext:"cr2",mime:"image/x-canon-cr2"};if(t([73,73,82,79,8,0,0,0,24]))return{ext:"orf",mime:"image/x-olympus-orf"};if(t([73,73,42,0])&&(t([16,251,134,1],{offset:4})||t([8,0,0,0,19,0],{offset:4})||t([8,0,0,0,18,0],{offset:4})))return{ext:"arw",mime:"image/x-sony-arw"};if(t([73,73,42,0,8,0,0,0])&&(t([45,0,254,0],{offset:8})||t([39,0,254,0],{offset:8})))return{ext:"dng",mime:"image/x-adobe-dng"};if(t([73,73,42,0])&&t([28,0,254,0],{offset:8}))return{ext:"nef",mime:"image/x-nikon-nef"};if(t([73,73,85,0,24,0,0,0,136,231,116,216]))return{ext:"rw2",mime:"image/x-panasonic-rw2"};if(n("FUJIFILMCCD-RAW"))return{ext:"raf",mime:"image/x-fujifilm-raf"};if(t([73,73,42,0])||t([77,77,0,42]))return{ext:"tif",mime:"image/tiff"};if(t([66,77]))return{ext:"bmp",mime:"image/bmp"};if(t([73,73,188]))return{ext:"jxr",mime:"image/vnd.ms-photo"};if(t([56,66,80,83]))return{ext:"psd",mime:"image/vnd.adobe.photoshop"};const i=[80,75,3,4];if(t(i)){if(t([109,105,109,101,116,121,112,101,97,112,112,108,105,99,97,116,105,111,110,47,101,112,117,98,43,122,105,112],{offset:30}))return{ext:"epub",mime:"application/epub+zip"};if(t(xpiZipFilename,{offset:30}))return{ext:"xpi",mime:"application/x-xpinstall"};if(n("mimetypeapplication/vnd.oasis.opendocument.text",{offset:30}))return{ext:"odt",mime:"application/vnd.oasis.opendocument.text"};if(n("mimetypeapplication/vnd.oasis.opendocument.spreadsheet",{offset:30}))return{ext:"ods",mime:"application/vnd.oasis.opendocument.spreadsheet"};if(n("mimetypeapplication/vnd.oasis.opendocument.presentation",{offset:30}))return{ext:"odp",mime:"application/vnd.oasis.opendocument.presentation"};let r=0,l=!1,a;do{const c=r+30;if(l||(l=t(oxmlContentTypes,{offset:c})||t(oxmlRels,{offset:c})),a||(n("word/",{offset:c})?a={ext:"docx",mime:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"}:n("ppt/",{offset:c})?a={ext:"pptx",mime:"application/vnd.openxmlformats-officedocument.presentationml.presentation"}:n("xl/",{offset:c})&&(a={ext:"xlsx",mime:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})),l&&a)return a;r=multiByteIndexOf(e,i,c)}while(r>=0);if(a)return a}if(t([80,75])&&(e[2]===3||e[2]===5||e[2]===7)&&(e[3]===4||e[3]===6||e[3]===8))return{ext:"zip",mime:"application/zip"};if(t([48,48,48,48,48,48],{offset:148,mask:[248,248,248,248,248,248]})&&tarHeaderChecksumMatches(e))return{ext:"tar",mime:"application/x-tar"};if(t([82,97,114,33,26,7])&&(e[6]===0||e[6]===1))return{ext:"rar",mime:"application/x-rar-compressed"};if(t([31,139,8]))return{ext:"gz",mime:"application/gzip"};if(t([66,90,104]))return{ext:"bz2",mime:"application/x-bzip2"};if(t([55,122,188,175,39,28]))return{ext:"7z",mime:"application/x-7z-compressed"};if(t([120,1]))return{ext:"dmg",mime:"application/x-apple-diskimage"};if(t([102,114,101,101],{offset:4})||t([109,100,97,116],{offset:4})||t([109,111,111,118],{offset:4})||t([119,105,100,101],{offset:4}))return{ext:"mov",mime:"video/quicktime"};if(t([102,116,121,112],{offset:4})&&(e[8]&96)!==0&&(e[9]&96)!==0&&(e[10]&96)!==0&&(e[11]&96)!==0){const r=uint8ArrayUtf8ByteString(e,8,12);switch(r){case"mif1":return{ext:"heic",mime:"image/heif"};case"msf1":return{ext:"heic",mime:"image/heif-sequence"};case"heic":case"heix":return{ext:"heic",mime:"image/heic"};case"hevc":case"hevx":return{ext:"heic",mime:"image/heic-sequence"};case"qt  ":return{ext:"mov",mime:"video/quicktime"};case"M4V ":case"M4VH":case"M4VP":return{ext:"m4v",mime:"video/x-m4v"};case"M4P ":return{ext:"m4p",mime:"video/mp4"};case"M4B ":return{ext:"m4b",mime:"audio/mp4"};case"M4A ":return{ext:"m4a",mime:"audio/x-m4a"};case"F4V ":return{ext:"f4v",mime:"video/mp4"};case"F4P ":return{ext:"f4p",mime:"video/mp4"};case"F4A ":return{ext:"f4a",mime:"audio/mp4"};case"F4B ":return{ext:"f4b",mime:"audio/mp4"};default:return r.startsWith("3g")?r.startsWith("3g2")?{ext:"3g2",mime:"video/3gpp2"}:{ext:"3gp",mime:"video/3gpp"}:{ext:"mp4",mime:"video/mp4"}}}if(t([77,84,104,100]))return{ext:"mid",mime:"audio/midi"};if(t([26,69,223,163])){const r=e.subarray(4,4100),l=r.findIndex((a,c,u)=>u[c]===66&&u[c+1]===130);if(l!==-1){const a=l+3,c=u=>[...u].every((d,m)=>r[a+m]===d.charCodeAt(0));if(c("matroska"))return{ext:"mkv",mime:"video/x-matroska"};if(c("webm"))return{ext:"webm",mime:"video/webm"}}}if(t([82,73,70,70])){if(t([65,86,73],{offset:8}))return{ext:"avi",mime:"video/vnd.avi"};if(t([87,65,86,69],{offset:8}))return{ext:"wav",mime:"audio/vnd.wave"};if(t([81,76,67,77],{offset:8}))return{ext:"qcp",mime:"audio/qcelp"}}if(t([48,38,178,117,142,102,207,17,166,217])){let r=30;do{const l=readUInt64LE(e,r+16);if(t([145,7,220,183,183,169,207,17,142,230,0,192,12,32,83,101],{offset:r})){if(t([64,158,105,248,77,91,207,17,168,253,0,128,95,92,68,43],{offset:r+24}))return{ext:"wma",mime:"audio/x-ms-wma"};if(t([192,239,25,188,77,91,207,17,168,253,0,128,95,92,68,43],{offset:r+24}))return{ext:"wmv",mime:"video/x-ms-asf"};break}r+=l}while(r+24<=e.length);return{ext:"asf",mime:"application/vnd.ms-asf"}}if(t([0,0,1,186])||t([0,0,1,179]))return{ext:"mpg",mime:"video/mpeg"};for(let r=0;r<2&&r<e.length-16;r++){if(t([73,68,51],{offset:r})||t([255,226],{offset:r,mask:[255,230]}))return{ext:"mp3",mime:"audio/mpeg"};if(t([255,228],{offset:r,mask:[255,230]}))return{ext:"mp2",mime:"audio/mpeg"};if(t([255,248],{offset:r,mask:[255,252]}))return{ext:"mp2",mime:"audio/mpeg"};if(t([255,240],{offset:r,mask:[255,252]}))return{ext:"mp4",mime:"audio/mpeg"}}if(t([79,112,117,115,72,101,97,100],{offset:28}))return{ext:"opus",mime:"audio/opus"};if(t([79,103,103,83]))return t([128,116,104,101,111,114,97],{offset:28})?{ext:"ogv",mime:"video/ogg"}:t([1,118,105,100,101,111,0],{offset:28})?{ext:"ogm",mime:"video/ogg"}:t([127,70,76,65,67],{offset:28})?{ext:"oga",mime:"audio/ogg"}:t([83,112,101,101,120,32,32],{offset:28})?{ext:"spx",mime:"audio/ogg"}:t([1,118,111,114,98,105,115],{offset:28})?{ext:"ogg",mime:"audio/ogg"}:{ext:"ogx",mime:"application/ogg"};if(t([102,76,97,67]))return{ext:"flac",mime:"audio/x-flac"};if(t([77,65,67,32]))return{ext:"ape",mime:"audio/ape"};if(t([119,118,112,107]))return{ext:"wv",mime:"audio/wavpack"};if(t([35,33,65,77,82,10]))return{ext:"amr",mime:"audio/amr"};if(t([37,80,68,70]))return{ext:"pdf",mime:"application/pdf"};if(t([77,90]))return{ext:"exe",mime:"application/x-msdownload"};if((e[0]===67||e[0]===70)&&t([87,83],{offset:1}))return{ext:"swf",mime:"application/x-shockwave-flash"};if(t([123,92,114,116,102]))return{ext:"rtf",mime:"application/rtf"};if(t([0,97,115,109]))return{ext:"wasm",mime:"application/wasm"};if(t([119,79,70,70])&&(t([0,1,0,0],{offset:4})||t([79,84,84,79],{offset:4})))return{ext:"woff",mime:"font/woff"};if(t([119,79,70,50])&&(t([0,1,0,0],{offset:4})||t([79,84,84,79],{offset:4})))return{ext:"woff2",mime:"font/woff2"};if(t([76,80],{offset:34})&&(t([0,0,1],{offset:8})||t([1,0,2],{offset:8})||t([2,0,2],{offset:8})))return{ext:"eot",mime:"application/vnd.ms-fontobject"};if(t([0,1,0,0,0]))return{ext:"ttf",mime:"font/ttf"};if(t([79,84,84,79,0]))return{ext:"otf",mime:"font/otf"};if(t([0,0,1,0]))return{ext:"ico",mime:"image/x-icon"};if(t([0,0,2,0]))return{ext:"cur",mime:"image/x-icon"};if(t([70,76,86,1]))return{ext:"flv",mime:"video/x-flv"};if(t([37,33]))return{ext:"ps",mime:"application/postscript"};if(t([253,55,122,88,90,0]))return{ext:"xz",mime:"application/x-xz"};if(t([83,81,76,105]))return{ext:"sqlite",mime:"application/x-sqlite3"};if(t([78,69,83,26]))return{ext:"nes",mime:"application/x-nintendo-nes-rom"};if(t([67,114,50,52]))return{ext:"crx",mime:"application/x-google-chrome-extension"};if(t([77,83,67,70])||t([73,83,99,40]))return{ext:"cab",mime:"application/vnd.ms-cab-compressed"};if(t([33,60,97,114,99,104,62,10,100,101,98,105,97,110,45,98,105,110,97,114,121]))return{ext:"deb",mime:"application/x-deb"};if(t([33,60,97,114,99,104,62]))return{ext:"ar",mime:"application/x-unix-archive"};if(t([237,171,238,219]))return{ext:"rpm",mime:"application/x-rpm"};if(t([31,160])||t([31,157]))return{ext:"Z",mime:"application/x-compress"};if(t([76,90,73,80]))return{ext:"lz",mime:"application/x-lzip"};if(t([208,207,17,224,161,177,26,225,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,62]))return{ext:"msi",mime:"application/x-msi"};if(t([6,14,43,52,2,5,1,1,13,1,2,1,1,2]))return{ext:"mxf",mime:"application/mxf"};if(t([71],{offset:4})&&(t([71],{offset:192})||t([71],{offset:196})))return{ext:"mts",mime:"video/mp2t"};if(t([66,76,69,78,68,69,82]))return{ext:"blend",mime:"application/x-blender"};if(t([66,80,71,251]))return{ext:"bpg",mime:"image/bpg"};if(t([0,0,0,12,106,80,32,32,13,10,135,10])){if(t([106,112,50,32],{offset:20}))return{ext:"jp2",mime:"image/jp2"};if(t([106,112,120,32],{offset:20}))return{ext:"jpx",mime:"image/jpx"};if(t([106,112,109,32],{offset:20}))return{ext:"jpm",mime:"image/jpm"};if(t([109,106,112,50],{offset:20}))return{ext:"mj2",mime:"image/mj2"}}if(t([70,79,82,77]))return{ext:"aif",mime:"audio/aiff"};if(n("<?xml "))return{ext:"xml",mime:"application/xml"};if(t([66,79,79,75,77,79,66,73],{offset:60}))return{ext:"mobi",mime:"application/x-mobipocket-ebook"};if(t([171,75,84,88,32,49,49,187,13,10,26,10]))return{ext:"ktx",mime:"image/ktx"};if(t([68,73,67,77],{offset:128}))return{ext:"dcm",mime:"application/dicom"};if(t([77,80,43]))return{ext:"mpc",mime:"audio/x-musepack"};if(t([77,80,67,75]))return{ext:"mpc",mime:"audio/x-musepack"};if(t([66,69,71,73,78,58]))return{ext:"ics",mime:"text/calendar"};if(t([103,108,84,70,2,0,0,0]))return{ext:"glb",mime:"model/gltf-binary"};if(t([212,195,178,161])||t([161,178,195,212]))return{ext:"pcap",mime:"application/vnd.tcpdump.pcap"};if(t([68,83,68,32]))return{ext:"dsf",mime:"audio/x-dsf"};if(t([76,0,0,0,1,20,2,0,0,0,0,0,192,0,0,0,0,0,0,70]))return{ext:"lnk",mime:"application/x.ms.shortcut"};if(t([98,111,111,107,0,0,0,0,109,97,114,107,0,0,0,0]))return{ext:"alias",mime:"application/x.apple.alias"};if(n("Creative Voice File"))return{ext:"voc",mime:"audio/x-voc"};if(t([11,119]))return{ext:"ac3",mime:"audio/vnd.dolby.dd-raw"};if((t([126,16,4])||t([126,24,4]))&&t([48,77,73,69],{offset:4}))return{ext:"mie",mime:"application/x-mie"}};module.exports=fileType,Object.defineProperty(fileType,"minimumBytes",{value:4100}),fileType.stream=readableStream=>new Promise((resolve,reject)=>{const stream=eval("require")("stream");readableStream.on("error",reject),readableStream.once("readable",()=>{const o=new stream.PassThrough,e=readableStream.read(module.exports.minimumBytes)||readableStream.read();try{o.fileType=fileType(e)}catch(t){reject(t)}readableStream.unshift(e),stream.pipeline?resolve(stream.pipeline(readableStream,o,()=>{})):resolve(readableStream.pipe(o))})}),Object.defineProperty(fileType,"extensions",{get(){return new Set(supported.extensions)}}),Object.defineProperty(fileType,"mimeTypes",{get(){return new Set(supported.mimeTypes)}})}).call(this,{isBuffer:require("../is-buffer/index.js")})},{"../is-buffer/index.js":76,"./supported":73,"./util":74}],73:[function(o,e,t){e.exports={extensions:["jpg","png","apng","gif","webp","flif","cr2","orf","arw","dng","nef","rw2","raf","tif","bmp","jxr","psd","zip","tar","rar","gz","bz2","7z","dmg","mp4","mid","mkv","webm","mov","avi","mpg","mp2","mp3","m4a","oga","ogg","ogv","opus","flac","wav","spx","amr","pdf","epub","exe","swf","rtf","wasm","woff","woff2","eot","ttf","otf","ico","flv","ps","xz","sqlite","nes","crx","xpi","cab","deb","ar","rpm","Z","lz","msi","mxf","mts","blend","bpg","docx","pptx","xlsx","3gp","3g2","jp2","jpm","jpx","mj2","aif","qcp","odt","ods","odp","xml","mobi","heic","cur","ktx","ape","wv","wmv","wma","dcm","ics","glb","pcap","dsf","lnk","alias","voc","ac3","m4v","m4p","m4b","f4v","f4p","f4b","f4a","mie","asf","ogm","ogx","mpc"],mimeTypes:["image/jpeg","image/png","image/gif","image/webp","image/flif","image/x-canon-cr2","image/tiff","image/bmp","image/vnd.ms-photo","image/vnd.adobe.photoshop","application/epub+zip","application/x-xpinstall","application/vnd.oasis.opendocument.text","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.presentation","application/vnd.openxmlformats-officedocument.wordprocessingml.document","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/zip","application/x-tar","application/x-rar-compressed","application/gzip","application/x-bzip2","application/x-7z-compressed","application/x-apple-diskimage","video/mp4","audio/midi","video/x-matroska","video/webm","video/quicktime","video/vnd.avi","audio/vnd.wave","audio/qcelp","audio/x-ms-wma","video/x-ms-asf","application/vnd.ms-asf","video/mpeg","video/3gpp","audio/mpeg","audio/mp4","audio/opus","video/ogg","audio/ogg","application/ogg","audio/x-flac","audio/ape","audio/wavpack","audio/amr","application/pdf","application/x-msdownload","application/x-shockwave-flash","application/rtf","application/wasm","font/woff","font/woff2","application/vnd.ms-fontobject","font/ttf","font/otf","image/x-icon","video/x-flv","application/postscript","application/x-xz","application/x-sqlite3","application/x-nintendo-nes-rom","application/x-google-chrome-extension","application/vnd.ms-cab-compressed","application/x-deb","application/x-unix-archive","application/x-rpm","application/x-compress","application/x-lzip","application/x-msi","application/x-mie","application/mxf","video/mp2t","application/x-blender","image/bpg","image/jp2","image/jpx","image/jpm","image/mj2","audio/aiff","application/xml","application/x-mobipocket-ebook","image/heif","image/heif-sequence","image/heic","image/heic-sequence","image/ktx","application/dicom","audio/x-musepack","text/calendar","model/gltf-binary","application/vnd.tcpdump.pcap","audio/x-dsf","application/x.ms.shortcut","application/x.apple.alias","audio/x-voc","audio/vnd.dolby.dd-raw","audio/x-m4a","image/apng","image/x-olympus-orf","image/x-sony-arw","image/x-adobe-dng","image/x-nikon-nef","image/x-panasonic-rw2","image/x-fujifilm-raf","video/x-m4v","video/3gpp2"]}},{}],74:[function(o,e,t){(function(n){t.stringToBytes=r=>[...r].map(l=>l.charCodeAt(0));const i=(r,l,a)=>String.fromCharCode(...r.slice(l,a));t.readUInt64LE=(r,l=0)=>{let a=r[l],c=1,u=0;for(;++u<8;)c*=256,a+=r[l+u]*c;return a},t.tarHeaderChecksumMatches=r=>{if(r.length<512)return!1;const l=128;let a=256,c=0;for(let d=0;d<148;d++){const m=r[d];a+=m,c+=m&l}for(let d=156;d<512;d++){const m=r[d];a+=m,c+=m&l}const u=parseInt(i(r,148,154),8);return u===a||u===a-(c<<1)},t.multiByteIndexOf=(r,l,a=0)=>{if(n&&n.isBuffer(r))return r.indexOf(n.from(l),a);const c=(d,m,_)=>{for(let p=1;p<m.length;p++)if(m[p]!==d[_+p])return!1;return!0};let u=r.indexOf(l[0],a);for(;u>=0;){if(c(r,l,u))return u;u=r.indexOf(l[0],u+1)}return-1},t.uint8ArrayUtf8ByteString=i}).call(this,o("buffer").Buffer)},{buffer:70}],75:[function(o,e,t){t.read=function(n,i,r,l,a){var c,u,d=a*8-l-1,m=(1<<d)-1,_=m>>1,p=-7,y=r?a-1:0,g=r?-1:1,v=n[i+y];for(y+=g,c=v&(1<<-p)-1,v>>=-p,p+=d;p>0;c=c*256+n[i+y],y+=g,p-=8);for(u=c&(1<<-p)-1,c>>=-p,p+=l;p>0;u=u*256+n[i+y],y+=g,p-=8);if(c===0)c=1-_;else{if(c===m)return u?NaN:(v?-1:1)*(1/0);u=u+Math.pow(2,l),c=c-_}return(v?-1:1)*u*Math.pow(2,c-l)},t.write=function(n,i,r,l,a,c){var u,d,m,_=c*8-a-1,p=(1<<_)-1,y=p>>1,g=a===23?Math.pow(2,-24)-Math.pow(2,-77):0,v=l?0:c-1,b=l?1:-1,x=i<0||i===0&&1/i<0?1:0;for(i=Math.abs(i),isNaN(i)||i===1/0?(d=isNaN(i)?1:0,u=p):(u=Math.floor(Math.log(i)/Math.LN2),i*(m=Math.pow(2,-u))<1&&(u--,m*=2),u+y>=1?i+=g/m:i+=g*Math.pow(2,1-y),i*m>=2&&(u++,m/=2),u+y>=p?(d=0,u=p):u+y>=1?(d=(i*m-1)*Math.pow(2,a),u=u+y):(d=i*Math.pow(2,y-1)*Math.pow(2,a),u=0));a>=8;n[r+v]=d&255,v+=b,d/=256,a-=8);for(u=u<<a|d,_+=a;_>0;n[r+v]=u&255,v+=b,u/=256,_-=8);n[r+v-b]|=x*128}},{}],76:[function(o,e,t){e.exports=function(r){return r!=null&&(n(r)||i(r)||!!r._isBuffer)};function n(r){return!!r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function i(r){return typeof r.readFloatLE=="function"&&typeof r.slice=="function"&&n(r.slice(0,0))}},{}],77:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(l,a){for(var c=[],u=0;u<l;u++)c.push(typeof a=="undefined"?u:a);return c}t.array=n;function i(l){return Array.isArray(l)?l:[l]}t.asArray=i;function r(l,a,c){l===void 0&&(l=0),a===void 0&&(a=1),c===void 0&&(c=0);for(var u=[],d=l;d<c;d+=a)u.push(d);return u}t.seq=r},{}],78:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(r){var l=[];for(var a in r)l.push(a);return l}t.enumKeys=n;function i(r){return Object.keys(r).map(function(l){return r[l]}).filter(function(l,a,c){return typeof l=="string"&&c.indexOf(l)===a})}t.enumNoValueKeys=i},{}],79:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(l,a){return l.filter(function(c,u,d){return u===d.findIndex(function(m){return a(c,m)})})}t.dedup=n;function i(l,a,c){return c.indexOf(l)===a}t.notSame=i;function r(l,a,c){return c.indexOf(l)===a}t.notSameNotFalsy=r},{}],80:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(l){return l.reduce(function(a,c){return Array.isArray(c)?a.concat(n(c)):a.concat(c)},[])}t.flatDeep=n;function i(l){return l.reduce(function(a,c){return a.concat(c)})}t.flat=i;function r(l){return l&&l.length?l.reduce(function(a,c){return a.concat(c)}):[]}t.flatReadOnly=r},{}],81:[function(o,e,t){function n(i){for(var r in i)t.hasOwnProperty(r)||(t[r]=i[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(o("./create")),n(o("./enumKeys")),n(o("./filter")),n(o("./flat")),n(o("./prototypeFind")),n(o("./set"))},{"./create":77,"./enumKeys":78,"./filter":79,"./flat":80,"./prototypeFind":82,"./set":83}],82:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(r,l,a){for(var c=0;c<r.length;c++){var u=r[c];if(l.apply(a,[u,c,r]))return u}}t.arrayPrototypeFind=n;function i(r){r===void 0&&(r=!1),Array.prototype.find=typeof Array.prototype.find=="undefined"||r?function(l,a){return n(this,l,a)}:Array.prototype.find}t.installArrayPrototypeFind=i},{}],83:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./filter");function i(a,c,u,d){u===void 0&&(u=function(_,p){return _===p});var m=n.dedup(a.concat(c),u);return d&&d.push.apply(d,n.dedup(m.concat(d),u)),m}t.unionEquals=i,t.arrayUnion=i;function r(a,c,u,d){u===void 0&&(u=function(_,p){return _===p});var m=a.filter(function(_){return c.find(function(p){return u(_,p)})});return m=n.dedup(m,u),d&&d.push.apply(d,n.dedup(m.concat(d),u)),m}t.arrayInterception=r;function l(a,c,u,d){u===void 0&&(u=function(_,p){return _===p});var m=a.filter(function(_){return!c.find(function(p){return u(_,p)})}).concat(c.filter(function(_){return!a.find(function(p){return u(_,p)})}));return m=n.dedup(m,u),d&&d.push.apply(d,n.dedup(m.concat(d),u)),m}t.arrayDifference=l},{"./filter":79}],84:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(i){return i.match(/[0-9]+/g).reduce(function(r,l){return r+(l|256).toString(16).slice(1)},"#").toString(16)}t.rgb2Hex=n},{}],85:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./array");function i(u,d,m){return l(u,d,m,r)}t.compareTexts=i;function r(u,d,m){return u===d?m.negate?a(!0):!0:(u=c(u,m),d=c(d,m),!m.verb||m.verb==="contains"?m.negate?a(u.includes(d)):u.includes(d):m.verb==="equals"?m.negate?a(u===d):u===d:m.verb==="contained"?m.negate?a(d.includes(u)):d.includes(u):m.verb==="endsWith"?m.negate?a(u.endsWith(d)):u.endsWith(d):m.verb==="startsWith"?m.negate?a(u.startsWith(d)):u.startsWith(d):m.negate?a(!1):!1)}t.compareText=r;function l(u,d,m,_){var p=n.asArray(u),y=n.asArray(d);if(p===y)return m.negate?a(!0):!0;if(!m.multiplicity||m.multiplicity==="anyOf"){var g=!!p.find(function(v){return!!y.find(function(b){return _(v,b,m)})});return m.negate?a(g):g}else if(m.multiplicity==="allOf"){var g=!p.find(function(b){return!y.find(function(x){return _(b,x,m)})});return m.negate?a(g):g}else return m.negate?a(!1):!1}function a(u){return!u}function c(u,d){return d.caseInsensitive&&(u=u.toLowerCase()),d.asCode&&(u=u.replace(/\s+/g," ").trim()),u}},{"./array":81}],86:[function(o,e,t){(function(n,i){Object.defineProperty(t,"__esModule",{value:!0});function r(){return typeof n!="undefined"&&typeof i!="undefined"&&typeof n.exit=="function"&&typeof e!="undefined"&&typeof o=="function"&&typeof o("fs")!="undefined"&&typeof o("fs").writeFileSync=="function"&&typeof o("child_process")!="undefined"&&typeof o("child_process").execSync=="function"}t.isNode=r;function l(){return r()&&t.isDOM()}t.isJSDOM=l,t.inNode=r;function a(){return typeof window!="undefined"&&typeof document!="undefined"&&typeof Node!="undefined"&&document.nodeType===Node.DOCUMENT_NODE}t.inBrowser=a,t.isBrowser=a,t.inDOM=a,t.isDOM=a;function c(){return!t.isDOM()&&!r()&&typeof self!="undefined"&&typeof self.onmessage!="undefined"}t.isWebWorker=c;var u=this;function d(){return c()?self:r()?i:t.isBrowser()?window:u}t.getGlobal=d}).call(this,o("_process"),typeof commonjsGlobal!="undefined"?commonjsGlobal:typeof self!="undefined"?self:typeof window!="undefined"?window:{})},{_process:121}],87:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function i(){this.l=[]}return i.prototype.add=function(r){this.l.push(r)},i.prototype.emit=function(r){this.l.forEach(function(l){return l(r)})},i.prototype.remove=function(r){this.l=this.l.filter(function(l){return l===r})},i}();t.Emitter=n},{}],88:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(l,a){if(a===void 0&&(a="Throwing on undefined value"),!l)throw new Error(a);return l}t.checkThrow=n;function i(l,a){if(a===void 0&&(a="Throwing on undefined value"),!l)throw new Error(a);return!0}t.checkTruthy=i;function r(l,a){try{return l()}catch{return a}}t.tryTo=r},{}],89:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(p){return p/1e3}t.bytesToKiloBytes=n;function i(p){var y=m(p).lastIndexOf(".");return y===-1?p:p.substring(0,y)}t.withoutExtension=i;function r(p,y){y===void 0&&(y=!1);var g=m(p).lastIndexOf("/"),v=g===-1?p:p.substring(g+1,p.length);return y?i(v):v}t.basename=r;function l(p){var y=p.lastIndexOf(".");return y==-1||y===p.length-1?"":p.substring(y+1,p.length)}t.getFileExtension=l;function a(p){var y=m(p).lastIndexOf("/");return y===-1?"":p.substring(0,y)}t.dirname=a;function c(p,y){p=m(p),y=m(y);var g="/",v=y.split(g),b=p.split(g),x=v.pop(),M=v.join(g);if(v.length<2&&b.length<2)return y;for(var E="";M.indexOf(b.join(g))===-1;)b.pop(),E+=".."+g;var A=v.slice(b.length);return A.length&&(E+=A.join(g)+g),E+x}t.getRelativePath=c;function u(){for(var p=[],y=0;y<arguments.length;y++)p[y]=arguments[y];var g="/",v=new RegExp(g+"{1,}","g");return p.filter(Boolean).map(m).join(g).replace(v,g)}t.pathJoin=u;function d(p,y){y===void 0&&(y={cwd:".",fileName:".gitignore"});var g=function(b){return function(x){return x.startsWith("!")?"!"+u(b,x.slice(1)):u(b,x)}},v=c(y.cwd,a(y.fileName));return p.split(/\r?\n/).filter(Boolean).filter(function(b){return b.charAt(0)!=="#"}).map(g(v))}t.parseGitIgnore=d;function m(p){var y=/^\\\\\?\\/.test(p),g=/[^\u0000-\u0080]+/.test(p);return y||g?p:p.replace(/\\/g,"/")}t.slash=m;function _(p,y){y===void 0&&(y=`
`);var g=p.match(/(?:\r?\n)/g)||[];if(g.length===0)return y;var v=g.filter(function(x){return x===`\r
`}).length,b=g.length-v;return v>b?`\r
`:`
`}t.detectNewline=_},{}],90:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(l){return l&&typeof l.next=="function"&&typeof l.throw=="function"}t.isGenerator=n;function i(l){return typeof l=="function"&&l.constructor&&l.constructor.name==="GeneratorFunction"}t.isGeneratorFunction=i;function r(l){return l&&l.prototype&&l.prototype.constructor&&l.prototype.constructor.toString().startsWith("class")}t.isClassConstructorFunction=r},{}],91:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function r(l,a){this.x=l,this.y=a,this.set(l,a)}return r.prototype.clone=function(){return new r(this.x,this.y)},r.prototype.set=function(l,a){return this.x=l,this.y=a,this},r.prototype.equals=function(l,a){return this.x==l&&this.y==a},r.prototype.toString=function(){return"("+this.x+","+this.y+")"},r.prototype.map=function(l){return this.x=l(this.x),this.y=l(this.y),this},r.prototype.add=function(l,a){return this.x+=l,this.y+=a,this},r.prototype.subtract=function(l,a){return this.x-=l,this.y-=a,this},r.prototype.scale=function(l){return this.x*=l,this.y*=l,this},r.prototype.isZero=function(){return this.x===0&&this.y==0},r}();t.Point=n;var i=function(){function r(l,a,c,u){this.left=l,this.top=a,this.right=c,this.bottom=u}return Object.defineProperty(r.prototype,"x",{get:function(){return this.left},set:function(l){var a=this.left-l;this.left=l,this.right-=a},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this.top},set:function(l){var a=this.top-l;this.top=l,this.bottom-=a},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"width",{get:function(){return this.right-this.left},set:function(l){this.right=this.left+l},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.bottom-this.top},set:function(l){this.bottom=this.top+l},enumerable:!0,configurable:!0}),r.prototype.isEmpty=function(){return this.left>=this.right||this.top>=this.bottom},r.prototype.setRect=function(l,a,c,u){return this.left=l,this.top=a,this.right=l+c,this.bottom=a+u,this},r.prototype.setBounds=function(l,a,c,u){return this.top=a,this.left=l,this.bottom=u,this.right=c,this},r.prototype.equals=function(l){return l&&(this.isEmpty()&&l.isEmpty()||this.top==l.top&&this.left==l.left&&this.bottom==l.bottom&&this.right==l.right)},r.prototype.clone=function(){return new r(this.left,this.top,this.right-this.left,this.bottom-this.top)},r.prototype.center=function(){if(this.isEmpty())throw new Error("Empty rectangles do not have centers");return new n(this.left+(this.right-this.left)/2,this.top+(this.bottom-this.top)/2)},r.prototype.copyFrom=function(l){return this.top=l.top,this.left=l.left,this.bottom=l.bottom,this.right=l.right,this},r.prototype.translate=function(l,a){return this.left+=l,this.right+=l,this.top+=a,this.bottom+=a,this},r.prototype.toString=function(){return"["+this.x+","+this.y+","+this.width+","+this.height+"]"},r.prototype.union=function(l){return this.clone().expandToContain(l)},r.prototype.contains=function(l){return l.isEmpty()?!0:this.isEmpty()?!1:l.left>=this.left&&l.right<=this.right&&l.top>=this.top&&l.bottom<=this.bottom},r.prototype.intersect=function(l){return this.clone().restrictTo(l)},r.prototype.intersects=function(l){if(this.isEmpty()||l.isEmpty())return!1;var a=Math.max(this.left,l.left),c=Math.min(this.right,l.right),u=Math.max(this.top,l.top),d=Math.min(this.bottom,l.bottom);return a<c&&u<d},r.prototype.restrictTo=function(l){if(this.isEmpty()||l.isEmpty())return this.setRect(0,0,0,0);var a=Math.max(this.left,l.left),c=Math.min(this.right,l.right),u=Math.max(this.top,l.top),d=Math.min(this.bottom,l.bottom);return this.setRect(a,u,Math.max(0,c-a),Math.max(0,d-u))},r.prototype.expandToContain=function(l){if(this.isEmpty())return this.copyFrom(l);if(l.isEmpty())return this;var a=Math.min(this.left,l.left),c=Math.max(this.right,l.right),u=Math.min(this.top,l.top),d=Math.max(this.bottom,l.bottom);return this.setRect(a,u,c-a,d-u)},r.prototype.round=function(){return this.left=Math.floor(this.left),this.top=Math.floor(this.top),this.right=Math.ceil(this.right),this.bottom=Math.ceil(this.bottom),this},r.prototype.scale=function(l,a){return this.left*=l,this.right*=l,this.top*=a,this.bottom*=a,this},r.prototype.map=function(l){return this.left=l(this.left),this.top=l(this.top),this.right=l(this.right),this.bottom=l(this.bottom),this},r.prototype.translateInside=function(l){var a=0;this.left<=l.left?a=l.left-this.left:this.right>l.right&&(a=l.right-this.right);var c=0;return this.top<=l.top?c=l.top-this.top:this.bottom>l.bottom&&(c=l.bottom-this.bottom),this.translate(a,c)},r.prototype.subtract=function(l){var a=new r(0,0,0,0),c=[];return l=l.intersect(this),l.isEmpty()?[this.clone()]:(a.setBounds(this.left,this.top,l.left,this.bottom),a.isEmpty()||c.push(a.clone()),a.setBounds(l.left,this.top,l.right,l.top),a.isEmpty()||c.push(a.clone()),a.setBounds(l.left,l.bottom,l.right,this.bottom),a.isEmpty()||c.push(a.clone()),a.setBounds(l.right,this.top,this.right,this.bottom),a.isEmpty()||c.push(a.clone()),c)},r.prototype.blend=function(l,a){return new r(this.left+(l.left-this.left)*a,this.top+(l.top-this.top)*a,this.width+(l.width-this.width)*a,this.height+(l.height-this.height)*a)},r.prototype.inflate=function(l,a){var c=(this.width*l-this.width)/2,u=arguments.length>1?a:l,d=(this.height*u-this.height)/2;return this.left-=c,this.right+=c,this.top-=d,this.bottom+=d,this},r.prototype.inflateFixed=function(l){return this.left-=l,this.right+=l,this.top-=l,this.bottom+=l,this},r}();t.Rect=i},{}],92:[function(o,e,t){function n(i){for(var r in i)t.hasOwnProperty(r)||(t[r]=i[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(o("./array")),n(o("./color")),n(o("./compareText")),n(o("./environment")),n(o("./event")),n(o("./exceptions")),n(o("./file")),n(o("./function")),n(o("./geometry")),n(o("./json")),n(o("./merge")),n(o("./mime")),n(o("./number")),n(o("./object")),n(o("./promise")),n(o("./string")),n(o("./time")),n(o("./tree")),n(o("./type")),n(o("./url"))},{"./array":81,"./color":84,"./compareText":85,"./environment":86,"./event":87,"./exceptions":88,"./file":89,"./function":90,"./geometry":91,"./json":93,"./merge":94,"./mime":95,"./number":96,"./object":97,"./promise":98,"./string":106,"./time":111,"./tree":116,"./type":117,"./url":118}],93:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./object"),i=o("./type");function r(m,_){_===void 0&&(_=void 0);try{return JSON.parse(m)}catch{return _}}t.parseJSON=r;function l(m,_){_===void 0&&(_=void 0);try{return JSON.stringify(m)}catch{return _}}t.stringifyJSON=l;function a(m){return JSON.parse(JSON.stringify(m))}t.cloneJSON=a;function c(m,_,p){return i.isArray(m)&&m?_(m,p)||m.some(function(y,g){return c(y,_,g)}):typeof m=="object"&&m?_(m,p)||n.objectToArray(m).some(function(y){return c(y.value,_,y.key)}):_(m,p)}t.visitJson=c;function u(m,_,p){var y=void 0;return c(m,function(g,v){return _(g,v)?(y={value:g,key:v},!0):!1}),y}t.findJson=u;function d(m){return typeof m=="object"&&!Array.isArray(m)}t.isJSONObject=d},{"./object":97,"./type":117}],94:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./type");function i(c){return a(c===!0,!0,arguments)}t.recursive=i;function r(c){var u=c,d=n.typeOf(c),m,_;if(d==="array")for(u=[],_=c.length,m=0;m<_;++m)u[m]=r(c[m]);else if(d==="object"){u={};for(m in c)u[m]=r(c[m])}return u}t.clone=r;function l(c,u){if(n.typeOf(c)!=="object")return u;for(var d in u)n.typeOf(c[d])==="object"&&n.typeOf(u[d])==="object"?c[d]=l(c[d],u[d]):c[d]=u[d];return c}t.mergeRecursive=l;function a(c,u){for(var d=[],m=2;m<arguments.length;m++)d[m-2]=arguments[m];var _=d[0],p=d.length;(c||n.typeOf(_)!=="object")&&(_={});for(var y=0;y<p;++y){var g=d[y],v=n.typeOf(g);if(v==="object"){for(var b in g)if(b!=="__proto__"){var x=c?r(g[b]):g[b];u?_[b]=l(_[b],x):_[b]=x}}}return _}t.merge=a},{"./type":117}],95:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(l){return Object.keys(r).find(function(a){return r[a].extensions.includes(l)})}t.getMimeTypeForExtension=n;function i(l){var a=Object.keys(r).find(function(c){return c===l});return a&&r[a].extensions}t.getExtensionsForMimeType=i;var r={"application/atom+xml":{extensions:["atom"]},"application/java-archive":{extensions:["jar","war","ear"]},"application/javascript":{extensions:["js"]},"application/json":{extensions:["json"]},"application/mac-binhex40":{extensions:["hqx"]},"application/msword":{extensions:["doc"]},"application/octet-stream":{extensions:["bin","exe","dll","deb","dmg","iso","img","msi","msp","msm"]},"application/pdf":{extensions:["pdf"]},"application/postscript":{extensions:["ps","eps","ai"]},"application/rss+xml":{extensions:["rss"]},"application/rtf":{extensions:["rtf"]},"application/vnd.apple.mpegurl":{extensions:["m3u8"]},"application/vnd.google-earth.kml+xml":{extensions:["kml"]},"application/vnd.google-earth.kmz":{extensions:["kmz"]},"application/vnd.ms-excel":{extensions:["xls"]},"application/vnd.ms-fontobject":{extensions:["eot"]},"application/vnd.ms-powerpoint":{extensions:["ppt"]},"application/vnd.oasis.opendocument.graphics":{extensions:["odg"]},"application/vnd.oasis.opendocument.presentation":{extensions:["odp"]},"application/vnd.oasis.opendocument.spreadsheet":{extensions:["ods"]},"application/vnd.oasis.opendocument.text":{extensions:["odt"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{extensions:["pptx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{extensions:["xlsx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{extensions:["docx"]},"application/vnd.wap.wmlc":{extensions:["wmlc"]},"application/x-7z-compressed":{extensions:["7z"]},"application/x-cocoa":{extensions:["cco"]},"application/x-java-archive-diff":{extensions:["jardiff"]},"application/x-java-jnlp-file":{extensions:["jnlp"]},"application/x-makeself":{extensions:["run"]},"application/x-perl":{extensions:["pl","pm"]},"application/x-pilot":{extensions:["prc","pdb"]},"application/x-rar-compressed":{extensions:["rar"]},"application/x-redhat-package-manager":{extensions:["rpm"]},"application/x-sea":{extensions:["sea"]},"application/x-shockwave-flash":{extensions:["swf"]},"application/x-stuffit":{extensions:["sit"]},"application/x-tcl":{extensions:["tcl","tk"]},"application/x-x509-ca-cert":{extensions:["der","pem","crt"]},"application/x-xpinstall":{extensions:["xpi"]},"application/xhtml+xml":{extensions:["xhtml"]},"application/xspf+xml":{extensions:["xspf"]},"application/zip":{extensions:["zip"]},"audio/midi":{extensions:["mid","midi","kar"]},"audio/mpeg":{extensions:["mp3"]},"audio/ogg":{extensions:["ogg"]},"audio/x-m4a":{extensions:["m4a"]},"audio/x-realaudio":{extensions:["ra"]},"font/woff":{extensions:["woff"]},"font/woff2":{extensions:["woff2"]},"image/gif":{extensions:["gif"]},"image/jpeg":{extensions:["jpeg","jpg"]},"image/png":{extensions:["png"]},"image/svg+xml":{extensions:["svg","svgz"]},"image/tiff":{extensions:["tif","tiff"]},"image/vnd.wap.wbmp":{extensions:["wbmp"]},"image/webp":{extensions:["webp"]},"image/x-icon":{extensions:["ico"]},"image/x-jng":{extensions:["jng"]},"image/x-ms-bmp":{extensions:["bmp"]},"text/css":{extensions:["css"]},"text/html":{extensions:["html","htm","shtml"]},"text/mathml":{extensions:["mml"]},"text/plain":{extensions:["txt"]},"text/vnd.sun.j2me.app-descriptor":{extensions:["jad"]},"text/vnd.wap.wml":{extensions:["wml"]},"text/x-component":{extensions:["htc"]},"text/xml":{extensions:["xml"]},"video/3gpp":{extensions:["3gpp","3gp"]},"video/mp2t":{extensions:["ts"]},"video/mp4":{extensions:["mp4"]},"video/mpeg":{extensions:["mpeg","mpg"]},"video/quicktime":{extensions:["mov"]},"video/webm":{extensions:["webm"]},"video/x-flv":{extensions:["flv"]},"video/x-m4v":{extensions:["m4v"]},"video/x-mng":{extensions:["mng"]},"video/x-ms-asf":{extensions:["asx","asf"]},"video/x-ms-wmv":{extensions:["wmv"]},"video/x-msvideo":{extensions:["avi"]}}},{}],96:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./array"),i=0;function r(_){return _===void 0&&(_="_"),_+i++}t.unique=r;function l(_,p){return Math.floor(Math.random()*p)+_}t.randomIntBetween=l;function a(_,p,y){return n.array(_).map(function(g){return c(p,y)})}t.randomIntsBetween=a,t.ints=a,t.int=l;function c(_,p){return Math.random()*p+_}t.randomFloatBetween=c;function u(_,p,y){return n.array(_).map(function(g){return c(p,y)})}t.randomFloatsBetween=u,t.floats=u,t.float=c;function d(_,p,y){return Math.max(p,Math.min(_,y))}t.between=d;function m(_,p,y){return Math.trunc(Math.max(p,Math.min(_,y)))}t.intBetween=m},{"./array":81}],97:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=o("./type");function i(_){return Object.keys(_)}t.objectKeys=i;function r(_,p){var y={};return i(_).forEach(function(g){y[g]=p(g,_[g])}),y}t.objectMapValues=r,t.objectMap=r;function l(_){return i(_).map(function(p){return{key:p,value:_[p]}})}t.objectToArray=l;function a(_,p){var y={};return i(_).filter(function(g,v){return p(g,_[g])}).forEach(function(g){y[g]=_[g]}),y}t.objectFilter=a;function c(_,p){var y={};return _.filter(n.notUndefined).forEach(function(g){y[g]=p(g)}),y}t.arrayToObject=c;function u(_,p,y){if(y===void 0&&(y=void 0),p){if(_){for(var g=typeof p=="string"?p.split("."):p,v=_,b=0;typeof v!="undefined"&&b<g.length;)v=v[g[b++]];if(typeof v!="undefined")return v}}else return _;return y}t.getObjectProperty=u;function d(_,p,y){if(!p||!_)throw new Error("Insufficient arguments");var g=typeof p=="string"?p.split("."):p,v=_;if(g.length===0)return Object.assign(_,y),_;for(var b=0;b<g.length-1;++b){var x=g[b];if(typeof v[x]=="undefined")v[x]=typeof g[b+1]=="number"?[]:{};else if(typeof g[b+1]=="number"&&!Array.isArray(v[x]))throw new Error("Detected number path item on non array value. Path: "+p+", item: "+g[b+1]+", Value: "+v[x]);v=v[x]}return g.length&&(v[g[g.length-1]]=y),_}t.setObjectProperty=d;function m(_,p){p===void 0&&(p={ignoreArrayElements:!0,leafsOnly:!1});function y(x,M,E){M===void 0&&(M=[]),E===void 0&&(E=[]);var A=n.isArray(x);if(!(p.ignoreArrayElements&&A))for(var L in x){var D=x[L],R=A?parseInt(L):L+"",I=E.concat([R]);(n.isObject(D)||n.isArray(D))&&y(D,M,I),M.push(I),M.push(E)}}var g=[],v=[];y(_,g,v);var b=g.filter(function(x,M,E){return E.length&&E.findIndex(function(A){return JSON.stringify(A)===JSON.stringify(x)})===M}).sort(function(x,M){return x.length-M.length}).filter(function(x){return x.length>0});return p.leafsOnly?b.filter(function(x){return!b.find(function(M){return M!==x&&M.length>x.length&&JSON.stringify(x)===JSON.stringify(M.slice(0,x.length))})}):b}t.getObjectPropertyPaths=m},{"./type":117}],98:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(r){return new Promise(function(l){r.reduce(function(a,c){return a.then(function(u){return c().then(function(d){return u.concat([d])})})},Promise.resolve([])).then(function(a){l(a)})})}t.serial=n;var i=function(){function r(l){var a=this;this.resolve=null,this.reject=null,this.status="pending",this.promise=new Promise(function(c,u){a.resolve=function(){this.status="resolved",c.apply(this,arguments)},a.reject=function(){this.status="rejected",u.apply(this,arguments)}}),typeof l=="function"&&l.call(this,this.resolve,this.reject)}return r.prototype.then=function(l){return this.promise.then(l)},r.prototype.catch=function(l){return this.promise.catch(l)},r}();t.Deferred=i},{}],99:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=o("../array"),i;(function(c){c.light="light",c.double="double",c.round="round",c.heavy="heavy",c.lightDouble="lightDouble",c.doubleLight="doubleLight",c.classic="classic",c.lightTripleDash="lightTripleDash",c.lightQuadrupleDash="lightQuadrupleDash",c.lightDoubleDash="lightDoubleDash",c.heavier="heavier",c.roundDoubleDash="roundDoubleDash",c.roundTripleDash="roundTripleDash",c.roundQuadrupleDash="roundQuadrupleDash",c.heavyDoubleDash="heavyDoubleDash",c.heavyTripleDash="heavyTripleDash",c.heavyQuadrupleDash="heavyQuadrupleDash",c.singleRareCorners="singleRareCorners",c.triangleCorners="triangleCorners"})(i=t.BorderStyle||(t.BorderStyle={})),t.borderStyles=n.enumKeys(i),function(c){c.topLeft="topLeft",c.topRight="topRight",c.bottomRight="bottomRight",c.bottomLeft="bottomLeft",c.left="left",c.bottom="bottom",c.top="top",c.right="right"}(t.BorderSide||(t.BorderSide={}));function r(c,u){return a()[c][u]}t.getBoxChar=r;var l,a=function(){return l||(l={light:{topLeft:"\u250C",topRight:"\u2510",bottomRight:"\u2518",bottomLeft:"\u2514",left:"\u2502",right:"\u2502",bottom:"\u2500",top:"\u2500"},lightTripleDash:{topLeft:"\u250C",topRight:"\u2510",bottomRight:"\u2518",bottomLeft:"\u2514",left:"\u2506",right:"\u2506",bottom:"\u2504",top:"\u2504"},lightQuadrupleDash:{topLeft:"\u250C",topRight:"\u2510",bottomRight:"\u2518",bottomLeft:"\u2514",left:"\u250A",right:"\u250A",bottom:"\u2508",top:"\u2508"},lightDoubleDash:{topLeft:"\u250C",topRight:"\u2510",bottomRight:"\u2518",bottomLeft:"\u2514",left:"\u254E",right:"\u254E",bottom:"\u254C",top:"\u254C"},double:{topLeft:"\u2554",topRight:"\u2557",bottomRight:"\u255D",bottomLeft:"\u255A",left:"\u2551",right:"\u2551",bottom:"\u2550",top:"\u2550"},round:{topLeft:"\u256D",topRight:"\u256E",bottomRight:"\u256F",bottomLeft:"\u2570",left:"\u2502",right:"\u2502",bottom:"\u2500",top:"\u2500"},roundDoubleDash:{topLeft:"\u256D",topRight:"\u256E",bottomRight:"\u256F",bottomLeft:"\u2570",left:"\u254E",right:"\u254E",bottom:"\u254C",top:"\u254C"},roundTripleDash:{topLeft:"\u256D",topRight:"\u256E",bottomRight:"\u256F",bottomLeft:"\u2570",left:"\u2506",right:"\u2506",bottom:"\u2504",top:"\u2504"},roundQuadrupleDash:{topLeft:"\u256D",topRight:"\u256E",bottomRight:"\u256F",bottomLeft:"\u2570",left:"\u250A",right:"\u250A",bottom:"\u2508",top:"\u2508"},heavy:{topLeft:"\u250F",topRight:"\u2513",bottomRight:"\u251B",bottomLeft:"\u2517",left:"\u2503",right:"\u2503",bottom:"\u2501",top:"\u2501"},heavyDoubleDash:{topLeft:"\u250F",topRight:"\u2513",bottomRight:"\u251B",bottomLeft:"\u2517",left:"\u254F",right:"\u254F",bottom:"\u254D",top:"\u254D"},heavyTripleDash:{topLeft:"\u250F",topRight:"\u2513",bottomRight:"\u251B",bottomLeft:"\u2517",left:"\u2507",right:"\u2507",bottom:"\u2505",top:"\u2505"},heavyQuadrupleDash:{topLeft:"\u250F",topRight:"\u2513",bottomRight:"\u251B",bottomLeft:"\u2517",left:"\u250B",right:"\u250B",bottom:"\u2509",top:"\u2509"},heavier:{topLeft:"\u259B",topRight:"\u259C",bottomRight:"\u259F",bottomLeft:"\u2599",left:"\u258C",right:"\u2590",bottom:"\u2584",top:"\u2580"},lightDouble:{topLeft:"\u2553",topRight:"\u2556",bottomRight:"\u255C",bottomLeft:"\u2559",left:"\u2551",right:"\u2551",bottom:"\u2500",top:"\u2500"},singleRareCorners:{bottom:"\u23BD",top:"\u23BA",left:"\u23A2",right:"\u23A5",topLeft:"\u23A1",topRight:"\u23A4",bottomRight:"\u23A6",bottomLeft:"\u23A3"},triangleCorners:{bottom:"_",top:"\u23BB",left:"\u23B8",right:" \u23B8",topLeft:"\u25F8",topRight:"\u25F9",bottomRight:"\u25FF",bottomLeft:"\u25FA"},doubleLight:{topLeft:"\u2552",topRight:"\u2555",bottomRight:"\u255B",bottomLeft:"\u2558",left:"\u2502",right:"\u2502",bottom:"\u2550",top:"\u2550"},classic:{topLeft:"+",topRight:"+",bottomRight:"+",bottomLeft:"+",left:"|",right:"|",bottom:"\u2550",top:"-"}}),l}},{"../array":81}],100:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(i,r){var l=i.split(""),a=0;return r.forEach(function(c){c.toAdd=c.toAdd||"",c.toRemove=c.toRemove||"",l.splice.apply(l,[c.pos+a,c.toRemove.length].concat(c.toAdd.split(""))),a+=c.toAdd.length-c.toRemove.length}),l.join("")}t.changeText=n},{}],101:[function(require,module,exports){Object.defineProperty(exports,"__esModule",{value:!0});function evaluate(s,defaultValue){defaultValue===void 0&&(defaultValue=void 0);try{return eval("("+s+")")}catch(o){return defaultValue}}exports.evaluate=evaluate;function stringToObject(o,e,t){o===void 0&&(o=""),e===void 0&&(e=","),t===void 0&&(t=":");var n=o.split(e).map(function(r){return r.trim()}),i={};return n.forEach(function(r){var l=r.split(t).map(function(a){return a.trim()});l.length===2&&(i[l[0]]=l[1])}),i}exports.stringToObject=stringToObject},{}],102:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=o("../array");function i(u,d){return d===void 0&&(d='"'),d+u.replace(new RegExp(d,"g"),"\\"+d)+d}t.quote=i;function r(u){return u.substring(1,u.length-1)}t.unquote=r;function l(u,d){return n.array(u,d).join("")}t.repeat=l;function a(u,d){return u===void 0&&(u=1),d===void 0&&(d=2),l(u*d," ")}t.indent=a;function c(u,d,m){m===void 0&&(m=`
`);var _=m.replace(/\\/,"\\\\");return u.replace(new RegExp("(?![^"+_+"]{1,"+d+"}$)([^"+_+"]{1,"+d+"})\\s","g"),"$1"+m)}t.wordWrap=c},{"../array":81}],103:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(r,l,a){if(l=r.length<=l?r.length:l,typeof a=="string"){var c=a;a=function(d){return d===c}}for(;l>=0;){var u=r[l];if(!a(u))l--;else break}return l}t.getPreviousMatchingPos=n;function i(r,l,a){return r.split(l,a).join(l).length}t.getPosition=i},{}],104:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(i){var r=0,l=i.length,a=0;if(l>0)for(;a<l;)r=(r<<5)-r+i.charCodeAt(a++)|0;return r}t.hashCode=n},{}],105:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(c){return c.replace(/\"/gim,"&quot;")}t.escapeHtmlAttribute=n;function i(c){return c.replace(/\&quot\;/gim,'"')}t.unEscapeHtmlAttribute=i;function r(c){return`
  <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>title</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
`+c+`
</body>
</html>
`}t.wrapInHtml=r;function l(c,u){return u===void 0&&(u=""),Object.keys(c).map(function(d){return a(d)+": "+c[d]+";"}).join(u)}t.styleObjectToCss=l;function a(c){for(var u;u=/([A-Z])/.exec(c);)c=c.substring(0,u.index)+"-"+u[1].toLowerCase()+c.substring(u.index+1,c.length);return c}t.stylePropertyNameToCssSyntax=a},{}],106:[function(o,e,t){function n(i){for(var r in i)t.hasOwnProperty(r)||(t[r]=i[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(o("./boxes")),n(o("./change")),n(o("./evaluate")),n(o("./format")),n(o("./getPreviousMatchingPos")),n(o("./hash")),n(o("./html")),n(o("./template")),n(o("./whiteSpace"))},{"./boxes":99,"./change":100,"./evaluate":101,"./format":102,"./getPreviousMatchingPos":103,"./hash":104,"./html":105,"./template":107,"./whiteSpace":108}],107:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n={};function i(r,l){var a=/\W/.test(r)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+r.replace(/[\r\t\n]/g," ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):n[r]=n[r]||i(r);return l?a(l):a}t.template=i},{}],108:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(a,c){return c===void 0&&(c=10),a.trim().substring(0,Math.min(a.length,c))+"..."}t.shorter=n;function i(a,c){return c===void 0&&(c=" "),a.replace(/\s+/gm,c).trim()}t.removeWhites=i;function r(a,c){return c===void 0&&(c=`
`),a.split(c).filter(function(u){return!!u.trim()}).join(c)}t.removeEmptyLines=r;function l(a,c){return c===void 0&&(c=`
`),a.split(c).map(function(u){return u.trimRight()}).join(c)}t.trimRightLines=l},{}],109:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=o("../type");function i(l){var a=l.duration,c=l.draw,u=l.timing,d=l.lapse,m=l.end;return new Promise(function(_){n.isObject(u)&&(u=u.fn(a));var p=Date.now(),y=0;r(function g(v){var b=(v-p)/a;b>1&&(b=1),y=u(b,v-p,a),c(y),b<1?r(g,d):(m&&m(),_())})})}t.animate=i;function r(l,a){a===void 0&&(a=0),setTimeout(function(){return l(Date.now())},a)}(function(l){function a(p){return function(y){return 1-p(1-y)}}function c(p){for(var y=0,g=1,v=void 0;;y+=g,g/=2)if(p>=(7-4*y)/11)return-Math.pow((11-6*y-11*p)/4,2)+Math.pow(g,2)}l.bounceEasyOut=function(){return a(c)};function u(p){return Math.pow(p,2)}l.quad=u,l.back=function(p){return p===void 0&&(p=1.5),function(y){return Math.pow(y,2)*((p+1)*y-p)}},l.elastic=function(p){return p===void 0&&(p=1.5),function(y){return Math.pow(2,10*(y-1))*Math.cos(20*Math.PI*p/3*y)}};function d(p){return function(y){return y<.5?p(2*y)/2:(2-p(2*(1-y)))/2}}l.bounceEaseInOut=function(){return d(c)};var m=1,_=0;l.easeInQuad=function(){return{fn:function(p){return function(y,g){return m*(g/=p)*g+_}}}},l.easeOutQuad=function(){return{fn:function(p){return function(y,g){return-m*(g/=p)*(g-2)+_}}}},l.easeInOutQuad=function(){return{fn:function(p){return function(y,g){return(g/=p/2)<1?m/2*g*g+_:-m/2*(--g*(g-2)-1)+_}}}},l.easeInElastic=function(){return{fn:function(p){return function(y,g){var v=1.70158,b=0,x=m;return g==0?_:(g/=p)==1?_+m:(b||(b=p*.3),x<Math.abs(m)?x=m:v=b/(2*Math.PI)*Math.asin(m/x),-(x*Math.pow(2,10*(g-=1))*Math.sin((g*p-v)*(2*Math.PI)/b))+_)}}}},l.easeOutBounce=function(){return{fn:function(p){return function(y,g){return(g/=p)<1/2.75?m*(7.5625*g*g)+_:g<2/2.75?m*(7.5625*(g-=1.5/2.75)*g+.75)+_:g<2.5/2.75?m*(7.5625*(g-=2.25/2.75)*g+.9375)+_:m*(7.5625*(g-=2.625/2.75)*g+.984375)+_}}}},l.easeInCubic=function(){return{fn:function(p){return function(y,g){return m*(g/=p)*g*g+_}}}},l.easeOutCubic=function(){return{fn:function(p){return function(y,g){return m*((g=g/p-1)*g*g+1)+_}}}},l.easeInOutCubic=function(){return{fn:function(p){return function(y,g){return(g/=p/2)<1?m/2*g*g*g+_:m/2*((g-=2)*g*g+2)+_}}}},l.easeInQuart=function(){return{fn:function(p){return function(y,g){return m*(g/=p)*g*g*g+_}}}},l.easeInOutQuart=function(){return{fn:function(p){return function(y,g){return(g/=p/2)<1?m/2*g*g*g*g+_:-m/2*((g-=2)*g*g*g-2)+_}}}},l.easeInQuint=function(){return{fn:function(p){return function(y,g){return m*(g/=p)*g*g*g*g+_}}}},l.easeOutQuint=function(){return{fn:function(p){return function(y,g){return m*((g=g/p-1)*g*g*g*g+1)+_}}}},l.easeInExpo=function(){return{fn:function(p){return function(y,g){return g==0?_:m*Math.pow(2,10*(g/p-1))+_}}}},l.easeInOutQuint=function(){return{fn:function(p){return function(y,g){return(g/=p/2)<1?m/2*g*g*g*g*g+_:m/2*((g-=2)*g*g*g*g+2)+_}}}},l.easeInSine=function(){return{fn:function(p){return function(y,g){return-m*Math.cos(g/p*(Math.PI/2))+m+_}}}},l.easeInOutElastic=function(){return{fn:function(p){return function(y,g){var v=1.70158,b=0,x=m;return g==0?_:(g/=p/2)==2?_+m:(b||(b=p*(.3*1.5)),x<Math.abs(m)?x=m:v=b/(2*Math.PI)*Math.asin(m/x),g<1?-.5*(x*Math.pow(2,10*(g-=1))*Math.sin((g*p-v)*(2*Math.PI)/b))+_:x*Math.pow(2,-10*(g-=1))*Math.sin((g*p-v)*(2*Math.PI)/b)*.5+m+_)}}}},l.easeOutElastic=function(){return{fn:function(p){return function(y,g){var v=1.70158,b=0,x=m;return g==0?_:(g/=p)==1?_+m:(b||(b=p*.3),x<Math.abs(m)?x=m:v=b/(2*Math.PI)*Math.asin(m/x),x*Math.pow(2,-10*g)*Math.sin((g*p-v)*(2*Math.PI)/b)+m+_)}}}},l.easeInOutExpo=function(){return{fn:function(p){return function(y,g){return g==0?_:g==p?_+m:(g/=p/2)<1?m/2*Math.pow(2,10*(g-1))+_:m/2*(-Math.pow(2,-10*--g)+2)+_}}}},l.easeInOutBack=function(){return{fn:function(p){return function(y,g){var v=1.70158;return(g/=p/2)<1?m/2*(g*g*(((v*=1.525)+1)*g-v))+_:m/2*((g-=2)*g*(((v*=1.525)+1)*g+v)+2)+_}}}},l.easeOutBack=function(){return{fn:function(p){return function(y,g,v){var b=1.70158;return m*((g=g/v-1)*g*((b+1)*g+b)+1)+_}}}},l.easeInBounce=function(){return{fn:function(p){return function(y,g,v){return m-l.easeOutBounce().fn(v)(y,v-g,0,m,v)+_}}}},l.easeInOutBounce=function(){return{fn:function(p){return function(y,g,v){return g<v/2?l.easeInBounce().fn(v)(y,g*2,0,m,v)*.5+_:l.easeOutBounce().fn(v)(y,g*2-v,0,m,v)*.5+m*.5+_}}}}})(t.easing||(t.easing={}))},{"../type":117}],110:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(r,l){typeof r=="string"&&(r=new Date(r));var a=r.getDay(),c=r.getMonth()+1,u=r.getFullYear();return a<10&&(a="0"+a),c<10&&(c="0"+c),l==="YYYY-MM-DD"?u+"-"+c+"-"+a:c+"/"+a+"/"+u}t.formatDate=n;function i(r,l){typeof r=="string"&&(r=new Date(r));var a=(""+r.getHours()).length<2?"0"+r.getHours():""+r.getHours(),c=(""+r.getMinutes()).length<2?"0"+r.getMinutes():""+r.getMinutes();return n(r,"YYYY-MM-DD")+"T"+a+":"+c}t.formatDateTime=i},{}],111:[function(o,e,t){function n(i){for(var r in i)t.hasOwnProperty(r)||(t[r]=i[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(o("./anim")),n(o("./format")),n(o("./printMs")),n(o("./sleep")),n(o("./throttle")),n(o("./waitFor"))},{"./anim":109,"./format":110,"./printMs":112,"./sleep":113,"./throttle":114,"./waitFor":115}],112:[function(o,e,t){var n=this&&this.__assign||function(){return n=Object.assign||function(r){for(var l,a=1,c=arguments.length;a<c;a++){l=arguments[a];for(var u in l)Object.prototype.hasOwnProperty.call(l,u)&&(r[u]=l[u])}return r},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0});function i(r,l){l===void 0&&(l={minutes:!1,seconds:!0,ms:!0}),l=n({minutes:!1,seconds:!0,ms:!0},l);var a=l.seconds&&Math.floor(r/1e3),c=l.minutes&&a&&(l.ms?Math.floor(a/60):Math.round(a/60)),u=l.ms&&Math.floor(r%1e3||r);return(c?c+" minutes ":"")+(a?a+" seconds ":"")+(u?u+" ms ":"")}t.printMs=i},{}],113:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(r){return new Promise(function(l){setTimeout(function(){l()},r)})}t.sleep=n,t.wait=n;function i(r,l){console.time(r);var a=l();return console.timeEnd(r),a}t.withTime=i},{}],114:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(i,r,l){l===void 0&&(l={});var a,c,u,d=null,m=0;l||(l={});var _=function(){m=l.leading===!1?0:Date.now(),d=null,u=i.apply(a,c),a=c=null};return function(){var p=Date.now();!m&&l.leading===!1&&(m=p);var y=r-(p-m);return a=this,c=arguments,y<=0?(clearTimeout(d),d=null,m=p,u=i.apply(a,c),a=c=null):!d&&l.trailing!==!1&&(d=setTimeout(_,y)),u}}t.throttle=n},{}],115:[function(o,e,t){var n=this&&this.__assign||function(){return n=Object.assign||function(u){for(var d,m=1,_=arguments.length;m<_;m++){d=arguments[m];for(var p in d)Object.prototype.hasOwnProperty.call(d,p)&&(u[p]=d[p])}return u},n.apply(this,arguments)},i=this&&this.__awaiter||function(u,d,m,_){return new(m||(m=Promise))(function(p,y){function g(x){try{b(_.next(x))}catch(M){y(M)}}function v(x){try{b(_.throw(x))}catch(M){y(M)}}function b(x){x.done?p(x.value):new m(function(M){M(x.value)}).then(g,v)}b((_=_.apply(u,d||[])).next())})},r=this&&this.__generator||function(u,d){var m={label:0,sent:function(){if(y[0]&1)throw y[1];return y[1]},trys:[],ops:[]},_,p,y,g;return g={next:v(0),throw:v(1),return:v(2)},typeof Symbol=="function"&&(g[Symbol.iterator]=function(){return this}),g;function v(x){return function(M){return b([x,M])}}function b(x){if(_)throw new TypeError("Generator is already executing.");for(;m;)try{if(_=1,p&&(y=x[0]&2?p.return:x[0]?p.throw||((y=p.return)&&y.call(p),0):p.next)&&!(y=y.call(p,x[1])).done)return y;switch(p=0,y&&(x=[x[0]&2,y.value]),x[0]){case 0:case 1:y=x;break;case 4:return m.label++,{value:x[1],done:!1};case 5:m.label++,p=x[1],x=[0];continue;case 7:x=m.ops.pop(),m.trys.pop();continue;default:if(y=m.trys,!(y=y.length>0&&y[y.length-1])&&(x[0]===6||x[0]===2)){m=0;continue}if(x[0]===3&&(!y||x[1]>y[0]&&x[1]<y[3])){m.label=x[1];break}if(x[0]===6&&m.label<y[1]){m.label=y[1],y=x;break}if(y&&m.label<y[2]){m.label=y[2],m.ops.push(x);break}y[2]&&m.ops.pop(),m.trys.pop();continue}x=d.call(u,m)}catch(M){x=[6,M],p=0}finally{_=y=0}if(x[0]&5)throw x[1];return{value:x[0]?x[1]:void 0,done:!0}}};Object.defineProperty(t,"__esModule",{value:!0});var l=o("."),a={interval:200,timeout:3e3};function c(u,d){return d===void 0&&(d={interval:200,timeout:3e3}),i(this,void 0,void 0,function(){var m,_,p;return r(this,function(y){switch(y.label){case 0:m=typeof d=="string"?n({},a,{timeoutError:d}):d,_=setTimeout(function(){var g=m.timeoutError||u.toString().substring(0,Math.min(u.toString().length,100));throw new Error(g)},m.timeout||3e3),y.label=1;case 1:return(p=u())?[3,3]:[4,l.sleep(m.interval||200)];case 2:return y.sent(),[3,1];case 3:return _&&clearTimeout(_),[2,p]}})})}t.waitForPredicate=c},{".":111}],116:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(A,L){L(A),(A.childNodes||[]).forEach(function(D){return n(D,L)})}t.visitChildren=n;function i(A,L){var D=[];return n(A,function(R){return D.push(L(R))}),D}t.mapChildren=i;function r(A,L){return(A.childNodes||[]).find(L)}t.findChildren=r;function l(A,L){return(A.childNodes||[]).filter(function(D){return L(D)})}t.filterChildren=l;function a(A,L){L===void 0&&(L=void 0);var D=-1;return A.parentNode&&(L||(A.parentNode?A.parentNode.childNodes||[]:[])).find(function(R,I){return R===A?(D=I,!0):!1}),D}t.getChildIndex=a;function c(A){var L=a(A,A.childNodes);return A.parentNode&&L<(A.childNodes||[]).length-1?(A.childNodes||[])[L+1]:void 0}t.getNextSibling=c;function u(A,L){return A.parentNode?(A.parentNode.childNodes||[]).filter(function(D){return D!==A}):[]}t.getSiblings=u;function d(A){var L=a(A,A.childNodes);return L>0&&A.parentNode?(A.childNodes||[])[L-1]:void 0}t.getPreviousSibling=d;function m(A,L,D){return!A||L(A)||!A.parentNode||m(A.parentNode,L)}t.visitAncestors=m;function _(A,L,D){var R;return m(A,function(I){return L(I)?(R=I,!0):!1}),R}t.findAncestor=_;function p(A){return A?A.parentNode?_(A.parentNode,function(L){return!L.parentNode}):A:void 0}t.findRootElement=p;function y(A,L,D){var R=[];return m(A,function(I){return L(I)&&R.push(I),!1}),R}t.filterAncestors=y;function g(A,L,D,R){D===void 0&&(D={}),R===void 0&&(R=!1);var I=!1;return D.childrenFirst?(I=(A.childNodes||[]).some(function(U){return g(U,L,D,!0)}),I?(!D.breakOnDescendantSignal&&(D.andSelf||R)&&L(A),!0):((D.andSelf||R)&&(I=L(A)),!1)):((D.andSelf||R)&&(I=L(A)),I?D.visitDescendantsOnSelfSignalAnyway&&(A.childNodes||[]).some(function(U){return g(U,L,D,!0)})||!0:(A.childNodes||[]).some(function(U){return g(U,L,D,!0)}))}t.visitDescendants=g;function v(A,L,D){D===void 0&&(D={});var R=[];return g(A,function(I){return L(I)&&R.push(I),!1},D),R}t.filterDescendants=v;function b(A,L,D){D===void 0&&(D={});var R=[];return g(A,function(I){return R.push(L(I)),!1},D),R}t.mapDescendants=b;function x(A,L,D){D===void 0&&(D={});var R;return g(A,function(I){return L(I)?(R=I,!0):!1},D),R}t.findDescendant=x;function M(A){for(var L=A,D=[];L&&(L=L.parentNode);)D.push(L);return D}t.getAncestors=M;function E(A,L){return A===L||!A||!L?0:E(A.parentNode,L)+1}t.getDistanceToAncestor=E},{}],117:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=Object.prototype.toString;function i(m){return n.call(m)}t.getType=i;function r(m){return typeof m=="object"&&i(m)==="[object Object]"}t.isObject=r,t.isArray=Array.isArray||function(m){return n.call(m)==="[object Array]"};function l(m){return typeof m=="string"}t.isString=l;function a(m){return typeof m=="boolean"||i(m)==="[object Boolean]"}t.isBoolean=a;function c(m){return{}.toString.call(m).slice(8,-1).toLowerCase()}t.typeOf=c;function u(m){return m!==void 0}t.notUndefined=u;function d(m){return!!m}t.notFalsy=d},{}],118:[function(o,e,t){Object.defineProperty(t,"__esModule",{value:!0});function n(r){var l=r.indexOf("#");return r=l!==-1?r.substring(0,l):r,(r.split("/").pop()||"").replace(/[\?].*$/g,"")}t.getFileNameFromUrl=n;function i(r){var l=r.split("?")[1],a={};if(!l)return a;l=l.split("#")[0];for(var c=l.split("&"),u=0;u<c.length;u++){var d=c[u].split("=");a[d[0]]=d[1]||""}return a}t.getParametersFromUrl=i},{}],119:[function(o,e,t){var n=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function l(c){if(c==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(c)}function a(){try{if(!Object.assign)return!1;var c=new String("abc");if(c[5]="de",Object.getOwnPropertyNames(c)[0]==="5")return!1;for(var u={},d=0;d<10;d++)u["_"+String.fromCharCode(d)]=d;var m=Object.getOwnPropertyNames(u).map(function(p){return u[p]});if(m.join("")!=="0123456789")return!1;var _={};return"abcdefghijklmnopqrst".split("").forEach(function(p){_[p]=p}),Object.keys(Object.assign({},_)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}e.exports=a()?Object.assign:function(c,u){for(var d,m=l(c),_,p=1;p<arguments.length;p++){d=Object(arguments[p]);for(var y in d)i.call(d,y)&&(m[y]=d[y]);if(n){_=n(d);for(var g=0;g<_.length;g++)r.call(d,_[g])&&(m[_[g]]=d[_[g]])}}return m}},{}],120:[function(o,e,t){(function(n){function i(c,u){for(var d=0,m=c.length-1;m>=0;m--){var _=c[m];_==="."?c.splice(m,1):_===".."?(c.splice(m,1),d++):d&&(c.splice(m,1),d--)}if(u)for(;d--;d)c.unshift("..");return c}t.resolve=function(){for(var c="",u=!1,d=arguments.length-1;d>=-1&&!u;d--){var m=d>=0?arguments[d]:n.cwd();if(typeof m!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!m)continue;c=m+"/"+c,u=m.charAt(0)==="/"}return c=i(l(c.split("/"),function(_){return!!_}),!u).join("/"),(u?"/":"")+c||"."},t.normalize=function(c){var u=t.isAbsolute(c),d=a(c,-1)==="/";return c=i(l(c.split("/"),function(m){return!!m}),!u).join("/"),!c&&!u&&(c="."),c&&d&&(c+="/"),(u?"/":"")+c},t.isAbsolute=function(c){return c.charAt(0)==="/"},t.join=function(){var c=Array.prototype.slice.call(arguments,0);return t.normalize(l(c,function(u,d){if(typeof u!="string")throw new TypeError("Arguments to path.join must be strings");return u}).join("/"))},t.relative=function(c,u){c=t.resolve(c).substr(1),u=t.resolve(u).substr(1);function d(b){for(var x=0;x<b.length&&b[x]==="";x++);for(var M=b.length-1;M>=0&&b[M]==="";M--);return x>M?[]:b.slice(x,M-x+1)}for(var m=d(c.split("/")),_=d(u.split("/")),p=Math.min(m.length,_.length),y=p,g=0;g<p;g++)if(m[g]!==_[g]){y=g;break}for(var v=[],g=y;g<m.length;g++)v.push("..");return v=v.concat(_.slice(y)),v.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(c){if(typeof c!="string"&&(c=c+""),c.length===0)return".";for(var u=c.charCodeAt(0),d=u===47,m=-1,_=!0,p=c.length-1;p>=1;--p)if(u=c.charCodeAt(p),u===47){if(!_){m=p;break}}else _=!1;return m===-1?d?"/":".":d&&m===1?"/":c.slice(0,m)};function r(c){typeof c!="string"&&(c=c+"");var u=0,d=-1,m=!0,_;for(_=c.length-1;_>=0;--_)if(c.charCodeAt(_)===47){if(!m){u=_+1;break}}else d===-1&&(m=!1,d=_+1);return d===-1?"":c.slice(u,d)}t.basename=function(c,u){var d=r(c);return u&&d.substr(-1*u.length)===u&&(d=d.substr(0,d.length-u.length)),d},t.extname=function(c){typeof c!="string"&&(c=c+"");for(var u=-1,d=0,m=-1,_=!0,p=0,y=c.length-1;y>=0;--y){var g=c.charCodeAt(y);if(g===47){if(!_){d=y+1;break}continue}m===-1&&(_=!1,m=y+1),g===46?u===-1?u=y:p!==1&&(p=1):u!==-1&&(p=-1)}return u===-1||m===-1||p===0||p===1&&u===m-1&&u===d+1?"":c.slice(u,m)};function l(c,u){if(c.filter)return c.filter(u);for(var d=[],m=0;m<c.length;m++)u(c[m],m,c)&&d.push(c[m]);return d}var a="ab".substr(-1)==="b"?function(c,u,d){return c.substr(u,d)}:function(c,u,d){return u<0&&(u=c.length+u),c.substr(u,d)}}).call(this,o("_process"))},{_process:121}],121:[function(o,e,t){var n=e.exports={},i,r;function l(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=l}catch{i=l}try{typeof clearTimeout=="function"?r=clearTimeout:r=a}catch{r=a}})();function c(x){if(i===setTimeout)return setTimeout(x,0);if((i===l||!i)&&setTimeout)return i=setTimeout,setTimeout(x,0);try{return i(x,0)}catch{try{return i.call(null,x,0)}catch{return i.call(this,x,0)}}}function u(x){if(r===clearTimeout)return clearTimeout(x);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(x);try{return r(x)}catch{try{return r.call(null,x)}catch{return r.call(this,x)}}}var d=[],m=!1,_,p=-1;function y(){!m||!_||(m=!1,_.length?d=_.concat(d):p=-1,d.length&&g())}function g(){if(!m){var x=c(y);m=!0;for(var M=d.length;M;){for(_=d,d=[];++p<M;)_&&_[p].run();p=-1,M=d.length}_=null,m=!1,u(x)}}n.nextTick=function(x){var M=new Array(arguments.length-1);if(arguments.length>1)for(var E=1;E<arguments.length;E++)M[E-1]=arguments[E];d.push(new v(x,M)),d.length===1&&!m&&c(g)};function v(x,M){this.fun=x,this.array=M}v.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={};function b(){}n.on=b,n.addListener=b,n.once=b,n.off=b,n.removeListener=b,n.removeAllListeners=b,n.emit=b,n.prependListener=b,n.prependOnceListener=b,n.listeners=function(x){return[]},n.binding=function(x){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(x){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},{}]},{},[11])(11)})})(mirada_min);const HIGHLIGHT_COLOR=16711680,origin=new Vector3(0,0,0),viewerDims={w:1280,h:720};let camera=null,stereoCam=null,scene=new Scene,calibrationScene=new Scene,calibrationMode=!1,captureCalibPair=!1,capturedCalibPairs=[],calibResults=null,stereoMatcher=null,scalarMap=null,raycaster=new Raycaster,pointer=new Vector2,intersectedObj=null,oldColor=null,raycastExcludeList=[],worldMap={calib:{},prod:{}},f=0;function resetState(){camera=null,stereoCam=null,scene=new Scene,calibrationScene=new Scene,calibrationMode=!1,captureCalibPair=!1,capturedCalibPairs=[],calibResults=null,stereoMatcher=null,scalarMap=new ScalarMatMap,raycaster=new Raycaster,pointer=new Vector2,intersectedObj=null,oldColor=null,raycastExcludeList=[],worldMap={calib:{},prod:{}},f=0,scene.background=new Color(15790320),scene.name="prod",calibrationScene.background=new Color(16777215),calibrationScene.name="calib"}class ScalarMatMap{constructor(){this.matMap={}}_addMat(e,t,n,i,r){return this.matMap[e]=cv.matFromArray(t,n,r,new Array(t*n).fill(i)),this.matMap[e]}getMat(e,t,n){let i=`${e.height}_${e.width}_${t}_${n}`;return this.matMap[i]?this.matMap[i]:this._addMat(i,e.height,e.width,t,n)}}function getScene(){return calibrationMode?calibrationScene:scene}function toggleCalibrationMode(){return calibrationMode=!calibrationMode,calibrationMode}function captureCalibrationPair(){return captureCalibPair=!0,capturedCalibPairs.length+1}function freeMats(...o){o.forEach(e=>e.delete())}function doStereoCalibration(){if(!capturedCalibPairs.length)return;function o(L,D,R,I,U,J,ne){let F=new cv.Mat(L.size(),cv.CV_8UC1),P=new cv.Mat(new cv.Size(D*R,2),cv.CV_32F);cv.cvtColor(L,F,cv.COLOR_BGR2GRAY),cv.findChessboardCorners(F,new cv.Size(D,R),P)&&(U.push_back(I),cv.cornerSubPix(F,P,new cv.Size(5,5),new cv.Size(-1,-1),ne),J.push_back(P)),freeMats(F,P)}const e=7,t=7,n=3,i=new cv.TermCriteria(cv.TERM_CRITERIA_EPS+cv.TERM_CRITERIA_MAX_ITER,30,.001);let r=new cv.MatVector,l=new cv.MatVector,a=new cv.MatVector,c=new cv.MatVector;const u=cv.Mat.zeros(e*t,1,cv.CV_32FC3);for(let L=0;L<e;L++)for(let D=0;D<t;D++)u.data32F[L*t*n+D*n+0]=D,u.data32F[L*t*n+D*n+1]=L;capturedCalibPairs.forEach(L=>{let{l:D,r:R}=L;o(D,e,t,u,a,r,i),o(R,e,t,u,c,l,i)});let d=new cv.Mat,m=new cv.Mat,_=new cv.Mat,p=new cv.Mat,y=new cv.MatVector,g=new cv.MatVector,v=new cv.MatVector,b=new cv.MatVector,x=new cv.Mat,M=new cv.Mat,E=new cv.Mat,A=new cv.Mat;try{let L=cv.calibrateCamera(a,r,capturedCalibPairs[0].l.size(),d,m,y,g);console.log(`left calib err: ${L}`);let D=cv.getOptimalNewCameraMatrix(d,m,capturedCalibPairs[0].l.size(),0),R=cv.calibrateCamera(c,l,capturedCalibPairs[0].l.size(),_,p,v,b);console.log(`left calib err: ${R}`);let I=cv.getOptimalNewCameraMatrix(_,p,capturedCalibPairs[0].l.size(),0),U=cv.stereoCalibrate(a,r,l,D,m,I,p,capturedCalibPairs[0].l.size(),E,A,x,M);console.log(`error of stereo calib: ${U}`);let J=new cv.Mat,ne=new cv.Mat,F=new cv.Mat,P=new cv.Mat,N=new cv.Mat;cv.stereoRectify(D,m,I,p,capturedCalibPairs[0].l.size(),E,A,J,ne,F,P,N);let q=new cv.Mat,G=new cv.Mat,H=new cv.Mat,W=new cv.Mat;cv.initUndistortRectifyMap(D,m,J,F,capturedCalibPairs[0].l.size(),cv.CV_16SC2,q,G),cv.initUndistortRectifyMap(I,p,ne,P,capturedCalibPairs[0].l.size(),cv.CV_16SC2,H,W);let $=[];for(let V=0;V<a.size();V++)$.push(r.get(V),l.get(V),a.get(V),c.get(V));freeMats(...capturedCalibPairs.reduce((V,z,K)=>K==1?[V.l,V.r,z.l,z.r]:[...V,z.l,z.r]),u,d,D,m,y,g,_,I,p,v,b,x,M,E,A,J,ne,F,P,...$,a,c,r,l),calibResults={l:{map1:q,map2:G},r:{map1:H,map2:W},q:N}}catch(L){console.log(L)}}function _doStereoVis(o,e,t,n){let i=o.getContext("webgl2");const r=new Uint8Array(i.drawingBufferHeight*i.drawingBufferWidth*4),l=i.drawingBufferHeight,a=i.drawingBufferWidth;i.readPixels(0,0,a,l,i.RGBA,i.UNSIGNED_BYTE,r);const c=cv.matFromArray(l,a,cv.CV_8UC4,r),u=new cv.Mat(new cv.Size(a,l),cv.CV_8UC4);cv.flip(c,u,0);const d=u.roi(new cv.Rect(0,0,a/2,l)),m=u.roi(new cv.Rect(a/2,0,a/2,l));let _=!0;if(calibrationMode&&captureCalibPair&&(capturedCalibPairs.push({l:d,r:m}),captureCalibPair=!1,_=!1,console.log(capturedCalibPairs)),calibResults){stereoMatcher||(stereoMatcher=new cv.StereoBM);let p=new cv.Mat,y=new cv.Mat,g=new cv.Mat,v=new cv.Mat,b=new cv.Mat,x=new cv.Mat;cv.cvtColor(d,g,cv.COLOR_BGR2GRAY),cv.cvtColor(m,v,cv.COLOR_BGR2GRAY),cv.remap(g,p,calibResults.l.map1,calibResults.l.map2,cv.INTER_LANCZOS4,cv.BORDER_CONSTANT),cv.remap(v,y,calibResults.r.map1,calibResults.r.map2,cv.INTER_LANCZOS4,cv.BORDER_CONSTANT),cv.imshow(e,p),cv.imshow(t,y),stereoMatcher.compute(p,y,b),b.convertTo(x,cv.CV_32F),cv.divide(x,scalarMap.getMat(d.size(),16,cv.CV_32F),x),cv.subtract(x,scalarMap.getMat(d.size(),stereoMatcher.getMinDisparity(),cv.CV_32F),x),cv.divide(x,scalarMap.getMat(d.size(),stereoMatcher.getNumDisparities(),cv.CV_32F),x),cv.imshow(n,x),freeMats(p,y,g,v,b,x)}else cv.imshow(e,d),cv.imshow(t,m);freeMats(c,u),_&&freeMats(d,m)}function checkIntersections(){raycaster.setFromCamera(pointer,camera);const o=raycaster.intersectObjects(scene.children,!1);o.length>0&&!raycastExcludeList.includes(o[0].object.id)?intersectedObj!=o[0].object&&(intersectedObj&&intersectedObj.material.emissive.setHex(oldColor),intersectedObj=o[0].object,oldColor=intersectedObj.material.emissive.getHex(),intersectedObj.material.emissive.setHex(HIGHLIGHT_COLOR)):(intersectedObj&&intersectedObj.material.emissive.setHex(oldColor),intersectedObj=null)}function _prepareCalibrationScene(o,e){const t=new AmbientLight(16777215,.5),n=new PlaneGeometry(1,1),i=new MeshBasicMaterial({color:0,side:DoubleSide}),r=new MeshBasicMaterial({color:16777215,side:DoubleSide});let l=[];for(let a=0;a<e;a++)for(let c=0;c<o;c++){let u;a%2&&c%2||!(a%2)&&!(c%2)?u=new Mesh(n,i):u=new Mesh(n,r),u.position.set(a-e/2,c-o/2,0),l.push(u)}return{calibInc:[...l],calibExc:[t]}}function _generateProps(){const o=new AmbientLight(16777215,.3),e=new Group,t=new PointLight(16777215,.8),n=new Box3Helper(new Box3(origin,new Vector3(2,2,2)),0),i=new GridHelper(10,10,65535,16711935),r=new BoxBufferGeometry(1,1,1);return n.position.set(origin),t.position.set(1,1,1),addObjToGroup([n,t],e,!0),e.position.set(10,75,10),i.position.set(0,-10,0),{inc:[...[65280,4521728,65416,8978176,65484,13434624,65518].map((a,c)=>{const u=new Mesh(r,new MeshLambertMaterial({color:a}));return u.position.set(c*2,0,c),u})],exc:[i,o,e]}}function addObjToScene(o,e,t=!1){typeof o==Object3D&&(o=[o]),t&&(o==null||o.forEach(n=>raycastExcludeList.push(n.id))),o==null||o.forEach(n=>{worldMap[e.name][n.id]=n,e.add(n)})}function addObjToGroup(o,e,t=!1){typeof o==Object3D&&(o=[o]),t&&o.forEach(n=>raycastExcludeList.push(n.id)),o.forEach(n=>{worldMap[n.id]=n,e.add(n)})}function attachAndRender(o,e,t,n,i,r){resetState(),camera=new PerspectiveCamera(90,viewerDims.w/viewerDims.h,.1,1e3),camera.position.set(10,10,10),camera.lookAt(origin);const{calibInc:l,calibExc:a}=_prepareCalibrationScene(8,8);addObjToScene(l,calibrationScene),addObjToScene(a,calibrationScene,!0);const{inc:c,exc:u}=_generateProps();addObjToScene(c,scene),addObjToScene(u,scene,!0),stereoCam=new StereoCamera,stereoCam.update(camera);let d=new WebGLRenderer({antialias:!0}),m=new WebGLRenderer({antialias:!0});d.setSize(viewerDims.w,viewerDims.h),m.setSize(viewerDims.w,viewerDims.h/2),new OrbitControls(camera,d.domElement),o.appendChild(d.domElement),e.appendChild(m.domElement),d.domElement.addEventListener("pointermove",p=>{pointer.y=-(p.offsetY/viewerDims.h)*2+1,pointer.x=p.offsetX/viewerDims.w*2-1}),d.domElement.addEventListener("click",p=>{(intersectedObj==null?void 0:intersectedObj.type)=="Mesh"&&console.log(intersectedObj.uuid)});function _(){camera.lookAt(origin),camera.updateMatrixWorld(),checkIntersections(),d.clear(),d.render(getScene(),camera);const p=new Vector2;if(camera.updateWorldMatrix(),stereoCam.update(camera),stereoCam.eyeSep=.5,m.getSize(p),m.setScissorTest(!0),m.setScissor(0,0,p.width/2,p.height),m.setViewport(0,0,p.width/2,p.height),m.render(getScene(),stereoCam.cameraL),m.setScissor(p.width/2,0,p.width/2,p.height),m.setViewport(p.width/2,0,p.width/2,p.height),m.render(getScene(),stereoCam.cameraR),m.setScissorTest(!1),f%4==0)try{_doStereoVis(m.domElement,t,n,i)}catch(y){console.log("fug"),console.log(y)}f=window.requestAnimationFrame(_,d.domElement)}cv.Mat?(r(),_()):cv.then(p=>{console.log(p),cv=p,r(),_()})}function useThree(){return{attachAndRender,toggleCalibrationMode,captureCalibrationPair,doStereoCalibration}}const _sfc_main={setup(){let o=useQuasar(),{attachAndRender:e,toggleCalibrationMode:t,captureCalibrationPair:n,doStereoCalibration:i}=useThree();const r=ref(!1),l=ref(!1),a=ref(0);return{$q:o,attachAndRender:e,cvReady:()=>r.value=!0,toggleCalibrationMode:t,captureCalibrationPair:n,doStereoCalibration:i,showThree:r,calibMode:l,capturedPairs:a}},components:{ScrollFixer},computed:{wide(){return this.$q.screen.width>900}},mounted(){this.attachAndRender(this.$refs.threeContainer,this.$refs.threeStereoContainer,this.$refs.leftEye,this.$refs.rightEye,this.$refs.dispMap,this.cvReady)}},_hoisted_1={class:"row justify-center align-center"},_hoisted_2=createBaseVNode("div",{class:"row justify-center align-center"},"The single cam view",-1),_hoisted_3={class:"row justify-center align-center",ref:"threeContainer"},_hoisted_4=createBaseVNode("div",{class:"row justify-center align-center"},"The stereo cam view",-1),_hoisted_5={class:"row justify-center align-center",ref:"threeStereoContainer"},_hoisted_6=createBaseVNode("div",{class:"row justify-around align-center"},[createBaseVNode("div",null,"Undistorted Left Eye View"),createBaseVNode("div",null,"Undistorted Right Eye View")],-1),_hoisted_7={class:"row justify-center align-center q-pb-sm"},_hoisted_8={style:{border:"solid 1px black"},width:"640",height:"360",ref:"leftEye"},_hoisted_9={style:{border:"solid 1px black"},width:"640",height:"360",ref:"rightEye"},_hoisted_10=createBaseVNode("div",{class:"row justify-around align-center"},[createBaseVNode("div",null,"Disparity Map")],-1),_hoisted_11={class:"row justify-center align-center q-pb-sm"},_hoisted_12={style:{border:"solid 1px black"},width:"640",height:"360",ref:"dispMap"},_hoisted_13=createBaseVNode("h4",null,"Loading OpenCV...",-1);function _sfc_render(o,e,t,n,i,r){const l=resolveComponent("ScrollFixer");return openBlock(),createBlock(QPage,{class:"column justify-start align-center"},{default:withCtx(()=>[createVNode(l,null,{content:withCtx(()=>[withDirectives(createBaseVNode("div",null,[createBaseVNode("div",_hoisted_1,[createVNode(QBtn,{label:"Toggle Chessboard/ Normal mode",onClick:e[0]||(e[0]=a=>n.calibMode=n.toggleCalibrationMode())}),n.calibMode?(openBlock(),createBlock(QBtn,{key:0,label:"Capture calibration pair",onClick:e[1]||(e[1]=a=>n.capturedPairs=n.captureCalibrationPair())})):createCommentVNode("",!0),n.calibMode?(openBlock(),createBlock(QBtn,{key:1,label:"Calibrate Cameras",onClick:n.doStereoCalibration},null,8,["onClick"])):createCommentVNode("",!0),n.calibMode?(openBlock(),createBlock(QChip,{key:2,square:"",label:`Pairs captured: ${n.capturedPairs}`},null,8,["label"])):createCommentVNode("",!0)]),_hoisted_2,createBaseVNode("div",_hoisted_3,null,512),_hoisted_4,createBaseVNode("div",_hoisted_5,null,512),_hoisted_6,createBaseVNode("div",_hoisted_7,[createBaseVNode("canvas",_hoisted_8,null,512),createBaseVNode("canvas",_hoisted_9,null,512)]),_hoisted_10,createBaseVNode("div",_hoisted_11,[createBaseVNode("canvas",_hoisted_12,null,512)])],512),[[vShow,n.showThree]]),createVNode(QInnerLoading,{showing:!n.showThree},{default:withCtx(()=>[_hoisted_13,createVNode(QSpinnerGears,{size:"100px",color:"secondary"})]),_:1},8,["showing"])]),_:1})]),_:1})}var ThreePage=_export_sfc(_sfc_main,[["render",_sfc_render]]);export{ThreePage as default};
