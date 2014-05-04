dashboard
=========



### Installing Locally
You need to have [Node.js installed](http://nodejs.org) as well as [Grunt.js](http://gruntjs.com).

1. Clone the repo: `git clone https://github.com/grassloot/dashboard.git`
2. `cd dashboard`
3. Install project dependencies: `npm install` (use sudo if necessary)
4. If you want to connect to a database, fill out the config/database.example.js file, and rename it to: database.js
    - By default, this sample application will use mock data. To use the database, start your app with `NODE_ENV=production node app`


To run this sample application in the default mode (development) use the command: `node app`.

That command will start the application on port 3000, http://localhost:3000.

### Pages
- `http://localhost:3000/`: view the dashboard page

### Data API Endpoints
- `http://localhost:3000/api/donations`: get summary data of donations
- `http://localhost:3000/api/campaigns`: get summary data of campaigns
