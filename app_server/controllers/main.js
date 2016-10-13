/* GET home page */

module.exports.index = function(req, res) {
  res.render('index', { title: 'Express' }); /*render is the Express function for compiling a view template
  												to send as the HTML response that the browser will receive */
};