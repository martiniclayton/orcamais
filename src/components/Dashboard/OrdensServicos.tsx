import { useContext, useEffect, useState } from "react"
import type { Tela } from "../../types/typeTela"
import { TabelaServicos } from "./TabelaServicos"
import { AuthContext } from "../../Context/AuthContext";
import { apiFetch } from "../../services/apiFetch";

interface OrdensServicosProps {
    mudartela: (value: Tela) => void,
}

export const OrdensServicos = ({ mudartela }: OrdensServicosProps) => {

    const [bancoAtivos, setbancoAtivos] = useState([]);
    const [loading, setLoading] = useState(true);

    const { logout } = useContext(AuthContext)

    const carregarOrdensAtivas = async () => {

        try {
            const response = await apiFetch("/ordem?status=Ativos");

            const data = await response.json();
            
            if (response.status === 401) {
                alert("Sessão expirada");   
                logout();
            }

            if (!response.ok) {
                throw new Error("Erro na requisição")
            };


            setbancoAtivos(data.ordens);
        } catch {
            throw new Error("Erro na requisição");
        } finally {
            setLoading(false)
        }
    }


    //     fetch(`${API_URL}/ordem?status=Ativos`, {
    //         credentials: "include"
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //             setbancoAtivos(data.ordens);
    //             setLoading(false)
    //         })
    //         .catch(error => {
    //             console.error("Erro ao buscar ordens", error);
    //         })
    // }

    useEffect(() => {
        carregarOrdensAtivas()
    }, [])


    const quantidades = bancoAtivos.length

    if (loading) {
        return <p className="p-5 text-zinc-500">Carregando ordens...</p>;
    }
    return (
        <>
            <TabelaServicos tela={"Ordens de Serviço"} descricao={`${quantidades} O.S Ativas`} tipoTabela={bancoAtivos} mudarTela={mudartela} renderizarOrdensAtivas={carregarOrdensAtivas}></TabelaServicos>
        </>
    )
}