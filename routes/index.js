

module.exports = function(app) {
  
  app.use('/',require('./functions'));
  app.use('/', require('./home'));
  app.use('/contact', require('./contact_us'));
  app.use('/about', require('./about'));

  app.use('/projects', require('./projects'));
  require('./error')(app);
};