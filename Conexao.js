import mysql from 'mysql2/promise';

export default async function conectar() {
    if (global.conexao && global.conexao.status != 'disconnected') {
        return global.conexao;
    }
    const conexao = mysql.createConnection({
        host: "mysql",
        user: "user",
        password: "passwd",
        database: "atvcloudfinal"
    });
    global.conexao = conexao;
    return conexao;
}