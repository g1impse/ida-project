(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{186:function(e,t,n){var content=n(201);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(51).default)("05f6ff73",content,!0,{sourceMap:!1})},200:function(e,t,n){"use strict";var r=n(186),c=n.n(r);t.default=c.a},201:function(e,t,n){(t=n(50)(!1)).push([e.i,'.vehicle_1Y_W2{background:#fff;margin:44px auto;display:-ms-grid;display:grid;grid-template-columns:700px 1fr;-ms-grid-columns:700px 64px auto;grid-column-gap:64px}@media screen and (max-width:1400px){.vehicle_1Y_W2{grid-template-columns:50% 1fr;-ms-grid-columns:50% 40px 1fr;grid-column-gap:40px}}@media screen and (max-width:1264px){.vehicle_1Y_W2{grid-template-columns:40% 1fr;grid-column-gap:32px}}@media screen and (max-width:900px){.vehicle_1Y_W2{display:block;margin:30px auto}}@media screen and (max-width:680px){.vehicle_1Y_W2{margin:20px auto}}.image_1qd_B{border-radius:24px;max-width:712px;max-height:700px;width:100%;height:auto}@media screen and (max-width:900px){.image_1qd_B{display:block;margin:0 auto}}.block_1-3vs{position:relative;-ms-grid-column:3}@media screen and (max-width:900px){.block_1-3vs{padding-bottom:110px}}.title_jeGjZ{font-weight:500;font-size:40px;line-height:120%;color:#012345}@media screen and (max-width:900px){.title_jeGjZ{margin-top:32px;font-size:32px}}@media screen and (max-width:680px){.title_jeGjZ{margin-top:22px;font-size:24px;line-height:120%}}.tabs_3qkuk{margin:32px 0;display:flex}@media screen and (max-width:900px){.tabs_3qkuk{margin-top:16px;margin-bottom:20px}}.tab_kDPQ6{font-weight:500;font-size:16px;line-height:14px;color:#677b8f;margin-right:32px;text-decoration:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media screen and (max-width:900px){.tab_kDPQ6{margin-right:20px}}.tab_kDPQ6.active_1NNwm{color:#4959ff}.tab_kDPQ6:last-child{margin-right:0}.pink_1t2O4{color:#f84ab3;font-weight:500}.rent_1FeSS{margin-top:45px;display:flex;justify-content:space-between;align-items:center;padding:16px 32px;background:#f3f4f7;border-radius:16px}@media screen and (max-width:900px){.rent_1FeSS{margin-top:0;padding:12px 24px;bottom:32px;left:16px;right:16px;z-index:1}}@media screen and (max-width:900px){.rent_1FeSS,.rent-wrap_3MjfG{position:fixed}}@media screen and (max-width:900px){.rent-wrap_3MjfG:before{background:linear-gradient(180deg,hsla(0,0%,98.8%,0),#fcfcfc);height:34px;bottom:92px}}@media screen and (max-width:900px){.rent-wrap_3MjfG:after,.rent-wrap_3MjfG:before{position:fixed;content:"";width:100%;left:0;z-index:-1}.rent-wrap_3MjfG:after{background:#fcfcfc;height:92px;bottom:0}}.rent-text_11RYZ{font-weight:500;font-size:20px;line-height:140%;color:#012345}@media screen and (max-width:900px){.rent-text_11RYZ{font-size:16px;line-height:140%}}.dark .vehicle_1Y_W2{background:#012345}.dark .title_jeGjZ{color:#fff}.dark .tab_kDPQ6{color:#99a7b5}.dark .tab_kDPQ6.active_1NNwm{color:#4959ff}.dark .rent_1FeSS{background:#011c37}.dark .rent-text_11RYZ{color:#fff}.dark .rent-wrap_3MjfG:before{background:linear-gradient(180deg,rgba(1,35,69,0),#012345)}.dark .rent-wrap_3MjfG:after{background:#012345}',""]),t.locals={vehicle:"vehicle_1Y_W2",image:"image_1qd_B",block:"block_1-3vs",title:"title_jeGjZ",tabs:"tabs_3qkuk",tab:"tab_kDPQ6",active:"active_1NNwm",pink:"pink_1t2O4",rent:"rent_1FeSS","rent-wrap":"rent-wrap_3MjfG","rent-text":"rent-text_11RYZ"},e.exports=t},217:function(e,t,n){"use strict";n.r(t);n(52),n(14),n(15),n(7),n(39);var r=n(37),c=n(22),o=(n(30),n(3)),l=n(13);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f={middleware:function(e){var t=e.route,n=e.redirect;return t.path==="/".concat(t.params.id,"/")&&n("/".concat(t.params.id,"/specifications/"))},fetch:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.store,r=e.redirect,t.abrupt("return",n.dispatch("vehicles/load").catch((function(){return r("/error")})));case 2:case"end":return t.stop()}}),t)})))()},data:function(){return{loading:!0}},computed:m(m({},Object(l.c)("vehicles",{vehicleProxy:"one"})),{},{id:function(){return this.$route.params.id},vehicle:function(){return this.vehicleProxy(this.id)}}),methods:{showImage:function(){this.loading=!1},createSrc:function(e){return"object"===Object(r.a)(e)?(window.URL||window.webkitURL).createObjectURL(e):e}}},x=n(200),h=n(18);var component=Object(h.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container",class:e.$style.vehicle},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"skeleton"}),e._v(" "),n("img",{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],class:e.$style.image,attrs:{src:e.createSrc(e.vehicle.image),alt:""},on:{load:e.showImage}}),e._v(" "),n("div",{class:e.$style.block},[n("h2",{class:e.$style.title},[e._v(e._s(e.vehicle.name))]),e._v(" "),n("div",{class:e.$style.tabs},[n("nuxt-link",{class:e.$style.tab,attrs:{to:"/"+e.vehicle.name+"/specifications","active-class":e.$style.active}},[e._v("\n        Specifications\n      ")]),e._v(" "),n("nuxt-link",{class:e.$style.tab,attrs:{to:"/"+e.vehicle.name+"/team","active-class":e.$style.active}},[e._v("\n        Team\n      ")]),e._v(" "),n("nuxt-link",{class:e.$style.tab,attrs:{to:"/"+e.vehicle.name+"/terms","active-class":e.$style.active}},[e._v("\n        Rent terms\n      ")])],1),e._v(" "),n("nuxt-child",{attrs:{vehicle:e.vehicle}}),e._v(" "),n("div",{class:e.$style["rent-wrap"]},[n("div",{class:e.$style.rent},[n("div",{class:e.$style["rent-text"]},[e._v("Rent for "),n("span",{class:e.$style.pink},[e._v(e._s(e.vehicle.rent)+" $/h")])]),e._v(" "),n("button",{staticClass:"button"},[e._v("Rent now")])])])],1)])}),[],!1,(function(e){this.$style=x.default.locals||x.default}),null,null);t.default=component.exports}}]);