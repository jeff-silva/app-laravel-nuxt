(window.webpackJsonp=window.webpackJsonp||[]).push([[17,16,18,19,20,21,22],{549:function(t,e,r){var content=r(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("039c59a2",content,!0,{sourceMap:!1})},550:function(t,e,r){"use strict";var n=r(13),o=r(3),l=r(4),c=r(135),d=r(20),f=r(15),m=r(405),h=r(48),v=r(134),_=r(404),y=r(5),x=r(93).f,w=r(40).f,C=r(18).f,k=r(406),E=r(552).trim,N="Number",P=o.Number,O=P.prototype,S=o.TypeError,$=l("".slice),j=l("".charCodeAt),U=function(t){var e=_(t,"number");return"bigint"==typeof e?e:A(e)},A=function(t){var e,r,n,o,l,c,d,code,f=_(t,"number");if(v(f))throw S("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=E(f),43===(e=j(f,0))||45===e){if(88===(r=j(f,2))||120===r)return NaN}else if(48===e){switch(j(f,1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+f}for(c=(l=$(f,2)).length,d=0;d<c;d++)if((code=j(l,d))<48||code>o)return NaN;return parseInt(l,n)}return+f};if(c(N,!P(" 0o1")||!P("0b1")||P("+0x1"))){for(var I,T=function(t){var e=arguments.length<1?0:P(U(t)),r=this;return h(O,r)&&y((function(){k(r)}))?m(Object(e),r,T):e},F=n?x(P):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),D=0;F.length>D;D++)f(P,I=F[D])&&!f(T,I)&&C(T,I,w(P,I));T.prototype=O,O.constructor=T,d(o,N,T)}},551:function(t,e,r){"use strict";r.r(e);var n=r(21),o=(r(550),r(555),r(190),{props:{label:{default:""},layout:{default:"vertical"},labelWidth:{default:"200px"},error:[Boolean,Number,String,Array,Object]},computed:{compError:function(){var t=[];return"string"==typeof this.error?t=[this.error]:Array.isArray(this.error)?t=this.error:"object"==Object(n.a)(this.error)&&(t=Object.values(this.error)),t.join("<br>")}}}),l=(r(556),r(16)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["horizontal"==t.layout?r("div",{staticClass:"d-flex align-items-center mb-3"},[r("div",{staticClass:"pe-3",style:{minWidth:t.labelWidth,maxWidth:t.labelWidth}},[t._t("label",(function(){return[t._v(t._s(t.label))]}))],2),t._v(" "),r("div",{staticClass:"flex-grow-1"},[t._t("default"),t._v(" "),r("div",{staticClass:"ui-field-info"},[t._t("info")],2),t._v(" "),t.compError?r("small",{staticClass:"d-block text-danger pt-1",domProps:{innerHTML:t._s(t.compError)}}):t._e()],2)]):r("div",{staticClass:"mb-3"},[r("div",{staticClass:"form-label"},[t._t("label",(function(){return[t._v(t._s(t.label))]}))],2),t._v(" "),t._t("default"),t._v(" "),r("div",{staticClass:"ui-field-info"},[t._t("info")],2),t._v(" "),t.compError?r("small",{staticClass:"d-block text-danger pt-1",domProps:{innerHTML:t._s(t.compError)}}):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},552:function(t,e,r){var n=r(4),o=r(25),l=r(14),c=r(553),d=n("".replace),f="["+c+"]",m=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(t){return function(e){var r=l(o(e));return 1&t&&(r=d(r,m,"")),2&t&&(r=d(r,h,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},553:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},554:function(t,e,r){"use strict";r.r(e);r(12);var n={props:{value:[Boolean,Object],method:{default:"get"},action:{default:""},mountedSubmit:{default:!1,type:Boolean},successText:{default:""}},data:function(){return{loading:!1,response:!1,error:!1,errorFields:{}}},methods:{submit:function(){var t=this;return this.loading=!0,this.error=!1,this.errorFields={},this.$axios({method:this.method,url:this.action,data:"get"!=this.method?this.value:null,params:"get"==this.method?this.value:null}).then((function(e){var r=t.parseResponseData(e.data);t.loading=!1,t.response=r,t.$emit("success",r),t.$emit("response",r),t.successText&&t.$swal.fire(t.successText)})).catch((function(e){var r=t.parseResponseData(e.response.data);t.loading=!1,t.error=r.message,t.errorFields=r.fields,t.$emit("error",r),t.$emit("response",r)}))},parseResponseData:function(t){return["per_page","page"].forEach((function(e){"string"==typeof t[e]&&(t[e]=parseInt(t[e]))})),t}},mounted:function(){this.mountedSubmit&&this.submit()}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{attrs:{action:""},on:{submit:function(e){return e.preventDefault(),t.submit()}}},[t._t("default",null,{loading:t.loading,response:t.response,error:t.error,errorFields:t.errorFields})],2)}),[],!1,null,null,null);e.default=component.exports},555:function(t,e,r){var n=r(6),o=r(407).values;n({target:"Object",stat:!0},{values:function(t){return o(t)}})},556:function(t,e,r){"use strict";r(549)},557:function(t,e,r){var n=r(73)(!1);n.push([t.i,".ui-field-info *{font-size:12px;color:var(--bs-gray)!important}",""]),t.exports=n},558:function(t,e,r){var content=r(561);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("309f6a21",content,!0,{sourceMap:!1})},559:function(t,e,r){var content=r(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("212e4890",content,!0,{sourceMap:!1})},560:function(t,e,r){"use strict";r(558)},561:function(t,e,r){var n=r(73)(!1);n.push([t.i,".ui-model-search-table-actions .btn{padding:4px 6px;margin:0}.ui-model-search-header-actions>*{margin-left:10px}.ui-model-search-search-fields>*{margin-bottom:15px}",""]),t.exports=n},563:function(t,e,r){"use strict";r.r(e);r(49),r(35),r(41),r(76),r(34),r(77);var n=r(29);r(12),r(75),r(28),r(191),r(26),r(27),r(408),r(94),r(95),r(565);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={props:{modelName:{default:""},singular:{default:"Item"},plural:{default:"Itens"},changeUrl:{default:!0},actionsDefault:{default:!0}},data:function(){return{searchParams:this.searchParamsDefault(this.$route.query),selecteds:[]}},methods:{submit:function(){var t=this;return new Promise((function(e,r){setTimeout((function(){t.$refs.search.submit().then((function(t){e()})).catch(r)}),10)}))},searchParamsDefault:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t=l({q:"",page:1,per_page:10,orderby:"updated_at",order:"desc",deleted:""},t),["page","per_page"].forEach((function(e){t[e]=parseInt(t[e])})),t},searchParamsUrl:function(){this.changeUrl&&this.$router.push({query:this.searchParams})},orderbyHandleClick:function(){var t=this;this.$el.addEventListener("click",(function(e){var r=e.target.getAttribute("data-orderby");r&&(t.searchParams.orderby==r?t.searchParams.order="asc"==t.searchParams.order?"desc":"asc":t.searchParams.orderby=r,t.searchParamsUrl(),t.submit())}))},downloadExport:function(t){var u=new URLSearchParams;for(var i in this.searchParams)u.append(i,this.searchParams[i]||"");u.append("format",t),this.$axios({url:"/api/".concat(this.modelName,"/export?").concat(u.toString()),method:"get",responseType:"blob"}).then((function(e){Object.assign(document.createElement("a"),{href:URL.createObjectURL(e.data),download:"data-export.".concat(t)}).click()}))},deleteAll:function(t){var e=this,r=!!this.searchParams.deleted,n=r?"Deseja deletar estes itens permanentemente?\nEsta ação não pode ser desfeita.":"Deseja deletar estes itens?",o=r;this.$confirm(n).then((function(n){e.$axios.post("/api/".concat(e.modelName,"/delete"),{id:t,deleted:o,forced:r}).then((function(t){e.selecteds=[],e.submit()}))}))}},mounted:function(){this.orderbyHandleClick()}},d=c,f=(r(560),r(16)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ui-form",{ref:"search",attrs:{method:"get",action:"/api/"+t.modelName+"/search","mounted-submit":!0},on:{response:function(e){return t.searchParamsUrl()}},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.loading,o=e.response;return[r("div",{staticClass:"row g-0"},[r("div",{staticClass:"col-12 pb-3 text-end"},[r("div",{staticClass:"ui-model-search-header-actions d-flex align-items-center justify-content-end"},[t._t("header-actions"),t._v(" "),r("transition",{attrs:{name:"el-fade-in-linear"}},[t.selecteds.length?r("a",{staticClass:"btn btn-danger",attrs:{href:"javascript:;"},on:{click:function(e){return t.deleteAll(t.selecteds)}}},[r("i",{staticClass:"fas fa-times me-1"}),t._v(" Deletar "+t._s(t.selecteds.length)+"\n                    ")]):t._e()]),t._v(" "),r("el-dropdown",{attrs:{trigger:"click"}},[r("a",{staticClass:"btn btn-success",attrs:{href:"javascript:;"}},[r("i",{staticClass:"fas fa-download me-1"}),t._v(" Exportar\n                    ")]),t._v(" "),r("el-dropdown-menu",[r("div",{staticStyle:{width:"150px"}},[r("a",{staticClass:"d-block p-2",attrs:{href:"javascript:;"},on:{click:function(e){return t.downloadExport("csv")}}},[t._v("CSV")]),t._v(" "),r("a",{staticClass:"d-block p-2",attrs:{href:"javascript:;"},on:{click:function(e){return t.downloadExport("json")}}},[t._v("JSON")]),t._v(" "),r("a",{staticClass:"d-block p-2",attrs:{href:"javascript:;"},on:{click:function(e){return t.downloadExport("html")}}},[t._v("HTML")])])])],1),t._v(" "),t.actionsDefault?r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/admin/"+t.modelName+"/new"}},[r("i",{staticClass:"fas fa-fw fa-plus me-1"}),t._v(" Novo\n                ")]):t._e()],2)]),t._v(" "),r("div",{staticClass:"col-12 col-md-3"},[r("div",{staticClass:"bg-white shadow-sm p-3",staticStyle:{position:"sticky",top:"0"}},[r("div",{staticClass:"ui-model-search-search-fields mb-4"},[r("div",{staticClass:"input-group form-control p-0"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchParams.q,expression:"searchParams.q"}],staticClass:"form-control border-0 bg-transparent",attrs:{type:"text",placeholder:"Buscar "+t.plural},domProps:{value:t.searchParams.q},on:{input:function(e){e.target.composing||t.$set(t.searchParams,"q",e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-btn"},[r("button",{directives:[{name:"loading",rawName:"v-loading",value:n,expression:"loading"}],staticClass:"btn border-0 bg-transparent shadow-none",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-fw fa-search"})])])]),t._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:t.searchParams.deleted,expression:"searchParams.deleted"}],staticClass:"form-control",on:{change:[function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.searchParams,"deleted",e.target.multiple?r:r[0])},function(e){return t.submit()}]}},[r("option",{attrs:{value:""}},[t._v("Ativos")]),t._v(" "),r("option",{attrs:{value:"1"}},[t._v("Deletados")])]),t._v(" "),t._t("search-fields")],2),t._v(" "),r("button",{directives:[{name:"loading",rawName:"v-loading",value:n,expression:"loading"}],staticClass:"btn btn-primary shadow-none w-100",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-fw fa-search"}),t._v(" Buscar\n                ")]),t._v(" "),r("button",{staticClass:"btn shadow-none w-100 mt-2",attrs:{type:"button"},on:{click:function(e){t.searchParams=t.searchParamsDefault(),t.submit().then((function(e){return t.searchParamsUrl()}))}}},[r("i",{staticClass:"fas fa-fw fa-times"}),t._v(" Limpar\n                ")]),t._v(" "),t._t("search-actions")],2)]),t._v(" "),r("div",{staticClass:"col-12 col-md-9 pt-3 pt-md-0 ps-md-3"},[r("div",{staticClass:"bg-white shadow-sm"},[r("table",{staticClass:"table table-striped table-hover table-borderless m-0",staticStyle:{"box-shadow":"none"}},[r("thead",[r("tr",[r("th",{attrs:{width:"30px"}},[r("input",{attrs:{type:"checkbox"},on:{click:function(e){t.selecteds=e.target.checked?o.data.map((function(t){return t.id})):[]}}})]),t._v(" "),t._t("table-header",(function(){return[r("th",[t._v("-")])]})),t._v(" "),r("th")],2)]),t._v(" "),r("tbody",[o&&o.data&&0==o.data.length?r("tr",[t._t("table-empty",(function(){return[r("td",{staticClass:"text-center py-3",attrs:{colspan:"10"}},[t._v("\n                                    Nenhum item encontrado\n                                ")])]}))],2):t._e(),t._v(" "),t._l(o.data,(function(i){return r("tr",[r("td",[r("input",{directives:[{name:"model",rawName:"v-model",value:t.selecteds,expression:"selecteds"}],attrs:{type:"checkbox"},domProps:{value:i.id,checked:Array.isArray(t.selecteds)?t._i(t.selecteds,i.id)>-1:t.selecteds},on:{change:function(e){var r=t.selecteds,n=e.target,o=!!n.checked;if(Array.isArray(r)){var l=i.id,c=t._i(r,l);n.checked?c<0&&(t.selecteds=r.concat([l])):c>-1&&(t.selecteds=r.slice(0,c).concat(r.slice(c+1)))}else t.selecteds=o}}})]),t._v(" "),t._t("table-row",(function(){return[r("td",[t._v(t._s(i))])]}),{item:i}),t._v(" "),r("td",{staticClass:"text-end"},[r("div",{staticClass:"ui-model-search-table-actions"},[t._t("table-actions",null,{item:i}),t._v(" "),t._t("table-actions-default",(function(){return[t.actionsDefault?r("nuxt-link",{staticClass:"btn btn-primary",attrs:{to:"/admin/"+t.modelName+"/"+i.id}},[r("i",{staticClass:"fas fa-fw fa-pen"})]):t._e(),t._v(" "),t.actionsDefault?r("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteAll(i.id)}}},[r("i",{staticClass:"fas fa-fw fa-times"})]):t._e()]}),{item:i})],2)])],2)}))],2)]),t._v(" "),r("div",{staticClass:"p-2"},[r("el-pagination",{attrs:{background:"",layout:"prev, pager, next, sizes","current-page":t.searchParams.page,"page-size":t.searchParams.per_page,"pager-count":11,total:o?o.total:0,"page-sizes":[5,10,25,50,100]},on:{"update:currentPage":function(e){return t.$set(t.searchParams,"page",e)},"update:current-page":function(e){return t.$set(t.searchParams,"page",e)},"update:pageSize":function(e){return t.$set(t.searchParams,"per_page",e)},"update:page-size":function(e){return t.$set(t.searchParams,"per_page",e)},"size-change":function(e){return t.submit()},"current-change":function(e){return t.submit()},"prev-click":function(e){return t.submit()},"next-click":function(e){return t.submit()}}})],1)])])])]}}],null,!0),model:{value:t.searchParams,callback:function(e){t.searchParams=e},expression:"searchParams"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiForm:r(554).default})},564:function(t,e,r){"use strict";r.r(e);var n=r(21),o=(r(550),r(75),r(94),r(409),r(12),{props:{value:{default:function(){return{}},type:[Boolean,Number,String,Object]},modelName:{default:""},modelId:{default:!1,type:[Boolean,Number,String]},singular:{default:"Item"},plural:{default:"Itens"},showActions:{default:!0},redirect:{default:"edit"}},watch:{$props:{deep:!0,handler:function(t){this.__preventRecursive||(this.props=JSON.parse(JSON.stringify(t)))}},props:{deep:!0,handler:function(t){var e=this;for(var i in this.__preventRecursive=!0,t)this.$emit("update:".concat(i),t[i]);setTimeout((function(){e.__preventRecursive=!1}),10)}}},computed:{_modelId:function(){var t=+this.props.modelId;return"object"==Object(n.a)(this.props.value)&&this.props.value.id&&(t=+this.props.value.id),!isNaN(t)&&t}},data:function(){return{finding:!1,props:JSON.parse(JSON.stringify(this.$props))}},methods:{find:function(){var t=this;this._modelId&&(this.finding=!0,this.$axios.get("/api/".concat(this.modelName,"/find/").concat(this._modelId)).then((function(e){t.finding=!1,t.props.value=e.data})))},onSuccess:function(t){this.props.value=t,this.$emit("success",t),this.successRedirect()},successRedirect:function(){"edit"==this.redirect?this.$router.push("/admin/".concat(this.modelName,"/").concat(this.props.value&&this.props.value.id?this.props.value.id:"new")):"back"==this.redirect?this.$router.go(-1):this.$router.push(this.redirect)}},mounted:function(){this.find()}}),l=r(16),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ui-form",{attrs:{method:"post",action:"/api/"+t.modelName+"/save","success-text":t.singular+" salvo(a)"},on:{success:t.onSuccess},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.loading,o=e.error,l=e.errorFields;return[r("div",{staticClass:"bg-white p-3 shadow-sm"},[t._t("default",null,{value:t.props.value,loading:n,error:o,errorFields:l})],2),t._v(" "),t.showActions?r("div",{staticClass:"text-end mt-3 p-3 bg-white shadow-sm"},[t._t("actions"),t._v(" "),t.props.value.id?r("nuxt-link",{staticClass:"btn btn-light",attrs:{to:"/admin/"+t.modelName+"/new"}},[t._v("\n            Criar "+t._s(t.singular)+"\n        ")]):t._e(),t._v(" "),r("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(e){return t.$router.go(-1)}}},[t._v("\n            Voltar\n        ")]),t._v(" "),r("button",{directives:[{name:"loading",rawName:"v-loading",value:n,expression:"loading"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n            Salvar\n        ")])],2):t._e()]}}],null,!0),model:{value:t.props.value,callback:function(e){t.$set(t.props,"value",e)},expression:"props.value"}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiForm:r(554).default})},566:function(t,e,r){"use strict";r(559)},567:function(t,e,r){var n=r(73)(!1);n.push([t.i,".ui-file-upload-droparea{border:3px dashed var(--bs-gray-300);display:flex;align-items:center;justify-content:center;height:200px}",""]),t.exports=n},568:function(t,e,r){"use strict";r.r(e);r(50),r(26),r(12),r(34),r(42);var n={props:{type:{default:"base64"},folder:{default:""},multiple:{default:!0},dropArea:{default:!0},uploadOnSelect:{default:!0},dropdownLeft:{default:!0}},data:function(){return{filesToUpload:[]}},methods:{openFileBrowser:function(){var t=this;Object.assign(document.createElement("input"),{type:"file",multiple:this.multiple,onchange:function(e){t.uploadFiles(Array.from(e.target.files))}}).click()},uploadFiles:function(t){var e=this;(t=Array.isArray(t)?t:[t]).forEach((function(t){var r={name:t.name,type:t.type,size:t.size,sizeUploaded:0,percent:0,success:!1,error:!1,file:t};e.uploadOnSelect&&e.startFileUpload(r),e.filesToUpload.push(r)}))},startFileUpload:function(t){var e=this,data=new FormData;data.append("file",t.file,t.file.name),data.append("folder",this.folder),t.percent=0,t.sizeUploaded=0,t.success=!1,t.error=!1,this.$axios.post("/api/files/upload",data,{onUploadProgress:function(e){t.percent=Math.round(100*e.loaded/e.total),t.sizeUploaded=e.loaded}}).then((function(r){t.success=!0,e.$emit("success",r.data)})).catch((function(r){t.error=r.response.data.message||"Erro desconhecido",e.$emit("error",r.response.data)}))}}},o=(r(566),r(16)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{position:"relative"}},[r("button",{staticClass:"btn btn-outline-light",attrs:{type:"button"},on:{click:function(e){return t.openFileBrowser()}}},[t._v("\n        Upload "),r("i",{staticClass:"fas fa-fw fa-upload"})]),t._v(" "),t.filesToUpload.length>0?r("div",{staticClass:"ui-file-upload-files mt-2 bg-white border border-bottom-0 shadow-sm",style:"position:absolute; top:100%; "+(t.dropdownLeft?"left":"right")+":0; width:300px;"},[t._l(t.filesToUpload,(function(e){return r("div",{staticClass:"d-flex align-items-center  border-bottom p-1"},[r("div",{staticClass:"flex-grow-1 text-start"},[r("div",[t._v(t._s(e.name||"Arquivo"))]),t._v(" "),r("div",{staticClass:"progress",staticStyle:{height:"10px"}},[r("div",{staticClass:"progress-bar progress-bar-striped",class:{"bg-success":e.success,"bg-danger":e.error,"progress-bar-animated":!e.success&&!e.error},style:"width:"+(e.percent||0)+"%;"})]),t._v(" "),e.error?r("small",{staticClass:"d-block text-danger"},[t._v("\n                    "+t._s(e.error||"Erro desconhecido")+".\n                    "),r("a",{staticClass:"text-danger fw-bold",attrs:{href:"javascript:;"},on:{click:function(r){return t.startFileUpload(e)}}},[t._v("Tentar novamente")])]):t._e()]),t._v(" "),r("div",[r("button",{staticClass:"btn btn-sm text-danger",attrs:{type:"button"},on:{click:function(r){t.filesToUpload.splice(t.filesToUpload.indexOf(e),1)}}},[r("i",{staticClass:"fas fa-fw fa-times"})])])])})),t._v(" "),t.filesToUpload.length>0&&t.filesToUpload.length==t.filesToUpload.filter((function(t){return t.success||t.error})).length?r("div",{staticClass:"text-center border-bottom"},[r("button",{staticClass:"btn w-100",attrs:{type:"button"},on:{click:function(e){t.filesToUpload=[]}}},[t._v("\n                Ok\n            ")])]):t._e()],2):t._e()])}),[],!1,null,null,null);e.default=component.exports},569:function(t,e,r){"use strict";r.r(e);var n={props:{value:[Boolean,String,Array,Object]},watch:{$props:{deep:!0,handler:function(t){this.props=JSON.parse(JSON.stringify(t))}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props))}},methods:{emitValue:function(){this.$emit("value",this.props.value),this.$emit("input",this.props.value),this.$emit("change",this.props.value)}}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("transition",{attrs:{name:"custom-unique-name","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[t.props.value?r("div",{staticClass:"modal show",staticStyle:{display:"block",background:"#00000044","animation-duration":"200ms"},attrs:{tabindex:"-1"},on:{click:function(e){if(e.target!==e.currentTarget)return null;t.props.value=!1,t.emitValue()}}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[t._t("header"),t._v(" "),r("button",{staticClass:"btn-close",attrs:{type:"button"},on:{click:function(e){t.props.value=!1,t.emitValue()}}})],2),t._v(" "),r("div",{staticClass:"modal-body"},[t._t("body")],2),t._v(" "),r("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},605:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{files:{},itemEdit:!1}},methods:{submit:function(){return this.$refs.filesSearch.submit()}},mounted:function(){this.submit()}},o=r(16),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ui-model-search",{ref:"filesSearch",attrs:{"model-name":"files","change-url":!1,"actions-default":!1,singular:"Arquivo",plural:"Arquivos"},scopedSlots:t._u([{key:"table-header",fn:function(){return[r("th",[t._v("Thumb")]),t._v(" "),r("th",{attrs:{"data-orderby":"name"}},[t._v("Nome")])]},proxy:!0},{key:"table-row",fn:function(e){var n=e.item;return[r("td",["image"==n.type?r("img",{staticStyle:{width:"50px",height:"50px","object-fit":"cover"},attrs:{src:n.url,alt:""}}):r("div",{staticStyle:{width:"50px",height:"50px",background:"#eee",display:"flex","align-items":"center","justify-content":"center"}},[t._v(t._s(n.ext))])]),t._v(" "),r("td",[r("div",{staticClass:"fw-bold"},[t._v(t._s(n.name))]),t._v(" "),n.folder?r("div",[r("small",[t._v("/"+t._s(n.folder))])]):t._e(),t._v(" "),r("div",[r("small",[t._v(t._s(t._f("strFileSize")(n.size)))])])])]}},{key:"table-actions",fn:function(e){var n=e.item;return[r("a",{staticClass:"btn btn-success",attrs:{href:"javascript:;"},on:{click:function(e){t.itemEdit=n}}},[r("i",{staticClass:"fas fa-fw fa-pen"})]),t._v(" "),r("a",{staticClass:"btn btn-primary",attrs:{href:"item.url",download:n.slug}},[r("i",{staticClass:"fas fa-fw fa-download"})])]}},{key:"header-actions",fn:function(){return[r("ui-file-upload",{attrs:{"dropdown-left":!1},on:{success:function(e){return t.submit()}}})]},proxy:!0}])}),t._v(" "),r("ui-model-edit",{attrs:{"model-name":"files","show-actions":!1},on:{success:function(e){t.$refs.filesSearch.submit().then((function(e){return t.itemEdit=!1}))}},model:{value:t.itemEdit,callback:function(e){t.itemEdit=e},expression:"itemEdit"}},[r("ui-modal",{scopedSlots:t._u([{key:"header",fn:function(){return[t._v("Editar "+t._s(t.itemEdit.name||"Novo"))]},proxy:!0},{key:"body",fn:function(){return[r("ui-field",{attrs:{label:"Nome"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.itemEdit.name,expression:"itemEdit.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.itemEdit.name},on:{input:function(e){e.target.composing||t.$set(t.itemEdit,"name",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Pasta"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.itemEdit.folder,expression:"itemEdit.folder"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.itemEdit.folder},on:{input:function(e){e.target.composing||t.$set(t.itemEdit,"folder",e.target.value)}}})])]},proxy:!0},{key:"footer",fn:function(){return[r("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n                    Salvar\n                ")])]},proxy:!0}]),model:{value:t.itemEdit,callback:function(e){t.itemEdit=e},expression:"itemEdit"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiFileUpload:r(568).default,UiModelSearch:r(563).default,UiField:r(551).default,UiModal:r(569).default,UiModelEdit:r(564).default})}}]);