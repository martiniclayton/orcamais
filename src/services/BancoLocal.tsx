interface OrdemServico {
    id: string
    nome: string,
    cpf: string,
    telefone: string,
    placa: string,
    tipoServico: string,
    data: Date,
    status: string,
    descricao?: string
}

export class bancoDados {
    nomeBanco: string
    constructor(nomeBanco: string) {
        this.nomeBanco = nomeBanco
    }

    getData = (): any => {
        const banco = localStorage.getItem(this.nomeBanco);
        return banco ? JSON.parse(banco) : [];
    }

    setData = ({id, nome, cpf, telefone, placa, tipoServico, data, status, descricao }: OrdemServico) => {
        const banco = this.getData();
        banco.push({id: id, nome: nome, CPF: cpf, telefone: telefone, placa: placa, tipoServico: tipoServico, data: data, status: status, descricao: descricao })
        localStorage.setItem(this.nomeBanco, JSON.stringify(banco))
    }

    updateData = (banco: any) =>{
        localStorage.setItem(this.nomeBanco, JSON.stringify(banco))
    }
}

export const banco = new bancoDados("OrdensDeServicos");

