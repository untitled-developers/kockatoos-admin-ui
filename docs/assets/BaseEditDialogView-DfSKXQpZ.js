import{B as ve}from"./BasePageContent-DCqL9wbD.js";import{_ as ye}from"./BaseDoc-BkYkSdAy.js";import{B as he,_ as $e}from"./BaseDocFunctionalityPreview-DKJ1F7VM.js";import{B as R,R as Q,n as X,p as Z,q as W,v as we,x as Se,a as x,o as b,j as y,r as B,y as Be,z as O,A as D,t as C,C as N,D as I,E as xe,F as ke,G as De,d as E,H as Oe,e as f,I as Ee,J as Le,f as m,g as h,h as L,K as ee,L as Pe,M as Te,N as Ce,c as j,_ as Ve,m as J,u as G,b as V,O as ze,P as Ae,T as Ie,w as qe,s as q,i as Fe,k as je}from"./index-COTbqbh1.js";import{u as te,o as ne,a as Me,s as Y}from"./useCreateFormSchema-DDrWKAKC.js";import{_ as F}from"./BaseInputContainer-RLiUVCKQ.js";var Ne=({dt:e})=>`
.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    overflow: hidden;
    position: relative;
    color: ${e("togglebutton.color")};
    background: ${e("togglebutton.background")};
    border: 1px solid ${e("togglebutton.border.color")};
    padding: ${e("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
        outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    border-radius: ${e("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${e("togglebutton.font.weight")};
}

.p-togglebutton-content {
    display: inline-flex;
    flex: 1 1 auto;
    align-items: center;
    justify-content: center;
    gap: ${e("togglebutton.gap")};
    padding: ${e("togglebutton.content.padding")};
    background: transparent;
    border-radius: ${e("togglebutton.content.border.radius")};
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
            outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${e("togglebutton.hover.background")};
    color: ${e("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${e("togglebutton.checked.background")};
    border-color: ${e("togglebutton.checked.border.color")};
    color: ${e("togglebutton.checked.color")};
}

.p-togglebutton-checked .p-togglebutton-content {
    background: ${e("togglebutton.content.checked.background")};
    box-shadow: ${e("togglebutton.content.checked.shadow")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${e("togglebutton.focus.ring.shadow")};
    outline: ${e("togglebutton.focus.ring.width")} ${e("togglebutton.focus.ring.style")} ${e("togglebutton.focus.ring.color")};
    outline-offset: ${e("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${e("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${e("togglebutton.disabled.background")};
    border-color: ${e("togglebutton.disabled.border.color")};
    color: ${e("togglebutton.disabled.color")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton-icon {
    color: ${e("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${e("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${e("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${e("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${e("togglebutton.sm.padding")};
    font-size: ${e("togglebutton.sm.font.size")};
}

.p-togglebutton-sm .p-togglebutton-content {
    padding: ${e("togglebutton.content.sm.padding")};
}

.p-togglebutton-lg {
    padding: ${e("togglebutton.lg.padding")};
    font-size: ${e("togglebutton.lg.font.size")};
}

.p-togglebutton-lg .p-togglebutton-content {
    padding: ${e("togglebutton.content.lg.padding")};
}
`,Ue={root:function(t){var n=t.instance,r=t.props;return["p-togglebutton p-component",{"p-togglebutton-checked":n.active,"p-invalid":n.$invalid,"p-togglebutton-sm p-inputfield-sm":r.size==="small","p-togglebutton-lg p-inputfield-lg":r.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Re=R.extend({name:"togglebutton",style:Ne,classes:Ue}),Ke={name:"BaseToggleButton",extends:X,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},iconPos:{type:String,default:"left"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null}},style:Re,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function z(e){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(e)}function _e(e,t,n){return(t=He(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function He(e){var t=We(e,"string");return z(t)=="symbol"?t:t+""}function We(e,t){if(z(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(z(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var oe={name:"ToggleButton",extends:Ke,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{active:this.active,disabled:this.disabled}})},onChange:function(t){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,t),this.$emit("change",t))},onBlur:function(t){var n,r;(n=(r=this.formField).onBlur)===null||n===void 0||n.call(r,t)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return W(this.onLabel)&&W(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "},dataP:function(){return Z(_e({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:Q}},Je=["tabindex","disabled","aria-pressed","aria-label","aria-labelledby","data-p-checked","data-p-disabled","data-p"],Ge=["data-p"];function Ye(e,t,n,r,a,o){var l=we("ripple");return Se((b(),x("button",D({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:t[0]||(t[0]=function(){return o.onChange&&o.onChange.apply(o,arguments)}),onBlur:t[1]||(t[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)})},o.getPTOptions("root"),{"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"data-p-checked":o.active,"data-p-disabled":e.disabled,"data-p":o.dataP}),[y("span",D({class:e.cx("content")},o.getPTOptions("content"),{"data-p":o.dataP}),[B(e.$slots,"default",{},function(){return[B(e.$slots,"icon",{value:e.d_value,class:Be(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(b(),x("span",D({key:0,class:[e.cx("icon"),e.d_value?e.onIcon:e.offIcon]},o.getPTOptions("icon")),null,16)):O("",!0)]}),y("span",D({class:e.cx("label")},o.getPTOptions("label")),C(o.label),17)]})],16,Ge)],16,Je)),[[l]])}oe.render=Ye;var Qe=({dt:e})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton .p-togglebutton:first-child {
    border-inline-start-width: 1px;
    border-start-start-radius: ${e("selectbutton.border.radius")};
    border-end-start-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton:last-child {
    border-start-end-radius: ${e("selectbutton.border.radius")};
    border-end-end-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton.p-invalid {
    outline: 1px solid ${e("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,Xe={root:function(t){var n=t.instance;return["p-selectbutton p-component",{"p-invalid":n.$invalid}]}},Ze=R.extend({name:"selectbutton",style:Qe,classes:Xe}),et={name:"BaseSelectButton",extends:X,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null}},style:Ze,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function tt(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=re(e))||t){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(v){throw v},f:a}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,l=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var v=n.next();return l=v.done,v},e:function(v){s=!0,o=v},f:function(){try{l||n.return==null||n.return()}finally{if(s)throw o}}}}function nt(e){return at(e)||rt(e)||re(e)||ot()}function ot(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(e,t){if(e){if(typeof e=="string")return U(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}function rt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function at(e){if(Array.isArray(e))return U(e)}function U(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var ae={name:"SelectButton",extends:et,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(t){return this.optionLabel?I(t,this.optionLabel):t},getOptionValue:function(t){return this.optionValue?I(t,this.optionValue):t},getOptionRenderKey:function(t){return this.dataKey?I(t,this.dataKey):this.getOptionLabel(t)},isOptionDisabled:function(t){return this.optionDisabled?I(t,this.optionDisabled):!1},isOptionReadonly:function(t){if(this.allowEmpty)return!1;var n=this.isSelected(t);return this.multiple?n&&this.d_value.length===1:n},onOptionSelect:function(t,n,r){var a=this;if(!(this.disabled||this.isOptionDisabled(n)||this.isOptionReadonly(n))){var o=this.isSelected(n),l=this.getOptionValue(n),s;if(this.multiple)if(o){if(s=this.d_value.filter(function(i){return!N(i,l,a.equalityKey)}),!this.allowEmpty&&s.length===0)return}else s=this.d_value?[].concat(nt(this.d_value),[l]):[l];else{if(o&&!this.allowEmpty)return;s=o?null:l}this.writeValue(s,t),this.$emit("change",{event:t,value:s})}},isSelected:function(t){var n=!1,r=this.getOptionValue(t);if(this.multiple){if(this.d_value){var a=tt(this.d_value),o;try{for(a.s();!(o=a.n()).done;){var l=o.value;if(N(l,r,this.equalityKey)){n=!0;break}}}catch(s){a.e(s)}finally{a.f()}}}else n=N(this.d_value,r,this.equalityKey);return n}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return Z({invalid:this.$invalid})}},directives:{ripple:Q},components:{ToggleButton:oe}},lt=["aria-labelledby","data-p"];function it(e,t,n,r,a,o){var l=xe("ToggleButton");return b(),x("div",D({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root"),{"data-p":o.dataP}),[(b(!0),x(ke,null,De(e.options,function(s,i){return b(),E(l,{key:o.getOptionRenderKey(s),modelValue:o.isSelected(s),onLabel:o.getOptionLabel(s),offLabel:o.getOptionLabel(s),disabled:e.disabled||o.isOptionDisabled(s),unstyled:e.unstyled,size:e.size,readonly:o.isOptionReadonly(s),onChange:function(u){return o.onOptionSelect(u,s,i)},pt:e.ptm("pcToggleButton")},Oe({_:2},[e.$slots.option?{name:"default",fn:f(function(){return[B(e.$slots,"option",{option:s,index:i},function(){return[y("span",D({ref_for:!0},e.ptm("pcToggleButton").label),C(o.getOptionLabel(s)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,lt)}ae.render=it;var st=({dt:e})=>`
.p-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: ${e("toolbar.padding")};
    background: ${e("toolbar.background")};
    border: 1px solid ${e("toolbar.border.color")};
    color: ${e("toolbar.color")};
    border-radius: ${e("toolbar.border.radius")};
    gap: ${e("toolbar.gap")};
}

.p-toolbar-start,
.p-toolbar-center,
.p-toolbar-end {
    display: flex;
    align-items: center;
}
`,ut={root:"p-toolbar p-component",start:"p-toolbar-start",center:"p-toolbar-center",end:"p-toolbar-end"},dt=R.extend({name:"toolbar",style:st,classes:ut}),ct={name:"BaseToolbar",extends:Ee,props:{ariaLabelledby:{type:String,default:null}},style:dt,provide:function(){return{$pcToolbar:this,$parentInstance:this}}},le={name:"Toolbar",extends:ct,inheritAttrs:!1},pt=["aria-labelledby"];function ft(e,t,n,r,a,o){return b(),x("div",D({class:e.cx("root"),role:"toolbar","aria-labelledby":e.ariaLabelledby},e.ptmi("root")),[y("div",D({class:e.cx("start")},e.ptm("start")),[B(e.$slots,"start")],16),y("div",D({class:e.cx("center")},e.ptm("center")),[B(e.$slots,"center")],16),y("div",D({class:e.cx("end")},e.ptm("end")),[B(e.$slots,"end")],16)],16,pt)}le.render=ft;function gt(){const e=Le();function t(o,l={}){return e.openDialog(o,{props:l.props||{},handlers:l.handlers||{}})}function n(o){e.closeDialog(o)}function r(o,l){e.updateDialogProps(o,l)}function a(o){e.refreshDialog(o)}return{openDialog:t,closeDialog:n,updateDialogProps:r,refreshDialog:a}}const bt={class:"flex items-center justify-between w-full"},mt={class:"font-medium text-xl"},vt={__name:"BaseDialog",props:{header:{type:String,required:!1},position:{type:String,default:"center"},fullScreen:{type:Boolean,default:!1},fullHeight:{type:Boolean,default:!1},width:{type:String,default:"500px"}},emits:["close"],setup(e,{emit:t}){const n=t;function r(){n("close")}return(a,o)=>(b(),E(h(Pe),{modal:"",draggable:!1,"block-scroll":"",visible:!0,style:ee({maxWidth:e.width,width:"100%",height:e.fullHeight?"100%":"auto"}),pt:{root:{class:[e.fullScreen?"p-dialog-maximized":""]},mask:{style:{animation:"none !important"}}},closable:!1,position:e.position},{header:f(()=>[y("div",bt,[y("h2",mt,C(e.header),1),y("div",null,[m(h(L),{severity:"secondary",icon:"pi pi-times",size:"large",rounded:"",onClick:r})])])]),footer:f(()=>[m(h(le),{class:"w-full",pt:{root:{style:{border:"none"}}}},{start:f(()=>[B(a.$slots,"footer-start")]),center:f(()=>[B(a.$slots,"footer-center")]),end:f(()=>[B(a.$slots,"footer-end")]),_:3})]),default:f(()=>[B(a.$slots,"content")]),_:3},8,["style","pt","position"]))}},yt={class:"flex gap-x-2"},ht={__name:"BaseEditDialogNavigationButtons",emits:["next-record","previous-record"],setup(e,{emit:t}){const n=t;function r(){n("previous-record")}function a(){n("next-record")}return(o,l)=>(b(),x("div",yt,[m(h(L),{severity:"secondary",icon:"pi pi-chevron-left",onClick:r,"aria-label":"Filter"}),m(h(L),{severity:"secondary",icon:"pi pi-chevron-right",onClick:a,"aria-label":"Filter"})]))}};function ie(){const e=Te();function t(l){e.add({severity:l.severity,summary:l.summary,detail:l.detail,life:l.life})}function n(l){t({severity:"success",summary:"Success",detail:l,life:3e3})}function r(l){t({severity:"warn",summary:"Warning",detail:l,life:3e3})}function a(l){t({severity:"error",summary:"Error",detail:l,life:3e3})}function o(l){t({severity:"info",summary:"Info",detail:l,life:3e3})}return{alertError:a,alertInfo:o,alertSuccess:n,alertWarning:r}}function $t(){const e="transparent-overlay",{alertInfo:t}=ie();let n=!0,r=!1;function a(){if(document.getElementById(e))return;r=!0;const i=document.createElement("div");i.id=e,i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.backgroundColor="transparent",i.style.zIndex="9999",document.body.appendChild(i),document.addEventListener("keydown",l),document.addEventListener("click",s),document.addEventListener("keydown",s),setTimeout(()=>{n=!1},100)}function o(){const i=document.getElementById(e);i&&document.body.removeChild(i),document.removeEventListener("keydown",l),document.removeEventListener("click",s),document.removeEventListener("keydown",s),n=!0,r=!1}function l(i){i.preventDefault()}function s(i){if(n){n=!1;return}t("Please wait while we process your request...")}return Ce(()=>{r&&o()}),{freezeApp:a,unfreezeApp:o}}function wt(){function e(t,n){if(!t)throw new Error("Call to validateData must include a schema");if(!n)throw new Error("Call to validateData must include data to validate");return t.safeParse(n).success?{success:!0}:t.safeParse(n).error.format()}return{validateData:e}}function St(e,t){const{validateData:n}=wt(),{get:r}=te();if(!e)throw new Error("useForm requires a formRef");if(!t)throw new Error("useForm requires a formSchema");const a=j(()=>n(t,e.value));function o(s){if(!a.value||a.value.success)return[];const i=r(a.value,s);return i?i._errors||[]:[]}function l(){return a.value&&!a.value.success}return{errors:a,getErrors:o,hasErrors:l}}function Bt(){return window.axios}const xt={class:"flex flex-col items-center justify-center gap-y-2"},kt={key:0,class:"font-medium text-(--p-primary-600) text-xl animate-fade-in-up"},Dt={key:0,class:"absolute inset-0 z-10 flex flex-col bg-gray-100/60 backdrop-blur-xs items-center justify-center rounded-xl"},Ot={class:"flex flex-col items-center justify-center gap-y-2"},Et={key:0,class:"font-medium text-(--p-primary-600) text-xl animate-fade-in-up"},Lt={key:1,class:"relative overflow-hidden"},Pt={__name:"BaseEditDialog",props:J({record:{type:Object},header:{type:String},recordType:{type:String,default:""},endpoint:{type:String},requestBodyMapper:{type:Function,default:null},recordMapper:{type:Function,default:null},fullHeight:{type:Boolean,default:!1},position:{type:String,default:"center"},fullScreen:{type:Boolean,default:!1},withNavigation:{type:Boolean,default:!0},withSubmit:{type:Boolean,default:!0},formId:{type:String},width:{type:String},withCloseButton:{type:Boolean,default:!0},requestUrlMapper:{type:Function}},{form:{},formModifiers:{},formSchema:{default:()=>ne({})},formSchemaModifiers:{}}),emits:J(["next-record","previous-record","submit","close"],["update:form","update:formSchema"]),setup(e,{expose:t,emit:n}){const r=e,a=n,o=G(e,"form"),l=G(e,"formSchema"),s=Bt(),{getErrors:i,hasErrors:v}=St(o,l.value),{alertError:u}=ie(),{freezeApp:S,unfreezeApp:A}=$t(),{cloneDeep:P}=te(),k=V(!1),w=V({active:!1,message:"",height:"",mode:"",freezeApp:!1}),T=j(()=>!!r.record),M=j(()=>w.value.active),se=j(()=>{var d;return r.header?r.header:r.recordType?T.value?`Edit ${r.recordType} #${(d=r.record)==null?void 0:d.id}`:`Create ${r.recordType}`:""});function ue(){r.record&&a("next-record",r.record)}function de(){r.record&&a("previous-record",r.record)}function K(){a("close")}function ce(){return r.requestUrlMapper&&typeof r.requestUrlMapper=="function"?r.requestUrlMapper(r.record):T.value?`${r.endpoint}/${r.record.id}`:r.endpoint}async function pe(){if(v()){k.value=!0;return}const d=ge(o.value);try{_(),await fe(d),a("submit"),K()}catch(g){u("Error submitting formData"),console.log(g)}finally{H()}}async function fe(d){return await s.post(ce(),d)}function ge(d={}){let g=d,c=!1;r.requestBodyMapper&&typeof r.requestBodyMapper=="function"&&(g=r.requestBodyMapper(d),c=!0);const $=new FormData;return c?(Object.keys(g).forEach(p=>{p==="data"?$.append("data",JSON.stringify(g.data)):$.append(p,g[p])}),$):(Object.keys(d).length>0&&$.append("data",JSON.stringify(d)),$)}async function be(d,g){if(!(d!=null&&d.value)||!g)return;let c=g;r.recordMapper&&typeof r.recordMapper=="function"&&(c=await r.recordMapper(g));const $={};Object.keys(d.value).forEach(p=>{if(p in c)switch(!0){case c[p]===null:$[p]=null;break;case Array.isArray(c[p]):$[p]=P(c[p]);break;case typeof c[p]=="object":$[p]=P(c[p]);break;case typeof c[p]=="string":case typeof c[p]=="number":case typeof c[p]=="boolean":case typeof c[p]>"u":$[p]=c[p];break;default:console.warn(`Unexpected type for key "${p}": ${typeof c[p]}`);break}}),c!=null&&c.id&&($.id=c.id),Object.assign(d.value,$)}function _(d={}){const{template:g="blocking",message:c,height:$,customOptions:p={}}=d,me={blocking:{active:!0,message:c??"Processing request",height:"auto",mode:"overlay",freezeApp:!0},embedded:{active:!0,message:c??"Loading content",height:$??"500px",mode:"replace",freezeApp:!1}}[g];w.value={...me,...p}}function H(){w.value.active=!1,w.value.freezeApp=!1}return ze(()=>w,d=>{d.value.active&&d.value.freezeApp?S({useBlur:!0,text:d.message}):A()},{immediate:!0,deep:!0}),Ae(async()=>{T.value&&await be(o,r.record)}),t({startDialogLoading:_,stopDialogLoading:H}),(d,g)=>(b(),E(vt,{header:se.value,width:e.width,"full-screen":e.fullScreen,position:e.position,"full-height":e.fullHeight,onClose:K},{content:f(()=>[M.value&&w.value.mode==="replace"?(b(),x("div",{key:0,style:ee({height:w.value.height}),class:"flex flex-col items-center justify-center"},[y("div",xt,[g[1]||(g[1]=y("div",{class:"animate-spin rounded-full border-4 border-gray-300 border-t-(--p-primary-600) size-8"},null,-1)),w.value.message?(b(),x("div",kt,C(w.value.message),1)):O("",!0)])],4)):O("",!0),m(Ie,{name:"fade-scale"},{default:f(()=>[M.value&&w.value.mode==="overlay"?(b(),x("div",Dt,[y("div",Ot,[g[2]||(g[2]=y("div",{class:"animate-spin rounded-full border-4 border-gray-300 border-t-(--p-primary-600) size-8"},null,-1)),w.value.message?(b(),x("div",Et,C(w.value.message),1)):O("",!0)])])):O("",!0)]),_:1}),!M.value||w.value.mode!=="replace"?(b(),x("div",Lt,[y("div",null,[B(d.$slots,"content",{getErrors:h(i),handleSubmit:pe,didSubmit:k.value},void 0,!0)])])):O("",!0)]),"footer-start":f(()=>[e.withNavigation&&T.value?(b(),E(ht,{key:0,onPreviousRecord:de,onNextRecord:ue})):O("",!0)]),"footer-end":f(()=>[e.withCloseButton?(b(),E(h(L),{key:0,label:"Close",class:"mx-2",severity:"secondary",onClick:g[0]||(g[0]=c=>a("close"))})):O("",!0),e.withSubmit?(b(),E(h(L),{key:1,label:T.value?"Save":"Submit",type:"submit",form:e.formId},null,8,["label","form"])):O("",!0),B(d.$slots,"footer-end",{},void 0,!0)]),_:3},8,["header","width","full-screen","position","full-height"]))}},Tt=Ve(Pt,[["__scopeId","data-v-bdb2bbb8"]]),Ct=["onSubmit"],Vt={__name:"BaseEditDialogTest",props:{record:Object},emits:["close","submit","next-record","previous-record"],setup(e,{emit:t}){const n=e,{createFormSchema:r}=Me({props:n}),a=t,o=V({name:"",username:"",phone:"",password:"",roles:[1]});let l=r(ne({username:Y().nonempty("Username is required"),password:Y().nonempty("Password is required").min(6,"Password must be at least 6 characters")}));function s(v){return{...v,roles:[1]}}function i(v){return{...v,roles:v.roles.map(u=>u.id)}}return(v,u)=>(b(),E(Tt,{"form-id":"something-form",record:e.record,"record-type":"Something",endpoint:"api/something","record-mapper":s,"request-body-mapper":i,form:o.value,"onUpdate:form":u[4]||(u[4]=S=>o.value=S),"form-schema":h(l),"onUpdate:formSchema":u[5]||(u[5]=S=>Fe(l)?l.value=S:l=S),onSubmit:u[6]||(u[6]=S=>a("submit")),onNextRecord:u[7]||(u[7]=S=>a("next-record",e.record)),onPreviousRecord:u[8]||(u[8]=S=>a("previous-record",e.record)),onClose:u[9]||(u[9]=S=>a("close"))},{content:f(({handleSubmit:S,getErrors:A,didSubmit:P})=>[y("form",{id:"something-form",onSubmit:qe(S,["prevent"]),class:"flex flex-col gap-y-4"},[m(F,{label:"Username",errors:A("username"),"show-errors":P},{default:f(()=>[m(h(q),{modelValue:o.value.username,"onUpdate:modelValue":u[0]||(u[0]=k=>o.value.username=k)},null,8,["modelValue"])]),_:2},1032,["errors","show-errors"]),m(F,{label:"Name"},{default:f(()=>[m(h(q),{modelValue:o.value.name,"onUpdate:modelValue":u[1]||(u[1]=k=>o.value.name=k)},null,8,["modelValue"])]),_:1}),m(F,{label:"Phone"},{default:f(()=>[m(h(q),{modelValue:o.value.phone,"onUpdate:modelValue":u[2]||(u[2]=k=>o.value.phone=k)},null,8,["modelValue"])]),_:1}),m(F,{label:"Password",errors:A("password"),"show-errors":P},{default:f(()=>[m(h(q),{modelValue:o.value.password,"onUpdate:modelValue":u[3]||(u[3]=k=>o.value.password=k),type:"password"},null,8,["modelValue"])]),_:2},1032,["errors","show-errors"])],40,Ct)]),_:1},8,["record","form","form-schema"]))}},zt={class:"flex flex-col gap-y-2"},At={class:"flex items-center"},Rt={__name:"BaseEditDialogView",setup(e){const{openDialog:t,closeDialog:n}=gt(),r=[{name:"Add",value:"Add"},{name:"Edit",value:"Edit"}],a=V("Add"),o=V({id:1,name:"John Doe",username:"johndoe",phone:"123-456-7890",password:"password123"});function l(){const s=t(Vt,{props:{record:a.value==="Edit"?o.value:null},handlers:{close:()=>{console.log("Dialog closed"),n(s)},submit:i=>{console.log("Submitted data:",i),n(s)},"next-record":i=>{console.log("Next record:",i)},"previous-record":i=>{console.log("Previous record:",i)}}})}return(s,i)=>(b(),E(ve,null,{default:f(()=>[m(ye,null,{default:f(()=>[m(he,null,{default:f(()=>[y("div",zt,[y("div",At,[m(h(ae),{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=v=>a.value=v),options:r,"option-value":"value",optionLabel:"name"},null,8,["modelValue"])]),m(h(L),{onClick:l,label:"Open Dialog"})])]),_:1}),m($e,{title:"Usage"},{default:f(()=>i[1]||(i[1]=[je(" WORK IN PROGRESS ")])),_:1})]),_:1})]),_:1}))}};export{Rt as default};
