(window.webpackJsonp_bluehost_wordpress_plugin=window.webpackJsonp_bluehost_wordpress_plugin||[]).push([[25],{150:function(e,t,n){"use strict";n.d(t,"c",(function(){return j})),n.d(t,"b",(function(){return y})),n.d(t,"d",(function(){return g})),n.d(t,"a",(function(){return v}));var o=n(9),r=n.n(o),c=n(134),i=n.n(c),u=n(1),s=n(18),a=n.n(s),l=(n(40),n(15)),f=n(162),d=n(5),p=n(12),b=n(2),w=n(16),O=n.n(w),h=n(34);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var j=function(){var e=i()(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==document.querySelector(t)){e.next=5;break}return e.next=3,new Promise((function(e){return requestAnimationFrame(e)}));case 3:e.next=0;break;case 5:return e.abrupt("return",document.querySelector(t));case 6:case"end":return e.stop()}}),e)})));return function(_x){return e.apply(this,arguments)}}(),y=function(e,t,n){var o=g(e,t);return o&&(e[o]=Object(d.merge)(e[o],n)),e},g=function(e,t){var n=Object(d.findIndex)(e,{id:t});return-1!==n&&n},v=function(e){var t=e.type,n=e.steps,o=e.options,c=void 0===o?{}:o,i=Object(d.merge)({defaultStepOptions:{cancelIcon:{enabled:!0}},useModalOverlay:!0},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({type:t},c));return Object(u.createElement)(f.a,{steps:n,tourOptions:i},Object(u.createElement)((function(){return window.nfTour=Object(u.useContext)(f.b),function(e,t){Object(h.b)();var n,o=function(){jQuery("a.newfold-tour-relauncher").on("click",(function(e){e.preventDefault(),t.start()}))};(n=document.getElementById("newfold-editortours-loading"))&&(Object(h.c)(),n.classList.add("loaded"));var r=function(e,t){var n={action:"tour-"+e.tour.options.type,category:t,data:{step:e.id}};O()({path:"/bluehost/v1/notifications/events",method:"POST",data:n})},c={id:"newfold-tour-notice",actions:[{url:"#",label:Object(b.__)("Reopen Tour","bluehost-wordpress-plugin"),className:"newfold-tour-relauncher"}]},i=Object(d.capitalize)(t.options.type);t.on("active",(function(){Object(p.dispatch)("core/notices").removeNotice("newfold-tour-notice")})),t.on("show",(function(e){r(e,"show")})),t.on("hide",(function(){Object(p.dispatch)("core/notices").createInfoNotice(i+" "+Object(b.__)("Page tour closed.","bluehost-wordpress-plugin"),c).then((function(){o()}))})),t.on("complete",(function(e){r(e,"complete"),Object(p.dispatch)("core/notices").createSuccessNotice(i+" "+Object(b.__)("Page tour is complete!","bluehost-wordpress-plugin"),c).then((function(){o()}))})),t.on("cancel",(function(e){r(e,"cancel"),Object(p.dispatch)("core/notices").createInfoNotice(i+" "+Object(b.__)("Page tour closed. You can restart it below.","bluehost-wordpress-plugin"),c).then((function(){o()}))}))}(0,window.nfTour),window.nfTourContext===Object(l.getQueryArg)(window.location.href,"tour")?Object(u.createElement)(u.Fragment,null,window.nfTour.start()):Object(u.createElement)(u.Fragment,null)}),null))}},257:function(e,t,n){"use strict";n.r(t),n.d(t,"HomeTour",(function(){return l}));var o=n(4),r=n.n(o),c=n(1),i=n(16),u=n.n(i),s=n(15),a=n(150),l=function(){var e=Object(c.useState)(!1),t=r()(e,2),n=t[0],o=t[1],i=Object(c.useState)([]),l=r()(i,2),f=l[0],d=l[1],p=Object(s.addQueryArgs)("/newfold/v1/tours/blockeditor",{type:"home",brand:"bluehost",lang:"en-us"});return Object(c.useEffect)((function(){u()({path:p}).then((function(e){d(function(e){var t=e,n=Object(a.d)(t,"prompt"),o=Object(a.d)(t,"mostly-selling"),r=Object(a.d)(t,"mostly-sharing"),c=Object(a.d)(t,"finish-cta");return n&&(t[n].buttons[0].action=function(){window.nfTour.show("mostly-selling"),window.nfHomeSiteType="mostly-selling"},t[n].buttons[1].action=function(){window.nfTour.show("mostly-sharing"),window.nfHomeSiteType="mostly-sharing"}),o&&(t[o].buttons[1].action=function(){window.nfTour.show("finish-cta")}),r&&(t[r].buttons[0].action=function(){window.nfTour.show("prompt")}),c&&(t[c].buttons[0].action=function(){void 0!==window.nfHomeSiteType?window.nfTour.show(window.nfHomeSiteType):window.nfTour.show("prompt")}),t}(e)),o(!0)}))}),[]),!!n&&Object(c.createElement)(a.a,{type:"home",steps:f})};t.default=l}}]);