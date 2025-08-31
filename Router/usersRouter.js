// externals imports
const express = require('express');
const router = express.Router();

// internernal imports
const {getUsers} = require('../Controller/usersController');
const decoratTitle = require('../Middleware/Common/decoratedTitle')

// users page

router.get('/', decoratTitle("Users"), getUsers);


module.exports = router;
