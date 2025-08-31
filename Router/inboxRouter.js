// externals imports
const express = require('express');
const router = express.Router();

// internernal imports
const {getInbox} = require('../Controller/inboxController');
const decoratTitle = require('../Middleware/Common/decoratedTitle')

// login page

router.get('/', decoratTitle("Inbox"), getInbox);


module.exports = router;
