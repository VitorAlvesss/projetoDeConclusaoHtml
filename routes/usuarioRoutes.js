const express = require("express");
const router = express.Router();

const usuarioController = require("../controller/ctUsuario");

router.post("/", usuarioController.salvar);
router.post("/login", usuarioController.logar);
router.get("/:id", usuarioController.buscarPorId);
router.put("/:id", usuarioController.atualizar);
router.put("/senha/:id", usuarioController.atualizarSenha);
router.get("/", usuarioController.listarUsuarios);
router.delete("/:id", usuarioController.deletarUsuario);

module.exports = router;