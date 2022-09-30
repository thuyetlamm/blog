import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import route from "./routes/index.js";
const app = express();
const port = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//http logged
app.use(morgan("combined"));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
//template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));
//route init
route(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
