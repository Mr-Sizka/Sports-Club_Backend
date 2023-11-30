const express = require('express');
const AdminController = require('../controller/AdminController');

const router = express.Router();

router.post('/save',AdminController.saveAdmin);
router.put('/update',AdminController.updateAdmin);
router.delete('/delete',AdminController.deleteAdmin);
router.get('/list',AdminController.getAdminList);
router.get('/get',AdminController.getAdmin);

module.exports = router