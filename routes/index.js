const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const User = require("../models/userModel");
const getDefaultCategories = require('./default-categories')
var passport = require('passport');

// API Routes
router.use("/api", apiRoutes);

// signup route for new users
router.post('/signup', function(req, res) {
  let user = new User({ username : req.body.username })
  user.budgetCategories = getDefaultCategories()
  User.register(user, req.body.password, function(err, account) {
      if (err) {
        console.log('ERRROR while signing up user')
        console.log(err)
          return res.json({
            error: 'Error while signing up'
          })
      }
      // authenticates the user and puts the user's username into a session;
      // anytime you make another request, it automatically has the username w/o the user providing it
      passport.authenticate('local')(req, res, function () {
        console.log('Authenticated user: ' + req.user.username)
        res.redirect('/');
      });
  });
});

// Login route for the user
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

// Logouts the user
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// Returns the name of the logged in user or test_user if no one is logged in
function getUserName(req) {
  if (req.user) {
    return req.user.username
  } else {
    // TODO: hard code a test user for now
    return username = "test"
  }
}

// gets the user; and the user table has all the properties/data of the user
router.get("/api/user", (req, res) => {
  let username = getUserName(req)
  User.findOne({username: username})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

// inserts a new category for the logged in user
router.post("/api/categories", (req, res) => {
  console.log('POST categories')
  let username = getUserName(req)
  User.findOne({username: username})
    .then(user => {
      user.budgetCategories.push(req.body)
      return user.save()
    })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.send(err);
    });
})

router.put("/api/categories", (req, res) => {
  console.log('PUT categories')
  let username = getUserName(req)
  User.findOne({username: username})
    .then(user => {
      user.budgetCategories = req.body
      return user.save()
    })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      res.send(err);
    });
})

// gets all the users
router.get("/api/users", (req, res) => {
  User.find({})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

