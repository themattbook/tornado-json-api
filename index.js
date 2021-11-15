const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/api/v1", async (req, res) => {
  await fs.readFile(`./data/welcome.json`, (err, data) => {
    if (err) {
      res
        .status(404)
        .send("The query entered does not match any data. Please try again.");
    } else {
      res.send(JSON.parse(data));
    }
  });
});

// Fetch tornado data from 1950-2007
app.get("/api/v1/:fileQuery", async (req, res) => {
  const { fileQuery } = req.params;
  await fs.readFile(`./data/${fileQuery}.json`, (err, data) => {
    if (err) {
      res
        .status(404)
        .send("The query entered does not match any data. Please try again.");
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
