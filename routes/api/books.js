const router = require('express').Router();
const booksController = require('../../controllers/booksController');

router.route('/')
  .post(booksController.create);

module.exports = router;