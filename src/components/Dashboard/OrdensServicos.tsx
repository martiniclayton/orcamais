import { useEffect, useState } from "react"
import type { OrdemType } from "../../types/OrdemType"
import type { Tela } from "../../types/typeTela"
import { TabelaServicos } from "./TabelaServicos"

interface OrdensServicosProps {
    mudartela: (value: Tela) => void,
    bancoMock: OrdemType[],
    setBancoMock: (value: OrdemType[]) => void
}

export const OrdensServicos = ({ mudartela, bancoMock, setBancoMock }: OrdensServicosProps) => {

    const [bancoAtivos, setbancoAtivos] = useState([]);
    const [loading, setLoading] = useState(true);

    const token = localStorage.getItem('tokenTrack')

    const carregarOrdensAtivas = () => {
        fetch('https://orca-mais-backend.onrender.com/ordem?status=Ativos', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setbancoAtivos(data.ordens);
                setLoading(false)
            })
            .catch(error => {
                console.error("Erro ao buscar ordens", error);
            })
    }

    useEffect(() => {
        carregarOrdensAtivas()
    }, [])

    const tabela = bancoMock?.filter(ordem => ordem.status !== "Finalizado")

    const quantidades = tabela.length

    if (loading) {
        return <p className="p-5 text-zinc-500">Carregando ordens...</p>;
    }
    return (
        <>
            <TabelaServicos tela={"Ordens de Serviço"} descricao={`${quantidades} O.S Ativas`} tipoTabela={bancoAtivos} mudarTela={mudartela} renderizarOrdensAtivas={carregarOrdensAtivas}></TabelaServicos>
        </>
    )
}