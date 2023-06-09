import Consulta from "./consultaModelo.js";
import conectar from "./Conexao.js";

export default class ConsultaBD {
    async consultar() {
        const conexao = await conectar();
        const sql = 'SELECT * FROM consultadados';
        const valores = [];
        const [rows] = await conexao.query(sql, valores);
        const listaConsultaDadoss = [];
        // for (const row of rows) {
        //     const consulta = new Consulta(
        //         row["cpf"],
        //         row["nome"],
        //         row["sobrenome"],
        //         row["cidade"],
        //         row["uf"],
        //         row["telefone"]);
        //         listaConsultaDadoss.push(consulta);
        // }
        for (const row of rows) {
            const consulta = {
                cpf: row["cpf"],
                nome: row["nome"],
                sobrenome: row["sobrenome"],
                cidade: row["cidade"],
                uf: row["uf"],
                telefone: row["telefone"]
            }
            listaConsultaDadoss.push(consulta);
        }
        return listaConsultaDadoss;
    }
}