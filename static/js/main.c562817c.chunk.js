(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,a,t){e.exports=t(44)},28:function(e,a,t){},30:function(e,a,t){},32:function(e,a,t){},34:function(e,a,t){},40:function(e,a,t){},42:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(15),r=t.n(c),o=(t(28),t(30),t(16)),i=t(17),m=t(21),s=t(18),d=t(22),u=(t(32),function(e){return l.a.createElement("button",{className:"menu-button",onClick:e.click},l.a.createElement("div",{className:"nav-icon"},l.a.createElement("svg",{width:"18",height:"11",viewBox:"0 0 18 11"},l.a.createElement("path",{fill:"","fill-rule":"evenodd",d:"M0,10 L18,10 L18,11 L0,11 L0,10 Z M0,5 L18,5 L18,6 L0,6 L0,5 Z M0,0 L18,0 L18,1 L0,1 L0,0 Z"}))))}),E=(t(34),t(2)),v=function(e){return l.a.createElement("header",null,l.a.createElement("nav",{className:"navbar_navigation row middle-xs"},l.a.createElement("div",{className:"navbar_navigation-logo col-xs-6"},l.a.createElement("div",{className:"navbar_logo"},l.a.createElement(E.b,{to:"/"},"Brian Renke")),l.a.createElement("div",{className:"navbar_icon"},l.a.createElement(E.b,{to:"/"},l.a.createElement("svg",{width:"24px",height:"24px",viewBox:"0 0 24 24"},l.a.createElement("path",{id:"path_1",fill:"","fill-rule":"evenodd",d:"M12,0 C18.6273103,0 24,5.37227587 24,12 C24,18.6273103 18.6273103,24 12,24 C5.37227587,24 0,18.6273103 0,12 C0,5.37227587 5.37227587,0 12,0 Z M12.0002086,4.48 C7.84692758,4.48 4.48,7.84683421 4.48,12 C4.48,16.1531658 7.84692758,19.52 12.0002086,19.52 C16.1534896,19.52 19.52,16.1531658 19.52,12 C19.52,7.84683421 16.1534896,4.48 12.0002086,4.48 Z"}),l.a.createElement("path",{id:"path_2",fill:"","fill-rule":"evenodd",d:"M12.0002058,5.44 C8.37723357,5.44 5.44,8.37691411 5.44,12 C5.44,15.6230859 8.37723357,18.56 12.0002058,18.56 C15.623178,18.56 18.56,15.6230859 18.56,12 C18.56,8.37691411 15.623178,5.44 12.0002058,5.44"}))))),l.a.createElement("div",{className:"navbar_navigation-links col-xs-6"},l.a.createElement(u,{click:e.sideDrawerClickHandler}),l.a.createElement("ul",null,l.a.createElement(E.b,{to:"/about"},l.a.createElement("li",null,"About")),l.a.createElement(E.b,{to:"/work"},l.a.createElement("li",null,"Work")),l.a.createElement(E.b,{to:"/contact"},l.a.createElement("li",null,"Contact"))))))},p=(t(40),function(e){var a="side-drawer";return e.show&&(a="side-drawer open"),l.a.createElement("nav",{className:a},l.a.createElement("ul",null,l.a.createElement(E.b,{to:"/about"},l.a.createElement("li",null,"About")),l.a.createElement(E.b,{to:"/work"},l.a.createElement("li",null,"Work")),l.a.createElement(E.b,{to:"/contact"},l.a.createElement("li",null,"Contact"))))}),w=(t(42),function(e){return l.a.createElement("div",{className:"backdrop",onClick:e.click})});var b=function(){return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm col-md-8"},l.a.createElement("h1",null,"Product design"),l.a.createElement("p",{class:"body-large"},"We work with people to build simple, beautiful and intelligent product solutions to complex problems."),l.a.createElement(E.b,{to:"/work",class:"primary-button"},"View Work")),l.a.createElement("div",{className:"col-sm col-md-4"},l.a.createElement("div",{className:"rectangle shadow"},l.a.createElement("div",{className:"screen"},l.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0,src:"https://d14q3brotd9flp.cloudfront.net/static/images/feed-mobile.mp4",type:"video/mp4"}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm col-md-6"},l.a.createElement("h1",null,"Understanding People"),l.a.createElement("p",{class:"body-large"},"You cannot understand good design if you do not understand people."))))};var h=function(){return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm col-md-8"},l.a.createElement("h1",null,"About"))))};var f=function(){return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm col-md-8"},l.a.createElement("h1",null,"Work"))))};var k=function(){return l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm col-md-8"},l.a.createElement("h1",null,"Contact"))))},N=t(9),C=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(l)))).state={sideDrawerOpen:!1},t.menuButtonClickHandler=function(){t.setState(function(e){return{sideDrawerOpen:!e.sideDrawerOpen}})},t.backdropClickHandler=function(){t.setState({sideDrawerOpen:!1})},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e;return this.state.sideDrawerOpen&&(e=l.a.createElement(w,{click:this.backdropClickHandler})),l.a.createElement(E.a,{basename:"/website"},l.a.createElement("div",{className:"app"},l.a.createElement(v,{sideDrawerClickHandler:this.menuButtonClickHandler}),l.a.createElement(p,{show:this.state.sideDrawerOpen}),e,l.a.createElement(N.c,null,l.a.createElement(N.a,{path:"/",exact:!0,component:b}),l.a.createElement(N.a,{path:"/about",component:h}),l.a.createElement(N.a,{path:"/work",component:f}),l.a.createElement(N.a,{path:"/contact",component:k}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,2,1]]]);
//# sourceMappingURL=main.c562817c.chunk.js.map