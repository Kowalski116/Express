const mongoose = require('mongoose');
const Course = require('../Models/Course')
const { mongooseToObject} = require('../../ulti/mongoose')

class CourseController {

    //[GET] /course/:slug
    show(req, res, next) {
        Course.findOne({slug: req.params.slug})
            .then(course => {
                console.log(req.param.slug)
                res.render('courses/show', { course: mongooseToObject(course) });
            })
            .catch(next)
    }

    //[GET] /course/create
    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const formData = req.body
        formData.image = 'https://i.pinimg.com/736x/c1/30/ea/c130ea521d426d9608d2bbd344ae52ef.jpg'
        const course = new Course(req.body)
        course.save()
            .then(() => res.redirect('/'))
            .catch(error => {})
    }
    //[GET] /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit',{
                course: mongooseToObject(course)
            }))
            .catch(next)
        
    }
    //[PUT] /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id},req.body)
            .then(course => res.redirect('/me/stored/courses'))
            .catch(next)
        
    }
    //[PATCH] /course/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id})
            .then(course => res.redirect('back'))
            .catch(next)
        
    }
    //[DELETE] /course/:id
    destroy(req, res, next) {
        Course.delete({ _id: req.params.id})
            .then(course => res.redirect('back'))
            .catch(next)
        
    }

    forceDestroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id})
            .then(course => res.redirect('back'))
            .catch(next)
        
    }
    //[POST] /course/handle-form-actions
    handleFormActions(req, res, next){
        switch(req.body.action) {
            case 'delete':
                Course.delete({ _id: {$in: req.body.courseIds}})
                    .then(course => res.redirect('back'))
                    .catch(next)
            break;
        default:
            res.json({message: "error"})
        }
    }
}

module.exports = new CourseController();
