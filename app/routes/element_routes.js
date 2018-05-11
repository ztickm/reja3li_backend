let ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {

    app.post('/lentelements', (req, res) => {
        const note = {
            name: req.body.name, description: req.body.description,
            photoURL: req.body.photoURL, lender_id: req.body.lender_id,
            borrower_id: req.body.borrower_id
        }
        db.collection('elements').insert(note, (err, result) => {
            if (err) res.send({ 'error': 'an errors has occured' + err })
            else res.send(result.ops[0])

        })
    });

    app.get('/lentelements/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('elements').findOne(details, (err, item) => {
            if (err) res.send({ 'error': 'an errors has occured' + err });
            else res.send(item);
        })
    })

    //TODO: add some conditional logic to update the fields only if they’re present in the request
    app.put('/lentelements/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const note = {
            name: req.body.name, description: req.body.description,
            photoURL: req.body.photoURL, lender_id: req.body.lender_id,
            borrower_id: req.body.borrower_id
        }
        db.collection('elements').update(details, note, (err, item) => {
            if (err) res.send({ 'error': 'an errors has occured' + err });
            else res.send(item);
        })
    })
    app.delete('/lentelements/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('elements').remove(details, (err, item) => {
            if (err) res.send({ 'error': 'an errors has occured' + err });
            else res.send('item ' + id + ' deleted');
        })
    })
};