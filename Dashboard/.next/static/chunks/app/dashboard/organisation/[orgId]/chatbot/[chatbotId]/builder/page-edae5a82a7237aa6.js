(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228],{9731:function(e,t,l){Promise.resolve().then(l.bind(l,8094))},9793:function(e,t,l){"use strict";l.d(t,{Ay:function(){return n},ED:function(){return s},Xi:function(){return i},l2:function(){return a},o8:function(){return o}});var r=l(2060);function s(e){let{orgId:t}=e;return(0,r.Z)("/api/organisation/".concat(t,"/chatbot"),{method:"GET",body:null})}function n(e){let{orgId:t,payload:l}=e;return(0,r.Z)("/api/organisation/".concat(t,"/chatbot"),{method:"POST",body:l})}function o(e){let{orgId:t,chatbotId:l}=e;return(0,r.Z)("/api/organisation/".concat(t,"/chatbot/").concat(l),{method:"GET",body:null})}function a(e){let{orgId:t,chatbotId:l,payload:s}=e;return(0,r.Z)("/api/organisation/".concat(t,"/chatbot/").concat(l),{method:"PUT",body:s})}function i(e){let{orgId:t,chatbotId:l}=e;return(0,r.Z)("/api/organisation/".concat(t,"/chatbot/").concat(l),{method:"DELETE",body:null})}},2060:function(e,t,l){"use strict";l.d(t,{Z:function(){return o}});var r=l(9079);let s=r.env.NEXT_PUBLIC_DAHBOARD_BASE_URL?"".concat(r.env.NEXT_PUBLIC_DAHBOARD_BASE_URL,"/"):"http://localhost:3000/";r.env.NEXT_PUBLIC_CHATFRONT_URL;var n=l(241);async function o(e,t){let l={method:t.method};return"GET"!==t.method&&(l={...l,body:JSON.stringify(t.body)}),fetch(e.startsWith("http")?e:e.startsWith("/")?"".concat(s).concat(e.slice(1)):"".concat(s).concat(e),l).then(e=>a(e))}async function a(e){return e.text().then(t=>{let l=null;try{l=t&&JSON.parse(t)}catch(e){console.log("ERROR IN HANDLE RESPONSE BROWSER: ",e)}if(!e.ok){let t=l||e;throw console.log("error from browser api: ",t),new n.H({message:t.errors[0].message,status:e.status,path:t.errors[0].path})}return l})}},4734:function(e,t,l){"use strict";var r=l(3827),s=l(6480),n=l.n(s),o=l(8792),a=l(2544);t.Z=e=>{let{children:t,color:l="primary",size:s="medium",type:u="solid",state:x="none",wide:m=!1,href:h,outerLink:g,block:f,className:b,loading:p=!1,...y}=e,v=h?o.default:"button";return(0,r.jsxs)(v,{href:h,disabled:p,target:g&&"_blank",className:n()("relative overflow-hidden ease-in-out duration-200 transition-all",i[l],c[x],d[s],{"btn-outline":"outline"===u,"btn-wide":m,"btn-block":f,btn:!h,"opacity-50 cursor-not-allowed":p},b),...y,children:[t,(0,r.jsx)("div",{className:n()("absolute top-0 left-0 grid w-full h-full place-items-center cursor-not-allowed",i[l],c[x],{hidden:!p}),children:(0,r.jsx)(a.Z,{})})]})};let i={primary:"btn-primary",secondary:"btn-secondary",neutral:"btn-neutral",accent:"btn-accent",ghost:"btn-ghost",link:"btn-link",none:""},c={success:"btn-success text-white",error:"btn-error text-white",warning:"btn-warning",info:"btn-info",none:""},d={small:"btn-sm",medium:"",large:"btn-lg","extra-small":"btn-xs"}},7767:function(e,t,l){"use strict";l.d(t,{Z:function(){return u}});var r=l(3827),s=l(6480),n=l.n(s),o=l(7841),a=l(1930),i=l(4090);let c=(0,i.forwardRef)((e,t)=>{let{label:l,error:s,className:o,name:a,disabled:c,size:u="input-md",type:x,helpText:m,...h}=e,[g,f]=(0,i.useState)(!1);return(0,r.jsxs)("div",{className:n()("w-full form-control",o),children:[(0,r.jsxs)("label",{className:"label",htmlFor:a,children:[l&&(0,r.jsx)("span",{className:"label-text",children:l}),m&&(0,r.jsx)("span",{className:"label-text-alt",children:m})]}),(0,r.jsxs)("div",{className:n()("w-full input input-bordered outline-none overflow-hidden flex items-center",u,{"border-red-500":s,"cursor-not-allowed opacity-75":c}),children:[(0,r.jsx)("input",{...h,name:a,disabled:c,type:"password"===x?g?"text":"password":x,ref:t,className:"w-full h-full autofill:bg-none bg-none"}),"password"===x&&(0,r.jsx)(d,{visible:!g,handler:()=>{f(!g)},className:"w-6 h-6 ml-2 text-gray-400 cursor-pointer"})]}),s&&(0,r.jsx)("label",{className:"label",htmlFor:a,children:(0,r.jsx)("span",{className:"text-red-500 label-text-alt",children:s})})]})});function d(e){let{visible:t,handler:l,className:s}=e;return t?(0,r.jsx)(o.Z,{className:s,onClick:l}):(0,r.jsx)(a.Z,{className:s,onClick:l})}c.displayName="Input Field";var u={Field:{Input:c}}},2544:function(e,t,l){"use strict";var r=l(3827),s=l(6480),n=l.n(s);t.Z=e=>{let{size:t="small",color:l="none"}=e;return(0,r.jsx)("span",{className:n()("loading loading-spinner",o[t],a[l])})};let o={small:"loading-sm",medium:"loading-md",large:"loading-lg"},a={primary:"text-primary",secondary:"text-secondary",accent:"text-accent",neutral:"text-neutral",info:"text-info",success:"text-success",warning:"text-warning",error:"text-error",gray:"text-gray-300",none:""}},6871:function(e,t,l){"use strict";var r=l(3827),s=l(6480),n=l.n(s);l(4090),t.Z=function(e){let{text:t,position:l="BOTTOM",children:s,className:o}=e;return(0,r.jsx)("div",{className:n()("tooltip",{"tooltip-top":"TOP"===l,"tooltip-bottom":"BOTTOM"===l,"tooltip-left":"LEFT"===l,"tooltip-right":"RIGHT"===l},o),"data-tip":t,children:s})}},2171:function(e,t,l){"use strict";l.d(t,{Z:function(){return b}});var r=l(3827);l(4090);var s=l(6480),n=l.n(s),o=l(4400),a=l.n(o),i=l(1331),c=l.n(i),d=l(8461),u=l.n(d),x=l(9331),m=l.n(x);let h={poppins:u().className,manrope:a().className,inter:c().className,nunito:m().className};"".concat(a().variable," ").concat(u().variable," ").concat(m().variable);let g={100:"font-thin",200:"font-extralight",300:"font-light",400:"font-normal",500:"font-medium",600:"font-semibold",700:"font-bold",800:"font-extrabold",900:"font-black"},f={sm:"text-sm",base:"text-base",lg:"text-lg",xl:"text-xl","2xl":"text-2xl","3xl":"text-3xl","4xl":"text-4xl","5xl":"text-5xl","6xl":"text-6xl"};var b={Heading:e=>{let{className:t,children:l,variant:s,boldness:o=500,italic:a=!1,underline:i=!1,fontFamily:c="manrope",size:d="base",...u}=e,x={...u,className:n()(h[c],g[o],{underline:i,italic:a},f[d],t)};switch(s){case"h1":return(0,r.jsx)("h1",{...x,children:l});case"h2":return(0,r.jsx)("h2",{...x,children:l});case"h3":return(0,r.jsx)("h3",{...x,children:l});case"h4":return(0,r.jsx)("h4",{...x,children:l});case"h5":return(0,r.jsx)("h5",{...x,children:l});case"h6":return(0,r.jsx)("h6",{...x,children:l})}},Content:e=>{let{children:t,boldness:l=500,italic:s=!1,underline:o=!1,fontFamily:a="manrope",className:i,size:c="lg",...d}=e;return(0,r.jsx)("p",{...d,className:n()({underline:o,italic:s},h[a],g[l],"text-".concat(c),i),children:t})}}},8094:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return Z}});var r=l(3827),s=l(3967),n=l(7907),o=l(2670),a=l(1270),i=l(4090),c=l(4734),d=l(6871),u=l(2171),x=l(248);let m=x.z.object({errorText:x.z.string(),maxUserMsgAllowed:x.z.coerce.number(),greetingMessage:x.z.string(),limitExceedText:x.z.string(),thinkingText:x.z.string(),placeholder:x.z.string(),style:x.z.object({color:x.z.object({icon:x.z.object({background:x.z.string(),text:x.z.string()}),typingArea:x.z.object({background:x.z.string(),text:x.z.string()}),sendButton:x.z.object({background:x.z.string(),text:x.z.string()}),header:x.z.object({background:x.z.string(),text:x.z.string()}),message:x.z.object({user:x.z.object({background:x.z.string(),text:x.z.string()}),machine:x.z.object({background:x.z.string(),text:x.z.string()})}),thinkingContainer:x.z.object({text:x.z.string()}),body:x.z.string()}),iconPosition:x.z.object({right:x.z.coerce.number(),bottom:x.z.coerce.number()})}),initialPrompts:x.z.array(x.z.object({label:x.z.string(),message:x.z.string()}))});var h=l(7461);let g=(0,h.Z)("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z",key:"16vlm8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);var f=l(6480),b=l.n(f);let p=(0,h.Z)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);function y(e){let{configuration:t}=e;return(0,r.jsxs)("div",{className:"flex items-center justify-center gap-5 px-8 py-5",style:{backgroundColor:t.style.color.header.background,color:t.style.color.header.text},children:[(0,r.jsx)(p,{className:"w-7 h-7 text-inherit"}),(0,r.jsx)("div",{className:"flex items-center flex-1",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:"text-base text-inherit",children:"Bot"}),(0,r.jsxs)("div",{className:"flex items-center justify-center mt-1",children:[(0,r.jsx)("span",{className:"block w-2 h-2 mr-1 bg-green-500 rounded-full"}),(0,r.jsx)("span",{className:"text-xxs text-inherit",children:"Online"})]})]})})]})}function v(e){let{configuration:t}=e;return(0,r.jsxs)("div",{className:"flex flex-col flex-1 w-full px-5 py-5 overflow-y-auto font-body",style:{backgroundColor:t.style.color.body},children:[(0,r.jsx)(j,{message:t.greetingMessage,author:"MACHINE",color:t.style.color.message}),(0,r.jsx)(j,{message:"See this is Eruva!!",author:"USER",color:t.style.color.message})]})}function j(e){let{message:t,author:l,color:s}=e;return(0,r.jsxs)("div",{className:"flex items-center justify-center w-full mt-4 first:mt-0",children:["USER"===l&&(0,r.jsx)("div",{className:"flex flex-1"}),(0,r.jsxs)("div",{className:b()("block px-4 pt-3 pb-2 rounded-2xl max-w-xs shadow text-sm"),style:{backgroundColor:"USER"===l?s.user.background:s.machine.background,color:"USER"===l?s.user.text:s.machine.text},children:[t,(0,r.jsx)("span",{className:b()("block w-full mt-1 text-xxs",{"text-end":"USER"===l,"text-start":"MACHINE"===l}),children:"few secocnds ago"})]}),"MACHINE"===l&&(0,r.jsx)("div",{className:"flex flex-1"})]})}let N=(0,h.Z)("SendHorizontal",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);function w(e){let{configuration:t}=e;return(0,r.jsxs)("div",{className:"flex flex-col px-5 rounded-2xl ",style:{backgroundColor:t.style.color.typingArea.background},children:[(0,r.jsx)("span",{className:"block my-2 text-xs",style:{color:t.style.color.thinkingContainer.text},children:t.thinkingText}),(0,r.jsx)("span",{className:"block my-2 text-xs",style:{color:t.style.color.thinkingContainer.text},children:t.limitExceedText}),(0,r.jsxs)("div",{className:"flex items-center justify-center w-full py-1",style:{color:t.style.color.typingArea.text},children:[(0,r.jsx)("input",{className:"flex flex-1 px-2 py-4 bg-transparent border-none outline-none text-inherit disabled:opacity-75 disabled:cursor-not-allowed placeholder:text-slate-400",placeholder:t.placeholder}),(0,r.jsx)("button",{className:"p-2 rounded-full aspect-square",style:{backgroundColor:t.style.color.sendButton.background,color:t.style.color.sendButton.text},children:(0,r.jsx)(N,{className:"text-inherit translate-x-[2px] w-6 h-auto "})})]}),(0,r.jsx)("hr",{className:"w-full mt-2 h-0.5 border rounded-xl border-gray-800/20"}),(0,r.jsxs)("div",{className:"flex items-center justify-center w-full py-5",children:[(0,r.jsx)("div",{className:"flex flex-1"}),(0,r.jsxs)("span",{className:"text-[10px] text-black/60",children:["Powered by ",(0,r.jsx)("span",{className:"text-sm font-bold font-logo",children:"Eruva"})]})]})]})}function k(e){let{configuration:t}=e;return(0,r.jsxs)("div",{className:"absolute flex flex-col items-end justify-end gap-10",style:{right:t.style.iconPosition.right,bottom:t.style.iconPosition.bottom},children:[(0,r.jsxs)("div",{className:"rounded-xl shadow-lg overflow-hidden w-[500px] flex flex-col h-[60vh]",children:[(0,r.jsx)(y,{configuration:t}),(0,r.jsx)(v,{configuration:t}),(0,r.jsx)(w,{configuration:t})]}),(0,r.jsx)("span",{className:"relative block w-16 h-16 rounded-full shadow-lg",style:{backgroundColor:t.style.color.icon.background},children:(0,r.jsx)(g,{className:b()("w-7 h-7 scale-100 ease-in-out duration-300 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-white"),style:{color:t.style.color.icon.background}})})]})}var T=l(7767);let _=(0,i.forwardRef)((e,t)=>{var l,s,n,o,a,i,c,d,u,x,m,h,g,f,b,p,y,v,j,N,w,k,_;let{configurations:C,updateFunction:q,form:Z,submitHandler:I}=e,{register:F,formState:z,handleSubmit:E}=Z;return(0,r.jsxs)("form",{className:"w-full",ref:t,onSubmit:E(I),children:[(0,r.jsx)(T.Z.Field.Input,{className:"w-full mt-3",label:"Error Text",...F("errorText",{required:"This field is required"}),type:"text",error:null===(l=z.errors.errorText)||void 0===l?void 0:l.message,onChange:e=>{let t=e.currentTarget.value;C.errorText=t,q(C)}}),(0,r.jsxs)("div",{className:"flex gap-3 mt-3",children:[(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"Limit Exceeded Text",...F("limitExceedText",{required:"This field is required"}),type:"text",error:null===(s=z.errors.limitExceedText)||void 0===s?void 0:s.message,onChange:e=>{let t=e.currentTarget.value;C.limitExceedText=t,q(C)}}),(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"Maximum User Message Allowed",...F("maxUserMsgAllowed",{required:"This field is required"}),type:"number",error:null===(n=z.errors.maxUserMsgAllowed)||void 0===n?void 0:n.message})]}),(0,r.jsx)(T.Z.Field.Input,{className:"w-full mt-3",label:"Greeting Message",...F("greetingMessage",{required:"This field is required"}),type:"text",error:null===(o=z.errors.greetingMessage)||void 0===o?void 0:o.message,onChange:e=>{let t=e.currentTarget.value;C.greetingMessage=t,q(C)}}),(0,r.jsx)(T.Z.Field.Input,{className:"w-full mt-3",label:"Thinking Text",...F("thinkingText",{required:"This field is required"}),type:"text",error:null===(a=z.errors.thinkingText)||void 0===a?void 0:a.message,onChange:e=>{let t=e.currentTarget.value;C.thinkingText=t,q(C)}}),(0,r.jsx)(T.Z.Field.Input,{className:"w-full mt-3",label:"Placeholder",...F("placeholder",{required:"This field is required"}),type:"text",error:null===(i=z.errors.placeholder)||void 0===i?void 0:i.message,onChange:e=>{let t=e.currentTarget.value;C.placeholder=t,q(C)}}),(0,r.jsxs)("div",{className:"flex gap-3 mt-3",children:[(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"Header Background Color",...F("style.color.header.background",{required:"This field is required"}),type:"color",error:null===(x=z.errors.style)||void 0===x?void 0:null===(u=x.color)||void 0===u?void 0:null===(d=u.header)||void 0===d?void 0:null===(c=d.background)||void 0===c?void 0:c.message,onChange:e=>{let t=e.currentTarget.value;C.style.color.header.background=t,q(C)}}),(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"Header Text Color",...F("style.color.header.text",{required:"This field is required"}),type:"color",error:null===(f=z.errors.style)||void 0===f?void 0:null===(g=f.color)||void 0===g?void 0:null===(h=g.header)||void 0===h?void 0:null===(m=h.text)||void 0===m?void 0:m.message,onChange:e=>{let t=e.currentTarget.value;C.style.color.header.text=t,q(C)}})]}),(0,r.jsx)(T.Z.Field.Input,{className:"w-full mt-3",label:"Body Color",...F("style.color.body",{required:"This field is required"}),type:"color",error:null===(y=z.errors.style)||void 0===y?void 0:null===(p=y.color)||void 0===p?void 0:null===(b=p.body)||void 0===b?void 0:b.message,onChange:e=>{let t=e.currentTarget.value;C.style.color.body=t,q(C)}}),(0,r.jsxs)("div",{className:"flex gap-3 mt-3",children:[(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"User Message Background Color",...F("style.color.message.user.background",{required:"This field is required"}),type:"color",onChange:e=>{let t=e.currentTarget.value;C.style.color.message.user.background=t,q(C)}}),(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"User Message Text Color",...F("style.color.message.user.text",{required:"This field is required"}),type:"color",onChange:e=>{let t=e.currentTarget.value;C.style.color.message.user.text=t,q(C)}})]}),(0,r.jsxs)("div",{className:"flex gap-3",children:[(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"AI Message Background Color",...F("style.color.message.machine.background",{required:"This field is required"}),type:"color",onChange:e=>{let t=e.currentTarget.value;C.style.color.message.machine.background=t,q(C)}}),(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"AI Message Text Color",...F("style.color.message.machine.text",{required:"This field is required"}),type:"color",onChange:e=>{let t=e.currentTarget.value;C.style.color.message.machine.text=t,q(C)}})]}),(0,r.jsx)(T.Z.Field.Input,{className:"w-full mt-3",label:"Thinking and Limit Exceed Text Color",...F("style.color.thinkingContainer.text",{required:"This field is required"}),type:"color",onChange:e=>{let t=e.currentTarget.value;C.style.color.thinkingContainer.text=t,q(C)}}),(0,r.jsxs)("div",{className:"flex gap-3 mt-3",children:[(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"Typing Area Background Color",...F("style.color.typingArea.background",{required:"This field is required"}),type:"color",onChange:e=>{let t=e.currentTarget.value;C.style.color.typingArea.background=t,q(C)}}),(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"Typing Area Text Color",...F("style.color.typingArea.text",{required:"This field is required"}),type:"color",onChange:e=>{let t=e.currentTarget.value;C.style.color.typingArea.text=t,q(C)}})]}),(0,r.jsxs)("div",{className:"flex gap-3 mt-3",children:[(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"Send Button Background Color",...F("style.color.sendButton.background",{required:"This field is required"}),type:"color",onChange:e=>{let t=e.currentTarget.value;C.style.color.sendButton.background=t,q(C)}}),(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"Send Button Text Color",...F("style.color.sendButton.text",{required:"This field is required"}),type:"color",onChange:e=>{let t=e.currentTarget.value;C.style.color.sendButton.text=t,q(C)}})]}),(0,r.jsxs)("div",{className:"flex gap-3 mt-3",children:[(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"Icon Background Color",...F("style.color.icon.background",{required:"This field is required"}),type:"color",onChange:e=>{let t=e.currentTarget.value;C.style.color.icon.background=t,q(C)}}),(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"Icon Text Color",...F("style.color.icon.text",{required:"This field is required"}),type:"color",onChange:e=>{let t=e.currentTarget.value;C.style.color.icon.text=t,q(C)}})]}),(0,r.jsxs)("div",{className:"flex gap-3 mt-3",children:[(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"Icon Postion From Bottom",...F("style.iconPosition.bottom",{required:"This field is required"}),error:null===(N=z.errors.style)||void 0===N?void 0:null===(j=N.iconPosition)||void 0===j?void 0:null===(v=j.bottom)||void 0===v?void 0:v.message,type:"number",onChange:e=>{let t=e.currentTarget.value;C.style.iconPosition.bottom=parseInt(t),q(C),Z.setValue("style.iconPosition.bottom",parseInt(t))}}),(0,r.jsx)(T.Z.Field.Input,{className:"w-full",label:"Icon Postion From Right",...F("style.iconPosition.right",{required:"This field is required"}),type:"number",error:null===(_=z.errors.style)||void 0===_?void 0:null===(k=_.iconPosition)||void 0===k?void 0:null===(w=k.right)||void 0===w?void 0:w.message,onChange:e=>{let t=e.currentTarget.value;C.style.iconPosition.right=parseInt(t),q(C),Z.setValue("style.iconPosition.right",parseInt(t))}})]})]})});_.displayName="Builder";var C=l(9793),q=l(8009),Z=function(e){let{orgId:t,chatbot:l}=e;(0,i.useRef)({...l.configuration});let x=(0,n.useRouter)(),[h,g]=(0,i.useState)(l.configuration),[f,b]=(0,i.useState)(!1),p=(0,o.cI)({resolver:(0,a.F)(m),defaultValues:l.configuration}),[y,v]=(0,i.useState)(!1),j=(0,i.useRef)(null),N=function(){b(!f)};async function w(e){v(!0);try{await (0,C.l2)({orgId:t,chatbotId:l.id,payload:{configuration:e}}),q.default.success("Configuration updated successfully")}catch(e){q.default.error("Some error occured while updating config.")}finally{v(!1),x.refresh()}}return(0,r.jsx)("section",{className:"flex items-center justify-center w-screen h-screen px-10 bg-slate-50",children:(0,r.jsxs)("div",{className:"flex flex-col w-full h-screen py-10 max-w-container",children:[(0,r.jsx)("div",{className:"sticky top-0 flex items-center justify-between w-full pb-5 border-b-2",children:(0,r.jsxs)("div",{className:"relative flex items-center justify-center w-full gap-5",children:[(0,r.jsx)(d.Z,{text:"Go back to Settings.",position:"TOP",className:"absolute left-0",children:(0,r.jsx)(c.Z,{color:"none",className:"btn-circle",onClick:()=>{x.push("/dashboard/organisation/".concat(t,"/chatbot/").concat(l.id))},children:(0,r.jsx)(s.Z,{className:"w-4 h-4"})})}),(0,r.jsx)(u.Z.Heading,{size:"5xl",boldness:700,fontFamily:"manrope",variant:"h1",className:" text-slate-950",children:l.name}),(0,r.jsxs)("div",{className:"absolute right-0 flex gap-3",children:[(0,r.jsx)(c.Z,{onClick:()=>{x.refresh(),window.location.reload()},color:"ghost",children:"Reset Form"}),(0,r.jsx)(c.Z,{onClick:function(){j.current&&j.current.requestSubmit()},color:"primary",loading:y,children:"Save Changes"})]})]})}),(0,r.jsxs)("div",{className:"flex flex-1 h-0 gap-5 mt-5",children:[(0,r.jsx)("div",{className:"flex flex-1 overflow-y-scroll",children:(0,r.jsx)(_,{form:p,configurations:h,updateFunction:function(e){g(e),N()},ref:j,submitHandler:w})}),(0,r.jsx)("div",{className:"flex flex-1",children:(0,r.jsxs)("div",{className:"flex flex-col flex-1 border mockup-browser bg-base-300",children:[(0,r.jsx)("div",{className:"mockup-browser-toolbar",children:(0,r.jsx)("div",{className:"input",children:"https://eruva.in"})}),(0,r.jsx)("div",{className:"flex flex-1 bg-base-200",children:(0,r.jsx)(k,{configuration:h})})]})})]})]})})}},241:function(e,t,l){"use strict";l.d(t,{H:function(){return r}});class r extends Error{constructor({message:e,status:t,path:l}){super(e),this.message=e,this.status=t,this.path=l}}},3967:function(e,t,l){"use strict";l.d(t,{Z:function(){return r}});let r=(0,l(7461).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},7907:function(e,t,l){"use strict";var r=l(5313);l.o(r,"notFound")&&l.d(t,{notFound:function(){return r.notFound}}),l.o(r,"useRouter")&&l.d(t,{useRouter:function(){return r.useRouter}}),l.o(r,"useSearchParams")&&l.d(t,{useSearchParams:function(){return r.useSearchParams}})},1331:function(e){e.exports={style:{fontFamily:"'__Inter_760066', '__Inter_Fallback_760066'",fontStyle:"normal"},className:"__className_760066"}},4400:function(e){e.exports={style:{fontFamily:"'__Manrope_c1b908', '__Manrope_Fallback_c1b908'",fontStyle:"normal"},className:"__className_c1b908",variable:"__variable_c1b908"}},9331:function(e){e.exports={style:{fontFamily:"'__Nunito_Sans_f376d0', '__Nunito_Sans_Fallback_f376d0'",fontStyle:"normal"},className:"__className_f376d0",variable:"__variable_f376d0"}},8461:function(e){e.exports={style:{fontFamily:"'__Poppins_b6fa0d', '__Poppins_Fallback_b6fa0d'",fontStyle:"normal"},className:"__className_b6fa0d",variable:"__variable_b6fa0d"}}},function(e){e.O(0,[250,578,9,971,69,744],function(){return e(e.s=9731)}),_N_E=e.O()}]);