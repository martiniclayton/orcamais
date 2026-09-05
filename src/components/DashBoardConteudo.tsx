import { useState } from "react"
import { DashBoardContent } from "./DashBoardContent"
import { NovaOrdemServico } from "./NovaOrdemServico"
import { OrdemServico } from "./OrdemServico"
import { ServicosFinalizados } from "./ServicosFinalizados"

interface Tela {
    tela: string,
    mudarTelaPai: any
} 

export const DashBoardConteudo = (tela: Tela) => {

    console.log(tela.tela)
    const telaSelecionada = tela.tela;

    return (
        <>
        {telaSelecionada === "DashBoardContent" ? <DashBoardContent mudarTelaFilho={tela.mudarTelaPai}/> : null}
        {telaSelecionada === "NovaOrdemServico" ? <NovaOrdemServico mudarTelaFilho={tela.mudarTelaPai}/> : null}
        {telaSelecionada === "OrdemServico" ? <OrdemServico mudarTelaFilho={tela.mudarTelaPai}/> : null}
        {telaSelecionada === "ServicosFinalizados" ? <ServicosFinalizados mudarTelaFilho={tela.mudarTelaPai}/> : null}
        </>
    )
}