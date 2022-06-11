const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../utils/mongoose');

class PageController {
    /**
     * Show home
     *
     * @param mixed req
     * @param mixed res
     */
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new PageController();
