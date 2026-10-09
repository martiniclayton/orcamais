import type { StatusOS } from "./OrdemType"

export interface NotificacoesType {
    id: string
    titulo: string,
    data: Date
    placa: string,
    cliente: string,
    tipoServico: string,
    status: StatusOS,
    cpf: string
}

export interface notificacaoData {
    data: Date,
    descricao: string,
    id: string,
    ordemId: number,
    ordens: {
        cliente: {
            codAcesso: string,
            cpf: string,
            id: number,
            nome: string,
            telefone: string
        }
        clienteId: number,
        dataCriacao: string,
        descricao?: string,
        id: number,
        placa: string,
        status: string,
        tipoServico: string
    }
    status: StatusOS,
    titulo: string

}