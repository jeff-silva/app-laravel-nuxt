(window.webpackJsonp=window.webpackJsonp||[]).push([[40,18,20,21,22,24,25,28],{549:function(t,e,r){var content=r(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("039c59a2",content,!0,{sourceMap:!1})},550:function(t,e,r){"use strict";var o=r(13),n=r(3),l=r(4),c=r(135),d=r(20),f=r(15),v=r(405),m=r(48),h=r(134),_=r(404),y=r(5),x=r(93).f,w=r(40).f,$=r(18).f,C=r(406),N=r(553).trim,S="Number",O=n.Number,k=O.prototype,E=n.TypeError,F=l("".slice),U=l("".charCodeAt),I=function(t){var e=_(t,"number");return"bigint"==typeof e?e:j(e)},j=function(t){var e,r,o,n,l,c,d,code,f=_(t,"number");if(h(f))throw E("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=N(f),43===(e=U(f,0))||45===e){if(88===(r=U(f,2))||120===r)return NaN}else if(48===e){switch(U(f,1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(c=(l=F(f,2)).length,d=0;d<c;d++)if((code=U(l,d))<48||code>n)return NaN;return parseInt(l,o)}return+f};if(c(S,!O(" 0o1")||!O("0b1")||O("+0x1"))){for(var R,A=function(t){var e=arguments.length<1?0:O(I(t)),r=this;return m(k,r)&&y((function(){C(r)}))?v(Object(e),r,A):e},J=o?x(O):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;J.length>P;P++)f(O,R=J[P])&&!f(A,R)&&$(A,R,w(O,R));A.prototype=k,k.constructor=A,d(n,S,A)}},552:function(t,e,r){"use strict";r.r(e);var o=r(21),n=(r(550),r(555),r(190),{props:{label:{default:""},layout:{default:"vertical"},labelWidth:{default:"200px"},error:[Boolean,Number,String,Array,Object]},computed:{compError:function(){var t=[];return"string"==typeof this.error?t=[this.error]:Array.isArray(this.error)?t=this.error:"object"==Object(o.a)(this.error)&&(t=Object.values(this.error)),t.join("<br>")}}}),l=(r(556),r(16)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["horizontal"==t.layout?r("div",{staticClass:"d-flex align-items-center mb-3"},[r("div",{staticClass:"pe-3",style:{minWidth:t.labelWidth,maxWidth:t.labelWidth}},[t._t("label",(function(){return[t._v(t._s(t.label))]}))],2),t._v(" "),r("div",{staticClass:"flex-grow-1"},[t._t("default"),t._v(" "),r("div",{staticClass:"ui-field-info"},[t._t("info")],2),t._v(" "),t.compError?r("small",{staticClass:"d-block text-danger pt-1",domProps:{innerHTML:t._s(t.compError)}}):t._e()],2)]):r("div",{staticClass:"mb-3"},[r("div",{staticClass:"form-label"},[t._t("label",(function(){return[t._v(t._s(t.label))]}))],2),t._v(" "),t._t("default"),t._v(" "),r("div",{staticClass:"ui-field-info"},[t._t("info")],2),t._v(" "),t.compError?r("small",{staticClass:"d-block text-danger pt-1",domProps:{innerHTML:t._s(t.compError)}}):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},553:function(t,e,r){var o=r(4),n=r(25),l=r(14),c=r(554),d=o("".replace),f="["+c+"]",v=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),h=function(t){return function(e){var r=l(n(e));return 1&t&&(r=d(r,v,"")),2&t&&(r=d(r,m,"")),r}};t.exports={start:h(1),end:h(2),trim:h(3)}},554:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},555:function(t,e,r){var o=r(6),n=r(407).values;o({target:"Object",stat:!0},{values:function(t){return n(t)}})},556:function(t,e,r){"use strict";r(549)},557:function(t,e,r){var o=r(73)(!1);o.push([t.i,".ui-field-info *{font-size:12px;color:var(--bs-gray)!important}",""]),t.exports=o},558:function(t,e,r){"use strict";r.r(e);r(12);var o={props:{value:[Boolean,Object],method:{default:"get"},action:{default:""},mountedSubmit:{default:!1,type:Boolean},successText:{default:""}},data:function(){return{loading:!1,response:!1,error:!1,errorFields:{}}},methods:{submit:function(){var t=this;return this.loading=!0,this.error=!1,this.errorFields={},this.$axios({method:this.method,url:this.action,data:"get"!=this.method?this.value:null,params:"get"==this.method?this.value:null}).then((function(e){var r=t.parseResponseData(e.data);t.loading=!1,t.response=r,t.$emit("success",r),t.$emit("response",r),t.successText&&t.$swal.fire(t.successText)})).catch((function(e){var r=t.parseResponseData(e.response.data);t.loading=!1,t.error=r.message,t.errorFields=r.fields,t.$emit("error",r),t.$emit("response",r)}))},parseResponseData:function(t){return["per_page","page"].forEach((function(e){"string"==typeof t[e]&&(t[e]=parseInt(t[e]))})),t}},mounted:function(){this.mountedSubmit&&this.submit()}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t._t("default",null,{loading:t.loading,response:t.response,error:t.error,errorFields:t.errorFields})],2)}),[],!1,null,null,null);e.default=component.exports},559:function(t,e,r){var content=r(563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("212e4890",content,!0,{sourceMap:!1})},561:function(t,e,r){"use strict";r.r(e);var o={props:{value:[Boolean,String,Array,Object]},watch:{$props:{deep:!0,handler:function(t){this.props=JSON.parse(JSON.stringify(t))}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props))}},methods:{emitValue:function(){this.$emit("value",this.props.value),this.$emit("input",this.props.value),this.$emit("change",this.props.value)}}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.value?r("div",{staticClass:"modal show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1"},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.props.value=!1,t.emitValue()}}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[t._t("header"),t._v(" "),r("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:function(e){t.props.value=!1,t.emitValue()}}})],2),t._v(" "),r("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),r("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},562:function(t,e,r){"use strict";r(559)},563:function(t,e,r){var o=r(73)(!1);o.push([t.i,".ui-file-upload-droparea{border:3px dashed var(--bs-gray-300);display:flex;align-items:center;justify-content:center;height:200px}",""]),t.exports=o},566:function(t,e,r){"use strict";r.r(e);var o={props:{value:{default:""},show:{default:!1},placeholder:{default:""}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props))}},methods:{emitvalue:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"input-group form-control p-0"},["checkbox"==(t.props.show?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:t.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.props.value)?t._i(t.props.value,null)>-1:t.props.value},on:{keyup:function(e){return t.emitvalue()},change:function(e){var r=t.props.value,o=e.target,n=!!o.checked;if(Array.isArray(r)){var l=t._i(r,null);o.checked?l<0&&t.$set(t.props,"value",r.concat([null])):l>-1&&t.$set(t.props,"value",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.props,"value",n)}}}):"radio"==(t.props.show?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:t.props.placeholder,type:"radio"},domProps:{checked:t._q(t.props.value,null)},on:{keyup:function(e){return t.emitvalue()},change:function(e){return t.$set(t.props,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:t.props.placeholder,type:t.props.show?"text":"password"},domProps:{value:t.props.value},on:{keyup:function(e){return t.emitvalue()},input:function(e){e.target.composing||t.$set(t.props,"value",e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){t.props.show=!t.props.show}}},[t.props.show?r("i",{staticClass:"fas fa-eye"}):r("i",{staticClass:"fas fa-eye-slash"})])])])}),[],!1,null,null,null);e.default=component.exports},567:function(t,e,r){"use strict";r.r(e);r(75),r(42),r(12),r(34);var o={props:{type:{default:"base64"},folder:{default:""},multiple:{default:!0},dropArea:{default:!0},uploadOnSelect:{default:!0},dropdownLeft:{default:!0},modal:{default:!1}},watch:{$props:{deep:!0,handler:function(t){this.__preventRecursive||(this.props=JSON.parse(JSON.stringify(t)))}},props:{deep:!0,handler:function(t){var e=this;for(var i in this.__preventRecursive=!0,this.$emit("input",t.value||!1),t)this.$emit("update:".concat(i),t[i]);setTimeout((function(){e.__preventRecursive=!1}),10)}}},data:function(){return{success:!1,error:!1,uploadPercent:0,file:!1,save:{folder:this.$props.folder},props:JSON.parse(JSON.stringify(this.$props))}},methods:{openFileBrowser:function(){var t=this;Object.assign(document.createElement("input"),{type:"file",onchange:function(e){t.file=e.target.files[0]}}).click()},fileSave:function(){var t=this,data=new FormData;for(var i in this.save)data.append(i,this.save[i]);this.file&&data.append("file",this.file,this.file.name),this.success=!1,this.error=!1,this.uploadPercent=0,this.$axios.post("/api/files/upload",data,{onUploadProgress:function(t){file.uploadPercent=Math.round(100*t.loaded/t.total)}}).then((function(e){t.success=!0,t.file=!1,t.save={},t.props.modal=!1,t.$emit("success",e.data)})).catch((function(e){t.error=e.response.data.message||"Erro desconhecido",t.$emit("error",e.response.data)}))},uploadFiles:function(t){var e=this;(t=Array.isArray(t)?t:[t]).forEach((function(t){var r={name:t.name,type:t.type,size:t.size,sizeUploaded:0,percent:0,success:!1,error:!1,file:t};e.uploadOnSelect&&e.startFileUpload(r),e.filesToUpload.push(r)}))},startFileUpload:function(t){var e=this,data=new FormData;data.append("file",t.file,t.file.name),data.append("folder",this.folder),t.percent=0,t.sizeUploaded=0,t.success=!1,t.error=!1,this.$axios.post("/api/files/upload",data,{onUploadProgress:function(e){t.percent=Math.round(100*e.loaded/e.total),t.sizeUploaded=e.loaded}}).then((function(r){t.success=!0,e.$emit("success",r.data)})).catch((function(r){t.error=r.response.data.message||"Erro desconhecido",e.$emit("error",r.response.data)}))}}},n=(r(562),r(16)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{position:"relative"}},[r("div",{on:{click:function(e){t.props.modal=!0}}},[t._t("button",(function(){return[t._m(0)]}))],2),t._v(" "),r("ui-modal",{staticStyle:{"text-align":"left!important"},scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Upload")]},proxy:!0},{key:"body",fn:function(){return[r("ui-field",{attrs:{label:"Descrição do arquivo"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.save.name,expression:"save.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.save.name},on:{input:function(e){e.target.composing||t.$set(t.save,"name",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Pasta"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.save.folder,expression:"save.folder"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.save.folder},on:{input:function(e){e.target.composing||t.$set(t.save,"folder",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Informe a URL externa da imagem"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.save.url,expression:"save.url"}],staticClass:"form-control",attrs:{type:"text",disabled:t.file},domProps:{value:t.save.url},on:{input:function(e){e.target.composing||t.$set(t.save,"url",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Ou faça upload"}},[r("button",{staticClass:"btn btn-outline-light w-100",attrs:{type:"button",disabled:t.save.url},on:{click:function(e){return t.openFileBrowser()}}},[r("span",[t._v(t._s(t.file?t.file.name:"Upload"))]),t._v(" "),r("i",{staticClass:"fas fa-fw fa-upload"})])])]},proxy:!0},{key:"footer",fn:function(){return[r("button",{staticClass:"btn btn-light",attrs:{type:"button"}},[r("i",{staticClass:"fas fa-fw fa-times"}),t._v(" Cancelar\n            ")]),t._v(" "),r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.fileSave()}}},[r("i",{staticClass:"fas fa-fw fa-save"}),t._v(" Salvar\n            ")])]},proxy:!0}]),model:{value:t.props.modal,callback:function(e){t.$set(t.props,"modal",e)},expression:"props.modal"}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"btn btn-outline-light w-100",attrs:{type:"button"}},[t._v("\n                Upload "),r("i",{staticClass:"fas fa-fw fa-upload"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{UiField:r(552).default,UiModal:r(561).default})},569:function(t,e,r){"use strict";r.r(e);var o=r(21),n=(r(550),r(75),r(94),r(409),r(12),{props:{value:{default:function(){return{}},type:[Boolean,Number,String,Object]},modelName:{default:""},modelId:{default:!1,type:[Boolean,Number,String]},singular:{default:"Item"},plural:{default:"Itens"},showActions:{default:!0},redirect:{default:"edit"}},watch:{$props:{deep:!0,handler:function(t){this.__preventRecursive||(this.props=JSON.parse(JSON.stringify(t)))}},props:{deep:!0,handler:function(t){var e=this;for(var i in this.__preventRecursive=!0,t)this.$emit("update:".concat(i),t[i]);setTimeout((function(){e.__preventRecursive=!1}),10)}}},computed:{_modelId:function(){var t=+this.props.modelId;return"object"==Object(o.a)(this.props.value)&&this.props.value.id&&(t=+this.props.value.id),!isNaN(t)&&t}},data:function(){return{finding:!1,props:JSON.parse(JSON.stringify(this.$props))}},methods:{find:function(){var t=this;this._modelId&&(this.finding=!0,this.$axios.get("/api/".concat(this.modelName,"/find/").concat(this._modelId)).then((function(e){t.finding=!1,t.props.value=e.data})))},onSuccess:function(t){this.props.value=t,this.$emit("success",t),this.successRedirect()},successRedirect:function(){"edit"==this.redirect?this.$router.push("/admin/".concat(this.modelName,"/").concat(this.props.value&&this.props.value.id?this.props.value.id:"new")):"back"==this.redirect?this.$router.go(-1):this.$router.push(this.redirect)}},mounted:function(){this.find()}}),l=r(16),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ui-form",{attrs:{method:"post",action:"/api/"+t.modelName+"/save","success-text":t.singular+" salvo(a)"},on:{success:t.onSuccess},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.loading,n=e.error,l=e.errorFields;return[r("div",{staticClass:"bg-white p-3 shadow-sm"},[r("el-collapse-transition",[n?r("div",{staticClass:"alert alert-danger"},[r("a",{staticClass:"float-end text-danger fw-bold",attrs:{href:"javascript:;"},on:{click:function(t){n=!1}}},[r("i",{staticClass:"fas fa-fw fa-times"})]),t._v(" "),r("div",{domProps:{innerHTML:t._s(n)}})]):t._e()]),t._v(" "),t._t("default",null,{value:t.props.value,loading:o,error:n,errorFields:l})],2),t._v(" "),t.showActions?r("div",{staticClass:"text-end mt-3 p-3 bg-white shadow-sm"},[t._t("actions"),t._v(" "),t.props.value.id?r("nuxt-link",{staticClass:"btn btn-light",attrs:{to:"/admin/"+t.modelName+"/new"}},[t._v("\n            Criar "+t._s(t.singular)+"\n        ")]):t._e(),t._v(" "),r("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("\n            Voltar\n        ")]),t._v(" "),r("button",{directives:[{name:"loading",rawName:"v-loading",value:o,expression:"loading"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n            Salvar\n        ")])],2):t._e()]}}],null,!0),model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiForm:r(558).default})},588:function(t,e,r){"use strict";r.r(e);r(75);var o={props:{value:{default:""}},watch:{$props:{deep:!0,handler:function(t){this.__preventRecursive||(this.props=JSON.parse(JSON.stringify(t)))}},props:{deep:!0,handler:function(t){var e=this;for(var i in this.__preventRecursive=!0,this.$emit("input",t.value||!1),t)this.$emit("update:".concat(i),t[i]);setTimeout((function(){e.__preventRecursive=!1}),10),this.photoFind()}}},data:function(){return{file:!1,props:JSON.parse(JSON.stringify(this.$props))}},methods:{photoFind:function(){var t=this;this.props.value&&this.$axios.get("/api/files/find/".concat(this.props.value)).then((function(e){t.file=e.data}))},photoRemove:function(){var t=this;this.$confirm("Deseja remover arquivo?").then((function(e){t.props.value="",t.file=!1}))}},mounted:function(){this.photoFind()}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shadow-sm bg-light p-1",staticStyle:{display:"flex","flex-direction":"column",position:"relative",height:"300px"}},[r("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center"}},[r("div",{staticClass:"d-flex"},[r("div",{staticClass:"flex-grow-1"},[r("ui-file-upload",{on:{success:function(e){t.props.value=e.id}},scopedSlots:t._u([{key:"button",fn:function(){return[r("button",{staticClass:"btn btn-success rounded-0 w-100",attrs:{type:"button"}},[r("i",{staticClass:"fas fa-fw fa-upload"}),t._v(" Upload\n                        ")])]},proxy:!0}])})],1),t._v(" "),t.file?r("a",{staticClass:"btn btn-outline-primary rounded-0 ms-1",attrs:{href:t.file.url,download:t.file.slug}},[r("i",{staticClass:"fas fa-fw fa-download"})]):t._e(),t._v(" "),r("button",{staticClass:"btn btn-outline-danger rounded-0 ms-1",attrs:{type:"button"},on:{click:function(e){return t.photoRemove()}}},[r("i",{staticClass:"fas fa-fw fa-times"})])])]),t._v(" "),r("div",{staticClass:"p-3",staticStyle:{display:"flex","flex-direction":"column","align-items":"center","justify-content":"center",flex:"1",position:"relative"}},[t.file?t._e():r("div",[t._v("Selecione um arquivo")]),t._v(" "),t.file&&"image"==t.file.type?r("img",{staticStyle:{position:"absolute","max-width":"400px",height:"calc(100% - 30px)","object-fit":"cover"},attrs:{src:t.file.url,alt:""}}):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiFileUpload:r(567).default})},695:function(t,e,r){"use strict";r.r(e);r(12),r(27),r(28),r(570),r(408);var o={layout:"admin",middleware:"auth",head:function(){return{title:"Editar usuário"}},data:function(){return{baseUrl:new URL(location.href).protocol+"//"+new URL(location.href).host+"/"}}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ui-model-edit",{attrs:{"model-name":"user","model-id":t.$route.params.id,singular:"Usuário",plural:"Usuários"},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.value,n=e.errorFields;return[r("ui-field",{attrs:{label:"Nome",layout:"horizontal",error:n.name}},[r("input",{directives:[{name:"model",rawName:"v-model",value:o.name,expression:"value.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:o.name},on:{input:function(e){e.target.composing||t.$set(o,"name",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"E-mail",layout:"horizontal",error:n.email}},[r("input",{directives:[{name:"model",rawName:"v-model",value:o.email,expression:"value.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:o.email},on:{input:function(e){e.target.composing||t.$set(o,"email",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Senha",layout:"horizontal",error:n.password}},[r("ui-password",{model:{value:o.password,callback:function(e){t.$set(o,"password",e)},expression:"value.password"}})],1),t._v(" "),r("ui-field",{attrs:{label:"Foto",layout:"horizontal",error:n.photo_id}},[r("ui-file-select",{model:{value:o.photo_id,callback:function(e){t.$set(o,"photo_id",e)},expression:"value.photo_id"}})],1)]}}])})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiField:r(552).default,UiPassword:r(566).default,UiFileSelect:r(588).default,UiModelEdit:r(569).default})}}]);