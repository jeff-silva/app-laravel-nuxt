<template>
    <div>
        <form @submit.prevent="submit()">
            <slot name="after"></slot>

            <slot name="fields">
                <input type="text" class="form-control mb-3" v-model="post.email" placeholder="E-mail">
                <input type="password" class="form-control mb-3" v-model="post.password" placeholder="Password">
            </slot>

            <slot name="action">
                <button type="submit" class="btn btn-primary w-100">Login</button>
            </slot>

            <slot name="after"></slot>
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
            error: false,
            post: {
                email: '',
                password: '',
            },
        };
    },

    methods: {
        submit() {
            this.$auth.loginWith('jwt', {data:this.post}).then((resp) => {
                this.$emit('success', resp.data);
                this.$root.forceUpdate();
                if (this.redirect) {
                    this.$router.push(this.redirect);
                }
            }).catch(err => {
                this.error = err.response.data.message;
            });
        },
    },
}
</script>