const express = require('express');
const TaskController = require('../controllers/TaskController');

router.get('/', TaskController.index);

  
module.exports = router
