(this["webpackJsonpchat-application"]=this["webpackJsonpchat-application"]||[]).push([[0],{91:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var s=a(0),c=a(16),n=a.n(c),r=a(12),i=a(8),l=(a(91),a(9)),o=a(96),u=a(97),m=a(1),d=function(e){var t=Object(s.useState)(""),a=Object(l.a)(t,2),c=a[0],n=a[1],r=e.chatId,d=e.creds,j=function(e){e.preventDefault();var t=c.trim();t.length>0&&Object(i.o)(d,r,{text:t}),n("")};return Object(m.jsxs)("form",{className:"message-form",onSubmit:j,children:[Object(m.jsx)("input",{className:"message-input",placeholder:"send a message..",value:c,onChange:function(t){n(t.target.value),Object(i.l)(e,r)},onSubmit:j}),Object(m.jsx)("label",{htmlfor:"upload-button",children:Object(m.jsx)("span",{className:"image-button",children:Object(m.jsx)(o.a,{className:"picture-icon"})})}),Object(m.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onchange:function(e){Object(i.o)(d,r,{files:e.target.files,text:""})}}),Object(m.jsx)("button",{type:"submit",className:"sendt-button",children:Object(m.jsx)(u.a,{className:"send-icon"})})]})},j=function(e){var t,a=e.message;return(null===a||void 0===a||null===(t=a.attachments)||void 0===t?void 0:t.length)>0?Object(m.jsx)("img",{src:a.attachments[0].file,alt:"message-attacment",className:"message-image",style:{float:"right"}}):Object(m.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:a.text})},b=function(e){var t,a,s=e.lastMesssage,c=e.message,n=!s||s.sender.username!==c.sender.username;return Object(m.jsxs)("div",{className:"message-row",children:[n&&Object(m.jsx)("div",{className:"message-avatar",style:{backgroundImage:"url(".concat(null===c||void 0===c||null===(t=c.sender)||void 0===t?void 0:t.avatar,")")}}),(null===c||void 0===c||null===(a=c.attachments)||void 0===a?void 0:a.length)>0?Object(m.jsx)("img",{src:c.attachments[0].file,alt:"message-attacment",className:"message-image",style:{marginLeft:n?"4px":"48px"}}):Object(m.jsx)("div",{className:"message",style:{float:"left",marginRight:"18px",color:"white",backgroundColor:"#CABCDC",marginLeft:n?"4px":"48px"},children:c.text})]})},h=function(e){var t=e.chats,a=e.activeChat,s=e.userName,c=e.messages,n=t&&t[a],i=function(e,t){return n.people.map((function(a,s){var c;return a.last_read===e.id&&Object(m.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:"url(".concat(null===a||void 0===a||null===(c=a.person)||void 0===c?void 0:c.avatar,")")}},"read_".concat(s))}))};return n?Object(m.jsx)("div",{className:"chat-feed",children:Object(m.jsxs)("div",{className:"chat-title-container",children:[Object(m.jsx)("div",{className:"chat-title ",children:n.title}),Object(m.jsx)("div",{className:"chat-subtitle",children:n.people.map((function(e){return"".concat(e.person.username)}))}),function(){var e=Object.keys(c);return e.map((function(t,a){var n=c[t],r=0===a?null:e[a-1],l=s===n.sender.username;return Object(m.jsxs)("div",{style:{width:"100%"},children:[Object(m.jsx)("div",{className:"message-block",children:l?Object(m.jsx)(j,{message:n}):Object(m.jsx)(b,{message:n,lastMessage:c[r]})}),Object(m.jsx)("div",{className:"read-receipts",style:{marginRight:l?"18px":"0px",marginLeft:l?" 0px":"68px"},children:i(n,l)})]},"msg_".concat(a))}))}(),Object(m.jsx)("div",{style:{height:"100px"}}),Object(m.jsx)("div",{className:"message-form-container  ",children:Object(m.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{chatId:a}))})]})}):"Loading..."},p=a(24),g=a.n(p),x=a(40),v=a(4),O=a.n(v),f=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],n=Object(s.useState)(""),r=Object(l.a)(n,2),i=r[0],o=r[1],u=Object(s.useState)(""),d=Object(l.a)(u,2),j=d[0],b=d[1],h=function(){var e=Object(x.a)(g.a.mark((function e(t){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"a84ba77f-6344-4054-80c7-a2bc1c95a67d","User-Name":a,"User-Secret":i},e.prev=2,e.next=5,O.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",i),window.location.reload(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),b("ooops incorrect username or password");case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsxs)("div",{className:"form",children:[Object(m.jsx)("h1",{className:"title",children:" Chat Application "}),Object(m.jsxs)("form",{onSubmit:h,children:[Object(m.jsx)("input",{type:"text",value:a,onChange:function(e){return c(e.target.value)},className:"input",placeholder:"userName",required:!0}),Object(m.jsx)("input",{type:"password",value:i,onChange:function(e){return o(e.target.value)},className:"input",placeholder:"password",required:!0}),Object(m.jsx)("div",{align:"center",children:Object(m.jsx)("button",{type:"submit",className:"button",children:Object(m.jsx)("span",{children:"start chatting"})})}),Object(m.jsxs)("h2",{className:"error",children:[" ",j," "]})]})]})})},N=function(){return localStorage.getItem("username")?Object(m.jsx)(i.d,{height:"100vh",projectID:"a84ba77f-6344-4054-80c7-a2bc1c95a67d",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(m.jsx)(h,Object(r.a)({},e))}}):Object(m.jsx)(f,{})};n.a.render(Object(m.jsx)(N,{}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.556db2c8.chunk.js.map