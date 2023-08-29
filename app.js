const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;

const PORT = 3000;
const app = express();

app.listen(PORT, () => `Server started on port ${PORT}`);