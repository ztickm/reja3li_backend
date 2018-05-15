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
            photoURL: req.body.photoURL,
            lent_to_id: req.body.lender_id,
            borrowed_from_id: req.body.borrower_id
        }
        db.collection('elements').insert(item, (err, result) => {
            if (err) res.send({ 'error': 'an errors has occured' + err })
            else res.send(result.ops[0])

        })
    });

    app.get('/items/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('elements').findOne(details, (err, item) => {
            if (err) res.send({ 'error': 'an errors has occured' + err });
            else res.send(item);
        })
    })

    //TODO: add some conditional logic to update the fields only if they’re present in the request
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
            photoURL: req.body.photoURL,
            lent_to_id: req.body.lender_id,
            borrowed_from_id: req.body.borrower_id
        }
        db.collection('elements').update(details, item, (err, item) => {
            if (err) res.send({ 'error': 'an errors has occured' + err });
            else res.send(item);
        })
    })

    app.delete('/items/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('elements').remove(details, (err, item) => {
            if (err) res.send({ 'error': 'an errors has occured' + err });
            else res.send('item ' + id + ' deleted');
        })
    })
};