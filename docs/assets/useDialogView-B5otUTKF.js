import{z as _,b7 as a,aq as l,X as e,y as h,aY as y,aB as g,E as r,g as v,av as x,aT as C,A as k,au as B,Z as I,a8 as i}from"./index-C0lFpf27.js";import{B as $,_ as w,a as p}from"./BaseDocCodePreview-k67Q-zS7.js";import{_ as c}from"./BaseDocSection-FYGZ-E-b.js";import{B as S}from"./BaseDocFunctionalityPreview-CtllK9fp.js";import{u as b}from"./useDialog-BfvygUAx.js";const V={class:"flex gap-2"},P={key:0,class:"mt-3 text-sm text-gray-500 space-y-1"},E='import useDialog from "kockatoos-admin-ui/composables/useDialog.js";',L=`const { openDialog, closeDialog, updateDialogProps, refreshDialog } = useDialog();

// Open any Vue component as a dialog:
const dialogId = openDialog(MyComponent, {
  props: { header: 'My Dialog', someData: record },
  handlers: {
    close: () => closeDialog(dialogId),
    submit: (data) => { /* handle data */ closeDialog(dialogId); },
  },
});

closeDialog(dialogId);            // unmount the dialog
updateDialogProps(dialogId, fn);  // fn receives current props, returns new ones
refreshDialog(dialogId);          // re-mount (resets internal state)`,O={__name:"useDialogView",setup(N){const{openDialog:m,closeDialog:f}=b(),o=B([]);function u(t){o.value.unshift(`[${new Date().toLocaleTimeString()}] ${t}`),o.value.length>8&&o.value.pop()}function D(){const t=I({emits:["close"],setup(d,{emit:n}){return()=>i("div",{class:"p-6 flex flex-col gap-4"},[i("p",{class:"text-gray-600"},"Hello from useDialog! This component was opened dynamically."),i("div",{class:"flex justify-end"},[i(g,{label:"Close",severity:"secondary",onClick:()=>n("close")})])])}}),s=m(t,{props:{header:"Demo Dialog"},handlers:{close:()=>{u(`close received → closeDialog('${s}')`),f(s)}}});u(`openDialog() → id: ${s}`)}return(t,s)=>(l(),_($,null,{default:a(()=>[e(w,null,{default:a(()=>[e(c,{title:"Import"},{default:a(()=>[e(p,{title:"Import",language:"JavaScript",source:E})]),_:1}),e(c,{title:"Signature"},{default:a(()=>[e(p,{title:"Signature",language:"JavaScript",source:L})]),_:1}),e(c,{title:"Example"},{default:a(()=>[e(S,null,{default:a(()=>[h("div",V,[e(y(g),{label:"Open Dialog",onClick:D})]),o.value.length?(l(),r("ul",P,[(l(!0),r(v,null,x(o.value,(d,n)=>(l(),r("li",{key:n},C(d),1))),128))])):k("",!0)]),_:1})]),_:1})]),_:1})]),_:1}))}};export{O as default};
