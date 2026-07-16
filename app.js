const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || "Student App Default";

app.get("/", (req, res) => {
    res.send(APP_NAME);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
