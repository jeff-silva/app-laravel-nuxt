<template>
    <div>
        <ui-form v-model="page"
            method="post"
            action="/api/pages/save"
            #default="{validator, loading, submit}"
            @success="$router.push(`/admin/pages/${$event.id}`); page=$event;"
            success-message="Dados salvos"
        >
            <div class="row">
                <div class="col-12 col-md-8">
                    <ui-field label="Slug" :error="validator.error.slug">
                        <div class="input-group">
                            <div class="input-group-text bg-white">site.com/</div>
                            <input type="text" class="form-control" v-model="page.slug">
                            <div class="input-group-text bg-white"><a :href="`/${page.slug}`" target="_blank">Visitar</a></div>
                        </div>
                    </ui-field>
                </div>

                <div class="col-12 col-md-4">
                    <ui-field label="Status" :error="validator.error.status">
                        <select class="form-control" v-model="page.status">
                            <option value="draft">Rascunho</option>
                            <option value="publish">Publicado</option>
                        </select>
                    </ui-field>
                </div>

                <div class="col-12 col-md-12">
                    <ui-field label="Nome" :error="validator.error.name">
                        <input type="text" class="form-control" v-model="page.name">
                    </ui-field>
                </div>

                <div class="col-12 col-md-12">
                    <div class="d-flex mb-3">
                        <div><a href="">refresh</a></div>
                        <div><el-checkbox v-model="edit">Editavel</el-checkbox></div>
                    </div>
                    
                    <ui-field label="Conteúdo" :error="validator.error.content">
                        <ui-content v-model="page.content" :edit="edit" @change="submit()"></ui-content>
                    </ui-field>
                </div>
            </div>


            <div class="text-end">
                <nuxt-link to="/admin/pages" class="btn">Voltar</nuxt-link>

                <button type="submit" class="btn btn-primary" v-loading="loading">
                    Salvar
                </button>
            </div>
        </ui-form>
    </div>
</template>

<script>
export default {
    middleware: 'auth',
    layout: 'admin',

    data() {
        return {
            edit: true,
            page: {},
        };
    },

    methods: {
        pageLoad() {
            let pageId = parseInt(this.$route.params.id) || null;
            if (! pageId) return;
            this.$axios.get(`/api/pages/find/${pageId}`).then(resp => {
                this.page = resp.data;
            });
        },
    },

    mounted() {
        this.pageLoad();
    },
}
</script>