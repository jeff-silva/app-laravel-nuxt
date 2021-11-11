export default {
    state: {
        menu: [
            {to:"/admin", icon:"fas fa-globe", label:"Dashboard", children:[]},
            {to:"/admin/users", icon:"fas fa-globe", label:"Usuários", children:[
                {to:"/admin/users", icon:"fas fa-globe", label:"Buscar", children:[]},
                {to:"/admin/users/new", icon:"fas fa-globe", label:"Criar", children:[]},
            ]},
            {to:"/admin/settings", icon:"fas fa-cog", label:"Sistema", children:[
                {to:"/admin/files", icon:"fas fa-globe", label:"Arquivos", children:[]},
                {to:"/admin/settings", icon:"fas fa-globe", label:"Configurações", children:[]},
            ]},
        ],

        userOptions: [
            {to:"/admin/users/me", icon:"fas fa-cog", label:"Meus dados", children:[]},
        ],

        settings: [
            {to:"/admin/settings", icon:"fas fa-cog", label:"Sistema", children:[]},
            {to:"/admin/settings/email", icon:"fas fa-cog", label:"E-mail", children:[]},
        ],
    },
}