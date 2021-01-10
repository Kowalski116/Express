const mongoose = require('mongoose');
const Course = require('../Models/Course')
const { mutipleMongooseToObject} = require('../../ulti/mongoose')


class MeController {

    //[GET] /me/stored/courses
    storedCourses(req, res,next) {
        Promise.all([
            Course.find({}).sortable(req),
            Course.countDocumentsDeleted()
        ])
            .then(([course,deletedCount]) => res.render('me/stored-courses', {
                deletedCount,
                course : mutipleMongooseToObject(course)}
                ))
            .catch( () => {} )
    }
    //[GET] /me/trash/courses
    trashCourses(res, req,next) {
        Course.findDeleted({})
            .then(course => req.render('me/trash-courses', {
            course : mutipleMongooseToObject(course)}
            ))
    }
}

module.exports = new MeController();
