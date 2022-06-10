const newsRouter = require('./news');
const staticRouter = require('./static');

function routes(app)
{
    app.use('/news', newsRouter);
    app.use('/', staticRouter);
}

module.exports = routes;