import { rotas } from "./rotas";

export const menu = [
    {
        description: 'Home',
        page: rotas.home
    },
    {
        description: 'Sobre',
        page: rotas.sobre
    },
    {
        description: 'Páginas',
        isCollapsed: true,
        submenus: [
            {
                description: 'Produtos',
                page: rotas.produtos
            },
            {
                description: 'Serviços',
                page: rotas.servicos
            },
            {
                description: 'Clientes',
                page: rotas.clientes
            },
            {
                description: 'Colaboradores',
                page: rotas.colaboradores
            },
        ]
    },
]