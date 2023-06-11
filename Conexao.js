import mysql from 'mysql2/promise';

export default async function conectar() {
    if (global.conexao && global.conexao.status != 'disconnected') {
        return global.conexao;
    }

    const conexao = mysql.createConnection({
        // host: "localhost",
        host: "mysql",
        user: "root",
        password: "passwd",
        database: "atvcloudfinal"
    });

    global.conexao = conexao;

    return conexao;
}