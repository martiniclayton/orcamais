import { useState } from "react"
import { DashBoardContent } from "./DashBoardContent"
import { NovaOrdemServico } from "./NovaOrdemServico"
import { OrdemServico } from "./OrdemServico"

interface Tela {
    tela: string
} 

export const DashBoardConteudo = (tela: Tela) => {

    console.log(tela.tela)
    const telaSelecionada = tela.tela;

    return (
        <>
        {telaSelecionada === "DashBoardContent" ? <DashBoardContent/> : null}
        {telaSelecionada === "NovaOrdemServico" ? <NovaOrdemServico/> : null}
        {telaSelecionada === "OrdemServico" ? <OrdemServico/> : null}
        </>
    )
}