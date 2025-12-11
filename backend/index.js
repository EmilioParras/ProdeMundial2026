import express from "express";
import mysql from "mysql2/promise";

const app = express();
app.use(express.json());

// Crear conexión a la base
const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Adminemilio1!123",
    database: "prodemundial2026"
});

// Probar conexión
try {
    const [result] = await db.query("SELECT 1 + 1 AS resultado");
    console.log("Base conectada! Test:", result);
} catch (error) {
    console.error("Error al conectar a la base:", error);
}

// Endpoint de prueba
app.get("/", (req, res) => {
    res.send("Backend del Prode funcionando!");
});

// Levantar server
app.listen(3000, () => {
    console.log("Servidor escuchando en http://localhost:3000");
});
