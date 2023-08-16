// Import the express library here
const express = require("express");
// Instantiate the app here
const app = express();

const PORT = process.env.PORT || 4001;


app.get('/path/:id', (req, res, next) => {})
// /path/:id 
// will match both
// /path/1 and /path/45.
// find id in req.params

const monsters = { 
  hydra: { height: 3, age: 4 }, 
  dragon: { height: 200, age: 350 } 
};
// GET /monsters/hydra
app.get('/monsters/:name', (req, res, next) => {
  console.log(req.params); // { name: 'hydra' }
  const monster = monsters[req.params.name];
  if (monster) {
    res.send(monster);
  } else {
    res.status(404).send('Monster not found');
  }
});

const monstersById = { '1': { name: 'cerberus', age: '4'  } };
// PUT /monsters/1?name=chimera&age=1
app.put('/monsters/:id', (req, res, next) => {
  const monsterUpdates = req.query;
  monstersById[req.params.id] = monsterUpdates;
  res.send(monstersById[req.params.id]);
});


// Invoke the app's `.listen()` method below:
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
  // res.send([])
  // res.json({})
})