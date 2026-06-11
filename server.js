require("dotenv").config()
const express = require("express");
const cors = require("cors");

const usuarioRoutes = require("./routes/usuarioRoutes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/usuarios", usuarioRoutes);

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
})