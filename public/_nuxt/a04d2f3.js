(window.webpackJsonp=window.webpackJsonp||[]).push([[42,22,29],{559:function(e,t,o){"use strict";o.r(t);o(12);var r={props:{value:[Boolean,Object],method:{default:"get"},action:{default:""},mountedSubmit:{default:!1,type:Boolean},successText:{default:""}},data:function(){return{loading:!1,response:!1,error:!1,errorFields:{}}},methods:{submit:function(){var e=this;return this.loading=!0,this.error=!1,this.errorFields={},this.$axios({method:this.method,url:this.action,data:"get"!=this.method?this.value:null,params:"get"==this.method?this.value:null}).then((function(t){var o=e.parseResponseData(t.data);e.loading=!1,e.response=o,e.$emit("success",o),e.$emit("response",o),e.successText&&e.$swal.fire(e.successText)})).catch((function(t){var o=e.parseResponseData(t.response.data);e.loading=!1,e.error=o.message,e.errorFields=o.fields,e.$emit("error",o),e.$emit("response",o)}))},parseResponseData:function(e){return["per_page","page"].forEach((function(t){"string"==typeof e[t]&&(e[t]=parseInt(e[t]))})),e}},mounted:function(){this.mountedSubmit&&this.submit()}},n=o(14),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("form",{attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.submit()}}},[e._t("default",null,{loading:e.loading,response:e.response,error:e.error,errorFields:e.errorFields})],2)}),[],!1,null,null,null);t.default=component.exports},562:function(e,t,o){var content=o(572);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(75).default)("dc996836",content,!0,{sourceMap:!1})},563:function(e,t,o){"use strict";o.r(t);o(61);var r={props:{value:{default:""},show:{default:!1},placeholder:{default:""}},watch:{$props:{deep:!0,handler:function(e){this.__preventRecursive||(this.props=JSON.parse(JSON.stringify(e)))}},props:{deep:!0,handler:function(e){var t=this;for(var i in this.__preventRecursive=!0,this.$emit("input",e.value||!1),e)this.$emit("update:".concat(i),e[i]);setTimeout((function(){t.__preventRecursive=!1}),10)}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props))}}},n=o(14),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"input-group form-control p-0"},["checkbox"==(e.props.show?"text":"password")?o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:e.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.props.value)?e._i(e.props.value,null)>-1:e.props.value},on:{change:function(t){var o=e.props.value,r=t.target,n=!!r.checked;if(Array.isArray(o)){var l=e._i(o,null);r.checked?l<0&&e.$set(e.props,"value",o.concat([null])):l>-1&&e.$set(e.props,"value",o.slice(0,l).concat(o.slice(l+1)))}else e.$set(e.props,"value",n)}}}):"radio"==(e.props.show?"text":"password")?o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:e.props.placeholder,type:"radio"},domProps:{checked:e._q(e.props.value,null)},on:{change:function(t){return e.$set(e.props,"value",null)}}}):o("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:e.props.placeholder,type:e.props.show?"text":"password"},domProps:{value:e.props.value},on:{input:function(t){t.target.composing||e.$set(e.props,"value",t.target.value)}}}),e._v(" "),o("div",{staticClass:"input-group-btn"},[o("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(t){e.props.show=!e.props.show}}},[e.props.show?o("i",{staticClass:"fas fa-eye"}):o("i",{staticClass:"fas fa-eye-slash"})])])])}),[],!1,null,null,null);t.default=component.exports},571:function(e,t,o){"use strict";o(562)},572:function(e,t,o){var r=o(74)(!1);r.push([e.i,"@media (max-width:768px){.ui-model-edit-fields{margin-bottom:50px}.ui-model-edit-actions{position:fixed;bottom:0;left:0;width:100%;display:flex}.ui-model-edit-actions>.btn{flex-basis:100%;text-align:center;margin-left:5px;margin-right:5px}}",""]),e.exports=r},577:function(e,t,o){"use strict";o.r(t);var r=o(21),n=(o(552),o(61),o(94),o(409),o(12),{props:{value:{default:function(){return{}},type:[Boolean,Number,String,Object]},modelName:{default:""},modelId:{default:!1,type:[Boolean,Number,String]},singular:{default:"Item"},plural:{default:"Itens"},showActions:{default:!0},redirect:{default:"edit"}},watch:{$props:{deep:!0,handler:function(e){this.__preventRecursive||(this.props=JSON.parse(JSON.stringify(e)))}},props:{deep:!0,handler:function(e){var t=this;for(var i in this.__preventRecursive=!0,e)this.$emit("update:".concat(i),e[i]);setTimeout((function(){t.__preventRecursive=!1}),10)}}},computed:{_modelId:function(){var e=+this.props.modelId;return"object"==Object(r.a)(this.props.value)&&this.props.value.id&&(e=+this.props.value.id),!isNaN(e)&&e}},data:function(){return{finding:!1,props:JSON.parse(JSON.stringify(this.$props))}},methods:{find:function(){var e=this;this._modelId&&(this.finding=!0,this.$axios.get("/api/".concat(this.modelName,"/find/").concat(this._modelId)).then((function(t){e.finding=!1,e.props.value=t.data})))},onSuccess:function(e){var t=this;this.props.value=e,this.$emit("success",e),this.$swal.fire({title:"Dados de ".concat(this.singular," foram salvos"),confirmButtonText:"Lista de ".concat(this.plural),showCancelButton:!0,cancelButtonText:"Fechar"}).then((function(e){e.isConfirmed&&t.$router.push("/admin/".concat(t.modelName,"/"))}))},successRedirect:function(){"edit"==this.redirect?this.$router.push("/admin/".concat(this.modelName,"/").concat(this.props.value&&this.props.value.id?this.props.value.id:"new")):"back"==this.redirect?this.$router.go(-1):this.$router.push(this.redirect)}},mounted:function(){this.find()}}),l=(o(571),o(14)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ui-form",{attrs:{method:"post",action:"/api/"+e.modelName+"/save"},on:{success:e.onSuccess},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.loading,n=t.error,l=t.errorFields;return[o("div",{staticClass:"ui-model-edit-fields bg-white p-3 shadow-sm"},[o("el-collapse-transition",[n?o("div",{staticClass:"alert alert-danger"},[o("a",{staticClass:"float-end text-danger fw-bold",attrs:{href:"javascript:;"},on:{click:function(e){n=!1}}},[o("i",{staticClass:"fas fa-fw fa-times"})]),e._v(" "),o("div",{domProps:{innerHTML:e._s(n)}})]):e._e()]),e._v(" "),e._t("default",null,{value:e.props.value,loading:r,error:n,errorFields:l})],2),e._v(" "),e.showActions?o("div",{staticClass:"ui-model-edit-actions text-end bg-white shadow-sm py-2 mt-md-3 p-md-3"},[e._t("actions"),e._v(" "),e.props.value.id?o("nuxt-link",{staticClass:"btn btn-light",attrs:{to:"/admin/"+e.modelName+"/new"}},[e._v("\n            Criar "+e._s(e.singular)+"\n        ")]):e._e(),e._v(" "),o("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("\n            Voltar\n        ")]),e._v(" "),o("button",{directives:[{name:"loading",rawName:"v-loading",value:r,expression:"loading"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("\n            Salvar\n        ")])],2):e._e()]}}],null,!0),model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiForm:o(559).default})},708:function(e,t,o){"use strict";o.r(t);o(12),o(27),o(28),o(573),o(408);var r={layout:"default/admin",middleware:"auth",head:function(){return{title:"Editar usuário"}},computed:{_userId:function(){var e=this.$route.params.id||!1;return"me"==e?this.$auth.user.id:e}},data:function(){return{baseUrl:new URL(location.href).protocol+"//"+new URL(location.href).host+"/"}}},n=o(14),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ui-model-edit",{attrs:{"model-name":"user","model-id":e._userId,singular:"Usuário",plural:"Usuários"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.value,n=t.errorFields;return[o("ui-field",{attrs:{label:"Nome",layout:"horizontal",error:n.name}},[o("input",{directives:[{name:"model",rawName:"v-model",value:r.name,expression:"value.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:r.name},on:{input:function(t){t.target.composing||e.$set(r,"name",t.target.value)}}})]),e._v(" "),o("ui-field",{attrs:{label:"E-mail",layout:"horizontal",error:n.email}},[o("input",{directives:[{name:"model",rawName:"v-model",value:r.email,expression:"value.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:r.email},on:{input:function(t){t.target.composing||e.$set(r,"email",t.target.value)}}})]),e._v(" "),o("ui-field",{attrs:{label:"Senha",layout:"horizontal",error:n.password}},[o("ui-password",{model:{value:r.password,callback:function(t){e.$set(r,"password",t)},expression:"value.password"}})],1),e._v(" "),o("ui-field",{attrs:{label:"Foto",layout:"horizontal",error:n.photo_id}},[o("ui-file-select",{model:{value:r.photo_id,callback:function(t){e.$set(r,"photo_id",t)},expression:"value.photo_id"}})],1)]}}])})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiField:o(553).default,UiPassword:o(563).default,UiFileSelect:o(598).default,UiModelEdit:o(577).default})}}]);