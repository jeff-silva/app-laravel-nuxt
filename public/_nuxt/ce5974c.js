(window.webpackJsonp=window.webpackJsonp||[]).push([[18,2,7,9,11],{537:function(t,e,r){"use strict";r.r(e);var o={props:{value:{default:""},show:{default:!1},placeholder:{default:""}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props))}},methods:{emitvalue:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}}},n=r(9),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"input-group form-control p-0"},["checkbox"==(t.props.show?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:t.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.props.value)?t._i(t.props.value,null)>-1:t.props.value},on:{keyup:function(e){return t.emitvalue()},change:function(e){var r=t.props.value,o=e.target,n=!!o.checked;if(Array.isArray(r)){var l=t._i(r,null);o.checked?l<0&&t.$set(t.props,"value",r.concat([null])):l>-1&&t.$set(t.props,"value",r.slice(0,l).concat(r.slice(l+1)))}else t.$set(t.props,"value",n)}}}):"radio"==(t.props.show?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:t.props.placeholder,type:"radio"},domProps:{checked:t._q(t.props.value,null)},on:{keyup:function(e){return t.emitvalue()},change:function(e){return t.$set(t.props,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:t.props.placeholder,type:t.props.show?"text":"password"},domProps:{value:t.props.value},on:{keyup:function(e){return t.emitvalue()},input:function(e){e.target.composing||t.$set(t.props,"value",e.target.value)}}}),t._v(" "),r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){t.props.show=!t.props.show}}},[t.props.show?r("i",{staticClass:"fas fa-eye"}):r("i",{staticClass:"fas fa-eye-slash"})])])])}),[],!1,null,null,null);e.default=component.exports},543:function(t,e,r){"use strict";r.r(e);r(47),r(46),r(145);var o={props:{value:{default:""},height:{default:"150px"},preview:{default:!0}},watch:{$props:{deep:!0,handler:function(t){this.props=JSON.parse(JSON.stringify(this.$props))}}},methods:{emitValue:function(){this._preventRecursive||(this._preventRecursive=!0,this.$emit("value",this.props.value),this.$emit("input",this.props.value),this.$emit("change",this.props.value),this._preventRecursive=!1)},browser:function(){var t=this;Object.assign(document.createElement("input"),{type:"file",onchange:function(e){t.upload(e.target.files[0])}}).click()},dropFile:function(t){this.upload(t.dataTransfer.files[0])},upload:function(t){var e=this,data=new FormData;data.append("file",t,t.name),this.$axios.post("/api/files/upload",data,{onUploadProgress:function(t){e.progress=Math.round(100*t.loaded/t.total)}}).then((function(t){e.progress=0,e.props.value=t.data.url,e.emitValue()}))},clear:function(){this.props.value="",this.emitValue()}},computed:{compValue:function(){if(this.props.value){var t={url:this.props.value};return t.ext=t.url.split(".").pop().toLowerCase(),t.type=!1,["jpg","jpeg","png","bmp","gif","webp","svg"].indexOf(t.ext)>=0&&(t.type="image"),["mp3","ogg"].indexOf(t.ext)>=0&&(t.type="audio"),t}return!1}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props)),progress:0,file:!1}}},n=r(9),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{on:{drop:function(e){return e.preventDefault(),t.dropFile.apply(null,arguments)},dragover:function(t){t.preventDefault()}}},[r("div",{staticClass:"input-group form-control p-0"},[r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn rounded-0",attrs:{type:"button"},on:{click:function(e){return t.browser()}}},[r("i",{staticClass:"fas fa-upload"})])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{type:"text",placeholder:"Sem arquivo"},domProps:{value:t.props.value},on:{keyup:function(e){return t.emitValue()},input:function(e){e.target.composing||t.$set(t.props,"value",e.target.value)}}}),t._v(" "),t.compValue?r("div",{staticClass:"input-group-btn"},[r("a",{staticClass:"btn",attrs:{href:t.props.value,target:"_blank"}},[r("i",{staticClass:"fas fa-link"})])]):t._e(),t._v(" "),t.compValue?r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn btn-danger rounded-0",attrs:{type:"button"},on:{click:function(e){t.props.value="",t.emitValue()}}},[r("i",{staticClass:"fas fa-times"})])]):t._e()]),t._v(" "),t.progress?r("div",{staticClass:"progress",staticStyle:{height:"5px"}},[r("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",style:"width: "+t.progress+"%",attrs:{role:"progressbar","aria-valuenow":t.progress,"aria-valuemin":"0","aria-valuemax":"100"}})]):t._e(),t._v(" "),t.preview?r("div",{staticClass:"mt-2",style:"height:"+t.height+"; background:#f5f5f5; border:dashed 3px #ccc; display:flex; align-items:center; justify-content:center; cursor:pointer;",on:{click:function(e){return t.browser()}}},[t.compValue?t._e():r("div",[r("small",{staticClass:"d-block text-muted"},[t._v("Soltar arquivo")])]),t._v(" "),t.compValue?r("div",["image"==t.compValue.type?r("div",[r("img",{style:"margin:0 auto; max-height:calc("+t.height+" - 20px);",attrs:{src:t.compValue.url,alt:""}})]):r("div",[t._v("\n                "+t._s(t.compValue.type)+"\n            ")])]):t._e()]):t._e()])}),[],!1,null,null,null);e.default=component.exports},544:function(t,e,r){"use strict";r.r(e);var o={props:{value:Object,method:{default:"get"},action:{default:""},validator:Object,successMessage:{default:""}},data:function(){return{loading:!1,validate:this.$validator(this.validator)}},methods:{submit:function(){var t=this;this.loading=!0,("post"==this.method?this.$axios.post(this.action,this.value):this.$axios.get(this.action,{params:this.value})).then((function(e){t.loading=!1,t.$emit("success",e.data),t.successMessage&&t.$swal.fire("",t.successMessage,"success")})).catch((function(e){t.loading=!1,t.validate.setError(e.response.data.fields)}))}}},n=r(9),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("form",{attrs:{method:t.method,action:t.action},on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[t._t("default",null,{method:t.method,action:t.action,loading:t.loading,submit:t.submit,validator:t.validate})],2)}),[],!1,null,null,null);e.default=component.exports},547:function(t,e,r){"use strict";var o=r(15),n=r(5),l=r(146),d=r(23),c=r(17),v=r(204),m=r(105),f=r(290),h=r(6),y=r(73).f,x=r(48).f,_=r(18).f,C=r(548),w=r(549).trim,$="Number",N=n.Number,k=N.prototype,S=function(t){var e=f(t,"number");return"bigint"==typeof e?e:E(e)},E=function(t){var e,r,o,n,l,d,c,code,v=f(t,"number");if(m(v))throw TypeError("Cannot convert a Symbol value to a number");if("string"==typeof v&&v.length>2)if(43===(e=(v=w(v)).charCodeAt(0))||45===e){if(88===(r=v.charCodeAt(2))||120===r)return NaN}else if(48===e){switch(v.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+v}for(d=(l=v.slice(2)).length,c=0;c<d;c++)if((code=l.charCodeAt(c))<48||code>n)return NaN;return parseInt(l,o)}return+v};if(l($,!N(" 0o1")||!N("0b1")||N("+0x1"))){for(var V,I=function(t){var e=arguments.length<1?0:N(S(t)),r=this;return r instanceof I&&h((function(){C(r)}))?v(Object(e),r,I):e},A=o?y(N):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),O=0;A.length>O;O++)c(N,V=A[O])&&!c(I,V)&&_(I,V,x(N,V));I.prototype=k,k.constructor=I,d(n,$,I)}},548:function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},549:function(t,e,r){var o=r(34),n=r(19),l="["+r(550)+"]",d=RegExp("^"+l+l+"*"),c=RegExp(l+l+"*$"),v=function(t){return function(e){var r=n(o(e));return 1&t&&(r=r.replace(d,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:v(1),end:v(2),trim:v(3)}},550:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},553:function(t,e,r){"use strict";r.r(e);r(547);var o={props:{value:[Number,String]},watch:{value:function(t){this.propsValue=t,this.addressLoad()}},data:function(){return{propsValue:this.value,address:{name:"",route:"",number:"",complement:"",zipcode:"",district:"",city:"",state:"",st:"",country:"",co:"",lat:"",lng:""},results:[]}},methods:{emitValue:function(){this.$emit("input",this.propsValue),this.$emit("value",this.propsValue),this.$emit("change",this.propsValue)},addressLoad:function(){var t=this,e=+this.propsValue;e&&this.$axios.get("/api/addresses/find/".concat(e)).then((function(e){t.address=e.data}))},addressSave:function(){var t=this;this.$axios.post("/api/addresses/save",this.address).then((function(e){t.address=e.data,t.propsValue=e.data.id,t.emitValue()}))},objectToAddress:function(t){this.address.route=t.address.road,this.address.number="",this.address.complement="",this.address.zipcode=t.address.postcode||"",this.address.district=t.address.suburb||"",this.address.city=t.address.city||"",this.address.state=t.address.state||"",this.address.st="",this.address.country=t.address.country||"",this.address.co=t.address.country_code||"",this.address.lat=t.lat,this.address.lng=t.lon,this.addressSave()},searchAddressBy:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"route",r=this.address[e]||"";this.$axios.get("https://nominatim.openstreetmap.org/search.php?format=json&addressdetails=1&extratags=1&namedetails=1&limit=10&q=".concat(r)).then((function(e){t.results=e.data}))}},mounted:function(){this.addressLoad()}},n=o,l=r(9),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row g-3"},[r("div",{staticClass:"col-12 col-md-8"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.address.route,expression:"address.route"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Rua"},domProps:{value:t.address.route},on:{change:function(e){return t.searchAddressBy("route")},input:function(e){e.target.composing||t.$set(t.address,"route",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-6 col-md-4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.address.number,expression:"address.number"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Nº"},domProps:{value:t.address.number},on:{change:function(e){return t.addressSave()},input:function(e){e.target.composing||t.$set(t.address,"number",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-6 col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.address.complement,expression:"address.complement"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Complemento"},domProps:{value:t.address.complement},on:{change:function(e){return t.addressSave()},input:function(e){e.target.composing||t.$set(t.address,"complement",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.address.district,expression:"address.district"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Bairro"},domProps:{value:t.address.district},on:{change:function(e){return t.addressSave()},input:function(e){e.target.composing||t.$set(t.address,"district",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.address.zipcode,expression:"address.zipcode"}],staticClass:"form-control",attrs:{type:"text",placeholder:"CEP"},domProps:{value:t.address.zipcode},on:{input:function(e){e.target.composing||t.$set(t.address,"zipcode",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-12 col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.address.city,expression:"address.city"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Cidade"},domProps:{value:t.address.city},on:{change:function(e){return t.addressSave()},input:function(e){e.target.composing||t.$set(t.address,"city",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-6 col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.address.state,expression:"address.state"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Estado",readonly:""},domProps:{value:t.address.state},on:{input:function(e){e.target.composing||t.$set(t.address,"state",e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col-6 col-md-6"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.address.country,expression:"address.country"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Estado",readonly:""},domProps:{value:t.address.country},on:{input:function(e){e.target.composing||t.$set(t.address,"country",e.target.value)}}})])]),t._v(" "),t.results.length>0?r("div",{staticClass:"list-group shadow-sm"},t._l(t.results,(function(e){return r("a",{staticClass:"list-group-item",attrs:{href:"javascript:;"},on:{click:function(r){t.objectToAddress(e),t.results=[]}}},[t._v("\n            "+t._s([e.address.road,e.address.suburb,e.address.city,e.address.state].filter((function(t){return!!t})).join(", "))+"\n        ")])})),0):t._e()])}),[],!1,null,null,null);e.default=component.exports},566:function(t,e,r){"use strict";r.r(e);var o={middleware:"auth",layout:"admin",data:function(){return{userId:this.$route.params.id||!1,post:{}}},methods:{userLoad:function(){var t=this;parseInt(this.userId)&&this.$axios.get("/api/users/find/".concat(this.userId)).then((function(e){t.post=e.data}))}},mounted:function(){"me"==this.userId&&(this.userId=this.$store.state.auth.user.id),this.userLoad()}},n=r(9),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ui-form",{attrs:{method:"post",action:"/api/users/save","success-message":"Usuário salvo"},on:{success:function(e){t.$router.push("/admin/users/"+e.id),t.post=e}},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.validator,n=e.loading;e.submit;return[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-md-4 mb-3"},[r("div",{staticClass:"bg-white shadow rounded"},[r("div",{staticClass:"text-center py-4"},[t.post.photo?r("img",{staticStyle:{width:"100px",height:"100px","border-radius":"50%","object-fit":"cover"},attrs:{src:t.post.photo,alt:""}}):t._e(),t._v(" "),t.post.photo?t._e():r("div",{staticClass:"d-inline-block",staticStyle:{width:"100px",height:"100px","border-radius":"50%",background:"#eee"}}),t._v(" "),r("div",{staticClass:"fw-bold mt-4 text-uppercase"},[t._v(t._s(t.post.name))]),t._v(" "),r("ui-upload",{staticClass:"mx-3 mt-4",attrs:{preview:!1},model:{value:t.post.photo,callback:function(e){t.$set(t.post,"photo",e)},expression:"post.photo"}})],1)])]),t._v(" "),r("div",{staticClass:"col-12 col-md-8"},[r("el-tabs",{attrs:{type:"border-card"}},[r("el-tab-pane",{attrs:{label:"Acesso"}},[r("ui-field",{attrs:{label:"Nome",error:o.error.name}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.post.name,expression:"post.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.name},on:{input:function(e){e.target.composing||t.$set(t.post,"name",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"E-mail",error:o.error.email}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.post.email,expression:"post.email"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.email},on:{input:function(e){e.target.composing||t.$set(t.post,"email",e.target.value)}}})])],1),t._v(" "),r("el-tab-pane",{attrs:{label:"Senha"}},[r("ui-field",{attrs:{label:"Senha atual",error:o.error.password}},[r("ui-password",{model:{value:t.post.password,callback:function(e){t.$set(t.post,"password",e)},expression:"post.password"}})],1),t._v(" "),r("ui-field",{attrs:{label:"Nova senha",error:o.error.email}},[r("ui-password")],1),t._v(" "),r("ui-field",{attrs:{label:"Repita nova senha",error:o.error.email}},[r("ui-password")],1)],1),t._v(" "),r("el-tab-pane",{attrs:{label:"Endereço"}},[r("ui-address",{model:{value:t.post.address_id,callback:function(e){t.$set(t.post,"address_id",e)},expression:"post.address_id"}})],1)],1),t._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card-footer border-0 text-end"},[r("nuxt-link",{staticClass:"btn",attrs:{to:"/admin/users"}},[t._v("Voltar")]),t._v(" "),r("button",{directives:[{name:"loading",rawName:"v-loading",value:n,expression:"loading"}],staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("\n                            Salvar\n                        ")])],1)])],1)])]}}]),model:{value:t.post,callback:function(e){t.post=e},expression:"post"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiUpload:r(543).default,UiField:r(202).default,UiPassword:r(537).default,UiAddress:r(553).default,UiForm:r(544).default})}}]);