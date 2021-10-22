<template>
    <div>
        <form @submit.prevent="submit()">
            <slot name="after"></slot>

            <slot name="fields">
                <input type="text" class="form-control mb-3" placeholder="Name">
                <input type="text" class="form-control mb-3" placeholder="E-mail">
                <input type="text" class="form-control mb-3" placeholder="Password">
                <input type="text" class="form-control mb-3" placeholder="Repeat password">
            </slot>

            <slot name="action">
                <button type="submit" class="btn btn-primary w-100">Register</button>
            </slot>

            <slot name="after"></slot>
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
                password_confirm: '',
            },
        };
    },

    methods: {
        submit() {
            this.$axios.post('/api/register', this.post).then(resp => {
                console.log(resp);
            });
        },
    },
}
</script>