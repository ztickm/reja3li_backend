let ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {

    app.post('/items', (req, res) => {
        const item = {
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            amount: req.body.amount,
            owner_id: req.body.owner_id,
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            photo_URL: req.body.photo_URL,
            lent_to_id: req.body.lent_to_id,
            borrowed_from_id: req.body.borrowed_from_id
        }
        db.collection('elements').insert(item, (err, result) => {
            if (err) res.send({ 'error': 'an error has occured' + err })
            else res.send(result.ops[0])

        })
    });

    app.get('/items/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('elements').findOne(details, (err, item) => {
            if (err) res.send({ 'error': 'an error has occured' + err });
            else res.send(item);
        })
    })

    app.put('/items/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const item = {
            name: req.body.name,
            description: req.body.description,
            type: req.body.type,
            amount: req.body.amount,
            owner_id: req.body.owner_id,
            created_at: req.body.created_at,
            updated_at: req.body.updated_at,
            photo_URL: req.body.photo_URL,
            lent_to_id: req.body.lent_to_id,
            borrowed_from_id: req.body.borrowed_from_id
        }

        const cleanedItem = removeEmptyProperties(item);
        console.log(cleanedItem);
        db.collection('elements').update(details,{$set: cleanedItem}, (err, result) => {
            if (err) res.send({ 'error': 'an error has occured: ' + err });
            else res.send(result);
        })
    })

    app.delete('/items/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('elements').deleteOne(details, (err, item) => {
            if (err) res.send({ 'error': 'an error has occured' + err });
            else res.send('item ' + id + ' deleted');
        })
    })
};

//TODO: Move this to an Util module or something like that
//Stolen from stackoverflow
const removeEmptyProperties = obj =>
  Object.keys(obj)
    .filter(k => obj[k] !== null && obj[k] !== undefined) // Remove undef. and null.
    .reduce(
      (newObj, k) =>
        typeof obj[k] === "object"
          ? Object.assign(newObj, { [k]: removeEmptyProperties(obj[k]) }) // Recurse.
          : Object.assign(newObj, { [k]: obj[k] }), // Copy value.
      {}
    );