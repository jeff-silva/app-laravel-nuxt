(window.webpackJsonp=window.webpackJsonp||[]).push([[15,6],{536:function(t,e,n){"use strict";n.r(e);var l={props:{value:Object,method:{default:"get"},action:{default:""},validator:Object,successMessage:{default:""}},data:function(){return{loading:!1,validate:this.$validator(this.validator)}},methods:{submit:function(){var t=this;this.loading=!0,("post"==this.method?this.$axios.post(this.action,this.value):this.$axios.get(this.action,{params:this.value})).then((function(e){t.loading=!1,t.$emit("success",e.data),t.successMessage&&t.$swal.fire("",t.successMessage,"success")})).catch((function(e){t.loading=!1,t.validate.setError(e.response.data.fields)}))}}},o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{attrs:{method:t.method,action:t.action},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[t._t("default",null,{method:t.method,action:t.action,loading:t.loading,submit:t.submit,validator:t.validate})],2)}),[],!1,null,null,null);e.default=component.exports},556:function(t,e,n){"use strict";n.r(e);var l={middleware:"auth",layout:"admin",data:function(){return{settings:{}}},methods:{settingsGetAll:function(){var t=this;this.$axios.get("/api/settings/get-all").then((function(e){t.settings=e.data}))},settingsSaveAll:function(){var t=this;this.$axios.post("/api/settings/save-all").then((function(e){t.settings=e.data}))}},mounted:function(){this.settingsGetAll()}},o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"row g-0 bg-white"},[n("div",{staticClass:"col-2 bg-dark"},[n("div",{staticClass:"list-group list-group-flush"},[t._l(t.$store.state.admin.settings,(function(e){return[n("nuxt-link",{staticClass:"list-group-item text-white bg-transparent",attrs:{to:e.to}},[n("i",{staticClass:"me-2",class:e.icon}),t._v("\n                        "+t._s(e.title)+"\n                    ")])]}))],2)]),t._v(" "),n("div",{staticClass:"col-10"},[n("ui-form",{attrs:{method:"post",action:"/api/settings/save-all","success-message":"Configurações alteradas"},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.loading;return[n("div",{staticClass:"p-3"},[n("nuxt-child",{attrs:{settings:t.settings,"settings-get-all":t.settingsGetAll,"settings-save-all":t.settingsSaveAll}})],1),t._v(" "),n("div",{staticClass:"text-end bg-light p-3"},[n("button",{directives:[{name:"loading",rawName:"v-loading",value:l,expression:"loading"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n                        Salvar\n                    ")])])]}}]),model:{value:t.settings,callback:function(e){t.settings=e},expression:"settings"}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiForm:n(536).default})}}]);