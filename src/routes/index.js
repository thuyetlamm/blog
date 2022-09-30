import { siteRouter } from "../routes/site.route.js";
import { newsRouter } from "../routes/news.route.js";

function route(app) {
  app.get("/news", newsRouter);
  app.get("/search", siteRouter);
  app.get("/", siteRouter);
}

export default route;
