var express = require('express')
  , consolidate = require('consolidate')
  , path = require('path')
  , Mincer = require('mincer')
  , app = express();



app.engine('html', consolidate.mustache);
app.set('view engine', 'html');
app.set('views', __dirname + "/views");

app.use(express.logger());

var environment = new Mincer.Environment();
environment.appendPath('assets/css');

app.use('/assets', Mincer.createServer(environment));

app.use("/css", express.static(path.join(__dirname, "/assets/css")));
app.use("/js", express.static(path.join(__dirname, "/assets/js")));

app.get('/', function(req, res) {
  res.render('index', {title: "barge"});
});

app.get('/upload', function(req, res) {
  res.send("<h1> File Upload Pagge </h1>");
});

app.listen(3000);

console.log("Express server started on port 3000");
