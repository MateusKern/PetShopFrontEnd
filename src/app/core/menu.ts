import { rotas } from "./rotas";

export const menu = [
    {
        descricao: 'Home',
        pagina: rotas.home
    },
    {
        descricao: 'Sobre',
        pagina: rotas.sobre
    },
    {
        descricao: 'Páginas',
        isCollapsed: true,
        submenus: [
            {
                descricao: 'Produtos',
                pagina: rotas.produtos
            },
            {
                descricao: 'Serviços',
                pagina: rotas.servicos
            },
            {
                descricao: 'Clientes',
                pagina: rotas.clientes
            },
            {
                descricao: 'Colaboradores',
                pagina: rotas.colaboradores
            },
        ]
    },
]