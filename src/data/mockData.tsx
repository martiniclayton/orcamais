import type { tyoeOrdemServico, typeNotificacao } from "../types/tyoeOrdemServico";

export const userFicticio: tyoeOrdemServico ={
    id: "0001",
    nome: "Clayton Timoteo",
    cpf: 12345678900,
    telefone: 11900000000,
    placa: "FRU5946",
    tipoServico: "Troca de óleo",
    data: new Date(),
    status: "Em andamento",
    email: "clayton@dev.com"
}


export const notificacaoUserFiciticio: typeNotificacao ={
    titulo: "NOVA ORDEM CADASTRADA",
    mensagem: "Uma nova ordem de Troca de óleo foi iniciada para o cliente Tal",
    data: new Date(),
    placa: "FRU5946"
}