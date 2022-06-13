const Course = require('../models/Course');
const {
    multipleMongooseToObject,
    mongooseToObject,
} = require('../../utils/mongoose');

class CourseController {
    /**
     * Show detail course
     */
    show(req, res, next) {
        Course.findOne({
            slug: req.params.course_slug,
        })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    /**
     * Create new course
     */
    store(req, res, next) {
        const params = req.body;
        const course = new Course(params);
        course
            .save()
            .then(() => {
                res.redirect('/');
            })
            .catch(next);
    }

    /**
     * Update course
     */
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }

    /**
     * Delete course
     */
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }
    /**
     * Delete force course
     */
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }

    /**
     * Restore course
     */
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => {
                res.redirect('back');
            })
            .catch(next);
    }
}

module.exports = new CourseController();
