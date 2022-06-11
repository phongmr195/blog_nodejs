const newsRouter = require('./news');
const staticRouter = require('./static');
const courseRouter = require('./course');

function routes(app) {
    app.use('/news', newsRouter);
    app.use('/courses', courseRouter);
    app.use('/', staticRouter);
}

module.exports = routes;
