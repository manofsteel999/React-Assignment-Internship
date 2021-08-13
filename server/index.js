const express = require("express");
const app = express();
const http = require("http");
const mongoose = require("mongoose");
const server = http.createServer(app);
const userRoute = require("./routes/userRoute");
var cors = require("cors");

app.use(cors());
app.use(express.json());

const mongodbUrl =
  "mongodb+srv://avineshgupta:avineshgupta000@cluster0.jwrly.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error));

app.use("/", userRoute);

server.listen(5000, () => {
  console.log("listening on *:3000");
});
