/* GET 'about' page */

module.exports.about = function(req, res) {
  res.render('index', { title: 'About' }); /*render is the Express function for compiling a view template
  												to send as the HTML response that the browser will receive */
};