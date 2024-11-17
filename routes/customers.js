const express = require("express");
const router = express.Router();
const customerController=require('../controllers/customerController');
router.get('/',customerController.getAllCustomer)
module.exports = router;
