var express = require('express')
  , consolidate = require('consolidate')
  , path = require('path')
  , Mincer = require('mincer')
  , pg = require('pg')
  , conString = "tcp://phile@localhost:5432/file_upload"
  , routes = require('./routes')
  , viewOptions = require('./view_options')
  , app = express();

app.use(express.logger());
app.use(express.bodyParser()); // very useful to get form data with

viewOptions.execute(app);

var environment = new Mincer.Environment();
environment.appendPath('assets/css');

app.use('/assets', Mincer.createServer(environment));
//app.use("/css", express.static(path.join(__dirname, "/assets/css")));
app.use("/js", express.static(path.join(__dirname, "/assets/js")));

routes.execute(app, pg);

app.listen(3000);
console.log("Express server started on port 3000");
