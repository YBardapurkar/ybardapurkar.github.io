(this.webpackJsonpportfolio_react=this.webpackJsonpportfolio_react||[]).push([[0],[,,,,,,,function(e,t,s){},,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(10),i=s.n(a),r=(s(15),s(16),s(2)),l=s(3),j=s(5),o=s(4),d=(s(17),s(6)),h=(s(18),s(7),s(0)),b=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("header",{className:"header",children:Object(h.jsxs)("div",{className:"container clearfix",children:[Object(h.jsx)("img",{className:"profile-image img-fluid float-left",src:"./profile-pic.jpg",alt:"Yash Bardapurkar"}),Object(h.jsxs)("div",{className:"profile-content float-left",children:[Object(h.jsx)("h1",{className:"name",children:"Yash Bardapurkar"}),Object(h.jsx)("h2",{className:"desc",children:"Software Developer"}),Object(h.jsxs)("ul",{className:"social list-inline",children:[Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsx)("span",{className:"level-label","data-toggle":"tooltip","data-placement":"top","data-animation":"true",title:"LinkedIn",children:Object(h.jsx)("a",{href:"https://www.linkedin.com/in/yash-bardapurkar-6859b488/",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)(d.f,{})})})}),Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsx)("span",{className:"level-label","data-toggle":"tooltip","data-placement":"top","data-animation":"true",title:"GitHub",children:Object(h.jsx)("a",{href:"https://github.com/YBardapurkar",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)(d.c,{})})})}),Object(h.jsx)("li",{className:"list-inline-item",children:Object(h.jsx)("span",{className:"level-label","data-toggle":"tooltip","data-placement":"top","data-animation":"true",title:"GitHub",children:Object(h.jsx)("a",{href:"mailto:ybardapurkar@gmail.com",target:"_blank",rel:"noopener noreferrer",children:Object(h.jsx)(d.h,{})})})})]})]})]})})}}]),s}(c.Component),m=(s(20),function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("section",{className:"experience section",children:Object(h.jsxs)("div",{className:"section-inner shadow-sm rounded",children:[Object(h.jsx)("h2",{className:"heading",children:"Work Experience"}),Object(h.jsx)("div",{className:"content",children:this.props.experience.map((function(e){return Object(h.jsx)(O,{job_title:e.job_title,company_name:e.company_name,company_location:e.company_location,company_url:e.company_url,start_date:e.start_date,end_date:e.end_date,description:e.description},e.id)}))})]})})}}]),s}(c.Component)),O=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("h3",{className:"title",children:[this.props.job_title,Object(h.jsx)("br",{}),Object(h.jsx)("span",{className:"place",children:Object(h.jsxs)("a",{href:this.props.company_url,target:"_blank",rel:"noopener noreferrer",children:[this.props.company_name," - ",this.props.company_location]})}),Object(h.jsx)("span",{className:"year",children:"(Aug 2016 - Apr 2018)"})]}),Object(h.jsx)("ul",{children:this.props.description.map((function(t){return Object(h.jsx)("li",{children:t},e.props.description.indexOf(t))}))})]})}}]),s}(c.Component),p=m,u=(s(21),function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("section",{className:"projects section",children:Object(h.jsxs)("div",{className:"section-inner shadow-sm rounded",children:[Object(h.jsx)("h2",{className:"heading",children:"Projects"}),Object(h.jsx)("div",{className:"content",children:this.props.projects.map((function(e){return Object(h.jsx)(x,{title:e.title,image:e.image,description:e.description,links:e.links},e.id)}))})]})})}}]),s}(c.Component)),x=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col-md-4 col-12",children:Object(h.jsx)("img",{className:"img-fluid project-image",src:this.props.image,alt:this.props.title})}),Object(h.jsxs)("div",{className:"desc col-md-8 col-12",children:[Object(h.jsx)("h3",{className:"title",children:this.props.title}),Object(h.jsx)("ul",{className:"mb-2",children:this.props.description.map((function(t){return Object(h.jsx)("li",{children:t},e.props.description.indexOf(t))}))}),Object(h.jsx)("p",{className:"links",children:this.props.links.map((function(e){return Object(h.jsx)(f,{type:e.type,label:e.label,url:e.url},e.id)}))})]})]})]})}}]),s}(c.Component),f=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"renderLink",value:function(e){switch(e){case"github":return Object(h.jsx)(d.c,{});case"youtube":return Object(h.jsx)(d.i,{});case"info":return Object(h.jsx)(d.e,{});default:return Object(h.jsx)(d.b,{})}}},{key:"render",value:function(){return Object(h.jsx)("span",{className:"level-label","data-toggle":"tooltip","data-placement":"top","data-animation":"true",title:this.props.label,children:Object(h.jsx)("a",{className:"more-link",href:this.props.url,target:"_blank",rel:"noopener noreferrer",children:this.renderLink(this.props.type)})})}}]),s}(c.Component),N=u,v=(s(22),function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("aside",{className:"education aside section",children:Object(h.jsxs)("div",{className:"section-inner shadow-sm rounded",children:[Object(h.jsx)("h2",{className:"heading",children:"Education"}),Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("h3",{className:"title",children:[Object(h.jsx)(d.d,{className:"icon"})," MS - Computer Science"]}),Object(h.jsxs)("h4",{className:"university",children:[Object(h.jsx)("a",{href:"https://www.uta.edu/",target:"_blank",rel:"noopener noreferrer",children:"University of Texas at Arlington"}),Object(h.jsx)("span",{className:"year",children:" (2019 - Present)"})]})]}),Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("hr",{}),Object(h.jsxs)("h3",{className:"title",children:[Object(h.jsx)(d.d,{className:"icon"})," BE (Hons) - Electronics and Instrumentation"]}),Object(h.jsxs)("h4",{className:"university",children:[Object(h.jsx)("a",{href:"https://www.bits-pilani.ac.in/goa/",target:"_blank",rel:"noopener noreferrer",children:"Birla Institute of Technology and Science, Pilani - K K Birla Goa Campus"}),Object(h.jsx)("span",{className:"year",children:" (2012 - 2016)"})]})]})]})]})})}}]),s}(c.Component)),g=(s(23),function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("aside",{className:"info aside section",children:Object(h.jsxs)("div",{className:"section-inner shadow-sm rounded",children:[Object(h.jsx)("h2",{className:"heading sr-only",children:"Basic Information"}),Object(h.jsx)("div",{className:"content",children:Object(h.jsxs)("ul",{className:"list-unstyled",children:[Object(h.jsxs)("li",{children:[Object(h.jsx)(d.g,{className:"icon"}),Object(h.jsx)("span",{className:"sr-only",children:"Location:"}),"Arlington, TX"]}),Object(h.jsxs)("li",{children:[Object(h.jsx)(d.a,{className:"icon"}),Object(h.jsx)("span",{className:"sr-only",children:"Email:"}),Object(h.jsx)("a",{href:"mailto:ybardapurkar@gmail.com",children:"ybardapurkar@gmail.com"})]})]})})]})})}}]),s}(c.Component)),y=(s(24),function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("aside",{className:"skills aside section",children:Object(h.jsxs)("div",{className:"section-inner shadow-sm rounded",children:[Object(h.jsx)("h2",{className:"heading",children:"Skills"}),Object(h.jsx)("div",{className:"content",children:Object(h.jsxs)("div",{className:"skillset",children:[Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("hr",{}),"Languages",Object(h.jsx)("h3",{className:"level-title",children:"Java, Python, PHP, JavaScript"})]}),Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("hr",{}),"Tools",Object(h.jsx)("h3",{className:"level-title",children:"Android SDK, Selenium"})]}),Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("hr",{}),"Frameworks",Object(h.jsx)("h3",{className:"level-title",children:"React, CodeIgniter (PHP), Flask (Python), Spring MVC (Java)"})]}),Object(h.jsxs)("div",{className:"item",children:[Object(h.jsx)("hr",{}),"Cloud Platforms",Object(h.jsx)("h3",{className:"level-title",children:"AWS, Microsoft Azure, IBM Cloud"})]})]})})]})})}}]),s}(c.Component)),k=(s(25),function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("aside",{className:"languages aside section",children:Object(h.jsxs)("div",{className:"section-inner shadow-sm rounded",children:[Object(h.jsx)("h2",{className:"heading",children:"Languages"}),Object(h.jsx)("div",{className:"content",children:Object(h.jsxs)("ul",{className:"list-unstyled",children:[Object(h.jsxs)("li",{className:"item",children:[Object(h.jsx)("hr",{}),Object(h.jsx)("span",{className:"title",children:Object(h.jsx)("strong",{children:"English: "})}),Object(h.jsxs)("span",{className:"level",children:["Professional",Object(h.jsx)("br",{className:"visible-xs"})]})]}),Object(h.jsxs)("li",{className:"item",children:[Object(h.jsx)("hr",{}),Object(h.jsx)("span",{className:"title",children:Object(h.jsx)("strong",{children:"Hindi: "})}),Object(h.jsxs)("span",{className:"level",children:["Native",Object(h.jsx)("br",{className:"visible-sm visible-xs"})]})]}),Object(h.jsxs)("li",{className:"item",children:[Object(h.jsx)("hr",{}),Object(h.jsx)("span",{className:"title",children:Object(h.jsx)("strong",{children:"Marathi: "})}),Object(h.jsx)("span",{className:"level",children:"Native"})]})]})})]})})}}]),s}(c.Component)),w=(s(26),function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsx)("aside",{className:"awards aside section",children:Object(h.jsxs)("div",{className:"section-inner shadow-sm rounded",children:[Object(h.jsx)("h2",{className:"heading",children:"Awards"}),Object(h.jsx)("div",{className:"content",children:Object(h.jsx)("ul",{className:"list-unstyled",children:Object(h.jsxs)("li",{className:"item",children:[Object(h.jsx)("hr",{}),Object(h.jsx)("p",{children:Object(h.jsx)("span",{className:"title",children:Object(h.jsx)("strong",{children:Object(h.jsx)("a",{href:"https://www.bitsaa.org/page/prof-suresh-ramaswamy-memorial-award",children:"Prof. Suresh Ramaswamy Memorial Award 2015-16"})})})}),Object(h.jsxs)("span",{className:"level",children:['Recipient of the "Prof. Suresh Ramaswamy Memorial Award 2015-16", for the team project titled "HITCH: an interactive platform that facilitates communication, remote control and local positioning/tracking system for mobile devices".',Object(h.jsx)("br",{className:"visible-xs"})]})]})})})]})})}}]),s}(c.Component)),_=function(e){Object(j.a)(s,e);var t=Object(o.a)(s);function s(){var e;return Object(r.a)(this,s),(e=t.call(this)).state={projects:[{id:0,title:"",description:[],links:[{id:0,type:"",label:"",url:""}]}],experience:[{id:0,job_title:"",company_name:"",company_location:"",company_url:"",start_date:"",end_date:"",description:[]}]},e}return Object(l.a)(s,[{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(b,{}),Object(h.jsx)("div",{className:"container sections-wrapper",children:Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"primary col-lg-8 col-12",children:[Object(h.jsx)(p,{experience:this.state.experience}),Object(h.jsx)(N,{projects:this.state.projects})]}),Object(h.jsxs)("div",{className:"secondary col-lg-4 col-12",children:[Object(h.jsx)(g,{}),Object(h.jsx)(v,{}),Object(h.jsx)(y,{}),Object(h.jsx)(w,{}),Object(h.jsx)(k,{})]})]})})]})}},{key:"componentDidMount",value:function(){var e=this;fetch("./projects_data.json").then((function(e){return e.json()})).then((function(t){t.reverse(),e.setState({projects:t})})),fetch("./experience_data.json").then((function(e){return e.json()})).then((function(t){t.reverse(),e.setState({experience:t})}))}}]),s}(c.Component),C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,32)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};s(9),s(27);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(_,{})}),document.getElementById("root")),C()}],[[30,1,2]]]);
//# sourceMappingURL=main.91f6809f.chunk.js.map