NH Node.js: Sample Express App
=========



### Installation and Setup
You need to have [Node.js installed](http://nodejs.org), then:

1. Clone the repo: `git clone https://github.com/brentwalter/sampleExpressApp.git`
2. `cd sampleExpressApp`
3. Install project dependencies: `npm install` (use sudo if necessary)
4. Start the app in development mode: `node app`. 
    - That command will start the application on [http://localhost:3000](http://localhost:3000) using mock data.
5. [OPTIONAL] If you want to connect to a database, fill out the config/database.example.js file, and rename it to database.js. Then start your app with `NODE_ENV=production node app`. Your database will need a schema that is compatible with the SQL queries in the models.

### Demonstrated Features
- Structuring Express.js application with [sub-applications](http://vimeo.com/56166857)
- Serving static assets with [Express.js](http://expressjs.com)
- Creating external REST, JSON APIs
- Rendering a view with Jade templates via Express and the [jade module](https://www.npmjs.org/package/jade)
- Consuming external APIs with the [request module](https://www.npmjs.org/package/request)
- Managing multiple asynchronous operations with the [async module](https://www.npmjs.org/package/async)
- Managing MySQL database requests by creating models based on the [mysql module](https://www.npmjs.org/package/mysql)
- Mocking database requests with the use of NODE_ENV environment variable

### App Pages
- `http://localhost:3000/`: view the dashboard page

### App Data API Endpoints
- `http://localhost:3000/api/donations`: get summary data for donations
- `http://localhost:3000/api/campaigns`: get summary data for campaigns

### App Project Structure
````bash
app.js              [MAIN FILE THAT INITIALIZES APPLICATION]
app                 [HOLDS THE MAIN APPLICATION LOGIC]
├── campaigns-api   [EXTERNAL JSON API]
│   └── index.js
├── dashboard-page  [RENDERS MAIN DASHBOARD PAGE]
│   ├── dash.jade
│   └── index.js
├── donations-api   [EXTERNAL JSON API]
│   └── index.js
├── models          [RETURN DATA FROM DATABASE]
│   ├── campaigns
│   │   ├── index.js
│   │   └── mock.js
│   └── donations
│       ├── index.js
│       └── mock.js
└── views            [SHARED TEMPLATE]
    └── layout.jade
config               [SETUP DATABASE CONNECTION]
└── database.example.js
public                [SERVE STATIC ASSETS]
└── style.css
````
