<template>
    <div>
        <component :is="tag" :class="{container:container}">{{ title || 'Sem título' }}</component>
    </div>
</template>

<script>
export default {
    props: {
        title: {default:''},
        tag: {default:'h1'},
        container: {default:true},
    },
}
</script>