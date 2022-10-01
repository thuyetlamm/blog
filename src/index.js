import express from "express";
import { engine } from "express-handlebars";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import route from "./routes/index.js";
import { connectDB } from "./config/mongodb.js";
import { env } from "./config/environment.js";
const app = express();
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
connectDB().catch(console.log);
//route init
route(app);
app.listen(env.PORT, () => {
  console.log(`Example app listening on port ${env.PORT}`);
});
