import type { NotificacoesType } from "../types/NotificacoesType";
import type { OrdemType } from "../types/OrdemType";


export const ordenServicos: OrdemType[] = [
    {
        id: "0",
        nome: "Clayton Timoteo",
        cpf: "12345678900",
        telefone: "11999999999",
        placa: "ABC1234",
        dataCriacao: new Date(),
        status: "Em andamento",
        descricao: "Troca de óleo e revisão geral",
        tipoServico: "Troca de óleo"
    },
    {
        id: "1",
        nome: "Fernanda Lima",
        cpf: "98765432100",
        telefone: "11988887777",
        placa: "XYZ9876",
        dataCriacao: new Date("2026-09-08T10:30:00"),
        status: "Em andamento",
        descricao: "Troca das pastilhas de freio e alinhamento",
        tipoServico: "Revisão do sistema de freios"
    },
    {
        id: "2",
        nome: "Lucas Andrade",
        cpf: "45678912344",
        telefone: "21977776666",
        placa: "KGM4A88",
        dataCriacao: new Date("2026-09-07T14:15:00"),
        status: "Finalizado",
        descricao: "Diagnóstico elétrico e substituição da bateria",
        tipoServico: "Diagnóstico elétrico"
    },
    {
        id: "3",
        nome: "Beatriz Souza",
        cpf: "32165498711",
        telefone: "31966665555",
        placa: "RST3D21",
        dataCriacao: new Date("2026-09-09T09:00:00"),
        status: "Em andamento",
        descricao: "Balanceamento de rodas e checagem de suspensão",
        tipoServico: "Alinhamento e balanceamento"
    }
]

export const NotificacoesPush: NotificacoesType[] = [
    {
        titulo: "NOVA ORDEM CADASTRADA",
        data: new Date(),
        placa: "PLA-1252",
        cliente: "Clayton Timoteo",
        id: "1",
        tipoServico: "Troca de óleo",
        status: "Em andamento"
    },
    {
        titulo: "NOVA ORDEM CADASTRADA",
        data: new Date(),
        placa: "PLA-1252",
        cliente: "Clayton",
        id: "2",
        tipoServico: "Revisão elétrica",
        status: "Em andamento"
    },
    {
        titulo: "MUDANÇA DE STATUS",
        data: new Date(),
        placa: "LOA-5869",
        cliente: "Amanda",
        id: "3",
        tipoServico: "Revisão elétrica",
        status: "Pronto para retirada"
    }
]
