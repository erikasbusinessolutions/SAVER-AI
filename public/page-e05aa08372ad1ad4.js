(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{10193:function(e,t,s){Promise.resolve().then(s.bind(s,83629))},83629:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return C}});var a=s(57437),r=s(2265),n=s(49089),l=s(678);s(83079);var i=s(12119),o=(0,i.$)("552457316f46c609d98893db780ac102aad1f8bb"),c=(0,i.$)("6eef79907804491aeed0ee9dfa17211076d36be5"),d=s(41799),m=s(71422),x=s(44743),u=(0,i.$)("ce19826b106b90263db0b402a8e8d42f275913e7"),h=s(11323),p=s(56424);let f=()=>{let e=["Saver","Safe","Secure","Protected","Guarded","Shielded","Defended","Watchful"],t=["Guardian","Sentinel","Protector","Keeper","Watcher","Shield","Guard","Scout"],s=e[Math.floor(Math.random()*e.length)],a=t[Math.floor(Math.random()*t.length)];return"".concat(s).concat(a).concat(Math.floor(1e3*Math.random()))};var g=()=>{let{socket:e,isConnected:t}=(0,l.s)(),[s,n]=(0,r.useState)([]),[i,g]=(0,r.useState)(""),[b,w]=(0,r.useState)(!1),v=(0,r.useRef)(null),[j,N]=(0,r.useState)(""),[y,k]=(0,r.useState)(""),[S,A]=(0,r.useState)(0),C=()=>{let e=["#2F80ED","#75B8F1","#4299E1","#63B3ED"];return e[Math.floor(Math.random()*e.length)]};(0,r.useEffect)(()=>{(async()=>{n((await o()).map(e=>({user:{id:e.user.id,username:e.user.username||""},message:e.message,color:e.color})))})()},[]),(0,r.useEffect)(()=>{if(e)return e.on("serverStatus",e=>{console.log("Server status:",e.message)}),e.on("newMessage",async e=>{e.user===j||["rug","scam","honeypot","fake"].some(t=>e.text.toLowerCase().includes(t))||n(t=>[{user:{id:-1,username:e.user},message:e.text,color:e.color},...t])}),e.on("userCount",e=>{A(e.count)}),e.on("chat_message",e=>{n(t=>[{user:{id:-1,username:e.username},message:e.message,color:e.color,imageUrl:e.imageUrl},...t])}),()=>{e.off("serverStatus"),e.off("newMessage"),e.off("userCount"),e.off("tokenVoted"),e.off("chat_message")}},[e,j]),(0,r.useEffect)(()=>{let e=localStorage.getItem("chat_username"),t=localStorage.getItem("chat_color");if(e){if(N(e),t)k(t);else{let e=C();localStorage.setItem("chat_color",e),k(e)}}else{let e=f(),t=C();localStorage.setItem("chat_username",e),localStorage.setItem("chat_color",t),N(e),k(t)}},[]);let D=async()=>{if(i.trim()&&e&&t&&j&&(g(""),!["rug","scam","honeypot","fake"].some(e=>i.toLowerCase().includes(e))))try{if(i.startsWith("/thx ")){var s;let e=null===(s=i.split(" ")[1])||void 0===s?void 0:s.trim();if(!e){n(e=>[{user:{id:-1,username:"Saver AI"},message:"Please provide a valid mint address",color:"#F17575"},...e]);return}let t=await u(e);t.success?n(t=>[{user:{id:-1,username:"Saver AI"},message:"Thank you for submitting ".concat(e," for analysis"),color:"#75F1B8"},...t]):n(e=>[{user:{id:-1,username:"Saver AI"},message:"Error: ".concat(t.error),color:"#F17575"},...e]);return}n(e=>[{user:{id:-1,username:j},message:i,color:y},...e]),Promise.all([e.emit("newMessage",{text:i,user:j,color:y}),c(i,j,y)]).catch(e=>{console.error("Error processing message:",e)})}catch(e){console.error("Error sending message:",e)}};(0,r.useEffect)(()=>{var e;null===(e=v.current)||void 0===e||e.scrollTo({top:0,behavior:"smooth"})},[s]);let E=e=>{let t=(0,h.z)(e);return"data:image/svg+xml;base64,".concat(btoa(t))};return(0,a.jsxs)("div",{className:"h-full flex flex-col",children:[(0,a.jsx)("div",{className:"relative w-full flex-none",children:(0,a.jsx)("div",{className:"p-3 w-full bg-[#D4D0C8] border-b border-[#A5A2A2] flex items-center justify-between",children:(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)("div",{className:"w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#000080] flex items-center justify-center text-white",children:"\uD83D\uDEE1️"}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("span",{className:"text-black font-medium text-sm md:text-base",children:"Saver AI Community"}),(0,a.jsxs)("span",{className:"text-[#000080] text-xs md:text-sm",children:[S," guardians, ",Math.ceil(.3*S)," active"]})]})]})})}),(0,a.jsxs)("div",{className:"flex-1 flex flex-col bg-[#C3C7CB] overflow-hidden",children:[(0,a.jsx)("div",{ref:v,className:"flex-1 overflow-y-auto p-2 md:p-4 flex flex-col-reverse",children:s.map((e,t)=>(0,a.jsxs)("div",{className:"flex gap-2 md:gap-3 mb-3 md:mb-4 ".concat(e.user.username===j?"flex-row-reverse":""),children:[(0,a.jsx)("div",{className:"flex-shrink-0",children:e.imageUrl?(0,a.jsx)("img",{src:e.imageUrl,alt:e.user.username,className:"w-8 h-8 rounded-full"}):(0,a.jsx)("img",{src:E(e.user.username),alt:e.user.username,className:"w-8 h-8 rounded-full"})}),(0,a.jsxs)("div",{className:"max-w-[85%] md:max-w-[75%] flex flex-col ".concat(e.user.username===j?"items-end":""),children:[(0,a.jsx)("span",{className:"text-xs md:text-sm mb-1 ".concat(e.user.username===j?"text-[#000080]":"text-[#000000]"),children:e.user.username}),(0,a.jsxs)("div",{className:"rounded-lg overflow-hidden p-2 md:p-3 ".concat(e.user.username===j?"bg-[#000080] text-white":"bg-[#FFFFFF] text-black"),children:[(0,a.jsx)("p",{className:"leading-relaxed text-xs md:text-sm",children:e.message}),(0,a.jsx)("span",{className:"text-[10px] md:text-[11px] text-white/70 mt-1 block",children:(0,p.WU)(new Date,"HH:mm")})]})]})]},t))}),(0,a.jsxs)("div",{className:"p-2 md:p-4 bg-[#D4D0C8] border-t border-[#A5A2A2]",children:[(0,a.jsxs)("div",{className:"flex gap-1 md:gap-2 bg-[#FFFFFF] rounded-lg p-1 md:p-2",children:[(0,a.jsx)("input",{type:"text",value:i,onChange:e=>g(e.target.value),onKeyPress:e=>{"Enter"===e.key&&D()},className:"flex-1 bg-transparent text-black px-2 md:px-3 focus:outline-none placeholder-[#000000] text-[14px] md:text-[15px]",placeholder:"Send a secure message..."}),(0,a.jsx)("button",{onClick:()=>w(!b),className:"p-1 md:p-2 text-[#000000] hover:text-[#000080] transition-colors",children:(0,a.jsx)(m.Z,{className:"w-4 h-4 md:w-5 md:h-5"})}),(0,a.jsx)("button",{onClick:D,className:"p-1 md:p-2 transition-colors ".concat(i.trim()?"text-[#000080] hover:text-black":"text-[#000000]"),children:(0,a.jsx)(x.Z,{className:"w-4 h-4 md:w-5 md:h-5"})})]}),b&&(0,a.jsx)("div",{className:"absolute bottom-16 md:bottom-20 right-2 md:right-4 z-50 shadow-xl",children:(0,a.jsx)(d.ZP,{onEmojiClick:e=>{g(t=>t+e.emoji),w(!1)}})})]})]})]})},b=s(61273),w=s(20376),v=s.n(w),j=s(33145),N=s(32768),y=s(76417),k=s(83464),S=e=>{let{inputRef:t}=e,{socket:s,isConnected:n}=(0,l.s)(),[i,o]=(0,r.useState)([{type:"output",content:"Prediction AI Terminal v1.0.0"},{type:"output",content:"Enter a Solana token mint address to analyze..."},{type:"input",content:">"}]),[d,m]=(0,r.useState)(""),[x,u]=(0,r.useState)(!1),h=(0,r.useRef)(null),p=()=>{h.current&&(h.current.scrollTop=h.current.scrollHeight)};(0,r.useEffect)(()=>{p()},[i]);let f=async e=>{if("Enter"===e.key&&d.trim()&&!x){u(!0);let e=d.trim();m(""),o(t=>[...t,{type:"input",content:"> ".concat(e)}]);try{var t;o(e=>[...e,{type:"output",content:"Fetching token data..."}]);let a=(await k.Z.get("https://tokens.jup.ag/token/".concat(e))).data,r={name:a.name,description:(null===(t=a.tags)||void 0===t?void 0:t.join(", "))||"",imageUrl:a.logoURI||"/default-token-image.png",ticker:a.symbol,mintAddress:e};o(e=>[...e,{type:"output",content:"\uD83D\uDCCA Token Information:"},{type:"image",content:r.name,imageUrl:r.imageUrl},{type:"output",content:"Name: ".concat(r.name)},{type:"output",content:"Symbol: ".concat(r.ticker)},{type:"output",content:"Tags: ".concat(r.description)}]),o(e=>[...e,{type:"output",content:"\uD83E\uDD16 Analyzing token data..."}]);let l=await c(JSON.stringify(r),"AI Assistant","#2F80ED");o(e=>[...e,{type:"output",content:"\uD83C\uDFAF Prediction Analysis:"},{type:"output",content:l.message},{type:"output",content:"\nEnter another mint address to analyze..."},{type:"input",content:">"}]),s&&n&&s.emit("chat_message",{message:"\uD83D\uDD0D Token Analysis for ".concat(r.name,"\n").concat(l.message),username:"AI Predictor",color:"#2F80ED",imageUrl:r.imageUrl})}catch(e){o(e=>[...e,{type:"error",content:"Error: Invalid mint address or token not found"},{type:"input",content:">"}])}u(!1)}};return(0,a.jsx)("div",{className:"h-full flex flex-col bg-black font-mono text-sm p-2",children:(0,a.jsxs)("div",{className:"flex-1 overflow-auto",ref:h,children:[(0,a.jsx)("div",{className:"text-green-500 mb-4",children:"Microsoft Windows [Version 10.0.19045.3803] (c) Microsoft Corporation. All rights reserved."}),(0,a.jsx)("div",{className:"text-green-500 mb-4",children:"SAVER AI Security Analysis Tool v1.0.0 Discover The Future of Safe Trading"}),i.map((e,t)=>(0,a.jsx)("div",{className:"mb-1 ".concat("error"===e.type?"text-red-500":"input"===e.type?"text-green-500":"text-white"),children:"image"===e.type?(0,a.jsxs)("div",{className:"flex items-center gap-2 my-2",children:[(0,a.jsx)("img",{src:e.imageUrl,alt:e.content,className:"w-6 h-6 rounded-full"}),(0,a.jsx)("span",{children:e.content})]}):e.content},t)),(0,a.jsxs)("div",{className:"flex items-center text-green-500",children:[(0,a.jsxs)("span",{children:["C:\\SAVER_AI",">"]}),(0,a.jsx)("input",{ref:t,type:"text",value:d,onChange:e=>m(e.target.value),onKeyPress:f,className:"flex-1 bg-transparent border-none outline-none ml-2 text-green-500",disabled:x,autoFocus:!0})]})]})})};let A=[{id:1,text:"What is the first sign of a potential rug pull?",options:["Locked liquidity","Sudden price increase","Unknown team members","Active community"],correctAnswer:2},{id:2,text:"Which security measure is most crucial before investing?",options:["Checking social media followers","Auditing contract code","Looking at token price","Reading Telegram messages"],correctAnswer:1},{id:3,text:"What indicates a potential honeypot token?",options:["High trading volume","Many holders","Cannot sell tokens","Regular marketing"],correctAnswer:2}];var C=()=>{let[e,t]=(0,r.useState)(1e3),[s,l]=(0,r.useState)(""),[i,o]=(0,r.useState)(0),[c,d]=(0,r.useState)(0),[m,x]=(0,r.useState)([]),[u,h]=(0,r.useState)(!1),p="DdKRQPRJjsoYDLtuVXJxJw9xgY65nLJjK62tC3B8pump",f=(0,r.useRef)(null),[w,k]=(0,r.useState)(!1);(0,r.useEffect)(()=>{l(new Date().toLocaleString());let e=setInterval(()=>{l(new Date().toLocaleString())},1e3);return()=>clearInterval(e)},[]);let C=e=>{let t=e===A[i].correctAnswer;x([...m,t]),t&&d(c+1),i<A.length-1?o(i+1):h(!0)},D=()=>{o(0),d(0),x([]),h(!1)},[E,z]=(0,r.useState)([{id:"terminal",title:"SafeCheck Terminal",isOpen:!0,isMinimized:!1,isMaximized:!1,zIndex:1001,icon:(0,a.jsx)(N.dok,{className:"text-white"})},{id:"community",title:"Community Chat",isOpen:!0,isMinimized:!1,isMaximized:!1,zIndex:1002,icon:(0,a.jsx)(y.a$S,{className:"text-white"})},{id:"quiz",title:"Security Quiz",isOpen:!1,isMinimized:!1,isMaximized:!1,zIndex:1003,icon:(0,a.jsx)(n.g_g,{className:"text-white"})},{id:"pumpfun",title:"Pumpfun Chart",isOpen:!1,isMinimized:!1,isMaximized:!1,zIndex:1004,icon:(0,a.jsx)("img",{src:"https://pump.fun/_next/image?url=%2Flogo.png&w=64&q=75",alt:"Pumpfun",width:24,height:24})}]),F=e=>{z(t=>t.map(t=>t.id===e?{...t,isOpen:!t.isOpen,isMinimized:!1}:t))},I=e=>{z(t=>t.map(t=>t.id===e?{...t,isMinimized:!t.isMinimized}:t))},M=e=>{z(t=>t.map(t=>t.id===e?{...t,isMaximized:!t.isMaximized}:t))},B=s=>{if(t(e=>e+1),z(t=>t.map(t=>t.id===s?{...t,zIndex:e+1}:t)),"terminal"===s){var a;null===(a=f.current)||void 0===a||a.focus()}};return(0,a.jsxs)("div",{className:"h-screen w-full bg-[#235ABD] bg-gradient-to-b from-[#235ABD] to-[#102A56] overflow-hidden flex flex-col",children:[(0,a.jsxs)("div",{className:"fixed bottom-0 left-0 w-full h-8 md:h-12 bg-gradient-to-b from-[#235ABD] to-[#1B3A6B] border-t border-[#336ED3] shadow-lg flex items-center px-1 md:px-2 z-[2000]",children:[(0,a.jsxs)("button",{className:"h-8 md:h-10 px-2 md:px-4 bg-gradient-to-b from-[#225FCA] to-[#123166] hover:from-[#2864D6] hover:to-[#1B3A6B] border-r border-[#1B3A6B] flex items-center gap-1 md:gap-2",children:[(0,a.jsx)(j.default,{src:"/saver.gif",alt:"Start",width:20,height:20,className:"md:w-6 md:h-6"}),(0,a.jsx)("span",{className:"text-white font-semibold text-xs md:text-base",children:"Start"})]}),(0,a.jsx)("div",{className:"h-full flex items-center px-0.5 md:px-1 border-r border-[#1B3A6B] overflow-x-auto",children:E.map(e=>(0,a.jsxs)("button",{onClick:()=>F(e.id),className:"h-8 md:h-10 min-w-[120px] md:min-w-[160px] px-2 md:px-3 flex items-center gap-1 md:gap-2 ".concat(e.isOpen?"bg-gradient-to-b from-[#2864D6] to-[#1B3A6B] shadow-inner":"hover:bg-white/10"," border-r border-[#1B3A6B]"),children:[(0,a.jsx)("div",{className:"w-4 h-4 md:w-6 md:h-6",children:e.icon}),(0,a.jsx)("span",{className:"text-white text-xs md:text-sm truncate",children:e.title})]},e.id))}),(0,a.jsxs)("div",{className:"ml-auto flex items-center h-full gap-2 md:gap-4",children:[(0,a.jsxs)("div",{className:"hidden sm:flex items-center gap-1 md:gap-2 px-2 md:px-4 text-white text-xs md:text-sm",children:[(0,a.jsx)("span",{children:"CA:"}),(0,a.jsx)("span",{className:"hidden md:inline",children:p}),(0,a.jsxs)("span",{className:"inline md:hidden",children:[p.slice(0,6),"...",p.slice(-4)]}),(0,a.jsx)("button",{onClick:()=>{navigator.clipboard.writeText(p),k(!0),setTimeout(()=>k(!1),2e3)},className:"hover:text-blue-300 transition-colors",children:w?(0,a.jsx)(n.l_A,{className:"w-3 h-3 md:w-4 md:h-4"}):(0,a.jsx)(n.esY,{className:"w-3 h-3 md:w-4 md:h-4"})})]}),(0,a.jsx)("div",{className:"h-full px-2 md:px-4 border-l border-[#1B3A6B] bg-gradient-to-b from-[#225FCA] to-[#123166] flex items-center",children:(0,a.jsx)("span",{className:"text-white text-xs md:text-sm",children:s})})]})]}),(0,a.jsxs)("div",{className:"p-2 md:p-4 grid grid-cols-1 gap-3 md:gap-6",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center gap-0.5 md:gap-1 w-16 md:w-24 group cursor-pointer",children:[(0,a.jsx)(j.default,{src:"/saver.gif",alt:"Saver AI",width:36,height:36,className:"group-hover:scale-105 transition-transform md:w-12 md:h-12"}),(0,a.jsx)("span",{className:"text-white text-xs md:text-sm text-center px-1 py-0.5 rounded bg-black/40 w-full",children:"Saver AI"})]}),(0,a.jsxs)("a",{href:"https://x.com/SAVERAISOL",target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center gap-0.5 md:gap-1 w-16 md:w-24 group cursor-pointer",children:[(0,a.jsx)("div",{className:"w-9 h-9 md:w-12 md:h-12 bg-black rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform",children:(0,a.jsx)(b.LCd,{className:"text-white text-lg md:text-2xl"})}),(0,a.jsx)("span",{className:"text-white text-xs md:text-sm text-center px-1 py-0.5 rounded bg-black/40 w-full",children:"X"})]}),(0,a.jsxs)("a",{href:"https://t.me/SAVERAISOL",target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center gap-0.5 md:gap-1 w-16 md:w-24 group cursor-pointer",children:[(0,a.jsx)("div",{className:"w-9 h-9 md:w-12 md:h-12 bg-[#0088cc] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform",children:(0,a.jsx)(n.Ww5,{className:"text-white text-lg md:text-2xl"})}),(0,a.jsx)("span",{className:"text-white text-xs md:text-sm text-center px-1 py-0.5 rounded bg-black/40 w-full",children:"Telegram"})]}),(0,a.jsxs)("a",{href:"https://pump.fun/"+p,target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center gap-0.5 md:gap-1 w-16 md:w-24 group cursor-pointer",children:[(0,a.jsx)("div",{className:"w-9 h-9 md:w-12 md:h-12 bg-[#1B1D28] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform",children:(0,a.jsx)("img",{src:"https://pump.fun/_next/image?url=%2Flogo.png&w=64&q=75",alt:"Pumpfun",className:"w-5 h-5 md:w-6 md:h-6"})}),(0,a.jsx)("span",{className:"text-white text-xs md:text-sm text-center px-1 py-0.5 rounded bg-black/40 w-full",children:"Pumpfun"})]})]}),E.map(e=>e.isOpen&&!e.isMinimized&&(0,a.jsx)(v(),{handle:".window-header",children:(0,a.jsxs)("div",{className:"\n                  absolute bg-[#ffffff] rounded-none shadow-xl border border-[#999999]\n                  ".concat(e.isMaximized?"w-full h-[calc(100%-48px)] top-0 left-0":"terminal"===e.id?"w-[90%] md:w-[45%] h-[70%] top-[5%] left-[5%] md:left-[2%]":"quiz"===e.id?"w-[90%] md:w-[40%] h-[60%] top-[15%] left-[5%] md:left-[30%]":"pumpfun"===e.id?"w-[90%] md:w-[50%] h-[70%] top-[10%] left-[5%] md:left-[25%]":"w-[90%] md:w-[45%] h-[70%] top-[5%] right-[5%] md:right-[2%]","\n                "),style:{zIndex:e.zIndex},onClick:()=>B(e.id),children:[(0,a.jsxs)("div",{className:"window-header flex items-center h-6 md:h-8 bg-gradient-to-b from-[#225FCA] to-[#123166] cursor-move",children:[(0,a.jsxs)("div",{className:"flex items-center gap-1 md:gap-2 px-1 md:px-2 flex-1",children:[(0,a.jsx)("div",{className:"w-4 h-4 md:w-5 md:h-5",children:e.icon}),(0,a.jsx)("span",{className:"text-white text-xs md:text-sm",children:e.title})]}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("button",{onClick:()=>I(e.id),className:"w-8 md:w-12 h-6 md:h-8 hover:bg-[#3C7BE3] flex items-center justify-center",children:(0,a.jsx)(n.PCf,{className:"text-white w-3 h-3 md:w-4 md:h-4"})}),(0,a.jsx)("button",{onClick:()=>M(e.id),className:"w-8 md:w-12 h-6 md:h-8 hover:bg-[#3C7BE3] flex items-center justify-center",children:(0,a.jsx)(n.agj,{className:"text-white w-3 h-3 md:w-4 md:h-4"})}),(0,a.jsx)("button",{onClick:()=>F(e.id),className:"w-8 md:w-12 h-6 md:h-8 hover:bg-red-500 flex items-center justify-center",children:(0,a.jsx)(n.zYX,{className:"text-white w-3 h-3 md:w-4 md:h-4"})})]})]}),(0,a.jsxs)("div",{className:"h-[calc(100%-24px)] md:h-[calc(100%-32px)] bg-black",children:["terminal"===e.id&&(0,a.jsx)("div",{className:"h-full",onClick:()=>{var e;return null===(e=f.current)||void 0===e?void 0:e.focus()},children:(0,a.jsx)(S,{inputRef:f})}),"community"===e.id&&(0,a.jsx)("div",{className:"h-full",children:(0,a.jsx)(g,{})}),"quiz"===e.id&&(0,a.jsx)("div",{className:"h-full bg-gray-900 text-white p-4 md:p-8 flex flex-col",children:u?(0,a.jsxs)("div",{className:"flex flex-col items-center justify-center h-full",children:[(0,a.jsx)("img",{src:"/saver.gif",alt:"Saver AI",className:"w-20 h-20 md:w-24 md:h-24 mb-4"}),(0,a.jsx)("h2",{className:"text-xl md:text-2xl mb-4 text-center",children:c===A.length?"\uD83C\uDF89 Perfect Score! Congratulations! \uD83C\uDF89":c>=A.length/2?"Well Done you are safe!":"Keep Learning and get safe!"}),(0,a.jsxs)("p",{className:"text-lg md:text-xl mb-4 text-center",children:["You got ",c," out of ",A.length," questions correct!"]}),(0,a.jsx)("div",{className:"mb-6 md:mb-8",children:m.map((e,t)=>(0,a.jsxs)("div",{className:"text-xs md:text-sm ".concat(e?"text-green-500":"text-red-500"),children:["Question ",t+1,":"," ",e?"Correct ✓":"Incorrect ✗"]},t))}),(0,a.jsx)("button",{onClick:D,className:"mt-2 md:mt-4 px-4 md:px-6 py-2 md:py-3 bg-blue-600 hover:bg-blue-700 rounded transition-colors text-sm md:text-base",children:"Try Again"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"flex justify-between items-center mb-4 md:mb-6",children:[(0,a.jsxs)("h2",{className:"text-lg md:text-xl",children:["Question ",i+1,"/3"]}),(0,a.jsxs)("div",{className:"text-xs md:text-sm",children:["Current Score: ",c,"/",i," correct"]})]}),(0,a.jsx)("p",{className:"text-base md:text-lg mb-6 md:mb-8",children:A[i].text}),(0,a.jsx)("div",{className:"grid grid-cols-1 gap-3 md:gap-4",children:A[i].options.map((e,t)=>(0,a.jsx)("button",{onClick:()=>C(t),className:"text-left p-3 md:p-4 bg-gray-800 hover:bg-gray-700 rounded transition-colors text-sm md:text-base",children:e},t))})]})}),"pumpfun"===e.id&&(0,a.jsxs)("div",{className:"h-full bg-gray-900 text-white p-4 md:p-8 flex flex-col",children:[(0,a.jsx)("p",{className:"text-center text-base md:text-lg mb-4",children:"Pump.fun refused to connect. Please visit the site directly."}),(0,a.jsx)("a",{href:"https://pump.fun/coin/".concat(p),target:"_blank",rel:"noopener noreferrer",className:"text-center text-blue-500 underline text-sm md:text-base",children:"Go to Pump.fun"})]})]})]})},e.id))]})}},678:function(e,t,s){"use strict";s.d(t,{q:function(){return i},s:function(){return o}});var a=s(57437),r=s(2265),n=s(68680);let l=(0,r.createContext)(void 0),i=e=>{let{children:t}=e,[s,i]=(0,r.useState)(null),[o,c]=(0,r.useState)(!1),[d,m]=(0,r.useState)([]);return(0,r.useEffect)(()=>{let e=(0,n.io)("https://socialfun-backend-production.up.railway.app",{transports:["websocket"]});return e.on("connect",()=>{console.log("Connected to backend WebSocket"),c(!0)}),e.on("disconnect",()=>{console.log("Disconnected from backend WebSocket"),c(!1)}),e.on("log",e=>{let{message:t,color:s}=e;m(e=>[...e,{message:t,color:s}])}),i(e),()=>{e.disconnect()}},[]),(0,a.jsx)(l.Provider,{value:{socket:s,isConnected:o,logs:d},children:t})},o=()=>{let e=(0,r.useContext)(l);if(!e)throw Error("useWebSocket must be used within a WebSocketProvider");return e}}},function(e){e.O(0,[665,706,240,699,560,113,766,971,117,744],function(){return e(e.s=10193)}),_N_E=e.O()}]);