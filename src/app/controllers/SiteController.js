class SiteController {
    //[GET] /home
    index(res, req) {
        req.render('home');
    }

    //[GET] /search
    search(res, req) {
        req.render('search');
    }
}

module.exports = new SiteController();
