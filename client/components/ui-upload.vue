<template>
    <div @drop.prevent="dropFile" @dragover.prevent>
        
        <!-- Browser -->
        <div class="input-group">
            <div class="input-group-btn">
                <button type="button" class="btn rounded-0" @click="browser()">
                    <i class="fas fa-upload"></i>
                </button>
            </div>

            <div class="input-group-btn">
                <button type="button" class="btn rounded-0" @click="modal=true">
                    <i class="fas fa-link"></i>
                </button>
            </div>

            <div class="form-control" style="overflow:hidden;">{{ props.value || 'Sem arquivo' }}</div>
        </div>

        <!-- Progress -->
        <div class="progress" style="height:5px;" v-if="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100" :style="`width: ${progress}%`"></div>
        </div>

        <!-- Drop/preview -->
        <div @click="browser()" class="mt-2" v-if="preview"
            :style="`height:${height}; background:#f5f5f5; border:dashed 3px #ccc; display:flex; align-items:center; justify-content:center; cursor:pointer;`"
        >
            <div v-if="!compValue" >
                <small class="d-block text-muted">Soltar arquivo</small>
            </div>
    
            <div v-if="compValue">
                <div v-if="compValue.type=='image'">
                    <img :src="compValue.url" alt="" :style="`margin:0 auto; max-height:calc(${height} - 20px);`">
                </div>
                <div v-else>
                    {{ compValue.type }}
                </div>
            </div>
        </div>

        <!-- Modal URL -->
        <ui-modal v-model="modal">
            <template #header>header</template>
            <template #body>
                <ui-field label="URL">
                    <input type="text" class="form-control" v-model="props.value">
                </ui-field>
            </template>
            <template #footer>
                <button type="button" class="btn btn-primary" @click="modal=false; emitValue();">
                    Ok
                </button>
            </template>
        </ui-modal>

        <div class="text-end" v-if="compValue">
            <a href="javascript:;" class="ms-2" @click="props.value=''">Apagar</a>
            <a :href="compValue.url" target="_blank" class="ms-2">Abrir nova aba</a>
            <a :href="compValue.url" :download="compValue.url" class="ms-2">Download</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        value: {default:''},
        height: {default:'150px'},
        preview: {default:true},
    },

    watch: {
        $props: {deep:true, handler(value) {
            this.props = JSON.parse(JSON.stringify(value));
        }},
    },

    methods: {
        emitValue() {
            this.$emit('value', this.props.value);
            this.$emit('input', this.props.value);
            this.$emit('change', this.props.value);
        },

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
            let data = new FormData();
            data.append('file', file, file.name);

            this.$axios.post('/api/files/upload', data, {
                onUploadProgress: ev => {
                    this.progress = Math.round((ev.loaded * 100) / ev.total);
                },
            }).then(resp => {
                this.progress = 0;
                this.props.value = resp.data.url;
                this.emitValue();
            });
            
            // let reader = new FileReader();
            // reader.readAsDataURL(file);
            // reader.onerror = error => { this.file = false; };
            // reader.onload = () => {
            //     this.file = {
            //         name: file.name.replace(/[^a-zA-Z0-9]/g, ' '),
            //         size: file.size,
            //         mime: file.type,
            //         type: (file.type.split('/')[0] || false),
            //         ext: file.name.split('.').pop(),
            //         url: reader.result,
            //     };
            // };
        },
    },

    computed: {
        compValue() {
            if (this.props.value) {
                let f = {url:this.props.value};
                f.ext = f.url.split('.').pop().toLowerCase();

                f.type = false;
                if (['jpg', 'jpeg', 'png', 'bmp', 'gif', 'webp', 'svg'].indexOf(f.ext) >=0) { f.type = 'image'; }
                if (['mp3', 'ogg'].indexOf(f.ext) >=0) { f.type = 'audio'; }
                
                return f;
            }

            return false;
        },
    },

    data() {
        return {
            props: JSON.parse(JSON.stringify(this.$props)),
            progress: 0,
            file: false,
            modal: false,
        };
    },
}
</script>
