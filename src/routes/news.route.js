import express from "express";
import NewsController from "../app/controllers/news.controller.js";
const newsRouter = express.Router();

newsRouter.use("/", NewsController.index);

export { newsRouter };
