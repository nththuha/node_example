const express = require('express');
const router = express.Router();
const { findAll } = require('../controllers/user.controller');

router.get('/', findAll);

module.exports = router;
