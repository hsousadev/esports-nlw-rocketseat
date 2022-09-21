import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.json([
    { id: 1, name: "name 1" },
    { id: 2, name: "name 2" },
    { id: 3, name: "name 3" },
    { id: 4, name: "name 4" },
  ]);
});

app.listen(3000);
