const mongoose = require('mongoose');
const Course = require('../Models/Course')
const { mutipleMongooseToObject} = require('../../ulti/mongoose')


class SiteController {
    //[GET] /home
    index(req, res,next) {

        // Course.find({}, function(err,courses){
        //     if (!err)
        //         res.json(courses)
        //     else{
        //         res.status(400).json({error : 'ERORR !!!'})
        //     }
        // })
        Course.find({})
            .then(course => {
                res.render('home', {
                    course: mutipleMongooseToObject(course)
                })
            })
            .catch(next)

        //req.render('home');
    }

    //[GET] /search
    search(res, req) {
        req.render('search');
    }
}

module.exports = new SiteController();
