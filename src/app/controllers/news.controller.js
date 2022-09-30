class NewsController {
  index(req, res) {
    //GET /news
    res.render("news");
  }
}

export default new NewsController();
