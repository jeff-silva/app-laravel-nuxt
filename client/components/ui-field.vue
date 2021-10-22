<template>
    <div>
        <div class="d-flex align-items-center mb-3" v-if="layout=='horizontal'">
            <div :style="{minWidth:labelWidth, maxWidth:labelWidth}">
                <slot name="label">{{ label }}</slot>
            </div>
            <div class="flex-grow-1">
                <slot></slot>
            </div>
        </div>
    
        <div class="mb-3" v-else>
            <div class="form-label">
                <slot name="label">{{ label }}</slot>
            </div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: {default:''},
        layout: {default:'vertical'},
        labelWidth: {default:'200px'},
    },
}
</script>