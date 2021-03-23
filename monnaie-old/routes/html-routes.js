// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/dash");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/dash");
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/dash", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/dash.html"));
  });

  app.get("/budget", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/budget.html"));
  });

  app.get("/tasks", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/tasks.html"));
  });

  app.get("/chart", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/chart.html"));
  });

  app.get("/test", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/test.html"));
  });
};
