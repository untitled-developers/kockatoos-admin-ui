import{B as i,_ as n,a as t}from"./BaseDocCodePreview-k67Q-zS7.js";import{_ as o}from"./BaseDocSection-FYGZ-E-b.js";import{B as d}from"./BaseDocFunctionalityPreview-CtllK9fp.js";import{z as c,b7 as a,aq as u,X as e,y as r,U as l}from"./index-C0lFpf27.js";const f={class:"flex flex-col gap-3"},p='import useCrudTable from "kockatoos-admin-ui/composables/useCrudTable.js";',g=`const crudTableRef = ref(null); // assign to a BaseCrudTable via ref="crudTableRef"
const {
  fetchTableData,      // fetchTableData(withLoading = true) → re-fetches from the endpoint
  startRowLoading,     // startRowLoading(record)            → shows a spinner on that row
  stopRowLoading,      // stopRowLoading(record)             → hides the row spinner
  updateRecordData,    // updateRecordData(record, newData)  → patches the row in place
  startTableLoading,   // startTableLoading()                → shows the full table loader
  stopTableLoading,    // stopTableLoading()                 → hides the full table loader
  refreshEditDialog,   // refreshEditDialog()                → re-mounts the open edit dialog
} = useCrudTable(crudTableRef);`,m=`// Inside a dialog submit handler:
async function handleSubmit(data) {
  startRowLoading(currentRecord);
  try {
    await api.update(currentRecord.id, data);
    await fetchTableData(false); // silent refresh — no loading state
  } finally {
    stopRowLoading(currentRecord);
  }
}`,C={__name:"useCrudTableView",setup(h){return(b,s)=>(u(),c(i,null,{default:a(()=>[e(n,null,{default:a(()=>[e(o,{title:"Import"},{default:a(()=>[e(t,{title:"Import",language:"JavaScript",source:p})]),_:1}),e(o,{title:"Signature"},{default:a(()=>[e(t,{title:"Signature",language:"JavaScript",source:g})]),_:1}),e(o,{title:"Example"},{default:a(()=>[e(d,null,{default:a(()=>[r("div",f,[s[0]||(s[0]=r("p",{class:"text-sm text-gray-600"},[l(" Pass a template ref pointing to a "),r("code",null,"BaseCrudTable"),l(" component. Call these methods from dialog handlers to control the table from outside. ")],-1)),e(t,{title:"Typical usage",language:"JavaScript",source:m})])]),_:1})]),_:1})]),_:1})]),_:1}))}};export{C as default};
