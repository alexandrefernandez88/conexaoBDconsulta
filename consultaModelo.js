import ConsultaBD from "./consultaBD.js";

export default class Consulta {
    #cpf;
    #nome;
    #sobrenome;
    #cidade;
    #uf;
    #telefone;

    constructor(cpf, nome, sobrenome, cidade, uf, telefone) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#cidade = cidade;
        this.#uf = uf;
        this.#telefone = telefone;
    }

    
    get cpf() {
        return this.#cpf;
    }
    set cpf(novoCpf) {
        this.#cpf = novoCpf;
    }


    get nome() {
        return this.#nome;
    }
    set nome(novoNome) {
        this.#nome = novoNome;
    }


    get sobrenome() {
        return this.#sobrenome;
    }
    set sobrenome(novoSobrenome) {
        this.#sobrenome = novoSobrenome;
    }


    get cidade() {
        return this.#cidade;
    }
    set cidade(novaCidade) {
        this.#cidade = novaCidade;
    }


    get uf() {
        return this.#uf;
    }
    set uf(novaUf) {
        this.#uf = novaUf;
    }


    get telefone() {
        return this.#telefone;
    }
    set telefone(novoTelefone) {
        this.#telefone = novoTelefone;
    }

    toJSON() {
        return {
            "cpf": this.#cpf,
            "nome": this.#nome,
            "sobrenome": this.#sobrenome,
            "cidade": this.#cidade,
            "uf": this.#uf,
            "telefone": this.#telefone
        }
    }

    async consultar() {
        const consultaBD = new ConsultaBD();
        const consultas = await consultaBD.consultar();
        return consultas;
    }
}