(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2a45":function(t,e,r){},"849d":function(t,e,r){"use strict";var n=r("2a45"),o=r.n(n);o.a},a1d1:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("core-page",[r("div",{staticClass:"omapi-about-us"},[r("common-tabnav",{attrs:{active:t.currentTab,tabs:t.allTabs},on:{go:t.goTo}}),r("common-alerts",{attrs:{id:"om-plugin-alerts",alerts:t.alerts}}),"about-us"===t.currentTab?r("about-us"):t._e(),"getting-started"===t.currentTab?r("about-getting-started"):t._e(),"lite-pro"===t.currentTab?r("about-lite-vs-pro"):t._e()],1)])},o=[],a=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),c=r("2f62"),s=r("f225");function u(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(r,!0).forEach(function(e){Object(a["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var b={mixins:[s["a"]],data:function(){return{pageSlug:"about"}},computed:i({},Object(c["f"])(["error","alerts"]))},p=b,l=(r("849d"),r("2877")),g=Object(l["a"])(p,n,o,!1,null,null,null);e["default"]=g.exports},f225:function(t,e,r){"use strict";r.d(e,"a",function(){return i});r("8e6e"),r("ac6a"),r("456d");var n=r("bd86"),o=r("9b02"),a=r.n(o),c=r("2f62");function s(t,e){var r=Object.keys(t);return Object.getOwnPropertySymbols&&r.push.apply(r,Object.getOwnPropertySymbols(t)),e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(r,!0).forEach(function(e){Object(n["a"])(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(r).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}var i={mounted:function(){this.goToSelected()},watch:{$route:function(t,e){this.goTo(a()(t,"params.selectedTab"))}},computed:u({},Object(c["d"])("tabs",["settingsTab","settingsTabs"]),{allTabs:function(){return this.$store.getters["tabs/".concat(this.pageSlug,"Tabs")]},currentTab:function(){return this.$store.getters["tabs/".concat(this.pageSlug,"Tab")]},selectedTab:function(){return this.$get("$route.params.selectedTab")}}),methods:u({},Object(c["c"])("tabs",["goTab"]),{navTo:function(t){this.goTab({page:this.pageSlug,tab:t,strict:!0})},goTo:function(t){this.goTab({page:this.pageSlug,tab:t})},goToSelected:function(){this.selectedTab&&this.goTo(this.selectedTab)}})}}}]);
//# sourceMappingURL=about.3cfc460b.js.map