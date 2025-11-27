var quizModel = require("../models/quizModel")

function cadastrarTentativa(req, res) {
    var idUsuario = req.params.idUsuario;
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
            })
        })

}

function listarTentativas(req, res) {
    var idUsuario = req.params.idUsuario;

    quizModel.listarTentativas(idUsuario)
        .then(resultado => res.status(200).json(resultado))
        .catch(erro => res.status(500).json(erro.sqlMessage))
}


function buscarPontuacao(req, res) {
    var idUsuario = req.body.idServer;

    console.log(idUsuario + 'id Usuário')
    
    quizModel.buscarPontuacao(idUsuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

    module.exports = {
        cadastrarTentativa,
        listarTentativas,
        buscarPontuacao
    }
