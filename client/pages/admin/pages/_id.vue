<template>
    <div>
        <ui-form v-model="page"
            method="post"
            action="/api/pages/save"
            #default="{validator, loading}"
            @success="$router.push(`/admin/pages/${$event.id}`); page=$event;"
        >
            <div class="row">
                <div class="col-12 col-md-8">
                    <ui-field label="Slug" :error="validator.error.slug">
                        <div class="input-group">
                            <div class="input-group-text bg-white">site.com/</div>
                            <input type="text" class="form-control" v-model="page.slug">
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
                    <ui-field label="Conteúdo" :error="validator.error.content">
                        <textarea class="form-control" v-model="page.content"></textarea>
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