const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const User = require("../models/userModel");
const Post = require("../models/postModel");
const getDefaultCategories = require('./default-categories')
var passport = require('passport');

// API Routes
router.use("/api", apiRoutes);

// signup route for new users
router.post('/signup', function(req, res) {
  console.log('signup')
  console.log(req.body)
  let user = new User({ 
    username: req.body.username,
    name: req.body.name,
    email: req.body.email,
    venue: '',
    date: '',
    phone: '',
    city: '',
    state: '',
    venue: ''
  })
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
  console.log('Logged in ' + req.user.username)
  res.redirect('/');
});

// Logouts the user
router.get('/logout', function(req, res) {
  console.log('logout')
  req.logout();
  res.send()
});

// gets the user; and the user table has all the properties/data of the user
router.get("/api/user", (req, res) => {
  if (req.user) {
    User.findOne({username: req.user.username})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
  } else {
    console.log('Not logged in')
    res.status(401).json('Not logged in')
  }
});

router.put("/api/user", (req, res) => {
  if (req.user) {
    User.findOne({username: req.user.username})
    .then(dbUser => {
      dbUser.name = req.body.name
      dbUser.email = req.body.email
      dbUser.phone = req.body.phone
      dbUser.city = req.body.city
      dbUser.state = req.body.state
      dbUser.venue = req.body.venue
      dbUser.guests = req.body.guests
      dbUser.date = req.body.date
      res.json(dbUser);
      return dbUser.save()
    })
    .then(user => {
      res.json(user);
    })
    .catch(err => {
      console.log(err)
      res.json(err);
    });
  } else {
    console.log('Not logged in')
    res.status(401).json('Not logged in')
  }
});

// inserts a new category for the logged in user
router.post("/api/categories", (req, res) => {
  console.log('POST categories')
  if (req.user) {
    User.findOne({username: req.user.username})
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
  } else {
    console.log('Not logged in')
    res.status(401).json('Not logged in')
  }
})

router.put("/api/categories", (req, res) => {
  console.log('PUT categories')
  if (req.user) {
    User.findOne({username: req.user.username})
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
  } else {
    console.log('Not logged in')
    res.status(401).json('Not logged in')
  }
})


// gets all the users
router.get("/api/users", (req, res) => {
  User.find({})
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.json(err);
    });
});

// gets all the posts
router.get("/api/posts", (req, res) => {
  console.log('GET posts')
  Post.find({})
    .then(posts => {
      res.json(posts);
    })
    .catch(err => {
      res.json(err);
    });
});

// adds a post
router.post("/api/posts", (req, res) => {
  if (req.user) {

    req.body.username = req.user.username
    Post.create(req.body)
      .then(posts => {
        res.json(posts);
      })
      .catch(err => {
        res.json(err);
      });
  } else {
    console.log('Not logged in')
    res.status(401).json('Not logged in')
  }
    
});

// adds a reply to a post
router.post("/api/posts/:postID/comments", (req, res) => {
  if (req.user) {
    req.body.username = req.user.username
    Post.findById(req.params.postID)
      .then(post => {
        post.comments.push(req.body)
        return post.save()
      })
      .then(user => {
        res.json(user);
      })
      .catch(err => {
        res.send(err);
      });
  } else {
    console.log('Not logged in')
    res.status(401).json('Not logged in')
  }

});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

