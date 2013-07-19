var express = require('express')
  , consolidate = require('consolidate')
  , path = require('path')
  , Mincer = require('mincer')
  , pg = require('pg')
  , conString = "tcp://phile@localhost:5432/file_upload"
  , routes = require('./routes')
  , app = express();


app.use(express.logger());

app.engine('html', require('hogan-express'))
app.set('view engine', 'html');
app.set('views', __dirname + "/views");
app.set('layout', 'layout') // rendering by default
//app.set('partials', {head: "head"}) // partails using by default on all pages
app.enable('view cache')


var environment = new Mincer.Environment();
environment.appendPath('assets/css');

app.use('/assets', Mincer.createServer(environment));
//app.use("/css", express.static(path.join(__dirname, "/assets/css")));
app.use("/js", express.static(path.join(__dirname, "/assets/js")));


routes.execute(app);

app.listen(3000);

console.log("Express server started on port 3000");
