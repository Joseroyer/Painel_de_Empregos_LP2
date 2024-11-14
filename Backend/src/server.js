import cors from "cors";
import express from "express";
// import path from "path";
import cardsRouter from "./routers/cardsrouter.js";

const app = express();

// Middleware para servir arquivos estáticos (ex.: HTML, CSS, JS)
// app.use(express.static(path.join(path.resolve(), 'public')));

app.use(cors())
app.use(express.json());

app.use(cardsRouter);

app.listen(8082, function () { console.log("servidor ativo", "http://localhost:8082") });


