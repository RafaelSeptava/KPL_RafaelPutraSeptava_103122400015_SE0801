import express from "express";
import { specs, swaggerUi } from "./swagger.js";

const app = express();

app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(specs));

const PORT = 8080;
const HOSTNAME = "localhost";

function generateAngkaRahasia(nama) {
    let hash = 0;

    for (let i = 0; i < nama.length; i++) {
        hash += nama.charCodeAt(i) * (i + 1);
    }

    return (hash % 100) + 1;
}

/**
 * @swagger
 * /:
 *  post:
 *   summary: Guessing Game - Tebak angka
 *   requestBody:
 *     required: true
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             nama:
 *               type: string
 *               example: "Hamid"
 *             tebakan:
 *               type: integer
 *               example: 24
 *   responses:
 *    200:
 *     description: Tebakan benar
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             jawaban:
 *               type: string
 *    400:
 *     description: Tebakan terlalu tinggi atau terlalu rendah
 *     content:
 *       application/json:
 *         schema:
 *           type: object
 *           properties:
 *             jawaban:
 *               type: string
 */

app.post('/', (req, res) => {
    const { nama, tebakan } = req.body;

    if (!nama || tebakan === undefined) {
        return res.status(400).json({ error: "Nama dan tebakan harus diisi!" });
    }

    const angkaRahasia = generateAngkaRahasia(nama);

    if (tebakan === angkaRahasia) {
        return res.status(200).json({
            jawaban: `Benar sekali! Tebakannya ${angkaRahasia}.`
        });
    } else if (tebakan > angkaRahasia) {
        return res.status(200).json({
            jawaban: "Tebakanmu terlalu tinggi!"
        });
    } else {
        return res.status(200).json({
            jawaban: "Tebakanmu terlalu rendah!"
        });
    }
});

app.listen(PORT, HOSTNAME, () => {
    console.log(`Peladen berjalan di ${HOSTNAME}:${PORT}`);
});

app.get('/reveal', (req, res) => {
    const qnama = req.query.nama;
    if (!qnama) return res.status(400).json({ error: 'Gunakan query ?nama=...' });
    const num = generateAngkaRahasia(qnama);
    return res.status(200).json({ nama: qnama, angkaRahasia: num });
});