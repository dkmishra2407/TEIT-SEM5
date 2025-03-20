const router = require('express').Router()
const UserController = require('../controller/UserController')

router.get('/users',UserController.get_all_user);
router.post('/add',UserController.add_new_user);
router.get('/:id', UserController.findById)

module.exports = router;