const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const User = require("../models/userModel");
var passport = require('passport');


// API Routes
router.use("/api", apiRoutes);


router.get('/', function (req, res) {
  console.log('getting ' + req.user.username)
  res.json({ user : req.user });
});

router.get('/register', function(req, res) {
  res.json({});
});

router.post('/register', function(req, res) {
  User.register(new User({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
        console.log('ERRROR while signing up user')
        console.log(err)
          return res.json({
            error: 'Error while signing up'
          })
      }

      passport.authenticate('local')(req, res, function () {
        console.log('Authenticated user: ' + req.user.username)
        res.redirect('/');
      });
  });
});

router.get('/login', function(req, res) {
  res.json({ user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/ping', function(req, res){
  res.send("pong!", 200);
});



function getUserName(req) {
  if (req.user) {
    return req.user.username
  } else {
    // TODO: hard code a test user for now
    return username = "test_user"
  }
}


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

// router.post("/api/user", (req, res) => {
//   User.create(req.body)
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

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

// router.put("/api/user", (req, res) => {
//   let username = getUserName(req)

//   User.findOneAndUpdate({username: username})
//     .then()

//   User.findOne({username: username})
//     .then(dbUser => {
//       console.log('New user data:')
//       console.log(req.body)
//       dbUser.budgetCategories = req.body.budgetCategories
//       console.log('Updated user:')
//       console.log(dbUser)
//       return dbUser.save()
//     })
//     .then(dbUser => {
//       res.json(dbUser);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });


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
