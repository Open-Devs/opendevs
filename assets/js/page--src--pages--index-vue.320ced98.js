(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4Brf":function(t,e,a){"use strict";var s=a("I+eb"),i=a("g6v/"),n=a("2oRo"),o=a("UTVS"),r=a("hh1v"),l=a("m/L8").f,c=a("6JNq"),u=n.Symbol;if(i&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var d={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new u(t):void 0===t?u():u(t);return""===t&&(d[e]=!0),e};c(p,u);var m=p.prototype=u.prototype;m.constructor=p;var f=m.toString,b="Symbol(test)"==String(u("test")),g=/^Symbol\((.*)\)[^)]+$/;l(m,"description",{configurable:!0,get:function(){var t=r(this)?this.valueOf():this,e=f.call(t);if(o(d,t))return"";var a=b?e.slice(7,-1):e.replace(g,"$1");return""===a?void 0:a}}),s({global:!0,forced:!0},{Symbol:p})}},"5Tg+":function(t,e,a){var s=a("tiKp");e.f=s},"BX/b":function(t,e,a){var s=a("/GqU"),i=a("JBy8").f,n={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return o&&"[object Window]"==n.call(t)?function(t){try{return i(t)}catch(t){return o.slice()}}(t):i(s(t))}},SG1s:function(t,e,a){a("rB9j"),a("EnZy"),t.exports={validateEmail:function(t){return/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,10})$/.test(t)},validateMobile:function(t){return/^\+[1-9]{1}[0-9]{3,14}$/g.test(t)},validateName:function(t){return!(!t||t.length<3||t.length>20)},validateDescription:function(t){return t.split(" ").length<1024},validateSubject:function(t){return!(!t||t.length<7||t.length>200)}}},"dG/n":function(t,e,a){var s=a("Qo9l"),i=a("UTVS"),n=a("5Tg+"),o=a("m/L8").f;t.exports=function(t){var e=s.Symbol||(s.Symbol={});i(e,t)||o(e,t,{value:n.f(t)})}},iyQ6:function(t,e,a){"use strict";a.r(e);a("pNMO"),a("4Brf"),a("07d7"),a("sMBO");var s=a("SG1s"),i={name:"SnackBar",props:{display:{type:Boolean,default:!1},statusColor:{type:Boolean,default:!1},message:{type:String,required:!0}},methods:{clicked:function(){this.$emit("close")}}},n=a("KHd+"),o={name:"ContactUs",components:{SnackBar:Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.display?a("div",[a("div",{class:["relative","py-3","pl-4","pr-10","leading-normal","text-"+t.statusColor+"-700","bg-"+t.statusColor+"-100","rounded-lg"],attrs:{role:"alert"}},[a("p",[t._v(t._s(t.message))]),a("span",{staticClass:"absolute inset-y-0 right-0 flex items-center mr-4",on:{click:t.clicked}},[a("svg",{staticClass:"w-4 h-4 fill-current",attrs:{role:"button",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd","fill-rule":"evenodd"}})])])])]):t._e()}),[],!1,null,null,null).exports},data:function(){return{username:"",email:"",subject:"",text:"",statusColor:"",message:"",mobile:"",description:"",usernameErr:!1,emailErr:!1,subjectErr:!1,texterr:!1,mobileErr:!1,descriptionErr:!1,success:!1,display:!1}},methods:{submit:function(){var t=this;if(Object(s.validateEmail)(this.email)&&Object(s.validateMobile)(this.mobile)&&Object(s.validateName)(this.username)&&Object(s.validateDescription)(this.description)&&Object(s.validateSubject)(this.subject)){var e={Name:this.username,Email:this.email,Mobile:this.mobile||"Not provided",Subject:this.subject,Description:this.description||"Not provided"};fetch("https://sheet.best/api/sheets/245ba7e4-624e-4331-a3b1-edcbb01ee8f8",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(){return t.handleResponse(!0)}),(function(){return t.handleResponse(!1)}))}else this.changeHandler()},handleResponse:function(t){t?this.snackBarVisibility("thanks for contacting us. our team will reach out shortly",!0,"green"):this.snackBarVisibility("sorry! an error occured while submitting. try after some time",!0)},snackBarVisibility:function(t,e){this.message=t,this.statusColor=e},changeHandler:function(t){t?"username"===t.target.name?this.usernameErr=!InputValidations.validateName(this.username):"email"===t.target.name?this.emailErr=!InputValidations.validateEmail(this.email):"mobile"===t.target.name?this.mobileErr=!InputValidations.validateMobile(this.mobile):"subject"===t.target.name?this.subjectErr=!InputValidations.validateSubject(this.subject):this.descriptionErr=!InputValidations.validateDescription(this.description):(this.usernameErr=!InputValidations.validateName(this.username),this.emailErr=!InputValidations.validateEmail(this.email),this.mobileErr=!InputValidations.validateMobile(this.mobile),this.subjectErr=!InputValidations.validateSubject(this.subject),this.descriptionErr=!InputValidations.validateDescription(this.description))}}},r={components:{ContactUs:Object(n.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"contact-form"},[a("p",{staticClass:"text-lg leading-relaxed mt-4 mb-4 text-gray-500  text-center justify-center"},[t._v("\n    or let's talk directly (we won't spam, promise):\n  ")]),a("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[a("div",{staticClass:"w-full md:w-1/2 px-3 mb-6 md:mb-0"},[a("label",{staticClass:"block tracking-wide text-green-700 font-bold mb-2",attrs:{for:"full-name"}},[t._v("\n        name "),a("sup",[t._v(t._s(" ")+"*")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",attrs:{id:"full-name",type:"text",placeholder:"full name",name:"username",autocomplete:"name"},domProps:{value:t.username},on:{change:t.changeHandler,input:function(e){e.target.composing||(t.username=e.target.value)}}}),this.usernameErr?a("p",{staticClass:"text-red-500 text-xs italic"},[t._v("\n        entered name is not valid\n      ")]):t._e()]),a("div",{staticClass:"w-full md:w-1/2 px-3"},[a("label",{staticClass:"block tracking-wide text-green-700 font-bold mb-2",attrs:{for:"mobile"}},[t._v("\n        mobile\n      ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",attrs:{id:"mobile",type:"tel",placeholder:"10 digit mobile no",name:"mobile",autocomplete:"tel"},domProps:{value:t.mobile},on:{change:t.changeHandler,input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),this.mobileErr?a("p",{staticClass:"text-red-500 text-xs italic"},[t._v("\n        invalid mobile number\n      ")]):t._e()])]),a("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[a("div",{staticClass:"w-full px-3"},[a("label",{staticClass:"block tracking-wide text-green-700 font-bold mb-2",attrs:{for:"email"}},[t._v("\n        e-mail"),a("sup",[t._v(t._s(" ")+"*")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",attrs:{id:"email",type:"email",placeholder:"enter your email",name:"email",autocomplete:"email"},domProps:{value:t.email},on:{change:t.changeHandler,input:function(e){e.target.composing||(t.email=e.target.value)}}}),this.emailErr?a("p",{staticClass:"text-red-500 text-xs italic"},[t._v("\n        invalid email format\n      ")]):t._e()])]),a("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[a("div",{staticClass:"w-full px-3"},[a("label",{staticClass:"block tracking-wide text-green-700 font-bold mb-2",attrs:{for:"subject"}},[t._v("\n        subject"),a("sup",[t._v(t._s(" ")+"*")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",attrs:{placeholder:"enter the subject",id:"subject",name:"subject"},domProps:{value:t.subject},on:{change:t.changeHandler,input:function(e){e.target.composing||(t.subject=e.target.value)}}}),this.subjectErr?a("p",{staticClass:"text-red-500 text-xs italic"},[t._v("\n        subject line is not appropriate\n      ")]):t._e()])]),a("div",{staticClass:"flex flex-wrap -mx-3 mb-6"},[a("div",{staticClass:"w-full px-3"},[a("label",{staticClass:"block tracking-wide text-green-700 font-bold mb-2",attrs:{for:"message"}},[t._v("\n        description\n      ")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 h-48 resize-none",attrs:{id:"message",placeholder:"maximum limit 1024 characters",name:"description"},domProps:{value:t.description},on:{change:t.changeHandler,input:function(e){e.target.composing||(t.description=e.target.value)}}})])]),this.descriptionErr?a("p",{staticClass:"text-red-500 text-xs italic"},[t._v("\n    description can be of maximum 1024 words\n  ")]):t._e(),a("div",{staticClass:"text-center"},[a("button",{staticClass:"shadow bg-green-600 hover:bg-green-200 hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",attrs:{type:"button"},on:{click:t.submit}},[t._v("\n      send\n    ")]),a("SnackBar",{attrs:{display:t.display,statusColor:t.statusColor,message:t.message,close:t.closeSnackBar}})],1)])}),[],!1,null,null,null).exports,FollowUs:Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex text-center justify-center"},[e("div",[e("p",{staticClass:"text-lg leading-relaxed mt-4 mb-4 text-gray-500"},[this._v("\n      connect with us at:\n    ")]),e("a",{staticClass:"brand-icon text-green-400",attrs:{href:"mailto:open.devs.github@gmail.com",target:"_blank"}},[e("font-awesome",{attrs:{icon:["fas","envelope"]}})],1),e("a",{staticClass:"brand-icon text-green-400",attrs:{href:"https://github.com/open-devs",target:"_blank"}},[e("font-awesome",{attrs:{icon:["fab","github"]}})],1),e("a",{staticClass:"brand-icon text-green-400",attrs:{href:"https://dev.to/opendevs_2020",target:"_blank"}},[e("font-awesome",{attrs:{icon:["fab","dev"]}})],1),e("a",{staticClass:"brand-icon text-green-400",attrs:{href:"https://opendevs-2020.medium.com/",target:"_blank"}},[e("font-awesome",{attrs:{icon:["fab","medium"]}})],1)])])}),[],!1,null,null,null).exports},metaInfo:{title:"Home"}},l=null,c=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Layout",{attrs:{page:"home"}},[a("div",[a("main",[a("div",{staticClass:"relative pt-16 pb-32 flex content-center items-center justify-center",staticStyle:{"min-height":"75vh"}},[a("div",{staticClass:"absolute top-0 w-full h-full bg-center bg-cover"},[a("span",{staticClass:"w-full h-full absolute opacity-75 bg-blue-100",attrs:{id:"blackOverlay"}})]),a("div",{staticClass:"container relative mx-auto"},[a("div",{staticClass:"items-center flex flex-wrap"},[a("div",{staticClass:"w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"},[a("div",{staticClass:"py-4"},[a("h1",{staticClass:"font-semibold text-5xl"},[t._v("\n                  "+t._s(t.$page.metadata.siteName)+"\n                ")]),a("p",{staticClass:"mt-4 text-lg text-gray-600"},[t._v("\n                  "+t._s(t.$page.metadata.siteName)+" is an organization created by\n                  two motivated developers ("),a("a",{staticClass:"contributor",attrs:{href:"https://linkedin.com/in/mikr13"}},[t._v("@mikr13")]),t._v(",\n                  "),a("a",{staticClass:"contributor",attrs:{href:"https://linkedin.com/in/alok722"}},[t._v("@alok722")]),t._v(") building open source software to contribute to the\n                  community. we are looking forward to meet other\n                  "),a("strong",[t._v("awesome")]),t._v(" poeple and build stuff together."),a("br"),t._v("so\n                  come, join us ✌\n                ")]),a("g-link",{staticClass:"py-12",attrs:{to:"/blogs/"}},[a("button",{staticClass:"bg-black my-4 rounded-lg p-2 py-2 inline-flex items-center justify-center text-white hover:text-gray-800 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{type:"button"}},[t._v("\n                    all product blogs  "),a("font-awesome",{attrs:{icon:["fas","arrow-right"]}})],1)]),a("br"),a("g-link",{staticClass:"py-12",attrs:{to:"/people/"}},[a("button",{staticClass:"bg-black my-4 rounded-lg p-2 py-2 inline-flex items-center justify-center text-white hover:text-gray-800 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",attrs:{type:"button"}},[t._v("\n                    awesome team  "),a("font-awesome",{attrs:{icon:["fas","arrow-right"]}})],1)])],1)])])]),a("div",{staticClass:"top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden",staticStyle:{height:"70px",transform:"translateZ(0px)"}},[a("svg",{staticClass:"absolute bottom-0 overflow-hidden",attrs:{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0"}},[a("polygon",{staticClass:"text-gray-300 fill-current",attrs:{points:"2560 0 2560 100 0 100"}})])])]),a("section",{staticClass:"pb-48 pt-48 bg-gray-300 -mt-24"},[a("div",{staticClass:"container mx-auto px-4"},[a("div",{staticClass:"flex flex-wrap"},[a("div",{staticClass:"pt-6 w-full md:w-4/12 px-4 text-center"},[a("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"},[a("div",{staticClass:"px-4 py-5 flex-auto"},[a("div",{staticClass:"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"},[a("i",{staticClass:"fas fa-fingerprint"})]),a("h6",{staticClass:"text-xl font-semibold"},[t._v("\n                    open source development\n                  ")]),a("p",{staticClass:"mt-2 mb-4 text-gray-600"},[t._v("\n                    our first goal is to develop utilities & softwares for\n                    open source community that can come in help to fellow\n                    developers\n                  ")])])])]),a("div",{staticClass:"w-full md:w-4/12 px-4 text-center md:-mt-8"},[a("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"},[a("div",{staticClass:"px-4 py-5 flex-auto"},[a("h6",{staticClass:"text-xl font-semibold"},[t._v("teaching")]),a("p",{staticClass:"mt-2 mb-4 text-gray-600"},[t._v("\n                    we are spreading our learnings with other through online\n                    talks & courses with a goal to enable people to do their\n                    best work\n                  ")])])])]),a("div",{staticClass:"pt-6 w-full md:w-4/12 px-4 text-center"},[a("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"},[a("div",{staticClass:"px-4 py-5 flex-auto"},[a("div",{staticClass:"text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"},[a("i",{staticClass:"fas fa-fingerprint"})]),a("h6",{staticClass:"text-xl font-semibold"},[t._v("profile building")]),a("p",{staticClass:"mt-2 mb-4 text-gray-600"},[t._v("\n                    we are also helping people with building profiles on\n                    linkedin & other similar platforms for better professional\n                    outlook\n                  ")])])])])]),a("div",{staticClass:"flex flex-wrap items-center mt-48"},[a("div",{staticClass:"w-full md:w-5/12 px-4 mr-auto ml-auto"},[a("h3",{staticClass:"text-3xl mb-2 font-semibold leading-normal"},[t._v("\n                we want to collaborate with you\n              ")]),a("p",{staticClass:"text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"},[t._v("\n                you know something? a small project in mind? or want to teach\n                your skills?\n              ")]),a("p",{staticClass:"text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"},[t._v("\n                we can do all this together as a group of people who are\n                passionate about helping fellow developers in community\n              ")])]),a("div",{staticClass:"w-full md:w-4/12 px-4 mr-auto ml-auto"},[a("div",{staticClass:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-green-400"},[a("img",{staticClass:"w-full align-middle rounded-t-lg",attrs:{alt:"...",src:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"}}),a("blockquote",{staticClass:"relative p-8 mb-4"},[a("h4",{staticClass:"text-xl font-bold text-white"},[t._v("under one hood")]),a("p",{staticClass:"text-md font-light mt-2 text-white"},[t._v("\n                    use existing resources we have plus access to shared\n                    resources & knowledge to create & build your dream project\n                  ")])])])])])])]),a("section",{staticClass:"relative pb-48 -mt-24"},[a("div",{staticClass:"container mx-auto px-4"},[a("div",{staticClass:"items-center flex flex-wrap"},[a("div",{staticClass:"w-full md:w-4/12 ml-auto mr-auto px-4"},[a("img",{staticClass:"max-w-full rounded-lg shadow-lg",attrs:{alt:"...",src:"https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"}})]),a("div",{staticClass:"w-full md:w-5/12 ml-auto mr-auto px-4"},[a("div",{staticClass:"md:pr-12"},[a("div",{staticClass:"text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300"},[a("i",{staticClass:"fas fa-rocket text-xl"})]),a("h3",{staticClass:"text-3xl font-semibold"},[t._v("a growing team")]),a("p",{staticClass:"mt-4 text-lg leading-relaxed text-gray-600"},[t._v("\n                  we are growing with developers contributing in projects\n                  every day, we have merch on the way to showcase the love of\n                  open devs\n                ")]),a("ul",{staticClass:"list-none mt-6"},[a("li",{staticClass:"py-2"},[a("div",{staticClass:"flex items-center"},[a("div",[a("span",{staticClass:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"},[a("i",{staticClass:"fas fa-fingerprint"})])]),a("div",[a("h4",{staticClass:"text-gray-600"},[t._v("learn new technologies")])])])]),a("li",{staticClass:"py-2"},[a("div",{staticClass:"flex items-center"},[a("div",[a("span",{staticClass:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"},[a("i",{staticClass:"fab fa-html5"})])]),a("div",[a("h4",{staticClass:"text-gray-600"},[t._v("collaborate to teach")])])])]),a("li",{staticClass:"py-2"},[a("div",{staticClass:"flex items-center"},[a("div",[a("span",{staticClass:"text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3"},[a("i",{staticClass:"far fa-paper-plane"})])]),a("div",[a("h4",{staticClass:"text-gray-600"},[t._v("\n                          get more views on your profile\n                        ")])])])])])])])])])]),a("section",{staticClass:"pb-20 pt-20 relative block bg-gray-900"},[a("div",{staticClass:"container mx-auto"},[a("div",{staticClass:"flex flex-wrap items-center justify-center lg:divide-x"},[a("div",{staticClass:"w-full lg:w-4/12 ml-auto mr-auto px-12"},[a("FollowUs")],1),a("div",{staticClass:"w-full lg:w-8/12 ml-auto mr-auto px-12"},[a("ContactUs")],1)])])])])])])}),[],!1,null,null,null);"function"==typeof l&&l(c);e.default=c.exports},pNMO:function(t,e,a){"use strict";var s=a("I+eb"),i=a("2oRo"),n=a("0GbY"),o=a("xDBR"),r=a("g6v/"),l=a("STAE"),c=a("/b8u"),u=a("0Dky"),d=a("UTVS"),p=a("6LWA"),m=a("hh1v"),f=a("glrk"),b=a("ewvW"),g=a("/GqU"),v=a("wE6v"),h=a("XGwC"),x=a("fHMY"),w=a("33Wh"),y=a("JBy8"),C=a("BX/b"),k=a("dBg+"),_=a("Bs8V"),j=a("m/L8"),S=a("0eef"),E=a("kRJp"),O=a("busE"),B=a("VpIT"),N=a("93I0"),V=a("0BK2"),I=a("kOOl"),P=a("tiKp"),H=a("5Tg+"),M=a("dG/n"),T=a("1E5z"),J=a("afO8"),$=a("tycR").forEach,D=N("hidden"),U=P("toPrimitive"),L=J.set,R=J.getterFor("Symbol"),G=Object.prototype,q=i.Symbol,z=n("JSON","stringify"),A=_.f,W=j.f,Q=C.f,Z=S.f,F=B("symbols"),K=B("op-symbols"),X=B("string-to-symbol-registry"),Y=B("symbol-to-string-registry"),tt=B("wks"),et=i.QObject,at=!et||!et.prototype||!et.prototype.findChild,st=r&&u((function(){return 7!=x(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,a){var s=A(G,e);s&&delete G[e],W(t,e,a),s&&t!==G&&W(G,e,s)}:W,it=function(t,e){var a=F[t]=x(q.prototype);return L(a,{type:"Symbol",tag:t,description:e}),r||(a.description=e),a},nt=c?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof q},ot=function(t,e,a){t===G&&ot(K,e,a),f(t);var s=v(e,!0);return f(a),d(F,s)?(a.enumerable?(d(t,D)&&t[D][s]&&(t[D][s]=!1),a=x(a,{enumerable:h(0,!1)})):(d(t,D)||W(t,D,h(1,{})),t[D][s]=!0),st(t,s,a)):W(t,s,a)},rt=function(t,e){f(t);var a=g(e),s=w(a).concat(dt(a));return $(s,(function(e){r&&!lt.call(a,e)||ot(t,e,a[e])})),t},lt=function(t){var e=v(t,!0),a=Z.call(this,e);return!(this===G&&d(F,e)&&!d(K,e))&&(!(a||!d(this,e)||!d(F,e)||d(this,D)&&this[D][e])||a)},ct=function(t,e){var a=g(t),s=v(e,!0);if(a!==G||!d(F,s)||d(K,s)){var i=A(a,s);return!i||!d(F,s)||d(a,D)&&a[D][s]||(i.enumerable=!0),i}},ut=function(t){var e=Q(g(t)),a=[];return $(e,(function(t){d(F,t)||d(V,t)||a.push(t)})),a},dt=function(t){var e=t===G,a=Q(e?K:g(t)),s=[];return $(a,(function(t){!d(F,t)||e&&!d(G,t)||s.push(F[t])})),s};(l||(O((q=function(){if(this instanceof q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=I(t),a=function(t){this===G&&a.call(K,t),d(this,D)&&d(this[D],e)&&(this[D][e]=!1),st(this,e,h(1,t))};return r&&at&&st(G,e,{configurable:!0,set:a}),it(e,t)}).prototype,"toString",(function(){return R(this).tag})),O(q,"withoutSetter",(function(t){return it(I(t),t)})),S.f=lt,j.f=ot,_.f=ct,y.f=C.f=ut,k.f=dt,H.f=function(t){return it(P(t),t)},r&&(W(q.prototype,"description",{configurable:!0,get:function(){return R(this).description}}),o||O(G,"propertyIsEnumerable",lt,{unsafe:!0}))),s({global:!0,wrap:!0,forced:!l,sham:!l},{Symbol:q}),$(w(tt),(function(t){M(t)})),s({target:"Symbol",stat:!0,forced:!l},{for:function(t){var e=String(t);if(d(X,e))return X[e];var a=q(e);return X[e]=a,Y[a]=e,a},keyFor:function(t){if(!nt(t))throw TypeError(t+" is not a symbol");if(d(Y,t))return Y[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),s({target:"Object",stat:!0,forced:!l,sham:!r},{create:function(t,e){return void 0===e?x(t):rt(x(t),e)},defineProperty:ot,defineProperties:rt,getOwnPropertyDescriptor:ct}),s({target:"Object",stat:!0,forced:!l},{getOwnPropertyNames:ut,getOwnPropertySymbols:dt}),s({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(t){return k.f(b(t))}}),z)&&s({target:"JSON",stat:!0,forced:!l||u((function(){var t=q();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}))},{stringify:function(t,e,a){for(var s,i=[t],n=1;arguments.length>n;)i.push(arguments[n++]);if(s=e,(m(e)||void 0!==t)&&!nt(t))return p(e)||(e=function(t,e){if("function"==typeof s&&(e=s.call(this,t,e)),!nt(e))return e}),i[1]=e,z.apply(null,i)}});q.prototype[U]||E(q.prototype,U,q.prototype.valueOf),T(q,"Symbol"),V[D]=!0}}]);