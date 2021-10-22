<template>
    <div>
        <form @submit.prevent="submit()">
            <slot name="after" :error="error"></slot>

            <slot name="fields" :error="error">
                <input type="text" class="form-control" v-model="post.name" placeholder="Name">
                <small class="d-block text-danger" v-if="error.name" v-html="error.name.join('<br>')"></small>
                <div class="mb-3"></div>

                <input type="text" class="form-control" v-model="post.email" placeholder="E-mail">
                <small class="d-block text-danger" v-if="error.email" v-html="error.email.join('<br>')"></small>
                <div class="mb-3"></div>

                <input type="password" class="form-control" v-model="post.password" placeholder="Password">
                <small class="d-block text-danger" v-if="error.password" v-html="error.password.join('<br>')"></small>
                <div class="mb-3"></div>

                <input type="password" class="form-control" v-model="post.password_confirmation" placeholder="Repeat password">
                <small class="d-block text-danger" v-if="error.password_confirmation" v-html="error.password_confirmation.join('<br>')"></small>
                <div class="mb-3"></div>
            </slot>

            <slot name="action" :error="error">
                <button type="submit" class="btn btn-primary w-100">Register</button>
            </slot>

            <slot name="after" :error="error"></slot>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post: {
                name: '',
                email: '',
                password: '',
                password_confirmation: '',
            },
            error: {},
        };
    },

    methods: {
        submit() {
            this.$axios.post('/api/register', this.post).then(resp => {
                console.log(resp);
            }).catch(err => {
                this.error = err.response.data.fields;
            });
        },
    },
}
</script>