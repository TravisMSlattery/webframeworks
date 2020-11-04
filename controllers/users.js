const User = require('../models/User')

exports.register_user = async (req, res) => {
    // Check if this user already exisits
    let user = await User.findOne({
      email: req.body.email
    });
    if (user) {
      //do a pop up or message instead of this
      return res.status(400).send('That user already exisits!');

    } else {
      // Insert the new user if they do not exist yet
      user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
      await user.save();
      res.redirect('/login')
    }
}

exports.login_user = async (req, res) => {

    const user = await User.find({
      email: req.body.email,
      password: req.body.password
    })
  
    if (user) {
  
      res.redirect('/movies')
  
    } else {
  
      //display error and then redirect 
      res.redirect('/register')
    }
}

exports.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'You are logged out');
    res.redirect('/users/login');
}