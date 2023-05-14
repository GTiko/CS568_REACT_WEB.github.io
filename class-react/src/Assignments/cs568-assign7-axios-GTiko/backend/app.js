const express = require("express");
const router = require("./router/router");
const app = express();
app.use(express.json());

app.listen(8000, () => {
  console.log("connected on 8000...");
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader("Access-Control-Allow-Headers", "*");
    next();
  });

app.use("/Student", router);

// error handler
app.use((req, res, next) => {
  res.status(404).send("API not supported");
});

app.use((error, req, res, next) => {
  if (error && error.message) {
    res.send(error.message);
  } else {
    res.send("Backend error");
  }
});
