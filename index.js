import express from 'express';
import rotaConsulta from './rotaConsulta.js';
import os from "os";

const app = express();
const porta = 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.get('/', (request, response) => {
    return response
        .status(200)
        .json({
            message: "Welcome!"
        });
});

app.use('/consulta-dados', rotaConsulta)

app.get('/readiness', (request, response) => {
    return response
        .status(200)
        .json({
            message: "Meu app está pronto!",
            platform: os.platform(),
            freemem: os.freemem(),
            homedir: os.homedir(),
            date: new Date().getTime()
        });
});

app.get('/liveness', (request, response) => {
    return response
        .status(200)
        .json({
            message: "Meu app está vivo!",
            path: process.cwd(),
            date: new Date().getTime()
        });
});

app.listen(porta, () => {
    console.log('Backend respondendo em http://localhost:' + porta);
});