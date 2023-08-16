const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.get('/api/quotes', (req, res, next) => {
  const author = req.query.person
  if (author === undefined) {
    res.send(quotes)
  } else {
    res.send(quotes.filter(q => q.person === author))
  }
});

/**
 * eg: curl -X POST "http://localhost:4001/api/quotes/?quote=hello%20world&person=anon"
 */
app.post('/api/quotes', (req, res, next) => {
  const quote = req.query;
  const goodQuote = quote.person && quote.quote
  if (goodQuote) {
    quotes.push(quote)
    res.status(201).send(quote)
  } else {
    res.status(400).send("Poorly formated quote")
  }
});
app.get('/api/quotes/random', (req, res, next) => {
  const quote = { quote: getRandomElement(quotes) }
  res.send(quote)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

