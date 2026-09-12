import type { typeUser } from "../types/typeUser"


export interface User {
    nome: string,
    email: string,
    password: string,
    type: typeUser,
    empresa: string
}

export const MockUsers: User[] = [
    {
        nome: "Clayton Timoteo",
        email: "clayton@dev.com",
        password: "123",
        type: "Prestador",
        empresa: "CorriMão"
    }
]