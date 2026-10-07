import type { typeUser } from "../types/typeUser"


export interface User {
    id: string
    nome: string,
    email: string,
    password: string,
    type: typeUser,
    estabelecimento: string
}

export const MockUsers: User[] = [
    {
        nome: "Clayton Timoteo",
        email: "clayton@dev.com",
        password: "123",
        type: "Prestador",
        estabelecimento: "CorriMão",
        id: "1"
    }
]

export const Prestador: User = {
    nome: "Clayton Timoteo",
    email: "clayton@dev.com",
    password: "123",
    type: "Prestador",
    estabelecimento: "CorriMão",
    id: "1"
}