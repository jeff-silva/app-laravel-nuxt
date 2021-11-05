<template>
    <div>
        <ui-field label="Host" layout="horizontal">
            <div class="d-flex">
                <input type="text" class="form-control" v-model="settings['mail.mailers.smtp.host']">
                <input type="text" class="form-control" v-model="settings['mail.mailers.smtp.port']" style="max-width:150px; margin-left:5px;">
            </div>
        </ui-field>
        
        <ui-field label="Usuário" layout="horizontal">
            <input type="text" class="form-control" v-model="settings['mail.mailers.smtp.username']">
        </ui-field>

        <ui-field label="Senha" layout="horizontal">
            <ui-password v-model="settings['mail.mailers.smtp.password']"></ui-password>
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