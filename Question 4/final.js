var express = require('express');
var app = express();
var hotelLists = require('./hotels.json');

var cors = function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    next(); 
} 
app.use(cors);

app.get("/hotels", function(req, res){
    res.status(200).send(hotelLists);
});

app.get('/byCity', function(req, res){
    var city = req.query.city;
    var newHotelList = [];
    hotelLists.forEach(hotel=>{
        if (hotel.city==city){
            newHotelList.push(hotel);
        }
    });
    res.status(200).send(newHotelList);
});

app.get('/byFoodType', function(req, res){
    var type = req.query.type;
    var newHotelList = [];
    hotelLists.forEach(hotel=>{
        if (hotel.type==type){
            newHotelList.push(hotel);
        }
    });
    res.status(200).send(newHotelList);
});

app.listen('5500', function(){
    console.log('server listening to port 5500');
});
