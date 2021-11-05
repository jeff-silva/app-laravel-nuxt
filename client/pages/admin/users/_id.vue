<template>
    <div>
        <ui-form v-model="post"
            method="post"
            action="/api/users/save"
            #default="{validator, loading, submit}"
            @success="$router.push(`/admin/users/${$event.id}`); post=$event;"
            success-message="Usuário salvo"
        >
            <div class="row">
                <div class="col-12 col-md-12">
                    <ui-field label="Nome" :error="validator.error.name">
                        <input type="text" class="form-control" v-model="post.name">
                    </ui-field>

                    <ui-field label="E-mail" :error="validator.error.email">
                        <input type="text" class="form-control" v-model="post.email">
                    </ui-field>
                </div>
            </div>


            <div class="text-end">
                <nuxt-link to="/admin/users" class="btn">Voltar</nuxt-link>

                <button type="submit" class="btn btn-primary" v-loading="loading">
                    Salvar
                </button>
            </div>
        </ui-form>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    layout: 'admin',

    data() {
        return {
            edit: true,
            post: {},
        };
    },

    methods: {
        postLoad() {
            let id = parseInt(this.$route.params.id) || null;
            if (! id) return;
            this.$axios.get(`/api/users/find/${id}`).then(resp => {
                this.post = resp.data;
            });
        },
    },

    mounted() {
        this.postLoad();
    },
}
</script>