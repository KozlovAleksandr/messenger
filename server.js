/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("dist"));

app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/index.html"));
});

app.listen(port, () => {
    console.log(`Сервер запущен по адресу http://localhost:${port}`);
});
