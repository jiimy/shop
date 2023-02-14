const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
var cors = require("cors");
app.use(cors());

app.listen(8090, function () {
  console.log("listening on 8080");
});

app.use(express.static(path.join(__dirname, "shop/build")));

app.get("/", function (요청, 응답) {
  응답.sendFile(path.join(__dirname, "/shop/build/index.html"));
});