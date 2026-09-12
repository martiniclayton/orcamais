import { ordenServicos } from "../../data/mockOrders"
import type { Tela } from "../../types/typeTela"
import type { OrdemType } from "../../types/OrdemType"
import { TabelaServicos } from "./TabelaServicos"

interface ServicosFinalizadosProps {
    mudarTela: (value: Tela) => void,
    bancoMock: OrdemType[],
    setBancoMock: (value: OrdemType[]) => void
}

export const ServicosFinalizados = ({mudarTela, bancoMock, setBancoMock}: ServicosFinalizadosProps) =>{

    const tabela = bancoMock.filter(ordem => ordem.status === "Finalizado");

    const quantidade = tabela.length
    
    return(
        <>
            <TabelaServicos tela={"Serviços Finalizados"} descricao={`${quantidade} O.S ${quantidade > 1 ? "Finalizadas" : "Finalizada"}`} tipoTabela={tabela} mudarTela={mudarTela} setBancoMock={setBancoMock} bancoMock={bancoMock}></TabelaServicos>
        </>
    )
}