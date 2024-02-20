const router = require('express').Router();
const stadiumController = require('../../controllers/application/stadiumController');


// Get stadiums
router.get('/', stadiumController.getStadiums);


module.exports = router;