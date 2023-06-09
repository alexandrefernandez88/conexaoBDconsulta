import { Router } from "express";
import ConsultaCtrl from "./consultaCTRL.js";

const rotaConsulta = new Router();
const consultaCtrl = new ConsultaCtrl();

rotaConsulta.get("/", consultaCtrl.consultar)

export default rotaConsulta;