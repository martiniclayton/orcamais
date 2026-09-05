interface Usuario {
    nome: string
    email: string,
}

export class bancoDados {
    nomeBanco: string
    constructor(nomeBanco: string){
        this.nomeBanco = nomeBanco
    }

    getData = (): any => {
        const banco = localStorage.getItem(this.nomeBanco);
        return banco ? JSON.parse(banco) : [];
    }

    setData = ({nome, email}: Usuario) =>{
        const banco = this.getData();
        banco.push({nome: nome, email: email})
        localStorage.setItem(this.nomeBanco, JSON.stringify(banco))
    }
}

export const banco = new bancoDados("oficina");

console.log(banco.getData());