(()=>{var e={};e.id=212,e.ids=[212],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},71017:e=>{"use strict";e.exports=require("path")},57310:e=>{"use strict";e.exports=require("url")},99001:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>o.a,__next_app__:()=>u,originalPathname:()=>h,pages:()=>d,routeModule:()=>p,tree:()=>c});var s=a(50482),r=a(69108),n=a(62563),o=a.n(n),i=a(68300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);a.d(t,l);let c=["",{children:["dashboard",{children:["organisation",{children:["[orgId]",{children:["chatbot",{children:["[chatbotId]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,89971)),"/Users/tejas/Documents/Eruva/Dashboard/app/dashboard/organisation/[orgId]/chatbot/[chatbotId]/page.tsx"]}]},{}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(a.bind(a,12430)),"/Users/tejas/Documents/Eruva/Dashboard/app/dashboard/layout.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,82917)),"/Users/tejas/Documents/Eruva/Dashboard/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,69361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/tejas/Documents/Eruva/Dashboard/app/dashboard/organisation/[orgId]/chatbot/[chatbotId]/page.tsx"],h="/dashboard/organisation/[orgId]/chatbot/[chatbotId]/page",u={require:a,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/dashboard/organisation/[orgId]/chatbot/[chatbotId]/page",pathname:"/dashboard/organisation/[orgId]/chatbot/[chatbotId]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},24685:(e,t,a)=>{Promise.resolve().then(a.bind(a,53537))},22933:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>n,ED:()=>r,Xi:()=>l,l2:()=>i,o8:()=>o});var s=a(99707);function r({orgId:e}){return(0,s.Z)(`/api/organisation/${e}/chatbot`,{method:"GET",body:null})}function n({orgId:e,payload:t}){return(0,s.Z)(`/api/organisation/${e}/chatbot`,{method:"POST",body:t})}function o({orgId:e,chatbotId:t}){return(0,s.Z)(`/api/organisation/${e}/chatbot/${t}`,{method:"GET",body:null})}function i({orgId:e,chatbotId:t,payload:a}){return(0,s.Z)(`/api/organisation/${e}/chatbot/${t}`,{method:"PUT",body:a})}function l({orgId:e,chatbotId:t}){return(0,s.Z)(`/api/organisation/${e}/chatbot/${t}`,{method:"DELETE",body:null})}},35641:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var s=a(95344),r=a(3729),n=a(5034),o=a(42496),i=a(29698),l=a(38010),c=a(38271);let d=function({onConfirm:e,title:t,matcher:a,text:d,active:h,visibilityDispatcher:u}){let[p,x]=(0,r.useState)(!1),[m,b]=(0,r.useState)(!1),g=async()=>{try{b(!0),await e(),u(!1),b(!1)}catch(e){console.log("error from delete comfirmation is ",e)}};return(0,s.jsxs)(n.Z,{active:h,onClose:()=>{u(!1)},title:t,children:[d&&(0,s.jsxs)(o.Z.Content,{fontFamily:"manrope",size:"sm",className:"my-2 text-red-500",children:["* ",d]}),(0,s.jsxs)(o.Z.Content,{fontFamily:"manrope",size:"sm",className:"mb-3 text-slate-800",children:["Type"," ",s.jsx("code",{className:"px-1 py-0.5 font-black text-black bg-gray-200",children:a})," ","in the field below to continue."]}),s.jsx(i.Z.Field.Input,{placeholder:a,onChange:e=>{e.target.value===a?x(!0):x(!1)}}),(0,s.jsxs)(l.Z,{block:!0,className:"mt-2 btn-error",state:"error",loading:m,disabled:!p,onClick:g,children:[s.jsx(c.Z,{className:"w-4 h-4"}),"Delete"]})]})}},90393:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var s=a(95344),r=a(34132),n=a.n(r);a(3729);let o=function({text:e,position:t="BOTTOM",children:a,className:r}){return s.jsx("div",{className:n()("tooltip",{"tooltip-top":"TOP"===t,"tooltip-bottom":"BOTTOM"===t,"tooltip-left":"LEFT"===t,"tooltip-right":"RIGHT"===t},r),"data-tip":e,children:a})}},53537:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>H});var s=a(95344),r=a(72187),n=a(8428),o=a(3729),i=a(34132),l=a.n(i),c=a(63024),d=a(22933),h=a(38010),u=a(3027),p=a(42496),x=a(56975),m=a(15764),b=a(90393),g=a(69224);let y=(0,g.Z)("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);var f=a(51838),j=a(38271),v=a(14513),w=a(29709),k=a(99707);async function N({orgId:e,chatbotId:t,payload:a}){if(!e||!t)throw Error("id's must must provided");return(0,k.Z)(`/api/organisation/${e}/chatbot/${t}/knowledgeSource`,{method:"POST",body:a})}async function Z({chatbotId:e,knowledgeId:t,orgId:a}){return(0,k.Z)(`/api/organisation/${a}/chatbot/${e}/knowledgeSource/${t}`,{method:"GET",body:null})}async function C({chatbotId:e,knowledgeId:t,orgId:a}){return(0,k.Z)(`/api/organisation/${a}/chatbot/${e}/knowledgeSource/${t}`,{method:"DELETE",body:null})}var I=a(5034),S=a(29698),E=a(60708),T=a(85453);let z=w.z.object({name:w.z.string().min(1,"Name must have atleast 1 character").max(50,"Name can not have more than 50 characters"),hostURL:w.z.string().url()}),D=function({type:e,active:t,visibilityDispatcher:a,prevValues:r,orgId:n,chatbotId:i}){let[l,c]=(0,o.useState)([]),[d,u]=(0,o.useState)(null),{register:p,handleSubmit:m,formState:b,reset:g}=(0,E.cI)({resolver:(0,T.F)(z)}),[y,f]=(0,o.useState)(!1),j=async e=>{if(0===l.length){u("Add atleast one scrappable link");return}let t={activeLinks:l,...e};try{f(!0),await N({orgId:n,chatbotId:i,payload:t}),await (0,x.z)(["organisation",n,"chatbot",i]),c([]),g(),a(!1)}catch(e){console.log("error from creating knowledge source ",e)}finally{f(!1)}};return s.jsx(I.Z,{title:"CREATE"===e?"Create New Knowledge Source":"Edit Knowledge Source",active:t,onClose:()=>{a(!1)},children:(0,s.jsxs)("form",{onSubmit:m(j),children:[s.jsx(S.Z.Field.Input,{label:"Add a name for this Knowledge Source",placeholder:"Google Wiki",className:"mt-2",...p("name"),error:b.errors.name?.message}),s.jsx(S.Z.Field.Input,{label:"Add a host URL",className:"mt-2",helpText:"This is a parent URL. must start with `https://`",placeholder:"https://en.wikipedia.org/wiki/Google",...p("hostURL"),error:b.errors.hostURL?.message}),s.jsx(S.Z.Field.Input,{label:"Add scrappable links",className:"mt-2 mb-2",helpText:"Must start with `https://`. Press Space to add.",placeholder:"https://en.wikipedia.org/sitemap.xml",onChange:e=>{/^(https?:\/\/)?([\w.-]+\.[a-z]{2,})(\/[^\s]*)?$/i.test(e.target.value)?u(null):u("Link is invalid")},onKeyDown:e=>{if(" "===e.key&&(e.preventDefault(),!d)){let t=e.currentTarget.value;c([...l.filter(e=>e!==t),t]),e.currentTarget.value=""}},error:d}),s.jsx("div",{className:"flex flex-wrap gap-2 mb-2",children:l.map((e,t)=>(0,s.jsxs)("span",{className:"flex items-center gap-1 px-3 py-2 text-xs rounded-full w-max bg-base-200 text-base-content",children:[e,s.jsx(v.Z,{className:"w-4 h-4 cursor-pointer",onClick:()=>{c(l.filter((e,a)=>a!==t))}})]},t))}),s.jsx(h.Z,{block:!0,loading:y,children:"Submit"})]})})};var F=a(35641);let P=function({knowledgeSources:e,chatbotId:t,orgId:a}){let[r,n]=(0,o.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"w-full p-5 bg-white rounded-xl",children:[s.jsx(p.Z.Heading,{variant:"h3",size:"3xl",boldness:600,fontFamily:"poppins",className:"pb-5 mb-5 border-b-2 text-gray-950",children:"Knowledge Source"}),e?.length===0&&(0,s.jsxs)("span",{className:"flex items-center justify-center p-5 font-semibold text-gray-950 alert alert-warning",children:[s.jsx(y,{className:"w-6 h-6"}),"You don't have any Knowledge Source as of now"," ",s.jsx("span",{className:"font-bold underline cursor-pointer",onClick:()=>{n(!0)},children:"Create One Here"})]}),e?.length!==0&&(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[e?.map(e=>s.jsx($,{knowledgeSource:e,orgId:a,chatbotId:t},e.id)),(0,s.jsxs)(h.Z,{block:!0,onClick:()=>{n(!0)},children:["Create ",s.jsx(f.Z,{className:"w-4 h-4"})]})]})]}),s.jsx(D,{chatbotId:t,orgId:a,type:"CREATE",active:r,visibilityDispatcher:n})]})};function $(e){let{status:t,knowledgeSource:a}=function({knowledgeSource:e,chatbotId:t,orgId:a}){let[s,r]=(0,o.useState)(e.status),n=(0,o.useRef)(),[i,l]=(0,o.useState)(!0);return(0,o.useEffect)(()=>{let s=async()=>{try{let s=await Z({knowledgeId:e.id,chatbotId:t,orgId:a});r(s.status),"PROCESSING"!==s.status&&l(!1)}catch(e){console.log(e),l(!1)}},o=()=>{clearInterval(n.current)};return i?n.current=setInterval(s,2e3):o(),()=>{o()}},[t,i,e.id,a,s]),{status:s,knowledgeSource:e}}(e),[r,n]=(0,o.useState)(!1);return(0,s.jsxs)(s.Fragment,{children:[s.jsx("div",{className:"rounded-xl bg-base-200/50",children:(0,s.jsxs)("div",{className:"relative flex items-center justify-between collapse-title",children:[(0,s.jsxs)("div",{className:"flex items-center justify-center gap-5",children:[s.jsx(p.Z.Heading,{variant:"h4",size:"base",boldness:600,fontFamily:"manrope",className:"text-accent-content",children:a.name}),s.jsx("div",{className:"flex items-center gap-1",children:(0,s.jsxs)("span",{className:l()("font-semibold text-xxs font-nunito badge text-white",{"badge-success":"SUCCEED"===t,"badge-error":"ERROR"===t,"badge-warning":"PROCESSING"===t}),children:["ERROR"===t&&"Failed","PROCESSING"===t&&"Training","SUCCEED"===t&&"Active"]})})]}),s.jsx("div",{className:"flex items-center justify-center gap-2",children:s.jsx(b.Z,{position:"RIGHT",text:"Delete",children:s.jsx(h.Z,{size:"small",state:"error",className:"btn-circle",onClick:()=>{n(!0)},children:s.jsx(j.Z,{className:"w-4 h-4"})})})})]})}),s.jsx(F.Z,{active:r,visibilityDispatcher:n,matcher:`Delete ${a.name}`,onConfirm:async()=>{await C({chatbotId:e.chatbotId,knowledgeId:a.id,orgId:e.orgId}),(0,x.z)(["organisation",e.orgId,"chatbot",e.chatbotId])},title:"Delete Knowledge Source",text:`Your chatbot will not longer be able to answer queries related to knowledge base ${a.name}. Are you sure sure about deleting it?`})]})}let R=function({chatbot:e,orgId:t}){let[a,r]=(0,o.useState)(!1),i=(0,n.useRouter)();return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"w-full p-5 bg-red-100 border rounded-xl",children:[s.jsx(p.Z.Heading,{variant:"h3",size:"3xl",boldness:600,fontFamily:"poppins",className:"pb-5 mb-5 text-red-500 border-b-2 border-b-red-300",children:"Danger Zone"}),(0,s.jsxs)("div",{className:"grid grid-cols-3 gap-5",children:[(0,s.jsxs)("div",{className:"col-span-2 ",children:[(0,s.jsxs)(p.Z.Heading,{variant:"h6",boldness:700,size:"lg",className:"text-red-500",fontFamily:"manrope",children:["Delete ",s.jsx("b",{children:`"${e.name}"`})]}),s.jsx(p.Z.Content,{size:"base",fontFamily:"poppins",className:"pt-1 text-red-400",children:`Once deleted, your chatbot and all associated data cannot be
            recovered. Think carefully before taking this step. If you're sure,
            proceed with caution. For assistance, contact support.`})]}),s.jsx("div",{className:"grid place-items-center",children:s.jsx(h.Z,{color:"none",state:"error",block:!0,onClick:()=>{r(!0)},children:"Delete"})})]})]}),s.jsx(F.Z,{active:a,visibilityDispatcher:r,matcher:`Delete ${e.name}`,title:"Delete Chatbot",text:"To proceed with chatbot deletion, we require your confirmation. This action is irreversible. Are you sure you want to proceed?",onConfirm:async()=>{await (0,d.Xi)({chatbotId:e.id,orgId:t}),i.push(`/dashboard/organisation/${t}`)}})]})},A=(0,g.Z)("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]),L=function({chatbot:e,orgId:t}){let a=(0,n.useRouter)();return s.jsx(s.Fragment,{children:(0,s.jsxs)("div",{className:"w-full p-5 bg-white border rounded-xl",children:[s.jsx(p.Z.Heading,{variant:"h3",size:"3xl",boldness:600,fontFamily:"poppins",className:"pb-5 mb-5 border-b-2 text-gray-950",children:"Visual Builder"}),(0,s.jsxs)("div",{className:"grid grid-cols-3 gap-5",children:[(0,s.jsxs)("div",{className:"col-span-2",children:[s.jsx(p.Z.Heading,{variant:"h6",boldness:800,size:"lg",className:"text-gray-500",fontFamily:"manrope",children:"No-Code Chatbot Customization"}),s.jsx(p.Z.Content,{size:"base",fontFamily:"poppins",className:"pt-1 text-gray-500 opacity-75",children:`Easily personalize your chatbot without the hassle of coding. Visual Builder 
              simplifies customization, making it a breeze to create a chatbot tailored to 
              your needs.`})]}),s.jsx("div",{className:"grid place-items-center",children:(0,s.jsxs)(h.Z,{block:!0,onClick:()=>{a.push(`/dashboard/organisation/${t}/chatbot/${e.id}/builder`)},children:["Try ",s.jsx(A,{className:"w-4 h-4"})]})})]})]})})},M=function({chatbot:e,orgId:t}){return(0,s.jsxs)("div",{className:"flex flex-col flex-1 w-3/5 gap-5 pt-10 h-max",children:[s.jsx(P,{knowledgeSources:e.knowledgeBase.knowledgeSource,orgId:t,chatbotId:e.id}),s.jsx(L,{chatbot:e,orgId:t}),s.jsx(R,{chatbot:e,orgId:t})]})},O=(0,g.Z)("CopyCheck",[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),q=(0,g.Z)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),G=function({jsCode:e,cssCode:t,bodyCode:a}){return(0,s.jsxs)("div",{className:"sticky top-0 w-2/5 pt-10",children:[s.jsx(p.Z.Heading,{size:"4xl",variant:"h2",boldness:700,fontFamily:"poppins",className:"mb-3 text-gray-700",children:"Steps To Integrate"}),s.jsx(p.Z.Content,{size:"sm",boldness:500,fontFamily:"poppins",className:"mb-2 text-gray-500",children:"1. Add below JS script to head of your HTML or JSX source code."}),s.jsx(_,{code:e}),s.jsx(p.Z.Content,{size:"sm",boldness:500,fontFamily:"poppins",className:"mt-4 mb-2 text-gray-500",children:"2. Add below CSS to head of your HTML or JSX source code."}),s.jsx(_,{code:t}),s.jsx(p.Z.Content,{size:"sm",boldness:500,fontFamily:"poppins",className:"mt-4 mb-2 text-gray-500",children:"3. Add below code snippet to body of your HTML or JSX source code."}),s.jsx(_,{code:a})]})};function _({code:e}){let[t,a]=(0,o.useState)(!1);return(0,s.jsxs)("div",{className:"relative",children:[s.jsx("div",{className:"mockup-code",children:s.jsx("pre",{children:s.jsx("code",{children:e})})}),s.jsx("span",{className:"absolute text-white cursor-pointer top-4 right-4",onClick:()=>{let t=document.createElement("input");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),a(!0)},children:s.jsx(b.Z,{text:t?"Copied!":"Copy",position:"TOP",children:t?s.jsx(O,{className:"w-5 h-5"}):s.jsx(q,{className:"w-5 h-5"})})})]})}let H=function({orgId:e,chatbotId:t}){let a=(0,r.a)({queryKey:["organisation",e,"chatbot",t],queryFn:()=>(0,d.o8)({orgId:e,chatbotId:t}),refetchOnWindowFocus:!1}),[i,g]=(0,o.useState)(!1),y=(0,n.useRouter)(),f=async a=>{try{g(!0),await (0,d.l2)({orgId:e,chatbotId:t,payload:a}),(0,x.z)(["organisation",e,"chatbot",t])}catch(e){console.log("error from chatbot update",e)}finally{g(!1)}};return(0,s.jsxs)(u.Z,{loading:a.isLoading,error:a.error&&a.isError&&!(a.isFetching||a.isLoading),children:[a.data&&s.jsx("section",{className:"flex items-center justify-center w-screen h-screen px-10 bg-slate-50",children:(0,s.jsxs)("div",{className:"flex flex-col w-full h-screen py-10 max-w-container",children:[(0,s.jsxs)("div",{className:"sticky top-0 flex items-center justify-between w-full pb-5 border-b-2",children:[(0,s.jsxs)("div",{className:"flex items-center gap-5",children:[s.jsx(b.Z,{text:"Go back to Chatbot listings.",position:"TOP",children:s.jsx(h.Z,{color:"none",className:"btn-circle",onClick:()=>{y.push(`/dashboard/organisation/${e}`)},children:s.jsx(c.Z,{className:"w-4 h-4"})})}),s.jsx(p.Z.Heading,{size:"5xl",boldness:700,fontFamily:"manrope",variant:"h1",className:"text-slate-950",children:a.data?.name}),(0,s.jsxs)("div",{className:"flex gap-2",children:[s.jsx("div",{className:"badge badge-outline text-xxs",children:"SETTINGS"}),a.data?.active?s.jsx("div",{className:"text-white badge badge-success text-xxs",children:"ACTIVE"}):s.jsx("div",{className:"badge badge-neutral text-xxs",children:"DISABLED"})]})]}),s.jsx("div",{className:"flex items-center gap-2",children:s.jsx(U,{onClick:async e=>{await f({active:e})},checked:a.data?.active})})]}),(0,s.jsxs)("div",{className:"flex flex-1 gap-5 p-5 overflow-y-scroll",children:[s.jsx(M,{chatbot:a.data,orgId:e}),s.jsx(G,{jsCode:'<script type="module" crossorigin src="https://ygyatyegxcwlaxolnnnk.supabase.co/storage/v1/object/public/static_bundles/bundle.js"></script>',bodyCode:`<chat-front identifier="${a.data?.key}"></chat-front>`,cssCode:'<link rel="stylesheet" href="https://ygyatyegxcwlaxolnnnk.supabase.co/storage/v1/object/public/static_bundles/bundle.css">'})]})]})}),s.jsx("section",{className:l()("absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-black/20",{hidden:!(i||a.isFetching)}),children:s.jsx(m.Z,{})})]})};function U({onClick:e,checked:t}){return s.jsx(b.Z,{text:"Click to toggle chatbot.",position:"TOP",children:s.jsx("input",{type:"checkbox",className:"toggle",checked:t,onChange:async()=>{await e(!t)}})})}},63024:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});let s=(0,a(69224).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},38271:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});let s=(0,a(69224).Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]])},89971:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var s=a(25036);let r=(0,a(86843).createProxy)(String.raw`/Users/tejas/Documents/Eruva/Dashboard/containers/Chatbot/index.tsx`),{__esModule:n,$$typeof:o}=r,i=r.default;function l({params:e}){return s.jsx(i,{chatbotId:parseInt(e.chatbotId),orgId:parseInt(e.orgId)})}}};var t=require("../../../../../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[638,168,337,476,139,674,984,237,863],()=>a(99001));module.exports=s})();