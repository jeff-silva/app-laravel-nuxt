<template>
    <div>
        <draggable v-model="value" handle=".handle" class="list-group" @end="emitValue()">
            <div v-for="item in value" :key="item.id" class="list-group-item d-flex align-items-center py-0 px-1">
                <div class="handle" style="cursor:pointer;"><i class="fas fa-bars"></i></div>
                <div class="flex-grow-1 p-2"><slot name="item" :item="item"></slot></div>
                <div><a href="javascript:;" class="btn btn-sm btn-danger"><i class="fas fa-times"></i></a></div>
            </div>
        </draggable>
    </div>
</template>

<script>
import draggable from 'vuedraggable';

export default {
    components: { draggable },

    props: {
        value: Array,
    },

    methods: {
        emitValue() {
            this.$emit('value', this.value);
            this.$emit('input', this.value);
            this.$emit('change', this.value);
        },
    },
}
</script>