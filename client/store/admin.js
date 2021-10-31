export default {
    state: {
        menu: [
            {to:"/admin", icon:"fas fa-globe", title:"Dashboard", children:[]},
            {to:"/admin/settings", icon:"fas fa-globe", title:"Configurações", children:[
                {to:"/admin/settings", icon:"fas fa-globe", title:"Base", children:[]},
                {to:"/admin/settings/email", icon:"fas fa-globe", title:"E-mail", children:[]},
            ]},
        ],
    },
}