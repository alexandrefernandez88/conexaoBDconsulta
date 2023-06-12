import mysql from 'mysql2/promise';

export default async function conectar() {
    if (global.conexao && global.conexao.status != 'disconnected') {
        return global.conexao;
    }
    const conexao = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "atvcloudfinal"
    });
    global.conexao = conexao;
    return conexao;
}