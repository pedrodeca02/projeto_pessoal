CREATE DATABASE jazztech;
use jazztech;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100),
email VARCHAR(50) UNIQUE,
senha VARCHAR(50)
);

CREATE TABLE quiz (
idQuiz INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(40),
descricao VARCHAR(100)
);

CREATE TABLE pontuacao (
fkUsuario INT,
fkQuiz INT,
	CONSTRAINT pkComposta PRIMARY KEY (fkUsuario, fkQuiz),
	FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fkQuiz) REFERENCES quiz(idQuiz)
);

select * from usuario

