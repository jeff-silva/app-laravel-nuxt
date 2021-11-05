<template>
    <div>
        <ui-field label="Nome da aplicação" layout="horizontal">
            <input type="text" class="form-control" v-model="settings['app.name']">
        </ui-field>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    layout: 'admin',

    props: {
        settings: Object,
        settingsGetAll: Function,
        settingsSaveAll: Function,
    },

    data() {
        return {
            propsSettings: JSON.parse(JSON.stringify(this.settings)),
        };
    },
}
</script>