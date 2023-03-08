import { VendaItem } from "./VendaItem"

export class Venda {
    id?: number
    dataCobranca?: Date
    dataPagamento?: Date
    desconto?: number
    cliente?: string
    clienteId?: number
    colaborador?: string
    colaboradorId?: number
    itens?: VendaItem[]
}
