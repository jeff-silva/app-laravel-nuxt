export default {
    state: {
        menu: [
            {to:"/admin", icon:"fas fa-globe", title:"Dashboard", children:[]},
            {to:"/admin/pages", icon:"fas fa-globe", title:"Páginas", children:[
                {to:"/admin/pages", icon:"fas fa-globe", title:"Buscar", children:[]},
                {to:"/admin/pages/new", icon:"fas fa-globe", title:"Criar", children:[]},
            ]},
            {to:"/admin/settings", icon:"fas fa-globe", title:"Configurações", children:[]},
        ],

        settings: [
            {to:"/admin/settings", icon:"fas fa-cog", title:"Sistema", children:[]},
            {to:"/admin/settings/email", icon:"fas fa-cog", title:"E-mail", children:[]},
        ],
    },
}