const mangaRouter = require('./mangaRouter');
const userRouter = require('./userRouter');


function router(app) {
    app.use('/', userRouter);
    app.use('/manga', mangaRouter);
}
module.exports = router;