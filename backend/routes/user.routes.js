const express = require('express')
const { createUser, getAllUsers } = require('../controllers/user.controller');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Welcome to user routes')
})

router.post('/adduser',createUser);

router.get('/allusers', getAllUsers)

module.exports = router;