const routes = require('next-routes');

module.exports = routes()
    .add('start', '/', 'index')
    .add('film', '/film/:id', 'film')
    .add('filmDefault', '/film', 'index')
    .add('search', '/search/:searchString', 'index')
    .add('searchDefault', '/search', 'index')
    .add('error', '/:something', 'error');
