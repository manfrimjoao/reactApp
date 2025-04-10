-- Criação do banco de dados
CREATE DATABASE biblioteca;
USE biblioteca;

-- Criação da tabela livros
CREATE TABLE livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    anoPublicacao INT NOT NULL,
    genero VARCHAR(100),
    isbn VARCHAR(13) UNIQUE
);

-- Inserção de dados de exemplo
INSERT INTO livros (titulo, autor, anoPublicacao, genero, isbn) VALUES
('O Senhor dos Anéis', 'J.R.R. Tolkien', 1954, 'Fantasia', '9780345339706'),
('1984', 'George Orwell', 1949, 'Distopia', '9780451524935'),
('Dom Quixote', 'Miguel de Cervantes', 1605, 'Romance', '9780060934347');