const { Router } = require('express');

const { userGet, userDelete, userPost, userPut, userPatch } = require('../controllers/userController');

const router = Router();



router.get('/', userGet);

router.put('/:id', userPut);

router.post('/', userPost);

router.delete('/', userDelete);

router.patch('/', userPatch)


module.exports = router;