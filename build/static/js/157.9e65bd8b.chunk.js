"use strict";(self.webpackChunkflickanalytics=self.webpackChunkflickanalytics||[]).push([[157],{3637:function(e,s,n){n.r(s),n.d(s,{default:function(){return g}});var a=n(4165),r=n(5861),t=n(4942),l=n(1413),o=n(885),c=n(2791),i=n(364),u=n(583),m=n(4129),d=n(289),A=n.p+"static/media/pic1.eb788eefb757e6fde33d.png",f=n(1629),x=n(5810),p=n(184);var g=(0,i.$j)((function(e){return{errorMessage:e.auth.errorMessage,successMessage:e.auth.successMessage,showLoading:e.auth.showLoading}}))((function(){var e=(0,c.useState)(!1),s=(0,o.Z)(e,2),n=s[0],i=s[1],g=(0,c.useContext)(u.St),v=g.loginUser,h=g.loggedInCheck,j=(0,c.useState)({username:"",password:""}),b=(0,o.Z)(j,2),k=b[0],w=b[1],N=(0,c.useState)({movie:null}),S=(0,o.Z)(N,2),y=S[0],F=S[1],R=(0,c.useState)(!1),I=(0,o.Z)(R,2),Z=I[0],H=I[1],O=(0,c.useState)(null),D=(0,o.Z)(O,2),P=D[0],E=D[1],z=function(e){w((0,l.Z)((0,l.Z)({},k),{},(0,t.Z)({},e.target.name,e.target.value))),H(!1)},C=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(s){var n,r,t;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i(!0),s.preventDefault(),console.log(k),Object.values(k).every((function(e){return""!==e.trim()}))){e.next=7;break}return(0,m.N)("error","Error","Please Fill in all Required Fields! in"),i(!1),e.abrupt("return");case 7:if(!Z){e.next=19;break}if(null!=y.movie){e.next=12;break}return(0,m.N)("error","Error","Please Fill in all Required Fields! in"),i(!1),e.abrupt("return");case 12:return e.next=14,u.YD.post("login_multiple_case.php",(0,l.Z)((0,l.Z)({},k),y));case 14:n=e.sent,(r=n.data).success&&r.token?(localStorage.setItem("loginToken",r.token),localStorage.setItem("username",r.username),localStorage.setItem("role",r.role),localStorage.setItem("userId",r.uid),h()):(0,m.N)("error","Error",r.message),e.next=30;break;case 19:return e.next=21,v(k);case 21:if(t=e.sent,console.log(t),!t.Success){e.next=29;break}return s.target.reset(),e.next=27,h();case 27:e.next=30;break;case 29:"multiple"==t.message?(E(t.accounts),H(!0)):(0,m.N)("error","Error",t.message);case 30:i(!1);case 31:case"end":return e.stop()}}),e)})));return function(s){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:"authincation d-flex flex-column flex-lg-row flex-column-fluid",children:[(0,p.jsxs)("div",{className:"login-aside text-center  d-flex flex-column flex-row-auto",children:[(0,p.jsxs)("div",{className:"d-flex flex-column-auto flex-column pt-lg-40 pt-15",children:[(0,p.jsx)("div",{className:"text-center mb-4 pt-5",children:(0,p.jsx)("img",{src:d,alt:""})}),(0,p.jsx)("h3",{className:"mb-2",children:"Flick Analytics"}),(0,p.jsxs)("p",{children:["A one stop solution for all your analytical needs in movie production. ",(0,p.jsx)("br",{}),"Find out our best feature to track your production expenses."]})]}),(0,p.jsx)("div",{className:"aside-image",style:{backgroundImage:"url("+A+")"}})]}),(0,p.jsx)("div",{className:"container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto",children:(0,p.jsx)("div",{className:"d-flex justify-content-center h-100 align-items-center",children:(0,p.jsx)("div",{className:"authincation-content style-2",children:(0,p.jsx)("div",{className:"row no-gutters",children:n?(0,p.jsx)(x.Z,{cssOverride:{display:"flex",justifyContent:"center",alignItems:"center"}}):(0,p.jsx)("div",{className:"col-xl-12 tab-content",children:(0,p.jsx)("div",{id:"sign-in",className:"auth-form   form-validation",children:(0,p.jsxs)("form",{onSubmit:C,className:"form-validate",children:[(0,p.jsx)("h3",{className:"text-center mb-4 text-black",children:"Sign in your account"}),(0,p.jsxs)("div",{className:"form-group mb-3",children:[(0,p.jsx)("label",{className:"mb-1",htmlFor:"val-email",children:(0,p.jsx)("strong",{children:"Username"})}),(0,p.jsx)("div",{children:(0,p.jsx)("input",{type:"text",className:"form-control",value:k.username,onChange:z,placeholder:"Type Your Username",name:"username",id:"username"})})]}),(0,p.jsxs)("div",{className:"form-group mb-3",children:[(0,p.jsx)("label",{className:"mb-1",children:(0,p.jsx)("strong",{children:"Password"})}),(0,p.jsx)("input",{type:"password",name:"password",id:"password",className:"form-control",value:k.password,placeholder:"Type Your Password",onChange:z})]}),Z?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("label",{className:"mb-1",children:(0,p.jsx)("strong",{children:"Select a movie"})}),(0,p.jsx)(f.ZP,{value:y.movie,onChange:function(e){F((0,l.Z)((0,l.Z)({},y),{},{movie:e}))},options:P})]}):null,(0,p.jsx)("div",{className:"text-center form-group mb-3 my-3",children:(0,p.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",children:"Sign In"})})]})})})})})})})]})}))},289:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABLCAMAAAD+m9FVAAAA8FBMVEUAAAAAHksAH0sAev8AHksAH0sAdv8Ae/8AfP8AHkoAfP8AH0sAHkoAHUoAH0oAe/8AIEj///////////8AIEAAIEgAIFD///8Aef////8Aev8Ae/////8AH0sAHkv///8Aev8Aev////8Aev9yg5z///8AfP8AH0wAHkn///8Ae/8AfP8Aef////9idpAAHkr///////////////////8AIEza7f8Ae/+JmKz////p8/8vR2yy2f/b6/////+At/8AIUoAH0sAe/////8gO2Hv9//v8fTf4+lwtf8gi/+/3v8QLVbP1d2/x9KQnbAwSW3D8svoAAAAQXRSTlMAQN+An78Qv0CA7++QYHDfIECAEBAwEL8f75Bw389QIKBfkDD6z6+voI+Pb1Aw97Cgn3BvX1Dfz8+vr6+fcFAgH8+AlwgAAALuSURBVFjDpdZ3V+JAFAXwS0sApRlDERHFtruWXdv2Ruy65ft/m+W9SXywA5kMc/8geJB73m/ychTOKftl94oo2oZTvDfRJA24pFDljmMXSSOiFDwsne4BV/hdLJ8jllRdJLt+RNnwXA6UKxpllzE+uI9x5D5GV07D5abwGM5bHh1kGaNW4YTwCpTjF0qDd6OPDGmPVYqA+hZUdhRlF1lSi0tW1uOFUCcglCw5HMepoaxuhdyVAiRGDaeUeDzsqjc0U1aN5omPg55YS414qvzqZ1+w5piSTzx8FC8nY6cplsSjUoBFSlwS1vlSR9e2QzQDtGc9fcBaU08mkn2z1zSBWc+2rYYV/3mqnrWmBugee00oHk88lprSuuax1jSn708/ouxYa+o0QW3G41trBjRBe8XsaZ2kaMaZPK3OdWeBZp1ujNHDFZMEczVvgTx36R69otNapAnponv6pgrOIP7OKl9zwBW/qWie4Seq2OSKVE0emPZQYk/wmip659CT7PlWrCliklf89ue0J1jrUcWaHKiuWYFogJzmudykMc6C1E0rimaORzvPRZqcaBJPTnke3/NhfAMlXVMUzazn4ZY6Riyx0JAn/sl/fNJuq57KPI14vvIYnwOkRAYQzZTnCx/o7YOP1ISaJg559u6o4+mR9i0t8XKIRj64+a3G4D+E9hr2qDFGP6q8b0tpgjOquNtL9q2bWbOKJCe85fc3k4/KEXsya0LEuehRx59n6vVMnpyukWf+NF7lbYOnOE8z3KeO/SFTxWOlaTFlFKhm8dhoLq4p52rfzB7RbIlGHUcLFN1j1jSBoMOP7FAG5W72NAwannsADDfVkYIjng35V8Wgqccd7wLE0T1mzUmPOyDRPEbNJXesQaJ5jJqP13oHKponVXMqHWaP/gttuvzVOzj5VI+sem3yenMnHRYe0RxOOu6lw8qzJRqtw+jRNc/SYeupVyjA1eqvlA6EFUoOKFB2sCCBdDhkRB3O+d7CcvkHukdZgSu7XIoAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=157.9e65bd8b.chunk.js.map