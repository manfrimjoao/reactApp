const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/livrosController');

const validations = [
  body('titulo')
    .notEmpty()
    .withMessage('Título é obrigatório'),
  body('autor')
    .notEmpty()
    .withMessage('Autor é obrigatório'),
  body('anoPublicacao')
    .isInt({ min: 0 })
    .withMessage('Ano deve ser um número inteiro ≥ 0')
    .toInt(),
  body('isbn')
    .isLength({ min: 10, max: 13 })
    .withMessage('ISBN deve ter entre 10 e 13 caracteres')
];

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', validations, controller.create);
router.put('/:id', validations, controller.update);
router.delete('/:id', controller.remove);

module.exports = router;
