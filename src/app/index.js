const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use('/', require(path.join(__dirname, "router/router.js")));

app.listen(port, () => {
    console.log(`Ecommerce app listening at http://localhost:${port}`);
})