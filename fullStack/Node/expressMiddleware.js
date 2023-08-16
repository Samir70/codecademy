/**
 * nb: app.use can take an array of paths, each of which can be a string or regexp
 */

app.use((req, res, next) => {
  console.log(`${req.method} Request Received`);
  next();
  // so next function (possible for the path) will be called
});


const authenticate = (req, res, next) => {
  // ...
};
 
const validateData = (req, res, next) => {
  // ...
};
 
const getSpell = (req, res, next) => {
  res.status(200).send(getSpellById(req.params.id));
};
 
/**
 * app.get, use, etc can take more than one callback eg:
 */
app.get('/spells/:id', authenticate, getSpell);


/**
 * ERRORS
 */

app.use((req, res, next) => {
  const newValue = possiblyProblematicOperation();
  if (newValue === undefined) {
    let undefinedError = new Error('newValue was not defined!');
    return next(undefinedError);
    // next is called with an error object, so the middleware below will be called 
  }
  next();
});
 
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).send(err.message);
});