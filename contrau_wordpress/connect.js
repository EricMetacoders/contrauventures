const express = require("express");
const app = express();
const Sequelize = require("sequelize");

const sequelize = new Sequelize("contrau_wordpress", "bn_contrau", null, {
    dialect: 'mariadb',
    host: 'localhost'
});

app.get("/", (req, res) => {
    res.send("Hello World");
});

sequelize
    .sync()
    .then((resut) => {
        app.listen(8081);
    })
    .catch((err) => {console.log(err)});