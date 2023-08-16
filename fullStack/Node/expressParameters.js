/**
 * When a specific parameter is present in a route, 
 * we can write a function that will perform the necessary lookup and 
 * attach it to the req object in subsequent middleware that is run
 * 
 * Note that inside an app.param callback, 
 * you should use the fourth argument as the parameter’s value, 
 * not a key from the req.params object.
 */

app.param('spellId', (req, res, next, id) => {
  let spellId = Number(id);
    try {
      const found = SpellBook.find((spell) => {
        return spellId === spell.id;
      })
      if (found) {
        req.spell = found;
        next();
      } else {
        next(new Error('Your magic spell was not found in any of our tomes'));
      };
    } catch (err) {
      next(err)
    }
});



/**
 * Merging parameters
 *
 */

const sorcererRouter = express.Router();
const familiarRouter = express.Router({mergeParams: true});

sorcererRouter.use('/:sorcererId/familiars', familiarRouter);

sorcererRouter.get('/', (req, res, next) => {
  res.status(200).send(Sorcerers);
  next();
});

sorcererRouter.param('sorcererId', (req, res, next, id) => {
  const sorcerer = getSorcererById(id);   
  req.sorcerer = sorcerer;
  next();
});

familiarRouter.get('/', (req, res, next) => {
  res.status(200).send(`Sorcerer ${req.sorcerer} has familiars ${getFamiliars(sorcerer)}`);
});

app.use('/sorcerer', sorcererRouter);
