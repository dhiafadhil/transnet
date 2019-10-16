let express = require('express');
let router = express.Router();
const controller = require('../controller/controller.js');

router.get('/',controller.getHelloWord);
router.get('/api/users',controller.getAllUsers);
router.get('/api/user',controller.getUsersByPagination);
router.get('/api/userFind',controller.getUser);
router.post('/api/users',controller.addUsers);
router.put('/api/users/:id',controller.updateUsers);
router.delete('/api/users/:id',controller.removeUsers);

module.exports = router;
