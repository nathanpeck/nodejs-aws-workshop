const app = require('koa')();
const router = require('koa-router')();
const db = require('./db.json');

// Log requests
app.use(function *(next){
  const start = new Date;
  yield next;
  const ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

router.get('/api/characters', function *(next) {
  this.body = db.characters;
});

router.get('/api/characters/:id', function *(next) {
  const id = parseInt(this.params.id);
  this.body = db.characters.find((character) => character.id == id);
});

router.get('/api/locations', function *() {
  this.body = db.locations;
});

router.get('/api/locations/:id', function *() {
  const id = parseInt(this.params.id);
  this.body = db.locations.find((location) => location.id == id);
});

router.get('/api/characters/by-location/:locationId', function *() {
  const id = parseInt(this.params.locationId);
  this.body = db.characters.filter((character) => character.location == id);
});

router.get('/api/characters/by-gender/:gender', function *() {
  const gender = this.params.gender.toLowerCase();
  this.body = db.characters.filter((character) => character.gender == gender);
});

router.get('/api/characters/by-species/:species', function *() {
  const species = this.params.species.toLowerCase();
  this.body = db.characters.filter((character) => character.species.includes(species));
});

router.get('/api/characters/by-occupation/:occupation', function *() {
  const occupation = this.params.occupation.toLowerCase();
  this.body = db.characters.filter((character) => character.occupations.includes(occupation));
});

router.get('/api/', function *() {
  this.body = "API ready to receive requests";
});

router.get('/', function *() {
  this.body = "Ready to receive requests";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8081);
