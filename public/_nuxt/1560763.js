(window.webpackJsonp=window.webpackJsonp||[]).push([[18,10,13],{546:function(t,e,r){var content=r(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("039c59a2",content,!0,{sourceMap:!1})},547:function(t,e,r){"use strict";r.r(e);var n=r(21),o=(r(551),r(552),r(189),{props:{label:{default:""},layout:{default:"vertical"},labelWidth:{default:"200px"},error:[Boolean,Number,String,Array,Object]},computed:{compError:function(){var t=[];return"string"==typeof this.error?t=[this.error]:Array.isArray(this.error)?t=this.error:"object"==Object(n.a)(this.error)&&(t=Object.values(this.error)),t.join("<br>")}}}),l=(r(548),r(16)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["horizontal"==t.layout?r("div",{staticClass:"d-flex align-items-center mb-3"},[r("div",{style:{minWidth:t.labelWidth,maxWidth:t.labelWidth}},[t._t("label",(function(){return[t._v(t._s(t.label))]}))],2),t._v(" "),r("div",{staticClass:"flex-grow-1"},[t._t("default"),t._v(" "),r("div",{staticClass:"ui-field-info"},[t._t("info")],2),t._v(" "),t.compError?r("small",{staticClass:"d-block text-danger pt-1",domProps:{innerHTML:t._s(t.compError)}}):t._e()],2)]):r("div",{staticClass:"mb-3"},[t.$slots.label?r("div",{staticClass:"form-label"},[t._t("label",(function(){return[t._v(t._s(t.label))]}))],2):t._e(),t._v(" "),t._t("default"),t._v(" "),r("div",{staticClass:"ui-field-info"},[t._t("info")],2),t._v(" "),t.compError?r("small",{staticClass:"d-block text-danger pt-1",domProps:{innerHTML:t._s(t.compError)}}):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},548:function(t,e,r){"use strict";r(546)},549:function(t,e,r){var n=r(73)(!1);n.push([t.i,".ui-field-info *{font-size:12px;color:var(--bs-gray)!important}",""]),t.exports=n},550:function(t,e,r){"use strict";r.r(e);var n={props:{value:[Boolean,Object],method:{default:"get"},action:{default:""},mountedSubmit:{default:!1,type:Boolean}},data:function(){return{loading:!1,response:!1,error:!1,errorFields:{}}},methods:{submit:function(){var t=this;this.loading=!0,this.error=!1,this.errorFields={},("post"==this.method?this.$axios.post(this.action,this.value):this.$axios.get(this.action,{params:this.value})).then((function(e){t.loading=!1,t.response=e.data,t.$emit("success",e.data),t.$emit("response",e.data)})).catch((function(e){t.loading=!1,t.error=e.response.data.message,t.errorFields=e.response.data.fields,t.$emit("error",e.response.data),t.$emit("response",e.response.data)}))}},mounted:function(){this.mountedSubmit&&this.submit()}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t._t("default",null,{loading:t.loading,response:t.response,error:t.error,errorFields:t.errorFields})],2)}),[],!1,null,null,null);e.default=component.exports},556:function(t,e,r){var content=r(559);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("7264d87a",content,!0,{sourceMap:!1})},558:function(t,e,r){"use strict";r(556)},559:function(t,e,r){var n=r(73)(!1);n.push([t.i,'.ui-search-table-orderby-asc,.ui-search-table-orderby-desc{text-decoration:underline}.ui-search-table-orderby-asc:after{content:"⇊";float:right}.ui-search-table-orderby-desc:after{content:"⇈";float:right}.ui-search-table-actions .btn{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin-right:5px}.ui-search-header-actions>*{margin-left:5px}.ui-search-table-actions{position:relative}.ui-search-table-actions-btns{position:absolute;top:0;right:100%;display:flex;visibility:hidden;opacity:0;transition:all .3s ease;-webkit-animation-duration:.2s;animation-duration:.2s}.ui-search-table-actions:hover .ui-search-table-actions-btns{visibility:visible;opacity:1}',""]),t.exports=n},560:function(t,e,r){"use strict";r.r(e);r(48),r(34),r(41),r(75),r(76);var n=r(33);r(93),r(27),r(190),r(13),r(26),r(28),r(561),r(405),r(40);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={props:{action:{default:""},refreshUrl:{default:!0},exportUrl:{default:""}},data:function(){return{params:l({},this.$route.query),selecteds:[]}},methods:{submit:function(){var t=this;this.refreshUrlQueryString(),setTimeout((function(){t.$refs.search.submit()}),100)},refreshUrlQueryString:function(){this.refreshUrl&&this.$router.push({query:this.params})},getExportUrl:function(t){var u=new URL(location.href);for(var i in u.searchParams.set("format",t),this.$route.query)u.searchParams.set(i,this.$route.query[i]);return this.exportUrl+u.search},orderbyClickHandle:function(){var t=this;this.$el.addEventListener("click",(function(e){var r=e.target.getAttribute("data-orderby");r&&(t.params.orderby==r?t.params.order="desc"==t.params.order?"asc":"desc":(t.params.orderby=r,t.params.order=t.params.order?t.params.order:"desc"),t.$el.querySelectorAll("table thead th").forEach((function(e){e.classList.remove("ui-search-table-orderby-asc"),e.classList.remove("ui-search-table-orderby-desc"),e.getAttribute("data-orderby")==t.params.orderby&&e.classList.add("desc"==t.params.order?"ui-search-table-orderby-desc":"ui-search-table-orderby-asc")})),t.submit())}))}},mounted:function(){this.orderbyClickHandle()}},d=(r(558),r(16)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ui-form",{ref:"search",attrs:{method:"get",action:t.action,"mounted-submit":!0},on:{response:function(e){return t.refreshUrlQueryString()}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.loading,o=e.response;return[r("div",{staticClass:"row g-0"},[t.$slots.actions?r("div",{staticClass:"ui-search-header-actions col-12 d-flex align-items-center justify-content-end mb-3"},[t.selecteds.length>0?[t._t("selecteds-actions")]:t._e(),t._v(" "),t.exportUrl?r("el-dropdown",[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"}},[t._v("\n                    Download "),r("i",{staticClass:"fas fa-fw fa-download"})]),t._v(" "),r("el-dropdown-menu",t._l(["json","csv","html"],(function(e){return r("el-dropdown-item",{key:e},[r("a",{staticClass:"text-uppercase",attrs:{href:t.getExportUrl(e),target:"_blank"}},[t._v(t._s(e))])])})),1)],1):t._e(),t._v(" "),t._t("actions")],2):t._e(),t._v(" "),r("div",{staticClass:"col-12 col-md-3"},[r("div",{staticStyle:{position:"sticky",top:"0"}},[r("ui-field",[r("div",{staticClass:"input-group form-control p-0"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.params.q,expression:"params.q"}],staticClass:"form-control border-0 bg-transparent",attrs:{type:"text",placeholder:"Busca"},domProps:{value:t.params.q},on:{input:function(e){e.target.composing||t.$set(t.params,"q",e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-btn"},[t.params.q?r("button",{staticClass:"btn border-0 bg-transparent",attrs:{type:"button"},on:{click:function(e){t.params.q=""}}},[r("i",{staticClass:"fas fa-fw fa-times"})]):r("button",{staticClass:"btn border-0 bg-transparent",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-fw fa-search"})])])])]),t._v(" "),t._t("search"),t._v(" "),r("button",{directives:[{name:"loading",rawName:"v-loading",value:n,expression:"loading"}],staticClass:"btn btn-primary w-100",attrs:{type:"submit"}},[t._v("\n                    Buscar\n                ")]),t._v(" "),r("button",{staticClass:"btn btn-light w-100 mt-3",attrs:{type:"button"},on:{click:function(e){t.params={},t.submit()}}},[t._v("\n                    Limpar\n                ")])],2)]),t._v(" "),r("div",{staticClass:"col-12 col-md-9 pt-3 pt-md-0 ps-0 ps-md-3"},[r("table",{staticClass:"table table-borderless table-striped table-hover"},[r("thead",[r("tr",[t._t("table-header",(function(){return[r("th",[t._v("Nome")])]})),t._v(" "),r("th",{attrs:{width:"50px"}})],2)]),t._v(" "),r("tbody",[o.data&&0==o.data.length?r("tr",[t._t("table-empty",(function(){return[r("td",{staticClass:"text-center py-3"},[t._v("\n                                Nenhum item encontrado\n                            ")])]}))],2):t._e(),t._v(" "),t._l(o.data,(function(i){return r("tr",{class:{"bg-light":t.selecteds.indexOf(i)>=0}},[t._t("table-row",(function(){return[r("td",[t._v(t._s(i))])]}),{item:i}),t._v(" "),r("td",[r("div",{staticClass:"ui-search-table-actions"},[r("button",{staticClass:"btn btn-light border-0",attrs:{type:"button"}},[r("i",{staticClass:"fas fa-fw fa-plus"})]),t._v(" "),r("div",{staticClass:"ui-search-table-actions-btns"},[t._t("table-actions",null,{item:i})],2)])])],2)}))],2)]),t._v(" "),r("el-pagination",{attrs:{background:"",layout:"prev, pager, next, sizes","current-page":t.params.page,"page-size":t.params.per_page,"pager-count":11,total:o?o.total:0,"page-sizes":[5,10,25,50,100]},on:{"update:currentPage":function(e){return t.$set(t.params,"page",e)},"update:current-page":function(e){return t.$set(t.params,"page",e)},"update:pageSize":function(e){return t.$set(t.params,"per_page",e)},"update:page-size":function(e){return t.$set(t.params,"per_page",e)},"size-change":function(e){return t.submit()},"current-change":function(e){return t.submit()},"prev-click":function(e){return t.submit()},"next-click":function(e){return t.submit()}}})],1)])]}}],null,!0),model:{value:t.params,callback:function(e){t.params=e},expression:"params"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiField:r(547).default,UiForm:r(550).default})},573:function(t,e,r){"use strict";r.r(e);var n={layout:"admin",middleware:"auth"},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ui-search",{ref:"search",attrs:{action:"/api/wordle-groups/search","export-url":"/api/wordle-groups/export"},scopedSlots:t._u([{key:"actions",fn:function(){return[r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/admin/wordle/group/new"}},[t._v("\n                Novo grupo\n            ")])]},proxy:!0},{key:"table-header",fn:function(){return[r("th",{attrs:{"data-orderby":"name"}},[t._v("Nome")]),t._v(" "),r("th",{attrs:{"data-orderby":"updated_at"}},[t._v("Alteração")])]},proxy:!0},{key:"table-row",fn:function(e){var n=e.item;return[r("td",[t._v(t._s(n.name))]),t._v(" "),r("td",[t._v(t._s(t._f("dateFormat")(n.updated_at)))])]}},{key:"table-actions",fn:function(e){var n=e.item;return[r("button",{staticClass:"btn btn-danger",attrs:{type:"button"}},[r("i",{staticClass:"fas fa-fw fa-times"})]),t._v(" "),r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/admin/wordle/group/"+n.id}},[r("i",{staticClass:"fas fa-fw fa-pen"})])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiSearch:r(560).default})}}]);