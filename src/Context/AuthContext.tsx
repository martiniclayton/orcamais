import { createContext, useEffect, useState } from "react";
import { type User } from "../data/mockUsers";
import { useNavigate } from "react-router-dom";
import type { OrdemType } from "../types/OrdemType";
import { API_URL } from "../services/api";

interface IAuthContext {
    user: User | null,
    login: (email: string, password: string) => Promise<boolean>,
    logout: () => void,
    isLoggedIn: boolean,
    setIsLoggedIn: (value: boolean) => void
    ordem: OrdemType | undefined,
    clienteLogin: (cod: string, cpf: string) => Promise<OrdemType | undefined>,
    logoutCliente: () => void,
    carregarOrdens: () => void,
    banco: any[]
    // token: any,
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthContextProvider = ({ children }: any) => {

    const [user, setUser] = useState<User | null>(null);
    const [ordem, setOrdem] = useState<OrdemType | undefined>(undefined);
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [banco, setBanco] = useState([])

    useEffect(() => {
        const tokenTrack = localStorage.getItem('tokenTrack')
        const userTrack = localStorage.getItem('userTrack');

        if (tokenTrack) {
            setIsLoggedIn(true)
        }

        if(userTrack){
            setUser(JSON.parse(userTrack))
        }
    }, [])


    const carregarOrdens = (): void => {

        const token = localStorage.getItem('tokenTrack')

        fetch(`${API_URL}/ordem`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(data => {
                setBanco(data.ordens)
            })
            .catch(error => {
                console.error("Erro ao buscar ordens", error);
            })

    }

    const login = async (email: string, password: string): Promise<boolean> => {

        try{
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    senha: password
                })
            })

            const data = await response.json();
            
            if (!response.ok) {
                alert(data.mensagem)
                return false
            }

            const { prestador, token } = data.resposta
    
            localStorage.setItem('tokenTrack', token);
            localStorage.setItem('userTrack', JSON.stringify(prestador));
            setIsLoggedIn(true)
            setUser(prestador)
    
            return true

        } catch {
            alert("Não foi possivel conectar ao servidor")
            return false;
        }
    }

    const logout = (): void => {
        setUser(null);
        setIsLoggedIn(false);
        localStorage.removeItem('tokenTrack')
        localStorage.removeItem('userTrack')
        navigate("/");
        window.location.reload();
    }

    const clienteLogin = async (code: string, cpf: string): Promise<any> => {

        try {
            const resposta = await fetch(`${API_URL}/cliente/acesso`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    code: code,
                    cpf: cpf
                })
            }
            )
            const data = await resposta.json()

            if (!resposta.ok) {
                alert(data.mensagem)
                return false
            }

            localStorage.setItem('tokenClienteTrack', data.token)

            return true
        }
        catch {
            throw new Error("Erro")
        }
    }


    const logoutCliente = () => {
        setOrdem(undefined);
        localStorage.removeItem("tokenClienteTrack")
        localStorage.removeItem("clienteTrack")
        navigate("/");
        window.location.reload();
    }


    return (
        <>
            <AuthContext.Provider value={{ user, login, logout, isLoggedIn, setIsLoggedIn, ordem, clienteLogin, logoutCliente, carregarOrdens, banco }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}