<template>
    <div>
        <ui-upload ref="upload" @change="$refs.upload.clear(); $refs.file.refresh();"></ui-upload>
        <div class="mb-3"></div>
        <ui-file ref="file"></ui-file>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    layout: 'admin',
}
</script>