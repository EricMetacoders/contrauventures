(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["campaigns"],{"0e4b":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("core-page",{staticClass:"omapi-campaign-table"},[a("h1",{staticClass:"wp-heading-inline"},[t._v("Campaigns")]),a("core-button",{staticClass:"omapi-add-new",attrs:{routerTo:"templates",size:"small"}},[t._v("Add New")]),t.connected?a("common-alerts",{attrs:{alerts:t.alerts}}):t._e(),a("transition",{attrs:{name:"fade",mode:"out-in"}},[t.connected||t.isLoading?t.showNoCampaigns?a("campaigns-no-campaigns"):a("div",{staticStyle:{position:"relative"}},[a("campaigns-table-filters",{attrs:{isBulk:0<t.bulk.length,actionKey:t.actionKey},on:{setAction:t.setAction}}),a("campaigns-table",{attrs:{campaigns:t.campaignsToShow,isBulk:0<t.bulk.length,actionKey:t.actionKey,isRefreshing:t.isRefreshing||t.isLoading},on:{setAction:t.setAction}}),t.isLoading?a("core-loading",{staticStyle:{position:"absolute",top:"128px",opacity:".2"}}):t._e()],1):a("campaigns-not-connected")],1)],1)},n=[],i=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),c=(a("386d"),a("9b02")),o=a.n(c),r=a("2f62");function h(t,e){var a=Object.keys(t);return Object.getOwnPropertySymbols&&a.push.apply(a,Object.getOwnPropertySymbols(t)),e&&(a=a.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(a,!0).forEach(function(e){Object(i["a"])(t,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(a).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))})}return t}var p={inheritAttrs:!1,data:function(){return{actionKey:"none"}},beforeRouteLeave:function(t,e,a){"campaigns"!==o()(t,"meta.parent")&&"campaigns"!==o()(t,"name")&&this.updatePageVars(),a()},watch:{$route:function(t,e){this.updatePageVars(t),this.refreshDashboard().catch(function(){})}},mounted:function(){this.setPageVars({page:this.$get("$route.params.campaignsPage",this.page),search:this.$get("$route.params.searchTerm",this.search)}),this.isLoading||this.initRequests(),this.$bus.$on("fetchedMe",this.initRequests)},beforeDestroy:function(){this.$bus.$off("fetchedMe",this.initRequests)},computed:u({},Object(r["d"])(["connected","isFetched","shouldFetchUser"]),{},Object(r["d"])("campaigns",["campaignsWithSplits"]),{},Object(r["f"])(["alerts"]),{},Object(r["f"])("campaigns",["bulk","page","search","totalCampaignsCount"]),{isLoading:function(){return this.shouldFetchUser||this.$store.getters.isLoading("campaigns")},isRefreshing:function(){return this.$store.getters.isLoading("campaigns-refresh")},campaignsToShow:function(){return this.connected?this.campaignsWithSplits:[]},hasCampaigns:function(){return 0<this.totalCampaignsCount},showNoCampaigns:function(){return!this.hasCampaigns&&!this.isLoading&&this.isFetched("mainQuery")}}),methods:u({},Object(r["c"])("campaigns",["setPageVars","refreshDashboard","fetchRulesetData"]),{initRequests:function(){this.refreshDashboard().catch(function(){}),this.fetchRulesetData()},setAction:function(t){this.actionKey=t},updatePageVars:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.setPageVars({page:o()(t,"params.campaignsPage",1),search:o()(t,"params.searchTerm","")})}})},g=p,f=(a("3a1f"),a("2877")),l=Object(f["a"])(g,s,n,!1,null,null,null);e["default"]=l.exports},"0f3c":function(t,e,a){},"3a1f":function(t,e,a){"use strict";var s=a("0f3c"),n=a.n(s);n.a}}]);
//# sourceMappingURL=campaigns.3aad5574.js.map