<template>
    <div @drop.prevent="dropFile" @dragover.prevent>
        <div class="input-group">
            <div class="input-group-prepend">
                <div class="input-group-text">
                    Arquivo
                </div>
            </div>

            <div class="form-control" v-if="!file">Sem arquivo</div>
            <input type="text" class="form-control" v-if="file" v-model="file.name">
        </div>

        <div @click="browser()" class="mt-2">
            <div v-if="!file" :style="`height:${height}; background:#f5f5f5; border:dashed 3px #ccc; display:flex; align-items:center; justify-content:center; cursor:pointer;`">
                <small class="d-block text-muted">Soltar arquivo</small>
            </div>
    
            <div v-if="file" :style="`height:${height}; background:#f5f5f5; padding:10px; display:flex; align-items:center; justify-content:center; overflow:hidden;`">
                <img :src="file.url" alt="" v-if="file.type=='image'" :style="`margin:0 auto; max-height:calc(${height} - 20px);`">
                <div v-else>{{ file.type }}</div>
            </div>
        </div>

        <div class="text-end" v-if="file">
            <a href="javascript:;" class="ms-2" @click="file=false">Apagar</a>
            <a :href="file.url" target="_blank" class="ms-2">Abrir nova aba</a>
            <a :href="file.url" :download="file.name+file.ext" class="ms-2">Download</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        height: {default:'150px'},
    },

    methods: {
        browser() {
            let file = Object.assign(document.createElement('input'), {
                type: 'file',
                onchange: ev => {
                    this.upload(ev.target.files[0]);
                },
            }).click();
        },

        dropFile(ev) {
            this.upload(ev.dataTransfer.files[0]);
        },

        upload(file) {
            let reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onerror = error => { this.file = false; };
            reader.onload = () => {
                this.file = {
                    name: file.name.replace(/[^a-zA-Z0-9]/g, ' '),
                    size: file.size,
                    mime: file.type,
                    type: (file.type.split('/')[0] || false),
                    ext: file.name.split('.').pop(),
                    url: reader.result,
                };
            };
        },
    },

    data() {
        return {
            file: false,
        };
    },
}
</script>
