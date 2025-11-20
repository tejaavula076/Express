const express = require("express");
const app = express();
let port = 3000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", [
  path.join(__dirname, "views"),
  path.join(__dirname, "includes")
]);


app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.render("index.ejs")
// })
app.listen(port, () => {
    console.log("The port is listening")
});

app.get('/random', (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;
    res.render("index.ejs", { diceVal })
})

app.get('/ig/:username', (req, res) => {
    const instData = require('./data.json');
    let { username } = req.params;
    let dataOfThatUser = instData[username];
    if (dataOfThatUser) {
        res.render('instagram.ejs', { dataOfThatUser })
    } else {
        res.render('error.ejs')
    }

    // console.log(dataOfThatUser.posts)
})

// app.get("/apple", (req, res) => {
//     res.send("ypu contacted apple path")
// });
// app.get("/teja", (req, res) => {
//     res.send("ypu contacted teja path")
// });
// app.get("/", (req, res) => {
//     res.send("ypu contacted main path")
// });

// app.get(/.*/, (req, res) => {
//     res.send("ypu contacted wrong path")
// });
// app.use((req, res) => {
//     res.send("req recieved");
//     // res.send("this is an object")
//     res.send('<p>Hi There<\p>')
//     // res.send("this is an object")
// })
