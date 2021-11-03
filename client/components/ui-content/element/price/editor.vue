<template>
    <div>
        <button type="button" class="btn btn-primary w-100" @click="add()">
            Add.
        </button>

        <div v-for="(p, pindex) in prices" class="bg-light border mt-2">
            <div class="p-2 bg-dark text-white">{{ p.title || `Item ${pindex}` }}</div>
            <div class="p-2">
                <ui-field label="Ribbon">
                    <input type="text" class="form-control" v-model="p.ribbon">
                </ui-field>
    
                <ui-field label="Título">
                    <input type="text" class="form-control" v-model="p.title">
                </ui-field>
    
                <ui-field label="Preço">
                    <input type="text" class="form-control" v-model="p.price">
                </ui-field>
                
                <ui-field label="Subtítulo">
                    <input type="text" class="form-control" v-model="p.subtitle">
                </ui-field>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        prices: Array,
    },

    methods: {
        add() {
            this.prices.push({
                color: '',
                ribbon: '',
                title: '',
                price: '',
                subtitle: '',
                link: '',
                items: [],
            });
        },
    },
}
</script>