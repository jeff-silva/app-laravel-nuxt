<template>
    <div>
        <form @submit.prevent="submit()">
            <slot name="after"></slot>

            <slot name="fields">
                <input type="text" class="form-control mb-3" placeholder="E-mail">
            </slot>

            <slot name="action">
                <button type="submit" class="btn btn-primary w-100">Send request</button>
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
                email: '',
                password: '',
            },
        };
    },

    methods: {
        submit() {
            // 
        },
    },
}
</script>