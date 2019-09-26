const request = require("request");
"use strict";
const fetchBreedDescription = function(breed, callback) {
 request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, responseNotUsed, body) => {

   if (error) {
     callback(error,null);
   }

   const data = JSON.parse(body);
   const breed = data[0];

   if (breed) {
     callback(null,breed.description);
   } else {
     callback(`${breed} isn't a breed!`,null);
   }

 });
};
module.exports = { fetchBreedDescription };