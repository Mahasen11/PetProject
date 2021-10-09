import express from "express";
import path from "path";
import bodyParser from "body-parser";
import exphbs from "express-handlebars";
import * as home from "./home";


const app= express();

app.use(express.urlencoded({extended:false}));
app.use(bodyParser.json());

//express configuration

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "../web/views"));
app.engine('handlebars', exphbs());
app.set("view engine", "handlebars");
app.use(express.static(path.join(__dirname,"public"), {maxAge: 31557600000}));

export default app;

app.get("/" , home.index);      