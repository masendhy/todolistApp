// ejshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const port = 8000;
const app = express();

let items = [];


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {

    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("us-EN", options);


    res.render("list", { kindOfDay: day, newListItems: items })

});

app.post("/", (req, res) => {
    var item = req.body.newItem;

    items.push(item);
    res.redirect("/");
});




app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});