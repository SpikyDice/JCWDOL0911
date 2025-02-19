require("dotenv/config");
const express = require("express");
const cors = require("cors");
const { join } = require("path");

const { relatedProductRouter } = require(`./routers/index`);

const { db, query } = require("./database/index");

const PORT = process.env.PORT || 8000;
const app = express();
app.use(cors());
// app.use(
//   cors({
//     origin: [
//       process.env.WHITELISTED_DOMAIN &&
//         process.env.WHITELISTED_DOMAIN.split(","),
//     ],
//   })
// );

app.use(express.json());
app.use(express.static("public"));

//#region API ROUTES

// ===========================
// NOTE : Add your routes here

app.use(`/product`, relatedProductRouter);

app.get("/api", (req, res) => {
  res.send(`Hello, this is my API`);
});

app.get("/user", async (req, res) => {
  userQuery = `select * from user `;
  const user = await query(userQuery);
  return res.status(200).send({
    success: true,
    user,
    message: "fetching works!",
  });
});

// app.get("/api/greetings", (req, res, next) => {
//   res.status(200).json({
//     message: "Hello, Student !",
//   });
// });

// ===========================

// not found
app.use((req, res, next) => {
  if (req.path.includes("/api/")) {
    res.status(404).send("Not found !");
  } else {
    next();
  }
});

// error
app.use((err, req, res, next) => {
  if (req.path.includes("/api/")) {
    console.error("Error : ", err.stack);
    res.status(500).send("Error !");
  } else {
    next();
  }
});

//#endregion

//#region CLIENT
const clientPath = "../../client/build";
app.use(express.static(join(__dirname, clientPath)));

// Serve the HTML page
app.get("*", (req, res) => {
  res.sendFile(join(__dirname, clientPath, "index.html"));
});

//#endregion

app.listen(PORT, (err) => {
  if (err) {
    console.log(`ERROR: ${err}`);
  } else {
    console.log(`APP RUNNING at ${PORT} ✅`);
  }
});
