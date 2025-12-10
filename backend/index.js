import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend del prode funcionaaa");
});

app.listen(PORT, () => {
    console.log("servidos escuchando en http://localhost:${PORT}")
})