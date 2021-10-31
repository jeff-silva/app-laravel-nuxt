<template>
    <div>
        <div class="row g-0">
            <div class="col-2">
                <div class="list-group list-group-flush">
                    <nuxt-link class="list-group-item" to="/admin/settings">Sistema</nuxt-link>
                    <nuxt-link class="list-group-item" to="/admin/settings/email">E-mail</nuxt-link>
                    <nuxt-link class="list-group-item" to="/admin/settings/user">Usuário</nuxt-link>
                </div>
            </div>

            <div class="col-10 p-2">
                <nuxt-child></nuxt-child>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    layout: 'admin',
}
</script>