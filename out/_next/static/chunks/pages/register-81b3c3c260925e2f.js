(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[495],{4722:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register",function(){return s(1562)}])},1562:function(e,t,s){"use strict";s.r(t);var l=s(5893),r=s(1163),a=s(7294);s(8828);var n=s(1664),i=s.n(n);t.default=()=>{let[e,t]=(0,a.useState)(""),[s,n]=(0,a.useState)(""),[o,c]=(0,a.useState)(""),u=(0,r.useRouter)(),d=async t=>{t.preventDefault();try{let t=await fetch("http://50.16.61.244/register/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:s,username:o})});if(t.ok)u.push("/home");else{let e=await t.json();alert(e.error)}}catch(e){console.error("Registration request failed:",e)}};return(0,l.jsx)("div",{className:"flex items-center justify-center min-h-screen bg-gray-100",children:(0,l.jsxs)("div",{className:"px-8 py-6 mt-4 text-left bg-white shadow-lg",children:[(0,l.jsx)("h3",{className:"text-2xl text-black font-bold text-center",children:"Register"}),(0,l.jsx)("form",{onSubmit:d,children:(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-black",htmlFor:"username",children:"Username"}),(0,l.jsx)("input",{type:"text",placeholder:"Username",id:"username",value:o,onChange:e=>c(e.target.value),required:!0,className:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none text-black focus:ring-1 focus:ring-blue-600"})]}),(0,l.jsxs)("div",{children:[(0,l.jsx)("label",{className:"block text-black",htmlFor:"email",children:"Email"}),(0,l.jsx)("input",{type:"email",placeholder:"Email",id:"email",value:e,onChange:e=>t(e.target.value),required:!0,className:"w-full px-4 py-2 mt-2 border rounded-md focus:outline-none text-black focus:ring-1 focus:ring-blue-600"})]}),(0,l.jsxs)("div",{className:"mt-4",children:[(0,l.jsx)("label",{className:"block text-black",htmlFor:"password",children:"Password"}),(0,l.jsx)("input",{type:"password",placeholder:"Password",id:"password",value:s,onChange:e=>n(e.target.value),required:!0,className:"w-full px-4 py-2 mt-2 border text-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"})]}),(0,l.jsxs)("div",{className:"flex items-baseline justify-between",children:[(0,l.jsx)("button",{type:"submit",className:"px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900",children:"Register"}),(0,l.jsx)(i(),{href:"/login",className:"px-6 py-2 mt-4 text-blue-500 underline hover:underline-offset-2",children:"Already have an account?"})]})]})})]})})}},8828:function(){},1163:function(e,t,s){e.exports=s(4546)}},function(e){e.O(0,[664,888,774,179],function(){return e(e.s=4722)}),_N_E=e.O()}]);