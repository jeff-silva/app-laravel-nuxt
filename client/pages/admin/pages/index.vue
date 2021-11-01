<template>
    <div>
        <nuxt-link to="/admin/pages/new">Novo</nuxt-link>
        <hr>

        <ui-search action="/api/pages/search" :params="{status:''}">
            <template #fields="{params}">
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
            </template>

            <template #header="">
                <th data-orderby="name">Título</th>
                <th data-orderby="status" width="100px">Status</th>
                <th data-orderby="updated_at" width="200px">Alterado em</th>
            </template>

            <template #item="{item}">
                <td>{{ item.name }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.updated_at }}</td>
            </template>

            <template #actions="{item}">
                <nuxt-link :to="`/admin/pages/${item.id}`" class="btn btn-primary">
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