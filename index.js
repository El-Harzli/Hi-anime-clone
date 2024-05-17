import express from "express";
import bodyParser from "body-parser";
import path, {dirname} from "path";
import { fileURLToPath } from 'url';
import axios from "axios"
import ejs from "ejs";

const app = express();
const port = 3000;

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/home", (req, res) => {
    res.render("home.ejs");
});

app.get("/movies", (req, res) => {
    res.send("movies");
});

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});

