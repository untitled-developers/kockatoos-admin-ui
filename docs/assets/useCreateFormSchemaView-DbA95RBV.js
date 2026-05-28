import{z as f,b7 as s,aq as _,X as e,y as o,aY as g,aB as h,U as S,aT as m,au as v,x as w}from"./index-C0lFpf27.js";import{B as x,_ as y,a as l}from"./BaseDocCodePreview-k67Q-zS7.js";import{_ as r}from"./BaseDocSection-FYGZ-E-b.js";import{B as b}from"./BaseDocFunctionalityPreview-CtllK9fp.js";import{u as k}from"./useCreateFormSchema-BkiyRN7j.js";import{o as C,s as i}from"./types-By9teAtI.js";const F={class:"flex flex-col gap-4"},B={class:"flex gap-2"},j={class:"text-sm text-gray-600"},E={class:"text-xs bg-gray-50 p-3 rounded text-gray-700"},$='import useCreateFormSchema from "kockatoos-admin-ui/composables/useCreateFormSchema.js";',z=`const { createFormSchema } = useCreateFormSchema({ props });
// props.record: null → Add mode (password field kept)
// props.record: object → Edit mode (password field auto-omitted)

const schema = createFormSchema(
  zod.object({
    name: zod.string().min(1),
    email: zod.string().email(),
    password: zod.string().min(8),
  })
);
// In Edit mode, schema.shape has no 'password' key.`,P={__name:"useCreateFormSchemaView",setup(I){const t=v(!1),p=C({name:i().min(1),email:i().email(),password:i().min(8)}),u=w(()=>{const c={record:t.value?{}:null},{createFormSchema:a}=k({props:c}),d=a(p),n=Object.keys(d.shape??{});return`Schema keys: [${n.join(", ")}]
password included: ${n.includes("password")}`});return(c,a)=>(_(),f(x,null,{default:s(()=>[e(y,null,{default:s(()=>[e(r,{title:"Import"},{default:s(()=>[e(l,{title:"Import",language:"JavaScript",source:$})]),_:1}),e(r,{title:"Signature"},{default:s(()=>[e(l,{title:"Signature",language:"JavaScript",source:z})]),_:1}),e(r,{title:"Example"},{default:s(()=>[e(b,null,{default:s(()=>[o("div",F,[o("div",B,[e(g(h),{label:t.value?"Switch to Add mode":"Switch to Edit mode",severity:"secondary",onClick:a[0]||(a[0]=d=>t.value=!t.value)},null,8,["label"])]),o("p",j,[a[1]||(a[1]=S(" Mode: ",-1)),o("strong",null,m(t.value?"Edit (record provided → password omitted)":"Add (no record → password included)"),1)]),o("pre",E,m(u.value),1)])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{P as default};
