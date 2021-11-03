<template>
    <div>
        <ui-field label="Background color">
            <div class="input-group">
                <div class="input-group-text p-0">
                    <el-color-picker v-model="props.value['background-color']" size="mini"></el-color-picker>
                </div>
                <input type="text" class="form-control" v-model="props.value['background-color']">
            </div>
        </ui-field>
        <pre>$data: {{ $data }}</pre>
    </div>
</template>

<script>
export default {
    props: {
        value: Object,
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
                for(let i in props) { this.$emit(`update:${i}`, props[i]); }
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