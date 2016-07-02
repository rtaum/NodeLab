exports.index = function(req, res) {
  res.send('Welcome to customers express, customer ' + req.params.id);
}

exports.contact = function(req, res) {
  res.send('Welcome to customers contact');
}
