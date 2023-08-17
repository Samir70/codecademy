const express = require("express");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const PORT = process.env.PORT || 5000;

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());


/**
 * When we serialize a user, 
 * Passport takes the user id and stores it internally on req.session.passport 
 * which is Passport’s internal mechanism to keep track of things.
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  // Look up user id in database. 
  db.users.findById(id, function (err, user) {
    if (err) return done(err); 
    done(null, user);
  });
});



// Add your passport local strategy below:
passport.use(new LocalStrategy(
  function (username, password, done) {
    // Look up user in the db
    db.users.findByUsername(username, (err, user) => {
      // If there's an error in db lookup, 
      // return err callback function
      if(err) return done(err);

      // If user not found, 
      // return null and false in callback
      if(!user) return done(null, false);

      // If user found, but password not valid, 
      // return err and false in callback
      if(user.password != password) return done(null, false);

      // If user found and password valid, 
      // return the user object in callback
      return done(null, user)
    });
  })
);
app.get("/", (req, res) => {
  res.send("Hello from the homepage!");
});

app.post("/login",
  passport.authenticate("insertStrategyHere", { failureRedirect : "/insertPathHere"}),
  (req, res) => {
    res.redirect("profile");
  }
);

/**
 * Now, let’s take a look at how to log users out. 
 * Passport.js exposes a logout function within the request object: req.logout. 
 * The function can be called from any route handler in order to 
 * terminate a login session. 
 * It essentially removes the req.user property and clears the login session (if any).
 */

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

app.get("/profile", (req, res) => {
  res.render("insertDashboardNameHere", { user: req.user });
}); 

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});


