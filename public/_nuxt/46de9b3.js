(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8],{543:function(t,e,r){"use strict";r.r(e);var n={props:{value:[Boolean,String,Array,Object]},watch:{$props:{deep:!0,handler:function(t){this.props=JSON.parse(JSON.stringify(t))}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props))}},methods:{emitValue:function(){this.$emit("value",this.props.value),this.$emit("input",this.props.value),this.$emit("change",this.props.value)}}},l=r(7),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.value?r("div",{staticClass:"modal show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1"},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.props.value=!1,t.emitValue()}}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[t._t("header"),t._v(" "),r("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:function(e){t.props.value=!1,t.emitValue()}}})],2),t._v(" "),r("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),r("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},556:function(t,e,r){"use strict";r.r(e);r(148),r(74);var n={props:{value:{default:function(){return[]}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props)),filesParams:{q:"",folder:"",page:1,per_page:20},files:!1,edit:!1}},methods:{emitValue:function(){this.$emit("value",this.props.value),this.$emit("input",this.props.value),this.$emit("change",this.props.value)},refresh:function(){var t=this;if(!this._refreshing){this._refreshing=!0;var e=this.filesParams;this.$axios.get("/api/files/search",{params:e}).then((function(e){t.files=e.data,t._refreshing=!1}))}},selectToggle:function(t){var e=this.props.value.indexOf(t);e>=0?this.props.value.splice(e,1):this.props.value.push(t),this.emitValue()},selectedsDelete:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.$confirm("Deseja deletar ".concat(this.props.value.length," arquivos?")).then((function(r){t.props.value.length>0&&(e=t.props.value.map((function(t){return t.id}))),t.$axios.post("/api/files/remove",{id:e}).then((function(e){t.refresh(),t.props.value=[],t.edit=!1}))}))},fileClass:function(t){var e=[];return this.props.value.indexOf(t)>=0?e.push("border border-primary"):e.push("border border-white"),e},fileSave:function(){var t=this;this.$axios.post("/api/files/save",this.edit).then((function(e){t.edit=!1,t.refresh(),t.$swal.fire("","Arquivo salvo","success")}))}},mounted:function(){this.refresh()}},l=n,o=r(7),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex g-0 border"},[r("div",{staticClass:"bg-white border-end",staticStyle:{"min-width":"200px","max-width":"200px"}},[t.files?r("div",{staticClass:"list-group list-group-flush"},[r("div",{staticClass:"list-group-item list-group-item-primary"},[t._v("Pastas")]),t._v(" "),t._l(t.files.folders,(function(e){return r("a",{staticClass:"list-group-item",attrs:{href:"javascript:;"},on:{click:function(r){t.filesParams.folder=e.folder,t.refresh()}}},[t._v("\n                    /"+t._s(e.folder||"")+"\n                ")])}))],2):t._e()]),t._v(" "),r("div",{staticClass:"flex-grow-1 bg-light",staticStyle:{"max-width":"100%",overflow:"auto"}},[r("div",{staticClass:"bg-white p-2 d-flex align-items-center border-bottom"},[r("div",[t._v(t._s(t.filesParams.folder||"/"))]),t._v(" "),t._m(0),t._v(" "),t.props.value.length?r("div",{staticClass:"ms-1"},[r("a",{staticClass:"btn btn-sm btn-light",attrs:{href:"javascript:;"},on:{click:function(e){t.props.value=[],t.emitValue()}}},[t._v("\n                        Limpar seleções\n                    ")])]):t._e(),t._v(" "),t.props.value.length?r("div",{staticClass:"ms-1"},[r("a",{staticClass:"btn btn-sm btn-danger",attrs:{href:"javascript:;"},on:{click:function(e){return t.selectedsDelete()}}},[t._v("\n                        Deletar "+t._s(t.props.value.length)+"\n                    ")])]):t._e()]),t._v(" "),t.files?t._e():r("div",{staticClass:"p-2 text-center text-muted py-5"},[r("i",{staticClass:"fas fa-spin fa-spinner"}),t._v(" Carregando...\n            ")]),t._v(" "),t.files&&0==t.files.data.length?r("div",{staticClass:"p-2 text-center text-muted py-5"},[t._v("\n                Sem arquivos\n            ")]):t._e(),t._v(" "),t.files?r("div",t._l(t.files.data,(function(e){return r("div",{key:e.id,staticClass:"d-inline-flex bg-white shadow-sm m-2",class:t.fileClass(e),staticStyle:{"min-width":"150px","max-width":"150px",cursor:"pointer"}},[r("div",{staticStyle:{width:"100%"}},[r("div",{staticStyle:{height:"150px"},on:{click:function(r){return r.target!==r.currentTarget?null:t.selectToggle(e)}}},[t.strContains(e.mime,"image")?r("img",{key:e.id,staticStyle:{width:"100%",height:"100%","object-fit":"cover"},attrs:{src:e.url,alt:e.name,title:e.name}}):r("div",[t._v(t._s(e.name))])]),t._v(" "),r("a",{staticClass:"btn btn-sm btn-primary w-100 rounded-0",attrs:{href:"javascript:;"},on:{click:function(r){t.edit=e}}},[t._v("\n                            Editar\n                        ")])])])})),0):t._e(),t._v(" "),r("div",{staticClass:"bg-white border-top p-2"},[t.files?r("el-pagination",{attrs:{background:"","current-page":t.filesParams.page,"page-size":t.filesParams.per_page,total:t.files.total,layout:"prev, pager, next"},on:{"update:currentPage":function(e){return t.$set(t.filesParams,"page",e)},"update:current-page":function(e){return t.$set(t.filesParams,"page",e)},"update:pageSize":function(e){return t.$set(t.filesParams,"per_page",e)},"update:page-size":function(e){return t.$set(t.filesParams,"per_page",e)},"size-change":function(e){return t.refresh()},"current-change":function(e){return t.refresh()},"prev-click":function(e){return t.refresh()},"next-click":function(e){return t.refresh()}}}):t._e()],1)])]),t._v(" "),r("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Editar")]},proxy:!0},{key:"body",fn:function(){return[r("ui-field",{attrs:{label:"Descrição"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.edit.name,expression:"edit.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.edit.name},on:{input:function(e){e.target.composing||t.$set(t.edit,"name",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Pasta"}},[r("el-select",{staticClass:"w-100",attrs:{filterable:"","allow-create":""},model:{value:t.edit.folder,callback:function(e){t.$set(t.edit,"folder",e)},expression:"edit.folder"}},t._l(t.files.folders,(function(e){return r("el-option",{key:e.folder,attrs:{value:e.folder}},[t._v("/"+t._s(e.folder||""))])})),1)],1)]},proxy:!0},{key:"footer",fn:function(){return[r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.selectedsDelete(t.edit.id)}}},[t._v("\n                Deletar\n            ")]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.fileSave()}}},[t._v("\n                Salvar\n            ")])]},proxy:!0}]),model:{value:t.edit,callback:function(e){t.edit=e},expression:"edit"}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex-grow-1"},[r("div",{staticClass:"btn"},[t._v(" ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UiField:r(202).default,UiModal:r(543).default})}}]);