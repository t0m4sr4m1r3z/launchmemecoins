const express = require('express');
const { createToken } = require('../controllers/tokenController');

const router = express.Router();

router.post('/create-token', createToken);

module.exports = router;