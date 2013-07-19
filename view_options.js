exports.execute = function (app) {
  app.engine('html', require('hogan-express'))
  app.set('view engine', 'html');
  app.set('views', __dirname + "/views");
  app.set('layout', 'layout') // rendering by default
  //app.set('partials', {head: "head"}) // partails using by default on all pages
  app.enable('view cache')
};
