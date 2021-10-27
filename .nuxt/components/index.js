export { default as UiAuthLogin } from '../..\\client\\components\\ui-auth-login.vue'
export { default as UiAuthPassword } from '../..\\client\\components\\ui-auth-password.vue'
export { default as UiAuthRegister } from '../..\\client\\components\\ui-auth-register.vue'
export { default as UiField } from '../..\\client\\components\\ui-field.vue'
export { default as UiUpload } from '../..\\client\\components\\ui-upload.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
