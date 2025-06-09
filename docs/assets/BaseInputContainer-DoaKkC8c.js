import{a as $,z as c,B as h,p as x,m as f,c as o,o as l,d as p,h as d,k as g,e as b,V as s,X as y,aJ as F,F as m,j as _}from"./index-G2v3Dc-N.js";var V={name:"BaseEditableHolder",extends:$,emits:["update:modelValue","value-change"],props:{modelValue:{type:null,default:void 0},defaultValue:{type:null,default:void 0},name:{type:String,default:void 0},invalid:{type:Boolean,default:void 0},disabled:{type:Boolean,default:!1},formControl:{type:Object,default:void 0}},inject:{$parentInstance:{default:void 0},$pcForm:{default:void 0},$pcFormField:{default:void 0}},data:function(){return{d_value:this.defaultValue||this.modelValue}},watch:{modelValue:function(e){this.d_value=e},defaultValue:function(e){this.d_value=e},$formName:{immediate:!0,handler:function(e){var i,n;this.formField=((i=this.$pcForm)===null||i===void 0||(n=i.register)===null||n===void 0?void 0:n.call(i,e,this.$formControl))||{}}},$formControl:{immediate:!0,handler:function(e){var i,n;this.formField=((i=this.$pcForm)===null||i===void 0||(n=i.register)===null||n===void 0?void 0:n.call(i,this.$formName,e))||{}}},$formDefaultValue:{immediate:!0,handler:function(e){this.d_value!==e&&(this.d_value=e)}},$formValue:{immediate:!1,handler:function(e){var i;(i=this.$pcForm)!==null&&i!==void 0&&i.getFieldState(this.$formName)&&e!==this.d_value&&(this.d_value=e)}}},formField:{},methods:{writeValue:function(e,i){var n,a;this.controlled&&(this.d_value=e,this.$emit("update:modelValue",e)),this.$emit("value-change",e),(n=(a=this.formField).onChange)===null||n===void 0||n.call(a,{originalEvent:i,value:e})},findNonEmpty:function(){for(var e=arguments.length,i=new Array(e),n=0;n<e;n++)i[n]=arguments[n];return i.find(c)}},computed:{$filled:function(){return c(this.d_value)},$invalid:function(){var e,i;return!this.$formNovalidate&&this.findNonEmpty(this.invalid,(e=this.$pcFormField)===null||e===void 0||(e=e.$field)===null||e===void 0?void 0:e.invalid,(i=this.$pcForm)===null||i===void 0||(i=i.getFieldState(this.$formName))===null||i===void 0?void 0:i.invalid)},$formName:function(){var e;return this.$formNovalidate?void 0:this.name||((e=this.$formControl)===null||e===void 0?void 0:e.name)},$formControl:function(){var e;return this.formControl||((e=this.$pcFormField)===null||e===void 0?void 0:e.formControl)},$formNovalidate:function(){var e;return(e=this.$formControl)===null||e===void 0?void 0:e.novalidate},$formDefaultValue:function(){var e,i;return this.findNonEmpty(this.d_value,(e=this.$pcFormField)===null||e===void 0?void 0:e.initialValue,(i=this.$pcForm)===null||i===void 0||(i=i.initialValues)===null||i===void 0?void 0:i[this.$formName])},$formValue:function(){var e,i;return this.findNonEmpty((e=this.$pcFormField)===null||e===void 0||(e=e.$field)===null||e===void 0?void 0:e.value,(i=this.$pcForm)===null||i===void 0||(i=i.getFieldState(this.$formName))===null||i===void 0?void 0:i.value)},controlled:function(){return this.$inProps.hasOwnProperty("modelValue")||!this.$inProps.hasOwnProperty("modelValue")&&!this.$inProps.hasOwnProperty("defaultValue")},filled:function(){return this.$filled}}},N={name:"BaseInput",extends:V,props:{size:{type:String,default:null},fluid:{type:Boolean,default:null},variant:{type:String,default:null}},inject:{$parentInstance:{default:void 0},$pcFluid:{default:void 0}},computed:{$variant:function(){var e;return(e=this.variant)!==null&&e!==void 0?e:this.$primevue.config.inputStyle||this.$primevue.config.inputVariant},$fluid:function(){var e;return(e=this.fluid)!==null&&e!==void 0?e:!!this.$pcFluid},hasFluid:function(){return this.$fluid}}},S=({dt:t})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${t("inputtext.color")};
    background: ${t("inputtext.background")};
    padding-block: ${t("inputtext.padding.y")};
    padding-inline: ${t("inputtext.padding.x")};
    border: 1px solid ${t("inputtext.border.color")};
    transition: background ${t("inputtext.transition.duration")}, color ${t("inputtext.transition.duration")}, border-color ${t("inputtext.transition.duration")}, outline-color ${t("inputtext.transition.duration")}, box-shadow ${t("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${t("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${t("inputtext.shadow")};
}

.p-inputtext:enabled:hover {
    border-color: ${t("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${t("inputtext.focus.border.color")};
    box-shadow: ${t("inputtext.focus.ring.shadow")};
    outline: ${t("inputtext.focus.ring.width")} ${t("inputtext.focus.ring.style")} ${t("inputtext.focus.ring.color")};
    outline-offset: ${t("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${t("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${t("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:hover {
    background: ${t("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${t("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${t("inputtext.disabled.background")};
    color: ${t("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${t("inputtext.placeholder.color")};
}

.p-inputtext.p-invalid::placeholder {
    color: ${t("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${t("inputtext.sm.font.size")};
    padding-block: ${t("inputtext.sm.padding.y")};
    padding-inline: ${t("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${t("inputtext.lg.font.size")};
    padding-block: ${t("inputtext.lg.padding.y")};
    padding-inline: ${t("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,w={root:function(e){var i=e.instance,n=e.props;return["p-inputtext p-component",{"p-filled":i.$filled,"p-inputtext-sm p-inputfield-sm":n.size==="small","p-inputtext-lg p-inputfield-lg":n.size==="large","p-invalid":i.$invalid,"p-variant-filled":i.$variant==="filled","p-inputtext-fluid":i.$fluid}]}},k=h.extend({name:"inputtext",style:S,classes:w}),C={name:"BaseInputText",extends:N,style:k,provide:function(){return{$pcInputText:this,$parentInstance:this}}};function u(t){"@babel/helpers - typeof";return u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(t)}function P(t,e,i){return(e=B(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function B(t){var e=I(t,"string");return u(e)=="symbol"?e:e+""}function I(t,e){if(u(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var n=i.call(t,e);if(u(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var E={name:"InputText",extends:C,inheritAttrs:!1,methods:{onInput:function(e){this.writeValue(e.target.value,e)}},computed:{attrs:function(){return f(this.ptmi("root",{context:{filled:this.$filled,disabled:this.disabled}}),this.formField)},dataP:function(){return x(P({invalid:this.$invalid,fluid:this.$fluid,filled:this.$variant==="filled"},this.size,this.size))}}},z=["value","name","disabled","aria-invalid","data-p"];function j(t,e,i,n,a,r){return l(),o("input",f({type:"text",class:t.cx("root"),value:t.d_value,name:t.name,disabled:t.disabled,"aria-invalid":t.$invalid||void 0,"data-p":r.dataP,onInput:e[0]||(e[0]=function(){return r.onInput&&r.onInput.apply(r,arguments)})},r.attrs),null,16,z)}E.render=j;var T={root:"p-fluid"},O=h.extend({name:"fluid",classes:T}),A={name:"BaseFluid",extends:$,style:O,provide:function(){return{$pcFluid:this,$parentInstance:this}}},v={name:"Fluid",extends:A,inheritAttrs:!1};function D(t,e,i,n,a,r){return l(),o("div",f({class:t.cx("root")},t.ptmi("root")),[p(t.$slots,"default")],16)}v.render=D;const H={class:"flex flex-col gap-2 w-full"},J={class:"flex items-center"},K={class:"font-medium"},L={class:"my-0 text-gray-600 text-sm"},X={key:0,class:"text-red-600"},q={key:1},M={__name:"BaseInputContainer",props:{label:String,helpText:String,showErrors:{type:Boolean,default:!1},errors:{type:Array,default:()=>[]},singleError:{type:Boolean,default:!0}},setup(t){const e=t;return(i,n)=>(l(),o("div",H,[d("div",J,[d("label",K,s(e.label),1),d("div",null,[p(i.$slots,"label-right")])]),g(F(v),null,{default:y(()=>[d("div",null,[p(i.$slots,"default")]),d("p",L,s(t.helpText),1)]),_:3}),t.errors.length>0&&t.showErrors?(l(),o(m,{key:0},[t.singleError?(l(),o("p",X,s(t.errors[0]),1)):(l(),o("ul",q,[(l(!0),o(m,null,_(t.errors,(a,r)=>(l(),o("li",{key:r,class:"text-red-600"},s(a),1))),128))]))],64)):b("",!0)]))}};export{M as _,E as a,v as b,N as s};
