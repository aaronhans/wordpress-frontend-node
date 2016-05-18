var request = require('request');

module.exports = function(req,res) {
  request('http://hans.hq.office.ziprealty.com:8888/wordpress/wp-json/wp/v2/posts', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body)
      res.render('home',{"posts":JSON.parse(body)});
    }
  })
}
