var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/cadastrarTentativa/:idUsuario", function (req, res) {
    quizController.cadastrarTentativa(req, res);
});

router.get("/listarTentativas/:idUsuario", function (req, res) {
    quizController.listarTentativas(req, res);
});

router.post("/buscarPontuacao", function (req, res) {
    quizController.buscarPontuacao(req, res);
});

module.exports = router;