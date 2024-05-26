const express = require('express');
const router = express.Router();
const controllers = require('../controllers/userController.js');
const auth = require('../middleware/authToken.js');

router.post('/', controllers.createUser);
router.get('/:id', controllers.readUser);
router.get('/me', auth.verifyToken, controllers.getAuthenticatedUser); // Nueva ruta
router.put('/:id', auth.verifyToken, controllers.updateUser);
router.delete('/:id', auth.verifyToken, controllers.deleteUser);

module.exports = router;
