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
                <div class="col-12 col-md-4">
                    <ui-user-card :user="post"></ui-user-card>
                    <div class="mt-2"></div>
                    <ui-upload v-model="post.photo" :preview="false"></ui-upload>
                </div>
                
                <div class="col-12 col-md-8">
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
            userId: (this.$route.params.id || false),
            post: {},
        };
    },

    methods: {
        userLoad() {
            if (! parseInt(this.userId)) return;
            this.$axios.get(`/api/users/find/${this.userId}`).then(resp => {
                this.post = resp.data;
            });
        },
    },

    mounted() {
        if (this.userId=='me') {
            this.userId = this.$store.state.auth.user.id;
        }
        this.userLoad();
    },
}
</script>