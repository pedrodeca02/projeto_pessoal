var database = require("../database/config");

function listarTentativas(idUsuario) {

    var instrucao = `
        SELECT * FROM tentativa WHERE fkUsuario = ${idUsuario};
    `;

    console.log("Executando SQL:\n" + instrucao);
    return database.executar(instrucao);
}

function cadastrarTentativa(idUsuario, idQuiz, pontuacao, acertos, erros) {

    var instrucao = `
        INSERT INTO tentativa (fkUsuario, fkQuiz, tentativa, pontuacao, acertos, erros) VALUES 
        (${idUsuario}, ${idQuiz}, NOW(), ${pontuacao}, ${acertos}, ${erros});
    `;

    console.log("Executando SQL:\n" + instrucao);
    return database.executar(instrucao);
}
function buscarPontuacao(idUsuario) {

    var instrucao = `
        SELECT idTentativa, pontuacao, acertos, DATE_FORMAT(tentativa, '%D/%M/%Y %H:%i:%S') FROM tentativa WHERE fkUsuario = ${idUsuario};
    `;

    console.log("Executando SQL:\n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrarTentativa,
    listarTentativas,
    buscarPontuacao
};