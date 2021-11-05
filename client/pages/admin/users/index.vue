<template>
    <div>
        <nuxt-link to="/admin/users/new">Novo</nuxt-link>
        <hr>

        <ui-search action="/api/users/search" :params="{status:''}">
            <!-- <template #fields="{params}">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <ui-field label="Busca">
                            <input type="text" class="form-control" v-model="params.q">
                        </ui-field>
                    </div>

                    <div class="col-12 col-md-6">
                        <ui-field label="Status">
                            <select class="form-control" v-model="params.status">
                                <option value="">Todos</option>
                                <option value="draft">Rascunho</option>
                                <option value="publish">Publicado</option>
                            </select>
                        </ui-field>
                    </div>
                </div>
            </template> -->

            <template #header="">
                <th data-orderby="name">Nome</th>
                <th data-orderby="updated_at" width="200px">Alterado em</th>
            </template>

            <template #item="{item}">
                <td>{{ item.name }}</td>
                <td>{{ item.updated_at }}</td>
            </template>

            <template #actions="{item}">
                <nuxt-link :to="`/admin/users/${item.id}`" class="btn btn-primary">
                    <i class="fas fa-fw fa-edit"></i>
                </nuxt-link>
            </template>
        </ui-search>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    layout: 'admin',
}
</script>