class NewsController {
    //[GET] /news
    index(res, req) {
        req.render('news');
    }

    //[GET] /news/:slug
    show(res, req) {
        req.send('DETAIL');
    }
}

module.exports = new NewsController();
