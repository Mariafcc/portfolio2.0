(this.webpackJsonpMariaCruzWebDev=this.webpackJsonpMariaCruzWebDev||[]).push([[0],{29:function(e,a,t){e.exports=t.p+"static/media/skindex.234ae567.png"},30:function(e,a,t){e.exports=t.p+"static/media/uxui.ceb49e9e.png"},31:function(e,a,t){e.exports=t.p+"static/media/fitUp.eb61c492.png"},34:function(e,a,t){e.exports=t(50)},39:function(e,a,t){},40:function(e,a,t){},50:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(12),r=t.n(i),c=(t(39),t(6)),o=t(7),l=t(9),m=t(8),d=t(21),u=t.n(d),p=(t(40),t(20)),h=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.sharedData)var e=this.props.sharedData.name,a=this.props.sharedData.title.toUpperCase(),t=this.props.sharedData.email;return s.a.createElement("header",{id:"home",style:{height:"400px",display:"block"}},s.a.createElement("div",{className:"row aligner",style:{height:"100%"}},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",null,s.a.createElement("span",{className:"iconify header-icon","data-icon":"grommet-icons:code","data-inline":"false"}),s.a.createElement("br",null),s.a.createElement("h1",{className:"mb-0"},s.a.createElement(p.a,{steps:[e],wrapper:"p"})),s.a.createElement(p.a,{className:"title-styles",steps:[a],wrapper:"p"}),s.a.createElement(p.a,{className:"title-styles",steps:[t],wrapper:"p"})))))}}]),t}(n.Component),f=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return s.a.createElement("span",{key:e.name,className:"m-4"},s.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("i",{className:e.class})))}));return s.a.createElement("footer",null,s.a.createElement("div",{className:"col-md-12"},s.a.createElement("p",{style:{fontSize:" 25px"}}," Get in contact with me!"),s.a.createElement("div",{className:"social-links"},e)))}}]),t}(n.Component),E=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){if(this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.about,a=this.props.resumeBasicInfo.description_header,t=this.props.resumeBasicInfo.description;return s.a.createElement("section",{id:"about"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{style:{color:"black"}},s.a.createElement("span",null,e)),s.a.createElement("div",{className:"row center mx-auto mb-5"},s.a.createElement("div",{className:"col-md-4 mb-5 center"},s.a.createElement("div",{className:"polaroid"},s.a.createElement("span",{style:{cursor:"auto"}},s.a.createElement("img",{height:"300px",src:"https://avatars.githubusercontent.com/u/66399861?v=4",alt:"Portfolio Image"})))),s.a.createElement("div",{className:"col-md-8 center"},s.a.createElement("div",{className:"col-md-10"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-header"}),s.a.createElement("div",{className:"card-body font-trebuchet text-justify ml-3 mr-3",style:{height:"auto",fontSize:"132%",lineHeight:"200%"}},s.a.createElement("br",null),s.a.createElement("span",{className:"wave"},a,", "),s.a.createElement("br",null),s.a.createElement("br",null),t)))))))}}]),t}(n.Component),g=t(53),v=(t(42),t(45),n.Component,t(29)),b=t.n(v),y=t(30),w=t.n(y),k=t(31),N=t.n(k),x=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={deps:{},detailsModalShow:!1},n}return Object(o.a)(t,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)this.props.resumeBasicInfo.section_name.projects,this.props.resumeProjects.map((function(a){return s.a.createElement("div",{className:"col-sm-12 col-md-6 col-lg-4",key:a.title,style:{cursor:"pointer"}},s.a.createElement("span",{className:"portfolio-item d-block"},s.a.createElement("div",{className:"foto",onClick:function(){return t=a,void e.setState({detailsModalShow:!0,deps:t});var t}},s.a.createElement("div",null,s.a.createElement("img",{src:a.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),s.a.createElement("br",null),s.a.createElement("p",{className:"project-title-settings mt-3"},a.title)))))}));return s.a.createElement("div",{id:"portfolio"},s.a.createElement("h1",{style:{textAlign:"center"}},"Projects"),s.a.createElement("section",null,s.a.createElement("div",{className:"flex-container"},s.a.createElement("div",{className:"bxs container"},s.a.createElement("p",{style:{fontSize:"25px"}},"|UX/UI|"),s.a.createElement("img",{className:"image",src:w.a,alt:"Logo",style:{display:" block",width:"100%",height:"300px"}}),s.a.createElement("div",{class:"middle"},s.a.createElement("div",{class:"text",style:{fontSize:"8px"}},"This design is meant for users that are interested in taking beach vacation but do not know where to go. With a study i have found that users mainly go to vacations based on family or friends recommendation. If a booking site adds a feature like this it will increase the time spent on site as well as the amount of items booked with the site.")),s.a.createElement("a",{className:"a",href:"https://www.figma.com/proto/xHETWAMtWNLrN3LdxcI6yI/Untitled?node-id=65%3A107&scaling=scale-down&page-id=6%3A4951"},"Prototype"),s.a.createElement("div",null,s.a.createElement("a",{className:"a",href:"https://www.figma.com/file/xHETWAMtWNLrN3LdxcI6yI/Untitled?node-id=6%3A4951"},"Figma"))),s.a.createElement("div",{className:"bxs container"},s.a.createElement("p",{style:{fontSize:"25px"}},"SkinDex"),s.a.createElement("img",{className:"image",src:b.a,alt:"Logo",style:{display:" block",width:"100%",height:"300px"}}),s.a.createElement("div",{class:"middle"},s.a.createElement("div",{class:"text",style:{fontSize:"10px"}},"Will allow users to take quiz that shows them a skincare routine base on their answers. This is my most extensive project, i used a lot of technologies and created the API.")),s.a.createElement("a",{className:"a",href:"https://skindex.herokuapp.com"},"Application"),s.a.createElement("div",null,s.a.createElement("a",{className:"a",href:"https://github.com/Mariafcc/skindex"},"Github"))),s.a.createElement("div",{className:"bx container"},s.a.createElement("p",{style:{fontSize:"25px"}},"FitUp"),s.a.createElement("img",{className:"image",src:N.a,alt:"Logo",style:{display:" block",width:"100%",height:"300px"}}),s.a.createElement("div",{class:"middle"},s.a.createElement("div",{class:"text",style:{fontSize:"10px"}},"FitUp can be used to design your next workout.User is given a choice of indoor or outdoor workout and given options to add workouts and save them.")),s.a.createElement("a",{className:"a",href:"http:project-two-2020.herokuapp.com"},"Application"),s.a.createElement("div",null,s.a.createElement("a",{className:"a",href:"https://github.com/Mariafcc/FitUp-1"},"Github"))))))}}]),t}(n.Component),j=t(32),D=t(33),I=t.n(D),O=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){var e={animation:j.animations.slide};if(this.props.sharedSkills&&this.props.resumeBasicInfo)var a=this.props.resumeBasicInfo.section_name.skills,t=this.props.sharedSkills.icons.map((function(e,a){return s.a.createElement("li",{className:"list-inline-item mx-3",key:a},s.a.createElement("span",null,s.a.createElement("div",{className:"text-center skills-tile"},s.a.createElement("i",{className:e.class,style:{fontSize:"220%"}},s.a.createElement("p",{className:"text-center",style:{fontSize:"30%",marginTop:"4px"}},e.name)))))}));return s.a.createElement("section",{id:"skills"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("div",{className:"col-md-12"},s.a.createElement("h1",{className:"section-title"},s.a.createElement("span",{className:"text-white"},a))),s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement(I.a,{left:!0},s.a.createElement("ul",{className:"list-inline mx-auto skill-icon",style:e},t)))))}}]),t}(n.Component),S=function(e){Object(l.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},n}return Object(o.a)(t,[{key:"applyPickedLanguage",value:function(e){document.documentElement.lang=e;var a=document.documentElement.lang===window.$primaryLanguage?"res_primaryLanguage.json":"res_secondaryLanguage.json";this.loadResumeFromPath(a)}},{key:"componentDidMount",value:function(){this.loadSharedData(),this.applyPickedLanguage(window.$primaryLanguage)}},{key:"loadResumeFromPath",value:function(e){u.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,a,t){console.log(t)}})}},{key:"loadSharedData",value:function(){u.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name," | ").concat(this.state.sharedData.basic_info.title)}.bind(this),error:function(e,a,t){console.log(t)}})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(h,{sharedData:this.state.sharedData.basic_info}),s.a.createElement("div",{className:"col-md-12 mx-auto text-center language"},s.a.createElement("div",null,s.a.createElement("a",{href:"mailto:mariafcc01@gmail.com"},s.a.createElement("span",{className:"iconify language-icon mr-5","data-icon":"ic:outline-email","data-inline":"false",style:{color:"black"}})),s.a.createElement("a",{href:"https://www.linkedin.com/in/mariafernandacruz/"},s.a.createElement("span",{className:"iconify language-icon mr-5","data-icon":"cib:linkedin","data-inline":"false",style:{color:"black"}})),s.a.createElement("a",{href:"https://github.com/Mariafcc"},s.a.createElement("span",{className:"iconify language-icon mr-5","data-icon":"cib:github","data-inline":"false",style:{color:"black"}})))),s.a.createElement(E,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),s.a.createElement(x,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(O,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),s.a.createElement(f,{sharedBasicInfo:this.state.sharedData.basic_info}))}}]),t}(n.Component),B=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(49);window.$primaryLanguage="en",r.a.render(s.a.createElement(S,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/portfolio2.0",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("/portfolio2.0","/service-worker.js");B?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_(a,e)}))}}()}},[[34,1,2]]]);
//# sourceMappingURL=main.eebd5612.chunk.js.map