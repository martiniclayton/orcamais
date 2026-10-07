import type { NotificacoesType } from "../types/NotificacoesType";

export const getNotificacoes = (): NotificacoesType[] =>{
    const notificacoes = localStorage.getItem("notificacoesOrderTrack");
    return notificacoes ? JSON.parse(notificacoes) : []
}

export const addNotificacoes = (notificacao: NotificacoesType) =>{
    const notificacoes = getNotificacoes();
    notificacoes.push(notificacao);
    localStorage.setItem("notificacoesOrderTrack", JSON.stringify(notificacoes));
}