import{a as ee,R as te,aE as oe,a2 as ne,aA as Y,ay as ve,b8 as we,aq as h,E as $,y as o,aw as O,aj as Se,ah as q,A as E,aT as S,ab as F,ar as z,ax as xe,g as M,av as R,z as T,N as Be,b7 as f,X as p,aY as x,aB as L,al as re,aR as ke,am as $e,r as De,b0 as X,b6 as Ee,an as Oe,T as Te,ag as G,x as U,au as C,ba as Pe,aD as I,aa as qe}from"./index-BHIwW7Jo.js";import{B as Le,_ as _e,a as Q}from"./BaseDocCodePreview-C_4-N-U0.js";import{_ as P}from"./BaseDocSection-D_7jT_qW.js";import{B as Ae}from"./BaseDocFunctionalityPreview-CaqV9kjP.js";import{u as Ce}from"./useDialog-DpS0fUo7.js";import{s as Ve}from"./index--bvlDdVG.js";import{u as ae}from"./useAlerts-Djnq1HIv.js";import{u as ze}from"./useForm-CfJRdZ1v.js";import{u as Ie}from"./useUtils-Dlb80J80.js";import{u as Ne}from"./useFetch-CIzhyb7H.js";import{o as le,s as Z}from"./types-By9teAtI.js";import{_ as N}from"./BaseInputContainer-B7_HOc0t.js";import{u as Me}from"./useCreateFormSchema-BkiyRN7j.js";var Re=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`,je={root:function(t){var n=t.instance,r=t.props;return["p-togglebutton p-component",{"p-togglebutton-checked":n.active,"p-invalid":n.$invalid,"p-togglebutton-fluid":r.fluid,"p-togglebutton-sm p-inputfield-sm":r.size==="small","p-togglebutton-lg p-inputfield-lg":r.size==="large"}]},content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},Fe=ee.extend({name:"togglebutton",style:Re,classes:je}),Ue={name:"BaseToggleButton",extends:oe,props:{onIcon:String,offIcon:String,onLabel:{type:String,default:"Yes"},offLabel:{type:String,default:"No"},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:Fe,provide:function(){return{$pcToggleButton:this,$parentInstance:this}}};function V(e){"@babel/helpers - typeof";return V=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},V(e)}function Ke(e,t,n){return(t=He(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function He(e){var t=Je(e,"string");return V(t)=="symbol"?t:t+""}function Je(e,t){if(V(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(V(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ie={name:"ToggleButton",extends:Ue,inheritAttrs:!1,emits:["change"],methods:{getPTOptions:function(t){var n=t==="root"?this.ptmi:this.ptm;return n(t,{context:{active:this.active,disabled:this.disabled}})},onChange:function(t){!this.disabled&&!this.readonly&&(this.writeValue(!this.d_value,t),this.$emit("change",t))},onBlur:function(t){var n,r;(n=(r=this.formField).onBlur)===null||n===void 0||n.call(r,t)}},computed:{active:function(){return this.d_value===!0},hasLabel:function(){return Y(this.onLabel)&&Y(this.offLabel)},label:function(){return this.hasLabel?this.d_value?this.onLabel:this.offLabel:" "},dataP:function(){return ne(Ke({checked:this.active,invalid:this.$invalid},this.size,this.size))}},directives:{ripple:te}},We=["tabindex","disabled","aria-pressed","aria-label","aria-labelledby","data-p-checked","data-p-disabled","data-p"],Ye=["data-p"];function Xe(e,t,n,r,l,a){var c=ve("ripple");return we((h(),$("button",q({type:"button",class:e.cx("root"),tabindex:e.tabindex,disabled:e.disabled,"aria-pressed":e.d_value,onClick:t[0]||(t[0]=function(){return a.onChange&&a.onChange.apply(a,arguments)}),onBlur:t[1]||(t[1]=function(){return a.onBlur&&a.onBlur.apply(a,arguments)})},a.getPTOptions("root"),{"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"data-p-checked":a.active,"data-p-disabled":e.disabled,"data-p":a.dataP}),[o("span",q({class:e.cx("content")},a.getPTOptions("content"),{"data-p":a.dataP}),[O(e.$slots,"default",{},function(){return[O(e.$slots,"icon",{value:e.d_value,class:Se(e.cx("icon"))},function(){return[e.onIcon||e.offIcon?(h(),$("span",q({key:0,class:[e.cx("icon"),e.d_value?e.onIcon:e.offIcon]},a.getPTOptions("icon")),null,16)):E("",!0)]}),o("span",q({class:e.cx("label")},a.getPTOptions("label")),S(a.label),17)]})],16,Ye)],16,We)),[[c]])}ie.render=Xe;var Ge=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
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
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`,Qe={root:function(t){var n=t.props,r=t.instance;return["p-selectbutton p-component",{"p-invalid":r.$invalid,"p-selectbutton-fluid":n.fluid}]}},Ze=ee.extend({name:"selectbutton",style:Ge,classes:Qe}),et={name:"BaseSelectButton",extends:oe,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,multiple:Boolean,allowEmpty:{type:Boolean,default:!0},dataKey:null,ariaLabelledby:{type:String,default:null},size:{type:String,default:null},fluid:{type:Boolean,default:null}},style:Ze,provide:function(){return{$pcSelectButton:this,$parentInstance:this}}};function tt(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=se(e))||t){n&&(e=n);var r=0,l=function(){};return{s:l,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(w){throw w},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var a,c=!0,d=!1;return{s:function(){n=n.call(e)},n:function(){var w=n.next();return c=w.done,w},e:function(w){d=!0,a=w},f:function(){try{c||n.return==null||n.return()}finally{if(d)throw a}}}}function ot(e){return at(e)||rt(e)||se(e)||nt()}function nt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function se(e,t){if(e){if(typeof e=="string")return K(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?K(e,t):void 0}}function rt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function at(e){if(Array.isArray(e))return K(e)}function K(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var de={name:"SelectButton",extends:et,inheritAttrs:!1,emits:["change"],methods:{getOptionLabel:function(t){return this.optionLabel?z(t,this.optionLabel):t},getOptionValue:function(t){return this.optionValue?z(t,this.optionValue):t},getOptionRenderKey:function(t){return this.dataKey?z(t,this.dataKey):this.getOptionLabel(t)},isOptionDisabled:function(t){return this.optionDisabled?z(t,this.optionDisabled):!1},isOptionReadonly:function(t){if(this.allowEmpty)return!1;var n=this.isSelected(t);return this.multiple?n&&this.d_value.length===1:n},onOptionSelect:function(t,n,r){var l=this;if(!(this.disabled||this.isOptionDisabled(n)||this.isOptionReadonly(n))){var a=this.isSelected(n),c=this.getOptionValue(n),d;if(this.multiple)if(a){if(d=this.d_value.filter(function(i){return!F(i,c,l.equalityKey)}),!this.allowEmpty&&d.length===0)return}else d=this.d_value?[].concat(ot(this.d_value),[c]):[c];else{if(a&&!this.allowEmpty)return;d=a?null:c}this.writeValue(d,t),this.$emit("change",{originalEvent:t,value:d})}},isSelected:function(t){var n=!1,r=this.getOptionValue(t);if(this.multiple){if(this.d_value){var l=tt(this.d_value),a;try{for(l.s();!(a=l.n()).done;){var c=a.value;if(F(c,r,this.equalityKey)){n=!0;break}}}catch(d){l.e(d)}finally{l.f()}}}else n=F(this.d_value,r,this.equalityKey);return n}},computed:{equalityKey:function(){return this.optionValue?null:this.dataKey},dataP:function(){return ne({invalid:this.$invalid})}},directives:{ripple:te},components:{ToggleButton:ie}},lt=["aria-labelledby","data-p"];function it(e,t,n,r,l,a){var c=xe("ToggleButton");return h(),$("div",q({class:e.cx("root"),role:"group","aria-labelledby":e.ariaLabelledby},e.ptmi("root"),{"data-p":a.dataP}),[(h(!0),$(M,null,R(e.options,function(d,i){return h(),T(c,{key:a.getOptionRenderKey(d),modelValue:a.isSelected(d),onLabel:a.getOptionLabel(d),offLabel:a.getOptionLabel(d),disabled:e.disabled||a.isOptionDisabled(d),unstyled:e.unstyled,size:e.size,readonly:a.isOptionReadonly(d),onChange:function(u){return a.onOptionSelect(u,d,i)},pt:e.ptm("pcToggleButton")},Be({_:2},[e.$slots.option?{name:"default",fn:f(function(){return[O(e.$slots,"option",{option:d,index:i},function(){return[o("span",q({ref_for:!0},e.ptm("pcToggleButton").label),S(a.getOptionLabel(d)),17)]})]}),key:"0"}:void 0]),1032,["modelValue","onLabel","offLabel","disabled","unstyled","size","readonly","onChange","pt"])}),128))],16,lt)}de.render=it;const st={class:"flex items-center justify-between w-full"},dt={class:"font-medium text-xl"},ut={__name:"BaseDialog",props:{header:{type:String,required:!1},position:{type:String,default:"center"},fullScreen:{type:Boolean,default:!1},fullHeight:{type:Boolean,default:!1},width:{type:String,default:"500px"}},emits:["close"],setup(e,{emit:t}){const n=t;function r(){n("close")}return(l,a)=>(h(),T(x(ke),{modal:"",draggable:!1,"block-scroll":"",visible:!0,style:re({maxWidth:e.width,width:"100%",height:e.fullHeight?"100%":"auto"}),pt:{root:{class:[e.fullScreen?"p-dialog-maximized":""]},mask:{style:{animation:"none !important"}}},closable:!1,position:e.position},{header:f(()=>[o("div",st,[o("h2",dt,S(e.header),1),o("div",null,[p(x(L),{severity:"secondary",icon:"pi pi-times",size:"large",rounded:"",onClick:r})])])]),footer:f(()=>[p(x(Ve),{class:"w-full",pt:{root:{style:{border:"none"}}}},{start:f(()=>[O(l.$slots,"footer-start")]),center:f(()=>[O(l.$slots,"footer-center")]),end:f(()=>[O(l.$slots,"footer-end")]),_:3})]),default:f(()=>[O(l.$slots,"content")]),_:3},8,["style","pt","position"]))}},ct={class:"flex gap-x-2"},pt={__name:"BaseEditDialogNavigationButtons",emits:["next-record","previous-record"],setup(e,{emit:t}){const n=t;function r(){n("previous-record")}function l(){n("next-record")}return(a,c)=>(h(),$("div",ct,[p(x(L),{severity:"secondary",icon:"pi pi-chevron-left",onClick:r,"aria-label":"Filter"}),p(x(L),{severity:"secondary",icon:"pi pi-chevron-right",onClick:l,"aria-label":"Filter"})]))}};function ft(){const e="transparent-overlay",{alertInfo:t}=ae();let n=!0,r=!1;function l(){if(document.getElementById(e))return;r=!0;const i=document.createElement("div");i.id=e,i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%",i.style.backgroundColor="transparent",i.style.zIndex="9999",document.body.appendChild(i),document.addEventListener("keydown",c),document.addEventListener("click",d),document.addEventListener("keydown",d),setTimeout(()=>{n=!1},100)}function a(){const i=document.getElementById(e);i&&document.body.removeChild(i),document.removeEventListener("keydown",c),document.removeEventListener("click",d),document.removeEventListener("keydown",d),n=!0,r=!1}function c(i){i.preventDefault()}function d(i){if(n){n=!1;return}t("Please wait while we process your request...")}return $e(()=>{r&&a()}),{freezeApp:l,unfreezeApp:a}}const gt={class:"flex flex-col items-center justify-center gap-y-2"},bt={key:0,class:"font-medium text-(--p-primary-600) text-xl animate-fade-in-up"},mt={key:0,class:"absolute inset-0 z-10 flex flex-col bg-gray-100/60 backdrop-blur-xs items-center justify-center rounded-xl"},yt={class:"flex flex-col items-center justify-center gap-y-2"},ht={key:0,class:"font-medium text-(--p-primary-600) text-xl animate-fade-in-up"},vt={key:1,class:"relative overflow-hidden"},wt={__name:"BaseEditDialog",props:G({record:{type:Object},header:{type:String},recordType:{type:String,default:""},endpoint:{type:String},requestBodyMapper:{type:Function,default:null},recordMapper:{type:Function,default:null},fullHeight:{type:Boolean,default:!1},position:{type:String,default:"center"},fullScreen:{type:Boolean,default:!1},withNavigation:{type:Boolean,default:!0},withSubmit:{type:Boolean,default:!0},formId:{type:String},width:{type:String},withCloseButton:{type:Boolean,default:!0},requestUrlMapper:{type:Function}},{form:{},formModifiers:{},formSchema:{default:()=>le({})},formSchemaModifiers:{}}),emits:G(["next-record","previous-record","submit","close"],["update:form","update:formSchema"]),setup(e,{expose:t,emit:n}){const r=e,l=n,a=X(e,"form"),c=X(e,"formSchema"),d=Ne(),{getErrors:i,hasErrors:w}=ze(a,c.value),{alertError:u}=ae(),{freezeApp:s,unfreezeApp:b}=ft(),{cloneDeep:_}=Ie(),D=C(!1),k=C({active:!1,message:"",height:"",mode:"",freezeApp:!1}),A=U(()=>!!r.record),j=U(()=>k.value.active),ue=U(()=>r.header?r.header:r.recordType?A.value?`Edit ${r.recordType} #${r.record?.id}`:`Create ${r.recordType}`:"");function ce(){r.record&&l("next-record",r.record)}function pe(){r.record&&l("previous-record",r.record)}function H(){l("close")}function fe(){return r.requestUrlMapper&&typeof r.requestUrlMapper=="function"?r.requestUrlMapper(r.record):A.value?`${r.endpoint}/${r.record.id}`:r.endpoint}async function ge(){if(w()){D.value=!0;return}const y=me(a.value);try{J(),await be(y),l("submit"),H()}catch(v){u("Error submitting formData"),console.log(v)}finally{W()}}async function be(y){return await d.post(fe(),y)}function me(y={}){let v=y,m=!1;r.requestBodyMapper&&typeof r.requestBodyMapper=="function"&&(v=r.requestBodyMapper(y),m=!0);const B=new FormData;return m?(Object.keys(v).forEach(g=>{g==="data"?B.append("data",JSON.stringify(v.data)):B.append(g,v[g])}),B):(Object.keys(y).length>0&&B.append("data",JSON.stringify(y)),B)}async function ye(y,v){if(!y?.value||!v)return;let m=v;r.recordMapper&&typeof r.recordMapper=="function"&&(m=await r.recordMapper(v));const B={};Object.keys(y.value).forEach(g=>{if(g in m)switch(!0){case m[g]===null:B[g]=null;break;case Array.isArray(m[g]):B[g]=_(m[g]);break;case typeof m[g]=="object":B[g]=_(m[g]);break;case typeof m[g]=="string":case typeof m[g]=="number":case typeof m[g]=="boolean":case typeof m[g]>"u":B[g]=m[g];break;default:console.warn(`Unexpected type for key "${g}": ${typeof m[g]}`);break}}),m?.id&&(B.id=m.id),Object.assign(y.value,B)}function J(y={}){const{template:v="blocking",message:m,height:B,customOptions:g={}}=y,he={blocking:{active:!0,message:m??"Processing request",height:"auto",mode:"overlay",freezeApp:!0},embedded:{active:!0,message:m??"Loading content",height:B??"500px",mode:"replace",freezeApp:!1}}[v];k.value={...he,...g}}function W(){k.value.active=!1,k.value.freezeApp=!1}return Ee(()=>k,y=>{y.value.active&&y.value.freezeApp?s({useBlur:!0,text:y.message}):b()},{immediate:!0,deep:!0}),Oe(async()=>{A.value&&await ye(a,r.record)}),t({startDialogLoading:J,stopDialogLoading:W}),(y,v)=>(h(),T(ut,{header:ue.value,width:e.width,"full-screen":e.fullScreen,position:e.position,"full-height":e.fullHeight,onClose:H},{content:f(()=>[j.value&&k.value.mode==="replace"?(h(),$("div",{key:0,style:re({height:k.value.height}),class:"flex flex-col items-center justify-center"},[o("div",gt,[v[1]||(v[1]=o("div",{class:"animate-spin rounded-full border-4 border-gray-300 border-t-(--p-primary-600) size-8"},null,-1)),k.value.message?(h(),$("div",bt,S(k.value.message),1)):E("",!0)])],4)):E("",!0),p(Te,{name:"fade-scale"},{default:f(()=>[j.value&&k.value.mode==="overlay"?(h(),$("div",mt,[o("div",yt,[v[2]||(v[2]=o("div",{class:"animate-spin rounded-full border-4 border-gray-300 border-t-(--p-primary-600) size-8"},null,-1)),k.value.message?(h(),$("div",ht,S(k.value.message),1)):E("",!0)])])):E("",!0)]),_:1}),!j.value||k.value.mode!=="replace"?(h(),$("div",vt,[o("div",null,[O(y.$slots,"content",{getErrors:x(i),handleSubmit:ge,didSubmit:D.value},void 0,!0)])])):E("",!0)]),"footer-start":f(()=>[e.withNavigation&&A.value?(h(),T(pt,{key:0,onPreviousRecord:pe,onNextRecord:ce})):E("",!0)]),"footer-end":f(()=>[e.withCloseButton?(h(),T(x(L),{key:0,label:"Close",class:"mx-2",severity:"secondary",onClick:v[0]||(v[0]=m=>l("close"))})):E("",!0),e.withSubmit?(h(),T(x(L),{key:1,label:A.value?"Save":"Submit",type:"submit",form:e.formId},null,8,["label","form"])):E("",!0),O(y.$slots,"footer-end",{},void 0,!0)]),_:3},8,["header","width","full-screen","position","full-height"]))}},St=De(wt,[["__scopeId","data-v-bdb2bbb8"]]),xt=["onSubmit"],Bt={__name:"BaseEditDialogTest",props:{record:Object},emits:["close","submit","next-record","previous-record"],setup(e,{emit:t}){const n=e,{createFormSchema:r}=Me({props:n}),l=t,a=C({name:"",username:"",phone:"",password:"",roles:[1]});let c=r(le({username:Z().nonempty("Username is required"),password:Z().nonempty("Password is required").min(6,"Password must be at least 6 characters")}));function d(w){return{...w,roles:[1]}}function i(w){return{...w,roles:w.roles.map(u=>u.id)}}return(w,u)=>(h(),T(St,{"form-id":"something-form",record:e.record,"record-type":"Something",endpoint:"api/something","record-mapper":d,"request-body-mapper":i,form:a.value,"onUpdate:form":u[4]||(u[4]=s=>a.value=s),"form-schema":x(c),"onUpdate:formSchema":u[5]||(u[5]=s=>qe(c)?c.value=s:c=s),onSubmit:u[6]||(u[6]=s=>l("submit")),onNextRecord:u[7]||(u[7]=s=>l("next-record",e.record)),onPreviousRecord:u[8]||(u[8]=s=>l("previous-record",e.record)),onClose:u[9]||(u[9]=s=>l("close"))},{content:f(({handleSubmit:s,getErrors:b,didSubmit:_})=>[o("form",{id:"something-form",onSubmit:Pe(s,["prevent"]),class:"flex flex-col gap-y-4"},[p(N,{label:"Username",errors:b("username"),"show-errors":_},{default:f(()=>[p(x(I),{modelValue:a.value.username,"onUpdate:modelValue":u[0]||(u[0]=D=>a.value.username=D)},null,8,["modelValue"])]),_:1},8,["errors","show-errors"]),p(N,{label:"Name"},{default:f(()=>[p(x(I),{modelValue:a.value.name,"onUpdate:modelValue":u[1]||(u[1]=D=>a.value.name=D)},null,8,["modelValue"])]),_:1}),p(N,{label:"Phone"},{default:f(()=>[p(x(I),{modelValue:a.value.phone,"onUpdate:modelValue":u[2]||(u[2]=D=>a.value.phone=D)},null,8,["modelValue"])]),_:1}),p(N,{label:"Password",errors:b("password"),"show-errors":_},{default:f(()=>[p(x(I),{modelValue:a.value.password,"onUpdate:modelValue":u[3]||(u[3]=D=>a.value.password=D),type:"password"},null,8,["modelValue"])]),_:1},8,["errors","show-errors"])],40,xt)]),_:1},8,["record","form","form-schema"]))}},kt={class:"w-full text-sm border-collapse"},$t={class:"py-2 pr-4"},Dt={class:"py-2 pr-4"},Et={class:"py-2 pr-4"},Ot={class:"py-2 pr-4"},Tt={class:"py-2"},Pt={class:"w-full text-sm border-collapse"},qt={class:"py-2 pr-4"},Lt={class:"py-2 pr-4"},_t={class:"py-2"},At={class:"w-full text-sm border-collapse"},Ct={class:"py-2 pr-4"},Vt={class:"py-2"},zt={class:"flex flex-col gap-2"},It={class:"flex items-center"},Nt='import BaseEditDialog from "kockatoos-admin-ui/components/BaseEditDialog.vue";',Mt='import BaseEditDialogNavigationButtons from "kockatoos-admin-ui/components/BaseEditDialogNavigationButtons.vue";',to={__name:"BaseEditDialogView",setup(e){const{openDialog:t,closeDialog:n}=Ce(),r=[{name:"Add",value:"Add"},{name:"Edit",value:"Edit"}],l=C("Add"),a=C({id:1,name:"John Doe",username:"johndoe",phone:"123-456-7890",password:"password123"});function c(){const u=t(Bt,{props:{record:l.value==="Edit"?a.value:null},handlers:{close:()=>{console.log("Dialog closed"),n(u)},submit:s=>{console.log("Submitted data:",s),n(u)},"next-record":s=>{console.log("Next record:",s)},"previous-record":s=>{console.log("Previous record:",s)}}})}const d=[{name:"record",type:"Object",required:!1,default:null,description:"Pass null for Add mode, pass the record object for Edit mode."},{name:"header",type:"String",required:!1,default:null,description:"Dialog title. Defaults to the recordType if not set."},{name:"recordType",type:"String",required:!1,default:"''",description:'Used to auto-generate the header ("Add {recordType}" / "Edit {recordType}").'},{name:"endpoint",type:"String",required:!1,default:null,description:"REST endpoint for submit. POST to endpoint (add) or POST to endpoint/:id (edit)."},{name:"requestBodyMapper",type:"Function",required:!1,default:"null",description:"Transform the form data before sending to the API."},{name:"recordMapper",type:"Function",required:!1,default:"null",description:"Transform the record before populating the form on Edit."},{name:"fullHeight",type:"Boolean",required:!1,default:"false",description:"Stretch the dialog to viewport height."},{name:"position",type:"String",required:!1,default:"'center'",description:"Dialog position (same as BaseDialog)."},{name:"fullScreen",type:"Boolean",required:!1,default:"false",description:"Maximise the dialog."},{name:"withNavigation",type:"Boolean",required:!1,default:"true",description:"Show Previous / Next navigation buttons in the footer when editing."},{name:"withSubmit",type:"Boolean",required:!1,default:"true",description:"Show the Submit / Save button."},{name:"formId",type:"String",required:!1,default:null,description:"HTML id to match the form inside the content slot."},{name:"width",type:"String",required:!1,default:null,description:"Max-width of the dialog (CSS value)."},{name:"withCloseButton",type:"Boolean",required:!1,default:"true",description:"Show the Close button in the footer."},{name:"requestUrlMapper",type:"Function",required:!1,default:null,description:"Override the request URL per-call."}],i=[{name:"next-record",payload:"—",when:"Next navigation button clicked."},{name:"previous-record",payload:"—",when:"Previous navigation button clicked."},{name:"submit",payload:"formData",when:"Form submitted and API call succeeds."},{name:"close",payload:"—",when:"Dialog close is requested (X button or Close button)."}],w=[{name:"content",purpose:"Dialog body. Receives { getErrors(path): string[], handleSubmit, didSubmit: boolean } slot props."},{name:"footer-end",purpose:"Extra content appended to the right side of the footer toolbar."}];return(u,s)=>(h(),T(Le,null,{default:f(()=>[p(_e,null,{default:f(()=>[p(P,{title:"Import"},{default:f(()=>[p(Q,{title:"Import",language:"JavaScript",source:Nt})]),_:1}),p(P,{title:"Props"},{default:f(()=>[o("table",kt,[s[1]||(s[1]=o("thead",{class:"text-left text-stone-500"},[o("tr",null,[o("th",{class:"py-2 pr-4"},"Name"),o("th",{class:"py-2 pr-4"},"Type"),o("th",{class:"py-2 pr-4"},"Required"),o("th",{class:"py-2 pr-4"},"Default"),o("th",{class:"py-2"},"Description")])],-1)),o("tbody",null,[(h(),$(M,null,R(d,b=>o("tr",{key:b.name,class:"border-t border-gray-100"},[o("td",$t,[o("code",null,S(b.name),1)]),o("td",Dt,[o("code",null,S(b.type),1)]),o("td",Et,S(b.required?"Yes":"No"),1),o("td",Ot,[o("code",null,S(b.default??"—"),1)]),o("td",Tt,S(b.description),1)])),64))])])]),_:1}),p(P,{title:"Emits"},{default:f(()=>[o("table",Pt,[s[2]||(s[2]=o("thead",{class:"text-left text-stone-500"},[o("tr",null,[o("th",{class:"py-2 pr-4"},"Name"),o("th",{class:"py-2 pr-4"},"Payload"),o("th",{class:"py-2"},"When")])],-1)),o("tbody",null,[(h(),$(M,null,R(i,b=>o("tr",{key:b.name,class:"border-t border-gray-100"},[o("td",qt,[o("code",null,S(b.name),1)]),o("td",Lt,[o("code",null,S(b.payload),1)]),o("td",_t,S(b.when),1)])),64))])])]),_:1}),p(P,{title:"Slots"},{default:f(()=>[o("table",At,[s[3]||(s[3]=o("thead",{class:"text-left text-stone-500"},[o("tr",null,[o("th",{class:"py-2 pr-4"},"Name"),o("th",{class:"py-2"},"Purpose")])],-1)),o("tbody",null,[(h(),$(M,null,R(w,b=>o("tr",{key:b.name,class:"border-t border-gray-100"},[o("td",Ct,[o("code",null,S(b.name),1)]),o("td",Vt,S(b.purpose),1)])),64))])])]),_:1}),p(P,{title:"Example"},{default:f(()=>[p(Ae,null,{default:f(()=>[o("div",zt,[o("div",It,[p(x(de),{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=b=>l.value=b),options:r,"option-value":"value",optionLabel:"name"},null,8,["modelValue"])]),p(x(L),{onClick:c,label:"Open Dialog"})])]),_:1})]),_:1}),p(P,{title:"Sub-components"},{default:f(()=>[p(P,{title:"BaseEditDialogNavigationButtons"},{default:f(()=>[p(Q,{title:"Import",language:"JavaScript",source:Mt}),s[4]||(s[4]=o("p",{class:"text-sm text-gray-600 my-2"}," A pair of Previous / Next chevron buttons rendered in the footer of BaseEditDialog when withNavigation is true and a record is being edited. Used for navigating between consecutive records without closing the dialog. ",-1)),s[5]||(s[5]=o("p",{class:"text-sm text-gray-500 mt-3 font-medium"},"Emits",-1)),s[6]||(s[6]=o("table",{class:"w-full text-sm border-collapse mt-1"},[o("thead",{class:"text-left text-stone-500"},[o("tr",null,[o("th",{class:"py-2 pr-4"},"Name"),o("th",{class:"py-2 pr-4"},"Payload"),o("th",{class:"py-2"},"When")])]),o("tbody",null,[o("tr",{class:"border-t border-gray-100"},[o("td",{class:"py-2 pr-4"},[o("code",null,"previous-record")]),o("td",{class:"py-2 pr-4"},[o("code",null,"—")]),o("td",{class:"py-2"},"Left chevron clicked.")]),o("tr",{class:"border-t border-gray-100"},[o("td",{class:"py-2 pr-4"},[o("code",null,"next-record")]),o("td",{class:"py-2 pr-4"},[o("code",null,"—")]),o("td",{class:"py-2"},"Right chevron clicked.")])])],-1))]),_:1})]),_:1})]),_:1})]),_:1}))}};export{to as default};
