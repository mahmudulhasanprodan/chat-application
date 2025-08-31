// externals imports
const express = require('express');
const router = express.Router();

// internernal imports
const {getLogin} = require('../Controller/loginController');
const decoratTitle = require('../Middleware/Common/decoratedTitle')

// login page

router.get('/', decoratTitle("Login"), getLogin);


module.exports = router;
