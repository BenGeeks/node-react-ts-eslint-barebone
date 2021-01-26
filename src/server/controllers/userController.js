exports.login = (req, res) => {
  res.send('Successfully logged in');
};

exports.logout = (req, res) => {
  res.send('Successfully logged out');
};

exports.home = (req, res) => {
  res.render('/app');
};
