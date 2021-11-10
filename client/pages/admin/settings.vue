<template>
    <div>
        <div class="row g-0 bg-white">
            <div class="col-2 bg-dark">
                <ui-nav :items="$store.state.admin.settings" mode="vertical" text-color="#fff"></ui-nav>
            </div>

            <div class="col-10">
                <ui-form method="post" action="/api/settings/save-all" v-model="settings" #default="{loading}" success-message="Configurações alteradas">
                    <div class="card">
                        <div class="card-body">
                            <nuxt-child :settings="settings" :settings-get-all="settingsGetAll" :settings-save-all="settingsSaveAll"></nuxt-child>
                        </div>

                        <div class="card-footer text-end">
                            <button type="submit" class="btn btn-primary" v-loading="loading">
                                Salvar
                            </button>
                        </div>
                    </div>
                </ui-form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    layout: 'admin',

    data() {
        return {
            settings: {},
        };
    },

    methods: {
        settingsGetAll() {
            this.$axios.get('/api/settings/get-all').then(resp => {
                this.settings = resp.data;
            });
        },

        settingsSaveAll() {
            this.$axios.post('/api/settings/save-all').then(resp => {
                this.settings = resp.data;
            });
        },
    },

    mounted() {
        this.settingsGetAll();
    },
}
</script>