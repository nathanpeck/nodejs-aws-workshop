'use strict';

var db = require('db.json');

// Handler for /api/characters
module.exports.characters = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(db.characters),
  };

  callback(null, response);
};

// Handler for /api/characters/:id
module.exports.characterById = (event, context, callback) => {
  const id = parseInt(event.pathParameters.id, 10);

  const response = {
    statusCode: 200,
    body: JSON.stringify(db.characters.find((character) => character.id === id)),
  };

  callback(null, response);
};

// Handler for /api/locations
module.exports.locations = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(db.locations),
  };

  callback(null, response);
};

// Handler for /api/locations/:id
module.exports.locationById = (event, context, callback) => {
  const id = parseInt(event.pathParameters.id, 10);

  const response = {
    statusCode: 200,
    body: JSON.stringify(db.locations.find((location) => location.id === id)),
  };

  callback(null, response);
};

// Handler for /api/characters/by-location/:locationId
module.exports.charactersByLocation = (event, context, callback) => {
  const id = parseInt(event.pathParameters.locationId, 10);

  const response = {
    statusCode: 200,
    body: JSON.stringify(db.characters.filter((character) => character.location === id)),
  };

  callback(null, response);
};

// Handler for /api/characters/by-gender/:gender
module.exports.charactersByGender = (event, context, callback) => {
  const gender = event.pathParameters.gender.toLowerCase();

  const response = {
    statusCode: 200,
    body: JSON.stringify(db.characters.filter((character) => character.gender === gender)),
  };

  callback(null, response);
};

// Handler for /api/characters/by-species/:species
module.exports.charactersBySpecies = (event, context, callback) => {
  const species = event.pathParameters.species.toLowerCase();

  const response = {
    statusCode: 200,
    body: JSON.stringify(db.characters.filter((character) => character.species.includes(species))),
  };

  callback(null, response);
};

// Handler for /api/characters/by-occupation/:occupation
module.exports.charactersByOccupation = (event, context, callback) => {
  const occupation = event.pathParameters.occupation.toLowerCase();

  const response = {
    statusCode: 200,
    body: JSON.stringify(db.characters.filter((character) => character.occupations.includes(occupation))),
  };

  callback(null, response);
};

// Handler for /api/
module.exports.apiRoot = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: 'API ready to receive requests'
  };

  callback(null, response);
};
