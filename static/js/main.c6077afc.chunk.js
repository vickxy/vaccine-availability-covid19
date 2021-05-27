(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{205:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(26),i=(t(90),t(52),t(9)),o=t.n(i),c=t(17),s=t(35),u=t(13),m=t(8),d=t(7),v=t(22),b=[{value:18,label:"18+"},{value:45,label:"45+"}],p=[{value:"available_capacity_dose1",label:"Dose 1"},{value:"available_capacity_dose2",label:"Dose 2"}],h=[{value:"covaxin",label:"Covaxin"},{value:"covishield",label:"Covishield"}],f=[{value:1,label:"Andaman and Nicobar Islands"},{value:2,label:"Andhra Pradesh"},{value:3,label:"Arunachal Pradesh"},{value:4,label:"Assam"},{value:5,label:"Bihar"},{value:6,label:"Chandigarh"},{value:7,label:"Chhattisgarh"},{value:8,label:"Dadra and Nagar Haveli"},{value:37,label:"Daman and Diu"},{value:9,label:"Delhi"},{value:10,label:"Goa"},{value:11,label:"Gujarat"},{value:12,label:"Haryana"},{value:13,label:"Himachal Pradesh"},{value:14,label:"Jammu and Kashmir"},{value:15,label:"Jharkhand"},{value:16,label:"Karnataka"},{value:17,label:"Kerala"},{value:18,label:"Ladakh"},{value:19,label:"Lakshadweep"},{value:20,label:"Madhya Pradesh"},{value:21,label:"Maharashtra"},{value:22,label:"Manipur"},{value:23,label:"Meghalaya"},{value:24,label:"Mizoram"},{value:25,label:"Nagaland"},{value:26,label:"Odisha"},{value:27,label:"Puducherry"},{value:28,label:"Punjab"},{value:29,label:"Rajasthan"},{value:30,label:"Sikkim"},{value:31,label:"Tamil Nadu"},{value:32,label:"Telangana"},{value:33,label:"Tripura"},{value:34,label:"Uttar Pradesh"},{value:35,label:"Uttarakhand"},{value:36,label:"West Bengal"}],E=v.b().shape({name:v.c().matches(/^[a-zA-Z ]*$/,"Name should not contain special character").required("Please enter a valid Name").min(3,"First name is too short (minimum is 3 characters)"),age:v.b().required("Please select valid age group"),notifyOn:v.c().required("Notification mode is mandatory"),mode:v.a().required("Mode is mandatory")}),g=t(1),y=t(2),O=t(5),j=t(6),w=t(84),N=t(28),S=t.n(N),x=function(e){Object(O.a)(t,e);var a=Object(j.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){var e=this.props,a=e.value,t=e.onChange,l=e.isDisabled,r=e.error,i=e.options,o=e.isMulti,c=e.isSearchable,s=e.placeholder,u=e.className,m=e.defaultValue,d=e.labelText,v=e.required,b=e.classNameOut;return n.a.createElement("div",{className:S()("form-group",b)},d?n.a.createElement("label",null,d,v?n.a.createElement("sup",null,"*"):null):null,n.a.createElement(w.a,{classNamePrefix:"select-dropdown",className:u,onChange:t,value:a,isDisabled:l,placeholder:s,options:i,isMulti:o,isSearchable:c,defaultValue:m}),r?n.a.createElement("span",{className:"error-message"},r):null)}}]),t}(l.Component),k=function(e){Object(O.a)(t,e);var a=Object(j.a)(t);function t(){return Object(g.a)(this,t),a.apply(this,arguments)}return Object(y.a)(t,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.type,l=e.placeholder,r=e.id,i=e.conditionalClass,o=e.labelText,c=e.required,s=e.className,u=e.disabled;return n.a.createElement("div",{className:S()("form-group",s)},o?n.a.createElement("label",null,o," ",c?n.a.createElement("sup",null,"*"):null):null,n.a.createElement(d.b,{name:a,type:t,id:r,placeholder:l,className:S()("form-control",i),disabled:u}),n.a.createElement(d.a,{name:a,component:"span",className:"error-message"}))}}]),t}(l.Component),C="https://covid.shopatdoor.in",F=function(e){var a=e.content;return n.a.createElement("div",{className:"btn-wrapper"},n.a.createElement("button",{type:"submit",className:"btn btn-primary custom-btn"},a))},P={name:"",age:"",notifyOn:"email",email:"",telegram:"",vaccinePref:"",mode:"1",state:"",district:"",pincode:"",dose:""},D=function(){var e=Object(l.useState)(Object(u.a)({},P)),a=Object(m.a)(e,2),t=a[0],r=a[1],i=Object(l.useState)([]),v=Object(m.a)(i,2),g=v[0],y=v[1],O=function(e,a,l){r(Object(u.a)(Object(u.a)({},t),{},Object(s.a)({},a,l))),e(a,l)},j=function(){var e=Object(c.a)(o.a.mark((function e(a){var t,l,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=8;break}return e.next=3,fetch("".concat(C,"/districts"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({state_id:a})});case 3:return t=e.sent,e.next=6,t.json();case 6:200===(null===(l=e.sent)||void 0===l?void 0:l.status)?(r=(r=null===l||void 0===l||null===(n=l.data)||void 0===n?void 0:n.districts).map((function(e){return{value:e.district_id.toString(),label:e.district_name}})),y(r)):window.alert("Something Went Wrong!");case 8:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){var e;j(null===t||void 0===t||null===(e=t.state)||void 0===e?void 0:e.value)}),[t.state]),n.a.createElement("div",null,n.a.createElement("div",{className:"box1 form-wrapper"},n.a.createElement(d.c,{initialValues:t,validationSchema:E,onSubmit:function(){var e=Object(c.a)(o.a.mark((function e(a,t){var l,n,i,c,s,m,d;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c={}).name=a.name,c.notifyOn=a.notifyOn,c.email="email"===c.notifyOn?a.email:a.telegram,c.age=null===(l=a.age)||void 0===l?void 0:l.value,c.vaccinePref=(null===(n=a.vaccinePref)||void 0===n?void 0:n.value)||"",c.mode=parseInt(a.mode),1===c.mode?c.pincode=a.pincode:2===c.mode&&(c.dist_id=null===(s=a.district)||void 0===s?void 0:s.value),c.dose=(null===(i=a.dose)||void 0===i?void 0:i.value)||"available_capacity_dose1",console.log(c),e.next=12,fetch("".concat(C,"/userinfo"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(Object(u.a)({},c))});case 12:return m=e.sent,e.next=15,m.json();case 15:200===(null===(d=e.sent)||void 0===d?void 0:d.status)?(window.alert(d.data),t.resetForm({}),r(Object(u.a)({},P))):window.alert("Something Went Wrong!");case 17:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("label",{htmlFor:"name"},"Name"),n.a.createElement(k,{id:"name",name:"name",placeholder:"Enter your name"}),n.a.createElement("div",{id:"my-radio-group"},"Notify me on"),n.a.createElement("div",{role:"group","aria-labelledby":"notifyOn"},n.a.createElement("label",null,n.a.createElement(d.b,{type:"radio",name:"notifyOn",value:"email"})," ","Email")," ",n.a.createElement("label",null,n.a.createElement(d.b,{type:"radio",name:"notifyOn",value:"telegram"})," ","Telegram")),n.a.createElement(d.a,{name:"notifyOn",component:"div",className:"error-message"}),"email"===e.values.notifyOn&&n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:"email"},"Email"),n.a.createElement(k,{id:"email",name:"email",placeholder:"Enter your Email",type:"email"})),"telegram"===e.values.notifyOn&&n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:"email"},"Telegram Chat ID",n.a.createElement("span",{className:"info"},n.a.createElement("a",{href:"https://yadav-vikesh27.medium.com/how-to-get-telegram-chat-id-and-subscribe-vaccine-availability-a9adcead093e",target:"_blank"}," ","How to get Telegram Chat ID?"))),n.a.createElement(k,{id:"telegraml",name:"telegram",placeholder:"Enter your Telegram Chat ID"})),n.a.createElement("label",{htmlFor:"age"},"Age Group"),n.a.createElement(x,{placeholder:"Select Age Group",value:null===t||void 0===t?void 0:t.age,onChange:function(a){O(e.setFieldValue,"age",a)},options:b,error:e.errors.age}),n.a.createElement("label",{htmlFor:"age"},"Vaccine Dose"),n.a.createElement(x,{placeholder:"Select Dose",value:null===t||void 0===t?void 0:t.dose,onChange:function(a){O(e.setFieldValue,"dose",a)},options:p,error:e.errors.dose}),n.a.createElement("label",{htmlFor:"vaccine"},"Vaccine Preference"),n.a.createElement(x,{placeholder:"Select your vaccine",value:null===t||void 0===t?void 0:t.vaccinePref,onChange:function(a){O(e.setFieldValue,"vaccinePref",a)},options:h}),n.a.createElement("div",{id:"my-radio-group"},"Mode"),n.a.createElement("div",{role:"group","aria-labelledby":"mode"},n.a.createElement("label",null,n.a.createElement(d.b,{type:"radio",name:"mode",value:"1"})," ","Pincode")," ",n.a.createElement("label",null,n.a.createElement(d.b,{type:"radio",name:"mode",value:"2"})," ","District")),n.a.createElement(d.a,{name:"mode",component:"div",className:"error-message"}),"1"===e.values.mode&&n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:"pincode"},"Pincode"),n.a.createElement(k,{id:"pincode",name:"pincode",placeholder:"Enter your pincode"})),"2"===e.values.mode&&n.a.createElement(n.a.Fragment,null,n.a.createElement("label",{htmlFor:"state"},"State"),n.a.createElement(x,{placeholder:"Select State",value:null===t||void 0===t?void 0:t.state,onChange:function(a){O(e.setFieldValue,"state",a)},options:f,error:e.errors.state}),n.a.createElement("label",{htmlFor:"District"},"District"),n.a.createElement(x,{placeholder:"Select District",value:null===t||void 0===t?void 0:t.district,onChange:function(a){return O(e.setFieldValue,"district",a)},options:g,error:e.errors.district})),n.a.createElement("br",null),n.a.createElement(F,{content:"Notify me"}))}))))},T={email:""},V=function(){var e=Object(l.useState)(Object(u.a)({},T)),a=Object(m.a)(e,2),t=a[0];a[1];return n.a.createElement("div",null,n.a.createElement("div",{className:"box1 form-wrapper"},n.a.createElement(d.c,{initialValues:t,onSubmit:function(){var e=Object(c.a)(o.a.mark((function e(a,t){var l,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.email){e.next=10;break}return(l={}).email=a.email,e.next=5,fetch("".concat(C,"/unsubscribe"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(Object(u.a)({},l))});case 5:return n=e.sent,e.next=8,n.json();case 8:400===(null===(r=e.sent)||void 0===r?void 0:r.status)?(window.alert(r.data),t.resetForm({})):window.alert("Something Went Wrong!");case 10:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}()},(function(e){return n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("label",{htmlFor:"email"},"Email or Telegram Chat ID"),n.a.createElement(k,{id:"email",name:"email",placeholder:"Enter your Email or Telegram Chat ID"}),n.a.createElement("br",null),n.a.createElement(F,{content:"Revoke"}))}))))},_=function(){var e=Object(l.useState)(null),a=Object(m.a)(e,2),t=a[0],r=a[1],i=function(){var e=Object(c.a)(o.a.mark((function e(a,t){var l,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(C,"/users"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});case 2:return l=e.sent,e.next=5,l.json();case 5:200===(null===(n=e.sent)||void 0===n?void 0:n.status)&&r(n.data);case 7:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){i(),setInterval((function(){i()}),5e3)}),[]),n.a.createElement("div",{className:"box2 subscription"},"Registered Users Count : ",t)},A=t(83),I=t.n(A),M=function(){return n.a.createElement("div",{className:"box2 text-center"},n.a.createElement("a",{href:"https://www.buymeacoffee.com/vikesh",target:"_blank"},n.a.createElement("img",{src:I.a,alt:"Buy me a Coffee",width:"175",height:"50"})))},W=function(){return n.a.createElement("div",{className:"container-fluid col-md-6"},n.a.createElement("div",{className:"heading"},n.a.createElement("h2",null,"Vaccine Availability"),n.a.createElement("br",null),n.a.createElement("h6",null,"Submit following details, and we'll notify you, as soon as COVID-19 vaccine is available in your area for next 7 days.")),n.a.createElement(_,null),n.a.createElement(D,null),n.a.createElement(M,null),n.a.createElement(V,null),n.a.createElement("div",{className:"box2 text-center"},"Created by ",n.a.createElement("a",{href:"https://github.com/vickxy",target:"_blank"},"Vikesh")," with \ud83d\udda4"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(r.render)(n.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},52:function(e,a,t){},83:function(e,a,t){e.exports=t.p+"static/media/bmc-button.40242a95.png"},85:function(e,a,t){e.exports=t(205)}},[[85,1,2]]]);
//# sourceMappingURL=main.c6077afc.chunk.js.map