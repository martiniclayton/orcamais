export type Status = "Em andamento" | "Pronto para retirada" | "Finalizado";

export interface tyoeOrdemServico {
    id: string,
    nome: string,
    cpf: number
    telefone: number,
    email: string
    placa: string,
    tipoServico: string
    data: Date
    status: Status,
    descricao?: string
}

export interface typeNotificacao {
    titulo: string,
    mensagem: string,
    data: Date
    placa: string
}