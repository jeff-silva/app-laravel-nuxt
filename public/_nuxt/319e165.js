(window.webpackJsonp=window.webpackJsonp||[]).push([[2,8],{535:function(e,t,r){"use strict";r.r(t);var o={props:{value:{default:""},show:{default:!1},placeholder:{default:""}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props))}},methods:{emitvalue:function(){this.$emit("input",this.props.value),this.$emit("value",this.props.value),this.$emit("change",this.props.value)}}},l=r(10),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-group form-control p-0"},["checkbox"==(e.props.show?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:e.props.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(e.props.value)?e._i(e.props.value,null)>-1:e.props.value},on:{keyup:function(t){return e.emitvalue()},change:function(t){var r=e.props.value,o=t.target,l=!!o.checked;if(Array.isArray(r)){var n=e._i(r,null);o.checked?n<0&&e.$set(e.props,"value",r.concat([null])):n>-1&&e.$set(e.props,"value",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.props,"value",l)}}}):"radio"==(e.props.show?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:e.props.placeholder,type:"radio"},domProps:{checked:e._q(e.props.value,null)},on:{keyup:function(t){return e.emitvalue()},change:function(t){return e.$set(e.props,"value",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.props.value,expression:"props.value"}],staticClass:"form-control border-0",attrs:{placeholder:e.props.placeholder,type:e.props.show?"text":"password"},domProps:{value:e.props.value},on:{keyup:function(t){return e.emitvalue()},input:function(t){t.target.composing||e.$set(e.props,"value",t.target.value)}}}),e._v(" "),r("div",{staticClass:"input-group-btn"},[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(t){e.props.show=!e.props.show}}},[e.props.show?r("i",{staticClass:"fas fa-eye"}):r("i",{staticClass:"fas fa-eye-slash"})])])])}),[],!1,null,null,null);t.default=component.exports},539:function(e,t,r){"use strict";r.r(t);var o={props:{redirect:{default:""}},data:function(){return{loading:!1,error:{},post:{},validator:this.$validator({email:{presence:!0,email:!0},password:{presence:!0}})}},methods:{submit:function(){var e=this;this.validator.validate(this.post),this.validator.invalid()||(this.loading=!0,this.error=!1,this.$auth.loginWith("jwt",{data:this.post}).then((function(t){e.loading=!1,e.$emit("success",t.data),e.post={},e.redirect&&e.$router.push(e.redirect)})).catch((function(t){e.loading=!1,e.error=t.response.data.error})))}}},l=r(10),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{on:{submit:function(t){return t.preventDefault(),e.submit()}}},[e._t("fields",(function(){return[r("ui-field",{attrs:{error:e.validator.error.email}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.post.email,expression:"post.email"}],staticClass:"form-control",attrs:{type:"text",placeholder:"E-mail"},domProps:{value:e.post.email},on:{change:function(t){return e.validator.validate(e.post,"email")},input:function(t){t.target.composing||e.$set(e.post,"email",t.target.value)}}})]),e._v(" "),r("ui-field",{attrs:{error:e.validator.error.password}},[r("ui-password",{attrs:{placeholder:"Senha"},nativeOn:{change:function(t){return e.validator.validate(e.post,"password")}},model:{value:e.post.password,callback:function(t){e.$set(e.post,"password",t)},expression:"post.password"}})],1)]}),{loading:e.loading,error:e.error}),e._v(" "),e._t("action",(function(){return[r("button",{staticClass:"btn btn-primary w-100",attrs:{type:"submit",disabled:e.validator.invalid()}},[e.loading?r("i",{staticClass:"fas fa-spin fa-spinner me-1"}):e._e(),e._v(" Login\n            ")])]}),{loading:e.loading,error:e.error}),e._v(" "),e._t("after",null,{loading:e.loading,error:e.error})],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiField:r(202).default,UiPassword:r(535).default})}}]);