export type StatusOS = "Em andamento" | "Pronto para retirada" | "Finalizado" | ""

export interface OrdemType {
    id: string
    nome: string,
    cpf: string,
    telefone: string,
    placa: string,
    dataCriacao: Date,
    tipoServico: string
    status: StatusOS,
    descricao?: string
}

