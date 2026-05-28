import{z as D,b7 as o,aq as s,X as e,y as a,U as l,aY as p,aB as m,E as g,g as v,av as _,aT as y,A as L,au as E}from"./index-BHIwW7Jo.js";import{B as x,_ as B,a as r}from"./BaseDocCodePreview-C_4-N-U0.js";import{_ as d}from"./BaseDocSection-D_7jT_qW.js";import{B as h}from"./BaseDocFunctionalityPreview-CaqV9kjP.js";const S={class:"flex flex-col gap-3"},k={class:"flex gap-2"},C={key:0,class:"text-sm text-gray-500 space-y-1"},b='import useEditDialog from "kockatoos-admin-ui/composables/useEditDialog.js";',w=`const dialogRef = ref(null); // template ref on <BaseEditDialog ref="dialogRef">
const { startDialogLoading, stopDialogLoading } = useEditDialog(dialogRef);

// Show an overlay while submitting:
startDialogLoading({ mode: 'overlay', message: 'Saving…' });
// or replace the content entirely:
startDialogLoading({ mode: 'replace', height: '300px', message: 'Loading data…' });

stopDialogLoading(); // hide the overlay / restore content`,$=`// Inside a BaseEditDialog #content slot component:
<script setup>
import useEditDialog from "kockatoos-admin-ui/composables/useEditDialog.js";
const dialogRef = inject('dialogRef'); // provided by BaseEditDialog
const { startDialogLoading, stopDialogLoading } = useEditDialog(dialogRef);

async function handleSubmit() {
  startDialogLoading({ mode: 'overlay', message: 'Saving…' });
  await doApiCall();
  stopDialogLoading();
}
<\/script>`,J={__name:"useEditDialogView",setup(R){const i=E([]);function c(u){i.value.unshift(`[${new Date().toLocaleTimeString()}] ${u}`),i.value.length>6&&i.value.pop()}return(u,t)=>(s(),D(x,null,{default:o(()=>[e(B,null,{default:o(()=>[e(d,{title:"Import"},{default:o(()=>[e(r,{title:"Import",language:"JavaScript",source:b})]),_:1}),e(d,{title:"Signature"},{default:o(()=>[e(r,{title:"Signature",language:"JavaScript",source:w})]),_:1}),e(d,{title:"Example"},{default:o(()=>[e(h,null,{default:o(()=>[a("div",S,[t[2]||(t[2]=a("p",{class:"text-sm text-gray-600"},[a("code",null,"useEditDialog"),l(" is used "),a("strong",null,"inside"),l(" a BaseEditDialog content component (the "),a("code",null,"#content"),l(" slot). It receives a "),a("code",null,"ref"),l(" to the parent dialog and exposes loading controls. ")],-1)),e(r,{title:"Usage inside dialog content",language:"JavaScript",source:$}),a("div",k,[e(p(m),{label:"Log: startDialogLoading called",severity:"secondary",onClick:t[0]||(t[0]=n=>c("startDialogLoading({ mode: 'overlay', message: 'Saving…' })"))}),e(p(m),{label:"Log: stopDialogLoading called",severity:"secondary",onClick:t[1]||(t[1]=n=>c("stopDialogLoading()"))})]),i.value.length?(s(),g("ul",C,[(s(!0),g(v,null,_(i.value,(n,f)=>(s(),g("li",{key:f},y(n),1))),128))])):L("",!0)])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{J as default};
