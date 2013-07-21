exports.execute = function (app, postgres) {
  app.get('/', function(req, res) {
    res.render('index', {title: "barge"});
  });

  app.get('/upload', function(req, res) {
    res.render('upload');
  });

  app.post('/post-image', function(req, res) {
    //request should have binary and meta data
    //post image binary data to pg database
  });


};
