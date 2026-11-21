const express = require('express');
const router = express.Router();
const { chatWithMinho } = require('../controllers/chatController');

router.post('/', chatWithMinho);

module.exports = router;
