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

        <div class="text-end">
            <a href="javascript:;" class="btn btn-success" @click="emailTestOpen()">
                Testar envio de e-mail
            </a>
        </div>

        <ui-modal v-model="emailTest">
            <template #header>Testar envio de e-mail</template>
            <template #body>
                <div class="alert alert-success" v-if="emailTest.success">
                    E-mail enviado
                </div>

                <ui-field label="Para" layout="horizontal" label-width="100px">
                    <input type="text" class="form-control" v-model="emailTest.to">
                </ui-field>

                <ui-field label="Assunto" layout="horizontal" label-width="100px">
                    <input type="text" class="form-control" v-model="emailTest.subject">
                </ui-field>

                <ui-field>
                    <ckeditor v-model="emailTest.body"></ckeditor>
                </ui-field>
            </template>
            <template #footer>
                <button type="button" class="btn" @click="emailTest=false">
                    Fechar
                </button>

                <button type="button" class="btn btn-primary" v-loading="emailTest.sending" @click="emailTestSend()">
                    Enviar
                </button>
            </template>
        </ui-modal>

        <div class="row mt-5">
            <div class="col-8">
                <ui-field label="Cabeçalho de e-mail">
                    <ui-code v-model="settings['mail.header']"></ui-code>
                </ui-field>
        
                <ui-field label="Rodapé de e-mail">
                    <ui-code v-model="settings['mail.footer']"></ui-code>
                </ui-field>
            </div>

            <div class="col-4">
                <div class="mb-2">Preview</div>

                <div class="border p-3">
                    <div v-if="settings['mail.header']" v-html="settings['mail.header']"></div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum beatae mollitia officia unde nihil culpa assumenda, velit alias vero quasi cumque et nam a nostrum rem odit expedita quis? Doloribus?</p>
                    <div v-if="settings['mail.footer']" v-html="settings['mail.footer']"></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Vue from 'vue';
import CKEditor from 'ckeditor4-vue';
Vue.use(CKEditor);

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
            emailTest: false,
        };
    },

    methods: {
        emailTestOpen() {
            this.emailTest = {
                to: this.$store.state.auth.user.email,
                subject: 'E-mail de teste',
                body: [
                    `<p>Lorem ipsum <strong>dolor</strong>, sit amet consectetur adipisicing elit.</p>`,
                    `<p>Eaque <em>sequi provident corrupti facilis</em> veniam? Laudantium, alias aliquid!</p>`,
                    `<p>Eligendi iste obcaecati labore saepe nihil impedit corrupti quo tenetur, ad et beatae.</p>`,
                ].join("\n"),
                sending: false,
                success: false,
            };
        },

        emailTestSend() {
            this.emailTest.sending = true;
            this.emailTest.success = false;
            this.$axios.post('/api/email-test', this.emailTest).then(resp => {
                this.emailTest.sending = false;
                this.emailTest.success = true;
            });
        },
    },
}
</script>