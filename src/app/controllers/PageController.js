const Course = require('../models/Course');

class PageController {
    /**
     * Show home
     *
     * @param mixed req
     * @param mixed res
     */
    index(req, res) {
        Course.find({}, function (err, courses) {
            if (!err) return res.json(courses);
            return res.status(400).json({ error: 'Server error' });
        });
    }
}

module.exports = new PageController();
