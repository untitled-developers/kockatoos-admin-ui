import{B as v,_,a as V}from"./BaseDocCodePreview-C_4-N-U0.js";import{_ as p}from"./BaseDocSection-D_7jT_qW.js";import{B as S}from"./BaseDocFunctionalityPreview-CaqV9kjP.js";import{s as h,a as x}from"./index-B0qgI5pY.js";import{a as B,aE as P,a2 as C,aq as b,E as O,y as s,ah as u,aw as T,b0 as F,an as z,z as y,b7 as d,X as l,aY as r,aj as N,aT as f,aD as m,A as U,U as w,au as $}from"./index-BHIwW7Jo.js";import"./index-DQDMEDvo.js";import"./index-ChATmyRT.js";var E=`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,j={root:{position:"relative"}},D={root:function(t){var o=t.instance,a=t.props;return["p-toggleswitch p-component",{"p-toggleswitch-checked":o.checked,"p-disabled":a.disabled,"p-invalid":o.$invalid}]},input:"p-toggleswitch-input",slider:"p-toggleswitch-slider",handle:"p-toggleswitch-handle"},I=B.extend({name:"toggleswitch",style:E,classes:D,inlineStyles:j}),L={name:"BaseToggleSwitch",extends:P,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:I,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},k={name:"ToggleSwitch",extends:L,inheritAttrs:!1,emits:["change","focus","blur"],methods:{getPTOptions:function(t){var o=t==="root"?this.ptmi:this.ptm;return o(t,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(t){if(!this.disabled&&!this.readonly){var o=this.checked?this.falseValue:this.trueValue;this.writeValue(o,t),this.$emit("change",t)}},onFocus:function(t){this.$emit("focus",t)},onBlur:function(t){var o,a;this.$emit("blur",t),(o=(a=this.formField).onBlur)===null||o===void 0||o.call(a,t)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return C({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},M=["data-p-checked","data-p-disabled","data-p"],W=["id","checked","tabindex","disabled","readonly","aria-checked","aria-labelledby","aria-label","aria-invalid"],A=["data-p"],H=["data-p"];function J(n,t,o,a,c,e){return b(),O("div",u({class:n.cx("root"),style:n.sx("root")},e.getPTOptions("root"),{"data-p-checked":e.checked,"data-p-disabled":n.disabled,"data-p":e.dataP}),[s("input",u({id:n.inputId,type:"checkbox",role:"switch",class:[n.cx("input"),n.inputClass],style:n.inputStyle,checked:e.checked,tabindex:n.tabindex,disabled:n.disabled,readonly:n.readonly,"aria-checked":e.checked,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,"aria-invalid":n.invalid||void 0,onFocus:t[0]||(t[0]=function(){return e.onFocus&&e.onFocus.apply(e,arguments)}),onBlur:t[1]||(t[1]=function(){return e.onBlur&&e.onBlur.apply(e,arguments)}),onChange:t[2]||(t[2]=function(){return e.onChange&&e.onChange.apply(e,arguments)})},e.getPTOptions("input")),null,16,W),s("div",u({class:n.cx("slider")},e.getPTOptions("slider"),{"data-p":e.dataP}),[s("div",u({class:n.cx("handle")},e.getPTOptions("handle"),{"data-p":e.dataP}),[T(n.$slots,"handle",{checked:e.checked})],16,H)],16,A)],16,M)}k.render=J;const q={class:"flex items-center gap-x-2 w-[100px]"},X={__name:"BaseWorkingHoursSchedule",props:{modelValue:{default:[]},modelModifiers:{}},emits:["update:modelValue"],setup(n){const t=F(n,"modelValue");function o(a){return t.value.find(c=>c.day_name===a)?.is_open}return z(()=>{t.value?.length===0&&(t.value=[{day_name:"Monday",opening:"00:00",closing:"23:59",is_open:!1},{day_name:"Tuesday",opening:"00:00",closing:"23:59",is_open:!1},{day_name:"Wednesday",opening:"00:00",closing:"23:59",is_open:!1},{day_name:"Thursday",opening:"00:00",closing:"23:59",is_open:!1},{day_name:"Friday",opening:"00:00",closing:"23:59",is_open:!1},{day_name:"Saturday",opening:"00:00",closing:"23:59",is_open:!1},{day_name:"Sunday",opening:"00:00",closing:"23:59",is_open:!1}])}),(a,c)=>t.value?(b(),y(r(x),{key:0,value:t.value,size:"large","striped-rows":""},{default:d(()=>[l(r(h),{field:"is_open",header:"Status"},{body:d(({field:e,data:i})=>[s("div",q,[l(r(k),{modelValue:i[e],"onUpdate:modelValue":g=>i[e]=g},null,8,["modelValue","onUpdate:modelValue"]),s("div",{class:N(["text-xs font-medium",{"text-green-600":i[e],"text-gray-600":!i[e]}])},f(i[e]?"OPEN":"CLOSED"),3)])]),_:1}),l(r(h),{field:"day_name",header:"Day"}),l(r(h),{field:"opening",header:"Opening"},{body:d(({field:e,data:i})=>[l(r(m),{type:"time",modelValue:i[e],"onUpdate:modelValue":g=>i[e]=g,disabled:!o(i.day_name)},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1}),l(r(h),{field:"closing",header:"Closing"},{body:d(({field:e,data:i})=>[l(r(m),{type:"time",modelValue:i[e],"onUpdate:modelValue":g=>i[e]=g,disabled:!o(i.day_name)},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1})]),_:1},8,["value"])):U("",!0)}},Y={class:"mt-4"},G={class:"text-xs text-gray-500 bg-gray-50 p-2 rounded mt-1 overflow-auto"},K=`import BaseWorkingHoursSchedule from "kockatoos-admin-ui/components/BaseWorkingHoursSchedule.vue";

// v-model shape:
// Array<{ day_name: string, opening: string, closing: string, is_open: boolean }>
// Pass an empty array and the component auto-fills all 7 days on mount.`,ae={__name:"BaseWorkingHoursScheduleView",setup(n){const t=$([]);return(o,a)=>(b(),y(v,null,{default:d(()=>[l(_,null,{default:d(()=>[l(p,{title:"Import"},{default:d(()=>[l(V,{title:"Import",language:"JavaScript",source:K})]),_:1}),l(p,{title:"Model"},{default:d(()=>[...a[1]||(a[1]=[s("p",{class:"text-sm text-gray-600"},[w(" Binds via "),s("code",null,"v-model"),w(" to an array of day objects: "),s("code",null,"Array<{ day_name: string, opening: string, closing: string, is_open: boolean }>"),w(". Pass an empty array and the component auto-initialises all 7 days on mount. ")],-1)])]),_:1}),l(p,{title:"Example"},{default:d(()=>[l(S,null,{default:d(()=>[l(X,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c)},null,8,["modelValue"]),s("details",Y,[a[2]||(a[2]=s("summary",{class:"text-sm text-gray-500 cursor-pointer"},"Show v-model JSON",-1)),s("pre",G,f(JSON.stringify(t.value,null,2)),1)])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{ae as default};
