const app = require('koa')();
const router = require('koa-router')();
const db = require('./db.json');

// Log requests
app.use(function *(next) {
  const start = new Date;
  yield next;
  const ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});

router.get('/api/characters', function *() {
  this.body = db.characters;
});

router.get('/api/characters/:id', function *() {
  const id = parseInt(this.params.id, 10);
  this.body = db.characters.find((character) => character.id === id);
});

router.get('/api/characters/by-location/:locationId', function *() {
  const id = parseInt(this.params.locationId, 10);
  this.body = db.characters.filter((character) => character.location === id);
});

router.get('/api/characters/by-gender/:gender', function *() {
  const gender = this.params.gender.toLowerCase();
  this.body = db.characters.filter((character) => character.gender === gender);
});

router.get('/api/characters/by-species/:species', function *() {
  const species = this.params.species.toLowerCase();
  this.body = db.characters.filter((character) => character.species.includes(species));
});

router.get('/api/characters/by-occupation/:occupation', function *() {
  const occupation = this.params.occupation.toLowerCase();
  this.body = db.characters.filter((character) => character.occupations.includes(occupation));
});

router.get('/', function *() {
  this.body = 'Ready to receive requests';
});

app.use(router.routes());
app.use(router.allowedMethods());

var server = app.listen(80);

process.on('SIGTERM', function() {
  console.log('Shutting down...');
  server.close();
});

