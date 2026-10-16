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
    clienteLogged: boolean;
    verificandoSessao: boolean
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthContextProvider = ({ children }: any) => {

    const [user, setUser] = useState<User | null>(null);
    const [ordem, setOrdem] = useState<OrdemType | undefined>(undefined);
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [banco, setBanco] = useState([])
    const [clienteLogged, setClienteLogged] = useState(false);
    const [verificandoSessao, setVerificandoSessao] = useState(true);

    useEffect(() => {
        const verificarSessaoCliente = async () => {
            try {
                const response = await fetch(`${API_URL}/cliente/auth`, {
                    credentials: "include"
                })

                if (response.ok) {
                    setClienteLogged(true)
                } else {
                    setClienteLogged(false)
                }
            } catch (error) {
                console.error("Erro ao verificar sessão", error);
                setClienteLogged(false)
            } finally {
                setVerificandoSessao(false);
            }
        }

        const verificarSessao = async () => {
            try {
                const response = await fetch(`${API_URL}/auth`, {
                    credentials: "include",
                })

                if (response.ok) {
                    const userTrack = localStorage.getItem('userTrack');

                    if (userTrack) {
                        setUser(JSON.parse(userTrack))
                        setIsLoggedIn(true)
                    }

                } else {
                    setUser(null),
                        setIsLoggedIn(false);
                    localStorage.removeItem("userTrack");
                }
            } catch (error) {
                console.error("Erro ao verificar sessão", error);
                setUser(null);
                setIsLoggedIn(false);
            } finally {
                setVerificandoSessao(false)
            }
        }

        verificarSessao();
        verificarSessaoCliente();
    }, [])


    const carregarOrdens = async (): Promise<void> => {

        try {
            const response = await fetch(`${API_URL}/ordem`, {
                credentials: "include"
            })

            if (!response.ok) {
                throw new Error("Erro ao carregar ordens")
            }

            const data = await response.json();
            setBanco(data.ordens);

        } catch (error) {
            console.error("Erro ao carregar ordens", error)
        }
    }

    const login = async (email: string, password: string): Promise<boolean> => {

        try {
            const response = await fetch(`${API_URL}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
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

            const { prestador } = data.resposta

            // localStorage.setItem('tokenTrack', token);
            localStorage.setItem('userTrack', JSON.stringify(prestador));
            setIsLoggedIn(true)
            setUser(prestador)

            return true

        } catch {
            alert("Não foi possivel conectar ao servidor")
            return false;
        }
    }

    const logout = async (): Promise<void> => {

        try {
            await fetch(`${API_URL}/logout`, {
                method: "POST",
                credentials: "include"
            });
        } catch (err) {
            console.error("Erro ao encerrar sessão no servido", err)
        } finally {
            setUser(null);
            setIsLoggedIn(false);
            localStorage.removeItem('tokenTrack')
            localStorage.removeItem('userTrack')
            navigate("/");
            window.location.reload();
        }
    }

    const clienteLogin = async (code: string, cpf: string): Promise<any> => {

        try {
            const resposta = await fetch(`${API_URL}/cliente/acesso`, {
                method: "POST",
                credentials: "include",
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

            setClienteLogged(true)
            // localStorage.setItem('tokenClienteTrack', data.token)

            return true
        }
        catch {
            throw new Error("Erro")
        }
    }


    const logoutCliente = async () => {
        try {
            await fetch(`${API_URL}/logout/cliente`, {
                method: "POST",
                credentials: "include"
            });

        } catch (err) {
            console.error("Erro ao encerrar sessão no servido", err)
        } finally {
            setOrdem(undefined);
            // localStorage.removeItem("tokenClienteTrack")
            localStorage.removeItem("clienteTrack")
            navigate("/");
            window.location.reload();
        }
    }


    return (
        <>
            <AuthContext.Provider value={{ user, login, logout, isLoggedIn, setIsLoggedIn, ordem, clienteLogin, logoutCliente, carregarOrdens, banco, clienteLogged, verificandoSessao }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}