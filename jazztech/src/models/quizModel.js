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
        INSERT INTO tentativa (fkUsuario, fkQuiz, pontuacao, acertos, erros) VALUES 
        (${idUsuario}, ${idQuiz}, ${pontuacao}, ${acertos}, ${erros});
    `;

    console.log("Executando SQL:\n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    cadastrarTentativa,
    listarTentativas
};