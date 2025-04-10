const pool = require('../models/db');
const { validationResult } = require('express-validator');

exports.getAll = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM livros');
  res.json(rows);
};

exports.getById = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM livros WHERE id = ?', [req.params.id]);
  if (!rows.length) return res.status(404).json({ error: 'Livro não encontrado' });
  res.json(rows[0]);
};

exports.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
  const { titulo, autor, anoPublicacao, genero, isbn } = req.body;
  const [result] = await pool.query(
    'INSERT INTO livros (titulo, autor, anoPublicacao, genero, isbn) VALUES (?, ?, ?, ?, ?)',
    [titulo, autor, anoPublicacao, genero, isbn]
  );
  res.status(201).json({ id: result.insertId, titulo, autor, anoPublicacao, genero, isbn });
};

exports.update = async (req, res) => {
  const { titulo, autor, anoPublicacao, genero, isbn } = req.body;
  await pool.query(
    'UPDATE livros SET titulo=?, autor=?, anoPublicacao=?, genero=?, isbn=? WHERE id=?',
    [titulo, autor, anoPublicacao, genero, isbn, req.params.id]
  );
  res.json({ message: 'Atualizado com sucesso' });
};

exports.remove = async (req, res) => {
  await pool.query('DELETE FROM livros WHERE id=?', [req.params.id]);
  res.json({ message: 'Removido com sucesso' });
};
