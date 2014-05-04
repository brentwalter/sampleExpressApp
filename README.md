NH Node.js: Sample Express Application
=========



### Installing Locally
You need to have [Node.js installed](http://nodejs.org), then:

1. Clone the repo: `git clone https://github.com/brentwalter/sampleExpressApp.git`
2. `cd sampleExpressApp`
3. Install project dependencies: `npm install` (use sudo if necessary)
4. If you want to connect to a database, fill out the config/database.example.js file, and rename it to: database.js
    - By default, this sample application will use mock data. To use a live database, start your app with `NODE_ENV=production node app`. You'll also have to have a database available with a compatible schema.


To run this sample application in the default mode (development) use the command: `node app`.

That command will start the application on http://localhost:3000 using mock data.

### Pages
- `http://localhost:3000/`: view the dashboard page

### Data API Endpoints
- `http://localhost:3000/api/donations`: get summary data of donations
- `http://localhost:3000/api/campaigns`: get summary data of campaigns

### Project Structure
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
├── database.example.js
└── database.js
public                [SERVE STATIC ASSETS]
└── style.css
````
