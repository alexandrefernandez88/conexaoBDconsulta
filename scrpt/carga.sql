CREATE SCHEMA `atvcloudfinal` ;

CREATE TABLE IF NOT EXISTS `atvcloudfinal`.`consultadados` (
  `cpf` varchar(14) NOT NULL,
  `nome` varchar(60) NOT NULL,
  `sobrenome` varchar(60) NOT NULL,
  `cidade` varchar(60) NOT NULL,
  `uf` varchar(2) NOT NULL,
  `telefone` varchar(60) NOT NULL,
  PRIMARY KEY (`cpf`)
  );

INSERT INTO `atvcloudfinal`.`consultadados` (`cpf`, `nome`, `sobrenome`, `cidade`, `uf`, `telefone`)
VALUES ('12345678901', 'João', 'Silva', 'São Paulo', 'SP', '987654321'), ('98765432109', 'Maria', 'Santos', 'Rio de Janeiro', 'RJ', '123456789'), ('45678912304', 'Pedro', 'Ferreira', 'Belo Horizonte', 'MG', '654321987'), ('98701234508', 'Ana', 'Carvalho', 'Salvador', 'BA', '321987654'), ('56789012307', 'Lucas', 'Gomes', 'Fortaleza', 'CE', '789012345'), ('32109876502', 'Carolina', 'Ribeiro', 'Recife', 'PE', '901234567'), ('90123456706', 'Mateus', 'Almeida', 'Brasília', 'DF', '234567890'), ('23456789003', 'Laura', 'Martins', 'Curitiba', 'PR', '567890123'), ('78901234505', 'Gustavo', 'Oliveira', 'Manaus', 'AM', '890123456'), ('65432109806', 'Isabela', 'Souza', 'Porto Alegre', 'RS', '012345678')
