export default {
    state: {
        menu: [
            {to:"/admin", icon:"fas fa-globe", title:"Dashboard", children:[]},
            {to:"/admin/settings", icon:"fas fa-globe", title:"Configurações", children:[
                {to:"/admin/settings", icon:"fas fa-globe", title:"Base", children:[]},
                {to:"/admin/settings/email", icon:"fas fa-globe", title:"E-mail", children:[]},
            ]},
            {to:"/admin/pages", icon:"fas fa-globe", title:"Páginas", children:[
                {to:"/admin/pages", icon:"fas fa-globe", title:"Buscar", children:[]},
                {to:"/admin/pages/new", icon:"fas fa-globe", title:"Criar", children:[]},
            ]},
        ],
    },
}