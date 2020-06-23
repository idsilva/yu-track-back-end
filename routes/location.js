const express = require('express');
const router = express.Router();
const Location = require('../models/location_model')
//Get all Locations
router.get('/', (req, res) => {
	
	Location.find({})
	.then(locations => {
		res.status(200).send(locations);
	})
	.catch(err => {
		res.status(500).send(err);
	})
 });

//Get Specific Location
router.get('/:LocationId', (req, res) => {
	
	//let location = [{_id:req.params.LocationId, name:"Any Name",coords:[3.312,3.123]}];
	//5eeef2250c32ae2f94235f7c
	//console.log(typeof req.params.LocationId)
	Location.findById(req.params.LocationId).exec()
	.then(doc => {
		if (!doc) res.status(404).send("No item found")
		else{res.status(200).send(doc)}
	})
	.catch(err => {
		res.status(500).send(err);
	})  
});

//Deletes a specific Location
router.delete('/:LocationId', (req, res) => {
	
	Location.findByIdAndDelete(req.params.LocationId)
	.then(doc=>{
		if (!doc) res.status(404).send("No item found")
		res.status(200).send()
	})
	.catch((err)=>{
		res.status(500).send(err)
	})

});

//Creates a new Location
router.post('/', (req, res) => {
	const newObject = new Location(req.body)
	
 	newObject.save()
		.then(locations => {
			res.status(200).send(newObject);
		})
		.catch(err => {
			res.status(500).send(err);
		}) 
 		
});

//Update a Location
router.put('/:LocationId', async (req, res) => {
		const newObject = new Location(req.body)
		Location.findByIdAndUpdate(req.params.LocationId,{name: newObject.name})
		.then(result=>{
			res.status(200).send(newObject)
		})
		.catch ((err)=> {res.status(500).send(err)}) 		
});
module.exports = router;