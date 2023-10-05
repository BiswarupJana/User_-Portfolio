const express= require('express');
const  userController =require('./../controller/userController');



const router = express.Router();

router
.route('/')
.post(userController.createUsersDetails);

module.exports = router;