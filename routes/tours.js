const express= require('express');
const tour_con=require('../controller/tour-con.js')
const route= express.Router();

route.param('id',tour_con.ID);
route.route('/')
.get(tour_con.getalltour)
.post(tour_con.createnewtour);
route.route('/:id')
.get(tour_con.getonetour)
.patch(tour_con.updatetour)
.delete(tour_con.deletetour);


module.exports =route;