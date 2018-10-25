const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Locations collection and inserts the locations below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dealsnearyou"
);

const locationSeed = [
  {
    title: 'City',
    name: 'Philadelphia',
    deal: 'no deals',
    position:{
      lat: 39.952583,
      lng: -75.165222
    },
    date: new Date(Date.now())
  },
  
  {
    title: 'Restaurant',
    name: 'Seventh Heaven',
    deal: '5%',
    position:{
      lat: 39.952533,
      lng: -75.171656
    },
    date: new Date(Date.now())
  },

];

db.Location
  .remove({})
  .then(() => db.Location.collection.insertMany(locationSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
