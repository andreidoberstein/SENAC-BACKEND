##Principais comandos SQL
Criar base de dados
```
CREATE DATABASE PETSHOP;
```

Selecionar a base
```
USE PETSHOP;
```

Criar tabela de dados
```
CREATE TABLE ANIMALS (
    ID_ANIMALS int NOT NULL AUTO_INCREMENT,
    DS_NAME varchar(255) NOT NULL,
    NM_AGE int,
    FL_SEX enum('M','F'),
    DT_CREATED DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(ID_ANIMALS)
);
```

Visualizar todos os dados da tabela
```
SELECT * FROM ANIMALS;
```

Deletar tabela
```
DROP TABLE ANIMALS;
```

Inserir dados na tabela
```
INSERT INTO ANIMALS(DS_NAME, NM_AGE, FL_SEX) VALUES('doguinho',4,'F');
INSERT INTO ANIMALS(DS_NAME, NM_AGE, FL_SEX) VALUES('doguinho caramelo',7,'M');
INSERT INTO ANIMALS(DS_NAME, NM_AGE, FL_SEX, DT_CREATED) 
VALUES('Pingado',2,'M', '2023-07-26 20:00:05'),
('Pingadolado',3,'M', '2023-07-26');
```

Visualizar colunas com alias
```
SELECT A.DS_NAME FROM ANIMALS A;
```

Visualizar colunas com condicional
```
SELECT A.DS_NAME FROM ANIMALS A WHERE A.ID_ANIMALS = 2;
SELECT A.DS_NAME FROM ANIMALS A WHERE A.DS_NAME = 'doguinho';
SELECT A.DS_NAME FROM ANIMALS A WHERE A.DS_NAME LIKE '%caramelo%';
SELECT A.DS_NAME FROM ANIMALS A WHERE A.FL_SEX = 'M';
SELECT * FROM ANIMALS A WHERE A.DT_CREATED = '2023-07-24 18:17:45';
SELECT * FROM ANIMALS A WHERE A.DT_CREATED BETWEEN '2023-07-24' AND '2023-07-26';
```

Atualizar dados
```
UPDATE ANIMALS SET DS_NAME = 'dog salsicha', FL_SEX = 'F' WHERE ID_ANIMALS = 2;
UPDATE ANIMALS SET NM_AGE = 6 WHERE ID_ANIMALS > 1;
```

Deletar dados
```
DELETE FROM ANIMALS WHERE FL_SEX='F' AND ID_ANIMALS = 2;
DELETE FROM ANIMALS WHERE ID_ANIMALS != 6;
```
