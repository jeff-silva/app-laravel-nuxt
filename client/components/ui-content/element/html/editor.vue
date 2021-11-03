<template>
    <div>
        <monaco-editor :value="html"
            v-bind="{width:235, height:400, language:'html', theme:'vs-dark'}"
            @change="$emit('update:html', $event);"
        ></monaco-editor>
    </div>
</template>

<script>
import MonacoEditor from 'monaco-editor-vue';

export default {
    components: { MonacoEditor },

    props: {
        html: {default:''},
    },
}
</script>