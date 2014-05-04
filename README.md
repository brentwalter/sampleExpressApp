dashboard
=========



### Installing Locally
You need to have [Node.js installed](http://nodejs.org) as well as [Grunt.js](http://gruntjs.com).

1. Clone the repo: `git clone https://github.com/grassloot/dashboard.git`
2. `cd dashboard`
3. Install project dependencies: `npm install` (use sudo if necessary)
4. Fill out the config/database.example.js file, and rename it to: database.js


Now you're ready to run the app: `node app`.

That command will start the application on port 3000.

### Pages
- `http://localhost:3000/`: view the dashboard page

### Data API Endpoints
- `http://localhost:3000/api/donations`: get summary data of donations
- `http://localhost:3000/api/campaigns`: get summary data of campaigns
