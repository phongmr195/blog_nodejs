class NewsController {
    /**
     * Show list news
     *
     * @param mixed req
     * @param mixed res
     */
    index(req, res)
    {
        return res.render('news');
    }

    /**
     * Show detail news
     */
    show(req, res)
    {
        return res.send('123');
    }
}

module.exports = new NewsController;