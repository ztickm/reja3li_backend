const itemRoutes = require('./item_routes');

module.exports = function(app, db) {
  itemRoutes(app, db);
  // TODO: create routes for users (lenders and borrowers)
};