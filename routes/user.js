const express= require('express');
const user_con= require('../controller/user-con.js')
const route = express.Router();


route.route('/')
.get(user_con.getalluser)
.post(user_con.createnewuser)
route.route('/:id')
.get(user_con.getoneuser)
.patch(user_con.updateuser)
.delete(user_con.deleteuser)


module.exports=route;