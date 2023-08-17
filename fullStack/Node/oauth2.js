// npm install oauth2-server
// in app.js
const OAuth2Server = require('oauth2-server');
const oauth = new OAuth2Server({
  model: require('./model.js'),
  allowBearerTokensInQueryString: true,
  accessTokenLifetime: 60 * 60
});
const obtainToken = (req, res) => {
  let request = new OAuth2Server.Request(req);
  let response = new OAuth2Server.Response(res);

  return oauth.token(request, response)
      .then((token) => {
          res.json(token);
      })
      .catch((err) => {
        res.status(err.code || 500).json(err);
      });
}

app.all('/auth', obtainToken);

const authenticateRequest = (req, res, next) => {

  let request = new OAuth2Server.Request(req);
  let response = new OAuth2Server.Response(res);

  return oauth.authenticate(request, response)
    .then(()=>{
      next();
    })
    .catch((err) => {
      res.send(err);
    })
}

app.get('/secret', authenticateRequest, function(req, res){
  res.send("Welcome to the secret area!");
});

// in db.js
module.exports = {
  confidentialClients: [{
    clientId: 'secretapplication',
    clientSecret: 'topsecret',
    grants: [
      'client_credentials'
    ]
  }],
  tokens: []
}


// in model.js
let db = require('./db.js');

// Write getClient() function here
const getClient = (clientId, clientSecret) => {
  let confidentialClients = db.confidentialClients.filter((client)=>{
    return client.clientId === clientId && client.clientSecret === clientSecret
  });
  return confidentialClients[0];
}

const saveToken = (token, client, user) => {
  token.client = {
    id: client.clientId
  }
  token.user = {
    username: user.username
  }
  db.tokens.push(token);
  return token;
}

const getUserFromClient = (client) => {
  return {};
}

const getAccessToken = (accessToken) => {
  let tokens = db.tokens.filter((savedToken)=>{
    return savedToken.accessToken === accessToken;
  })
  return tokens[0];
 }


module.exports = {
  getClient, saveToken, getUserFromClient, getAccessToken
}