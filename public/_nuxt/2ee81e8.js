(window.webpackJsonp=window.webpackJsonp||[]).push([[13,6],{540:function(t,e,n){"use strict";n.r(e);var o={props:{value:Object,method:{default:"get"},action:{default:""},validator:Object,successMessage:{default:""}},data:function(){return{loading:!1,validate:this.$validator(this.validator)}},methods:{submit:function(){var t=this;this.loading=!0,("post"==this.method?this.$axios.post(this.action,this.value):this.$axios.get(this.action,{params:this.value})).then((function(e){t.loading=!1,t.$emit("success",e.data),t.successMessage&&t.$swal.fire("",t.successMessage,"success")})).catch((function(e){t.loading=!1,t.validate.setError(e.response.data.fields)}))}}},l=n(9),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{attrs:{method:t.method,action:t.action},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[t._t("default",null,{method:t.method,action:t.action,loading:t.loading,submit:t.submit,validator:t.validate})],2)}),[],!1,null,null,null);e.default=component.exports},562:function(t,e,n){"use strict";n.r(e);var o={middleware:"auth",layout:"admin",data:function(){return{edit:!0,page:{}}},methods:{pageLoad:function(){var t=this,e=parseInt(this.$route.params.id)||null;e&&this.$axios.get("/api/pages/find/".concat(e)).then((function(e){t.page=e.data}))}},mounted:function(){this.pageLoad()}},l=n(9),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("ui-form",{attrs:{method:"post",action:"/api/pages/save","success-message":"Dados salvos"},on:{success:function(e){t.$router.push("/admin/pages/"+e.id),t.page=e}},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.validator,l=e.loading,r=e.submit;return[n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-8"},[n("ui-field",{attrs:{label:"Slug",error:o.error.slug}},[n("label",{staticClass:"input-group form-control p-0"},[n("div",{staticClass:"input-group-text border-0 bg-transparent"},[t._v("site.com/")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.page.slug,expression:"page.slug"}],staticClass:"form-control border-0",staticStyle:{"border-left":"none!important"},attrs:{type:"text"},domProps:{value:t.page.slug},on:{input:function(e){e.target.composing||t.$set(t.page,"slug",e.target.value)}}}),t._v(" "),n("div",{staticClass:"input-group-btn bg-white"},[n("a",{staticClass:"btn btn-primary rounded-0",attrs:{href:"/"+t.page.slug,target:"_blank"}},[t._v("Visitar")])])])])],1),t._v(" "),n("div",{staticClass:"col-12 col-md-4"},[n("ui-field",{attrs:{label:"Status",error:o.error.status}},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.page.status,expression:"page.status"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.page,"status",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"draft"}},[t._v("Rascunho")]),t._v(" "),n("option",{attrs:{value:"publish"}},[t._v("Publicado")])])])],1),t._v(" "),n("div",{staticClass:"col-12 col-md-12"},[n("ui-field",{attrs:{label:"Nome",error:o.error.name}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.page.name,expression:"page.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.page.name},on:{input:function(e){e.target.composing||t.$set(t.page,"name",e.target.value)}}})])],1),t._v(" "),n("div",{staticClass:"col-12 col-md-12"},[n("div",{staticClass:"d-flex mb-3"},[n("div",[n("a",{attrs:{href:""}},[t._v("refresh")])]),t._v(" "),n("div",[n("el-checkbox",{model:{value:t.edit,callback:function(e){t.edit=e},expression:"edit"}},[t._v("Editavel")])],1)]),t._v(" "),n("ui-field",{attrs:{label:"Conteúdo",error:o.error.content}},[n("ui-content",{attrs:{edit:t.edit},on:{change:function(t){return r()}},model:{value:t.page.content,callback:function(e){t.$set(t.page,"content",e)},expression:"page.content"}})],1)],1)]),t._v(" "),n("div",{staticClass:"text-end"},[n("nuxt-link",{staticClass:"btn",attrs:{to:"/admin/pages"}},[t._v("Voltar")]),t._v(" "),n("button",{directives:[{name:"loading",rawName:"v-loading",value:l,expression:"loading"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n                Salvar\n            ")])],1)]}}]),model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiField:n(202).default,UiContent:n(291).default,UiForm:n(540).default})}}]);