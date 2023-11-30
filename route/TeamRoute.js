const express = require('express');
const TeamController = require('../controller/TeamController');

const router = express.Router();

router.post('/save',TeamController.saveTeam);
router.put('/update',TeamController.updateTeam);
router.delete('/delete',TeamController.deleteTeam);
router.get('/list',TeamController.getTeamList);
router.get('/get',TeamController.getTeam);

module.exports = router;