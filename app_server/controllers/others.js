/* GET home page */

module.exports.about = function(req, res) {
  res.render('generic-text', { title: 'About' }); /*render is the Express function for compiling a view template
  												to send as the HTML response that the browser will receive */
};