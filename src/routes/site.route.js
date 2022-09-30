import express from "express";
import SiteController from "../app/controllers/site.controller.js";
const siteRouter = express.Router();

siteRouter.use("/", SiteController.home);
siteRouter.use("/", SiteController.search);

export { siteRouter };
