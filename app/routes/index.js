const elementRoutes = require('./element_routes');

module.exports = function(app, db) {
  elementRoutes(app, db);
  // TODO: create routes for users (lenders and borrowers)
};