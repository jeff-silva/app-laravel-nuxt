(window.webpackJsonp=window.webpackJsonp||[]).push([[42,18,22,25,27],{549:function(e,t,r){var content=r(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(74).default)("039c59a2",content,!0,{sourceMap:!1})},550:function(e,t,r){"use strict";var o=r(13),n=r(3),l=r(4),d=r(135),c=r(20),m=r(15),f=r(405),v=r(48),h=r(134),_=r(404),x=r(5),w=r(93).f,N=r(40).f,y=r(18).f,$=r(406),C=r(553).trim,E="Number",I=n.Number,S=I.prototype,O=n.TypeError,T=l("".slice),P=l("".charCodeAt),j=function(e){var t=_(e,"number");return"bigint"==typeof t?t:k(t)},k=function(e){var t,r,o,n,l,d,c,code,m=_(e,"number");if(h(m))throw O("Cannot convert a Symbol value to a number");if("string"==typeof m&&m.length>2)if(m=C(m),43===(t=P(m,0))||45===t){if(88===(r=P(m,2))||120===r)return NaN}else if(48===t){switch(P(m,1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+m}for(d=(l=T(m,2)).length,c=0;c<d;c++)if((code=P(l,c))<48||code>n)return NaN;return parseInt(l,o)}return+m};if(d(E,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var F,M=function(e){var t=arguments.length<1?0:I(j(e)),r=this;return v(S,r)&&x((function(){$(r)}))?f(Object(t),r,M):t},A=o?w(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),R=0;A.length>R;R++)m(I,F=A[R])&&!m(M,F)&&y(M,F,N(I,F));M.prototype=S,S.constructor=M,c(n,E,M)}},552:function(e,t,r){"use strict";r.r(t);var o=r(21),n=(r(550),r(555),r(190),{props:{label:{default:""},layout:{default:"vertical"},labelWidth:{default:"200px"},error:[Boolean,Number,String,Array,Object]},computed:{compError:function(){var e=[];return"string"==typeof this.error?e=[this.error]:Array.isArray(this.error)?e=this.error:"object"==Object(o.a)(this.error)&&(e=Object.values(this.error)),e.join("<br>")}}}),l=(r(556),r(16)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",["horizontal"==e.layout?r("div",{staticClass:"d-flex align-items-center mb-3"},[r("div",{staticClass:"pe-3",style:{minWidth:e.labelWidth,maxWidth:e.labelWidth}},[e._t("label",(function(){return[e._v(e._s(e.label))]}))],2),e._v(" "),r("div",{staticClass:"flex-grow-1"},[e._t("default"),e._v(" "),r("div",{staticClass:"ui-field-info"},[e._t("info")],2),e._v(" "),e.compError?r("small",{staticClass:"d-block text-danger pt-1",domProps:{innerHTML:e._s(e.compError)}}):e._e()],2)]):r("div",{staticClass:"mb-3"},[r("div",{staticClass:"form-label"},[e._t("label",(function(){return[e._v(e._s(e.label))]}))],2),e._v(" "),e._t("default"),e._v(" "),r("div",{staticClass:"ui-field-info"},[e._t("info")],2),e._v(" "),e.compError?r("small",{staticClass:"d-block text-danger pt-1",domProps:{innerHTML:e._s(e.compError)}}):e._e()],2)])}),[],!1,null,null,null);t.default=component.exports},553:function(e,t,r){var o=r(4),n=r(25),l=r(14),d=r(554),c=o("".replace),m="["+d+"]",f=RegExp("^"+m+m+"*"),v=RegExp(m+m+"*$"),h=function(e){return function(t){var r=l(n(t));return 1&e&&(r=c(r,f,"")),2&e&&(r=c(r,v,"")),r}};e.exports={start:h(1),end:h(2),trim:h(3)}},554:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},555:function(e,t,r){var o=r(6),n=r(407).values;o({target:"Object",stat:!0},{values:function(e){return n(e)}})},556:function(e,t,r){"use strict";r(549)},557:function(e,t,r){var o=r(73)(!1);o.push([e.i,".ui-field-info *{font-size:12px;color:var(--bs-gray)!important}",""]),e.exports=o},558:function(e,t,r){"use strict";r.r(t);r(12);var o={props:{value:[Boolean,Object],method:{default:"get"},action:{default:""},mountedSubmit:{default:!1,type:Boolean},successText:{default:""}},data:function(){return{loading:!1,response:!1,error:!1,errorFields:{}}},methods:{submit:function(){var e=this;return this.loading=!0,this.error=!1,this.errorFields={},this.$axios({method:this.method,url:this.action,data:"get"!=this.method?this.value:null,params:"get"==this.method?this.value:null}).then((function(t){var r=e.parseResponseData(t.data);e.loading=!1,e.response=r,e.$emit("success",r),e.$emit("response",r),e.successText&&e.$swal.fire(e.successText)})).catch((function(t){var r=e.parseResponseData(t.response.data);e.loading=!1,e.error=r.message,e.errorFields=r.fields,e.$emit("error",r),e.$emit("response",r)}))},parseResponseData:function(e){return["per_page","page"].forEach((function(t){"string"==typeof e[t]&&(e[t]=parseInt(e[t]))})),e}},mounted:function(){this.mountedSubmit&&this.submit()}},n=r(16),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("form",{attrs:{action:""},on:{submit:function(t){return t.preventDefault(),e.submit()}}},[e._t("default",null,{loading:e.loading,response:e.response,error:e.error,errorFields:e.errorFields})],2)}),[],!1,null,null,null);t.default=component.exports},569:function(e,t,r){"use strict";r.r(t);var o=r(21),n=(r(550),r(75),r(94),r(409),r(12),{props:{value:{default:function(){return{}},type:[Boolean,Number,String,Object]},modelName:{default:""},modelId:{default:!1,type:[Boolean,Number,String]},singular:{default:"Item"},plural:{default:"Itens"},showActions:{default:!0},redirect:{default:"edit"}},watch:{$props:{deep:!0,handler:function(e){this.__preventRecursive||(this.props=JSON.parse(JSON.stringify(e)))}},props:{deep:!0,handler:function(e){var t=this;for(var i in this.__preventRecursive=!0,e)this.$emit("update:".concat(i),e[i]);setTimeout((function(){t.__preventRecursive=!1}),10)}}},computed:{_modelId:function(){var e=+this.props.modelId;return"object"==Object(o.a)(this.props.value)&&this.props.value.id&&(e=+this.props.value.id),!isNaN(e)&&e}},data:function(){return{finding:!1,props:JSON.parse(JSON.stringify(this.$props))}},methods:{find:function(){var e=this;this._modelId&&(this.finding=!0,this.$axios.get("/api/".concat(this.modelName,"/find/").concat(this._modelId)).then((function(t){e.finding=!1,e.props.value=t.data})))},onSuccess:function(e){this.props.value=e,this.$emit("success",e),this.successRedirect()},successRedirect:function(){"edit"==this.redirect?this.$router.push("/admin/".concat(this.modelName,"/").concat(this.props.value&&this.props.value.id?this.props.value.id:"new")):"back"==this.redirect?this.$router.go(-1):this.$router.push(this.redirect)}},mounted:function(){this.find()}}),l=r(16),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ui-form",{attrs:{method:"post",action:"/api/"+e.modelName+"/save","success-text":e.singular+" salvo(a)"},on:{success:e.onSuccess},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.loading,n=t.error,l=t.errorFields;return[r("div",{staticClass:"bg-white p-3 shadow-sm"},[r("el-collapse-transition",[n?r("div",{staticClass:"alert alert-danger"},[r("a",{staticClass:"float-end text-danger fw-bold",attrs:{href:"javascript:;"},on:{click:function(e){n=!1}}},[r("i",{staticClass:"fas fa-fw fa-times"})]),e._v(" "),r("div",{domProps:{innerHTML:e._s(n)}})]):e._e()]),e._v(" "),e._t("default",null,{value:e.props.value,loading:o,error:n,errorFields:l})],2),e._v(" "),e.showActions?r("div",{staticClass:"text-end mt-3 p-3 bg-white shadow-sm"},[e._t("actions"),e._v(" "),e.props.value.id?r("nuxt-link",{staticClass:"btn btn-light",attrs:{to:"/admin/"+e.modelName+"/new"}},[e._v("\n            Criar "+e._s(e.singular)+"\n        ")]):e._e(),e._v(" "),r("button",{staticClass:"btn btn-light",attrs:{type:"button"},on:{click:function(t){return e.$router.go(-1)}}},[e._v("\n            Voltar\n        ")]),e._v(" "),r("button",{directives:[{name:"loading",rawName:"v-loading",value:o,expression:"loading"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("\n            Salvar\n        ")])],2):e._e()]}}],null,!0),model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiForm:r(558).default})},575:function(e,t,r){"use strict";r.r(t);r(550),r(75),r(26),r(191);var o={props:{value:{default:"",type:[Boolean,Number,String,Array,Object]},multiple:{default:!1},disabled:{default:!1},loadingText:{default:"Carregando"},modelName:{default:""},singular:{default:"Item"},plural:{default:"Itens"}},watch:{$props:{deep:!0,handler:function(e){this.__preventRecursive||(this.props=JSON.parse(JSON.stringify(e)))}},props:{deep:!0,handler:function(e){var t=this;for(var i in this.__preventRecursive=!0,this.$emit("input",e.value||!1),e)this.$emit("update:".concat(i),e[i]);setTimeout((function(){t.__preventRecursive=!1}),10)}}},methods:{search:function(){var e=this;this.loading=!0,this.$axios.get("/api/".concat(this.modelName,"/search"),{params:this.searchParams}).then((function(t){e.loading=!1,e.results=t.data}))},remoteMethod:function(e){var t=this;this.searchParams.q=e,this.__remoteMethodTimeout&&clearTimeout(this.__remoteMethodTimeout),this.__remoteMethodTimeout=setTimeout((function(){return t.search()}),1e3)}},data:function(){return{loading:!1,searchParams:{q:"",id:this.value,per_page:10,orderby:"updated_at",order:"desc"},results:{},props:JSON.parse(JSON.stringify(this.$props))}},mounted:function(){this.search()}},n=r(16),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-select",{staticClass:"w-100",attrs:{filterable:"",remote:"",placeholder:"Selecionar "+e.singular,"remote-method":e.remoteMethod,loading:e.loading,multiple:e.props.multiple,disabled:e.props.disabled,"loading-text":e.props.loadingText,"no-match-text":"Nenhum(a) "+e.singular+" encontrado(a)","no-data-text":"Nenhum(a) "+e.singular+" encontrado(a)"},on:{change:function(t){e.searchParams.q=""},blur:function(t){e.searchParams.q=""}},model:{value:e.props.value,callback:function(t){e.$set(e.props,"value",t)},expression:"props.value"}},[e._l(e.results.data,(function(t){return[e._t("option",(function(){return[r("el-option",{key:t.id,attrs:{value:t.id,label:t.name}},[e._v("\n                "+e._s(t.name)+"\n            ")])]}),{item:t})]}))],2)}),[],!1,null,null,null);t.default=component.exports},696:function(e,t,r){"use strict";r.r(t);var o={layout:"admin",middleware:"auth",head:function(){return{title:"Editar grupo Wordle"}}},n=r(16),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ui-model-edit",{attrs:{"model-name":"wordle-groups","model-id":e.$route.params.id,singular:"Grupo",plural:"Grupos"},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.value,n=t.errorFields;return[r("ui-field",{attrs:{layout:"horizontal",label:"Nome do grupo",error:n.name}},[r("input",{directives:[{name:"model",rawName:"v-model",value:o.name,expression:"value.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:o.name},on:{input:function(t){t.target.composing||e.$set(o,"name",t.target.value)}}})]),e._v(" "),r("ui-field",{attrs:{layout:"horizontal",label:"Proprietário",error:n.owner}},[r("ui-model-select",{attrs:{"model-name":"user"},model:{value:o.owner,callback:function(t){e.$set(o,"owner",t)},expression:"value.owner"}})],1),e._v(" "),r("ui-field",{attrs:{layout:"horizontal",label:"Quantidade de letras",error:n.letters}},[r("input",{directives:[{name:"model",rawName:"v-model",value:o.letters,expression:"value.letters"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:o.letters},on:{input:function(t){t.target.composing||e.$set(o,"letters",t.target.value)}}})]),e._v(" "),r("ui-field",{attrs:{layout:"horizontal",label:"Quantidade de tentativas",error:n.attempts}},[r("input",{directives:[{name:"model",rawName:"v-model",value:o.attempts,expression:"value.attempts"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:o.attempts},on:{input:function(t){t.target.composing||e.$set(o,"attempts",t.target.value)}}})]),e._v(" "),r("ui-field",{attrs:{layout:"horizontal",error:n.show_winners}},[r("div",{staticClass:"d-flex align-items-center"},[r("el-switch",{attrs:{"active-value":1,"inactive-value":" "},model:{value:o.show_winners,callback:function(t){e.$set(o,"show_winners",t)},expression:"value.show_winners"}}),e._v(" "),r("div",{staticClass:"flex-grow-1 ps-3"},[e._v("Exibir vencedores à medida que forem vencendo?")])],1)]),e._v(" "),r("ui-field",{attrs:{layout:"horizontal",label:"Jogo termina quando x players vencerem",error:n.geaxpw}},[r("input",{directives:[{name:"model",rawName:"v-model",value:o.geaxpw,expression:"value.geaxpw"}],staticClass:"form-control",attrs:{type:"number"},domProps:{value:o.geaxpw},on:{input:function(t){t.target.composing||e.$set(o,"geaxpw",t.target.value)}}})]),e._v(" "),r("ui-field",{attrs:{layout:"horizontal",label:"Duração do jogo em minutos",error:n.duration}},[r("select",{directives:[{name:"model",rawName:"v-model",value:o.duration,expression:"value.duration"}],staticClass:"form-control",attrs:{name:"",id:""},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(o,"duration",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:""}},[e._v("Ilimitado")]),e._v(" "),r("option",{domProps:{value:30}},[e._v("30 minutos")]),e._v(" "),r("option",{domProps:{value:60}},[e._v("1 hora")]),e._v(" "),r("option",{domProps:{value:360}},[e._v("6 horas")]),e._v(" "),r("option",{domProps:{value:720}},[e._v("12 horas")]),e._v(" "),r("option",{domProps:{value:1440}},[e._v("1 dia")])])])]}}])})}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiField:r(552).default,UiModelSelect:r(575).default,UiModelEdit:r(569).default})}}]);