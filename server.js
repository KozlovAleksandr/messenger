// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const express = require("express");

const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT || 3000;

app.use(express.static("dist"));

app.listen(port, () => {
    console.log(`Сервер запущен по адресу http://localhost:${port}`);
});
