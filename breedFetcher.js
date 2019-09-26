const request = require("request");
let args = process.argv.slice(2);
"use strict";
//end of config code


const breedFetch = function(breed) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {

    if (error) {
      console.log('ERR HERE!!!!: ', error);
    }

    const data = JSON.parse(body);
    const breed = data[0];

    if (breed) {
      console.log(breed.description);
    } else {
      console.log('No such breed:', breed);
    }
    
  });

};

breedFetch(args);