import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const port = 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//http logger
app.use(morgan("combined"));
//template engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/search", (req, res) => {
  res.render("search");
  console.log(red.boby);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
