import{B as p,_ as u,a as l}from"./BaseDocCodePreview-k67Q-zS7.js";import{_ as i}from"./BaseDocSection-FYGZ-E-b.js";import{z as h,b7 as r,aq as c,X as t,y as e,E as m,g as y,av as _,aT as o,U as a}from"./index-C0lFpf27.js";const f={class:"w-full text-sm border-collapse"},g={class:"py-2 pr-4"},b={class:"py-2 pr-4"},x={class:"py-2 pr-4"},C={class:"py-2 pr-4"},S={class:"py-2"},B=`import BaseChart from "kockatoos-admin-ui/components/BaseChart.vue";
// Requires: npm i echarts`,k='<BaseChart :options="chartOptions" width="100%" height="400px" />',v=`const chartOptions = {
  title: { text: 'Monthly Sales' },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yAxis: { type: 'value' },
  series: [
    {
      name: 'Sales',
      type: 'bar',
      data: [120, 200, 150, 80, 70, 110],
    },
  ],
};`,j={__name:"BaseChartView",setup(q){const d=[{name:"options",type:"Object",required:!0,default:null,description:"Any valid ECharts option object. Reactive — the chart re-renders when this prop changes."},{name:"width",type:"String",required:!1,default:"'100%'",description:"CSS width of the chart container."},{name:"height",type:"String",required:!1,default:"'400px'",description:"CSS height of the chart container."},{name:"theme",type:"String",required:!1,default:"''",description:'ECharts theme name. Pass a registered theme string (e.g. "dark").'}];return(w,n)=>(c(),h(p,null,{default:r(()=>[t(u,null,{default:r(()=>[t(i,{title:"Import"},{default:r(()=>[t(l,{title:"Import",language:"JavaScript",source:B})]),_:1}),t(i,{title:"Props"},{default:r(()=>[e("table",f,[n[0]||(n[0]=e("thead",{class:"text-left text-stone-500"},[e("tr",null,[e("th",{class:"py-2 pr-4"},"Name"),e("th",{class:"py-2 pr-4"},"Type"),e("th",{class:"py-2 pr-4"},"Required"),e("th",{class:"py-2 pr-4"},"Default"),e("th",{class:"py-2"},"Description")])],-1)),e("tbody",null,[(c(),m(y,null,_(d,s=>e("tr",{key:s.name,class:"border-t border-gray-100"},[e("td",g,[e("code",null,o(s.name),1)]),e("td",b,[e("code",null,o(s.type),1)]),e("td",x,o(s.required?"Yes":"No"),1),e("td",C,[e("code",null,o(s.default??"—"),1)]),e("td",S,o(s.description),1)])),64))])])]),_:1}),t(i,{title:"Example"},{default:r(()=>[n[1]||(n[1]=e("p",{class:"text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded p-3 mb-4"},[e("strong",null,"Note:"),a(),e("code",null,"BaseChart"),a(" renders via "),e("a",{href:"https://echarts.apache.org/",target:"_blank",class:"underline"},"echarts"),a(". "),e("code",null,"echarts"),a(" is "),e("strong",null,"not"),a(" bundled with "),e("code",null,"kockatoos-admin-ui"),a(" — install it in your project ("),e("code",null,"npm i echarts"),a(") for the component to render. ")],-1)),t(l,{title:"Usage",language:"JavaScript",source:k}),t(l,{title:"Example options object (bar chart)",language:"JavaScript",source:v})]),_:1})]),_:1})]),_:1}))}};export{j as default};
