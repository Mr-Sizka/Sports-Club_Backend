const express = require('express');
const MatchController = require('../controller/MatchController');

const router = express.Router();

router.post('/save',MatchController.saveMatch);
router.put('/update',MatchController.updateMatch);
router.delete('/delete',MatchController.deleteMatch);
router.get('/list',MatchController.getMatchList);
router.get('/get',MatchController.getMatch);

module.exports = router