<template>
    <div class="row g-0 border">
        <div class="col-3 p-2 bg-white">
            Pastas
        </div>
        <div class="col-9 p-2 bg-light" v-if="files">
            <div class="row">
                <div class="col-3 mb-2" v-for="f in files.data" :key="f.id" @click="selectToggle(f)">
                    <div class="p-2" :class="{'bg-primary':(props.value.indexOf(f) >=0)}" style="cursor:pointer;">
                        <img :src="f.url" alt="" style="width:100%; height:150px; object-fit:cover;" v-if="['jpg', 'jpeg', 'png', 'bmp', 'svg', 'gif', 'webp'].indexOf(f.ext) >=0">
                        <div v-else style="height:150px;">{{ f.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: Array,
    },

    data() {
        return {
            props: JSON.parse(JSON.stringify(this.$props)),
            files: false,
        };
    },

    methods: {
        emitValue() {
            this.$emit('value', this.props.value);
            this.$emit('input', this.props.value);
            this.$emit('change', this.props.value);
        },

        refresh() {
            this.$axios.get('/api/files/search').then(resp => {
                this.files = resp.data;
            });
        },

        selectToggle(file) {
            let index = this.props.value.indexOf(file);
            if (index>=0) { this.props.value.splice(index, 1); }
            else { this.props.value.push(file); }
            this.emitValue();
        },
    },

    mounted() {
        this.refresh();
    },
}
</script>