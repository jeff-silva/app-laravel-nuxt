<template>
    <div class="border mb-2">
        <div class="p-2 bg-light">{{ label }}</div>
        <div class="p-2">
            <ui-field label="Background" v-bind="{layout:'horizontal', labelWidth:'100px'}">
                <el-color-picker v-model="value['background-color']" @change="$emit('value', value)"></el-color-picker>
            </ui-field>

            <ui-field label="Texto" v-bind="{layout:'horizontal', labelWidth:'100px'}">
                <el-color-picker v-model="value['color']" @change="$emit('value', value)"></el-color-picker>
            </ui-field>

            <ui-upload v-model="value['background-image']"></ui-upload>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        value: Object,
    },
}
</script>