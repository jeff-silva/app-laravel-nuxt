(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{571:function(e,t,o){"use strict";o.r(t);o(75);var n=o(573),l={props:{value:[Boolean,String],language:{default:"html"},theme:{default:"vs-dark"}},data:function(){return{props:JSON.parse(JSON.stringify(this.$props)),monaco:!1}},watch:{$props:{deep:!0,handler:function(e){this.$el.contains(document.activeElement)||(this.props=JSON.parse(JSON.stringify(e)),this.setValue(this.props.value))}}},methods:{monacoInit:function(){var e=this;setTimeout((function(){var t=e.$refs.monaco;t&&(e.monaco=n.a.create(t,{value:e.props.value,language:e.props.language,theme:e.props.theme,automaticLayout:!0}),e.monaco.getModel().onDidChangeContent((function(t){e.props.value=e.monaco.getModel().getValue(),e.emitValue()})),e.monaco.getModel().setValue(e.props.value))}),100)},emitValue:function(){this.$emit("value",this.props.value),this.$emit("input",this.props.value),this.$emit("change",this.props.value)},setValue:function(e){this.$el.contains(document.activeElement)||this.monaco.getModel().setValue(e)},getValue:function(){return this.props.value=this.monaco.getModel().getValue()}},mounted:function(){this.monacoInit()}},c=o(16),component=Object(c.a)(l,(function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"monaco",staticStyle:{width:"100%",height:"150px"}})}),[],!1,null,null,null);t.default=component.exports}}]);