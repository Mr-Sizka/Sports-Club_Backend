const express = require('express');
const playerController = require('../controller/PlayerController');

const router = express.Router();

router.post('/save',playerController.savePlayer);
router.put('/update',playerController.updatePlayer);
router.delete('/delete',playerController.deletePlayer);
router.get('/list',playerController.getPlayerList);
router.get('/get',playerController.getPlayer);
router.get('/login',playerController.login);


module.exports = router;