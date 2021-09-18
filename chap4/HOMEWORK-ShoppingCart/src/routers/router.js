const homeRouter = require('./homeRouter');
const cartRouter = require('./cartRouter');
const historyRouter = require('./historyRouter');

function router(app) {
    app.use('/history', historyRouter);
    app.use('/cart', cartRouter);
    app.use('/', homeRouter);
}


module.exports = router;