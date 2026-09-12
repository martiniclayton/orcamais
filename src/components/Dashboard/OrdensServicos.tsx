import type { OrdemType } from "../../types/OrdemType"
import type { Tela } from "../../types/typeTela"
import { TabelaServicos } from "./TabelaServicos"

interface OrdensServicosProps {
    mudartela: (value: Tela) => void,
    bancoMock: OrdemType[],
    setBancoMock: (value: OrdemType[]) => void
}

export const OrdensServicos = ({mudartela, bancoMock, setBancoMock}: OrdensServicosProps) =>{

    const tabela = bancoMock.filter(ordem => ordem.status !== "Finalizado")

    const quantidades = tabela.length
    return(
        <>
        <TabelaServicos tela={"Ordens de Serviço"} descricao={`${quantidades} O.S Ativas`} tipoTabela={tabela} mudarTela={mudartela} setBancoMock={setBancoMock} bancoMock={bancoMock}></TabelaServicos>
        </>
    )
}