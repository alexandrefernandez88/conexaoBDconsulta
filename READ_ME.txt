1) Para executar o banco de dados, rode o script abaixo:

docker run -d -p 3306:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_USER=user -e MYSQL_DATABASE=atvcloudfinal mysql/mysql-server:latest

2) Execute os scripts abaixo de INSERT
CREATE TABLE IF NOT EXISTS `consultadados` (
  `cpf` varchar(14) NOT NULL,
  `nome` varchar(60) NOT NULL,
  `sobrenome` varchar(60) NOT NULL,
  `cidade` varchar(60) NOT NULL,
  `uf` varchar(2) NOT NULL,
  `telefone` varchar(60) NOT NULL,
  PRIMARY KEY (`cpf`)
  );

INSERT INTO `atvclouding`.`consultadados` (`cpf`, `nome`, `sobrenome`, `cidade`, `uf`, `telefone`)
VALUES ('12345678901', 'João', 'Silva', 'São Paulo', 'SP', '987654321'), ('98765432109', 'Maria', 'Santos', 'Rio de Janeiro', 'RJ', '123456789'), ('45678912304', 'Pedro', 'Ferreira', 'Belo Horizonte', 'MG', '654321987'), ('98701234508', 'Ana', 'Carvalho', 'Salvador', 'BA', '321987654'), ('56789012307', 'Lucas', 'Gomes', 'Fortaleza', 'CE', '789012345'), ('32109876502', 'Carolina', 'Ribeiro', 'Recife', 'PE', '901234567'), ('90123456706', 'Mateus', 'Almeida', 'Brasília', 'DF', '234567890'), ('23456789003', 'Laura', 'Martins', 'Curitiba', 'PR', '567890123'), ('78901234505', 'Gustavo', 'Oliveira', 'Manaus', 'AM', '890123456'), ('65432109806', 'Isabela', 'Souza', 'Porto Alegre', 'RS', '012345678')


3) Para executar a aplicação, rode o script abaixo
docker run -p 3000:3000 --atvcloudfinal -d alexandrefernandez88/atvcloudfinal:0.0.2

4) Abra a URL http://localhost:3000

5) Teste também as URLs:
    http://localhost:3000/readiness
    http://localhost:3000/liveness
    http://localhost:3000/consulta-dados

5) O link do GitHub é https://github.com/alexandrefernandez88/atvcloudfinal e do DockerHub é https://hub.docker.com/repository/docker/alexandrefernandez88/atvcloudfinal/general

