class PageController {
    /**
     * Show home
     *
     * @param mixed req
     * @param mixed res
     */
     index(req, res)
     {
         return res.render('home');
     }
}

module.exports = new PageController;