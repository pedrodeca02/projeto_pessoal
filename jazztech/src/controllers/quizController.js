var quizModel = require("../models/quizModel");

function cadastrarTentativa(req, res) {
    var idUsuario = req.body.idUsuario;
    var idQuiz = req.body.idQuiz;
    var pontuacao = req.body.pontuacao;
    var acertos = req.body.acertos;
    var erros = req.body.erros;

    quizModel.cadastrarTentativa(idUsuario, idQuiz, pontuacao, acertos, erros)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => {
            console.error(erro);
            res.status(500).json({
                erro: erro,
                sql: erro.sqlMessage
            });
        });

}

function listarTentativas(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.listarTentativas(idUsuario)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage));
}

module.exports = {
    cadastrarTentativa,
    listarTentativas
};