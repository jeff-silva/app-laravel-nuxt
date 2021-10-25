<template>
    <div>
        <form @submit.prevent="submit()">
            <div class="alert alert-danger" v-if="error">{{ error }}</div>

            <slot name="after" :loading="loading" :error="error"></slot>

            <slot name="fields" :loading="loading" :error="error">
                <ui-field>
                    <input type="text" class="form-control mb-3" v-model="post.email" placeholder="E-mail">
                </ui-field>
                <ui-field>
                    <input type="password" class="form-control mb-3" v-model="post.password" placeholder="Password">
                </ui-field>
            </slot>

            <slot name="action" :loading="loading" :error="error">
                <button type="submit" class="btn btn-primary w-100">
                    <i class="fas fa-spin fa-spinner me-1" v-if="loading"></i> Login
                </button>
            </slot>

            <slot name="after" :loading="loading" :error="error"></slot>
        </form>
    </div>
</template>

<script>
export default {
    props: {
        redirect: {default:''},
    },

    data() {
        return {
            loading: false,
            error: false,
            post: {},
        };
    },

    methods: {
        submit() {
            this.loading = true;
            this.error = false;
            this.$auth.loginWith('jwt', {data:this.post}).then((resp) => {
                this.loading = false;
                this.$emit('success', resp.data);
                this.$root.forceUpdate();
                if (this.redirect) {
                    this.$router.push(this.redirect);
                }
                this.post = {};
            }).catch(err => {
                this.loading = false;
                this.error = err.response.data.error;
            });
        },
    },
}
</script>