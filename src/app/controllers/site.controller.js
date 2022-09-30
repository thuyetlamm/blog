class SiteController {
  home(req, res) {
    //GET /news
    res.render("home");
  }
  search(req, res) {
    //GET /news
    res.render("search");
  }
}

export default new SiteController();
