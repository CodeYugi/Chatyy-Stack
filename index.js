import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.listen(7777, () => {
  console.log("Server is running on http://localhost:7777");
});
