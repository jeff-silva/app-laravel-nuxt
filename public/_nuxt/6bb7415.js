(window.webpackJsonp=window.webpackJsonp||[]).push([[14,9],{533:function(t,e,r){var content=r(539);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(4).default)("4cc44ea2",content,!0,{sourceMap:!1})},538:function(t,e,r){"use strict";r(533)},539:function(t,e,r){var n=r(3)(!1);n.push([t.i,'.ui-search th[data-orderby]{cursor:pointer!important}.ui-search-orderby-asc:after{margin-left:5px;font-family:"Font Awesome 5 Free";content:"\\f0dd"}.ui-search-orderby-desc:after{margin-left:5px;font-family:"Font Awesome 5 Free";content:"\\f0de"}.ui-search-actions .btn{width:40px!important;height:40px!important;padding:6px;border-radius:50%!important;margin-left:5px}.ui-search-actions-hidden{display:none!important}.ui-search-actions:hover .ui-search-actions-hidden{display:flex!important}',""]),t.exports=n},544:function(t,e,r){"use strict";r.r(e);r(46),r(203),r(33);var n={props:{action:{default:""},params:Object},data:function(){return{headersTotal:0,search:{loading:!1,params:Object.assign({q:"",page:1,per_page:10,orderby:"id",order:"desc"},this.$props.params),results:{}}}},methods:{searchItems:function(){var t=this;this.search.loading=!0,this.$axios.get(this.action,{params:this.search.params}).then((function(e){t.search.loading=!1,e.data.per_page=parseInt(e.data.per_page),e.data.to=parseInt(e.data.to),e.data.total=parseInt(e.data.total),t.search.results=e.data}))},orderbyHandleCliek:function(){var t=this;this.$el.querySelectorAll("th[data-orderby]").forEach((function(e){e.addEventListener("click",(function(e){var r=e.target.dataset.orderby;r==t.search.params.orderby?t.search.params.order="asc"==t.search.params.order?"desc":"asc":t.search.params.orderby=r,t.searchItems(),t.orderbyArrows()}))}))},orderbyArrows:function(){var t=this,e="ui-search-orderby-".concat(this.search.params.order);this.$el.querySelectorAll("th[data-orderby]").forEach((function(r){var n=r.dataset.orderby==t.search.params.orderby?e:"";r.setAttribute("class",n)}))}},mounted:function(){this.searchItems(),this.orderbyHandleCliek(),this.orderbyArrows(),this.headersTotal=this.$el.querySelectorAll("thead > tr > *").length}},c=(r(538),r(10)),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ui-search"},[r("form",{on:{submit:function(e){return e.preventDefault(),t.searchItems()},change:function(e){return t.searchItems()}}},[r("div",{staticClass:"card mb-3"},[r("div",{staticClass:"card-body"},[t._t("fields",(function(){return[r("ui-field",{staticStyle:{"max-width":"400px"},attrs:{label:"Busca"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.search.params.q,expression:"search.params.q"}],staticClass:"form-control",attrs:{type:"search"},domProps:{value:t.search.params.q},on:{input:function(e){e.target.composing||t.$set(t.search.params,"q",e.target.value)}}})])]}),{loading:t.search.loading,params:t.search.params})],2),t._v(" "),r("div",{staticClass:"card-footer d-flex"},[r("div",{staticClass:"flex-grow-1"},[r("el-pagination",{attrs:{background:"",layout:"prev, pager, next, sizes","current-page":t.search.params.page,"page-size":t.search.params.per_page,"pager-count":11,total:t.search.results.total,"page-sizes":[10,25,50,100]},on:{"update:currentPage":function(e){return t.$set(t.search.params,"page",e)},"update:current-page":function(e){return t.$set(t.search.params,"page",e)},"update:pageSize":function(e){return t.$set(t.search.params,"per_page",e)},"update:page-size":function(e){return t.$set(t.search.params,"per_page",e)},"size-change":function(e){return t.searchItems()},"current-change":function(e){return t.searchItems()},"prev-click":function(e){return t.searchItems()},"next-click":function(e){return t.searchItems()}}})],1),t._v(" "),r("div",[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n                        Buscar\n                        "),t.search.loading?r("i",{staticClass:"fas fa-spin fa-spinner ms-2"}):r("i",{staticClass:"fas fa-search ms-2"})])])])])]),t._v(" "),r("table",{staticClass:"table table-borderless table-striped bg-white shadow mb-3"},[r("thead",[r("tr",[t._t("header",(function(){return[r("th",[t._v("Item")])]})),t._v(" "),r("th",{attrs:{width:"50px"}})],2)]),t._v(" "),r("tbody",[r("tr",[r("td",{staticClass:"p-0",staticStyle:{height:"3px"},attrs:{colspan:t.headersTotal}},[t.search.loading?r("div",{staticClass:"progress",staticStyle:{height:"3px"}},[r("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"100%"}})]):t._e()])]),t._v(" "),t.search.results.data&&0==t.search.results.data.length?r("tr",[r("td",{attrs:{colspan:t.headersTotal}},[t._t("empty",(function(){return[r("small",{staticClass:"d-block text-muted text-center"},[t._v("Nenhum dado")])]}))],2)]):t._e(),t._v(" "),t._l(t.search.results.data||[],(function(e){return r("tr",[t._t("item",(function(){return[r("td",[t._v(t._s(e))])]}),{item:e}),t._v(" "),r("td",{attrs:{width:"10px"}},[r("div",{staticClass:"ui-search-actions",staticStyle:{position:"relative"}},[r("div",{staticClass:"d-flex",staticStyle:{position:"absolute",top:"-20px",right:"0"}},[r("div",{staticClass:"d-flex ui-search-actions-hidden"},[t._t("actions",null,{item:e})],2),t._v(" "),t._m(0,!0)])])])],2)}))],2)]),t._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-footer"},[r("el-pagination",{attrs:{background:"",layout:"prev, pager, next, sizes","current-page":t.search.params.page,"page-size":t.search.params.per_page,"pager-count":11,total:t.search.results.total,"page-sizes":[10,25,50,100]},on:{"update:currentPage":function(e){return t.$set(t.search.params,"page",e)},"update:current-page":function(e){return t.$set(t.search.params,"page",e)},"update:pageSize":function(e){return t.$set(t.search.params,"per_page",e)},"update:page-size":function(e){return t.$set(t.search.params,"per_page",e)},"size-change":function(e){return t.searchItems()},"current-change":function(e){return t.searchItems()},"prev-click":function(e){return t.searchItems()},"next-click":function(e){return t.searchItems()}}})],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"btn bg-white",staticStyle:{"box-shadow":"0 0 10px #00000022"},attrs:{href:"javascript:;"}},[e("i",{staticClass:"fas fa-plus"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UiField:r(202).default})},551:function(t,e,r){"use strict";r.r(e);var n={middleware:"auth",layout:"admin"},c=r(10),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("nuxt-link",{attrs:{to:"/admin/pages/new"}},[t._v("Novo")]),t._v(" "),r("hr"),t._v(" "),r("ui-search",{attrs:{action:"/api/pages/search",params:{status:""}},scopedSlots:t._u([{key:"fields",fn:function(e){var n=e.params;return[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-6"},[r("ui-field",{attrs:{label:"Busca"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:n.q,expression:"params.q"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:n.q},on:{input:function(e){e.target.composing||t.$set(n,"q",e.target.value)}}})])],1),t._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("ui-field",{attrs:{label:"Status"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:n.status,expression:"params.status"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(n,"status",e.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[t._v("Todos")]),t._v(" "),r("option",{attrs:{value:"draft"}},[t._v("Rascunho")]),t._v(" "),r("option",{attrs:{value:"publish"}},[t._v("Publicado")])])])],1)])]}},{key:"header",fn:function(){return[r("th",{attrs:{"data-orderby":"name"}},[t._v("Título")]),t._v(" "),r("th",{attrs:{"data-orderby":"status",width:"100px"}},[t._v("Status")]),t._v(" "),r("th",{attrs:{"data-orderby":"updated_at",width:"200px"}},[t._v("Alterado em")])]},proxy:!0},{key:"item",fn:function(e){var n=e.item;return[r("td",[t._v(t._s(n.name))]),t._v(" "),r("td",[t._v(t._s(n.status))]),t._v(" "),r("td",[t._v(t._s(n.updated_at))])]}},{key:"actions",fn:function(t){var e=t.item;return[r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/admin/pages/"+e.id}},[r("i",{staticClass:"fas fa-fw fa-edit"})])]}}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiField:r(202).default,UiSearch:r(544).default})}}]);