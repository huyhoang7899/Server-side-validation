var express = require('express');

var controller = require('../controllers/user.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/create', controller.create);

router.get('/:id/views', controller.views);

router.get('/:id/update', controller.update);

router.get('/:id/delete', controller.delete);

router.get('/search', controller.search);

router.post('/create', controller.postCreate);

router.post('/update', controller.postUpdate);

module.exports = router;





