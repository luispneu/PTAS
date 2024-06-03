const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/", (req, res) => {
    res.render("formCaastro");
});

app.get("/usuario/:id", (req, res) => {
     let usuario = {}
    res.render("usuario", {
        nome,
        id: req.params.id,
    });
});

app.listen(8000, () => {
    console.log("Servidor Rodando!!");
});
