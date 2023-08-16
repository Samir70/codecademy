const express = require('express');
const monstersRouter = express.Router();

const monsters = {
  '1': {
    name: 'godzilla',
    age: 250000000
  },
  '2': {
    name: 'manticore',
    age: 21
  }
}

monstersRouter.get('/:id', (req, res, next) => {
  const monster = monsters[req.params.id];
  if (monster) {
    res.send(monster);
  } else {
    res.status(404).send();
  }
});

// import into app.js and use:
const express = require('express');
const app = express();
app.use('/monsters', monstersRouter);
// monstersRouter.get('/:id') matches the full path /monsters/:id.