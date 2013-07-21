exports.execute = function (app, postgres) {
  app.get('/', function(req, res) {
    res.render('index', {title: "barge"});
  });

  app.get('/upload', function(req, res) {
    res.render('upload');
  });

  app.post('/imagepost', function(req, res) {
    console.log("==============");
    console.log(req.body);
    console.log("==============");

    //request should have binary and meta data
    //post image binary data to pg database
  });


};
