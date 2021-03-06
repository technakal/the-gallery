/**
 * Returns the appropriate credentials, depending on whether the application is deployed or in development.
 */
if (process.env.NODE_ENV === 'production') {
  // use prod keys
  module.exports = require('./prod');
} else {
  // use dev keys
  module.exports = require('./config');
}
