export type StatusOS = "Em andamento" | "Pronto para retirada" | "Finalizado" | ""

export interface OrdemType {
    clienteId: number | any
    placa: string,
    dataCriacao: Date,
    tipoServico: string
    status: StatusOS,
    descricao?: string
}

