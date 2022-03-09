(window.webpackJsonp=window.webpackJsonp||[]).push([[39,18],{549:function(t,e,r){var content=r(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(74).default)("039c59a2",content,!0,{sourceMap:!1})},550:function(t,e,r){"use strict";var o=r(13),n=r(3),l=r(4),c=r(135),v=r(20),f=r(15),d=r(405),m=r(48),_=r(134),h=r(404),N=r(5),y=r(93).f,x=r(40).f,E=r(18).f,I=r(406),w=r(553).trim,C="Number",P=n.Number,j=P.prototype,A=n.TypeError,z=l("".slice),O=l("".charCodeAt),T=function(t){var e=h(t,"number");return"bigint"==typeof e?e:S(e)},S=function(t){var e,r,o,n,l,c,v,code,f=h(t,"number");if(_(f))throw A("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=w(f),43===(e=O(f,0))||45===e){if(88===(r=O(f,2))||120===r)return NaN}else if(48===e){switch(O(f,1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+f}for(c=(l=z(f,2)).length,v=0;v<c;v++)if((code=O(l,v))<48||code>n)return NaN;return parseInt(l,o)}return+f};if(c(C,!P(" 0o1")||!P("0b1")||P("+0x1"))){for(var $,M=function(t){var e=arguments.length<1?0:P(T(t)),r=this;return m(j,r)&&N((function(){I(r)}))?d(Object(e),r,M):e},F=o?y(P):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),k=0;F.length>k;k++)f(P,$=F[k])&&!f(M,$)&&E(M,$,x(P,$));M.prototype=j,j.constructor=M,v(n,C,M)}},552:function(t,e,r){"use strict";r.r(e);var o=r(21),n=(r(550),r(555),r(190),{props:{label:{default:""},layout:{default:"vertical"},labelWidth:{default:"200px"},error:[Boolean,Number,String,Array,Object]},computed:{compError:function(){var t=[];return"string"==typeof this.error?t=[this.error]:Array.isArray(this.error)?t=this.error:"object"==Object(o.a)(this.error)&&(t=Object.values(this.error)),t.join("<br>")}}}),l=(r(556),r(16)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",["horizontal"==t.layout?r("div",{staticClass:"d-flex align-items-center mb-3"},[r("div",{staticClass:"pe-3",style:{minWidth:t.labelWidth,maxWidth:t.labelWidth}},[t._t("label",(function(){return[t._v(t._s(t.label))]}))],2),t._v(" "),r("div",{staticClass:"flex-grow-1"},[t._t("default"),t._v(" "),r("div",{staticClass:"ui-field-info"},[t._t("info")],2),t._v(" "),t.compError?r("small",{staticClass:"d-block text-danger pt-1",domProps:{innerHTML:t._s(t.compError)}}):t._e()],2)]):r("div",{staticClass:"mb-3"},[r("div",{staticClass:"form-label"},[t._t("label",(function(){return[t._v(t._s(t.label))]}))],2),t._v(" "),t._t("default"),t._v(" "),r("div",{staticClass:"ui-field-info"},[t._t("info")],2),t._v(" "),t.compError?r("small",{staticClass:"d-block text-danger pt-1",domProps:{innerHTML:t._s(t.compError)}}):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},553:function(t,e,r){var o=r(4),n=r(25),l=r(14),c=r(554),v=o("".replace),f="["+c+"]",d=RegExp("^"+f+f+"*"),m=RegExp(f+f+"*$"),_=function(t){return function(e){var r=l(n(e));return 1&t&&(r=v(r,d,"")),2&t&&(r=v(r,m,"")),r}};t.exports={start:_(1),end:_(2),trim:_(3)}},554:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},555:function(t,e,r){var o=r(6),n=r(407).values;o({target:"Object",stat:!0},{values:function(t){return n(t)}})},556:function(t,e,r){"use strict";r(549)},557:function(t,e,r){var o=r(73)(!1);o.push([t.i,".ui-field-info *{font-size:12px;color:var(--bs-gray)!important}",""]),t.exports=o},688:function(t,e,r){"use strict";r.r(e);var o={head:function(){return{title:"Configurações principais"}},props:{value:{default:function(){return{}}}},watch:{props:{deep:!0,handler:function(t){for(var i in t)this.$emit(i,t[i])}}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props))}}},n=r(16),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("ui-field",{attrs:{label:"Nome da aplicação",layout:"horizontal"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.value["app.name"],expression:"value['app.name']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.value["app.name"]},on:{input:function(e){e.target.composing||t.$set(t.value,"app.name",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Timezone",layout:"horizontal"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.value["app.timezone"],expression:"value['app.timezone']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.value["app.timezone"]},on:{input:function(e){e.target.composing||t.$set(t.value,"app.timezone",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Locale",layout:"horizontal"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.value["app.locale"],expression:"value['app.locale']"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.value["app.locale"]},on:{input:function(e){e.target.composing||t.$set(t.value,"app.locale",e.target.value)}}})]),t._v(" "),r("ui-field",{attrs:{label:"Tempo de autenticação",layout:"horizontal"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.value["jwt.ttl"],expression:"value['jwt.ttl']"}],staticClass:"form-control",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.value,"jwt.ttl",e.target.multiple?r:r[0])}}},[r("option",{domProps:{value:60}},[t._v("1 hora")]),t._v(" "),r("option",{domProps:{value:240}},[t._v("4 horas")]),t._v(" "),r("option",{domProps:{value:480}},[t._v("8 horas")]),t._v(" "),r("option",{domProps:{value:720}},[t._v("12 horas")]),t._v(" "),r("option",{domProps:{value:1440}},[t._v("24 horas")]),t._v(" "),r("option",{domProps:{value:21600}},[t._v("15 dias")]),t._v(" "),r("option",{domProps:{value:43200}},[t._v("30 dias")]),t._v(" "),r("option",{domProps:{value:259200}},[t._v("6 meses")]),t._v(" "),r("option",{domProps:{value:518400}},[t._v("1 ano")])])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiField:r(552).default})}}]);