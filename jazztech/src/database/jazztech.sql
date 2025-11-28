CREATE DATABASE jazztech;
use jazztech;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
email VARCHAR(50) UNIQUE,
senha VARCHAR(50)
);
select * from usuario;

CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(40),
descricao VARCHAR(100)
);

CREATE TABLE tentativa (
idTentativa INT PRIMARY KEY AUTO_INCREMENT,
acertos INT,
erros INT,
pontuacao INT,
fkUsuario INT,
fkQuiz INT,
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);

 INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');

 INSERT INTO quiz (nome, descricao) VALUES ('quiz de jazz', 'quiz de jazz pedrao');
 
 INSERT INTO tentativa (fkUsuario, fkQuiz, pontuacao, acertos, erros) VALUES ('${idUsuario}', '${idQuiz}', '${pontuacao}', '${acertos}', '${erros}');
 
select * from usuario;
select * from quiz;
select * from tentativa;
