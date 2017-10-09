# Empire.js - Deploying Node.js on AWS

This workshop has step by step tutorials on how to deploy Node.js applications using three different AWS techniques:

- Elastic Beanstalk
- Lambda + Serverless
- EC2 Container Service

To demonstrate these three different platforms we will be deploying a simple REST API for an Adventure Time fan website. The website provides a basic API for consuming structured data about Adventure Time characters and locations.

You can view an example of the data [here](2%20-%20Elastic%20Beanstalk/db.json)

The API has a basic spec:

- GET /api/ - A simple welcome message
- GET /api/characters - A list of all characters
- GET /api/characters/:id - Fetch a specific character by ID
- GET /api/locations - A list of all locations
- GET /api/locations/:id - Fetch a specific location by ID
- GET /api/characters/by-location/:locationId - Fetch all characters at a specific location
- GET /api/characters/by-gender/:gender - Fetch all characters of specified gender
- GET /api/characters/by-species/:species - Fetch all characters of specified species
- GET /api/characters/by-occupation/:occupation - Fetch all characters that have specified occupation

