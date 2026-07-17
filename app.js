const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "Student App Default";
const DB_USER = process.env.DB_USER || "Not Found";
const DB_PASSWORD = process.env.DB_PASSWORD || "Not Found"

app.get("/", (req, res) => {
    res.send(`
Application : ${APP_NAME}

Database User : ${DB_USER}

Database Password : ${DB_PASSWORD}
`);
});

app.listen(PORT, () => {
    console.log(`${APP_NAME} is running on port ${PORT}`);
});

