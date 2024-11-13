import express from "express";
import CardsController from "../controller/cardscontroller.js";

const cardsRouter = express.Router();
const cardscontroller = new CardsController();


cardsRouter.get("/cards/listarCards", (req, res) => cardscontroller.carregarCards(req, res));
cardsRouter.post("/cards/cadastrarCards", (req, res) => cardscontroller.cadastrarCards(req, res));
cardsRouter.get("/cards/buscar", (req, res) => cardscontroller.buscar(req, res));


export default cardsRouter;