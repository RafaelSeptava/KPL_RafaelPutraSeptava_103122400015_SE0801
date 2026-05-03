import express from "express";
import { specs, swaggerUi } from "./swagger.js";

const app = express();

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

const PORT = 8080;
const HOSTNAME = "localhost";

/**
 * @swagger
 * /:
 *   get:
 *     summary: Ambil semua film
 *     responses:
 *       200:
 *         description: Berhasil mengambil data film
 */
app.get("/", (req, res) => {
    return res.status(200).send("Hello World!");
})

const dataFilm = [];

/**
 * @swagger
 * /film:
 *   get:
 *     summary: Ambil semua film
 *     responses:
 *       200:
 *         description: Berhasil mengambil data film
 */
app.get("/film", (req, res) => {
    return res.status(200).json(dataFilm);
})

app.post("/film", (req, res) => {
    const filmBaru = {
        id: dataFilm.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year,
    }

    dataFilm.push(filmBaru);
    return res.status(201).send(filmBaru);
})

app.listen(PORT, HOSTNAME, () => {
    console.log(`Peladen berjalan di ${HOSTNAME}:${PORT}`);
});