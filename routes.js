exports.execute = function (app) {
  app.get('/', function(req, res) {
    res.render('index', {title: "barge"});
  });

  app.get('/upload', function(req, res) {
    res.send("<h1> File Upload Pagge </h1>");
  });

};
