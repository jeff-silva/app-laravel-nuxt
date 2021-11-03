<template>
    <div>
        <ui-field label="Título">
            <input type="text" class="form-control" v-model="props.title">
        </ui-field>

        <ui-field label="Tipo de título">
            <select class="form-control" v-model="props.tag">
                <option value="h1">H1</option>
                <option value="h2">H2</option>
                <option value="h3">H3</option>
                <option value="h4">H4</option>
                <option value="h5">H5</option>
                <option value="h6">H6</option>
            </select>
        </ui-field>
        
        <ui-field label="Container">
            <el-checkbox v-model="props.container">Exibir centralizado?</el-checkbox>
        </ui-field>
    </div>
</template>

<script>
export default {
    props: {
        title: {default:''},
        tag: {default:'h1'},
        container: {default:true},
    },

    watch: {
        $props: {deep:true, handler(props) {
            if (this.$el.contains(window.document.activeElement)) return;
            if (this._preventReceiveProps) return;
            props = JSON.parse(JSON.stringify(props));
            for(let i in props) this.props[i] = props[i];
        }},

        props: {deep:true, handler(props) {
            this._preventReceiveProps = true;
            setTimeout(() => {
                for(let i in props) {
                    if (i=='value') {
                        console.log(i, props[i]);
                        this.$emit('value', props[i]);
                        this.$emit('input', props[i]);
                        this.$emit('change', props[i]);
                        continue;
                    }
                    this.$emit(`update:${i}`, props[i]);
                }
                this._preventReceiveProps = false;
            }, 100);
        }},
    },

    data() {
        return {
            props: JSON.parse(JSON.stringify(this.$props)),
        };
    },
}
</script>