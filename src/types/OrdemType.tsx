export type StatusOS = "Em andamento" | "Pronto para retirada" | "Finalizado" | ""

// export interface OrdemType {
//     clienteId: number | any
//     placa: string,
//     dataCriacao: Date,
//     tipoServico: string
//     status: StatusOS,
//     descricao?: string,
// }

export interface OrdemType {
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

