CREATE DATABASE casadocodigo;

USE casadocodigo;

CREATE TABLE livros (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) DEFAULT NULL,
    descricao TEXT,
    preco DECIMAL(10,2) DEFAULT NULL
);

INSERT INTO livros(titulo, descricao, preco) VALUES
    ('Comecando com nodejs', 'livro introdutório sobre nodejs', 39.90),
    ('Comecando com javascript', 'livro introdutório sobre javascript', 39.90),
    ('Comecando com express', 'livro introdutório sobre express', 39.90);