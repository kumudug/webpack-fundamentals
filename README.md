# webpack-fundamentals

Test out webpack

- npm install webpack -g [install webpack globally]
- webpack ./app.js bundle.js [builds webpack bundle for app.js]
- we add a config file to webpack to give it it's settings
	- A config file in webpack is a commonjs module
	- After we have a config file we can use just the webpack command to build the app.
- Watch mode
	- In command line type "webpack --watch" will take it to watch mode
    - Or in config set "watch: true"
- Running webpack with webpack-dev-server
	- install "webpack", "webpack-dev-server" npm packages as dev dependancies
    - put this to scripts in package.json ["start": "webpack-dev-server --inline --progress --port 8080"]
    - run npm start in command line
- Webpack prod
	- give the following command "npm run build"
- After building for prod instead of running webpack dev server run "npm run startprod". [check package.json]
- For debugging put -d flag. You can debug individual files 
