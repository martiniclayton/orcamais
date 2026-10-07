import { ordenServicos } from "../../data/mockOrders"
import type { Tela } from "../../types/typeTela"
import type { OrdemType } from "../../types/OrdemType"
import { TabelaServicos } from "./TabelaServicos"
import { useEffect, useState } from "react"

interface ServicosFinalizadosProps {
    mudarTela: (value: Tela) => void,
    bancoMock: OrdemType[],
    setBancoMock: (value: OrdemType[]) => void
}

export const ServicosFinalizados = ({ mudarTela, bancoMock, setBancoMock }: ServicosFinalizadosProps) => {

    const [bancoFinalizado, setBancoFinalizado] = useState([])
    const token = localStorage.getItem('tokenTrack')

    useEffect(() => {
        fetch('https://orca-mais-backend.onrender.com/ordem?status=Finalizado', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setBancoFinalizado(data.ordens)
            })
            .catch(error => {
                console.error("Erro ao buscar ordens", error);
            })
    }, [])

    const tabela = bancoMock?.filter(ordem => ordem.status === "Finalizado");

    const quantidade = tabela.length

    return (
        <>
            <TabelaServicos tela={"Serviços Finalizados"} descricao={`${quantidade} O.S ${quantidade > 1 ? "Finalizadas" : "Finalizada"}`} tipoTabela={bancoFinalizado} mudarTela={mudarTela} setBancoMock={setBancoMock} bancoMock={bancoMock}  ></TabelaServicos>
        </>
    )
}