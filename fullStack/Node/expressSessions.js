// npm install express-session
const session = require("express-session")
const store = new session.MemoryStore();
// Note: Storing in-memory sessions is something that 
// should be done only during development, 
// NOT during production due to security risks.

app.use(
  session({
    secret: "D53gxl41G",
    cookie: { maxAge: 1000 * 60 *60 * 24, secure: true, sameSite: "none" },
    resave: false,
    saveUninitialized: false,
    store, // see note above
  })
);


// logging in
// Look up user in database, if found, confirm password:
if (auth(username, password)) {
  // Attach an `authenticated` property to our session:
  req.session.authenticated = true;
  // Attach a user object to our session:
  req.session.user= {
    username,
    password,
  }
}