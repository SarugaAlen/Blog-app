const express = require('express');
const authenticateToken = require('../middleware/authenticateToken');
const router = express.Router();

router.get('/protected', authenticateToken, (req, res) => {
    res.json({ msg: 'Dostop odobren'});
});

module.exports = router;