<template>
    <div>
        <form @submit.prevent="submit()">
            <slot name="after" :error="error"></slot>

            <slot name="fields" :error="error">
                <ui-field :error="error.name">
                    <input type="text" class="form-control" v-model="post.name" placeholder="Name">
                </ui-field>

                <ui-field :error="error.email">
                    <input type="text" class="form-control" v-model="post.email" placeholder="E-mail">
                </ui-field>

                <ui-field :error="error.password">
                    <input type="password" class="form-control" v-model="post.password" placeholder="Senha">
                </ui-field>

                <ui-field :error="error.password_confirmation">
                    <input type="password" class="form-control" v-model="post.password_confirmation" placeholder="Repita senha">
                </ui-field>
            </slot>

            <slot name="action" :error="error">
                <button type="submit" class="btn btn-primary w-100">
                    <i class="fas fa-spin fa-spinner me-1" v-if="loading"></i>
                    Cadastrar
                </button>
            </slot>

            <slot name="after" :error="error"></slot>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            post: {},
            error: {},
        };
    },

    methods: {
        validate() {
            this.error = {};
            if (this.post.password && this.post.password!=this.post.password_confirmation) {
                this.error.password_confirmation = ["Password e confirmação não batem"];
            }
        },

        submit() {
            this.validate();
            if (Object.values(this.error).length) return;

            this.loading = true;
            this.$axios.post('/api/register', this.post).then(resp => {
                this.loading = false;
                console.log(resp);
            }).catch(err => {
                this.loading = false;
                this.error = err.response.data.fields;
            });
        },
    },
}
</script>