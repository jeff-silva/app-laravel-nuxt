<template>
    <div class="bg-white shadow rounded">
        <div class="text-center py-4" v-if="props.user">
            <img :src="props.user.photo" alt=""
                v-if="props.user.photo"
                style="width:100px; height:100px; border-radius:50%; object-fit:cover;">
            
            <div class="fw-bold mt-4 text-uppercase">{{ props.user.name }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: [Number, String, Object],
    },

    watch: {
        $props: {deep:true, handler(value) {
            this.props = JSON.parse(JSON.stringify(value));
        }},
    },

    data() {
        return {
            props: JSON.parse(JSON.stringify(this.$props)),
        };
    },

    methods: {
        getUser() {
            if (typeof this.props.user=='object') return;
            this.$axios.get(`/api/users/find/${this.props.user}`).then(resp => {
                this.props.user = resp.data;
            });
        },
    },

    mounted() {
        this.getUser();
    },
}
</script>