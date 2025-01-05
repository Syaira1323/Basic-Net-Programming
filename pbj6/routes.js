const express = require('express');
const router = express.Router();
const userController = require('./controller/usercontroller');

// Rute untuk mendapatkan semua catatan
router.get('/biodata', userController.getAllDatas);

// Rute untuk mendapatkan catatan berdasarkan ID
router.get('/biodata/:id', userController.getDataById);

// Rute untuk menambahkan catatan baru
router.post('/biodata', userController.addData);

// Rute untuk memperbarui catatan
router.put('/biodata/:id', userController.updateData);

// Rute untuk menghapus catatan
router.delete('/biodata/:id', userController.deleteData);

module.exports = router;
