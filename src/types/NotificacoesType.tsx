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