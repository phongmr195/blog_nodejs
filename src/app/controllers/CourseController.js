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
}

module.exports = new CourseController();
